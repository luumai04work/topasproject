// DH08.1 Tổng quan, DH08.2 Dịch vụ & checklist, DH08.3 Đặt dịch vụ
const { page, hdr, drawer, modal, f, B, bd, sv, pg } = require('./lib');
const S = {};

/* ---------- DH08.1 ---------- */
const itin = [
  ['N1 · 18/11', 'Frankfurt → Hà Nội'], ['N2 · 19/11', 'Hà Nội'], ['N3 · 20/11', 'Hà Nội → Hạ Long'], ['N4 · 21/11', 'Hạ Long → Huế'],
  ['N5 · 22/11', 'Huế'], ['N6 · 23/11', 'Huế → Hội An'], ['N7 · 24/11', 'Hội An'], ['N8 · 25/11', 'Hội An → Đà Nẵng'],
];
// Lịch trình gọn: ngày + tuyến. cur = chỉ số ngày hiện tại (khi Tour đang diễn ra)
const itinCard = (cur = -1) => `<div class="card"><h3>Lịch trình</h3>
<table>${itin.map((r, i) => `<tr class="${i === cur ? 'sel' : i < cur ? 'dim' : ''}"><td class="b" style="width:96px">${r[0]}</td><td>${r[1]}${i === cur ? ' ' + bd('Hôm nay', 'b-blue') : ''}</td></tr>`).join('')}</table></div>`;

// Chỉ liệt kê việc còn thiếu; việc đã xong gộp một dòng
const todo = `<div class="card"><h3>Việc cần làm trước khởi hành <span class="cnt w">3</span></h3>
<div class="list">
<div class="li"><span class="ico w">!</span><div style="flex:1"><b>Đặt dịch vụ</b> <span class="muted">· 3 cần đặt, 1 cần đặt lại</span></div>${B('Đặt dịch vụ', 'sm p')}</div>
<div class="li"><span class="ico w">!</span><div style="flex:1"><b>Checklist</b> <span class="muted">· còn 6 việc chưa xong, 1 quá hạn</span></div>${B('Xem việc', 'sm')}</div>
<div class="li"><span class="ico w">!</span><div style="flex:1"><b>Giấy tờ khách</b> <span class="muted">· 2 khách cần kiểm tra</span></div>${B('Xem khách', 'sm')}</div>
</div><div class="small muted" style="margin-top:8px"><span style="color:#166534">✓ Đã xong:</span> Phân phòng 18/18 khách · HDV tiếng Đức</div></div>`;
const ovNew = (o = {}) => `<div class="grid" style="grid-template-columns:1.4fr 1fr;margin-top:12px">${todo}${itinCard()}</div>`;

S.W01 = page({ body: hdr({ actions: B('Thông tin điều hành') + B('Bắt đầu Tour', 'p') }) + ovNew() });

S.W02 = page({ body: hdr({ actions: B('Thông tin điều hành') + B('Bắt đầu Tour', 'p') }) + ovNew(),
  overlay: drawer('Thông tin điều hành',
    `${f('Điều hành phụ trách hồ sơ', 'Trần Minh Anh', { req: true, cls: 'sel', hint: 'Danh sách từ DH06: nhóm Điều hành, Đang nhận phân công, Nội bộ, tài khoản liên kết đang hoạt động, có vai trò Điều hành.' })}
     <div class="field"><label>Đổi sang</label><div class="input sel focus">Lê Thu Hà</div></div>
     ${f('Ngôn ngữ phục vụ của đoàn', 'Tiếng Đức', { req: true, cls: 'sel', auto: 'Từ Booking', hint: 'Dùng để gợi ý và kiểm tra Hướng dẫn viên ở tab Nhân sự.' })}
     ${f('Ghi chú điều hành', 'Đoàn đại lý quen, ưu tiên xe đời mới. Trưởng đoàn: Hans Müller.', { cls: 'area' })}
     <div class="banner i small">Người thực hiện từng công việc trong checklist không đổi theo người phụ trách hồ sơ.</div>`,
    `<span class="muted small" style="margin-right:auto">Có thay đổi chưa lưu</span>${B('Hủy')}${B('Lưu thay đổi', 'p')}`) });

S.W03 = page({ body: hdr({ actions: B('Thông tin điều hành') + B('Bắt đầu Tour', 'p') }) + ovNew(),
  overlay: modal('Bắt đầu Tour TP-2611-0042?',
    `<p style="margin:0 0 8px">Hệ thống sẽ chuyển trạng thái sang <b>Đang diễn ra</b> và ghi thời điểm bắt đầu.</p>
     <div class="banner w" style="align-items:flex-start"><span class="ico w">!</span><div><b>Còn 3 mục chưa sẵn sàng</b><div class="small">• 1 công việc checklist chưa hoàn tất: Chuẩn bị bảng đón<br>• 1 dịch vụ Chờ kết quả: Riverside Bloom Hội An (23/11)<br>• 1 khách: hộ chiếu hết hạn trước 6 tháng</div></div></div>
     <div class="field" style="margin-top:10px"><label>Thời điểm bắt đầu</label><div class="input" style="width:220px">18/11/2026 06:40</div><div class="hint">Mặc định là thời điểm hiện tại; được chọn sớm hơn nếu cập nhật muộn.</div></div>`,
    `${B('Xem các mục', 'lk')}<span style="flex:1"></span>${B('Hủy')}${B('Vẫn bắt đầu Tour', 'p')}`, 560) });

// Đang diễn ra: chỉ còn Hôm nay (kèm nút ghi nhanh) và Lịch trình
const today = `<div class="card"><h3>Hôm nay · N3 · 20/11 · Hà Nội → Hạ Long<span class="ml flex">${B('+ Nhật ký', 'sm')}${B('+ Sự cố', 'sm d')}${B('+ Chi phí', 'sm')}</span></h3>
<table><tr><td style="width:76px" class="b">08:00</td><td>Xe Hoàng Long đón tại Lotus Hanoi</td><td>${sv('Đã xác nhận')}</td></tr>
<tr><td class="b">12:00</td><td>Lên du thuyền Ngọc Trai · 10 cabin</td><td>${sv('Đã xác nhận')}</td></tr>
<tr><td class="b">Cả ngày</td><td>HDV Đỗ Văn Khải · 0912 345 678</td><td></td></tr></table>
<div class="small muted" style="margin-top:8px">Sự cố đang mở: 0 · Nhật ký mới nhất 19/11 21:10</div></div>`;
const runCnt = { sv: '<span class="cnt g">18/18</span>', bk: '<span class="cnt">0</span>', px: '' };
const ovRun = `<div class="grid" style="grid-template-columns:1.4fr 1fr;margin-top:12px">${today}${itinCard(2)}</div>`;
S.W04 = page({ body: hdr({ status: 'run', tab: 'ov', cnt: runCnt, actions: B('Thông tin điều hành') + B('Kết thúc Tour', 'p') }) + ovRun });

S.W05 = page({ body: hdr({ status: 'run', cnt: runCnt, actions: B('Thông tin điều hành') + B('Kết thúc Tour', 'p') }) + ovRun,
  overlay: modal('Kết thúc Tour TP-2611-0042?',
    `<p style="margin:0 0 8px">Trạng thái chuyển sang <b>Đã kết thúc</b>. Tab <b>Quyết toán</b> được mở để nhập chi phí thực tế.</p>
     ${f('Thời điểm kết thúc', '25/11/2026 13:20', { req: true, hint: 'Không sớm hơn thời điểm bắt đầu (18/11/2026 06:40).' })}
     <div class="banner i small">Sau khi kết thúc vẫn được ghi nhật ký, sự cố và chi phí phát sinh cho đến khi đóng Tour.</div>`,
    `${B('Hủy')}${B('Kết thúc Tour', 'p')}`) });

// Booking đã hủy: banner + 3 bước xử lý, bỏ lịch trình
S.W06 = page({ body: hdr({ extra: bd('Booking đã hủy', 'b-red'), cnt: { bk: '<span class="cnt r">6</span>' }, actions: B('Thông tin điều hành') + B('Bắt đầu Tour', 'dis') + B('Kết thúc hồ sơ', 'dis') })
  + `<div class="banner e" style="margin-top:12px"><span class="ico e">!</span><div style="flex:1"><b>Booking đã bị hủy</b> lúc 12/11/2026 16:05 · Lý do: Đại lý hủy do khách bệnh. Đã chặn đặt mới và bắt đầu Tour.</div></div>
  <div class="card" style="margin-top:12px;width:62%"><h3>Việc cần làm để đóng hồ sơ</h3><div class="list">
  <div class="li"><span class="ico w">1</span><div style="flex:1"><b>Gửi yêu cầu hủy cho NCC</b> <span class="muted">· 6 lần đặt ở 5 NCC, email đã soạn sẵn</span></div>${B('Soạn email hủy (5 NCC)', 'sm dp')}</div>
  <div class="li"><span class="ico i">2</span><div style="flex:1">Ghi kết quả hủy và phí hủy <span class="muted">· 0/6</span></div></div>
  <div class="li" style="border:none"><span class="ico i">3</span><div style="flex:1">Kết thúc hồ sơ để quyết toán phí hủy <span class="muted">· mở khi đã gửi đủ yêu cầu hủy</span></div></div></div></div>` });


S.W07 = page({ last: 'TP-2611-0099', body: `<div class="card" style="margin:120px auto 0;width:520px;text-align:center;padding:30px">
<div class="ico e" style="width:40px;height:40px;font-size:18px;margin:0 auto 10px">!</div><div class="b" style="font-size:15px">Bạn không có quyền xem hồ sơ Tour này</div>
<p class="muted">Hồ sơ TP-2611-0099 thuộc phạm vi phân công khác. Liên hệ Điều hành phụ trách nếu cần truy cập.</p>${B('Về danh sách hồ sơ Tour', 'p')}
<div class="sep"></div><div class="muted small">Các trạng thái khác dùng cùng khung: <b>Không tìm thấy hồ sơ</b> (đã bị xóa hoặc sai mã) và <b>Không tải được</b> (kèm nút Thử lại).</div></div>` });

