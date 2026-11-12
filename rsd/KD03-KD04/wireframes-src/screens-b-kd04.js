// Wireframe KD04 · Hồ sơ khách hàng (4 tab) và đích KD06.1 khi tạo yêu cầu. Tên và mục đích ở captions.js.
// Dữ liệu minh họa: hôm nay 11/11/2026. Müller Reisen GmbH (KH-00128) do Nguyễn Hoàng Nam phụ trách:
// 3 Tour đã đi; 6 yêu cầu = 1 Đang xử lý + 4 Đã có Booking + 1 Đã hủy; Tour TP-2610-0031 đóng 05/11/2026 chưa chăm sóc.
const { page, modal, f, B, bd, USERS } = require('./lib');
const S = {};
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const typ = t => t === 'DN' ? bd('Doanh nghiệp', 'b-violet') : bd('Cá nhân', 'b-cyan');
const tg = (on, ro) => `<span class="tg ${on ? 'on' : ''} ${ro ? 'ro' : ''}"><i></i>${on ? 'Có' : 'Không'}</span>`;

const CU = {
  mu: { n: 'Müller Reisen GmbH', t: 'DN', code: 'KH-00128', nat: 'Đức', lang: 'Tiếng Đức', ct: 'Anna Schneider · anna.schneider@muellerreisen.de', pt: 'Nguyễn Hoàng Nam', tours: 3 },
  as: { n: 'Anna Schneider', t: 'CN', code: 'KH-00413', nat: 'Đức', lang: 'Tiếng Đức', ct: 'anna.schneider@gmx.de · +49 151 2345 6789', pt: 'Nguyễn Hoàng Nam', tours: 0 },
};
const TABS = [['info', 'Thông tin khách hàng'], ['hist', 'Lịch sử Tour'], ['req', 'Yêu cầu & Booking'], ['care', 'Chăm sóc và phản hồi']];

// Header hồ sơ. user: kd (Nguyễn Hoàng Nam), lh (Lê Thu Hà), qt (Quản trị). pt: người phụ trách hiện tại.
function hdr({ c = 'mu', tab = 'info', user = 'kd', pt, cnt, menu = '' } = {}) {
  const x = CU[c];
  const owner = (pt || x.pt);
  const isOwner = USERS[user][1] === owner;
  const k = cnt || (c === 'mu' ? { req: '<span class="cnt">1</span>', care: '<span class="cnt w">1</span>' } : {});
  let actions;
  if (user === 'qt') actions = B('Chuyển phụ trách');
  else if (isOwner) actions = B('+ Tạo yêu cầu Tour', 'p') + B('Chuyển phụ trách') + B('⋯');
  else actions = B('+ Tạo yêu cầu Tour', 'p');
  const note = isOwner ? '' : `<span class="muted small" style="margin-left:6px">🔒 Chỉ xem · do ${owner} phụ trách</span>`;
  return `<div class="hdr" style="position:relative"><div class="r1"><span class="code">${x.n}</span>${typ(x.t)}${note}<div class="actions">${actions}</div></div>
<div class="meta"><span>Mã <b>${x.code}</b></span><span>${x.t === 'DN' ? 'Quốc gia' : 'Quốc tịch'} <b>${x.nat}</b></span><span>Ngôn ngữ <b>${x.lang}</b></span><span>${x.t === 'DN' ? 'Liên hệ chính' : 'Liên hệ'} <b>${x.ct}</b></span><span>Phụ trách <b>${owner}</b></span><span>Tour đã đi <b>${x.tours}</b></span></div>
<div class="tabs">${TABS.map(([id, n]) => `<div class="tab ${id === tab ? 'on' : ''}">${n}${k[id] ? ' ' + k[id] : ''}</div>`).join('')}</div>${menu}</div>`;
}
const P = (o, last) => page(Object.assign({ crumb: 'Khách hàng', last: last || 'Müller Reisen GmbH', side: 'Khách hàng' }, o));

