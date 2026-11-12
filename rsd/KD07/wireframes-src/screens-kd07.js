// Wireframe KD07 · Danh sách Booking. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
// Dữ liệu minh họa: hôm nay 12/11/2026 (Thứ 5). Người dùng: Nguyễn Hoàng Nam (Kinh doanh), Vũ Đức Minh (Kinh doanh, mới vào),
// Phạm Ngọc Lan (Kế toán). Dữ liệu khớp RSD KD05 (yêu cầu, mã Booking), KD06 (BK-2611-0158 từ v3 50.750 EUR; BK-2611-0149 đã hủy),
// DH07 (Tour Code; v1.2: hồ sơ Tour tự tạo khi lưu Booking, Brown & Co TP-2612-0009, BK-2611-0158 TP-2703-0001), KD03-KD04 (Müller Reisen GmbH).
// Của tôi (Nam), Khởi hành Chưa kết thúc: Hiệu lực 12, Đã hủy 2, Tất cả 14.
// Đến hạn = hạn trong 7 ngày tới (12/11 – 19/11/2026), chưa thu đủ.
const { page, B, bd } = require('./lib');
const { setLinks, viewSwitch, seg, calMonth } = require('./views');
setLinks({ table: 'W01.html', cal: 'W12.html' });
const S = {};
const P = o => page(Object.assign({ crumb: 'Booking', side: 'Booking' }, o));
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const typ = t => t === 'DN' ? '<span class="badge b-violet" style="font-size:10.5px;line-height:15px;padding:0 6px">Doanh nghiệp</span>' : '<span class="badge b-cyan" style="font-size:10.5px;line-height:15px;padding:0 6px">Cá nhân</span>';
const NAM = 'Nguyễn Hoàng Nam', HA = 'Lê Thu Hà', TUNG = 'Phạm Thanh Tùng';
const DUE = { r: ['Quá hạn', 'r'], a: ['Đến hạn', 'a'], b: ['Còn hạn', 'b'] };