/* ---------- DH08.2 ---------- */
const svRows = (sel = []) => {
  const r = [
    ['g', 'Trước Tour'],
    ['c', 1, 'Phân công HDV chính khớp ngôn ngữ', 'Hạn 04/11', 'Trần Minh Anh', 'Hoàn tất'],
    ['c', 2, 'Gửi Rooming list cho mọi khách sạn', 'Hạn 11/11', '—', 'Chưa làm'],
    ['c', 3, 'Gửi Pax list cho NCC', 'Hạn 11/11', 'Lê Thu Hà', 'Đang làm'],
    ['c', 4, 'Họp bàn giao đoàn với HDV', 'Hạn 17/11', '—', 'Chưa làm'],
    ['g', 'N1 · 18/11 · Hà Nội'],
    ['s', 5, 'Đón sân bay Nội Bài · xe 29 chỗ · 1 xe', 'Vận tải Hoàng Long', '', 'Đã xác nhận'],
    ['c', 6, 'Xác nhận xe và thông tin lái xe', 'Hạn 16/11', 'Lê Thu Hà', 'Chưa làm'],
    ['s', 7, 'Khách sạn Lotus Hanoi 4★ · 10 phòng · 2 đêm', 'Lotus Hanoi', '', 'Đã xác nhận'],
    ['g', 'N2 · 19/11 · Hà Nội'],
    ['s', 8, 'Ăn trưa set menu Việt · 18 suất', 'NH Sen Tây Hồ', '', 'Cần đặt'],
    ['c', 9, 'Đặt vé tham quan Văn Miếu', 'Hạn 18/11', 'Lê Thu Hà', 'Chưa làm'],
  ];
  const bulk = sel.length > 0; // khi đang chọn nhiều dòng: ẩn điều khiển trên dòng, chỉ dùng thanh hàng loạt
  return r.map(x => {
    if (x[0] === 'g') return `<tr class="grp"><td colspan="7">${x[1]}</td></tr>`;
    const on = sel.includes(x[1]);
    if (x[0] === 's') return `<tr class="${on ? 'sel' : ''}"><td></td><td>${bd('Dịch vụ', 'b-cyan')}</td><td class="b">${x[2]}</td><td class="muted">${x[3]}</td><td class="muted">—</td><td>${sv(x[5])}</td><td>${bulk ? '' : (x[5] === 'Cần đặt' ? B('Đặt dịch vụ', 'sm p') : B('Xem lần đặt', 'sm')) + ' <span class="muted">⋯</span>'}</td></tr>`;
    const who = x[4] === '—' ? (bulk ? '<span class="muted">Chưa giao</span>' : '<span class="isel ph">Chọn người</span>') : (bulk ? x[4] : `<span class="isel">${x[4]}</span>`);
    return `<tr class="${on ? 'sel' : ''}"><td><span class="cb ${on ? 'on' : ''}"></span></td><td>${bd('Công việc', 'b-gray')}</td><td>${x[2]}</td><td class="muted">${x[3]}</td><td>${who}</td><td>${pg(x[5], !bulk)}</td><td></td></tr>`;
  }).join('');
};
const svFilters = `<div class="toolbar"><div class="input ph" style="width:230px">🔍 Tìm nội dung, NCC…</div>
<span class="chip on">Tất cả <span class="cnt">28</span></span><span class="chip">Việc của tôi <span class="cnt">3</span></span><span class="chip">Chưa xong <span class="cnt">6</span></span><span class="chip">Quá hạn <span class="cnt r">1</span></span>
<div class="input sel" style="width:120px">Mọi ngày</div><span class="ml"></span>${B('+ Công việc')}${B('+ Dịch vụ', 'p')}</div>`;
const svTable = sel => `<div class="tbl"><table><tr><th style="width:28px"><span class="cb ${sel.length ? 'part' : ''}"></span></th><th style="width:84px">Loại</th><th>Nội dung</th><th style="width:150px">Hạn / NCC</th><th style="width:150px">Người thực hiện</th><th style="width:120px">Tiến độ</th><th style="width:130px">Đặt dịch vụ</th></tr>${svRows(sel)}</table></div>`;

S.W10 = page({ body: hdr({ tab: 'sv', actions: B('Bắt đầu Tour', 'p') }) + svFilters + svTable([]) });

S.W11 = page({ body: hdr({ tab: 'sv', actions: B('Bắt đầu Tour', 'p') })
  + `<div class="bulk"><b>Đã chọn 3 công việc</b><span class="ml"></span><span>Giao cho</span><div class="input sel focus" style="width:200px;height:26px">Lê Thu Hà</div><span>Tiến độ</span><div class="input sel" style="width:120px;height:26px">Giữ nguyên</div>${B('Áp dụng', 'sm')}${B('Bỏ chọn', 'sm')}</div>`
  + svTable([2, 4, 9]) });

S.W12 = page({ body: hdr({ tab: 'sv' }) + svFilters + svTable([]),
  overlay: drawer('Gửi Rooming list cho mọi khách sạn',
    `<div class="flex" style="margin-bottom:10px">${bd('Công việc', 'b-gray')}${pg('Chưa làm')}<span class="muted small">Sinh từ mẫu checklist “Inbound tiêu chuẩn” v4 · tự hoàn tất khi đã gửi Rooming list cho mọi khách sạn</span></div>
    ${f('Nội dung', 'Gửi Rooming list cho mọi khách sạn', { req: true })}
    <div class="f2">${f('Người thực hiện', 'Chọn nhân sự…', { cls: 'sel ph focus', hint: 'Nhân sự Nội bộ, Đang nhận phân công (DH06); người phụ trách hồ sơ đứng đầu.' })}${f('Hạn hoàn tất', '11/11/2026', { auto: 'Theo mẫu: 7 ngày trước Khởi hành' })}</div>
    <div class="field"><label>Tiến độ</label><div class="flex"><span class="chip on">Chưa làm</span><span class="chip">Đang làm</span><span class="chip">Hoàn tất</span></div></div>
    ${f('Hướng dẫn thực hiện', 'Xuất Rooming list theo mẫu của từng khách sạn ở tab Khách đoàn; gửi bản mới nhất, kèm yêu cầu riêng của đoàn.', { cls: 'ro area', auto: 'Từ mẫu' })}
    ${f('Ghi chú', 'Gửi cùng email xác nhận lần cuối cho Lotus Hanoi, Hương Giang, Riverside Bloom.', { cls: 'area' })}
    <div class="sec">Liên kết nhanh</div><div class="flex">${B('Mở Rooming list (Khách đoàn)', 'sm')}</div>
    <div class="sec">Lịch sử</div><div class="small muted">10/11 09:02 · Hệ thống tạo từ mẫu Inbound tiêu chuẩn v4 khi tạo hồ sơ</div>`,
    `${B('Hủy')}${B('Lưu', 'p')}`) });

S.W13 = page({ body: hdr({ tab: 'sv' }) + svFilters + svTable([]),
  overlay: drawer('Thêm dịch vụ',
    `<div class="f2">${f('Ngày sử dụng', '22/11/2026', { req: true, hint: 'Trong khoảng 18/11 – 25/11/2026.' })}${f('Đến ngày', '22/11/2026', { hint: 'Chỉ nhập với dịch vụ nhiều ngày.' })}</div>
    ${f('Dịch vụ từ danh mục', 'Ăn tối nhạc cung đình · NH Ẩm thực Cung Đình (Huế)', { req: true, cls: 'sel focus', hint: 'Gõ để tìm; chỉ hiện dịch vụ của NCC đang được phép sử dụng.' })}
    <div class="f3">${f('Số lượng', '18', { req: true, auto: 'Số khách' })}${f('Đơn vị', 'suất', { cls: 'ro', auto: 'DH05' })}${f('Giá tham chiếu', '650.000 ₫ / suất', { cls: 'ro', auto: 'Bảng giá' })}</div>
    ${f('Yêu cầu gửi NCC', 'Bàn riêng cho đoàn, gần sân khấu.', { cls: 'area' })}
    <div class="banner i small" style="align-items:flex-start"><span class="ico i">i</span><div>Yêu cầu riêng của khách (2 chay, 1 dị ứng hải sản có vỏ) sẽ được hệ thống tự thêm vào email đặt dịch vụ. Không cần nhập lại.</div></div>
    <label class="flex small" style="margin-top:10px"><span class="cb on"></span>Tạo công việc checklist kèm theo theo mẫu loại dịch vụ “Nhà hàng” (1 công việc)</label>`,
    `${B('Hủy')}${B('Lưu và đặt ngay')}${B('Lưu dịch vụ', 'p')}`) });

S.W14 = page({ body: hdr({ tab: 'sv' }) + svFilters + svTable([]),
  overlay: modal('Bỏ dịch vụ “Ăn trưa set menu Việt”?',
    `<p style="margin:0 0 8px">N2 · 19/11 · NH Sen Tây Hồ · 18 suất. Dịch vụ chưa có lần đặt và chưa liên kết công nợ.</p>
    <div class="small muted" style="margin-bottom:8px">Hệ thống sẽ bỏ cùng 1 công việc chỉ gắn với dịch vụ này và tính lại tiến độ checklist. Dịch vụ được giữ trong lịch sử hồ sơ.</div>
    ${f('Lý do', 'Khách đổi sang ăn trưa tự túc tại phố cổ', { req: true })}`,
    `${B('Không bỏ')}${B('Bỏ dịch vụ', 'dp')}`) });

S.W15 = page({ body: hdr({ tab: 'sv' }) + svFilters + svTable([]),
  overlay: modal('Không thể bỏ dịch vụ này',
    `<div class="banner w" style="align-items:flex-start"><span class="ico w">!</span><div><b>Khách sạn Lotus Hanoi 4★ đã có lần đặt Đã xác nhận (LH-90311)</b><div class="small">Hãy gửi yêu cầu hủy với NCC ở tab Đặt dịch vụ. Sau khi có kết quả hủy, dịch vụ hiện Đã hủy và giữ lịch sử, phí hủy và liên kết công nợ.</div></div></div>`,
    `${B('Đóng')}${B('Mở lần đặt để hủy', 'p')}`) });

