// KD06.2 Hành trình. Tên và mục đích ở captions.js.
// Bianchi (YC-2611-0031): sao chép TM-008 (8 ngày, 21 dịch vụ) rồi ghép Ngày 1, 2 của TM-010 thành Ngày 8, 9 → 10 ngày, 27 dịch vụ.
// Müller (YC-2611-0019): hành trình từ TM-005 (14 ngày); đổi khách sạn Huế ở Ngày 5, 6 sau báo giá v2.
const { NAM, P, ind, toast, REQ, hdr, savebar, drawer, modal, f, B, bd } = require('./kd06');
const S = {};

const biaHdr = (o = {}) => hdr(REQ.bia, Object.assign({ tab: 'h' }, o));
const mulHdr = (o = {}) => hdr(REQ.mul, Object.assign({ tab: 'h', cnt: { q: '<span class="cnt">2</span>' } }, o));
const tag = t => `<span class="tag">${t}</span>`;

// Ngày: [số, ngày, thứ, tiêu đề, số dv, nhãn phụ]
const D = (n, d, w, t, sv, x = '') => ({ n, d, w, t, sv, x });
const BIA8 = [
  D(1, '10/03', 'Thứ Tư', 'Hà Nội – đón khách', 2), D(2, '11/03', 'Thứ Năm', 'Hà Nội – Hạ Long, ngủ du thuyền', 2), D(3, '12/03', 'Thứ Sáu', 'Hạ Long – Hà Nội', 3),
  D(4, '13/03', 'Thứ Bảy', 'Hà Nội – bay Huế – city Huế', 3), D(5, '14/03', 'Chủ Nhật', 'Huế – đèo Hải Vân – Hội An', 5), D(6, '15/03', 'Thứ Hai', 'Hội An – Mỹ Sơn', 3),
  D(7, '16/03', 'Thứ Ba', 'Hội An tự do', 2), D(8, '17/03', 'Thứ Tư', 'Hội An – sân bay Đà Nẵng', 1, ind('1 ngừng', 'a')),
];
const BIA10 = BIA8.slice(0, 7).concat([
  D(8, '17/03', 'Thứ Tư', 'Đà Nẵng – Sơn Trà – phố cổ', 3, ind('TM-010 · N1', 'g')), D(9, '18/03', 'Thứ Năm', 'Bà Nà Hills – cầu Vàng', 3, ind('TM-010 · N2', 'g')),
  D(10, '19/03', 'Thứ Sáu', 'Hội An – sân bay Đà Nẵng', 1, ind('1 ngừng', 'a')),
]);
const MUL14 = [
  D(1, '15/03', 'Thứ Hai', 'Hà Nội – đón khách', 2), D(2, '16/03', 'Thứ Ba', 'Hà Nội city tour', 4), D(3, '17/03', 'Thứ Tư', 'Hà Nội – Hạ Long, ngủ du thuyền', 3),
  D(4, '18/03', 'Thứ Năm', 'Hạ Long – Hà Nội', 2), D(5, '19/03', 'Thứ Sáu', 'Hà Nội – bay Huế', 4), D(6, '20/03', 'Thứ Bảy', 'Huế – lăng tẩm, sông Hương', 4),
  D(7, '21/03', 'Chủ Nhật', 'Huế – đèo Hải Vân – Hội An', 4), D(8, '22/03', 'Thứ Hai', 'Hội An – Mỹ Sơn', 3), D(9, '23/03', 'Thứ Ba', 'Hội An tự do', 2),
  D(10, '24/03', 'Thứ Tư', 'Hội An – bay TP. Hồ Chí Minh', 3),
];
function dnav(days, on, o = {}) {
  return `<div class="dnav"><div class="flex" style="padding:8px 10px;border-bottom:1px solid #e5e7eb"><b>${o.total || days.length} ngày</b><span class="ml muted small">${o.ro ? '' : 'Kéo ⠿ để sắp xếp'}</span></div>
${days.map(d => `<div class="dn ${d.n === on ? 'on' : ''} ${(o.newDays || []).includes(d.n) ? 'new' : ''} ${(o.bad || []).includes(d.n) ? 'bad' : ''}">${o.ro ? '' : '<span class="hd">⠿</span>'}<div><div class="t1"><b>Ngày ${d.n}</b><span class="muted">${d.d} · ${d.sv} dv</span>${(o.en || {})[d.n] || ''}</div><div class="t2">${d.t}</div>${d.x ? `<div>${d.x}</div>` : ''}</div></div>`).join('')}
${o.more || ''}${o.ro ? '' : `<div style="padding:8px 10px">${B('+ Thêm ngày', 'sm')}</div>`}</div>`;
}
// Dòng dịch vụ: [tên, NCC · loại, số lượng, ghi chú, giá tham chiếu, cờ]
const R = (n, s, q, note, pr, flag = '') => ({ n, s, q, note, pr, flag });
function svTable(rows, ro = false) {
  return `<div class="tbl"><table class="sv"><tr>${ro ? '' : '<th style="width:14px"></th>'}<th>Dịch vụ</th><th>Số lượng</th><th>Ghi chú</th><th>Giá tham chiếu</th>${ro ? '' : '<th></th>'}</tr>
${rows.map(r => `<tr class="${r.flag === 'bad' ? 'bad' : r.flag === 'new' ? 'new' : ''}">${ro ? '' : '<td class="hdl">⠿</td>'}<td><b>${r.n}</b><div class="muted small">${r.s}</div></td><td>${ro ? r.q : `<span class="isel">${r.q}</span>`}</td><td>${r.note}</td><td>${r.pr}</td>${ro ? '' : '<td class="muted">⋯</td>'}</tr>`).join('')}</table></div>`;
}
function editor(d, content, rows, o = {}) {
  const ro = o.ro;
  return `<div class="ed"><div class="eh"><span class="dt">Ngày ${d.n}</span><span class="muted">${d.w} ${d.d}/${d.y || '2027'}</span>${ro ? `<b style="margin-left:8px">${d.t}</b>` : `<div class="input" style="flex:1">${d.t}</div>${B('⋯')}`}</div>
${o.lang || ''}
<div class="field"><label>Nội dung lịch trình${ro ? '' : ' <span class="req">*</span>'}</label>${ro ? `<div class="small">${content}</div>` : `<div class="input area"><div>${content}</div></div>`}</div>
<div class="flex" style="margin:4px 0 6px"><b>Dịch vụ</b><span class="muted small">${o.svHint || 'chọn từ danh mục NCC · số lượng theo số khách và số phòng của yêu cầu'}</span>${ro ? '' : `<span class="ml">${B('+ Thêm dịch vụ', 'sm')}</span>`}</div>
${svTable(rows, ro)}${o.after || ''}</div>`;
}
const HDV_DE = R('HDV tiếng Đức · theo ngày', 'Đất Việt Guides · Hướng dẫn viên', 'Cố định · 1', '—', '1.300.000 ₫ /đoàn/ngày');
const D5 = [
  R('Xe 16 chỗ Huế – Hội An qua đèo Hải Vân', 'Hue Travel Car · Vận chuyển', 'Cố định · 1', 'Đón 8:00 tại khách sạn', '2.600.000 ₫ /xe/lượt'),
  Object.assign({}, HDV_DE, { n: HDV_DE.n + ' ' + ind('Khác ngôn ngữ phục vụ', 'a') }),
  R('Set menu Huế · bữa trưa', 'Golden Lotus Restaurant · Nhà hàng', 'Theo số khách · 16', '—', '<span class="ind a">Chưa có giá cho 14/03/2027</span>'),
  R('Set menu Việt Nam · bữa tối', 'Mỹ Sơn Garden · Nhà hàng', 'Theo số khách · 16', '—', '350.000 ₫ /khách'),
  R('Phòng Deluxe Garden View', 'Hoi An Riverside Resort · Khách sạn', 'Theo số phòng · 7', 'Phòng twin', '2.800.000 ₫ /phòng/đêm'),
];
const D5_TXT = 'Trả phòng, xe đưa đoàn vượt đèo Hải Vân, dừng chụp ảnh tại đỉnh đèo. Ăn trưa set menu Huế. Chiều nhận phòng tại Hội An, tối dạo phố cổ, ăn tối tại nhà hàng Mỹ Sơn Garden.';
const tools = (src, extra = '') => `<div class="flex" style="margin:10px 0 8px"><span class="muted small">${src}</span>${extra}<span class="ml flex">${B('Ghép ngày')}${B('Tạo lại hành trình ▾')}</span></div>`;
const grid = (nav, ed) => `<div class="lt" style="height:${'500px'}">${nav}${ed}</div>`;

