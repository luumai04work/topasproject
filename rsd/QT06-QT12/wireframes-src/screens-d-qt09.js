// QT09 · Báo cáo P&L theo Tour. Kỳ đóng Tour (ngày đóng lần đầu) mặc định Tháng trước (10/2026). Mọi số bằng VND, đọc từ phiên bản quyết toán Hiện hành (DH08.8).
// P&L dự tính: giá bán − giá vốn của phiên bản báo giá Chốt, quy VND theo tỷ giá đã lưu trong phiên bản quyết toán.
const { fmt, fl, kp, chips, rep, bd } = require('./common');
const S = {};
const NAM = 'Nguyễn Hoàng Nam', HA = 'Lê Thu Hà', MINH = 'Vũ Đức Minh';
// [Tour Code, khách, ngày đóng, KD phụ trách Booking, ĐH phụ trách hồ sơ, doanh thu, chi phí, điều chỉnh ròng, P&L dự tính | null, cờ]
// cờ: cqt = chưa quyết toán; huy = Booking đã hủy; kt01 = KT01 có giao dịch mới sau quyết toán; mo = đã mở lại
const R = [
  ['TP-2609-0018', 'Andersen Rejser A/S', '03/10/2026', MINH, 'Trần Minh Anh', 512400000, 401900000, 0, 118000000],
  ['TP-2610-0021', 'Atlas Voyages SARL', '12/10/2026', HA, 'Trần Minh Anh', 690150000, 548300000, -2500000, 142000000],
  ['TP-2610-0024', 'Pacific Holidays Pty Ltd', '16/10/2026', NAM, 'Phạm Thu Hà', 994700000, 812400000, 0, 176500000],
  ['TP-2610-0027', 'Nordic Travel AS', '17/10/2026', MINH, 'Lê Quang Huy', 873900000, 905200000, 6000000, 168000000, 'mo'],
  ['TP-2610-0030', 'Kim Tours Korea', '20/10/2026', HA, 'Lê Quang Huy', 489600000, 402100000, 0, 85000000, 'kt01'],
  ['TP-2610-0033', 'Thomas Weber', '24/10/2026', NAM, 'Phạm Thu Hà', null, null, null, null, 'cqt'],
  ['TP-2610-0029', 'Sakura Travel Japan', '30/10/2026', NAM, 'Trần Minh Anh', 98180000, 61400000, 0, null, 'huy'],
];
const pl = r => r[5] - r[6] + r[7];
const sg = (n, cls = true) => n == null ? '' : `<span class="${cls ? (n < 0 ? 'neg' : '') : ''}">${n > 0 && cls === 'sign' ? '+' : ''}${fmt(n)}</span>`;
const mio = n => { const [a, b] = (Math.abs(n) / 1e6).toFixed(1).split('.'); return (n < 0 ? '−' : '') + a.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + b; };
const row = r => {
  if (r[9] === 'cqt') return `<tr><td><b>${r[0]}</b><div class="small muted">${r[1]}</div></td><td>${r[2]}</td><td class="small">${r[3]}<div class="muted">${r[4]}</div></td><td colspan="7"><span class="na">Chưa quyết toán · không tính vào tổng</span></td></tr>`;
  const p = pl(r), m = p * 100 / r[5], d = r[8] != null ? p - r[8] : null;
  const flag = r[9] === 'huy' ? ' ' + bd('Booking đã hủy', 'b-red') : r[9] === 'kt01' ? ' <span class="ind a" title="Có giao dịch KT01 sau lần lưu quyết toán">KT01 có giao dịch mới</span>' : r[9] === 'mo' ? ' <span class="ind b">Đã mở lại</span>' : '';
  return `<tr class="${p < 0 ? 'bad' : ''}"><td><b>${r[0]}</b>${flag}<div class="small muted">${r[1]}</div></td><td>${r[2]}</td><td class="small">${r[3]}<div class="muted">${r[4]}</div></td>
<td class="num">${fmt(r[5] / 1e3)}</td><td class="num">${fmt(r[6] / 1e3)}</td><td class="num">${r[7] ? (r[7] > 0 ? '+' : '') + fmt(r[7] / 1e3) : '0'}</td>
<td class="num b ${p < 0 ? 'neg' : ''}">${fmt(p / 1e3)}</td><td class="num ${m < 0 ? 'neg' : ''}">${(m).toFixed(1).replace('.', ',')}%</td>
<td class="num">${r[8] != null ? fmt(r[8] / 1e3) : '<span class="na">—</span>'}</td><td class="num ${d < 0 ? 'neg' : d > 0 ? 'pos' : ''}">${d != null ? (d > 0 ? '+' : '') + fmt(d / 1e3) : '<span class="na">—</span>'}</td></tr>`;
};
const head = '<tr><th>Tour Code · khách</th><th>Ngày đóng</th><th>Kinh doanh · Điều hành</th><th class="num">Doanh thu</th><th class="num">Chi phí</th><th class="num">Điều chỉnh</th><th class="num">P&L thực tế</th><th class="num">Biên</th><th class="num">P&L dự tính</th><th class="num">Chênh lệch</th></tr>';
function tot(rows) {
  const q = rows.filter(r => r[9] !== 'cqt'); const dt = q.reduce((s, r) => s + r[5], 0), cp = q.reduce((s, r) => s + r[6], 0), dc = q.reduce((s, r) => s + r[7], 0);
  const p = dt - cp + dc; const qd = q.filter(r => r[8] != null); const pd = qd.reduce((s, r) => s + r[8], 0), pq = qd.reduce((s, r) => s + pl(r), 0);
  return { q, dt, cp, dc, p, pd, pq, n: rows.length, loss: q.filter(r => pl(r) < 0).length };
}
const totRow = t => `<tr class="tot"><td colspan="3">Tổng · ${t.q.length}/${t.n} Tour đã quyết toán</td><td class="num">${fmt(t.dt / 1e3)}</td><td class="num">${fmt(t.cp / 1e3)}</td><td class="num">${t.dc > 0 ? '+' : ''}${fmt(t.dc / 1e3)}</td><td class="num">${fmt(t.p / 1e3)}</td><td class="num">${(t.p * 100 / t.dt).toFixed(1).replace('.', ',')}%</td><td class="num">${fmt(t.pd / 1e3)}</td><td class="num ${t.pq - t.pd < 0 ? 'neg' : ''}">${fmt((t.pq - t.pd) / 1e3)}</td></tr>`;
const kpis = t => kp('Doanh thu thực tế', `${mio(t.dt)} <small>tr ₫</small>`, `${t.q.length}/${t.n} Tour đã quyết toán`)
  + kp('Chi phí thực tế', `${mio(t.cp)} <small>tr ₫</small>`, `điều chỉnh ròng ${t.dc > 0 ? '+' : ''}${mio(t.dc)} tr ₫`)
  + kp('P&L thực tế', `${mio(t.p)} <small>tr ₫ · biên ${(t.p * 100 / t.dt).toFixed(1).replace('.', ',')}%</small>`, '= doanh thu − chi phí + điều chỉnh')
  + kp('So với dự tính', `<span class="${t.pq - t.pd < 0 ? 'neg' : ''}">${mio(t.pq - t.pd)}</span> <small>tr ₫</small>`, `trên ${t.q.filter(r => r[8] != null).length} Tour có báo giá Chốt`, t.pq - t.pd < 0 ? 'warn' : '')
  + kp('Tour lỗ', `${t.loss}`, t.loss ? 'P&L thực tế < 0' : 'không có', t.loss ? 'bad' : '');
