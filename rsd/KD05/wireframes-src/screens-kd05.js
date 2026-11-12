// Wireframe KD05 · Danh sách yêu cầu Tour. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
// Dữ liệu minh họa: hôm nay 11/11/2026. Người dùng: Nguyễn Hoàng Nam (Kinh doanh), Vũ Đức Minh (Kinh doanh, mới vào),
// Đỗ Quang Huy (Quản trị hệ thống). Trần Quốc Bảo (Kinh doanh) đã ngừng hoạt động.
// Của tôi (Nam): Đang xử lý 12, Đã có Booking 23, Đã hủy 7, Tất cả 42.
// Toàn công ty: Đang xử lý 37 = Nam 12 + Lê Thu Hà 9 + Trần Quốc Bảo 11 + Phạm Thanh Tùng 5 + Vũ Đức Minh 0; Tất cả 184.
// Müller Reisen GmbH: 6 yêu cầu = 1 Đang xử lý + 4 Đã có Booking + 1 Đã hủy (khớp RSD KD03-KD04 W25).
const { page, B, bd } = require('./lib');
const { setLinks, viewSwitch, seg, kanban, calMonth } = require('./views');
setLinks({ table: 'W01.html', kanban: 'W16.html', cal: 'W17.html' });
const S = {};
const P = o => page(Object.assign({ crumb: 'Yêu cầu Tour', side: 'Yêu cầu Tour' }, o));
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const typ = t => t === 'DN' ? '<span class="badge b-violet" style="font-size:10.5px;line-height:15px;padding:0 6px">Doanh nghiệp</span>' : '<span class="badge b-cyan" style="font-size:10.5px;line-height:15px;padding:0 6px">Cá nhân</span>';
const QRES = { 'Chốt': 'b-green', 'Cần điều chỉnh': 'b-amber', 'Không chốt': 'b-gray', 'Chưa có kết quả': 'b-blue' };
const RST = { run: ['Đang xử lý', 'b-blue'], bk: ['Đã có Booking', 'b-green'], cx: ['Đã hủy', 'b-gray'] };
const NAM = 'Nguyễn Hoàng Nam', HA = 'Lê Thu Hà', BAO = 'Trần Quốc Bảo', MINH = 'Vũ Đức Minh';

