// Wireframe DH04 · Tra cứu dịch vụ và bảng giá. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
// Hôm nay trên hình: 11/11/2026 (thứ Tư). Ví dụ tính giá: 18/12 – 22/12/2026, 12 khách.
// 18/12 thứ Sáu, 19/12 thứ Bảy (cuối tuần theo hợp đồng HAR-2026), 20/12 Chủ nhật, 21/12 thứ Hai.
const { page, drawer, modal, f, B, bd } = require('./lib');
const S = {};
const NAV = 'Dịch vụ & bảng giá';
const CSS = `
.pbar{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;margin-bottom:8px}
.pbar .lb{font-weight:600;white-space:nowrap}
.sw{width:30px;height:17px;border-radius:9px;background:#cbd5e1;position:relative;display:inline-block;flex:none}
.sw i{position:absolute;top:2px;left:2px;width:13px;height:13px;border-radius:50%;background:#fff}
.sw.on{background:#2563eb}.sw.on i{left:15px}
.pr{font-weight:700;font-variant-numeric:tabular-nums;white-space:nowrap}
.pr .u{font-weight:400;color:#6b7280;font-size:11.5px}
.tip{position:absolute;background:#111827;color:#f9fafb;border-radius:8px;padding:10px 12px;box-shadow:0 10px 30px rgba(0,0,0,.3);font-size:12px;z-index:6}
.tip table{background:transparent}.tip td,.tip th{border-bottom:1px solid #374151;color:#f9fafb;padding:3px 8px;background:transparent}
.tip th{color:#9ca3af;font-weight:600}
.mx td,.mx th{border-right:1px solid #f1f5f9;font-size:12px}
.mx td.hit{background:#dbeafe;box-shadow:inset 0 0 0 2px #2563eb;font-weight:700}
.mx th.sub{font-weight:400;color:#9ca3af;font-size:11px}
.ro .mx td{color:#111827}
.tg{display:inline-block;border:1px solid #d1fae5;background:#ecfdf5;color:#065f46;border-radius:12px;padding:1px 9px;font-size:12px;margin:0 4px 4px 0}
.tg.n{border-color:#fee2e2;background:#fef2f2;color:#991b1b}
tr.dim td{color:#9ca3af}tr.dim td b{color:#6b7280!important}
`;

