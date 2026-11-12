// DH08.4 Khách đoàn, DH08.5 Nhân sự, DH08.6 Nhật ký, DH08.7 Chi phí phát sinh, DH08.8 Quyết toán
const { page, hdr, drawer, modal, f, B, bd, sv } = require('./lib');
const S = {};

/* ---------- DH08.4 ---------- */
const pxNav = on => `<div class="ntab" style="margin-top:10px">${['Danh sách khách', 'Yêu cầu riêng', 'Phân phòng', 'Pax list & Rooming list'].map(x => `<div class="${x === on ? 'on' : ''}">${x}</div>`).join('')}</div>`;
const pax = [
  [1, 'Hans Müller', 'Trưởng đoàn', 'Đức', 'C01X••••47', '03/2031', 'Không cần visa', 'VN36 · 18/11 06:40', '101 TWN', ''],
  [2, 'Petra Müller', '', 'Đức', 'C01X••••52', '03/2031', 'Không cần visa', 'VN36 · 18/11 06:40', '101 TWN', 'Ăn chay'],
  [3, 'Klaus Schmidt', '', 'Đức', 'C4FR••••19', '02/2027', 'Không cần visa', 'VN36 · 18/11 06:40', '102 TWN', 'Dị ứng hải sản có vỏ'],
  [4, 'Anna Schmidt', '', 'Đức', 'C4FR••••21', '08/2030', 'Không cần visa', 'VN36 · 18/11 06:40', '102 TWN', ''],
  [5, 'Jürgen Weber', '', 'Đức', 'C7KL••••03', '11/2029', 'Không cần visa', 'VN36 · 18/11 06:40', '103 TWN', 'Không gluten'],
  [6, 'Monika Weber', '', 'Áo', 'P2281••••6', '05/2032', 'Cần visa · chưa có', 'VN36 · 18/11 06:40', '103 TWN', ''],
  [7, 'Thomas Fischer', '', 'Đức', 'C9TT••••88', '01/2033', 'Không cần visa', 'VN38 · 18/11 09:15', '104 TWN', ''],
  [8, 'Sabine Fischer', '', 'Đức', 'C9TT••••90', '01/2033', 'Không cần visa', 'VN38 · 18/11 09:15', '104 TWN', 'Ăn chay'],
  [9, 'Stefan Becker', '', 'Đức', 'C2BB••••14', '06/2030', 'Không cần visa', 'VN36 · 18/11 06:40', '105 SGL', 'Phòng tầng thấp'],
  [10, 'Ursula Hoffmann', '', 'Đức', 'C3UH••••77', '09/2031', 'Không cần visa', 'VN36 · 18/11 06:40', '106 SGL', ''],
];
const pxTable = (o = {}) => `<div class="tbl"><table><tr><th style="width:26px"><span class="cb ${o.sel ? 'part' : ''}"></span></th><th style="width:24px">#</th><th>Họ tên</th><th>Quốc tịch</th><th>Hộ chiếu</th><th>Hết hạn</th><th>Visa</th><th>Chuyến bay đến</th><th>Phòng</th><th>Yêu cầu riêng</th></tr>
${pax.map(p => {
  const pw = p[0] === 3, vw = p[0] === 6, on = o.sel && o.sel.includes(p[0]);
  return `<tr class="${on ? 'sel' : (pw || vw) && o.warn !== false ? 'hot' : ''}"><td><span class="cb ${on ? 'on' : ''}"></span></td><td class="muted">${p[0]}</td><td class="b">${p[1]}${p[2] ? ` <span class="badge b-gray">${p[2]}</span>` : ''}</td><td>${p[3]}</td><td>${p[4]}</td><td>${pw ? `<span style="color:#b45309" class="b">⚠ ${p[5]}</span>` : p[5]}</td><td>${vw ? bd(p[6], 'b-amber') : `<span class="muted">${p[6]}</span>`}</td><td>${o.flight && on ? `<span class="hl">${o.flight}</span>` : p[7]}</td><td>${p[8]}</td><td>${p[9] ? bd(p[9], 'b-violet') : ''}</td></tr>`;
}).join('')}<tr class="dim"><td colspan="10">… 8 khách khác · cuộn để xem</td></tr></table></div>`;
const pxTool = `<div class="toolbar" style="margin-top:0"><div class="input ph" style="width:200px">🔍 Tên, số hộ chiếu</div><span class="chip on">Tất cả <span class="cnt">18</span></span><span class="chip">Cần kiểm tra giấy tờ <span class="cnt w">2</span></span><span class="chip">Chưa có chuyến bay <span class="cnt">0</span></span><span class="chip">Có yêu cầu riêng <span class="cnt">5</span></span><span class="ml"></span>${B('Nhập từ Excel')}${B('+ Thêm khách', 'p')}</div>`;
const kdHdr = (o = {}) => hdr(Object.assign({ tab: 'px', meta: {} }, o));

S.W40 = page({ user: 'kd', body: kdHdr() + pxNav('Danh sách khách')
  + pxTool + pxTable() });

S.W41 = page({ user: 'kd', body: kdHdr() + pxNav('Danh sách khách') + pxTool + pxTable(),
  overlay: drawer('Thông tin khách · Klaus Schmidt',
    `<div class="sec" style="margin-top:0">Cá nhân</div>
    <div class="f3">${f('Họ', 'Schmidt', { req: true })}${f('Tên', 'Klaus', { req: true })}${f('Giới tính', 'Nam', { req: true, cls: 'sel' })}</div>
    <div class="f3">${f('Ngày sinh', '14/05/1958', { req: true })}${f('Quốc tịch', 'Đức', { req: true, cls: 'sel' })}${f('Điện thoại', '+49 171 555 0192')}</div>
    <div class="sec">Giấy tờ nhập cảnh</div>
    <div class="f3">${f('Số hộ chiếu', 'C4FRK7319', { req: true })}${f('Ngày hết hạn', '20/02/2027', { req: true, cls: 'bad' })}${f('Visa', 'Không cần visa', { cls: 'sel' })}</div>
    <div class="banner w small" style="margin:-4px 0 6px"><span class="ico w">!</span>Hộ chiếu còn dưới 6 tháng tính từ ngày nhập cảnh 18/11/2026. Hệ thống vẫn cho lưu và xuất danh sách, cảnh báo hiện cho đến khi cập nhật.</div>
    <div class="sec">Chuyến bay</div>
    <div class="f2">${f('Đến', 'VN36 · 18/11/2026 06:40 · HAN', { auto: 'Chuyến bay chung của đoàn' })}${f('Về', 'VN129 · 25/11/2026 13:20 · DAD', { auto: 'Chuyến bay chung của đoàn' })}</div>
    <div class="sec">Yêu cầu riêng</div>
    <div class="f2">${f('Ăn uống', 'Dị ứng hải sản có vỏ', { hint: 'Nhập tự do; gửi nhà hàng, du thuyền' })}${f('Phòng', 'Ví dụ: phòng tầng thấp', { cls: 'ph', hint: 'Nhập tự do; gửi khách sạn, du thuyền' })}</div>
    ${f('Ghi chú cho Điều hành', 'Mang theo thuốc dị ứng, cần thông báo nhà hàng trước mỗi bữa.', { cls: 'area' })}`,
    `<span class="muted small" style="margin-right:auto">Phòng: 102 TWN (Điều hành xếp)</span>${B('Hủy')}${B('Lưu khách', 'p')}`) });

