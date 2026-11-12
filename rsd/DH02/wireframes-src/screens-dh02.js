// Wireframe DH02 · Danh sách nhà cung cấp. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
const { page, modal, B, bd } = require('./lib');
const S = {};
const P = o => page(Object.assign({ crumb: 'Nhà cung cấp', side: 'Nhà cung cấp' }, o));

// ---------- Dữ liệu minh họa (hôm nay 11/11/2026, ngưỡng sắp hết hạn 30 ngày) ----------
// Đang dùng 42 = Còn hiệu lực 36 + Sắp hết hạn 3 + Hết hạn 1 + Chưa có hợp đồng 2. Ngừng sử dụng 6. Tất cả 48.
// Cần xử lý 7 = bhaya, comnieu, hoian, hue, maichau, dragon, sapa.
// st: ok (Còn hiệu lực), soon (Sắp hết hạn), exp (Hết hạn), none (Chưa có hợp đồng). tt: 1 đủ / 0 thiếu thông tin thanh toán.
const N = {
  anlam: { n: 'An Lam Retreats Ninh Vân Bay', loc: 'Nha Trang', type: 'Khách sạn', ct: 'Lê Thảo Vy', em: 'reservation@anlamretreats.com', hd: 'AL-2026/01', st: 'ok', end: '31/12/2026', left: 'còn 50 ngày', dv: 8, tt: 1, on: 1 },
  benthanh: { n: 'Bến Thành Transport', loc: 'TP. Hồ Chí Minh', type: 'Vận chuyển', ct: 'Trần Văn Lộc', em: 'booking@benthanhtransport.vn', hd: 'BTT-2026', st: 'ok', end: '31/03/2027', left: 'còn 140 ngày', dv: 14, tt: 1, on: 1 },
  bhaya: { n: 'Bhaya Cruises Hạ Long', loc: 'Hạ Long', type: 'Du thuyền', ct: 'Phạm Minh Đức', em: 'sales@bhayacruises.com', hd: 'BHY-26', st: 'soon', end: '30/11/2026', left: 'còn 19 ngày', dv: 6, tt: 1, on: 1 },
  comnieu: { n: 'Cơm Niêu Sài Gòn', loc: 'TP. Hồ Chí Minh', type: 'Nhà hàng', ct: 'Ngô Thị Hạnh', em: 'datban@comnieusaigon.vn', hd: null, st: 'none', dv: 3, tt: 0, on: 1 },
  siesta: { n: 'Hanoi La Siesta Hotel', loc: 'Hà Nội', type: 'Khách sạn', ct: 'Đỗ Thu Trang', em: 'rsvn@lasiestahotels.vn', hd: 'LS-2026', st: 'ok', end: '31/12/2026', left: 'còn 50 ngày', dv: 9, tt: 1, on: 1 },
  hoian: { n: 'Hội An Memories Land', loc: 'Hội An', type: 'Vé tham quan', ct: 'Nguyễn Văn Tâm', em: 'sales@hoianmemories.vn', hd: 'HAM-2026', st: 'ok', end: '28/02/2027', left: 'còn 109 ngày', dv: 4, tt: 0, on: 1 },
  hue: { n: 'Huế Imperial Boat', loc: 'Huế', type: 'Du thuyền', ct: 'Hoàng Văn Phúc', em: 'info@hueimperialboat.vn', hd: 'HIB-2025', st: 'exp', end: '31/10/2026', left: 'đã hết 11 ngày', dv: 2, tt: 1, on: 1 },
  lyson: { n: 'Lý Sơn Island Homestay', loc: 'Lý Sơn', type: 'Khách sạn', ct: 'Phan Thị Hoa', em: 'booking@lysonhomestay.vn', hd: 'LSH-2026', st: 'ok', end: '31/10/2027', left: 'còn 354 ngày', dv: 0, tt: 0, on: 1, isNew: 1 },
  maichau: { n: 'Mai Châu Ecolodge', loc: 'Mai Châu', type: 'Khách sạn', ct: 'Hà Văn Sơn', em: 'booking@maichauecolodge.com', hd: 'MCE-26', st: 'soon', end: '11/12/2026', left: 'còn 30 ngày', dv: 5, tt: 1, on: 1 },
  mekong: { n: 'Mekong Eyes Cruise', loc: 'Cần Thơ', type: 'Du thuyền', ct: 'Trương Mỹ Linh', em: 'sales@mekongeyes.com', hd: 'ME-2026', st: 'ok', end: '30/11/2026', left: 'HĐ kế tiếp từ 01/12', dv: 7, tt: 1, on: 1, next: 'ME-2027' },
  ngon: { n: 'Nhà hàng Ngon Garden', loc: 'Hà Nội', type: 'Nhà hàng', ct: 'Vũ Thị Mai', em: 'event@ngongarden.vn', hd: 'NG-2026', st: 'ok', end: '31/12/2026', left: 'còn 50 ngày', dv: 5, tt: 1, on: 1 },
  dragon: { n: 'Saigon Dragon Travel Bus', loc: 'TP. Hồ Chí Minh', type: 'Vận chuyển', ct: 'Lâm Quốc Bảo', em: 'ops@saigondragonbus.vn', hd: null, st: 'none', dv: 4, tt: 1, on: 1 },
  sapa: { n: 'Sapa Trekking Guides', loc: 'Sa Pa', type: 'Hướng dẫn viên', ct: 'Giàng A Páo', em: 'book@sapatrekking.vn', hd: 'STG-26', st: 'soon', end: '20/11/2026', left: 'còn 9 ngày', dv: 3, tt: 1, on: 1 },
  // Khách sạn khác (W04)
  pullman: { n: 'Pullman Danang Beach Resort', loc: 'Đà Nẵng', type: 'Khách sạn', ct: 'Lê Hoàng Yến', em: 'reservation@pullman-danang.com', hd: 'PDB-2026', st: 'ok', end: '31/12/2026', left: 'còn 50 ngày', dv: 12, tt: 1, on: 1 },
  silk: { n: 'Silk Path Hotel Huế', loc: 'Huế', type: 'Khách sạn', ct: 'Tôn Nữ Minh Thư', em: 'rsvn.hue@silkpathhotel.com', hd: 'SPH-2026', st: 'ok', end: '31/03/2027', left: 'còn 140 ngày', dv: 7, tt: 1, on: 1 },
  victoria: { n: 'Victoria Sapa Resort', loc: 'Sa Pa', type: 'Khách sạn', ct: 'Lý Thị Dung', em: 'resa.sapa@victoriahotels.asia', hd: 'VSR-2026', st: 'ok', end: '30/09/2027', left: 'còn 323 ngày', dv: 10, tt: 1, on: 1 },
  // Ngừng sử dụng (6)
  dalat: { n: 'Đà Lạt Pine Hill Hotel', loc: 'Đà Lạt', type: 'Khách sạn', ct: 'Võ Thanh Hải', em: 'booking@pinehilldalat.vn', hd: 'DPH-2025', st: 'exp', end: '30/06/2026', left: 'đã hết 134 ngày', dv: 6, tt: 1, on: 0 },
  pearl: { n: 'Hạ Long Pearl Cruise', loc: 'Hạ Long', type: 'Du thuyền', ct: 'Bùi Văn Kiên', em: 'sales@halongpearl.vn', hd: 'HP-2025', st: 'exp', end: '31/12/2025', left: 'đã hết 315 ngày', dv: 4, tt: 1, on: 0 },
  seabus: { n: 'Nha Trang Sea Bus', loc: 'Nha Trang', type: 'Vận chuyển', ct: 'Đặng Quốc Việt', em: 'ops@ntseabus.vn', hd: 'NSB-26', st: 'ok', end: '31/12/2026', left: 'còn 50 ngày', dv: 3, tt: 1, on: 0 },
  bike: { n: 'Ninh Bình Bike Rental', loc: 'Ninh Bình', type: 'Trải nghiệm', ct: 'Đinh Văn Hùng', em: 'rent@ninhbinhbike.vn', hd: 'NBR-2026', st: 'ok', end: '30/06/2027', left: 'còn 231 ngày', dv: 2, tt: 1, on: 0 },
  xichlo: { n: 'Phố Cổ Xích Lô Tours', loc: 'Hà Nội', type: 'Trải nghiệm', ct: 'Nguyễn Văn Bình', em: 'xichlo.phoco@gmail.com', hd: null, st: 'none', dv: 2, tt: 0, on: 0 },
  baba: { n: 'Quán Ăn Bà Ba', loc: 'Cần Thơ', type: 'Nhà hàng', ct: 'Trần Thị Ba', em: 'quanbaba.ct@gmail.com', hd: null, st: 'none', dv: 1, tt: 0, on: 0 },
};
// NCC vừa nhập từ Excel (W15): chưa có hợp đồng, chưa có dịch vụ, thiếu thông tin thanh toán
const IMP = [
  ['An Bàng Seaside Kitchen', 'Hội An', 'Nhà hàng', 'Trần Thị Lệ', 'booking@anbangkitchen.vn'],
  ['Cẩm Thanh Basket Boat', 'Hội An', 'Trải nghiệm', 'Nguyễn Văn Sáu', ''],
  ['Cù Lao Chàm Speedboat', 'Hội An', 'Vận chuyển', 'Lê Văn Thành', 'ops@culaochamboat.vn'],
  ['Đà Nẵng Riverside Hotel', 'Đà Nẵng', 'Khách sạn', 'Phạm Thị Ngọc', 'rsvn@dnriverside.vn'],
  ['Hải Vân Pass Easy Rider', 'Đà Nẵng', 'Trải nghiệm', 'Hồ Văn Lực', 'ride@haivanrider.vn'],
  ['Hội An Lantern Workshop', 'Hội An', 'Trải nghiệm', 'Võ Thị Hằng', 'class@hoianlantern.vn'],
  ['Huế Garden House Dining', 'Huế', 'Nhà hàng', 'Tôn Thất Bảo', 'datban@huegarden.vn'],
  ['Hương River Dragon Boat', 'Huế', 'Du thuyền', 'Nguyễn Hữu Lộc', 'booking@huongriverboat.vn'],
  ['Lăng Cô Lagoon Resort', 'Lăng Cô', 'Khách sạn', 'Đoàn Thị Thu', 'reservation@langcolagoon.vn'],
  ['Mỹ Sơn Heritage Guide', 'Hội An', 'Hướng dẫn viên', 'Trương Văn Minh', 'guide@mysonheritage.vn'],
  ['Non Nước Marble Tour', 'Đà Nẵng', 'Vé tham quan', 'Lương Thị Hoa', 'sales@nonnuocmarble.vn'],
  ['Sơn Trà Jeep Adventure', 'Đà Nẵng', 'Trải nghiệm', 'Phan Văn Tú', ''],
];
IMP.forEach(([n, loc, type, ct, em], i) => { N['imp' + i] = { n, loc, type, ct, em, hd: null, st: 'none', dv: 0, tt: 0, on: 1, isNew: 1 }; });