// ---------- Form KD04.1 ----------
const card = (h, body, st = '') => `<div class="card" style="${st}"><h3>${h}</h3>${body}</div>`;
// ro: chỉ đọc (viền nét đứt); create: trường người dùng đang nhập
function formCN({ ro = false, err = false, v = {}, saved = false } = {}) {
  const c = ro ? 'ro' : '';
  const name = err ? f('Họ và tên', '', { req: 1, cls: 'bad', err: 'Nhập họ và tên' }) : f('Họ và tên', v.name || 'Anna Schneider', { req: 1, cls: c });
  const em = err ? f('Email', 'anna.schneider@gmx', { cls: 'bad', err: 'Email chưa đúng định dạng' }) : f('Email', 'anna.schneider@gmx.de', { cls: c });
  return `<div class="grid" style="grid-template-columns:1.45fr 1fr">
${card('Thông tin cá nhân', `<div class="grid" style="grid-template-columns:110px 1fr;gap:0 12px">${f('Danh xưng', 'Ms', { cls: ro ? 'ro' : 'sel' })}${name}</div>
<div class="f2">${f('Quốc tịch', 'Đức', { req: 1, cls: ro ? 'ro' : 'sel' })}${f('Ngôn ngữ giao tiếp', 'Tiếng Đức', { req: 1, cls: ro ? 'ro' : 'sel', auto: ro || saved ? '' : 'Gợi ý theo quốc tịch' })}</div>
<div class="f2">${f('Ngày sinh', 'dd/mm/yyyy', { cls: 'ph ' + c })}${f('Nguồn khách', 'Email trực tiếp', { cls: ro ? 'ro' : 'sel' })}</div>
<div class="sec">Liên hệ</div><div class="f2">${em}${f('Điện thoại', '+49 151 2345 6789', { cls: c })}</div>
<div class="hint" style="margin:-6px 0 8px">Cần ít nhất email hoặc điện thoại.</div>
${f('Địa chỉ', 'Leopoldstraße 12, 80802 München', { cls: c })}`)}
${card('Khác', `${f('Ghi chú và sở thích', 'Ăn chay. Thích Tour đi bộ nhẹ, khách sạn boutique yên tĩnh.', { cls: 'area ' + c })}
<div class="field"><label>Nhận email chăm sóc</label>${tg(1, ro)}<div class="hint">Khách đồng ý nhận Survey và email chăm sóc, remarketing (dùng ở KD10).</div></div>
${f('Người phụ trách', 'Nguyễn Hoàng Nam', { cls: 'ro', auto: ro || saved ? '' : 'Người tạo' })}`)}</div>`;
}
function contacts({ ro = false, changed = false, create = false } = {}) {
  const rows = create
    ? [[1, 'Tanaka Hiroshi', 'Sales Manager', 'h.tanaka@sakura-holidays.jp', '+81 90 1234 5678'], [0, 'Yamamoto Aiko', 'Operations', 'a.yamamoto@sakura-holidays.jp', '']]
    : [[1, 'Anna Schneider', 'Product Manager Asien', 'anna.schneider@muellerreisen.de', '+49 151 2345 6789'], [0, 'Jonas Weber', 'Group Coordinator', 'jonas.weber@muellerreisen.de', changed ? '+49 89 2154 3399' : '+49 89 2154 3325']];
  const cell = (t, cls = '') => `<div class="input ${ro ? 'ro' : ''} ${cls}" style="height:28px">${t || '<span class="muted">—</span>'}</div>`;
  return `<div class="tbl"><table><tr><th style="width:92px">Liên hệ chính</th><th>Họ và tên <span class="req">*</span></th><th>Chức vụ</th><th>Email</th><th>Điện thoại</th>${ro ? '' : '<th style="width:30px"></th>'}</tr>
${rows.map(([m, n, r, e, p], i) => `<tr><td style="text-align:center"><span class="rd ${m ? 'on' : ''}"></span></td><td>${cell(n)}</td><td>${cell(r)}</td><td>${cell(e)}</td><td>${cell(p, changed && i === 1 ? 'focus' : '')}${changed && i === 1 ? '<div class="small" style="color:#1d4ed8">Đã sửa · trước: +49 89 2154 3325</div>' : ''}</td>${ro ? '' : `<td class="muted">${m ? '' : '🗑'}</td>`}</tr>`).join('')}
</table>${ro ? '' : `<div style="padding:6px 10px">${B('+ Thêm người liên hệ', 'lk')}</div>`}</div>`;
}
function formDN({ ro = false, changed = false, create = false } = {}) {
  const c = ro ? 'ro' : '';
  const d = create
    ? { n: 'Sakura Holidays Inc.', s: 'Sakura Holidays', nat: 'Nhật Bản', lang: 'Tiếng Nhật', tax: '7010401089234', web: 'sakura-holidays.jp', em: 'info@sakura-holidays.jp', ph: '+81 3 5555 0123', ad: '2-7-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo', src: 'Hội chợ ITB Asia 2026', note: 'Đoàn công ty 20–40 khách, ưu tiên khách sạn 4 sao, cần HDV tiếng Nhật.' }
    : { n: 'Müller Reisen GmbH', s: 'Müller Reisen', nat: 'Đức', lang: 'Tiếng Đức', tax: 'DE811234567', web: 'muellerreisen.de', em: 'info@muellerreisen.de', ph: '+49 89 2154 3300', ad: 'Sendlinger Straße 21, 80331 München', src: 'Đối tác lâu năm', note: 'Đoàn 16–25 khách, HDV tiếng Đức bắt buộc. Gửi báo giá bằng EUR. Hạn chót xác nhận phòng 45 ngày trước khởi hành.' };
  return `<div class="grid" style="grid-template-columns:1.45fr 1fr">
${card('Thông tin doanh nghiệp', `<div class="f2">${f('Tên doanh nghiệp', d.n, { req: 1, cls: c })}${f('Tên giao dịch', d.s, { cls: c })}</div>
<div class="f2">${f('Quốc gia', d.nat, { req: 1, cls: ro ? 'ro' : 'sel' })}${f('Ngôn ngữ giao tiếp', d.lang, { req: 1, cls: ro ? 'ro' : 'sel', auto: create ? 'Gợi ý theo quốc gia' : '' })}</div>
<div class="f2">${f('Mã số thuế', d.tax, { cls: c })}${f('Website', d.web, { cls: c })}</div>
<div class="f2">${f('Email chung', d.em, { cls: c })}${f('Điện thoại', d.ph, { cls: c })}</div>
${f('Địa chỉ', d.ad, { cls: c })}`)}
${card('Khác', `${f('Nguồn khách', d.src, { cls: ro ? 'ro' : 'sel' })}${f('Ghi chú và sở thích', d.note, { cls: 'area ' + c })}
<div class="field"><label>Nhận email chăm sóc</label>${tg(1, ro)}<div class="hint">Gửi tới email của liên hệ chính.</div></div>
${f('Người phụ trách', 'Nguyễn Hoàng Nam', { cls: 'ro', auto: create ? 'Người tạo' : '' })}`)}</div>
<div class="card" style="margin-top:10px;padding:10px 12px"><h3>Người liên hệ <span class="muted small" style="font-weight:400">Cần ít nhất một người có email hoặc điện thoại; đúng một liên hệ chính</span></h3>${contacts({ ro, changed, create })}</div>`;
}
const foot = (left, right) => `<div class="flex" style="position:absolute;left:18px;right:18px;bottom:0;background:#fff;border-top:1px solid #e5e7eb;padding:9px 16px;margin:0 -18px">${left}<span class="ml flex">${right}</span></div>`;

