// QT07 · Báo cáo doanh thu. Kỳ kết thúc Tour (ngày về của Booking) mặc định Tháng trước (10/2026).
// Kế toán: Phạm Ngọc Lan. Kinh doanh: Nguyễn Hoàng Nam (chỉ Booking mình phụ trách).
// Mỗi dòng một Booking; giá trị Booking và đã thu theo loại tiền gốc, lũy kế đến hôm nay; doanh thu quyết toán (VND) đọc từ phiên bản Hiện hành ở DH08.8.
const { fmt, money, moneyLines, addM, toVND, fl, kp, chips, rep, bd } = require('./common');
const S = {};
const NAM = 'Nguyễn Hoàng Nam', HA = 'Lê Thu Hà', MINH = 'Vũ Đức Minh';
// [mã Booking, khách, Tour Code, đi, về, phụ trách, loại tiền, giá trị, đã thu, doanh thu QT (VND) | null, tình trạng: qt|cqt|ckt, Booking hủy?]
const R = [
  ['BK-2609-0102', 'Atlas Voyages SARL', 'TP-2610-0021', '02/10', '09/10', HA, 'EUR', 24600, 24600, 690150000, 'qt'],
  ['BK-2609-0110', 'Pacific Holidays Pty Ltd', 'TP-2610-0024', '05/10', '14/10', NAM, 'AUD', 58400, 58400, 994700000, 'qt'],
  ['BK-2609-0115', 'Nordic Travel AS', 'TP-2610-0027', '08/10', '15/10', MINH, 'EUR', 31200, 31200, 873900000, 'qt'],
  ['BK-2609-0121', 'Kim Tours Korea', 'TP-2610-0030', '12/10', '17/10', HA, 'USD', 18900, 18900, 489600000, 'qt'],
  ['BK-2609-0126', 'Thomas Weber', 'TP-2610-0033', '15/10', '22/10', NAM, 'EUR', 9800, 9800, null, 'cqt'],
  ['BK-2609-0119', 'Sakura Travel Japan', 'TP-2610-0029', '20/10', '25/10', NAM, 'USD', 12600, 3780, 98180000, 'qt', true],
  ['BK-2609-0130', 'Green Path Tours', 'TP-2610-0035', '18/10', '26/10', MINH, 'USD', 22400, 15680, null, 'cqt'],
  ['BK-2609-0135', 'Công ty CP Hoa Sen', 'TP-2610-0038', '27/10', '31/10', HA, 'VND', 486000000, 486000000, null, 'ckt'],
];
const TT = { qt: bd('Đã quyết toán', 'b-green'), cqt: bd('Chưa quyết toán', 'b-amber'), ckt: bd('Hồ sơ chưa kết thúc', 'b-gray') };
const dt = r => r[9] != null ? `<span class="lnum">${fmt(r[9])} ₫</span>` : `<span class="lnum na">${r[10] === 'ckt' ? 'Hồ sơ chưa kết thúc' : 'Chưa quyết toán'}</span>`;
const row = r => `<tr><td><b>${r[0]}</b>${r[11] ? ' ' + bd('Đã hủy', 'b-red') : ''}<div class="small muted">${r[1]}</div></td><td>${r[2]}<div class="small muted">${r[3]} – ${r[4]}/2026</div></td><td>${r[5]}</td>
<td class="num">${r[11] ? `<s class="muted">${money(r[7], r[6])}</s><div class="small muted">không cộng vào tổng</div>` : money(r[7], r[6])}</td>
<td class="num">${money(r[8], r[6])}${!r[11] && r[8] < r[7] ? `<div class="small" style="color:#b45309">còn ${money(r[7] - r[8], r[6])}</div>` : ''}</td>
<td class="num">${dt(r)}</td><td>${TT[r[10]]}</td></tr>`;
const head = '<tr><th>Booking · khách</th><th>Tour Code · thời gian</th><th>Phụ trách</th><th class="num">Giá trị Booking</th><th class="num">Đã thu (KT01)</th><th class="num">Doanh thu quyết toán</th><th>Tình trạng</th></tr>';
function totals(rows) {
  const gv = {}, th = {}; let d = 0, nq = 0;
  rows.forEach(r => { if (!r[11]) addM(gv, r[6], r[7]); addM(th, r[6], r[8]); if (r[9] != null) { d += r[9]; nq++; } });
  return { gv, th, d, nq, n: rows.length };
}
const totRow = (t, label) => `<tr class="tot"><td colspan="3">${label}</td><td class="num">${moneyLines(t.gv)}</td><td class="num">${moneyLines(t.th)}</td><td class="num">${fmt(t.d)} ₫<div class="small muted" style="font-weight:400">${t.nq}/${t.n} Booking</div></td><td></td></tr>`;
const kpis = t => kp('Giá trị Booking hiệu lực', `≈ ${fmt(toVND(t.gv) / 1e6)} <small>tr ₫</small>`, Object.keys(t.gv).length ? ['EUR', 'USD', 'AUD', 'VND'].filter(c => t.gv[c]).map(c => money(t.gv[c], c)).join(' · ') : '0')
  + kp('Đã thu', `≈ ${fmt(toVND(t.th) / 1e6)} <small>tr ₫</small>`, ['EUR', 'USD', 'AUD', 'VND'].filter(c => t.th[c]).map(c => money(t.th[c], c)).join(' · '))
  + kp('Doanh thu quyết toán', `${fmt(t.d / 1e6)} <small>tr ₫</small>`, `${t.nq}/${t.n} Booking đã quyết toán`);