// ---------- W11 Chỉ xem (Lê Thu Hà xem yêu cầu của Nam) ----------
const M5 = [
  R('Vé máy bay Hà Nội – Huế', 'Vietnam Airlines · Vé máy bay', 'Theo số khách · 25', 'VN1543 · 10:05', '1.850.000 ₫ /khách'),
  R('HDV tiếng Đức · theo ngày', 'Đất Việt Guides · Hướng dẫn viên', 'Cố định · 1', 'Suốt tuyến', '1.300.000 ₫ /đoàn/ngày'),
  R('Xe 29 chỗ sân bay Phú Bài – khách sạn', 'Hue Travel Car · Vận chuyển', 'Cố định · 1', '—', '1.200.000 ₫ /xe/lượt'),
  R('Phòng Deluxe · 4★', 'Mường Thanh Holiday Huế · Khách sạn', 'Theo số phòng · 13', '11 đôi, 2 đơn', '<span class="ind a">Không có hợp đồng cho 19/03/2027</span>'),
];
const M5_TXT = 'Sáng tự do mua sắm tại Hà Nội. Trưa ra sân bay Nội Bài bay đi Huế. Nhận phòng, chiều thăm Đại Nội, tối thưởng thức ca Huế trên sông Hương.';
S.W11 = P({ user: 'lh', last: 'YC-2611-0019', body: mulHdr({ act: '', ro: 'Chỉ xem · do Nguyễn Hoàng Nam phụ trách' }) + `<div class="flex" style="margin:10px 0 8px"><span class="muted small">Từ Tour mẫu TM-005 · sửa lần cuối 10/11/2026 bởi Nguyễn Hoàng Nam</span></div>` +
  grid(dnav(MUL14, 5, { ro: 1, total: 14, more: '<div class="muted small" style="padding:6px 10px">Ngày 11–14 · cuộn để xem</div>' }), editor(Object.assign({}, MUL14[4]), M5_TXT, M5, { ro: 1, svHint: '' })) });

