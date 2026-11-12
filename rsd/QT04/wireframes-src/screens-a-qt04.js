// Wireframe QT04 · danh sách mẫu và mẫu email đặt dịch vụ (W01–W15). Tên và mục đích ở captions.js.
const C = require('./common-qt04');
const { ANH, HAI, fc, opt, sw, ck, ind, toast, fld, tags, P, head, toolbar, DH, DH_ALL, dhTable, DH_CHIPS, KD_CHIPS, kdTable, proposalNote, drawerXL, sub3, langTabs, editor, foot, B, bd } = C;
const { modal } = require('./lib');
const S = {};

// ================= 3.1 Danh sách =================
const dhList = (o = {}) => head({ tab: 'dh', ro: o.ro, dhCnt: o.dhCnt || 9 }) + toolbar({ chipArr: o.chips || DH_CHIPS, q: o.q, st: o.st, on: o.on, clear: o.clear }) + dhTable(o);
S.W01 = P({ user: 'dh', body: dhList() });
S.W02 = P({ user: 'kd', body: head({ tab: 'kd' }) + toolbar({ chipArr: KD_CHIPS }) + proposalNote + kdTable() });
S.W03 = P({ user: 'dh', body: dhList({ q: 'khách sạn', st: 'Tất cả', clear: true, chips: [['Tất cả', 2], ['Email đặt dịch vụ', 2], ['Pax list', 0], ['Rooming list', 0]], keys: ['DV-01', 'DV-08'] }) + '<div class="muted small" style="margin-top:6px">Khớp theo tên mẫu và loại dịch vụ áp dụng. Mẫu Ngừng dùng hiện mờ.</div>' });
S.W04 = P({ user: 'kd', body: dhList({ ro: true }) + '<div class="muted small" style="margin-top:6px">Bạn xem được mẫu của Điều hành để biết nội dung gửi NCC. Tạo, sửa, bật tắt do Điều hành thực hiện.</div>' });
S.W05 = P({ user: 'dh', body: head({ tab: 'dh' }) + toolbar({ chipArr: [['Tất cả', 0], ['Email đặt dịch vụ', 0], ['Pax list', 0], ['Rooming list', 0]], q: 'visa', clear: true }) + `<div class="tbl"><div class="empty"><div class="big">Không có mẫu khớp “visa” ở trạng thái Đang dùng</div>Thử tìm theo tên khác hoặc chọn Trạng thái: Tất cả.<div style="margin-top:12px">${B('Xóa bộ lọc')}</div></div></div>` });

// ================= 3.2 Email đặt dịch vụ =================
const VI_HOTEL = (o = {}) => `Kính gửi ${fc('Tên NCC')},
TOPAS Travel xin đặt phòng cho đoàn ${fc('Tour Code')} (${fc('Số khách')} khách):
${fc('Danh sách dịch vụ')}
${o.req ? `<span class="diff-a">${opt(`Yêu cầu riêng của đoàn: ${fc('Yêu cầu riêng')}`)}</span>` : opt(`Yêu cầu riêng của đoàn: ${fc('Yêu cầu riêng')}`)}
${opt(`Giá tham chiếu theo hợp đồng: ${fc('Giá tham chiếu')}.`)}
Vui lòng xác nhận và gửi mã đặt chỗ cho chúng tôi.
Trân trọng,
${fc('Người gửi')} – ${fc('Điện thoại người gửi')}`;

const left = (o = {}) => `<div>
${fld('Mã mẫu', o.code || 'DV-01', { req: 1, cls: o.codeErr ? 'bad' : '', err: o.codeErr })}
${fld('Tên mẫu', o.name || 'Đặt phòng khách sạn', { req: 1 })}
<div class="f2">${fld('Loại mẫu', 'Email đặt dịch vụ', { cls: 'ro' })}${fld('Mục đích', o.purpose || 'Đặt dịch vụ', { req: 1, cls: o.new ? 'sel' : 'ro' })}</div>
<div class="field"><label>Áp dụng cho loại dịch vụ <span class="req">*</span></label>${tags(o.types || ['Khách sạn'])}</div>
${o.defNote || '<div class="hint" style="margin:-4px 0 8px">DH08 tự khớp mẫu này khi đặt Khách sạn.</div>'}
${fld('Ghi chú nội bộ', o.note || 'Dùng cho mọi khách sạn trong nước. Đã thêm câu giá tham chiếu theo yêu cầu kế toán.', { cls: 'area' })}
<div class="sec">Dùng ở</div><div class="small muted">${o.used || 'DH08.3 · đặt, đặt lại, đặt phần thiếu · 214 email đã gửi, lần cuối 11/11/2026'}</div>
</div>`;
const grid = (l, r) => `<div style="display:grid;grid-template-columns:330px 1fr;gap:16px;height:100%">${l}<div>${r}</div></div>`;
const subjectRow = (t, o = {}) => fld('Tiêu đề', t, { req: 1, cls: o.bad ? 'bad' : '', err: o.err });