// ---------- Dữ liệu minh họa ----------
// k: khóa; sv: dịch vụ; unit: đơn vị tính; t: loại; ncc; loc: địa điểm; hd: hợp đồng hiện hành; to: hết hạn; soon: còn ≤ 30 ngày; next: có HĐ kế tiếp từ (thay chỉ báo Sắp hết hạn)
// from: giá từ (hợp đồng hiện hành); ap: giá áp dụng cho 18/12–22/12, 12 khách; sub: dòng phụ; warn/err: chỉ báo thiếu
const D = {
  anhduong: { sv: 'Phòng Superior Twin', unit: 'phòng/đêm', t: 'Khách sạn', ncc: 'Ánh Dương Hotel', loc: 'Nha Trang', hd: 'ADH-2026', to: '31/12/2026', from: ['1.200.000 ₫', ''], off: 'NCC ngừng sử dụng' },
  bay: { sv: 'Cabin Deluxe · 2N1Đ vịnh Hạ Long', unit: 'khách/chuyến', t: 'Du thuyền', ncc: 'Bay Pearl Cruises', loc: 'Quảng Ninh', hd: 'BPC-2026', to: '31/12/2026', from: ['165 USD', '/khách'], ap: ['210 USD', '/khách'], sub: 'Cao điểm', plus: '+ Phụ thu cuối năm 30 USD/khách (20/12 – 22/12)' },
  catba: { sv: 'Bungalow hướng vườn', unit: 'phòng/đêm', t: 'Khách sạn', ncc: 'Cát Bà Eco Lodge', loc: 'Hải Phòng', hd: null, from: null, off: 'Chưa có hợp đồng' },
  datviet: { sv: 'HDV tiếng Đức · theo ngày', unit: 'đoàn/ngày', t: 'Hướng dẫn viên', ncc: 'Đất Việt Guides', loc: 'Toàn quốc', hd: 'DVG-2026', to: '31/03/2027', from: ['1.300.000 ₫', '/đoàn/ngày'], ap: ['1.300.000 ₫', '/đoàn/ngày'], sub: '1–15 khách · Cả kỳ hợp đồng' },
  golden: { sv: 'Set menu Huế · bữa trưa', unit: 'khách/bữa', t: 'Nhà hàng', ncc: 'Golden Lotus Restaurant', loc: 'Huế', hd: 'GLR-2025', to: '30/09/2026', from: ['300.000 ₫', '/khách'], off: 'Không còn hợp đồng' },
  hv1: { sv: 'Đón tiễn sân bay Đà Nẵng – Hội An', unit: 'xe/lượt', t: 'Vận chuyển', ncc: 'Hải Vân Transport', loc: 'Đà Nẵng', hd: 'HVT-2026', to: '05/12/2026', soon: 1, next: '06/12', hdAp: ['HVT-2027', 'từ 06/12/2026'], from: ['420.000 ₫', '/xe/lượt'], ap: ['950.000 ₫', '/xe/lượt'], sub: '10–14 khách · Cả kỳ hợp đồng' },
  hv2: { sv: 'Xe 29 chỗ city tour Đà Nẵng', unit: 'xe/ngày', t: 'Vận chuyển', ncc: 'Hải Vân Transport', loc: 'Đà Nẵng', hd: 'HVT-2026', to: '05/12/2026', soon: 1, next: '06/12', hdAp: ['HVT-2027', 'từ 06/12/2026'], from: ['1.800.000 ₫', '/xe/ngày'], ap: ['1.900.000 ₫', '/xe/ngày'], sub: 'Cả kỳ hợp đồng' },
  hv3: { sv: 'Xe 45 chỗ Đà Nẵng – Hội An', unit: 'xe/lượt', t: 'Vận chuyển', ncc: 'Hải Vân Transport', loc: 'Đà Nẵng', hd: 'HVT-2026', to: '05/12/2026', soon: 1, next: '06/12', from: ['1.500.000 ₫', '/xe/lượt'], off: 'Dịch vụ ngừng sử dụng' },
  hanoi: { sv: 'Phòng Deluxe', unit: 'phòng/đêm', t: 'Khách sạn', ncc: 'Hanoi Heritage Hotel', loc: 'Hà Nội', hd: 'HHH-2026', to: '31/03/2027', from: ['85 USD', '/phòng/đêm'], ap: ['95 USD', '/phòng/đêm'], sub: 'Cao điểm · có giá 2/4 đêm', warn: 'Thiếu giá mùa Giáng sinh – Năm mới (20/12 – 21/12)' },
  harDlx: { sv: 'Phòng Deluxe Garden View', unit: 'phòng/đêm', t: 'Khách sạn', ncc: 'Hoi An Riverside Resort', loc: 'Hội An', hd: 'HAR-2026', to: '31/12/2026', from: ['1.800.000 ₫', '/phòng/đêm'], ap: ['2.400.000 – 3.500.000 ₫', '/phòng/đêm'], sub: '4 đêm 11.500.000 ₫ · Cao điểm, Giáng sinh', night: 1 },
  harSup: { sv: 'Phòng Superior', unit: 'phòng/đêm', t: 'Khách sạn', ncc: 'Hoi An Riverside Resort', loc: 'Hội An', hd: 'HAR-2026', to: '31/12/2026', from: ['1.500.000 ₫', '/phòng/đêm'], ap: ['2.000.000 – 3.000.000 ₫', '/phòng/đêm'], sub: '4 đêm 9.600.000 ₫ · Cao điểm, Giáng sinh', night: 1 },
  hue: { sv: 'Xe 16 chỗ city tour Huế', unit: 'xe/ngày', t: 'Vận chuyển', ncc: 'Hue Travel Car', loc: 'Huế', hd: 'HTC-2026', to: '20/12/2026', from: ['1.800.000 ₫', '/xe/ngày'], ap: ['1.800.000 ₫', '/xe/ngày'], sub: 'Cả kỳ hợp đồng · 18/12 – 20/12', err: 'Không có hợp đồng cho 21/12 – 22/12' },
  myson: { sv: 'Set menu Việt Nam · bữa tối', unit: 'khách/bữa', t: 'Nhà hàng', ncc: 'Mỹ Sơn Garden', loc: 'Hội An', hd: 'MSG-2026', to: '31/12/2026', from: ['280.000 ₫', '/khách'], ap: ['350.000 ₫', '/khách'], sub: '10–20 khách · Cả kỳ hợp đồng' },
  phohoi: { sv: 'Phòng Deluxe Balcony', unit: 'phòng/đêm', t: 'Khách sạn', ncc: 'Phố Hội Boutique', loc: 'Hội An', hd: 'PHB-2026', to: '30/06/2027', from: ['1.350.000 ₫', '/phòng/đêm'] },
  river: { sv: 'Phòng Deluxe Double', unit: 'phòng/đêm', t: 'Khách sạn', ncc: 'River Lantern Hotel', loc: 'Hội An', hd: 'RLH-2026', to: '31/12/2026', from: ['1.100.000 ₫', '/phòng/đêm'] },
  thanglong: { sv: 'Xe 7 chỗ city tour Hà Nội', unit: 'xe/ngày', t: 'Vận chuyển', ncc: 'Thăng Long Car', loc: 'Hà Nội', hd: 'TLC-2026', to: '31/12/2026', from: ['1.100.000 ₫', '/xe/ngày'], err: 'Không có mức giá cho 12 khách (bảng giá 1–6 khách)', noPrice: 1 },
  viet: { sv: 'HDV tiếng Anh · city tour nửa ngày', unit: 'đoàn/buổi', t: 'Hướng dẫn viên', ncc: 'Việt Heritage Guides', loc: 'Toàn quốc', hd: 'VHG-2026', to: '31/12/2026', from: ['700.000 ₫', '/đoàn/buổi'], ap: ['800.000 ₫', '/đoàn/buổi'], sub: '10–20 khách · Cả kỳ hợp đồng' },
};
const PAGE1 = ['bay', 'datviet', 'hv1', 'hv2', 'hanoi', 'harDlx', 'harSup', 'hue', 'myson'];
const C_DEF = { all: 128, ks: 46, vc: 22, nh: 25, tq: 18, dt: 7, hdv: 10 };
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;

