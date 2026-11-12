// KD06.3 Báo giá, proposal công khai, Booking. Tên và mục đích ở captions.js.
// Müller YC-2611-0019 v3: giá vốn 1.107.886.000 ₫ + 4.280 USD = 44.317,40 EUR (EUR 27.450 ₫; USD 25.380 ₫), Markup chung 15%, hạng mục Vé máy bay 5%, Hướng dẫn viên 20%,
// NL 1.772,80 → 2.030 × 23 = 46.690; TE 1.415,30 → 1.620 × 2 = 3.240; phòng đơn 356,20 → 410 × 2 = 820; tổng 50.750 EUR; lãi gộp 6.432,60 (13,1%).
const { NAM, P, ind, toast, qb, REQ, hdr, savebar, drawer, modal, f, B, bd } = require('./kd06');
const { bare } = require('./lib');
const S = {};

const mulHdr = (o = {}) => hdr(REQ.mul, Object.assign({ tab: 'q', cnt: { q: '<span class="cnt">2</span>' } }, o));
const mul3 = (o = {}) => mulHdr(Object.assign({ cnt: { q: '<span class="cnt">3</span>' }, meta: { q: 'v3 · Chưa có kết quả' } }, o));
const seg = (opts, on) => `<span class="seg">${opts.map(o => `<span class="${o === on ? 'on ' + ({ 'Chốt': 'g', 'Cần điều chỉnh': 'a', 'Không chốt': 'x' }[o] || '') : ''}">${o}</span>`).join('')}</span>`;
const RES = ['Chưa có kết quả', 'Chốt', 'Cần điều chỉnh', 'Không chốt'];

// Dòng phiên bản: v, ngày lưu, điều kiện, giá bán, proposal, kết quả, o {cur, hot, bk}
const V = (v, d, cond, amt, pr, res, o = {}) => ({ v, d, cond, amt, pr, res, o });
function vtable(rows) {
  return `<div class="tbl"><table><tr><th>Phiên bản</th><th>Lưu</th><th>Điều kiện tính</th><th class="num">Giá bán</th><th>Proposal</th><th>Kết quả</th></tr>
${rows.map(r => `<tr class="${r.o.hot ? 'new' : ''} ${r.o.sel ? 'sel' : ''}"><td style="white-space:nowrap"><b>${r.v}</b>${r.o.cur ? ' ' + ind('Mới nhất', 'b') : ''}</td><td class="small">${r.d}</td><td class="small">${r.cond}</td><td class="num"><b>${r.amt}</b>${r.o.avg ? `<div class="small muted">${r.o.avg}</div>` : ''}</td><td class="small">${r.pr}</td><td>${qb(r.res)}${r.o.bk ? `<div class="small">${r.o.bk}</div>` : ''}</td></tr>`).join('')}</table></div>`;
}
const COND2 = '14 ngày · 23 NL, 2 TE, 2 đơn · EUR · Markup 15%';
const V2 = o => V('v2', '08/11/2026<div class="muted">Nguyễn Hoàng Nam</div>', COND2, '52.750 EUR', 'English · hạn 08/12/2026<div class="muted">mở 2 lần · gần nhất 09/11</div>', 'Cần điều chỉnh', Object.assign({ avg: 'bình quân 2.110/khách <span class="ind a">vượt ngân sách 0,5 %</span>' }, o));
const V1 = V('v1', '05/11/2026<div class="muted">Nguyễn Hoàng Nam</div>', '14 ngày · 23 NL, 2 TE, 0 đơn · EUR · Markup 15%', '54.100 EUR', 'English · <span class="ind" style="background:#f3f4f6;color:#6b7280">có bản mới hơn</span><div class="muted">mở 4 lần</div>', 'Cần điều chỉnh', { avg: 'bình quân 2.164/khách <span class="ind a">vượt ngân sách 3,0 %</span>' });
const V3 = (res, pr, o = {}) => V('v3', '11/11/2026<div class="muted">Nguyễn Hoàng Nam</div>', COND2, '50.750 EUR', pr, res, Object.assign({ cur: 1, avg: 'bình quân 2.030/khách <span class="ind g">trong ngân sách</span>' }, o));
const qtools = (l, btn = B('Tính giá', 'p')) => `<div class="flex" style="margin:10px 0 8px"><span class="muted small">${l}</span><span class="ml">${btn}</span></div>`;

// ---------- W26 Danh sách phiên bản ----------
S.W26 = P({ last: 'YC-2611-0019', body: mulHdr() + `<div class="banner i small" style="margin-top:10px">Hành trình đã sửa sau v2 (11/11/2026 15:40): đổi 2 dịch vụ ở Ngày 5, 6. Tính giá để tạo phiên bản v3; v2 giữ nguyên.</div>` +
  qtools('Bấm một phiên bản để xem chi tiết, publish proposal và ghi kết quả.') + vtable([V2({ cur: 1 }), V1]) });

