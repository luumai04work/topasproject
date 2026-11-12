// Wireframe DH03 · Hồ sơ nhà cung cấp — phần đầu, DH03.1, DH03.2 (hợp đồng và chính sách).
// Mỗi khóa là một mã W; tên và mục đích ở captions.js. Hôm nay trên hình: 11/11/2026.
const { page, modal, f, B, bd } = require('./lib');
const S = {};

// ---------- Thành phần chung ----------
const tg = (on, t = '', ro = false) => `<span class="tg ${on ? 'on' : ''} ${ro ? 'ro' : ''}"><i></i>${t}</span>`;
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const dw = (cls, title, body, foot, sub = '', nav = '') => `<div class="overlay"></div><div class="drawer ${cls}"><div class="dh"><div class="t">${title}<span class="x">✕</span></div>${sub ? `<div class="muted small" style="margin-top:2px">${sub}</div>` : ''}</div>${nav}<div class="db" style="overflow:hidden">${body}</div><div class="df">${foot}</div></div>`;
const toast = (t, a = '') => `<div class="toast">${t}${a ? `<a>${a}</a>` : ''}</div>`;

const LOTUS_META = (o = {}) => `<span>Mã <b>NCC-0118</b></span><span>Hà Nội</span>
<span>Hợp đồng hiện hành <b>${o.hd || 'LH-2025/HĐ-07'}</b> · đến <b>${o.hdEnd || '30/11/2026'}</b> ${o.hdInd === undefined ? ind('Sắp hết hạn', 'a') : o.hdInd}</span>
<span><b>6</b> dịch vụ · ${o.svcOn || 5} đang dùng</span><span>Đầu mối <b>Nguyễn Thu Trang</b> · 0912 345 678</span>`;

// todo: [[mức 'r'|'a', câu, nút]] ; nút rỗng = không có nút (nơi xử lý đang hiện hoặc không có quyền)
function nhdr({ name = 'Khách sạn Lotus Hanoi', type = 'Khách sạn · Nhà hàng', on = true, meta, todo = [], tab = 1, cnt = {}, actions, user = 'dh', create = false, off = '' } = {}) {
  const c = Object.assign({ 1: '', 2: '<span class="cnt w">1</span>', 3: '<span class="cnt w">2</span>' }, cnt);
  const act = actions !== undefined ? actions : (user === 'kd' ? '' : B('Xem công nợ'));
  const toggle = create ? '' : (user === 'dh' ? tg(on, on ? 'Đang dùng' : 'Ngừng sử dụng') : bd(on ? 'Đang dùng' : 'Ngừng sử dụng', on ? 'b-green' : 'b-gray'));
  const tabs = [[1, 'Thông tin chung & thanh toán'], [2, 'Hợp đồng & chính sách'], [3, 'Dịch vụ & bảng giá']];
  return `<div class="hdr"><div class="r1"><span class="code">${name}</span>${type ? bd(type, 'b-cyan') : ''}${toggle}${off}
<div class="actions">${act}</div></div>
${meta === '' ? '' : `<div class="meta">${meta || LOTUS_META()}</div>`}
${todo.map(([lv, t, b]) => `<div class="todo"><span class="ico ${lv === 'r' ? 'e' : 'w'}">!</span><span style="color:${lv === 'r' ? '#991b1b' : '#92400e'}" class="b">${t}</span>${b ? B(b, 'sm') : ''}</div>`).join('')}
<div class="tabs">${tabs.map(([k, n]) => `<div class="tab ${k === tab ? 'on' : ''} ${create && k > 1 ? 'lock' : ''}">${n}${create && k > 1 ? ' 🔒' : (c[k] ? ' ' + c[k] : '')}</div>`).join('')}</div></div>`;
}
const TODO_RENEW = ['a', 'Hợp đồng LH-2025/HĐ-07 hết hạn 30/11/2026 (còn 19 ngày), chưa có hợp đồng kế tiếp', 'Gia hạn hợp đồng'];

