// QT11 · Báo cáo hiệu suất nhà cung cấp (Điều hành: Trần Minh Anh). Kỳ gửi lần đặt mặc định 90 ngày qua (14/08 – 11/11/2026).
// QT12 · Báo cáo sự cố và chi phí phát sinh (Điều hành; Kế toán). Kỳ phát sinh mặc định Tháng trước (10/2026).
const { fmt, money, moneyLines, addM, toVND, pct, fl, kp, chips, rep, B, bd, rbar } = require('./common');
const { drawer } = require('./lib');
const S = {};

// ---------- QT11 ----------
// [NCC, loại dịch vụ, lần đặt, đang Đã xác nhận, Đã hủy (từng xác nhận), Không đáp ứng, Chờ kết quả, một phần, phí hủy {cur:v}, chênh giá TB %, số lần cao hơn tham chiếu, số lần có cả hai giá]
const N = [
  ['Khách sạn Lotte Hà Nội', 'Lưu trú', 38, 29, 4, 3, 2, 2, { VND: 18600000 }, 0.0, 0, 33],
  ['Xe Hoàng Long', 'Vận chuyển', 31, 28, 2, 1, 0, 0, {}, 1.8, 3, 30],
  ['Nhà hàng Ngon Garden', 'Ăn uống', 22, 19, 3, 0, 0, 0, {}, 0.0, 0, 22],
  ['Paradise Cruise Hạ Long', 'Du thuyền', 17, 11, 1, 4, 1, 1, { USD: 450 }, 4.5, 5, 12],
  ['Khách sạn Vinpearl Nha Trang', 'Lưu trú', 12, 6, 2, 3, 1, 0, { VND: 24000000 }, -2.0, 0, 8],
  ['Angkor Travel Partners', 'Dịch vụ mặt đất', 6, 5, 0, 1, 0, 0, {}, 6.2, 2, 5],
];
const xn = r => r[3] + r[4], kq = r => r[2] - r[6];
const n11 = r => `<tr${r.sel ? ' class="sel"' : ''}><td><b>${r[0]}</b><div class="small muted">${r[1]}</div></td><td class="num">${r[2]}</td>
<td style="width:150px"><div class="flex"><b style="width:36px;text-align:right">${pct(xn(r), kq(r))}</b>${rbar(xn(r) * 100 / kq(r), 'g')}</div><div class="small muted">${xn(r)}/${kq(r)} có kết quả${r[7] ? ` · ${r[7]} một phần` : ''}</div></td>
<td class="num ${r[5] * 100 / kq(r) >= 20 ? 'neg b' : ''}">${r[5]} <span class="small muted">${pct(r[5], kq(r))}</span></td><td class="num">${r[6] || '<span class="muted">0</span>'}</td><td class="num">${r[4] || '<span class="muted">0</span>'}</td>
<td class="num">${Object.keys(r[8]).length ? moneyLines(r[8]) : '<span class="muted">0</span>'}</td>
<td class="num ${r[9] > 3 ? 'neg' : ''}">${r[9] > 0 ? '+' : ''}${r[9].toFixed(1).replace('.', ',')}%<div class="small muted">${r[10]} lần cao hơn / ${r[11]}</div></td></tr>`;
const h11 = '<tr><th>Nhà cung cấp</th><th class="num">Lần đặt</th><th>Tỷ lệ xác nhận</th><th class="num">Không đáp ứng</th><th class="num">Chờ kết quả</th><th class="num">Đã hủy</th><th class="num">Phí hủy</th><th class="num">Giá xác nhận so tham chiếu</th></tr>';
const T11 = N.reduce((a, r) => { a.n += r[2]; a.x += xn(r); a.k += kq(r); a.u += r[5]; a.c += r[6]; a.h += r[4]; Object.keys(r[8]).forEach(c => addM(a.f, c, r[8][c])); return a; }, { n: 0, x: 0, k: 0, u: 0, c: 0, h: 0, f: {} });
const k11 = kp('Lần đặt đã gửi', T11.n, `${N.length} NCC · chờ kết quả ${T11.c}`) + kp('Tỷ lệ xác nhận', pct(T11.x, T11.k), `${T11.x}/${T11.k} lần đặt có kết quả`)
  + kp('Không đáp ứng', `${T11.u} <small>· ${pct(T11.u, T11.k)}</small>`, '2 NCC từ 20% trở lên', 'warn') + kp('Đã hủy · phí hủy', `${T11.h}`, ['VND', 'USD'].filter(c => T11.f[c]).map(c => money(T11.f[c], c)).join(' · '))
  + kp('Giá xác nhận cao hơn tham chiếu', '10 <small>lần</small>', 'trên 110 lần đặt có cả hai giá');