// ---------- W27 Điều kiện tính giá ----------
const condForm = `<div class="sec" style="margin-top:0">Khách và phòng</div>
<div class="f3">${f('Người lớn', '23', { req: 1, auto: 'Từ v2' })}${f('Trẻ em', '2', { auto: 'Từ v2' })}<div class="field"><label>Tuổi trẻ em <span class="auto">Từ v2</span></label><div class="input"><span class="tag">8 tuổi</span><span class="tag">10 tuổi</span></div></div></div>
<div class="f3">${f('Hạng phòng', 'Deluxe', { cls: 'sel', auto: 'Từ v2' })}${f('Phòng đơn', '2', { auto: 'Từ v2' })}${f('Số phòng', '13 (11 đôi, 2 đơn)', { cls: 'ro', hint: 'Tự tính; đổi ở ô Phòng đơn' })}</div>
<div class="sec">Ngày sử dụng</div>
<div class="f3">${f('Ngày khởi hành', '15/03/2027', { req: 1, auto: 'Từ yêu cầu' })}<div class="field" style="grid-column:span 2"><label>&nbsp;</label><div class="small muted" style="padding-top:6px">Ngày sử dụng của từng dịch vụ = ngày của Ngày trong hành trình (Ngày 1 = 15/03/2027). Khách sạn tính theo từng đêm.</div></div></div>
<div class="sec">Tiền và Markup</div>
<div class="f3">${f('Loại tiền báo giá', 'EUR', { req: 1, cls: 'sel', auto: 'Từ v2' })}${f('Markup chung', '15 %', { req: 1, auto: 'Mặc định Inbound đoàn' })}${f('Làm tròn giá bán', 'Lên bội 10 EUR', { cls: 'ro', hint: 'Cấu hình theo loại tiền' })}</div>
<div class="field"><label>Markup theo hạng mục dịch vụ <span class="muted" style="font-weight:400">· để trống thì dùng Markup chung; mỗi dịch vụ thuộc một hạng mục theo loại dịch vụ (QT05)</span></label>
<div class="grid" style="grid-template-columns:repeat(3,1fr);gap:6px 12px"><div class="flex"><span class="small" style="width:104px">Lưu trú</span><div class="input ph" style="width:70px">15 %</div></div><div class="flex"><span class="small" style="width:104px">Di chuyển</span><div class="input ph" style="width:70px">15 %</div></div><div class="flex"><span class="small" style="width:104px">Vé máy bay</span><div class="input " style="width:70px">5 %</div><span class="auto" >Mặc định hạng mục</span></div><div class="flex"><span class="small" style="width:104px">Hướng dẫn viên</span><div class="input " style="width:70px">20 %</div><span class="auto" style="background:#fef3c7;color:#92400e;white-space:nowrap">Sửa tay</span></div><div class="flex"><span class="small" style="width:104px">Tham quan</span><div class="input ph" style="width:70px">15 %</div></div><div class="flex"><span class="small" style="width:104px">Ăn uống</span><div class="input ph" style="width:70px">15 %</div></div></div><div class="hint">Hạng mục Khác và hạng mục không có dịch vụ trong hành trình được ẩn.</div></div>
<div class="tbl"><table><tr><th>Tỷ giá (quy đổi qua VND)</th><th>Giá trị</th><th>Nguồn</th></tr>
<tr><td>1 EUR</td><td><div class="input" style="width:140px">27.450 ₫</div></td><td class="small">Bảng tỷ giá ngày 11/11/2026 · Kế toán cập nhật</td></tr>
<tr><td>1 USD</td><td><div class="input" style="width:140px">25.380 ₫</div></td><td class="small">Bảng tỷ giá ngày 11/11/2026 · Kế toán cập nhật</td></tr></table></div>
<div class="hint">Chỉ hiện loại tiền có trong giá NCC của hành trình và loại tiền báo giá. Sửa tỷ giá hoặc Markup chỉ áp cho phiên bản này, nguồn ghi Sửa tay. Markup của từng khoản lấy theo hạng mục của dịch vụ; hạng mục để trống dùng Markup chung.</div>`;
S.W27 = P({ last: 'YC-2611-0019', body: mulHdr() + qtools('', '') + vtable([V2({ cur: 1 }), V1]),
  overlay: drawer('Tính giá · phiên bản mới v3', condForm, `<span class="muted small" style="margin-right:auto">Hành trình lưu 11/11/2026 15:40 · 14 ngày, 45 dịch vụ</span>${B('Hủy')}${B('Tính giá', 'p')}`, { wide: true, sub: 'Điền sẵn từ v2 (phiên bản mới nhất); dữ liệu hành trình lấy bản đang lưu' }) });

// ---------- W28 Kết quả ----------
const crow = (k, src, ct, q, up, tot, eur, flag = '', mk = '<span class="muted">15 % · chung</span>') => `<tr class="${flag}"><td><b>${k}</b><div class="muted small">${src}</div></td><td class="small">${ct}</td><td class="small">${q}</td><td class="num small">${up}</td><td class="num small">${tot}</td><td class="num"><b>${eur}</b></td><td>${mk}</td></tr>`;
const sumTop = `<div class="grid" style="grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:10px">
<div class="card"><div class="muted small">Giá vốn</div><div class="kpi">44.317,40 EUR</div><div class="muted small">1.107.886.000 ₫ + 4.280 USD</div></div>
<div class="card"><div class="muted small">Markup</div><div class="kpi">15 %</div><div class="muted small">chung · Vé máy bay 5 % · HDV 20 % · bình quân 14,3 %</div></div>
<div class="card" style="border-color:#93c5fd"><div class="muted small">Giá bán</div><div class="kpi" style="color:#1d4ed8">50.750 EUR</div><div class="muted small">sau làm tròn lên bội 10 EUR</div></div>
<div class="card"><div class="muted small">Lãi gộp</div><div class="kpi">6.432,60 EUR</div><div class="muted small">12,7 % giá bán</div></div></div>
<div class="banner s small" style="margin-bottom:10px">So với ngân sách của khách (đến 2.100 EUR mỗi khách): bình quân <b>2.030 EUR/khách</b> (50.750 ÷ 25 khách), thấp hơn 70 EUR (3,3 %). <span class="ind g">trong ngân sách</span></div>
<div class="tbl" style="margin-bottom:10px"><table><tr><th>Giá bán theo đối tượng</th><th class="num">Giá vốn / người</th><th class="num">Sau Markup</th><th class="num">Giá bán / người</th><th class="num">Số người</th><th class="num">Thành tiền</th></tr>
<tr><td>Người lớn</td><td class="num">1.772,80</td><td class="num">2.026,21</td><td class="num"><b>2.030</b></td><td class="num">23</td><td class="num">46.690 EUR</td></tr>
<tr><td>Trẻ em 6–11 tuổi (8, 10)</td><td class="num">1.415,30</td><td class="num">1.618,55</td><td class="num"><b>1.620</b></td><td class="num">2</td><td class="num">3.240 EUR</td></tr>
<tr><td>Phụ thu phòng đơn</td><td class="num">356,20</td><td class="num">409,63</td><td class="num"><b>410</b></td><td class="num">2</td><td class="num">820 EUR</td></tr></table></div>`;
const viewSeg = on => `<span class="seg">${['Theo ngày', 'Theo dịch vụ'].map(x => `<span class="${x === on ? 'on' : ''}">${x}</span>`).join('')}</span>`;
const costHead = (chip, mid = 'Nhập tay 2') => `<div class="flex" style="margin-bottom:6px"><b>Bảng tính giá</b>${viewSeg('Theo ngày')}${['Tất cả 45', mid, 'Ngày 5'].map(c => `<span class="chip ${c === chip ? 'on' : ''}">${c}</span>`).join('')}<span class="ml muted small">Markup theo hạng mục của dịch vụ; đổi ở Sửa điều kiện</span></div>`;
const costTbl = rows => `<div class="tbl"><table><tr><th>Khoản · Ngày 5 · 19/03/2027</th><th>Hợp đồng · mùa · loại ngày</th><th>Số lượng</th><th class="num">Đơn giá gốc</th><th class="num">Thành tiền gốc</th><th class="num">Quy đổi EUR</th><th>Markup</th></tr>${rows}</table></div>`;
const R5 = [
  crow('Vé máy bay Hà Nội – Huế', 'Vietnam Airlines', 'HĐ 2027 · Cả năm', '23 NL · 2 TE', '1.850.000 ₫ · TE 1.390.000 ₫', '45.330.000 ₫', '1.651,37', '', '<b>5 %</b> · Vé máy bay'),
  crow('HDV tiếng Đức · theo ngày', 'Đất Việt Guides', 'HĐ 2027 · Mùa thường · ngày thường', '1 đoàn/ngày', '1.300.000 ₫', '1.300.000 ₫', '47,36', '', '<b>20 %</b> · Hướng dẫn viên'),
  crow('Xe 29 chỗ sân bay – khách sạn', 'Hue Travel Car', 'HĐ 2027 · Cả năm', '1 xe/lượt', '1.200.000 ₫', '1.200.000 ₫', '43,72', '', '<span class="muted">15 % · Di chuyển (chung)</span>'),
];
const HOT = (miss) => miss
  ? `<tr class="bad"><td><b>Phòng Deluxe · 4★</b><div class="muted small">Mường Thanh Holiday Huế</div></td><td class="small"><span class="ind r">Không có hợp đồng cho 19/03/2027</span><div class="muted">HĐ 2026 hết hạn 31/12/2026; không dùng hợp đồng khác</div></td><td class="small">13 phòng × 1 đêm</td><td colspan="2"><div class="flex"><div class="input bad" style="width:120px">Nhập giá</div><div class="input sel" style="width:70px">VND</div></div></td><td class="num muted">—</td><td><span class="muted">15 % · Lưu trú (chung)</span></td></tr>`
  : crow('Phòng Deluxe · 4★', 'Mường Thanh Holiday Huế', `${ind('Nhập tay', 'v')} Giá chào qua email 10/11`, '13 phòng × 1 đêm', '1.450.000 ₫', '18.850.000 ₫', '686,70', '', '<span class="muted">15 % · Lưu trú (chung)</span>');