// W06 Tạo mẫu: sao chép từ DV-05
const BODY_COPY = `<div style="background:#f0fdfa;border-radius:4px;padding:2px 4px">Kính gửi ${fc('Tên NCC')},
TOPAS Travel xin đặt dịch vụ cho đoàn ${fc('Tour Code')} (${fc('Số khách')} khách):
${fc('Danh sách dịch vụ')}
${opt(`Yêu cầu riêng của đoàn: ${fc('Yêu cầu riêng')}`)}
Vui lòng xác nhận và gửi mã đặt chỗ cho chúng tôi.
Trân trọng,
${fc('Người gửi')} – ${fc('Điện thoại người gửi')}</div>`;
S.W06 = P({ user: 'dh', body: dhList(), overlay: drawerXL('Tạo mẫu · Email đặt dịch vụ',
  grid(`<div>${fld('Bắt đầu từ', 'Sao chép từ DV-05 · Đặt dịch vụ chung', { cls: 'sel', auto: 'Đã sao chép' })}
${fld('Mã mẫu', 'DV-09', { req: 1, auto: 'Gợi ý' })}${fld('Tên mẫu', 'Đặt vé tham quan', { req: 1, cls: 'focus' })}
<div class="f2">${fld('Loại mẫu', 'Email đặt dịch vụ', { cls: 'ro', auto: 'Từ nhóm' })}${fld('Mục đích', 'Đặt dịch vụ', { req: 1, cls: 'sel', auto: 'Đã sao chép' })}</div>
<div class="field"><label>Áp dụng cho loại dịch vụ <span class="req">*</span></label>${tags(['Tham quan'])}</div>
<div class="hint" style="margin:-4px 0 8px">Tham quan chưa có mẫu riêng; hiện DH08 dùng mẫu dự phòng DV-05 · Đặt dịch vụ chung. Tạo xong, DH08 tự khớp mẫu này cho Tham quan.</div></div>`,
    sub3('Nội dung', ['Nội dung', 'Xem trước']) + langTabs([['Tiếng Việt <span class="req">*</span>', ''], 'English'], 'Tiếng Việt <span class="req">*</span>')
    + subjectRow(`<span style="background:#f0fdfa">[${fc('Tour Code')}] Đặt dịch vụ ${fc('Ngày sử dụng')} · đoàn ${fc('Tên đoàn')} ${fc('Số khách')} khách</span>`) + editor(BODY_COPY, { h: 230 })
    + '<div class="muted small" style="margin-top:6px">Nội dung nền xanh ngọc sao chép từ DV-05, sửa tự do. Bản English cũng đã sao chép.</div>'),
  foot('<span class="muted small">Tạo xong, mẫu Đang dùng ngay ở phiên bản v1.</span>', `${B('Hủy')}${B('Tạo mẫu', 'p')}`), 'Nhóm Điều hành') });

