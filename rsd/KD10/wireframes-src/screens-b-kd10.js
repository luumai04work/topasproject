// Wireframe KD10 · tab Lịch sử gửi (W17–W22) và trang khách nhìn thấy (W23–W26).
const { NAM, typ, ind, P, hdr, B, bd } = require('./common10');
const S = {};
const drawer = (title, body, foot2, w = 'wide', sub = '') => `<div class="overlay"></div><div class="drawer ${w}"><div class="dh"><div class="t">${title}<span class="x">✕</span></div>${sub ? `<div class="muted small" style="margin-top:2px">${sub}</div>` : ''}</div><div class="db">${body}</div><div class="df">${foot2}</div></div>`;
const chips = (arr, note = '') => `<div class="flex" style="margin:10px 0 8px">${arr.map(([n, c, on]) => `<span class="chip ${on ? 'on' : ''}">${n} <span class="cnt">${c}</span></span>`).join('')}<span class="ml muted small">${note}</span></div>`;
const tb = (extra = '') => `<div class="toolbar" style="margin:10px 0 0"><div class="input ph" style="width:300px">🔍&nbsp; Tìm khách, mã khách, email nhận</div><div class="input sel" style="width:240px"><span class="muted">Ngày gửi:&nbsp;</span>Tất cả</div>${extra}</div>`;

// ---------- Survey CD-2603-001 ----------
const euHdr = (o = {}) => hdr(Object.assign({ id: 'CD-2603-001', name: 'Khảo sát sau Tour – Inbound châu Âu', st: 'run', tab: 'log', meta: ['Gửi <b>7 ngày</b> sau khi đóng Tour · 09:00', 'Mẫu <b>Survey EU-01</b>', `Phụ trách <b>${NAM}</b>`, 'Lần gửi tiếp theo <b>12/11 09:00</b> · 2 khách'], actions: B('Tạm dừng'), cnt: '<span class="cnt r">1</span>' }, o));
const svRow = (d, n, em, tour, res, fb, o = {}) => `<tr class="${o.sel ? 'sel' : ''}"><td class="small" style="white-space:nowrap">${d}</td><td><b class="lnk">${n}</b><div class="muted small">${em}</div></td><td class="small">${tour}</td><td>${res}</td><td class="small">${fb}</td></tr>`;
const svTable = (rows) => `<div class="tbl"><table><tr><th>Ngày gửi ▼</th><th>Khách hàng · email nhận</th><th>Tour</th><th>Kết quả gửi</th><th>Phản hồi</th></tr>${rows.join('')}</table></div>`;
const EU = [
  svRow('08/11/2026 09:00', 'Müller Reisen GmbH', 'anna.schneider@muellerreisen.de', 'TP-2610-0031 · đóng 01/11', bd('Đã gửi', 'b-green'), '<span class="muted">Chưa phản hồi · link hết hạn 08/12</span>'),
  svRow('06/11/2026 09:00', 'Van den Berg Reizen BV', 'p.devries@vdbreizen.nl', 'TP-2610-0029 · đóng 30/10', bd('Gửi lỗi', 'b-red'), '<span style="color:#b91c1c">Hộp thư không tồn tại</span> ' + ind('Email đã đổi 10/11', 'b')),
  svRow('03/11/2026 09:00', 'Atlas Voyages SARL', 'claire.dubois@atlasvoyages.fr', 'TP-2610-0024 · đóng 27/10', bd('Đã gửi', 'b-green'), 'Điểm <b>8/10</b> · 04/11 · “Great guide in Hue, hotel in Hanoi was noisy.”', { sel: 1 }),
  svRow('01/11/2026 09:00', 'Thomas Weber', 't.weber@web.de', 'TP-2610-0022 · đóng 25/10', bd('Đã gửi', 'b-green'), 'Điểm <b>10/10</b> · 01/11 · “Perfect!”'),
  svRow('28/10/2026 09:00', 'Les Amis du Mékong', 'marie.laurent@amismekong.fr', 'TP-2610-0019 · đóng 21/10', bd('Đã gửi', 'b-green'), 'Điểm <b>9/10</b> · 29/10'),
  svRow('25/10/2026 09:00', 'Bavaria Reisen GmbH', 'info@bavaria-reisen.de', 'TP-2610-0015 · đóng 18/10', bd('Đã gửi', 'b-green'), '<span class="muted">Chưa phản hồi</span>'),
];
const euChips = chips([['Tất cả', 47, 1], ['Đã gửi', 46], ['Gửi lỗi', 1], ['Hủy nhận', 0], ['Đã phản hồi', 19], ['Chưa phản hồi', 27]], 'Hiển thị 1–20 / 47 · mới nhất trước');
S.W17 = P('CD-2603-001', { body: euHdr() + tb() + euChips + svTable(EU.map(r => r.replace('class="sel"', 'class=""'))) });