// ---------- DH03.1 Thông tin chung và thanh toán ----------
function formGeneral({ ro = false, create = false, errs = {}, dup = false, data } = {}) {
  const d = data || (create ? {} : { name: 'Khách sạn Lotus Hanoi', type: '<span class="tag">Khách sạn</span><span class="tag">Nhà hàng</span>', city: 'Hà Nội', addr: 'Số 16 Lý Thường Kiệt, P. Cửa Nam, Hà Nội', mail: 'reservation@lotushanoi.vn', cc: 'sales@lotushanoi.vn', note: 'Ưu tiên đoàn Đức, Pháp; nhận đoàn tối đa 40 phòng.' });
  const cls = ro ? 'ro' : '';
  const v = (x, ph) => x ? x : `<span class="muted">${ph}</span>`;
  return `<div class="sect ${ro ? 'ro' : ''}"><h4>Thông tin chung ${ro ? '<span class="lockn">· Chỉ đọc · Điều hành cập nhật</span>' : '<span class="lockn">· Điều hành</span>'}</h4>
<div class="f3">${f('Tên nhà cung cấp', v(d.name, 'Nhập tên NCC'), { req: !ro, cls: (errs.name ? 'bad ' : '') + (create && !d.name ? 'focus ' : '') + cls, err: errs.name })}
${f('Loại dịch vụ cung cấp', `<div style="display:flex;gap:2px">${v(d.type, 'Chọn một hoặc nhiều loại')}</div>`, { req: !ro, cls: (errs.type ? 'bad ' : '') + 'sel ' + cls, err: errs.type })}
${f('Địa điểm', v(d.city, 'Chọn điểm đến'), { cls: 'sel ' + cls })}</div>
${dup ? `<div class="banner w" style="margin:-2px 0 8px;padding:6px 10px"><span class="ico w">!</span><div class="small">Đã có NCC tên gần giống: <b class="lnk">Nhà hàng Phố Cổ Hà Thành · Hội An</b> (NCC-0097, Hội An). Kiểm tra trước khi tạo; vẫn có thể lưu nếu là NCC khác.</div></div>` : ''}
<div class="f2">${f('Địa chỉ', v(d.addr, 'Số nhà, đường, phường, tỉnh/thành'), { cls })}
${f('Ngôn ngữ giao dịch', d.lang || 'Tiếng Việt', { cls: 'sel ' + cls, hint: !ro ? 'Bản ngôn ngữ của email đặt dịch vụ ở DH08 (mẫu QT04)' : '' })}</div>
<div class="f2">${f('Email đặt dịch vụ', v(d.mail, 'Email nhận yêu cầu đặt dịch vụ'), { cls: (errs.mail ? 'bad ' : '') + cls, err: errs.mail, hint: !ro && !errs.mail ? 'Dùng làm người nhận khi đặt dịch vụ ở DH08.3' : '' })}
${f('CC khi đặt dịch vụ', v(d.cc, 'Không bắt buộc'), { cls })}</div>
<label style="font-size:12px;font-weight:600">Đầu mối liên hệ</label>
<table style="margin:4px 0 6px;border:1px solid #e5e7eb"><tr><th>Họ tên</th><th>Chức vụ</th><th>Điện thoại</th><th>Email</th><th>Đầu mối chính</th></tr>
${create ? `<tr><td colspan="5" class="muted small">Chưa có đầu mối. ${ro ? '' : '<span class="lnk">+ Thêm đầu mối</span>'}</td></tr>` : `<tr><td>Nguyễn Thu Trang</td><td>Trưởng phòng kinh doanh</td><td>0912 345 678</td><td>trang.nguyen@lotushanoi.vn</td><td><span class="rd on"></span></td></tr>
<tr><td>Lê Văn Đức</td><td>Trưởng lễ tân</td><td>0903 222 111</td><td>fo@lotushanoi.vn</td><td><span class="rd"></span></td></tr>`}</table>
${!create && !ro ? '<span class="lnk small">+ Thêm đầu mối</span>' : ''}
${create ? '' : f('Ghi chú', v(d.note, ''), { cls: 'area ' + cls })}</div>`;
}
function formPay({ ro = false, hidden = false, empty = false, edited = false, errs = {} } = {}) {
  if (hidden) return '';
  const cls = ro ? 'ro' : '';
  const v = (x, ph) => (empty ? `<span class="muted">${ph}</span>` : x);
  return `<div class="sect ${ro ? 'ro' : ''}"><h4>Thông tin nhận thanh toán ${ro ? '<span class="lockn">· Chỉ đọc · Kế toán cập nhật</span>' : '<span class="lockn">· Kế toán</span>'}${edited ? ind('Đã sửa', 'b') : ''}</h4>
<div class="f3">${f('Tên thụ hưởng', v('Công ty TNHH Khách sạn Lotus Hà Nội', '—'), { cls })}${f('Ngân hàng · chi nhánh', v('Vietcombank · CN Hoàn Kiếm', '—'), { cls: 'sel ' + cls })}${f('Số tài khoản', v(edited ? '0011 0042 1199' : '0011 0042 1188', '—'), { cls: (errs.acc ? 'bad ' : '') + (edited ? 'focus ' : '') + cls, err: errs.acc })}</div>
<div class="f3">${f('Tên đơn vị xuất hóa đơn', v('Công ty TNHH Khách sạn Lotus Hà Nội', '—'), { cls })}${f('Mã số thuế', v('0101234567', '—'), { cls })}${f('Email nhận hóa đơn', v('ketoan@lotushanoi.vn', '—'), { cls })}</div></div>`;
}
const saveBar = (o = {}) => `<div class="flex" style="position:absolute;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #e5e7eb;padding:9px 18px;box-shadow:0 -4px 12px rgba(0,0,0,.05)">${o.left || '<span class="muted small">Cập nhật lần cuối 05/11/2026 15:20 · Trần Minh Anh</span>'}<span class="ml"></span>${o.btn === '' ? '' : (o.btn || B('Hủy thay đổi', 'dis') + B('Lưu', 'dis'))}</div>`;

// W01 Tạo NCC mới
S.W01 = page({
  last: 'Tạo mới',
  body: nhdr({ name: 'Nhà cung cấp mới', type: '', meta: '', create: true, actions: '', todo: [] }) +
    `<div style="margin-top:10px">${formGeneral({ create: true, data: { name: 'Nhà hàng Phố Cổ Hà Thành', type: '<span class="tag">Nhà hàng</span>' } })}
<div class="banner i"><span class="ico i">i</span><div class="small">Chỉ cần <b>Tên</b> và <b>Loại dịch vụ</b> để tạo. Sau khi lưu, hồ sơ mở tab Hợp đồng & chính sách để thêm hợp đồng đầu tiên. Thông tin nhận thanh toán do Kế toán nhập sau.</div></div>
${saveBar({ left: '<span class="muted small">Mã NCC được cấp khi lưu</span>', btn: B('Hủy') + B('Tạo nhà cung cấp', 'p') })}</div>`,
});

// W02 Tạo NCC: lỗi bắt buộc và cảnh báo trùng tên
S.W02 = page({
  last: 'Tạo mới',
  body: nhdr({ name: 'Nhà cung cấp mới', type: '', meta: '', create: true, actions: '', todo: [] }) +
    `<div style="margin-top:10px">${formGeneral({ create: true, dup: true, errs: { type: 'Chọn ít nhất một loại dịch vụ', mail: 'Email không đúng định dạng' }, data: { name: 'Nhà hàng Phố Cổ Hà Thành', mail: 'datban@phocohathanh' } })}
${saveBar({ left: '<span class="small" style="color:#b91c1c">2 trường cần sửa. Dữ liệu đã nhập được giữ nguyên.</span>', btn: B('Hủy') + B('Tạo nhà cung cấp', 'p') })}</div>`,
});

