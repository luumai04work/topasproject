// Wireframe QT03 · Nhật ký thao tác người dùng. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
// Dữ liệu minh họa: hôm nay 11/11/2026, 10:15. Nhật ký giữ 24 tháng → từ 11/11/2024.
// Người dùng: Nguyễn Hoàng Nam, Lê Thu Hà, Vũ Đức Minh (Kinh doanh), Trần Quốc Bảo (Kinh doanh, ngừng hoạt động),
// Trần Minh Anh (Điều hành), Phạm Ngọc Lan (Kế toán), Đỗ Quang Huy (Quản trị hệ thống).
// 7 ngày qua (05/11–11/11/2026): Tất cả 1.284 thao tác, Thao tác nhạy cảm 37.
// Booking BK-2610-0137 (Müller Reisen GmbH, 19.200 EUR): đợt 1 6.000 (đã thu 02/11), đợt 2 10.200 hạn 20/11, đợt 3 3.000 hạn 25/11.
const { page, B, bd } = require('./lib');
const S = {};
const P = o => page(Object.assign({ crumb: 'Nhật ký thao tác', side: 'Nhật ký thao tác', mod: 'Quản trị', user: 'qt' }, o));
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const U = {
  nam: ['Nguyễn Hoàng Nam', 'Kinh doanh'], ha: ['Lê Thu Hà', 'Kinh doanh'], ta: ['Trần Minh Anh', 'Điều hành'],
  lan: ['Phạm Ngọc Lan', 'Kế toán'], huy: ['Đỗ Quang Huy', 'Quản trị hệ thống'],
};
const AC = {
  'Tạo': 'b-green', 'Sửa': 'b-blue', 'Xóa': 'b-red', 'Hủy': 'b-red', 'Mở lại': 'b-amber', 'Chuyển phụ trách': 'b-violet',
  'Gửi ra ngoài': 'b-cyan', 'Publish link': 'b-cyan', 'Xuất tệp': 'b-amber', 'Chuyển sang Điều hành': 'b-blue',
};
const act = a => `<span class="badge ${AC[a] || 'b-gray'}" style="font-size:11px">${a}</span>`;
const SENS = '<span class="ind a" title="Thao tác nhạy cảm">⚑ Nhạy cảm</span>';
// E: thời điểm [ngày, giờ], người, thao tác, nhạy cảm, đối tượng [loại, mã, tên/ghi chú], màn, tóm tắt
const E = (d, h, u, a, sen, o, m, s) => ({ d, h, u, a, sen, o, m, s });
const R = {
  r1: E('11/11/2026', '10:02:14', 'lan', 'Tạo', 0, ['Giao dịch', 'GD-2611-0058', 'Thu từ khách · liên quan BK-2610-0137'], 'KT01.1', 'Số tiền 3.000 EUR · ngày chứng từ 11/11/2026'),
  r2: E('11/11/2026', '09:48:31', 'nam', 'Sửa', 0, ['Booking', 'BK-2610-0137', 'Müller Reisen GmbH'], 'KD08.2', 'Lịch thanh toán: 4 trường · lý do “Khách đề nghị tách đợt 2”'),
  r3: E('11/11/2026', '09:30:05', 'ta', 'Gửi ra ngoài', 0, ['Hồ sơ Tour', 'TP-2611-0042', 'Müller Reisen GmbH'], 'DH08.3', 'Email đặt dịch vụ tới Khách sạn Lotte Hà Nội'),
  r4: E('11/11/2026', '09:12:40', 'ha', 'Sửa', 0, ['Khách hàng', 'KH-00318', 'Thomas Weber'], 'KD04.1', 'Email, Điện thoại, Ghi chú <span class="muted">· có giá trị đã che</span>'),
  r5: E('11/11/2026', '08:55:12', 'huy', 'Chuyển phụ trách', 1, ['Booking', 'BK-2609-0098', 'Atlas Voyages SARL'], 'KD08', 'Trần Quốc Bảo → Lê Thu Hà · kèm 1 yêu cầu Tour'),
  r6: E('10/11/2026', '17:40:22', 'ta', 'Sửa', 0, ['Hồ sơ Tour', 'TP-2611-0042', 'Müller Reisen GmbH'], 'DH08.4', 'Khách đoàn: Số hộ chiếu của 1 khách <span class="muted">· đã che</span>'),
  r7: E('10/11/2026', '16:05:09', 'ha', 'Xóa', 1, ['Khách hàng', 'KH-00412', 'Sarah Johnson'], 'KD04', 'Xóa hồ sơ và 2 ghi nhận chăm sóc'),
  r8: E('10/11/2026', '15:20:47', 'nam', 'Publish link', 1, ['Yêu cầu Tour', 'YC-2611-0007', 'Pacific Holidays Pty Ltd'], 'KD06.3', 'Phiên bản 3 · English · hạn 25/11/2026'),
  r9: E('10/11/2026', '14:02:33', 'lan', 'Hủy', 1, ['Giao dịch', 'GD-2611-0049', 'Thu từ khách · liên quan BK-2610-0121'], 'KT01.1', 'Lý do “Ghi nhầm số tiền”'),
  r10: E('10/11/2026', '11:18:10', 'huy', 'Chuyển phụ trách', 1, ['Khách hàng', '12 khách hàng', 'Thao tác hàng loạt'], 'KD03', 'Trần Quốc Bảo → Vũ Đức Minh · 11 đã chuyển, 1 bỏ qua'),
  r11: E('09/11/2026', '16:44:51', 'ta', 'Sửa', 0, ['Hợp đồng NCC', 'HĐ-LOTTE-2026', 'Khách sạn Lotte Hà Nội'], 'DH05', 'Bảng giá: 6 ô giá mùa Cao điểm'),
  r12: E('08/11/2026', '11:02:09', 'nam', 'Xuất tệp', 1, ['Yêu cầu Tour', 'Danh sách', 'Excel 12 dòng'], 'KD05', 'Bộ lọc: Đang xử lý · Của tôi'),
  r13: E('07/11/2026', '15:31:26', 'huy', 'Sửa', 1, ['Vai trò', 'Kế toán', 'Phân quyền'], 'QT02', 'Quyền: thêm Xuất Excel ở KT01'),
  r14: E('06/11/2026', '10:20:03', 'huy', 'Sửa', 1, ['Người dùng', 'Trần Quốc Bảo', 'Tài khoản'], 'QT01', 'Trạng thái: Hoạt động → Ngừng hoạt động'),
  r15: E('06/11/2026', '09:41:37', 'huy', 'Mở lại', 1, ['Yêu cầu Tour', 'YC-2610-0031', 'Nordic Travel AS'], 'KD06', 'Đã hủy → Đang xử lý · phụ trách Lê Thu Hà'),
  r16: E('05/11/2026', '14:12:55', 'ha', 'Hủy', 1, ['Booking', 'BK-2610-0121', 'Pacific Holidays Pty Ltd'], 'KD08', 'Lý do “Khách đổi kế hoạch” · kèm yêu cầu Tour → Đã hủy'),
  // Lịch sử khách hàng của Lê Thu Hà (W03)
  h1: E('07/11/2026', '11:25:48', 'ha', 'Tạo', 0, ['Khách hàng', 'KH-00419', 'Kenji Tanaka'], 'KD04', 'Khách Cá nhân · Nhật Bản'),
  h2: E('06/11/2026', '15:03:19', 'ha', 'Sửa', 0, ['Khách hàng', 'KH-00301', 'Nordic Travel AS'], 'KD04.2', 'Người liên hệ: đổi Liên hệ chính'),
  // Lịch sử BK-2610-0137 (W08)
  b3: E('04/11/2026', '14:10:02', 'nam', 'Chuyển sang Điều hành', 0, ['Booking', 'BK-2610-0137', 'Müller Reisen GmbH'], 'KD08', 'Lên phiên bản báo giá 4 · 18.600 → 19.200 EUR'),
  b4: E('02/11/2026', '09:05:11', 'lan', 'Tạo', 0, ['Giao dịch', 'GD-2611-0012', 'Thu từ khách · liên quan BK-2610-0137'], 'KT01.1', 'Số tiền 6.000 EUR · đợt 1'),
  b5: E('20/10/2026', '16:22:45', 'nam', 'Tạo', 0, ['Booking', 'BK-2610-0137', 'Müller Reisen GmbH'], 'KD08', 'Từ YC-2610-0019 phiên bản 3 · 18.600 EUR · kèm tạo hồ sơ Tour TP-2611-0042'),
};
const ALL = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 'r10', 'r11', 'r12'];
const SEN = ['r5', 'r7', 'r8', 'r9', 'r10', 'r12', 'r13', 'r14', 'r15', 'r16'];