// W20 Chi tiết lần gửi có phản hồi
const star = n => '★★★★★'.slice(0, n) + '<span style="color:#cbd5e1">' + '★★★★★'.slice(n) + '</span>';
S.W20 = P('CD-2603-001', {
  body: euHdr() + tb() + euChips + svTable(EU), overlay: drawer('Lần gửi Survey · Atlas Voyages SARL', `<div class="grid" style="grid-template-columns:1fr 1fr"><div>
<div class="sec">Mốc thời gian</div><div class="tl"><div class="it bl"><b>03/11/2026 09:00</b> · Đã gửi tới claire.dubois@atlasvoyages.fr</div><div class="it"><b>04/11/2026 20:14</b> · Khách mở trang Survey</div><div class="it ok"><b>04/11/2026 20:19</b> · Khách gửi phản hồi (English)</div></div>
<div class="sec">Câu trả lời</div><div class="card small">
<div class="flex">Overall rating<span class="ml"><b>8 / 10</b></span></div><div class="flex">Tour guide<span class="ml" style="color:#f59e0b">${star(5)}</span></div><div class="flex">Hotels<span class="ml" style="color:#f59e0b">${star(3)}</span></div><div class="flex">Transport<span class="ml" style="color:#f59e0b">${star(4)}</span></div>
<div class="sep"></div><div class="muted">Anything we could do better?</div><div>“Great guide in Hue, hotel in Hanoi was noisy.”</div></div></div>
<div><div class="sec">Email đã gửi (bản lưu)</div><div class="email"><div class="row"><span>Đến</span>claire.dubois@atlasvoyages.fr</div><div class="row"><span>Tiêu đề</span>How was your trip with us, Ms. Claire Dubois?</div><div class="body">Dear Ms. Claire Dubois,
Thank you for travelling with us on TP-2610-0024 (16/10 – 27/10/2026).
It takes 2 minutes to tell us how it went.

[ Start the survey ]</div></div>
<div class="muted small" style="margin-top:6px">Khách: <span class="lnk">Atlas Voyages SARL</span> · Tour <span class="lnk">TP-2610-0024</span>. Phản hồi cũng hiện ở hồ sơ khách (Chăm sóc &amp; phản hồi).</div></div></div>`, `<span class="muted small">Ghi nhận chăm sóc tiếp theo làm ở hồ sơ khách hàng</span><span class="ml"></span>${B('Mở hồ sơ khách')}${B('Đóng', 'p')}`, 'xl', 'Lần gửi SV-0315-0042 · Tour TP-2610-0024'),
});