// ---------- Thành phần ----------
const title = (sub = 'Tra cứu dịch vụ của mọi nhà cung cấp · giá tham chiếu, không xác nhận còn chỗ') =>
  `<div class="ttl" style="margin-bottom:8px"><h1>Dịch vụ &amp; bảng giá</h1><span class="muted">${sub}</span></div>`;

function pbar({ on = false, err = false } = {}) {
  if (err) return `<div class="pbar"><span class="lb">Tính giá áp dụng</span>
<div><div class="input bad" style="width:150px"><span class="muted">Từ&nbsp;</span>22/12/2026</div></div><span>–</span>
<div><div class="input bad" style="width:150px"><span class="muted">Đến&nbsp;</span>18/12/2026</div></div>
<div class="input bad" style="width:110px"><span class="muted">Số khách&nbsp;</span>0</div>
<div class="err" style="margin:0">Ngày đến phải sau ngày từ · Số khách từ 1 đến 999</div><span class="ml muted small">Chưa áp dụng, cột giá giữ “Giá từ”</span></div>`;
  if (!on) return `<div class="pbar"><span class="lb">Tính giá áp dụng</span>
<div class="input ph" style="width:150px">Từ ngày</div><span>–</span><div class="input ph" style="width:150px">Đến ngày</div>
<div class="input ph" style="width:110px">Số khách</div>
<span class="muted small">Nhập ngày sử dụng và số khách người lớn để xem giá theo hợp đồng, mùa và khoảng số khách. Dịch vụ không lưu trú: chỉ cần ngày từ.</span></div>`;
  return `<div class="pbar"><span class="lb">Tính giá áp dụng</span>
<div class="input" style="width:150px"><span class="muted">Từ&nbsp;</span>18/12/2026</div><span>–</span><div class="input" style="width:150px"><span class="muted">Đến&nbsp;</span>22/12/2026</div>
<div class="input" style="width:110px"><span class="muted">Số khách&nbsp;</span>12</div>
<span class="muted">4 đêm · 5 ngày · thứ Sáu – thứ Ba</span>${B('Bỏ tính giá', 'lk')}<span class="ml muted small">Giá giữ loại tiền gốc của hợp đồng</span></div>`;
}