// ---------- W13 Chưa có hành trình ----------
const way = (ic, t, d, btn, hot = false) => `<div class="way" style="${hot ? 'border:1.5px solid #2563eb;background:#f5f9ff' : ''}"><span class="ic">${ic}</span><h4>${t}</h4><div class="small muted" style="flex:1">${d}</div><div class="flex">${btn}</div></div>`;
S.W13 = P({ last: 'YC-2611-0031', body: biaHdr() + `<div class="sum" style="margin-top:10px"><span>Loại Tour <b>Inbound đoàn</b></span><span>Hạng phòng <b>Deluxe</b> · 7 phòng (7 đôi, 0 đơn)</span><span>Trẻ em <b>7, 9 tuổi</b></span><span style="flex-basis:100%">Mong muốn <b>Miền Bắc và miền Trung, khách sạn 4 sao, trải nghiệm ẩm thực địa phương, 1 đêm ngủ du thuyền Hạ Long.</b></span></div>
<div style="margin:16px 0 8px;font-weight:600">Yêu cầu chưa có hành trình. Chọn cách tạo:</div>
<div class="grid" style="grid-template-columns:1fr 1fr 1fr">
${way('✨', 'Bằng AI <span class="ind b">Nhanh nhất</span>', 'AI đề xuất lịch trình và dịch vụ theo ngày từ nhu cầu của yêu cầu. Đề xuất không xác nhận giá hay tình trạng còn chỗ của NCC.', B('✨ Tạo bằng AI', 'p'), true)}
${way('📋', 'Từ Tour mẫu', 'Sao chép lịch trình và dịch vụ của một Tour mẫu đang cho phép sử dụng. Có 6 mẫu Inbound đoàn; gần nhất với 10 ngày là TM-008 (8 ngày).', B('Chọn Tour mẫu'))}
${way('✍️', 'Thủ công', 'Bắt đầu với 10 ngày trống theo thời gian đi để nhập mới, hoặc ghép từng ngày từ nhiều Tour mẫu; có thể kết hợp cả hai.', B('Tạo 10 ngày trống') + B('Ghép ngày từ Tour mẫu'))}</div>
<div class="muted small" style="margin-top:12px">Cách nào cũng đi tiếp vào cùng một lưới ngày và dịch vụ để sửa, rồi lưu và tính giá.</div>` });

// ---------- W14 Chọn Tour mẫu ----------
const tmr = (c, n, d, sv, on, hint = '') => `<tr class="${on ? 'sel' : ''}"><td><span class="rd ${on ? 'on' : ''}"></span></td><td><b>${n}</b>${hint}<div class="muted small">${c} · ${sv} dịch vụ</div></td><td class="num">${d}</td></tr>`;
S.W14 = P({ last: 'YC-2611-0031', body: biaHdr(), overlay: drawer('Chọn Tour mẫu', `<div class="grid" style="grid-template-columns:1fr 1fr;gap:14px">
<div><div class="flex" style="margin-bottom:8px"><div class="input ph" style="flex:1">🔍 Tên, mã, điểm đến</div><div class="input sel focus" style="width:180px"><span class="muted">Loại Tour:&nbsp;</span>Inbound đoàn</div></div>
<div class="muted small" style="margin-bottom:6px">6 Tour mẫu cho phép sử dụng · sắp theo số ngày gần 10 nhất</div>
<div class="tbl"><table><tr><th></th><th>Tour mẫu</th><th class="num">Ngày</th></tr>
${tmr('TM-008', 'Hà Nội – Hạ Long – Huế – Hội An 8N7Đ', 8, 21, 1, ' ' + ind('Gần số ngày nhất', 'b'))}${tmr('TM-009', 'Sài Gòn – Mekong – Phú Quốc 7N6Đ', 7, 17)}${tmr('TM-005', 'Xuyên Việt 14N13Đ', 14, 34)}${tmr('TM-011', 'Hà Nội – Ninh Bình – Hạ Long 5N4Đ', 5, 13)}${tmr('TM-003', 'Huế – Phong Nha 3N2Đ', 3, 7)}${tmr('TM-002', 'Hạ Long du thuyền 2N1Đ', 2, 4)}</table></div></div>
<div><div class="sec" style="margin-top:0">Xem trước TM-008 · 8 ngày</div><div class="list small">${BIA8.map(d => `<div class="li"><b style="width:52px">Ngày ${d.n}</b><span style="flex:1">${d.t}</span><span class="muted">${d.sv} dv</span>${d.x}</div>`).join('')}</div>
<div class="banner w small" style="margin-top:10px">Yêu cầu 10 ngày, mẫu 8 ngày. Sau khi sao chép còn thiếu 2 ngày: thêm ngày hoặc ghép ngày từ Tour mẫu khác.</div>
<div class="muted small" style="margin-top:6px">Ngày 1 của mẫu gán vào 10/03/2027. Sao chép nội dung, dịch vụ, cách tính số lượng và ghi chú; không sao chép giá. Tour mẫu không bị sửa.</div></div></div>`,
  `${B('Hủy')}${B('Sao chép TM-008 vào hành trình', 'p')}`, { wide: true, sub: 'Chỉ hiện Tour mẫu đang cho phép sử dụng (KD02)' }).replace('class="drawer wide"', 'class="drawer md"') });