const HD = { ok: ['Còn hiệu lực', 'b-green'], soon: ['Sắp hết hạn', 'b-amber'], exp: ['Hết hạn', 'b-red'], none: ['Chưa có hợp đồng', 'b-gray'] };
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const sw = on => `<span class="sw ${on ? 'on' : ''}"><i></i></span>`;

// mode: 'edit' (Điều hành: ô chọn + công tắc), 'bulk' (đang chọn nhiều: công tắc ẩn), 'ro' (Kế toán: chỉ xem)
function rowHtml(k, { mode = 'edit', sel = false, cls = '', off = false, onx = false } = {}) {
  const r = N[k];
  const on = off ? 0 : onx ? 1 : r.on;
  const h = HD[r.st];
  const hdCell = r.hd ? `<b style="font-weight:600">${r.hd}</b> ${bd(h[0], h[1])}` : bd(h[0], h[1]);
  const endCell = r.hd ? `${r.end}<div class="small" style="color:${r.st === 'soon' || r.st === 'exp' ? '#b45309' : '#6b7280'}">${r.left}</div>` : '<span class="muted">—</span>';
  const ttCell = r.tt ? '<span style="color:#166534">✓ Đủ</span>' : '<span class="b" style="color:#b45309">Thiếu thông tin</span>';
  const emCell = r.em ? `<div class="muted small">${r.em}</div>` : '<div class="small" style="color:#b45309">Chưa có email đặt dịch vụ</div>';
  let swCell;
  if (mode === 'edit') swCell = sw(on);
  else swCell = on ? '<span class="muted small">Đang dùng</span>' : '<span class="muted small">Ngừng sử dụng</span>';
  const cb = mode === 'ro' ? '' : `<td style="width:26px"><span class="cb ${sel ? 'on' : ''}"></span></td>`;
  const rowCls = [sel ? 'sel' : '', cls, !on ? 'off' : ''].join(' ');
  return `<tr class="${rowCls}">${cb}<td><b style="color:#1d4ed8">${r.n}</b>${r.isNew ? ind('Mới', 'b') : ''}${!on && mode !== 'ro' ? ind('Ngừng sử dụng', 'r') : ''}<div class="muted small">${r.loc}</div></td>
<td>${r.type}</td><td>${r.ct}${emCell}</td><td>${hdCell}</td><td>${endCell}</td><td class="num">${r.dv}</td><td>${ttCell}</td><td style="text-align:center">${swCell}</td></tr>`;
}
function table(keys, o = {}) {
  const head = o.mode === 'ro' ? '' : `<th style="width:26px"><span class="cb ${o.all ? 'on' : o.part ? 'part' : ''}"></span></th>`;
  const sortName = o.sortEnd ? '' : ' ▲';
  return `<div class="tbl"><table class="nw"><tr>${head}<th>Nhà cung cấp${sortName}</th><th>Loại dịch vụ</th><th>Đầu mối liên hệ</th><th>Hợp đồng hiện hành</th><th>Hết hạn${o.sortEnd ? ' ▲' : ''}</th><th class="num">Dịch vụ</th><th>Thanh toán</th><th style="text-align:center;width:74px">Cho phép</th></tr>
${keys.map(k => rowHtml(k, Object.assign({}, o, { sel: (o.sel || []).includes(k), cls: (o.hl || []).includes(k) ? 'new' : '', off: (o.offs || []).includes(k), onx: (o.ons || []).includes(k) }))).join('')}</table></div>`;
}
const C_DEF = { on: 42, off: 6, all: 48, todo: 7, pg: 'Hiển thị 1–20 / 42 · sắp theo tên' };
const chips = (c = C_DEF, active = 'on') => `<div class="flex" style="margin:0 0 8px">${[['on', 'Đang dùng'], ['off', 'Ngừng sử dụng'], ['all', 'Tất cả']].map(([k, n]) => `<span class="chip ${k === active ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}
<span style="width:1px;height:20px;background:#d1d5db;margin:0 4px"></span>
<span class="chip ${active === 'todo' ? 'on' : ''}" style="${active === 'todo' ? '' : 'border-color:#fcd34d;background:#fffbeb;color:#92400e'}">⚠ Cần xử lý <span class="cnt ${active === 'todo' ? '' : 'w'}">${c.todo}</span></span>
<span class="ml muted small">${c.pg || ''}</span></div>`;
const toolbar = ({ q = '', type = 'Tất cả', hd = 'Tất cả', tt = 'Tất cả', imp = '', clear = false } = {}) => `<div class="toolbar" style="margin-top:0">
<div class="input ${q ? 'focus' : 'ph'}" style="width:290px">🔍&nbsp; ${q || 'Tìm tên NCC, đầu mối, email'}</div>
<div class="input sel ${type !== 'Tất cả' ? 'focus' : ''}" style="width:200px"><span class="muted">Loại dịch vụ:&nbsp;</span>${type}</div>
<div class="input sel ${hd !== 'Tất cả' ? 'focus' : ''}" style="width:190px"><span class="muted">Hợp đồng:&nbsp;</span>${hd}</div>
<div class="input sel ${tt !== 'Tất cả' ? 'focus' : ''}" style="width:200px"><span class="muted">Thanh toán:&nbsp;</span>${tt}</div>
${imp ? `<span class="chip" style="border-color:#93c5fd;background:#eff6ff;color:#1e40af">Lần nhập ${imp} ✕</span>` : ''}
${clear ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
const title = ({ user = 'dh' } = {}) => `<div class="ttl"><h1>Nhà cung cấp</h1>${user === 'kt' ? '<span class="muted">Chỉ xem · thông tin thanh toán sửa trong hồ sơ NCC</span>' : `<div class="ml flex">${B('⬆ Nhập Excel')}${B('+ Tạo nhà cung cấp', 'p')}</div>`}</div>`;
const pager = (t = '1–20 / 42') => `<div class="flex" style="margin-top:8px"><span class="muted small">Hiển thị ${t}</span><span class="ml flex">${B('‹', 'sm dis')}${B('1', 'sm p')}${B('2', 'sm')}${B('3', 'sm')}${B('›', 'sm')}</span></div>`;

const PAGE1 = ['anlam', 'benthanh', 'bhaya', 'comnieu', 'siesta', 'hoian', 'hue', 'maichau', 'mekong', 'ngon', 'dragon', 'sapa'];
const TODO7 = ['hue', 'comnieu', 'dragon', 'sapa', 'bhaya', 'maichau', 'hoian'];
const OFF6 = ['dalat', 'pearl', 'seabus', 'bike', 'xichlo', 'baba'];

const list = (o = {}) => title(o) + toolbar(o.tb) + (o.banner || '') + chips(o.c, o.chip) + (o.bulk || '') + (o.body || table(o.keys || PAGE1, o.t || {}));

// ---------- W01 Danh sách mặc định (Điều hành) ----------
S.W01 = P({ bell: 1, body: list() });

// ---------- W02 Lọc Cần xử lý ----------
S.W02 = P({ body: list({ chip: 'todo', c: Object.assign({}, C_DEF, { pg: 'Sắp theo mức cần xử lý' }), keys: TODO7, t: { sortEnd: true } }) });

// ---------- W03 Thông báo hợp đồng sắp hết hạn ----------
const notif = `<div class="menu" style="right:16px;top:40px;width:420px">
<div class="flex" style="padding:4px 12px 8px;border-bottom:1px solid #f1f5f9"><b>Thông báo</b><span class="ml muted small">1 chưa đọc</span></div>
<div class="mi on" style="align-items:flex-start"><span class="ico w">!</span><div>Hợp đồng <b>MCE-26</b> của <b>Mai Châu Ecolodge</b> hết hạn ngày 11/12/2026 (còn 30 ngày). Chưa có hợp đồng kế tiếp.<div class="muted small">08:00 hôm nay</div></div></div>
<div class="mi" style="align-items:flex-start"><span class="ico e">!</span><div>Hợp đồng <b>HIB-2025</b> của <b>Huế Imperial Boat</b> đã hết hạn ngày 31/10/2026. NCC vẫn đang được phép sử dụng.<div class="muted small">08:00 · 01/11/2026</div></div></div>
<div class="mi" style="align-items:flex-start"><span class="ico w">!</span><div>Hợp đồng <b>BHY-26</b> của <b>Bhaya Cruises Hạ Long</b> hết hạn ngày 30/11/2026 (còn 30 ngày). Chưa có hợp đồng kế tiếp.<div class="muted small">08:00 · 31/10/2026</div></div></div>
<div style="padding:8px 12px 2px;border-top:1px solid #f1f5f9;text-align:center">${B('Xem nhà cung cấp cần xử lý', 'lk')}</div></div>`;
S.W03 = P({ bell: 1, body: list(), overlay: notif });

// ---------- W04 Lọc theo loại dịch vụ ----------
S.W04 = P({ body: list({ tb: { type: 'Khách sạn', clear: true }, c: { on: 6, off: 1, all: 7, todo: 1 }, keys: ['anlam', 'siesta', 'maichau', 'pullman', 'silk', 'victoria'] }) });

// ---------- W05 Không khớp bộ lọc ----------
S.W05 = P({ body: list({ tb: { q: 'lotus', type: 'Du thuyền', clear: true }, c: { on: 0, off: 0, all: 0, todo: 0 },
  body: `<div class="tbl"><div class="empty"><div class="big">Không có nhà cung cấp khớp bộ lọc</div>Thử từ khóa khác hoặc bỏ bớt bộ lọc. Nhà cung cấp chưa có trong hệ thống thì chọn Tạo nhà cung cấp hoặc Nhập Excel.</div></div>` }) });

// ---------- W06 Lỗi tải danh sách ----------
S.W06 = P({ body: list({ tb: { type: 'Du thuyền', clear: true }, c: { on: '–', off: '–', all: '–', todo: '–' },
  body: `<div class="tbl"><div class="empty"><div class="big" style="color:#b91c1c">Không tải được danh sách nhà cung cấp</div>Kết nối tới máy chủ bị gián đoạn. Bộ lọc của bạn vẫn được giữ.<div style="margin-top:12px">${B('Thử lại', 'p')}</div></div></div>` }) });

// ---------- W07 Xác nhận ngừng sử dụng NCC đang được dùng ----------
const useBox = `<div class="muted" style="margin-bottom:8px"><b style="color:#111827">Bhaya Cruises Hạ Long</b> đang được dùng ở:</div>
<div class="card" style="padding:8px 12px;margin-bottom:8px">
<div class="sec" style="margin-top:0">2 hồ sơ Tour chưa đóng có dịch vụ chưa sử dụng</div>
<table><tr><th>Tour Code</th><th>Khách</th><th>Ngày dùng</th><th>Dịch vụ</th><th>Tình trạng</th></tr>
<tr><td class="b" style="color:#1d4ed8">TP-2611-0042</td><td>Müller Reisen GmbH</td><td>20/11/2026</td><td>Du thuyền 2N1Đ · Deluxe</td><td>${bd('Đã xác nhận', 'b-green')}</td></tr>
<tr><td class="b" style="color:#1d4ed8">TP-2612-0003</td><td>Kim Tours Korea</td><td>04/12/2026</td><td>Du thuyền 2N1Đ · Suite</td><td>${bd('Cần đặt', 'b-amber')}</td></tr></table>
<div class="sec">Khác</div><div>2 Tour mẫu đang cho phép sử dụng · 1 yêu cầu Tour đang xử lý (YC-2611-0088)</div></div>
<div class="banner i" style="align-items:flex-start;font-size:12.3px"><span class="ico i">i</span><div>Sau khi ngừng: NCC và dịch vụ của NCC không hiện khi chọn mới ở Tour mẫu, hành trình, dịch vụ và đặt dịch vụ của hồ sơ Tour. Dữ liệu đã có, lần đặt đã gửi, hợp đồng, bảng giá và công nợ giữ nguyên. Dịch vụ <b>Cần đặt</b> của TP-2612-0003 sẽ hiện chỉ báo NCC ngừng sử dụng để Điều hành chọn NCC khác. Yêu cầu <b>YC-2611-0088</b> bị khóa Tính giá cho tới khi đổi dịch vụ.</div></div>`;
S.W07 = P({ body: list(), overlay: modal('Ngừng sử dụng nhà cung cấp?', useBox, `${B('Giữ đang dùng')}${B('Ngừng sử dụng', 'dp')}`, 640) });

// ---------- W08 Sau khi ngừng sử dụng một NCC ----------
S.W08 = P({ body: list({ c: { on: 41, off: 7, all: 48, todo: 6 }, t: { offs: ['bhaya'] } }),
  overlay: `<div class="toast">Đã ngừng sử dụng Bhaya Cruises Hạ Long. Dòng rời bộ lọc Đang dùng khi tải lại.<a>Hoàn tác</a></div>` });

// ---------- W09 Cho phép sử dụng lại ----------
const C_W09 = { on: 43, off: 5, all: 48, todo: 7 };
S.W09 = P({ body: list({ chip: 'off', c: C_W09, keys: OFF6, t: { hl: ['bike'], ons: ['bike'] } }),
  overlay: `<div class="toast">Đã cho phép sử dụng lại Ninh Bình Bike Rental.<a>Hoàn tác</a></div>` });

// ---------- W10 Chọn nhiều NCC ----------
const SEL3 = ['hue', 'comnieu', 'dragon'];
const bulkBar = `<div class="bulk"><span class="cb on" style="border-color:#fff"></span><b>Đã chọn 3 nhà cung cấp</b><span style="opacity:.8">trong trang này</span><span class="ml flex">${B('Cho phép sử dụng')}${B('Ngừng sử dụng')}<span style="color:#fff;text-decoration:underline;margin-left:6px">Bỏ chọn</span></span></div>`;
const todoChip = Object.assign({}, C_DEF, { pg: 'Sắp theo mức cần xử lý' });
S.W10 = P({ body: list({ chip: 'todo', c: todoChip, keys: TODO7, bulk: bulkBar, t: { mode: 'bulk', sel: SEL3, part: true, sortEnd: true } }) });

// ---------- W11 Xác nhận ngừng sử dụng hàng loạt ----------
const bulkBox = `<div style="margin-bottom:8px">3 nhà cung cấp sẽ chuyển sang <b>Ngừng sử dụng</b>: Huế Imperial Boat, Cơm Niêu Sài Gòn, Saigon Dragon Travel Bus.</div>
<div class="card" style="padding:8px 12px;margin-bottom:8px"><div class="sec" style="margin-top:0">1 nhà cung cấp đang được dùng</div>
<table><tr><th>Nhà cung cấp</th><th>Đang dùng ở</th></tr>
<tr><td class="b">Cơm Niêu Sài Gòn</td><td>Hồ sơ <b style="color:#1d4ed8">TP-2611-0047</b> Dupont Voyages · bữa tối 21/11/2026 · ${bd('Cần đặt', 'b-amber')}<div class="muted small">1 Tour mẫu đang cho phép sử dụng</div></td></tr></table>
<div class="muted small" style="margin-top:6px">Huế Imperial Boat và Saigon Dragon Travel Bus không được dùng ở đâu.</div></div>
<div class="banner i" style="font-size:12.3px"><span class="ico i">i</span><div>Dữ liệu đã có, lần đặt đã gửi và công nợ giữ nguyên. NCC chỉ bị ẩn khi chọn mới.</div></div>`;
S.W11 = P({ body: list({ chip: 'todo', c: todoChip, keys: TODO7, bulk: bulkBar, t: { mode: 'bulk', sel: SEL3, part: true, sortEnd: true } }),
  overlay: modal('Ngừng sử dụng 3 nhà cung cấp?', bulkBox, `${B('Giữ đang dùng')}${B('Ngừng sử dụng 3 NCC', 'dp')}`, 640) });

// ---------- W12 Kết quả hàng loạt một phần ----------
const resBanner = `<div class="banner w" style="margin-bottom:8px;align-items:flex-start"><span class="ico w">!</span><div style="flex:1"><b>Đã ngừng sử dụng 2 nhà cung cấp.</b> Bỏ qua 1: <b>Saigon Dragon Travel Bus</b> đã được Lê Quang Huy chuyển Ngừng sử dụng lúc 10:42, trước khi bạn áp dụng.</div>${B('Hoàn tác 2 NCC', 'sm')}</div>`;
S.W12 = P({ body: list({ chip: 'todo', c: { on: 39, off: 9, all: 48, todo: 4, pg: 'Sắp theo mức cần xử lý' }, keys: TODO7, banner: resBanner, t: { sortEnd: true, offs: SEL3 } }) });

// ---------- W13 Nhập Excel: chọn tệp ----------
const steps = n => `<div class="steps"><span class="${n === 1 ? 'on' : ''}">1 · Chọn tệp</span><span>›</span><span class="${n === 2 ? 'on' : ''}">2 · Xem trước và nhập</span></div>`;
const tplNote = `<div class="flex" style="margin-bottom:8px"><span>Dùng tệp mẫu để đúng cột:</span>${B('⬇ Tải tệp mẫu (.xlsx)', 'lk')}</div>
<div class="muted small" style="margin-bottom:10px">Cột: <b>Tên NCC*</b>, <b>Loại dịch vụ*</b> (nhiều loại cách nhau bằng dấu ;), Địa điểm, Địa chỉ, Người liên hệ, Điện thoại, Email đặt dịch vụ, Cho phép sử dụng (Có/Không, trống là Có).</div>`;
const impRules = `<div class="banner i" style="margin-top:10px;font-size:12.3px;align-items:flex-start"><span class="ico i">i</span><div>Chỉ tạo NCC mới. Dòng trùng tên với NCC đã có được bỏ qua, không ghi đè. Hợp đồng, dịch vụ, bảng giá và thông tin thanh toán nhập trong hồ sơ NCC. Tối đa 1.000 dòng, 5 MB.</div></div>`;
S.W13 = P({ body: list(), overlay: modal('Nhập nhà cung cấp từ Excel', steps(1) + tplNote +
  `<div class="file"><span class="ico ok">✓</span><div style="flex:1"><b>ncc-mien-trung.xlsx</b><div class="muted small">38 KB · 24 dòng dữ liệu · đúng mẫu</div></div>${B('Chọn tệp khác', 'lk')}</div>` + impRules,
  `${B('Hủy')}${B('Xem trước', 'p')}`, 620) });

// ---------- W13a Nhập Excel: tệp không hợp lệ ----------
S.W13a = P({ body: list(), overlay: modal('Nhập nhà cung cấp từ Excel', steps(1) + tplNote +
  `<div class="file bad"><span class="ico e">!</span><div style="flex:1"><b>danh-sach-ncc.xlsx</b><div class="small" style="color:#b91c1c">Tệp không đúng mẫu: thiếu cột bắt buộc <b>Loại dịch vụ</b>. Tải tệp mẫu, chép dữ liệu sang rồi chọn lại.</div></div>${B('Chọn tệp khác', 'lk')}</div>` + impRules,
  `<span class="muted small">Chọn tệp hợp lệ để xem trước</span>${B('Hủy')}${B('Xem trước', 'dis')}`, 620) });

// ---------- W14 Nhập Excel: xem trước ----------
const pv = (d, n, t, loc, em, res, cls = '') => `<tr class="${cls}"><td class="muted">${d}</td><td class="b" style="white-space:nowrap">${n}</td><td style="white-space:nowrap">${t}</td><td style="white-space:nowrap">${loc}</td><td>${em || '<span style="color:#b45309">Trống</span>'}</td><td>${res}</td></tr>`;
const skip = t => `${bd('Bỏ qua', 'b-red')} <span class="small">${t}</span>`;
const warn = t => `${bd('Sẽ nhập', 'b-green')} <span class="small" style="color:#b45309">${t}</span>`;
const okr = bd('Sẽ nhập', 'b-green');
const pvBody = steps(2) + `<div class="flex" style="margin-bottom:8px"><b>ncc-mien-trung.xlsx</b><span class="muted">· 24 dòng</span>
<span class="ml flex"><span class="chip on">Tất cả <span class="cnt">24</span></span><span class="chip">Sẽ nhập <span class="cnt g">21</span></span><span class="chip">Bỏ qua <span class="cnt r">3</span></span><span class="chip">Cảnh báo <span class="cnt w">3</span></span></span></div>
<div class="tbl"><table><tr><th>Dòng</th><th>Tên NCC</th><th>Loại dịch vụ</th><th>Địa điểm</th><th>Email đặt dịch vụ</th><th>Kết quả</th></tr>
${pv(17, 'Hội An Silk Village', 'Spa; Vé tham quan', 'Hội An', 'info@hoiansilk.vn', skip('Loại dịch vụ “Spa” chưa có trong danh mục'), 'bad')}
${pv(5, 'Pullman Danang Beach Resort', 'Khách sạn', 'Đà Nẵng', 'reservation@pullman-danang.com', skip('Trùng tên NCC đã có'), 'bad')}
${pv(13, 'Cù Lao Chàm Speedboat', 'Vận chuyển', 'Hội An', 'ops@culaochamboat.vn', skip('Trùng dòng 4 trong tệp'), 'bad')}
${pv(3, 'Cẩm Thanh Basket Boat', 'Trải nghiệm', 'Hội An', '', warn('Chưa có email đặt dịch vụ'), 'hot')}
${pv(21, 'Sơn Trà Jeep Adventure', 'Trải nghiệm', 'Đà Nẵng', '', warn('Chưa có email đặt dịch vụ'), 'hot')}
${pv(23, 'Tam Thanh Mural Village', 'Vé tham quan', 'Tam Kỳ', '', warn('Chưa có email đặt dịch vụ'), 'hot')}
${pv(2, 'An Bàng Seaside Kitchen', 'Nhà hàng', 'Hội An', 'booking@anbangkitchen.vn', okr)}
${pv(4, 'Cù Lao Chàm Speedboat', 'Vận chuyển', 'Hội An', 'ops@culaochamboat.vn', okr)}
${pv(6, 'Đà Nẵng Riverside Hotel', 'Khách sạn', 'Đà Nẵng', 'rsvn@dnriverside.vn', okr)}
<tr><td colspan="6" class="muted small" style="text-align:center">… 15 dòng Sẽ nhập khác</td></tr></table></div>
<div class="muted small" style="margin-top:8px">NCC mới được tạo ở trạng thái Cho phép sử dụng theo cột trong tệp; chưa có hợp đồng, dịch vụ và thông tin thanh toán nên sẽ nằm trong Cần xử lý.</div>`;
S.W14 = P({ body: list(), overlay: modal('Nhập nhà cung cấp từ Excel', pvBody, `${B('‹ Chọn tệp khác', 'lk')}<span class="ml"></span>${B('Hủy')}${B('Nhập 21 nhà cung cấp', 'p')}`, 1000) });

// ---------- W15 Sau khi nhập ----------
const impBanner = `<div class="banner s" style="margin-bottom:8px"><span class="ico ok">✓</span><div style="flex:1"><b>Đã nhập 21 nhà cung cấp</b> từ ncc-mien-trung.xlsx. Bỏ qua 3 dòng (2 trùng, 1 lỗi). Các NCC mới chưa có hợp đồng, dịch vụ và thông tin thanh toán.</div>${B('⬇ Tải các dòng bị bỏ qua', 'sm')}</div>`;
S.W15 = P({ body: list({ tb: { imp: '11/11/2026 09:15', clear: true }, banner: impBanner, c: { on: 21, off: 0, all: 21, todo: 21, pg: 'Hiển thị 1–20 / 21' }, keys: IMP.map((_, i) => 'imp' + i) }) });

// ---------- W16 Kế toán ----------
S.W16 = P({ user: 'kt', body: list({ user: 'kt', tb: { tt: 'Thiếu thông tin', clear: true }, chip: 'all', c: { on: 2, off: 2, all: 4, todo: 2 }, keys: ['comnieu', 'hoian', 'xichlo', 'baba'], t: { mode: 'ro' } }) });

// ---------- W17 Quay lại sau khi tạo NCC mới ----------
const P17 = ['anlam', 'benthanh', 'bhaya', 'comnieu', 'siesta', 'hoian', 'hue', 'lyson', 'maichau', 'mekong', 'ngon', 'dragon'];
S.W17 = P({ body: list({ c: { on: 43, off: 6, all: 49, todo: 8 }, keys: P17, t: { hl: ['lyson'] } }) });

module.exports = S;
