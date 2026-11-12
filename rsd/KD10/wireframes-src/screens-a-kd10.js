// Wireframe KD10 · tab Thiết lập chiến dịch (W01–W16). Tên và mục đích ở captions.js.
const { NAM, HA, TUNG, typ, ind, P, hdr, card, fld, foot, tags, tg, stepTable, B, bd } = require('./common10');
const S = {};
const modal = (title, body, foot2, w = 560) => `<div class="overlay"></div><div class="modal" style="width:${w}px"><div class="mh">${title}</div><div class="mb">${body}</div><div class="mf">${foot2}</div></div>`;
const drawer = (title, body, foot2, w = 'wide', sub = '') => `<div class="overlay"></div><div class="drawer ${w}"><div class="dh"><div class="t">${title}<span class="x">✕</span></div>${sub ? `<div class="muted small" style="margin-top:2px">${sub}</div>` : ''}</div><div class="db">${body}</div><div class="df">${foot2}</div></div>`;
const recv = '<div class="banner i small" style="margin-top:2px"><span class="ico i">i</span><div>Chỉ gửi cho khách bật <b>Nhận email chăm sóc</b>; doanh nghiệp gửi tới liên hệ chính. Mỗi khách chỉ nhận một Survey cho một Tour. Email có sẵn liên kết hủy nhận.</div></div>';

// ================= Survey · tạo mới =================
const svForm = (o = {}) => {
  const ro = o.ro ? 'ro' : '';
  return `<div class="grid" style="grid-template-columns:1fr 1fr;margin-top:10px">
${card('Thông tin chung', `${fld('Tên chiến dịch', o.name || 'Khảo sát sau Tour Inbound đoàn', { req: 1, cls: ro })}<div class="f2">${fld('Loại', 'Survey', { cls: 'ro', auto: o.saved ? '' : 'Từ nút Tạo' })}${fld('Người phụ trách', o.pt || NAM, { cls: 'ro', auto: o.saved ? '' : 'Người tạo' })}</div>${fld('Ghi chú nội bộ', o.note || 'Đo hài lòng của đoàn Inbound ngoài châu Âu, châu Á', { cls: 'area ' + ro })}`)}
${card('Gửi Survey', `${fld('Mẫu Survey', o.tpl === '' ? '<span class="muted">Chọn mẫu đang dùng ở QT04.1</span>' : (o.tpl || 'Survey GR-01 · Đoàn Inbound (EN, FR, DE)') + (o.ro ? '' : ' <span class="ml lnk small" style="margin-left:auto">Xem trước</span>'), { req: 1, cls: (o.ro ? 'ro' : 'sel') + (o.tplErr ? ' bad' : ''), err: o.tplErr })}
<div class="f2">${fld('Gửi sau khi đóng Tour', (o.days ?? '5') + ' ngày', { req: 1, cls: ro + (o.dayErr ? ' bad' : ''), err: o.dayErr, hint: o.dayErr ? '' : 'Từ 1 đến 90 ngày' })}${fld('Giờ gửi hằng ngày', o.hour || '09:00', { req: 1, cls: ro, auto: o.ro || o.saved ? '' : 'Mặc định' })}</div>
<div class="field"><label>Loại Tour áp dụng</label>${tags(o.lt || ['Inbound đoàn'], o.ro)}</div>
<div class="field"><label>Quốc gia của khách</label>${tags(o.qg || ['Tất cả quốc gia'], o.ro)}</div>${recv}`)}</div>`;
};
const est = (t) => `<div class="card" style="margin-top:10px;display:flex;gap:18px;align-items:center"><b>Ước tính</b><span class="muted small">${t}</span></div>`;
const newHdr = () => hdr({ actions: '', lockLog: true });
S.W01 = P('Tạo chiến dịch Survey', { body: newHdr() + svForm() + est('30 ngày qua có 9 Tour Inbound đoàn đã đóng · 3 khách sẽ nhận sau khi trừ phần chồng phạm vi · nếu bật hôm nay, đợt đầu 12/11 09:00 có 1 khách đến hạn') + foot('Chưa lưu', B('Hủy') + B('Lưu nháp') + B('Lưu và bật', 'p')) });