// ---------- W15 Sau khi sao chép ----------
S.W15 = P({ last: 'YC-2611-0031', body: biaHdr({ cnt: { h: '<span class="cnt w">1</span>' } }) + `<div class="banner w small" style="margin-top:10px">Hành trình có 8 ngày, yêu cầu đi 10 ngày (10/03 – 19/03/2027). Thêm 2 ngày hoặc ghép ngày từ Tour mẫu.</div>` + tools('Từ Tour mẫu TM-008 · sao chép 11/11/2026 15:25 · chưa lưu') +
  grid(dnav(BIA8, 5, { total: 8 }), editor(BIA8[4], D5_TXT, D5)) + savebar('<span class="dirty">● Chưa lưu</span>', B('Hủy thay đổi') + B('Lưu hành trình', 'p') + '<span class="muted small">Còn 1 dịch vụ cần xử lý trước khi tính giá</span>' + B('Lưu và tính giá', 'dis')),
  overlay: toast('Đã sao chép 8 ngày, 21 dịch vụ từ TM-008', 'Hoàn tác') });

// ---------- W16 Ghép ngày ----------
const srcDay = (on, n, t, sv) => `<div class="li"><span class="cb ${on ? 'on' : ''}"></span><b style="width:50px">Ngày ${n}</b><span style="flex:1">${t}</span><span class="muted">${sv} dv</span></div>`;
S.W16 = P({ last: 'YC-2611-0031', body: biaHdr({ cnt: { h: '<span class="cnt w">1</span>' } }) + tools('Từ Tour mẫu TM-008 · chưa lưu') + grid(dnav(BIA8, 5, { total: 8 }), editor(BIA8[4], D5_TXT, D5)),
  overlay: modal('Ghép ngày từ Tour mẫu', `<div class="grid" style="grid-template-columns:1fr 1fr;gap:16px">
<div><div class="sec" style="margin-top:0">1 · Chọn ngày nguồn</div><div class="input sel" style="margin-bottom:6px"><span class="muted">Tour mẫu:&nbsp;</span>TM-010 · Đà Nẵng – Hội An MICE 3N2Đ</div>
<div class="list small">${srcDay(1, 1, 'Đà Nẵng – Sơn Trà – phố cổ', 3)}${srcDay(1, 2, 'Bà Nà Hills – cầu Vàng', 3)}${srcDay(0, 3, 'Hội An – gala dinner', 4)}</div>
<div class="muted small" style="margin-top:6px">Chọn được ngày của nhiều Tour mẫu: đổi Tour mẫu ở ô trên, các ngày đã chọn được giữ.</div></div>
<div><div class="sec" style="margin-top:0">2 · Gán vào hành trình</div><div class="flex" style="margin-bottom:8px"><span class="seg"><span class="on">Chèn</span><span>Thay ngày</span></span><div class="input sel" style="flex:1"><span class="muted">Trước&nbsp;</span>Ngày 8 · Hội An – sân bay Đà Nẵng</div></div>
<div class="tbl"><table><tr><th>Ngày đích</th><th>Nội dung</th></tr>
<tr class="new"><td><b>Ngày 8</b> · 17/03</td><td>TM-010 · Ngày 1 · Đà Nẵng – Sơn Trà – phố cổ</td></tr>
<tr class="new"><td><b>Ngày 9</b> · 18/03</td><td>TM-010 · Ngày 2 · Bà Nà Hills – cầu Vàng</td></tr>
<tr><td><b>Ngày 10</b> · 19/03</td><td class="muted">Ngày 8 cũ dời xuống · Hội An – sân bay Đà Nẵng</td></tr></table></div>
<div class="banner s small" style="margin-top:8px">Sau khi ghép: 10 ngày, khớp thời gian đi của yêu cầu.</div></div></div>`,
  `<span class="muted small" style="margin-right:auto">Sao chép nội dung và dịch vụ; Tour mẫu nguồn không đổi</span>${B('Hủy')}${B('Ghép 2 ngày', 'p')}`, 880) });

// ---------- W17 Sau khi ghép ----------
const D8 = [
  R('Xe 29 chỗ Đà Nẵng nửa ngày', 'Han River Transport · Vận chuyển', 'Cố định · 1', '—', '1.900.000 ₫ /xe/lượt', 'new'),
  R('Vé tham quan chùa Linh Ứng – Sơn Trà', 'Sơn Trà Tourism · Vé tham quan', 'Theo số khách · 16', '—', '40.000 ₫ /khách', 'new'),
  R('Phòng Deluxe Ocean View', 'Mường Thanh Luxury Đà Nẵng · Khách sạn', 'Theo số phòng · 7', 'Phòng twin', '1.950.000 ₫ /phòng/đêm', 'new'),
];
S.W17 = P({ last: 'YC-2611-0031', body: biaHdr({ cnt: { h: '<span class="cnt w">1</span>' } }) + tools('Từ Tour mẫu TM-008, ghép TM-010 · chưa lưu') +
  grid(dnav(BIA10, 8, { newDays: [8, 9] }), editor(BIA10[7], 'Sáng xe đón từ Hội An đi Đà Nẵng, thăm bán đảo Sơn Trà và chùa Linh Ứng. Chiều tự do tắm biển Mỹ Khê, tối dạo cầu Rồng.', D8)) + savebar('<span class="dirty">● Chưa lưu</span> · 10 ngày, 27 dịch vụ', B('Hủy thay đổi') + B('Lưu hành trình', 'p') + '<span class="muted small">Còn 1 dịch vụ cần xử lý trước khi tính giá</span>' + B('Lưu và tính giá', 'dis')),
  overlay: toast('Đã ghép 2 ngày từ TM-010; Ngày 8 cũ thành Ngày 10', 'Hoàn tác') });

