// Wireframe QT04 · Pax list, Rooming list, Survey, email chăm sóc, vòng đời và lịch sử (W16–W32).
const C = require('./common-qt04');
const { NAM, HA, ANH, HAI, fc, opt, sw, ck, ind, toast, fld, tags, P, head, toolbar, DH, dhTable, DH_CHIPS, KD, KD_ALL, kdTable, KD_CHIPS, proposalNote, drawerXL, sub3, langTabs, editor, foot, B, bd } = C;
const { modal } = require('./lib');
const S = {};
const dhList = (o = {}) => head({ tab: 'dh', ro: o.ro }) + toolbar({ chipArr: DH_CHIPS }) + dhTable(o);
const kdList = (o = {}) => head({ tab: 'kd', kdCnt: o.kdCnt || 7 }) + toolbar({ chipArr: o.chips || KD_CHIPS }) + proposalNote + kdTable(o);
const grid = (l, r, w = 300) => `<div style="display:grid;grid-template-columns:${w}px 1fr;gap:16px;height:100%">${l}<div>${r}</div></div>`;

// ================= 3.3 Pax list, Rooming list =================
const TYPES = ['Khách sạn', 'Du thuyền', 'Nhà hàng', 'Vận chuyển', 'Tham quan', 'Hàng không', 'HDV'];
// [trường, tiêu đề cột EN, các loại có cột (chỉ số TYPES), trong tập mặc định]
const FIELDS = [
  ['Họ tên', 'Full name', [0, 1, 2, 3, 4, 5, 6], 1],
  ['Giới tính', 'Gender', [0, 5, 6], 1],
  ['Ngày sinh', 'Date of birth', [1, 5], 0],
  ['Quốc tịch', 'Nationality', [0, 1, 4, 5, 6], 1],
  ['Số hộ chiếu', 'Passport No.', [0, 1, 5], 0],
  ['Ngày hết hạn hộ chiếu', 'Passport expiry', [5], 0],
  ['Visa', 'Visa', [1], 0],
  ['Chuyến bay đến/về', 'Flights', [3, 6], 0],
  ['Yêu cầu ăn uống', 'Dietary', [2, 6], 0],
  ['Yêu cầu phòng', 'Room request', [], 0],
  ['Phòng', 'Room', [0], 0],
];
const plLeft = (o = {}) => `<div>${fld('Mã mẫu', 'PL-01', { req: 1 })}${fld('Tên mẫu', 'Pax list – EN', { req: 1 })}
<div class="f2">${fld('Loại mẫu', 'Pax list', { cls: 'ro' })}${fld('Ngôn ngữ tài liệu', 'English', { req: 1, cls: 'sel' })}</div>
${fld('Tiêu đề tài liệu', `PAX LIST · ${fc('Tour Code')} · ${fc('Tên đoàn')}`, { req: 1 })}
<div class="f2">${fld('Sắp xếp khách', 'Theo thứ tự ở DH08.4', { cls: 'sel' })}${fld('Định dạng ngày', 'dd/mm/yyyy', { cls: 'sel' })}</div>
<div class="hint" style="margin:-2px 0 8px">Mẫu Pax list đang dùng: DH08.4 tự dùng khi xem, tải, gửi Pax list.</div>
<div class="sec">Dùng ở</div><div class="small muted">DH08.4 · 63 tài liệu đã tải hoặc gửi, lần cuối 10/11/2026</div></div>`;
const matrix = (o = {}) => `<div class="tbl"><table class="mx"><tr><th>Trường</th><th>Tiêu đề cột</th>${TYPES.map((t, i) => `<th class="${o.badCol === i ? 'badc' : ''}">${t}</th>`).join('')}<th style="background:#f1f5f9">Loại khác</th></tr>
<tr><td class="muted">#</td><td class="muted small">No.</td>${TYPES.map(() => `<td>${ck(1, 1)}</td>`).join('')}<td>${ck(1, 1)}</td></tr>
${FIELDS.map(([n, en, on, def]) => `<tr><td><span class="muted" style="letter-spacing:-2px">⋮⋮</span> ${n}</td><td class="small">${en}</td>${TYPES.map((t, i) => { const v = o.badCol === i && n === 'Họ tên' ? 0 : on.includes(i); return `<td class="${o.badCol === i ? 'badc' : ''}">${ck(v)}</td>`; }).join('')}<td style="background:#f8fafc">${ck(def, 1)}</td></tr>`).join('')}</table></div>`;
const plSub = 'Pax list · English · Đang dùng · lưu lần cuối 28/10/2026 bởi ' + ANH;
const plSubTabs = on => sub3(on, ['Cột theo loại dịch vụ', 'Email gửi kèm', 'Xem trước', 'Lịch sử phiên bản']);
const plFoot = (r) => foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng cho 63 tài liệu</span>`, r || `<span class="muted small">Không có thay đổi</span>${B('Đóng')}${B('Lưu phiên bản v4', 'dis')}`);

S.W16 = P({ user: 'dh', body: dhList({ hl: { 'PL-01': 'sel' } }), overlay: drawerXL(`PL-01 · Pax list – EN ${bd('v3', 'b-gray')}`,
  grid(plLeft(), plSubTabs('Cột theo loại dịch vụ') + matrix()
    + `<div class="hint" style="margin-top:6px">Mỗi NCC nhận các cột của loại dịch vụ mà NCC cung cấp trong Tour. Kéo ⋮⋮ để đổi thứ tự cột. Cột “Loại khác” là tập mặc định cho loại dịch vụ chưa có cột riêng, không sửa được.</div>