S.W28 = P({ last: 'YC-2611-0019', body: mulHdr() + qtools('', '') + vtable([V2({ cur: 1 }), V1]),
  overlay: drawer('Tính giá · phiên bản mới v3', sumTop + costHead('Ngày 5') + costTbl(R5.join('') + HOT(false)),
    `${B('← Sửa điều kiện')}<span class="muted small" style="margin-right:auto">Tỷ giá EUR 27.450 ₫, USD 25.380 ₫ · 45 khoản, 2 nhập tay</span>${B('Hủy')}${B('Lưu phiên bản v3', 'p')}`, { sub: '23 NL, 2 TE (8, 10 tuổi), Deluxe, 2 phòng đơn · khởi hành 15/03/2027 · EUR' }).replace('class="drawer "', 'class="drawer xl"') });


// ---------- W49 Bảng tính giá theo dịch vụ ----------
// Hạng mục (giá vốn → giá bán, EUR): Lưu trú 22.840,50 → 26.266,58; Di chuyển 6.180,40 → 7.107,46; Vé máy bay 3.391,63 → 3.561,21 (5 %);
// Hướng dẫn viên 663,02 → 795,62 (20 %); Tham quan 4.215,60 → 4.847,94; Ăn uống 6.326,25 → 7.275,19; Khác 700,00 → 805,00.
// Tổng 44.317,40 → 50.659,00 trước làm tròn; sau làm tròn theo đối tượng 50.750.
const g = (n, cnt, cost, mk, sell, open) => `<tr class="grp"><td>${open ? '▾' : '▸'} ${n} <span class="muted" style="font-weight:400">· ${cnt}</span></td><td></td><td></td><td class="num">${cost}</td><td>${mk}</td><td class="num">${sell}</td></tr>`;
const sv = (n, src, used, q, cost, mk, sell, x = '') => `<tr><td style="padding-left:22px"><b>${n}</b>${x}<div class="muted small">${src}</div></td><td class="small">${used}</td><td class="small">${q}</td><td class="num small">${cost}</td><td class="small">${mk}</td><td class="num"><b>${sell}</b></td></tr>`;
const svTbl = `<div class="tbl"><table><tr><th>Hạng mục · dịch vụ</th><th>Ngày dùng</th><th>Số lượng</th><th class="num">Giá vốn EUR</th><th>Markup</th><th class="num">Giá bán EUR</th></tr>
${g('Lưu trú', '9 dịch vụ, 13 đêm', '22.840,50', '<span class="muted">15 % · chung</span>', '26.266,58', 1)}
${sv('Cabin Deluxe · du thuyền 2 ngày', 'Bhaya Cruises', 'Ngày 3', '13 cabin × 1 đêm', '1.989,07', '<span class="muted">15 %</span>', '2.287,43')}
${sv('Phòng Deluxe · 4★', 'Mường Thanh Holiday Huế', 'Ngày 5–6', '13 phòng × 2 đêm', '1.373,41', '<span class="muted">15 %</span>', '1.579,42', ' <span class="ind v">Nhập tay</span>')}
<tr><td style="padding-left:22px" class="muted small" colspan="6">7 dịch vụ lưu trú khác · Hà Nội, Hội An, TP. Hồ Chí Minh, Cần Thơ</td></tr>
${g('Vé máy bay', '2 dịch vụ', '3.391,63', '<b>5 %</b>', '3.561,21', 1)}
${sv('Vé máy bay Hà Nội – Huế', 'Vietnam Airlines', 'Ngày 5', '23 NL · 2 TE', '1.651,37', '5 %', '1.733,94')}
${sv('Vé máy bay Đà Nẵng – TP. Hồ Chí Minh', 'Vietnam Airlines', 'Ngày 10', '23 NL · 2 TE', '1.740,26', '5 %', '1.827,27')}
${g('Hướng dẫn viên', '1 dịch vụ', '663,02', '<b>20 %</b>', '795,62', 1)}
${sv('HDV tiếng Đức · theo ngày', 'Đất Việt Guides', 'Ngày 1–14', '14 đoàn/ngày', '663,02', '20 %', '795,62')}
${g('Di chuyển', '11 dịch vụ', '6.180,40', '<span class="muted">15 % · chung</span>', '7.107,46')}
${g('Ăn uống', '13 dịch vụ', '6.326,25', '<span class="muted">15 % · chung</span>', '7.275,19')}
${g('Tham quan', '8 dịch vụ', '4.215,60', '<span class="muted">15 % · chung</span>', '4.847,94')}
${g('Khác', '1 dịch vụ', '700,00', '<span class="muted">15 % · chung</span>', '805,00')}
<tr><td><b>Tổng · 45 dịch vụ</b></td><td></td><td></td><td class="num"><b>44.317,40</b></td><td class="small">bình quân 14,3 %</td><td class="num"><b>50.659,00</b><div class="muted small">làm tròn theo đối tượng → 50.750</div></td></tr></table></div>`;
S.W49 = P({ last: 'YC-2611-0019', body: mulHdr() + qtools('', '') + vtable([V2({ cur: 1 }), V1]),
  overlay: drawer('Tính giá · phiên bản mới v3', sumTop.split('<div class="banner s small"')[0] + `<div class="flex" style="margin-bottom:6px"><b>Bảng tính giá</b>${viewSeg('Theo dịch vụ')}<span class="muted small">gom theo hạng mục; bấm ▸ để mở dịch vụ</span><span class="ml">${B('Mở tất cả', 'sm')}</span></div>` + '<style>.drawer.xl table td{padding:3px 8px}.drawer.xl table th{padding:4px 8px}</style>' + svTbl,
    `${B('← Sửa điều kiện')}<span class="muted small" style="margin-right:auto">Giá bán theo đối tượng và so với ngân sách ở đầu bảng trượt (cuộn lên)</span>${B('Hủy')}${B('Lưu phiên bản v3', 'p')}`, { sub: '23 NL, 2 TE (8, 10 tuổi), Deluxe, 2 phòng đơn · khởi hành 15/03/2027 · EUR' }).replace('class="drawer "', 'class="drawer xl"') });