/* ---------- DH08.3 ---------- */
const bkData = [
  [1, '19/11', 'Ăn trưa set menu Việt', 'NH Sen Tây Hồ', '18 suất', 'Cần đặt', '—', 'Đặt dịch vụ'],
  [2, '20–21/11', 'Du thuyền Hạ Long 1 đêm · cabin đôi', 'Du thuyền Ngọc Trai', '10 cabin', 'Chờ kết quả', 'Gửi 08/11 09:12 · 2 ngày chưa phản hồi', 'Ghi kết quả'],
  [3, '21–23/11', 'Khách sạn Huế 4★ · Superior', 'Hương Giang Riverside', '10 phòng', 'Cần đặt lại', 'Không đáp ứng: hết phòng 22/11', 'Đặt lại'],
  [4, '23–25/11', 'Khách sạn Hội An 4★ · Deluxe', 'Riverside Bloom Hội An', '10 phòng', 'Chờ kết quả', 'Gửi 09/11 14:30', 'Ghi kết quả'],
  [5, '24/11', 'Ăn tối phố cổ', 'NH Phố Hội', '18 suất', 'Cần đặt', '—', 'Đặt dịch vụ'],
  [6, '25/11', 'Ăn trưa trước khi ra sân bay', 'NH Phố Hội', '18 suất', 'Cần đặt', '—', 'Đặt dịch vụ'],
  [7, '18/11', 'Đón sân bay Nội Bài · xe 29 chỗ', 'Vận tải Hoàng Long', '1 xe', 'Đã xác nhận', 'Mã HL-55821 · <span class="lnk">email chung 2 dịch vụ</span>', ''],
  [8, '18–20/11', 'Khách sạn Hà Nội 4★', 'Lotus Hanoi', '10 phòng', 'Đã xác nhận', 'Mã LH-90311', ''],
  [9, '21/11', 'Vé máy bay HAN–HUI · VN1545', 'Đại lý vé Sao Việt', '18 vé', 'Đã xác nhận', 'PNR K7QX2M', ''],
  [10, '25/11', 'Tiễn sân bay Đà Nẵng · xe 29 chỗ', 'Vận tải Hoàng Long', '1 xe', 'Đã xác nhận', 'Mã HL-55822 · <span class="lnk">email chung 2 dịch vụ</span>', ''],
];
const bkTable = (o = {}) => {
  const sel = o.sel || [], rows = o.rows || bkData.map(r => r[0]), st = o.st || {};
  return `<div class="tbl"><table><tr><th style="width:28px"><span class="cb ${sel.length ? 'part' : ''}"></span></th><th style="width:76px">Ngày dùng</th><th>Dịch vụ</th><th style="width:150px">NCC</th><th style="width:84px">SL</th><th style="width:110px">Trạng thái</th><th style="width:220px">Lần đặt gần nhất</th><th style="width:110px">Thao tác</th></tr>
${rows.map(id => bkData.concat(o.extra || []).find(r => r[0] === id)).filter(Boolean).map(r => {
    const s = st[r[0]] || r[5]; const on = sel.includes(r[0]); const hideAct = sel.length > 0; const dis = o.lockNew && /Đặt/.test(r[7]);
    return `<tr class="${on ? 'sel' : ''} ${o.hot === r[0] ? 'hot' : ''}"><td><span class="cb ${on ? 'on' : ''}"></span></td><td>${r[1]}</td><td class="b">${(o.svc && o.svc[r[0]]) || r[2]}${o.flag && o.flag[r[0]] ? ' ' + o.flag[r[0]] : ''}</td><td>${(o.ncc && o.ncc[r[0]]) || r[3]}</td><td>${r[4]}</td><td>${sv(s)}</td><td class="muted small">${(o.last && o.last[r[0]]) || r[6]}</td><td>${hideAct ? '' : (o.act && o.act[r[0]]) || (r[7] ? B(r[7], 'sm ' + (dis ? 'dis' : (r[7] === 'Ghi kết quả' ? '' : 'p'))) : '<span class="muted">⋯</span>')}</td></tr>`;
  }).join('')}</table></div>`;
};
const bkChips = (on = 'Tất cả', c = {}, view = 'dv') => {
  const d = Object.assign({ 'Tất cả': 10, 'Cần đặt': 3, 'Chờ kết quả': 2, 'Cần đặt lại': 1, 'Chờ Kinh doanh': 0, 'Cần điều chỉnh / hủy': 0, 'Đã xác nhận': 4, 'Đã hủy': 0 }, c);
  return `<div class="toolbar" style="gap:5px"><span class="seg"><span class="${view === 'dv' ? 'on' : ''}">Theo dịch vụ</span><span class="${view === 'ncc' ? 'on' : ''}">Theo NCC</span></span><div class="input ph" style="width:118px;font-size:12px">🔍 Tìm kiếm</div>${Object.entries(d).map(([k, v]) => `<span class="chip ${k === on ? 'on' : ''}" style="padding:3px 6px;gap:4px">${k} <span class="cnt ${k === 'Cần đặt lại' && v ? 'r' : ''}">${v}</span></span>`).join('')}</div>`;
};
const bkHdr = (o = {}) => hdr(Object.assign({ tab: 'bk', actions: B('Bắt đầu Tour', 'p') }, o));

S.W20 = page({ body: bkHdr() + bkChips() + bkTable() });

S.W21 = page({ body: bkHdr() + bkChips('Cần đặt')
  + `<div class="bulk"><b>Đã chọn 3 hạng mục Cần đặt</b><span class="small" style="opacity:.85">→ sẽ gộp thành 2 email theo NCC: NH Sen Tây Hồ (1), NH Phố Hội (2)</span><span class="ml"></span>${B('Bỏ chọn', 'sm')}${B('Soạn email đặt (2 NCC)', 'sm p')}</div>`
  + bkTable({ rows: [1, 5, 6], sel: [1, 5, 6] }) });

const reqLine = `<span class="hl">Yêu cầu đặc biệt của đoàn: 2 suất chay; 1 khách dị ứng hải sản có vỏ (tôm, cua); 1 khách không ăn được gluten.</span>`;
S.W22 = page({ body: bkHdr() + bkChips('Cần đặt') + bkTable({ rows: [1, 5, 6], sel: [1, 5, 6] }),
  overlay: drawer('Kiểm tra email đặt dịch vụ · 2 NCC',
    `<div style="display:grid;grid-template-columns:200px 1fr;gap:12px;height:100%">
    <div class="col"><div class="card" style="padding:8px 10px;border-color:#2563eb;background:#eff6ff"><div class="b">NH Phố Hội</div><div class="small muted">2 hạng mục · 24/11, 25/11</div><div class="small" style="color:#166534">✓ Sẵn sàng gửi</div></div>
    <div class="card" style="padding:8px 10px"><div class="b">NH Sen Tây Hồ</div><div class="small muted">1 hạng mục · 19/11</div><div class="small" style="color:#166534">✓ Sẵn sàng gửi</div></div>
    <div class="small muted">Mỗi NCC một email. Mẫu chọn tự động theo loại dịch vụ (QT04.2: “Đặt nhà hàng – EN/VI”).</div></div>
    <div class="email"><div class="row"><span>Từ</span>booking@topas-travel.vn</div><div class="row"><span>Đến</span>reservation@phohoi.vn <span class="auto">DH03</span></div><div class="row"><span>CC</span>minhanh.tran@topas-travel.vn</div>
    <div class="row"><span>Tiêu đề</span><b>[TP-2611-0042] Đặt bàn 2 bữa · đoàn Müller Reisen 18 khách</b></div>
    <div class="body">Kính gửi Nhà hàng Phố Hội,
TOPAS Travel xin đặt cho đoàn TP-2611-0042 (18 khách Đức):
1. 24/11/2026 · Ăn tối phố cổ · 18 suất · 19:00
2. 25/11/2026 · Ăn trưa · 18 suất · 11:00
${reqLine}
Giá tham chiếu theo hợp đồng 2026: 420.000 ₫/suất.
Vui lòng xác nhận và gửi mã đặt chỗ trước 15/11/2026.
Trân trọng, Trần Minh Anh – 0903 111 222</div></div></div>`,
    `${B('Hủy')}${B('Gửi 2 email', 'p')}`, { wide: true, sub: 'Đã điền sẵn người nhận, tiêu đề, nội dung và yêu cầu riêng của khách. Phần tô vàng do hệ thống tổng hợp từ tab Khách đoàn.' }) });

S.W23 = page({ body: bkHdr() + bkChips('Cần đặt', { 'Cần đặt': 1, 'Chờ kết quả': 4 })
  + `<div class="banner w" style="margin-top:2px;align-items:flex-start"><span class="ico w">!</span><div style="flex:1"><b>Đã gửi 1/2 email.</b><div class="small">✓ NH Phố Hội · 2 hạng mục chuyển Chờ kết quả · 10/11 10:42<br>✕ NH Sen Tây Hồ · Máy chủ thư từ chối: hộp thư người nhận đầy (552). Nội dung đã soạn được giữ lại.</div></div>${B('Sửa người nhận')}${B('Gửi lại phần lỗi', 'p')}</div>`
  + bkTable({ rows: [1, 5, 6], st: { 5: 'Chờ kết quả', 6: 'Chờ kết quả' }, last: { 1: '<span style="color:#b91c1c">Gửi lỗi 10/11 10:42 · chưa tạo lần đặt</span>', 5: 'Gửi 10/11 10:42', 6: 'Gửi 10/11 10:42' }, act: { 5: B('Ghi kết quả', 'sm'), 6: B('Ghi kết quả', 'sm'), 1: '<span></span>' } }) });

S.W24 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 1 }),
  overlay: drawer('Đặt dịch vụ · Ăn trưa set menu Việt',
    `<div class="flex small muted" style="margin-bottom:8px">19/11 · 18 suất · ${sv('Cần đặt')} · Giá tham chiếu 380.000 ₫/suất</div>
    ${f('Nhà cung cấp', 'NH Sen Tây Hồ <span class="muted">&nbsp;· đã gắn từ hành trình</span>', { req: true, cls: 'sel', hint: 'Đổi NCC thì người nhận và các trường lấy từ NCC tự cập nhật; phần ghi chú bạn đã sửa được giữ.' })}
    <div class="email"><div class="row"><span>Đến</span>datban@sentayho.vn <span class="auto">DH03</span></div><div class="row"><span>Tiêu đề</span><b>[TP-2611-0042] Đặt bàn 19/11 · 18 khách</b></div>
    <div class="body">Kính gửi Nhà hàng Sen Tây Hồ,
Xin đặt bữa trưa set menu Việt cho đoàn TP-2611-0042:
• Ngày 19/11/2026 · 12:00 · 18 suất
${reqLine}
Vui lòng xác nhận và gửi mã đặt chỗ.
Trân trọng, Trần Minh Anh</div></div>
    <div class="flex small" style="margin-top:8px"><span class="muted">Mẫu tự khớp: <b>DV-02 Đặt nhà hàng v3</b> · Tiếng Việt (ngôn ngữ giao dịch của NCC)</span><span class="ml btn lk small">Xem lịch sử lần đặt (0)</span></div>`,
    `${B('Hủy')}${B('Gửi email', 'p')}`, { sub: 'Mở thẳng ở bước kiểm tra email đã điền sẵn' }) });