// ---------- W18 Thêm dịch vụ ----------
const opt = (on, n, s, pr, x = '') => `<tr class="${on ? 'sel' : ''}"><td><span class="cb ${on ? 'on' : ''}"></span></td><td><b>${n}</b>${x}<div class="muted small">${s}</div></td><td class="small">${pr}</td></tr>`;
const dchip = (n, on) => `<span class="chip ${on ? 'on' : ''}">Ngày ${n}</span>`;
S.W18 = P({ last: 'YC-2611-0031', body: biaHdr({ cnt: { h: '<span class="cnt w">1</span>' } }) + tools('chưa lưu') + grid(dnav(BIA10, 5, { newDays: [8, 9] }), editor(BIA10[4], D5_TXT, D5)),
  overlay: drawer('Thêm dịch vụ vào Ngày 5', `<div class="flex" style="margin-bottom:8px"><div class="input" style="flex:1">🔍&nbsp; hdv tiếng ý</div><div class="input sel focus" style="width:170px"><span class="muted">Loại:&nbsp;</span>Hướng dẫn viên</div><div class="input sel focus" style="width:170px"><span class="muted">Nơi:&nbsp;</span>Huế, Hội An</div></div>
<div class="muted small" style="margin-bottom:6px">Chỉ dịch vụ và NCC đang dùng · giá tham chiếu theo ngày 14/03/2027, loại tiền gốc của dòng giá</div>
<div class="tbl"><table><tr><th></th><th>Dịch vụ</th><th>Giá tham chiếu</th></tr>
${opt(1, 'HDV tiếng Ý · theo ngày', 'Đất Việt Guides · Huế, Hội An, Đà Nẵng', '1.500.000 ₫ /đoàn/ngày', ' ' + ind('Khớp ngôn ngữ phục vụ', 'g'))}
${opt(0, 'HDV tiếng Ý · theo ngày', 'Bella Guide Miền Trung · Huế, Hội An', '65 USD /đoàn/ngày')}
${opt(0, 'HDV tiếng Ý · nửa ngày', 'Đất Việt Guides · Hội An', '900.000 ₫ /đoàn/lượt')}</table></div>
<div class="sec">Thêm vào các ngày</div><div class="flex" style="flex-wrap:wrap">${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => dchip(n, n >= 4 && n <= 9)).join('')}</div>
<div class="hint">Mặc định chỉ Ngày 5; đã chọn thêm Ngày 4–9 cho HDV suốt chặng miền Trung.</div>
<div class="sec">Số lượng</div><div class="small">Cố định · 1 cho mỗi ngày (đơn vị đoàn/ngày). Đổi được ở từng dòng sau khi thêm.</div>`,
  `${B('Hủy')}${B('Thêm 1 dịch vụ vào 6 ngày', 'p')}`, { wide: true, sub: 'Danh mục NCC (DH03) · không hiện NCC, dịch vụ ngừng sử dụng' }) });

// ---------- W19 Tiêu chí AI ----------
const aiForm = (err = '') => `${err}<div class="sec" style="margin-top:0">Từ yêu cầu <span class="auto">Tự điền</span></div>
<div class="kv"><span>Mong muốn</span><span>Miền Bắc và miền Trung, khách sạn 4 sao, trải nghiệm ẩm thực địa phương, 1 đêm ngủ du thuyền Hạ Long.</span><span>Thời gian</span><span>10/03 – 19/03/2027 · 10 ngày</span><span>Khách</span><span>14 người lớn, 2 trẻ em (7, 9 tuổi) · Deluxe · Tiếng Ý</span><span>Ngân sách</span><span><b>đến 2.000 EUR mỗi khách</b> · AI dùng để chọn hạng dịch vụ, không xác nhận giá</span></div>
<div class="sec">Tiêu chí thêm</div>
<div class="field"><label>Điểm đến phải có</label><div class="input" style="height:auto;min-height:30px">${['Hà Nội', 'Hạ Long', 'Huế', 'Hội An'].map(tag).join('')}</div></div>
<div class="f2">${f('Nhịp độ', 'Vừa phải', { cls: 'sel' })}${f('Điểm vào – ra', 'Vào Hà Nội · ra Đà Nẵng', { cls: 'sel' })}</div>
<div class="field"><label>Ưu tiên</label><div class="input" style="height:auto;min-height:30px">${['Ẩm thực', 'Văn hóa', 'Ít di chuyển đường dài'].map(tag).join('')}</div></div>
${f('Ghi chú cho AI', 'Có trẻ em 7 và 9 tuổi; tránh ngày có quá 4 giờ đi xe.', { cls: 'area' })}
<div class="banner i small">AI dùng Tour mẫu và danh mục NCC đang dùng để gợi ý dịch vụ. Đề xuất <b>không xác nhận giá hay tình trạng còn chỗ</b>; giá tính ở tab Báo giá từ bảng giá NCC.</div>`;
S.W19 = P({ last: 'YC-2611-0031', body: biaHdr() + `<div style="height:400px"></div>`, overlay: drawer('Tạo hành trình bằng AI', aiForm(), `${B('Hủy')}${B('✨ Tạo đề xuất', 'p')}`, { sub: 'Kết quả hiện trên lưới để bạn xem và sửa trước khi lưu' }) });