function toolbar({ q = '', loc = 'Tất cả', hp = 'Tất cả', cur = 'Tất cả', all = false, clear = false } = {}) {
  const act = v => v !== 'Tất cả' ? 'focus' : '';
  return `<div class="toolbar" style="margin:0 0 8px">
<div class="input ${q ? 'focus' : 'ph'}" style="width:270px">🔍&nbsp; ${q || 'Tìm tên dịch vụ hoặc NCC'}</div>
<div class="input sel ${act(loc)}" style="width:170px"><span class="muted">Địa điểm:&nbsp;</span>${loc}</div>
<div class="input sel ${act(hp)}" style="width:170px"><span class="muted">Hạng phòng:&nbsp;</span>${hp}</div>
<div class="input sel" style="width:140px"><span class="muted">Loại tiền:&nbsp;</span>${cur}</div>
<span class="flex small" style="gap:6px"><span class="sw ${all ? 'on' : ''}"><i></i></span>Gồm cả ngừng sử dụng, hết hạn</span>
${clear ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
}

const chips = (c, on = 'all') => `<div class="flex" style="margin:0 0 8px">${[['all', 'Tất cả'], ['ks', 'Khách sạn'], ['vc', 'Vận chuyển'], ['nh', 'Nhà hàng'], ['tq', 'Tham quan'], ['dt', 'Du thuyền'], ['hdv', 'Hướng dẫn viên']].map(([k, n]) => `<span class="chip ${k === on ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}
<span class="ml muted small">Sắp xếp: NCC, dịch vụ ▾</span></div>`;

function priceCell(r, mode) {
  if (r.off === 'Chưa có hợp đồng') return '<span class="muted">—</span>';
  if (mode === 'from' || r.off) {
    return r.from ? `<span class="pr"><span class="u">từ</span> ${r.from[0]} <span class="u">${r.from[1]}</span></span>` : '<span class="muted">—</span>';
  }
  if (r.noPrice) return `<span class="ind r" style="margin:0;white-space:normal">${r.err}</span>`;
  let h = `<span class="pr">${r.ap[0]} <span class="u">${r.ap[1]}</span>${r.night ? ' <span class="u" style="color:#2563eb">ⓘ</span>' : ''}</span><div class="muted small">${r.sub}</div>`;
  if (r.plus) h += `<div class="small" style="color:#5b21b6">${r.plus}</div>`;
  if (r.warn) h += `<div class="small" style="color:#92400e">⚠ ${r.warn}</div>`;
  if (r.err) h += `<div class="small" style="color:#b91c1c">⛔ ${r.err}</div>`;
  return h;
}
function hdCell(r, mode) {
  if (!r.hd) return '<span class="muted">Chưa có hợp đồng</span>';
  if (mode === 'ap' && r.hdAp) return `${r.hdAp[0]}<div class="muted small">${r.hdAp[1]}</div>`;
  return `${r.hd}<div class="muted small">đến ${r.to}${r.soon && !r.next ? ' ' + ind('Sắp hết hạn', 'a') : ''}</div>${r.next ? '<div class="small" style="color:#047857">HĐ kế tiếp từ ' + r.next + '</div>' : ''}`;
}
function rowHtml(k, { mode = 'from', sel = false } = {}) {
  const r = D[k];
  return `<tr class="${r.off ? 'dim' : ''} ${sel ? 'sel' : ''}"><td><b style="color:#1d4ed8">${r.sv}</b><div class="muted small">${r.unit}${r.off ? ' ' + ind(r.off, r.off === 'Không còn hợp đồng' || r.off === 'Chưa có hợp đồng' ? 'a' : 'r') : ''}</div></td>
<td class="small">${r.t}</td><td><span class="b">${r.ncc}</span><div class="muted small">${r.loc}</div></td><td>${hdCell(r, mode)}</td><td style="position:relative">${priceCell(r, mode)}</td></tr>`;
}
function table(keys, o = {}) {
  const mode = o.mode || 'from';
  return `<div class="tbl"><table><tr><th style="width:270px">Dịch vụ</th><th style="width:100px">Loại</th><th style="width:200px">Nhà cung cấp</th><th style="width:150px">Hợp đồng${mode === 'ap' ? ' áp dụng' : ''}</th><th>${mode === 'ap' ? 'Giá áp dụng · 18/12 – 22/12/2026 · 12 khách' : 'Giá từ'}</th></tr>
${keys.map(k => rowHtml(k, { mode, sel: o.sel === k })).join('')}</table></div>`;
}
const list = (o = {}) => title(o.sub) + pbar(o.pb) + toolbar(o.tb) + (o.banner || '') + chips(o.c || C_DEF, o.chip) + (o.body || table(o.keys || PAGE1, o.t || {}));
const toast = (t, a) => `<div class="toast"><span>${t}</span>${a ? `<a>${a}</a>` : ''}</div>`;

// ---------- W01 Danh sách mặc định ----------
S.W01 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list() });

// ---------- W02 Giá áp dụng theo ngày và số khách ----------
S.W02 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ pb: { on: true }, t: { mode: 'ap' } }) });