// Booking: id, ngày tạo, khách, loại, dòng phụ, khởi hành, số ngày, số khách, giá trị, nguồn (yêu cầu · phiên bản), o
// o.hs: { tc, st } | { err: 1 } (Tạo lỗi) | null ; o.pay: { due, nx: [đợt, hạn, mức, ghi chú] } | { full } | { nosch } | { cx: [số, nhãn, lớp] }
const K = (id, cr, n, t, sub, d, dur, pax, val, src, o = {}) => Object.assign({ id, cr, n, t, sub, d, dur, pax, val, src, st: 'ok', pt: NAM }, o);
const R = {
  nor: K('BK-2610-0129', '14/10/2026', 'Nordic Explorer AB', 'DN', 'Erik Lindqvist · Thụy Điển', '08/11 – 15/11/2026', '8N7Đ', 16, '27.200 USD', 'YC-2609-0031 · v2', { hs: { tc: 'TP-2611-0038', st: 'Đang diễn ra' }, pay: { full: 1 } }),
  tan: K('BK-2611-0144', '02/11/2026', 'Tanaka Travel Co.', 'DN', 'Ito Mai · Nhật Bản', '14/11 – 19/11/2026', '6N5Đ', 12, '2.880.000 JPY', 'YC-2610-0006 · v2', { hs: { tc: 'TP-2611-0051', st: 'Mới tạo' }, pay: { due: '2.016.000 JPY', nx: ['Đợt 2', '07/11', 'r', 'quá 5 ngày'] } }),
  lef: K('BK-2611-0152', '05/11/2026', 'Lefebvre Famille', 'CN', 'Pháp', '16/11 – 22/11/2026', '7N6Đ', 6, '180.000.000 ₫', 'YC-2610-0029 · v1', { hs: { tc: 'TP-2611-0052', st: 'Mới tạo' }, pay: { due: '180.000.000 ₫', nx: ['Đợt 1', '10/11', 'r', 'quá 2 ngày'] } }),
  mul: K('BK-2610-0137', '14/10/2026', 'Müller Reisen GmbH', 'DN', 'Anna Schneider · Đức', '18/11 – 25/11/2026', '8N7Đ', 18, '38.420 EUR', 'YC-2610-0008 · v3', { hs: { tc: 'TP-2611-0042', st: 'Mới tạo' }, pay: { due: '26.894 EUR', nx: ['Đợt 2', '13/11', 'a', 'còn 1 ngày'] } }),
  dup: K('BK-2611-0140', '01/11/2026', 'Dupont Voyages', 'DN', 'Luc Dupont · Pháp', '20/11 – 27/11/2026', '8N7Đ', 9, '21.150 EUR', 'YC-2610-0036 · v1', { hs: { tc: 'TP-2611-0047', st: 'Mới tạo' }, pay: { due: '21.150 EUR', nx: ['Đợt 1', '18/11', 'a', 'còn 6 ngày'] } }),
  kyo: K('BK-2610-0109', '02/10/2026', 'Kyoto Club Travel', 'DN', 'Mori Kenji · Nhật Bản', '01/12 – 08/12/2026', '8N7Đ', 20, '4.980.000 JPY', 'YC-2609-0024 · v1', { hs: { tc: 'TP-2612-0001', st: 'Mới tạo' }, pay: { due: '3.486.000 JPY', nx: ['Đợt 2', '21/11', 'b'] } }),
  kim: K('BK-2611-0146', '03/11/2026', 'Kim Tours Korea', 'DN', 'Park Ji-hoon · Hàn Quốc', '02/12 – 07/12/2026', '6N5Đ', 22, '38.500 USD', 'YC-2610-0041 · v2', { hs: { tc: 'TP-2612-0003', st: 'Mới tạo' }, pay: { due: '26.950 USD', nx: ['Đợt 2', '25/11', 'b'] } }),
  ros: K('BK-2611-0147', '04/11/2026', 'Rossi Viaggi', 'DN', 'Marco Rossi · Ý', '05/12 – 14/12/2026', '10N9Đ', 15, '31.500 EUR', 'YC-2610-0037 · v2', { hs: { tc: 'TP-2612-0004', st: 'Mới tạo' }, pay: { due: '22.050 EUR', nx: ['Đợt 2', '28/11', 'b'] } }),
  ami: K('BK-2610-0133', '28/10/2026', 'Les Amis du Mékong', 'DN', 'Marie Laurent · Pháp', '10/12 – 19/12/2026', '10N9Đ', 16, '30.400 EUR', 'YC-2610-0003 · v2', { hs: { tc: 'TP-2612-0005', st: 'Mới tạo' }, pay: { due: '21.280 EUR', nx: ['Đợt 2', '30/11', 'b'] } }),
  bro: K('BK-2611-0155', '10/11/2026', 'Brown &amp; Co Travel', 'DN', 'Oliver Brown · Anh', '15/12 – 22/12/2026', '8N7Đ', 8, '15.200 USD', 'YC-2611-0003 · v2', { hs: { tc: 'TP-2612-0009', st: 'Mới tạo' }, pay: { nosch: 1 } }),
  sun: K('BK-2611-0139', '05/11/2026', 'Sunrise Holidays Ltd', 'DN', 'James Lee · Singapore', '27/12/2026 – 03/01/2027', '8N7Đ', 12, '15.360 SGD', 'YC-2610-0014 · v2', { hs: { tc: 'TP-2612-0008', st: 'Mới tạo' }, pay: { due: '15.360 SGD', nx: ['Đợt 1', '17/11', 'a', 'còn 5 ngày'] } }),
  m58: K('BK-2611-0158', '11/11/2026', 'Müller Reisen GmbH', 'DN', 'Anna Schneider · Đức', '15/03 – 28/03/2027', '14N13Đ', 25, '50.750 EUR', 'YC-2611-0019 · v3', { hs: { tc: 'TP-2703-0001', st: 'Mới tạo' }, pay: { due: '50.750 EUR', nx: ['Đợt 1', '25/11', 'b'] } }),
  // Đã hủy
  smi: K('BK-2611-0142', '03/11/2026', 'Smith Family', 'CN', 'Úc', '22/11 – 28/11/2026', '7N6Đ', 4, '8.400 USD', 'YC-2610-0039 · v1', { st: 'cx', why: 'Khách hủy vì lý do sức khỏe', cxd: '09/11', hs: { tc: 'TP-2611-0049', st: 'Mới tạo' }, pay: { cx: ['Đã thu 2.520 USD', 'Chờ điều chỉnh', 'a'] } }),
  han: K('BK-2611-0149', '06/11/2026', 'Hanami Tours Co., Ltd.', 'DN', 'Sato Yuki · Nhật Bản', '20/12 – 26/12/2026', '7N6Đ', 32, '6.120.000 JPY', 'YC-2610-0031 · v3', { st: 'cx', why: 'Khách giảm còn 28 khách, cần báo giá lại', cxd: '10/11', hs: null, pay: { cx: ['Không còn phải thu', 'Đã điều chỉnh', 'g'] } }),
  // Müller đã đi (W02)
  m3: K('BK-2609-0102', '12/09/2026', 'Müller Reisen GmbH', 'DN', 'Anna Schneider · Đức', '24/10 – 02/11/2026', '10N9Đ', 22, '47.300 EUR', 'YC-2609-0011 · v2', { hs: { tc: 'TP-2610-0031', st: 'Đã đóng' }, pay: { full: 1 } }),
  m5: K('BK-2602-0021', '16/02/2026', 'Müller Reisen GmbH', 'DN', 'Anna Schneider · Đức', '15/03 – 24/03/2026', '10N9Đ', 16, '31.200 EUR', 'YC-2602-0004 · v2', { hs: { tc: 'TP-2603-0012', st: 'Đã đóng' }, pay: { full: 1 } }),
  // Booking của người khác (Kế toán xem, W11)
  wag: K('BK-2610-0121', '06/10/2026', 'Wagner Gruppe', 'DN', 'Klaus Wagner · Đức', '01/11 – 08/11/2026', '8N7Đ', 20, '26.000 EUR', 'YC-2609-0020 · v2', { pt: HA, hs: { tc: 'TP-2611-0031', st: 'Đã kết thúc' }, pay: { due: '5.200 EUR', nx: ['Đợt 3', '10/11', 'r', 'quá 2 ngày'] } }),
  grn: K('BK-2610-0126', '09/10/2026', 'Green Path Tours', 'DN', 'Emma Clarke · Anh', '06/11 – 13/11/2026', '8N7Đ', 10, '12.320 USD', 'YC-2609-0027 · v1', { pt: TUNG, hs: { tc: 'TP-2611-0035', st: 'Đang diễn ra' }, pay: { due: '7.700 USD', nx: ['Đợt 2', '15/11', 'a', 'còn 3 ngày'] } }),
};
const MINE = ['nor', 'tan', 'lef', 'mul', 'dup', 'kyo', 'kim', 'ros', 'ami', 'bro', 'sun', 'm58'];