// Header khi tạo mới
function hdrNew(type = 'CN') {
  const seg = (t, on) => `<span style="padding:4px 12px;border-radius:6px;${on ? 'background:#1e40af;color:#fff;font-weight:600' : 'color:#374151'}">${t}</span>`;
  return `<div class="hdr"><div class="r1"><span class="code">Khách hàng mới</span><span style="display:inline-flex;border:1px solid #d1d5db;border-radius:7px;padding:2px;margin-left:8px">${seg('Cá nhân', type === 'CN')}${seg('Doanh nghiệp', type === 'DN')}</span><span class="muted small" style="margin-left:6px">Loại khách chỉ chọn khi tạo</span></div>
<div class="tabs">${TABS.map(([id, n]) => `<div class="tab ${id === 'info' ? 'on' : 'lock'}">${n}${id === 'info' ? '' : ' 🔒'}</div>`).join('')}<span class="muted small" style="margin-left:10px;align-self:center">Lưu thông tin để mở các tab khác</span></div></div>`;
}
const PN = o => page(Object.assign({ crumb: 'Khách hàng', last: 'Tạo khách hàng', side: 'Khách hàng' }, o));
const newFoot = foot('<span class="muted small"><span class="req">*</span> Bắt buộc</span>', B('Hủy') + B('Lưu và tạo yêu cầu Tour') + B('Lưu', 'p'));

// ---------- W08 Tạo khách hàng cá nhân ----------
const W08body = hdrNew('CN') + `<div style="margin-top:10px">${formCN()}</div>` + newFoot;
S.W08 = PN({ body: W08body });
// ---------- W09 Tạo khách hàng doanh nghiệp ----------
S.W09 = PN({ body: hdrNew('DN') + `<div style="margin-top:10px">${formDN({ create: true })}</div>` + newFoot });
// ---------- W10 Lỗi nhập ----------
S.W10 = PN({ body: hdrNew('CN') + `<div class="banner e" style="margin-top:10px"><span class="ico e">!</span>Còn 2 lỗi. Sửa các ô tô đỏ rồi bấm Lưu lại; dữ liệu đã nhập được giữ nguyên.</div><div style="margin-top:8px">${formCN({ err: true })}</div>` + newFoot });
// ---------- W11 Cảnh báo trùng ----------
S.W11 = PN({
  body: W08body, overlay: modal('Có thể trùng khách hàng đã có', `<div style="margin-bottom:10px">Điện thoại <b>+49 151 2345 6789</b> đã có trong 1 hồ sơ. Kiểm tra trước khi tạo mới để lịch sử Tour của cùng một khách không bị tách.</div>
<div class="tbl"><table><tr><th>Khách hàng</th><th>Trùng theo</th><th>Phụ trách</th><th class="num">Tour đã đi</th><th></th></tr>
<tr><td><b>Müller Reisen GmbH</b> ${typ('DN')}<div class="muted small">KH-00128 · Đức</div></td><td>Điện thoại của người liên hệ <b>Anna Schneider</b></td><td>Nguyễn Hoàng Nam</td><td class="num">3</td><td>${B('Mở hồ sơ', 'sm')}</td></tr></table></div>
<div style="margin-top:12px">${f('Lý do vẫn tạo hồ sơ mới', 'Khách đặt Tour gia đình riêng, tự thanh toán, không qua Müller Reisen.', { req: 1, cls: 'area focus', hint: 'Bắt buộc khi vẫn tạo. Lý do được lưu vào lịch sử hồ sơ.' })}</div>`,
    B('Quay lại sửa') + B('Vẫn tạo khách hàng', 'p'), 760),
});
// ---------- W12 Sau khi tạo ----------
S.W12 = P({ body: hdr({ c: 'as', cnt: {} }) + `<div style="margin-top:10px">${formCN({ saved: true })}</div>` + foot('<span class="muted small">Chưa có thay đổi</span>', B('Lưu', 'dis')) + `<div class="toast" style="bottom:60px">✓ Đã tạo khách hàng KH-00413 · Anna Schneider.</div>` }, 'Anna Schneider');