function rowHtml(e, o = {}) {
  const u = U[e.u];
  const sel = o.sel === e;
  const bulk = e.o[1] === '12 khách hàng';
  return `<tr class="${sel ? 'sel' : ''}"><td class="small" style="white-space:nowrap">${e.d}<div class="muted">${e.h}</div></td>
<td class="small" style="white-space:nowrap">${u[0]}<div class="muted">${u[1]}</div></td>
<td style="white-space:nowrap">${act(e.a)}${e.sen ? `<div style="margin-top:2px">${SENS}</div>` : ''}</td>
<td class="small"><span class="muted">${e.o[0]}</span> · <b style="color:${bulk || e.o[1] === 'Danh sách' ? '#374151' : '#1d4ed8'}">${o.q ? e.o[1].replace(o.q, `<span class="hl">${o.q}</span>`) : e.o[1]}</b><div class="muted">${e.o[2]}</div></td>
<td class="small">${e.m}</td>
<td class="small">${e.s}</td></tr>`;
}
const table = (keys, o = {}) => `<div class="tbl"><table><tr><th style="width:96px">Thời điểm ▼</th><th style="width:140px">Người dùng</th><th style="width:132px">Thao tác</th><th style="width:270px">Đối tượng</th><th style="width:62px">Màn</th><th>Thay đổi</th></tr>
${keys.map(k => rowHtml(R[k], o)).join('')}</table></div>`;
const chips = (c = { all: '1.284', sen: 37 }, active = 'all', note = 'Hiển thị 1–50 / 1.284 · mới nhất trước') => `<div class="flex" style="margin:0 0 8px"><span class="chip ${active === 'all' ? 'on' : ''}">Tất cả <span class="cnt">${c.all}</span></span><span class="chip ${active === 'sen' ? 'on' : ''}">⚑ Thao tác nhạy cảm <span class="cnt">${c.sen}</span></span><span class="ml muted small">${note}</span></div>`;
const toolbar = ({ q = '', time = '7 ngày qua', user = 'Tất cả', obj = 'Tất cả', act: a = 'Tất cả', clear = false, timeOpen = false, rec = '' } = {}) => `<div class="toolbar" style="margin-top:0;position:relative">
${rec ? `<div class="input focus" style="width:250px;flex:none"><span class="muted">Bản ghi:&nbsp;</span><b>${rec}</b><span class="ml muted">✕</span></div>` : `<div class="input ${q ? 'focus' : 'ph'}" style="width:250px;flex:none">🔍&nbsp; ${q || 'Tìm mã hoặc tên đối tượng'}</div>`}
<div class="input sel ${time !== '7 ngày qua' || timeOpen ? 'focus' : ''}" style="width:200px;flex:none"><span class="muted">Thời gian:&nbsp;</span>${time}</div>
<div class="input sel ${user !== 'Tất cả' ? 'focus' : ''}" style="width:180px;flex:none"><span class="muted">Người dùng:&nbsp;</span>${user}</div>
<div class="input sel ${obj !== 'Tất cả' ? 'focus' : ''}" style="width:170px;flex:none"><span class="muted">Đối tượng:&nbsp;</span>${obj}</div>
<div class="input sel ${a !== 'Tất cả' ? 'focus' : ''}" style="width:150px;flex:none"><span class="muted">Thao tác:&nbsp;</span>${a}</div>
${clear ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
const title = ({ exp = 'on', expNote = '' } = {}) => `<div class="ttl"><h1 style="white-space:nowrap">Nhật ký thao tác</h1>${expNote ? "" : `<span class="muted small">Chỉ thao tác ghi dữ liệu · giữ 24 tháng (từ 11/11/2024) · không sửa, không xóa</span>`}<div class="ml flex">${expNote ? `<span class="small" style="color:#b45309">${expNote}</span>` : ''}${B('⬇ Xuất Excel', exp === 'on' ? '' : 'dis')}</div></div>`;
const list = (o = {}) => title(o) + toolbar(o.tb) + (o.banner || '') + chips(o.c, o.chip || 'all', o.note) + (o.body || table(o.keys || ALL, o.t || {}));

// ---------- W01 Mặc định: 7 ngày qua, Tất cả ----------
S.W01 = P({ body: list() });

// ---------- W02 Bộ chọn Thời gian ----------
const timeMenu = (err) => `<div class="menu" style="left:${176 + 18 + 258}px;top:126px;width:360px">
<div class="mh2">Chọn nhanh · áp dụng ngay</div>
${[['Hôm nay (11/11/2026)'], ['7 ngày qua (05/11 – 11/11/2026)', 1], ['30 ngày qua (13/10 – 11/11/2026)'], ['Tháng này (11/2026)'], ['Tháng trước (10/2026)'], ['Toàn bộ thời gian lưu (24 tháng)']].map(([t, on]) => `<div class="mi ${on && !err ? 'on' : ''}"><span class="rd ${on && !err ? 'on' : ''}"></span>${t}</div>`).join('')}
<div class="sep" style="margin:6px 0"></div>
<div class="mh2">Khoảng tùy chọn</div>
<div class="flex" style="padding:4px 12px"><div class="input ${err ? 'bad' : 'ph'}" style="width:140px">${err ? '01/10/2024' : 'Từ dd/mm/yyyy'}</div>–<div class="input ${err ? '' : 'ph'}" style="width:140px">${err ? '31/12/2024' : 'Đến dd/mm/yyyy'}</div></div>
${err ? '<div class="err" style="padding:0 12px">Nhật ký chỉ giữ 24 tháng. Chọn Từ ngày từ 11/11/2024 trở đi.</div>' : ''}
<div class="flex" style="padding:6px 12px 4px"><span class="muted small" style="white-space:normal">Thao tác trước 11/11/2024 đã tự xóa theo thời gian lưu.</span><span class="ml">${B('Áp dụng', err ? 'dis' : 'dis')}</span></div></div>`;
S.W02 = P({ body: list({ tb: { timeOpen: true } }), overlay: timeMenu(false) });

// ---------- W03 Lọc Người dùng + Đối tượng ----------
S.W03 = P({ body: list({ tb: { user: 'Lê Thu Hà', obj: 'Khách hàng', clear: true }, c: { all: 4, sen: 1 }, note: 'Hiển thị 1–4 / 4 · mới nhất trước', keys: ['r4', 'r7', 'h1', 'h2'] }) });

// ---------- W04 Chip Thao tác nhạy cảm ----------
S.W04 = P({ body: list({ chip: 'sen', note: 'Hiển thị 1–37 / 37 · mới nhất trước', keys: SEN }) });

// ---------- Bảng trượt chi tiết ----------
const dTbl = rows => `<div class="tbl"><table><tr><th style="width:190px">Trường</th><th>Trước</th><th>Sau</th></tr>${rows.map(([f, a, b, m]) => `<tr><td class="small">${f}</td><td class="small" style="${a === '—' ? 'color:#9ca3af' : ''}">${a}${m ? ' <span class="muted">🔒</span>' : ''}</td><td class="small"><b>${b}</b>${m ? ' <span class="muted">🔒</span>' : ''}</td></tr>`).join('')}</table></div>`;
const meta = (rows) => `<div class="grid" style="grid-template-columns:120px 1fr;gap:4px 10px;font-size:12.5px;margin-bottom:10px">${rows.map(([l, v]) => `<span class="muted">${l}</span><span>${v}</span>`).join('')}</div>`;
const drw = (title, body, foot, w = 640) => `<div class="overlay"></div><div class="drawer" style="width:${w}px"><div class="dh"><div class="t">${title}<span class="x">✕</span></div></div><div class="db">${body}</div><div class="df" style="justify-content:space-between">${foot}</div></div>`;

S.W05 = P({
  body: list({ t: { sel: R.r2 } }), overlay: drw(`${act('Sửa')} Booking BK-2610-0137`, meta([
    ['Thời điểm', '<b>11/11/2026 09:48:31</b>'], ['Người thực hiện', 'Nguyễn Hoàng Nam · Kinh doanh (vai trò lúc thao tác)'],
    ['Màn', 'KD08.2 · Lịch thanh toán'], ['Đối tượng', 'Booking <b>BK-2610-0137</b> · Müller Reisen GmbH'], ['Mã thao tác', 'TT-2611-0004812'],
  ]) + `<div class="sec">Thay đổi · 4 trường</div>` + dTbl([
    ['Đợt 2 · Hạn', '15/11/2026', '20/11/2026'], ['Đợt 2 · Số tiền', '13.200 EUR', '10.200 EUR'],
    ['Đợt 3 · Hạn', '—', '25/11/2026'], ['Đợt 3 · Số tiền', '—', '3.000 EUR'],
  ]) + `<div class="sec">Lý do người dùng nhập</div><div class="small">Khách đề nghị tách đợt 2</div>