const chipRow = (rows, on = 'all') => chips([['all', 'Tất cả', rows.length], ['qt', 'Đã quyết toán', rows.filter(r => r[10] === 'qt').length], ['cqt', 'Chưa quyết toán', rows.filter(r => r[10] === 'cqt').length], ['ckt', 'Hồ sơ chưa kết thúc', rows.filter(r => r[10] === 'ckt').length]], on);
const NOTE = '<div class="muted small" style="margin:-4px 0 8px">≈ VND theo tỷ giá hôm nay, chỉ để tham khảo. Doanh thu quyết toán là số VND của phiên bản quyết toán Hiện hành (DH08.8), không quy đổi lại.</div>';
const filters = (pt = 'Tất cả', o = {}) => fl('Kỳ kết thúc Tour', 'Tháng trước (10/2026)', o.kOpen ? 'open' : '') + fl('Khách hàng', 'Tất cả') + (o.lockPt ? `<span class="fl" style="background:#f9fafb;border-style:dashed"><i>Người phụ trách:</i> ${NAM}</span>`.replace('class="fl"', 'class="fl" data-x') : fl('Người phụ trách', pt)) + fl('Nhóm theo', o.grp || 'Không nhóm', o.grp ? 'set' : '');
const W05 = (o = {}) => {
  const t = totals(R);
  return rep({
    user: 'kt', side: 'Doanh thu', title: 'Báo cáo doanh thu', filters: filters('Tất cả', o), chipsRow: chipRow(R), kpis: kpis(t), kcols: 3, note: NOTE,
    body: `<div class="tbl"><table>${head}${R.map(row).join('')}${totRow(t, 'Tổng · 8 Booking')}</table></div>`, overlay: o.overlay || '', exp: o.exp || 'on',
  });
};
S.W05 = W05();

// W06 · Nhóm theo người phụ trách
{
  const t = totals(R);
  const by = [HA, MINH, NAM].map(p => [p, R.filter(r => r[5] === p)]);
  const body = `<div class="tbl"><table>${head}${by.map(([p, rs]) => { const s = totals(rs); return `<tr class="sub"><td colspan="3">${p} · ${rs.length} Booking</td><td class="num">${moneyLines(s.gv)}</td><td class="num">${moneyLines(s.th)}</td><td class="num">${fmt(s.d)} ₫</td><td class="small muted" style="font-weight:400">${s.nq}/${s.n} đã quyết toán</td></tr>${rs.map(row).join('')}`; }).join('')}${totRow(t, 'Tổng · 8 Booking')}</table></div>`;
  S.W06 = rep({ user: 'kt', side: 'Doanh thu', title: 'Báo cáo doanh thu', filters: filters('Tất cả', { grp: 'Người phụ trách' }), clear: true, chipsRow: chipRow(R), kpis: kpis(t), kcols: 3, note: NOTE, body: `<div style="height:430px;overflow:hidden">${body}</div>` });
}

S._W05 = W05; S._R = R; S._totals = totals;
module.exports = S;