// ---------- W13–W16 Thông tin khách hàng (doanh nghiệp) ----------
const W13body = hdr() + `<div style="margin-top:10px">${formDN({ changed: true })}</div>` + foot('<span class="small" style="color:#1d4ed8">● 1 thay đổi chưa lưu</span>', B('Hủy thay đổi') + B('Lưu', 'p'));
S.W13 = P({ body: W13body });
S.W14 = P({ user: 'lh', body: hdr({ user: 'lh' }) + `<div style="margin-top:10px">${formDN({ ro: true })}</div>` });
S.W15 = P({ body: W13body, overlay: modal('Rời hồ sơ khi chưa lưu?', 'Bạn có 1 thay đổi chưa lưu ở Thông tin khách hàng (điện thoại của Jonas Weber). Rời đi sẽ bỏ thay đổi này.', B('Bỏ thay đổi và rời đi', 'd') + B('Ở lại', 'p'), 480) });
S.W16 = P({ body: hdr() + `<div class="banner e" style="margin-top:10px"><span class="ico e">!</span><div>Chưa lưu: hồ sơ vừa được cập nhật ở phiên khác lúc 14:32 (Nguyễn Hoàng Nam · Địa chỉ). Thay đổi của bạn vẫn còn trên màn hình.</div><span class="ml">${B('Tải bản mới, giữ thay đổi của tôi', 'p')}</span></div><div style="margin-top:8px">${formDN({ changed: true })}</div>` + foot('<span class="small" style="color:#1d4ed8">● 1 thay đổi chưa lưu</span>', B('Hủy thay đổi') + B('Lưu', 'dis')) });

// ---------- W17, W18 Chuyển phụ trách ----------
S.W17 = P({
  body: hdr() + `<div style="margin-top:10px">${formDN()}</div>`, overlay: modal('Chuyển người phụ trách', `${f('Người phụ trách hiện tại', 'Nguyễn Hoàng Nam', { cls: 'ro' })}
${f('Người phụ trách mới', 'Vũ Đức Minh', { req: 1, cls: 'sel focus', hint: 'Chỉ liệt kê người dùng Kinh doanh đang hoạt động.' })}
${f('Ghi chú bàn giao', 'Khách thuộc thị trường DACH, anh Minh phụ trách từ 12/2026. Đang có yêu cầu YC-2611-0019 chờ báo giá v3.', { cls: 'area' })}
<div class="banner i small"><span class="ico i">i</span>Yêu cầu Tour, Booking và hồ sơ Tour giữ người phụ trách hiện tại. Sau khi chuyển, bạn chỉ còn quyền xem và tạo yêu cầu Tour cho khách này.</div>`, B('Hủy') + B('Chuyển phụ trách', 'p'), 560),
});
S.W18 = P({ body: hdr({ pt: 'Vũ Đức Minh' }) + `<div style="margin-top:10px">${formDN({ ro: true })}</div><div class="toast">✓ Đã chuyển khách hàng cho Vũ Đức Minh. Vũ Đức Minh đã nhận thông báo.</div>` });