S.W42 = page({ user: 'kd', body: kdHdr() + pxNav('Danh sách khách') + pxTool + pxTable(),
  overlay: modal('Nhập danh sách khách từ Excel',
    `<div class="file">📄 Pax_MullerReisen_Nov.xlsx <span class="muted">· 18 dòng</span><span class="ml btn lk small">Chọn tệp khác</span></div>
    <div class="flex" style="margin:6px 0 8px"><span class="badge b-green">14 khớp, cập nhật</span><span class="badge b-blue">2 khách mới</span><span class="badge b-red">2 dòng lỗi</span><span class="ml btn lk small">Tải file mẫu</span></div>
    <div class="tbl"><table><tr><th>Dòng</th><th>Họ tên</th><th>Số hộ chiếu</th><th>Kết quả</th></tr>
    <tr><td>4</td><td>Klaus Schmidt</td><td>C4FRK7319</td><td>${bd('Cập nhật: hết hạn, chuyến bay', 'b-green')}</td></tr>
    <tr><td>17</td><td>Erika Braun</td><td>C5EB00213</td><td>${bd('Khách mới', 'b-blue')}</td></tr>
    <tr class="bad"><td>12</td><td>Thomas Fischer</td><td>—</td><td class="small" style="color:#b91c1c">Thiếu số hộ chiếu</td></tr>
    <tr class="bad"><td>18</td><td>Sabine Fischer</td><td>C9TTS7790</td><td class="small" style="color:#b91c1c">Trùng số hộ chiếu với dòng 9</td></tr></table></div>
    <div class="hint">Khớp khách theo số hộ chiếu (bỏ khoảng trắng, chữ hoa). Dòng lỗi không được nhập; tải về để sửa và nhập lại.</div>`,
    `${B('Tải dòng lỗi (.xlsx)', 'lk')}<span style="flex:1"></span>${B('Hủy')}${B('Nhập 16 dòng hợp lệ', 'p')}`, 600) });

S.W43 = page({ user: 'kd', body: kdHdr() + pxNav('Danh sách khách')
  + `<div class="bulk" style="margin-top:0"><b>Đã chọn 2 khách</b><span class="ml"></span><span>Chuyến bay</span><div class="input sel" style="width:70px;height:26px">Đến</div><div class="input focus" style="width:80px;height:26px">VN38</div><div class="input" style="width:140px;height:26px">18/11/2026 09:15</div><div class="input sel" style="width:70px;height:26px">HAN</div>${B('Áp dụng', 'sm')}${B('Bỏ chọn', 'sm')}</div><div class="hint" style="margin:-2px 0 8px">Dịch vụ đón sân bay đã gửi NCC sẽ được gắn chỉ báo “Giờ bay thay đổi” ở tab Đặt dịch vụ.</div>`
  + pxTable({ sel: [7, 8], flight: 'VN38 · 18/11 09:15', warn: false }) });

S.W44 = page({ user: 'dh', body: hdr({ tab: 'px' }) + pxNav('Yêu cầu riêng')
  + `<div class="grid" style="grid-template-columns:1fr 1fr">
  <div class="card"><h3>Ăn uống <span class="muted small" style="font-weight:400">tự thêm vào email Nhà hàng, Du thuyền</span></h3><table>
  <tr><td style="width:150px">${bd('Ăn chay', 'b-violet')}</td><td class="b">2</td><td class="muted">Petra Müller, Sabine Fischer</td></tr>
  <tr><td>${bd('Dị ứng hải sản có vỏ', 'b-violet')}</td><td class="b">1</td><td class="muted">Klaus Schmidt</td></tr>
  <tr><td>${bd('Không gluten', 'b-violet')}</td><td class="b">1</td><td class="muted">Jürgen Weber</td></tr></table></div>
  <div class="card"><h3>Phòng <span class="muted small" style="font-weight:400">tự thêm vào email Khách sạn, Du thuyền</span></h3><table>
  <tr><td style="width:150px">${bd('Phòng tầng thấp', 'b-violet')}</td><td class="b">1</td><td class="muted">Stefan Becker</td></tr></table></div></div>
  <div class="hint" style="margin-top:6px">Yêu cầu do Kinh doanh nhập tự do ở ô Ăn uống, Phòng của từng khách; khách có cùng nội dung được gộp một dòng (không phân biệt hoa thường, khoảng trắng thừa).</div>
  <div class="card" style="margin-top:12px"><h3>Câu được chèn vào email đặt dịch vụ</h3><div class="email"><div class="body"><span class="hl">Yêu cầu ăn uống của đoàn: Ăn chay (2 khách); Dị ứng hải sản có vỏ (1 khách); Không gluten (1 khách).</span>
<span class="hl">Yêu cầu phòng: Phòng tầng thấp (1 khách).</span></div></div>
  <div class="sec">Đã gửi NCC trước khi yêu cầu thay đổi</div><table><tr><td>Du thuyền Hạ Long 1 đêm · Ngọc Trai</td><td>Gửi 08/11 · thiếu “Không gluten (1 khách)” (thêm 12/11) · ${sv('Cần điều chỉnh')}</td><td>${B('Gửi điều chỉnh', 'sm p')}</td></tr></table></div>` });

const rooms = (bad = false) => `<div style="display:grid;grid-template-columns:200px 1fr;gap:12px">
<div class="card" style="padding:10px"><h3>Chưa xếp <span class="cnt w">${bad ? 0 : 2}</span></h3>${bad ? '<div class="muted small">Đã xếp tất cả</div>' : '<div class="pax drag">⋮⋮ Erika Braun · Nữ</div><div class="pax">⋮⋮ Max Braun · Nam</div><div class="hint">Kéo thả vào phòng hoặc chọn khách rồi chọn phòng.</div>'}</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
${[['101', 'TWN', ['Hans Müller', 'Petra Müller']], ['102', 'TWN', ['Klaus Schmidt', 'Anna Schmidt']], ['103', 'TWN', ['Jürgen Weber', 'Monika Weber']], ['104', 'TWN', ['Thomas Fischer', 'Sabine Fischer']],
  ['105', 'SGL', bad ? ['Stefan Becker', 'Erika Braun'] : ['Stefan Becker']], ['106', 'SGL', ['Ursula Hoffmann']], ['107', 'TWN', bad ? ['Erika Braun', 'Max Braun'] : []], ['108', 'TWN', ['Lukas Wolf', 'Eva Wolf']]]
  .map(([n, t, ps]) => { const dup = bad && ps.includes('Erika Braun'); const other = n === '105' ? '107' : '105'; return `<div class="room ${dup ? 'bad' : ''}"><h4>${n} ${bd(t, 'b-gray')}<span class="ml small muted">${ps.length} khách</span></h4>${ps.map(p => `<div class="pax"${dup && p === 'Erika Braun' ? ' style="border-color:#f87171;color:#b91c1c;font-weight:600"' : ''}>⋮⋮ ${p}</div>`).join('') || '<div class="muted small" style="padding:6px 0">Trống</div>'}${dup ? `<div class="err">Erika Braun cũng ở phòng ${other}</div>` : ''}</div>`; }).join('')}
<div class="room" style="border-style:dashed;display:grid;place-items:center;color:#6b7280">+ Thêm phòng</div></div></div>`;
const roomBar = `<div class="toolbar" style="margin-top:0"><span class="muted small">Đợt lưu trú:</span><span class="chip on">Lotus Hanoi · 18–20/11</span><span class="chip">Ngọc Trai · 20/11</span><span class="chip">Indochine Huế · 21–23/11 <span class="cnt w">!</span></span><span class="chip">Riverside Bloom · 23–25/11</span><span class="ml"></span>${B('Tự xếp theo gợi ý')}${B('Sao chép sang đợt khác…')}</div>`;
S.W45 = page({ body: hdr({ tab: 'px' }) + pxNav('Phân phòng') + roomBar + rooms()
  + `<div class="flex" style="margin-top:10px"><span class="muted small">Không kiểm tra sức chứa phòng. Tự xếp: ghép theo cặp khách đăng ký chung phòng trong Booking, ưu tiên yêu cầu phòng.</span><span class="ml"></span>${B('Hủy thay đổi')}${B('Lưu phân phòng', 'p')}</div>` });

