// QT06 · Thống kê Survey và chiến dịch email. Kinh doanh: Nguyễn Hoàng Nam. Kỳ gửi mặc định 90 ngày qua (14/08 – 11/11/2026).
// Mã, tên chiến dịch khớp RSD KD09. Số liệu theo kỳ (khác số cả đời chiến dịch ở KD09).
const { fmt, fmt1, pct, fl, kp, rep, B, bd, drawerX } = Object.assign(require('./common'), { drawerX: require('./lib').drawer });
const S = {};
const ST = { run: bd('Đang chạy', 'b-green'), pause: bd('Tạm dừng', 'b-amber') };
const TYP = { sv: '<span class="badge b-cyan" style="font-size:11px">Survey</span>', rm: '<span class="badge b-violet" style="font-size:11px">Remarketing</span>' };
// [mã, tên, loại, trạng thái, phụ trách, đã gửi, gửi lỗi, hủy nhận, kết quả]
// Survey: kết quả = [phản hồi, điểm TB]; Remarketing: [khách có yêu cầu mới, trong đó có Booking]
const C = {
  eu: ['CD-2603-001', 'Khảo sát sau Tour – Inbound châu Âu', 'sv', 'run', 'Nguyễn Hoàng Nam', 14, 1, 0, [6, 8.7]],
  as: ['CD-2604-001', 'Khảo sát sau Tour – châu Á', 'sv', 'run', 'Lê Thu Hà', 9, 0, 0, [4, 8.0]],
  cu: ['CD-2605-001', 'Khảo sát Tour Customized riêng tư', 'sv', 'pause', 'Lê Thu Hà', 5, 0, 0, [3, 9.0]],
  sp: ['CD-2609-001', 'Ưu đãi mùa xuân 2027 – Miền Bắc', 'rm', 'run', 'Nguyễn Hoàng Nam', 182, 4, 3, [7, 2]],
  au: ['CD-2606-001', 'Chào hè 2026 – khách cá nhân Úc', 'rm', 'run', 'Vũ Đức Minh', 95, 2, 2, [2, 0]],
  fr: ['CD-2608-001', 'Mùa thu 2026 – khách Pháp', 'rm', 'pause', 'Vũ Đức Minh', 64, 0, 1, [3, 1]],
  jp: ['CD-2610-002', 'Tết 2027 cho đại lý Nhật Bản', 'rm', 'run', 'Phạm Thanh Tùng', 24, 0, 0, [1, 0]],
};
const res = r => r[2] === 'sv'
  ? `Phản hồi <b>${r[8][0]}</b> · ${pct(r[8][0], r[5])} · điểm TB <b>${fmt1(r[8][1])}</b>`
  : `Có yêu cầu Tour mới <b>${r[8][0]}</b> · ${r[8][1]} có Booking`;
const row = (r, o = {}) => `<tr class="${o.sel ? 'sel' : ''}"><td><b class="lnk" style="text-decoration:none">${r[0]}</b> ${TYP[r[2]]}<div class="small">${r[1]}</div></td><td>${ST[r[3]]}</td><td>${r[4]}</td>
<td class="num">${o.zero ? '<span class="muted">0</span>' : fmt(r[5])}</td><td class="num">${o.zero ? '<span class="muted">0</span>' : r[6] ? `<span class="neg">${r[6]}</span>` : '0'}</td><td class="num">${o.zero ? '<span class="muted">0</span>' : r[7]}</td><td>${o.zero ? `<span class="muted small">${o.zero}</span>` : res(r)}</td></tr>`;
const head = '<tr><th>Chiến dịch</th><th>Trạng thái</th><th>Phụ trách</th><th class="num">Đã gửi</th><th class="num">Gửi lỗi</th><th class="num">Hủy nhận</th><th>Kết quả trong kỳ</th></tr>';
const grp = (t, rows) => `<tr class="grp"><td colspan="7">${t}</td></tr>${rows}`;
const SVK = ['eu', 'as', 'cu'], RMK = ['sp', 'au', 'fr', 'jp'];
const tot = ks => ks.reduce((a, k) => [a[0] + C[k][5], a[1] + C[k][6], a[2] + C[k][7], a[3] + C[k][8][0], a[4] + (C[k][2] === 'sv' ? C[k][8][0] * C[k][8][1] : C[k][8][1])], [0, 0, 0, 0, 0]);
const tS = tot(SVK), tR = tot(RMK);
const avgS = Math.round(tS[4] / tS[3] * 10) / 10;

const filtersDef = (k = '90 ngày qua (14/08 – 11/11/2026)', l = 'Tất cả', c = 'Tất cả (7)', set = false) =>
  fl('Kỳ gửi', k, set ? 'set' : '') + fl('Loại', l, set ? 'set' : '') + fl('Chiến dịch', c);