S.W25 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 1 }),
  overlay: drawer('Đặt dịch vụ · Ăn tối nhạc cung đình',
    `<div class="flex small muted" style="margin-bottom:8px">22/11 · 18 suất · ${sv('Cần đặt')} · Chưa gắn NCC</div>
    <div class="field"><label>Chọn nhà cung cấp <span class="req">*</span></label>
    <div class="tbl"><table><tr><th></th><th>NCC đang được phép sử dụng</th><th>Giá tham chiếu</th><th>Đã dùng</th></tr>
    <tr class="sel"><td><span class="rd on"></span></td><td class="b">NH Ẩm thực Cung Đình <span class="badge b-cyan">Gợi ý</span></td><td class="num">650.000 ₫</td><td class="small muted">12 lần · 92% xác nhận</td></tr>
    <tr><td><span class="rd"></span></td><td>NH Hoàng Phủ</td><td class="num">720.000 ₫</td><td class="small muted">3 lần</td></tr>
    <tr><td><span class="rd"></span></td><td>NH Y Thảo Garden</td><td class="num">600.000 ₫</td><td class="small muted">Chưa dùng</td></tr></table></div>
    <div class="hint">Lọc theo loại dịch vụ, khu vực và ngày áp dụng của bảng giá. Gợi ý = tỷ lệ xác nhận cao nhất.</div></div>
    <div class="email" style="opacity:.95"><div class="row"><span>Đến</span>booking@cungdinh-hue.vn <span class="auto">Vừa điền</span></div><div class="row"><span>Tiêu đề</span><b>[TP-2611-0042] Đặt bàn 22/11 · 18 khách</b></div><div class="body">Kính gửi NH Ẩm thực Cung Đình, … (đã soạn đầy đủ, cuộn để xem)</div></div>`,
    `${B('Hủy')}${B('Gửi email', 'p')}`, { sub: 'Chọn NCC xong, email tự xuất hiện bên dưới' }) });

S.W26 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 2 }),
  overlay: drawer('Ghi kết quả · Du thuyền Hạ Long 1 đêm',
    `<div class="small muted" style="margin-bottom:8px">Lần đặt #1 · Du thuyền Ngọc Trai · gửi 08/11 09:12 · yêu cầu 10 cabin đôi 20–21/11</div>
    <div class="field"><label>Kết quả từ NCC <span class="req">*</span></label><div class="flex"><span class="chip on">Đã xác nhận</span><span class="chip">Không đáp ứng</span></div></div>
    <div class="f3">${f('Số lượng xác nhận', '10 cabin', { req: true, auto: 'Bằng số yêu cầu' })}${f('Mã xác nhận', 'NT-7781-A', { hint: 'Nhập nếu NCC cấp.' })}${f('Loại tiền', 'USD', { cls: 'sel', auto: 'Dòng giá DH03', hint: 'Sửa được nếu NCC xác nhận bằng loại tiền khác.' })}</div>
    <div class="f2">${f('Giá NCC xác nhận', '185 / cabin / đêm', { req: true, auto: 'Giá tham chiếu' })}<div class="field"><label>So với giá tham chiếu</label><div class="input ro">Bằng nhau · 1.850 USD</div></div></div>
    ${f('Ghi chú', 'Cabin 201–210, đón tại cảng Tuần Châu 11:30.', { cls: 'area' })}
    <div class="banner i small">Giá bán đã chốt với khách giữ nguyên. Sau khi lưu, hạng mục xuất hiện ở KT01.2 · Chờ ghi phải trả; khoản phải trả ghi theo loại tiền USD.</div>`,
    `${B('Hủy')}${B('Lưu kết quả', 'p')}`) });

S.W27 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 4 }),
  overlay: drawer('Ghi kết quả · Khách sạn Hội An 4★',
    `<div class="small muted" style="margin-bottom:8px">Lần đặt #1 · Riverside Bloom Hội An · yêu cầu 10 phòng (8 TWN + 2 SGL) 23–25/11</div>
    <div class="field"><label>Kết quả từ NCC <span class="req">*</span></label><div class="flex"><span class="chip on">Đã xác nhận</span><span class="chip">Không đáp ứng</span></div></div>
    <div class="f3">${f('Số lượng xác nhận', '7 phòng', { req: true, cls: 'focus' })}${f('Mã xác nhận', 'RB-3390')}${f('Giá NCC', '1.450.000 ₫', { auto: 'Giá tham chiếu' })}</div>
    <div class="banner w" style="align-items:flex-start"><span class="ico w">!</span><div><b>Xác nhận một phần: 7/10 phòng · còn thiếu 3 phòng</b><div class="small">Sau khi lưu, hạng mục hiện <b>Xác nhận một phần</b>. Nút <b>Đặt phần còn thiếu</b> mở email đã điền sẵn 3 phòng, gửi cho cùng NCC hoặc NCC khác.</div></div></div>
    <div class="sep"></div><div class="sec">Nếu chọn Không đáp ứng</div><div class="small muted">Nhập lý do (bắt buộc). Hạng mục chuyển <b>Cần đặt lại</b>, nút Đặt lại gợi ý NCC tương đương. Lần đặt cũ giữ trong lịch sử.</div>`,
    `${B('Hủy')}${B('Lưu kết quả', 'p')}`) });

S.W28 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 3 }),
  overlay: drawer('Đặt lại · Khách sạn Huế 4★ · Superior',
    `<div class="banner e small" style="margin-bottom:10px"><span class="ico e">!</span>Lần đặt #1 · Hương Giang Riverside · Không đáp ứng: hết phòng đêm 22/11 (ghi 09/11 16:20)</div>
    <div class="field"><label>Chọn NCC thay thế <span class="req">*</span><span class="auto">Cùng loại dịch vụ, khu vực</span></label>
    <div class="tbl"><table><tr><th></th><th>NCC</th><th>Giá tham chiếu / đêm</th><th>Chênh lệch</th></tr>
    <tr class="sel"><td><span class="rd on"></span></td><td class="b">Khách sạn Indochine Palace Huế</td><td class="num">1.380.000 ₫</td><td class="num" style="color:#166534">−70.000 ₫</td></tr>
    <tr><td><span class="rd"></span></td><td>Khách sạn Saigon Morin</td><td class="num">1.620.000 ₫</td><td class="num" style="color:#b91c1c">+170.000 ₫</td></tr>
    <tr><td><span class="rd"></span></td><td>Hương Giang Riverside <span class="small muted">(gửi lại NCC cũ)</span></td><td class="num">1.450.000 ₫</td><td class="num">0</td></tr></table></div></div>
    <div class="email"><div class="row"><span>Đến</span>sales@indochinepalace.vn <span class="auto">Vừa điền</span></div><div class="row"><span>Tiêu đề</span><b>[TP-2611-0042] Đặt 10 phòng 21–23/11 · đoàn Müller Reisen</b></div><div class="body">Kính gửi Indochine Palace Huế,
Xin đặt 10 phòng Superior (8 TWN + 2 SGL) · nhận 21/11, trả 23/11/2026 · 18 khách.
<span class="hl">Yêu cầu phòng: 1 phòng tầng thấp cho khách đi lại khó khăn; 2 phòng đơn.</span> …</div></div>
    <div class="hint">Giá bán đã chốt với khách không đổi. Chênh lệch chi phí hiện ở Quyết toán.</div>`,
    `<span class="small muted">Không có NCC phù hợp hoặc cần sửa lịch trình?</span>${B('Báo Kinh doanh')}<span style="flex:1"></span>${B('Hủy')}${B('Gửi email đặt lại', 'p')}`) });

S.W29 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 3 }),
  overlay: drawer('Lịch sử lần đặt · Khách sạn Huế 4★',
    `<div class="flex" style="margin-bottom:10px">${sv('Chờ kết quả')}<span class="muted small">NCC hiện tại: Indochine Palace Huế · 10 phòng · 21–23/11</span></div><div class="tl">
    <div class="it bl"><b>Lần đặt #2 · Indochine Palace Huế</b> ${bd('Đã gửi', 'b-blue')}<div class="small muted">10/11 11:05 · Trần Minh Anh · sales@indochinepalace.vn</div><div class="flex" style="margin-top:4px">${B('Xem email đã gửi', 'sm')}${B('Ghi kết quả', 'sm p')}${B('Hủy lần đặt', 'sm d')}</div></div>
    <div class="it inc"><b>Lần đặt #1 · Hương Giang Riverside</b> ${bd('Không đáp ứng', 'b-red')}<div class="small muted">Gửi 08/11 08:40 · kết quả ghi 09/11 16:20 · Lý do: hết phòng đêm 22/11</div><div style="margin-top:4px">${B('Xem email đã gửi', 'sm')}</div></div>
    <div class="it"><b>Tạo hạng mục</b><div class="small muted">05/11 · Hệ thống bóc tách từ Booking BK-2610-0137 (phiên bản báo giá V3)</div></div></div>`,
    `${B('Đóng')}`) });

S.W30 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 8 }),
  overlay: drawer('Hủy lần đặt · Khách sạn Hà Nội 4★',
    `<div class="small muted" style="margin-bottom:8px">Lần đặt #1 · Lotus Hanoi · ${sv('Đã xác nhận')} mã LH-90311 · 10 phòng 18–20/11</div>
    ${f('Lý do hủy', 'Đại lý giảm đoàn, chuyển sang khách sạn khác theo yêu cầu khách', { req: true })}
    <div class="email"><div class="row"><span>Đến</span>reservation@lotushanoi.vn <span class="auto">DH03</span></div><div class="row"><span>Tiêu đề</span><b>[TP-2611-0042] Yêu cầu hủy đặt phòng · mã LH-90311</b></div><div class="body">Kính gửi Lotus Hanoi,
TOPAS Travel xin hủy đặt phòng mã LH-90311 (10 phòng, 18–20/11/2026) của đoàn TP-2611-0042.
Vui lòng xác nhận hủy và thông báo phí hủy (nếu có) theo điều kiện hợp đồng.
Trân trọng, Trần Minh Anh</div></div>
    <div class="hint">Gửi xong, lần đặt giữ nhãn hiện tại kèm chỉ báo “Yêu cầu hủy đang chờ” cho đến khi ghi kết quả hủy.</div>`,
    `${B('Không hủy')}${B('Gửi yêu cầu hủy', 'dp')}`) });