// W02 Xem trước mẫu
const q = (t, kind) => `<div style="margin:6px 0"><div class="small b">${t}</div>${kind === 'n' ? `<div class="flex" style="gap:3px;margin-top:3px">${[...Array(11).keys()].map(i => `<span class="pill" style="padding:1px 6px">${i}</span>`).join('')}</div>` : kind === 's' ? `<div class="flex" style="gap:3px;margin-top:3px">${'★★★★★'.split('').map(() => '<span style="color:#cbd5e1;font-size:15px">★</span>').join('')}</div>` : '<div class="input area" style="min-height:38px"></div>'}</div>`;
S.W02 = P('Tạo chiến dịch Survey', {
  body: newHdr() + svForm(), overlay: drawer('Xem trước · Survey GR-01 · Đoàn Inbound', `<div class="ntab"><div class="on">English</div><div>Français</div><div>Deutsch</div></div>
<div class="grid" style="grid-template-columns:1fr 1fr"><div><div class="sec">Email mời</div><div class="email"><div class="row"><span>Từ</span>TOPAS Travel &lt;care@topas.travel&gt;</div><div class="row"><span>Trả lời</span>Nguyễn Hoàng Nam (người phụ trách)</div><div class="row"><span>Tiêu đề</span>How was your trip with us, <span class="hl">{Tên khách}</span>?</div><div class="body">Dear <span class="hl">{Danh xưng} {Tên khách}</span>,
Thank you for travelling with us on <span class="hl">{Tour Code}</span> (<span class="hl">{Thời gian Tour}</span>).
It takes 2 minutes to tell us how it went.

[ Start the survey ]

<span class="muted small">Link valid for 30 days. Unsubscribe from care emails.</span></div></div></div>
<div><div class="sec">Trang Survey</div><div class="card">${q('Overall, how would you rate your trip?', 'n')}${q('Tour guide', 's')}${q('Hotels', 's')}${q('Transport', 's')}${q('Anything we could do better?')}</div></div></div>
<div class="muted small" style="margin-top:6px">Trường trộn tô vàng; email gửi thử dùng dữ liệu của một Tour đã đóng khớp phạm vi. Khách có ngôn ngữ giao tiếp không có trong mẫu nhận bản English.</div>`, `${B('Gửi thử tới email của tôi')}${B('Đóng', 'p')}`, 'xl'),
});

// W03 Lỗi khi Lưu và bật
S.W03 = P('Tạo chiến dịch Survey', { body: newHdr() + `<div class="banner e" style="margin-top:10px"><span class="ico e">!</span><div><b>Chưa bật được chiến dịch.</b> Sửa 2 trường được đánh dấu rồi bấm Lưu và bật lại. Dữ liệu đã nhập được giữ nguyên.</div></div>` + svForm({ tpl: '', tplErr: 'Chọn một mẫu Survey đang dùng', days: '0', dayErr: 'Nhập số ngày từ 1 đến 90' }) + foot('Chưa lưu', B('Hủy') + B('Lưu nháp') + B('Lưu và bật', 'p')) });

// W04 Xác nhận bật Survey, có chồng phạm vi
S.W04 = P('Tạo chiến dịch Survey', {
  body: newHdr() + svForm() + foot('Chưa lưu', B('Hủy') + B('Lưu nháp') + B('Lưu và bật', 'p')), overlay: modal('Bật chiến dịch “Khảo sát sau Tour Inbound đoàn”?', `<div>Từ khi bật, khách có Tour <b>Inbound đoàn</b> đã đóng sẽ tự nhận Survey <b>5 ngày</b> sau ngày đóng Tour, lúc <b>09:00</b>.</div>
<div class="list" style="margin:8px 0"><div class="li"><span class="ico i">1</span>Đợt đầu: <b>12/11/2026 09:00</b> · 1 khách đến hạn</div><div class="li"><span class="ico i">✉</span>Gửi từ care@topas.travel · trả lời về Nguyễn Hoàng Nam</div></div>
<div class="banner w small"><span class="ico w">!</span><div><b>Chồng phạm vi với 2 chiến dịch đang chạy.</b> Khách châu Âu thuộc <span class="lnk">CD-2603-001</span>, khách châu Á thuộc <span class="lnk">CD-2604-001</span>. Mỗi khách chỉ nhận một Survey cho một Tour: chiến dịch bật trước gửi, chiến dịch này bỏ qua những khách đó.</div></div>`, B('Quay lại sửa') + B('Bật chiến dịch', 'p'), 580),
});