S.W46 = page({ body: hdr({ tab: 'px' }) + pxNav('Phân phòng') + roomBar.replace('Lotus Hanoi · 18–20/11', 'Lotus Hanoi · 18–20/11')
  + `<div class="banner e small" style="margin-bottom:8px"><span class="ico e">!</span><b>Chưa lưu được.</b> Erika Braun đang ở hai phòng của đợt Lotus Hanoi: 105 và 107. Bỏ khách khỏi một phòng rồi lưu lại. Thay đổi của bạn vẫn được giữ.</div>`
  + rooms(true) + `<div class="flex" style="margin-top:10px"><span class="ml"></span>${B('Hủy thay đổi')}${B('Lưu phân phòng', 'p')}</div>` });

const paxPrev = `<div class="tbl"><table><tr><th>#</th><th>Họ tên</th><th>Giới tính</th><th>Ngày sinh</th><th>Quốc tịch</th><th>Số hộ chiếu</th><th>Hết hạn</th><th>Visa</th><th>Chuyến bay đến</th><th>Phòng</th></tr>
${pax.slice(0, 7).map(p => `<tr><td>${p[0]}</td><td>${p[1].toUpperCase()}</td><td>${[2, 4, 6].includes(p[0]) ? 'F' : 'M'}</td><td>1958-05-14</td><td>${p[3] === 'Đức' ? 'DEU' : 'AUT'}</td><td>${p[4].replace('••••', '73')}</td><td>${p[5]}</td><td>${p[6] === 'Không cần visa' ? 'Exempt' : 'Pending'}</td><td>${p[7]}</td><td>${p[8]}</td></tr>`).join('')}<tr class="dim"><td colspan="10">… 11 dòng khác</td></tr></table></div>`;
const docBar = `<div class="toolbar" style="margin-top:0"><span class="chip on">Pax list</span><span class="chip">Rooming list · Lotus Hanoi</span><span class="chip">Rooming list · Indochine Huế</span><span class="chip">Rooming list · Riverside Bloom</span><span class="muted small" style="border:1px dashed #cbd5e1;border-radius:6px;padding:4px 8px;white-space:nowrap">Mẫu đang dùng: <b>PL-01 v3</b></span><span class="ml"></span>${B('Tải Excel')}${B('Tải PDF')}${B('Gửi cho NCC…', 'p')}</div>`;
S.W47 = page({ body: hdr({ tab: 'px' }) + pxNav('Pax list & Rooming list') + docBar + paxPrev
  + `<div class="card" style="margin-top:10px;padding:8px 12px"><div class="flex"><b>Lịch sử gửi</b><span class="muted small">Đại lý vé Sao Việt · Pax list 18 khách · 10/11 15:20 · Trần Minh Anh</span>${bd('Đã gửi', 'b-green')}<span class="ml btn lk small">Xem bản đã gửi</span></div></div>` });

S.W48 = page({ body: hdr({ tab: 'px' }) + pxNav('Pax list & Rooming list') + docBar + paxPrev,
  overlay: drawer('Gửi Pax list cho NCC',
    `<div class="banner w small" style="margin-bottom:10px;align-items:flex-start"><span class="ico w">!</span><div>2 khách có cảnh báo giấy tờ (Klaus Schmidt, Monika Weber). Vẫn gửi được; danh sách gửi đi dùng dữ liệu hiện tại.</div></div>
    <div class="tbl"><table><tr><th style="width:26px"></th><th>NCC trong Tour</th><th>Cột gửi theo loại NCC</th><th>Người nhận</th></tr>
    <tr><td><span class="cb on"></span></td><td class="b">Lotus Hanoi</td><td class="small">Họ tên, giới tính, quốc tịch, số hộ chiếu, phòng</td><td class="small">reservation@lotushanoi.vn</td></tr>
    <tr><td><span class="cb on"></span></td><td class="b">Du thuyền Ngọc Trai</td><td class="small">Họ tên, ngày sinh, quốc tịch, số hộ chiếu, visa</td><td class="small">ops@ngoctrai.vn</td></tr>
    <tr><td><span class="cb"></span></td><td>Indochine Palace Huế</td><td class="small">Họ tên, giới tính, quốc tịch, phòng</td><td class="small">sales@indochinepalace.vn</td></tr>
    <tr><td><span class="cb"></span></td><td>Vận tải Hoàng Long</td><td class="small">Họ tên, chuyến bay đến/về</td><td class="small">dieuxe@hoanglong.vn</td></tr></table></div>
    <div class="hint">Mỗi NCC nhận một email riêng, đính kèm Pax list chỉ gồm các cột của loại NCC đó (cấu hình mẫu ở QT04.2). Bấm tên NCC để xem trước tệp và email.</div>
    <div class="email" style="margin-top:8px"><div class="row"><span>Tiêu đề</span><b>[TP-2611-0042] Pax list đoàn Müller Reisen · 18 khách</b></div><div class="row"><span>Đính kèm</span>📎 TP-2611-0042_PaxList_LotusHanoi.xlsx</div></div>`,
    `<span class="muted small" style="margin-right:auto">2 NCC đã chọn</span>${B('Hủy')}${B('Gửi 2 email', 'p')}`, { wide: true }) });

S.W49 = page({ body: hdr({ tab: 'px' }) + pxNav('Pax list & Rooming list') + docBar.replace('<span class="chip on">Pax list</span><span class="chip">Rooming list · Lotus Hanoi</span><span class="chip">Rooming list · Indochine Huế</span>', '<span class="chip">Pax list</span><span class="chip">Rooming list · Lotus Hanoi</span><span class="chip on">Rooming list · Indochine Huế</span>').replace(B('Gửi cho NCC…', 'p'), B('Gửi cho NCC…', 'dis')).replace(B('Tải Excel'), B('Tải Excel', 'dis')).replace(B('Tải PDF'), B('Tải PDF', 'dis')).replace('PL-01 v3', 'RL-01 v2')
  + `<div class="card" style="margin-top:6px;text-align:center;padding:40px"><div class="ico w" style="width:36px;height:36px;font-size:16px;margin:0 auto 8px">!</div><div class="b">Chưa tạo được Rooming list cho Indochine Palace Huế · 21–23/11</div>
  <p class="muted">2 khách chưa được xếp phòng trong đợt lưu trú này: <b>Erika Braun</b>, <b>Max Braun</b>.</p>${B('Mở phân phòng đợt Huế', 'p')}</div>` });