// ---------- W29 Thiếu giá ----------
const missTop = `<div class="banner e small" style="margin-bottom:10px;align-items:flex-start"><div style="flex:1"><b>Chưa tính được giá bán: còn 2 khoản thiếu.</b> Nhập giá cho từng khoản, kèm ghi chú nguồn giá. Không dùng giá 0, không lấy giá của hợp đồng hoặc mùa khác.
<div style="margin-top:4px">1. Ngày 5, 6 · Phòng Deluxe 4★ · Mường Thanh Holiday Huế · không có hợp đồng cho 19/03 và 20/03/2027 &nbsp; 2. Ngày 7 · Set menu Huế · Golden Lotus Restaurant · thiếu giá trẻ em 6–11 tuổi</div></div></div>
<div class="grid" style="grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:10px">
<div class="card"><div class="muted small">Giá vốn</div><div class="kpi muted">—</div><div class="muted small">đã tính 43 / 45 khoản</div></div><div class="card"><div class="muted small">Markup</div><div class="kpi">15 %</div></div><div class="card"><div class="muted small">Giá bán</div><div class="kpi muted">—</div></div><div class="card"><div class="muted small">Lãi gộp</div><div class="kpi muted">—</div></div></div><div class="muted small" style="margin:-4px 0 8px">So với ngân sách (đến 2.100 EUR mỗi khách): chưa so được khi còn khoản thiếu.</div>`;
S.W29 = P({ last: 'YC-2611-0019', body: mulHdr() + qtools('', '') + vtable([V2({ cur: 1 }), V1]),
  overlay: drawer('Tính giá · phiên bản mới v3', missTop + costHead('Ngày 5', 'Thiếu giá 2') + costTbl(R5.join('') + HOT(true)) + `<div class="flex" style="margin-top:8px"><span class="cb on"></span><span class="small">Áp cùng giá cho Ngày 6 (cùng dịch vụ, đêm 20/03/2027)</span><div class="input" style="flex:1;margin-left:10px">Ghi chú nguồn giá: Giá chào qua email 10/11</div></div>`,
    `${B('← Sửa điều kiện')}<span class="muted small" style="margin-right:auto">Còn 2 khoản thiếu giá · chưa lưu được</span>${B('Hủy')}${B('Lưu phiên bản v3', 'dis')}`, { sub: '23 NL, 2 TE (8, 10 tuổi), Deluxe, 2 phòng đơn · khởi hành 15/03/2027 · EUR' }).replace('class="drawer "', 'class="drawer xl"') });

// ---------- W30 Sau khi lưu v3 ----------
S.W30 = P({ last: 'YC-2611-0019', body: mul3() + qtools('Bấm một phiên bản để xem chi tiết, publish proposal và ghi kết quả.') + vtable([V3('Chưa có kết quả', '<span class="muted">Chưa publish</span>', { hot: 1 }), V2({}), V1]),
  overlay: toast('Đã lưu phiên bản v3 · 50.750 EUR', '', true) });

// ---------- Bảng trượt phiên bản ----------
const priceBlock = `<div class="tbl"><table><tr><th>Giá bán</th><th class="num">Đơn giá</th><th class="num">Số người</th><th class="num">Thành tiền</th></tr>
<tr><td>Người lớn</td><td class="num">2.030</td><td class="num">23</td><td class="num">46.690</td></tr><tr><td>Trẻ em 6–11 tuổi</td><td class="num">1.620</td><td class="num">2</td><td class="num">3.240</td></tr><tr><td>Phụ thu phòng đơn</td><td class="num">410</td><td class="num">2</td><td class="num">820</td></tr>
<tr><td><b>Tổng (EUR)</b></td><td></td><td></td><td class="num"><b>50.750</b></td></tr></table></div>
<div class="small" style="margin-top:4px">Bình quân <b>2.030 EUR/khách</b> · ngân sách đến 2.100 EUR/khách <span class="ind g">trong ngân sách</span></div><div class="muted small" style="margin-top:2px">Giá vốn 44.317,40 EUR · Markup 15 % · EUR 27.450 ₫, USD 25.380 ₫ · 2 khoản nhập tay · ${B('Xem giá vốn từng khoản', 'lk')}</div>`;
const resBlock = (on, note = '', ro = false) => `<div class="sec">Kết quả báo giá</div>${ro ? qb(on) : seg(RES, on)}${f('Ghi chú phản hồi của khách', note || '<span class="muted">Không bắt buộc</span>', { cls: ro ? 'ro area' : 'area' })}`;
const propNone = `<div class="sec">Proposal cho khách</div><div class="flex"><span class="muted small" style="flex:1">Chưa publish. Proposal tự tạo từ phiên bản này theo mẫu báo giá; khách xem bằng link và tải PDF trên đó.</span>${B('Publish proposal', 'p')}</div>`;
const propLive = (views = 'Đã mở 3 lần · gần nhất 11/11/2026 16:42') => `<div class="sec">Proposal cho khách</div>
<div class="linkbox"><span>🔗</span><b style="flex:1">https://proposal.topas.example/p/7Kq2mX9d</b>${B('Sao chép link', 'sm')}${B('Mở proposal', 'sm')}</div>
<div class="flex small" style="margin-top:6px"><span>${bd('Đang mở', 'b-green')} English · publish 11/11/2026 15:58 · hạn <b>11/12/2026</b></span></div>
<div class="flex small" style="margin-top:4px"><span class="muted" style="flex:1">${views}</span>${B('Gia hạn', 'sm')}${B('Thu hồi link', 'sm d')}</div>
<div style="margin-top:6px">${B('+ Publish bản tiếng Việt', 'lk')}</div>`;
const vDrawer = (title, body, foot, sub = 'Lưu 11/11/2026 15:52 bởi Nguyễn Hoàng Nam · hành trình 14 ngày, 45 dịch vụ') => drawer(title, body, foot, { sub });
const vfootEdit = (extra = '') => `${B('Sửa hành trình')}${B('Sửa giá')}${extra}`;