const hl = (s, q) => q ? s.replace(new RegExp(q, 'i'), m => `<span class="hl">${m}</span>`) : s;
const hsCell = (r, o) => {
  if (!r.hs) return '<span class="muted">—</span>';
  if (r.hs.err) return `${ind('Tạo lỗi', 'r')}<div class="muted small">Điều hành đang xử lý</div>`;
  return `<b class="lnk">${r.hs.tc}</b><div class="muted small">${r.hs.st}</div>`;
};
const payCell = (r, o) => {
  const p = r.pay;
  if (p.nosch) return '<span class="muted">— Chưa có lịch thanh toán</span>';
  if (o.nodata) return '<span class="muted">Chưa có dữ liệu công nợ</span>';
  if (p.full) return `${ind('Đã thu đủ', 'g')}`;
  if (p.cx) return `<span class="small">${p.cx[0]}</span>${ind(p.cx[1], p.cx[2])}`;
  const [dt, h, lv, note] = p.nx;
  return `<b>${p.due}</b><div class="small" style="white-space:nowrap">${dt} · hạn ${h} ${ind(DUE[lv][0], DUE[lv][1])}${note ? ` <span class="muted">${note}</span>` : ''}</div>`;
};
// o: chip (ok|cx|all), pt (cột Phụ trách), q (tô vàng), dim (map id → ghi chú), nodata (KT01 lỗi)
function rowHtml(r, o) {
  const note = (o.dim || {})[r.id];
  return `<tr class="${note ? 'dim' : ''}"><td style="white-space:nowrap"><b style="color:${note ? '#9ca3af' : '#1d4ed8'}">${hl(r.id, o.q)}</b>${note ? `<div class="small">${note}</div>` : `<div class="muted small">Tạo ${r.cr}</div>`}</td>
<td><b>${hl(r.n, o.q)}</b> ${o.pt ? '' : typ(r.t)}<div class="muted small">${r.sub}</div></td>
<td style="white-space:nowrap">${r.d}<div class="muted small">${r.dur} · ${r.pax} khách</div></td>
<td class="num">${r.val}<div class="muted small">${r.src}</div></td>
<td style="white-space:nowrap">${hsCell(r, o)}</td><td>${payCell(r, o)}</td>
${o.pt ? `<td class="small" style="white-space:nowrap">${r.pt}</td>` : ''}
${o.chip !== 'ok' ? `<td style="white-space:nowrap">${r.st === 'cx' ? bd('Đã hủy', 'b-gray') + `<div class="muted small">${r.cxd} · ${r.why.length > 30 ? r.why.slice(0, 28) + '…' : r.why}</div>` : bd('Hiệu lực', 'b-green')}</td>` : ''}</tr>`;
}
function table(rows, o = {}) {
  const sk = o.sort === 'due' ? 'Còn phải thu ▲' : 'Còn phải thu';
  return `<div class="tbl"><table><tr><th>Booking</th><th>Khách hàng</th><th>${o.sort === 'due' ? 'Khởi hành' : 'Khởi hành ▲'}</th><th class="num">Giá trị</th><th>Hồ sơ Tour</th><th>${sk}</th>
${o.pt ? '<th>Phụ trách</th>' : ''}${o.chip !== 'ok' ? '<th>Trạng thái</th>' : ''}</tr>
${rows.map(r => rowHtml(r, o)).join('')}</table></div>`;
}
const VIEWS = ['table', 'cal'];
const CNT_MINE = { ok: 12, cx: 2, all: 14 };
const chips = (c = CNT_MINE, active = 'ok', note = 'Hiển thị 1–12 / 12 · sắp theo ngày khởi hành, gần nhất trước', view = 'table') => `<div class="flex" style="margin:0 0 8px">${[['ok', 'Hiệu lực'], ['cx', 'Đã hủy'], ['all', 'Tất cả']].map(([k, n]) => `<span class="chip ${k === active ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}<span class="ml muted small">${note}</span>${viewSwitch(VIEWS, view)}</div>`;
const toolbar = ({ q = '', time = 'Chưa kết thúc', hs = 'Tất cả', pay = 'Tất cả', pt = null, clear = false, payOpen = false, payDis = false, defTime = 'Chưa kết thúc' } = {}) => `<div class="toolbar" style="margin-top:0;position:relative">
<div class="input ${q ? 'focus' : 'ph'}" style="width:${pt ? 230 : 290}px">🔍&nbsp; ${q || 'Tìm Booking, Tour Code, khách, người liên hệ'}</div>
<div class="input sel ${time !== defTime ? 'focus' : ''}" style="width:${pt ? 180 : 215}px"><span class="muted">Khởi hành:&nbsp;</span>${time}</div>
<div class="input sel ${hs !== 'Tất cả' ? 'focus' : ''}" style="width:${pt ? 160 : 190}px"><span class="muted">Hồ sơ Tour:&nbsp;</span>${hs}</div>
<div class="input sel ${pay !== 'Tất cả' || payOpen ? 'focus' : ''}" style="width:${pt ? 190 : 250}px;${payDis ? 'background:#f3f4f6;color:#9ca3af' : ''}"><span class="muted">Thanh toán:&nbsp;</span>${pay}</div>
${pt ? `<div class="input sel" style="width:160px;flex:none"><span class="muted">Phụ trách:&nbsp;</span>${pt}</div>` : ''}
${clear ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
const title = ({ user = 'kd' } = {}) => `<div class="ttl"><h1>Booking</h1>${user === 'kt' ? '<span class="muted">Kế toán · chỉ xem</span>' : '<span class="muted small">Booking được tạo từ phiên bản báo giá Chốt ở hồ sơ yêu cầu Tour</span>'}</div>`;
const list = (o = {}) => title(o) + toolbar(o.tb) + (o.banner || '') + chips(o.c, o.chip || 'ok', o.note, o.view) + (o.body || table((o.keys || MINE).map(k => R[k]), Object.assign({ chip: o.chip || 'ok' }, o.t || {})));
const empty = (big, t, red) => `<div class="tbl"><div class="empty"><div class="big" style="${red ? 'color:#991b1b' : ''}">${big}</div>${t}</div></div>`;

// ---------- W01 Mặc định Kinh doanh: Hiệu lực, Chưa kết thúc ----------
S.W01 = P({ body: list() });

// ---------- W02 Tìm theo khách, Khởi hành Tất cả, chip Tất cả ----------
S.W02 = P({ body: list({ tb: { q: 'müller', time: 'Tất cả', clear: true }, chip: 'all', c: { ok: 4, cx: 0, all: 4 }, note: '4 Booking khớp · sắp theo ngày khởi hành', keys: ['m5', 'm3', 'mul', 'm58'], t: { chip: 'all', q: 'müller' } }) });

// ---------- W03 Bộ lọc Thanh toán mở ----------
const payMenu = `<div class="menu" style="left:737px;top:96px;width:340px">
<div class="mh2">Thanh toán · áp dụng ngay</div>
${[['Tất cả', 1], ['Còn phải thu'], ['Cần thu trong 7 ngày (gồm quá hạn)'], ['Có đợt quá hạn'], ['Đã thu đủ'], ['Chưa có lịch thanh toán'], ['Chưa có dữ liệu công nợ']].map(([t, on]) => `<div class="mi ${on ? 'on' : ''}"><span class="rd ${on ? 'on' : ''}"></span>${t}</div>`).join('')}
<div class="sep" style="margin:6px 0"></div>
<div class="muted small" style="padding:2px 12px 4px;white-space:normal">Số đã thu, còn phải thu lấy từ Công nợ (KT01) lúc tải. Đến hạn: hạn trong 7 ngày tới, chưa thu đủ. Booking Đã hủy chỉ khớp Còn phải thu và Chưa có dữ liệu công nợ.</div></div>`;
S.W03 = P({ body: list({ tb: { payOpen: true } }), overlay: payMenu });

// ---------- W04 Kết quả: Cần thu trong 7 ngày ----------
S.W04 = P({ body: list({ tb: { pay: 'Cần thu trong 7 ngày', clear: true }, c: { ok: 5, cx: 0, all: 5 }, note: '5 Booking khớp · sắp theo ngày khởi hành', keys: ['tan', 'lef', 'mul', 'dup', 'sun'] }) });

// ---------- W05 Không khớp bộ lọc ----------
S.W05 = P({ body: list({ tb: { q: 'hoffmann', time: 'Tất cả', clear: true }, chip: 'all', c: { ok: 0, cx: 0, all: 0 }, note: '', body: empty('Không có Booking khớp bộ lọc', 'Kiểm tra lại chính tả hoặc bỏ bớt bộ lọc. Bạn chỉ thấy Booking mình phụ trách.') }) });

// ---------- W06 Lỗi tải danh sách ----------
S.W06 = P({ body: list({ tb: { hs: 'Tạo lỗi', clear: true }, c: { ok: '–', cx: '–', all: '–' }, note: '', body: empty('Không tải được danh sách Booking', `Bộ lọc của bạn được giữ nguyên. Kiểm tra kết nối rồi thử lại.<div style="margin-top:12px">${B('↻ Thử lại', 'p')}</div>`, 1) }) });

// ---------- W07 Chưa có Booking (Kinh doanh mới) ----------
S.W07 = P({ user: 'vm', body: list({ c: { ok: 0, cx: 0, all: 0 }, note: '', body: empty('Bạn chưa phụ trách Booking nào', 'Booking được tạo từ phiên bản báo giá Chốt ở hồ sơ yêu cầu Tour (nút Tạo Booking), không tạo ở màn này.<div style="margin-top:12px">' + B('Mở danh sách yêu cầu Tour') + '</div>') }) });

// ---------- W08 Không lấy được số liệu công nợ từ KT01 ----------
S.W08 = P({
  body: list({
    tb: { payDis: true },
    banner: `<div class="banner w" style="margin-bottom:8px"><span class="ico w">!</span><div><b>Chưa lấy được số liệu công nợ từ Kế toán.</b> Cột Còn phải thu ghi “Chưa có dữ liệu công nợ”, không phải 0. Bộ lọc Thanh toán tạm khóa. Các cột khác vẫn đúng.</div><span class="ml">${B('↻ Thử lại', 'sm')}</span></div>`,
    t: { nodata: 1 },
  }),
});

// ---------- W09 KD08.1 · đích khi Kinh doanh bấm dòng ----------
const bkHdr = (tab, o = {}) => `<div class="hdr"><div class="r1"><span class="code">BK-2610-0137</span>${bd('Hiệu lực', 'b-green')}<div class="actions">${o.act || ''}</div></div>
<div class="meta"><span>Khách <b class="lnk">Müller Reisen GmbH</b> · Anna Schneider</span><span>Khởi hành <b>18/11 – 25/11/2026</b> · 8N7Đ</span><span><b>18</b> khách</span><span>Giá trị <b>38.420 EUR</b></span><span>Hồ sơ Tour <b class="lnk">TP-2611-0042</b></span><span>Còn phải thu <b>26.894 EUR</b></span><span>Phụ trách <b>${NAM}</b></span></div>
<div class="tabs"><div class="tab ${tab === 1 ? 'on' : ''}">Thông tin và hủy Booking</div><div class="tab ${tab === 2 ? 'on' : ''}">Điều khoản và lịch thanh toán</div></div></div>`;
const card = (h, b) => `<div class="card"><h3>${h}</h3>${b}</div>`;
const kv = (k, v) => `<div class="flex" style="padding:4px 0;border-bottom:1px dashed #eef0f3"><span class="muted" style="width:170px">${k}</span><span>${v}</span></div>`;
S.W09 = page({
  crumb: 'Booking', last: 'BK-2610-0137', side: 'Booking', body: bkHdr(1, { act: B('Hủy Booking', 'd') }) + `<div class="grid" style="grid-template-columns:1fr 1fr;margin-top:10px">