S.W31 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 8, flag: { 8: bd('Yêu cầu hủy đang chờ', 'b-amber') } }),
  overlay: drawer('Ghi kết quả hủy · Khách sạn Hà Nội 4★',
    `<div class="small muted" style="margin-bottom:8px">Đã gửi yêu cầu hủy 12/11 09:30 · Lotus Hanoi · mã LH-90311</div>
    <div class="field"><label>Kết quả hủy <span class="req">*</span></label><div class="flex"><span class="chip on">NCC chấp nhận hủy</span><span class="chip">NCC từ chối hủy</span></div></div>
    <div class="f3">${f('Phí hủy', '4.350.000', { req: true, auto: 'Gợi ý', hint: 'Hủy trước 6 ngày → mốc “từ 3 ngày: 30% đêm đầu” của HĐ áp dụng. Sửa theo phí NCC báo; không mất phí thì nhập 0.' })}${f('Loại tiền', 'VND', { cls: 'sel', auto: 'Dòng giá DH03', hint: 'Sửa được khi chưa có khoản phải trả.' })}${f('Mã hủy', 'CXL-LH-0912')}</div>
    <div class="file">📎 Email xác nhận hủy Lotus.pdf <span class="muted">· 180 KB</span><span class="ml" style="color:#166534">Đã tải</span></div>
    <div class="banner i small">Sau khi lưu: hạng mục Đã hủy. Phí hủy 4.350.000 ₫ vào KT01.2 · Chờ ghi phải trả để điều chỉnh chính khoản phải trả của lần đặt (không tạo khoản thứ hai).</div>
    <div class="sep"></div><div class="small muted">Không có hợp đồng, chính sách hoặc mốc phù hợp: ô Phí hủy để trống, bắt buộc nhập, ghi chú “Chưa có chính sách đổi hủy áp dụng”. NCC từ chối hủy: lần đặt giữ Đã xác nhận, lý do từ chối ghi trong lịch sử.</div>`,
    `${B('Hủy')}${B('Lưu kết quả hủy', 'p')}`) });

S.W32 = page({ body: hdr({ tab: 'bk', extra: bd('Booking đã hủy', 'b-red'), cnt: { bk: '<span class="cnt r">6</span>' }, actions: B('Bắt đầu Tour', 'dis') }) + bkChips() + bkTable({ lockNew: true }),
  overlay: drawer('Gửi yêu cầu hủy · Booking đã hủy',
    `<div class="banner e small" style="margin-bottom:10px"><span class="ico e">!</span>Hệ thống đã soạn sẵn 5 email hủy cho 6 lần đặt còn hiệu lực, gộp theo NCC. Kiểm tra rồi gửi một lần.</div>
    <div class="tbl"><table><tr><th style="width:28px"><span class="cb on"></span></th><th>NCC</th><th>Lần đặt cần hủy</th><th>Trạng thái hiện tại</th><th>Email</th></tr>
    <tr><td><span class="cb on"></span></td><td class="b">Lotus Hanoi</td><td>KS 18–20/11 · LH-90311</td><td>${sv('Đã xác nhận')}</td><td>${B('Xem / sửa', 'sm')}</td></tr>
    <tr><td><span class="cb on"></span></td><td class="b">Vận tải Hoàng Long</td><td>Đón Nội Bài 18/11 · HL-55821</td><td>${sv('Đã xác nhận')}</td><td>${B('Xem / sửa', 'sm')}</td></tr>
    <tr><td><span class="cb on"></span></td><td class="b">Du thuyền Ngọc Trai</td><td>Du thuyền 20–21/11</td><td>${sv('Chờ kết quả')}</td><td>${B('Xem / sửa', 'sm')}</td></tr>
    <tr><td><span class="cb on"></span></td><td class="b">Riverside Bloom Hội An</td><td>KS 23–25/11</td><td>${sv('Chờ kết quả')}</td><td>${B('Xem / sửa', 'sm')}</td></tr>
    <tr><td><span class="cb on"></span></td><td class="b">Đại lý vé Sao Việt</td><td>2 lần đặt: vé HAN–HUI; vé dự phòng</td><td>${sv('Đã xác nhận')}</td><td>${B('Xem / sửa', 'sm')}</td></tr></table></div>
    ${f('Lý do hủy (dùng chung cho các email)', 'Đại lý hủy đoàn do khách bệnh', { req: true, auto: 'Từ Booking' })}
    <div class="hint">Hạng mục Cần đặt / Cần đặt lại (chưa gửi NCC) được chuyển thẳng sang Đã hủy, không gửi email.</div>`,
    `<span class="muted small" style="margin-right:auto">Đã chọn 5 email · 6 lần đặt</span>${B('Đóng')}${B('Gửi 5 email hủy', 'dp')}`, { wide: true }) });

S.W33 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 5 }),
  overlay: drawer('Đặt dịch vụ · Ăn tối phố cổ',
    `<div class="banner e" style="align-items:flex-start;margin-bottom:10px"><span class="ico e">!</span><div><b>Chưa gửi được: thiếu thông tin</b><div class="small">• NCC <b>NH Phố Hội</b> chưa có email đặt dịch vụ trong hồ sơ NCC (DH03.1).<br>• Ngày 24/11 nằm ngoài thời gian áp dụng của bảng giá → không có giá tham chiếu (chỉ cảnh báo).</div></div></div>
    ${f('Nhà cung cấp', 'NH Phố Hội', { req: true, cls: 'sel' })}
    ${f('Email người nhận', '', { req: true, cls: 'bad focus', err: 'Bắt buộc. Nhập để gửi lần này, hoặc cập nhật hồ sơ NCC.' })}
    <div class="flex small" style="margin:-2px 0 10px"><span class="muted">Email chỉ dùng cho lần gửi này.</span><span class="btn lk small">Mở hồ sơ NCC (DH03.1) ↗</span><span class="muted">để cập nhật email đặt dịch vụ</span></div>
    <div class="email" style="opacity:.6"><div class="row"><span>Tiêu đề</span>[TP-2611-0042] Đặt bàn 24/11 · 18 khách</div><div class="body">Nội dung đã soạn sẵn…</div></div>
    <div class="hint">Nếu thiếu mẫu email cho loại dịch vụ, khung báo lỗi ghi: “Chưa có mẫu email Đang dùng cho Nhà hàng và không có mẫu dự phòng Mọi loại dịch vụ – bổ sung tại QT04.2”, kèm nút Soạn không theo mẫu.</div>`,
    `${B('Hủy')}${B('Gửi email', 'dis')}`) });

S.W34 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 1 }),
  overlay: drawer('Đặt dịch vụ · Ăn trưa set menu Việt',
    `<div class="banner w" style="align-items:flex-start;margin-bottom:10px"><span class="ico w">?</span><div><b>Chưa xác định email đã gửi hay chưa</b><div class="small">Kết nối với máy chủ thư bị ngắt lúc 10:42:15. Hệ thống đang tra lại theo mã gửi <b>SND-8F31C2</b> để tránh gửi trùng.</div></div></div>
    <div class="card" style="margin-bottom:10px"><div class="flex"><span class="skel" style="width:16px;height:16px;border-radius:50%"></span><b>Đang kiểm tra trạng thái gửi…</b><span class="ml muted small">Tự kiểm tra lại sau 30 giây</span></div></div>
    <div class="sec">Các kết quả có thể</div>
    <div class="list"><div class="li"><span class="ico ok">✓</span><div>Đã gửi → ghi lần đặt, chuyển Chờ kết quả. Không cần thao tác.</div></div>
    <div class="li"><span class="ico e">✕</span><div>Chưa gửi → giữ nguyên email, bật nút <b>Gửi lại</b>.</div></div>
    <div class="li" style="border:none"><span class="ico w">?</span><div>Vẫn chưa rõ sau 5 phút → cho chọn Gửi lại kèm cảnh báo có thể trùng.</div></div></div>
    <div class="email" style="margin-top:8px;opacity:.7"><div class="row"><span>Đến</span>datban@sentayho.vn</div><div class="body">Nội dung email được giữ nguyên…</div></div>`,
    `${B('Đóng')}${B('Gửi email', 'dis')}`) });

S.W35 = page({ body: bkHdr({ cnt: { bk: '<span class="cnt w">2</span>' } }) + bkChips('Cần điều chỉnh / hủy', { 'Cần điều chỉnh / hủy': 2, 'Đã xác nhận': 2 })
  + bkTable({ rows: [2, 7], st: { 2: 'Cần điều chỉnh', 7: 'Cần điều chỉnh' }, last: { 2: 'Mã NT-7781-A · email điều chỉnh đã soạn sẵn', 7: 'Mã HL-55821 · email điều chỉnh đã soạn sẵn' }, flag: { 2: bd('Yêu cầu riêng thay đổi', 'b-amber'), 7: bd('Giờ bay thay đổi', 'b-amber') }, act: { 2: B('Gửi điều chỉnh', 'sm p'), 7: B('Gửi điều chỉnh', 'sm p') } }),
  overlay: drawer('Gửi điều chỉnh · Đón sân bay Nội Bài',
    `<div class="banner w small" style="margin-bottom:10px;align-items:flex-start"><span class="ico w">!</span><div>Thông tin chuyến bay đã đổi sau lần đặt #1 (Kinh doanh cập nhật 14/11 15:02 tại tab Khách đoàn).</div></div>
    <div class="tbl" style="margin-bottom:10px"><table><tr><th>Trường</th><th>Đã gửi NCC</th><th>Hiện tại</th></tr>
    <tr><td>Chuyến bay</td><td>VN36 · 18/11 06:40</td><td class="b">VN38 · 18/11 09:15</td></tr><tr><td>Số khách</td><td>18</td><td>18</td></tr></table></div>
    <div class="email"><div class="row"><span>Đến</span>dieuxe@hoanglong.vn</div><div class="row"><span>Tiêu đề</span><b>[TP-2611-0042] Điều chỉnh giờ đón · mã HL-55821</b></div><div class="body">Kính gửi Vận tải Hoàng Long,
Đoàn TP-2611-0042 đổi chuyến bay: <span class="hl">VN38, hạ cánh 18/11/2026 09:15</span> (trước đây VN36 06:40).
Vui lòng điều chỉnh giờ đón và xác nhận lại. Mã đặt: HL-55821.</div></div>
    <div class="hint">Gửi điều chỉnh tạo lần trao đổi mới trên cùng lần đặt; dịch vụ trở về Đã xác nhận kèm chỉ báo Điều chỉnh đang chờ cho tới khi ghi kết quả. Chọn “Không cần gửi” (kèm lý do) để trở về Đã xác nhận ngay.</div>`,
    `${B('Không cần gửi')}<span style="flex:1"></span>${B('Hủy')}${B('Gửi điều chỉnh', 'p')}`) });