<div class="banner i small" style="margin-top:6px"><span class="ico i">i</span><div><b>Dữ liệu cá nhân.</b> Số hộ chiếu in đầy đủ trong tệp gửi NCC có cột này (RSD DH08). Chỉ bật cho loại dịch vụ cần khai báo lưu trú hoặc xuất vé.</div></div>`), plFoot(), plSub) });

const paxRows = [['1', 'HANS MÜLLER', 'M', 'DEU', 'C01X••••47', '101 TWN'], ['2', 'PETRA MÜLLER', 'F', 'DEU', 'C01X••••52', '101 TWN'], ['3', 'KLAUS SCHMIDT', 'M', 'DEU', 'C4FR••••19', '102 TWN'], ['4', 'ANNA SCHMIDT', 'F', 'DEU', 'C4FR••••21', '102 TWN'], ['5', 'JÜRGEN WEBER', 'M', 'DEU', 'C7KL••••03', '103 TWN'], ['6', 'MONIKA WEBER', 'F', 'AUT', 'P228••••6', '103 TWN'], ['7', 'THOMAS FISCHER', 'M', 'DEU', 'C9TT••••88', '104 TWN']];
S.W17 = P({ user: 'dh', body: dhList({ hl: { 'PL-01': 'sel' } }), overlay: drawerXL(`PL-01 · Pax list – EN ${bd('v3', 'b-gray')}`,
  grid(plLeft(), plSubTabs('Xem trước')
    + `<div class="f2">${fld('Dữ liệu của', 'TP-2611-0042 · Müller Reisen GmbH · 18 khách', { cls: 'sel', auto: 'Gợi ý' })}${fld('Xem như NCC loại', 'Khách sạn', { cls: 'sel' })}</div>
<div class="doc"><h5>PAX LIST · TP-2611-0042 · Müller Reisen GmbH</h5><div class="small muted" style="margin-bottom:6px">18/11/2026 – 25/11/2026 · 18 pax · TOPAS Travel</div>
<table><tr><th>No.</th><th>Full name</th><th>Gender</th><th>Nationality</th><th>Passport No.</th><th>Room</th></tr>
${paxRows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4].replace(' ', '')}</td><td>${r[5]}</td></tr>`).join('')}<tr class="dim"><td colspan="6">… 11 dòng khác</td></tr></table></div>
<div class="flex" style="margin-top:8px"><span class="muted small">Đọc dữ liệu khách của hồ sơ, không lưu gì. Bản xem trước và tệp tải thử che số hộ chiếu; tệp gửi NCC ở DH08 in đầy đủ.</span><span class="ml"></span>${B('Tải Excel thử')}${B('Tải PDF thử')}</div>`), plFoot(), plSub) });

S.W18 = P({ user: 'dh', body: dhList({ hl: { 'PL-01': 'sel' } }), overlay: drawerXL(`PL-01 · Pax list – EN ${bd('v3', 'b-gray')}`,
  grid(plLeft(), plSubTabs('Email gửi kèm') + langTabs([['Tiếng Việt <span class="req">*</span>', ''], 'English'], 'Tiếng Việt <span class="req">*</span>')
    + fld('Tiêu đề', `[${fc('Tour Code')}] Pax list đoàn ${fc('Tên đoàn')} · ${fc('Số khách')} khách`, { req: 1 })
    + editor(`Kính gửi ${fc('Tên NCC')},
TOPAS Travel gửi danh sách khách đoàn ${fc('Tour Code')} (${fc('Ngày khởi hành')} – ${fc('Ngày kết thúc')}), ${fc('Số khách')} khách, trong tệp đính kèm.
${opt(`Lưu ý: ${fc('Yêu cầu riêng')}`)}
Nhờ quý đối tác kiểm tra và phản hồi nếu cần bổ sung thông tin.
Trân trọng,
${fc('Người gửi')} – ${fc('Điện thoại người gửi')}`, { h: 170 })
    + `<div class="file" style="margin-top:8px">📎 <b>PaxList_${'{Tour Code}'}_${'{Tên NCC}'}.xlsx</b><span class="muted small">Tệp đính kèm tự sinh theo tập cột của NCC; tên tệp không sửa</span></div>
<div class="hint">Email này được soạn sẵn khi Điều hành bấm Gửi cho NCC ở DH08.4; Điều hành kiểm tra rồi mới gửi.</div>`), plFoot(), plSub) });