/* ---------- DH08.5 ---------- */
const days = ['18/11', '19/11', '20/11', '21/11', '22/11', '23/11', '24/11', '25/11'];
const cal = (extra = '') => `<div class="cal"><div class="h">Nhân sự · vai trò</div>${days.map(d => `<div class="h">${d}</div>`).join('')}
<div><b>Đỗ Văn Khải</b><div class="small muted">HDV chính · Đức, Anh</div></div><div style="grid-column:span 8"><div class="bar">Toàn Tour 18/11 06:00 – 25/11 14:00</div></div>
<div><b>Lê Thu Hà</b><div class="small muted">Điều hành hiện trường</div></div><div><div class="bar g">Đón đoàn</div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
<div><b>Ngô Thị Mai</b><div class="small muted">HDV điểm Huế · Anh, Pháp</div></div><div></div><div></div><div></div><div></div><div><div class="bar v">⚠ Đại Nội</div></div><div></div><div></div><div></div>
${extra}</div>`;
const hrHdr = () => hdr({ tab: 'hr' });
S.W50 = page({ body: hrHdr() + `<div class="toolbar"><span class="chip on">Theo lịch</span><span class="chip">Danh sách</span><span class="ml"></span>${B('+ Phân công', 'p')}</div>` + cal()
  + `<div class="card" style="margin-top:10px;padding:8px 12px"><div class="flex"><span class="ico w">!</span><span><b>Ngô Thị Mai</b> không có Tiếng Đức. Lý do đã ghi: “HDV điểm tại Đại Nội; HDV chính Đỗ Văn Khải phiên dịch.” · Trần Minh Anh, 10/11</span></div></div>` });

S.W51 = page({ body: hrHdr() + `<div style="height:10px"></div>` + cal(),
  overlay: drawer('Phân công nhân sự',
    `<div class="f2">${f('Vai trò phục vụ', 'HDV điểm', { req: true, cls: 'sel' })}<div class="field"><label>Phạm vi <span class="req">*</span></label><div class="flex"><span class="chip">Toàn Tour</span><span class="chip on">Theo ngày</span></div></div></div>
    <div class="f2">${f('Ngày', '22/11/2026', { req: true })}${f('Giờ (không bắt buộc)', '08:00 – 12:00')}</div>
    <div class="field"><label>Chọn nhân sự <span class="req">*</span><span class="auto">Nhóm công việc nhận vai trò HDV điểm · Đang nhận phân công · khớp ngôn ngữ, trống lịch trước</span></label>
    <div class="tbl"><table><tr><th></th><th>Nhân sự (DH06)</th><th>Ngôn ngữ</th><th>Lịch 22/11</th></tr>
    <tr><td><span class="rd"></span></td><td>Vũ Đức Long</td><td>${bd('Đức', 'b-green')}</td><td class="small" style="color:#b91c1c">Bận · TP-2611-0051</td></tr>
    <tr><td><span class="rd"></span></td><td>Hồ Quang Vinh</td><td>${bd('Đức', 'b-green')} Anh</td><td class="small" style="color:#b91c1c">Bận · TP-2611-0048</td></tr>
    <tr class="sel"><td><span class="rd on"></span></td><td class="b">Ngô Thị Mai</td><td>Anh, Pháp</td><td class="small" style="color:#166534">Trống</td></tr></table></div></div>
    <div class="banner w small" style="margin-bottom:8px"><span class="ico w">!</span>Ngô Thị Mai không có Tiếng Đức (ngôn ngữ phục vụ của đoàn). Cần nhập lý do để lưu.</div>
    ${f('Lý do phân công khác ngôn ngữ', 'HDV điểm tại Đại Nội; HDV chính Đỗ Văn Khải phiên dịch.', { req: true, cls: 'focus' })}`,
    `${B('Hủy')}${B('Lưu phân công', 'p')}`) });

S.W52 = page({ body: hrHdr() + `<div style="height:10px"></div>` + cal(),
  overlay: drawer('Phân công nhân sự',
    `<div class="f2">${f('Vai trò phục vụ', 'HDV chính', { req: true, cls: 'sel' })}<div class="field"><label>Phạm vi <span class="req">*</span></label><div class="flex"><span class="chip on">Toàn Tour</span><span class="chip">Theo ngày</span></div></div></div>
    ${f('Nhân sự', 'Vũ Đức Long · Đức', { req: true, cls: 'sel bad' })}
    <div class="banner e" style="align-items:flex-start"><span class="ico e">✕</span><div><b>Trùng lịch, không lưu được</b><div class="small">Vũ Đức Long đã được phân công <b>HDV chính</b> cho <b>TP-2611-0051</b> từ 20/11 08:00 đến 22/11 18:00, trùng với phạm vi Toàn Tour 18/11 06:00 – 25/11 14:00.</div>
    <div class="flex" style="margin-top:6px">${B('Đổi sang Theo ngày (18–19/11, 23–25/11)', 'sm')}</div></div></div>
    <div class="hint" style="margin-top:8px">Kết thúc đúng giờ bắt đầu của phân công khác không tính là trùng. Hệ thống kiểm tra lại khi bấm Lưu.</div>`,
    `${B('Hủy')}${B('Lưu phân công', 'dis')}`) });

/* ---------- DH08.6 ---------- */
const runHdr = (tab, o = {}) => hdr(Object.assign({ status: 'run', tab, cnt: { sv: '<span class="cnt g">18/18</span>', bk: '', px: '', lg: '<span class="cnt r">1</span>' }, actions: B('Kết thúc Tour', 'p') }, o));
const tline = `<div class="tl" style="margin-top:6px">
<div class="it inc"><b>21/11 09:40 · Sự cố</b> ${bd('Đang xử lý', 'b-amber')} <span class="muted small">Trần Minh Anh</span><div>Xe đưa đoàn ra sân bay hỏng điều hòa, khách phàn nàn.</div><div class="small muted">Cách xử lý: Đổi xe dự phòng Hoàng Long, khởi hành muộn 25 phút.</div><div class="flex" style="margin-top:3px">${B('Cập nhật kết quả', 'sm p')}<span class="small muted">Có 1 chi phí phát sinh liên kết</span></div></div>
<div class="it ok"><b>20/11 21:15 · Nhật ký</b> <span class="muted small">Đỗ Văn Khải qua Trần Minh Anh</span><div>Đoàn ăn tối trên du thuyền, 2 suất chay đúng yêu cầu.</div></div>
<div class="it inc"><b>19/11 15:30 · Sự cố</b> ${bd('Đã xử lý', 'b-green')}<div>Khách Klaus Schmidt mất kính tại Văn Miếu.</div><div class="small muted">Kết quả: Mua kính thay thế, khách tự chi trả.</div></div>
<div class="it"><b>18/11 07:20 · Nhật ký</b><div>Đón đủ 18 khách tại Nội Bài.</div></div></div>`;
const lgTool = `<div class="toolbar"><span class="chip on">Tất cả <span class="cnt">4</span></span><span class="chip">Nhật ký</span><span class="chip">Sự cố đang mở <span class="cnt r">1</span></span><div class="input sel" style="width:120px">Mọi ngày</div><span class="ml"></span>${B('+ Sự cố', 'd')}</div>`;
S.W55 = page({ body: runHdr('lg') + lgTool
  + `<div class="card" style="padding:8px 10px"><div class="flex"><div class="input ph" style="flex:1">Ghi nhật ký điều hành… (Enter để lưu)</div><div class="input" style="width:150px">21/11/2026 10:05</div>${B('Lưu nhật ký', 'p')}</div></div>` + tline });

