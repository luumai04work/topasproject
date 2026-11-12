// Wireframe DH01 · Mẫu checklist điều hành. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
const { page: basePage, modal, f, B, bd } = require('./lib');
const S = {};

// ---------- CSS riêng của DH01 ----------
const CSS = `
.sw{display:inline-block;width:30px;height:17px;border-radius:9px;background:#cbd5e1;position:relative;vertical-align:middle}
.sw::after{content:"";position:absolute;top:2px;left:2px;width:13px;height:13px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.3)}
.sw.on{background:#16a34a}.sw.on::after{left:15px}
.sw.lock{opacity:.55}
.drawer.xl{width:1010px}
.tg td{padding:3px 6px;font-size:12px;height:27px}
.tg th{padding:5px 6px}
.tg .hdl{color:#cbd5e1;width:14px;font-size:12px;letter-spacing:-2px}
.tg .x{color:#9ca3af;width:16px;text-align:center}
.tg .isel{padding:0 6px;font-size:11.5px;line-height:19px}
.tg .ci{border:1px solid #e5e7eb;border-radius:5px;padding:0 6px;line-height:19px;display:block;background:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tg .ci.ph{color:#9ca3af;border-style:dashed}
.tg .ci.bad{border-color:#dc2626;background:#fff7f7}
.tg .ci.focus{border-color:#2563eb;box-shadow:0 0 0 2px #dbeafe}
.tg .isel.focus{border-color:#2563eb;box-shadow:0 0 0 2px #dbeafe}
.tg .isel.bad{border-color:#dc2626;background:#fff7f7}
.tg tr.sh td{background:#f8fafc;font-weight:600;color:#334155;font-size:12px}
.tg tr.add td{border-bottom:none;height:24px}
.tg tr.cp td{background:#f0fdfa}
.tg tr.nw td{background:#eff6ff}
.tg tr.er td{background:#fef2f2}
.tg .e{color:#b91c1c;font-size:11px;font-weight:400;line-height:13px}
.pv td{padding:3px 8px;font-size:12px;height:24px}
.ro-v{color:#374151}
.dfl{margin-right:auto;display:flex;align-items:center;gap:8px}
`;
const page = o => basePage(Object.assign({ crumb: 'Mẫu checklist', side: 'Mẫu checklist', css: CSS }, o));
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const toast = (t, a) => `<div class="toast"><span>${t}</span>${a ? `<a>${a}</a>` : ''}</div>`;
const drawerXL = (title, body, foot, sub = '') => `<div class="overlay"></div><div class="drawer xl"><div class="dh"><div class="t">${title}<span class="x">✕</span></div>${sub ? `<div class="muted small" style="margin-top:2px">${sub}</div>` : ''}</div><div class="db" style="padding-top:10px">${body}</div><div class="df">${foot}</div></div>`;

// ---------- Dữ liệu minh họa (hôm nay 11/11/2026) ----------
// Loại Tour (QT05): Inbound đoàn, Customized riêng tư, MICE, Tour Golf, Tour học sinh.
const T = {
  def: { name: 'Mẫu mặc định', desc: 'Dùng khi loại Tour chưa có mẫu đang dùng', lt: null, n: 9, a: 7, s: 2, sv: 'Khách sạn, Vận chuyển', v: 'v3', d: '20/08/2026', by: 'Lê Quang Huy', used: 7, on: 1, lock: 1 },
  inb: { name: 'Inbound tiêu chuẩn', desc: 'Đoàn Inbound từ 10 khách, có visa và HDV theo ngôn ngữ', lt: 'Inbound đoàn', n: 13, a: 8, s: 5, sv: 'Khách sạn, Vận chuyển, Du thuyền', v: 'v4', d: '05/11/2026', by: 'Trần Minh Anh', used: 52, on: 1 },
  cus: { name: 'Customized riêng tư', desc: 'Khách gia đình, nhóm nhỏ, lịch trình riêng', lt: 'Customized riêng tư', n: 11, a: 7, s: 4, sv: 'Khách sạn, Vận chuyển', v: 'v2', d: '18/10/2026', by: 'Phạm Thu Hà', used: 31, on: 1 },
  mice: { name: 'MICE và sự kiện', desc: 'Hội nghị, khen thưởng, gala dinner', lt: 'MICE', n: 15, a: 10, s: 5, sv: 'Khách sạn, Nhà hàng, Vận chuyển', v: 'v1', d: '09/11/2026', by: 'Trần Minh Anh', used: 0, on: 1 },
  golf: { name: 'Tour Golf', desc: 'Đoàn golf, đặt tee time theo sân', lt: 'Tour Golf', n: 10, a: 6, s: 4, sv: 'Khách sạn, Sân golf', v: 'v2', d: '14/03/2026', by: 'Lê Quang Huy', used: 5, on: 0 },
  hs: { name: 'Tour học sinh', desc: 'Đoàn học sinh, sinh viên trao đổi', lt: 'Tour học sinh', n: 13, a: 7, s: 6, sv: 'Khách sạn, Vận chuyển, Du thuyền, Vé tham quan', v: 'v1', d: '11/11/2026', by: 'Trần Minh Anh', used: 0, on: 1 },
};

