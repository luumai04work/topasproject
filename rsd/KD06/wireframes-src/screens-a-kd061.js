// KD06 khung, KD06.1 Thông tin yêu cầu, Hủy / Mở lại / Chuyển phụ trách. Tên và mục đích ở captions.js.
const { NAM, P, ind, toast, REQ, hdr, savebar, card, modal, f, B, bd } = require('./kd06');
const S = {};

const seg = (opts, on, cls = '') => `<span class="seg">${opts.map(o => `<span class="${o === on ? 'on ' + cls : ''}">${o}</span>`).join('')}</span>`;
const tag = t => `<span class="tag">${t} ✕</span>`;
const NEWHDR = `<div class="hdr"><div class="r1"><span class="code">Yêu cầu mới</span>${bd('Chưa lưu', 'b-gray')}</div>
<div class="tabs"><div class="tab on">Thông tin yêu cầu</div><div class="tab lock">Hành trình 🔒</div><div class="tab lock">Báo giá 🔒</div><span class="muted small" style="align-self:center;margin-left:8px">Lưu thông tin yêu cầu để mở Hành trình và Báo giá</span></div></div>`;

// Thẻ Khách hàng. k: null (chưa chọn) hoặc { n, sub, auto, lh, lhAuto, nn, nnAuto, note, lock }
function custCard(k, ro = false) {
  if (!k) return card('Khách hàng', `<div class="field"><label>Khách hàng <span class="req">*</span></label><div class="flex">${B('🔍 Tìm khách hàng', 'p')}<span class="muted small">Chưa có khách thì chọn Tạo khách hàng trong hộp thoại tìm</span></div></div>
${f('Người liên hệ', 'Chọn sau khi có khách hàng', { cls: 'sel ro' })}${f('Ngôn ngữ phục vụ', 'Chọn sau khi có khách hàng', { cls: 'sel ro' })}`);
  return card('Khách hàng', `<div class="field"><label>Khách hàng <span class="req">*</span>${k.auto ? `<span class="auto">${k.auto}</span>` : ''}</label><div class="flex"><div class="input ro" style="flex:1">${k.n}</div>${ro || k.lock ? '' : B('Đổi khách', 'sm')}</div>${k.lock ? `<div class="hint">🔒 ${k.lock}</div>` : ''}</div>
<div class="f2">${f('Người liên hệ', k.lh, { cls: ro ? 'ro' : 'sel', auto: k.lhAuto })}${f('Ngôn ngữ phục vụ', k.nn, { cls: ro ? 'ro' : 'sel', auto: k.nnAuto })}</div>
${k.note ? `<div class="muted small">Ghi chú của khách: ${k.note}</div>` : ''}`);
}
// Thẻ Nhu cầu Tour. n: giá trị; e: lỗi theo trường
function needCard(n = {}, e = {}, ro = false) {
  const c = (v, x = '') => (ro ? 'ro ' : '') + (v ? '' : 'ph ') + x;
  return card('Nhu cầu Tour', `<div class="f2">${f('Loại Tour', n.lt || 'Chọn loại Tour', { req: 1, cls: c(n.lt, 'sel') })}<div class="field"><label>Thời gian đi <span class="req">*</span></label>${seg(['Đã chốt ngày', 'Tháng dự kiến'], n.mode || 'Đã chốt ngày')}</div></div>
${f('Mong muốn', n.ww ? '<div>' + n.ww + '</div>' : '', { req: 1, cls: c(n.ww, 'area' + (e.ww ? ' bad' : '')) + (n.wwFocus ? ' focus' : ''), err: e.ww, hint: n.wwHint })}
<div class="f2">${f('Ngày đi – ngày về', n.tg || 'dd/mm/yyyy – dd/mm/yyyy', { req: 1, cls: c(n.tg) + (e.tg ? ' bad' : ''), err: e.tg, hint: n.tg && !e.tg ? n.dur : '' })}${f('Hạng phòng', n.hp || 'Chọn hạng phòng', { cls: c(n.hp, 'sel') })}</div>
<div class="f3">${f('Người lớn', n.nl || '', { req: 1, cls: c(n.nl) })}${f('Trẻ em', n.te || '0', { cls: c(1) })}${f('Phòng đơn', n.pd || '0', { cls: c(1), hint: n.pdHint })}</div>
<div class="field"><label>Tuổi trẻ em</label><div class="input ${ro ? 'ro' : ''} ${e.age ? 'bad' : ''}" style="height:auto;min-height:30px">${n.ages || '<span class="muted">Nhập tuổi từng trẻ khi có trẻ em</span>'}</div>${e.age ? `<div class="err">${e.age}</div>` : ''}</div>${budField(n, e, ro)}
${n.saved ? '' : f('Người phụ trách', n.pt || NAM, { cls: 'ro', auto: 'Người tạo' })}`);
}
function budField(n, e, ro) {
  const b = n.bud || {}, cl = v => 'input ' + (ro ? 'ro ' : '') + (v ? '' : 'ph ');
  return `<div class="field"><label>Ngân sách của khách</label><div class="flex"><div class="${cl(b.from)}" style="width:110px">${b.from || 'Từ'}</div><span class="muted">–</span><div class="${cl(b.to)} ${e.bud ? 'bad' : ''}" style="width:110px">${b.to || 'Đến'}</div><div class="input sel ${ro ? 'ro' : ''}" style="width:84px">${b.cur || 'USD'}</div>${seg(['Mỗi khách', 'Cả đoàn'], b.basis || 'Mỗi khách')}</div>${e.bud ? `<div class="err">${e.bud}</div>` : `<div class="hint">${b.hint || 'Không bắt buộc; nhập một đầu hoặc cả khoảng. Dùng để so với giá bán và làm tiêu chí cho AI'}</div>`}</div>`;
}
const two = (a, b) => `<div class="grid" style="grid-template-columns:1fr 1.25fr;margin-top:10px;align-items:start">${a}${b}</div>`;