// Một yêu cầu: id, ngày tạo, khách, loại, dòng phụ (liên hệ · quốc gia), thời gian đi, số ngày, số khách,
// báo giá mới nhất [phiên bản, kết quả, giá bán, ngày lưu] hoặc null, Booking, phụ trách, trạng thái, lý do hủy, cập nhật, khóa Booking
const Y = (id, cr, n, t, sub, d, dur, pax, q, o = {}) => Object.assign({ id, cr, n, t, sub, d, dur, pax, q, bk: null, pt: NAM, st: 'run', up: cr }, o);
const R = {
  pil: Y('YC-2610-0035', '28/10/2026', 'Oceania Pilgrim Tours', 'DN', 'Fr. Michael Reyes · Úc', '25/11 – 30/11/2026', '6N5Đ', 30, ['v4', 'Cần điều chỉnh', '18.900 USD', '07/11'], { up: '08/11/2026' }),
  dav: Y('YC-2611-0024', '05/11/2026', 'David Thompson', 'CN', 'Anh', '06/12 – 15/12/2026', '10N9Đ', 2, ['v1', 'Chưa có kết quả', '4.860 USD', '09/11'], { up: '09/11/2026' }),
  han1: Y('YC-2610-0031', '20/10/2026', 'Hanami Tours Co., Ltd.', 'DN', 'Sato Yuki · Nhật Bản', '20/12 – 26/12/2026', '7N6Đ', 32, ['v3', 'Chốt', '6.120.000 JPY', '06/11'], { up: '06/11/2026' }),
  nor: Y('YC-2611-0007', '02/11/2026', 'Nordic Explorer AB', 'DN', 'Erik Lindqvist · Thụy Điển', '03/01 – 14/01/2027', '12N11Đ', 14, null, { up: '02/11/2026' }),
  atl: Y('YC-2611-0012', '03/11/2026', 'Atlas Voyages SARL', 'DN', 'Claire Dubois · Pháp', '18/01 – 29/01/2027', '12N11Đ', 20, ['v1', 'Cần điều chỉnh', '41.600 EUR', '06/11'], { up: '06/11/2026' }),
  han2: Y('YC-2611-0015', '04/11/2026', 'Hanami Tours Co., Ltd.', 'DN', 'Sato Yuki · Nhật Bản', '08/02 – 12/02/2027', '5N4Đ', 40, ['v1', 'Chưa có kết quả', '7.480.000 JPY', '10/11'], { up: '10/11/2026' }),
  pac: Y('YC-2610-0040', '30/10/2026', 'Pacific Horizons Pty Ltd', 'DN', 'Grace Wilson · Úc', '15/02 – 24/02/2027', '10N9Đ', 16, ['v2', 'Không chốt', '28.300 USD', '04/11'], { up: '05/11/2026' }),
  mul: Y('YC-2611-0019', '03/11/2026', 'Müller Reisen GmbH', 'DN', 'Anna Schneider · Đức', '15/03 – 28/03/2027', '14N13Đ', 25, ['v2', 'Cần điều chỉnh', '52.750 EUR', '08/11'], { up: '08/11/2026' }),
  vdb: Y('YC-2611-0021', '04/11/2026', 'Van den Berg Reizen BV', 'DN', 'Pieter de Vries · Hà Lan', '02/04 – 11/04/2027', '10N9Đ', 18, ['v1', 'Chưa có kết quả', '33.900 EUR', '10/11'], { up: '10/11/2026' }),
  rah: Y('YC-2611-0028', '09/11/2026', 'Ahmed Rahman', 'CN', 'Malaysia', '20/05 – 27/05/2027', '8N7Đ', 6, null, { up: '09/11/2026' }),
  sop: Y('YC-2611-0026', '07/11/2026', 'Sophie Martin', 'CN', 'Pháp', 'Tháng 04/2027', 'chưa chốt ngày', 4, null, { up: '07/11/2026' }),
  sak: Y('YC-2611-0030', '10/11/2026', 'Sakura Holidays K.K.', 'DN', 'Tanaka Hiroshi · Nhật Bản', 'Tháng 10/2027', 'chưa chốt ngày', 40, null, { up: '10/11/2026' }),
  // Müller Reisen GmbH (W02): mới tạo trước
  m2: Y('YC-2610-0008', '02/10/2026', 'Müller Reisen GmbH', 'DN', 'Anna Schneider · Đức', '18/11 – 25/11/2026', '8N7Đ', 18, ['v3', 'Chốt', '38.420 EUR', '12/10'], { bk: 'BK-2610-0137', st: 'bk', up: '14/10/2026' }),
  m3: Y('YC-2609-0011', '01/09/2026', 'Müller Reisen GmbH', 'DN', 'Anna Schneider · Đức', '24/10 – 02/11/2026', '10N9Đ', 22, ['v2', 'Chốt', '47.300 EUR', '10/09'], { bk: 'BK-2609-0102', st: 'bk', up: '12/09/2026' }),
  m4: Y('YC-2606-0015', '10/06/2026', 'Müller Reisen GmbH', 'DN', 'Anna Schneider · Đức', 'Tháng 12/2026', 'chưa chốt ngày', 30, ['v1', 'Không chốt', '55.100 EUR', '18/06'], { st: 'cx', why: 'Khách chọn đơn vị khác', up: '12/06/2026' }),
  m5: Y('YC-2602-0004', '05/02/2026', 'Müller Reisen GmbH', 'DN', 'Anna Schneider · Đức', '15/03 – 24/03/2026', '10N9Đ', 16, ['v2', 'Chốt', '31.200 EUR', '14/02'], { bk: 'BK-2602-0021', st: 'bk', up: '16/02/2026' }),
  m6: Y('YC-2509-0030', '08/09/2025', 'Müller Reisen GmbH', 'DN', 'Anna Schneider · Đức', '05/10 – 14/10/2025', '10N9Đ', 20, ['v1', 'Chốt', '29.800 EUR', '15/09'], { bk: 'BK-2509-0058', st: 'bk', pt: HA, lock: 1, up: '16/09/2025' }),
};
// 11 yêu cầu Đang xử lý của Trần Quốc Bảo (W13, W14)
const BQ = [
  Y('YC-2610-0012', '12/10/2026', 'Golden Dragon Travel', 'DN', 'Li Wei · Singapore', '19/11 – 24/11/2026', '6N5Đ', 24, ['v3', 'Chốt', '14.400 SGD', '05/11'], { pt: BAO, up: '05/11/2026' }),
  Y('YC-2610-0019', '16/10/2026', 'Kiwi Trails Ltd', 'DN', 'Hannah Scott · New Zealand', '02/12 – 13/12/2026', '12N11Đ', 12, ['v2', 'Chưa có kết quả', '26.880 USD', '03/11'], { pt: BAO, up: '03/11/2026' }),
  Y('YC-2610-0027', '19/10/2026', 'Elena Petrova', 'CN', 'Nga', '10/12 – 17/12/2026', '8N7Đ', 2, ['v1', 'Cần điều chỉnh', '3.940 USD', '28/10'], { pt: BAO, up: '29/10/2026' }),
  Y('YC-2610-0033', '23/10/2026', 'Iberia Escapadas SL', 'DN', 'Lucía Gómez · Tây Ban Nha', '05/01 – 16/01/2027', '12N11Đ', 22, ['v1', 'Chưa có kết quả', '39.600 EUR', '30/10'], { pt: BAO, up: '30/10/2026' }),
  Y('YC-2610-0038', '27/10/2026', 'Maple Leaf Journeys Inc.', 'DN', 'Olivia Brown · Canada', '20/01 – 31/01/2027', '12N11Đ', 18, null, { pt: BAO, up: '27/10/2026' }),
  Y('YC-2611-0002', '01/11/2026', 'Siam Smile Travel', 'DN', 'Somchai P. · Thái Lan', '10/02 – 14/02/2027', '5N4Đ', 35, ['v2', 'Không chốt', '312.000 THB', '06/11'], { pt: BAO, up: '06/11/2026' }),
  Y('YC-2611-0005', '02/11/2026', 'Swiss Alpine Tours AG', 'DN', 'Reto Keller · Thụy Sĩ', '01/03 – 12/03/2027', '12N11Đ', 16, ['v1', 'Chưa có kết quả', '44.200 CHF', '04/11'], { pt: BAO, up: '04/11/2026' }),
  Y('YC-2611-0010', '03/11/2026', 'Carlos Mendes', 'CN', 'Bồ Đào Nha', '18/03 – 27/03/2027', '10N9Đ', 3, null, { pt: BAO, up: '03/11/2026' }),
  Y('YC-2611-0016', '04/11/2026', 'Belle Époque Voyages', 'DN', 'Julien Moreau · Pháp', '05/04 – 16/04/2027', '12N11Đ', 26, ['v1', 'Cần điều chỉnh', '49.900 EUR', '07/11'], { pt: BAO, up: '07/11/2026' }),
  Y('YC-2611-0022', '06/11/2026', 'Tran Family Trust', 'DN', 'Kevin Tran · Hoa Kỳ', 'Tháng 06/2027', 'chưa chốt ngày', 9, null, { pt: BAO, up: '06/11/2026' }),
  Y('YC-2611-0027', '08/11/2026', 'Aussie Wanderers Pty Ltd', 'DN', 'Tom Harris · Úc', 'Tháng 09/2027', 'chưa chốt ngày', 20, null, { pt: BAO, up: '08/11/2026' }),
];
const MINE = ['pil', 'dav', 'han1', 'nor', 'atl', 'han2', 'pac', 'mul', 'vdb', 'rah', 'sop', 'sak'];
const MUL = ['mul', 'm2', 'm3', 'm4', 'm5', 'm6'];