// ---------- W03 Rê chuột: giá từng đêm ----------
const nightTip = `<div class="tip" style="left:610px;top:262px;width:450px">
<div style="margin-bottom:6px"><b>Phòng Deluxe Garden View · HAR-2026</b><div style="color:#9ca3af">18/12 – 22/12/2026 · 4 đêm · 12 khách · giá /phòng/đêm</div></div>
<table><tr><th>Đêm</th><th>Mùa</th><th>Loại ngày</th><th class="num">Giá</th></tr>
<tr><td>18/12 · T6</td><td>Cao điểm</td><td>Cuối tuần</td><td class="num">2.800.000 ₫</td></tr>
<tr><td>19/12 · T7</td><td>Cao điểm</td><td>Cuối tuần</td><td class="num">2.800.000 ₫</td></tr>
<tr><td>20/12 · CN</td><td>Cao điểm</td><td>Ngày thường</td><td class="num">2.400.000 ₫</td></tr>
<tr><td>21/12 · T2</td><td>Giáng sinh</td><td>—</td><td class="num">3.500.000 ₫</td></tr>
<tr><td colspan="3"><b>Tổng 4 đêm</b></td><td class="num"><b>11.500.000 ₫</b></td></tr></table>
<div style="color:#9ca3af;margin-top:6px">Phụ thu lễ Tết: không có trong khoảng ngày. Giá tham chiếu, không xác nhận còn chỗ.</div></div>`;
S.W03 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ pb: { on: true }, t: { mode: 'ap', sel: 'harDlx' } }), overlay: nightTip });

// ---------- W04 Tìm và lọc ----------
S.W04 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ tb: { loc: 'Hội An', hp: 'Deluxe', clear: true }, chip: 'ks', c: { all: 3, ks: 3, vc: 0, nh: 0, tq: 0, dt: 0, hdv: 0 }, keys: ['harDlx', 'phohoi', 'river'] }) });