const BIA_K = { n: 'Bianchi Viaggi S.r.l. · KH-00142 · Doanh nghiệp', auto: 'Vừa tạo', lh: 'Marco Rossi', lhAuto: 'Liên hệ chính', nn: 'Tiếng Ý', nnAuto: 'Từ khách hàng' };
const BIA_N = { lt: 'Inbound đoàn', ww: 'Miền Bắc và miền Trung, khách sạn 4 sao, trải nghiệm ẩm thực địa phương, 1 đêm ngủ du thuyền Hạ Long.', tg: '10/03/2027 – 19/03/2027', dur: '10 ngày 9 đêm', hp: 'Deluxe', nl: '14', te: '2', pd: '0', ages: `${'<span class="tag">7 tuổi ✕</span>'}${'<span class="tag">9 tuổi ✕</span>'}`, pdHint: '7 phòng: 7 đôi, 0 đơn', bud: { to: '2.000', cur: 'EUR', basis: 'Mỗi khách', hint: 'Tương đương 32.000 EUR cả đoàn (16 khách)' } };

// ---------- W01 Tạo mới trống ----------
S.W01 = P({ last: 'Tạo yêu cầu', body: NEWHDR + two(custCard(null), needCard({}, {}, false)) + savebar('Chưa lưu', B('Hủy') + B('Lưu', 'dis') + B('Lưu và lập báo giá', 'dis')) });

// ---------- W02 Tìm khách có kết quả ----------
const srow = (n, typ, sub, yc, act = 'Chọn') => `<tr><td><b>${n}</b> ${typ}<div class="muted small">${sub}</div></td><td class="small">${yc}</td><td style="text-align:right">${B(act, 'sm')}</td></tr>`;
const DN = '<span class="badge b-violet" style="font-size:10.5px;line-height:15px;padding:0 6px">Doanh nghiệp</span>', CN = '<span class="badge b-cyan" style="font-size:10.5px;line-height:15px;padding:0 6px">Cá nhân</span>';
S.W02 = P({ last: 'Tạo yêu cầu', body: NEWHDR + two(custCard(null), needCard()), overlay: modal('Tìm khách hàng', `
<div class="input focus" style="margin-bottom:6px">🔍&nbsp; müller<span class="ml muted small">Tên, mã khách, email, điện thoại, tên người liên hệ</span></div>
<div class="muted small" style="margin-bottom:6px">2 khách khớp · phần khớp gồm cả email và điện thoại của người liên hệ</div>
<div class="tbl"><table><tr><th>Khách hàng</th><th>Yêu cầu đang xử lý</th><th></th></tr>
${srow('<span class="hl">Müller</span> Reisen GmbH', DN, 'KH-00128 · Đức · liên hệ chính Anna Schneider', '1 · YC-2611-0019 do Nguyễn Hoàng Nam phụ trách')}
${srow('Thomas <span class="hl">Müller</span>', CN, 'KH-00087 · Đức · Tiếng Đức', '—')}</table></div>
<div class="banner i small" style="margin-top:8px">Khách đã có yêu cầu đang xử lý: kiểm tra trước để không báo giá trùng cho cùng một đoàn.</div>`,
  `<span class="muted small" style="margin-right:auto">Không thấy khách cần tìm?</span>${B('+ Tạo khách hàng')}${B('Đóng')}`, 700) });