S.W56 = page({ body: runHdr('lg') + lgTool + tline,
  overlay: drawer('Ghi nhận sự cố',
    `<div class="f2">${f('Thời điểm', '21/11/2026 09:40', { req: true, auto: 'Hiện tại' })}${f('Ngày Tour', 'N4 · 21/11 · Hạ Long → Huế', { cls: 'ro', auto: true })}</div>
    ${f('Nội dung sự cố', 'Xe đưa đoàn ra sân bay hỏng điều hòa, khách phàn nàn.', { req: true, cls: 'area' })}
    ${f('Cách xử lý', 'Đổi xe dự phòng Hoàng Long, khởi hành muộn 25 phút.', { req: true, cls: 'area' })}
    ${f('Kết quả', 'Để trống, cập nhật sau', { cls: 'area ph', hint: 'Sự cố chưa có kết quả hiện “Đang xử lý”.' })}
    <label class="flex" style="margin:4px 0 6px"><span class="cb on"></span><b>Có chi phí phát sinh</b></label>
    <div class="card" style="padding:8px 10px;background:#f8fafc"><div class="f3">${f('Số tiền', '1.200.000', { req: true })}${f('Loại tiền', 'VND', { cls: 'sel' })}${f('Chứng từ', '📎 Hoa_don_xe.jpg')}</div><div class="hint" style="margin-top:-4px">Lưu cùng lúc sẽ tạo dòng ở tab Chi phí phát sinh, liên kết sự cố này.</div></div>`,
    `${B('Hủy')}${B('Lưu sự cố', 'p')}`) });

S.W57 = page({ body: runHdr('lg') + lgTool + tline,
  overlay: drawer('Cập nhật kết quả sự cố',
    `<div class="small muted" style="margin-bottom:8px">21/11 09:40 · Ghi bởi Trần Minh Anh · ${bd('Đang xử lý', 'b-amber')}</div>
    ${f('Nội dung sự cố', 'Xe đưa đoàn ra sân bay hỏng điều hòa, khách phàn nàn.', { cls: 'ro' })}
    ${f('Cách xử lý', 'Đổi xe dự phòng Hoàng Long, khởi hành muộn 25 phút.', { req: true, cls: 'area' })}
    ${f('Kết quả', 'Đoàn kịp chuyến VN1545. Hoàng Long chịu chi phí xe thay thế, trừ vào công nợ.', { req: true, cls: 'area focus' })}
    <div class="sec">Liên kết</div><div class="file">💰 Chi phí phát sinh · Xe dự phòng · 1.200.000 ₫ ${bd('Chưa ghi công nợ', 'b-amber')}<span class="ml btn lk small">Mở</span></div>
    <div class="sec">Lịch sử</div><div class="small muted">21/11 09:42 · Tạo sự cố · Trần Minh Anh</div>`,
    `${B('Hủy')}${B('Lưu kết quả', 'p')}`) });

/* ---------- DH08.7 ---------- */
const coRows = (o = {}) => `<div class="tbl"><table><tr>${o.kt ? '<th style="width:26px"><span class="cb part"></span></th>' : ''}<th>Ngày</th><th>Nội dung</th><th>Liên quan</th><th class="num">Số tiền</th><th>Chứng từ</th><th>Người nhập</th><th>Công nợ</th><th>Thao tác</th></tr>
${[['21/11', 'Xe dự phòng ra sân bay', 'Sự cố 21/11', '1.200.000 ₫', 'Hoa_don_xe.jpg', 'Trần Minh Anh', 0],
  ['20/11', 'Nâng hạng 2 cabin theo yêu cầu khách', '—', '120 USD', 'Bill_NgocTrai.pdf', 'Trần Minh Anh', 0],
  ['19/11', 'Vé tham quan bổ sung 2 khách', '—', '140.000 ₫', 'Ve_VanMieu.jpg', 'Lê Thu Hà', 1]]
  .map((r, i) => `<tr class="${o.kt && i < 2 ? 'sel' : ''}">${o.kt ? `<td><span class="cb ${i < 2 ? 'on' : ''}"></span></td>` : ''}<td>${r[0]}</td><td class="b">${r[1]}</td><td class="muted">${r[2]}</td><td class="num">${r[3]}</td><td class="small">📎 ${r[4]}</td><td class="muted">${r[5]}</td><td>${r[6] ? bd('Đã ghi công nợ', 'b-green') : bd('Chưa ghi công nợ', 'b-amber')}</td><td>${o.kt ? (r[6] ? B('Xem ở KT01', 'sm') : '') : (r[6] ? '<span class="muted small">Sửa tại KT01</span>' : B('Sửa', 'sm'))}</td></tr>`).join('')}
<tr class="grp"><td colspan="${o.kt ? 9 : 8}">Tổng: 1.340.000 ₫ + 120 USD · 2 khoản chưa ghi công nợ</td></tr></table></div>`;
const coTool = (kt) => `<div class="toolbar"><span class="chip on">Tất cả <span class="cnt">3</span></span><span class="chip">Chưa ghi công nợ <span class="cnt w">2</span></span><span class="ml"></span>${kt ? '' : B('+ Chi phí phát sinh', 'p')}</div>`;
S.W60 = page({ body: runHdr('co') + coTool() + coRows() });
S.W61 = page({ body: runHdr('co') + coTool() + coRows(),
  overlay: drawer('Thêm chi phí phát sinh',
    `<div class="f2">${f('Ngày phát sinh', '20/11/2026', { req: true })}${f('Liên quan sự cố', 'Không', { cls: 'sel' })}</div>
    ${f('Nội dung', 'Nâng hạng 2 cabin theo yêu cầu khách', { req: true })}
    <div class="f3">${f('Số tiền', '120', { req: true })}${f('Loại tiền', 'USD', { cls: 'sel', req: true })}${f('NCC (nếu có)', 'Du thuyền Ngọc Trai', { cls: 'sel' })}</div>
    <div class="field"><label>Thu lại từ khách?</label><div class="flex"><span class="chip on">Không · công ty chịu</span><span class="chip">Có · thu khách</span></div><div class="hint">Gợi ý cho Kế toán ghi phải thu hay phải trả; Kế toán quyết định khi ghi công nợ.</div></div>
    <div class="field"><label>Chứng từ</label><div class="file">📎 Bill_NgocTrai.pdf <span class="muted">· 420 KB</span><span class="ml" style="color:#166534">Đã tải</span></div><div class="drop">Kéo thả hoặc chọn tệp · PDF, JPG, PNG · tối đa 10 MB</div></div>`,
    `${B('Hủy')}${B('Lưu chi phí', 'p')}`) });
S.W62 = page({ body: runHdr('co') + coTool() + coRows(),
  overlay: drawer('Thêm chi phí phát sinh',
    `<div class="f2">${f('Ngày phát sinh', '21/11/2026', { req: true })}${f('Liên quan sự cố', 'Không', { cls: 'sel' })}</div>
    ${f('Nội dung', 'Nước uống bổ sung trên xe', { req: true })}
    <div class="f3">${f('Số tiền', '360.000', { req: true })}${f('Loại tiền', 'VND', { cls: 'sel', req: true })}${f('NCC (nếu có)', 'Chọn…', { cls: 'sel ph' })}</div>
    <div class="field"><label>Chứng từ</label>
    <div class="file">📎 Hoa_don_nuoc.jpg <span class="muted">· 1,2 MB</span><span class="ml" style="color:#166534">Đã tải</span></div>
    <div class="file bad">📎 Video_xe.mp4 <span class="muted">· 48 MB</span><span class="ml err" style="margin:0">Không hỗ trợ định dạng, vượt 10 MB</span>${B('Bỏ', 'sm')}</div>
    <div class="file bad">📎 Bien_nhan.pdf <span class="muted">· 2,1 MB</span><span class="ml err" style="margin:0">Tải lỗi do mất kết nối</span>${B('Tải lại', 'sm')}</div></div>
    <div class="banner e small"><span class="ico e">!</span>Còn 2 tệp lỗi. Tải lại hoặc bỏ tệp để lưu. Các trường đã nhập được giữ nguyên.</div>`,
    `${B('Hủy')}${B('Lưu chi phí', 'dis')}`) });