// ---------- W20 Đề xuất AI ----------
const AI = [
  D(1, '10/03', 'Thứ Tư', 'Hà Nội – đón khách, phố cổ', 2), D(2, '11/03', 'Thứ Năm', 'Hà Nội – lớp nấu ăn, phố ẩm thực', 3, ind('1 chưa gán NCC', 'r')), D(3, '12/03', 'Thứ Sáu', 'Hà Nội – Hạ Long, ngủ du thuyền', 2),
  D(4, '13/03', 'Thứ Bảy', 'Hạ Long – Hà Nội – bay Huế', 3), D(5, '14/03', 'Chủ Nhật', 'Huế – Đại Nội, chợ Đông Ba', 3), D(6, '15/03', 'Thứ Hai', 'Huế – đèo Hải Vân – Hội An', 3),
  D(7, '16/03', 'Thứ Ba', 'Hội An – làng rau Trà Quế', 3, ind('1 chưa gán NCC', 'r')), D(8, '17/03', 'Thứ Tư', 'Hội An – Mỹ Sơn', 2),
];
const AI2 = [
  R('Lớp nấu ăn Hà Nội · nửa ngày', '<span class="ind r">Chưa gán NCC</span> AI đề xuất, không có trong danh mục', '<span class="isel ph">Chọn dịch vụ</span>', '—', '—', 'bad'),
  R('Xe 29 chỗ Hà Nội nửa ngày', 'Hanoi Car Rental · Vận chuyển', 'Cố định · 1', '—', '1.700.000 ₫ /xe/lượt'),
  R('HDV tiếng Ý · theo ngày', 'Đất Việt Guides · Hướng dẫn viên', 'Cố định · 1', '—', '1.500.000 ₫ /đoàn/ngày'),
];
S.W20 = P({ last: 'YC-2611-0031', body: biaHdr({ cnt: { h: '<span class="cnt w">2</span>' } }) + `<div class="banner small ai" style="margin-top:10px;color:#581c87">✨ <span style="flex:1"><b>Đề xuất AI · 10 ngày, 24 dịch vụ</b>: 22 khớp danh mục NCC, 2 chưa gán NCC. Chưa xác nhận giá và chỗ. Sửa trực tiếp trên lưới rồi lưu, hoặc bỏ đề xuất.</span>${B('Tạo lại với tiêu chí khác', 'sm')}${B('Bỏ đề xuất', 'sm d')}</div>` +
  `<div style="margin-top:8px"></div>` + grid(dnav(AI, 2, { total: 10, bad: [], more: '<div class="muted small" style="padding:6px 10px">Ngày 9–10 · cuộn để xem</div>' }), editor(AI[1], 'Sáng học nấu ăn cùng đầu bếp địa phương: đi chợ, làm nem và phở. Chiều tự do. Tối đi bộ phố ẩm thực Tống Duy Tân.', AI2, { svHint: 'dịch vụ chưa gán NCC phải chọn trước khi tính giá' })) +
  savebar('<span class="dirty">● Chưa lưu</span> · Đề xuất AI 11/11/2026 15:31', B('Lưu hành trình', 'p') + '<span class="muted small">Còn 2 dịch vụ chưa gán NCC, cần xử lý trước khi tính giá</span>' + B('Lưu và tính giá', 'dis')) });

// ---------- W21 AI lỗi ----------
S.W21 = P({ last: 'YC-2611-0031', body: biaHdr() + `<div style="height:400px"></div>`, overlay: drawer('Tạo hành trình bằng AI', aiForm(`<div class="banner e small" style="margin-bottom:10px">AI chưa trả được đề xuất sau 60 giây. Hành trình chưa thay đổi. Thử lại với cùng tiêu chí, hoặc chọn Từ Tour mẫu, Thủ công.</div>`), `${B('Chọn cách khác')}${B('Thử lại', 'p')}`, { sub: 'Kết quả hiện trên lưới để bạn xem và sửa trước khi lưu' }) });

// ---------- W22 Thay hành trình đã có ----------
S.W22 = P({ last: 'YC-2611-0031', body: biaHdr({ cnt: { h: '<span class="cnt w">1</span>' } }) + tools('Từ Tour mẫu TM-008, ghép TM-010 · lưu 11/11/2026 15:34') + grid(dnav(BIA10, 5), editor(BIA10[4], D5_TXT, D5)),
  overlay: modal('Thay hành trình hiện tại?', `<div class="small">Tạo lại bằng <b>Từ Tour mẫu</b> sẽ thay toàn bộ hành trình đang lưu: <b>10 ngày, 27 dịch vụ</b>, kể cả nội dung tiếng Anh đã nhập.</div>
<ul class="small" style="margin:8px 0;padding-left:18px"><li>Phiên bản báo giá đã lưu không đổi (yêu cầu chưa có báo giá).</li><li>Hành trình cũ được giữ trong lịch sử yêu cầu để xem lại; không khôi phục tự động.</li></ul>
<div class="muted small">Muốn chỉ đổi vài ngày thì dùng Ghép ngày với cách Thay ngày.</div>`, `${B('Giữ hành trình hiện tại')}${B('Thay và chọn Tour mẫu', 'dp')}`, 520) });