// ---------- Remarketing CD-2609-001 · gửi lại phần lỗi ----------
const spHdr = (o = {}) => hdr(Object.assign({ id: 'CD-2609-001', name: 'Ưu đãi mùa xuân 2027 – Miền Bắc', t: 'rm', st: 'run', tab: 'log', meta: ['Nhóm <b>Khách châu Âu đã đi Tour 2024–2026</b> · 179 khách nhận được', '3 bước · 15/10 – 10/12/2026', `Phụ trách <b>${NAM}</b>`, 'Lần gửi tiếp theo <b>19/11 09:00</b> · Bước 2'], actions: B('Tạm dừng'), cnt: '<span class="cnt r">4</span>' }, o));
const rmRow = (d, n, em, step, res, why, o = {}) => `<tr class="${o.sel ? 'sel' : ''} ${o.dim ? 'dim' : ''}">${o.cb !== undefined ? `<td>${o.cb === null ? '' : `<span class="cb ${o.cb ? 'on' : ''}"></span>`}</td>` : ''}<td class="small" style="white-space:nowrap">${d}</td><td><b class="lnk">${n}</b><div class="muted small">${em}</div></td><td class="small">${step}</td><td>${res}</td><td class="small">${why}</td></tr>`;
const rmTable = (rows, cb) => `<div class="tbl"><table><tr>${cb === 'blank' ? '<th style="width:26px"></th>' : cb ? `<th style="width:26px"><span class="cb ${cb}"></span></th>` : ''}<th>Ngày gửi ▼</th><th>Khách hàng · email nhận</th><th>Bước</th><th>Kết quả gửi</th><th>Lý do · ghi chú</th></tr>${rows.join('')}</table></div>`;
const stepSel = '<div class="input sel" style="width:180px"><span class="muted">Bước:&nbsp;</span>Tất cả</div>';
const ERR = (cbs, res) => [
  rmRow('15/10/2026 09:00', 'Van den Berg Reizen BV', 'p.devries@vdbreizen.nl → <b>pieter@vdbreizen.nl</b>', 'Bước 1', res ? bd('Đã gửi', 'b-green') : bd('Gửi lỗi', 'b-red'), res ? 'Gửi lại 11/11 10:31 tới email mới' : '<span style="color:#b91c1c">Hộp thư không tồn tại</span> ' + ind('Email đã đổi 10/11', 'b'), { cb: cbs[0], sel: cbs[0], dim: res }),
  rmRow('15/10/2026 09:00', 'Iberia Escapadas SL', 'lucia.gomez@iberiaescapadas.es', 'Bước 1', res ? bd('Đã gửi', 'b-green') : bd('Gửi lỗi', 'b-red'), res ? 'Gửi lại 11/11 10:31' : '<span style="color:#b91c1c">Hộp thư đầy</span> · đã tự thử lại 3 lần', { cb: cbs[1], sel: cbs[1], dim: res }),
  rmRow('15/10/2026 09:00', 'Swiss Alpine Tours AG', 'reto.keller@swissalpine.ch', 'Bước 1', bd('Gửi lỗi', 'b-red'), res ? '<span style="color:#b91c1c">Gửi lại 11/11 10:31 vẫn lỗi: máy chủ người nhận từ chối</span>' : '<span style="color:#b91c1c">Máy chủ người nhận từ chối</span>', { cb: cbs[2], sel: cbs[2] }),
  rmRow('15/10/2026 09:00', 'Thomas Weber', 't.weber@web.de', 'Bước 1', bd('Gửi lỗi', 'b-red'), '<span style="color:#b91c1c">Hộp thư không tồn tại</span> <span class="muted">· sửa email ở hồ sơ khách để gửi lại</span>', { cb: res ? null : null }),
];
S.W18 = P('CD-2609-001', {
  body: spHdr() + tb(stepSel) + chips([['Tất cả', 186], ['Đã gửi', 182], ['Gửi lỗi', 4, 1], ['Hủy nhận', 3]], '4 lần gửi lỗi')
    + `<div class="bulk"><b>Đã chọn 3 lần gửi lỗi</b><span style="opacity:.85">· gửi lại nội dung bước 1 tới email hiện tại ở hồ sơ khách</span>${B('Gửi lại 3 lần', 'p')}<span class="ml">${B('Bỏ chọn')}</span></div>`
    + rmTable(ERR([1, 1, 1, null]), 'part'),
});
S.W19 = P('CD-2609-001', {
  body: spHdr({ cnt: '<span class="cnt r">2</span>' }) + tb(stepSel) + `<div class="banner w" style="margin-top:10px"><span class="ico w">!</span><div><b>Đã gửi lại 3 lần: 2 thành công, 1 vẫn lỗi.</b> Swiss Alpine Tours AG bị máy chủ người nhận từ chối; liên hệ khách qua kênh khác hoặc sửa email ở hồ sơ khách.</div><span class="ml">${B('✕', 'sm')}</span></div>`
    + chips([['Tất cả', 186], ['Đã gửi', 184], ['Gửi lỗi', 2, 1], ['Hủy nhận', 3]], 'dòng đã gửi thành công mờ tại chỗ đến khi tải lại')
    + rmTable(ERR([null, null, null, null], true).map(r => r), 'blank')
    + `<div class="toast">Đã gửi lại 2 / 3 lần gửi lỗi.</div>`,
});

// W21 Hủy nhận
S.W21 = P('CD-2609-001', {
  body: spHdr() + tb(stepSel) + chips([['Tất cả', 186], ['Đã gửi', 182], ['Gửi lỗi', 4], ['Hủy nhận', 3, 1]], '3 khách hủy nhận từ chiến dịch này')
    + rmTable([
      rmRow('15/10/2026 09:00', 'Nordic Explorer AB', 'erik@nordicexplorer.se', 'Bước 1', bd('Đã gửi', 'b-green'), 'Hủy nhận 16/10/2026 · Nhận email chăm sóc của khách đã chuyển Không'),
      rmRow('15/10/2026 09:00', 'Klaus Becker', 'k.becker@gmx.de', 'Bước 1', bd('Đã gửi', 'b-green'), 'Hủy nhận 15/10/2026 · không nhận bước 2, 3'),
      rmRow('15/10/2026 09:00', 'Bella Italia Viaggi', 'giulia@bellaitalia.it', 'Bước 1', bd('Đã gửi', 'b-green'), 'Hủy nhận 21/10/2026 · không nhận bước 2, 3'),
    ]),
});