// Rooming list
const rlCols = [['Phòng', 'Room', 1], ['Hạng phòng', 'Room type', 1], ['Họ tên', 'Guest name', 1], ['Giới tính', 'Gender', 1], ['Quốc tịch', 'Nationality', 1], ['Ngày nhận phòng', 'Check-in', 1], ['Ngày trả phòng', 'Check-out', 1], ['Yêu cầu phòng', 'Room request', 1], ['Số hộ chiếu', 'Passport No.', 0], ['Ghi chú', 'Remarks', 0]];
S.W19 = P({ user: 'dh', body: dhList({ hl: { 'RL-01': 'sel' } }), overlay: drawerXL(`RL-01 · Rooming list – EN ${bd('v2', 'b-gray')}`,
  grid(`<div>${fld('Mã mẫu', 'RL-01', { req: 1 })}${fld('Tên mẫu', 'Rooming list – EN', { req: 1 })}
<div class="f2">${fld('Loại mẫu', 'Rooming list', { cls: 'ro' })}${fld('Ngôn ngữ tài liệu', 'English', { req: 1, cls: 'sel' })}</div>
${fld('Tiêu đề tài liệu', `ROOMING LIST · ${fc('Tên khách sạn')} · ${fc('Tour Code')}`, { req: 1 })}
<div class="sec">Cột</div><div class="tbl"><table class="mx">${rlCols.map(([n, en, on], i) => `<tr><td><span class="muted" style="letter-spacing:-2px">⋮⋮</span> ${n}</td><td class="small">${en}</td><td>${ck(on, i < 3)}</td></tr>`).join('')}</table></div>
<div class="hint" style="margin-top:6px">Mẫu Rooming list đang dùng: DH08.4 tự dùng cho mọi đợt lưu trú.</div></div>`,
    sub3('Xem trước', ['Cột và bố cục', 'Email gửi kèm', 'Xem trước', 'Lịch sử phiên bản'])
    + `<div class="f2">${fld('Dữ liệu của', 'TP-2611-0042 · Müller Reisen GmbH', { cls: 'sel', auto: 'Gợi ý' })}${fld('Đợt lưu trú', 'Lotus Hanoi · 18–20/11', { cls: 'sel' })}</div>
<div class="doc"><h5>ROOMING LIST · Lotus Hanoi 4★ · TP-2611-0042</h5><div class="small muted" style="margin-bottom:6px">Check-in 18/11/2026 · Check-out 20/11/2026 · 10 rooms (8 TWN, 2 SGL) · 18 pax</div>
<table><tr><th>Room</th><th>Room type</th><th>Guest name</th><th>Gender</th><th>Nationality</th><th>Check-in</th><th>Check-out</th><th>Room request</th></tr>
<tr><td rowspan="2">101</td><td rowspan="2">TWN</td><td>HANS MÜLLER</td><td>M</td><td>DEU</td><td rowspan="2">18/11/2026</td><td rowspan="2">20/11/2026</td><td rowspan="2"></td></tr><tr><td>PETRA MÜLLER</td><td>F</td><td>DEU</td></tr>
<tr><td rowspan="2">102</td><td rowspan="2">TWN</td><td>KLAUS SCHMIDT</td><td>M</td><td>DEU</td><td rowspan="2">18/11/2026</td><td rowspan="2">20/11/2026</td><td rowspan="2"></td></tr><tr><td>ANNA SCHMIDT</td><td>F</td><td>DEU</td></tr>
<tr><td>105</td><td>SGL</td><td>STEFAN BECKER</td><td>M</td><td>DEU</td><td>18/11/2026</td><td>20/11/2026</td><td>Low floor</td></tr>
<tr class="dim"><td colspan="8">… 7 phòng khác</td></tr></table></div>
<div class="hint" style="margin-top:6px">Mỗi phòng một nhóm dòng, theo phân phòng đã lưu ở DH08.4. Ba cột đầu bắt buộc.</div>`, 340),
  foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng cho 58 tài liệu</span>`, `<span class="muted small">Không có thay đổi</span>${B('Đóng')}${B('Lưu phiên bản v3', 'dis')}`),
  'Rooming list · English · Đang dùng · áp dụng cho Khách sạn, Du thuyền · lưu lần cuối 12/09/2026 bởi ' + ANH) });

// W20 Lỗi tập cột
S.W20 = P({ user: 'dh', body: dhList({ hl: { 'PL-01': 'sel' } }), overlay: drawerXL(`PL-01 · Pax list – EN ${bd('v3', 'b-gray')}`,
  `<div class="banner e small" style="margin-bottom:8px"><span class="ico e">!</span><div><b>Chưa lưu được.</b> Loại Nhà hàng không còn cột Họ tên. Mỗi loại dịch vụ có cột riêng phải có Họ tên. Thay đổi của bạn vẫn được giữ.</div></div>`
  + grid(plLeft(), plSubTabs('Cột theo loại dịch vụ') + matrix({ badCol: 2 })
    + `<div class="err">Nhà hàng: tích lại Họ tên, hoặc bỏ hết cột của Nhà hàng để dùng tập mặc định (Loại khác).</div>
<div class="banner w small" style="margin-top:6px"><span class="ico w">!</span><div>Loại dịch vụ <b>Spa</b> mới thêm ở QT05 chưa có cột riêng; Pax list gửi NCC Spa dùng tập mặc định ở cột Loại khác. ${B('Thêm cột cho Spa', 'lk')}</div></div>`),
  plFoot(`<span class="muted small">2 thay đổi chưa lưu</span>${B('Hủy')}${B('Lưu phiên bản v4', 'p')}`), plSub) });

// ================= 3.4 Survey =================
const svLeft = (o = {}) => `<div>${fld('Mã mẫu', 'GR-01', { req: 1 })}${fld('Tên mẫu', 'Đoàn Inbound', { req: 1 })}
${fld('Loại mẫu', 'Survey', { cls: 'ro' })}
${fld('Ghi chú nội bộ', 'Dùng cho đoàn Inbound ngoài châu Âu. Câu 1 là điểm tổng thể trên KD10, QT06.', { cls: 'area' })}
<div class="sec">Dùng ở</div><div class="small">CD-2611-002 · Khảo sát sau Tour Inbound đoàn ${bd('Đang chạy', 'b-green')}<br>CD-2611-004 · Survey đoàn Inbound châu Á ${bd('Nháp', 'b-gray')}</div>
<div class="banner i small" style="margin-top:8px;align-items:flex-start"><span class="ico i">i</span><div>Chiến dịch đã bật (Đang chạy, Tạm dừng) giữ nội dung đã chụp; bật lại không tự lấy phiên bản mới, muốn dùng thì chọn lại mẫu ở KD10. Chiến dịch Nháp dùng phiên bản hiện hành khi bật lần đầu (RSD KD10 R10).</div></div></div>`;
const svSub = 'Survey · EN, FR, DE · Đang dùng · lưu lần cuối 02/10/2026 bởi ' + NAM;
const svTabs = on => sub3(on, ['Câu hỏi', 'Email mời', 'Xem trước', 'Lịch sử phiên bản']);
const QS = [['Overall, how would you rate your trip?', 'Điểm 0–10', 1, 'Điểm tổng thể'], ['Tour guide', 'Sao 1–5', 1], ['Hotels', 'Sao 1–5', 1], ['Transport', 'Sao 1–5', 0], ['Anything we could do better?', 'Văn bản', 0]];
const qList = (o = {}) => QS.map((q, i) => { const miss = o.miss && o.miss.includes(i); const text = o.tr && o.tr[i] !== undefined ? o.tr[i] : q[0]; return `<div class="q ${miss ? 'bad' : ''}"><span class="n">${i + 1}</span><div style="flex:1"><div class="${miss ? '' : 'b'}">${miss ? '<span style="color:#b91c1c">Chưa dịch · bản English: ' + q[0] + '</span>' : text}</div>${q[3] ? `<div>${ind(q[3], 'v')}</div>` : ''}</div><span class="isel">${q[1]}</span><span class="flex small">${ck(q[2])} Bắt buộc</span><span class="muted">↑ ↓ ✕</span></div>`; }).join('');
S.W21 = P({ user: 'kd', body: kdList({ hl: { 'GR-01': 'sel' } }), overlay: drawerXL(`GR-01 · Đoàn Inbound ${bd('v4', 'b-gray')}`,
  grid(svLeft(), svTabs('Câu hỏi') + langTabs([['English <span class="req">*</span>', ''], 'Français', 'Deutsch'], 'English <span class="req">*</span>') + qList()
    + `<div class="flex" style="margin-top:4px">${B('+ Thêm câu hỏi', 'lk')}<span class="muted small">· tối đa 15 câu; tối đa một câu Điểm 0–10, là điểm tổng thể</span></div>
<div class="hint" style="margin-top:6px">Loại câu, thứ tự và Bắt buộc dùng chung cho mọi ngôn ngữ; nội dung câu viết theo từng ngôn ngữ.</div>`),
  foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng ở 2 chiến dịch</span>`, `<span class="muted small">Không có thay đổi</span>${B('Đóng')}${B('Lưu phiên bản v5', 'dis')}`), svSub) });