// ---------- W03 Không có kết quả → tạo nhanh ----------
S.W03 = P({ last: 'Tạo yêu cầu', body: NEWHDR + two(custCard(null), needCard()), overlay: modal('Tìm khách hàng', `
<div class="input" style="margin-bottom:6px">🔍&nbsp; bianchi</div>
<div class="banner w small" style="margin-bottom:10px">Không có khách khớp “bianchi”. Tạo khách mới ngay dưới đây; khách được gắn vào yêu cầu sau khi tạo.</div>
<div class="sec" style="margin-top:0">Tạo khách hàng</div>
<div class="f2"><div class="field"><label>Loại khách <span class="req">*</span></label>${seg(['Cá nhân', 'Doanh nghiệp'], 'Doanh nghiệp')}</div>${f('Tên doanh nghiệp', 'Bianchi Viaggi S.r.l.', { req: 1, auto: 'Từ ô tìm' })}</div>
<div class="f2">${f('Quốc gia', 'Ý', { req: 1, cls: 'sel' })}${f('Ngôn ngữ giao tiếp', 'Tiếng Ý', { req: 1, cls: 'sel', auto: 'Gợi ý theo quốc gia' })}</div>
<div class="sec">Người liên hệ chính</div>
<div class="f3">${f('Họ và tên', 'Marco Rossi', { req: 1 })}${f('Email', 'marco.rossi@bianchiviaggi.it')}${f('Điện thoại', '+39 06 4521 7788')}</div>
<div class="hint">Cần email hoặc điện thoại. Thông tin khác (mã số thuế, nguồn khách, sở thích) bổ sung sau ở hồ sơ khách hàng.</div>`,
  `${B('← Quay lại kết quả tìm', 'lk')}<span class="ml"></span>${B('Hủy')}${B('Tạo và gắn vào yêu cầu', 'p')}`, 720) });

// ---------- W04 Cảnh báo trùng ----------
S.W04 = P({ last: 'Tạo yêu cầu', body: NEWHDR + two(custCard(null), needCard()), overlay: modal('Có thể trùng khách hàng đã có', `
<div class="small" style="margin-bottom:8px">Khách mới <b>Bianchi Viaggi S.r.l.</b> có thông tin trùng với hồ sơ dưới đây. Nếu là cùng một khách, chọn hồ sơ đã có để không tạo trùng.</div>
<div class="tbl"><table><tr><th>Hồ sơ đã có</th><th>Trùng</th><th></th></tr>
<tr><td><b>Marco Rossi</b> ${CN}<div class="muted small">KH-00097 · Ý · tạo 14/03/2025 · Lê Thu Hà phụ trách</div></td><td><span class="ind a">Điện thoại +39 06 4521 7788</span></td><td style="text-align:right">${B('Dùng hồ sơ này', 'sm')}</td></tr></table></div>
<div class="field" style="margin-top:10px"><label>Lý do vẫn tạo <span class="req">*</span></label><div class="input area">Marco Rossi đã chuyển sang làm cho Bianchi Viaggi; đây là khách doanh nghiệp mới.</div><div class="hint">Cặp hồ sơ này được ghi là không trùng, lần sau không hỏi lại (RSD KD03-KD04 R02).</div></div>`,
  `${B('Quay lại sửa')}${B('Vẫn tạo và gắn vào yêu cầu', 'p')}`, 640) });