const f11 = fl('Kỳ gửi lần đặt', '90 ngày qua (14/08 – 11/11/2026)') + fl('Nhà cung cấp', 'Tất cả') + fl('Loại dịch vụ', 'Tất cả');
const W16 = (o = {}) => rep({
  user: 'dh', side: 'Hiệu suất NCC', title: 'Báo cáo hiệu suất nhà cung cấp', filters: f11, kpis: k11, kcols: 5,
  note: '<div class="muted small" style="margin:-4px 0 8px">Đếm theo lần đặt gửi trong kỳ. Tỷ lệ xác nhận = lần đặt từng được xác nhận ÷ lần đặt đã có kết quả. Phí hủy và giá theo loại tiền gốc. Bấm dòng để xem từng lần đặt.</div>',
  body: `<div class="tbl"><table>${h11}${N.map(r => n11(Object.assign([...r], { sel: o.sel === r[0] }))).join('')}<tr class="tot"><td>Tổng</td><td class="num">${T11.n}</td><td><b>${pct(T11.x, T11.k)}</b> <span class="small muted" style="font-weight:400">${T11.x}/${T11.k}</span></td><td class="num">${T11.u}</td><td class="num">${T11.c}</td><td class="num">${T11.h}</td><td class="num">${moneyLines(T11.f)}</td><td></td></tr></table></div>`,
  overlay: o.overlay || '',
});
S.W16 = W16();