${card('Nguồn Booking', kv('Yêu cầu Tour', '<b class="lnk">YC-2610-0008</b>') + kv('Phiên bản báo giá', '<b class="lnk">v3 · Chốt</b> · lưu 12/10/2026') + kv('Loại Tour', 'Inbound đoàn') + kv('Ngôn ngữ phục vụ', 'Tiếng Đức'))}
${card('Hồ sơ Tour', kv('Tour Code', '<b class="lnk">TP-2611-0042</b> · Mới tạo') + kv('Cách tạo', 'Tự động khi lưu Booking · 14/10/2026') + kv('Điều hành phụ trách', 'Trần Minh Anh'))}</div>
<div class="muted small" style="margin-top:8px">Nội dung hồ sơ Booking đặc tả ở RSD KD08. Hình này chỉ minh họa đích khi Kinh doanh bấm một dòng ở KD07.</div>`,
});

// ---------- W10 Quay lại sau khi hủy Booking ở KD08 ----------
S.W10 = P({ body: list({ c: { ok: 11, cx: 3, all: 14 }, note: 'Hiển thị 12 dòng · dòng mờ ẩn khi tải lại', t: { dim: { 'BK-2611-0140': `${bd('Đã hủy', 'b-gray')} <span class="muted">Không còn khớp bộ lọc</span>` } } }) + `<div class="toast">BK-2611-0140 đã chuyển sang Đã hủy. <a>Xem ở chip Đã hủy</a></div>` });

// ---------- W11 Kế toán: mặc định Bảng, sắp theo hạn đợt chưa thu ----------
const KT_KEYS = ['tan', 'lef', 'wag', 'mul', 'grn', 'sun', 'dup', 'kyo', 'kim', 'm58', 'ros', 'ami'];
S.W11 = P({
  user: 'kt', body: list({
    user: 'kt', tb: { time: 'Tất cả', pt: 'Tất cả', defTime: 'Tất cả' }, c: { ok: 164, cx: 9, all: 173 }, note: 'Hiển thị 1–20 / 164 · sắp theo hạn đợt chưa thu, sớm nhất trước',
    keys: KT_KEYS, t: { pt: true, sort: 'due' },
  }),
});

// =================== Dạng xem Lịch ===================
const calHead = (month, mode, legend, extra = '') => `<div class="flex" style="margin:0 0 8px">${B('‹', 'sm')}<b style="font-size:14px">${month}</b>${B('›', 'sm')}${B('Hôm nay', 'sm')}${seg(['Tháng', 'Tuần'], 'Tháng')}
<span class="muted small" style="margin-left:4px">Mốc</span>${seg(['Ngày khởi hành', 'Hạn thanh toán'], mode)}
<span class="muted small" style="margin-left:6px">${legend}</span>${extra}</div>`;
const dot = (c, t, first) => `<span class="dot" style="background:${c};${first ? '' : 'margin-left:8px'}"></span>${t}`;
const LEG_DEP = dot('#16a34a', 'Đã có hồ sơ', 1) + dot('#dc2626', 'Tạo lỗi') + dot('#9ca3af', 'Đã hủy');
const LEG_DUE = dot('#dc2626', 'Quá hạn', 1) + dot('#f59e0b', 'Đến hạn') + dot('#2563eb', 'Còn hạn') + dot('#16a34a', 'Đã thu đủ');
const listV = (o = {}) => title(o) + toolbar(o.tb) + (o.banner || '') + o.row + o.body;

// ---------- W12 Lịch theo ngày khởi hành (Kinh doanh, 12/2026) ----------
const D12 = [
  [[30, 'out'], [1], [2], [3], [4], [5, 'we'], [6, 'we']],
  [[7], [8], [9], [10], [11], [12, 'we'], [13, 'we']],
  [[14], [15], [16], [17], [18], [19, 'we'], [20, 'we']],
  [[21], [22], [23], [24], [25], [26, 'we'], [27, 'we']],
  [[28], [29], [30], [31], ['1/1', 'out'], ['2/1', 'out'], ['3/1', 'out']],
];
const lbl = (id, n, pax) => `${id} · ${n} · ${pax} khách`;
S.W12 = P({
  body: listV({
    row: chips(CNT_MINE, 'ok', '6 Booking khởi hành trong tháng', 'cal'),
    body: calHead('Tháng 12/2026', 'Ngày khởi hành', LEG_DEP) + calMonth([
      { days: D12[0], ev: [{ s: 2, n: 6, t: lbl('BK-2610-0109', 'Kyoto Club Travel', 20), c: 'green', r: 1 }, { s: 3, n: 5, t: lbl('BK-2611-0146', 'Kim Tours Korea', 22), c: 'green', r: 1 }, { s: 6, n: 2, t: 'BK-2611-0147 · Rossi Viaggi', c: 'green', r: 1 }] },
      { days: D12[1], ev: [{ s: 1, n: 2, t: 'BK-2610-0109 · Kyoto', c: 'green', l: 1 }, { s: 4, n: 4, t: lbl('BK-2610-0133', 'Les Amis du Mékong', 16), c: 'green', r: 1 }, { s: 1, n: 7, t: lbl('BK-2611-0147', 'Rossi Viaggi', 15), c: 'green', l: 1, r: 1 }, { s: 1, n: 1, t: 'BK-2611-0146 · Kim', c: 'green', l: 1 }] },
      { days: D12[2], ev: [{ s: 1, n: 1, t: 'Rossi Viaggi', c: 'green', l: 1 }, { s: 2, n: 6, t: lbl('BK-2611-0155', 'Brown &amp; Co Travel', 8), c: 'green', r: 1 }, { s: 1, n: 6, t: lbl('BK-2610-0133', 'Les Amis du Mékong', 16), c: 'green', l: 1 }] },
      { days: D12[3], ev: [{ s: 1, n: 2, t: 'BK-2611-0155 · Brown', c: 'green', l: 1 }, { s: 7, n: 1, t: 'BK-2611-0139 · Sunrise', c: 'green', r: 1 }] },
      { days: D12[4], ev: [{ s: 1, n: 7, t: lbl('BK-2611-0139', 'Sunrise Holidays Ltd', 12), c: 'green', l: 1 }] },
    ]),
  }),
});

// ---------- W13 Lịch theo hạn thanh toán (Kế toán, 11/2026) ----------
const D11 = [
  [[26, 'out'], [27, 'out'], [28, 'out'], [29, 'out'], [30, 'out'], [31, 'out'], [1, 'we']],
  [[2], [3], [4], [5], [6], [7, 'we'], [8, 'we']],
  [[9], [10], [11], [12, 'td'], [13], [14, 'we'], [15, 'we']],
  [[16], [17], [18], [19], [20], [21, 'we'], [22, 'we']],
  [[23], [24], [25], [26], [27], [28, 'we'], [29, 'we']],
  [[30], ['1/12', 'out'], ['2/12', 'out'], ['3/12', 'out'], ['4/12', 'out'], ['5/12', 'out'], ['6/12', 'out']],
];
const dv = (s, t, c) => ({ s, n: 1, t, c });
const W13cal = calMonth([
  { days: D11[0], ev: [dv(5, 'Les Amis 9.120 EUR', 'green'), dv(7, 'Nordic 19.040 USD', 'green')] },
  { days: D11[1], ev: [dv(2, 'Green Path 4.620 USD', 'green'), dv(6, 'Tanaka 2.016.000 JPY', 'red')] },
  { days: D11[2], ev: [dv(2, 'Lefebvre 45.000.000 ₫', 'red'), dv(3, 'Rossi 9.450 EUR', 'green'), dv(5, 'Müller 26.894 EUR', 'amber'), dv(6, 'Lefebvre 135.000.000 ₫', 'amber'), dv(7, 'Green Path 7.700 USD', 'amber'), dv(2, 'Wagner 5.200 EUR', 'red'), dv(2, 'Kim Tours 11.550 USD', 'green')] },
  { days: D11[3], ev: [dv(2, 'Sunrise 4.608 SGD', 'amber'), dv(3, 'Dupont 6.345 EUR', 'amber'), dv(6, 'Kyoto 3.486.000 JPY', 'blue')] },
  { days: D11[4], ev: [dv(3, 'Kim Tours 26.950 USD', 'blue'), dv(6, 'Rossi 22.050 EUR', 'blue'), dv(3, 'Müller 15.225 EUR', 'blue')] },
  { days: D11[5], ev: [dv(1, 'Les Amis 21.280 EUR', 'blue'), dv(1, 'Dupont 14.805 EUR', 'blue'), dv(1, 'Almeida 63.000.000 ₫', 'blue')], more: [{ s: 1, t: '+2' }] },
]).replace(/min-height:88px/g, 'min-height:72px');
const tray = (h, items, foot) => `<div class="tray" style="width:205px"><h4>${h}</h4>${items}<div class="muted small">${foot}</div></div>`;
const KT_TB = { time: 'Tất cả', pt: 'Tất cả', defTime: 'Tất cả' };
const NOTE_DUE = '21 đợt có hạn trong tháng · 3 quá hạn · 5 đến hạn';
S.W13 = P({
  user: 'kt', body: listV({
    user: 'kt', tb: KT_TB,
    row: chips({ ok: 164, cx: 9, all: 173 }, 'ok', NOTE_DUE, 'cal'),
    body: calHead('Tháng 11/2026', 'Hạn thanh toán', LEG_DUE) + `<div class="flex" style="align-items:flex-start;gap:10px">${W13cal}${tray('Chưa có lịch thanh toán <span class="cnt">1</span>', `<div class="it"><b style="color:#1d4ed8">BK-2611-0155</b><div class="b">Brown &amp; Co Travel · 8 khách</div><div class="muted">Khởi hành 15/12/2026 · ${NAM}</div></div>`, 'Booking Hiệu lực chưa có đợt nào ở KD08.2, không có thẻ trên lịch. Booking Đã hủy không hiện ở mốc này.')}</div>`,
  }),
});

// ---------- W14 Lịch hạn thanh toán: ngày có nhiều đợt ----------
const dayPop = `<div class="menu" style="left:200px;top:425px;width:360px">
<div class="flex" style="padding:4px 12px 6px;border-bottom:1px solid #f1f5f9"><b>Thứ 2, 30/11/2026</b><span class="ml muted small">5 đợt</span><span class="muted">✕</span></div>
${[['BK-2610-0133', 'Les Amis du Mékong', 'Đợt 2', '21.280 EUR', NAM], ['BK-2611-0140', 'Dupont Voyages', 'Đợt 2', '14.805 EUR', NAM], ['BK-2611-0151', 'Almeida Viagens', 'Đợt 1', '63.000.000 ₫', HA], ['BK-2611-0156', 'Kangaroo Trails Pty Ltd', 'Đợt 1', '9.900 AUD', TUNG], ['BK-2611-0143', 'Oslo Fjord Travel AS', 'Đợt 2', '61.400 NOK', HA]].map(([id, n, d, a, pt]) => `<div class="mi" style="align-items:flex-start"><span class="dot" style="background:#2563eb;margin-top:4px"></span><div style="flex:1"><b style="color:#1d4ed8">${id}</b> · ${n}<div class="muted small">${d} · ${a} · chưa thu · ${pt}</div></div></div>`).join('')}
<div class="muted small" style="padding:4px 12px 2px;white-space:normal">Bấm một đợt để mở lịch thanh toán của Booking. Ô ngày hiện tối đa 3 thẻ; phần còn lại gộp thành “+n”.</div></div>`;
S.W14 = P({
  user: 'kt', body: listV({
    user: 'kt', tb: KT_TB,
    row: chips({ ok: 164, cx: 9, all: 173 }, 'ok', NOTE_DUE, 'cal'),
    body: calHead('Tháng 11/2026', 'Hạn thanh toán', LEG_DUE) + `<div class="flex" style="align-items:flex-start;gap:10px">${W13cal}${tray('Chưa có lịch thanh toán <span class="cnt">1</span>', `<div class="it"><b style="color:#1d4ed8">BK-2611-0155</b><div class="b">Brown &amp; Co Travel · 8 khách</div><div class="muted">Khởi hành 15/12/2026 · ${NAM}</div></div>`, 'Booking Hiệu lực chưa có đợt nào ở KD08.2, không có thẻ trên lịch. Booking Đã hủy không hiện ở mốc này.')}</div>`,
  }),
  overlay: dayPop,
});

// ---------- W15 Lịch hạn thanh toán với chip Đã hủy ----------
S.W15 = P({
  user: 'kt', body: listV({
    user: 'kt', tb: KT_TB,
    row: chips({ ok: 164, cx: 9, all: 173 }, 'cx', 'Không có đợt hiển thị', 'cal'),
    body: calHead('Tháng 11/2026', 'Hạn thanh toán', LEG_DUE) + `<div style="position:relative">${calMonth(D11.map(days => ({ days }))).replace(/min-height:88px/g, 'min-height:72px')}