// ---------- W05 Đã chọn khách, nhập nhu cầu ----------
S.W05 = P({ last: 'Tạo yêu cầu', body: NEWHDR + two(custCard(BIA_K), needCard(BIA_N)) + savebar('<span class="dirty">● Chưa lưu</span>', B('Hủy') + B('Lưu') + B('Lưu và lập báo giá', 'p')),
  overlay: toast('Đã tạo khách hàng KH-00142 Bianchi Viaggi S.r.l. và gắn vào yêu cầu', '') });

// ---------- W06 Lỗi khi lưu ----------
S.W06 = P({ last: 'Tạo yêu cầu', body: NEWHDR + `<div class="banner e small" style="margin-top:10px">Chưa lưu được: còn 3 lỗi. Dữ liệu đã nhập được giữ nguyên.</div>` + two(custCard(BIA_K),
  needCard(Object.assign({}, BIA_N, { ww: '', tg: '19/03/2027 – 10/03/2027', ages: '<span class="tag">7 tuổi ✕</span>' }), { ww: 'Nhập mong muốn của khách', tg: 'Ngày về phải sau hoặc bằng ngày đi', age: 'Có 2 trẻ em nhưng mới nhập tuổi của 1 trẻ' })) + savebar('<span class="dirty">● Chưa lưu</span>', B('Hủy') + B('Lưu') + B('Lưu và lập báo giá', 'p')) });

// ---------- W07 Sau khi lưu lần đầu ----------
const biaHdr = (o = {}) => hdr(REQ.bia, Object.assign({ tab: 'i' }, o));
S.W07 = P({ last: 'YC-2611-0031', body: biaHdr() + two(custCard(Object.assign({}, BIA_K, { auto: '' })), needCard(Object.assign({}, BIA_N, { saved: 1 }))) + savebar('Đã lưu 11/11/2026 15:20 bởi Nguyễn Hoàng Nam', B('Lập báo giá →', 'p')),
  overlay: toast('Đã tạo yêu cầu YC-2611-0031 · Đang xử lý') });

// ---------- W08 Sửa yêu cầu đã có báo giá (Müller) ----------
const MUL_K = { n: 'Müller Reisen GmbH · KH-00128 · Doanh nghiệp', lh: 'Anna Schneider', nn: 'Tiếng Đức', note: 'Đoàn 16–25 khách, HDV tiếng Đức bắt buộc. Gửi báo giá bằng EUR.', lock: 'Không đổi khách khi yêu cầu đã có phiên bản báo giá' };
const MUL_N = { lt: 'Inbound đoàn', ww: 'Xuyên Việt Bắc – Nam 14 ngày, khách sạn 4–5 sao, HDV tiếng Đức suốt tuyến. <span class="hl">Khách muốn đổi khách sạn ở Huế từ 5 sao xuống 4 sao (email 10/11).</span>', wwFocus: 1, tg: '15/03/2027 – 28/03/2027', dur: '14 ngày 13 đêm', hp: 'Deluxe', nl: '23', te: '2', pd: '2', pdHint: '13 phòng: 11 đôi, 2 đơn', bud: { to: '2.100', cur: 'EUR', basis: 'Mỗi khách', hint: 'Tương đương 52.500 EUR cả đoàn (25 khách)' }, ages: '<span class="tag">8 tuổi ✕</span><span class="tag">10 tuổi ✕</span>', saved: 1 };
const mulHdr = (o = {}) => hdr(REQ.mul, Object.assign({ tab: 'i', cnt: { q: '<span class="cnt">2</span>' } }, o));
S.W08 = P({ last: 'YC-2611-0019', body: mulHdr() + `<div class="banner i small" style="margin-top:10px">Đã có 2 phiên bản báo giá. Sửa số khách, thời gian, hạng phòng không đổi báo giá đã lưu; khi cần giá mới, Tính giá ở tab Báo giá để tạo phiên bản mới.</div>` + two(custCard(MUL_K), needCard(MUL_N)) + savebar('<span class="dirty">● Có thay đổi chưa lưu</span> · Đã lưu 08/11/2026 10:05', B('Hủy thay đổi') + B('Lưu', 'p')) });