// W03 Sau khi tạo: mở tab Hợp đồng với gợi ý thêm hợp đồng đầu tiên
S.W03 = page({
  last: 'Nhà hàng Phố Cổ Hà Thành',
  body: nhdr({
    name: 'Nhà hàng Phố Cổ Hà Thành', type: 'Nhà hàng', tab: 2, cnt: { 1: '<span class="cnt w">1</span>', 2: '<span class="cnt r">!</span>', 3: '' },
    meta: `<span>Mã <b>NCC-0131</b></span><span>Hà Nội</span><span>Hợp đồng hiện hành <b style="color:#b91c1c">Chưa có</b></span><span><b>0</b> dịch vụ</span><span>Đầu mối <span class="muted">Chưa có</span></span>`,
    todo: [['r', 'Chưa có hợp đồng còn hiệu lực', ''], ['a', 'Thiếu thông tin nhận thanh toán · Kế toán nhập', '']],
  }) +
    `<div class="card" style="margin-top:10px"><div class="empty" style="padding:70px 20px"><div class="big">Chưa có hợp đồng</div>
<div style="margin-bottom:14px">Hợp đồng chứa kỳ hiệu lực, mùa giá, chính sách đổi hủy, chính sách trẻ em và điều khoản thanh toán.<br>Dịch vụ và bảng giá được nhập theo từng hợp đồng.</div>${B('+ Thêm hợp đồng đầu tiên', 'p')}</div></div>` +
    toast('Đã tạo nhà cung cấp NCC-0131 · Nhà hàng Phố Cổ Hà Thành'),
});

// W04 Hồ sơ NCC · DH03.1 · Điều hành (phần đầu đầy đủ)
S.W04 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ todo: [TODO_RENEW] }) + `<div style="margin-top:10px">${formGeneral()}${formPay({ ro: true })}${saveBar()}</div>`,
});

// W05 Kế toán sửa thông tin nhận thanh toán
S.W05 = page({
  user: 'kt', last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ user: 'kt', todo: [['a', 'Hợp đồng LH-2025/HĐ-07 hết hạn 30/11/2026 (còn 19 ngày), chưa có hợp đồng kế tiếp · Điều hành gia hạn', '']] }) +
    `<div style="margin-top:10px">${formPay({ edited: true })}${formGeneral({ ro: true })}${saveBar({ left: '<span class="small" style="color:#92400e">● Có thay đổi chưa lưu ở phần Thông tin nhận thanh toán</span>', btn: B('Hủy thay đổi') + B('Lưu', 'p') })}</div>`,
});

// W06 Sau khi lưu
S.W06 = page({
  user: 'kt', last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ user: 'kt', todo: [['a', 'Hợp đồng LH-2025/HĐ-07 hết hạn 30/11/2026 (còn 19 ngày), chưa có hợp đồng kế tiếp · Điều hành gia hạn', '']] }) +
    `<div style="margin-top:10px">${formPay({}).replace('0011 0042 1188', '0011 0042 1199')}${formGeneral({ ro: true })}${saveBar({ left: '<span class="muted small">Cập nhật lần cuối 11/11/2026 10:42 · Phạm Ngọc Lan</span>' })}</div>` +
    toast('Đã lưu thông tin nhận thanh toán'),
});

// W07 Xung đột: phần đã bị sửa ở phiên khác
S.W07 = page({
  user: 'kt', last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ user: 'kt', todo: [] }) +
    `<div style="margin-top:10px"><div class="banner e" style="margin-bottom:10px"><span class="ico e">!</span><div style="flex:1"><b>Chưa lưu: Thông tin nhận thanh toán vừa được Lê Thu Hằng (Kế toán) sửa lúc 10:41.</b><div class="small">Thay đổi của bạn vẫn còn trên form. Xem bản mới để so sánh, rồi lưu lại.</div></div>${B('Xem bản mới', 'sm')}</div>
${formPay({ edited: true })}${formGeneral({ ro: true })}${saveBar({ btn: B('Hủy thay đổi') + B('Lưu', 'p') })}</div>`,
});

// W08 Hộp thoại tắt cho phép sử dụng
S.W08 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ todo: [TODO_RENEW] }) + `<div style="margin-top:10px">${formGeneral()}</div>`,
  overlay: modal('Ngừng sử dụng Khách sạn Lotus Hanoi?',
    `<div class="small" style="margin-bottom:8px">NCC đang được dùng. Sau khi ngừng, NCC và 6 dịch vụ không hiện khi chọn mới ở Tour mẫu, yêu cầu Tour và đặt dịch vụ. Dữ liệu đã có giữ nguyên.</div>
<div class="tbl" style="margin-bottom:8px"><table><tr><th>Hồ sơ Tour</th><th>Ngày dùng</th><th>Dịch vụ</th><th>Hạng mục</th></tr>
<tr><td><span class="lnk">TP-2611-0042</span><div class="muted small">Müller Reisen GmbH</div></td><td>18–20/11</td><td>Phòng nghỉ tiêu chuẩn</td><td>${bd('Đã xác nhận','b-green')}</td></tr>
<tr><td><span class="lnk">TP-2611-0047</span><div class="muted small">Dupont Voyages</div></td><td>20–22/11</td><td>Phòng nghỉ tiêu chuẩn</td><td>${bd('Cần đặt','b-amber')}</td></tr>
<tr><td><span class="lnk">TP-2612-0004</span><div class="muted small">Rossi Viaggi</div></td><td>05–07/12</td><td>Phòng Junior Suite</td><td>${bd('Cần đặt','b-amber')}</td></tr></table></div>
<div class="small">· 2 yêu cầu Tour đang xử lý có dịch vụ của NCC · 1 Tour mẫu<br>· Hạng mục Cần đặt được gắn chỉ báo “NCC ngừng sử dụng”; Điều hành phụ trách mỗi hồ sơ nhận thông báo. Lần đặt đã gửi không đổi.</div>`,
    B('Giữ đang dùng') + B('Ngừng sử dụng', 'dp'), 600),
});

// W09 Phần đầu sau khi tắt
S.W09 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ on: false, off: `<span class="small muted">từ 11/11/2026 10:52 · Trần Minh Anh</span>`, todo: [] }) + `<div style="margin-top:10px">${formGeneral()}${formPay({ ro: true })}</div>` +
    toast('Đã ngừng sử dụng Khách sạn Lotus Hanoi. Đã báo Điều hành phụ trách 3 hồ sơ Tour.', 'Hoàn tác'),
});