// W05 Sau khi bật
const svHdrRun = (o = {}) => hdr(Object.assign({ id: 'CD-2611-002', name: 'Khảo sát sau Tour Inbound đoàn', st: 'run', meta: ['Gửi <b>5 ngày</b> sau khi đóng Tour · 09:00', 'Mẫu <b>Survey GR-01</b>', `Phụ trách <b>${NAM}</b>`, 'Lần gửi tiếp theo <b>12/11 09:00</b> · 1 khách'], actions: B('Tạm dừng') }, o));
const runNote = `<div class="banner i small" style="margin-top:10px"><span class="ico i">i</span><div>Chiến dịch đang chạy nên thiết lập chỉ đọc. Bấm <b>Tạm dừng</b> ở góc trên để sửa.</div></div>`;
S.W05 = P('CD-2611-002', { body: svHdrRun() + runNote + svForm({ ro: 1, saved: 1 }) + `<div class="toast">Đã bật CD-2611-002. Đợt đầu 12/11 09:00 · 1 khách.</div>` });

// ================= Remarketing =================
const rmGroup = (o = {}) => card('Nhóm khách mục tiêu', `<div class="f2">${fld('Tên nhóm', o.gname || 'Khách Bắc Mỹ', { req: 1, cls: o.ro ? 'ro' : '' })}${fld('Loại khách', o.lk || 'Cá nhân, Doanh nghiệp', { cls: o.ro ? 'ro' : 'sel' })}</div>
<div class="f2"><div class="field"><label>Quốc gia</label>${tags(o.qg || ['Hoa Kỳ', 'Canada'], o.ro)}</div><div class="field"><label>Ngôn ngữ giao tiếp</label>${tags(o.ng || ['Tất cả'], o.ro)}</div></div>
<div class="f3">${fld('Nguồn khách', o.ng2 || 'Tất cả', { cls: o.ro ? 'ro' : 'sel' })}${fld('Đã đi Tour', o.tour || 'Không bắt buộc', { cls: o.ro ? 'ro' : 'sel' })}${fld('Tour gần nhất', o.last || '—', { cls: o.ro ? 'ro' : 'sel' })}</div>
<div class="flex small" style="margin:2px 0 8px">${tg(o.noReq !== false, 'Bỏ khách đang có yêu cầu Tour Đang xử lý')}</div>
<div class="flex" style="border-top:1px dashed #e5e7eb;padding-top:8px"><span><b>${o.match || 64}</b> khách khớp tiêu chí · <b style="color:#166534">${o.recv || 57}</b> khách nhận được</span><span class="muted small">${o.recvNote || 'tính lại mỗi bước gửi'}</span><span class="ml lnk">Xem danh sách</span></div>`);
const rmHdrDraft = (o = {}) => hdr(Object.assign({ id: 'CD-2610-001', name: 'Giáng sinh 2026 – khách Bắc Mỹ', t: 'rm', st: 'draft', meta: ['Nhóm <b>Khách Bắc Mỹ</b> · 57 khách nhận được', '2 bước · dự kiến 01/12 – 20/12/2026', `Phụ trách <b>${TUNG}</b>`], actions: B('Xóa nháp', 'd'), lockLog: false }, o));
const draftSteps = (err) => stepTable([
  ['1', err ? '<span style="color:#b91c1c">10/11/2026 09:00</span>' : '01/12/2026 09:00', 'Season’s greetings & 2027 early-bird offer', 'Email RM-05 · Mùa lễ', err ? '<span style="color:#b91c1c">Ngày giờ đã qua</span>' : bd('Sẵn sàng', 'b-blue'), B('Sửa', 'sm'), err ? 'bad' : ''],
  ['2', '20/12/2026 09:00', err ? '<span class="muted">(chưa có tiêu đề)</span>' : 'Last days to book Tết 2027 in Vietnam', 'Email RM-05 · Mùa lễ', err ? '<span style="color:#b91c1c">Thiếu tiêu đề, nội dung</span>' : bd('Sẵn sàng', 'b-blue'), B('Sửa', 'sm') + ' ' + B('✕', 'sm'), err ? 'bad' : ''],
], { edit: 1 }) + `<div style="margin-top:6px">${B('+ Thêm bước', 'lk')} <span class="muted small">· tối đa 5 bước; khách có yêu cầu Tour mới sau khi nhận bước 1, hoặc tắt nhận email, không nhận các bước sau</span></div>`;
const rmBody = (o = {}) => `<div class="grid" style="grid-template-columns:1fr 1.15fr;margin-top:10px">${card('Thông tin chung', `${fld('Tên chiến dịch', 'Giáng sinh 2026 – khách Bắc Mỹ', { req: 1 })}<div class="f2">${fld('Loại', 'Remarketing', { cls: 'ro' })}${fld('Người phụ trách', TUNG, { cls: 'ro' })}</div>${fld('Ghi chú nội bộ', 'Chào Tết 2027, nhắc ưu đãi đặt sớm', { cls: 'area' })}`)}${rmGroup()}</div>
${card('Các bước email', draftSteps(o.err), 'margin-top:10px')}`;
S.W06 = P('CD-2610-001', { user: 'pt', body: rmHdrDraft() + rmBody() + foot('Lưu lần cuối 28/10/2026 16:40', B('Lưu nháp') + B('Lưu và bật', 'p')) });