// ---------- W09 Rời khi chưa lưu ----------
S.W09 = P({ last: 'YC-2611-0019', body: mulHdr() + two(custCard(MUL_K), needCard(MUL_N)) + savebar('<span class="dirty">● Có thay đổi chưa lưu</span>', B('Hủy thay đổi') + B('Lưu', 'p')),
  overlay: modal('Rời khi chưa lưu?', `<div class="small">Thông tin yêu cầu <b>YC-2611-0019</b> có thay đổi chưa lưu ở Mong muốn. Nếu rời đi mà không lưu, thay đổi sẽ mất.</div>`, `${B('Ở lại')}${B('Bỏ thay đổi', 'd')}${B('Lưu và rời', 'p')}`, 460) });

// ---------- W10 Xung đột khi lưu ----------
S.W10 = P({ last: 'YC-2611-0019', body: mulHdr() + `<div class="banner e small" style="margin-top:10px;align-items:flex-start"><div style="flex:1"><b>Chưa lưu được: yêu cầu vừa được lưu ở phiên khác lúc 15:42</b> (Nguyễn Hoàng Nam, cửa sổ khác). Thay đổi của bạn vẫn còn trên màn hình.
<table style="margin-top:6px;background:transparent"><tr><th style="background:transparent">Trường</th><th style="background:transparent">Bản vừa lưu</th><th style="background:transparent">Bản của bạn</th></tr>
<tr><td>Phòng đơn</td><td>3</td><td>2</td></tr><tr><td>Mong muốn</td><td>Giữ nguyên</td><td>Thêm câu về khách sạn Huế</td></tr></table></div><div class="col">${B('Tải bản mới, bỏ thay đổi của tôi')}${B('Lưu bản của tôi đè lên', 'p')}</div></div>` + two(custCard(MUL_K), needCard(MUL_N)) + savebar('<span class="dirty">● Có thay đổi chưa lưu</span>', B('Hủy thay đổi') + B('Lưu', 'p')) });

// ---------- W12 Lỗi tải hồ sơ ----------
S.W12 = P({ last: 'YC-2611-0019', body: `<div class="hdr" style="padding-bottom:12px"><div class="r1"><span class="code">YC-2611-0019</span></div><div class="flex" style="margin-top:8px"><div class="skel" style="width:260px"></div><div class="skel" style="width:180px"></div><div class="skel" style="width:120px"></div></div></div>
<div class="card" style="margin-top:10px"><div class="empty"><div class="big" style="color:#b91c1c">Không tải được yêu cầu YC-2611-0019</div>Kết nối tới máy chủ bị gián đoạn. Chưa có dữ liệu nào bị thay đổi.<div class="flex" style="justify-content:center;margin-top:12px">${B('← Về danh sách yêu cầu')}${B('Thử lại', 'p')}</div></div></div>` });

