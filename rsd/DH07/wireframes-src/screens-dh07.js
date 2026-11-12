// Wireframe DH07 · Danh sách hồ sơ Tour. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
const { page, drawer, modal, f, B, bd, STATUS } = require('./lib');
const { setLinks, viewSwitch, seg, kanban, calMonth, timeline } = require('./views');
setLinks({ table: 'W01.html', kanban: 'W15.html', cal: 'W17.html' });
const VIEWS = ['table', 'kanban', 'cal'];
const S = {};

// ---------- Dữ liệu minh họa (hôm nay 11/11/2026) ----------
// pt: người phụ trách (null = chưa có). Tải hồ sơ đang mở: Trần Minh Anh 3, Lê Quang Huy 3, Phạm Thu Hà 2, Đỗ Văn Khoa 1, chưa có 4 → 13.
const R = {
  sato: { code: 'TP-2610-0029', bk: 'BK-2610-0118', kh: 'Sato Family', pax: 6, dt: '28/10 – 04/11', nd: '8N7Đ', lang: 'Tiếng Nhật', st: 'end', ind: [['Đã quyết toán', 'g']], todo: ['Chờ đóng Tour', ''], pt: 'Phạm Thu Hà' },
  wagner: { code: 'TP-2611-0031', bk: 'BK-2610-0121', kh: 'Wagner Gruppe', pax: 20, dt: '01/11 – 08/11', nd: '8N7Đ', lang: 'Tiếng Đức', st: 'end', ind: [['Chưa quyết toán', 'a']], todo: ['Chờ đóng Tour', ''], pt: 'Trần Minh Anh' },
  green: { code: 'TP-2611-0035', bk: 'BK-2610-0126', kh: 'Green Path Tours', pax: 10, dt: '06/11 – 13/11', nd: '8N7Đ', lang: 'Tiếng Anh', st: 'run', todo: ['—', ''], pt: 'Lê Quang Huy' },
  nordic: { code: 'TP-2611-0038', bk: 'BK-2610-0129', kh: 'Nordic Explorer AB', pax: 16, dt: '08/11 – 15/11', nd: '8N7Đ', lang: 'Tiếng Anh', st: 'run', todo: ['1 sự cố đang xử lý', 'r'], pt: 'Phạm Thu Hà' },
  tanaka: { code: 'TP-2611-0051', bk: 'BK-2611-0144', kh: 'Tanaka Travel Co.', pax: 12, dt: '14/11 – 19/11', nd: '6N5Đ', lang: 'Tiếng Nhật', st: 'new', isNew: 1, todo: ['5 việc', 'Đặt DV, Checklist, Giấy tờ, Phân phòng, HDV'], pt: null, urgent: 'Khởi hành sau 3 ngày' },
  lefebvre: { code: 'TP-2611-0052', bk: 'BK-2611-0152', kh: 'Lefebvre Famille', pax: 6, dt: '16/11 – 22/11', nd: '7N6Đ', lang: 'Tiếng Pháp', st: 'new', isNew: 1, todo: ['5 việc', 'Đặt DV, Checklist, Giấy tờ, Phân phòng, HDV'], pt: 'Trần Minh Anh' },
  muller: { code: 'TP-2611-0042', bk: 'BK-2610-0137', kh: 'Müller Reisen GmbH', pax: 18, dt: '18/11 – 25/11', nd: '8N7Đ', lang: 'Tiếng Đức', st: 'new', todo: ['3 việc', 'Đặt DV, Giấy tờ, HDV'], pt: 'Trần Minh Anh' },
  dupont: { code: 'TP-2611-0047', bk: 'BK-2611-0140', kh: 'Dupont Voyages', pax: 9, dt: '20/11 – 27/11', nd: '8N7Đ', lang: 'Tiếng Pháp', st: 'new', todo: ['4 việc', 'Đặt DV, Checklist, Giấy tờ, Phân phòng'], pt: 'Lê Quang Huy' },
  smith: { code: 'TP-2611-0049', bk: 'BK-2611-0142', kh: 'Smith Family', pax: 4, dt: '22/11 – 28/11', nd: '7N6Đ', lang: 'Tiếng Anh', st: 'new', ind: [['Booking đã hủy', 'r']], todo: ['Gửi hủy 2 NCC', 'r'], pt: 'Trần Minh Anh' },
  kim: { code: 'TP-2612-0003', bk: 'BK-2611-0146', kh: 'Kim Tours Korea', pax: 22, dt: '02/12 – 07/12', nd: '6N5Đ', lang: 'Tiếng Hàn', st: 'new', isNew: 1, todo: ['5 việc', 'Đặt DV, Checklist, Giấy tờ, Phân phòng, HDV'], pt: null },
  rossi: { code: 'TP-2612-0004', bk: 'BK-2611-0147', kh: 'Rossi Viaggi', pax: 15, dt: '05/12 – 14/12', nd: '10N9Đ', lang: 'Tiếng Ý', st: 'new', isNew: 1, todo: ['5 việc', 'Đặt DV, Checklist, Giấy tờ, Phân phòng, HDV'], pt: null },
  almeida: { code: 'TP-2612-0007', bk: 'BK-2611-0151', kh: 'Almeida Viagens', pax: 7, dt: '12/12 – 18/12', nd: '7N6Đ', lang: 'Tiếng Bồ Đào Nha', st: 'new', todo: ['5 việc', 'Đặt DV, Checklist, Giấy tờ, Phân phòng, HDV'], pt: null },
};
const OPEN10 = ['sato', 'wagner', 'green', 'nordic', 'tanaka', 'muller', 'dupont', 'smith', 'kim', 'rossi'];