// W17 · Bảng trượt các lần đặt của Paradise Cruise Hạ Long
const KQ = { 'Đã xác nhận': 'b-green', 'Không đáp ứng': 'b-red', 'Đã gửi': 'b-blue', 'Đã hủy': 'b-gray' };
const LD = [
  ['TP-2611-0042', 'Du thuyền 2N1Đ · Cabin Deluxe', '21/11', '02/11', 'Đã xác nhận', '9/9', 185, 185, ''],
  ['TP-2611-0040', 'Du thuyền 2N1Đ · Cabin Suite', '19/11', '30/10', 'Đã xác nhận', '4/5', 260, 275, 'một phần'],
  ['TP-2611-0038', 'Du thuyền 2N1Đ · Cabin Deluxe', '28/11', '09/11', 'Đã gửi', '6', 185, null, ''],
  ['TP-2610-0035', 'Du thuyền 2N1Đ · Cabin Deluxe', '21/10', '29/09', 'Đã xác nhận', '8/8', 180, 190, ''],
  ['TP-2610-0031', 'Du thuyền 3N2Đ · Cabin Deluxe', '18/10', '25/09', 'Không đáp ứng', '7', 240, null, 'hết phòng'],
  ['TP-2610-0027', 'Du thuyền 2N1Đ · Cabin Deluxe', '11/10', '20/09', 'Đã hủy', '9/9', 180, 180, 'phí hủy 450 USD'],
  ['TP-2610-0024', 'Du thuyền 2N1Đ · Cabin Suite', '09/10', '15/09', 'Đã xác nhận', '12/12', 250, 265, ''],
  ['TP-2610-0026', 'Du thuyền 2N1Đ · Cabin Deluxe', '05/10', '10/09', 'Không đáp ứng', '5', 180, null, 'hết phòng'],
];
const ldRow = r => { const d = r[7] != null ? (r[7] - r[6]) * 100 / r[6] : null; return `<tr><td style="white-space:nowrap"><span class="lnk">${r[0]}</span></td><td>${r[1]}<div class="small muted">sử dụng ${r[2]}/2026 · gửi ${r[3]}</div></td><td>${bd(r[4], KQ[r[4]])}${r[8] ? `<div class="small muted">${r[8]}</div>` : ''}</td><td class="num">${r[5]}</td><td class="num">${r[6]}</td><td class="num">${r[7] != null ? r[7] : '<span class="na">—</span>'}</td><td class="num ${d > 0 ? 'neg' : ''}">${d != null ? (d > 0 ? '+' : '') + d.toFixed(1).replace('.', ',') + '%' : '<span class="na">—</span>'}</td></tr>`; };
S.W17 = W16({
  sel: 'Paradise Cruise Hạ Long', overlay: drawer('Paradise Cruise Hạ Long <span class="badge b-gray">Du thuyền</span>', `
<div class="small muted" style="margin-bottom:8px">Lần đặt gửi từ 14/08 đến 11/11/2026 · giá theo USD mỗi cabin mỗi đêm</div>
<div class="flex" style="margin-bottom:8px">${chips([['all', 'Tất cả', 17], ['ok', 'Đã xác nhận', 11], ['no', 'Không đáp ứng', 4], ['wait', 'Đã gửi', 1], ['cx', 'Đã hủy', 1]], 'all')}</div>
<div class="tbl"><table class="small"><tr><th>Tour Code</th><th>Dịch vụ</th><th>Kết quả</th><th class="num">SL xác nhận / yêu cầu</th><th class="num">Giá tham chiếu</th><th class="num">Giá xác nhận</th><th class="num">Chênh</th></tr>${LD.map(ldRow).join('')}
<tr><td colspan="7" class="muted">+9 lần đặt · cuộn để xem</td></tr></table></div>
<div class="hint">Bấm Tour Code để mở tab Đặt dịch vụ của hồ sơ Tour, đúng dịch vụ.</div>`, B('Mở hồ sơ NCC ↗', 'p'), { wide: true }).replace('drawer wide', 'drawer xl'),
});