// ---------- Hủy, mở lại, chuyển phụ trách ----------
const RAH_K = { n: 'Ahmed Rahman · KH-00133 · Cá nhân', lh: '—', nn: 'Tiếng Anh' };
const RAH_N = { lt: 'Customized riêng tư', ww: 'Gia đình 6 người, nghỉ dưỡng biển miền Trung, villa riêng, ẩm thực halal.', tg: '20/05/2027 – 27/05/2027', dur: '8 ngày 7 đêm', hp: 'Villa', nl: '4', te: '2', pd: '0', ages: '<span class="tag">5 tuổi</span><span class="tag">12 tuổi</span>', bud: { to: '15.000', cur: 'USD', basis: 'Cả đoàn', hint: 'Tương đương 2.500 USD mỗi khách (6 khách)' }, saved: 1 };
const rahHdr = (o = {}) => hdr(REQ.rah, Object.assign({ tab: 'i' }, o));
// W43 Hộp thoại hủy
S.W43 = P({ last: 'YC-2611-0028', body: rahHdr() + two(custCard(RAH_K), needCard(RAH_N)) + savebar('Đã lưu 09/11/2026 09:12', B('Lập báo giá →', 'p')),
  overlay: modal('Hủy yêu cầu YC-2611-0028?', `<div class="small" style="margin-bottom:8px">Yêu cầu chuyển sang <b>Đã hủy</b>, chỉ còn xem. Hành trình và báo giá được giữ để tra cứu; mở lại được khi khách quay lại.</div>
${f('Lý do hủy', 'Khách hoãn hoặc hủy chuyến', { req: 1, cls: 'sel' })}
${f('Ghi chú', 'Gia đình hoãn sang năm 2028 vì lịch học của con.', { cls: 'area' })}
<div class="muted small">Yêu cầu chưa có báo giá nên không có link proposal nào cần ngừng.</div>`, `${B('Không hủy')}${B('Hủy yêu cầu', 'dp')}`, 520) });
// W44 Đã hủy
S.W44 = P({ last: 'YC-2611-0028', body: rahHdr({ st: 'cx', act: B('Mở lại yêu cầu') }) + `<div class="banner small" style="margin-top:10px;background:#f3f4f6;border:1px solid #e5e7eb;color:#374151">Đã hủy 11/11/2026 15:48 bởi Nguyễn Hoàng Nam · <b>Khách hoãn hoặc hủy chuyến</b> · “Gia đình hoãn sang năm 2028 vì lịch học của con.” Hồ sơ chỉ còn xem.</div>` + `<div class="ro">${two(custCard(RAH_K, true), needCard(RAH_N, {}, true))}</div>`,
  overlay: toast('Đã hủy YC-2611-0028', 'Xem danh sách', true) });
// W45 Mở lại
S.W45 = P({ last: 'YC-2611-0028', body: rahHdr({ st: 'cx', act: B('Mở lại yêu cầu') }) + `<div class="ro">${two(custCard(RAH_K, true), needCard(RAH_N, {}, true))}</div>`,
  overlay: modal('Mở lại yêu cầu YC-2611-0028?', `<div class="small" style="margin-bottom:8px">Yêu cầu trở lại <b>Đang xử lý</b> với hành trình và các phiên bản báo giá như lúc hủy. Link proposal đã ngừng không tự mở lại; publish lại khi cần.</div>
${f('Lý do mở lại', 'Khách xác nhận lại đi đúng 20/05/2027, gia đình sắp xếp được lịch.', { req: 1, cls: 'area' })}
<div class="muted small">Lần hủy trước (11/11/2026 · Khách hoãn hoặc hủy chuyến) vẫn giữ trong lịch sử yêu cầu.</div>`, `${B('Không mở lại')}${B('Mở lại yêu cầu', 'p')}`, 520) });
// W46 Chuyển phụ trách
S.W46 = P({ last: 'YC-2611-0031', body: biaHdr({ act: B('Hủy yêu cầu', 'd') + B('⋯') }) + two(custCard(Object.assign({}, BIA_K, { auto: '' })), needCard(Object.assign({}, BIA_N, { saved: 1 }))) + savebar('Đã lưu 11/11/2026 15:20', B('Lập báo giá →', 'p')),
  overlay: modal('Chuyển người phụ trách YC-2611-0031', `<div class="small" style="margin-bottom:8px">Người nhận sẽ được sửa, lập báo giá và hủy yêu cầu này. Bạn vẫn xem được. Người phụ trách khách hàng Bianchi Viaggi S.r.l. không đổi.</div>
<div class="field"><label>Người nhận <span class="req">*</span></label><div class="input sel focus">Lê Thu Hà<span class="ml muted small">9 yêu cầu đang xử lý</span></div></div>
<div class="menu" style="position:static;box-shadow:none;margin:-4px 0 8px"><div class="mi on">Lê Thu Hà <span class="ml muted small">9 đang xử lý</span></div><div class="mi">Phạm Thanh Tùng <span class="ml muted small">5 đang xử lý</span></div><div class="mi">Vũ Đức Minh <span class="ml muted small">0 đang xử lý</span></div></div>
${f('Ghi chú bàn giao', 'Khách đã nhận hành trình nháp qua điện thoại, chưa gửi báo giá.', { cls: 'area' })}`, `${B('Hủy')}${B('Chuyển phụ trách', 'p')}`, 520) });

module.exports = S;
