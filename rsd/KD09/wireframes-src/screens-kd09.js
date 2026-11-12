// Wireframe KD09 · Danh sách chiến dịch chăm sóc. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
// Dữ liệu minh họa: hôm nay 11/11/2026, 10:15. Người dùng: Nguyễn Hoàng Nam, Lê Thu Hà, Phạm Thanh Tùng, Vũ Đức Minh (Kinh doanh),
// Trần Quốc Bảo (Kinh doanh, đã ngừng hoạt động), Đỗ Quang Huy (Quản trị hệ thống).
// Toàn công ty: Đang chạy 5, Tạm dừng 2, Nháp 2, Tất cả 9. Của Nam: 2 / 0 / 1 / 3.
// Khớp RSD KD03-KD04 (KD04.4 của Müller Reisen GmbH): Survey “Khảo sát sau Tour – Inbound châu Âu” gửi 08/11/2026 (chưa phản hồi),
// 30/03/2026 (đã phản hồi 9/10); email “Ưu đãi mùa xuân 2027 – Miền Bắc” gửi 15/10/2026.
const { page, B, bd } = require('./lib');
const S = {};
const P = o => page(Object.assign({ crumb: 'Chiến dịch chăm sóc', side: 'Chăm sóc khách hàng' }, o));
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const NAM = 'Nguyễn Hoàng Nam', HA = 'Lê Thu Hà', TUNG = 'Phạm Thanh Tùng', BAO = 'Trần Quốc Bảo', MINH = 'Vũ Đức Minh';
const ST = { run: ['Đang chạy', 'b-green'], pause: ['Tạm dừng', 'b-amber'], draft: ['Nháp', 'b-gray'] };
const typ = t => t === 'sv' ? '<span class="badge b-violet" style="font-size:10.5px;line-height:15px;padding:0 6px">Survey</span>' : '<span class="badge b-cyan" style="font-size:10.5px;line-height:15px;padding:0 6px">Remarketing</span>';