// ---------- DH03.2 Hợp đồng và chính sách ----------
const CT = {
  new: ['LH-2026/HĐ-12', '—', '01/12/2026 – 30/11/2027', ind('Sắp áp dụng', 'b'), 'VND', '3', 'Hủy 4 mốc · No-show 100%', 'Trẻ em 2 nhóm', 'Cọc 30% · 2 đợt', '5/6'],
  cur: ['LH-2025/HĐ-07', '20/11/2025', '01/12/2025 – 30/11/2026', ind('Sắp hết hạn', 'a') + '<div class="small" style="color:#92400e">còn 19 ngày</div>', 'VND', '3', 'Hủy 4 mốc · No-show 100%', 'Trẻ em 2 nhóm', 'Cọc 30% · 2 đợt', '5/6'],
  curN: ['LH-2025/HĐ-07', '20/11/2025', '01/12/2025 – 30/11/2026', ind('Còn hiệu lực', 'g') + '<div class="small muted">HĐ kế tiếp từ 01/12</div>', 'VND', '3', 'Hủy 4 mốc · No-show 100%', 'Trẻ em 2 nhóm', 'Cọc 30% · 2 đợt', '5/6'],
  old: ['LH-2024/HĐ-05', '18/11/2024', '01/12/2024 – 30/11/2025', ind('Hết hạn', 'r'), 'VND', '3', 'Hủy 3 mốc · No-show 100%', 'Trẻ em 2 nhóm', 'Cọc 30% · 2 đợt', '5/5'],
  old2: ['LH-2023/HĐ-11', '25/11/2023', '01/12/2023 – 30/11/2024', ind('Hết hạn', 'r'), 'USD', '2', 'Hủy 3 mốc · No-show 100%', 'Trẻ em 1 nhóm', 'Thanh toán 1 đợt', '4/4'],
};
function ctTable(keys, { act = {}, hl = '', ro = false } = {}) {
  return `<div class="tbl"><table><tr><th>Số hợp đồng</th><th>Ngày ký</th><th>Kỳ hiệu lực</th><th>Tình trạng</th><th>Tiền</th><th>Mùa giá</th><th>Chính sách</th><th>Thanh toán</th><th>DV có giá</th><th style="width:150px"></th></tr>
${keys.map(k => { const r = CT[k]; return `<tr class="${hl === k ? 'new' : ''}"><td style="white-space:nowrap"><b style="color:#1d4ed8">${r[0]}</b></td><td>${r[1]}</td><td style="white-space:nowrap">${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td class="num">${r[5]}</td><td class="small">${r[6]}<div class="muted">${r[7]}</div></td><td class="small">${r[8]}</td><td class="num">${r[9]}</td><td style="text-align:right;position:relative">${ro ? '' : (act[k] || '') + ' <span class="btn sm">⋯</span>'}</td></tr>`; }).join('')}</table></div>`;
}
const ctTitle = (ro = false) => `<div class="flex" style="margin:10px 0 8px"><b>Hợp đồng</b><span class="muted small">Mới nhất ở trên · bấm dòng để xem hoặc sửa</span><span class="ml"></span>${ro ? '' : B('+ Thêm hợp đồng', 'p')}</div>`;

// W10 Danh sách hợp đồng
S.W10 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [['a', 'Hợp đồng LH-2025/HĐ-07 hết hạn 30/11/2026 (còn 19 ngày), chưa có hợp đồng kế tiếp', '']] }) + ctTitle() +
    ctTable(['cur', 'old', 'old2'], { act: { cur: B('Gia hạn', 'sm p') } }),
});