// ---------- W23 Sau khi lưu (Müller, khác v2) ----------
const M5b = M5.map((r, i) => i === 3 ? Object.assign({}, r, { flag: 'new', n: r.n + ' ' + ind('Đã đổi', 'b'), note: '11 đôi, 2 đơn · thay Azerai La Residence 5★' }) : r);
S.W23 = P({ last: 'YC-2611-0019', body: mulHdr() + `<div class="banner i small" style="margin-top:10px"><span style="flex:1">Hành trình đã sửa sau báo giá <b>v2</b>: đổi 2 dịch vụ ở Ngày 5, 6. Báo giá v2 giữ nguyên; tính giá để có phiên bản mới.</span></div>` + tools('Từ Tour mẫu TM-005 · lưu 11/11/2026 15:40 bởi Nguyễn Hoàng Nam') +
  grid(dnav(MUL14, 5, { total: 14, more: '<div class="muted small" style="padding:6px 10px">Ngày 11–14 · cuộn để xem</div>' }), editor(MUL14[4], M5_TXT, M5b)) + savebar('Đã lưu 11/11/2026 15:40 · 14 ngày, 45 dịch vụ', B('Tính giá →', 'p')),
  overlay: toast('Đã lưu hành trình 14 ngày, 45 dịch vụ') });

// ---------- W50 Chế độ điều chỉnh (Müller, Booking BK-2611-0158 từ v3; thêm Ca Huế ở Ngày 5) ----------
const ADJ_BAND = `<div class="banner small" style="margin-top:10px;background:#faf5ff;border:1px solid #e9d5ff;color:#5b21b6"><span style="flex:1"><b>Chế độ điều chỉnh cho Booking BK-2611-0158</b> · phiên bản của Booking: v3. Sửa hành trình thì giá tự tính lại, lưu thành phiên bản mới; publish proposal của phiên bản mới để gửi khách nếu cần. Không ghi kết quả ở đây; khách đồng ý thì về Booking bấm Chuyển sang Điều hành.</span></div>`;
const M5adj = M5.map((r, i) => i === 3 ? Object.assign({}, r, { pr: '1.450.000 ₫ /phòng/đêm ' + ind('Nhập tay ở v3', 'v') }) : r).concat([
  R('Ca Huế trên sông Hương · thuyền rồng ' + ind('Mới', 'g'), 'Hue Heritage Events · Biểu diễn', 'Theo số khách · 25', 'Tối 19:30', '350.000 ₫ /khách', 'new')]);
const MUL14adj = MUL14.map(d => d.n === 5 ? Object.assign({}, d, { sv: 5 }) : d);
S.W50 = P({ last: 'YC-2611-0019', body: mulHdr({ st: 'bk', cnt: { q: '<span class="cnt">3</span>' }, meta: { q: 'v3 · Chốt', bk: 'BK-2611-0158' }, act: B('Về Booking BK-2611-0158', 'p') + B('⋯') }) + ADJ_BAND +
  tools('Bắt đầu từ hành trình của v3 (Booking BK-2611-0158) · mở 11/11/2026 18:05') +
  grid(dnav(MUL14adj, 5, { total: 14, more: '<div class="muted small" style="padding:6px 10px">Ngày 11–14 · cuộn để xem</div>' }), editor(MUL14adj[4], M5_TXT + ' Tối xem ca Huế trên thuyền rồng.', M5adj)) +
  savebar('<span class="dirty">● Có thay đổi chưa lưu</span> · thêm 1 dịch vụ ở Ngày 5', B('Hủy thay đổi') + '<span class="muted small">Lưu rồi tự tính giá với điều kiện của v3 · EUR theo Booking</span>' + B('Lưu và tính giá', 'p')) });

// ---------- W24 Dịch vụ cần xử lý ----------
const D10 = [R('Xe 16 chỗ Hội An – sân bay Đà Nẵng', '<span class="ind a">NCC ngừng sử dụng</span> Ánh Dương Transport · Vận chuyển', 'Cố định · 1', 'Đón 9:00', '—', 'bad')];
S.W24 = P({ last: 'YC-2611-0031', body: biaHdr({ cnt: { h: '<span class="cnt w">1</span>' } }) + `<div class="banner w small" style="margin-top:10px"><span style="flex:1">1 dịch vụ cần xử lý trước khi tính giá: Ngày 10 có dịch vụ của NCC ngừng sử dụng. Hành trình vẫn lưu được.</span></div>` + tools('Từ Tour mẫu TM-008, ghép TM-010 · lưu 11/11/2026 15:34') +
  grid(dnav(BIA10, 10, { bad: [10] }), editor(BIA10[9], 'Trả phòng, xe đưa đoàn ra sân bay Đà Nẵng, kết thúc chương trình.', D10, {
    after: `<div class="flex" style="margin-top:8px;padding:8px;border:1px dashed #fca5a5;border-radius:6px;background:#fff7f7"><span class="small" style="flex:1">Ánh Dương Transport ngừng sử dụng từ 05/11/2026. Dịch vụ không tính giá được cho tới khi đổi.</span>${B('Đổi dịch vụ', 'p sm')}</div>` })) +
  savebar('Đã lưu 11/11/2026 15:34', '<span class="muted small">Còn 1 dịch vụ cần xử lý</span>' + B('Tính giá →', 'dis')) });