const hl = (s, q) => q ? s.replace(new RegExp(q, 'i'), m => `<span class="hl">${m}</span>`) : s;
const qCell = q => !q ? '<span class="muted">— Chưa có báo giá</span>' : `${bd(q[0] + ' · ' + q[1], QRES[q[1]])}<div class="muted small">${q[2]} · lưu ${q[3]}</div>`;
// o: chip (run|bk|cx|all), pt (hiện cột Phụ trách), cb (người được chọn: 'own' = yêu cầu Đang xử lý của Nam; 'any' = mọi yêu cầu Đang xử lý),
//    sel (danh sách id đã chọn), dim (map id → ghi chú dòng mờ), q (chuỗi tô vàng), selMode (đang chọn: ẩn nút trên dòng)
function rowHtml(r, o) {
  const canCb = r.st === 'run' && (o.cb === 'any' || (o.cb === 'own' && r.pt === NAM));
  const isSel = (o.sel || []).includes(r.id);
  const note = (o.dim || {})[r.id];
  const dim = note && !note.includes('Bỏ qua') ? note : '';
  const st = RST[r.st];
  const bkCell = !r.bk ? '' : r.lock ? `<span class="b">🔒 ${r.bk}</span> <span class="muted">· do ${r.pt} phụ trách</span>` : `<b class="lnk">${r.bk}</b>`;
  return `<tr class="${isSel ? 'sel' : ''} ${dim ? 'dim' : ''}">${o.cb ? `<td>${canCb && !note ? `<span class="cb ${isSel ? 'on' : ''}"></span>` : ''}</td>` : ''}
<td style="white-space:nowrap"><b style="color:${dim ? '#9ca3af' : '#1d4ed8'}">${hl(r.id, o.q)}</b>${note ? `<div class="small">${note}</div>` : `<div class="muted small">Tạo ${r.cr}</div>`}</td>
<td><b>${hl(r.n, o.q)}</b> ${typ(r.t)}<div class="muted small">${r.sub}</div></td>
<td style="white-space:nowrap">${r.d}<div class="muted small">${r.dur}</div></td><td class="num">${r.pax}</td><td style="white-space:nowrap">${qCell(r.q)}</td>
${o.pt ? `<td style="white-space:nowrap">${r.pt}${r.pt === BAO ? '<div class="muted small">(ngừng hoạt động)</div>' : ''}</td>` : ''}
${o.chip !== 'run' ? `<td style="white-space:nowrap">${bd(st[0], st[1])}${r.why ? `<div class="muted small">${r.why}</div>` : ''}${r.bk ? `<div class="small">${bkCell}</div>` : ''}</td>` : ''}
<td class="small">${r.up}</td></tr>`;
}
function table(rows, o = {}) {
  const sortH = o.chip === 'run' ? ['Thời gian đi ▲', 'Yêu cầu'] : ['Thời gian đi', 'Yêu cầu ▼'];
  const allSel = o.sel && o.sel.length && o.sel.length === rows.filter(r => r.st === 'run').length;
  return `<div class="tbl"><table><tr>${o.cb ? `<th style="width:26px"><span class="cb ${allSel ? 'on' : o.sel && o.sel.length ? 'part' : ''}"></span></th>` : ''}<th>${sortH[1]}</th><th>Khách hàng</th><th>${sortH[0]}</th><th class="num">Số khách</th><th>Báo giá mới nhất</th>
${o.pt ? '<th>Phụ trách</th>' : ''}${o.chip !== 'run' ? '<th>Trạng thái · Booking</th>' : ''}<th>Cập nhật</th></tr>
${rows.map(r => rowHtml(r, o)).join('')}</table></div>`;
}
const CNT_MINE = { run: 12, bk: 23, cx: 7, all: 42 };
const chips = (c = CNT_MINE, active = 'run', note = 'Hiển thị 1–12 / 12 · sắp theo thời gian đi, gần nhất trước') => `<div class="flex" style="margin:0 0 8px">${[['run', 'Đang xử lý'], ['bk', 'Đã có Booking'], ['cx', 'Đã hủy'], ['all', 'Tất cả']].map(([k, n]) => `<span class="chip ${k === active ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}<span class="ml muted small">${note}</span>${viewSwitch(VIEWS, 'table')}</div>`;
const VIEWS = ['table', 'kanban', 'cal'];
const toolbar = ({ q = '', time = 'Tất cả', res = 'Tất cả', pt = 'Của tôi', clear = false, timeOpen = false } = {}) => `<div class="toolbar" style="margin-top:0;position:relative">
<div class="input ${q ? 'focus' : 'ph'}" style="width:330px">🔍&nbsp; ${q || 'Tìm mã yêu cầu, khách, người liên hệ, Booking'}</div>
<div class="input sel ${time !== 'Tất cả' || timeOpen ? 'focus' : ''}" style="width:230px"><span class="muted">Thời gian đi:&nbsp;</span>${time}</div>
<div class="input sel ${res !== 'Tất cả' ? 'focus' : ''}" style="width:230px"><span class="muted">Kết quả báo giá:&nbsp;</span>${res}</div>
<div class="input sel ${pt !== 'Của tôi' ? 'focus' : ''}" style="width:${pt.length > 14 ? 330 : 190}px;flex:none"><span class="muted">Phụ trách:&nbsp;</span>${pt}</div>
${clear ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
const XL = exp => exp === 'dis' ? `<span class="muted small">Không có dòng để xuất</span>${B('⭳ Xuất Excel', 'dis')}` : exp ? B('⭳ Xuất Excel') : '';
const title = ({ user = 'kd', exp = true } = {}) => `<div class="ttl"><h1>Yêu cầu Tour</h1>${user === 'qt' ? `<span class="muted">Quản trị · chỉ xem và chuyển người phụ trách</span><div class="ml flex">${XL(exp)}</div>` : `<div class="ml flex">${XL(exp)}${B('+ Tạo yêu cầu', 'p')}</div>`}</div>`;
const list = (o = {}) => title(o) + toolbar(o.tb) + (o.banner || '') + chips(o.c, o.chip || 'run', o.note) + (o.bulk || '') + (o.body || table((o.keys || MINE).map(k => R[k]), Object.assign({ chip: o.chip || 'run', cb: 'own' }, o.t || {})));

// ---------- W01 Mặc định: Của tôi · Đang xử lý ----------
S.W01 = P({ body: list() });

// ---------- W02 Tìm theo khách, Phụ trách Tất cả, chip Tất cả ----------
S.W02 = P({ body: list({ tb: { q: 'müller', pt: 'Tất cả', clear: true }, chip: 'all', c: { run: 1, bk: 4, cx: 1, all: 6 }, note: '6 yêu cầu khớp · mới tạo trước', keys: MUL, t: { chip: 'all', pt: true, q: 'müller' } }) });

// ---------- W03 Bộ chọn Thời gian đi ----------
const timeMenu = `<div class="menu" style="left:530px;top:126px;width:330px">
<div class="mh2">Chọn nhanh · áp dụng ngay</div>
${[['Tất cả', 1], ['Đã qua (trước 11/11/2026)'], ['Tháng này (11/2026)'], ['Tháng sau (12/2026)'], ['3 tháng tới (11/11/2026 – 10/02/2027)']].map(([t, on]) => `<div class="mi ${on ? 'on' : ''}"><span class="rd ${on ? 'on' : ''}"></span>${t}</div>`).join('')}
<div class="sep" style="margin:6px 0"></div>
<div class="mh2">Khoảng ngày khởi hành</div>
<div class="flex" style="padding:4px 12px"><div class="input ph" style="width:120px">Từ dd/mm/yyyy</div>–<div class="input ph" style="width:120px">Đến dd/mm/yyyy</div></div>
<div class="flex" style="padding:6px 12px 4px"><span class="muted small" style="white-space:normal">Yêu cầu chưa chốt ngày được tính theo tháng dự kiến.</span><span class="ml">${B('Áp dụng', 'dis')}</span></div></div>`;
S.W03 = P({ body: list({ tb: { timeOpen: true } }), overlay: timeMenu });

// ---------- W04 Kết quả lọc: 3 tháng tới + Chưa có kết quả ----------
S.W04 = P({ body: list({ tb: { time: '3 tháng tới', res: 'Chưa có kết quả', clear: true }, c: { run: 2, bk: 0, cx: 0, all: 2 }, note: '2 yêu cầu khớp · sắp theo thời gian đi', keys: ['dav', 'han2'] }) });

// ---------- W05 Không khớp bộ lọc ----------
const empty = (big, t, red) => `<div class="tbl"><div class="empty"><div class="big" style="${red ? 'color:#991b1b' : ''}">${big}</div>${t}</div></div>`;
S.W05 = P({ body: list({ exp: 'dis', tb: { q: 'hoffmann', pt: 'Tất cả', clear: true }, chip: 'all', c: { run: 0, bk: 0, cx: 0, all: 0 }, note: '', body: empty('Không có yêu cầu khớp bộ lọc', 'Kiểm tra lại chính tả hoặc bỏ bớt bộ lọc. Khách chưa có yêu cầu thì chọn Tạo yêu cầu ở góc trên.') }) });

// ---------- W06 Lỗi tải ----------
S.W06 = P({ body: list({ exp: 'dis', tb: { res: 'Cần điều chỉnh', clear: true }, c: { run: '–', bk: '–', cx: '–', all: '–' }, note: '', body: empty('Không tải được danh sách yêu cầu Tour', `Bộ lọc của bạn được giữ nguyên. Kiểm tra kết nối rồi thử lại.<div style="margin-top:12px">${B('↻ Thử lại', 'p')}</div>`, 1) }) });

// ---------- W07 Chưa phụ trách yêu cầu nào ----------
S.W07 = P({ user: 'vm', body: list({ exp: 'dis', c: { run: 0, bk: 0, cx: 0, all: 0 }, note: '', body: empty('Bạn chưa phụ trách yêu cầu Tour nào', 'Chọn Phụ trách: Tất cả để xem yêu cầu của công ty, hoặc chọn Tạo yêu cầu ở góc trên để bắt đầu.') }) });

// ---------- W08, W09 Đích ở KD06 ----------
const card = (h, b) => `<div class="card"><h3>${h}</h3>${b}</div>`;
const fld = (label, val, o = {}) => `<div class="field"><label>${label}${o.req ? ' <span class="req">*</span>' : ''}${o.auto ? `<span class="auto">${o.auto}</span>` : ''}</label><div class="input ${o.cls || ''}">${val}</div>${o.hint ? `<div class="hint">${o.hint}</div>` : ''}</div>`;
const foot = (l, r) => `<div style="position:absolute;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #e5e7eb;padding:10px 18px;display:flex;align-items:center;gap:8px"><span class="muted small">${l}</span><span class="ml flex">${r}</span></div>`;
S.W08 = page({
  crumb: 'Yêu cầu Tour', last: 'Tạo yêu cầu', side: 'Yêu cầu Tour', body: `<div class="hdr"><div class="r1"><span class="code">Yêu cầu mới</span>${bd('Chưa lưu', 'b-gray')}</div>