/* ---------- Báo Kinh doanh đổi lịch trình (không có NCC tương đương / cần sửa lịch trình) ---------- */
const kdCtx = `<div class="tbl" style="margin-bottom:10px"><table>
<tr><td class="muted" style="width:130px">Hạng mục</td><td class="b">Khách sạn Huế 4★ · Superior · 10 phòng (8 TWN + 2 SGL)</td></tr>
<tr><td class="muted">Ngày sử dụng</td><td>21/11 – 23/11/2026 (N4–N6)</td></tr>
<tr><td class="muted">Đã thử</td><td>${bd('Không đáp ứng', 'b-red')} Hương Giang Riverside · hết phòng 22/11<br>${bd('Không đáp ứng', 'b-red')} Indochine Palace Huế · hết phòng 21–23/11 (Festival Huế)</td></tr>
<tr><td class="muted">NCC tương đương</td><td>Không còn NCC khách sạn khu vực Huế trong danh mục</td></tr></table></div>`;

S.W36 = page({ body: bkHdr() + bkChips() + bkTable({ hot: 3 }),
  overlay: drawer('Báo Kinh doanh đổi lịch trình',
    `${kdCtx}
    ${f('Gửi cho', 'Nguyễn Hoàng Nam · Kinh doanh phụ trách Booking BK-2610-0137', { req: true, cls: 'ro', auto: 'Từ Booking' })}
    <div class="field"><label>Điều hành đề xuất <span class="req">*</span></label><div class="flex" style="flex-wrap:wrap"><span class="chip">Đổi ngày</span><span class="chip on">Đổi dịch vụ / hạng</span><span class="chip">Bỏ dịch vụ</span><span class="chip">Khác</span></div></div>
    ${f('Nội dung đề xuất', 'Đổi sang KS Huế 3★ Moonlight (còn 10 phòng, giá tham chiếu 950.000 ₫/đêm), hoặc rút 1 đêm Huế, đêm 22/11 nghỉ Hội An.', { req: true, cls: 'area focus' })}
    ${f('Cần phản hồi trước', '12/11/2026 17:00', { req: true, auto: 'Mặc định: 2 ngày làm việc', hint: 'Phải trước ngày sử dụng ít nhất 1 ngày.' })}`,
    `${B('Hủy')}${B('Gửi Kinh doanh', 'p')}`, { sub: 'Kinh doanh nhận ở KD08, điều chỉnh chương trình qua KD06 rồi bấm Chuyển sang Điều hành.' }) });

S.W37 = page({ body: bkHdr({ cnt: { bk: '<span class="cnt w">3</span>' } }) + bkChips('Chờ Kinh doanh', { 'Cần đặt lại': 0, 'Chờ Kinh doanh': 1 })
  + `<div class="banner i small" style="margin-bottom:8px"><span class="ico i">i</span>Hạng mục đang chờ Kinh doanh không gửi đặt được. Kinh doanh nhận yêu cầu ở KD08, điều chỉnh chương trình qua KD06 rồi bấm Chuyển sang Điều hành; khi đó hồ sơ hiện thông báo Chương trình có thay đổi.</div>`
  + bkTable({ rows: [3], st: { 3: 'Chờ Kinh doanh' }, last: { 3: 'Gửi Nguyễn Hoàng Nam 10/11 15:20 · hạn 12/11 17:00' }, act: { 3: B('Xem yêu cầu', 'sm') } }) });

/* ---------- Thay đổi chương trình: Kinh doanh điều chỉnh qua KD06 rồi Chuyển sang Điều hành ở KD08 (W08, W09, W39, W39a, W39b) ---------- */
const chgBanner = `<div class="banner w" style="margin-top:12px"><span class="ico w">!</span><div style="flex:1"><b>Chương trình có thay đổi · v4</b> · Nguyễn Hoàng Nam (Kinh doanh) chuyển sang Điều hành lúc 14/11/2026 09:30; Booking BK-2610-0137 đã theo v4 · 5 thay đổi, chưa áp dụng vào hồ sơ.</div>${B('Xem thay đổi', 'p')}</div>`;
const chgRows = [
  ['N1 · 18/11', 'Đổi yêu cầu', 'KS Lotus Hanoi · 10 phòng', 'Thêm nhận phòng sớm 08:00', `${sv('Đã xác nhận')} → ${sv('Cần điều chỉnh')} · soạn sẵn email điều chỉnh`],
  ['N4–N6 · 21–23/11', 'Đổi dịch vụ', 'KS Huế 4★ · Superior', 'KS Moonlight Huế 3★ · Deluxe', `${sv('Chờ Kinh doanh')} → ${sv('Cần đặt')} · yêu cầu 10/11 đóng · sinh việc theo dịch vụ mới`],
  ['N5 · 22/11', 'Thêm', '—', 'Thuyền rồng sông Hương · 18 khách', `Hạng mục mới ${sv('Cần đặt')} · +1 công việc checklist`],
  ['N7 · 24/11', 'Bỏ', 'Ăn tối phố cổ · NH Phố Hội', '—', `Chưa gửi NCC → ${sv('Đã hủy')}`],
  ['N8 · 25/11', 'Bỏ', 'Tiễn sân bay Đà Nẵng · Vận tải Hoàng Long', '—', `${sv('Đã xác nhận')} → ${sv('Cần hủy')} · soạn sẵn email hủy`],
];
const chgBadge = { 'Thêm': 'b-green', 'Bỏ': 'b-red', 'Đổi dịch vụ': 'b-blue', 'Đổi yêu cầu': 'b-blue' };
S.W08 = page({ body: hdr({ actions: B('Thông tin điều hành') + B('Bắt đầu Tour', 'p') }) + chgBanner + ovNew() });

S.W09 = page({ body: hdr({ actions: B('Thông tin điều hành') + B('Bắt đầu Tour', 'p') }) + chgBanner + ovNew(),
  overlay: drawer('Xem thay đổi chương trình',
    `<div class="flex" style="margin-bottom:10px">${bd('Bản cũ · v3 (đang áp dụng)', 'b-gray')}<span class="muted">→</span>${bd('Bản mới · v4 (khách đã chốt)', 'b-blue')}<span class="ml small muted">Nguyễn Hoàng Nam chuyển sang Điều hành 14/11 09:30</span></div>
    <div class="email" style="margin-bottom:10px"><div class="body"><b>Ghi chú của Kinh doanh (phiên bản báo giá v4):</b> Đại lý yêu cầu thêm thuyền rồng sông Hương, bỏ bữa tối 24/11, tự bố trí xe tiễn ngày cuối, nhận phòng sớm tại Hà Nội. Khách sạn Huế đổi sang Moonlight theo yêu cầu đổi lịch trình 10/11.</div></div>
    <div class="tbl"><table><tr><th>Ngày</th><th>Thay đổi</th><th>Bản cũ</th><th>Bản mới</th><th>Khi áp dụng vào hồ sơ</th></tr>
    ${chgRows.map(r => `<tr><td class="b" style="white-space:nowrap">${r[0]}</td><td>${bd(r[1], chgBadge[r[1]])}</td><td class="muted">${r[2]}</td><td class="b">${r[3]}</td><td class="small">${r[4]}</td></tr>`).join('')}</table></div>
    <div class="small muted" style="margin-top:8px">Không đổi: số khách (18), thời gian Tour 18–25/11, các dịch vụ khác, phân công nhân sự.</div>
    <div class="banner i small" style="margin-top:10px"><span class="ico i">i</span><div>Áp dụng toàn bộ 5 thay đổi trong một lần. Hồ sơ giữ nguyên cho đến khi bấm Áp dụng thay đổi. Email cho NCC được soạn sẵn nhưng chỉ gửi khi Điều hành bấm Gửi trên từng dịch vụ.</div></div>`,
    `${B('Đóng')}${B('Áp dụng thay đổi', 'p')}`, { wide: true }) });

// Sau khi áp dụng: trạng thái từng dịch vụ đã cập nhật ở tab Đặt dịch vụ
const v4 = bd('Theo thay đổi v4', 'b-cyan');
const afterApply = (o = {}) => bkTable(Object.assign({
  rows: [1, 2, 3, 11, 4, 5, 6, 7, 8, 9, 10],
  extra: [[11, '22/11', 'Thuyền rồng sông Hương', 'Chưa gắn NCC', '18 khách', 'Cần đặt', '—', 'Đặt dịch vụ']],
  svc: { 3: 'KS Moonlight Huế 3★ · Deluxe' }, ncc: { 3: 'Moonlight Huế' },
  st: { 3: 'Cần đặt', 5: 'Đã hủy', 8: 'Cần điều chỉnh', 10: 'Cần hủy' },
  flag: { 3: v4, 11: v4, 5: v4, 8: v4, 10: v4 },
  last: { 3: '2 lần đặt cũ trong lịch sử', 5: 'Bỏ theo thay đổi v4', 11: '—', 8: 'Email điều chỉnh đã soạn sẵn', 10: 'Email hủy đã soạn sẵn' },
  act: { 3: B('Đặt dịch vụ', 'sm p'), 5: '<span></span>', 8: B('Gửi điều chỉnh', 'sm p'), 10: B('Gửi yêu cầu hủy', 'sm dp') },
}, o));
const chips4 = { 'Tất cả': 11, 'Cần đặt': 4, 'Chờ kết quả': 2, 'Cần đặt lại': 0, 'Chờ Kinh doanh': 0, 'Cần điều chỉnh / hủy': 2, 'Đã xác nhận': 2, 'Đã hủy': 1 };
S.W39 = page({ body: bkHdr({ cnt: { bk: '<span class="cnt w">6</span>' } }) + `<div class="banner s small" style="margin-top:10px"><span class="ico ok">✓</span><div style="flex:1"><b>Đã áp dụng thay đổi v4</b> lúc 14/11 10:02 · 2 dịch vụ cần đặt · 1 cần điều chỉnh · 1 cần hủy · 1 đã bỏ. Kinh doanh đã được thông báo.</div>${B('Soạn email theo NCC (3 NCC)', 'sm p')}</div>`
  + bkChips('Tất cả', chips4) + afterApply() });