// ---------- W25 Nội dung tiếng Anh ----------
const langSeg = `<div class="flex" style="margin:-2px 0 8px"><span class="seg"><span>Tiếng Việt</span><span class="on">English</span></span><span class="muted small">Dùng cho proposal tiếng Anh. Không làm hành trình khác báo giá.</span><span class="ml">${B('Dịch nháp từ tiếng Việt', 'sm')}</span></div>`;
const EN = { 1: ind('EN', 'g'), 2: ind('EN', 'g'), 3: ind('EN', 'g'), 4: ind('EN', 'g'), 5: ind('EN nháp', 'v'), 6: '<span class="ind" style="background:#f3f4f6;color:#6b7280">chưa EN</span>', 7: '<span class="ind" style="background:#f3f4f6;color:#6b7280">chưa EN</span>' };
const enEd = `<div class="ed"><div class="eh"><span class="dt">Ngày 5</span><span class="muted">Chủ Nhật 14/03/2027</span></div>${langSeg}
<div class="field"><label>Title (English)<span class="auto" style="background:#ede9fe;color:#5b21b6">Dịch nháp · cần kiểm tra</span></label><div class="input">Hue – Hai Van Pass – Hoi An</div></div>
<div class="field"><label>Itinerary (English)<span class="auto" style="background:#ede9fe;color:#5b21b6">Dịch nháp · cần kiểm tra</span></label><div class="input area" style="min-height:90px"><div>Check out and drive over the scenic Hai Van Pass with a photo stop at the summit. Lunch with a Hue-style set menu. Check in at your hotel in Hoi An; in the evening, stroll the lantern-lit Old Town and enjoy dinner at Mỹ Sơn Garden restaurant.</div></div></div>
<div class="flex">${B('Đánh dấu đã kiểm tra', 'sm')}<span class="muted small">Bản nháp chưa kiểm tra vẫn publish được nhưng có cảnh báo.</span></div>
<div class="sec">Tiếng Việt (để đối chiếu)</div><div class="small muted">Huế – đèo Hải Vân – Hội An · ${D5_TXT}</div></div>`;
S.W25 = P({ last: 'YC-2611-0031', body: biaHdr({ cnt: { h: '<span class="cnt w">1</span>' } }) + tools('Nội dung tiếng Anh: 4/10 ngày đã có, 1 bản nháp') + grid(dnav(BIA10, 5, { en: EN }), enEd) + savebar('<span class="dirty">● Chưa lưu nội dung tiếng Anh</span>', B('Hủy thay đổi') + B('Lưu', 'p')) });

// ---------- W48 Thủ công: 10 ngày trống ----------
const EMPTY = [1,2,3,4,5,6,7,8,9,10].map(n => D(n, String(9 + n).padStart(2, '0') + '/03', ['Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy','Chủ Nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu'][n-1], '<span class="muted">Chưa có tiêu đề</span>', 0));
S.W48 = P({ last: 'YC-2611-0031', body: biaHdr({ cnt: { h: '<span class="cnt w">10</span>' } }) + tools('Thủ công · 10 ngày theo thời gian đi · chưa lưu') +
  grid(dnav(EMPTY, 1, { more: '' }).replace(/<div class="dn /g, '<div style="padding:3px 10px 3px 8px" class="dn '), `<div class="ed"><div class="eh"><span class="dt">Ngày 1</span><span class="muted">Thứ Tư 10/03/2027</span><div class="input focus" style="flex:1"><span class="muted">Tiêu đề ngày, ví dụ Hà Nội – đón khách</span></div>${B('⋯')}</div>
<div class="field"><label>Nội dung lịch trình <span class="req">*</span></label><div class="input area ph" style="min-height:70px"><div>Mô tả hoạt động trong ngày cho khách</div></div></div>
<div class="flex" style="margin:4px 0 6px"><b>Dịch vụ</b><span class="muted small">chọn từ danh mục NCC</span><span class="ml">${B('+ Thêm dịch vụ', 'sm')}</span></div>
<div class="tbl"><div class="empty" style="padding:28px"><div class="big">Ngày 1 chưa có dịch vụ</div>Thêm dịch vụ từ danh mục NCC, hoặc dùng Ghép ngày để lấy cả ngày từ Tour mẫu.</div></div></div>`) +
  savebar('<span class="dirty">● Chưa lưu</span> · 10 ngày chưa có nội dung', B('Hủy thay đổi') + B('Lưu hành trình', 'p') + '<span class="muted small">Còn 10 ngày chưa có nội dung</span>' + B('Lưu và tính giá', 'dis')) });

module.exports = S;