// ---------- Bảng trượt DH05 chỉ đọc ----------
const SEAS = `<div class="muted small" style="margin:6px 0 8px">Cao điểm: 01/01 – 30/04, 01/10 – 20/12 · Thấp điểm: 01/05 – 30/09 · Giáng sinh: 21/12 – 31/12 · Cuối tuần: thứ Sáu, thứ Bảy</div>`;
function matrix(hit) {
  const h = (on, v) => `<td class="num ${hit && on ? 'hit' : ''}">${v}</td>`;
  return `<div class="tbl mx"><table>
<tr><th rowspan="2">Dòng giá · căn cứ tính</th><th colspan="2" style="text-align:center">Cao điểm</th><th colspan="2" style="text-align:center">Thấp điểm</th><th rowspan="2" style="text-align:center">Giáng sinh</th></tr>
<tr><th class="sub num">Ngày thường</th><th class="sub num">Cuối tuần</th><th class="sub num">Ngày thường</th><th class="sub num">Cuối tuần</th></tr>
<tr><td><b>Phòng · 1–2 người lớn</b><div class="muted small">/phòng/đêm · hạng Deluxe</div></td>${h(1, '2.400.000')}${h(1, '2.800.000')}${h(0, '1.800.000')}${h(0, '2.100.000')}${h(1, '3.500.000')}</tr>
<tr><td><b>Thêm giường người lớn</b><div class="muted small">/khách/đêm</div></td>${h(0, '700.000')}${h(0, '700.000')}${h(0, '500.000')}${h(0, '500.000')}${h(0, '900.000')}</tr>
<tr><td><b>Trẻ em 6–11 · thêm giường</b><div class="muted small">50% giá thêm giường người lớn</div></td>${h(0, '350.000')}${h(0, '350.000')}${h(0, '250.000')}${h(0, '250.000')}${h(0, '450.000')}</tr>
<tr><td><b>Trẻ em 0–5 · ngủ chung giường</b><div class="muted small">tối đa 1 trẻ/phòng</div></td><td class="num muted" colspan="5" style="text-align:center">Miễn phí</td></tr>
</table></div>
<div class="sec">Phụ thu</div>
<div class="tbl mx"><table><tr><th>Phụ thu</th><th>Ngày áp dụng</th><th>Mức · căn cứ</th><th>Kết hợp</th></tr>
<tr><td>Gala dinner Giáng sinh (bắt buộc)</td><td>24/12/2026</td><td class="num">1.200.000 ₫ /khách</td><td>Cộng dồn</td></tr>
<tr><td>Phòng đơn</td><td>Mọi ngày</td><td class="muted">Đã gồm trong giá phòng</td><td>—</td></tr></table></div>`;
}
const dHead = (o = {}) => `<div class="flex" style="gap:8px;margin-top:8px"><span class="muted small">Hợp đồng</span><span class="isel ${o.open ? 'open' : ''}" style="padding:3px 8px">HAR-2026 · 01/01 – 31/12/2026 ${ind('Còn hiệu lực', 'g')}</span>${B('Xem hợp đồng và chính sách', 'lk')}<span class="ml muted small">‹ Trước&nbsp;&nbsp;<b style="color:#111827">6 / 128</b>&nbsp;&nbsp;Sau ›</span></div>
<div class="ntab" style="margin:8px 0 0"><div class="${o.tab === 'info' ? 'on' : ''}">Thông tin dịch vụ</div><div class="${o.tab !== 'info' ? 'on' : ''}">Bảng giá và phụ thu</div></div>`;
const dTitle = `Phòng Deluxe Garden View ${bd('Khách sạn', 'b-blue')} ${bd('Chỉ xem', 'b-gray')}`;
const dSub = `<b style="color:#111827">Hoi An Riverside Resort</b> · Hội An · đơn vị phòng/đêm · loại tiền VND`;
const apBox = `<div class="banner i" style="margin-bottom:6px"><span class="ico i">=</span><div style="flex:1"><b>Giá áp dụng 18/12 – 22/12/2026 · 12 khách: 4 đêm, 11.500.000 ₫/phòng</b><div class="small">Cao điểm cuối tuần 2 đêm, Cao điểm ngày thường 1 đêm, Giáng sinh 1 đêm. Ô được dùng tô xanh.</div></div></div>`;
function dh05({ tab = 'price', hit = false, role = 'dh', open = false, stale = false } = {}) {
  let body = '';
  if (stale) body += `<div class="banner w" style="margin-bottom:8px"><span class="ico w">!</span><div style="flex:1"><b>Bảng giá vừa được cập nhật</b> bởi Trần Minh Anh lúc 10:42. Bảng trượt đang hiện dữ liệu trước khi cập nhật.</div>${B('Tải lại', 'sm p')}</div>`;
  if (tab === 'price') body += (hit ? apBox : '') + SEAS + matrix(hit);
  else body += `<div class="f2">${f('Tên dịch vụ', 'Phòng Deluxe Garden View', { cls: 'ro' })}${f('Loại dịch vụ', 'Khách sạn', { cls: 'ro' })}${f('Đơn vị tính', 'phòng/đêm', { cls: 'ro' })}${f('Cho phép sử dụng', '✓ Đang cho phép', { cls: 'ro' })}</div>
${f('Mô tả', 'Phòng 38 m², hướng vườn, 1 giường King hoặc 2 giường đơn, tối đa 2 người lớn + 1 trẻ em. Cách phố cổ 1,5 km.', { cls: 'ro area' })}
<div class="sec">Dịch vụ bao gồm</div><div>${['Ăn sáng buffet', 'Nước suối hằng ngày', 'Wifi', 'Xe đưa đón phố cổ theo lịch', 'Hồ bơi, phòng gym'].map(x => `<span class="tg">✓ ${x}</span>`).join('')}</div>
<div class="sec">Dịch vụ không bao gồm</div><div>${['Minibar', 'Giặt ủi', 'Spa', 'Bữa trưa, bữa tối', 'Gala dinner Giáng sinh (thu theo phụ thu)'].map(x => `<span class="tg n">✕ ${x}</span>`).join('')}</div>
<div class="muted small" style="margin-top:10px">Cập nhật lần cuối 02/11/2026 bởi Trần Minh Anh.</div>`;
  const foot = role === 'dh' ? `<span class="muted small" style="margin-right:auto">Giá tham chiếu, không xác nhận còn chỗ.</span>${B('Đóng')}${B('Sửa trong hồ sơ NCC', 'p')}` : `<span class="muted small" style="margin-right:auto">Giá tham chiếu, không xác nhận còn chỗ.</span>${B('Đóng')}`;
  let dr = drawer(dTitle, dHead({ tab, open }) + `<div style="margin-top:8px">${body}</div>`, foot, { wide: true, sub: dSub });
  if (open) dr += `<div class="menu" style="right:370px;top:122px;width:330px">
<div class="mh2">Hợp đồng của Hoi An Riverside Resort</div>
<div class="mi on"><div style="flex:1"><b>HAR-2026</b> ${ind('Còn hiệu lực', 'g')}<div class="muted small">01/01 – 31/12/2026 · VND · 3 mùa giá</div></div></div>
<div class="mi"><div style="flex:1"><b>HAR-2025</b> ${ind('Hết hạn', 'r')}<div class="muted small">01/01 – 31/12/2025 · VND · 3 mùa giá</div></div></div></div>`;
  return dr;
}
S.W05 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ pb: { on: true }, t: { mode: 'ap', sel: 'harDlx' } }), overlay: dh05({ hit: true }) });
S.W06 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ pb: { on: true }, t: { mode: 'ap', sel: 'harDlx' } }), overlay: dh05({ tab: 'info' }) });
S.W07 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ pb: { on: true }, t: { mode: 'ap', sel: 'harDlx' } }), overlay: dh05({ hit: true, open: true }) });