S.W31 = P({ last: 'YC-2611-0019', body: mul3() + qtools('') + vtable([V3('Chưa có kết quả', '<span class="muted">Chưa publish</span>', { sel: 1 }), V2({}), V1]),
  overlay: vDrawer(`Phiên bản v3 · 50.750 EUR ${qb('Chưa có kết quả')}`, priceBlock + propNone + resBlock('Chưa có kết quả'), vfootEdit()) });

// ---------- W32 Publish ----------
const incl = ['Accommodation in Deluxe rooms, 13 nights', 'Daily breakfast', 'Meals as per itinerary', 'German-speaking guide throughout', 'Private air-conditioned transport', 'Domestic flights HAN–HUI, DAD–SGN', 'Entrance fees', 'Ha Long Bay overnight cruise'];
const excl = ['International flights', 'Vietnam visa', 'Travel insurance', 'Personal expenses and tips'];
const tg = (t, x = '') => `<span class="tag ${x}">${t}</span>`;
const pubBody = (enOk = true) => `<div class="f3"><div class="field"><label>Ngôn ngữ <span class="req">*</span></label>${seg(['English', 'Tiếng Việt'], 'English')}<div class="hint">Gợi ý English vì ngôn ngữ phục vụ là Tiếng Đức</div></div>
${f('Hạn hiệu lực báo giá', '11/12/2026', { req: 1, auto: '30 ngày' })}${f('Mẫu proposal', 'Mẫu proposal công ty · English', { cls: 'ro', auto: 'Theo ngôn ngữ' })}</div>
<div class="field"><label>Dịch vụ bao gồm <span class="auto">Tổng hợp từ 45 dịch vụ</span></label><div class="tags">${incl.map(t => tg(t)).join('')}${tg('+ Thêm', 'sg')}</div></div>
<div class="field"><label>Không bao gồm <span class="auto">Từ dịch vụ và mẫu</span></label><div class="tags">${excl.map(t => tg(t, 'x')).join('')}${tg('+ Thêm', 'sg')}</div></div>
<div class="kv" style="margin-top:6px"><span>Giá hiển thị</span><span>Theo người lớn, trẻ em 6–11 tuổi, phụ thu phòng đơn và tổng · EUR</span><span>Nội dung tiếng Anh</span><span>${enOk ? '<span class="ind g">14/14 ngày</span> · 1 bản dịch nháp chưa đánh dấu kiểm tra (Ngày 9)' : '<span class="ind r">12/14 ngày</span>'}</span><span>Người liên hệ trên proposal</span><span>Nguyễn Hoàng Nam · nam.nguyen@topas.example</span></div>`;
S.W32 = P({ last: 'YC-2611-0019', body: mul3() + qtools('') + vtable([V3('Chưa có kết quả', '<span class="muted">Chưa publish</span>', { sel: 1 }), V2({}), V1]),
  overlay: modal('Publish proposal · v3', pubBody(), `${B('Xem trước')}<span class="ml"></span>${B('Hủy')}${B('Publish và sao chép link', 'p')}`, 820) });

// ---------- W35 Thiếu tiếng Anh ----------
S.W35 = P({ last: 'YC-2611-0019', body: mul3() + qtools('') + vtable([V3('Chưa có kết quả', '<span class="muted">Chưa publish</span>', { sel: 1 }), V2({}), V1]),
  overlay: modal('Publish proposal · v3', `<div class="banner e small" style="margin-bottom:10px">Chưa publish được bản English: 2 ngày chưa có nội dung tiếng Anh. Nhập ngay dưới đây hoặc dịch nháp rồi kiểm tra.</div>
<div class="tbl" style="margin-bottom:10px"><table><tr><th>Ngày</th><th>Tiếng Việt</th><th>English</th></tr>
<tr class="bad"><td><b>Ngày 11</b><div class="muted small">25/03/2027</div></td><td class="small">TP. Hồ Chí Minh – Củ Chi</td><td><div class="input bad">Title (English)</div><div class="flex" style="margin-top:4px">${B('Dịch nháp', 'sm')}</div></td></tr>
<tr class="bad"><td><b>Ngày 12</b><div class="muted small">26/03/2027</div></td><td class="small">Mekong – Cần Thơ</td><td><div class="input bad">Title (English)</div><div class="flex" style="margin-top:4px">${B('Dịch nháp', 'sm')}</div></td></tr></table></div>
<div class="muted small">Nội dung tiếng Anh nhập ở đây được lưu vào hành trình (KD06.2) cho các lần publish sau; không làm hành trình khác báo giá.</div>`,
    `${B('Đổi sang Tiếng Việt')}<span class="ml"></span>${B('Hủy')}${B('Publish và sao chép link', 'dis')}`, 820) });

// ---------- W34 Sau publish ----------
S.W34 = P({ last: 'YC-2611-0019', body: mul3() + qtools('') + vtable([V3('Chưa có kết quả', 'English · hạn 11/12/2026<div class="muted">mở 3 lần · gần nhất 16:42</div>', { sel: 1 }), V2({}), V1]),
  overlay: vDrawer(`Phiên bản v3 · 50.750 EUR ${qb('Chưa có kết quả')}`, priceBlock + propLive() + resBlock('Chưa có kết quả'), vfootEdit()) });