// Chiến dịch: mã, tên, loại, đối tượng [dòng 1, dòng 2], kỳ gửi [dòng 1, dòng 2], lần gửi tiếp theo [dòng 1, dòng 2, kiểu],
// gửi [đã gửi, lỗi], kết quả (Survey: [phản hồi, tỷ lệ]; Remarketing: số hủy nhận), phụ trách, trạng thái [mã, từ ngày]
const C = (id, n, t, obj, per, nx, sent, res, pt, st) => ({ id, n, t, obj, per, nx, sent, res, pt, st });
const R = {
  eu: C('CD-2603-001', 'Khảo sát sau Tour – Inbound châu Âu', 'sv', ['7 ngày sau khi đóng Tour', 'Khách châu Âu'], ['15/03/2026 – nay', 'liên tục'], ['12/11 09:00', '2 khách đến hạn'], [46, 1], [19, '41%'], NAM, ['run', '15/03/2026']),
  as: C('CD-2604-001', 'Khảo sát sau Tour – châu Á', 'sv', ['5 ngày sau khi đóng Tour', 'Khách châu Á'], ['02/04/2026 – nay', 'liên tục'], ['12/11 09:00', '1 khách đến hạn'], [31, 0], [14, '45%'], HA, ['run', '02/04/2026']),
  sp: C('CD-2609-001', 'Ưu đãi mùa xuân 2027 – Miền Bắc', 'rm', ['Khách châu Âu đã đi Tour 2024–2026', '179 khách nhận được'], ['15/10 – 10/12/2026', '3 bước'], ['19/11 09:00', 'Bước 2/3 · 179 khách'], [182, 4], 3, NAM, ['run', '15/10/2026']),
  jp: C('CD-2610-002', 'Tết 2027 cho đại lý Nhật Bản', 'rm', ['Đại lý Nhật Bản', '24 khách nhận được'], ['05/11 – 03/12/2026', '2 bước'], ['26/11 09:00', 'Bước 2/2 · 24 khách'], [24, 0], 0, TUNG, ['run', '05/11/2026']),
  au: C('CD-2606-001', 'Chào hè 2026 – khách cá nhân Úc', 'rm', ['Khách cá nhân Úc', '95 khách nhận được'], ['01/07 – 15/08/2026', '3 bước'], ['—', 'Đã gửi hết 3 bước', 'done'], [312, 6], 9, BAO, ['run', '01/07/2026']),
  cu: C('CD-2605-001', 'Khảo sát Tour Customized riêng tư', 'sv', ['10 ngày sau khi đóng Tour', 'Loại Tour Customized riêng tư'], ['20/05 – 20/10/2026', 'đã dừng'], ['—', 'Tạm dừng', 'pause'], [18, 0], [9, '50%'], HA, ['pause', '20/10/2026']),
  fr: C('CD-2608-001', 'Mùa thu 2026 – khách Pháp', 'rm', ['Khách Pháp đã đi Tour', '63 khách nhận được'], ['20/08 – 25/09/2026', '2 bước'], ['—', 'Tạm dừng · còn bước 2', 'pause'], [64, 0], 1, BAO, ['pause', '02/09/2026']),
  mi: C('CD-2611-001', 'Khảo sát sau Tour MICE', 'sv', ['3 ngày sau khi đóng Tour', 'Loại Tour MICE'], ['—', 'chưa bật'], ['—', 'Chưa bật', 'draft'], [0, 0], null, NAM, ['draft', '09/11/2026']),
  na: C('CD-2610-001', 'Giáng sinh 2026 – khách Bắc Mỹ', 'rm', ['Khách Bắc Mỹ', '57 khách nhận được'], ['01/12 – 20/12/2026', 'dự kiến · 2 bước'], ['—', 'Chưa bật', 'draft'], [0, 0], null, TUNG, ['draft', '28/10/2026']),
};
const ALL = ['eu', 'as', 'sp', 'jp', 'au', 'cu', 'fr', 'mi', 'na']; // thứ tự mặc định: trạng thái → lần gửi tiếp theo → cập nhật
const RUN = ['eu', 'as', 'sp', 'jp', 'au'];
const CNT_ALL = { run: 5, pause: 2, draft: 2, all: 9 };