// ---------- QT12 ----------
// [Tour Code, khách, thời gian, ĐH phụ trách, sự cố, đang xử lý, khoản chi phí, chi phí {cur:v}, từ sự cố (số khoản), gợi ý thu khách {cur:v}, chưa ghi công nợ]
const T = [
  ['TP-2610-0027', 'Nordic Travel AS', '08/10 – 15/10', 'Lê Quang Huy', 3, 0, 4, { EUR: 1250, VND: 48600000 }, 3, { EUR: 1250 }, 0],
  ['TP-2610-0021', 'Atlas Voyages SARL', '02/10 – 09/10', 'Trần Minh Anh', 1, 0, 2, { VND: 6800000 }, 1, {}, 0],
  ['TP-2610-0024', 'Pacific Holidays Pty Ltd', '05/10 – 14/10', 'Phạm Thu Hà', 2, 1, 1, { VND: 2400000 }, 1, {}, 1],
  ['TP-2610-0035', 'Green Path Tours', '18/10 – 26/10', 'Trần Minh Anh', 0, 0, 1, { USD: 350 }, 0, {}, 1],
  ['TP-2610-0030', 'Kim Tours Korea', '12/10 – 17/10', 'Lê Quang Huy', 1, 0, 0, {}, 0, {}, 0],
  ['TP-2610-0033', 'Thomas Weber', '15/10 – 22/10', 'Phạm Thu Hà', 1, 1, 0, {}, 0, {}, 0],
];
const r12 = r => `<tr><td><b>${r[0]}</b><div class="small muted">${r[1]}</div></td><td>${r[2]}/2026</td><td>${r[3]}</td>
<td class="num">${r[4] ? `<span class="lnum">${r[4]}</span>${r[5] ? `<div class="small" style="color:#b45309">${r[5]} đang xử lý</div>` : ''}` : '<span class="muted">0</span>'}</td>
<td class="num">${r[6] ? `<span class="lnum">${moneyLines(r[7])}</span><div class="small muted">${r[6]} khoản${r[8] ? ` · ${r[8]} từ sự cố` : ''}</div>` : '<span class="muted">0</span>'}</td>
<td class="num">${Object.keys(r[9]).length ? moneyLines(r[9]) : '<span class="muted">·</span>'}</td><td class="num">${r[10] ? `<span class="ind a">${r[10]}</span>` : '<span class="muted">·</span>'}</td></tr>`;
const h12 = '<tr><th>Tour Code · khách</th><th>Thời gian Tour</th><th>Điều hành phụ trách</th><th class="num">Sự cố</th><th class="num">Chi phí phát sinh</th><th class="num">Gợi ý thu lại khách</th><th class="num">Chưa ghi công nợ</th></tr>';
function t12(rows) { const a = { su: 0, dx: 0, kh: 0, cp: {}, ts: 0, thu: {}, cg: 0 }; rows.forEach(r => { a.su += r[4]; a.dx += r[5]; a.kh += r[6]; Object.keys(r[7]).forEach(c => addM(a.cp, c, r[7][c])); a.ts += r[8]; Object.keys(r[9]).forEach(c => addM(a.thu, c, r[9][c])); a.cg += r[10]; }); return a; }
const ln = m => ['EUR', 'USD', 'VND'].filter(c => m[c]).map(c => money(m[c], c)).join(' · ') || '0';
const k12 = (rows, a) => kp('Tour có sự cố hoặc chi phí', rows.length, `${rows.filter(r => r[4]).length} có sự cố · ${rows.filter(r => r[6]).length} có chi phí`)
  + kp('Sự cố', `${a.su} <small>· ${a.dx} đang xử lý</small>`, 'không phân loại sự cố', a.dx ? 'warn' : '')
  + kp('Chi phí phát sinh', `≈ ${fmt(toVND(a.cp) / 1e6)} <small>tr ₫</small>`, `${a.kh} khoản · theo loại tiền ở dòng tổng`)
  + kp('Gợi ý thu lại khách', ln(a.thu), 'Điều hành ghi khi nhập chi phí')
  + kp('Chưa ghi công nợ', `${a.cg} <small>khoản</small>`, 'Kế toán ghi ở KT01.3', a.cg ? 'warn' : '');
const tg = (t, on) => `<span class="tg ${on ? 'on' : ''}" style="margin-right:12px"><i></i>${t}</span>`;
const f12 = fl('Kỳ phát sinh', 'Tháng trước (10/2026)') + fl('Tour Code', 'Tất cả') + fl('Điều hành phụ trách', 'Tất cả');
const W12page = (user, rows, o = {}) => { const a = t12(rows); return rep({
  user, side: 'Sự cố & chi phí phát sinh', title: 'Báo cáo sự cố và chi phí phát sinh', filters: f12, chipsRow: tg('Có sự cố đang xử lý', o.t1) + tg('Có khoản chưa ghi công nợ', o.t2) + (o.t1 || o.t2 ? `<span class="muted small">${rows.length} / ${T.length} Tour</span>` : ''),
  kpis: k12(rows, a), kcols: '1fr 1fr 1.2fr 1fr 1fr', note: '<div class="muted small" style="margin:-4px 0 8px">Sự cố đếm theo ngày Tour của sự cố; chi phí theo ngày của khoản. Bấm số sự cố để mở tab Nhật ký và sự cố; bấm số chi phí để mở tab Chi phí phát sinh.</div>',
  body: `<div class="tbl"><table>${h12}${rows.map(r12).join('')}<tr class="tot"><td colspan="3">Tổng · ${rows.length} Tour</td><td class="num">${a.su}</td><td class="num">${moneyLines(a.cp)}</td><td class="num">${Object.keys(a.thu).length ? moneyLines(a.thu) : '0'}</td><td class="num">${a.cg}</td></tr></table></div>`,
}); };
S.W18 = W12page('dh', T);
S.W19 = W12page('kt', T.filter(r => r[10]), { t2: true });

module.exports = S;