// W07 Chèn trường
const insMenu = `<div class="menu" style="left:438px;top:228px;width:330px">
<div class="mh2">Tour</div><div class="mi">{Tour Code}</div><div class="mi">{Tên đoàn}<span class="ml muted small">tên khách hoặc đoàn</span></div><div class="mi">{Số khách}</div><div class="mi">{Ngày khởi hành} · {Ngày kết thúc}</div>
<div class="mh2">NCC và dịch vụ</div><div class="mi">{Tên NCC} · {Đầu mối NCC}</div><div class="mi on">{Danh sách dịch vụ}<span class="ml muted small">mỗi dịch vụ một dòng</span></div><div class="mi">{Ngày sử dụng}</div><div class="mi">{Yêu cầu riêng}<span class="ml muted small">có thể trống</span></div><div class="mi">{Giá tham chiếu}<span class="ml muted small">có thể trống</span></div>
<div class="mh2">Người gửi</div><div class="mi">{Người gửi} · {Điện thoại người gửi} · {Email người gửi}</div></div>`;
S.W07 = P({ user: 'dh', body: dhList(), overlay: drawerXL('Tạo mẫu · Email đặt dịch vụ',
  grid(left({ code: 'DV-09', name: 'Đặt vé tham quan', types: ['Tham quan'], new: 1, defNote: '<div class="hint" style="margin:-4px 0 8px">Tham quan chưa có mẫu riêng; tạo xong, DH08 tự khớp mẫu này.</div>', note: ' ', used: 'Chưa dùng' }),
    sub3('Nội dung', ['Nội dung', 'Xem trước']) + langTabs([['Tiếng Việt <span class="req">*</span>', ''], 'English'], 'Tiếng Việt <span class="req">*</span>')
    + subjectRow(`[${fc('Tour Code')}] Đặt vé tham quan ${fc('Ngày sử dụng')} · đoàn ${fc('Tên đoàn')} ${fc('Số khách')} khách`)
    + editor(`Kính gửi ${fc('Tên NCC')},
TOPAS Travel xin đặt vé tham quan cho đoàn ${fc('Tour Code')} (${fc('Số khách')} khách):
<span style="border-left:2px solid #2563eb;padding-left:2px"></span>
${opt(`Yêu cầu riêng của đoàn: ${fc('Yêu cầu riêng')}`)}
Vui lòng xác nhận số vé và giờ vào cửa.
Trân trọng,
${fc('Người gửi')} – ${fc('Điện thoại người gửi')}`, { ins: 1, h: 230 }) + insMenu),
  foot('<span class="muted small">Tạo xong, mẫu Đang dùng ngay ở phiên bản v1.</span>', `${B('Hủy')}${B('Tạo mẫu', 'p')}`), 'Nhóm Điều hành') });

// W08 English, cụm tùy chọn
S.W08 = P({ user: 'dh', body: dhList(), overlay: drawerXL('Tạo mẫu · Email đặt dịch vụ',
  grid(left({ code: 'DV-09', name: 'Đặt vé tham quan', types: ['Tham quan'], new: 1, defNote: '<div class="hint" style="margin:-4px 0 8px">Tham quan chưa có mẫu riêng; tạo xong, DH08 tự khớp mẫu này.</div>', note: ' ', used: 'Chưa dùng' }),
    sub3('Nội dung', ['Nội dung', 'Xem trước']) + langTabs([['Tiếng Việt <span class="req">*</span>', ' ✓'], 'English'], 'English')
    + subjectRow(`[${fc('Tour Code')}] Ticket booking ${fc('Ngày sử dụng')} · ${fc('Tên đoàn')} group, ${fc('Số khách')} pax`)
    + editor(`Dear ${fc('Tên NCC')},
TOPAS Travel would like to book entrance tickets for group ${fc('Tour Code')} (${fc('Số khách')} pax):
${fc('Danh sách dịch vụ')}
<span style="outline:2px solid #2563eb;border-radius:3px">${opt(`Special requests: ${fc('Yêu cầu riêng')}`)}</span>
Please confirm the number of tickets and entry time.
Best regards,
${fc('Người gửi')} – ${fc('Điện thoại người gửi')}`, { opt: 1, h: 220 })
    + `<div class="banner i small" style="margin-top:8px"><span class="ico i">i</span><div>Phần trong <b>[ ]</b> là cụm tùy chọn: khi trường bên trong không có dữ liệu, cả cụm bị bỏ khỏi email. {Danh sách dịch vụ} sinh nội dung theo ngôn ngữ của bản đang dùng.</div></div>`),
  foot('<span class="muted small">Tạo xong, mẫu Đang dùng ngay ở phiên bản v1.</span>', `${B('Hủy')}${B('Tạo mẫu', 'p')}`), 'Nhóm Điều hành') });