// ---------- Bảng trượt hợp đồng ----------
const NAV = (on = 0, warn = []) => `<div class="secnav">${['Hợp đồng', 'Mùa giá', 'Chính sách đổi hủy', 'Chính sách trẻ em', 'Điều khoản thanh toán'].map((x, i) => `<span class="${i === on ? 'on' : ''} ${warn.includes(i) ? 'w' : ''}">${x}${warn.includes(i) ? ' !' : ''}</span>`).join('')}</div>`;
function secHD({ no = 'LH-2025/HĐ-07', sign = '20/11/2025', from = '01/12/2025', to = '30/11/2026', cur = 'VND', file = 'HD-Lotus-2025-2026.pdf', ro = false, errFrom = '', auto = '', note = 'Giá đã gồm VAT 8% và phí phục vụ 5%.' } = {}) {
  const c = ro ? 'ro' : '';
  return `<div class="sect ${ro ? 'ro' : ''}"><h4>Hợp đồng</h4>
<div class="f3">${f('Số hợp đồng', no, { req: !ro, cls: c })}${f('Ngày ký', sign || '<span class="muted">dd/mm/yyyy</span>', { cls: c })}${f('Loại tiền', cur, { req: !ro, cls: 'sel ' + c, auto: auto ? 'Từ HĐ trước' : '' })}</div>
<div class="f3">${f('Hiệu lực từ', from, { req: !ro, cls: (errFrom ? 'bad ' : '') + c, auto: auto, err: errFrom })}${f('Hiệu lực đến', to, { req: !ro, cls: (errFrom ? 'bad ' : '') + c, auto: auto })}
<div class="field"><label>File đính kèm</label>${file ? `<div class="file" style="margin:0">📄 ${file} <span class="muted">· 1,2 MB</span>${ro ? '' : '<span class="ml muted">✕</span>'}</div>` : `<div class="drop" style="padding:6px">Kéo thả hoặc <span class="lnk">chọn tệp</span> (PDF, ảnh, ≤ 20 MB)</div>`}</div></div>
${f('Ghi chú', note || '<span class="muted">—</span>', { cls: c })}</div>`;
}
// Mùa giá của LH-2025/HĐ-07 (kỳ 01/12/2025–30/11/2026: 75 + 9 + 67 + 123 + 91 = 365 ngày)
const SEASONS_CUR = [
  ['s1', 'Cao điểm', '01/12/2025 – 13/02/2026<br>23/02/2026 – 30/04/2026<br>01/09/2026 – 30/11/2026', true, false],
  ['s4', 'Tết Nguyên đán', '14/02/2026 – 22/02/2026', false, true],
  ['s2', 'Thấp điểm', '01/05/2026 – 31/08/2026', false, false],
];
const BAR_CUR = [['s1', 75], ['s4', 9], ['s1', 67], ['s2', 123], ['s1', 91]];
const MONTHS_CUR = ['T12', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11'];
function secMua({ seasons = SEASONS_CUR, bar = BAR_CUR, months = MONTHS_CUR, warn = '', err = '', ro = false, check = [], weekend = 'Thứ Sáu, Thứ Bảy', extraRow = '', compact = false } = {}) {
  return `<div class="sect ${ro ? 'ro' : ''}"><h4>Mùa giá <span class="lockn">· dùng chung cho mọi dịch vụ của hợp đồng</span><span class="ml"></span><span class="small" style="font-weight:400">Ngày cuối tuần: <span class="input sel ${ro ? 'ro' : ''}" style="display:inline-flex;height:24px;width:150px">${weekend}</span></span></h4>
<table style="border:1px solid #e5e7eb"><tr><th style="width:150px">Tên mùa</th><th>Khoảng ngày</th><th style="width:120px">Tách cuối tuần</th><th style="width:110px">Theo âm lịch</th><th style="width:30px"></th></tr>
${seasons.map(([c, n, r, split, lunar, bad]) => `<tr class="${bad ? 'bad' : ''} ${check.includes(n) ? 'hot' : ''}"><td><span class="dot ${c}"></span><b>${n}</b>${check.includes(n) ? `<div>${ind('Cần kiểm tra ngày', 'a')}</div>` : ''}</td><td class="small" style="line-height:1.5">${r}${ro ? '' : ' <span class="lnk">+ khoảng</span>'}${bad ? `<div class="err">${bad}</div>` : ''}</td><td>${tg(split, split ? 'NT / CT' : '', ro)}</td><td>${lunar ? '✓ Âm lịch' : '<span class="muted">—</span>'}</td><td class="muted">${ro ? '' : '⋯'}</td></tr>`).join('')}${extraRow}</table>
${ro ? '' : '<div class="small lnk" style="margin:4px 0 8px">+ Thêm mùa</div>'}
<div class="calbar">${bar.map(([c, w]) => `<span class="${c}" style="flex:${w}"></span>`).join('')}</div>
<div class="calm">${months.map(m => `<span>${m}</span>`).join('')}</div>
${warn ? `<div class="small" style="color:#92400e;margin-top:4px">⚠ ${warn}</div>` : ''}${err ? `<div class="err">✕ ${err}</div>` : ''}</div>`;
}
function secHuy({ ro = false } = {}) {
  const c = ro ? 'ro' : '';
  return `<div class="sect ${ro ? 'ro' : ''}"><h4>Chính sách đổi hủy</h4>
<table style="border:1px solid #e5e7eb"><tr><th>Hủy trước ngày sử dụng</th><th>Mức phí</th><th>Căn cứ tính</th><th style="width:30px"></th></tr>
<tr><td>Từ 30 ngày trở lên</td><td>0%</td><td>—</td>${ro ? "<td></td>" : "<td class=\"muted\">✕</td>"}</tr>
<tr><td>Từ 15 đến 29 ngày</td><td>30%</td><td>Tổng giá dịch vụ</td>${ro ? "<td></td>" : "<td class=\"muted\">✕</td>"}</tr>
<tr><td>Từ 7 đến 14 ngày</td><td>50%</td><td>Tổng giá dịch vụ</td>${ro ? "<td></td>" : "<td class=\"muted\">✕</td>"}</tr>
<tr><td>Dưới 7 ngày</td><td>100%</td><td>Tổng giá dịch vụ</td>${ro ? "<td></td>" : "<td class=\"muted\">✕</td>"}</tr></table>
${ro ? '' : '<div class="small lnk" style="margin:4px 0 6px">+ Thêm mốc</div>'}
<div class="f3">${f('Phí no-show', '100% · Tổng giá dịch vụ', { cls: 'sel ' + c })}${f('Đổi ngày', 'Miễn phí nếu báo trước 14 ngày, tùy tình trạng phòng', { cls: c })}${f('Đổi tên khách', 'Miễn phí đến 3 ngày trước ngày đến', { cls: c })}</div>
${f('Giảm số lượng', 'Giảm tối đa 10% số phòng không tính phí nếu báo trước 14 ngày', { cls: c })}</div>`;
}
function secTE({ ro = false } = {}) {
  const c = ro ? 'ro' : '';
  return `<div class="sect ${ro ? 'ro' : ''}"><h4>Chính sách trẻ em <span class="lockn">· nhóm tuổi tạo cột giá trẻ em ở bảng giá</span></h4>
<table style="border:1px solid #e5e7eb"><tr><th>Nhóm tuổi</th><th>Từ (tuổi)</th><th>Đến dưới (tuổi)</th><th>Ngủ chung giường</th><th>Thêm giường</th><th>Ăn sáng</th><th style="width:30px"></th></tr>
<tr><td><b>Em bé</b></td><td>0</td><td>4</td><td>Được, miễn phí</td><td>Không áp dụng</td><td>Miễn phí</td>${ro ? "<td></td>" : "<td class=\"muted\">✕</td>"}</tr>
<tr><td><b>Trẻ em</b></td><td>4</td><td>12</td><td>Được, có phụ thu</td><td>Bắt buộc từ 2 trẻ/phòng</td><td>Theo giá trẻ em</td>${ro ? "<td></td>" : "<td class=\"muted\">✕</td>"}</tr></table>
${ro ? '' : '<div class="small lnk" style="margin:4px 0 6px">+ Thêm nhóm tuổi</div>'}
<div class="f2">${f('Số trẻ được miễn phí', 'Tối đa 1 em bé mỗi phòng, ngủ chung giường với 2 người lớn', { cls: c })}${f('Ghi chú', 'Từ 12 tuổi tính như người lớn. Tuổi tính tại ngày sử dụng.', { cls: c })}</div></div>`;
}
function secTT({ ro = false, err = '', note = '' } = {}) {
  const c = ro ? 'ro' : '';
  const rows = err ? [['Đặt cọc', '30%', 'Sau khi NCC xác nhận', '3'], ['Đợt 2', '60%', 'Trước ngày sử dụng', '7']] : [['Đặt cọc', '30%', 'Sau khi NCC xác nhận', '3'], ['Đợt 2', '70%', 'Trước ngày sử dụng', '7']];
  return `<div class="sect ${ro ? 'ro' : ''}"><h4>Điều khoản thanh toán ${note}</h4>
<table style="border:1px solid #e5e7eb"><tr><th>Đợt</th><th>Tỷ lệ hoặc số tiền</th><th>Mốc tính hạn</th><th>Số ngày</th><th style="width:30px"></th></tr>
${rows.map(r => `<tr><td>${r[0]}</td><td>${err && r[0] === 'Đợt 2' ? `<span class="input bad" style="height:24px;width:80px;display:inline-flex">${r[1]}</span>` : r[1]}</td><td>${r[2]}</td><td>${r[3]} ngày</td><td class="muted">${ro ? '' : '✕'}</td></tr>`).join('')}
<tr><td class="b">Tổng</td><td class="b" style="color:${err ? '#b91c1c' : '#166534'}">${err ? '90%' : '100% ✓'}</td><td colspan="3"></td></tr></table>
${err ? `<div class="err">✕ ${err}</div>` : ''}${ro ? '' : '<div class="small lnk" style="margin:4px 0 6px">+ Thêm đợt</div>'}
<div class="f2">${f('Phương thức', 'Chuyển khoản', { cls: 'sel ' + c })}${f('Ghi chú', 'Hóa đơn VAT xuất theo từng đoàn sau khi trả phòng', { cls: c })}</div></div>`;
}
const ctFoot = (btn = 'Lưu hợp đồng', left = '<span class="muted small ml" style="margin-left:0;margin-right:auto">Cập nhật 20/11/2025 · Trần Minh Anh</span>') => `${left}${B('Hủy')}${B(btn, 'p')}`;

// W11 Hợp đồng đầu tiên (NCC mới): mặc định mùa Cả kỳ hợp đồng
S.W11 = page({
  last: 'Nhà hàng Phố Cổ Hà Thành',
  body: nhdr({ name: 'Nhà hàng Phố Cổ Hà Thành', type: 'Nhà hàng', tab: 2, cnt: { 1: '<span class="cnt w">1</span>', 2: '<span class="cnt r">!</span>', 3: '' }, meta: '<span>Mã <b>NCC-0131</b></span>', todo: [] }),
  overlay: dw('md', 'Thêm hợp đồng', secHD({ no: 'PCHT-2026/01', sign: '', from: '11/11/2026', to: '10/11/2027', file: '', note: '', auto: 'Mặc định' }) +
    secMua({ seasons: [['s3', 'Cả kỳ hợp đồng', '11/11/2026 – 10/11/2027', false, false]], bar: [['s3', 1]], months: ['T11', 'T12', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10'], weekend: 'Thứ Bảy, Chủ nhật' }),
    ctFoot('Lưu hợp đồng', '<span class="muted small" style="margin-right:auto">Chính sách đổi hủy, trẻ em, điều khoản thanh toán: chưa nhập</span>'), 'Nhà hàng Phố Cổ Hà Thành · hợp đồng đầu tiên', NAV(0)),
});

// W12 Mùa giá của hợp đồng (sửa; cảnh báo ngày chưa thuộc mùa)
S.W12 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [] }),
  overlay: dw('md', `Hợp đồng LH-2025/HĐ-07 ${ind('Sắp hết hạn', 'a')}`,
    secMua({
      seasons: [SEASONS_CUR[0], SEASONS_CUR[1], ['s2', 'Thấp điểm', '01/05/2026 – <span class="input focus" style="display:inline-flex;height:22px;width:92px">15/08/2026</span>', false, false]],
      bar: [['s1', 75], ['s4', 9], ['s1', 67], ['s2', 107], ['s0', 16], ['s1', 91]], warn: '16 ngày chưa thuộc mùa nào: 16/08/2026 – 31/08/2026. Dịch vụ sẽ không có giá cho các ngày này. Vẫn lưu được.',
    }) + `<div class="sect" style="opacity:.55"><h4>Chính sách đổi hủy</h4><div class="small muted">Từ 30 ngày trở lên 0% · 15–29 ngày 30% · 7–14 ngày 50% · dưới 7 ngày 100%</div></div>`,
    ctFoot(), 'Khách sạn Lotus Hanoi · 01/12/2025 – 30/11/2026 · VND', NAV(1)),
});