S.W63 = page({ user: 'kt', body: runHdr('co', { actions: '' }) + coTool(true)
  + `<div class="bulk"><b>Đã chọn 2 khoản chưa ghi công nợ</b><span class="ml"></span>${B('Bỏ chọn', 'sm')}${B('Ghi công nợ (2) tại KT01.3 ↗', 'sm p')}</div>` + coRows({ kt: true })
  + `<div class="hint" style="margin-top:8px">Mở KT01.3 với Tour Code, 2 khoản, số tiền, loại tiền, NCC và chứng từ điền sẵn. Chỉ báo đổi thành “Đã ghi công nợ” khi khoản công nợ liên kết được lưu.</div>` });

/* ---------- DH08.8 ---------- */
S.W70 = page({ body: hdr({ tab: 'st', cnt: {} }) + `<div class="card" style="margin:40px auto 0;width:560px;text-align:center;padding:28px">
<div class="ico i" style="width:38px;height:38px;font-size:16px;margin:0 auto 10px">🔒</div><div class="b" style="font-size:15px">Quyết toán mở sau khi Tour kết thúc</div>
<p class="muted">Trạng thái hiện tại: <b>Mới tạo</b>. Bắt đầu Tour, rồi bấm Kết thúc Tour ở Tổng quan để mở Quyết toán.</p>${B('Về Tổng quan', 'p')}</div>` });

const parts = (n, done = [], note = {}, hint = false) => `<div class="flex" style="margin:10px 0">${['Chi phí thực tế · Điều hành', 'Đối chiếu & P&L · Kế toán'].map((s, i) => `<div class="flex" style="padding:6px 12px;border-radius:16px;${i + 1 === n ? 'background:#1e40af;color:#fff' : done.includes(i + 1) ? 'background:#dcfce7;color:#166534' : 'background:#f3f4f6;color:#6b7280'}"><b>${done.includes(i + 1) ? '✓' : i + 1}</b> ${s}${note[i + 1] ? ` <span class="small">· ${note[i + 1]}</span>` : ''}</div>`).join('')}${hint ? '<span class="ml"></span><span class="muted small">Đóng Tour ở header, không phụ thuộc quyết toán</span>' : ''}</div>`;
const NQT = bd('Chưa quyết toán', 'b-amber'), DQT = bd('Đã quyết toán', 'b-green');
const META_END = { thu: '0 EUR', tra: '38.650.000 ₫' };
const endHdr = (o = {}) => hdr(Object.assign({ status: 'end', tab: 'st', meta: META_END, cnt: { sv: '<span class="cnt g">18/18</span>', bk: '', px: '', st: '' } }, o));
const closedHdr = (o = {}) => hdr(Object.assign({ status: 'closed', tab: 'st', meta: META_END, cnt: { sv: '<span class="cnt g">18/18</span>', bk: '', px: '', st: '' }, actions: B('Mở lại Tour') }, o));
const costTbl = `<div class="tbl"><table><tr><th>Dịch vụ</th><th>NCC</th><th class="num">Giá NCC xác nhận</th><th class="num" style="width:150px">Chi phí thực tế</th><th class="num">Chênh lệch</th><th>Chứng từ</th></tr>
  <tr><td class="b">KS Hà Nội 4★ · 10 phòng × 2 đêm</td><td>Lotus Hanoi</td><td class="num">29.000.000 ₫</td><td><div class="input">29.000.000 <span class="auto">Gợi ý</span></div></td><td class="num">0</td><td class="small">📎 HĐ_Lotus.pdf</td></tr>
  <tr><td class="b">Du thuyền Hạ Long · 10 cabin</td><td>Ngọc Trai</td><td class="num">1.850 USD</td><td><div class="input">1.850 USD <span class="auto">Gợi ý</span></div></td><td class="num">0</td><td class="small">📎 Invoice_NT.pdf</td></tr>
  <tr class="hot"><td class="b">KS Huế 4★ · 10 phòng × 2 đêm</td><td>Indochine Palace</td><td class="num">27.600.000 ₫</td><td><div class="input focus">28.300.000</div></td><td class="num" style="color:#b91c1c">+700.000 ₫</td><td><span class="btn lk small">+ Đính kèm</span></td></tr>
  <tr><td class="b">Ăn tối phố cổ · 18 suất</td><td>NH Phố Hội</td><td class="num">7.560.000 ₫</td><td><div class="input ph">Chưa nhập</div></td><td></td><td></td></tr>
  <tr><td class="b">Đón sân bay Nội Bài · 1 xe</td><td>Hoàng Long</td><td class="num">2.800.000 ₫</td><td><div class="input">2.800.000 <span class="auto">Gợi ý</span></div></td><td class="num">0</td><td class="small">📎 HĐ_HL.pdf</td></tr>
  <tr style="background:#f8fafc"><td class="b">Phí hủy NCC · Xe tiễn sân bay Đà Nẵng 25/11 <span class="badge b-gray">Lần đặt Đã hủy</span></td><td>Hoàng Long</td><td class="num">Phí đã ghi 600.000 ₫</td><td><div class="input" style="border-style:dashed">600.000 <span class="auto">KT01</span></div></td><td class="num muted">—</td><td class="small">📎 Email_huy_HL.pdf</td></tr>
  <tr class="dim"><td colspan="6">… 5 dịch vụ khác · 2 chi phí phát sinh (từ tab Chi phí phát sinh, chỉ đọc) · dòng phí hủy chỉ đọc, sửa phí ở Đặt dịch vụ hoặc KT01</td></tr></table></div>`;
const w71Body = endHdr({ extra: NQT, actions: B('Đóng Tour') }) + parts(1, [], {}, true) + costTbl
  + `<div class="flex" style="margin-top:10px"><span class="muted small">Ô có nhãn “Gợi ý” lấy từ giá NCC xác nhận; sửa để ghi số thực tế. Lý do chênh lệch nhập khi ≠ 0. Sửa được đến khi đóng Tour.</span><span class="ml"></span>${B('Điền gợi ý cho 1 ô trống')}${B('Lưu')}${B('Lưu và chuyển Kế toán', 'p')}</div>`;
S.W71 = page({ body: w71Body });