const hl = (s, q) => q ? s.replace(new RegExp(q, 'i'), m => `<span class="hl">${m}</span>`) : s;
const sentCell = c => c.sent[0] === 0 && !c.sent[1] ? '<span class="muted">—</span>' : `<b>${c.sent[0]}</b> lần${c.sent[1] ? `<div class="small"><span class="lnk" style="color:#b91c1c!important">${c.sent[1]} gửi lỗi</span></div>` : '<div class="muted small">không lỗi</div>'}`;
const resCell = c => c.res === null ? '<span class="muted">—</span>' : c.t === 'sv' ? `Phản hồi <b>${c.res[0]}</b><div class="muted small">${c.res[1]} số đã gửi · Hủy nhận ${c.res[2] || 0}</div>` : `Hủy nhận <b>${c.res}</b><div class="muted small">từ chiến dịch này</div>`;
const nxCell = c => c.nx[2] === 'done' ? `<span class="muted">—</span>${ind('Đã gửi hết các bước', 'b')}` : c.nx[2] ? `<span class="muted">${c.nx[1]}</span>` : `<b>${c.nx[0]}</b><div class="muted small">${c.nx[1]}</div>`;
// o: chip (run|pause|draft|all), pt (hiện cột Phụ trách), cb ('own' = chiến dịch của Nam; 'any'), sel, dim (id → ghi chú), q, ptOv (id → người phụ trách mới)
function rowHtml(c, o) {
  const pt = (o.ptOv || {})[c.id] || c.pt;
  const canCb = o.cb === 'any' || (o.cb === 'own' && c.pt === NAM);
  const isSel = (o.sel || []).includes(c.id);
  const note = (o.dim || {})[c.id];
  const st = ST[o.stOv && o.stOv[c.id] || c.st[0]];
  return `<tr class="${isSel ? 'sel' : ''} ${note && o.dimRow !== false ? 'dim' : ''}">${o.cb ? `<td>${canCb && !note ? `<span class="cb ${isSel ? 'on' : ''}"></span>` : ''}</td>` : ''}
<td><b style="color:${note && o.dimRow !== false ? '#9ca3af' : '#1d4ed8'}">${c.id}</b> ${typ(c.t)}<div class="b" style="margin-top:1px">${hl(c.n, o.q)}</div>${note ? `<div class="small">${note}</div>` : ''}</td>
<td class="small">${c.obj[0]}<div class="muted">${c.obj[1]}</div></td>
<td class="small" style="white-space:nowrap">${c.per[0]}<div class="muted">${c.per[1]}</div></td>
<td class="small" style="white-space:nowrap">${nxCell(c)}</td>
<td class="small" style="white-space:nowrap">${sentCell(c)}</td>
<td class="small" style="white-space:nowrap">${resCell(c)}</td>
${o.pt ? `<td class="small" style="white-space:nowrap">${pt}${pt === BAO ? '<div class="muted">(ngừng hoạt động)</div>' : ''}</td>` : ''}
${o.chip === 'all' ? `<td class="small" style="white-space:nowrap">${bd(st[0], st[1])}<div class="muted">từ ${o.stOv && o.stOv[c.id] ? '11/11/2026' : c.st[1]}</div></td>` : ''}</tr>`;
}
function table(rows, o = {}) {
  const allSel = o.sel && o.sel.length && o.sel.length === rows.filter(c => o.cb === 'any' || c.pt === NAM).length;
  return `<div class="tbl"><table><tr>${o.cb ? `<th style="width:26px"><span class="cb ${allSel ? 'on' : o.sel && o.sel.length ? 'part' : ''}"></span></th>` : ''}<th>Chiến dịch</th><th>Đối tượng</th><th>Kỳ gửi</th><th>Lần gửi tiếp theo${o.chip === 'run' ? ' ▲' : ''}</th><th>Đã gửi</th><th>Kết quả</th>
${o.pt ? '<th>Phụ trách</th>' : ''}${o.chip === 'all' ? '<th>Trạng thái</th>' : ''}</tr>
${rows.map(c => rowHtml(c, o)).join('')}</table></div>`;
}
const chips = (c = CNT_ALL, active = 'all', note = 'Hiển thị 1–9 / 9 · Đang chạy trước, theo lần gửi tiếp theo') => `<div class="flex" style="margin:0 0 8px">${[['run', 'Đang chạy'], ['pause', 'Tạm dừng'], ['draft', 'Nháp'], ['all', 'Tất cả']].map(([k, n]) => `<span class="chip ${k === active ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}<span class="ml muted small">${note}</span></div>`;
const toolbar = ({ q = '', type = 'Tất cả', per = 'Tất cả', pt = 'Tất cả', clear = false, perOpen = false } = {}) => `<div class="toolbar" style="margin-top:0;position:relative">
<div class="input ${q ? 'focus' : 'ph'}" style="width:330px">🔍&nbsp; ${q || 'Tìm mã, tên chiến dịch, tên mẫu'}</div>
<div class="input sel ${type !== 'Tất cả' ? 'focus' : ''}" style="width:190px"><span class="muted">Loại:&nbsp;</span>${type}</div>
<div class="input sel ${per !== 'Tất cả' || perOpen ? 'focus' : ''}" style="width:230px"><span class="muted">Kỳ gửi:&nbsp;</span>${per}</div>
<div class="input sel ${pt !== 'Tất cả' ? 'focus' : ''}" style="width:${pt.length > 14 ? 330 : 190}px;flex:none"><span class="muted">Phụ trách:&nbsp;</span>${pt}</div>
${clear ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
const title = ({ user = 'kd', stat = true } = {}) => `<div class="ttl"><h1>Chiến dịch chăm sóc</h1>${user === 'qt' ? `<span class="muted">Quản trị · chỉ xem và chuyển người phụ trách</span>` : `<div class="ml flex">${B('+ Tạo chiến dịch ▾', 'p')}</div>`}</div>`;
const list = (o = {}) => title(o) + toolbar(o.tb) + (o.banner || '') + chips(o.c, o.chip || 'all', o.note) + (o.bulk || '') + (o.body || table((o.keys || ALL).map(k => R[k]), Object.assign({ chip: o.chip || 'all', cb: 'own', pt: true }, o.t || {})));

// ---------- W01 Mặc định: Phụ trách Tất cả · chip Tất cả ----------
S.W01 = P({ body: list() });

// ---------- W02 Chip Đang chạy ----------
S.W02 = P({ body: list({ chip: 'run', note: 'Hiển thị 1–5 / 5 · theo lần gửi tiếp theo, gần nhất trước', keys: RUN, t: { chip: 'run' } }) });

// ---------- W03 Bộ chọn Kỳ gửi ----------
const perMenu = `<div class="menu" style="left:742px;top:126px;width:340px">
<div class="mh2">Chọn nhanh · áp dụng ngay</div>
${[['Tất cả', 1], ['Tháng này (11/2026)'], ['Tháng trước (10/2026)'], ['Quý này (10/2026 – 12/2026)'], ['30 ngày tới (11/11 – 10/12/2026)']].map(([t, on]) => `<div class="mi ${on ? 'on' : ''}"><span class="rd ${on ? 'on' : ''}"></span>${t}</div>`).join('')}
<div class="sep" style="margin:6px 0"></div>
<div class="mh2">Khoảng ngày gửi</div>
<div class="flex" style="padding:4px 12px"><div class="input ph" style="width:124px">Từ dd/mm/yyyy</div>–<div class="input ph" style="width:124px">Đến dd/mm/yyyy</div></div>
<div class="flex" style="padding:6px 12px 4px"><span class="muted small" style="white-space:normal">Gồm lần đã gửi và lần đã lên lịch. Survey đang chạy tính tới hôm nay và các ngày sau.</span><span class="ml">${B('Áp dụng', 'dis')}</span></div></div>`;
S.W03 = P({ body: list({ tb: { perOpen: true } }), overlay: perMenu });

// ---------- W04 Loại Remarketing + Kỳ gửi Tháng này ----------
S.W04 = P({ body: list({ tb: { type: 'Remarketing', per: 'Tháng này', clear: true }, c: { run: 2, pause: 0, draft: 0, all: 2 }, note: '2 chiến dịch khớp · Đang chạy trước', keys: ['sp', 'jp'] }) });

// ---------- W05 Tìm theo tên ----------
S.W05 = P({ body: list({ tb: { q: 'mùa', clear: true }, c: { run: 1, pause: 1, draft: 0, all: 2 }, note: '2 chiến dịch khớp', keys: ['sp', 'fr'], t: { q: 'mùa' } }) });

// ---------- W06 Không khớp bộ lọc ----------
const empty = (big, t, red) => `<div class="tbl"><div class="empty"><div class="big" style="${red ? 'color:#991b1b' : ''}">${big}</div>${t}</div></div>`;
S.W06 = P({ body: list({ tb: { q: 'hàn quốc', type: 'Survey', clear: true }, c: { run: 0, pause: 0, draft: 0, all: 0 }, note: '', body: empty('Không có chiến dịch khớp bộ lọc', 'Kiểm tra lại chính tả hoặc bỏ bớt bộ lọc. Muốn bắt đầu chiến dịch mới thì chọn Tạo chiến dịch ở góc trên.') }) });

// ---------- W07 Lỗi tải ----------
S.W07 = P({ body: list({ tb: { type: 'Survey', clear: true }, c: { run: '–', pause: '–', draft: '–', all: '–' }, note: '', body: empty('Không tải được danh sách chiến dịch', `Bộ lọc của bạn được giữ nguyên. Kiểm tra kết nối rồi thử lại.<div style="margin-top:12px">${B('↻ Thử lại', 'p')}</div>`, 1) }) });

// ---------- W08 Chưa có chiến dịch nào ----------
S.W08 = P({ user: 'vm', body: list({ stat: false, c: { run: 0, pause: 0, draft: 0, all: 0 }, note: '', body: empty('Chưa có chiến dịch chăm sóc nào', 'Chọn Tạo chiến dịch ở góc trên: Survey để tự gửi khảo sát sau khi đóng Tour, Remarketing để gửi chuỗi email cho một nhóm khách.<div class="muted small" style="margin-top:8px">Chỉ khách bật Nhận email chăm sóc ở hồ sơ khách hàng mới nhận được email.</div>') }) });

// ---------- W09 Menu Tạo chiến dịch ----------
const newMenu = `<div class="menu" style="right:18px;top:96px;width:360px">
<div class="mh2">Chọn loại chiến dịch</div>
<div class="mi on" style="align-items:flex-start">${typ('sv')}<div><b>Survey</b><div class="muted small" style="white-space:normal">Tự gửi khảo sát cho khách sau khi đóng Tour, theo số ngày bạn đặt.</div></div></div>
<div class="mi" style="align-items:flex-start">${typ('rm')}<div><b>Remarketing</b><div class="muted small" style="white-space:normal">Gửi chuỗi email theo lịch cho một nhóm khách mục tiêu.</div></div></div></div>`;
S.W09 = P({ body: list(), overlay: newMenu });

// ---------- W10 Đích: KD10 tạo mới Survey ----------
const card = (h, b) => `<div class="card"><h3>${h}</h3>${b}</div>`;
const fld = (label, val, o = {}) => `<div class="field"><label>${label}${o.req ? ' <span class="req">*</span>' : ''}${o.auto ? `<span class="auto">${o.auto}</span>` : ''}</label><div class="input ${o.cls || ''}">${val}</div>${o.hint ? `<div class="hint">${o.hint}</div>` : ''}</div>`;
const foot = (l, r) => `<div style="position:absolute;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #e5e7eb;padding:10px 18px;display:flex;align-items:center;gap:8px"><span class="muted small">${l}</span><span class="ml flex">${r}</span></div>`;
S.W10 = page({
  crumb: 'Chiến dịch chăm sóc', last: 'Tạo chiến dịch Survey', side: 'Chăm sóc khách hàng', body: `<div class="hdr"><div class="r1"><span class="code">Chiến dịch mới</span>${typ('sv')}${bd('Chưa lưu', 'b-gray')}</div>
