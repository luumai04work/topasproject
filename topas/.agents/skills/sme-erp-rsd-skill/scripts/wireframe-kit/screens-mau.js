// Ví dụ tối thiểu. Mỗi tệp screens-*.js xuất { Wxx: html }. Thay hdr/SIDE trong lib.js theo màn đang đặc tả.
const { page, hdr, B, bd, sv } = require('./lib');
const S = {};

// Tổng quan: chỉ việc chưa đạt, mỗi việc một nút; việc đã xong gộp một dòng.
S.W01 = page({ body: hdr({ actions: B('Bắt đầu Tour', 'p') }) + `<div class="grid" style="grid-template-columns:1.4fr 1fr;margin-top:12px">
<div class="card"><h3>Việc cần làm trước khởi hành <span class="cnt w">2</span></h3><div class="list">
<div class="li"><span class="ico w">!</span><div style="flex:1"><b>Đặt dịch vụ</b> <span class="muted">· 3 cần đặt</span></div>${B('Đặt dịch vụ', 'sm p')}</div>
<div class="li"><span class="ico w">!</span><div style="flex:1"><b>Giấy tờ khách</b> <span class="muted">· 2 khách cần kiểm tra</span></div>${B('Xem khách', 'sm')}</div></div>
<div class="small muted" style="margin-top:8px"><span style="color:#166534">✓ Đã xong:</span> Checklist · Phân phòng</div></div>
<div class="card"><h3>Lịch trình</h3><table><tr><td class="b">N1 · 18/11</td><td>Hà Nội</td></tr><tr><td class="b">N2 · 19/11</td><td>Hạ Long</td></tr></table></div></div>` });

// Hàng loạt: thanh hàng loạt là nơi thao tác duy nhất khi đang chọn.
S.W02 = page({ body: hdr({ tab: 'bk' }) + `<div class="bulk"><b>Đã chọn 2 hạng mục Cần đặt</b><span class="ml"></span>${B('Bỏ chọn', 'sm')}${B('Soạn email đặt (2 NCC)', 'sm p')}</div>
<div class="tbl"><table><tr><th></th><th>Dịch vụ</th><th>NCC</th><th>Trạng thái</th><th>Thao tác</th></tr>
<tr class="sel"><td><span class="cb on"></span></td><td class="b">Ăn trưa set menu</td><td>NH Sen</td><td>${sv('Cần đặt')}</td><td></td></tr>
<tr class="sel"><td><span class="cb on"></span></td><td class="b">Du thuyền 1 đêm</td><td>Ngọc Trai</td><td>${sv('Cần đặt')}</td><td></td></tr></table></div>` });

// ---------- Dạng xem của màn danh sách (references/quy-tac-trien-khai.md mục 12) ----------
// setLinks gắn trang HTML cho từng dạng để bấm Bảng · Kanban · Lịch chuyển qua lại; ảnh PNG không đổi.
const { setLinks, viewSwitch, seg, kanban, calMonth, timeline } = require('./views');
const VIEWS = ['table', 'kanban', 'cal'];
setLinks({ table: 'W01.html', kanban: 'W03.html', cal: 'W04.html' });
const title = '<div class="ttl"><h1>Hồ sơ Tour</h1></div>';
const viewRow = (view, note) => `<div class="flex" style="margin:0 0 8px"><span class="muted small">${note}</span><span class="ml"></span>${viewSwitch(VIEWS, view)}</div>`;
const card = (code, kh, dt, pt) => `<div class="kc"><div class="t"><b>${code}</b></div><div class="b">${kh}</div><div class="muted small">${dt}</div><div class="r">${pt ? `<span class="isel">${pt}</span>` : '<span class="isel ph">Chọn người</span>'}</div></div>`;