const W01body = (sel) => `<div class="tbl"><table>${head}
${grp(`Survey · ${SVK.length} chiến dịch · đã gửi ${tS[0]} · phản hồi ${tS[3]} (${pct(tS[3], tS[0])}) · điểm TB ${fmt1(avgS)}`, SVK.map(k => row(C[k], { sel: sel === k })).join(''))}
${grp(`Remarketing · ${RMK.length} chiến dịch · đã gửi ${tR[0]} · khách có yêu cầu Tour mới ${tR[3]} · ${tR[4]} có Booking`, RMK.map(k => row(C[k], { sel: sel === k })).join(''))}
<tr class="tot"><td colspan="3">Tổng · 7 chiến dịch</td><td class="num">${fmt(tS[0] + tR[0])}</td><td class="num">${tS[1] + tR[1]}</td><td class="num">${tS[2] + tR[2]}</td><td></td></tr>
</table></div><div class="muted small" style="margin-top:6px">Bấm dòng để xem kết quả chi tiết của chiến dịch. Chiến dịch Nháp không có lần gửi nên không hiện.</div>`;
const W01kpis = kp('Đã gửi trong kỳ', fmt(tS[0] + tR[0]), `Survey ${tS[0]} · Remarketing ${tR[0]}`)
  + kp('Gửi lỗi', tS[1] + tR[1], 'chưa gửi lại thành công', 'warn')
  + kp('Phản hồi Survey', `${tS[3]} <small>· ${pct(tS[3], tS[0])}</small>`, `trên ${tS[0]} lần gửi Survey`)
  + kp('Điểm tổng thể TB', `${fmt1(avgS)} <small>/ 10</small>`, `${tS[3]} phản hồi có điểm`)
  + kp('Khách có yêu cầu Tour mới', `${tR[3]} <small>· ${tR[4]} có Booking</small>`, 'sau email Remarketing')
  + kp('Hủy nhận', tS[2] + tR[2], 'khách tắt nhận email');
const W01 = (o = {}) => rep({
  user: 'kd', side: 'Survey & chiến dịch email', title: 'Thống kê Survey và chiến dịch email',
  filters: filtersDef(), kpis: W01kpis, kcols: '1.25fr repeat(5,1fr)', body: W01body(o.sel), overlay: o.overlay || '',
});
S.W01 = W01();

// W02 · Bảng trượt kết quả Survey CD-2603-001
const sc = [0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1]; // điểm 0–10: 7,8,9,9,9,10 → TB 8,7
const hist = `<div class="hist">${sc.map((n, i) => `<div class="${i >= 9 ? 'g' : i <= 6 ? 'r' : ''}" style="height:${n ? n * 20 + 6 : 2}px" title="${n}"></div>`).join('')}</div><div class="histx">${sc.map((_, i) => `<span>${i}</span>`).join('')}</div>`;
const q = (t, a) => `<tr><td>${t}</td><td>${a}</td></tr>`;
S.W02 = W01({
  sel: 'eu', overlay: drawerX(`CD-2603-001 ${TYP.sv}`, `
<div class="small muted" style="margin-bottom:8px">Khảo sát sau Tour – Inbound châu Âu · Kỳ gửi 14/08 – 11/11/2026 · nội dung Survey: 1 phiên bản trong kỳ</div>
<div class="kpis" style="grid-template-columns:repeat(5,1fr);margin-bottom:6px">${kp('Đã gửi', 14)}${kp('Phản hồi', '6 <small>· 43%</small>')}${kp('Chờ phản hồi', 5, 'link còn hạn')}${kp('Hết hạn', 3, 'không phản hồi')}${kp('Gửi lỗi', 1, 'chưa gửi lại', 'warn')}</div>
<div class="f2" style="gap:0 16px"><div><div class="sec">Điểm tổng thể (0–10) · TB 8,7 · 6 phản hồi</div>${hist}</div>
<div><div class="sec">Câu chọn mức 1–5 · điểm trung bình</div><table class="small">${q('Hướng dẫn viên', '4,8')}${q('Khách sạn', '4,2')}${q('Xe và tài xế', '4,5')}${q('Ăn uống', '3,9')}${q('Sẽ giới thiệu bạn bè', 'Có 5 · Chưa chắc 1')}</table></div></div>
<div class="sec">Ý kiến (4 / 6 phản hồi có ý kiến) · mới nhất trước</div>
<table class="small"><tr><th>Ngày</th><th>Khách · Tour</th><th class="num">Điểm</th><th>Ý kiến</th></tr>
<tr><td>08/11</td><td>Nordic Travel AS · TP-2610-0027</td><td class="num">7</td><td>Đổi khách sạn ngày 3 do ngập, xử lý nhanh nhưng bữa tối hôm đó chưa tốt.</td></tr>
<tr><td>02/11</td><td>Andersen Rejser A/S · TP-2609-0018</td><td class="num">9</td><td>HDV tiếng Đan Mạch rất tốt, lịch trình hợp lý.</td></tr>
<tr><td>24/10</td><td>Atlas Voyages SARL · TP-2610-0021</td><td class="num">10</td><td>Parfait, merci à toute l'équipe.</td></tr>
<tr><td>19/10</td><td>Hans Becker · TP-2609-0044</td><td class="num">9</td><td>Hạ Long rất đẹp; xe đón sân bay trễ 20 phút.</td></tr></table>`,
    `<span class="muted small" style="margin-right:auto">Từng lần gửi và câu trả lời đầy đủ xem ở tab Lịch sử gửi của chiến dịch</span>${B('Mở chiến dịch ↗', 'p')}`, { wide: true }),
});

