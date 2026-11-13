// QT08 · Báo cáo chuyển đổi yêu cầu và báo giá. Kinh doanh xem mọi yêu cầu. Kỳ tạo yêu cầu mặc định 90 ngày qua (14/08 – 11/11/2026).
// Đếm theo yêu cầu (không theo phiên bản), theo người phụ trách hiện tại của yêu cầu.
const { pct, fl, kp, rep, bd, rbar } = require('./common');
const S = {};
// [nhóm, yêu cầu, có báo giá, có Booking (từng tạo), Đã có Booking (hiện), Đã hủy, Đang xử lý]
const BY_PT = [
  ['Nguyễn Hoàng Nam', 22, 18, 8, 7, 5, 10],
  ['Lê Thu Hà', 19, 15, 6, 5, 6, 8],
  ['Vũ Đức Minh', 20, 14, 4, 4, 4, 12],
  ['Trần Quốc Bảo <span class="muted small">(ngừng hoạt động)</span>', 3, 3, 1, 1, 2, 0],
];
const BY_HT = [
  ['Bằng AI', 26, 23, 8, 7, 6, 13],
  ['Từ Tour mẫu', 21, 19, 8, 7, 5, 9],
  ['Thủ công', 11, 8, 3, 3, 3, 5],
  ['Chưa có hành trình', 6, 0, 0, 0, 3, 3],
];
const LYDO = [['Giá cao hơn ngân sách', 6], ['Khách chọn đơn vị khác', 4], ['Khách hoãn chuyến', 3], ['Booking đã hủy', 2], ['Không phản hồi', 1], ['Khác', 1]];
const T = BY_PT.reduce((a, r) => a.map((v, i) => v + r[i + 1]), [0, 0, 0, 0, 0, 0]);
const L = n => `<span class="lnum">${n}</span>`;
const row = (r, sel) => `<tr${sel ? ' class="sel"' : ''}><td>${r[0]}</td><td class="num">${L(r[1])}</td><td class="num">${L(r[2])} <span class="muted small">${pct(r[2], r[1])}</span></td><td class="num">${L(r[3])}</td>
<td style="width:150px"><div class="flex"><b style="width:34px;text-align:right">${pct(r[3], r[1])}</b>${rbar(r[1] ? r[3] * 100 / r[1] : 0, 'g')}</div></td><td class="num">${L(r[4])}</td><td class="num">${L(r[5])}</td><td class="num">${L(r[6])}</td></tr>`;
const head = g => `<tr><th>${g}</th><th class="num">Yêu cầu</th><th class="num">Có báo giá</th><th class="num">Chốt Booking</th><th>Tỷ lệ chốt</th><th class="num">Đang có Booking</th><th class="num">Đã hủy</th><th class="num">Đang xử lý</th></tr>`;
const totRow = `<tr class="tot"><td>Tổng</td><td class="num">${T[0]}</td><td class="num">${T[1]} <span class="muted small">${pct(T[1], T[0])}</span></td><td class="num">${T[2]}</td><td><b>${pct(T[2], T[0])}</b></td><td class="num">${T[3]}</td><td class="num">${T[4]}</td><td class="num">${T[5]}</td></tr>`;
const funnel = `<div class="funnel" style="margin-bottom:10px">
<div class="st"><div class="l">Yêu cầu tạo trong kỳ</div><div class="v">${T[0]}</div><div class="small muted">Đang xử lý ${T[5]}</div></div><div class="ar">›</div>
<div class="st"><div class="l">Có báo giá</div><div class="v">${T[1]} <small class="muted" style="font-size:12px">${pct(T[1], T[0])}</small></div><div class="small muted">có ít nhất một phiên bản</div></div><div class="ar">›</div>
<div class="st" style="border-color:#86efac"><div class="l">Chốt Booking</div><div class="v">${T[2]} <small class="muted" style="font-size:12px">${pct(T[2], T[0])} yêu cầu · ${pct(T[2], T[1])} có báo giá</small></div><div class="small muted">đang có Booking ${T[3]} · Booking đã hủy ${T[2] - T[3]}</div></div>
<div class="st" style="flex:.8;border-color:#fca5a5"><div class="l">Đã hủy</div><div class="v">${T[4]} <small class="muted" style="font-size:12px">${pct(T[4], T[0])}</small></div><div class="small muted">lý do ở bảng bên phải</div></div></div>`;
const lydo = `<div class="card" style="padding:10px 12px"><h3>Lý do hủy <span class="muted small" style="font-weight:400">${T[4]} yêu cầu</span></h3>${LYDO.map(([t, n]) => `<div class="flex small" style="margin-bottom:5px"><span style="width:150px">${t}</span>${rbar(n * 100 / 6, 'r')}<span class="lnum" style="width:18px;text-align:right">${n}</span></div>`).join('')}</div>`;
const seg = (on, n = '') => `<div class="seg2" style="margin-bottom:10px"><span class="${on === 'th' ? 'on' : ''}">Tổng hợp</span><span class="${on === 'ds' ? 'on' : ''}">Danh sách yêu cầu${n}</span></div>`;
const filters = (ht = 'Tất cả', grp = 'Người phụ trách', set) => fl('Kỳ tạo yêu cầu', '90 ngày qua (14/08 – 11/11/2026)') + fl('Người phụ trách', 'Tất cả') + fl('Cách tạo hành trình', ht) + fl('Nhóm theo', grp, set ? 'set' : '');
const thBody = (rows, g, sel) => `${seg('th')}${funnel}<div class="grid" style="grid-template-columns:1fr 300px;align-items:start"><div class="tbl"><table>${head(g)}${rows.map(r => row(r, sel === r[0])).join('')}${totRow}</table></div>${lydo}</div>
<div class="muted small" style="margin-top:6px">Bấm một số để xem danh sách yêu cầu tương ứng. Chốt Booking đếm yêu cầu đã từng tạo Booking, kể cả Booking sau đó bị hủy.</div>`;
S.W08 = rep({ user: 'kd', side: 'Chuyển đổi yêu cầu', title: 'Báo cáo chuyển đổi yêu cầu và báo giá', filters: filters(), body: thBody(BY_PT, 'Người phụ trách') });
S.W09 = rep({ user: 'kd', side: 'Chuyển đổi yêu cầu', title: 'Báo cáo chuyển đổi yêu cầu và báo giá', filters: filters('Tất cả', 'Cách tạo hành trình', true), clear: true, body: thBody(BY_HT, 'Cách tạo hành trình') });