S.W22 = P({ user: 'kd', body: kdList({ hl: { 'GR-01': 'sel' } }), overlay: drawerXL(`GR-01 · Đoàn Inbound ${bd('v4', 'b-gray')}`,
  grid(svLeft(), svTabs('Email mời') + langTabs([['English <span class="req">*</span>', ''], ['Français', ' •'], 'Deutsch'], 'Français')
    + fld('Tiêu đề', `Comment s’est passé votre voyage, ${fc('Tên khách')} ?`, { req: 1 })
    + editor(`${opt(`Cher·e ${fc('Danh xưng')} ${fc('Tên khách')}`)},
Merci d’avoir voyagé avec nous (${fc('Tour Code')}, ${opt(fc('Thời gian Tour'))}).
Deux minutes suffisent pour nous dire comment cela s’est passé.
<div class="fixed" style="display:inline-block">Nút “Commencer le questionnaire” · mở link Survey riêng của khách · khối cố định</div>
${fc('Người phụ trách')} · TOPAS Travel`, { h: 170 })
    + `<div class="fixed">Cuối email, hệ thống tự thêm: lý do nhận email, liên kết hủy nhận (RSD KD10 R13). Không sửa, không xóa được.</div>
<div class="hint" style="margin-top:6px">Trường trộn của Survey: {Danh xưng}, {Tên khách}, {Tour Code}, {Thời gian Tour}, {Tuyến Tour}, {Người phụ trách}.</div>`),
  foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng ở 2 chiến dịch</span>`, `<span class="muted small">1 thay đổi chưa lưu</span>${B('Hủy')}${B('Lưu phiên bản v5', 'p')}`), svSub) });

const q = (t, kind) => `<div style="margin:5px 0"><div class="small b">${t}</div>${kind === 'n' ? `<div class="flex" style="gap:3px;margin-top:3px">${[...Array(11).keys()].map(i => `<span class="pill" style="padding:1px 6px">${i}</span>`).join('')}</div>` : kind === 's' ? `<div style="margin-top:2px">${'★★★★★'.split('').map(() => '<span style="color:#cbd5e1;font-size:15px">★</span>').join('')}</div>` : '<div class="input area" style="min-height:34px"></div>'}</div>`;
S.W23 = P({ user: 'kd', body: kdList({ hl: { 'GR-01': 'sel' } }), overlay: drawerXL(`GR-01 · Đoàn Inbound ${bd('v4', 'b-gray')}`,
  grid(svLeft(), svTabs('Xem trước') + `<div class="f2">${fld('Dữ liệu của', 'TP-2610-0118 · Tanaka Family · đóng 05/11/2026', { cls: 'sel', auto: 'Gợi ý' })}<div class="field"><label>Ngôn ngữ</label><div class="flex"><span class="chip on">English</span><span class="chip">Français</span><span class="chip">Deutsch</span></div></div></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="email"><div class="row"><span>Tiêu đề</span>How was your trip with us, <span class="hl">Tanaka</span>?</div><div class="body">Dear <span class="hl">Mr Kenji Tanaka</span>,
Thank you for travelling with us (<span class="hl">TP-2610-0118</span>, <span class="hl">20/10 – 29/10/2026</span>).
It takes 2 minutes to tell us how it went.
[ Start the survey ]
<span class="hl">Lê Thu Hà</span> · TOPAS Travel
<span class="muted small">You receive this email because you travelled with TOPAS. Unsubscribe.</span></div></div>
<div class="card" style="padding:8px 10px">${q('1. Overall, how would you rate your trip? *', 'n')}${q('2. Tour guide *', 's')}${q('3. Hotels *', 's')}${q('4. Transport', 's')}${q('5. Anything we could do better?')}</div></div>
<div class="muted small" style="margin-top:6px">Xem trước không tạo lần gửi. Gửi thử tới email của bạn có tiêu đề “[Gửi thử]”; link Survey trong bản thử không ghi phản hồi.</div>`),
  foot(B('Gửi thử tới email của tôi'), `<span class="muted small">Không có thay đổi</span>${B('Đóng')}${B('Lưu phiên bản v5', 'dis')}`), svSub) });

S.W24 = P({ user: 'kd', body: kdList({ hl: { 'GR-01': 'sel' } }), overlay: drawerXL(`GR-01 · Đoàn Inbound ${bd('v4', 'b-gray')}`,
  `<div class="banner e small" style="margin-bottom:8px"><span class="ico e">!</span><div><b>Chưa lưu được.</b> Bản Deutsch thiếu nội dung 1 câu hỏi (câu 6 mới thêm). Dịch câu đó, hoặc bỏ ngôn ngữ Deutsch khỏi mẫu. Thay đổi vẫn được giữ.</div></div>`
  + grid(svLeft(), svTabs('Câu hỏi') + langTabs([['English <span class="req">*</span>', ''], ['Français', ''], ['Deutsch', ' <span class="cnt r">1</span>']], 'Deutsch')
    + qList({ tr: ['Wie bewerten Sie Ihre Reise insgesamt?', 'Reiseleiter', 'Hotels', 'Transport', 'Was können wir besser machen?'] })
    + `<div class="q bad"><span class="n">6</span><div style="flex:1"><div style="color:#b91c1c">Chưa dịch · bản English: Would you recommend us to a friend?</div></div><span class="isel">Sao 1–5</span><span class="flex small">${ck(0)} Bắt buộc</span><span class="muted">↑ ↓ ✕</span></div>
<div class="err">Nhập nội dung câu 6 bằng tiếng Đức. ${B('Bỏ ngôn ngữ Deutsch', 'lk')}</div>`),
  foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng ở 2 chiến dịch</span>`, `<span class="muted small">1 thay đổi chưa lưu</span>${B('Hủy')}${B('Lưu phiên bản v5', 'p')}`), svSub) });