// W03 · Bảng trượt kết quả Remarketing CD-2609-001
S.W03 = W01({
  sel: 'sp', overlay: drawerX(`CD-2609-001 ${TYP.rm}`, `
<div class="small muted" style="margin-bottom:8px">Ưu đãi mùa xuân 2027 – Miền Bắc · Kỳ gửi 14/08 – 11/11/2026 · 3 bước</div>
<div class="kpis" style="grid-template-columns:repeat(4,1fr);margin-bottom:6px">${kp('Đã gửi', 182)}${kp('Gửi lỗi', 4, 'chưa gửi lại', 'warn')}${kp('Hủy nhận', 3)}${kp('Khách có yêu cầu Tour mới', '7 <small>· 2 có Booking</small>', '4% số khách đã nhận')}</div>
<div class="sec">Theo bước</div>
<table class="small"><tr><th>Bước</th><th>Ngày giờ gửi</th><th>Tình trạng</th><th class="num">Đã gửi</th><th class="num">Gửi lỗi</th><th class="num">Hủy nhận</th></tr>
<tr><td>1 · Spring 2027 in Northern Vietnam – early bird</td><td>15/10/2026 09:00</td><td>${bd('Đã gửi', 'b-green')}</td><td class="num">182</td><td class="num neg">4</td><td class="num">3</td></tr>
<tr class="dim"><td>2 · Ha Long &amp; Sapa: 10% off until 31/12</td><td>19/11/2026 09:00</td><td>${bd('Sắp gửi', 'b-blue')} <span class="small">dự kiến 179 khách</span></td><td class="num">—</td><td class="num">—</td><td class="num">—</td></tr>
<tr class="dim"><td>3 · Last call: spring 2027 departures</td><td>10/12/2026 09:00</td><td>${bd('Chờ', 'b-gray')}</td><td class="num">—</td><td class="num">—</td><td class="num">—</td></tr></table>
<div class="sec">Khách có yêu cầu Tour mới sau lần gửi đầu tiên (7) · không nhận các bước sau</div>
<table class="small"><tr><th>Khách</th><th>Yêu cầu</th><th>Tạo ngày</th><th>Trạng thái yêu cầu</th><th>Phụ trách yêu cầu</th></tr>
<tr><td>Müller Reisen GmbH</td><td class="lnk">YC-2610-0041</td><td>18/10/2026</td><td>${bd('Đã có Booking', 'b-green')} BK-2610-0152</td><td>Nguyễn Hoàng Nam</td></tr>
<tr><td>Atlas Voyages SARL</td><td class="lnk">YC-2610-0045</td><td>21/10/2026</td><td>${bd('Đã có Booking', 'b-green')} BK-2610-0144</td><td>Lê Thu Hà</td></tr>
<tr><td>Thomas Weber</td><td class="lnk">YC-2610-0049</td><td>24/10/2026</td><td>${bd('Đang xử lý', 'b-blue')}</td><td>Nguyễn Hoàng Nam</td></tr>
<tr><td>Nordic Travel AS</td><td class="lnk">YC-2610-0052</td><td>27/10/2026</td><td>${bd('Đang xử lý', 'b-blue')}</td><td>Vũ Đức Minh</td></tr>
<tr><td>Hans Becker</td><td class="lnk">YC-2611-0003</td><td>02/11/2026</td><td>${bd('Đang xử lý', 'b-blue')}</td><td>Nguyễn Hoàng Nam</td></tr>
<tr><td colspan="5" class="muted">+2 khách · cuộn để xem</td></tr></table>
<div class="hint">Đếm khách có yêu cầu Tour tạo sau lần gửi đầu tiên khách nhận của chiến dịch (cùng mốc dừng luồng). Số này không khẳng định khách đặt vì email.</div>`,
    `${B('Mở chiến dịch ↗', 'p')}`, { wide: true }),
});

module.exports = S;