const kpi = (l, v, s = '', c = '') => `<div class="card" style="padding:8px 12px"><div class="muted small">${l}</div><div class="kpi" style="${c}">${v}</div><div class="small muted">${s}</div></div>`;
S.W72 = page({ user: 'kt', body: endHdr({ extra: NQT, actions: '' }) + parts(2, [1])
  + `<div class="grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:10px">${kpi('Doanh thu thực tế', '1.054.283.220 ₫', 'Phải thu KT01 38.420 EUR quy đổi · phát sinh 0')}${kpi('Chi phí thực tế', '871.230.000 ₫', 'Dịch vụ, phí hủy 866.848.000 · phát sinh 4.382.000')}${kpi('Điều chỉnh ròng', '−2.500.000 ₫', '1 khoản')}${kpi('P&L thực tế', '180.553.220 ₫', 'Biên 17,1% · dự tính 15,8%', 'color:#166534')}</div>
  <div class="grid" style="grid-template-columns:0.9fr 0.9fr 1.3fr"><div class="card"><h3>Đối chiếu AR · khách</h3><table><tr><td>Phải thu theo lịch thanh toán (KT01)</td><td class="num">38.420 EUR</td></tr><tr class="dim"><td class="small">Giá trị Booking · tham khảo</td><td class="num small">38.420 EUR</td></tr><tr><td>Đã thu (KT01)</td><td class="num">38.420 EUR</td></tr><tr><td class="b">Còn phải thu</td><td class="num b">0 EUR</td></tr></table>
  ${f('Kết quả đối chiếu AR', 'Khớp xác nhận công nợ của đại lý 26/11; đã tất toán', { req: true, cls: 'area' })}</div>
  <div class="card"><h3>Đối chiếu AP · NCC</h3><table><tr><th>NCC</th><th class="num">KT01</th><th class="num">Thực tế</th></tr>
  <tr><td>Indochine Palace</td><td class="num">27.600.000</td><td class="num" style="color:#b91c1c">28.300.000</td></tr><tr><td>Ngọc Trai</td><td class="num">1.850 USD</td><td class="num">1.850 USD</td></tr><tr class="dim"><td colspan="3">… 7 NCC khớp</td></tr></table></div>
  <div class="card"><h3>Tỷ giá quy đổi <span class="auto">Tỷ giá có hiệu lực · QT05 · sửa được</span></h3><table><tr><th>Phần</th><th class="num">Số tiền</th><th class="num">Tỷ giá</th><th>Ngày tỷ giá</th><th class="num">VND</th></tr>
  <tr><td class="small">Thu đợt 1 · 21/10</td><td class="num">11.526 EUR</td><td class="num">27.350</td><td class="small">21/10</td><td class="num">315.236.100</td></tr>
  <tr><td class="small">Thu đợt 2 · 12/11</td><td class="num">26.894 EUR</td><td class="num">27.480</td><td class="small">12/11</td><td class="num">739.047.120</td></tr>
  <tr><td class="small">Chi Ngọc Trai · 03/11</td><td class="num">1.850 USD</td><td class="num"><span class="input" style="height:22px;display:inline-flex">25.350</span></td><td class="small">03/11</td><td class="num">46.897.500</td></tr>
  <tr><td class="small">Chi phát sinh cabin · 21/11</td><td class="num">120 USD</td><td class="num">25.350</td><td class="small" style="color:#92400e">20/11 · gần nhất</td><td class="num">3.042.000</td></tr></table><div class="hint">Ngày cần chưa có tỷ giá thì lấy ngày gần nhất trước đó; chỉ khóa Lưu khi không có ngày nào.</div></div></div>
  <div class="card" style="margin-top:10px;padding:8px 12px"><div class="flex"><b>Điều chỉnh</b><span class="muted">Chiết khấu đại lý thanh toán sớm</span><span class="ml num">−2.500.000 ₫</span>${B('+ Điều chỉnh', 'sm')}<span style="width:20px"></span>${B('Lưu quyết toán', 'p')}</div></div>` });

const saved = `<div class="banner s" style="margin-top:10px"><span class="ico ok">✓</span><div style="flex:1"><b>Quyết toán phiên bản 1 đã lưu</b> · 27/11/2026 16:10 · Phạm Ngọc Lan · P&L thực tế <b>180.553.220 ₫ (17,1%)</b> · trạng thái hồ sơ không đổi</div></div>`;
const savedBody = `<div class="grid" style="grid-template-columns:repeat(4,1fr);margin-top:10px">${kpi('Doanh thu thực tế', '1.054.283.220 ₫')}${kpi('Chi phí thực tế', '871.230.000 ₫')}${kpi('Điều chỉnh ròng', '−2.500.000 ₫')}${kpi('P&L thực tế', '180.553.220 ₫', 'Biên 17,1%', 'color:#166534')}</div>
<div class="card" style="margin-top:10px"><h3>Công nợ tại thời điểm xem <span class="muted small" style="font-weight:400">không chặn đóng Tour</span></h3><table><tr><td>Còn phải thu khách</td><td class="num">0 EUR</td><td class="muted small">Đã tất toán</td></tr><tr><td>Còn phải trả NCC</td><td class="num">38.650.000 ₫</td><td class="muted small">4 NCC</td></tr></table></div>`;
const versions = `<div class="card" style="margin-top:10px"><h3>Các phiên bản quyết toán</h3><table><tr><th>Phiên bản</th><th>Lưu lúc</th><th>Người lưu</th><th class="num">P&L</th><th>Trạng thái</th></tr>
<tr><td>Phiên bản 1</td><td>27/11/2026 16:10</td><td>Phạm Ngọc Lan</td><td class="num">180.553.220 ₫</td><td>${bd('Hiện hành', 'b-green')}</td></tr></table></div>`;
S.W73 = page({ user: 'kt', body: endHdr({ extra: DQT, actions: '' }) + parts(0, [1, 2]) + saved + savedBody + versions });

S.W74 = page({ body: w71Body,
  overlay: modal('Đóng Tour TP-2611-0042?',
    `<p style="margin:0 0 8px">Sau khi đóng, mọi tab chuyển <b>chỉ đọc</b>, kể cả Chi phí thực tế. Kế toán vẫn đối chiếu và lưu quyết toán. Khách được đưa vào chăm sóc sau Tour (KD04.2).</p>
    <div class="small b" style="margin-bottom:4px">Nhắc trước khi đóng · không chặn</div>
    <div class="banner i small" style="align-items:flex-start;margin-bottom:6px"><span class="ico i">i</span><div><b>Chưa có quyết toán.</b> Kế toán quyết toán sau, kể cả khi hồ sơ đã đóng.</div></div>
    <div class="banner w small" style="align-items:flex-start;margin-bottom:6px"><span class="ico w">!</span><div><b>Chi phí thực tế chưa chuyển Kế toán.</b> Hệ thống sẽ chuyển số đã lưu lúc 26/11/2026 09:20; 1 ô chưa có số (Ăn tối phố cổ) lấy giá gợi ý 7.560.000 ₫. Bước 1 ghi “Chuyển khi đóng Tour”.</div></div>
    <div class="banner i small" style="align-items:flex-start"><span class="ico i">i</span><div>Công nợ còn lại vẫn ghi tiếp ở KT01 theo Tour Code: phải trả 38.650.000 ₫ (phải thu đã tất toán).</div></div>`,
    `${B('Hủy')}${B('Đóng Tour', 'p')}`, 560) });