<div class="tabs"><div class="tab on">Thông tin yêu cầu</div><div class="tab lock">Hành trình 🔒</div><div class="tab lock">Báo giá 🔒</div><span class="muted small" style="align-self:center;margin-left:8px">Lưu thông tin yêu cầu để mở Hành trình và Báo giá</span></div></div>
<div class="grid" style="grid-template-columns:1fr 1.2fr;margin-top:10px">${card('Khách hàng', `<div class="field"><label>Khách hàng <span class="req">*</span></label><div class="flex">${B('🔍 Tìm khách hàng', 'p')}<span class="muted small">Chưa có khách thì chọn Tạo khách hàng trong hộp thoại tìm</span></div></div>
${fld('Người liên hệ', 'Chọn sau khi có khách hàng', { cls: 'sel ro' })}${fld('Ngôn ngữ phục vụ', 'Chọn sau khi có khách hàng', { cls: 'sel ro' })}`)}
${card('Nhu cầu Tour', `${fld('Mong muốn', '', { cls: 'area', req: 1 })}<div class="f2">${fld('Thời gian đi', 'dd/mm/yyyy – dd/mm/yyyy', { cls: 'ph', req: 1 })}${fld('Số khách', '', { req: 1 })}</div><div class="f2">${fld('Hạng phòng', 'Chọn hạng phòng', { cls: 'sel ph' })}${fld('Người phụ trách', NAM, { cls: 'ro', auto: 'Người tạo' })}</div>`)}</div>
<div class="muted small" style="margin-top:8px">Nội dung hồ sơ yêu cầu đặc tả ở RSD KD06. Hình này chỉ minh họa đích của nút Tạo yêu cầu ở KD05.</div>` + foot('Chưa lưu', B('Hủy') + B('Lưu', 'p')),
});
const vrow = (v, d, amt, res, cur) => `<tr class="${cur ? 'sel' : ''}"><td><b>${v}</b>${cur ? ' ' + ind('Mới nhất', 'b') : ''}</td><td>${d}</td><td>Từ Tour mẫu TM-005 · 14N13Đ</td><td class="num">${amt}</td><td>${bd(res, QRES[res])}</td></tr>`;
S.W09 = page({
  crumb: 'Yêu cầu Tour', last: 'YC-2611-0019', side: 'Yêu cầu Tour', body: `<div class="hdr"><div class="r1"><span class="code">YC-2611-0019</span>${bd('Đang xử lý', 'b-blue')}<div class="actions">${B('Hủy yêu cầu', 'd')}</div></div>