<div class="tabs"><div class="tab on">Thiết lập chiến dịch</div><div class="tab lock">Lịch sử gửi 🔒</div><span class="muted small" style="align-self:center;margin-left:8px">Lưu chiến dịch để mở Lịch sử gửi</span></div></div>
<div class="grid" style="grid-template-columns:1fr 1fr;margin-top:10px">${card('Thông tin chung', `${fld('Tên chiến dịch', '', { req: 1 })}${fld('Loại', 'Survey', { cls: 'ro', auto: 'Từ nút Tạo' })}${fld('Người phụ trách', NAM, { cls: 'ro', auto: 'Người tạo' })}`)}
${card('Survey', `${fld('Mẫu Survey', 'Chọn mẫu đang dùng ở QT04.1', { cls: 'sel ph', req: 1 })}${fld('Gửi sau khi đóng Tour', 'ngày', { req: 1 })}${fld('Áp dụng cho', 'Mọi khách bật Nhận email chăm sóc', { cls: 'sel' })}`)}</div>
<div class="muted small" style="margin-top:8px">Nội dung hồ sơ chiến dịch đặc tả ở RSD KD10. Hình này chỉ minh họa đích của Tạo chiến dịch → Survey ở KD09.</div>` + foot('Chưa lưu · chiến dịch ở trạng thái Nháp cho tới khi bật', B('Hủy') + B('Lưu nháp') + B('Lưu và bật', 'p')),
});

// ---------- W11 Đích: KD10.2 Lịch sử gửi ----------
const lrow = (d, who, tour, res, extra = '') => `<tr><td class="small">${d}</td><td><b class="lnk">${who}</b></td><td class="small">${tour}</td><td>${res}</td><td class="small">${extra}</td></tr>`;
S.W11 = page({
  crumb: 'Chiến dịch chăm sóc', last: 'CD-2603-001', side: 'Chăm sóc khách hàng', body: `<div class="hdr"><div class="r1"><span class="code">CD-2603-001</span>${typ('sv')}${bd('Đang chạy', 'b-green')}<span class="b" style="margin-left:4px">Khảo sát sau Tour – Inbound châu Âu</span><div class="actions">${B('Tạm dừng')}</div></div>
