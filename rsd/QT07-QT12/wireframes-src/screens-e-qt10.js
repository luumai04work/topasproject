// QT10 · Báo cáo công nợ phải thu và phải trả. Kế toán. Tính tại hôm nay 11/11/2026 theo loại tiền gốc (RSD KT01 R03, R04); ngưỡng Đến hạn 7 ngày.
// Nhóm tuổi nợ theo số ngày quá hạn của từng đợt: Còn hạn, Đến hạn, Quá hạn 1–30, 31–60, 61–90, trên 90 ngày.
const { fmt, money, moneyLines, addM, toVND, fl, kp, rep, B } = require('./common');
const S = {};
// [đối tượng, loại tiền, còn hạn, đến hạn, q1_30, q31_60, q61_90, q90, cần hoàn | phải nhận hoàn, số Booking/khoản, ghi chú]
const AR = [
  ['Công ty CP Hoa Sen', 'VND', 0, 0, 0, 0, 0, 145800000, 0, '1 Booking', 'đợt 2 hạn 05/08/2026'],
  ['Nordic Travel AS', 'EUR', 0, 0, 0, 0, 1250, 0, 0, '1 khoản phát sinh', 'TP-2610-0027 · hạn 30/08/2026'],
  ['Green Path Tours', 'USD', 0, 0, 6720, 0, 0, 0, 0, '1 Booking', 'BK-2609-0130 · hạn 25/10/2026'],
  ['Pacific Holidays Pty Ltd', 'AUD', 0, 0, 12000, 0, 0, 0, 4200, '2 Booking', 'BK-2611-0003 quá hạn 3 ngày; BK-2610-0121 đã hủy, cần hoàn'],
  ['Atlas Voyages SARL', 'EUR', 0, 7500, 0, 0, 0, 0, 0, '1 Booking', 'BK-2610-0144 · đợt 1 hạn 15/11'],
  ['Kim Tours Korea', 'USD', 0, 5400, 0, 0, 0, 0, 0, '1 Booking', 'hạn 14/11'],
  ['Müller Reisen GmbH', 'EUR', 13200, 0, 0, 0, 0, 0, 0, '1 Booking', 'BK-2610-0137 · đợt 2, 3 hạn 20/11, 25/11'],
];
const AP = [
  ['Xe Hoàng Long', 'VND', 0, 0, 0, 38500000, 0, 0, 0, '3 khoản', 'hạn sớm nhất 20/09/2026'],
  ['Vietnam Airlines', 'VND', 0, 0, 92000000, 0, 0, 0, 0, '2 khoản', 'hạn 01/11/2026'],
  ['Paradise Cruise Hạ Long', 'USD', 0, 8600, 0, 0, 0, 0, 0, '2 khoản', 'hạn 16/11'],
  ['Khách sạn Lotte Hà Nội', 'VND', 120000000, 66400000, 0, 0, 0, 0, 0, '4 khoản', ''],
  ['Angkor Travel Partners', 'USD', 3200, 0, 0, 0, 0, 0, 0, '1 khoản', 'hạn 30/11'],
  ['Khách sạn Vinpearl Nha Trang', 'VND', 0, 0, 0, 0, 0, 0, 12000000, '1 khoản', 'đã trả vượt sau phí hủy'],
];
const rest = r => r[2] + r[3] + r[4] + r[5] + r[6] + r[7];
const cell = (v, c, cls = '') => `<td class="num ${v ? cls : ''}">${v ? fmt(v) : '<span class="muted">·</span>'}</td>`;
const row = (r, back) => `<tr><td><b>${r[0]}</b><div class="small muted">${r[9]}${r[10] ? ' · ' + r[10] : ''}</div></td><td>${r[1]}</td>${cell(r[2])}${cell(r[3], '', 'b')}${cell(r[4], '', 'neg')}${cell(r[5], '', 'neg')}${cell(r[6], '', 'neg')}${cell(r[7], '', 'neg b')}<td class="num b">${fmt(rest(r))}</td>${cell(r[8], '', 'b')}</tr>`;
const head = (who, back) => `<tr><th>${who}</th><th>Tiền</th><th class="num">Còn hạn</th><th class="num">Đến hạn</th><th class="num">Quá hạn 1–30</th><th class="num">31–60</th><th class="num">61–90</th><th class="num">Trên 90</th><th class="num">Tổng còn</th><th class="num">${back}</th></tr>`;
function sums(rows) {
  const s = { con: {}, qh: {}, dh: {}, back: {} };
  rows.forEach(r => { addM(s.con, r[1], rest(r)); addM(s.qh, r[1], r[4] + r[5] + r[6] + r[7]); addM(s.dh, r[1], r[3]); if (r[8]) addM(s.back, r[1], r[8]); });
  Object.keys(s).forEach(k => Object.keys(s[k]).forEach(c => { if (!s[k][c]) delete s[k][c]; }));
  return s;
}
const lines = m => { const a = ['EUR', 'USD', 'AUD', 'VND'].filter(c => m[c]).map(c => money(m[c], c)); if (!a.length) return '0'; const o = []; for (let i = 0; i < a.length; i += 2) o.push(a.slice(i, i + 2).join(' · ')); return o.join('</div><div class="s">'); };
const mio = n => fmt(n / 1e6);
const kpis = (s, ar) => kp(ar ? 'Còn phải thu' : 'Còn phải trả', `≈ ${mio(toVND(s.con))} <small>tr ₫</small>`, lines(s.con))
  + kp('Quá hạn', `≈ ${mio(toVND(s.qh))} <small>tr ₫</small>`, lines(s.qh), 'bad')
  + kp('Đến hạn trong 7 ngày', `≈ ${mio(toVND(s.dh))} <small>tr ₫</small>`, lines(s.dh), 'warn')
  + kp(ar ? 'Cần hoàn cho khách' : 'Phải nhận hoàn từ NCC', `≈ ${mio(toVND(s.back))} <small>tr ₫</small>`, lines(s.back));