// W10 · Danh sách yêu cầu: bấm số Đã hủy (5) của Nguyễn Hoàng Nam
const KQ = { 'Chốt': 'b-green', 'Cần điều chỉnh': 'b-amber', 'Không chốt': 'b-gray', 'Chưa có kết quả': 'b-blue' };
const DS = [
  ['YC-2608-0031', 'Sakura Travel Japan', '20/08/2026', 'Từ Tour mẫu', 'v2', 'Chốt', 'Booking đã hủy', 'BK-2609-0119 · hủy 28/09'],
  ['YC-2609-0012', 'Andersen Rejser A/S', '03/09/2026', 'Bằng AI', 'v3', 'Không chốt', 'Giá cao hơn ngân sách', ''],
  ['YC-2609-0040', 'Global Ventures Inc', '22/09/2026', 'Bằng AI', 'v1', 'Cần điều chỉnh', 'Khách chọn đơn vị khác', ''],
  ['YC-2610-0008', 'Hans Becker', '06/10/2026', 'Thủ công', 'v1', 'Chưa có kết quả', 'Không phản hồi', ''],
  ['YC-2610-0033', 'Wanderlust Australia', '25/10/2026', 'Bằng AI', 'v2', 'Không chốt', 'Giá cao hơn ngân sách', ''],
];
const tag = t => `<span class="tag">${t} <span class="muted">✕</span></span>`;
S.W10 = rep({
  user: 'kd', side: 'Chuyển đổi yêu cầu', title: 'Báo cáo chuyển đổi yêu cầu và báo giá', filters: filters(), body: `${seg('ds', ' (5)')}
<div class="flex" style="margin-bottom:8px"><span class="muted small">Đang xem:</span>${tag('Phụ trách: Nguyễn Hoàng Nam')}${tag('Trạng thái: Đã hủy')}<span class="muted small">· trong 22 yêu cầu của kỳ</span></div>
<div class="tbl"><table><tr><th>Yêu cầu · khách</th><th>Tạo ngày</th><th>Cách tạo hành trình</th><th>Báo giá mới nhất</th><th>Trạng thái</th><th>Lý do hủy</th></tr>
${DS.map(r => `<tr><td><b class="lnk" style="text-decoration:none">${r[0]}</b><div class="small muted">${r[1]}</div></td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]} ${bd(r[5], KQ[r[5]])}</td><td>${bd('Đã hủy', 'b-gray')}</td><td>${r[6]}${r[7] ? `<div class="small muted">${r[7]}</div>` : ''}</td></tr>`).join('')}
</table></div><div class="muted small" style="margin-top:6px">Bấm dòng để mở hồ sơ yêu cầu Tour (KD06) ở tab đích. Quay lại thì giữ danh sách và bộ lọc.</div>`,
});

module.exports = S;