// W07 Danh sách khách khớp
const crow = (n, c, em, st, act) => `<tr class="${st !== 'ok' ? 'dim' : ''}"><td><b>${n}</b><div class="muted small">${c}</div></td><td class="small">${em}</td><td class="small">${st === 'ok' ? bd('Nhận được', 'b-green') : `<span style="color:#b45309">${st}</span>`}</td><td>${act}</td></tr>`;
S.W07 = P('CD-2610-001', {
  user: 'pt', body: rmHdrDraft() + rmBody(), overlay: drawer('Khách khớp nhóm “Khách Bắc Mỹ”', `<div class="flex" style="margin-bottom:8px">${[['Tất cả', 64, 1], ['Nhận được', 57], ['Tắt Nhận email chăm sóc', 5], ['Thiếu email', 2], ['Đã bỏ khỏi chiến dịch', 0]].map(([t, c, on]) => `<span class="chip ${on ? 'on' : ''}">${t} <span class="cnt">${c}</span></span>`).join('')}</div>
<div class="input ph" style="margin-bottom:8px">🔍&nbsp; Tìm tên, mã khách</div>
<div class="tbl"><table><tr><th>Khách hàng</th><th>Email nhận</th><th>Tình trạng</th><th></th></tr>
${crow('Maple Leaf Journeys Inc.', 'KH-00288 · Canada · liên hệ chính Olivia Brown', 'olivia.brown@mapleleafjourneys.ca', 'ok', B('Bỏ khỏi chiến dịch', 'sm'))}
${crow('Tran Family Trust', 'KH-00391 · Hoa Kỳ · liên hệ chính Kevin Tran', 'kevin@tranfamily.org', 'ok', B('Bỏ khỏi chiến dịch', 'sm'))}
${crow('Jennifer Walsh', 'KH-00402 · Hoa Kỳ · Cá nhân', 'j.walsh@gmail.com', 'ok', B('Bỏ khỏi chiến dịch', 'sm'))}
${crow('Rocky Mountain Tours LLC', 'KH-00176 · Hoa Kỳ', '—', 'Thiếu email liên hệ chính', '<span class="lnk small">Mở hồ sơ khách</span>')}
${crow('Daniel Okafor', 'KH-00350 · Canada · Cá nhân', 'd.okafor@outlook.com', 'Tắt Nhận email chăm sóc từ 02/09/2026', '')}
${crow('Great Lakes Travel Co.', 'KH-00215 · Hoa Kỳ', 'sales@greatlakestravel.com', 'ok', B('Bỏ khỏi chiến dịch', 'sm'))}</table></div>
<div class="muted small" style="margin-top:6px">Danh sách tính theo tiêu chí lúc này; mỗi bước gửi hệ thống tính lại. Khách bị bỏ khỏi chiến dịch không nhận các bước sau, kể cả khi vẫn khớp tiêu chí.</div>`, B('Đóng', 'p'), 'wide', '64 khách khớp · 57 nhận được · cập nhật 11/11/2026 10:15'),
});