// W09 Xem trước với hồ sơ thật
S.W09 = P({ user: 'dh', body: dhList(), overlay: drawerXL('Tạo mẫu · Email đặt dịch vụ',
  grid(left({ code: 'DV-09', name: 'Đặt vé tham quan', types: ['Tham quan'], new: 1, defNote: '<div class="hint" style="margin:-4px 0 8px">Tham quan chưa có mẫu riêng; tạo xong, DH08 tự khớp mẫu này.</div>', note: ' ', used: 'Chưa dùng' }),
    sub3('Xem trước', ['Nội dung', 'Xem trước'])
    + `<div class="f2">${fld('Dữ liệu của', 'TP-2611-0042 · Müller Reisen GmbH · 18 khách', { cls: 'sel', auto: 'Gợi ý' })}${fld('Dịch vụ', 'Vé Hoàng thành Thăng Long · 19/11 · 18 vé', { cls: 'sel' })}</div>
<div class="flex" style="margin:-2px 0 6px"><span class="chip on">Tiếng Việt</span><span class="chip">English</span><span class="ml muted small">Phần tô vàng là dữ liệu trộn</span></div>
<div class="email"><div class="row"><span>Từ</span>booking@topas-travel.vn</div><div class="row"><span>Đến</span>sales@hoangthanh.vn <span class="auto">DH03</span></div>
<div class="row"><span>Tiêu đề</span><b>[<span class="hl">TP-2611-0042</span>] Đặt vé tham quan <span class="hl">19/11/2026</span> · đoàn <span class="hl">Müller Reisen GmbH</span> <span class="hl">18</span> khách</b></div>
<div class="body">Kính gửi <span class="hl">Trung tâm Bảo tồn Hoàng thành Thăng Long</span>,
TOPAS Travel xin đặt vé tham quan cho đoàn <span class="hl">TP-2611-0042</span> (<span class="hl">18</span> khách):
<span class="hl">1. 19/11/2026 · Vé Hoàng thành Thăng Long · 18 vé người lớn · vào cửa 08:30</span>
Yêu cầu riêng của đoàn: <span class="hl">1 khách đi xe lăn, cần lối đi không bậc</span>
Vui lòng xác nhận số vé và giờ vào cửa.
Trân trọng,
<span class="hl">Trần Minh Anh</span> – <span class="hl">0903 111 222</span></div></div>
<div class="muted small" style="margin-top:6px">Xem trước không lưu và không gửi gì cho NCC. Cụm “Giá tham chiếu” bị bỏ vì dịch vụ này chưa có giá tham chiếu.</div>`),
  foot(B('Gửi thử tới email của tôi'), `${B('Hủy')}${B('Tạo mẫu', 'p')}`), 'Nhóm Điều hành') });

// W10 Sau khi tạo
const dv09 = ['DV-09', 'Đặt vé tham quan', 'Email đặt dịch vụ · Đặt dịch vụ', 'Tham quan', 'VI, EN', 1, 'v1 · 12/11/2026 · ' + ANH, 'Chưa dùng', 1];
S.W10 = P({ user: 'dh', body: head({ tab: 'dh', dhCnt: 10 }) + toolbar({ chipArr: [['Tất cả', 10], ['Email đặt dịch vụ', 8], ['Pax list', 1], ['Rooming list', 1]] })
  + dhTable({ keys: ['DV-01', 'DV-02', 'DV-03', 'DV-04', 'DV-05', 'DV-06', 'DV-07', 'DV-09', 'PL-01', 'RL-01'], extraRows: { 'DV-09': dv09 }, hl: { 'DV-09': 'new' } })
  + toast('Đã tạo DV-09 · Đặt vé tham quan (v1). Từ nay DH08 tự khớp mẫu này khi đặt Tham quan.', 'Mở mẫu') });