// ---------- W19, W20 Xóa khách hàng ----------
S.W19 = P({ body: hdr({ c: 'as', cnt: {} }) + `<div style="margin-top:10px">${formCN({ saved: true })}</div>`, overlay: modal('Xóa khách hàng Anna Schneider?', `Khách <b>KH-00413</b> chưa có yêu cầu Tour và chưa có lần gửi chiến dịch nào (kể cả Gửi lỗi).<div style="margin-top:8px">Hồ sơ, người liên hệ và ghi nhận chăm sóc (0) sẽ bị xóa và không khôi phục được.</div>`, B('Giữ lại') + B('Xóa khách hàng', 'dp'), 480) }, 'Anna Schneider');
const menuDel = `<div class="menu" style="right:14px;top:44px;width:330px"><div class="mi" style="color:#9ca3af;align-items:flex-start">🗑<div>Xóa khách hàng<div class="small">Không xóa được: khách đã có 6 yêu cầu Tour và 4 lần gửi chiến dịch. Hồ sơ đã dùng được giữ để tra cứu.</div></div></div></div>`;
S.W20 = P({ body: hdr({ menu: menuDel }) + `<div style="margin-top:10px">${formDN()}</div>` });

// ---------- KD04.2 Lịch sử Tour ----------
const HIST = [
  { tc: 'TP-2610-0031', bk: 'BK-2609-0102', d: '24/10 – 02/11/2026 · 10N9Đ', pax: 22, it: 'Hà Nội – Hạ Long – Huế – Hội An', sv: 18, cl: '05/11/2026' },
  { tc: 'TP-2603-0012', bk: 'BK-2602-0021', d: '15/03 – 24/03/2026 · 10N9Đ', pax: 16, it: 'Hà Nội – Sa Pa – Hạ Long', sv: 15, cl: '27/03/2026' },
  { tc: 'TP-2510-0087', bk: 'BK-2509-0058', d: '05/10 – 14/10/2025 · 10N9Đ', pax: 20, it: 'TP.HCM – Cần Thơ – Đà Nẵng – Hội An', sv: 17, cl: '18/10/2025', lock: 'Lê Thu Hà' },
];
const SVCX = [
  ['Khách sạn', 3, 'Hanoi La Siesta Hotel · 3 đêm; Silk Path Hotel Huế · 2 đêm; Anantara Hội An Resort · 3 đêm'],
  ['Du thuyền', 1, 'Bhaya Cruises Hạ Long · 1 đêm, cabin Deluxe'],
  ['Vận chuyển', 4, 'Xe 29 chỗ Hà Nội 4 ngày; Xe 29 chỗ Huế – Hội An; Vé máy bay Hà Nội – Huế; Xe đón tiễn Đà Nẵng'],
  ['Nhà hàng', 6, 'Nhà hàng Ngon Garden; Madame Hiền; Cơm Niêu Hội An và 3 bữa khác'],
  ['Hướng dẫn viên', 2, 'HDV tiếng Đức suốt tuyến; HDV địa phương Huế'],
  ['Vé tham quan', 2, 'Đại Nội Huế; Phố cổ Hội An'],
];
function histTable({ rows = HIST, open = 'TP-2610-0031', upd = false } = {}) {
  return `<div class="tbl"><table><tr><th>Tour Code</th><th>Booking</th><th>Thời gian</th><th class="num">Số khách</th><th>Hành trình</th><th>Dịch vụ đã sử dụng</th><th>Ngày đóng</th><th>Tình trạng</th></tr>
${rows.map(r => {
    const tcCell = r.lock ? `<span class="b">🔒 ${r.tc}</span><div class="muted small">Booking do ${r.lock} phụ trách</div>` : `<b class="lnk">${r.tc}</b>`;
    const st = upd && r.tc === 'TP-2610-0031' ? `${bd('Đang cập nhật', 'b-amber')}<div class="muted small">Điều hành mở lại 10/11/2026</div>` : bd('Đã đóng', 'b-gray');
    const main = `<tr class="${r.tc === open ? 'sel' : ''}"><td>${tcCell}</td><td>${r.bk}</td><td>${r.d}</td><td class="num">${r.pax}</td><td>${r.it}</td><td>${r.sv} dịch vụ ${r.tc === open ? '▾' : '▸'}</td><td>${r.cl}</td><td>${st}</td></tr>`;
    const ex = r.tc === open ? `<tr><td colspan="8" style="background:#f8fafc;padding:8px 14px">${upd ? '<div class="small" style="color:#92400e;margin-bottom:4px">Danh sách theo lần đóng 05/11/2026; sẽ cập nhật khi Điều hành đóng lại Tour.</div>' : ''}<table style="background:transparent">${SVCX.map(([t, n, s]) => `<tr><td style="width:150px;border:none;padding:3px 6px" class="b">${t} (${n})</td><td style="border:none;padding:3px 6px">${s}</td></tr>`).join('')}</table></td></tr>` : '';
    return main + ex;
  }).join('')}</table></div>`;
}
const histNote = `<div class="flex" style="margin:10px 0 8px"><span class="muted small">Lịch sử tự ghi khi Điều hành đóng Tour ở hồ sơ Tour. Bấm Tour Code để xem hồ sơ Tour ở chế độ chỉ đọc.</span></div>`;
S.W21 = P({ body: hdr({ tab: 'hist' }) + histNote + histTable() });
S.W22 = P({ body: hdr({ tab: 'hist' }) + histNote + histTable({ upd: true }) });
S.W23 = P({ body: hdr({ tab: 'hist' }) + `<div class="banner w" style="margin:10px 0 8px"><span class="ico w">!</span><div>1 Tour đã đóng chưa có trong lịch sử: <b>TP-2610-0031</b> (đóng 05/11/2026). Hệ thống chưa ghi được lúc đóng Tour.</div><span class="ml">${B('↻ Cập nhật lịch sử', 'p')}</span></div>` + histTable({ rows: HIST.slice(1), open: '' }) });
const emptyBox = (big, t) => `<div class="tbl" style="margin-top:10px"><div class="empty"><div class="big">${big}</div>${t}</div></div>`;
S.W24 = P({ body: hdr({ c: 'as', tab: 'hist', cnt: {} }) + emptyBox('Khách chưa có Tour đã đóng', 'Lịch sử tự ghi khi Điều hành đóng Tour ở hồ sơ Tour của khách.') }, 'Anna Schneider');