// W08 Soạn bước email
S.W08 = P('CD-2610-001', {
  user: 'pt', body: rmHdrDraft() + rmBody(), overlay: drawer('Bước 1 · email', `<div class="grid" style="grid-template-columns:1fr 1fr"><div>
<div class="f2">${fld('Ngày giờ gửi', '01/12/2026 09:00', { req: 1 })}${fld('Mẫu email', 'Email RM-05 · Mùa lễ', { cls: 'sel', req: 1 })}</div>
<div class="ntab"><div class="on">English</div><div>Tiếng Việt</div><div class="muted">+ Thêm ngôn ngữ</div></div>
${fld('Tiêu đề', 'Season’s greetings & 2027 early-bird offer', { req: 1, auto: 'Từ mẫu' })}
${fld('Nội dung', '<div>Dear <span class="hl">{Danh xưng} {Tên khách}</span>,<br>Warm wishes for the holidays from all of us in Vietnam!<br>Book your 2027 trip before 31/12 and enjoy 8% off…<br>[ Plan my 2027 trip ]</div>', { cls: 'area', req: 1, auto: 'Từ mẫu, đã sửa' })}
<div class="hint">Chèn trường: {Danh xưng} {Tên khách} {Người phụ trách} {Tour gần nhất}. Liên kết hủy nhận được hệ thống tự thêm cuối email, không xóa được.</div></div>
<div><div class="sec">Xem trước với khách mẫu · Maple Leaf Journeys Inc.</div><div class="email"><div class="row"><span>Đến</span>olivia.brown@mapleleafjourneys.ca</div><div class="row"><span>Tiêu đề</span>Season’s greetings &amp; 2027 early-bird offer</div><div class="body">Dear Ms. Olivia Brown,
Warm wishes for the holidays from all of us in Vietnam!
Book your 2027 trip before 31/12 and enjoy 8% off…

[ Plan my 2027 trip ]

<span class="muted small">You receive this email because you agreed to care emails from TOPAS Travel. Unsubscribe</span></div></div>
<div class="muted small" style="margin-top:6px">Khách có ngôn ngữ giao tiếp không có trong bước nhận bản English.</div></div></div>`, `${B('Gửi thử tới email của tôi')}<span class="ml"></span>${B('Hủy')}${B('Lưu bước', 'p')}`, 'xl'),
});

// W09 Xác nhận bật Remarketing
S.W09 = P('CD-2610-001', {
  user: 'pt', body: rmHdrDraft() + rmBody() + foot('Lưu lần cuối 28/10/2026 16:40', B('Lưu nháp') + B('Lưu và bật', 'p')), overlay: modal('Bật chiến dịch “Giáng sinh 2026 – khách Bắc Mỹ”?', `<div>Hệ thống sẽ tự gửi email theo lịch dưới đây cho nhóm <b>Khách Bắc Mỹ</b>. Số khách mỗi bước được tính lại lúc gửi.</div>
<div class="tbl" style="margin:8px 0"><table><tr><th>Bước</th><th>Ngày giờ</th><th>Tiêu đề</th><th class="num">Dự kiến</th></tr><tr><td>1</td><td>01/12/2026 09:00</td><td>Season’s greetings &amp; 2027 early-bird offer</td><td class="num">57 khách</td></tr><tr><td>2</td><td>20/12/2026 09:00</td><td>Last days to book Tết 2027 in Vietnam</td><td class="num">≤ 57 khách</td></tr></table></div>
<div class="muted small">Gửi từ care@topas.travel · trả lời về Phạm Thanh Tùng. Có thể tạm dừng trước mỗi bước.</div>`, B('Quay lại') + B('Bật chiến dịch', 'p'), 600),
});

// W10 Lỗi khi bật Remarketing
S.W10 = P('CD-2610-001', { user: 'pt', body: rmHdrDraft() + `<div class="banner e" style="margin-top:10px"><span class="ico e">!</span><div><b>Chưa bật được chiến dịch.</b> Bước 1 có ngày giờ đã qua (phải sau hiện tại ít nhất 15 phút); bước 2 thiếu tiêu đề và nội dung. Sửa các bước được đánh dấu rồi bấm Lưu và bật lại.</div></div>` + rmBody({ err: 1 }).replace('margin-top:10px">' + '<div class="card"', 'margin-top:10px">' + '<div class="card"') + foot('Lưu lần cuối 28/10/2026 16:40', B('Lưu nháp') + B('Lưu và bật', 'p')) });