S.W39a = page({ body: bkHdr({ cnt: { bk: '<span class="cnt w">6</span>' } }) + bkChips('Tất cả', chips4) + afterApply(),
  overlay: drawer('Gửi yêu cầu hủy · Tiễn sân bay Đà Nẵng',
    `<div class="banner w small" style="margin-bottom:10px"><span class="ico w">!</span><div>${sv('Cần hủy')} theo thay đổi chương trình v4: bỏ dịch vụ (đại lý tự bố trí xe tiễn).</div></div>
    <div class="small muted" style="margin-bottom:8px">Lần đặt #1 · Vận tải Hoàng Long · ${sv('Đã xác nhận')} mã HL-55822 · 1 xe 29 chỗ · 25/11</div>
    ${f('Lý do hủy', 'Thay đổi chương trình v4: đại lý tự bố trí xe tiễn', { req: true, auto: 'Từ thay đổi chương trình' })}
    <div class="email"><div class="row"><span>Đến</span>dieuxe@hoanglong.vn <span class="auto">DH03</span></div><div class="row"><span>Tiêu đề</span><b>[TP-2611-0042] Yêu cầu hủy xe tiễn 25/11 · mã HL-55822</b></div><div class="body">Kính gửi Vận tải Hoàng Long,
TOPAS Travel xin hủy xe 29 chỗ tiễn sân bay Đà Nẵng ngày 25/11/2026 (mã HL-55822) của đoàn TP-2611-0042.
Vui lòng xác nhận hủy và thông báo phí hủy (nếu có).
Trân trọng, Trần Minh Anh</div></div>
    <div class="hint">Gửi xong, dịch vụ trở về ${sv('Đã xác nhận')} kèm chỉ báo Yêu cầu hủy đang chờ; ghi kết quả hủy như W31. Dịch vụ Cần điều chỉnh dùng bảng trượt Gửi điều chỉnh (W35) với email soạn sẵn tương tự.</div>`,
    `${B('Để sau')}${B('Gửi yêu cầu hủy', 'dp')}`) });

S.W39b = page({ body: bkHdr({ cnt: { bk: '<span class="cnt w">4</span>' } }) + bkChips('Tất cả', Object.assign({}, chips4, { 'Cần đặt': 3, 'Chờ kết quả': 3, 'Cần điều chỉnh / hủy': 1, 'Đã xác nhận': 3 }))
  + afterApply({ st: { 3: 'Chờ kết quả', 5: 'Đã hủy', 8: 'Cần điều chỉnh', 10: 'Đã xác nhận' },
    flag: { 3: v4, 11: v4, 5: v4, 8: v4, 10: bd('Yêu cầu hủy đang chờ', 'b-amber') },
    last: { 3: 'Gửi 14/11 10:12 · lần đặt #3', 5: 'Bỏ theo thay đổi v4', 11: '—', 8: 'Email điều chỉnh đã soạn sẵn', 10: 'Gửi hủy 14/11 10:08' },
    act: { 3: B('Ghi kết quả', 'sm'), 5: '<span></span>', 8: B('Gửi điều chỉnh', 'sm p'), 10: B('Ghi kết quả hủy', 'sm') }, hot: 3 }),
  overlay: `<div class="toast">✓ Đã gửi email đặt cho Moonlight Huế · hạng mục chuyển Chờ kết quả <a>Xem lịch sử</a></div>` });

/* ---------- Xem theo NCC: email chung, email theo loại việc (W20a, W22a, W26b, W29a) ---------- */
// Tình huống: đã áp dụng v4 (W39), sau đó khách đổi chuyến bay (W35) nên Đón Nội Bài Cần điều chỉnh.
// Vận tải Hoàng Long có 2 dịch vụ đặt chung một email ngày 05/11, nay khác việc: 1 điều chỉnh, 1 hủy → 2 email riêng.
const flt = bd('Giờ bay thay đổi', 'b-amber');
const nccRow = (name, mail, cnts, right) => `<tr class="ncc"><td colspan="7"><div class="flex"><b style="font-size:13px">${name}</b>${mail ? `<span class="muted small">${mail}</span>` : ''}<span class="small">${cnts}</span><span class="ml flex">${right}</span></div></td></tr>`;
const itRow = (d, svc, sl, st, last, act, o = {}) => `<tr class="${o.dim ? 'dim' : ''} ${o.hot ? 'hot' : ''}"><td><span class="cb"></span></td><td>${d}</td><td class="b">${svc}</td><td>${sl}</td><td>${sv(st)}</td><td class="muted small">${last}</td><td>${act}</td></tr>`;
const cntTxt = (...xs) => xs.map(([n, t, c]) => `<span style="color:${c};font-weight:600">${n} ${t}</span>`).join('<span class="muted"> · </span>');
const nccTable = `<div class="tbl"><table><tr><th style="width:28px"><span class="cb"></span></th><th style="width:76px">Ngày dùng</th><th>Dịch vụ</th><th style="width:76px">SL</th><th style="width:116px">Trạng thái</th><th style="width:260px">Lần đặt gần nhất</th><th style="width:120px">Thao tác</th></tr>
${nccRow('Vận tải Hoàng Long', 'dieuxe@hoanglong.vn', cntTxt([1, 'cần điều chỉnh', '#92400e'], [1, 'cần hủy', '#b91c1c']), `<span class="btn lk small">Email với NCC (1)</span>${B('Soạn email cho NCC (2 email)', 'sm p')}`)}
${itRow('18/11', 'Đón sân bay Nội Bài · xe 29 chỗ ' + flt, '1 xe', 'Cần điều chỉnh', 'Mã HL-55821 · <span class="lnk">email chung 2 dịch vụ</span>', B('Gửi điều chỉnh', 'sm'))}
${itRow('25/11', 'Tiễn sân bay Đà Nẵng · xe 29 chỗ ' + v4, '1 xe', 'Cần hủy', 'Mã HL-55822 · <span class="lnk">email chung 2 dịch vụ</span>', B('Gửi yêu cầu hủy', 'sm d'))}
${nccRow('Lotus Hanoi', 'reservation@lotushanoi.vn', cntTxt([1, 'cần điều chỉnh', '#92400e']), `<span class="btn lk small">Email với NCC (1)</span>${B('Soạn email cho NCC (1 email)', 'sm p')}`)}
${itRow('18–20/11', 'Khách sạn Hà Nội 4★ ' + v4, '10 phòng', 'Cần điều chỉnh', 'Mã LH-90311 · email điều chỉnh đã soạn sẵn', B('Gửi điều chỉnh', 'sm'))}
${nccRow('NH Phố Hội', 'reservation@phohoi.vn', cntTxt([1, 'cần đặt', '#92400e']), B('Soạn email cho NCC (1 email)', 'sm p'))}
${itRow('25/11', 'Ăn trưa trước khi ra sân bay', '18 suất', 'Cần đặt', '—', B('Đặt dịch vụ', 'sm'))}
${itRow('24/11', 'Ăn tối phố cổ ' + v4, '18 suất', 'Đã hủy', 'Bỏ theo thay đổi v4', '', { dim: true })}
${nccRow('NH Sen Tây Hồ', 'datban@sentayho.vn', cntTxt([1, 'cần đặt', '#92400e']), B('Soạn email cho NCC (1 email)', 'sm p'))}
${itRow('19/11', 'Ăn trưa set menu Việt', '18 suất', 'Cần đặt', '—', B('Đặt dịch vụ', 'sm'))}
${nccRow('Moonlight Huế', 'booking@moonlighthue.vn', cntTxt([1, 'cần đặt', '#92400e']), B('Soạn email cho NCC (1 email)', 'sm p'))}
${itRow('21–23/11', 'KS Moonlight Huế 3★ · Deluxe ' + v4, '10 phòng', 'Cần đặt', '2 lần đặt cũ (NCC khác) trong lịch sử', B('Đặt dịch vụ', 'sm'))}
${nccRow('Chưa gắn NCC', '', cntTxt([1, 'cần đặt', '#92400e']), '<span class="muted small">Chọn NCC trên dòng</span>')}
${itRow('22/11', 'Thuyền rồng sông Hương ' + v4, '18 khách', 'Cần đặt', '—', B('Đặt dịch vụ', 'sm'))}
<tr><td colspan="7" class="small muted" style="background:#f8fafc">▸ 3 NCC không có việc chờ gửi (thu gọn): Du thuyền Ngọc Trai · Riverside Bloom Hội An · Đại lý vé Sao Việt <span class="btn lk small" style="margin-left:6px">Mở tất cả</span></td></tr>
</table></div>`;
const chipsN = Object.assign({}, chips4, { 'Cần điều chỉnh / hủy': 3, 'Đã xác nhận': 1 });
S.W20a = page({ body: bkHdr({ cnt: { bk: '<span class="cnt w">7</span>' } }) + bkChips('Tất cả', chipsN, 'ncc') + nccTable });

S.W22a = page({ body: bkHdr({ cnt: { bk: '<span class="cnt w">7</span>' } }) + bkChips('Tất cả', chipsN, 'ncc') + nccTable,
  overlay: drawer('Soạn email cho NCC · Vận tải Hoàng Long',
    `<div style="display:grid;grid-template-columns:220px 1fr;gap:12px;height:100%">
    <div class="col">
      <div class="card" style="padding:8px 10px;border-color:#2563eb;background:#eff6ff"><div class="flex"><span class="cb on"></span><b>Email điều chỉnh</b></div><div class="small muted" style="margin-top:3px">Đón sân bay Nội Bài · 18/11<br>mã HL-55821 · giờ bay thay đổi</div><div class="small" style="color:#166534">✓ Sẵn sàng gửi</div></div>
      <div class="card" style="padding:8px 10px"><div class="flex"><span class="cb on"></span><b>Email hủy</b></div><div class="small muted" style="margin-top:3px">Tiễn sân bay Đà Nẵng · 25/11<br>mã HL-55822 · theo thay đổi v4</div><div class="small" style="color:#166534">✓ Sẵn sàng gửi</div></div>
      <div class="small muted">Mỗi loại việc một email. Dịch vụ cùng NCC, cùng loại việc gộp chung một email (R04). Hai dịch vụ này từng đặt chung một email ngày 05/11; nay khác việc nên tách.</div>
    </div>
    <div>
      <div class="tbl" style="margin-bottom:8px"><table><tr><th>Đón sân bay Nội Bài</th><th>Đã gửi NCC</th><th>Hiện tại</th></tr><tr><td>Chuyến bay</td><td>VN36 · 18/11 06:40</td><td class="b">VN38 · 18/11 09:15</td></tr></table></div>
      <div class="email"><div class="row"><span>Đến</span>dieuxe@hoanglong.vn <span class="auto">DH03</span></div><div class="row"><span>CC</span>minhanh.tran@topas-travel.vn</div><div class="row"><span>Tiêu đề</span><b>[TP-2611-0042] Điều chỉnh giờ đón 18/11 · mã HL-55821</b></div>
      <div class="body">Kính gửi Vận tải Hoàng Long,
Đoàn TP-2611-0042 đổi chuyến bay: <span class="hl">VN38, hạ cánh 18/11/2026 09:15</span> (trước đây VN36 06:40).
Vui lòng điều chỉnh giờ đón xe 29 chỗ tại Nội Bài và xác nhận lại. Mã đặt: HL-55821.
Trân trọng, Trần Minh Anh</div></div>
      <div class="hint">Bấm từng email bên trái để xem, sửa. Bỏ chọn email nào thì email đó chưa gửi; dịch vụ giữ nguyên trạng thái.</div>
    </div></div>`,
    `<span class="muted small" style="margin-right:auto">Đã chọn 2 email · 2 dịch vụ</span>${B('Hủy')}${B('Gửi 2 email', 'p')}`, { wide: true, sub: 'Gồm mọi việc chờ gửi của NCC: đặt, đặt lại, đặt phần còn thiếu, điều chỉnh, hủy.' }) });