// ---------- KD04.3 Yêu cầu Tour và Booking ----------
const RQ = [
  ['YC-2611-0019', '03/11/2026', '15/03 – 28/03/2027', 25, 'v2 · Cần điều chỉnh', 'b-amber', null, 'Nguyễn Hoàng Nam', 'run'],
  ['YC-2610-0008', '02/10/2026', '18/11 – 25/11/2026', 18, 'v3 · Chốt', 'b-green', ['BK-2610-0137', 'TP-2611-0042'], 'Nguyễn Hoàng Nam', 'bk'],
  ['YC-2609-0011', '01/09/2026', '24/10 – 02/11/2026', 22, 'v2 · Chốt', 'b-green', ['BK-2609-0102', 'TP-2610-0031'], 'Nguyễn Hoàng Nam', 'bk'],
  ['YC-2606-0015', '10/06/2026', '12/2026 (chưa chốt ngày)', 30, 'v1 · Không chốt', 'b-gray', null, 'Nguyễn Hoàng Nam', 'cx'],
  ['YC-2602-0004', '05/02/2026', '15/03 – 24/03/2026', 16, 'v2 · Chốt', 'b-green', ['BK-2602-0021', 'TP-2603-0012'], 'Nguyễn Hoàng Nam', 'bk'],
  ['YC-2509-0030', '08/09/2025', '05/10 – 14/10/2025', 20, 'v1 · Chốt', 'b-green', ['BK-2509-0058', 'TP-2510-0087'], 'Lê Thu Hà', 'bk', 1],
];
const RST = { run: ['Đang xử lý', 'b-blue'], bk: ['Đã có Booking', 'b-green'], cx: ['Đã hủy', 'b-gray'] };
function reqTable() {
  return `<div class="tbl"><table><tr><th>Yêu cầu</th><th>Thời gian đi</th><th class="num">Số khách</th><th>Báo giá mới nhất</th><th>Booking</th><th>Phụ trách yêu cầu</th><th>Trạng thái</th></tr>
${RQ.map(([id, cr, d, pax, q, qc, bk, pt, st, lock]) => {
    const bkCell = !bk ? '<span class="muted">—</span>' : lock ? `<span class="b">🔒 ${bk[0]}</span> ${bd('Hiệu lực', 'b-green')}<div class="muted small">Do ${pt} phụ trách · ${bk[1]}</div>` : `<b class="lnk">${bk[0]}</b> ${bd('Hiệu lực', 'b-green')}<div class="muted small">Hồ sơ Tour ${bk[1]}</div>`;
    const s = RST[st];
    return `<tr><td><b class="lnk">${id}</b><div class="muted small">Tạo ${cr}</div></td><td>${d}</td><td class="num">${pax}</td><td>${bd(q, qc)}</td><td>${bkCell}</td><td>${pt}</td><td>${bd(s[0], s[1])}${st === 'cx' ? '<div class="muted small">Khách chọn đơn vị khác</div>' : ''}</td></tr>`;
  }).join('')}</table></div>`;
}
const reqChips = (a = 'all', c = { run: 1, bk: 4, cx: 1, all: 6 }) => `<div class="flex" style="margin:10px 0 8px">${[['run', 'Đang xử lý'], ['bk', 'Đã có Booking'], ['cx', 'Đã hủy'], ['all', 'Tất cả']].map(([k, n]) => `<span class="chip ${k === a ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}<span class="ml muted small">Bấm mã yêu cầu để mở hồ sơ yêu cầu; bấm mã Booking để mở hồ sơ Booking</span></div>`;
S.W25 = P({ body: hdr({ tab: 'req' }) + reqChips() + reqTable() });
S.W26 = P({ body: hdr({ c: 'as', tab: 'req', cnt: {} }) + emptyBox('Khách chưa có yêu cầu Tour', 'Chọn Tạo yêu cầu Tour ở đầu hồ sơ để mở hồ sơ yêu cầu với khách hàng điền sẵn.') }, 'Anna Schneider');

