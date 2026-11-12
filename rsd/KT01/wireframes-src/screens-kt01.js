// Wireframe KT01 · Công nợ và thu chi. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
// Hôm nay 12/11/2026. Kế toán Phạm Ngọc Lan. Ảnh của mỗi luồng thể hiện dữ liệu lúc bắt đầu luồng đó;
// W01, W17, W24 là đầu ngày 12/11/2026 (trước mọi thao tác trong RSD).
// Dữ liệu khớp RSD KD07, KD08 (BK-2610-0137 Müller 11.526 + 26.894 = 38.420 EUR; BK-2611-0140 Dupont 21.150 EUR hủy 12/11;
// BK-2611-0144 Tanaka 864.000 + 2.016.000 = 2.880.000 JPY, đợt 2 hạn 07/11; BK-2611-0158 50.750 EUR; BK-2610-0129 Nordic 27.200 USD).
const { page, B, bd, modal, drawer, f } = require('./lib');
const S = {};
const NAM = 'Nguyễn Hoàng Nam', HA = 'Lê Thu Hà';
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const P = o => page(Object.assign({ crumb: 'Công nợ và thu chi', mod: 'Kế toán', side: 'Công nợ & thu chi', user: 'kt' }, o));
const banner = (cls, ico, html, right = '', st = 'margin-top:10px') => `<div class="banner ${cls}" style="${st}"><span class="ico ${ico}">${ico === 'ok' ? '✓' : ico === 'i' ? 'i' : '!'}</span><div style="flex:1">${html}</div>${right ? `<span class="flex">${right}</span>` : ''}</div>`;
const xl = h => h.replace('<div class="drawer wide">', '<div class="drawer xl">');
const toast = (t) => `<div class="toast" style="bottom:66px">${t}</div>`;
// ---------- Quy đổi ≈ VND (tham khảo, không lưu) ----------
const TODAY_RATE = { EUR: 27480, USD: 25400, JPY: 168, AUD: 16650, GBP: 32900 };
const DATE_RATE = { "21/10/2026": { EUR: 27350 }, "22/10/2026": { JPY: 171 }, "24/10/2026": { USD: 25300 }, "12/11/2026": TODAY_RATE };
const fmt = n => (n < 0 ? "−" : "") + Math.round(Math.abs(n)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const AMT = /(−?)([\d.]+(?:,\d+)?) (EUR|USD|JPY|AUD|GBP|₫)/g;
const amts = h => [...String(h).replace(/<[^>]+>/g, "").matchAll(AMT)].map(m => ({ v: (m[1] ? -1 : 1) * parseFloat(m[2].replace(/\./g, "").replace(",", ".")), c: m[3] }));
// ≈ VND của một ô; "" nếu chỉ có ₫ hoặc không có số
const vnd = (h, rate = TODAY_RATE) => { const a = amts(h); if (!a.length || a.every(x => x.c === "₫" || x.v === 0)) return ""; let t = 0; for (const x of a) t += x.c === "₫" ? x.v : x.v * rate[x.c]; return fmt(t); };
const vcell = (h, rate) => { let v = vnd(h, rate); if (v === "0") v = ""; return `<td class="num muted small">${v ? "≈ " + v : ""}</td>`; };
// Dòng ≈ VND cho thẻ phần đầu: dòng bắt đầu Thu/Trả thì quy đổi riêng từng dòng
const kpiVnd = h => { const L = String(h).split("<br>"); if (L.length > 1 && L.every(l => /^(Thu|Trả)/.test(l.trim()))) { const p = L.map(l => { const v = vnd(l); return v ? l.trim().split(" ")[0] + " ≈ " + v + " ₫" : ""; }).filter(Boolean); return p.join(" · "); } const v = vnd(L.filter(l => !/Booking chờ/.test(l)).join(" · ")); return v ? "≈ " + v + " ₫" : ""; };
const sec = t => `<div class="sec">${t}</div>`;

// ---------- Tình trạng ----------
const ST = {
  'Quá hạn': 'b-red', 'Đến hạn': 'b-amber', 'Còn hạn': 'b-blue', 'Đã tất toán': 'b-green', 'Đã thu đủ': 'b-green', 'Đã trả đủ': 'b-green',
  'Chờ điều chỉnh': 'b-cyan', 'Cần hoàn': 'b-violet', 'Phải nhận hoàn': 'b-violet', 'Hết hiệu lực': 'b-gray', 'Đã hủy': 'b-gray',
};
const st = (t, extra = '') => `${bd(t, ST[t] || 'b-gray')}${extra ? ` <span class="small muted">${extra}</span>` : ''}`;

// ---------- Phần đầu ----------
const kpi = (label, lines, cls = '') => { const v = kpiVnd(lines); return `<div style="flex:1;border:1px solid #e5e7eb;border-radius:8px;padding:6px 10px;background:${cls === 'r' ? '#fef2f2' : cls === 'a' ? '#fffbeb' : cls === 'v' ? '#f5f3ff' : '#fff'}"><div class="muted small">${label}</div><div style="font-weight:700;font-size:13px;line-height:1.35">${lines}</div>${v ? `<div class="small muted" style="margin-top:2px">${v}</div>` : ''}</div>`; };
const TABS = [['Phải thu khách hàng', 1], ['Phải trả nhà cung cấp', 2], ['Công nợ theo Tour', 3]];
function HDR(tab, kpis, o = {}) {
  const c = Object.assign({ 1: '<span class="cnt r">3</span>', 2: '<span class="cnt w">6</span>', 3: '<span class="cnt w">1</span>' }, o.cnt || {});
  const act = o.act !== undefined ? o.act : B(o.btn || 'Ghi giao dịch', 'p');
  return `<div class="hdr"><div class="r1"><span class="code">Công nợ và thu chi</span><span class="muted small">${o.scope || 'Sổ công nợ dùng chung · số tiền theo loại tiền gốc · ≈ VND theo tỷ giá 12/11/2026, chỉ để tham khảo'}</span><div class="actions">${act}</div></div>
<div class="flex" style="margin-top:8px;align-items:stretch">${kpis}</div>
<div class="tabs">${TABS.map(([n, k]) => `<div class="tab ${k === tab ? 'on' : ''}">${n} ${c[k] || ''}</div>`).join('')}</div></div>`;
}
const chips = (arr, on) => arr.map(([n, c, cls]) => `<span class="chip ${n === on ? 'on' : ''}">${n} <span class="cnt ${cls || ''}">${c}</span></span>`).join('');
const toolbar = (chipHtml, filters) => `<div class="toolbar" style="flex-wrap:wrap">${chipHtml}<span class="ml"></span>${filters}</div>`;
const flt = (t, w = 130) => `<span class="input sel" style="width:${w}px;height:28px;font-size:12px">${t}</span>`;
const search = (t = 'Tìm Booking, khách, Tour Code', w = 230) => `<span class="input ph" style="width:${w}px;height:28px;font-size:12px">🔍 ${t}</span>`;

// =====================================================================
// KT01.1 · Phải thu khách hàng
// =====================================================================
const K1 = {
  all: kpi('Còn phải thu', '77.644 EUR · 33.000 AUD · 2.016.000 JPY<br>1.250 GBP · 210.000.000 ₫') +
    kpi('Đến hạn trong 7 ngày · 2 đợt', '26.894 EUR · 63.000.000 ₫', 'a') + kpi('Quá hạn · 1 đợt', '2.016.000 JPY', 'r') +
    kpi('Cần hoàn · chờ điều chỉnh', '2.400 USD cần hoàn<br><span class="small" style="font-weight:600">1 Booking chờ điều chỉnh</span>', 'v'),
  adj: kpi('Còn phải thu', '93.506,50 EUR · 33.000 AUD · 2.016.000 JPY<br>1.250 GBP · 210.000.000 ₫') +
    kpi('Đến hạn trong 7 ngày · 2 đợt', '26.894 EUR · 63.000.000 ₫', 'a') + kpi('Quá hạn · 1 đợt', '2.016.000 JPY', 'r') +
    kpi('Cần hoàn · chờ điều chỉnh', '2.400 USD cần hoàn<br><span class="small" style="font-weight:600">0 Booking chờ điều chỉnh</span>', 'v'),
  kd: kpi('Còn phải thu', '77.644 EUR · 2.016.000 JPY') + kpi('Đến hạn trong 7 ngày · 1 đợt', '26.894 EUR', 'a') + kpi('Quá hạn · 1 đợt', '2.016.000 JPY', 'r') +
    kpi('Cần hoàn · chờ điều chỉnh', '0<br><span class="small" style="font-weight:600">1 Booking chờ điều chỉnh</span>', 'v'),
};
// [mã, khách, Tour Code, giá trị, đã thu, còn, đợt tiếp, tình trạng html, phụ trách, cls]
const R1 = {
  tan: ['BK-2611-0144', 'Tanaka Travel Co.', 'TP-2611-0051', '2.880.000 JPY', '864.000 JPY', '2.016.000 JPY', 'Đợt 2 · 2.016.000 JPY · <b style="color:#b91c1c">07/11/2026</b>', st('Quá hạn', '5 ngày'), NAM, 'bad'],
  dup: ['BK-2611-0140', 'Dupont Voyages', 'TP-2611-0047', '21.150 EUR', '0 EUR', '<span class="muted">Chờ điều chỉnh</span>', 'Đã hủy 12/11 · chưa ghi điều chỉnh', st('Chờ điều chỉnh'), NAM, ''],
  sak: ['BK-2610-0125', 'Sakura Travel Co., Ltd', 'TP-2701-0004', '12.000 USD', '3.600 USD', '<b style="color:#5b21b6">Cần hoàn 2.400 USD</b>', 'Đã hủy 05/11 · điều chỉnh 06/11', st('Cần hoàn'), HA, ''],
  mul: ['BK-2610-0137', 'Müller Reisen GmbH', 'TP-2611-0042', '38.420 EUR', '11.526 EUR', '26.894 EUR', 'Đợt 2 · 26.894 EUR · 13/11/2026', st('Đến hạn', 'còn 1 ngày'), NAM, 'hot'],
  alm: ['BK-2611-0151', 'Almeida Viagens', 'TP-2702-0003', '210.000.000 ₫', '0 ₫', '210.000.000 ₫', 'Đợt 1 · 63.000.000 ₫ · 18/11/2026', st('Đến hạn', 'còn 6 ngày'), HA, 'hot'],
  m58: ['BK-2611-0158', 'Müller Reisen GmbH', 'TP-2703-0001', '50.750 EUR', '0 EUR', '50.750 EUR', 'Đợt 1 · 15.225 EUR · 25/11/2026', st('Còn hạn'), NAM, ''],
  kan: ['BK-2611-0156', 'Kangaroo Trails Pty Ltd', 'TP-2703-0002', '33.000 AUD', '0 AUD', '33.000 AUD', 'Đợt 1 · 9.900 AUD · 26/11/2026', st('Còn hạn'), HA, ''],
  lot: ['BK-2609-0105', 'Lotus Journeys Ltd', 'TP-2610-0027', '22.400 GBP', '22.400 GBP', '1.250 GBP', 'Phát sinh · 1.250 GBP · 20/11/2026', st('Còn hạn'), HA, ''],
  nor: ['BK-2610-0129', 'Nordic Explorer AB', 'TP-2611-0038', '27.200 USD', '27.200 USD', '0 USD', '—', st('Đã tất toán'), NAM, ''],
  han: ['BK-2609-0112', 'Hanse Reisen KG', 'TP-2610-0031', '18.600 EUR', '18.600 EUR', '0 EUR', '—', st('Đã tất toán'), HA, ''],
};
const tbl1 = (rows, o = {}) => !rows.length ? (o.empty || "") : `<div class="tbl"><table><tr><th>Booking</th><th>Khách</th><th>Hồ sơ Tour</th><th class="num">Giá trị</th><th class="num">Đã thu</th><th class="num">Còn phải thu</th><th class="num">≈ VND</th><th>Cần thu tiếp</th><th>Tình trạng</th><th>Phụ trách</th></tr>
${rows.map(k => { const r = R1[k]; return `<tr class="${o.sel === k ? 'sel' : r[9]}"><td class="b" style="white-space:nowrap">${r[0]}</td><td>${r[1]}</td><td class="${r[2].startsWith('TP') ? 'lnk' : 'muted'}" style="white-space:nowrap">${r[2]}</td><td class="num">${r[3]}</td><td class="num">${r[4]}</td><td class="num">${r[5]}</td>${/Chờ điều chỉnh/.test(r[5]) ? '<td class="num muted">—</td>' : vcell(r[5])}<td class="small">${r[6]}</td><td>${r[7]}</td><td class="small" style="white-space:nowrap">${r[8]}</td></tr>`; }).join('')}</table></div>
<div class="muted small" style="margin-top:6px">${o.foot || 'Bấm dòng để xem lịch thanh toán, khoản đã thu và ghi giao dịch · 20 dòng mỗi trang'}</div>`;
const ALL1 = ['tan', 'dup', 'sak', 'mul', 'alm', 'm58', 'kan', 'lot', 'nor', 'han'];
const CH1 = [['Tất cả', 10], ['Quá hạn', 1, 'r'], ['Chờ điều chỉnh', 1], ['Cần hoàn', 1], ['Đến hạn', 2, 'w'], ['Còn hạn', 3], ['Đã tất toán', 2]];
const tool1 = (on = 'Tất cả', ch = CH1) => toolbar(chips(ch, on), search('Tìm Booking, khách, Tour Code', 200) + flt('Khách: Tất cả', 115) + flt('Loại tiền: Tất cả', 125));
const list1 = (o = {}) => HDR(1, o.kpis || K1.all, o.h || {}) + (o.pre || '') + tool1(o.on, o.ch) + tbl1(o.rows || ALL1, o);

S.W01 = P({ body: list1() });

// ---------- Bảng trượt Booking ----------
const payRows = (rows, tot) => `<div class="tbl"><table><tr><th>Đợt</th><th>Điều khoản</th><th>Hạn</th><th class="num">Phải thu</th><th class="num">Đã thu</th><th class="num">Còn phải thu</th><th>Tình trạng</th></tr>
${rows.map(r => `<tr class="${r[7] || ''}"><td class="b">${r[0]}</td><td class="small">${r[1]}</td><td>${r[2]}</td><td class="num">${r[3]}</td><td class="num">${r[4]}</td><td class="num">${r[5]}</td><td>${r[6]}</td></tr>`).join('')}
${tot ? `<tr class="grp"><td colspan="3">Tổng</td><td class="num">${tot[0]}</td><td class="num">${tot[1]}</td><td class="num">${tot[2]}</td><td>${tot[3] || ''}</td></tr>` : ''}</table></div>`;
const gdRows = (rows) => `<div class="tbl"><table><tr><th>Mã</th><th>Ngày</th><th>Loại</th><th class="num">Số tiền</th><th class="num">≈ VND · ngày GD</th><th>Phân bổ</th><th>Chứng từ</th><th>Người ghi</th><th></th></tr>
${rows.map(r => `<tr class="${r[8] || ''}"><td class="b" style="${r[8] === 'dim' ? 'text-decoration:line-through' : ''}">${r[0]}</td><td>${r[1]}</td><td class="small">${r[2]}</td><td class="num" style="${r[8] === 'dim' ? 'text-decoration:line-through' : ''}">${r[3]}</td>${vcell(r[3], DATE_RATE[r[1]] || TODAY_RATE)}<td class="small">${r[4]}</td><td class="small">${r[5]}</td><td class="small muted">${r[6]}</td><td>${r[7]}</td></tr>`).join('')}</table></div>`;
const bkSub = (tc, d, pt) => `${tc ? `Hồ sơ Tour <b class="lnk">${tc}</b> · ` : ''}${d} · phụ trách ${pt} · <span class="lnk">Mở Booking (KD08.2) ↗</span>`;
const policyLine = (t) => `<div class="muted small" style="margin-top:6px">${t}</div>`;

const MUL_PAY0 = [['Đợt 1', 'Đặt cọc 30% khi xác nhận', '20/10/2026', '11.526 EUR', '11.526 EUR', '0 EUR', st('Đã thu đủ')], ['Đợt 2', '70% còn lại trước khởi hành 5 ngày', '13/11/2026', '26.894 EUR', '0 EUR', '26.894 EUR', st('Đến hạn', 'còn 1 ngày'), 'hot']];
const GD_MUL1 = ['GD-2610-0088', '21/10/2026', 'Thu từ khách', '11.526 EUR', 'Đợt 1', 'UNC 2110-MR · 📎', 'Phạm Ngọc Lan', B('⋯', 'sm')];
const mulDrawer = (pay, tot, gds, foot, pre = '') => drawer('BK-2610-0137 · Müller Reisen GmbH',
  pre + sec('Lịch thanh toán · từ KD08.2') + payRows(pay, tot) + policyLine('Điều khoản: Đặt cọc 30% khi xác nhận; 70% còn lại trước khởi hành 5 ngày · Chính sách hoàn hủy: Chuẩn 2026, chụp vào Booking 12/10/2026') +
  sec('Giao dịch') + gdRows(gds), foot, { wide: true, sub: bkSub('TP-2611-0042', 'khởi hành 18/11/2026', NAM) });

S.W02 = P({ body: list1({ sel: 'mul' }), overlay: mulDrawer(MUL_PAY0, ['38.420 EUR', '11.526 EUR', '26.894 EUR'], [GD_MUL1], B('Đóng') + B('Ghi khoản thu', 'p')) });

// ---------- Hộp thoại Ghi giao dịch ----------
const typeSeg = (on, lock) => `<div class="field"><label>Loại giao dịch <span class="req">*</span>${lock ? '<span class="auto">Tự điền</span>' : ''}</label><div class="flex" style="flex-wrap:wrap">${['Thu từ khách', 'Hoàn cho khách', 'Chi trả NCC', 'Nhận hoàn từ NCC'].map(t => `<span class="chip ${t === on ? 'on' : ''}" style="${lock && t !== on ? 'opacity:.45' : ''}">${t}</span>`).join('')}</div></div>`;
const allocTbl = (rows, foot) => `<div class="field"><label>Phân bổ <span class="auto">Tự phân bổ · sửa được</span></label><div class="tbl"><table><tr><th>Khoản</th><th>Hạn</th><th class="num">Còn</th><th class="num">Phân bổ</th></tr>
${rows.map(r => `<tr class="${r[4] || ''}"><td>${r[0]}</td><td>${r[1]}</td><td class="num">${r[2]}</td><td class="num">${r[3]}</td></tr>`).join('')}</table></div>${foot || ''}</div>`;
const ain = (v, cls = '') => `<span class="input ${cls}" style="height:24px;width:120px;display:inline-flex;justify-content:flex-end">${v}</span>`;

const thuMul = (o = {}) => modal('Ghi giao dịch', `${typeSeg('Thu từ khách', true)}
<div class="f2">${f('Booking', 'BK-2610-0137 · Müller Reisen GmbH', { cls: 'ro', auto: 'Tự điền' })}${f('Ngày giao dịch', '12/11/2026', { req: 1, auto: 'Hôm nay' })}</div>
<div class="f3">${f('Số tiền', '26.894', { req: 1, auto: 'Còn phải thu', cls: 'focus' })}${f('Loại tiền', 'EUR 🔒', { cls: 'ro', hint: 'Theo Booking' })}${f('Phương thức', 'Chuyển khoản', { cls: 'sel', req: 1 })}</div>
<div class="f2">${f('Số chứng từ', 'UNC 1211-MR', { req: 1 })}<div class="field"><label>Tệp chứng từ</label><div class="file" style="margin:0">📎 Bao_co_VCB_1211.pdf <span class="muted">· 180 KB</span></div></div></div>
${allocTbl([['Đợt 2 · 70% còn lại', '13/11/2026', '26.894 EUR', ain('26.894')]])}
<div class="hint">Sau khi lưu: Đợt 2 đã thu đủ, Booking đã tất toán. Số đã thu ở KD07, KD08 và phần đầu DH08 cập nhật ngay.</div>`, B('Hủy') + B('Lưu giao dịch', 'p'), 620);
S.W03 = P({ body: list1({ sel: 'mul' }), overlay: thuMul() });

const MUL_PAY1 = [['Đợt 1', 'Đặt cọc 30% khi xác nhận', '20/10/2026', '11.526 EUR', '11.526 EUR', '0 EUR', st('Đã thu đủ')], ['Đợt 2', '70% còn lại trước khởi hành 5 ngày', '13/11/2026', '26.894 EUR', '26.894 EUR', '0 EUR', st('Đã thu đủ'), 'new']];
const GD_MUL2 = ['GD-2611-0123', '12/11/2026', 'Thu từ khách', '26.894 EUR', 'Đợt 2', 'UNC 1211-MR · 📎', 'Phạm Ngọc Lan', B('⋯', 'sm'), 'new'];
S.W04 = P({ body: list1({ sel: 'mul' }), overlay: mulDrawer(MUL_PAY1, ['38.420 EUR', '38.420 EUR', `0 EUR`, st('Đã tất toán')], [GD_MUL2, GD_MUL1], B('Đóng') + B('Ghi khoản thu', 'p')) + toast('Đã ghi GD-2611-0123 · 26.894 EUR · BK-2610-0137 đã tất toán') });

// ---------- Thu thừa (Tanaka) ----------
const thuTan = modal('Ghi giao dịch', `${typeSeg('Thu từ khách', true)}
<div class="f2">${f('Booking', 'BK-2611-0144 · Tanaka Travel Co.', { cls: 'ro', auto: 'Tự điền' })}${f('Ngày giao dịch', '12/11/2026', { req: 1, auto: 'Hôm nay' })}</div>
<div class="f3">${f('Số tiền', '2.100.000', { req: 1, cls: 'focus' })}${f('Loại tiền', 'JPY 🔒', { cls: 'ro', hint: 'Theo Booking' })}${f('Phương thức', 'Chuyển khoản', { cls: 'sel', req: 1 })}</div>
<div class="f2">${f('Số chứng từ', 'UNC 1211-TT', { req: 1 })}<div class="field"><label>Tệp chứng từ</label><div class="file" style="margin:0">📎 Credit_advice_MUFG.pdf</div></div></div>
${allocTbl([['Đợt 2 · 70% còn lại', '07/11/2026', '2.016.000 JPY', ain('2.016.000')], ['<b>Tiền thừa của Booking</b>', '—', '—', '<b>84.000</b>', 'hot']],
  banner('w', 'w', 'Số tiền vượt tổng còn phải thu <b>84.000 JPY</b>. Phần vượt được giữ thành <b>Tiền thừa</b> của Booking: hoàn cho khách, hoặc dùng cho đợt mới khi Kinh doanh tăng lịch thanh toán.', '', 'margin-top:6px'))}`, B('Hủy') + B('Lưu giao dịch', 'p'), 640);
S.W05 = P({ body: list1({ sel: 'tan' }), overlay: thuTan });

const TAN_PAY = [['Đợt 1', 'Đặt cọc 30% khi xác nhận', '20/10/2026', '864.000 JPY', '864.000 JPY', '0 JPY', st('Đã thu đủ')], ['Đợt 2', '70% còn lại trước khởi hành 7 ngày', '07/11/2026', '2.016.000 JPY', '2.016.000 JPY', '0 JPY', st('Đã thu đủ'), 'new']];
S.W06 = P({
  body: list1({ sel: 'tan' }), overlay: drawer('BK-2611-0144 · Tanaka Travel Co.',
    sec('Lịch thanh toán · từ KD08.2') + payRows(TAN_PAY, ['2.880.000 JPY', '2.880.000 JPY', '0 JPY', st('Đã tất toán')]) +
    `<div class="banner i" style="margin-top:10px"><span class="ico i">i</span><div style="flex:1"><b>Tiền thừa 84.000 JPY</b> từ GD-2611-0124. Hoàn cho khách khi đã thống nhất, hoặc để lại: khi Kinh doanh thêm đợt ở KD08.2, Ghi khoản thu sẽ gợi ý dùng tiền thừa cho đợt đó.</div>${B('Ghi hoàn tiền thừa', 'sm')}</div>` +
    sec('Giao dịch') + gdRows([['GD-2611-0124', '12/11/2026', 'Thu từ khách', '2.100.000 JPY', 'Đợt 2 · 2.016.000<br>Tiền thừa · 84.000', 'UNC 1211-TT · 📎', 'Phạm Ngọc Lan', B('⋯', 'sm'), 'new'], ['GD-2610-0091', '22/10/2026', 'Thu từ khách', '864.000 JPY', 'Đợt 1', 'UNC 2210-TT · 📎', 'Phạm Ngọc Lan', B('⋯', 'sm')]]),
    B('Đóng') + B('Ghi khoản thu', 'dis') + '<span class="muted small">Không còn khoản phải thu</span>', { wide: true, sub: bkSub('TP-2611-0051', 'khởi hành 14/11/2026', NAM) }) + toast('Đã ghi GD-2611-0124 · Booking đã tất toán, tiền thừa 84.000 JPY'),
});

// ---------- Chờ điều chỉnh (Dupont) ----------
const CH1_ADJ = CH1;
const polTbl = (hit) => `<div class="tbl"><table><tr><th>Hủy trước ngày khởi hành</th><th class="num">Giữ lại</th></tr>
${[['Từ 45 ngày', '10%'], ['30 – 44 ngày', '25%'], ['15 – 29 ngày', '50%'], ['7 – 14 ngày', '75%'], ['Dưới 7 ngày hoặc không đến', '100%']].map((r, i) => `<tr class="${i === hit ? 'sel' : ''}"><td>${r[0]}${i === hit ? ' <span class="ind b">Áp dụng · 8 ngày</span>' : ''}</td><td class="num">${r[1]}</td></tr>`).join('')}</table></div>`;
const dupForm = (o = {}) => drawer('BK-2611-0140 · Dupont Voyages · Điều chỉnh sau hủy',
  `<div class="banner w" style="margin-bottom:8px"><span class="ico w">!</span><div>Booking <b>Đã hủy</b> lúc 12/11/2026 11:05 bởi ${NAM} · Lý do: Khách hoãn hoặc đổi thời gian · Khởi hành dự kiến 20/11/2026. Các đợt chưa thu tạm dừng tính hạn cho tới khi ghi điều chỉnh.</div></div>
<div class="grid" style="grid-template-columns:1fr 1.15fr;gap:14px;align-items:start"><div>
${sec('Chính sách hoàn hủy · chụp vào Booking 01/11/2026')}<div class="small" style="margin-bottom:4px">Chính sách chuẩn 2026 (QT05) · tính theo số ngày từ ngày hủy tới ngày khởi hành</div>${polTbl(3)}
${sec('Trước khi hủy')}${payRows([['Đợt 1', 'Đặt cọc 30%', '18/11/2026', '6.345 EUR', '0 EUR', '6.345 EUR', st('Hết hiệu lực')], ['Đợt 2', '70% còn lại', '13/11/2026', '14.805 EUR', '0 EUR', '14.805 EUR', st('Hết hiệu lực')]])}</div>
<div>${sec('Điều chỉnh nghĩa vụ')}
<div class="f2">${f('Giá trị Booking', '21.150 EUR', { cls: 'ro' })}${f('Số ngày trước khởi hành', '8 ngày', { cls: 'ro', hint: '12/11 → 20/11/2026' })}</div>
${f('Phí giữ lại', o.fee || '15.862,50 EUR', { req: 1, auto: o.edited ? 'Đã sửa' : 'Theo chính sách · 75%', cls: o.edited ? 'focus' : '', hint: o.edited ? 'Theo chính sách 15.862,50 EUR · chênh −5.287,50 EUR' : 'Sửa được; khác chính sách thì bắt buộc nhập lý do' })}
${o.edited ? f('Lý do khác chính sách', 'Đại lý thân thiết, Giám đốc duyệt giảm còn 50% (email 12/11/2026)', { req: 1, cls: 'area' }) : ''}
<div class="card" style="background:#f8fafc;padding:8px 12px;margin-bottom:9px"><div class="flex small"><span>Đã thu</span><span class="ml num">0 EUR</span></div><div class="flex small"><span>Phí giữ lại</span><span class="ml num">${o.fee || '15.862,50 EUR'}</span></div><div class="sep" style="margin:5px 0"></div><div class="flex"><b>Kết quả</b><span class="ml"><b>Còn phải thu ${o.fee || '15.862,50 EUR'}</b></span></div></div>
<div class="f2">${f('Hạn thu khoản còn phải thu', '26/11/2026', { req: 1, auto: 'Hôm nay + 14 ngày' })}${f('Ghi chú', 'Đã gửi đại lý thông báo phí hủy', {})}</div></div></div>`,
  B('Đóng') + B('Lưu điều chỉnh', 'p'), { wide: true, sub: bkSub('TP-2611-0047', 'đã hủy', NAM) });
S.W07 = P({ body: list1({ on: 'Chờ điều chỉnh', rows: ['dup'], sel: 'dup', foot: '1 Booking đã hủy chưa ghi điều chỉnh' }), overlay: xl(dupForm()) });
S.W07a = P({ body: list1({ on: 'Chờ điều chỉnh', rows: ['dup'], sel: 'dup', foot: '1 Booking đã hủy chưa ghi điều chỉnh' }), overlay: xl(dupForm({ edited: 1, fee: '10.575 EUR' })) });

S.W08 = P({
  body: list1({ on: 'Chờ điều chỉnh', rows: [], ch: [['Tất cả', 10], ['Quá hạn', 1, 'r'], ['Chờ điều chỉnh', 0], ['Cần hoàn', 1], ['Đến hạn', 2, 'w'], ['Còn hạn', 4], ['Đã tất toán', 2]], kpis: K1.adj, empty: `<div class="empty" style="padding:40px"><div class="big">Không còn Booking chờ điều chỉnh</div>BK-2611-0140 vừa được ghi điều chỉnh. <span class="lnk">Xem ở chip Còn hạn</span></div>` }),
  overlay: drawer('BK-2611-0140 · Dupont Voyages',
    `<div class="banner s" style="margin-bottom:8px"><span class="ico ok">✓</span><div>Đã ghi điều chỉnh sau hủy lúc 12/11/2026 14:20 · Phạm Ngọc Lan · phí giữ lại 15.862,50 EUR theo chính sách (75%, hủy trước 8 ngày).</div></div>` +
    sec('Khoản phải thu') + payRows([['Phí hủy', 'Phí giữ lại theo chính sách hoàn hủy', '26/11/2026', '15.862,50 EUR', '0 EUR', '15.862,50 EUR', st('Còn hạn'), 'new'], ['<s>Đợt 1</s>', '<s>Đặt cọc 30%</s>', '18/11/2026', '<s>6.345 EUR</s>', '0 EUR', '—', st('Hết hiệu lực')], ['<s>Đợt 2</s>', '<s>70% còn lại</s>', '13/11/2026', '<s>14.805 EUR</s>', '0 EUR', '—', st('Hết hiệu lực')]], ['15.862,50 EUR', '0 EUR', '15.862,50 EUR']) +
    sec('Lịch sử') + `<div class="small">12/11 14:20 · Phạm Ngọc Lan · Ghi điều chỉnh: phí giữ lại 15.862,50 EUR (theo chính sách), kết quả Còn phải thu 15.862,50 EUR · ghi chú: Đã gửi đại lý thông báo phí hủy</div><div class="small muted">12/11 11:05 · ${NAM} · Hủy Booking ở KD08.1</div>` + sec('Giao dịch') + '<div class="muted small">Chưa có giao dịch.</div>',
    B('Sửa điều chỉnh') + B('Ghi khoản thu', 'p'), { wide: true, sub: bkSub('TP-2611-0047', 'đã hủy', NAM) }) + toast('Đã ghi điều chỉnh · KD07, KD08 hiện Đã điều chỉnh · Còn phải thu 15.862,50 EUR'),
});

// ---------- Cần hoàn (Sakura) ----------
const sakDrawer = (foot) => drawer('BK-2610-0125 · Sakura Travel Co., Ltd',
  sec('Khoản phải thu') + payRows([['Phí hủy', 'Phí giữ lại · hủy trước 76 ngày · 10%', '13/11/2026', '1.200 USD', '1.200 USD', '0 USD', st('Đã thu đủ')], ['<s>Đợt 1</s>', '<s>Đặt cọc 30%</s>', '25/10/2026', '<s>3.600 USD</s>', '—', '—', st('Hết hiệu lực')], ['<s>Đợt 2</s>', '<s>70% còn lại</s>', '20/12/2026', '<s>8.400 USD</s>', '—', '—', st('Hết hiệu lực')]], ['1.200 USD', '3.600 USD', '−2.400 USD']) +
  `<div class="banner" style="margin-top:10px;background:#f5f3ff;border:1px solid #c4b5fd;color:#4c1d95"><span class="ico" style="background:#ede9fe;color:#5b21b6">↩</span><div style="flex:1"><b>Cần hoàn 2.400 USD</b> = đã thu 3.600 USD − phí giữ lại 1.200 USD · điều chỉnh 06/11/2026 bởi Phạm Ngọc Lan.</div></div>` +
  sec('Giao dịch') + gdRows([['GD-2610-0079', '24/10/2026', 'Thu từ khách', '3.600 USD', 'Đợt 1 → Phí hủy 1.200<br>Cần hoàn 2.400', 'UNC 2410-SK · 📎', 'Phạm Ngọc Lan', B('⋯', 'sm')]]),
  foot, { wide: true, sub: bkSub('TP-2701-0004', 'đã hủy 05/11/2026 · khởi hành dự kiến 20/01/2027', HA) });
S.W09 = P({ body: list1({ on: 'Cần hoàn', rows: ['sak'], sel: 'sak', foot: 'Cần hoàn là bộ lọc việc, không phải tình trạng: Booking cần hoàn sau điều chỉnh hủy hoặc có tiền thừa chưa xử lý · 1 Booking' }), overlay: sakDrawer(B('Đóng') + B('Ghi hoàn tiền cho khách', 'p')) });

S.W10 = P({
  body: list1({ on: 'Cần hoàn', rows: ['sak'], sel: 'sak', foot: '' }),
  overlay: modal('Ghi giao dịch', `${typeSeg('Hoàn cho khách', true)}
<div class="f2">${f('Booking', 'BK-2610-0125 · Sakura Travel Co., Ltd', { cls: 'ro', auto: 'Tự điền' })}${f('Ngày giao dịch', '12/11/2026', { req: 1, auto: 'Hôm nay' })}</div>
<div class="f3">${f('Số tiền', '2.400', { req: 1, auto: 'Số cần hoàn', cls: 'focus', hint: 'Tối đa 2.400 USD' })}${f('Loại tiền', 'USD 🔒', { cls: 'ro' })}${f('Phương thức', 'Chuyển khoản', { cls: 'sel', req: 1 })}</div>
${f('Tài khoản nhận hoàn của khách', 'Sakura Travel Co., Ltd · MUFG Bank Tokyo · 0012-345678', { req: 1, hint: 'Lấy theo lần nhận tiền gần nhất; sửa được' })}
<div class="f2">${f('Số chứng từ', 'UNC 1211-SK-H', { req: 1 })}<div class="field"><label>Tệp chứng từ <span class="req">*</span></label><div class="file" style="margin:0">📎 UNC_hoan_Sakura.pdf <span class="muted">· 210 KB</span></div></div></div>
<div class="hint">Sau khi lưu: Cần hoàn về 0, Booking đã tất toán. Hệ thống không chuyển tiền và không gửi email cho khách.</div>`, B('Hủy') + B('Lưu giao dịch', 'p'), 620),
});

// ---------- Hủy giao dịch ----------
S.W11 = P({
  body: list1({ sel: 'mul' }),
  overlay: mulDrawer(MUL_PAY1, ['38.420 EUR', '38.420 EUR', '0 EUR', st('Đã tất toán')], [GD_MUL2, GD_MUL1], B('Đóng') + B('Ghi khoản thu', 'p')).replace('<div class="drawer wide">', '<div class="drawer wide" style="filter:brightness(.6)">') +
    modal('Hủy giao dịch GD-2611-0123?', `<div class="small" style="margin-bottom:8px">Thu từ khách · 26.894 EUR · 12/11/2026 · Đợt 2 · UNC 1211-MR · ghi bởi Phạm Ngọc Lan</div>
<ul class="small" style="margin:0 0 10px;padding-left:18px;line-height:1.6"><li>Giao dịch giữ trong lịch sử, gạch ngang, không còn tính vào số đã thu.</li><li>Đợt 2 trở lại còn phải thu <b>26.894 EUR</b>; Booking không còn tất toán.</li><li>Số tiền, ngày, phân bổ không sửa được: muốn sửa thì hủy rồi ghi giao dịch đúng.</li></ul>
${f('Lý do hủy', 'Ghi nhầm số tiền: báo có thực nhận 26.849 EUR (phí ngân hàng 45 EUR)', { req: 1, cls: 'area focus' })}`, B('Không hủy') + B('Hủy giao dịch', 'dp'), 560),
});
S.W12 = P({
  body: list1({ sel: 'mul' }),
  overlay: mulDrawer(MUL_PAY0, ['38.420 EUR', '11.526 EUR', '26.894 EUR'],
    [['GD-2611-0123', '12/11/2026', 'Thu từ khách', '26.894 EUR', 'Đợt 2', `${bd('Đã hủy', 'b-gray')} <span class="small">12/11 15:02 · Ghi nhầm số tiền…</span>`, 'Phạm Ngọc Lan', '', 'dim'], GD_MUL1],
    B('Đóng') + B('Ghi khoản thu', 'p')) + `<div class="toast" style="bottom:66px">Đã hủy GD-2611-0123 · Đợt 2 còn phải thu 26.894 EUR <a>Ghi khoản thu</a></div>`,
});

// ---------- Ghi giao dịch từ phần đầu (không ngữ cảnh) ----------
S.W13 = P({
  body: list1(),
  overlay: modal('Ghi giao dịch', `${typeSeg('Thu từ khách')}
<div class="field" style="position:relative"><label>Booking <span class="req">*</span></label><div class="input focus">🔍 Almeida<span class="muted" style="margin-left:6px">|</span></div>
<div class="menu" style="left:0;right:0;top:52px"><div class="mh2">Booking khớp · có còn phải thu</div>
<div class="mi on"><b>BK-2611-0151</b> · Almeida Viagens<span class="ml small muted">còn 210.000.000 ₫ · Đợt 1 hạn 18/11</span></div>
<div class="mi"><b>BK-2608-0094</b> · Almeida Viagens<span class="ml small muted">Đã tất toán</span></div></div></div>
<div style="height:70px"></div>
<div class="f3" style="opacity:.5">${f('Ngày giao dịch', '12/11/2026', {})}${f('Số tiền', '', {})}${f('Loại tiền', '—', { cls: 'ro' })}</div>
<div class="hint">Chọn loại giao dịch và đối tượng trước. Thu từ khách, Hoàn cho khách: tìm theo Booking, khách, Tour Code. Chi trả NCC, Nhận hoàn từ NCC: tìm theo NCC.</div>`, B('Hủy') + B('Lưu giao dịch', 'dis'), 620),
});

// ---------- Lỗi nhập ----------
S.W14 = P({
  body: list1({ sel: 'alm' }),
  overlay: modal('Ghi giao dịch', `${typeSeg('Thu từ khách', true)}
<div class="f2">${f('Booking', 'BK-2611-0151 · Almeida Viagens', { cls: 'ro', auto: 'Tự điền' })}${f('Ngày giao dịch', '15/11/2026', { req: 1, cls: 'bad', err: 'Không sau hôm nay (12/11/2026)' })}</div>
<div class="f3">${f('Số tiền', '0', { req: 1, cls: 'bad', err: 'Phải lớn hơn 0' })}${f('Loại tiền', '₫ 🔒', { cls: 'ro', hint: 'Theo Booking · khách trả bằng loại tiền khác: ghi theo số ₫ thực nhận' })}${f('Phương thức', 'Chuyển khoản', { cls: 'sel', req: 1 })}</div>
${f('Số chứng từ', 'UNC 1011-AV', { req: 1, hint: '<span style="color:#b45309">⚠ Số chứng từ đã dùng ở GD-2611-0102 (Almeida Viagens, 10/11). Kiểm tra trùng; vẫn lưu được.</span>' })}
${allocTbl([['Đợt 1 · Đặt cọc 30%', '18/11/2026', '63.000.000 ₫', ain('0', 'bad')], ['Đợt 2 · 70% còn lại', '05/01/2027', '147.000.000 ₫', ain('0')]])}
<div class="banner e small"><span class="ico e">!</span>Còn 2 lỗi. Sửa các ô viền đỏ để lưu; dữ liệu đã nhập được giữ.</div>`, B('Hủy') + B('Lưu giao dịch', 'dis'), 620),
});

// ---------- Kinh doanh xem ----------
S.W15 = page({
  user: 'kd', crumb: 'Công nợ và thu chi', mod: 'Kế toán', side: 'Công nợ & thu chi',
  body: HDR(1, K1.kd, { act: '<span class="muted small">Kinh doanh · chỉ xem</span>', scope: 'Booking bạn phụ trách · số tiền theo loại tiền gốc', cnt: { 1: '<span class="cnt r">2</span>', 2: '', 3: '' } }) +
    tool1('Tất cả', [['Tất cả', 5], ['Quá hạn', 1, 'r'], ['Chờ điều chỉnh', 1], ['Cần hoàn', 0], ['Đến hạn', 1, 'w'], ['Còn hạn', 1], ['Đã tất toán', 1]]) +
    tbl1(['tan', 'dup', 'mul', 'm58', 'nor'], { foot: 'Chỉ xem: không có Ghi giao dịch, Hủy giao dịch, Điều chỉnh. Bấm dòng để xem chi tiết.' }),
});

// ---------- Lịch thanh toán đổi từ KD08 ----------
S.W16 = P({
  body: list1({ sel: 'kan' }),
  overlay: drawer('BK-2611-0156 · Kangaroo Trails Pty Ltd',
    `<div class="banner i" style="margin-bottom:8px"><span class="ico i">i</span><div><b>Lịch thanh toán vừa thay đổi ở KD08.2</b> · ${HA} · 12/11/2026 09:20 · Đợt 1 hạn 19/11 → <b>26/11/2026</b>. Nghĩa vụ phải thu đã cập nhật theo lịch mới.</div></div>` +
    sec('Lịch thanh toán · từ KD08.2') + payRows([['Đợt 1', 'Đặt cọc 30%', '<span class="hl">26/11/2026</span>', '9.900 AUD', '0 AUD', '9.900 AUD', st('Còn hạn')], ['Đợt 2', '70% còn lại trước khởi hành 30 ngày', '10/02/2027', '23.100 AUD', '0 AUD', '23.100 AUD', st('Còn hạn')]], ['33.000 AUD', '0 AUD', '33.000 AUD']) +
    policyLine('Lịch sử thay đổi lịch xem ở KD08 (⋯ → Lịch sử thay đổi) · Thông báo đã gửi tới Kế toán lúc 09:20') + sec('Giao dịch') + '<div class="muted small">Chưa có giao dịch.</div>',
    B('Đóng') + B('Ghi khoản thu', 'p'), { wide: true, sub: bkSub('TP-2703-0002', 'khởi hành 12/03/2027', HA) }),
});

// =====================================================================
// KT01.2 · Phải trả nhà cung cấp
// =====================================================================
const K2 = {
  d0: kpi('Còn phải trả', '36.400.000 ₫ · 0 USD') + kpi('Đến hạn trong 7 ngày', '0 ₫', 'a') + kpi('Quá hạn · 2 khoản', '24.400.000 ₫', 'r') + kpi('Phải nhận hoàn', '0 ₫', 'v'),
  d1: kpi('Còn phải trả', '117.500.000 ₫ · 0 USD') + kpi('Đến hạn trong 7 ngày · 1 đợt', '10.750.000 ₫', 'a') + kpi('Quá hạn · 2 khoản', '24.400.000 ₫', 'r') + kpi('Phải nhận hoàn', '0 ₫', 'v'),
  d15: kpi('Còn phải trả', '87.500.000 ₫ · 0 USD') + kpi('Đến hạn trong 7 ngày · 1 đợt', '10.750.000 ₫', 'a') + kpi('Quá hạn · 1 khoản', '6.400.000 ₫', 'r') + kpi('Phải nhận hoàn', '0 ₫', 'v'),
  d2: kpi('Còn phải trả', '87.500.000 ₫ · 0 USD') + kpi('Đến hạn trong 7 ngày · 1 đợt', '10.750.000 ₫', 'a') + kpi('Quá hạn · 1 khoản', '6.400.000 ₫', 'r') + kpi('Phải nhận hoàn', '4.500.000 ₫', 'v'),
};
// Chờ ghi phải trả: [Tour, NCC, dịch vụ, ngày sử dụng, loại, giá trị, xác nhận lúc, điều hành]
const PEND = [
  ['TP-2611-0042', 'Khách sạn Apricot Hà Nội', 'Deluxe · 10 phòng × 1 đêm', '18/11/2026', 'Đã xác nhận', '32.000.000 ₫', '05/11 · Trần Minh Anh'],
  ['TP-2611-0042', 'Fusion Suites Đà Nẵng', 'Suite · 10 phòng × 1 đêm', '20/11/2026', 'Đã xác nhận', '21.500.000 ₫', '10/11 · Trần Minh Anh'],
  ['TP-2611-0042', 'Indochine Palace Huế', 'Deluxe · 10 phòng × 2 đêm', '23/11/2026', 'Đã xác nhận', '27.600.000 ₫', '10/11 · Trần Minh Anh'],
  ['TP-2611-0042', 'Du thuyền Paradise Elegance', '9 cabin × 1 đêm', '19/11/2026', 'Đã xác nhận', '2.520 USD', '06/11 · Trần Minh Anh'],
  ['TP-2611-0051', 'Nhà hàng Ngon Garden', '12 suất × 2 bữa', '15/11/2026', 'Đã xác nhận', '9.600.000 ₫', '11/11 · Trần Minh Anh'],
  ['TP-2611-0047', 'Mường Thanh Luxury Hạ Long', 'Phí hủy · 5 phòng × 1 đêm', '21/11/2026', 'Phí hủy', '4.500.000 ₫', '12/11 · Trần Minh Anh'],
];
const pendTbl = (sel = [], o = {}) => `<div class="tbl"><table><tr><th style="width:26px"><span class="cb ${sel.length ? 'part' : ''}"></span></th><th>Tour Code</th><th>NCC</th><th>Dịch vụ</th><th>Ngày sử dụng</th><th>Loại</th><th class="num">Giá trị phải trả</th><th>Xác nhận</th></tr>
${PEND.filter((r, i) => !(o.hide || []).includes(i)).map((r) => { const i = PEND.indexOf(r); const fee = r[4] === 'Phí hủy'; return `<tr class="${sel.includes(i) ? 'sel' : ''}"><td>${fee ? '<span class="cb" style="opacity:.35" title="Phí hủy ghi riêng"></span>' : `<span class="cb ${sel.includes(i) ? 'on' : ''}"></span>`}</td><td class="lnk">${r[0]}</td><td class="b">${r[1]}</td><td class="small">${r[2]}</td><td>${r[3]}</td><td>${fee ? bd('Phí hủy', 'b-red') + ' <span class="small muted">khoản đã ghi</span>' : bd('Đã xác nhận', 'b-green')}</td><td class="num">${r[5]}</td><td class="small muted">${r[6]}</td></tr>`; }).join('')}</table></div>
<div class="muted small" style="margin-top:6px">${o.foot || 'Từ DH08.3: dịch vụ đã xác nhận hoặc có phí hủy, chưa ghi phải trả. Giá trị là giá NCC xác nhận × số lượng xác nhận. Phí hủy không chọn hàng loạt: bấm dòng để điều chỉnh khoản đã ghi.'}</div>`;
const CH2 = (n, a) => [['Chờ ghi phải trả', n, 'w'], ['Tất cả khoản', a[0]], ['Quá hạn', a[1], 'r'], ['Đến hạn', a[2], 'w'], ['Còn hạn', a[3]], ['Phải nhận hoàn', a[4]], ['Đã tất toán', a[5]]];
const tool2 = (on, n, a) => toolbar(chips(CH2(n, a), on), search('Tìm NCC, Tour Code, dịch vụ', 210) + flt('NCC: Tất cả', 120) + flt('Loại tiền: Tất cả', 120));

S.W17 = P({
  body: HDR(2, K2.d0) + tool2('Chờ ghi phải trả', 6, [5, 2, 0, 1, 0, 2]) +
    `<div class="bulk"><b>Đã chọn 3 dịch vụ</b><span class="small" style="opacity:.85">· 3 NCC · 81.100.000 ₫</span><span class="ml"></span>${B('Bỏ chọn', 'sm')}${B('Ghi phải trả (3)', 'sm p')}</div>` + pendTbl([0, 1, 2]),
});

// Bảng trượt ghi phải trả (3)
const schedRow = (n, rule, due, amt, o = {}) => `<tr><td>${n}</td><td class="small">${rule}</td><td>${o.dueIn ? `<span class="input ${o.dueBad ? 'bad' : ''}" style="height:24px;width:112px;display:inline-flex">${due}</span>` : due}</td><td class="num">${amt}</td></tr>`;
const apBlock = (title, meta, val, contract, rows, o = {}) => `<div class="sect" style="${o.warn ? 'border-color:#fcd34d;background:#fffdf5' : ''}"><h4>${title}<span class="lockn">${meta}</span></h4>
<div class="grid" style="grid-template-columns:200px 1fr;gap:12px;align-items:start"><div>${f('Giá trị phải trả', val, { req: 1, auto: 'Giá NCC xác nhận' })}<div class="small muted">Hợp đồng áp dụng: ${contract}</div></div>
<div>${o.warn ? `<div class="banner w small" style="margin-bottom:6px;padding:5px 8px"><span class="ico w">!</span><div>${o.warn}</div></div>` : ''}<div class="tbl"><table><tr><th>Đợt trả</th><th>Theo điều khoản</th><th>Hạn ${o.warn ? '<span class="req">*</span>' : ''}</th><th class="num">Số tiền</th></tr>${rows}</table></div>${o.err ? `<div class="err">${o.err}</div>` : ''}</div></div></div>`;
S.W18 = P({
  body: HDR(2, K2.d0) + tool2('Chờ ghi phải trả', 6, [5, 2, 0, 1, 0, 2]) + pendTbl([0, 1, 2]),
  overlay: drawer('Ghi phải trả · 3 dịch vụ',
    apBlock('Khách sạn Apricot Hà Nội', 'TP-2611-0042 · Deluxe 10 phòng × 1 đêm · 18/11/2026', '32.000.000 ₫', 'HĐ-2026-APR-01 (01/01 – 31/12/2026)',
      schedRow('Đợt 1 · 100%', 'Sau khi kết thúc Tour 15 ngày', '10/12/2026', '32.000.000 ₫')) +
    apBlock('Fusion Suites Đà Nẵng', 'TP-2611-0042 · Suite 10 phòng × 1 đêm · 20/11/2026', '21.500.000 ₫', 'HĐ-2026-FUS-03 (01/04/2026 – 31/03/2027)',
      schedRow('Đợt 1 · 50%', 'Sau khi NCC xác nhận 3 ngày (xác nhận 10/11)', '13/11/2026', '10.750.000 ₫') + schedRow('Đợt 2 · Phần còn lại', 'Sau khi kết thúc Tour 7 ngày', '02/12/2026', '10.750.000 ₫')) +
    apBlock('Indochine Palace Huế', 'TP-2611-0042 · Deluxe 10 phòng × 2 đêm · 23/11/2026', '27.600.000 ₫', 'HĐ-2026-IDC-02 (01/01 – 31/12/2026)',
      schedRow('Đợt 1 · 100%', '—', 'dd/mm/yyyy', '27.600.000 ₫', { dueIn: 1, dueBad: 1 }), { warn: 'Hợp đồng HĐ-2026-IDC-02 chưa có điều khoản thanh toán: nhập hạn trả. Bổ sung điều khoản ở DH03 để lần sau điền sẵn.', err: 'Nhập hạn trả' }) +
    `<div class="muted small">Lịch trả điền sẵn theo điều khoản của hợp đồng áp dụng cho ngày sử dụng (RSD DH03 R10); sửa được hạn, số tiền, thêm hoặc bớt đợt. Sửa giá trị khác giá xác nhận thì bắt buộc nhập lý do.</div>`,
    `<span class="muted small" style="margin-right:auto">Còn 1 lỗi · Indochine Palace Huế chưa có hạn trả</span>${B('Hủy')}${B('Lưu 3 khoản phải trả', 'dis')}`, { wide: true, sub: 'Từ 3 dịch vụ đã xác nhận ở DH08.3 · loại tiền theo lần đặt' }),
});

// Danh sách khoản phải trả theo NCC
// [NCC, Tour, nội dung, phải trả, đã trả, còn, hạn gần nhất, tình trạng, cls]
const AP = {
  hl51: ['Xe Hoàng Long', 'TP-2611-0051', 'Xe 16 chỗ · 14/11 – 19/11', '18.000.000 ₫', '0 ₫', '18.000.000 ₫', '<b style="color:#b91c1c">11/11/2026</b>', st('Quá hạn', '1 ngày'), 'bad'],
  hl38: ['Xe Hoàng Long', 'TP-2611-0038', 'Xe 29 chỗ · 08/11 – 15/11', '24.000.000 ₫', '12.000.000 ₫', '12.000.000 ₫', 'Đợt 2 · 22/11/2026', st('Còn hạn'), ''],
  mor: ['Khách sạn Saigon Morin Huế', 'TP-2610-0031', '8 phòng × 1 đêm · 01/11', '6.400.000 ₫', '0 ₫', '6.400.000 ₫', '<b style="color:#b91c1c">11/11/2026</b>', st('Quá hạn', '1 ngày'), 'bad'],
  fus: ['Fusion Suites Đà Nẵng', 'TP-2611-0042', 'Suite 10 phòng × 1 đêm · 20/11', '21.500.000 ₫', '0 ₫', '21.500.000 ₫', 'Đợt 1 · 13/11/2026', st('Đến hạn', 'còn 1 ngày'), 'new'],
  apr: ['Khách sạn Apricot Hà Nội', 'TP-2611-0042', 'Deluxe 10 phòng × 1 đêm · 18/11', '32.000.000 ₫', '0 ₫', '32.000.000 ₫', '10/12/2026', st('Còn hạn'), 'new'],
  idc: ['Indochine Palace Huế', 'TP-2611-0042', 'Deluxe 10 phòng × 2 đêm · 23/11', '27.600.000 ₫', '0 ₫', '27.600.000 ₫', '30/11/2026', st('Còn hạn'), 'new'],
  mt: ['Mường Thanh Luxury Hạ Long', 'TP-2611-0047', '5 phòng × 1 đêm · 21/11', '9.000.000 ₫', '9.000.000 ₫', '0 ₫', '—', st('Đã tất toán') + ' ' + ind('Phí hủy chờ ghi', 'r'), ''],
  nt: ['Du thuyền Ngọc Trai', 'TP-2611-0038', '8 cabin × 1 đêm · 09/11', '1.980 USD', '1.980 USD', '0 USD', '—', st('Đã tất toán'), ''],
};
const apTbl = (keys, o = {}) => {
  let last = '', html = '';
  for (const k of keys) {
    const r = AP[k]; const ov = (o.ov || {})[k] || {};
    const rr = Object.assign([], r, ov.r || {});
    if (rr[0] !== last) { html += `<tr class="grp"><td colspan="${o.cb ? 9 : 8}">${rr[0]} <span class="muted" style="font-weight:400">${(o.g || {})[rr[0]] || ''}</span></td></tr>`; last = rr[0]; }
    const selable = o.cb && (o.cbOk || []).includes(k);
    html += `<tr class="${(o.sel || []).includes(k) ? 'sel' : (ov.cls !== undefined ? ov.cls : (o.nonew && rr[8] === 'new' ? '' : rr[8]))}">${o.cb ? `<td>${selable ? `<span class="cb ${(o.sel || []).includes(k) ? 'on' : ''}"></span>` : '<span class="cb" style="opacity:.3"></span>'}</td>` : ''}<td class="lnk">${rr[1]}</td><td class="small">${rr[2]}</td><td class="num">${rr[3]}</td><td class="num">${rr[4]}</td><td class="num">${rr[5]}</td>${vcell(rr[5])}<td class="small">${rr[6]}</td><td>${rr[7]}</td></tr>`;
  }
  return `<div class="tbl"><table><tr>${o.cb ? '<th style="width:26px"><span class="cb part"></span></th>' : ''}<th>Tour Code</th><th>Dịch vụ</th><th class="num">Phải trả</th><th class="num">Đã trả</th><th class="num">Còn phải trả</th><th class="num">≈ VND</th><th>Hạn gần nhất</th><th>Tình trạng</th></tr>${html}</table></div>
<div class="muted small" style="margin-top:6px">${o.foot || 'Nhóm theo NCC, NCC có khoản quá hạn lên đầu · bấm dòng để xem đợt trả, giao dịch, điều chỉnh'}</div>`;
};
const AP_ALL = ['hl51', 'hl38', 'mor', 'fus', 'apr', 'idc', 'mt', 'nt'];
S.W19 = P({
  body: HDR(2, K2.d1, { cnt: { 2: '<span class="cnt w">3</span>' } }) + tool2('Tất cả khoản', 3, [8, 2, 1, 3, 0, 2]) + apTbl(AP_ALL) +
    toast('Đã ghi 3 khoản phải trả · 81.100.000 ₫ · DH08.3 không còn hiện 3 dịch vụ này ở Chờ ghi phải trả'),
});

S.W20 = P({
  body: HDR(2, K2.d1, { cnt: { 2: '<span class="cnt w">3</span>' } }) + tool2('Tất cả khoản', 3, [8, 2, 1, 3, 0, 2]) +
    `<div class="bulk"><b>Đã chọn 2 khoản · Xe Hoàng Long</b><span class="small" style="opacity:.85">· còn phải trả 30.000.000 ₫</span><span class="ml"></span>${B('Bỏ chọn', 'sm')}${B('Ghi chi trả (2)', 'sm p')}</div>` +
    apTbl(AP_ALL, { nonew: 1, cb: 1, sel: ['hl51', 'hl38'], cbOk: ['hl51', 'hl38'], foot: 'Chỉ chọn cùng lúc các khoản của một NCC, cùng loại tiền, còn phải trả > 0; dòng khác tạm khóa ô chọn.' }),
});

S.W21 = P({
  body: HDR(2, K2.d1, { cnt: { 2: '<span class="cnt w">3</span>' } }) + tool2('Tất cả khoản', 3, [8, 2, 1, 3, 0, 2]) + apTbl(AP_ALL, { nonew: 1, sel: ['hl51', 'hl38'] }),
  overlay: modal('Ghi giao dịch', `${typeSeg('Chi trả NCC', true)}
<div class="card" style="background:#f8fafc;padding:8px 12px;margin-bottom:9px"><div class="flex"><b>Xe Hoàng Long</b><span class="auto">Từ hồ sơ NCC (DH03.1)</span></div><div class="small">Thụ hưởng: Công ty TNHH Vận tải Hoàng Long · Vietcombank CN Hà Nội · <b>0011 0045 6789</b> · MST 0101234567</div></div>
<div class="f3">${f('Ngày giao dịch', '12/11/2026', { req: 1, auto: 'Hôm nay' })}${f('Số tiền', '30.000.000', { req: 1, auto: 'Tổng còn phải trả', cls: 'focus' })}${f('Loại tiền', '₫ 🔒', { cls: 'ro' })}</div>
${allocTbl([['TP-2611-0051 · Xe 16 chỗ', '11/11/2026 · quá hạn', '18.000.000 ₫', ain('18.000.000')], ['TP-2611-0038 · Xe 29 chỗ · Đợt 2', '22/11/2026', '12.000.000 ₫', ain('12.000.000')]])}
<div class="f3">${f('Phương thức', 'Chuyển khoản', { cls: 'sel', req: 1 })}${f('Số chứng từ', 'UNC 1211-HL', { req: 1 })}<div class="field"><label>Tệp chứng từ <span class="req">*</span></label><div class="file" style="margin:0">📎 UNC_HoangLong.pdf</div></div></div>
<div class="hint">Hệ thống chỉ ghi giao dịch; không tạo lệnh chuyển tiền tới ngân hàng.</div>`, B('Hủy') + B('Lưu giao dịch', 'p'), 640),
});

// Điều chỉnh phí hủy (Mường Thanh)
const mtDrawer = (o = {}) => drawer('Mường Thanh Luxury Hạ Long · TP-2611-0047',
  (o.after ? `<div class="banner s" style="margin-bottom:8px"><span class="ico ok">✓</span><div>Đã điều chỉnh 12/11/2026 15:40 · giá trị phải trả 9.000.000 ₫ → <b>4.500.000 ₫</b> (phí hủy). Đã trả 9.000.000 ₫ nên <b>phải nhận hoàn 4.500.000 ₫</b> từ NCC.</div></div>`
    : `<div class="banner w" style="margin-bottom:8px"><span class="ico w">!</span><div><b>Phí hủy chờ ghi.</b> Dịch vụ “5 phòng × 1 đêm · 21/11” đã hủy ở DH08.3 lúc 12/11 09:30 (Booking BK-2611-0140 hủy); NCC chấp nhận, phí hủy <b>4.500.000 ₫</b>.</div></div>`) +
  sec('Khoản phải trả') + `<div class="tbl"><table><tr><th>Đợt</th><th>Hạn</th><th class="num">Phải trả</th><th class="num">Đã trả</th><th class="num">Còn</th><th>Tình trạng</th></tr>
<tr><td>Đợt 1 · 100% trước ngày sử dụng 14 ngày</td><td>07/11/2026</td><td class="num">${o.after ? '<s>9.000.000 ₫</s> 4.500.000 ₫' : '9.000.000 ₫'}</td><td class="num">9.000.000 ₫</td><td class="num">${o.after ? '−4.500.000 ₫' : '0 ₫'}</td><td>${o.after ? st('Phải nhận hoàn') : st('Đã tất toán')}</td></tr></table></div>` +
  (o.after ? sec('Lịch sử') + `<div class="small">12/11 15:40 · Phạm Ngọc Lan · Điều chỉnh giá trị 9.000.000 → 4.500.000 ₫ · Phí hủy theo DH08.3 (chính sách đổi hủy HĐ-2026-MT-05: 50%)</div>` :
    sec('Điều chỉnh khoản phải trả') + `<div class="f2">${f('Giá trị phải trả mới', '4.500.000 ₫', { req: 1, auto: 'Phí hủy từ DH08.3', cls: 'focus' })}${f('Giá trị hiện tại', '9.000.000 ₫', { cls: 'ro' })}</div>
${f('Lý do điều chỉnh', 'Hủy dịch vụ do Booking BK-2611-0140 hủy · phí hủy 50% theo chính sách đổi hủy HĐ-2026-MT-05', { req: 1, auto: 'Tự điền', cls: 'area' })}
<div class="card" style="background:#f8fafc;padding:8px 12px"><div class="flex small"><span>Đã trả</span><span class="ml num">9.000.000 ₫</span></div><div class="flex small"><span>Giá trị mới</span><span class="ml num">4.500.000 ₫</span></div><div class="sep" style="margin:5px 0"></div><div class="flex"><b>Kết quả</b><span class="ml"><b style="color:#5b21b6">Phải nhận hoàn 4.500.000 ₫</b></span></div></div>`) +
  sec('Giao dịch') + gdRows([['GD-2611-0097', '07/11/2026', 'Chi trả NCC', '9.000.000 ₫', 'Đợt 1', 'UNC 0711-MT · 📎', 'Phạm Ngọc Lan', B('⋯', 'sm')]]),
  o.after ? B('Đóng') + B('Ghi nhận hoàn', 'p') : B('Đóng') + B('Lưu điều chỉnh', 'p'), { wide: true, sub: 'Dịch vụ 5 phòng × 1 đêm · 21/11/2026 · hợp đồng HĐ-2026-MT-05 · <span class="lnk">Mở đặt dịch vụ (DH08.3) ↗</span>' });
S.W22 = P({ body: HDR(2, K2.d15, { cnt: { 2: '<span class="cnt w">3</span>' } }) + tool2('Chờ ghi phải trả', 3, [8, 1, 1, 2, 0, 4]) + pendTbl([], { hide: [0, 1, 2] }), overlay: mtDrawer() });
S.W23 = P({
  body: HDR(2, K2.d2, { cnt: { 2: '<span class="cnt w">2</span>' } }) + tool2('Phải nhận hoàn', 2, [8, 1, 1, 2, 1, 3]) + apTbl(['mt'], { ov: { mt: { r: { 5: '<b style="color:#5b21b6">−4.500.000 ₫</b>', 7: st('Phải nhận hoàn') }, cls: 'sel' } } }),
  overlay: mtDrawer({ after: 1 }).replace('<div class="drawer wide">', '<div class="drawer wide" style="filter:brightness(.6)">') +
    modal('Ghi giao dịch', `${typeSeg('Nhận hoàn từ NCC', true)}
<div class="f2">${f('NCC · khoản', 'Mường Thanh Luxury Hạ Long · TP-2611-0047', { cls: 'ro', auto: 'Tự điền' })}${f('Ngày giao dịch', '12/11/2026', { req: 1, auto: 'Hôm nay' })}</div>
<div class="f3">${f('Số tiền', '4.500.000', { req: 1, auto: 'Phải nhận hoàn', cls: 'focus', hint: 'Tối đa 4.500.000 ₫' })}${f('Loại tiền', '₫ 🔒', { cls: 'ro' })}${f('Phương thức', 'Chuyển khoản', { cls: 'sel', req: 1 })}</div>
<div class="f2">${f('Số chứng từ', 'BC 1211-MT', { req: 1 })}<div class="field"><label>Tệp chứng từ</label><div class="drop" style="padding:6px">Kéo thả hoặc chọn tệp</div></div></div>
<div class="hint">NCC có thể hoàn nhiều lần; số còn phải nhận hoàn cập nhật sau mỗi lần ghi.</div>`, B('Hủy') + B('Lưu giao dịch', 'p'), 600),
});

// =====================================================================
// KT01.3 · Công nợ theo Tour
// =====================================================================
const K3 = kpi('Phải thu còn', '77.644 EUR · 33.000 AUD · 2.016.000 JPY<br>1.250 GBP · 210.000.000 ₫') + kpi('Phải trả còn', '36.400.000 ₫') + kpi('Đến hạn trong 7 ngày', 'Thu 26.894 EUR · 63.000.000 ₫', 'a') + kpi('Quá hạn', 'Thu 2.016.000 JPY<br>Trả 24.400.000 ₫', 'r');
// [Tour, Booking, khách, thời gian, trạng thái hồ sơ, phải thu còn, phải trả còn, việc chờ, cls]
const TR = {
  t38: ['TP-2611-0038', 'BK-2610-0129', 'Nordic Explorer AB', '08/11 – 15/11/2026', bd('Đang diễn ra', 'b-blue'), '0 USD', '12.000.000 ₫', ind('2 khoản phát sinh chờ ghi', 'a'), 'hot'],
  t31: ['TP-2610-0031', 'BK-2609-0112', 'Hanse Reisen KG', '26/10 – 04/11/2026', bd('Đã kết thúc', 'b-violet'), '0 EUR', '6.400.000 ₫', ind('Chưa quyết toán', 'v') + ' ' + B('Mở quyết toán ↗', 'sm'), ''],
  t27: ['TP-2610-0027', 'BK-2609-0105', 'Lotus Journeys Ltd', '15/10 – 24/10/2026', bd('Đã đóng', 'b-gray'), '1.250 GBP', '0 ₫', ind('Đã đóng · còn công nợ', 'b'), ''],
  t51: ['TP-2611-0051', 'BK-2611-0144', 'Tanaka Travel Co.', '14/11 – 19/11/2026', bd('Mới tạo', 'b-gray'), '2.016.000 JPY', '18.000.000 ₫', '—', ''],
  t42: ['TP-2611-0042', 'BK-2610-0137', 'Müller Reisen GmbH', '18/11 – 25/11/2026', bd('Mới tạo', 'b-gray'), '26.894 EUR', '0 ₫', '—', ''],
  t47: ['TP-2611-0047', 'BK-2611-0140', 'Dupont Voyages', '20/11 – 27/11/2026', bd('Mới tạo', 'b-gray') + ' ' + ind('Booking đã hủy', 'r'), '<span class="muted">Chờ điều chỉnh</span>', '0 ₫', '—', ''],
  tal: ['TP-2702-0003', 'BK-2611-0151', 'Almeida Viagens', '04/02 – 13/02/2027', bd('Mới tạo', 'b-gray'), '210.000.000 ₫', '0 ₫', '—', ''],
  tm58: ['TP-2703-0001', 'BK-2611-0158', 'Müller Reisen GmbH', '15/03 – 28/03/2027', bd('Mới tạo', 'b-gray'), '50.750 EUR', '0 ₫', '—', ''],
  tkan: ['TP-2703-0002', 'BK-2611-0156', 'Kangaroo Trails Pty Ltd', '12/03 – 24/03/2027', bd('Mới tạo', 'b-gray'), '33.000 AUD', '0 ₫', '—', ''],
  tsak: ['TP-2701-0004', 'BK-2610-0125', 'Sakura Travel Co., Ltd', '20/01 – 29/01/2027', bd('Mới tạo', 'b-gray') + ' ' + ind('Booking đã hủy', 'r'), '<b style="color:#5b21b6">Cần hoàn 2.400 USD</b>', '0 ₫', '—', ''],
};
const tbl3 = (keys, o = {}) => `<div class="tbl"><table><tr><th>Tour Code</th><th>Booking</th><th>Khách</th><th>Thời gian</th><th>Hồ sơ Tour</th><th class="num">Phải thu còn</th><th class="num">≈ VND</th><th class="num">Phải trả còn</th><th>Việc chờ</th></tr>
${keys.map(k => { const r = TR[k]; return `<tr class="${r[8]}"><td class="b" style="white-space:nowrap">${r[0]}</td><td class="lnk" style="white-space:nowrap">${r[1]}</td><td>${r[2]}</td><td class="small" style="white-space:nowrap">${r[3]}</td><td>${r[4]}</td><td class="num">${r[5]}</td>${/Chờ điều chỉnh/.test(r[5]) ? '<td class="num muted">—</td>' : vcell(r[5])}<td class="num">${r[6]}</td><td>${r[7]}</td></tr>`; }).join('')}</table></div>
<div class="muted small" style="margin-top:6px">${o.foot || 'Bấm dòng để xem mọi khoản phải thu, phải trả và giao dịch của Tour'}</div>`;
const CH3 = [['Tất cả', 10], ['Chờ ghi phát sinh', 1, 'w'], ['Chưa quyết toán', 1], ['Đã đóng · còn công nợ', 1], ['Không có việc chờ', 7]];
const tool3 = (on = 'Tất cả') => toolbar(chips(CH3, on), search('Tìm Tour Code, Booking, khách', 220) + flt('Trạng thái hồ sơ: Tất cả', 170));
S.W24 = P({ body: HDR(3, K3) + tool3() + tbl3(['t38', 't31', 't27', 't51', 't42', 'tal', 'tm58', 'tkan', 't47', 'tsak']) });

// Chi tiết Tour TP-2611-0038
const K3t = (thu, tra, due, over) => kpi('Phải thu còn · Tour', thu) + kpi('Phải trả còn · Tour', tra) + kpi('Đến hạn trong 7 ngày', due, 'a') + kpi('Quá hạn', over, 'r');
const tourBar = (code, rest, st0) => `<div class="flex" style="margin:10px 0 6px"><span class="lnk small">‹ Danh sách Tour</span><span class="b" style="font-size:15px">${code}</span>${st0}<span class="muted small">${rest}</span><span class="ml lnk small">Mở hồ sơ Tour (DH08) ↗</span></div>`;
const khTbl = (rows) => `<div class="tbl"><table><tr><th>Loại</th><th>Đối tượng</th><th>Nội dung</th><th class="num">Giá trị</th><th class="num">Đã thu / trả</th><th class="num">Còn</th><th class="num">≈ VND</th><th>Hạn gần nhất</th><th>Tình trạng</th></tr>
${rows.map(r => `<tr class="${r[8] || ''}"><td>${r[0] === 'Phải thu' ? bd('Phải thu', 'b-cyan') : bd('Phải trả', 'b-amber')}</td><td class="b small">${r[1]}</td><td class="small">${r[2]}</td><td class="num">${r[3]}</td><td class="num">${r[4]}</td><td class="num">${r[5]}</td>${vcell(r[5])}<td class="small">${r[6]}</td><td>${r[7]}</td></tr>`).join('')}</table></div>`;
const KH38 = [
  ['Phải thu', 'Nordic Explorer AB', 'Booking BK-2610-0129 · 2 đợt', '27.200 USD', '27.200 USD', '0 USD', '—', st('Đã tất toán')],
  ['Phải trả', 'Xe Hoàng Long', 'Xe 29 chỗ · 08/11 – 15/11', '24.000.000 ₫', '12.000.000 ₫', '12.000.000 ₫', 'Đợt 2 · 22/11/2026', st('Còn hạn')],
  ['Phải trả', 'Du thuyền Ngọc Trai', '8 cabin × 1 đêm · 09/11', '1.980 USD', '1.980 USD', '0 USD', '—', st('Đã tất toán')],
];
const PS38 = (done) => `<div class="tbl"><table><tr><th>Ngày</th><th>Chi phí phát sinh (DH08.7)</th><th>NCC</th><th class="num">Số tiền</th><th>Gợi ý của Điều hành</th><th>Chứng từ</th><th>Công nợ</th></tr>
<tr class="${done ? '' : 'hot'}"><td>10/11</td><td class="b">Xe dự phòng ra sân bay (sự cố 10/11)</td><td>Xe Hoàng Long</td><td class="num">1.200.000 ₫</td><td class="small">Công ty chịu</td><td class="small">📎 Hoa_don_xe.jpg</td><td>${done ? bd('Đã ghi công nợ', 'b-green') : bd('Chưa ghi công nợ', 'b-amber')}</td></tr>
<tr class="${done ? '' : 'hot'}"><td>09/11</td><td class="b">Nâng hạng 2 cabin theo yêu cầu khách</td><td>Du thuyền Ngọc Trai</td><td class="num">120 USD</td><td class="small">Thu lại từ khách</td><td class="small">📎 Bill_NgocTrai.pdf</td><td>${done ? bd('Đã ghi công nợ', 'b-green') : bd('Chưa ghi công nợ', 'b-amber')}</td></tr></table></div>`;
const GD38 = `<div class="small muted">GD-2611-0071 · 05/11 · Chi trả NCC · Xe Hoàng Long · 12.000.000 ₫ &nbsp;·&nbsp; GD-2611-0064 · 03/11 · Chi trả NCC · Du thuyền Ngọc Trai · 1.980 USD &nbsp;·&nbsp; GD-2610-0093 · 28/10 · Thu từ khách · 18.040 USD &nbsp;·&nbsp; <span class="lnk">Xem đủ 4 giao dịch</span></div>`;
const t38Body = (o = {}) => HDR(3, o.done ? K3t('120 USD', '13.200.000 ₫ · 120 USD', '0', '0') : K3t('0 USD', '12.000.000 ₫', '0', '0'), { btn: 'Ghi giao dịch cho TP-2611-0038', scope: 'Đang xem một Tour · số tiền theo loại tiền gốc', cnt: o.done ? { 3: '' } : {} }) +
  tourBar('TP-2611-0038', 'BK-2610-0129 · Nordic Explorer AB · 08/11 – 15/11/2026', bd('Đang diễn ra', 'b-blue')) +
  (o.done ? banner('s', 'ok', 'Đã ghi 3 khoản công nợ từ 2 chi phí phát sinh · DH08.7 hiện Đã ghi công nợ · Booking BK-2610-0129 còn phải thu 120 USD (hạn 26/11/2026).', '', 'margin:0 0 8px')
    : banner('w', 'w', '<b>2 chi phí phát sinh từ DH08.7 chưa ghi công nợ</b> · 1.200.000 ₫ + 120 USD', B('Ghi công nợ (2)', 'sm p'), 'margin:0 0 8px')) +
  sec('Chi phí phát sinh') + PS38(o.done) +
  sec('Khoản công nợ của Tour') + khTbl(o.done ? KH38.concat([['Phải thu', 'Nordic Explorer AB', 'Phát sinh · Nâng hạng 2 cabin', '120 USD', '0 USD', '120 USD', '26/11/2026', st('Còn hạn'), 'new'], ['Phải trả', 'Xe Hoàng Long', 'Phát sinh · Xe dự phòng ra sân bay', '1.200.000 ₫', '0 ₫', '1.200.000 ₫', '22/11/2026', st('Còn hạn'), 'new'], ['Phải trả', 'Du thuyền Ngọc Trai', 'Phát sinh · Nâng hạng 2 cabin', '120 USD', '0 USD', '120 USD', '22/11/2026', st('Còn hạn'), 'new']]) : KH38) +
  (o.done ? '' : sec('Giao dịch') + GD38);
S.W25 = P({ body: t38Body() });

const psBlock = (title, meta, pay, recv) => `<div class="sect"><h4>${title}<span class="lockn">${meta}</span></h4>
<div class="grid" style="grid-template-columns:1fr 1fr;gap:12px">
<div style="border:1px solid #e5e7eb;border-radius:6px;padding:8px"><div class="flex" style="margin-bottom:6px"><span class="tg ${pay ? 'on' : ''}"><i></i></span><b class="small">Phải trả NCC</b>${pay ? '<span class="auto">Từ DH08.7</span>' : ''}</div>${pay || '<div class="muted small">Không ghi phải trả</div>'}</div>
<div style="border:1px solid #e5e7eb;border-radius:6px;padding:8px"><div class="flex" style="margin-bottom:6px"><span class="tg ${recv ? 'on' : ''}"><i></i></span><b class="small">Phải thu khách</b>${recv ? '<span class="auto">Gợi ý thu khách</span>' : ''}</div>${recv || '<div class="muted small">Công ty chịu · không thu khách</div>'}</div></div></div>`;
S.W26 = P({
  body: t38Body(),
  overlay: xl(drawer('Ghi công nợ phát sinh · TP-2611-0038',
    psBlock('Xe dự phòng ra sân bay', '10/11 · 1.200.000 ₫ · sự cố 10/11 · 📎 Hoa_don_xe.jpg',
      `<div class="f3">${f('NCC', 'Xe Hoàng Long', { cls: 'sel' })}${f('Số tiền', '1.200.000 ₫', { req: 1 })}${f('Hạn trả', '22/11/2026', { req: 1, auto: 'Theo HĐ' })}</div>`, '') +
    psBlock('Nâng hạng 2 cabin theo yêu cầu khách', '09/11 · 120 USD · 📎 Bill_NgocTrai.pdf',
      `<div class="f3">${f('NCC', 'Du thuyền Ngọc Trai', { cls: 'sel' })}${f('Số tiền', '120 USD', { req: 1 })}${f('Hạn trả', '22/11/2026', { req: 1, auto: 'Theo HĐ' })}</div>`,
      `<div class="f3">${f('Khách · Booking', 'Nordic Explorer AB · BK-2610-0129', { cls: 'ro' })}${f('Số tiền', '120 USD', { req: 1, hint: 'Theo loại tiền của khoản phát sinh' })}${f('Hạn thu', '26/11/2026', { req: 1, auto: 'Hôm nay + 14' })}</div>`) +
    `<div class="muted small">Mỗi chi phí phát sinh ghi được phải trả, phải thu hoặc cả hai; tắt cả hai thì không lưu được dòng đó. Chứng từ của Điều hành được gắn vào khoản công nợ.</div>`,
    `<span class="muted small" style="margin-right:auto">Sẽ tạo 3 khoản: 2 phải trả, 1 phải thu</span>${B('Hủy')}${B('Lưu công nợ (3 khoản)', 'p')}`, { wide: true, sub: 'Mở từ DH08.7 (Ghi công nợ) hoặc từ banner ở KT01.3 · dữ liệu điền sẵn từ chi phí phát sinh' })),
});
S.W27 = P({ body: t38Body({ done: 1 }) + toast('Đã ghi 3 khoản công nợ phát sinh cho TP-2611-0038') });

// Tour đã đóng
S.W28 = P({
  body: HDR(3, K3t('1.250 GBP', '0 ₫', '0', '0'), { btn: 'Ghi giao dịch cho TP-2610-0027', scope: 'Đang xem một Tour · số tiền theo loại tiền gốc' }) +
    tourBar('TP-2610-0027', 'BK-2609-0105 · Lotus Journeys Ltd · 15/10 – 24/10/2026', bd('Đã đóng', 'b-gray')) +
    banner('i', 'i', '<b>Hồ sơ Tour đã đóng 30/10/2026</b> · quyết toán phiên bản 1. Hồ sơ điều hành chỉ đọc; công nợ và thu chi vẫn ghi theo Tour Code ở đây. Giao dịch sau ngày đóng có nhãn “Sau đóng Tour”.', '', 'margin:0 0 8px') +
    sec('Khoản công nợ của Tour') + khTbl([
      ['Phải thu', 'Lotus Journeys Ltd', 'Booking BK-2609-0105 · 2 đợt', '22.400 GBP', '22.400 GBP', '0 GBP', '—', st('Đã tất toán')],
      ['Phải thu', 'Lotus Journeys Ltd', 'Phát sinh · thêm 1 đêm khách sạn cho 5 khách', '1.250 GBP', '0 GBP', '1.250 GBP', '20/11/2026', st('Còn hạn'), 'hot'],
      ['Phải trả', 'Khách sạn Majestic Sài Gòn', '12 phòng × 4 đêm · 20/10', '96.000.000 ₫', '96.000.000 ₫', '0 ₫', '—', st('Đã tất toán')],
      ['Phải trả', 'Xe Hoàng Long', 'Xe 29 chỗ · 15/10 – 24/10', '28.000.000 ₫', '28.000.000 ₫', '0 ₫', '—', st('Đã tất toán')]]) +
    sec('Giao dịch') + `<div class="small"><b>GD-2611-0058</b> · 04/11 · Chi trả NCC · Khách sạn Majestic Sài Gòn · 48.000.000 ₫ ${ind('Sau đóng Tour', 'b')}</div><div class="small muted">GD-2610-0071 · 28/10 · Chi trả NCC · Xe Hoàng Long · 28.000.000 ₫ · <span class="lnk">Xem đủ 6 giao dịch</span></div>`,
});

S.W29 = P({
  body: HDR(3, kpi('Phải thu còn', '0 EUR') + kpi('Phải trả còn', '6.400.000 ₫') + kpi('Đến hạn trong 7 ngày', '0', 'a') + kpi('Quá hạn', 'Trả 6.400.000 ₫', 'r'), {}) + tool3('Chưa quyết toán') + tbl3(['t31'], { foot: 'Tour Đã kết thúc hoặc Đã đóng chưa lưu quyết toán. Mở quyết toán đưa tới DH08.8 (lưu được cả khi đã đóng); bấm dòng để xem công nợ của Tour.' }),
});

module.exports = S;