// Ghi kết quả cho cả email: NH Phố Hội phản hồi một lần cho email đặt 2 dịch vụ (gửi ở W23)
S.W26b = page({ body: bkHdr() + bkChips('Chờ kết quả', { 'Cần đặt': 1, 'Chờ kết quả': 4 }) + bkTable({ rows: [2, 4, 5, 6], st: { 5: 'Chờ kết quả', 6: 'Chờ kết quả' }, hot: 5, last: { 5: 'Gửi 10/11 10:42 · <span class="lnk">email chung 2 dịch vụ</span>', 6: 'Gửi 10/11 10:42 · <span class="lnk">email chung 2 dịch vụ</span>' }, act: { 5: B('Ghi kết quả', 'sm'), 6: B('Ghi kết quả', 'sm') } }),
  overlay: drawer('Ghi kết quả · email đặt NH Phố Hội',
    `<div class="flex" style="margin-bottom:10px"><span class="seg"><span>Chỉ dịch vụ này</span><span class="on">Cả email (2 dịch vụ)</span></span><span class="ml small muted">Mã gửi SND-71B0D4 · gửi 10/11 10:42 · reservation@phohoi.vn</span></div>
    <div class="f3">${f('Mã xác nhận chung', 'PH-1124', { hint: 'Điền cho mọi dòng; sửa từng dòng nếu NCC cấp mã riêng.' })}${f('Loại tiền', 'VND', { cls: 'sel', auto: 'Dòng giá DH03' })}<div class="field"><label>Phản hồi của NCC</label><div class="file" style="margin:0">📎 PhoHoi_xacnhan.pdf <span class="ml" style="color:#166534">Đã tải</span></div></div></div>
    <div class="tbl" style="margin-bottom:10px"><table><tr><th>Dịch vụ</th><th style="width:150px">Kết quả</th><th style="width:96px">SL xác nhận</th><th style="width:100px">Mã xác nhận</th><th style="width:120px" class="num">Giá NCC</th></tr>
    <tr class="hot"><td><b>Ăn tối phố cổ</b><div class="small muted">24/11 · yêu cầu 18 suất · đang mở từ dòng này</div></td><td><span class="isel">Đã xác nhận</span></td><td><span class="isel">18 suất</span></td><td>PH-1124</td><td class="num">420.000 ₫/suất</td></tr>
    <tr><td><b>Ăn trưa trước khi ra sân bay</b><div class="small muted">25/11 · yêu cầu 18 suất</div></td><td><span class="isel">Đã xác nhận</span></td><td><span class="isel">18 suất</span></td><td>PH-1124</td><td class="num">420.000 ₫/suất</td></tr></table></div>
    ${f('Ghi chú chung', 'Bàn tầng 2, nhà hàng giữ chỗ đến 19:15.', { cls: 'area' })}
    <div class="banner i small"><span class="ico i">i</span><div>Mỗi dịch vụ lưu kết quả trên lần đặt của mình; mỗi dịch vụ Đã xác nhận vào KT01.2 một dòng chờ ghi phải trả. Dòng chọn Không đáp ứng phải nhập lý do; dòng xác nhận thiếu hiện phần còn thiếu ngay trên dòng (như W27).</div></div>`,
    `${B('Hủy')}${B('Lưu kết quả 2 dịch vụ', 'p')}`, { wide: true, sub: 'Kết quả, số lượng, giá điền sẵn theo từng lần đặt; mã xác nhận và loại tiền dùng chung, sửa được trên dòng.' }) });

// Email với NCC: sau khi gửi W22a. Danh sách email bên trái, email đang chọn bên phải kèm các dịch vụ trong email.
const w29aSt = { 3: 'Cần đặt', 5: 'Đã hủy', 7: 'Đã xác nhận', 8: 'Cần điều chỉnh', 10: 'Đã xác nhận' };
S.W29a = page({ body: bkHdr({ cnt: { bk: '<span class="cnt w">5</span>' } }) + bkChips('Tất cả', Object.assign({}, chips4, { 'Cần điều chỉnh / hủy': 1, 'Đã xác nhận': 3 })) + afterApply({ st: w29aSt, hot: 7,
    flag: { 3: v4, 11: v4, 5: v4, 8: v4, 7: bd('Điều chỉnh đang chờ', 'b-amber'), 10: bd('Yêu cầu hủy đang chờ', 'b-amber') },
    last: { 3: '2 lần đặt cũ trong lịch sử', 5: 'Bỏ theo thay đổi v4', 11: '—', 8: 'Email điều chỉnh đã soạn sẵn', 7: 'Gửi điều chỉnh 14/11 10:20', 10: 'Gửi hủy 14/11 10:20' },
    act: { 3: B('Đặt dịch vụ', 'sm p'), 5: '<span></span>', 8: B('Gửi điều chỉnh', 'sm p'), 7: B('Ghi kết quả', 'sm'), 10: B('Ghi kết quả hủy', 'sm') } }),
  overlay: drawer('Email với NCC · Vận tải Hoàng Long',
    `<div style="display:grid;grid-template-columns:230px 1fr;gap:12px;height:100%">
    <div class="col">
      <div class="card" style="padding:7px 10px"><div class="flex">${bd('Hủy', 'b-red')}<span class="small muted ml">14/11 10:20</span></div><div class="small" style="margin-top:3px">Tiễn sân bay Đà Nẵng</div><div class="small muted">1 dịch vụ · chờ NCC trả lời</div></div>
      <div class="card" style="padding:7px 10px"><div class="flex">${bd('Điều chỉnh', 'b-amber')}<span class="small muted ml">14/11 10:20</span></div><div class="small" style="margin-top:3px">Đón sân bay Nội Bài</div><div class="small muted">1 dịch vụ · chờ NCC trả lời</div></div>
      <div class="card" style="padding:7px 10px;border-color:#2563eb;background:#eff6ff"><div class="flex">${bd('Đặt', 'b-blue')}<span class="small muted ml">05/11 09:05</span></div><div class="small" style="margin-top:3px">Đón Nội Bài, Tiễn Đà Nẵng</div><div class="small muted">2 dịch vụ · đã có kết quả</div></div>
      <div class="small muted">Mọi email đã gửi cho NCC này trong hồ sơ, mới nhất ở trên. Lọc: Tất cả loại ▾</div>
    </div>
    <div>
      <div class="small muted" style="margin-bottom:6px">Email đặt · mã gửi SND-5A20E1 · gửi 05/11/2026 09:05 · Trần Minh Anh · đến dieuxe@hoanglong.vn</div>
      <div class="sec" style="margin-top:0">Email này gồm 2 dịch vụ</div>
      <div class="tbl" style="margin-bottom:10px"><table><tr><th>Dịch vụ (bấm để mở lịch sử)</th><th style="width:170px">Kết quả lần đặt</th><th style="width:150px">Hiện tại</th></tr>
      <tr class="hot"><td><b class="lnk">Đón sân bay Nội Bài</b><div class="small muted">18/11 · đang xem</div></td><td style="white-space:nowrap">${sv('Đã xác nhận')} <span class="small">HL-55821</span></td><td>${bd('Điều chỉnh đang chờ', 'b-amber')}</td></tr>
      <tr><td><b class="lnk">Tiễn sân bay Đà Nẵng</b><div class="small muted">25/11</div></td><td style="white-space:nowrap">${sv('Đã xác nhận')} <span class="small">HL-55822</span></td><td>${bd('Yêu cầu hủy đang chờ', 'b-amber')}</td></tr></table></div>
      <div class="email"><div class="row"><span>Tiêu đề</span><b>[TP-2611-0042] Đặt xe đón tiễn sân bay · đoàn Müller Reisen 18 khách</b></div>
      <div class="body">Kính gửi Vận tải Hoàng Long,
TOPAS Travel xin đặt xe cho đoàn TP-2611-0042 (18 khách):
1. 18/11/2026 · Đón sân bay Nội Bài · xe 29 chỗ · chuyến VN36 hạ cánh 06:40
2. 25/11/2026 · Tiễn sân bay Đà Nẵng · xe 29 chỗ · đón tại KS Riverside Bloom 08:00
Vui lòng xác nhận và gửi mã đặt cho từng chuyến.
Trân trọng, Trần Minh Anh</div></div>
    </div></div>`,
    `${B('Đóng')}`, { wide: true, sub: 'Mở từ Xem email đã gửi trên dòng (chọn sẵn email của dòng) hoặc Email với NCC ở dòng nhóm.' }) });

/* ---------- Trạng thái sau thao tác (bổ sung theo tiêu chuẩn: mỗi bước đổi giao diện có W) ---------- */
S.W02a = page({ body: hdr({ meta: { pt: 'Lê Thu Hà' }, actions: B('Thông tin điều hành') + B('Bắt đầu Tour', 'p') }) + ovNew(),
  overlay: `<div class="toast">✓ Đã đổi Điều hành phụ trách sang Lê Thu Hà · đã gửi thông báo cho Lê Thu Hà</div>` });

S.W24a = page({ body: bkHdr({ cnt: { bk: '<span class="cnt w">3</span>' } }) + bkChips('Tất cả', { 'Cần đặt': 2, 'Chờ kết quả': 3 })
  + bkTable({ hot: 1, st: { 1: 'Chờ kết quả' }, last: { 1: 'Gửi 10/11 10:42 · datban@sentayho.vn' }, act: { 1: B('Ghi kết quả', 'sm') } }),
  overlay: `<div class="toast">✓ Đã gửi email đặt cho NH Sen Tây Hồ · hạng mục chuyển Chờ kết quả <a>Xem email đã gửi</a></div>` });

S.W26a = page({ body: bkHdr() + bkChips('Tất cả', { 'Chờ kết quả': 1, 'Đã xác nhận': 5 })
  + bkTable({ hot: 2, st: { 2: 'Đã xác nhận' }, last: { 2: 'Mã NT-7781-A · 1.850 USD' }, act: { 2: '<span class="muted">⋯</span>' } }),
  overlay: `<div class="toast">✓ Đã lưu kết quả · Du thuyền Ngọc Trai đã xác nhận · đã chuyển sang KT01.2 chờ ghi phải trả</div>` });

module.exports = S;