// ---------- W27 Đích: KD06.1 tạo yêu cầu với khách hàng điền sẵn ----------
S.W27 = page({
  crumb: 'Yêu cầu Tour', last: 'Tạo yêu cầu', side: 'Yêu cầu Tour', body: `<div class="hdr"><div class="r1"><span class="code">Yêu cầu mới</span>${bd('Chưa lưu', 'b-gray')}</div>
<div class="tabs"><div class="tab on">Thông tin yêu cầu</div><div class="tab lock">Hành trình 🔒</div><div class="tab lock">Báo giá 🔒</div></div></div>
<div class="grid" style="grid-template-columns:1.2fr 1fr;margin-top:10px">${card('Khách hàng', `${f('Khách hàng', 'Müller Reisen GmbH · KH-00128 · Doanh nghiệp', { req: 1, cls: 'ro', auto: 'Từ hồ sơ khách hàng' })}
<div class="f2">${f('Người liên hệ', 'Anna Schneider', { cls: 'sel', auto: 'Liên hệ chính' })}${f('Ngôn ngữ phục vụ', 'Tiếng Đức', { cls: 'sel', auto: 'Từ hồ sơ khách hàng' })}</div>
<div class="hint">Ghi chú của khách: Đoàn 16–25 khách, HDV tiếng Đức bắt buộc. Gửi báo giá bằng EUR.</div>`)}
${card('Nhu cầu Tour', `${f('Mong muốn', '', { cls: 'area focus', req: 1 })}<div class="f2">${f('Thời gian đi', 'dd/mm/yyyy – dd/mm/yyyy', { cls: 'ph', req: 1 })}${f('Số khách', '', { req: 1 })}</div>${f('Hạng phòng', 'Chọn hạng phòng', { cls: 'sel ph' })}`)}</div>
<div class="muted small" style="margin-top:8px">Phần nhu cầu Tour đặc tả ở RSD KD06. Hình này chỉ minh họa dữ liệu được điền sẵn từ hồ sơ khách hàng.</div>` + foot('', B('Hủy') + B('Lưu', 'p')),
});