S.W75 = page({ body: closedHdr({ extra: NQT })
  + `<div class="banner i" style="margin-top:10px"><span class="ico i">🔒</span><div style="flex:1">Hồ sơ đã đóng 28/11/2026 09:00 bởi Trần Minh Anh · <b>chỉ đọc</b>. Kế toán vẫn đối chiếu và lưu quyết toán. Thu chi tiếp tục ghi tại KT01.</div>${B('Xem công nợ Tour ↗', 'sm')}</div>`
  + parts(0, [1], { 1: 'Chuyển khi đóng Tour' })
  + `<div class="grid" style="grid-template-columns:repeat(3,1fr)">${kpi('Chi phí dịch vụ thực tế', '866.848.000 ₫', '10 dịch vụ, 1 phí hủy NCC · 1 ô lấy giá gợi ý')}${kpi('Chênh lệch so với giá NCC', '+700.000 ₫', '1 dịch vụ · đã ghi lý do')}${kpi('Chứng từ', '9/10', 'đã đính kèm')}</div>
  <div class="card" style="margin-top:10px"><h3>Nguồn số liệu chi phí <span class="muted small" style="font-weight:400">chỉ đọc · chuyển Kế toán khi đóng Tour 28/11/2026 09:00</span></h3><div class="muted small">Số đã lưu 26/11/2026 09:20; Ăn tối phố cổ chưa nhập nên lấy giá gợi ý 7.560.000 ₫.</div></div>
  <div class="card" style="margin-top:10px"><h3>Đối chiếu và P&L · Kế toán</h3><div class="muted">Chưa quyết toán. Kế toán đối chiếu và lưu quyết toán tại đây; hồ sơ không cần mở lại.</div></div>` });

S.W76 = page({ body: closedHdr({ extra: DQT, cnt: { sv: '', bk: '', px: '', st: '' } }) + savedBody,
  overlay: modal('Mở lại Tour TP-2611-0042?',
    `<p style="margin:0 0 8px">Hồ sơ chuyển về <b>Đã kết thúc</b> để sửa dữ liệu điều hành. Quyết toán giữ nguyên; Kế toán lưu phiên bản mới khi cần, không phụ thuộc việc mở lại.</p>
    <div class="small" style="margin-bottom:8px">• Đóng lại không cần quyết toán mới.<br>• Lịch sử khách ở KD04.2 hiện “Đang cập nhật” đến khi đóng lại.<br>• Survey chưa gửi của Tour này bị bỏ. Ngày đóng lần đầu (28/11/2026) giữ nguyên.</div>
    ${f('Lý do mở lại', 'Nhà xe Hoàng Long báo phí chờ 450.000 ₫ ngày 25/11, cần ghi chi phí phát sinh', { req: true, cls: 'area focus' })}`,
    `${B('Hủy')}${B('Mở lại Tour', 'p')}`) });

S.W78 = page({ user: 'qt', body: closedHdr({ extra: DQT, cnt: { sv: '', bk: '', px: '', st: '' }, meta: Object.assign({}, META_END, { pt: 'Lê Quang Huy <span class="muted">(ngừng hoạt động)</span>' }) }) + savedBody,
  overlay: modal('Mở lại Tour TP-2611-0042?',
    `<div class="banner w small" style="align-items:flex-start;margin-bottom:8px"><span class="ico w">!</span><div>Điều hành phụ trách <b>Lê Quang Huy</b> đã ngừng hoạt động (tài khoản bị khóa). Quản trị hệ thống mở lại và giao người phụ trách mới.</div></div>
    <p style="margin:0 0 8px">Hồ sơ chuyển về <b>Đã kết thúc</b>. Quyết toán giữ nguyên. Survey chưa gửi của Tour bị bỏ; ngày đóng lần đầu (28/11/2026) giữ nguyên.</p>
    ${f('Điều hành phụ trách mới', 'Trần Minh Anh <span class="muted">· Đang nhận phân công</span>', { req: true, cls: 'sel', hint: 'Chỉ nhân sự nhóm Điều hành, Đang nhận phân công, Nội bộ, tài khoản đang hoạt động (DH06). Người mới nhận thông báo.' })}
    ${f('Lý do mở lại', 'Người phụ trách cũ nghỉ việc; NCC Hoàng Long báo phí chờ 450.000 ₫ cần ghi chi phí phát sinh', { req: true, cls: 'area focus' })}`,
    `${B('Hủy')}${B('Mở lại Tour', 'p')}`, 560) });

/* ---------- Trạng thái sau thao tác (bổ sung) ---------- */
S.W45a = page({ body: hdr({ tab: 'px' }) + pxNav('Phân phòng') + roomBar + rooms(),
  overlay: modal('Sao chép phân phòng từ Lotus Hanoi · 18–20/11',
    `<p style="margin:0 0 8px">Chọn các đợt lưu trú sẽ dùng cùng cách xếp. Hệ thống ghép theo hạng phòng (TWN → TWN, SGL → SGL) và tự đánh số phòng của đợt đích.</p>
    <div class="tbl"><table><tr><th style="width:26px"><span class="cb on"></span></th><th>Đợt lưu trú</th><th>Hiện tại</th><th>Sau khi sao chép</th></tr>
    <tr><td><span class="cb on"></span></td><td class="b">Ngọc Trai · 20/11</td><td class="muted">Chưa xếp</td><td>10 cabin · 16 khách</td></tr>
    <tr><td><span class="cb on"></span></td><td class="b">Indochine Huế · 21–23/11</td><td class="muted">Chưa xếp</td><td>10 phòng · 16 khách</td></tr>
    <tr><td><span class="cb on"></span></td><td class="b">Riverside Bloom · 23–25/11</td><td>${bd('Đã xếp 18 khách', 'b-amber')}</td><td>Ghi đè · 16 khách</td></tr></table></div>
    <div class="banner w small" style="margin-top:8px"><span class="ico w">!</span><div>2 khách chưa xếp ở đợt nguồn (Erika Braun, Max Braun) vẫn ở nhóm Chưa xếp của các đợt đích. Riverside Bloom đang có phân phòng sẽ bị ghi đè.</div></div>
    <div class="hint">Kết quả hiện ngay trên màn phân phòng; chỉ được lưu khi bấm Lưu phân phòng.</div>`,
    `${B('Hủy')}${B('Sao chép sang 3 đợt', 'p')}`, 600) });

S.W45b = page({ body: hdr({ tab: 'px' }) + pxNav('Phân phòng')
  + roomBar.replace(' <span class="cnt w">!</span>', '')
  + rooms()
  + `<div class="flex" style="margin-top:10px"><span class="muted small">Đã lưu 14/11 10:20 · 4 đợt lưu trú · mỗi đợt còn 2 khách chưa xếp</span><span class="ml"></span>${B('Hủy thay đổi', 'dis')}${B('Lưu phân phòng', 'dis')}</div>`,
  overlay: `<div class="toast">✓ Đã lưu phân phòng cho 4 đợt lưu trú · còn 2 khách chưa xếp <a>Xem khách chưa xếp</a></div>` });

S.W71a = page({ body: endHdr({ extra: NQT, actions: B('Đóng Tour') }) + parts(2, [1], {}, true)
  + `<div class="banner s"><span class="ico ok">✓</span><div style="flex:1"><b>Đã chuyển Kế toán</b> lúc 26/11/2026 09:40 · Phạm Ngọc Lan đã nhận thông báo. Điều hành vẫn sửa được chi phí cho đến khi đóng Tour.</div></div>
  <div class="grid" style="grid-template-columns:repeat(3,1fr);margin-top:10px">${kpi('Chi phí dịch vụ thực tế', '866.848.000 ₫', '10/10 dịch vụ đã nhập · 1 phí hủy NCC')}${kpi('Chênh lệch so với giá NCC', '+700.000 ₫', '1 dịch vụ · đã ghi lý do')}${kpi('Chứng từ', '10/10', 'đã đính kèm')}</div>
  <div class="card" style="margin-top:10px;padding:8px 12px"><div class="flex"><span class="muted">Chờ Kế toán đối chiếu và lưu quyết toán. Đóng Tour không cần chờ quyết toán.</span><span class="ml"></span>${B('Sửa chi phí')}</div></div>` });

module.exports = S;