// ---------- W38 Ghi Cần điều chỉnh (v2) ----------
const V2R = V('v2', '08/11/2026<div class="muted">Nguyễn Hoàng Nam</div>', COND2, '52.750 EUR', 'English · hạn 08/12/2026<div class="muted">mở 2 lần · gần nhất 09/11</div>', 'Cần điều chỉnh', { cur: 1, sel: 1, avg: 'bình quân 2.110/khách <span class="ind a">vượt ngân sách 0,5 %</span>' });
const price2 = `<div class="tbl"><table><tr><th>Giá bán</th><th class="num">Đơn giá</th><th class="num">Số người</th><th class="num">Thành tiền</th></tr>
<tr><td>Người lớn</td><td class="num">2.110</td><td class="num">23</td><td class="num">48.530</td></tr><tr><td>Trẻ em 6–11 tuổi</td><td class="num">1.690</td><td class="num">2</td><td class="num">3.380</td></tr><tr><td>Phụ thu phòng đơn</td><td class="num">420</td><td class="num">2</td><td class="num">840</td></tr><tr><td><b>Tổng (EUR)</b></td><td></td><td></td><td class="num"><b>52.750</b></td></tr></table></div><div class="small" style="margin-top:4px">Bình quân <b>2.110 EUR/khách</b> · ngân sách đến 2.100 EUR/khách <span class="ind a">vượt ngân sách 10 EUR (0,5 %)</span></div>`;
S.W38 = P({ last: 'YC-2611-0019', body: mulHdr() + qtools('') + vtable([V2R, V1]),
  overlay: vDrawer(`Phiên bản v2 · 52.750 EUR ${qb('Cần điều chỉnh')}`, price2 + `<div class="sec">Proposal cho khách</div><div class="small">${bd('Đang mở', 'b-green')} English · hạn 08/12/2026 · mở 2 lần, gần nhất 09/11/2026</div>` +
    resBlock('Cần điều chỉnh', 'Anna muốn đổi khách sạn Huế sang 4 sao; giá mục tiêu khoảng 2.050 EUR/người lớn.') + `<div class="banner w small">Bước tiếp theo theo kết quả: sửa hành trình (đổi khách sạn) rồi tính giá, hoặc chỉ sửa giá (Markup, tỷ giá) từ v2.</div>`,
    `${B('Sửa giá')}${B('Sửa hành trình', 'p')}`, 'Lưu 08/11/2026 10:05 bởi Nguyễn Hoàng Nam · hành trình 14 ngày, 45 dịch vụ'), });
S.W38 = S.W38.replace('</body>', '<div class="toast" style="bottom:64px"><span>Đã ghi kết quả Cần điều chỉnh cho v2</span></div>' + '</body>');

// ---------- W40 Chốt → Tạo Booking ----------
S.W40 = P({ last: 'YC-2611-0019', body: mulHdr({ cnt: { q: '<span class="cnt">3</span>' }, meta: { q: 'v3 · Chốt' } }) + qtools('') + vtable([V3('Chốt', 'English · hạn 11/12/2026<div class="muted">mở 5 lần · gần nhất 17:02</div>', { sel: 1 }), V2({}), V1]),
  overlay: vDrawer(`Phiên bản v3 · 50.750 EUR ${qb('Chốt')}`, priceBlock + propLive('Đã mở 5 lần · gần nhất 11/11/2026 17:02') + resBlock('Chốt', 'Anna Schneider xác nhận qua email 11/11/2026 17:05.') +
    `<div class="banner s small">Tạo Booking mở hồ sơ Booking mới, kế thừa khách, hành trình 14 ngày và giá trị 50.750 EUR của đúng v3. Booking có khi lưu ở KD08.</div>`, vfootEdit(B('Tạo Booking', 'g'))) });

// ---------- W41 KD08 tạo mới (đích) ----------
S.W41 = P({ crumb: 'Booking', last: 'Tạo Booking', side: 'Booking', body: `<div class="hdr"><div class="r1"><span class="code">Booking mới</span>${bd('Chưa lưu', 'b-gray')}</div>
<div class="tabs"><div class="tab on">Thông tin và hủy Booking</div><div class="tab lock">Điều khoản và lịch thanh toán 🔒</div></div></div>
<div class="card ro" style="margin-top:10px"><h3>Kế thừa từ yêu cầu <span class="lnk">YC-2611-0019</span> · phiên bản v3 Chốt <span class="lockn">🔒 chỉ đọc</span></h3>
<div class="f3">${f('Khách hàng', 'Müller Reisen GmbH · Anna Schneider', { cls: 'ro' })}${f('Thời gian', '15/03 – 28/03/2027 · 14N13Đ', { cls: 'ro' })}${f('Số khách', '25 (23 người lớn, 2 trẻ em)', { cls: 'ro' })}</div>
<div class="f3">${f('Hành trình', '14 ngày, 45 dịch vụ (bản của v3)', { cls: 'ro' })}${f('Giá trị Booking', '50.750 EUR', { cls: 'ro' })}${f('Ngôn ngữ phục vụ · loại Tour', 'Tiếng Đức · Inbound đoàn', { cls: 'ro' })}</div></div>
<div class="muted small" style="margin-top:8px">Nội dung hồ sơ Booking đặc tả ở RSD KD08. Hình này chỉ minh họa đích của nút Tạo Booking ở KD06.3.</div>` + savebar('Chưa lưu', B('Hủy') + B('Lưu Booking', 'p')) });

// ---------- W42 Đã có Booking ----------
S.W42 = P({ last: 'YC-2611-0019', body: mulHdr({ st: 'bk', cnt: { q: '<span class="cnt">3</span>' }, meta: { q: 'v3 · Chốt', bk: 'BK-2611-0158' }, act: `<span class="muted small">Hủy yêu cầu khóa: đang có Booking hiệu lực</span>${B('Hủy yêu cầu', 'dis')}${B('Mở Booking', 'p')}${B('⋯')}` }) +
  `<div class="banner s small" style="margin-top:10px">Đã có Booking BK-2611-0158 (Hiệu lực) tạo từ v3 lúc 11/11/2026 17:20. Hồ sơ chỉ xem. Thay đổi chương trình: bấm Điều chỉnh chương trình ở Booking, hồ sơ mở ở chế độ điều chỉnh.</div>` +
  qtools('', '') + vtable([V3('Chốt', 'English · hạn 11/12/2026<div class="muted">mở 5 lần</div>', { bk: 'Booking BK-2611-0158' }), V2({}), V1]) });