<div class="sec">Tác động kèm theo</div><div class="small">• KT01 cập nhật nghĩa vụ phải thu theo lịch mới<br>• Thông báo cho Kế toán: lịch thanh toán BK-2610-0137 thay đổi</div>`,
    `${B('Xem mọi thao tác trên BK-2610-0137', 'lk')}${B('Mở bản ghi ↗', 'p')}`),
});

S.W06 = P({
  body: list({ t: { sel: R.r4 } }), overlay: drw(`${act('Sửa')} Khách hàng KH-00318`, meta([
    ['Thời điểm', '<b>11/11/2026 09:12:40</b>'], ['Người thực hiện', 'Lê Thu Hà · Kinh doanh'], ['Màn', 'KD04.1 · Thông tin khách hàng'],
    ['Đối tượng', 'Khách hàng <b>KH-00318</b> · Thomas Weber · Cá nhân'], ['Mã thao tác', 'TT-2611-0004797'],
  ]) + `<div class="sec">Thay đổi · 3 trường</div>` + dTbl([
    ['Email', 'th•••@gmail.com', 'th•••@weber-mail.de', 1], ['Điện thoại', '+49 ••• ••• 412', '+49 ••• ••• 877', 1],
    ['Ghi chú', 'Thích Tour ẩm thực', 'Thích Tour ẩm thực, ăn chay'],
  ]) + `<div class="banner i" style="margin-top:10px"><span>🔒</span><div class="small">Email, điện thoại, ngày sinh, địa chỉ, số hộ chiếu được che khi lưu nhật ký. QT03 và tệp Excel không có bản đầy đủ; xem giá trị hiện tại ở hồ sơ khách hàng.</div></div>`,
    `${B('Xem mọi thao tác trên KH-00318', 'lk')}${B('Mở bản ghi ↗', 'p')}`),
});

S.W07 = P({
  body: list({ t: { sel: R.r7 } }), overlay: drw(`${act('Xóa')} ${SENS} Khách hàng KH-00412`, meta([
    ['Thời điểm', '<b>10/11/2026 16:05:09</b>'], ['Người thực hiện', 'Lê Thu Hà · Kinh doanh'], ['Màn', 'KD04 · Hồ sơ khách hàng'],
    ['Đối tượng', 'Khách hàng <b>KH-00412</b> · Sarah Johnson'], ['Mã thao tác', 'TT-2611-0004655'],
  ]) + `<div class="sec">Dữ liệu trước khi xóa</div>` + dTbl([
    ['Mã khách hàng', 'KH-00412', '—'], ['Tên', 'Sarah Johnson', '—'], ['Loại', 'Cá nhân', '—'], ['Quốc gia', 'Úc', '—'],
    ['Người phụ trách', 'Lê Thu Hà', '—'], ['Ghi nhận chăm sóc', '2 ghi nhận', '—'],
    ['Email, điện thoại, ngày sinh, địa chỉ', '<span class="muted">Không lưu · đã xóa cùng khách hàng</span>', '—'],
  ]) + `<div class="muted small" style="margin-top:8px">Các thao tác trước đây trên KH-00412 cũng đã bỏ giá trị cá nhân; mã, tên và người thao tác vẫn giữ.</div>`,
    `${B('Xem mọi thao tác trên KH-00412', 'lk')}<span class="flex"><span class="muted small">Bản ghi đã bị xóa lúc 10/11/2026 16:05</span>${B('Mở bản ghi ↗', 'dis')}</span>`),
});

// ---------- W08 Lịch sử một bản ghi ----------
S.W08 = P({ body: list({ tb: { rec: 'BK-2610-0137', time: 'Toàn bộ (24 tháng)', clear: true }, c: { all: 5, sen: 0 }, note: 'Hiển thị 1–5 / 5 · gồm thao tác trên bản ghi và thao tác liên quan', keys: ['r1', 'r2', 'b3', 'b4', 'b5'] }) });

// ---------- W09 Chi tiết thao tác hàng loạt ----------
const KH = [['KH-00121', 'Atlas Voyages SARL'], ['KH-00155', 'Nordic Travel AS'], ['KH-00187', 'Pacific Holidays Pty Ltd'], ['KH-00203', 'Hans Becker'], ['KH-00219', 'Van den Berg Reizen BV'], ['KH-00244', 'Sakura Tours KK'], ['KH-00260', 'Lucía Fernández']];
S.W09 = P({
  body: list({ t: { sel: R.r10 } }), overlay: drw(`${act('Chuyển phụ trách')} ${SENS} 12 khách hàng`, meta([
    ['Thời điểm', '<b>10/11/2026 11:18:10</b>'], ['Người thực hiện', 'Đỗ Quang Huy · Quản trị hệ thống'], ['Màn', 'KD03 · Danh sách khách hàng · hàng loạt'],
    ['Thay đổi', 'Người phụ trách: Trần Quốc Bảo → <b>Vũ Đức Minh</b>'], ['Mã thao tác', 'TT-2611-0004601 · 12 bản ghi'],
  ]) + `<div class="flex" style="margin:4px 0 6px"><span class="chip on">Tất cả <span class="cnt">12</span></span><span class="chip">Đã chuyển <span class="cnt">11</span></span><span class="chip">Bỏ qua <span class="cnt">1</span></span></div>