// ================= Đang chạy, Tạm dừng =================
const spGroup = (ro) => rmGroup({ ro, gname: 'Khách châu Âu đã đi Tour 2024–2026', qg: ['Nhóm Châu Âu (24 nước)'], tour: 'Ít nhất 1 Tour', last: 'Từ 01/01/2024', match: 185, recv: 179, recvNote: '6 tắt nhận email' });
const spHdr = (o = {}) => hdr(Object.assign({ id: 'CD-2609-001', name: 'Ưu đãi mùa xuân 2027 – Miền Bắc', t: 'rm', st: 'run', meta: ['Nhóm <b>Khách châu Âu đã đi Tour 2024–2026</b> · 179 khách nhận được', '3 bước · 15/10 – 10/12/2026', `Phụ trách <b>${NAM}</b>`, 'Lần gửi tiếp theo <b>19/11 09:00</b> · Bước 2'], actions: B('Tạm dừng'), cnt: '<span class="cnt r">4</span>' }, o));
const spSteps = (paused) => stepTable([
  ['1', '15/10/2026 09:00', 'Spring 2027 in Northern Vietnam – early bird', 'Email RM-03 · Ưu đãi mùa', `${bd('Đã gửi', 'b-green')} 182 lần · <span style="color:#b91c1c">4 lỗi</span>`, '🔒', ''],
  ['2', '19/11/2026 09:00', 'Ha Long & Sapa: 10% off until 31/12', 'Email RM-03 · Ưu đãi mùa', paused ? bd('Chưa gửi · tạm dừng', 'b-amber') : `${bd('Sắp gửi', 'b-blue')} dự kiến 179 khách`, paused ? B('Sửa', 'sm') : '', ''],
  ['3', '10/12/2026 09:00', 'Last call: spring 2027 departures', 'Email RM-03 · Ưu đãi mùa', paused ? bd('Chưa gửi · tạm dừng', 'b-amber') : bd('Chờ', 'b-gray'), paused ? B('Sửa', 'sm') + ' ' + B('✕', 'sm') : '', ''],
], { edit: paused }) + (paused ? `<div style="margin-top:6px">${B('+ Thêm bước', 'lk')}</div>` : '');
const spBody = (paused) => `<div class="grid" style="grid-template-columns:1fr 1.15fr;margin-top:10px">${card('Thông tin chung', `${fld('Tên chiến dịch', 'Ưu đãi mùa xuân 2027 – Miền Bắc', { req: 1, cls: paused ? '' : 'ro' })}<div class="f2">${fld('Loại', 'Remarketing', { cls: 'ro' })}${fld('Người phụ trách', NAM, { cls: 'ro' })}</div>${fld('Ghi chú nội bộ', 'Đẩy Tour Hà Nội – Hạ Long – Sa Pa tháng 3–5/2027', { cls: 'area ' + (paused ? '' : 'ro') })}`)}${spGroup(!paused)}</div>
${card('Các bước email', spSteps(paused), 'margin-top:10px')}`;
S.W11 = P('CD-2609-001', { body: spHdr() + runNote + spBody(false) });

S.W12 = P('CD-2609-001', {
  body: spHdr() + runNote + spBody(false), overlay: modal('Tạm dừng “Ưu đãi mùa xuân 2027 – Miền Bắc”?', `<div>Bước 2 (19/11/2026 09:00) và bước 3 sẽ không gửi cho tới khi bật lại. 182 lần gửi của bước 1 giữ nguyên.</div>${fld('Lý do tạm dừng', 'Chờ chốt giá khách sạn Hạ Long mùa xuân', { hint: 'Không bắt buộc; hiện ở lịch sử chiến dịch' })}`, B('Giữ chạy') + B('Tạm dừng', 'p'), 520),
});

S.W13 = P('CD-2609-001', { body: spHdr({ st: 'pause', meta: ['Nhóm <b>Khách châu Âu đã đi Tour 2024–2026</b> · 179 khách nhận được', '3 bước · 15/10 – 10/12/2026', `Phụ trách <b>${NAM}</b>`, 'Tạm dừng <b>11/11/2026 10:20</b> · Chờ chốt giá khách sạn Hạ Long mùa xuân'], actions: B('Bật lại', 'p') }) + `<div class="banner w small" style="margin-top:10px"><span class="ico w">!</span><div>Chiến dịch đang tạm dừng: không gửi bước nào. Sửa được nhóm khách và các bước chưa gửi; bước đã gửi bị khóa. Bấm <b>Bật lại</b> để gửi tiếp theo lịch.</div></div>` + spBody(true) + `<div class="toast">Đã tạm dừng CD-2609-001.</div>` });