const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const todoCell = r => {
  const [a, b] = r.todo;
  if (b === 'r' || b === 'a') return `<span class="b" style="color:${b === 'r' ? '#b91c1c' : '#92400e'}">${a}</span>`;
  if (!b) return a === '—' ? '<span class="muted">—</span>' : `<span class="b">${a}</span>`;
  return `<span class="b">${a}</span><div class="muted small">${b}</div>`;
};
// mode: 'edit' (Điều hành, có ô chọn và ô Phụ trách tại chỗ), 'bulk' (đang chọn: ẩn ô tại chỗ), 'ro' (chỉ xem)
function rowHtml(k, { mode = 'edit', sel = false, cls = '', open = false } = {}) {
  const r = R[k];
  const st = STATUS[r.st];
  const inds = (r.ind || []).map(([t, c]) => ind(t, c)).join('') + (r.isNew ? ind('Mới', 'b') : '');
  let ptc;
  if (mode === 'edit') {
    ptc = r.pt ? `<span class="isel">${r.pt}</span>` : `<span class="isel ${r.urgent ? 'red' : 'ph'} ${open ? 'open' : ''}">Chọn người</span>${r.urgent ? `<div class="small" style="color:#b91c1c">${r.urgent}</div>` : ''}`;
  } else ptc = r.pt ? r.pt : '<span class="muted">Chưa có</span>';
  const cb = mode === 'ro' ? '' : `<td style="width:26px"><span class="cb ${sel ? 'on' : ''}"></span></td>`;
  return `<tr class="${sel ? 'sel' : ''} ${cls}">${cb}<td><b style="color:#1d4ed8">${r.code}</b><div class="muted small">${r.bk}</div></td>
<td><span class="b">${r.kh}</span><div class="muted small">${r.pax} khách</div></td><td>${r.dt}/2026<div class="muted small">${r.nd}</div></td><td>${r.lang}</td>
<td>${bd(st[0], st[1])}${inds ? `<div style="margin-top:2px">${inds}</div>` : ''}</td><td>${todoCell(r)}</td><td style="position:relative">${ptc}</td></tr>`;
}
function table(keys, o = {}) {
  const head = o.mode === 'ro' ? '' : `<th style="width:26px"><span class="cb ${o.all ? 'on' : ''}"></span></th>`;
  return `<div class="tbl"><table><tr>${head}<th>Tour Code · Booking</th><th>Khách</th><th>Thời gian ▲</th><th>Ngôn ngữ</th><th>Trạng thái</th><th>Cần xử lý</th><th style="width:170px">Phụ trách</th></tr>
${keys.map(k => rowHtml(k, Object.assign({}, o, { sel: (o.sel || []).includes(k), cls: (o.hl || []).includes(k) ? 'new' : '', open: o.open === k }))).join('')}</table></div>`;
}
const chips = (c, on = 'open') => `<div class="flex" style="margin:0 0 8px">${[['open', 'Đang mở'], ['new', 'Mới tạo'], ['run', 'Đang diễn ra'], ['end', 'Đã kết thúc'], ['closed', 'Đã đóng']].map(([k, n]) => `<span class="chip ${k === on ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}<span class="ml"></span>${viewSwitch(VIEWS, 'table')}</div>`;
const C_DEF = { open: 13, new: 9, run: 2, end: 2, closed: 38 };
const toolbar = ({ q = '', pt = 'Tất cả', qt = 'Tất cả', kh = 'Tất cả' } = {}) => `<div class="toolbar" style="margin-top:0">
<div class="input ${q ? '' : 'ph'}" style="width:300px">🔍&nbsp; ${q || 'Tìm Tour Code, Booking, tên khách'}</div>
<div class="input sel" style="width:180px"><span class="muted">Khởi hành:&nbsp;</span>${kh}</div>
<div class="input sel ${pt !== 'Tất cả' ? 'focus' : ''}" style="width:230px"><span class="muted">Phụ trách:&nbsp;</span>${pt}</div>
<div class="input sel" style="width:190px"><span class="muted">Quyết toán:&nbsp;</span>${qt}</div>
${pt !== 'Tất cả' || q ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
// v1.5: hồ sơ tự tạo khi lưu Booking; dải chỉ còn Booking tạo lỗi.
const strip = (n, near) => `<div class="strip"><span class="ico w">!</span><div style="flex:1"><b>${n} Booking chưa có hồ sơ Tour</b> <span class="muted">· <span style="color:#b91c1c">tạo lỗi</span> · gần nhất khởi hành ${near}</span></div>${B('Xem Booking chờ', 'sm')}</div>`;
const STRIP = strip(1, '09/12/2026');
const title = (sub = '') => `<div class="ttl"><h1>Hồ sơ Tour</h1>${sub ? `<span class="muted">${sub}</span>` : ''}</div>`;

const listDH = (o = {}) => title() + (o.noStrip ? '' : STRIP) + toolbar(o.tb) + (o.banner || '') + chips(o.c || C_DEF, o.chip) + (o.bulk || '') + (o.body || table(o.keys || OPEN10, o.t || {}));

// ---------- W01 Danh sách mặc định của Điều hành ----------
S.W01 = page({ bell: 3, body: listDH() });

// ---------- W02 Thông báo hồ sơ mới cần giao ----------
const notif = `<div class="menu" style="right:16px;top:40px;width:400px">
<div class="flex" style="padding:4px 12px 8px;border-bottom:1px solid #f1f5f9"><b>Thông báo</b><span class="ml muted small">3 chưa đọc</span></div>
<div class="mi on" style="align-items:flex-start"><span class="ico i">+</span><div><b>TP-2612-0004 · Rossi Viaggi</b> được tạo tự động khi Booking BK-2611-0147 được lưu. Chưa có người phụ trách.<div class="muted small">10 phút trước</div></div></div>
<div class="mi" style="align-items:flex-start;background:#fef2f2"><span class="ico e">!</span><div><b>TP-2611-0051 · Tanaka Travel Co.</b> khởi hành sau 3 ngày nhưng chưa có người phụ trách.<div class="muted small">08:00 hôm nay</div></div></div>
<div class="mi" style="align-items:flex-start"><span class="ico i">+</span><div><b>TP-2612-0003 · Kim Tours Korea</b> được tạo tự động khi Booking BK-2611-0146 được lưu. Chưa có người phụ trách.<div class="muted small">Hôm qua 16:20</div></div></div>
<div style="padding:8px 12px 2px;border-top:1px solid #f1f5f9;text-align:center">${B('Xem tất cả thông báo', 'lk')}</div></div>`;
S.W02 = page({ bell: 3, body: listDH(), overlay: notif });

// ---------- W03 Lọc hồ sơ chưa có người phụ trách ----------
const C_UN = { open: 4, new: 4, run: 0, end: 0, closed: 0 };
const UN4 = ['tanaka', 'kim', 'rossi', 'almeida'];
S.W03 = page({ bell: 2, body: listDH({ tb: { pt: 'Chưa có người phụ trách' }, c: C_UN, keys: UN4 }) });

// ---------- W04 Giao người phụ trách tại chỗ ----------
const pick = `<div class="menu" style="right:30px;top:332px;width:330px">
<div class="mh2">Giao cho · đoàn Tiếng Nhật</div>
<div class="mi on"><div style="flex:1"><b>Phạm Thu Hà</b> ${ind('Khớp ngôn ngữ', 'g')}<div class="muted small">Anh, Nhật · 2 hồ sơ đang mở</div></div></div>
<div class="mi"><div style="flex:1"><b>Đỗ Văn Khoa</b><div class="muted small">Hàn, Anh · 1 hồ sơ đang mở</div></div></div>
<div class="mi"><div style="flex:1"><b>Lê Quang Huy</b><div class="muted small">Anh, Pháp · 3 hồ sơ đang mở</div></div></div>
<div class="mi"><div style="flex:1"><b>Trần Minh Anh</b> <span class="muted">(Tôi)</span><div class="muted small">Anh, Đức · 3 hồ sơ đang mở</div></div></div></div>`;
S.W04 = page({ bell: 2, body: listDH({ tb: { pt: 'Chưa có người phụ trách' }, c: C_UN, keys: UN4, t: { open: 'tanaka' } }), overlay: pick });

// ---------- W05 Đã giao: dòng ra khỏi bộ lọc ----------
const toast = (t, a) => `<div class="toast"><span>${t}</span>${a ? `<a>${a}</a>` : ''}</div>`;
S.W05 = page({ bell: 2, body: listDH({ tb: { pt: 'Chưa có người phụ trách' }, c: { open: 3, new: 3, run: 0, end: 0, closed: 0 }, keys: ['kim', 'rossi', 'almeida'] }), overlay: toast('✓ Đã giao TP-2611-0051 cho Phạm Thu Hà. Hồ sơ đã ra khỏi bộ lọc.', 'Xem dòng') });

// ---------- W06 Chọn nhiều hồ sơ, giao hàng loạt ----------
const bulk = `<div class="bulk"><span class="cb on" style="background:#fff;border-color:#fff"></span><b>Đã chọn 3 hồ sơ</b><span style="opacity:.8">· Tiếng Hàn, Tiếng Ý, Tiếng Bồ Đào Nha</span><span class="ml"></span>
<span>Giao cho</span><span class="isel" style="color:#111827;min-width:170px">Đỗ Văn Khoa</span>${B('Áp dụng', 'sm p')}${B('Bỏ chọn', 'sm')}</div>`;
S.W06 = page({ bell: 2, body: listDH({ tb: { pt: 'Chưa có người phụ trách' }, c: { open: 3, new: 3, run: 0, end: 0, closed: 0 }, bulk, keys: ['kim', 'rossi', 'almeida'], t: { mode: 'bulk', all: 1, sel: ['kim', 'rossi', 'almeida'] } }) });

// ---------- W07 Kết quả giao hàng loạt một phần ----------
const res = `<div class="banner w" style="margin-bottom:10px"><span class="ico w">!</span><div style="flex:1"><b>Đã giao 2/3 hồ sơ cho Đỗ Văn Khoa</b> (TP-2612-0003, TP-2612-0007). <br>Bỏ qua TP-2612-0004: hồ sơ vừa được Lê Quang Huy giao cho Phạm Thu Hà lúc 10:42, ở phiên khác.</div>${B('Xem 3 hồ sơ vừa xử lý', 'sm')}</div>`;
S.W07 = page({ bell: 2, body: listDH({ tb: { pt: 'Chưa có người phụ trách' }, c: { open: 0, new: 0, run: 0, end: 0, closed: 0 }, banner: res, body: `<div class="tbl"><div class="empty"><div class="big">✓ Mọi hồ sơ đang mở đã có người phụ trách</div>Không còn hồ sơ khớp bộ lọc Phụ trách: Chưa có người phụ trách.</div></div>` }) });

// ---------- W08 Bảng trượt Booking chưa có hồ sơ ----------
const wb = `<div class="muted small" style="margin-bottom:8px">Hồ sơ Tour được tạo tự động ngay khi Booking được lưu. Danh sách này chỉ gồm Booking tạo hồ sơ bị lỗi sau 3 lần tự thử lại; bấm Thử lại để tạo. Số đã thu lấy từ Kế toán, chỉ để tham khảo.</div>
<div class="tbl"><table><tr><th>Booking · khách</th><th>Khởi hành</th><th>Lỗi</th><th>Đã thu (tham khảo)</th><th>Kinh doanh</th><th></th></tr>
<tr class="grp"><td colspan="6">Tạo lỗi (1)</td></tr>
<tr class="bad"><td><b class="lnk">BK-2611-0157</b><div class="small">Hoffmann Reisen · 11 khách</div></td><td>09/12/2026<div class="small muted">sau 28 ngày</div></td><td><span class="ind r">Tạo lỗi</span><div class="small" style="color:#991b1b">Lỗi hệ thống, đã tự thử lại 3 lần</div><div class="small muted">Lần cuối 11/11 09:28</div></td><td class="small">0 / 88.000.000 ₫</td><td class="small">Nguyễn Hoàng Nam</td><td>${B('Thử lại', 'sm p')}</td></tr>
</table></div>`;
S.W08 = page({ bell: 3, body: listDH(), overlay: drawer('Booking chưa có hồ sơ Tour <span class="cnt w">1</span>', wb, B('Đóng'), { wide: true, sub: 'Booking Hiệu lực, tạo hồ sơ lỗi · sắp theo ngày khởi hành' }) });

// ---------- W11 Kế toán: hồ sơ Đã kết thúc để vào quyết toán ----------
S.W11 = page({ user: 'kt', body: title('Chỉ xem') + toolbar() + chips(C_DEF, 'end') + table(['sato', 'wagner'], { mode: 'ro' }) + `<div class="muted small" style="margin-top:8px">Bấm một dòng Đã kết thúc để mở thẳng tab Quyết toán của hồ sơ.</div>` });

// ---------- W12 Kinh doanh: chỉ hồ sơ của Booking mình phụ trách ----------
S.W12 = page({ user: 'kd', body: title('Chỉ xem · hồ sơ của Booking bạn phụ trách') + toolbar() + chips({ open: 4, new: 4, run: 0, end: 0, closed: 11 }) + table(['tanaka', 'muller', 'smith', 'kim'], { mode: 'ro' }) });

// ---------- W13 Không có kết quả khớp tìm kiếm ----------
S.W13 = page({ bell: 3, body: title() + STRIP + toolbar({ q: 'Lefevre' }) + chips({ open: 0, new: 0, run: 0, end: 0, closed: 0 }) + `<div class="tbl"><div class="empty"><div class="big">Không có hồ sơ khớp “Lefevre”</div>Kiểm tra lại chính tả hoặc xóa bộ lọc. Booking chưa có hồ sơ Tour (tạo lỗi) nằm trong mục Booking chờ ở trên.</div></div>` });

// ---------- W14 Lỗi tải danh sách ----------
S.W14 = page({ bell: 3, body: title() + `<div class="card" style="margin-top:20px"><div class="empty"><div class="big"><span class="ico e">!</span> Không tải được danh sách hồ sơ Tour</div>Kết nối tới máy chủ bị gián đoạn. Bộ lọc của bạn được giữ nguyên.<div style="margin-top:12px">${B('Thử lại', 'p')}</div></div></div>` });

// =================== Dạng xem Kanban và Lịch (v1.2) ===================
// Hai hồ sơ Mới tạo không hiện ở trang 1 của Bảng, nay cần cho Kanban và dòng thời gian (khớp tải: Huy 3, Khoa 1).
R.lind = { code: 'TP-2611-0055', bk: 'BK-2611-0149', kh: 'Lindgren Resor', pax: 8, dt: '30/11 – 05/12', nd: '6N5Đ', lang: 'Tiếng Anh', st: 'new', todo: ['4 việc', 'Đặt DV, Checklist, Giấy tờ, HDV'], pt: 'Lê Quang Huy' };
R.park = { code: 'TP-2612-0006', bk: 'BK-2611-0150', kh: 'Park Family', pax: 5, dt: '03/12 – 08/12', nd: '6N5Đ', lang: 'Tiếng Hàn', st: 'new', todo: ['3 việc', 'Đặt DV, Giấy tờ, Phân phòng'], pt: 'Đỗ Văn Khoa' };
const NEW9 = ['tanaka', 'muller', 'dupont', 'smith', 'lind', 'kim', 'park', 'rossi', 'almeida'];
// Thẻ Kanban: cùng dữ liệu và cùng ô Phụ trách tại chỗ như dòng (R08). mode: edit | ro
const kc = (k, { mode = 'edit', open = false } = {}) => {
  const r = R[k];
  const inds = (r.ind || []).map(([t, c]) => ind(t, c)).join('') + (r.isNew ? ind('Mới', 'b') : '');
  const ptc = mode === 'edit'
    ? (r.pt ? `<span class="isel">${r.pt}</span>` : `<span class="isel ${r.urgent ? 'red' : 'ph'} ${open ? 'open' : ''}">Chọn người</span>${r.urgent ? `<span class="small" style="color:#b91c1c">${r.urgent}</span>` : ''}`)
    : `<span class="muted small">Phụ trách</span> ${r.pt || '<span class="muted">Chưa có</span>'}`;
  return `<div class="kc ${r.urgent ? 'hot' : ''}"><div class="t"><b>${r.code}</b><span class="muted small">${r.bk}</span><span class="ml">${inds}</span></div>