<div class="tbl"><table><tr><th>Khách hàng</th><th>Kết quả</th></tr>
<tr><td class="small"><b class="lnk">KH-00098</b> · Müller Reisen GmbH</td><td class="small">${bd('Bỏ qua', 'b-amber')} <span class="muted">Người phụ trách đã đổi thành Lê Thu Hà lúc 11:10</span></td></tr>
${KH.map(([c, n]) => `<tr><td class="small"><b class="lnk">${c}</b> · ${n}</td><td class="small">${bd('Đã chuyển', 'b-green')}</td></tr>`).join('')}
<tr><td colspan="2" class="small muted">… và 4 khách hàng khác · cuộn để xem</td></tr></table></div>
<div class="muted small" style="margin-top:6px">Bấm mã khách hàng để mở hồ sơ.</div>`,
    `<span class="muted small">Tệp Excel ghi mỗi khách hàng một dòng</span><span></span>`),
});

// ---------- W10 Đích của Mở bản ghi: KD08 ở tab Lịch thanh toán ----------
S.W10 = page({
  crumb: 'Booking', last: 'BK-2610-0137', side: 'Booking', user: 'qt', body: `<div class="hdr"><div class="r1"><span class="code">BK-2610-0137</span>${bd('Hiệu lực', 'b-green')}<span class="muted small" style="margin-left:6px">🔒 Chỉ xem · Quản trị hệ thống</span></div>