// W14 Bật lại Survey có lần đến hạn trong lúc tạm dừng
const cuHdr = (o = {}) => hdr(Object.assign({ id: 'CD-2605-001', name: 'Khảo sát Tour Customized riêng tư', st: 'pause', meta: ['Gửi <b>10 ngày</b> sau khi đóng Tour · 09:00', 'Mẫu <b>Survey CU-01</b>', `Phụ trách <b>${HA}</b>`, 'Tạm dừng <b>20/10/2026</b>'], actions: B('Bật lại', 'p') }, o));
S.W14 = P('CD-2605-001', {
  user: 'lh', body: cuHdr() + svForm({ name: 'Khảo sát Tour Customized riêng tư', pt: HA, saved: 1, tpl: 'Survey CU-01 · Customized (EN, VI)', days: '10', lt: ['Customized riêng tư'], note: 'Khảo sát riêng cho Tour thiết kế theo yêu cầu' }), overlay: modal('Bật lại “Khảo sát Tour Customized riêng tư”?', `<div>Chiến dịch gửi tiếp từ đợt <b>12/11/2026 09:00</b>.</div>
<div class="banner w small" style="margin:8px 0"><span class="ico w">!</span><div>Trong lúc tạm dừng (20/10 – 11/11/2026), <b>4 khách</b> đã đến hạn nhận Survey nhưng chưa được gửi.</div></div>
<div class="flex"><span class="cb"></span><span>Gửi bù cho 4 khách này ở đợt 12/11/2026 09:00</span></div><div class="hint" style="margin-left:22px">Không chọn thì chỉ gửi cho Tour đến hạn từ 12/11/2026.</div>`, B('Hủy') + B('Bật lại', 'p'), 540),
});

// W15 Xóa nháp
const miHdr = () => hdr({ id: 'CD-2611-001', name: 'Khảo sát sau Tour MICE', st: 'draft', meta: ['Gửi <b>3 ngày</b> sau khi đóng Tour · 09:00', 'Mẫu <b>Survey MI-01</b>', `Phụ trách <b>${NAM}</b>`], actions: B('Xóa nháp', 'd') });
S.W15 = P('CD-2611-001', { body: miHdr() + svForm({ name: 'Khảo sát sau Tour MICE', saved: 1, tpl: 'Survey MI-01 · Sự kiện MICE (EN)', days: '3', lt: ['MICE'], note: 'Chờ khách MICE đầu tiên năm 2027' }) + foot('Lưu lần cuối 09/11/2026 15:02', B('Lưu nháp') + B('Lưu và bật', 'p')), overlay: modal('Xóa chiến dịch nháp CD-2611-001?', `Chiến dịch chưa từng bật và chưa gửi lần nào. Thiết lập sẽ bị xóa, không khôi phục được; mã CD-2611-001 không được dùng lại.`, B('Giữ lại') + B('Xóa nháp', 'dp'), 480) });

// W16 Chỉ đọc khi không phụ trách
S.W16 = P('CD-2603-001', { user: 'lh', body: hdr({ id: 'CD-2603-001', name: 'Khảo sát sau Tour – Inbound châu Âu', st: 'run', ro: `Chỉ xem · do ${NAM} phụ trách`, meta: ['Gửi <b>7 ngày</b> sau khi đóng Tour · 09:00', 'Mẫu <b>Survey EU-01</b>', `Phụ trách <b>${NAM}</b>`, 'Lần gửi tiếp theo <b>12/11 09:00</b> · 2 khách'], cnt: '<span class="cnt r">1</span>' }) + svForm({ ro: 1, saved: 1, name: 'Khảo sát sau Tour – Inbound châu Âu', tpl: 'Survey EU-01 · Khảo sát sau Tour (EN, DE, FR)', days: '7', lt: ['Tất cả loại Tour'], qg: ['Nhóm Châu Âu (24 nước)'], note: 'Survey chuẩn cho khách châu Âu' }) });

module.exports = S;