<div class="meta"><span>Gửi <b>7 ngày</b> sau khi đóng Tour</span><span>Mẫu <b>Survey EU-01</b></span><span>Phụ trách <b>${NAM}</b></span><span>Lần gửi tiếp theo <b>12/11 09:00</b> · 2 khách</span></div>
<div class="tabs"><div class="tab">Thiết lập chiến dịch</div><div class="tab on">Lịch sử gửi <span class="cnt r">1</span></div></div></div>
<div class="flex" style="margin:10px 0 8px">${[['Tất cả', 47, 1], ['Đã gửi', 46], ['Gửi lỗi', 1], ['Đã phản hồi', 19]].map(([n, c, on]) => `<span class="chip ${on ? 'on' : ''}">${n} <span class="cnt">${c}</span></span>`).join('')}<span class="ml muted small">Mở thẳng Lịch sử gửi vì chiến dịch đã có lần gửi</span></div>
<div class="tbl"><table><tr><th>Ngày gửi</th><th>Khách hàng</th><th>Tour</th><th>Kết quả</th><th>Phản hồi</th></tr>
${lrow('08/11/2026 09:00', 'Müller Reisen GmbH', 'TP-2610-0031', bd('Đã gửi', 'b-green'), '<span class="muted">Chưa phản hồi</span>')}
${lrow('06/11/2026 09:00', 'Van den Berg Reizen BV', 'TP-2610-0029', bd('Gửi lỗi', 'b-red'), '<span style="color:#b91c1c">Hộp thư không tồn tại</span>')}
${lrow('03/11/2026 09:00', 'Atlas Voyages SARL', 'TP-2610-0024', bd('Đã gửi', 'b-green'), 'Điểm <b>8/10</b> · 04/11')}
${lrow('01/11/2026 09:00', 'Thomas Weber', 'TP-2610-0022', bd('Đã gửi', 'b-green'), 'Điểm <b>10/10</b> · 01/11')}</table></div>
<div class="muted small" style="margin-top:8px">Nội dung Lịch sử gửi đặc tả ở RSD KD10. Hình này chỉ minh họa đích khi bấm một dòng ở KD09.</div>`,
});

// ---------- W12 Quay lại sau khi tạm dừng chiến dịch ở KD10 (chip Đang chạy) ----------
S.W12 = P({
  body: list({
    chip: 'run', c: { run: 4, pause: 3, draft: 2, all: 9 }, note: 'Hiển thị 1–4 / 4 · dòng mờ ẩn khi tải lại', keys: RUN,
    t: { chip: 'run', dim: { 'CD-2610-002': `${bd('Tạm dừng', 'b-amber')} <span class="muted">Không còn khớp bộ lọc</span>` } },
  }) + `<div class="toast">CD-2610-002 đã chuyển sang Tạm dừng. <a>Xem ở chip Tạm dừng</a></div>`,
});



// ---------- W14, W15 Kinh doanh chuyển chiến dịch của mình ----------
const SEL2 = ['CD-2609-001', 'CD-2611-001'];
const bulkBar = (n, who) => `<div class="bulk"><b>Đã chọn ${n}</b><span style="opacity:.8">· Chuyển phụ trách cho</span><span class="input sel ${who ? '' : 'ph'}" style="width:220px;height:28px;color:${who ? '#111827' : '#9ca3af'}">${who || 'Chọn người nhận'}</span>${B('Chuyển phụ trách', who ? 'p' : 'dis')}<span class="ml">${B('Bỏ chọn')}</span></div>`;
const ptMenu = (top, left) => `<div class="menu" style="left:${left}px;top:${top}px;width:310px">
<div class="mh2">Kinh doanh đang hoạt động</div>
${[[HA, 2], [TUNG, 2, 1], [MINH, 0]].map(([n, c, on]) => `<div class="mi ${on ? 'on' : ''}"><span>${n}</span><span class="ml muted small">${c} chiến dịch phụ trách</span></div>`).join('')}
<div class="sep" style="margin:6px 0"></div><div class="muted small" style="padding:2px 12px 4px;white-space:normal">Không hiện bạn và tài khoản đã ngừng hoạt động.</div></div>`;
S.W14 = P({ body: list({ bulk: bulkBar('2 chiến dịch', TUNG), t: { sel: SEL2 } }), overlay: ptMenu(206, 470) });
S.W15 = P({
  body: list({
    banner: `<div class="banner s" style="margin-bottom:8px"><span class="ico ok">✓</span><div><b>Đã chuyển 2 chiến dịch cho Phạm Thanh Tùng.</b> Phạm Thanh Tùng đã nhận thông báo. Lịch gửi và trạng thái chiến dịch không đổi.</div><span class="ml">${B('✕', 'sm')}</span></div>`,
    t: { ptOv: { 'CD-2609-001': TUNG, 'CD-2611-001': TUNG }, dimRow: false, dim: Object.fromEntries(SEL2.map(id => [id, ind('Vừa chuyển', 'g')])) },
  }),
});

// ---------- W16, W17 Quản trị chuyển chiến dịch của người đã nghỉ ----------
const qtTb = { pt: 'Trần Quốc Bảo (ngừng hoạt động)', clear: true };
const BQ = ['au', 'fr'];
S.W16 = P({
  user: 'qt', body: list({
    user: 'qt', tb: qtTb, c: { run: 1, pause: 1, draft: 0, all: 2 }, note: 'Hiển thị 1–2 / 2', bulk: bulkBar('2 chiến dịch', MINH),
    body: table(BQ.map(k => R[k]), { chip: 'all', cb: 'any', pt: true, sel: BQ.map(k => R[k].id) }),
  }),
});
S.W17 = P({
  user: 'qt', body: list({
    user: 'qt', tb: qtTb, c: { run: 0, pause: 0, draft: 0, all: 0 }, note: 'Không còn chiến dịch khớp bộ lọc · các dòng giữ tại chỗ đến khi tải lại',
    banner: `<div class="banner s" style="margin-bottom:8px"><span class="ico ok">✓</span><div><b>Đã chuyển 2 chiến dịch cho Vũ Đức Minh.</b> Vũ Đức Minh đã nhận thông báo. Chiến dịch Đang chạy vẫn gửi theo lịch.</div><span class="ml">${B('✕', 'sm')}</span></div>`,
    body: table(BQ.map(k => R[k]), { chip: 'all', cb: 'any', pt: true, ptOv: { 'CD-2606-001': MINH, 'CD-2608-001': MINH }, dim: Object.fromEntries(BQ.map(k => [R[k].id, `<span class="muted">→ ${MINH}</span> ${ind('Vừa chuyển', 'g')}`])) }),
  }),
});

module.exports = S;