// W13 Mùa chồng lấn bị chặn
S.W13 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [] }),
  overlay: dw('md', `Hợp đồng LH-2025/HĐ-07 ${ind('Sắp hết hạn', 'a')}`,
    `<div class="banner e" style="margin-bottom:10px"><span class="ico e">!</span><div class="small"><b>Chưa lưu được:</b> mùa Thấp điểm trùng 15 ngày với mùa Cao điểm (01/09 – 15/09/2026). Sửa khoảng ngày của một trong hai mùa.</div></div>` +
    secMua({
      seasons: [SEASONS_CUR[0], SEASONS_CUR[1], ['s2', 'Thấp điểm', '01/05/2026 – <span class="input bad" style="display:inline-flex;height:22px;width:92px">15/09/2026</span>', false, false, 'Trùng với Cao điểm 01/09/2026 – 15/09/2026']],
      bar: [['s1', 75], ['s4', 9], ['s1', 67], ['s2', 123], ['sx', 15], ['s1', 76]],
    }),
    ctFoot(), 'Khách sạn Lotus Hanoi · 01/12/2025 – 30/11/2026 · VND', NAV(1, [1])),
});

// W14 Chính sách đổi hủy và trẻ em
S.W14 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [] }),
  overlay: dw('md', `Hợp đồng LH-2025/HĐ-07 ${ind('Sắp hết hạn', 'a')}`, secHuy() + secTE(), ctFoot(), 'Khách sạn Lotus Hanoi · 01/12/2025 – 30/11/2026 · VND', NAV(2)),
});