// W11 Sửa DV-01, có thay đổi chưa lưu
const hotelSub = 'Email đặt dịch vụ · Khách sạn · Đang dùng · lưu lần cuối 05/11/2026 bởi ' + ANH;
const W11D = drawerXL(`DV-01 · Đặt phòng khách sạn ${bd('v6', 'b-gray')}`,
  grid(left(), sub3('Nội dung') + langTabs([['Tiếng Việt <span class="req">*</span>', ' •'], 'English'], 'Tiếng Việt <span class="req">*</span>')
    + subjectRow(`[${fc('Tour Code')}] Đặt phòng ${fc('Ngày sử dụng')} · đoàn ${fc('Tên đoàn')} ${fc('Số khách')} khách`) + editor(VI_HOTEL({ req: 1 }), { h: 230 })
    + '<div class="muted small" style="margin-top:6px">Dòng nền xanh lá là thay đổi chưa lưu. Dấu • trên thẻ ngôn ngữ: bản đó có thay đổi.</div>'),
  foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng cho 214 email</span>`, `<span class="muted small">1 thay đổi chưa lưu</span>${B('Hủy')}${B('Lưu phiên bản v7', 'p')}`), hotelSub);
S.W11 = P({ user: 'dh', body: dhList({ hl: { 'DV-01': 'sel' } }), overlay: W11D });

// W11a Sau khi lưu
S.W11a = P({ user: 'dh', body: dhList({ hl: { 'DV-01': 'sel' } }).replace('v6 · 05/11/2026', 'v7 · 12/11/2026'), overlay: drawerXL(`DV-01 · Đặt phòng khách sạn ${bd('v7', 'b-gray')}`,
  grid(left({ note: 'Dùng cho mọi khách sạn trong nước. Đã thêm câu giá tham chiếu theo yêu cầu kế toán.' }), sub3('Nội dung') + langTabs([['Tiếng Việt <span class="req">*</span>', ''], 'English'], 'Tiếng Việt <span class="req">*</span>')
    + subjectRow(`[${fc('Tour Code')}] Đặt phòng ${fc('Ngày sử dụng')} · đoàn ${fc('Tên đoàn')} ${fc('Số khách')} khách`) + editor(VI_HOTEL(), { h: 230 })),
  foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng cho 214 email</span>`, `<span class="muted small">Không có thay đổi</span>${B('Đóng')}${B('Lưu phiên bản v8', 'dis')}`),
  'Email đặt dịch vụ · Khách sạn · Đang dùng · lưu lần cuối 12/11/2026 10:16 bởi ' + ANH) + toast('Đã lưu v7. Email soạn từ nay dùng v7; email đã gửi giữ nguyên nội dung.', 'Xem lịch sử') });

// W12 Tạo mẫu cho loại dịch vụ đã có mẫu đang dùng
S.W12 = P({ user: 'dh', body: dhList(), overlay: drawerXL('Tạo mẫu · Email đặt dịch vụ',
  grid(left({ code: 'DV-10', name: 'Đặt phòng khách sạn – đoàn MICE', types: ['Khách sạn'], new: 1, note: 'Có thêm phòng họp, tiệc tối.', used: 'Chưa dùng',
    defNote: `<div class="banner i small" style="margin:-4px 0 8px;align-items:flex-start"><span class="ico i">i</span><div>Khách sạn đang dùng <b>DV-01 · Đặt phòng khách sạn</b>. DV-10 sẽ được tạo ở trạng thái <b>Ngừng dùng</b> để soạn trước; bật DV-10 khi muốn thay DV-01.</div></div>` }),
    sub3('Nội dung', ['Nội dung', 'Xem trước']) + langTabs([['Tiếng Việt <span class="req">*</span>', ''], 'English'], 'Tiếng Việt <span class="req">*</span>')
    + subjectRow(`[${fc('Tour Code')}] Đặt phòng và phòng họp ${fc('Ngày sử dụng')} · đoàn ${fc('Tên đoàn')}`) + editor(VI_HOTEL().replace('xin đặt phòng', 'xin đặt phòng, phòng họp và tiệc'), { h: 230 })),
  foot('<span class="muted small">Mẫu sẽ ở Ngừng dùng · v1 vì Khách sạn đã có mẫu đang dùng.</span>', `${B('Hủy')}${B('Tạo mẫu', 'p')}`), 'Nhóm Điều hành') });