// ---------- KD04.4 Chăm sóc và phản hồi ----------
const IT = {
  new: { cls: 'ok', d: '11/11/2026', k: 'Ghi nhận chăm sóc', b: `Điện thoại · Anna Schneider · Tour TP-2610-0031 ${bd('Có nhu cầu Tour mới', 'b-blue')}<div><span class="muted">Phản hồi:</span> Đoàn hài lòng với du thuyền Hạ Long và HDV tiếng Đức; xe Huế – Hội An đến trễ 40 phút. Muốn làm thêm một đoàn MICE 40 khách vào 10/2027.</div><div><span class="muted">Chăm sóc:</span> Gọi cảm ơn, xin lỗi về xe trễ, hẹn gửi gợi ý chương trình MICE trước 30/11.</div>`, by: 'Nguyễn Hoàng Nam', g: 1 },
  s1: { cls: 'bl', d: '08/11/2026', k: 'Survey', b: `<b class="lnk">Khảo sát sau Tour – Inbound châu Âu</b> · Tour TP-2610-0031 · gửi tới anna.schneider@muellerreisen.de ${bd('Đã gửi', 'b-green')} <span class="muted">Chưa phản hồi</span>`, by: 'Tự động (KD10)' },
  e1: { cls: '', d: '15/10/2026', k: 'Email chiến dịch', b: `<b class="lnk">Ưu đãi mùa xuân 2027 – Miền Bắc</b> · gửi tới anna.schneider@muellerreisen.de ${bd('Đã gửi', 'b-green')}`, by: 'Tự động (KD10)' },
  g2: { cls: 'ok', d: '12/06/2026', k: 'Ghi nhận chăm sóc', b: `Điện thoại · Anna Schneider ${bd('Khác', 'b-gray')}<div><span class="muted">Chăm sóc:</span> Khách chọn đơn vị khác cho đoàn 12/2026 vì giá; hẹn báo giá sớm cho năm 2027.</div>`, by: 'Nguyễn Hoàng Nam', g: 1 },
  g1: { cls: 'ok', d: '02/04/2026', k: 'Ghi nhận chăm sóc', b: `Điện thoại · Anna Schneider · Tour TP-2603-0012 ${bd('Hài lòng', 'b-green')}<div><span class="muted">Phản hồi:</span> Đoàn rất thích Sa Pa; muốn thêm một ngày ở Hạ Long.</div>`, by: 'Nguyễn Hoàng Nam', g: 1 },
  s0: { cls: 'bl', d: '30/03/2026', k: 'Survey', b: `<b class="lnk">Khảo sát sau Tour – Inbound châu Âu</b> · Tour TP-2603-0012 ${bd('Đã phản hồi 31/03', 'b-blue')} Điểm <b>9/10</b> · “Hotels excellent, the bus in Sa Pa was too small.”`, by: 'Tự động (KD10)' },
};
function timeline(keys, { owner = true, hlNew = false } = {}) {
  return `<div class="card" style="padding:12px 16px"><div class="tl">${keys.map(k => {
    const x = IT[k];
    return `<div class="it ${x.cls}" style="${hlNew && k === 'new' ? 'background:#f0fdf4;border-radius:6px;padding:4px 6px;margin-left:-6px' : ''}"><div class="flex"><b>${x.d}</b><span class="muted">·</span><span class="b" style="color:#334155">${x.k}</span>${hlNew && k === 'new' ? ind('Vừa lưu', 'g') : ''}<span class="ml muted small">${x.by}</span>${x.g && owner ? `<span class="muted" style="margin-left:6px">⋯</span>` : ''}</div><div style="margin-top:2px">${x.b}</div></div>`;
  }).join('')}</div></div>`;
}
const careBar = ({ c = { all: 7, g: 3, s: 2, e: 2 }, owner = true } = {}) => `<div class="flex" style="margin:10px 0 8px">${[['all', 'Tất cả'], ['g', 'Ghi nhận chăm sóc'], ['s', 'Survey'], ['e', 'Email chiến dịch']].map(([k, n], i) => `<span class="chip ${i === 0 ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}
<span class="ml flex">${owner ? B('+ Ghi nhận chăm sóc', 'p') : `<span class="muted small">Chỉ người phụ trách (Nguyễn Hoàng Nam) ghi nhận chăm sóc</span>${B('+ Ghi nhận chăm sóc', 'dis')}`}</span></div>`;
const needBanner = `<div class="banner w" style="margin-top:10px"><span class="ico w">!</span>Tour <b>TP-2610-0031</b> (24/10 – 02/11/2026) đóng ngày 05/11/2026, chưa có ghi nhận chăm sóc sau Tour.</div>`;
const W28body = hdr({ tab: 'care' }) + needBanner + careBar() + timeline(['s1', 'e1', 'g2', 'g1', 's0']);
S.W28 = P({ body: W28body });
S.W29 = P({
  body: W28body, overlay: modal('Ghi nhận chăm sóc · Müller Reisen GmbH', `<div class="f2">${f('Ngày chăm sóc', '11/11/2026', { req: 1, auto: 'Hôm nay' })}${f('Kênh', 'Điện thoại', { req: 1, cls: 'sel' })}</div>
<div class="f2">${f('Người liên hệ', 'Anna Schneider', { cls: 'sel', auto: 'Liên hệ chính' })}${f('Tour liên quan', 'TP-2610-0031 · 24/10 – 02/11/2026', { cls: 'sel', auto: 'Tour chưa chăm sóc' })}</div>
${f('Phản hồi của khách', 'Đoàn hài lòng với du thuyền Hạ Long và HDV tiếng Đức; xe Huế – Hội An đến trễ 40 phút. Muốn làm thêm một đoàn MICE 40 khách vào 10/2027.', { cls: 'area' })}
${f('Nội dung chăm sóc', 'Gọi cảm ơn, xin lỗi về xe trễ, hẹn gửi gợi ý chương trình MICE trước 30/11.', { req: 1, cls: 'area' })}
${f('Kết quả', 'Có nhu cầu Tour mới', { req: 1, cls: 'sel focus', hint: 'Kết quả Có nhu cầu Tour mới cho phép lưu và mở ngay hồ sơ yêu cầu mới.' })}`, B('Hủy') + B('Lưu') + B('Lưu và tạo yêu cầu Tour', 'p'), 640),
});
const careAfterHdr = o => hdr(Object.assign({ tab: 'care', cnt: { req: '<span class="cnt">1</span>' } }, o));
S.W30 = P({ body: careAfterHdr() + careBar({ c: { all: 8, g: 4, s: 2, e: 2 } }) + timeline(['new', 's1', 'e1', 'g2', 'g1'], { hlNew: true }) + '<div class="toast">✓ Đã lưu ghi nhận chăm sóc.</div>' });
S.W31 = P({ user: 'lh', body: careAfterHdr({ user: 'lh' }) + careBar({ c: { all: 8, g: 4, s: 2, e: 2 }, owner: false }) + timeline(['new', 's1', 'e1', 'g2', 'g1'], { owner: false }) });

module.exports = S;