<div class="meta"><span>Khách <b>Müller Reisen GmbH</b> · 18 khách</span><span>Khởi hành <b>18/11/2026</b></span><span>Giá trị <b>19.200 EUR</b></span><span>Phụ trách <b>Nguyễn Hoàng Nam</b></span><span>Hồ sơ Tour <b class="lnk">TP-2611-0042</b></span></div>
<div class="tabs"><div class="tab">Thông tin Booking</div><div class="tab on">Lịch thanh toán</div></div></div>
<div class="tbl" style="margin-top:10px"><table><tr><th>Đợt</th><th>Hạn</th><th class="num">Số tiền</th><th class="num">Đã thu</th><th>Tình trạng</th></tr>
<tr><td>Đợt 1</td><td>25/10/2026</td><td class="num">6.000 EUR</td><td class="num">6.000 EUR</td><td>${bd('Đã thu đủ', 'b-green')}</td></tr>
<tr class="hot"><td>Đợt 2</td><td>20/11/2026</td><td class="num">10.200 EUR</td><td class="num">3.000 EUR</td><td>${bd('Còn hạn', 'b-gray')}</td></tr>
<tr class="hot"><td>Đợt 3</td><td>25/11/2026</td><td class="num">3.000 EUR</td><td class="num">0 EUR</td><td>${bd('Còn hạn', 'b-gray')}</td></tr>
<tr><td class="b">Tổng</td><td></td><td class="num b">19.200 EUR</td><td class="num b">9.000 EUR</td><td></td></tr></table></div>
<div class="muted small" style="margin-top:8px">Nội dung KD08 đặc tả ở RSD KD08. Hình này chỉ minh họa đích của Mở bản ghi ở QT03: đúng hồ sơ, đúng tab của màn đã ghi thao tác, theo quyền của Quản trị.</div>`,
});

// ---------- W11 Sau khi xuất Excel ----------
S.W11 = P({ body: list() + `<div class="toast">Đã xuất 1.284 thao tác (3.912 dòng thay đổi) · QT03_05-11-2026_11-11-2026.xlsx</div>` });

// ---------- W12 Xuất Excel vượt giới hạn ----------
S.W12 = P({ body: list({ exp: 'off', expNote: 'Kết quả 61.240 thao tác, vượt giới hạn xuất 20.000 · thu hẹp Thời gian hoặc thêm bộ lọc', tb: { time: '12 tháng qua', clear: true }, c: { all: '61.240', sen: '1.906' }, note: 'Hiển thị 1–50 / 61.240 · mới nhất trước' }) });

// ---------- W13 Không khớp bộ lọc ----------
const empty = (big, t, red) => `<div class="tbl"><div class="empty"><div class="big" style="${red ? 'color:#991b1b' : ''}">${big}</div>${t}</div></div>`;
S.W13 = P({ body: list({ exp: 'off', tb: { user: 'Vũ Đức Minh', act: 'Xóa', clear: true }, c: { all: 0, sen: 0 }, note: '', body: empty('Không có thao tác khớp bộ lọc', 'Thử mở rộng Thời gian hoặc bấm Xóa bộ lọc ở cuối thanh lọc.') }) });

// ---------- W14 Lỗi tải ----------
S.W14 = P({ body: list({ exp: 'off', tb: { obj: 'Booking', clear: true }, c: { all: '–', sen: '–' }, note: '', body: empty('Không tải được nhật ký thao tác', `Bộ lọc của bạn được giữ nguyên. Kiểm tra kết nối rồi thử lại.<div style="margin-top:12px">${B('↻ Thử lại', 'p')}</div>`, 1) }) });

// ---------- W15 Khoảng thời gian ngoài thời gian lưu ----------
S.W15 = P({ body: list({ tb: { timeOpen: true } }), overlay: timeMenu(true) });

// ---------- W16 Không có quyền ----------
S.W16 = page({
  crumb: 'Nhật ký thao tác', side: '', mod: 'Quản trị', user: 'kd', body: `<div class="tbl" style="margin-top:40px"><div class="empty"><div class="big">Bạn không có quyền xem Nhật ký thao tác</div>Nhật ký thao tác chỉ dành cho Quản trị hệ thống.<br>Lịch sử của một hồ sơ (Booking, yêu cầu Tour, khách hàng…) xem ngay trong hồ sơ đó.<div style="margin-top:12px">${B('Về trang chủ')}</div></div></div>`,
});

module.exports = S;