// W13 Lỗi khi lưu
S.W13 = P({ user: 'dh', body: dhList(), overlay: drawerXL('Tạo mẫu · Email đặt dịch vụ',
  `<div class="banner e small" style="margin-bottom:8px"><span class="ico e">!</span><div><b>Chưa tạo được mẫu.</b> Sửa 3 lỗi được đánh dấu. Nội dung đã nhập được giữ nguyên.</div></div>`
  + grid(left({ code: 'DV-03', codeErr: 'Mã DV-03 đã dùng cho “Đặt xe vận chuyển”', name: 'Đặt vé tham quan', types: ['Tham quan'], new: 1, defNote: '<div class="hint" style="margin:-4px 0 8px">Tham quan chưa có mẫu riêng; tạo xong, DH08 tự khớp mẫu này.</div>', note: ' ', used: 'Chưa dùng' }),
    langTabs([['Tiếng Việt <span class="req">*</span>', ' <span class="cnt r">2</span>'], 'English'], 'Tiếng Việt <span class="req">*</span>')
    + subjectRow(`Đặt vé tham quan ${fc('Ngày sử dụng')} · đoàn ${fc('Tên đoàn')}`, { bad: 1, err: 'Tiêu đề phải có {Tour Code} để NCC và hộp thư chung tra cứu theo hồ sơ' })
    + editor(`Kính gửi ${fc('Tên NCC')},
TOPAS Travel xin đặt vé tham quan cho đoàn ${fc('Tour Code')} tại ${fc('Tên điểm tham quan', 1)}:
${fc('Danh sách dịch vụ')}
Yêu cầu riêng của đoàn: ${fc('Yêu cầu riêng')}
Trân trọng,
${fc('Người gửi')}`, { bad: 1, h: 150 })
    + `<div class="err">{Tên điểm tham quan} không có trong danh sách trường. Chọn trường bằng Chèn trường.</div>
<div class="banner w small" style="margin-top:8px"><span class="ico w">!</span><div><b>Lưu ý (không chặn):</b> {Yêu cầu riêng} có thể trống nhưng không nằm trong cụm tùy chọn; khi đoàn không có yêu cầu, email sẽ còn dòng “Yêu cầu riêng của đoàn:” trống. ${B('Đặt thành cụm tùy chọn', 'lk')}</div></div>`),
  foot('<span class="muted small">Tạo xong, mẫu Đang dùng ngay ở phiên bản v1.</span>', `${B('Hủy')}${B('Tạo mẫu', 'p')}`), 'Nhóm Điều hành') });

// W14 Xung đột phiên bản
S.W14 = P({ user: 'dh', body: dhList({ hl: { 'DV-01': 'sel' } }), overlay: drawerXL(`DV-01 · Đặt phòng khách sạn ${bd('v6', 'b-gray')}`,
  `<div class="banner e small" style="margin-bottom:8px;align-items:flex-start"><span class="ico e">!</span><div style="flex:1"><b>Chưa lưu được: ${HAI} đã lưu v7 lúc 10:12</b>, sau khi bạn mở mẫu. Nội dung bạn đang soạn vẫn giữ trong khung soạn.<div style="margin-top:6px" class="flex">${B('So sánh với v7', 'sm')}${B('Tải v7 (bỏ thay đổi của tôi)', 'sm')}</div></div></div>`
  + grid(left(), `<div class="sec" style="margin-top:0">So sánh bản đang soạn với v7</div><div class="tbl"><table><tr><th>Phần</th><th>v7 của ${HAI}</th><th>Bản bạn đang soạn</th></tr>
<tr><td class="small">Tiêu đề (VI)</td><td class="small">[{Tour Code}] Đặt phòng {Ngày sử dụng} · {Tên đoàn}</td><td class="small muted">Như v6</td></tr>
<tr><td class="small">Nội dung (VI)</td><td class="small muted">Như v6</td><td class="small"><span class="diff-a">[Yêu cầu riêng của đoàn: {Yêu cầu riêng}]</span></td></tr>
<tr><td class="small">Nội dung (EN)</td><td class="small"><span class="diff-a">Check-in from 14:00.</span></td><td class="small muted">Như v6</td></tr></table></div>
<div class="muted small" style="margin-top:6px">Để giữ cả hai: bấm Tải v7, rồi thêm lại câu của bạn (sao chép từ bảng trên) và lưu thành v8.</div>`),
  foot(`${B('Xóa mẫu', 'dis')}<span class="muted small">Không xóa được: đã dùng cho 214 email</span>`, `<span class="muted small">1 thay đổi chưa lưu</span>${B('Hủy')}${B('Lưu phiên bản v7', 'dis')}`), hotelSub) });

// W15 Đóng khi chưa lưu
S.W15 = P({ user: 'dh', body: dhList({ hl: { 'DV-01': 'sel' } }), overlay: W11D + modal('Đóng mà không lưu?', `<p style="margin:0">Mẫu <b>DV-01 · Đặt phòng khách sạn</b> có 1 thay đổi chưa lưu (bản Tiếng Việt). Nếu đóng, thay đổi bị bỏ; mẫu giữ nguyên v6.</p>`, `${B('Tiếp tục sửa')}${B('Bỏ thay đổi và đóng', 'd')}`, 480) });

module.exports = S;