// ---------- W08 Lối ra: DH03.3 với bảng trượt DH05 ở chế độ sửa ----------
const ncHdr = `<div class="hdr"><div class="r1"><span class="code">Hoi An Riverside Resort</span>${bd('Khách sạn', 'b-blue')}<span class="flex small" style="gap:6px;margin-left:8px"><span class="sw on"><i></i></span>Cho phép sử dụng</span>
<div class="actions">${B('Xem công nợ')}</div></div>
<div class="meta"><span>Hợp đồng hiện hành <b>HAR-2026</b> · hết hạn <b>31/12/2026</b></span><span>Dịch vụ <b>2</b></span><span>Địa điểm <b>Hội An</b></span><span>Đầu mối <b>Ms. Lê Thu Trang</b></span></div>
<div class="tabs"><div class="tab">Thông tin chung và thanh toán</div><div class="tab">Hợp đồng và chính sách <span class="cnt">2</span></div><div class="tab on">Dịch vụ và bảng giá <span class="cnt">2</span></div></div></div>`;
const editMx = `<div class="banner i" style="margin-bottom:6px"><span class="ico i">i</span><div>Mở từ Tra cứu dịch vụ và bảng giá. Đang sửa hợp đồng <b>HAR-2026</b>. Nhấn Lưu để ghi cả hai tab.</div><span class="ml"></span>${B('← Về Tra cứu dịch vụ', 'lk')}</div>` + SEAS + matrix(false).replace(/<td class="num ">([\d.]+)<\/td>/g, '<td class="num"><div class="input" style="height:24px;justify-content:flex-end">$1</div></td>');
const editDr = drawer(`Phòng Deluxe Garden View ${bd('Khách sạn', 'b-blue')}`, `<div class="flex" style="gap:8px;margin-top:2px"><span class="muted small">Hợp đồng</span><span class="isel" style="padding:3px 8px">HAR-2026 · 01/01 – 31/12/2026 ${ind('Còn hiệu lực', 'g')}</span><span class="ml muted small">‹ Trước&nbsp;&nbsp;<b style="color:#111827">1 / 2</b>&nbsp;&nbsp;Sau ›</span></div>
<div class="ntab" style="margin:8px 0 0"><div>Thông tin dịch vụ</div><div class="on">Bảng giá và phụ thu</div></div><div style="margin-top:8px">${editMx}</div>`, `${B('Đóng')}${B('Lưu', 'p')}`, { wide: true, sub: 'Hoi An Riverside Resort · đang sửa' });
S.W08 = page({ nav: 'Nhà cung cấp', crumb: 'Nhà cung cấp', last: 'Hoi An Riverside Resort', css: CSS, body: ncHdr + `<div class="tbl" style="margin-top:10px"><table><tr><th>Dịch vụ</th><th>Đơn vị</th><th>Cho phép</th><th>Giá cơ sở thấp nhất</th><th>Dòng giá</th></tr>
<tr class="sel"><td><b>Phòng Deluxe Garden View</b></td><td>phòng/đêm</td><td><span class="sw on"><i></i></span></td><td>1.800.000 ₫</td><td>4</td></tr>
<tr><td><b>Phòng Superior</b></td><td>phòng/đêm</td><td><span class="sw on"><i></i></span></td><td>1.500.000 ₫</td><td>4</td></tr></table></div>`, overlay: editDr });