function row(k, o = {}) {
  const t = Object.assign({}, T[k], o.ov || {});
  const lt = t.lt ? t.lt : `${bd('Mặc định', 'b-blue')}<div class="small muted" style="margin-top:2px">Đang áp dụng cho: ${o.applies || 'Tour Golf, Tour học sinh, Booking chưa có loại Tour'}</div>`;
  const used = t.used ? `${t.used} hồ sơ` : '<span class="muted">Chưa dùng</span>';
  const sw = o.ro ? `<span class="sw ${t.on ? 'on' : ''} lock"></span>` : `<span class="sw ${t.on ? 'on' : ''} ${t.lock ? 'lock' : ''}"></span>${t.lock ? '<div class="small muted">Luôn dùng</div>' : ''}`;
  return `<tr class="${o.cls || ''}"><td><b style="color:#1d4ed8">${t.name}</b><div class="small muted">${t.desc}</div></td>
<td style="width:250px">${lt}</td>
<td><b>${t.n} việc</b><div class="small muted">${t.a} cả hồ sơ · ${t.s} theo dịch vụ: ${t.sv}</div></td>
<td style="white-space:nowrap">${bd(t.v, 'b-gray')} <span class="small">${t.d}</span><div class="small muted">${t.by}</div></td>
<td class="num">${used}</td><td style="width:84px;text-align:center">${sw}</td></tr>`;
}
const table = (keys, o = {}) => `<div class="tbl"><table><tr><th>Tên mẫu</th><th>Loại Tour</th><th>Công việc</th><th>Phiên bản hiện hành</th><th class="num">Đã dùng cho</th><th style="text-align:center">Đang dùng</th></tr>
${keys.map(k => row(k, Object.assign({}, o, { cls: (o.hl === k ? 'new' : ''), ov: (o.ov || {})[k] }))).join('')}</table></div>`;
const title = (ro) => `<div class="ttl"><h1>Mẫu checklist điều hành</h1>${ro ? '<span class="muted">Chỉ xem</span>' : `<span class="ml"></span>${B('+ Tạo mẫu', 'p')}`}</div>
<div class="muted small" style="margin:-4px 0 8px">Mỗi loại Tour có một mẫu. Khi hồ sơ Tour được tạo, hệ thống sinh checklist từ mẫu của loại Tour của Booking; loại Tour chưa có mẫu đang dùng thì dùng Mẫu mặc định.</div>`;
const chips = (c, on = 'on') => `<div class="flex" style="margin:0 0 8px">${[['on', 'Đang dùng'], ['off', 'Ngừng dùng'], ['all', 'Tất cả']].map(([k, n]) => `<span class="chip ${k === on ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}</div>`;
const toolbar = (q = '') => `<div class="toolbar" style="margin-top:0">
<div class="input ${q ? '' : 'ph'}" style="width:330px">🔍&nbsp; ${q || 'Tìm tên mẫu, loại Tour, tên công việc'}</div>
<div class="input sel" style="width:250px"><span class="muted">Có việc theo dịch vụ:&nbsp;</span>Tất cả</div>
${q ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
const C0 = { on: 4, off: 1, all: 5 };
const ON4 = ['def', 'cus', 'inb', 'mice'];
const list = (o = {}) => title(o.ro) + toolbar(o.q) + chips(o.c || C0, o.chip) + (o.body || table(o.keys || ON4, o.t || {}));

// ---------- W01 Danh sách mẫu ----------
S.W01 = page({ body: list() });

// ---------- W02 Không có mẫu khớp tìm kiếm ----------
S.W02 = page({ body: list({ q: 'tee time', c: { on: 0, off: 1, all: 1 }, body: `<div class="tbl"><div class="empty"><div class="big">Không có mẫu đang dùng khớp “tee time”</div>Có 1 mẫu ngừng dùng khớp từ khóa này, xem ở chip Ngừng dùng. Hoặc xóa bộ lọc ở thanh lọc.</div></div>` }) });

// ---------- Lưới công việc trong bảng trượt ----------
// Dòng: [tên, loại DV (null = cả hồ sơ), số ngày, trước/sau, mốc, tự hoàn tất, giao PT]
const INB_A = [
  ['Kiểm tra Booking và yêu cầu riêng của đoàn', null, 30, 'trước', 'Khởi hành', '—', 1],
  ['Thu thập hộ chiếu, visa của đoàn', null, 30, 'trước', 'Khởi hành', '—', 1],
  ['Gửi thư mời nhập cảnh cho khách cần visa', null, 21, 'trước', 'Khởi hành', '—', 1],
  ['Phân công HDV chính khớp ngôn ngữ', null, 14, 'trước', 'Khởi hành', 'Có HDV chính khớp ngôn ngữ', 1],
  ['Gửi Pax list cho NCC', null, 7, 'trước', 'Khởi hành', 'Đã gửi Pax list', 0],
  ['Gửi Rooming list cho mọi khách sạn', null, 7, 'trước', 'Khởi hành', 'Đã gửi Rooming list cho mọi khách sạn', 0],
  ['Họp bàn giao đoàn với HDV', null, 1, 'trước', 'Khởi hành', '—', 1],
  ['Thu chứng từ, đề nghị quyết toán', null, 5, 'sau', 'Kết thúc', '—', 1],
];
const INB_S = [
  ['Đặt phòng và nhận xác nhận', 'Khách sạn', 30, 'trước', 'Ngày sử dụng', 'Hạng mục Đã xác nhận', 0],
  ['Reconfirm phòng với khách sạn', 'Khách sạn', 3, 'trước', 'Ngày sử dụng', '—', 0],
  ['Xác nhận xe và thông tin lái xe', 'Vận chuyển', 2, 'trước', 'Ngày sử dụng', '—', 0],
  ['Đặt cabin và nhận xác nhận', 'Du thuyền', 30, 'trước', 'Ngày sử dụng', 'Hạng mục Đã xác nhận', 0],
  ['Gửi danh sách khách cho du thuyền', 'Du thuyền', 5, 'trước', 'Ngày sử dụng', '—', 0],
];
// o: { ro, focus: {i, cell}, cls: {i: 'cp'|'nw'|'er'}, err: {i: text}, errCell: {i: 'name'}, ph: {i:1}, open: i }
function trow(r, i, o) {
  const [nm, sv, nd, ts, mc, auto, pt] = r;
  const fc = (o.focus || {})[i];
  const ecell = (o.errCell || {})[i];
  const e = (o.err || {})[i];
  if (o.ro) {
    return `<tr><td class="hdl"></td><td>${nm}</td><td>${sv || '<span class="muted">—</span>'}</td><td>${nd} ngày ${ts} ${mc}</td><td>${auto === '—' ? '<span class="muted">—</span>' : auto}</td><td style="text-align:center">${pt ? '✓' : ''}</td><td></td></tr>`;
  }
  const name = nm ? `<span class="ci ${fc === 'name' ? 'focus' : ''} ${ecell === 'name' ? 'bad' : ''}">${nm}</span>` : `<span class="ci ph ${ecell === 'name' ? 'bad' : ''}">Tên công việc</span>`;
  const svc = sv === null ? '<span class="muted">—</span>' : `<span class="isel ${fc === 'sv' ? 'focus' : ''} ${sv ? '' : 'ph'}">${sv || 'Chọn loại'}</span>`;
  const due = `<span class="isel ${fc === 'nd' ? 'focus' : ''}">${nd}</span> <span class="small">ngày</span> <span class="isel">${ts}</span> <span class="isel">${mc}</span>`;
  const au = `<span class="isel ${auto === '—' ? 'ph' : ''}" style="max-width:236px;overflow:hidden">${auto === '—' ? 'Không' : auto}</span>`;
  return `<tr class="${(o.cls || {})[i] || ''}"><td class="hdl">⋮⋮</td><td style="width:285px">${name}${e ? `<div class="e">${e}</div>` : ''}</td><td style="width:108px">${svc}</td><td style="white-space:nowrap">${due}</td><td>${au}</td><td style="text-align:center"><span class="cb ${pt ? 'on' : ''}"></span></td><td class="x">✕</td></tr>`;
}
function grid(A, Sv, o = {}) {
  const head = `<tr><th></th><th>Công việc ${o.ro ? '' : '<span class="req">*</span>'}</th><th>Loại dịch vụ</th><th>Hạn hoàn tất</th><th>Tự hoàn tất khi</th><th style="text-align:center">Giao người<br>phụ trách</th><th></th></tr>`;
  const a = A.map((r, i) => trow(r, i, o)).join('');
  const s = Sv.map((r, j) => trow(r, A.length + j, o)).join('');
  const add = (t) => o.ro ? '' : `<tr class="add"><td></td><td colspan="6">${B(t, 'lk')}</td></tr>`;
  return `<div class="tbl tg"><table>${head}