// W15 Điều khoản thanh toán
S.W15 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [] }),
  overlay: dw('md', `Hợp đồng LH-2025/HĐ-07 ${ind('Sắp hết hạn', 'a')}`, secTE() + secTT({ note: '<span class="lockn">· lịch trả ở KT01.2 điền sẵn theo điều khoản này</span>' }), ctFoot(), 'Khách sạn Lotus Hanoi · 01/12/2025 – 30/11/2026 · VND', NAV(4)),
});

// W15a Tổng các đợt khác 100%
S.W15a = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [] }),
  overlay: dw('md', `Hợp đồng LH-2025/HĐ-07 ${ind('Sắp hết hạn', 'a')}`, `<div class="banner e" style="margin-bottom:10px"><span class="ico e">!</span><div class="small"><b>Chưa lưu được:</b> tổng các đợt thanh toán là 90%, cần bằng 100%.</div></div>` + secTT({ err: 'Tổng các đợt phải bằng 100%. Còn thiếu 10%.' }), ctFoot(), 'Khách sạn Lotus Hanoi · 01/12/2025 – 30/11/2026 · VND', NAV(4, [4])),
});

// W16 Kỳ hiệu lực chồng lấn bị chặn
S.W16 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [TODO_RENEW.slice(0, 2).concat([''])] }),
  overlay: dw('md', 'Thêm hợp đồng', secHD({ no: 'LH-2026/HĐ-12', sign: '', from: '15/11/2026', to: '14/11/2027', file: '', note: '', errFrom: 'Trùng 16 ngày với LH-2025/HĐ-07 (01/12/2025 – 30/11/2026). Mỗi ngày chỉ thuộc một hợp đồng. Chọn ngày bắt đầu từ 01/12/2026, hoặc sửa kỳ của hợp đồng kia.' }) +
    `<div class="sect" style="opacity:.55"><h4>Mùa giá</h4><div class="small muted">Đã điền sẵn từ LH-2025/HĐ-07 · 3 mùa</div></div>`,
    ctFoot(), 'Khách sạn Lotus Hanoi', NAV(0, [0])),
});

// W17 Thêm hợp đồng khi đã có hợp đồng trước: điền sẵn từ hợp đồng gần nhất
S.W17 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [] }),
  overlay: dw('md', 'Thêm hợp đồng', `<div class="banner i" style="margin-bottom:10px"><span class="ico i">i</span><div class="small">Đã điền sẵn mùa giá, chính sách và điều khoản thanh toán từ <b>LH-2025/HĐ-07</b>; ngày mùa đã dời sang kỳ mới. Bảng giá không sao chép, dùng <b>Gia hạn</b> nếu muốn chép cả giá.</div></div>` +
    secHD({ no: '', sign: '', from: '01/12/2026', to: '30/11/2027', file: '', note: '', auto: 'Nối tiếp kỳ trước' }).replace('<div class="input ">', '<div class="input focus"><span class="muted">Nhập số hợp đồng</span>') +
    secMua({ seasons: [['s1', 'Cao điểm', '01/12/2026 – 13/02/2027<br>23/02/2027 – 30/04/2027<br>01/09/2027 – 30/11/2027', true, false], ['s4', 'Tết Nguyên đán', '14/02/2027 – 22/02/2027', false, true], ['s2', 'Thấp điểm', '01/05/2027 – 31/08/2027', false, false]], check: ['Tết Nguyên đán'], months: MONTHS_CUR, compact: true }),
    ctFoot('Lưu hợp đồng', ''), 'Khách sạn Lotus Hanoi', NAV(0)),
});

// W18 Hộp thoại Gia hạn hợp đồng
S.W18 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [['a', 'Hợp đồng LH-2025/HĐ-07 hết hạn 30/11/2026 (còn 19 ngày), chưa có hợp đồng kế tiếp', '']] }) + ctTitle() + ctTable(['cur', 'old', 'old2'], { act: { cur: B('Gia hạn', 'sm p') } }),
  overlay: modal('Gia hạn hợp đồng LH-2025/HĐ-07',
    `<div class="small muted" style="margin-bottom:8px">Tạo hợp đồng mới nối tiếp, sao chép mùa giá, chính sách, điều khoản thanh toán và bảng giá. Bạn xem lại trước khi lưu.</div>
<div class="f2">${f('Hiệu lực từ', '01/12/2026', { req: true, auto: 'Nối tiếp' })}${f('Hiệu lực đến', '30/11/2027', { req: true, auto: 'Mặc định 12 tháng' })}</div>
<div class="f2">${f('Điều chỉnh giá', '+ 5 %', { hint: 'Để trống nếu giữ nguyên giá. Âm để giảm.', cls: 'focus' })}${f('Làm tròn sau điều chỉnh', 'Đến 1.000 ₫', { cls: 'sel' })}</div>
<div class="sect" style="margin:4px 0 0;background:#f8fafc"><div class="small"><b>Sẽ sao chép</b><br>· 3 mùa giá, ngày dời sang 2026–2027 · <span style="color:#92400e">1 mùa theo âm lịch cần kiểm tra lại (Tết Nguyên đán)</span><br>· Chính sách đổi hủy 4 mốc, trẻ em 2 nhóm, thanh toán 2 đợt<br>· <b>10 dòng giá của 5 dịch vụ</b>, tăng 5% · ví dụ Superior Cao điểm NT 1.650.000 → 1.733.000 ₫</div></div>`,
    B('Hủy') + B('Tiếp tục xem lại', 'p'), 560),
});