// ---------- W39 Ghi Chốt khi đã có bản Chốt (Hanami) ----------
const hanHdr = (o = {}) => hdr(REQ.han, Object.assign({ tab: 'q', cnt: { q: '<span class="cnt">4</span>' }, meta: { q: 'v4 · Chưa có kết quả' } }, o));
const HV = [
  V('v4', '11/11/2026<div class="muted">Nguyễn Hoàng Nam</div>', '7 ngày · 28 NL · JPY · Markup 12%', '5.460.000 JPY', 'English · hạn 11/12/2026', 'Chưa có kết quả', { cur: 1, sel: 1 }),
  V('v3', '06/11/2026<div class="muted">Nguyễn Hoàng Nam</div>', '7 ngày · 32 NL · JPY · Markup 12%', '6.120.000 JPY', 'English · Đã thu hồi', 'Chốt', { bk: '<span class="muted">Booking BK-2611-0149 · Đã hủy</span>' }),
];
S.W39 = P({ last: 'YC-2610-0031', body: hanHdr() + qtools('') + vtable(HV),
  overlay: modal('Ghi Chốt cho v4?', `<div class="small" style="margin-bottom:8px">Mỗi yêu cầu chỉ có một phiên bản Chốt. <b>v3</b> đang là Chốt (Booking BK-2611-0149 tạo từ v3 đã hủy; yêu cầu đã mở lại 11/11/2026, không có Booking hiệu lực).</div>
${f('Kết quả mới cho v3', 'Cần điều chỉnh', { req: 1, cls: 'sel', hint: 'Chọn Cần điều chỉnh hoặc Không chốt' })}
${f('Ghi chú cho v4', 'Sato Yuki xác nhận 28 khách theo báo giá v4.', { cls: 'area' })}`, `${B('Hủy')}${B('Đổi v3 và ghi Chốt cho v4', 'g')}`, 520) });

// ---------- W47 Yêu cầu tự hủy khi Booking bị hủy (Hanami, trước khi mở lại) ----------
S.W47 = P({ last: 'YC-2610-0031', body: hdr(REQ.han, { st: 'cx', tab: 'q', cnt: { q: '<span class="cnt">3</span>' }, act: B('Mở lại yêu cầu') + B('⋯') }) +
  `<div class="banner small" style="margin-top:10px;background:#f3f4f6;border:1px solid #e5e7eb;color:#374151"><span style="flex:1">Đã hủy 10/11/2026 14:30 do hủy Booking BK-2611-0149 (Nguyễn Hoàng Nam hủy ở Booking) · <b>Booking đã hủy</b> · “Khách giảm còn 28 khách, cần báo giá lại.” Hồ sơ chỉ còn xem; link proposal đã thu hồi. Khách muốn đặt lại: Mở lại yêu cầu, báo giá và tạo Booking mới.</span></div>` +
  qtools('Bấm một phiên bản để xem chi tiết.', '') + vtable([
    V('v3', '06/11/2026<div class="muted">Nguyễn Hoàng Nam</div>', '7 ngày · 32 NL · JPY · Markup 12%', '6.120.000 JPY', 'English · Đã thu hồi<div class="muted">mở 6 lần</div>', 'Chốt', { cur: 1, bk: '<span class="muted">Booking BK-2611-0149 · Đã hủy</span>' }),
    V('v2', '01/11/2026<div class="muted">Nguyễn Hoàng Nam</div>', '7 ngày · 32 NL · JPY · Markup 12%', '6.240.000 JPY', 'English · có bản mới hơn', 'Cần điều chỉnh'),
    V('v1', '24/10/2026<div class="muted">Nguyễn Hoàng Nam</div>', '7 ngày · 30 NL · JPY · Markup 12%', '5.910.000 JPY', 'English · có bản mới hơn', 'Cần điều chỉnh')]) });

// ---------- W51 Chế độ điều chỉnh, sau khi lưu v4 (Müller, Booking BK-2611-0158 từ v3) ----------
// v4 = v3 + Ca Huế 350.000 ₫ × 25 khách = 8.750.000 ₫ = 318,76 EUR → giá vốn 44.636,16 EUR; NL 2.026,21 + 14,66 → 2.050; TE 1.618,55 + 14,66 → 1.640;
// phòng đơn 410 → 2.050 × 23 + 1.640 × 2 + 410 × 2 = 51.250 EUR; bình quân 2.050/khách (trong ngân sách 2.100).
const ADJ_BAND3 = `<div class="banner small" style="margin-top:10px;background:#faf5ff;border:1px solid #e9d5ff;color:#5b21b6"><span style="flex:1"><b>Chế độ điều chỉnh cho Booking BK-2611-0158</b> · phiên bản của Booking: v3. Sửa hành trình thì giá tự tính lại, lưu thành phiên bản mới; publish proposal của phiên bản mới để gửi khách nếu cần. Không ghi kết quả ở đây; khách đồng ý thì về Booking bấm Chuyển sang Điều hành.</span></div>`;
const V4A = V('v4 ' + ind('Điều chỉnh cho BK-2611-0158', 'v'), '11/11/2026<div class="muted">Nguyễn Hoàng Nam</div>', COND2, '51.250 EUR', '<span class="muted">Chưa publish</span>', 'Chưa có kết quả', { cur: 1, sel: 1, avg: 'bình quân 2.050/khách <span class="ind g">trong ngân sách</span>' });
const price4 = `<div class="tbl"><table><tr><th>Giá bán</th><th class="num">Đơn giá</th><th class="num">Số người</th><th class="num">Thành tiền</th></tr>
<tr><td>Người lớn</td><td class="num">2.050</td><td class="num">23</td><td class="num">47.150</td></tr><tr><td>Trẻ em 6–11 tuổi</td><td class="num">1.640</td><td class="num">2</td><td class="num">3.280</td></tr><tr><td>Phụ thu phòng đơn</td><td class="num">410</td><td class="num">2</td><td class="num">820</td></tr>
<tr><td><b>Tổng (EUR)</b></td><td></td><td></td><td class="num"><b>51.250</b></td></tr></table></div>
<div class="small" style="margin-top:4px">So với v3 của Booking (50.750 EUR): <b>+500 EUR</b> · thêm Ca Huế trên sông Hương ở Ngày 5 · bình quân 2.050 EUR/khách <span class="ind g">trong ngân sách</span></div><div class="muted small" style="margin-top:2px">Giá vốn 44.636,16 EUR · Markup 15 % · EUR 27.450 ₫, USD 25.380 ₫ · ${B('Xem giá vốn từng khoản', 'lk')}</div>`;
S.W51 = P({ last: 'YC-2611-0019', body: mulHdr({ st: 'bk', cnt: { q: '<span class="cnt">4</span>' }, meta: { q: 'v4 · Chưa có kết quả', bk: 'BK-2611-0158' }, act: B('Về Booking BK-2611-0158', 'p') + B('⋯') }) + ADJ_BAND3 +
  qtools('Phiên bản lưu ở chế độ điều chỉnh mang nhãn Điều chỉnh cho BK-2611-0158.') + vtable([V4A, V3('Chốt', 'English · hạn 11/12/2026<div class="muted">mở 5 lần</div>', { cur: 0, bk: 'Booking BK-2611-0158' }), V2({}), V1]),
  overlay: vDrawer(`Phiên bản v4 · 51.250 EUR ${qb('Chưa có kết quả')}`, price4 +
    `<div class="sec">Proposal cho khách</div><div class="flex"><span class="muted small" style="flex:1">Chưa publish. Proposal của v4 có link riêng, ghi “Phương án điều chỉnh cho Booking BK-2611-0158”. Link English của v3 (Booking) giữ nguyên.</span>${B('Publish proposal', 'p')}</div>` +
    `<div class="sec">Kết quả báo giá</div>${qb('Chưa có kết quả')}<div class="banner small" style="margin-top:8px;background:#faf5ff;border:1px solid #e9d5ff;color:#5b21b6">Kết quả ghi khi Chuyển sang Điều hành ở Booking BK-2611-0158: v4 (phiên bản điều chỉnh mới nhất của Booking) tự thành Chốt, Booking lên v4, v3 thành Đã thay thế.</div>`,
    `${B('Sửa giá')}`, 'Lưu 11/11/2026 18:12 bởi Nguyễn Hoàng Nam · chế độ điều chỉnh · hành trình 14 ngày, 46 dịch vụ'),
});