// W22 Chưa có lần gửi
S.W22 = P('CD-2611-002', { body: hdr({ id: 'CD-2611-002', name: 'Khảo sát sau Tour Inbound đoàn', st: 'run', tab: 'log', meta: ['Gửi <b>5 ngày</b> sau khi đóng Tour · 09:00', 'Mẫu <b>Survey GR-01</b>', `Phụ trách <b>${NAM}</b>`, 'Lần gửi tiếp theo <b>12/11 09:00</b> · 1 khách'], actions: B('Tạm dừng') }) + `<div class="tbl" style="margin-top:10px"><div class="empty"><div class="big">Chưa có lần gửi nào</div>Đợt đầu gửi lúc 12/11/2026 09:00 cho 1 khách đến hạn. Mỗi lần gửi, kết quả và phản hồi sẽ hiện ở đây.</div></div>` });

// ---------- Trang khách nhìn thấy ----------
const pub = (body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>${require('./lib').page({}).match(/<style>([\s\S]*?)<\/style>/)[1]}
.pubtop{height:56px;background:#fff;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;padding:0 40px;font-weight:700;font-size:17px;color:#1e3a8a}
.pubwrap{width:720px;margin:24px auto}</style></head><body style="background:#f1f5f9"><div class="pubtop">TOPAS Travel<span class="ml muted small" style="font-weight:400">English ▾</span></div><div class="pubwrap">${body}</div></body></html>`;
const qn = (t, inner) => `<div style="margin:12px 0"><div class="b">${t}</div>${inner}</div>`;
S.W23 = pub(`<div class="card" style="padding:22px 26px"><h2 style="margin:0 0 4px">How was your trip?</h2><div class="muted">Dear Ms. Claire Dubois, thank you for travelling with us on TP-2610-0024 (16/10 – 27/10/2026, Hanoi – Hue – Hoi An – Saigon).</div>
${qn('Overall, how would you rate your trip? <span class="req">*</span>', `<div class="flex" style="gap:4px;margin-top:6px">${[...Array(11).keys()].map(i => `<span class="pill" style="padding:4px 10px;${i === 8 ? 'background:#2563eb;color:#fff;border-color:#2563eb' : ''}">${i}</span>`).join('')}</div>`)}
${qn('Tour guide', '<div style="color:#f59e0b;font-size:20px">★★★★★</div>')}${qn('Hotels', '<div style="font-size:20px"><span style="color:#f59e0b">★★★</span><span style="color:#cbd5e1">★★</span></div>')}${qn('Transport', '<div style="font-size:20px"><span style="color:#f59e0b">★★★★</span><span style="color:#cbd5e1">★</span></div>')}
${qn('Anything we could do better?', '<div class="input area" style="min-height:70px">Great guide in Hue, hotel in Hanoi was noisy.</div>')}
<div class="flex" style="margin-top:14px"><span class="muted small">Your answers go to TOPAS Travel only. Link valid until 03/12/2026.</span><span class="ml">${B('Submit', 'p')}</span></div></div>`);
S.W24 = pub(`<div class="card" style="padding:40px 26px;text-align:center"><div style="font-size:36px">✓</div><h2 style="margin:6px 0">Thank you, Ms. Claire Dubois!</h2><div class="muted">Your feedback has been sent to our team. Nguyễn Hoàng Nam will get back to you if needed.</div><div style="margin-top:16px" class="muted small">You can close this page.</div></div>`);
S.W25 = pub(`<div class="card" style="padding:40px 26px;text-align:center"><div style="font-size:30px">⏱</div><h2 style="margin:6px 0">This survey link is no longer available</h2><div class="muted">The link expired on 08/12/2026, or the survey has already been answered.<br>If you would like to share feedback, simply reply to our email or write to care@topas.travel.</div></div>`);
S.W26 = pub(`<div class="card" style="padding:32px 26px;text-align:center"><h2 style="margin:0 0 6px">Unsubscribe from care emails?</h2><div class="muted">j.walsh@gmail.com will no longer receive surveys and offers from TOPAS Travel. Booking and trip emails from your travel consultant are not affected.</div><div style="margin-top:16px">${B('Unsubscribe', 'p')}</div><div class="banner s small" style="margin-top:18px;text-align:left"><span class="ico ok">✓</span><div>After you click: “You have been unsubscribed. We are sorry to see you go.”</div></div></div>`);

module.exports = S;