<tr class="sh"><td colspan="7">Cả hồ sơ · ${A.length} việc <span class="muted" style="font-weight:400">— tạo một lần cho mỗi hồ sơ</span></td></tr>${a}${add('+ Thêm công việc cả hồ sơ')}
<tr class="sh"><td colspan="7">Theo dịch vụ · ${Sv.length} việc <span class="muted" style="font-weight:400">— tạo cho từng hạng mục dịch vụ cùng loại trong hồ sơ</span></td></tr>${s}${add('+ Thêm công việc theo dịch vụ')}
</table></div>`;
}
const ntab = (on, n) => `<div class="ntab">${[['cv', `Công việc (${n})`], ['pv', 'Xem trước'], ['ls', 'Lịch sử phiên bản']].map(([k, t]) => `<div class="${k === on ? 'on' : ''}">${t}</div>`).join('')}</div>`;
const headFields = ({ name, lt, desc, ro, ltAuto, nameAuto, ltHint }) => `<div style="display:grid;grid-template-columns:260px 230px 1fr;gap:0 12px">
${f('Tên mẫu', name, { req: !ro, cls: ro ? 'ro' : '', auto: nameAuto })}
${f('Loại Tour', lt, { req: !ro, cls: ro ? 'ro' : (lt.startsWith('Mặc định') ? 'ro' : 'sel'), auto: ltAuto, hint: ltHint })}
${f('Mô tả', desc || '<span class="muted">Không bắt buộc</span>', { cls: ro ? 'ro' : '' })}</div>`;

// Bảng trượt sửa Inbound tiêu chuẩn
const INB_A_EDIT = INB_A.map((r, i) => i === 6 ? [r[0], r[1], 2, r[3], r[4], r[5], r[6]] : r);
const inbSub = 'Loại Tour Inbound đoàn · Đã dùng cho 52 hồ sơ · Lưu lần cuối 05/11/2026 bởi Trần Minh Anh';
const inbHead = headFields({ name: 'Inbound tiêu chuẩn', lt: 'Inbound đoàn', desc: 'Đoàn Inbound từ 10 khách, có visa và HDV theo ngôn ngữ' });
const delDis = `<span class="dfl">${B('Xóa mẫu', 'dis')}<span class="small muted">Đã dùng cho 52 hồ sơ nên không xóa được; tắt Đang dùng ở danh sách nếu không dùng nữa.</span></span>`;
const footEdit = (changes, dis) => `${delDis}${changes ? `<span class="small" style="color:#92400e">${changes}</span>` : ''}${B('Hủy')}${B('Lưu phiên bản v5', dis ? 'dis' : 'p')}`;
const inbTitle = `Inbound tiêu chuẩn ${bd('v4', 'b-gray')}`;

// ---------- W05 Sửa mẫu: danh sách công việc ----------
const W05body = inbHead + ntab('cv', 13) + grid(INB_A_EDIT, INB_S, { focus: { 6: 'nd' } }) +
  `<div class="hint" style="margin-top:6px">Kéo ⋮⋮ để đổi thứ tự trong nhóm. Trên DH08.2, công việc xếp theo hạn rồi theo thứ tự này. Lưu tạo phiên bản mới; hồ sơ đã tạo giữ nguyên checklist.</div>`;
const W05 = drawerXL(inbTitle, W05body, footEdit('1 thay đổi chưa lưu'), inbSub);
S.W05 = page({ body: list(), overlay: W05 });

// ---------- W03 Tạo mẫu: chọn loại Tour và sao chép ----------
const copyMenu = `<div class="menu" style="left:195px;top:180px;width:390px">
<div class="mh2">Sao chép công việc từ</div>
<div class="mi on"><div style="flex:1"><b>Inbound tiêu chuẩn</b> <span class="muted small">· Inbound đoàn · v4</span><div class="muted small">13 việc · 8 cả hồ sơ, 5 theo dịch vụ</div></div></div>
<div class="mi"><div style="flex:1"><b>Mẫu mặc định</b> <span class="muted small">· v3</span><div class="muted small">9 việc · 7 cả hồ sơ, 2 theo dịch vụ</div></div></div>
<div class="mi"><div style="flex:1"><b>Customized riêng tư</b> <span class="muted small">· v2</span><div class="muted small">11 việc · 7 cả hồ sơ, 4 theo dịch vụ</div></div></div>
<div class="mi"><div style="flex:1"><b>MICE và sự kiện</b> <span class="muted small">· v1</span><div class="muted small">15 việc · 10 cả hồ sơ, 5 theo dịch vụ</div></div></div>
<div class="mi"><div style="flex:1"><b>Tour Golf</b> ${ind('Ngừng dùng', 'a')}<div class="muted small">10 việc · 6 cả hồ sơ, 4 theo dịch vụ</div></div></div></div>`;
const createHead = headFields({ name: 'Tour học sinh', lt: 'Tour học sinh', desc: '', nameAuto: 'Tự điền', ltAuto: 'Gợi ý', ltHint: 'Chỉ liệt kê loại Tour chưa có mẫu' });
const copyBar = (sel) => `<div class="flex" style="margin:2px 0 10px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:7px 10px"><b>Bắt đầu từ</b><span class="input sel ${sel ? '' : 'focus'}" style="width:330px">${sel || '<span class="muted">Sao chép công việc từ mẫu có sẵn…</span>'}</span>${sel ? `<span class="small muted">Đã sao chép 13 việc từ Inbound tiêu chuẩn v4. Sửa hoặc bỏ việc không cần.</span>` : '<span class="small muted">hoặc thêm từng công việc ở bảng dưới</span>'}</div>`;
const emptyGrid = `<div class="tbl tg"><table><tr><th></th><th>Công việc <span class="req">*</span></th><th>Loại dịch vụ</th><th>Hạn hoàn tất</th><th>Tự hoàn tất khi</th><th style="text-align:center">Giao người<br>phụ trách</th><th></th></tr>
<tr class="sh"><td colspan="7">Cả hồ sơ · 0 việc</td></tr><tr class="add"><td></td><td colspan="6">${B('+ Thêm công việc cả hồ sơ', 'lk')}</td></tr>
<tr class="sh"><td colspan="7">Theo dịch vụ · 0 việc</td></tr><tr class="add"><td></td><td colspan="6">${B('+ Thêm công việc theo dịch vụ', 'lk')}</td></tr></table>
<div class="empty" style="padding:40px 20px"><div class="big">Mẫu chưa có công việc</div>Sao chép từ một mẫu có sẵn để sửa nhanh, hoặc thêm từng công việc.</div></div>`;
const footCreate = (dis) => `<span class="dfl"><span class="small muted">Mẫu được dùng ngay cho hồ sơ Tour học sinh tạo từ lúc lưu.</span></span>${B('Hủy')}${B('Tạo mẫu', dis ? 'dis' : 'p')}`;
S.W03 = page({ body: list(), overlay: drawerXL('Tạo mẫu checklist', createHead + copyBar('') + emptyGrid, footCreate(true)) + copyMenu });

// ---------- W04 Tạo mẫu sau khi sao chép ----------
const cpCls = {}; for (let i = 0; i < 13; i++) cpCls[i] = 'cp';
S.W04 = page({ body: list(), overlay: drawerXL('Tạo mẫu checklist', createHead + copyBar('Inbound tiêu chuẩn · v4 · 13 việc') + grid(INB_A, INB_S, { cls: cpCls }), footCreate(false)) });

// ---------- W06 Bỏ việc không cần, thêm việc theo dịch vụ ----------
const HS_A = INB_A.filter((_, i) => i !== 2);
const HS_S = INB_S.concat([['Gửi danh sách học sinh cho điểm tham quan', '', 3, 'trước', 'Ngày sử dụng', '—', 0]]);
const svMenu = `<div class="menu" style="left:411px;top:418px;width:200px">
<div class="mh2">Loại dịch vụ đang dùng</div>
${['Khách sạn', 'Vận chuyển', 'Du thuyền', 'Nhà hàng', 'Vé tham quan', 'Hướng dẫn viên', 'Vé máy bay'].map(x => `<div class="mi ${x === 'Vé tham quan' ? 'on' : ''}">${x}</div>`).join('')}</div>`;
const hsCls = {}; for (let i = 0; i < 12; i++) hsCls[i] = 'cp'; hsCls[12] = 'nw';
const W06body = createHead + copyBar('Inbound tiêu chuẩn · v4 · 13 việc') + grid(HS_A, HS_S, { cls: hsCls, focus: { 12: 'sv' } });
S.W06 = page({ body: list(), overlay: drawerXL('Tạo mẫu checklist', W06body, footCreate(false)) + svMenu + `<div class="toast" style="right:24px;bottom:54px"><span>Đã bỏ “Gửi thư mời nhập cảnh cho khách cần visa”.</span><a>Hoàn tác</a></div>` });

// ---------- W07 Lỗi kiểm tra khi lưu ----------
// Nhóm theo dịch vụ: thêm 1 dòng trùng tên Reconfirm (cùng Khách sạn) và 1 dòng trống tên
const HS_S2 = [INB_S[0], INB_S[1], ['Reconfirm phòng với khách sạn', 'Khách sạn', 2, 'trước', 'Ngày sử dụng', '—', 0], INB_S[2], INB_S[3], INB_S[4], ['Gửi danh sách học sinh cho điểm tham quan', 'Vé tham quan', 3, 'trước', 'Ngày sử dụng', '—', 0], ['', 'Khách sạn', 7, 'trước', 'Ngày sử dụng', '—', 0]];
const errBanner = `<div class="banner e" style="margin-bottom:8px;padding:6px 12px"><span class="ico e">!</span><div style="flex:1"><b>Chưa lưu được: 2 lỗi cần sửa.</b> Các dòng lỗi tô đỏ; dữ liệu đã nhập được giữ nguyên.</div></div>`;
const W07body = createHead + errBanner + grid(HS_A, HS_S2, { cls: { 9: 'er', 14: 'er' }, err: { 9: 'Trùng tên với một công việc khác cùng loại Khách sạn', 14: 'Nhập tên công việc' }, errCell: { 9: 'name', 14: 'name' } });
S.W07 = page({ body: list(), overlay: drawerXL('Tạo mẫu checklist', W07body, footCreate(false)) });

// ---------- W08 Danh sách sau khi tạo mẫu ----------
S.W08 = page({ body: list({ c: { on: 5, off: 1, all: 6 }, keys: ['def', 'cus', 'inb', 'mice', 'hs'], t: { hl: 'hs', applies: 'Tour Golf, Booking chưa có loại Tour' } }), overlay: toast('✓ Đã tạo mẫu “Tour học sinh”. Hồ sơ Tour học sinh tạo từ nay dùng mẫu này.', 'Mở mẫu') });

// ---------- W08a Danh sách sau khi lưu phiên bản mới ----------
S.W08a = page({ body: list({ t: { hl: 'inb', ov: { inb: { v: 'v5', d: '11/11/2026', by: 'Trần Minh Anh' } } } }), overlay: toast('✓ Đã lưu “Inbound tiêu chuẩn” phiên bản v5. 52 hồ sơ đã tạo giữ nguyên checklist.', 'Mở mẫu') });

// ---------- W09 Xem trước trên hồ sơ mẫu ----------
const PV = [
  ['19/10/2026', 'Đặt phòng và nhận xác nhận', 'Khách sạn · Lotus Hanoi · 18/11', 'Hạng mục Đã xác nhận'],
  ['19/10/2026', 'Kiểm tra Booking và yêu cầu riêng của đoàn', 'Cả hồ sơ', '—'],
  ['19/10/2026', 'Thu thập hộ chiếu, visa của đoàn', 'Cả hồ sơ', '—'],
  ['21/10/2026', 'Đặt cabin và nhận xác nhận', 'Du thuyền · Ngọc Trai Hạ Long · 20/11', 'Hạng mục Đã xác nhận'],
  ['22/10/2026', 'Đặt phòng và nhận xác nhận', 'Khách sạn · Hương Giang Riverside · 21/11', 'Hạng mục Đã xác nhận'],
  ['24/10/2026', 'Đặt phòng và nhận xác nhận', 'Khách sạn · Riverside Bloom Hội An · 23/11', 'Hạng mục Đã xác nhận'],
  ['28/10/2026', 'Gửi thư mời nhập cảnh cho khách cần visa', 'Cả hồ sơ', '—'],
  ['04/11/2026', 'Phân công HDV chính khớp ngôn ngữ', 'Cả hồ sơ', 'Có HDV chính khớp ngôn ngữ'],
  ['11/11/2026', 'Gửi Pax list cho NCC', 'Cả hồ sơ', 'Đã gửi Pax list'],
  ['11/11/2026', 'Gửi Rooming list cho mọi khách sạn', 'Cả hồ sơ', 'Đã gửi Rooming list cho mọi khách sạn'],
  ['15/11/2026', 'Reconfirm phòng với khách sạn', 'Khách sạn · Lotus Hanoi · 18/11', '—'],
  ['15/11/2026', 'Gửi danh sách khách cho du thuyền', 'Du thuyền · Ngọc Trai Hạ Long · 20/11', '—'],
  ['16/11/2026', 'Họp bàn giao đoàn với HDV', 'Cả hồ sơ', '—', 1],
  ['16/11/2026', 'Xác nhận xe và thông tin lái xe', 'Vận chuyển · Hoàng Long xe 29 chỗ · 18/11', '—'],
  ['18/11/2026', 'Reconfirm phòng với khách sạn', 'Khách sạn · Hương Giang Riverside · 21/11', '—'],
  ['19/11/2026', 'Xác nhận xe và thông tin lái xe', 'Vận chuyển · Xe 29 chỗ miền Trung · 21/11', '—'],
  ['20/11/2026', 'Reconfirm phòng với khách sạn', 'Khách sạn · Riverside Bloom Hội An · 23/11', '—'],
  ['30/11/2026', 'Thu chứng từ, đề nghị quyết toán', 'Cả hồ sơ', '—'],
];
const W09body = inbHead + ntab('pv', 13) + `<div class="flex" style="margin-bottom:8px"><b>Hồ sơ mẫu</b><span class="input sel" style="width:470px">TP-2611-0042 · Müller Reisen GmbH · Inbound đoàn · 18/11 – 25/11/2026</span><span class="small muted">Gợi ý hồ sơ đang mở cùng loại Tour</span></div>
<div class="banner i" style="margin-bottom:8px;padding:5px 12px"><span class="ico i">i</span><div><b>18 công việc</b>: 8 cả hồ sơ, 10 theo 6 hạng mục dịch vụ. Tính từ nội dung đang sửa (gồm thay đổi chưa lưu), theo ngày của hồ sơ mẫu. Xem trước không thay đổi hồ sơ.</div></div>
<div class="tbl pv"><table><tr><th>Hạn</th><th>Công việc</th><th>Gắn với</th><th>Tự hoàn tất khi</th></tr>
${PV.map(r => `<tr${r[4] ? ' class="hot"' : ''}><td style="white-space:nowrap">${r[0]}</td><td>${r[1]}${r[4] ? ind('Thay đổi chưa lưu', 'a') : ''}</td><td>${r[2] === 'Cả hồ sơ' ? '<span class="muted">Cả hồ sơ</span>' : r[2]}</td><td>${r[3] === '—' ? '<span class="muted">—</span>' : r[3]}</td></tr>`).join('')}</table></div>`;
S.W09 = page({ body: list(), overlay: drawerXL(inbTitle, W09body, footEdit('1 thay đổi chưa lưu'), inbSub) });

// ---------- W10 Rời bảng trượt khi chưa lưu ----------
S.W10 = page({ body: list(), overlay: W05 + `<div class="overlay"></div><div class="modal" style="width:480px"><div class="mh">Bỏ thay đổi chưa lưu?</div><div class="mb">Mẫu “Inbound tiêu chuẩn” có 1 thay đổi chưa lưu:<ul style="margin:6px 0;padding-left:18px"><li>Họp bàn giao đoàn với HDV · hạn 1 → 2 ngày trước Khởi hành</li></ul>Nếu đóng, thay đổi này sẽ mất.</div><div class="mf">${B('Bỏ thay đổi', 'd')}${B('Tiếp tục sửa', 'p')}</div></div>` });

// ---------- W11 Mẫu vừa được lưu ở phiên khác ----------
const confl = `<div class="banner e" style="margin-bottom:8px;padding:6px 12px"><span class="ico e">!</span><div style="flex:1"><b>Chưa lưu được. Lê Quang Huy vừa lưu phiên bản v5 lúc 10:42</b> (thêm 1 công việc). Thay đổi của bạn: <i>Họp bàn giao đoàn với HDV · hạn 1 → 2 ngày trước Khởi hành</i>. Tải phiên bản v5 rồi làm lại thay đổi này.</div>${B('Tải phiên bản v5', 'sm p')}</div>`;
S.W11 = page({ body: list(), overlay: drawerXL(inbTitle, inbHead + confl + ntab('cv', 13) + grid(INB_A_EDIT, INB_S, {}), footEdit('', true), inbSub) });

// ---------- W12 Xác nhận ngừng dùng ----------
const offBody = `Hồ sơ Tour loại <b>Customized riêng tư</b> tạo từ lúc này sẽ dùng <b>Mẫu mặc định</b> (9 việc).
<div class="list" style="margin-top:8px"><div class="li"><span class="ico ok">✓</span><div>31 hồ sơ đã tạo từ mẫu này giữ nguyên checklist.</div></div>
<div class="li"><span class="ico w">!</span><div>2 Booking Customized riêng tư tạo hồ sơ lỗi, đang ở nhóm Tạo lỗi (BK-2611-0152, BK-2611-0155), sẽ nhận Mẫu mặc định khi hồ sơ được tạo lại.</div></div></div>
<div class="hint" style="margin-top:6px">Bật lại Đang dùng bất cứ lúc nào; mẫu được giữ nguyên.</div>`;
S.W12 = page({ body: list(), overlay: modal('Ngừng dùng mẫu “Customized riêng tư”?', offBody, B('Hủy') + B('Ngừng dùng', 'dp'), 520) });

// ---------- W13 Danh sách sau khi ngừng dùng ----------
S.W13 = page({ body: list({ c: { on: 3, off: 2, all: 5 }, keys: ['def', 'inb', 'mice'], t: { applies: 'Customized riêng tư, Tour Golf, Tour học sinh, Booking chưa có loại Tour' } }), overlay: toast('Đã ngừng dùng “Customized riêng tư”. Mẫu chuyển sang chip Ngừng dùng.', 'Hoàn tác') });

// ---------- W13a Dùng lại mẫu ngừng dùng ----------
S.W13a = page({ body: list({ chip: 'off', c: { on: 5, off: 0, all: 5 }, body: `<div class="tbl"><div class="empty"><div class="big">Không còn mẫu ngừng dùng</div>Mọi mẫu đều đang dùng. Mẫu vừa bật lại đã chuyển sang chip Đang dùng.</div></div>` }), overlay: toast('✓ Đã dùng lại “Tour Golf”. Hồ sơ Tour Golf tạo từ nay dùng mẫu này thay cho Mẫu mặc định.', 'Hoàn tác') });

// ---------- W14 Xóa mẫu chưa dùng ----------
const MICE_A = [
  ['Nhận brief sự kiện và danh sách khách mời', null, 60, 'trước', 'Khởi hành', '—', 1],
  ['Chốt địa điểm hội nghị và sơ đồ phòng', null, 45, 'trước', 'Khởi hành', '—', 1],
  ['Chốt kịch bản gala dinner', null, 21, 'trước', 'Khởi hành', '—', 1],
  ['Chốt thiết kế backdrop, banner, quà tặng', null, 30, 'trước', 'Khởi hành', '—', 1],
  ['Chốt danh sách khách mời và phân bàn', null, 14, 'trước', 'Khởi hành', '—', 1],
  ['Phân công HDV chính khớp ngôn ngữ', null, 14, 'trước', 'Khởi hành', 'Có HDV chính khớp ngôn ngữ', 1],
  ['Gửi Pax list cho NCC', null, 7, 'trước', 'Khởi hành', 'Đã gửi Pax list', 0],
  ['Gửi Rooming list cho mọi khách sạn', null, 7, 'trước', 'Khởi hành', 'Đã gửi Rooming list cho mọi khách sạn', 0],
  ['Tổng duyệt chương trình tại địa điểm', null, 1, 'trước', 'Khởi hành', '—', 1],
  ['Thu chứng từ, đề nghị quyết toán', null, 7, 'sau', 'Kết thúc', '—', 1],
];
const MICE_S = [
  ['Đặt phòng và nhận xác nhận', 'Khách sạn', 45, 'trước', 'Ngày sử dụng', 'Hạng mục Đã xác nhận', 0],
  ['Reconfirm phòng với khách sạn', 'Khách sạn', 3, 'trước', 'Ngày sử dụng', '—', 0],
  ['Chốt thực đơn gala', 'Nhà hàng', 10, 'trước', 'Ngày sử dụng', '—', 0],
  ['Đặt bàn và nhận xác nhận', 'Nhà hàng', 30, 'trước', 'Ngày sử dụng', 'Hạng mục Đã xác nhận', 0],
  ['Xác nhận xe và thông tin lái xe', 'Vận chuyển', 2, 'trước', 'Ngày sử dụng', '—', 0],
];
const miceHead = headFields({ name: 'MICE và sự kiện', lt: 'MICE', desc: 'Hội nghị, khen thưởng, gala dinner' });
const delBody = `Mẫu <b>MICE và sự kiện</b> (15 việc) chưa dùng cho hồ sơ nào nên được xóa hẳn.
<div class="list" style="margin-top:8px"><div class="li"><span class="ico w">!</span><div>Hồ sơ Tour loại MICE tạo từ lúc này sẽ dùng <b>Mẫu mặc định</b>.</div></div>
<div class="li"><span class="ico e">!</span><div>Không khôi phục được sau khi xóa.</div></div></div>`;
S.W14 = page({ body: list(), overlay: drawerXL(`MICE và sự kiện ${bd('v1', 'b-gray')}`, miceHead + ntab('cv', 15) + grid(MICE_A, MICE_S, {}), `<span class="dfl">${B('Xóa mẫu', 'd')}</span>${B('Hủy')}${B('Lưu phiên bản v2', 'dis')}`, 'Loại Tour MICE · Chưa dùng cho hồ sơ nào · Lưu lần cuối 09/11/2026 bởi Trần Minh Anh') + modal('Xóa mẫu “MICE và sự kiện”?', delBody, B('Hủy') + B('Xóa mẫu', 'dp'), 480) });

// ---------- W14a Danh sách sau khi xóa mẫu ----------
S.W14a = page({ body: list({ c: { on: 3, off: 1, all: 4 }, keys: ['def', 'cus', 'inb'], t: { applies: 'MICE, Tour Golf, Tour học sinh, Booking chưa có loại Tour' } }), overlay: toast('Đã xóa mẫu “MICE và sự kiện”. Hồ sơ MICE tạo từ nay dùng Mẫu mặc định.') });

// ---------- W15 Lịch sử phiên bản ----------
const HIS = [
  ['v4', '05/11/2026 14:20', 'Trần Minh Anh', ['Thêm “Gửi danh sách khách cho du thuyền” (Du thuyền, 5 ngày trước Ngày sử dụng)', 'Reconfirm phòng với khách sạn: hạn 2 → 3 ngày trước Ngày sử dụng'], 14, 1],
  ['v3', '12/09/2026 09:05', 'Lê Quang Huy', ['Phân công HDV chính khớp ngôn ngữ: Tự hoàn tất khi Có HDV chính khớp ngôn ngữ', 'Đổi thứ tự: Gửi Pax list lên trước Gửi Rooming list'], 21],
  ['v2', '03/06/2026 16:40', 'Trần Minh Anh', ['Thêm “Thu chứng từ, đề nghị quyết toán” (5 ngày sau Kết thúc)', 'Bỏ “Gọi điện chào đoàn trước khởi hành”'], 12],
  ['v1', '15/04/2026 10:00', 'Lê Quang Huy', ['Tạo mẫu với 12 việc'], 5],
];
const W15body = inbHead + ntab('ls', 13) + `<div class="tbl"><table><tr><th style="width:70px">Phiên bản</th><th style="width:150px">Lưu lúc</th><th style="width:130px">Người lưu</th><th>Thay đổi so với bản trước</th><th class="num" style="width:110px">Hồ sơ đã tạo</th></tr>
${HIS.map(h => `<tr><td style="vertical-align:top">${bd(h[0], 'b-gray')}${h[5] ? `<div class="small" style="color:#166534;margin-top:2px">Hiện hành</div>` : ''}</td><td style="vertical-align:top">${h[1]}</td><td style="vertical-align:top">${h[2]}</td><td><ul style="margin:0;padding-left:16px">${h[3].map(x => `<li>${x}</li>`).join('')}</ul></td><td class="num" style="vertical-align:top">${h[4]}</td></tr>`).join('')}
<tr class="grp"><td colspan="4">Tổng</td><td class="num">52</td></tr></table></div>
<div class="hint" style="margin-top:6px">Mỗi hồ sơ Tour ghi phiên bản mẫu đã dùng khi tạo checklist; mở DH08.2 của hồ sơ để xem checklist thực tế.</div>`;
S.W15 = page({ body: list(), overlay: drawerXL(inbTitle, W15body, footEdit('', true), inbSub) });

// ---------- W16 Chỉ xem khi không có quyền sửa ----------
const roHead = headFields({ name: 'Inbound tiêu chuẩn', lt: 'Inbound đoàn', desc: 'Đoàn Inbound từ 10 khách, có visa và HDV theo ngôn ngữ', ro: 1 });
S.W16 = page({ user: 'dh2', body: list({ ro: 1, t: { ro: 1 } }), overlay: drawerXL(`${inbTitle} <span class="muted small" style="font-weight:400">Chỉ xem</span>`, roHead + ntab('cv', 13) + grid(INB_A, INB_S, { ro: 1 }), `<span class="dfl small muted">Bạn chỉ có quyền xem mẫu checklist. Quyền sửa do Quản trị cấp ở QT02.</span>${B('Đóng')}`, inbSub) });

// ---------- W17 Lỗi tải danh sách ----------
S.W17 = page({ body: title() + toolbar() + `<div class="card" style="margin-top:10px"><div class="empty"><div class="big"><span class="ico e">!</span> Không tải được danh sách mẫu checklist</div>Kết nối tới máy chủ bị gián đoạn. Bộ lọc của bạn được giữ nguyên.<div style="margin-top:12px">${B('Thử lại', 'p')}</div></div></div>` });

module.exports = S;