// ================= 3.5 Email chăm sóc =================
S.W25 = P({ user: 'kd', body: kdList({ hl: { 'RM-03': 'sel' } }), overlay: drawerXL(`RM-03 · Ưu đãi mùa ${bd('v2', 'b-gray')}`,
  grid(`<div>${fld('Mã mẫu', 'RM-03', { req: 1 })}${fld('Tên mẫu', 'Ưu đãi mùa', { req: 1 })}${fld('Loại mẫu', 'Email chăm sóc', { cls: 'ro' })}
${fld('Ghi chú nội bộ', 'Chuỗi ưu đãi mùa xuân, mùa thu cho khách đã đi Tour.', { cls: 'area' })}
<div class="sec">Dùng ở</div><div class="small">CD-2610-001 · Ưu đãi mùa xuân 2027 – Miền Bắc ${bd('Đang chạy', 'b-green')}</div></div>`,
    sub3('Nội dung') + langTabs([['English <span class="req">*</span>', ''], 'Deutsch', 'Français'], 'Deutsch')
    + fld('Tiêu đề', `Frühling 2027 in Nordvietnam – Frühbucherangebot`, { req: 1 })
    + editor(`${opt(`Liebe·r ${fc('Danh xưng')} ${fc('Tên khách')}`)},
${opt(`schön, dass Sie mit uns ${fc('Tour gần nhất')} erlebt haben.`)}
Für Frühling 2027 haben wir neue Routen durch Ha Long und Sapa – mit 10 % Frühbucherrabatt bis 31.12.
Antworten Sie einfach auf diese E-Mail, ${fc('Người phụ trách')} meldet sich bei Ihnen.`, { h: 170 })
    + `<div class="fixed">Cuối email, hệ thống tự thêm: lý do nhận email, liên kết hủy nhận (RSD KD10 R13). Không sửa, không xóa được.</div>
<div class="hint" style="margin-top:6px">Trường trộn của email chăm sóc: {Danh xưng}, {Tên khách}, {Tour gần nhất}, {Người phụ trách}. Khách chưa có Tour đã đóng thì cụm chứa {Tour gần nhất} bị bỏ.</div>`),
  foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng ở 1 chiến dịch</span>`, `<span class="muted small">Không có thay đổi</span>${B('Đóng')}${B('Lưu phiên bản v3', 'dis')}`),
  'Email chăm sóc · EN, DE, FR · Đang dùng · lưu lần cuối 01/10/2026 bởi ' + NAM) });

// ================= 3.6 Vòng đời =================
S.W26 = P({ user: 'kd', body: kdList({ hl: { 'GR-01': 'sel' } }), overlay: modal('Ngừng dùng mẫu GR-01 · Đoàn Inbound?', `<p style="margin:0 0 8px">Mẫu sẽ không còn hiện khi chọn mẫu ở KD10. Nội dung và lịch sử phiên bản được giữ; bật lại được bất cứ lúc nào.</p>
<div class="tbl"><table><tr><th>Chiến dịch dùng mẫu</th><th>Sau khi ngừng dùng</th></tr>
<tr><td>CD-2611-002 · Khảo sát sau Tour Inbound đoàn ${bd('Đang chạy', 'b-green')}</td><td class="small">Vẫn gửi bằng nội dung đã chụp lúc bật</td></tr>
<tr><td>CD-2611-004 · Survey đoàn Inbound châu Á ${bd('Nháp', 'b-gray')}</td><td class="small" style="color:#92400e">Phải chọn mẫu khác trước khi bật</td></tr></table></div>`, `${B('Giữ Đang dùng')}${B('Ngừng dùng', 'd')}`, 600) });

S.W27 = P({ user: 'kd', body: kdList({ hl: { 'GR-01': 'off' }, over: { 'GR-01': { 6: 0 } }, kdCnt: 6, chips: [['Tất cả', 6], ['Survey', 3], ['Email chăm sóc', 3]] })
  .replace('GR-01 · Đoàn Inbound</b>', 'GR-01 · Đoàn Inbound</b> <span class="small muted">· không còn khớp bộ lọc Đang dùng</span>')
  + toast('Đã ngừng dùng GR-01. Người phụ trách CD-2611-004 được báo chọn mẫu khác.', 'Hoàn tác') });

S.W28 = P({ user: 'dh', body: dhList({ hl: { 'DV-01': 'sel' } }), overlay: modal('Ngừng dùng DV-01 · Đặt phòng khách sạn?', `<p style="margin:0 0 8px">DH08 đang tự khớp DV-01 cho các email <b>Đặt dịch vụ</b> loại <b>Khách sạn</b>. Sau khi ngừng dùng:</p>
<div class="tbl"><table><tr><th>Loại dịch vụ</th><th>DH08 sẽ dùng</th></tr><tr><td>Khách sạn</td><td>DV-05 · Đặt dịch vụ chung <span class="muted small">(mẫu dự phòng, Mọi loại dịch vụ)</span></td></tr></table></div>
<ul class="small" style="margin:8px 0 0;padding-left:18px"><li>214 email đã gửi bằng DV-01 giữ nguyên.</li><li>Email đang soạn dở ở DH08 vẫn giữ nội dung đã soạn.</li><li>Muốn thay bằng mẫu khách sạn khác: bật mẫu đó, DV-01 tự ngừng dùng.</li></ul>`, `${B('Giữ Đang dùng')}${B('Ngừng dùng', 'd')}`, 600) });

// W28a Bật mẫu thay mẫu đang dùng
S.W28a = P({ user: 'dh', body: head({ tab: 'dh' }) + toolbar({ chipArr: [['Tất cả', 2], ['Email đặt dịch vụ', 2], ['Pax list', 0], ['Rooming list', 0]], q: 'khách sạn', st: 'Tất cả', clear: true }) + dhTable({ keys: ['DV-01', 'DV-08'], hl: { 'DV-08': 'sel' } }),
  overlay: modal('Bật DV-08 thay DV-01?', `<p style="margin:0 0 8px">Mỗi loại dịch vụ chỉ có một mẫu Đang dùng cho mỗi mục đích, để DH08 tự khớp mẫu.</p>
<div class="tbl"><table><tr><th>Mục đích · loại dịch vụ</th><th>Đang dùng</th><th>Sau khi bật</th></tr><tr><td>Đặt dịch vụ · Khách sạn</td><td>DV-01 · Đặt phòng khách sạn</td><td><b>DV-08</b> · Đặt phòng khách sạn – mẫu 2025</td></tr></table></div>
<div class="small" style="margin-top:8px">DV-01 chuyển <b>Ngừng dùng</b> (chỉ áp dụng cho Khách sạn). Email đã gửi giữ nguyên.</div>`, `${B('Giữ như cũ')}${B('Bật DV-08, ngừng dùng DV-01', 'p')}`, 600) });

S.W29 = P({ user: 'dh', body: dhList({ hl: { 'PL-02': 'sel' } }), overlay: drawerXL(`PL-02 · Pax list – VI ${bd('v1', 'b-gray')}`,
  grid(plLeft().replace(/PL-01/g, 'PL-02').replace('Pax list – EN', 'Pax list – VI').replace('>English<', '>Tiếng Việt<').replace('Mẫu Pax list đang dùng: DH08.4 tự dùng khi xem, tải, gửi Pax list.', 'Ngừng dùng. Bật mẫu này sẽ thay PL-01 ở DH08.4.').replace('DH08.4 · 63 tài liệu đã tải hoặc gửi, lần cuối 10/11/2026', 'Chưa dùng'), plSubTabs('Cột theo loại dịch vụ') + '<div class="skel" style="height:300px;opacity:.5"></div>'),
  foot(B('Xóa mẫu', 'd'), `${B('Đóng')}${B('Lưu phiên bản v2', 'dis')}`), 'Pax list · Tiếng Việt · Ngừng dùng · Chưa dùng · tạo 10/11/2026 bởi ' + HAI)
  + `<div class="overlay" style="z-index:8"></div><div class="modal" style="width:480px;z-index:9"><div class="mh">Xóa mẫu PL-02 · Pax list – VI?</div><div class="mb"><p style="margin:0">Mẫu chưa dùng cho tài liệu nào. Xóa sẽ xóa hẳn mẫu và mọi phiên bản; nhật ký thao tác vẫn ghi lại việc xóa. Không hoàn tác được.</p></div><div class="mf">${B('Giữ mẫu')}${B('Xóa mẫu', 'dp')}</div></div>` });

// Lịch sử phiên bản
const VERS = [['v6', '05/11/2026 14:20', ANH, 'Sửa nội dung (VI): thêm câu giá tham chiếu'], ['v5', '18/10/2026 09:05', HAI, 'Thêm bản English'], ['v4', '02/09/2026 16:40', ANH, 'Đổi tiêu đề (VI); đổi tên mẫu'], ['v3', '15/07/2026 10:12', ANH, 'Sửa nội dung (VI)'], ['v2', '03/06/2026 08:30', HAI, 'Sửa tiêu đề (VI)'], ['v1', '20/05/2026 11:00', ANH, 'Tạo mẫu']];
S.W30 = P({ user: 'dh', body: dhList({ hl: { 'DV-01': 'sel' } }), overlay: drawerXL(`DV-01 · Đặt phòng khách sạn ${bd('v6', 'b-gray')}`,
  `<div style="display:grid;grid-template-columns:330px 1fr;gap:16px">${'<div>' + sub3('Lịch sử phiên bản') + VERS.map((v, i) => `<div class="vrow ${i === 2 ? 'on' : ''}"><b style="width:26px">${v[0]}</b><div style="flex:1"><div>${v[3]}</div><div class="small muted">${v[1]} · ${v[2]}</div></div>${i === 0 ? ind('Hiện hành', 'g') : ''}</div>`).join('') + '</div>'}
<div><div class="flex" style="margin-bottom:6px"><b>v4 · 02/09/2026 · ${ANH}</b><span class="muted small">so với v3</span><span class="ml"></span>${B('Khôi phục nội dung v4')}</div>
<div class="tbl"><table><tr><th>Phần</th><th>v3</th><th>v4</th></tr>
<tr><td class="small">Tên mẫu</td><td class="small"><span class="diff-d">Đặt phòng KS</span></td><td class="small"><span class="diff-a">Đặt phòng khách sạn</span></td></tr>
<tr><td class="small">Tiêu đề (VI)</td><td class="small"><span class="diff-d">Đặt phòng đoàn {Tên đoàn}</span></td><td class="small"><span class="diff-a">[{Tour Code}] Đặt phòng {Ngày sử dụng} · đoàn {Tên đoàn} {Số khách} khách</span></td></tr></table></div>
<div class="sec">Nội dung v4 (Tiếng Việt)</div><div class="email"><div class="body">Kính gửi {Tên NCC},
TOPAS Travel xin đặt phòng cho đoàn {Tour Code} ({Số khách} khách):
{Danh sách dịch vụ}
Vui lòng xác nhận và gửi mã đặt chỗ cho chúng tôi.
Trân trọng,
{Người gửi} – {Điện thoại người gửi}</div></div>
<div class="muted small" style="margin-top:6px">Đã dùng: v6 · 12 email; v5 · 41; v4 · 63; v3 · 55; v2 · 30; v1 · 13. Mỗi email đã gửi ghi số phiên bản mẫu.</div></div></div>`,
  foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng cho 214 email</span>`, `<span class="muted small">Không có thay đổi</span>${B('Đóng')}${B('Lưu phiên bản v7', 'dis')}`), 'Email đặt dịch vụ · Khách sạn · Đang dùng · lưu lần cuối 05/11/2026 bởi ' + ANH) });