<div class="meta"><span>Khách <b class="lnk">Müller Reisen GmbH</b> · Anna Schneider</span><span>Thời gian đi <b>15/03 – 28/03/2027</b> · 14N13Đ</span><span><b>25</b> khách</span><span>Ngôn ngữ phục vụ <b>Tiếng Đức</b></span><span>Phụ trách <b>${NAM}</b></span><span>Báo giá mới nhất <b>v2 · Cần điều chỉnh</b></span></div>
<div class="tabs"><div class="tab">Thông tin yêu cầu</div><div class="tab">Hành trình</div><div class="tab on">Báo giá <span class="cnt">2</span></div></div></div>
<div class="flex" style="margin:10px 0 8px"><span class="muted small">Mở thẳng tab Báo giá vì yêu cầu đã có báo giá.</span><span class="ml">${B('Tính giá', 'p')}</span></div>
<div class="tbl"><table><tr><th>Phiên bản</th><th>Ngày lưu</th><th>Hành trình</th><th class="num">Giá bán</th><th>Kết quả</th></tr>${vrow('v2', '08/11/2026', '52.750 EUR', 'Cần điều chỉnh', 1)}${vrow('v1', '05/11/2026', '54.100 EUR', 'Cần điều chỉnh')}</table></div>
<div class="muted small" style="margin-top:8px">Nội dung tab Báo giá đặc tả ở RSD KD06. Hình này chỉ minh họa đích khi bấm một dòng ở KD05.</div>`,
});

// ---------- W10 Quay lại sau khi hủy yêu cầu ở KD06 ----------
S.W10 = P({ body: list({ c: { run: 11, bk: 23, cx: 8, all: 42 }, note: 'Hiển thị 1–11 / 11 · dòng mờ ẩn khi tải lại', t: { dim: { 'YC-2611-0028': `${bd('Đã hủy', 'b-gray')} <span class="muted">Không còn khớp bộ lọc</span>` } } }) + `<div class="toast">YC-2611-0028 đã chuyển sang Đã hủy. <a>Xem ở chip Đã hủy</a></div>` });

// ---------- W11, W12 Kinh doanh chuyển yêu cầu của mình ----------
const SEL3 = ['YC-2610-0031', 'YC-2611-0015', 'YC-2611-0030'];
const bulkBar = (n, who, extra = '') => `<div class="bulk"><b>Đã chọn ${n}</b><span style="opacity:.8">· Chuyển phụ trách cho</span><span class="input sel ${who ? '' : 'ph'}" style="width:220px;height:28px;color:${who ? '#111827' : '#9ca3af'}">${who || 'Chọn người nhận'}</span>${B('Chuyển phụ trách', who ? 'p' : 'dis')}${extra}<span class="ml">${B('Bỏ chọn')}</span></div>`;
const ptMenu = (top, left) => `<div class="menu" style="left:${left}px;top:${top}px;width:300px">
<div class="mh2">Kinh doanh đang hoạt động</div>
${[[HA, 9, 1], ['Phạm Thanh Tùng', 5], [MINH, 0]].map(([n, c, on]) => `<div class="mi ${on ? 'on' : ''}"><span>${n}</span><span class="ml muted small">${c} yêu cầu đang xử lý</span></div>`).join('')}
<div class="sep" style="margin:6px 0"></div><div class="muted small" style="padding:2px 12px 4px;white-space:normal">Không hiện bạn và tài khoản đã ngừng hoạt động.</div></div>`;
S.W11 = P({ body: list({ exp: false, bulk: bulkBar('3 yêu cầu', HA), t: { sel: SEL3 } }), overlay: ptMenu(206, 470) });
S.W12 = P({
  body: list({
    c: { run: 9, bk: 23, cx: 7, all: 39 }, note: 'Hiển thị 1–9 / 9 · dòng mờ ẩn khi tải lại',
    banner: `<div class="banner s" style="margin-bottom:8px"><span class="ico ok">✓</span><div><b>Đã chuyển 3 yêu cầu cho Lê Thu Hà.</b> Lê Thu Hà đã nhận thông báo. Khách hàng, Booking và báo giá đã lưu không đổi người phụ trách.</div><span class="ml">${B('✕', 'sm')}</span></div>`,
    t: { dim: Object.fromEntries(SEL3.map(id => [id, `<span class="muted">→ ${HA}</span> ${ind('Vừa chuyển', 'g')}`])) },
  }),
});

// ---------- W13, W14 Quản trị chuyển toàn bộ yêu cầu của người đã nghỉ ----------
const qtTb = { pt: 'Trần Quốc Bảo (ngừng hoạt động)', clear: true };
S.W13 = P({
  user: 'qt', body: list({
    user: 'qt', exp: false, tb: qtTb, c: { run: 11, bk: 31, cx: 6, all: 48 }, note: 'Hiển thị 1–11 / 11 · sắp theo thời gian đi',
    bulk: bulkBar('11 yêu cầu', MINH),
    body: table(BQ, { chip: 'run', cb: 'any', pt: true, sel: BQ.map(r => r.id) }),
  }),
});
S.W14 = P({
  user: 'qt', body: list({
    user: 'qt', tb: qtTb, c: { run: 0, bk: 32, cx: 6, all: 38 }, note: 'Không còn yêu cầu khớp bộ lọc · các dòng giữ tại chỗ đến khi tải lại',
    banner: `<div class="banner w" style="margin-bottom:8px"><span class="ico w">!</span><div><b>Đã chuyển 10 yêu cầu cho Vũ Đức Minh.</b> 1 yêu cầu bỏ qua vì không còn Đang xử lý. Vũ Đức Minh đã nhận thông báo.</div><span class="ml">${B('✕', 'sm')}</span></div>`,
    body: table(BQ.map((r, i) => Object.assign({}, r, { pt: i === 0 ? BAO : MINH })), {
      chip: 'run', cb: 'any', pt: true,
      dim: Object.fromEntries(BQ.map((r, i) => [r.id, i === 0 ? `<span style="color:#b45309">Bỏ qua: đã có Booking BK-2611-0021 lúc 10:02</span>` : `${ind('Vừa chuyển', 'g')}`])),
    }),
  }),
});

// ---------- W15 Xuất Excel theo bộ lọc ----------
S.W15 = P({ body: list() + `<div class="toast">Đã xuất 12 yêu cầu theo bộ lọc hiện tại · YeuCauTour_20261111_0915.xlsx</div>` });

// =================== Dạng xem Kanban và Lịch (v1.1) ===================
// Yêu cầu Đã có Booking, Đã hủy của Nam cập nhật trong 90 ngày (từ 13/08/2026): 6 / 23 và 2 / 7.
const BK90 = [
  Y('YC-2610-0014', '08/10/2026', 'Sunrise Holidays Ltd', 'DN', 'James Lee · Singapore', '27/12/2026 – 03/01/2027', '8N7Đ', 12, ['v2', 'Chốt', '15.360 SGD', '03/11'], { bk: 'BK-2611-0139', st: 'bk', up: '05/11/2026' }),
  Y('YC-2610-0003', '01/10/2026', 'Les Amis du Mékong', 'DN', 'Marie Laurent · Pháp', '10/12 – 19/12/2026', '10N9Đ', 16, ['v2', 'Chốt', '30.400 EUR', '25/10'], { bk: 'BK-2610-0133', st: 'bk', up: '28/10/2026' }),
  R.m2,
  Y('YC-2609-0024', '20/09/2026', 'Kyoto Club Travel', 'DN', 'Mori Kenji · Nhật Bản', '01/12 – 08/12/2026', '8N7Đ', 20, ['v1', 'Chốt', '4.980.000 JPY', '30/09'], { bk: 'BK-2610-0109', st: 'bk', up: '02/10/2026' }),
  R.m3,
  Y('YC-2608-0030', '05/08/2026', 'Andes Adventure SA', 'DN', 'Diego Rojas · Chile', '15/09 – 24/09/2026', '10N9Đ', 10, ['v2', 'Chốt', '21.700 USD', '18/08'], { bk: 'BK-2608-0091', st: 'bk', up: '20/08/2026' }),
];
const CX90 = [
  Y('YC-2610-0022', '14/10/2026', 'Bella Italia Viaggi', 'DN', 'Giulia Conti · Ý', '12/12 – 18/12/2026', '7N6Đ', 18, ['v1', 'Không chốt', '24.300 EUR', '22/10'], { st: 'cx', why: 'Khách hoãn chuyến', up: '30/10/2026' }),
  Y('YC-2609-0017', '10/09/2026', 'Thomas Weber', 'CN', 'Đức', '05/11 – 12/11/2026', '8N7Đ', 2, ['v1', 'Không chốt', '3.600 EUR', '15/09'], { st: 'cx', why: 'Khách chọn đơn vị khác', up: '25/09/2026' }),
];
// Thẻ Kanban: cùng dữ liệu với dòng; bấm thẻ mở KD06 như bấm dòng.
const kcard = (r, o = {}) => `<div class="kc ${o.cls || ''}"><div class="t"><b>${r.id}</b><span class="ml muted small">${r.pax} khách</span></div>
<div class="b" style="margin-top:2px">${r.n}</div><div class="muted small">${r.d} · ${r.dur}</div>
<div class="r">${r.q ? `${bd(r.q[0] + ' · ' + r.q[1], QRES[r.q[1]])}<span class="muted small">${r.q[2]}</span>` : '<span class="muted small">— Chưa có báo giá</span>'}</div>
${r.st === 'bk' ? `<div class="r small">Booking <b class="lnk">${r.bk}</b><span class="ml muted">cập nhật ${r.up.slice(0, 5)}</span></div>` : ''}
${r.st === 'cx' ? `<div class="r small muted">${r.why}<span class="ml">cập nhật ${r.up.slice(0, 5)}</span></div>` : ''}
${o.pt ? `<div class="r small muted">Phụ trách ${r.pt}</div>` : ''}</div>`;
const win = (n, tot) => `<span class="isel" style="font-size:11.5px">Cập nhật 90 ngày gần nhất</span><span class="ml">${n} / ${tot}</span>`;
const viewRow = (view, note) => `<div class="flex" style="margin:0 0 8px"><span class="muted small">${note}</span><span class="ml"></span>${viewSwitch(VIEWS, view)}</div>`;
const listV = (o = {}) => title(o) + toolbar(o.tb) + (o.banner || '') + o.row + o.body;

// ---------- W16 Kanban của tôi ----------
const RUN_SORTED = MINE.map(k => R[k]);
S.W16 = P({
  body: listV({
    row: viewRow('kanban', 'Kanban · cột là trạng thái yêu cầu, thay cho hàng chip · bấm thẻ để mở hồ sơ yêu cầu'),
    body: kanban([
      { h: `${bd('Đang xử lý', 'b-blue')}<span class="cnt">12</span><span class="ml muted small" style="font-weight:400">theo thời gian đi ▲</span>`, cards: RUN_SORTED.map(r => kcard(r)), fade: 'Cuộn để xem 12 / 12' },
      { h: `${bd('Đã có Booking', 'b-green')}<span class="cnt">23</span><span class="ml muted small" style="font-weight:400">mới cập nhật trước</span>`, sub: win(6, 23), cards: BK90.map(r => kcard(r)), fade: 'Cuộn để xem 6 / 6' },
      { h: `${bd('Đã hủy', 'b-gray')}<span class="cnt">7</span><span class="ml muted small" style="font-weight:400">mới cập nhật trước</span>`, sub: win(2, 7), cards: CX90.map(r => kcard(r)) },
    ]),
  }),
});

// ---------- W17 Lịch tháng theo thời gian đi (chip Tất cả, Của tôi) ----------
const D12 = [
  [[30, 'out'], [1], [2], [3], [4], [5, 'we'], [6, 'we']],
  [[7], [8], [9], [10], [11], [12, 'we'], [13, 'we']],
  [[14], [15], [16], [17], [18], [19, 'we'], [20, 'we']],
  [[21], [22], [23], [24], [25], [26, 'we'], [27, 'we']],
  [[28], [29], [30], [31], ['1/1', 'out'], ['2/1', 'out'], ['3/1', 'out']],
];
const lbl = (id, n, pax) => `${id} · ${n} · ${pax} khách`;
const calHead = (extra = '') => `<div class="flex" style="margin:0 0 8px">${B('‹', 'sm')}<b style="font-size:14px">Tháng 12/2026</b>${B('›', 'sm')}${B('Hôm nay', 'sm')}${seg(['Tháng', 'Tuần'], 'Tháng')}
<span class="muted small" style="margin-left:6px"><span class="dot" style="background:#2563eb"></span>Đang xử lý <span class="dot" style="background:#16a34a;margin-left:8px"></span>Đã có Booking <span class="dot" style="background:#9ca3af;margin-left:8px"></span>Đã hủy</span>${extra}</div>`;
const tray = (h, items) => `<div class="tray"><h4>${h}</h4>${items}<div class="muted small">Yêu cầu chưa chốt ngày xếp theo tháng dự kiến, không đặt vào ô ngày.</div></div>`;
S.W17 = P({
  body: listV({
    row: chips(CNT_MINE, 'all', '6 yêu cầu đi trong tháng · 1 chưa chốt ngày').replace(viewSwitch(VIEWS, 'table'), viewSwitch(VIEWS, 'cal')),
    body: calHead() + `<div class="flex" style="align-items:flex-start;gap:10px">${calMonth([
      { days: D12[0], ev: [{ s: 1, n: 1, t: 'YC-2610-0035 · Oceania', c: 'blue', l: 1 }, { s: 2, n: 6, t: lbl('YC-2609-0024', 'Kyoto Club Travel', 20), c: 'green', r: 1 }, { s: 7, n: 1, t: 'YC-2611-0024 · David', c: 'blue', r: 1 }] },
      { days: D12[1], ev: [{ s: 1, n: 2, t: 'YC-2609-0024 · Kyoto', c: 'green', l: 1 }, { s: 1, n: 7, t: lbl('YC-2611-0024', 'David Thompson', 2), c: 'blue', l: 1, r: 1 }, { s: 4, n: 4, t: lbl('YC-2610-0003', 'Les Amis du Mékong', 16), c: 'green', r: 1 }, { s: 6, n: 2, t: 'YC-2610-0022 · Bella Italia', c: 'gray', r: 1 }] },
      { days: D12[2], ev: [{ s: 1, n: 2, t: 'YC-2611-0024 · David', c: 'blue', l: 1 }, { s: 1, n: 6, t: lbl('YC-2610-0003', 'Les Amis du Mékong', 16), c: 'green', l: 1 }, { s: 1, n: 5, t: lbl('YC-2610-0022', 'Bella Italia Viaggi', 18), c: 'gray', l: 1 }, { s: 7, n: 1, t: 'YC-2610-0031 · Hanami', c: 'blue', r: 1 }] },
      { days: D12[3], ev: [{ s: 1, n: 6, t: lbl('YC-2610-0031', 'Hanami Tours Co., Ltd.', 32), c: 'blue', l: 1 }, { s: 7, n: 1, t: 'YC-2610-0014 · Sunrise', c: 'green', r: 1 }] },
      { days: D12[4], ev: [{ s: 1, n: 7, t: lbl('YC-2610-0014', 'Sunrise Holidays Ltd', 12), c: 'green', l: 1 }] },
    ])}${tray('Chưa chốt ngày · 12/2026 <span class="cnt">1</span>', `<div class="it"><b style="color:#1d4ed8">YC-2606-0015</b> ${bd('Đã hủy', 'b-gray')}<div class="b">Müller Reisen GmbH · 30 khách</div><div class="muted">Khách chọn đơn vị khác</div></div>`)}</div>`,
  }),
});

// ---------- W18 Lịch: ngày có nhiều yêu cầu, Phụ trách Tất cả ----------
const CNT_ALL = { run: 37, bk: 121, cx: 26, all: 184 };
const dayPop = `<div class="menu" style="left:630px;top:412px;width:330px">
<div class="flex" style="padding:4px 12px 6px;border-bottom:1px solid #f1f5f9"><b>Thứ 6, 11/12/2026</b><span class="ml muted small">5 yêu cầu</span><span class="muted">✕</span></div>
${[['YC-2610-0019', 'Kiwi Trails Ltd', '02/12 – 13/12', 12, BAO], ['YC-2611-0024', 'David Thompson', '06/12 – 15/12', 2, NAM], ['YC-2610-0027', 'Elena Petrova', '10/12 – 17/12', 2, BAO], ['YC-2611-0013', 'Bavaria Reisen GmbH', '10/12 – 16/12', 14, HA], ['YC-2611-0018', 'Seoul Joy Tour', '11/12 – 15/12', 24, 'Phạm Thanh Tùng']].map(([id, n, d, p, pt]) => `<div class="mi" style="align-items:flex-start"><span class="dot" style="background:#2563eb;margin-top:4px"></span><div style="flex:1"><b style="color:#1d4ed8">${id}</b> · ${n}<div class="muted small">${d} · ${p} khách · ${pt}</div></div></div>`).join('')}
<div class="muted small" style="padding:4px 12px 2px;white-space:normal">Bấm một yêu cầu để mở hồ sơ. Ô ngày hiện tối đa 3 thanh; phần còn lại gộp thành “+n”.</div></div>`;
S.W18 = P({
  body: listV({
    tb: { pt: 'Tất cả', clear: true },
    row: chips(CNT_ALL, 'run', '7 yêu cầu đi trong tháng · 0 chưa chốt ngày').replace(viewSwitch(VIEWS, 'table'), viewSwitch(VIEWS, 'cal')),
    body: calHead() + calMonth([
      { days: D12[0], ev: [{ s: 3, n: 5, t: lbl('YC-2610-0019', 'Kiwi Trails Ltd', 12), c: 'blue', r: 1 }, { s: 5, n: 3, t: 'YC-2611-0009 · Lotus Travel', c: 'blue', r: 1 }, { s: 7, n: 1, t: 'YC-2611-0024 · David', c: 'blue', r: 1 }] },
      { days: D12[1], ev: [{ s: 1, n: 7, t: lbl('YC-2610-0019', 'Kiwi Trails Ltd', 12), c: 'blue', l: 1 }, { s: 1, n: 7, t: lbl('YC-2611-0024', 'David Thompson', 2), c: 'blue', l: 1, r: 1, x: 'sel' }, { s: 1, n: 3, t: 'YC-2611-0009 · Lotus Travel', c: 'blue', l: 1 }, { s: 4, n: 4, t: lbl('YC-2610-0027', 'Elena Petrova', 2), c: 'blue', r: 1 }], more: [{ s: 4, t: '+1' }, { s: 5, t: '+2' }, { s: 6, t: '+2' }, { s: 7, t: '+2' }] },
      { days: D12[2], ev: [{ s: 1, n: 2, t: 'YC-2611-0024 · David', c: 'blue', l: 1 }, { s: 7, n: 1, t: 'YC-2610-0031 · Hanami', c: 'blue', r: 1 }, { s: 1, n: 4, t: lbl('YC-2610-0027', 'Elena Petrova', 2), c: 'blue', l: 1 }, { s: 1, n: 3, t: 'YC-2611-0013 · Bavaria Reisen', c: 'blue', l: 1 }], more: [{ s: 1, t: '+1' }, { s: 2, t: '+1' }] },
      { days: D12[3], ev: [{ s: 1, n: 6, t: lbl('YC-2610-0031', 'Hanami Tours Co., Ltd.', 32), c: 'blue', l: 1 }] },
      { days: D12[4] },
    ]),
  }),
  overlay: dayPop,
});

// ---------- W19 Kanban: cột rỗng và cột lỗi tải ----------
S.W19 = P({
  body: listV({
    tb: { res: 'Chốt', clear: true },
    row: viewRow('kanban', 'Kanban · Kết quả báo giá: Chốt'),
    body: kanban([
      { h: `${bd('Đang xử lý', 'b-blue')}<span class="cnt">1</span>`, cards: [kcard(R.han1)] },
      { h: `${bd('Đã có Booking', 'b-green')}<span class="cnt">–</span>`, sub: `<span class="isel" style="font-size:11.5px">Cập nhật 90 ngày gần nhất</span>`, err: `<b>Không tải được cột này</b><div style="margin:4px 0 8px">Các cột khác vẫn dùng được. Bộ lọc giữ nguyên.</div>${B('↻ Thử lại', 'sm p')}` },
      { h: `${bd('Đã hủy', 'b-gray')}<span class="cnt">0</span>`, sub: `<span class="isel" style="font-size:11.5px">Cập nhật 90 ngày gần nhất</span><span class="ml">0 / 0</span>`, empty: `Không có yêu cầu Đã hủy khớp bộ lọc.` },
    ]),
  }),
});

module.exports = S;