// Kanban: cột là trạng thái đã chốt; cột kết thúc thu gọn; không kéo thả.
S.W03 = page({ last: 'Danh sách', body: title + viewRow('kanban', 'Kanban · cột thay cho hàng chip · bấm thẻ để mở hồ sơ') + kanban([
  { h: `${bd('Mới tạo', 'b-gray')}<span class="cnt">2</span>`, cards: [card('TP-2611-0051', 'Tanaka Travel Co.', '14/11 – 19/11/2026'), card('TP-2611-0042', 'Müller Reisen GmbH', '18/11 – 25/11/2026', 'Trần Minh Anh')] },
  { h: `${bd('Đang diễn ra', 'b-blue')}<span class="cnt">1</span>`, cards: [card('TP-2611-0038', 'Nordic Explorer AB', '08/11 – 15/11/2026', 'Phạm Thu Hà')] },
  { h: `${bd('Đã kết thúc', 'b-violet')}<span class="cnt">0</span>`, empty: 'Không có hồ sơ Đã kết thúc khớp bộ lọc.' },
  { fold: 1, h: `${bd('Đã đóng', 'b-gray')}<span class="cnt">38</span>`, cards: [B('Mở rộng cột', 'sm')] },
], '1fr 1fr 1fr 150px') });

// Lịch tháng: thanh từ ngày đầu đến ngày cuối, vắt tuần có ◂ ▸, quá 3 hàng thì “+n”.
const W = (a, b) => Array.from({ length: 7 }, (_, i) => [a + i <= b ? a + i : a + i - b, (a + i > b ? 'out' : (i >= 5 ? 'we' : ''))]);
S.W04 = page({ last: 'Danh sách', body: title + viewRow('cal', 'Lịch · theo ngày khởi hành') + `<div class="flex" style="margin:0 0 8px">${B('‹', 'sm')}<b>Tháng 11/2026</b>${B('›', 'sm')}${seg(['Tháng', 'Tuần'], 'Tháng')}</div>` + calMonth([
  { days: W(9, 30), ev: [{ s: 6, n: 2, t: 'TP-2611-0051 · Tanaka Travel Co.', c: 'gray2', r: 1 }, { s: 1, n: 7, t: 'TP-2611-0038 · Nordic Explorer AB', c: 'blue', l: 1 }] },
  { days: W(16, 30), ev: [{ s: 1, n: 4, t: 'TP-2611-0051 · Tanaka', c: 'gray2', l: 1 }, { s: 3, n: 5, t: 'TP-2611-0042 · Müller Reisen GmbH', c: 'gray2', r: 1 }], more: [{ s: 5, t: '+2' }] },
]) });

// Dòng thời gian theo người phụ trách: hàng chưa giao ở trên cùng, chồng ngày xếp hai dòng.
const DAYS = Array.from({ length: 14 }, (_, i) => [`${['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'][i % 7]}<br>${9 + i}`, 9 + i === 11 ? 'td' : (i % 7 >= 5 ? 'we' : '')]);
S.W05 = page({ last: 'Danh sách', body: title + viewRow('cal', 'Lịch · theo người phụ trách') + timeline(DAYS, [
  { h: '<b style="color:#b91c1c">Chưa có người phụ trách</b>', sub: '1 hồ sơ', cls: 'un', ev: [{ s: 6, n: 6, t: 'TP-2611-0051 · Tanaka', c: 'dash' }] },
  { h: '<b>Trần Minh Anh</b>', sub: 'Anh, Đức · 2 hồ sơ', ev: [{ s: 10, n: 5, t: 'TP-2611-0042 · Müller', c: 'gray2', r: 1 }, { s: 12, n: 3, t: 'TP-2611-0049 · Smith', c: 'gray2', r: 1 }] },
  { h: '<b>Phạm Thu Hà</b>', sub: 'Anh, Nhật · 1 hồ sơ', ev: [{ s: 1, n: 7, t: 'TP-2611-0038 · Nordic Explorer AB', c: 'blue', l: 1 }] },
]) });

module.exports = S;