S.W31 = P({ user: 'dh', body: dhList({ hl: { 'DV-01': 'sel' } }), overlay: drawerXL(`DV-01 · Đặt phòng khách sạn ${bd('v6', 'b-gray')}`,
  `<div class="banner i small" style="margin-bottom:8px"><span class="ico i">i</span><div>Đã nạp nội dung v4 vào khung soạn. Kiểm tra rồi bấm <b>Lưu phiên bản v7</b> để áp dụng; bấm Hủy để giữ v6.</div></div>`
  + `<div style="display:grid;grid-template-columns:330px 1fr;gap:16px"><div>${fld('Mã mẫu', 'DV-01', { req: 1 })}${fld('Tên mẫu', 'Đặt phòng khách sạn', { req: 1 })}<div class="field"><label>Áp dụng cho loại dịch vụ <span class="req">*</span></label>${tags(['Khách sạn'])}</div><div class="field"><label class="flex"></label></div></div>
<div>${sub3('Nội dung') + langTabs([['Tiếng Việt <span class="req">*</span>', ' •'], ['English', ' •']], 'Tiếng Việt <span class="req">*</span>')}${fld('Tiêu đề', `[${fc('Tour Code')}] Đặt phòng ${fc('Ngày sử dụng')} · đoàn ${fc('Tên đoàn')} ${fc('Số khách')} khách`, { req: 1 })}
${editor(`<div style="background:#f0fdf4">Kính gửi ${fc('Tên NCC')},
TOPAS Travel xin đặt phòng cho đoàn ${fc('Tour Code')} (${fc('Số khách')} khách):
${fc('Danh sách dịch vụ')}
Vui lòng xác nhận và gửi mã đặt chỗ cho chúng tôi.
Trân trọng,
${fc('Người gửi')} – ${fc('Điện thoại người gửi')}</div>`, { h: 170 })}
<div class="muted small" style="margin-top:6px">v4 chưa có bản English: khôi phục sẽ bỏ bản English khỏi mẫu (dấu • trên thẻ English). Muốn giữ bản English, thêm lại trước khi lưu.</div></div></div>`,
  foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng cho 214 email</span>`, `<span class="muted small">Khôi phục từ v4 · 3 thay đổi chưa lưu</span>${B('Hủy')}${B('Lưu phiên bản v7', 'p')}`), 'Email đặt dịch vụ · Khách sạn · Đang dùng · lưu lần cuối 05/11/2026 bởi ' + ANH) });

// Chỉ xem
S.W32 = P({ user: 'kd', body: dhList({ ro: true, hl: { 'DV-01': 'sel' } }), overlay: drawerXL(`DV-01 · Đặt phòng khách sạn ${bd('v6', 'b-gray')} <span class="muted small" style="font-weight:400">🔒 Chỉ xem</span>`,
  `<div style="display:grid;grid-template-columns:330px 1fr;gap:16px"><div>${fld('Mã mẫu', 'DV-01', { cls: 'ro' })}${fld('Tên mẫu', 'Đặt phòng khách sạn', { cls: 'ro' })}<div class="f2">${fld('Loại mẫu', 'Email đặt dịch vụ', { cls: 'ro' })}${fld('Mục đích', 'Đặt dịch vụ', { cls: 'ro' })}</div><div class="field"><label>Áp dụng cho loại dịch vụ</label>${tags(['Khách sạn'], { ro: 1 })}</div></div>
<div>${sub3('Nội dung', ['Nội dung', 'Lịch sử phiên bản']) + langTabs([['Tiếng Việt', ''], 'English'], 'Tiếng Việt', false)}${fld('Tiêu đề', `[${fc('Tour Code')}] Đặt phòng ${fc('Ngày sử dụng')} · đoàn ${fc('Tên đoàn')} ${fc('Số khách')} khách`, { cls: 'ro' })}
<div class="email" style="background:#f9fafb;border-style:dashed"><div class="body">Kính gửi ${fc('Tên NCC')},
TOPAS Travel xin đặt phòng cho đoàn ${fc('Tour Code')} (${fc('Số khách')} khách):
${fc('Danh sách dịch vụ')}
${opt(`Giá tham chiếu theo hợp đồng: ${fc('Giá tham chiếu')}.`)}
Vui lòng xác nhận và gửi mã đặt chỗ cho chúng tôi.
Trân trọng,
${fc('Người gửi')} – ${fc('Điện thoại người gửi')}</div></div></div></div>`,
  `<span class="dfl muted small">Bạn chỉ xem được mẫu của Điều hành. Cần sửa thì liên hệ Điều hành.</span>${B('Đóng', 'p')}`, 'Email đặt dịch vụ · Khách sạn · Đang dùng · lưu lần cuối 05/11/2026 bởi ' + ANH) });

module.exports = S;