// ---------- W09 Kinh doanh: bảng trượt chỉ xem, không có Sửa ----------
S.W09 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', user: 'kd', css: CSS, body: list({ t: { sel: 'harDlx' } }), overlay: dh05({ role: 'kd' }) });

// ---------- W10 Gồm cả ngừng sử dụng, hết hạn ----------
S.W10 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ tb: { all: true, clear: true }, c: { all: 141, ks: 51, vc: 24, nh: 28, tq: 19, dt: 8, hdv: 11 }, keys: ['anhduong', 'bay', 'catba', 'datviet', 'golden', 'hv1', 'hv2', 'hv3', 'hanoi'] }) });

// ---------- W11 Giá áp dụng có thiếu dữ liệu ----------
S.W11 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ pb: { on: true }, tb: { q: 'city tour', clear: true }, c: { all: 4, ks: 0, vc: 3, nh: 0, tq: 0, dt: 0, hdv: 1 }, keys: ['hv2', 'hue', 'thanglong', 'viet'], t: { mode: 'ap' } }) });

// ---------- W12 Lỗi nhập ngày và số khách ----------
S.W12 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ pb: { err: true } }) });

// ---------- W13 Không có dịch vụ khớp ----------
S.W13 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ tb: { q: 'Golden Lotus', clear: true }, c: { all: 0, ks: 0, vc: 0, nh: 0, tq: 0, dt: 0, hdv: 0 }, body: `<div class="tbl"><div class="empty"><div class="big">Không có dịch vụ đang dùng được khớp “Golden Lotus”</div>Có <b>1 dịch vụ khớp đang bị ẩn</b> vì ngừng sử dụng hoặc hợp đồng hết hạn. Bật “Gồm cả ngừng sử dụng, hết hạn” ở thanh lọc để xem.</div></div>` }) });

// ---------- W14 Lỗi tải danh sách ----------
S.W14 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: title() + pbar({ on: true }) + toolbar() + `<div class="card" style="margin-top:10px"><div class="empty"><div class="big"><span class="ico e">!</span> Không tải được danh sách dịch vụ</div>Kết nối tới máy chủ bị gián đoạn. Ngày sử dụng, số khách và bộ lọc của bạn được giữ nguyên.<div style="margin-top:12px">${B('Thử lại', 'p')}</div></div></div>` });

// ---------- W15 Bảng trượt: dữ liệu vừa đổi ở phiên khác ----------
S.W15 = page({ nav: NAV, crumb: 'Dịch vụ & bảng giá', css: CSS, body: list({ pb: { on: true }, t: { mode: 'ap', sel: 'harDlx' } }), overlay: dh05({ hit: true, stale: true }) });

module.exports = S;