const UNIT = '<div class="muted small" style="margin:-4px 0 8px">Đơn vị bảng: nghìn ₫. Số đọc từ phiên bản quyết toán Hiện hành, không tính lại. Bấm dòng để mở tab Quyết toán của hồ sơ Tour.</div>';
const chipRow = (rows, on = 'all', loss = false) => chips([['all', 'Tất cả', rows.length], ['qt', 'Đã quyết toán', rows.filter(r => r[9] !== 'cqt').length], ['cqt', 'Chưa quyết toán', rows.filter(r => r[9] === 'cqt').length]], on)
  + `<span class="tg ${loss ? 'on' : ''}" style="margin-left:10px"><i></i>Chỉ Tour lỗ</span>`;
const filters = (pt = 'Tất cả', lock) => fl('Kỳ đóng Tour', 'Tháng trước (10/2026)') + fl('Khách hàng', 'Tất cả') + (lock ? `<span class="fl" style="background:#f9fafb;border-style:dashed"><i>Kinh doanh phụ trách:</i> ${NAM}</span>` : fl('Người phụ trách', pt));
const t = tot(R);
S.W11 = rep({ user: 'kt', side: 'P&L theo Tour', title: 'Báo cáo P&L theo Tour', filters: filters(), chipsRow: chipRow(R), kpis: kpis(t), kcols: 5, note: UNIT, body: `<div class="tbl"><table>${head}${R.map(row).join('')}${totRow(t)}</table></div>` });

S._W11R = R; S._t = t;
module.exports = S;