const seg = on => `<div class="seg2"><span class="${on === 'ar' ? 'on' : ''}">Phải thu khách hàng</span><span class="${on === 'ap' ? 'on' : ''}">Phải trả nhà cung cấp</span></div>`;
const filters = (o = {}) => seg(o.seg || 'ar') + fl('Hạn đợt', 'Tất cả') + fl(o.seg === 'ap' ? 'NCC' : 'Khách hàng', 'Tất cả') + fl('Tour Code', 'Tất cả') + fl('Nhóm tuổi nợ', o.age || 'Tất cả', o.age ? 'set' : '');
const NOTE = '<div class="muted small" style="margin:-4px 0 8px">Tính tại hôm nay 11/11/2026 theo loại tiền gốc; mỗi dòng là một đối tượng và một loại tiền. ≈ VND theo tỷ giá hôm nay, chỉ để tham khảo. Bấm dòng để mở KT01 đúng tab, lọc theo đối tượng.</div>';
const totLines = (rows) => `<tr class="tot"><td colspan="2">Tổng · ${rows.length} dòng</td><td colspan="8" class="small" style="font-weight:600">Tổng theo loại tiền ở các thẻ phía trên; không cộng lẫn loại tiền.</td></tr>`;
const R = (rows, ar, o = {}) => rep({
  user: 'kt', side: 'Công nợ thu, trả', title: 'Báo cáo công nợ phải thu và phải trả', filters: filters(o), clear: !!o.age,
  kpis: kpis(sums(rows), ar), kcols: 4, note: NOTE + (o.extra || ''),
  body: `<div class="tbl"><table>${head(ar ? 'Khách hàng' : 'Nhà cung cấp', ar ? 'Cần hoàn' : 'Phải nhận hoàn')}${rows.map(r => row(r)).join('')}</table></div>`,
});
S.W13 = R(AR, true);
S.W14 = R(AP, false, { seg: 'ap', extra: '<div class="banner i small" style="margin-bottom:8px">7 dịch vụ đã xác nhận ở hồ sơ Tour đang Chờ ghi phải trả nên chưa có trong báo cáo này. <span class="lnk" style="margin-left:auto">Mở KT01.2 · Chờ ghi phải trả</span></div>' });
S.W15 = R(AR.filter(r => r[6] || r[7]), true, { age: 'Quá hạn trên 60 ngày' });
module.exports = S;