// ---------- Proposal công khai ----------
const PCSS = `.pw{width:1280px;height:800px;overflow:hidden;background:#f5f5f4}
.pt{background:#0f3d3e;color:#fff;padding:14px 60px;display:flex;align-items:center;gap:14px}
.pt .lg{font-weight:800;font-size:18px;letter-spacing:.5px}
.pc{width:1000px;margin:18px auto;background:#fff;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.06);padding:22px 30px}
.pc h1{font-size:24px;margin:0 0 4px;font-family:Georgia,serif}
.ptab td,.ptab th{padding:6px 10px}
.day{display:grid;grid-template-columns:120px 1fr;gap:10px;padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:12.5px}
.day b{font-size:13px}
.band{background:#fef3c7;color:#78350f;padding:10px 60px;display:flex;gap:12px;align-items:center;font-size:13px}`;
const ptop = (r = 'v3') => `<div class="pt"><span class="lg">TOPAS Travel</span><span style="opacity:.75">Inbound DMC · Vietnam</span><span class="ml flex" style="margin-left:auto">${r ? `<span style="opacity:.8;font-size:12px">Quotation ${r} · valid until ${r === 'v3' ? '11 Dec 2026' : '8 Dec 2026'}</span>` : ''}</span></div>`;
const days = [['Day 1 · Mon 15 Mar', 'Hanoi – Arrival', 'Meet at Noi Bai airport, transfer to hotel. Welcome dinner in the Old Quarter.'], ['Day 2 · Tue 16 Mar', 'Hanoi city tour', 'Ho Chi Minh Mausoleum, Temple of Literature, cyclo ride through the Old Quarter.'], ['Day 3 · Wed 17 Mar', 'Hanoi – Ha Long Bay', 'Drive to Ha Long, board the cruise, kayaking and sunset on deck. Overnight on board.'], ['Day 4 · Thu 18 Mar', 'Ha Long – Hanoi', 'Tai chi at sunrise, brunch while cruising, return to Hanoi.']];
const proposal = (ver, prices, band = '') => bare(`<div class="pw">${ptop(ver)}${band}<div class="pc">
<div class="flex"><div><div class="muted small">PROPOSAL FOR MÜLLER REISEN GMBH · ATTN. ANNA SCHNEIDER</div><h1>Vietnam North to South · 14 days</h1><div class="muted">15 – 28 March 2027 · 25 travellers (23 adults, 2 children) · German-speaking guide</div></div><span class="ml">${B('⬇ Download PDF', 'p')}</span></div>
<div class="grid" style="grid-template-columns:1.25fr 1fr;gap:24px;margin-top:16px">
<div><div class="sec">Itinerary</div>${days.map(d => `<div class="day"><span class="muted">${d[0]}</span><div><b>${d[1]}</b><div>${d[2]}</div></div></div>`).join('')}<div class="muted small" style="padding-top:6px">Days 5–14 continue below…</div></div>
<div><div class="sec">Price (EUR)</div><div class="tbl"><table class="ptab"><tr><th>Per person</th><th class="num">Price</th><th class="num">Pax</th></tr>${prices}</table></div>
<div class="sec">Included</div><div class="small">${incl.map(t => '✓ ' + t).join('<br>')}</div>
<div class="sec">Not included</div><div class="small">${excl.map(t => '✕ ' + t).join('<br>')}</div></div></div>
<div class="muted small" style="margin-top:14px;border-top:1px solid #e5e7eb;padding-top:8px">Your consultant: Nguyễn Hoàng Nam · nam.nguyen@topas.example · Prices subject to availability at the time of booking.</div></div></div>`, PCSS);
const P3 = `<tr><td>Adult</td><td class="num">2,030</td><td class="num">23</td></tr><tr><td>Child 6–11</td><td class="num">1,620</td><td class="num">2</td></tr><tr><td>Single supplement</td><td class="num">410</td><td class="num">2</td></tr><tr><td><b>Total</b></td><td class="num"><b>50,750</b></td><td></td></tr>`;
const P2 = `<tr><td>Adult</td><td class="num">2,110</td><td class="num">23</td></tr><tr><td>Child 6–11</td><td class="num">1,690</td><td class="num">2</td></tr><tr><td>Single supplement</td><td class="num">420</td><td class="num">2</td></tr><tr><td><b>Total</b></td><td class="num"><b>52,750</b></td><td></td></tr>`;
S.W33 = proposal('v3', P3);
S.W37 = proposal('v2', P2, `<div class="band">ⓘ A newer version of this proposal is available (v3, 11 Nov 2026). <a class="lnk" style="font-weight:600">View the latest proposal →</a></div>`);
S.W36 = bare(`<div class="pw">${ptop('')}<div class="pc" style="width:620px;margin-top:120px;text-align:center;padding:40px">
<div style="font-size:34px">⏳</div><h1 style="font-size:20px;font-family:inherit">This proposal is no longer available</h1>
<div class="muted" style="margin:8px 0 16px">The link has expired or has been withdrawn by the sender. Prices and itinerary are not shown.</div>
<div class="small">Please contact your consultant for an updated proposal:<br><b>Nguyễn Hoàng Nam</b> · nam.nguyen@topas.example</div></div></div>`, PCSS);

module.exports = S;