<div style="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.12);padding:16px 22px;text-align:center;width:520px">
<div class="b" style="font-size:14px;margin-bottom:4px">Booking Đã hủy không có đợt trên lịch hạn thanh toán</div>
<div class="muted small" style="margin-bottom:10px">Đợt của Booking đã hủy không còn là hạn phải thu. Khoản cần điều chỉnh hoặc hoàn tiền theo dõi ở Công nợ (KT01.1).</div>
<div class="flex" style="justify-content:center">${B('Xem 9 Booking Đã hủy ở Bảng', 'p')}${B('Đổi mốc sang Ngày khởi hành')}</div></div></div>`,
  }),
});

// ---------- W16 KD08.2 · đích khi Kế toán bấm dòng hoặc thẻ đợt ----------
S.W16 = page({
  user: 'kt', crumb: 'Booking', last: 'BK-2610-0137', side: 'Booking', body: bkHdr(2, { act: '<span class="muted small">Kế toán · chỉ xem</span>' }) + `
<div class="flex" style="margin:10px 0 8px"><span class="muted small">Số đã thu, còn phải thu lấy từ Công nợ (KT01)</span><span class="ml">${B('Xem công nợ', 'p')}</span></div>
<div class="tbl"><table><tr><th>Đợt</th><th>Điều khoản</th><th>Hạn</th><th class="num">Số tiền</th><th class="num">Đã thu</th><th class="num">Còn phải thu</th><th>Tình trạng</th></tr>
<tr><td><b>Đợt 1</b></td><td>Đặt cọc 30% khi xác nhận</td><td>20/10/2026</td><td class="num">11.526 EUR</td><td class="num">11.526 EUR</td><td class="num">0 EUR</td><td>${ind('Đã thu đủ', 'g')}</td></tr>
<tr class="sel"><td><b>Đợt 2</b></td><td>70% còn lại trước khởi hành 5 ngày</td><td><b>13/11/2026</b></td><td class="num">26.894 EUR</td><td class="num">0 EUR</td><td class="num"><b>26.894 EUR</b></td><td>${ind('Đến hạn', 'a')} <span class="muted small">còn 1 ngày</span></td></tr>
<tr class="grp"><td colspan="3">Tổng</td><td class="num">38.420 EUR</td><td class="num">11.526 EUR</td><td class="num">26.894 EUR</td><td></td></tr></table></div>
<div class="muted small" style="margin-top:8px">Mở từ thẻ “Müller 26.894 EUR” trên lịch hạn thanh toán: đợt 2 được tô. Nội dung tab đặc tả ở RSD KD08; ghi khoản thu làm ở KT01.1 (nút Xem công nợ).</div>`,
});

// ---------- W17 Chip Đã hủy (sau khi hủy Dupont) ----------
const dupCx = Object.assign({}, R.dup, { st: 'cx', why: 'Khách đổi sang năm sau', cxd: '12/11', pay: { cx: ['Chưa thu', 'Chờ điều chỉnh', 'a'] } });
S.W17 = P({ body: list({ chip: 'cx', c: { ok: 11, cx: 3, all: 14 }, note: 'Hiển thị 1–3 / 3 · sắp theo ngày khởi hành', body: table([dupCx, R.smi, R.han], { chip: 'cx' }) }) });

module.exports = S;