// W19 Bảng trượt hợp đồng gia hạn: xem lại trước khi lưu
S.W19 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [] }),
  overlay: dw('md', `Gia hạn từ LH-2025/HĐ-07 ${ind('Chưa lưu', 'a')}`,
    `<div class="banner w" style="margin-bottom:10px"><span class="ico w">!</span><div class="small"><b>Kiểm tra mùa Tết Nguyên đán:</b> ngày được dời theo dương lịch (14/02 – 22/02/2027) nhưng Tết 2027 rơi vào ngày khác. Sửa khoảng ngày của mùa này và mùa Cao điểm liền kề. Khi lưu sẽ tạo hợp đồng và sao chép 10 dòng giá (+5%).</div></div>` +
    secHD({ no: 'LH-2026/HĐ-12', sign: '', from: '01/12/2026', to: '30/11/2027', file: '', note: 'Giá đã gồm VAT 8% và phí phục vụ 5%.', auto: 'Gia hạn' }) +
    secMua({ seasons: [['s1', 'Cao điểm', '01/12/2026 – 13/02/2027<br>23/02/2027 – 30/04/2027<br>01/09/2027 – 30/11/2027', true, false], ['s4', 'Tết Nguyên đán', '14/02/2027 – 22/02/2027', false, true], ['s2', 'Thấp điểm', '01/05/2027 – 31/08/2027', false, false]], check: ['Tết Nguyên đán'] }),
    ctFoot('Lưu và sao chép bảng giá', ''), 'Khách sạn Lotus Hanoi · đang tạo hợp đồng mới', NAV(0, [1])),
});

// W20 Sau khi gia hạn
S.W20 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [], cnt: { 2: '' }, meta: LOTUS_META({ hdInd: ind('Còn hiệu lực', 'g') + ' <span class="small muted">HĐ kế tiếp từ 01/12</span>' }) }) + ctTitle() +
    ctTable(['new', 'curN', 'old', 'old2'], { hl: 'new' }) +
    toast('Đã tạo LH-2026/HĐ-12 và sao chép 10 dòng giá của 5 dịch vụ (+5%).', 'Xem bảng giá'),
});

// W21 Xóa hợp đồng chưa dùng: xác nhận
S.W21 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [], cnt: { 2: '' }, meta: LOTUS_META({ hdInd: ind('Còn hiệu lực', 'g') + ' <span class="small muted">HĐ kế tiếp từ 01/12</span>' }) }) + ctTitle() + ctTable(['new', 'curN', 'old', 'old2']),
  overlay: modal('Xóa hợp đồng LH-2026/HĐ-12?',
    `<div class="small">Hợp đồng chưa được dùng trong báo giá, Booking, đặt dịch vụ hay công nợ nên có thể xóa.<br><br>Sẽ xóa cùng hợp đồng: 3 mùa giá, chính sách, điều khoản thanh toán và <b>10 dòng giá của 5 dịch vụ</b>. Dịch vụ vẫn giữ nguyên. Không hoàn tác được.</div>`,
    B('Giữ lại') + B('Xóa hợp đồng', 'dp'), 500),
});

// W21a Menu ⋯ của hợp đồng đã dùng: Xóa bị khóa có lý do
S.W21a = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [], cnt: { 2: '' }, meta: LOTUS_META({ hdInd: ind('Còn hiệu lực', 'g') + ' <span class="small muted">HĐ kế tiếp từ 01/12</span>' }) }) + ctTitle() + ctTable(['new', 'curN', 'old', 'old2']) +
    `<div class="menu" style="right:30px;top:330px;width:330px"><div class="mi" style="color:#9ca3af;align-items:flex-start">🗑 Xóa hợp đồng<div class="small" style="margin-left:auto;text-align:right;color:#6b7280">Đã dùng trong 14 báo giá,<br>3 Booking, 9 lần đặt dịch vụ</div></div></div>`,
});

// W22 Xóa mùa đã có giá: xác nhận
S.W22 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 2, todo: [] }),
  overlay: dw('md', `Hợp đồng LH-2025/HĐ-07 ${ind('Sắp hết hạn', 'a')}`, secMua(), ctFoot(), 'Khách sạn Lotus Hanoi · 01/12/2025 – 30/11/2026 · VND', NAV(1)) +
    `<div class="modal" style="width:460px;left:62%"><div class="mh">Xóa mùa Tết Nguyên đán?</div><div class="mb small">Mùa đang có giá ở <b>9 dòng giá của 4 dịch vụ</b>. Các giá này bị xóa khi lưu hợp đồng; 9 ngày 14/02 – 22/02/2026 sẽ chưa thuộc mùa nào cho tới khi bạn gán vào mùa khác.<br><br>Báo giá, Booking đã lưu không đổi.</div><div class="mf">${B('Giữ mùa')}${B('Xóa mùa', 'dp')}</div></div>`,
});

// W23 Kế toán mở hợp đồng: chỉ sửa điều khoản thanh toán
S.W23 = page({
  user: 'kt', last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ user: 'kt', tab: 2, todo: [] }),
  overlay: dw('md', `Hợp đồng LH-2025/HĐ-07 ${ind('Sắp hết hạn', 'a')}`,
    secTT({ note: '<span class="lockn">· Kế toán và Điều hành sửa được</span>' }) + secHD({ ro: true }) + `<div class="sect ro"><h4>Mùa giá, chính sách đổi hủy, chính sách trẻ em <span class="lockn">· Chỉ đọc</span></h4><div class="small muted">3 mùa giá · Hủy 4 mốc · No-show 100% · Trẻ em 2 nhóm</div></div>`,
    ctFoot('Lưu điều khoản'), 'Khách sạn Lotus Hanoi · 01/12/2025 – 30/11/2026 · VND', NAV(4)),
});

module.exports = Object.assign(S, { _lib: { nhdr, tg, ind, dw, toast, LOTUS_META, formGeneral, formPay, TODO_RENEW, ctTitle, ctTable, secTE, secHuy } });