<div class="b" style="margin-top:2px">${r.kh} <span class="muted small" style="font-weight:400">· ${r.pax} khách</span></div>
<div class="muted small">${r.dt}/2026 · ${r.nd} · ${r.lang}</div>
<div class="r small"><span class="muted">Cần xử lý</span> ${todoCell(r).replace('<div class="muted small">', '<span class="muted">').replace('</div>', '</span>')}</div>
<div class="r" style="position:relative">${ptc}</div></div>`;
};
const H = (st, n, extra = '') => `${bd(STATUS[st][0], STATUS[st][1])}<span class="cnt">${n}</span>${extra}`;
const foldCol = n => ({ fold: 1, h: `${bd('Đã đóng', 'b-gray')}<span class="cnt">${n}</span>`, cards: [`<div class="muted small" style="padding:4px 2px">Thu gọn để danh sách hằng ngày không lẫn hồ sơ cũ.</div>${B('Mở rộng cột', 'sm')}`] });
const viewRow = (view, note, extra = '') => `<div class="flex" style="margin:0 0 8px"><span class="muted small">${note}</span>${extra}<span class="ml"></span>${viewSwitch(VIEWS, view)}</div>`;
const kbDH = (o = {}) => kanban([
  { h: H('new', 9, '<span class="ml muted small" style="font-weight:400">khởi hành ▲</span>'), cards: NEW9.map(k => kc(k, { open: o.open === k })), fade: 'Cuộn để xem 9 / 9' },
  { h: H('run', 2), cards: ['green', 'nordic'].map(k => kc(k)) },
  { h: H('end', 2), cards: ['sato', 'wagner'].map(k => kc(k)) },
  foldCol(38),
], '1fr 1fr 1fr 150px');

// ---------- W15 Kanban của Điều hành ----------
S.W15 = page({ bell: 3, body: title() + STRIP + toolbar() + viewRow('kanban', 'Kanban · cột là trạng thái hồ sơ, thay cho hàng chip · bấm thẻ để mở hồ sơ') + kbDH() });

// ---------- W16 Giao người phụ trách ngay trên thẻ ----------
const pickK = pick.replace('style="right:30px;top:332px;width:330px"', 'style="left:200px;top:404px;width:330px"');
S.W16 = page({ bell: 3, body: title() + STRIP + toolbar() + viewRow('kanban', 'Kanban · cột là trạng thái hồ sơ, thay cho hàng chip · bấm thẻ để mở hồ sơ') + kbDH({ open: 'tanaka' }), overlay: pickK });

// ---------- W17 Dòng thời gian theo người phụ trách (Điều hành) ----------
// 35 ngày từ Thứ 2 02/11 đến Chủ nhật 06/12/2026; hôm nay 11/11 là cột 10.
const DAYS = []; const DOWS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
for (let i = 0; i < 35; i++) { const d = i < 29 ? i + 2 : i - 28; DAYS.push([`${DOWS[i % 7]}<br>${String(d).padStart(2, '0')}`, d === 11 && i < 29 ? 'td' : i % 7 >= 5 ? 'we' : '']); }
const COL = { new: 'gray2', run: 'blue', end: 'violet', closed: 'gray' };
// s: cột bắt đầu (1 = 02/11), n: số ngày trong khoảng
const tb = (k, s, n, o = {}) => { const r = R[k]; return Object.assign({ s, n, t: `${o.warn ? o.warn + ' · ' : ''}${r.code} · ${r.kh}`, c: r.pt ? COL[r.st] : 'dash' }, o); };
const TL_ROWS = [
  { h: '<b style="color:#b91c1c">Chưa có người phụ trách</b>', sub: '4 hồ sơ · 1 sau 06/12', cls: 'un', ev: [tb('tanaka', 13, 6), tb('kim', 31, 5, { r: 1 }), tb('rossi', 34, 2, { r: 1 })] },
  { h: '<b>Trần Minh Anh</b> <span class="muted">(Tôi)</span>', sub: 'Anh, Đức · 3 hồ sơ', ev: [tb('wagner', 1, 7, { l: 1 }), tb('muller', 17, 8), tb('smith', 21, 7, { warn: '⚠ Booking đã hủy' })] },
  { h: '<b>Lê Quang Huy</b>', sub: 'Anh, Pháp · 3 hồ sơ', ev: [tb('green', 5, 8), tb('dupont', 19, 8), tb('lind', 29, 6)] },
  { h: '<b>Phạm Thu Hà</b>', sub: 'Anh, Nhật · 2 hồ sơ', ev: [tb('sato', 1, 3, { l: 1 }), tb('nordic', 7, 8)] },
  { h: '<b>Đỗ Văn Khoa</b>', sub: 'Hàn, Anh · 1 hồ sơ', ev: [tb('park', 32, 4, { r: 1 })] },
];
const tlHead = `<div class="flex" style="margin:0 0 8px">${B('‹', 'sm')}<b style="font-size:14px">02/11 – 06/12/2026</b>${B('›', 'sm')}${B('Hôm nay', 'sm')}${seg(['2 tuần', '5 tuần'], '5 tuần')}${seg(['Theo người phụ trách', 'Tháng'], 'Theo người phụ trách')}
<span class="muted small" style="margin-left:4px"><span class="dot" style="background:#9ca3af"></span>Mới tạo <span class="dot" style="background:#2563eb;margin-left:6px"></span>Đang diễn ra <span class="dot" style="background:#7c3aed;margin-left:6px"></span>Đã kết thúc <span class="dot" style="border:1px dashed #dc2626;margin-left:6px"></span>Chưa giao</span></div>`;
S.W17 = page({
  bell: 3, body: title() + STRIP + toolbar() + chips(C_DEF).replace(viewSwitch(VIEWS, 'table'), viewSwitch(VIEWS, 'cal')) + tlHead + timeline(DAYS, TL_ROWS)
    + `<div class="muted small" style="margin-top:6px">Hai hồ sơ trên cùng một hàng chồng ngày thì xếp thành hai dòng trong hàng của người đó (Trần Minh Anh 22/11 – 25/11). Bấm thanh để mở hồ sơ; giao người phụ trách làm ở Bảng hoặc Kanban.</div>`,
});

// ---------- W18 Kinh doanh: lịch tháng, chỉ xem ----------
const D11 = [
  [[26, 'out'], [27, 'out'], [28, 'out'], [29, 'out'], [30, 'out'], [31, 'out'], [1, 'we']],
  [[2], [3], [4], [5], [6], [7, 'we'], [8, 'we']],
  [[9], [10], [11, 'td'], [12], [13], [14, 'we'], [15, 'we']],
  [[16], [17], [18], [19], [20], [21, 'we'], [22, 'we']],
  [[23], [24], [25], [26], [27], [28, 'we'], [29, 'we']],
  [[30], ['1/12', 'out'], ['2/12', 'out'], ['3/12', 'out'], ['4/12', 'out'], ['5/12', 'out'], ['6/12', 'out']],
];
const mb = (k, s, n, o = {}) => Object.assign({ s, n, t: `${o.warn ? o.warn + ' · ' : ''}${R[k].code} · ${R[k].kh} · ${R[k].pax} khách`, c: COL[R[k].st] }, o);
const calHeadKD = `<div class="flex" style="margin:0 0 8px">${B('‹', 'sm')}<b style="font-size:14px">Tháng 11/2026</b>${B('›', 'sm')}${B('Hôm nay', 'sm')}${seg(['Theo người phụ trách', 'Tháng'], 'Tháng')}
<span class="muted small" style="margin-left:4px"><span class="dot" style="background:#9ca3af"></span>Mới tạo <span class="dot" style="background:#2563eb;margin-left:6px"></span>Đang diễn ra <span class="dot" style="background:#7c3aed;margin-left:6px"></span>Đã kết thúc</span></div>`;
S.W18 = page({
  user: 'kd', body: title('Chỉ xem · hồ sơ của Booking bạn phụ trách') + toolbar() + chips({ open: 4, new: 4, run: 0, end: 0, closed: 11 }).replace(viewSwitch(VIEWS, 'table'), viewSwitch(VIEWS, 'cal')) + calHeadKD + calMonth([
    { days: D11[0] }, { days: D11[1] },
    { days: D11[2], ev: [mb('tanaka', 6, 2, { r: 1 })] },
    { days: D11[3], ev: [mb('tanaka', 1, 4, { l: 1 }), mb('muller', 3, 5, { r: 1 }), mb('smith', 7, 1, { r: 1 })] },
    { days: D11[4], ev: [mb('muller', 1, 3, { l: 1 }), mb('smith', 1, 6, { l: 1, warn: '⚠ Booking đã hủy' })] },
    { days: D11[5], ev: [mb('kim', 3, 5, { r: 1 })] },
  ]),
});

module.exports = S;
