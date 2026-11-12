// Wireframe KD08 · Hồ sơ Booking. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
// Dữ liệu minh họa khớp RSD KD05, KD06 (W41: BK-2611-0158 từ YC-2611-0019 v3, 50.750 EUR, tạo 11/11/2026 17:20),
// KD07 (BK-2610-0137 Müller: 11.526 + 26.894 = 38.420 EUR; Dupont BK-2611-0140 hủy 12/11 “Khách đổi sang năm sau”),
// DH07, DH08 (TP-2611-0042, Điều hành Trần Minh Anh). Hôm nay 12/11/2026, trừ W01–W04 (11/11/2026, lúc tạo Booking).
const { page, B, bd, modal, drawer, f } = require('./lib');
const S = {};
const NAM = 'Nguyễn Hoàng Nam', HA = 'Lê Thu Hà';
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const P = o => page(Object.assign({ crumb: 'Booking', side: 'Booking' }, o));
const card = (h, b, st = '') => `<div class="card" style="${st}"><h3>${h}</h3>${b}</div>`;
const kv = (k, v) => `<div class="flex" style="padding:4px 0;border-bottom:1px dashed #eef0f3;align-items:flex-start"><span class="muted" style="width:150px;flex:none">${k}</span><span>${v}</span></div>`;
const foot = (l, r) => `<div style="position:absolute;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #e5e7eb;padding:10px 18px;display:flex;align-items:center;gap:8px"><span class="muted small">${l}</span><span class="ml flex">${r}</span></div>`;
const banner = (cls, ico, html, right = '') => `<div class="banner ${cls}" style="margin-top:10px"><span class="ico ${ico}">${ico === 'ok' ? '✓' : ico === 'i' ? 'i' : '!'}</span><div>${html}</div>${right ? `<span class="ml flex">${right}</span>` : ''}</div>`;

// ---------- Header ----------
const M0137 = { code: 'BK-2610-0137', kh: 'Müller Reisen GmbH', lh: 'Anna Schneider', d: '18/11 – 25/11/2026 · 8N7Đ', pax: 18, val: '38.420 EUR', tc: 'TP-2611-0042', due: '26.894 EUR', pt: NAM, src: 'v3' };
function hdr(m, o = {}) {
  const st = o.st === 'cx' ? bd('Đã hủy', 'b-gray') : o.st === 'new' ? bd('Chưa lưu', 'b-gray') : bd('Hiệu lực', 'b-green');
  const t2 = o.t2 || '';
  return `<div class="hdr"><div class="r1"><span class="code">${o.st === 'new' ? 'Booking mới' : m.code}</span>${st}${o.extra || ''}<div class="actions">${o.act || ''}</div></div>
${o.st === 'new' ? '' : `<div class="meta"><span>Khách <b class="lnk">${m.kh}</b> · ${m.lh}</span><span>Khởi hành <b>${m.d}</b></span><span><b>${m.pax}</b> khách</span><span>Giá trị <b>${m.val}</b> · ${m.src}</span><span>Hồ sơ Tour ${m.tc ? `<b class="lnk">${m.tc}</b>` : '<b>Chưa có</b>'}</span><span>Còn phải thu <b>${m.due}</b></span><span>Phụ trách <b>${m.pt}</b></span></div>`}
<div class="tabs"><div class="tab ${o.tab === 1 ? 'on' : ''}">Thông tin và hủy Booking</div><div class="tab ${o.tab === 2 ? 'on' : ''} ${o.st === 'new' ? 'lock' : ''}">Điều khoản và lịch thanh toán${o.st === 'new' ? ' 🔒' : ''}${t2}</div></div></div>`;
}
const ACT_KD = B('Điều chỉnh chương trình') + B('Chuyển sang Điều hành', 'dis') + B('Hủy Booking', 'd') + B('⋯');
// W05: nút Chuyển sang Điều hành khóa, đang di chuột hiện lý do
const ACT_KD_TIP = B('Điều chỉnh chương trình') + `<span style="position:relative;display:inline-flex">${B('Chuyển sang Điều hành', 'dis')}<span style="position:absolute;top:34px;right:0;z-index:6;background:#111827;color:#fff;font-size:11.5px;line-height:1.4;padding:6px 9px;border-radius:6px;width:260px;font-weight:400;box-shadow:0 6px 16px rgba(0,0,0,.25)">Chưa có phiên bản điều chỉnh cho Booking này · bấm Điều chỉnh chương trình để tính giá lại</span></span>` + B('Hủy Booking', 'd') + B('⋯');
// Chính sách hoàn hủy chụp vào Booking (ví dụ, khớp RSD KT01)
const pol = (name = 'Chuẩn 2026') => kv('Chính sách hoàn hủy', `<b>${name}</b> <span class="lockn">🔒 chụp lúc tạo Booking</span><div class="muted small">Hủy trước khởi hành: từ 45 ngày 10% · 30–44 ngày 25% · 15–29 ngày 50% · 7–14 ngày 75% · dưới 7 ngày 100%</div>`);
const ACT_RO = (who) => `<span class="muted small">${who} · chỉ xem</span>${B('⋯')}`;

// ---------- KD08.1 nội dung ----------
const days0137 = [['1', '18/11', 'Hà Nội · đón sân bay, phố cổ', 'Khách sạn Apricot · Deluxe'], ['2', '19/11', 'Hà Nội – Hạ Long · du thuyền', 'Du thuyền Paradise Elegance'], ['3', '20/11', 'Hạ Long – Hà Nội – bay Đà Nẵng', 'Fusion Suites Đà Nẵng'], ['4', '21/11', 'Bà Nà – Hội An', 'Anantara Hội An'], ['…', '', '4 ngày nữa · Huế, Hồ Chí Minh', '']];
const itin = (rows, note) => `<div class="tbl"><table><tr><th>Ngày</th><th>Ngày đi</th><th>Nội dung</th><th>Lưu trú</th></tr>${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td class="small">${r[3]}</td></tr>`).join('')}</table></div><div class="muted small" style="margin-top:6px">${note}</div>`;
const src = (yc, v, extra = '') => kv('Yêu cầu Tour', `<b class="lnk">${yc}</b>`) + kv('Phiên bản báo giá', `<b class="lnk">${v}</b>${extra}`) + kv('Loại Tour', 'Inbound đoàn') + kv('Ngôn ngữ phục vụ', 'Tiếng Đức');
const progHist = (rows) => `<div class="tbl"><table><tr><th>Chương trình</th><th>Chuyển Điều hành</th><th>Ở hồ sơ Tour</th></tr>${rows.join('')}</table></div>`;
const tab1_0137 = (o = {}) => `<div class="grid" style="grid-template-columns:1.25fr 1fr;margin-top:10px;align-items:start">
<div class="grid">${card(`Hành trình theo phiên bản ${o.v || 'v3'} <span class="lockn">🔒 bản chụp, chỉ đọc</span>`, itin(o.days || days0137, o.inote || 'Đổi chương trình: bấm Điều chỉnh chương trình ở đầu trang để tính giá lại ở hồ sơ yêu cầu.'))}${card('Thay đổi chương trình', o.hist || '<span class="muted small">Chưa có thay đổi sau khi tạo Booking.</span>')}</div>
<div class="grid">${card('Nguồn Booking', src('YC-2610-0008', (o.v || 'v3') + ' · Chốt', o.v ? ` · thay v3 lúc 12/11 15:40` : ' · lưu 12/10/2026') + kv('Cơ cấu khách', o.pax || '18 người lớn') + pol())}
${card('Hồ sơ Tour', kv('Tour Code', '<b class="lnk">TP-2611-0042</b> · Mới tạo') + kv('Điều hành phụ trách', 'Trần Minh Anh') + kv('Khách đoàn', '<b class="lnk">Mở danh sách khách đoàn</b>'))}</div></div>`;

// ---------- KD08.2 bảng đợt ----------
// rows: [đợt, điều khoản, hạn, số tiền, đã thu, còn, tình trạng]
const payView = (rows, tot, o = {}) => `<div class="tbl"><table><tr><th>Đợt</th><th>Điều khoản</th><th>Hạn</th><th class="num">Số tiền</th><th class="num">Đã thu</th><th class="num">Còn phải thu</th><th>Tình trạng</th></tr>
${rows.map(r => `<tr class="${r[7] || ''}"><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td class="num">${r[3]}</td><td class="num">${r[4]}</td><td class="num">${r[5]}</td><td>${r[6]}</td></tr>`).join('')}
<tr class="grp"><td colspan="3">Tổng ${o.totNote || ''}</td><td class="num">${tot[0]}</td><td class="num">${tot[1]}</td><td class="num">${tot[2]}</td><td></td></tr></table></div>`;
const inp = (v, w, cls = '') => `<div class="input ${cls}" style="height:26px;width:${w}px;display:inline-flex">${v}</div>`;
const payEdit = (rows, totRow, o = {}) => `<div class="tbl"><table><tr><th>Đợt</th><th>Điều khoản <span class="req">*</span></th><th>Hạn <span class="req">*</span></th><th class="num">%</th><th class="num">Số tiền <span class="req">*</span></th><th class="num">Đã thu</th><th></th></tr>
${rows.join('')}<tr><td colspan="7">${B('+ Thêm đợt', 'lk')}</td></tr>${totRow}</table></div>`;
const erow = (n, term, due, pct, amt, paid, o = {}) => `<tr><td><b>${n}</b></td><td>${inp(term, 290, o.auto ? '' : '')}${o.auto ? '<span class="auto">Mẫu mặc định</span>' : ''}</td><td>${inp(due, 108, o.dueErr ? 'red' : '')}${o.dueErr ? `<div class="err">${o.dueErr}</div>` : ''}</td><td class="num">${inp(pct, 52)}</td><td class="num">${inp(amt, 112, o.amtErr ? 'red' : '')}${o.amtErr ? `<div class="err" style="white-space:normal;text-align:left;width:180px">${o.amtErr}</div>` : ''}</td><td class="num">${paid}</td><td>${o.lock ? `<span class="muted small" title="Đợt đã có khoản thu">🔒 không xóa</span>` : '<span class="muted">🗑</span>'}</td></tr>`;
const terms = (v, ro) => f('Điều khoản thanh toán', v, { cls: 'area' + (ro ? ' ro' : ''), auto: ro ? '' : 'Mẫu mặc định' });

// ================= Tạo Booking (11/11/2026) =================
const M0158 = { code: 'BK-2611-0158', kh: 'Müller Reisen GmbH', lh: 'Anna Schneider', d: '15/03 – 28/03/2027 · 14N13Đ', pax: 25, val: '50.750 EUR', tc: 'TP-2703-0001', due: 'Chưa có lịch', pt: NAM, src: 'v3' };
const newForm = (err) => `${err ? banner('e', 'e', '<b>Không tạo được Booking.</b> Yêu cầu YC-2611-0019 vừa có Booking BK-2611-0157 (Hiệu lực), tạo ở phiên khác lúc 17:18. Mỗi yêu cầu chỉ có một Booking Hiệu lực.', B('Mở BK-2611-0157', 'sm')) : ''}
<div class="card" style="margin-top:10px"><h3>Kế thừa từ yêu cầu <b class="lnk">YC-2611-0019</b> · phiên bản v3 Chốt <span class="lockn">🔒 chỉ đọc</span></h3>
<div class="f3">${f('Khách hàng', 'Müller Reisen GmbH · Anna Schneider', { cls: 'ro' })}${f('Thời gian', '15/03 – 28/03/2027 · 14N13Đ', { cls: 'ro' })}${f('Số khách', '25 (23 người lớn, 2 trẻ em)', { cls: 'ro' })}</div>
<div class="f3">${f('Hành trình', '14 ngày, 45 dịch vụ (bản của v3)', { cls: 'ro' })}${f('Giá trị Booking', '50.750 EUR', { cls: 'ro' })}${f('Ngôn ngữ phục vụ · loại Tour', 'Tiếng Đức · Inbound đoàn', { cls: 'ro' })}</div>
<div class="f3">${f('Người phụ trách Booking', NAM, { cls: 'ro', auto: 'Người tạo' })}${f('Chính sách hoàn hủy', 'Chuẩn 2026 · theo loại Tour Inbound đoàn', { cls: 'ro', hint: 'Chụp vào Booking khi lưu; sửa chính sách ở QT05 sau đó không đổi Booking' })}</div></div>
<div class="muted small" style="margin-top:8px">Không có trường nhập ở bước này. Lưu Booking xong, tab Điều khoản và lịch thanh toán mở với lịch điền sẵn để kiểm tra và lưu.</div>`;
S.W01 = P({ last: 'Tạo Booking', body: hdr(M0158, { st: 'new', tab: 1 }) + newForm() + foot('Chưa lưu', B('Hủy') + B('Lưu Booking', 'p')) });

// W02 Sau khi lưu: KD08.2 mở với lịch điền sẵn
const ED0158 = [
  erow('Đợt 1', 'Đặt cọc 30% khi xác nhận Booking', '25/11/2026', '30', '15.225 EUR', '0 EUR', { auto: 1 }),
  erow('Đợt 2', '70% còn lại trước khởi hành 30 ngày', '13/02/2027', '70', '35.525 EUR', '0 EUR', { auto: 1 }),
];
const totOk = `<tr class="grp"><td colspan="3">Tổng <span class="muted small" style="font-weight:400">· giá trị Booking 50.750 EUR</span></td><td class="num">100</td><td class="num">50.750 EUR</td><td class="num">0 EUR</td><td>${ind('Khớp giá trị', 'g')}</td></tr>`;
S.W02 = P({
  last: 'BK-2611-0158', body: hdr(Object.assign({}, M0158, { due: 'Chưa có lịch' }), { tab: 2, act: B('⋯') }) +
    banner('s', 'ok', '<b>Đã tạo Booking BK-2611-0158 · đã tạo hồ sơ Tour TP-2703-0001.</b> Yêu cầu YC-2611-0019 chuyển Đã có Booking; Điều hành đã nhận thông báo. Lịch thanh toán dưới đây được điền sẵn từ mẫu mặc định, chưa lưu: kiểm tra rồi bấm Lưu lịch thanh toán.') +
    `<div class="grid" style="grid-template-columns:1fr 2.4fr;align-items:start;margin-top:10px">${terms('Đặt cọc 30% trong 14 ngày kể từ ngày xác nhận; phần còn lại thanh toán trước ngày khởi hành 30 ngày. Chuyển khoản theo thông tin trên hóa đơn.')}
<div>${payEdit(ED0158, totOk)}</div></div>` + foot('Chưa lưu lịch thanh toán · rời tab sẽ hỏi xác nhận', B('Bỏ thay đổi') + B('Lưu lịch thanh toán', 'p')),
});

// W03 Lệch tổng: hộp thoại lý do
const ED0158b = [
  erow('Đợt 1', 'Đặt cọc 30% khi xác nhận Booking', '25/11/2026', '29,6', '15.000 EUR', '0 EUR'),
  erow('Đợt 2', '70% còn lại trước khởi hành 30 ngày', '13/02/2027', '68,9', '35.000 EUR', '0 EUR'),
];
const totBad = `<tr class="grp"><td colspan="3">Tổng <span class="muted small" style="font-weight:400">· giá trị Booking 50.750 EUR</span></td><td class="num">98,5</td><td class="num">50.000 EUR</td><td class="num">0 EUR</td><td>${ind('Thiếu 750 EUR', 'a')}</td></tr>`;
S.W03 = P({
  last: 'BK-2611-0158', body: hdr(M0158, { tab: 2, act: B('⋯') }) +
    `<div class="grid" style="grid-template-columns:1fr 2.4fr;align-items:start;margin-top:10px">${terms('Đặt cọc 15.000 EUR; còn lại 35.000 EUR trước khởi hành 30 ngày. Giảm 750 EUR theo thỏa thuận với đại lý, trừ ở hóa đơn cuối.')}<div>${payEdit(ED0158b, totBad)}</div></div>` + foot('Chưa lưu', B('Bỏ thay đổi') + B('Lưu lịch thanh toán', 'p')),
  overlay: modal('Tổng các đợt khác giá trị Booking', `<div class="small" style="margin-bottom:10px">Tổng các đợt <b>50.000 EUR</b>, giá trị Booking <b>50.750 EUR</b> · <b style="color:#b45309">thiếu 750 EUR</b>. Khoản thiếu không được tính là phải thu ở Công nợ.</div>
${f('Lý do', 'Giảm 750 EUR theo thỏa thuận với đại lý, sẽ điều chỉnh giá trị khi tính giá lại', { cls: 'area', req: 1 })}
<div class="muted small">Lý do được ghi vào lịch sử và hiện cạnh dòng Tổng. Kế toán nhận thông báo lịch thanh toán lệch giá trị.</div>`, B('Quay lại sửa') + B('Lưu kèm lý do', 'p'), 520),
});

// W04 Sau khi lưu lịch (0158, đã có hồ sơ TP-2703-0001 từ lúc lưu Booking)
const V0158 = [['Đợt 1', 'Đặt cọc 30% khi xác nhận Booking', '25/11/2026', '15.225 EUR', '0 EUR', '15.225 EUR', ind('Còn hạn', 'b')], ['Đợt 2', '70% còn lại trước khởi hành 30 ngày', '13/02/2027', '35.525 EUR', '0 EUR', '35.525 EUR', ind('Còn hạn', 'b')]];
const pay2top = (o = {}) => `<div class="flex" style="margin:10px 0 8px"><span class="muted small">${o.note || 'Số đã thu, còn phải thu lấy từ Công nợ (KT01)'}</span><span class="ml flex">${o.btn || ''}</span></div>`;
S.W04 = P({
  last: 'BK-2611-0158', body: hdr(Object.assign({}, M0158, { due: '50.750 EUR' }), { tab: 2, act: ACT_KD }) +
    `<div class="grid" style="grid-template-columns:1fr 2.4fr;align-items:start">${terms('Đặt cọc 30% trong 14 ngày kể từ ngày xác nhận; phần còn lại thanh toán trước ngày khởi hành 30 ngày. Chuyển khoản theo thông tin trên hóa đơn.', 1)}
<div>${pay2top({ btn: B('Xem công nợ') + B('Sửa lịch thanh toán', 'p') })}${payView(V0158, ['50.750 EUR', '0 EUR', '50.750 EUR'])}</div></div>` + `<div class="toast">Đã lưu lịch thanh toán · Kế toán đã nhận thông báo</div>`,
});

// ================= KD08.1 (12/11/2026) =================
S.W05 = P({ last: 'BK-2610-0137', body: hdr(M0137, { tab: 1, act: ACT_KD_TIP, t2: ' <span class="cnt w">1</span>' }) + tab1_0137() });

// W06 KD08.1 hồ sơ Tour chưa tạo được (Tạo lỗi). BK-2611-0150 Hoffmann Reisen khớp dòng Tạo lỗi ở DH07 W08 (11 khách, khởi hành 09/12/2026).
const MHOF = { code: 'BK-2611-0150', kh: 'Hoffmann Reisen', lh: 'Petra Hoffmann', d: '09/12 – 16/12/2026 · 8N7Đ', pax: 11, val: '18.700 EUR', tc: '', due: 'Chưa có lịch', pt: NAM, src: 'v2' };
S.W06 = P({
  last: 'BK-2611-0150', body: hdr(MHOF, { tab: 1, act: ACT_KD }) + `<div class="grid" style="grid-template-columns:1.25fr 1fr;margin-top:10px;align-items:start">
${card('Hành trình theo phiên bản v2 <span class="lockn">🔒 bản chụp, chỉ đọc</span>', itin([['1', '09/12', 'Frankfurt – Hà Nội · đón sân bay', 'Hotel de l’Opera · Deluxe'], ['2', '10/12', 'Hà Nội city tour', 'Hotel de l’Opera · Deluxe'], ['3', '11/12', 'Hà Nội – Hạ Long · du thuyền', 'Du thuyền Paradise Elegance'], ['…', '', '5 ngày nữa · Huế, Hội An', '']], 'Đổi chương trình: bấm Điều chỉnh chương trình ở đầu trang.'))}
<div class="grid">${card('Nguồn Booking', kv('Yêu cầu Tour', '<b class="lnk">YC-2610-0044</b>') + kv('Phiên bản báo giá', '<b class="lnk">v2 · Chốt</b> · lưu 11/11/2026') + kv('Loại Tour', 'Inbound đoàn') + kv('Ngôn ngữ phục vụ', 'Tiếng Đức') + kv('Cơ cấu khách', '11 người lớn') + pol())}
${card('Hồ sơ Tour', `<div class="banner e small"><span class="ico e">!</span><div><b>Hệ thống chưa tạo được hồ sơ · Điều hành đang xử lý.</b> Bạn nhận thông báo khi hồ sơ được tạo.</div></div>`)}
${card('Thay đổi chương trình', '<span class="muted small">Chưa có thay đổi sau khi tạo Booking.</span>')}</div></div>`,
});

// ================= Sửa lịch khi đã có khoản thu =================
const ED0137 = [
  erow('Đợt 1', 'Đặt cọc 30% khi xác nhận', '20/10/2026', '30', '11.526 EUR', '11.526 EUR', { lock: 1 }),
  erow('Đợt 2', '70% còn lại trước khởi hành 5 ngày', '15/11/2026', '70', '26.894 EUR', '0 EUR'),
];
const ED0137bad = [
  erow('Đợt 1', 'Đặt cọc 30% khi xác nhận', '20/10/2026', '26', '10.000 EUR', '11.526 EUR', { lock: 1, amtErr: 'Không nhỏ hơn số đã thu 11.526 EUR' }),
  erow('Đợt 2', '70% còn lại trước khởi hành 5 ngày', '15/11/2026', '74', '28.420 EUR', '0 EUR'),
];
const tot0137 = `<tr class="grp"><td colspan="3">Tổng <span class="muted small" style="font-weight:400">· giá trị Booking 38.420 EUR</span></td><td class="num">100</td><td class="num">38.420 EUR</td><td class="num">11.526 EUR</td><td>${ind('Khớp giá trị', 'g')}</td></tr>`;
S.W07 = P({
  last: 'BK-2610-0137', body: hdr(M0137, { tab: 2, act: ACT_KD }) +
    banner('i', 'i', 'Đợt 1 đã có khoản thu: không xóa được và số tiền không nhỏ hơn số đã thu. Đợt chưa thu sửa, thêm, xóa được. Kế toán nhận thông báo khi bạn lưu.') +
    `<div style="margin-top:8px">${payEdit(ED0137bad, tot0137)}</div>` + foot('Đang sửa · đợt 2 dời hạn 13/11 → 15/11', B('Bỏ thay đổi') + B('Lưu lịch thanh toán', 'dis')),
});

// ================= Hủy Booking =================
const MDUP = { code: 'BK-2611-0140', kh: 'Dupont Voyages', lh: 'Luc Dupont', d: '20/11 – 27/11/2026 · 8N7Đ', pax: 9, val: '21.150 EUR', tc: 'TP-2611-0047', due: '21.150 EUR', pt: NAM, src: 'v1' };
const dupTab1 = (o = {}) => `<div class="grid" style="grid-template-columns:1.25fr 1fr;margin-top:10px;align-items:start">
${card('Hành trình theo phiên bản v1 <span class="lockn">🔒 bản chụp, chỉ đọc</span>', itin([['1', '20/11', 'Paris – Hồ Chí Minh · đón sân bay', 'Hotel des Arts · Deluxe'], ['2', '21/11', 'Củ Chi – Sài Gòn', 'Hotel des Arts · Deluxe'], ['3', '22/11', 'Mekong · Cần Thơ', 'Victoria Cần Thơ'], ['…', '', '5 ngày nữa · Phú Quốc', '']], o.inote || 'Đổi chương trình: bấm Điều chỉnh chương trình ở đầu trang.'))}
<div class="grid">${card('Nguồn Booking', kv('Yêu cầu Tour', '<b class="lnk">YC-2610-0036</b>' + (o.cx ? ' ' + ind('Đã hủy theo Booking', 'r') : '')) + kv('Phiên bản báo giá', '<b class="lnk">v1 · Chốt</b>') + kv('Loại Tour', 'Customized riêng tư') + kv('Ngôn ngữ phục vụ', 'Tiếng Pháp') + pol())}
${card('Hồ sơ Tour', kv('Tour Code', '<b class="lnk">TP-2611-0047</b> · Mới tạo' + (o.cx ? ' ' + ind('Booking đã hủy', 'r') : '')) + kv('Điều hành phụ trách', 'Lê Quang Huy'))}</div></div>`;
S.W08 = P({
  last: 'BK-2611-0140', body: hdr(MDUP, { tab: 1, act: ACT_KD }) + dupTab1(),
  overlay: modal('Hủy Booking BK-2611-0140?', `${f('Lý do hủy', 'Khách hoãn hoặc đổi thời gian', { cls: 'sel', req: 1 })}${f('Ghi chú', 'Khách đổi sang năm sau, sẽ gửi yêu cầu mới', { cls: 'area' })}
<div class="small b" style="margin:4px 0 4px">Sau khi hủy</div>
<ul class="small" style="margin:0 0 8px;padding-left:18px;line-height:1.6"><li>Booking chuyển <b>Đã hủy</b>, chỉ xem; không mở lại được.</li><li>Yêu cầu YC-2610-0036 tự chuyển <b>Đã hủy</b>. Khách muốn đặt lại: Mở lại yêu cầu ở hồ sơ yêu cầu, báo giá và tạo Booking mới.</li><li>Hồ sơ Tour <b>TP-2611-0047</b> gắn chỉ báo Booking đã hủy; Điều hành gửi hủy từng dịch vụ với NCC. Hệ thống không tự hủy dịch vụ, không gửi email.</li><li>Công nợ: đã thu <b>0 EUR</b>; Kế toán ghi điều chỉnh theo chính sách hoàn hủy Chuẩn 2026 đã chụp vào Booking.</li></ul>`, B('Không hủy') + B('Hủy Booking', 'dp'), 560),
});

// W09 Sau khi hủy
S.W09 = P({
  last: 'BK-2611-0140', body: hdr(Object.assign({}, MDUP, { due: 'Chờ điều chỉnh' }), { st: 'cx', tab: 1, act: B('⋯') }) +
    banner('w', 'w', '<b>Booking đã hủy lúc 12/11/2026 10:24</b> bởi Nguyễn Hoàng Nam · Khách hoãn hoặc đổi thời gian: Khách đổi sang năm sau, sẽ gửi yêu cầu mới. Yêu cầu YC-2610-0036 đã chuyển Đã hủy; khách đặt lại thì Mở lại yêu cầu. Điều hành phụ trách TP-2611-0047 và Kế toán đã nhận thông báo.', B('Mở yêu cầu YC-2610-0036', 'sm')) + dupTab1({ cx: 1, inote: 'Booking đã hủy: hành trình chỉ xem.' }),
});

// W10 Hủy khi Tour đang diễn ra
const MNOR = { code: 'BK-2610-0129', kh: 'Nordic Explorer AB', lh: 'Erik Lindqvist', d: '08/11 – 15/11/2026 · 8N7Đ', pax: 16, val: '27.200 USD', tc: 'TP-2611-0038', due: 'Đã thu đủ', pt: NAM, src: 'v2' };
S.W10 = P({
  last: 'BK-2610-0129', body: hdr(MNOR, { tab: 1, act: ACT_KD }) + `<div class="card" style="margin-top:10px;height:330px"><h3>Hành trình theo phiên bản v2 <span class="lockn">🔒 bản chụp, chỉ đọc</span></h3><div class="muted small">…</div></div>`,
  overlay: modal('Hủy Booking khi Tour đang diễn ra?', `<div class="banner e small" style="margin-bottom:10px"><span class="ico e">!</span><div>Hồ sơ Tour <b>TP-2611-0038</b> đang diễn ra (ngày 5/8). Đoàn đang ở Việt Nam. Hủy Booking không dừng các dịch vụ đã xác nhận; Điều hành xử lý từng dịch vụ và kết thúc Tour như bình thường.</div></div>
${f('Lý do hủy', 'Khách dừng chuyến giữa chừng', { cls: 'sel', req: 1 })}${f('Ghi chú', 'Đoàn về nước sớm 2 ngày do bão', { cls: 'area', req: 1, hint: 'Bắt buộc khi Tour đang diễn ra' })}
<label class="small flex" style="margin-top:4px"><span class="cb on"></span> Tôi đã thống nhất với Điều hành phụ trách (Phạm Thu Hà)</label>
<div class="muted small" style="margin-top:6px">Công nợ: đã thu 27.200 USD; khoản cần hoàn (nếu có) do Kế toán ghi theo chính sách hoàn hủy đã chụp vào Booking.</div>`, B('Không hủy') + B('Hủy Booking', 'dp'), 560),
});

// W11 Hủy bị chặn: hồ sơ Đã kết thúc (Lê Thu Hà)
const MWAG = { code: 'BK-2610-0121', kh: 'Wagner Gruppe', lh: 'Klaus Wagner', d: '01/11 – 08/11/2026 · 8N7Đ', pax: 20, val: '26.000 EUR', tc: 'TP-2611-0031', due: '5.200 EUR', pt: HA, src: 'v2' };
S.W11 = P({
  user: 'lh', last: 'BK-2610-0121', body: hdr(MWAG, { tab: 1, act: `<span class="muted small" style="text-align:right">Hồ sơ Tour đã kết thúc 08/11 · không hủy,<br>không điều chỉnh chương trình</span>${B('Điều chỉnh chương trình', 'dis')}${B('Chuyển sang Điều hành', 'dis')}${B('Hủy Booking', 'dis')}${B('⋯')}` }) +
    `<div class="grid" style="grid-template-columns:1.25fr 1fr;margin-top:10px;align-items:start">${card('Hành trình theo phiên bản v2 <span class="lockn">🔒 bản chụp, chỉ đọc</span>', itin([['1', '01/11', 'München – Hà Nội', 'Pan Pacific Hà Nội'], ['2', '02/11', 'Hà Nội – Sa Pa', 'Hotel de la Coupole'], ['…', '', '6 ngày nữa', '']], 'Tour đã kết thúc. Chênh lệch với khách sau Tour xử lý ở Công nợ và quyết toán (DH08.8).'))}
<div class="grid">${card('Hồ sơ Tour', kv('Tour Code', '<b class="lnk">TP-2611-0031</b> · Đã kết thúc') + kv('Điều hành phụ trách', 'Trần Minh Anh'))}</div></div>`,
});

// ================= Điều chỉnh chương trình =================
// W12 KD06 ở chế độ điều chỉnh (đích)
S.W12 = page({
  crumb: 'Yêu cầu Tour', last: 'YC-2610-0008', side: 'Yêu cầu Tour', body: `<div class="hdr"><div class="r1"><span class="code">YC-2610-0008</span>${bd('Đã có Booking', 'b-green')}${ind('Đang điều chỉnh cho BK-2610-0137', 'v')}<div class="actions">${B('Thoát điều chỉnh')}</div></div>
<div class="meta"><span>Khách <b class="lnk">Müller Reisen GmbH</b> · Anna Schneider</span><span>Booking <b class="lnk">BK-2610-0137</b> · v3</span><span>Phụ trách <b>${NAM}</b></span></div>
<div class="tabs"><div class="tab">Thông tin yêu cầu</div><div class="tab on">Hành trình</div><div class="tab">Báo giá <span class="cnt">3</span></div></div></div>
${banner('i', 'i', '<b>Điều chỉnh chương trình cho Booking BK-2610-0137.</b> Hành trình mở để sửa, bắt đầu từ bản của v3. Giá tự tính lại, lưu thành v4 (Chưa có kết quả; không ghi kết quả ở chế độ này). Trao đổi với khách; khách đồng ý thì quay lại Booking bấm Chuyển sang Điều hành, hệ thống ghi Chốt cho v4. Booking và hồ sơ Tour chưa đổi cho tới lúc đó.')}
<div class="card" style="margin-top:10px;height:300px"><h3>Hành trình · 8 ngày <span class="ml">${B('Tính giá', 'p')}</span></h3><div class="muted small">Lưới ngày và dịch vụ như KD06.2.</div></div>
<div class="muted small" style="margin-top:8px">Chế độ điều chỉnh đặc tả ở bản cập nhật RSD KD06. Hình này chỉ minh họa đích của nút Điều chỉnh chương trình ở KD08.</div>`,
});

// W13 KD08 có phiên bản mới v4 chưa chuyển Điều hành
const ACT_UPD = B('Điều chỉnh chương trình') + B('Chuyển sang Điều hành', 'p') + B('Hủy Booking', 'd') + B('⋯');
S.W13 = P({
  last: 'BK-2610-0137', body: hdr(M0137, { tab: 1, act: ACT_UPD, t2: ' <span class="cnt w">1</span>' }) +
    banner('i', 'i', '<b>Phiên bản mới v4 · chưa chuyển Điều hành.</b> Thêm 2 khách (20 khách), giá trị 42.680 EUR (+4.260 EUR). Kinh doanh trao đổi với khách trước, khách đồng ý rồi mới bấm Chuyển sang Điều hành: hệ thống ghi Chốt cho v4, Booking theo v4, v3 thành Đã thay thế, hồ sơ Tour nhận thay đổi.', B('Xem v4', 'sm')) +
    tab1_0137({ hist: progHist([`<tr><td><b class="lnk">v4</b> · Điều chỉnh cho BK-2610-0137 · lưu 12/11 15:31 · Chưa có kết quả</td><td>${ind('Phiên bản mới · chưa chuyển Điều hành', 'a')}</td><td class="muted small">—</td></tr>`]) }),
});

// W15 Sau cập nhật
const M0137v4 = Object.assign({}, M0137, { pax: 20, val: '42.680 EUR', src: 'v4' });
S.W15 = P({
  last: 'BK-2610-0137', body: hdr(M0137v4, { tab: 1, act: ACT_KD, t2: ' <span class="cnt w">!</span>' }) +
    banner('w', 'w', '<b>Lịch thanh toán thiếu 4.260 EUR so với giá trị Booking 42.680 EUR.</b> Khoản thiếu chưa là phải thu ở Công nợ cho tới khi bạn sửa lịch.', B('Sửa lịch thanh toán', 'sm p')) +
    tab1_0137({ v: 'v4', pax: '20 người lớn', days: days0137, inote: 'Booking theo v4 từ lúc chuyển sang Điều hành 12/11 15:40.', hist: progHist([`<tr><td><b class="lnk">v4</b> · thay v3</td><td>12/11 15:40 · ${NAM}</td><td>${ind('Chờ áp dụng', 'a')}</td></tr>`]) }) +
    `<div class="toast">Đã chuyển sang Điều hành · v4 Chốt, v3 Đã thay thế · Booking theo v4 · Trần Minh Anh đã nhận thay đổi chương trình</div>`,
});

// ================= Chuyển người phụ trách =================
const MSUN = { code: 'BK-2611-0139', kh: 'Sunrise Holidays Ltd', lh: 'James Lee', d: '27/12/2026 – 03/01/2027 · 8N7Đ', pax: 12, val: '15.360 SGD', tc: 'TP-2612-0008', due: '15.360 SGD', pt: NAM, src: 'v2' };
const menu = `<div class="menu" style="right:20px;top:92px;width:230px"><div class="mi on">Chuyển người phụ trách</div><div class="mi">Lịch sử thay đổi</div></div>`;
S.W16 = P({
  last: 'BK-2611-0139', body: hdr(MSUN, { tab: 1, act: ACT_KD }) + `<div class="card" style="margin-top:10px;height:330px"><h3>Hành trình theo phiên bản v2</h3></div>`,
  overlay: modal('Chuyển người phụ trách Booking BK-2611-0139', `${f('Người phụ trách hiện tại', NAM, { cls: 'ro' })}${f('Người nhận', 'Lê Thu Hà · 9 Booking hiệu lực', { cls: 'sel', req: 1, hint: 'Kinh doanh đang hoạt động, khác người hiện tại' })}${f('Ghi chú cho người nhận', 'Khách quen của chị Hà, nhờ chị theo tiếp', { cls: 'area' })}
<div class="muted small">Người nhận sửa lịch thanh toán, điều chỉnh chương trình, hủy được Booking này. Bạn không còn thấy Booking ở danh sách. Yêu cầu YC-2610-0014 chuyển theo cho người nhận. Điều hành phụ trách hồ sơ Tour TP-2612-0008 không đổi.</div>`, B('Hủy') + B('Chuyển', 'p'), 520),
});

// ================= Kế toán xem; KT01 lỗi =================
const MTAN = { code: 'BK-2611-0144', kh: 'Tanaka Travel Co.', lh: 'Ito Mai', d: '14/11 – 19/11/2026 · 6N5Đ', pax: 12, val: '2.880.000 JPY', tc: 'TP-2611-0051', due: '2.016.000 JPY', pt: NAM, src: 'v2' };
S.W17 = P({
  user: 'kt', last: 'BK-2611-0144', body: hdr(MTAN, { tab: 2, act: ACT_RO('Kế toán'), t2: ' <span class="cnt r">1</span>' }) +
    `<div class="grid" style="grid-template-columns:1fr 2.4fr;align-items:start">${terms('Đặt cọc 30% khi xác nhận; 70% còn lại trước khởi hành 7 ngày.', 1)}
<div>${pay2top({ btn: B('Xem công nợ', 'p') })}${payView([['Đợt 1', 'Đặt cọc 30% khi xác nhận', '20/10/2026', '864.000 JPY', '864.000 JPY', '0 JPY', ind('Đã thu đủ', 'g')], ['Đợt 2', '70% còn lại trước khởi hành 7 ngày', '<b>07/11/2026</b>', '2.016.000 JPY', '0 JPY', '<b>2.016.000 JPY</b>', ind('Quá hạn', 'r') + ' <span class="muted small">quá 5 ngày</span>', 'sel']], ['2.880.000 JPY', '864.000 JPY', '2.016.000 JPY'])}
<div class="muted small" style="margin-top:6px">Ghi khoản thu: bấm Xem công nợ để mở Phải thu khách hàng (KT01.1) lọc theo Booking này.</div></div></div>`,
});

S.W18 = P({
  last: 'BK-2610-0137', body: hdr(Object.assign({}, M0137, { due: 'Chưa có dữ liệu công nợ' }), { tab: 2, act: ACT_KD }) +
    banner('w', 'w', '<b>Chưa lấy được số liệu công nợ từ Kế toán.</b> Cột Đã thu, Còn phải thu ghi “Chưa có dữ liệu công nợ”, không phải 0. Vẫn sửa được lịch: các đợt chưa biết số đã thu không giảm số tiền, không xóa; thêm đợt, sửa hạn, sửa điều khoản, tăng số tiền được.', B('↻ Thử lại', 'sm')) +
    `<div>${pay2top({ btn: '<span class="muted small">Chưa có số liệu công nợ · không giảm, không xóa đợt hiện có</span>' + B('Sửa lịch thanh toán', 'p') })}${payView([['Đợt 1', 'Đặt cọc 30% khi xác nhận', '20/10/2026', '11.526 EUR', '<span class="muted">Chưa có dữ liệu</span>', '<span class="muted">Chưa có dữ liệu</span>', '<span class="muted small">—</span>'], ['Đợt 2', '70% còn lại trước khởi hành 5 ngày', '13/11/2026', '26.894 EUR', '<span class="muted">Chưa có dữ liệu</span>', '<span class="muted">Chưa có dữ liệu</span>', '<span class="muted small">—</span>']], ['38.420 EUR', '—', '—'])}</div>`,
});

// W19 Lịch sử thay đổi
const hrow = (t, who, what) => `<div style="padding:8px 0;border-bottom:1px solid #f1f5f9"><div class="flex"><b class="small">${what}</b><span class="ml muted small">${t}</span></div><div class="muted small">${who}</div></div>`;
S.W19 = P({
  last: 'BK-2610-0137', body: hdr(M0137v4, { tab: 1, act: ACT_KD }) + tab1_0137({ v: 'v4' }),
  overlay: drawer('Lịch sử thay đổi · BK-2610-0137', `<div class="flex" style="margin-bottom:6px"><span class="input sel" style="width:200px;height:28px">Loại: Tất cả</span></div>
${hrow('12/11/2026 16:05', 'Hệ thống', 'Hồ sơ Tour TP-2611-0042 đã áp dụng chương trình v4 (Trần Minh Anh)')}
${hrow('12/11/2026 15:40', NAM, 'Chuyển sang Điều hành · ghi Chốt v4, v3 Đã thay thế · Booking theo v4 · 18 → 20 khách · 38.420 → 42.680 EUR')}
${hrow('05/11/2026 10:12', NAM, 'Sửa lịch thanh toán · Đợt 2 hạn 15/11 → 13/11')}
${hrow('14/10/2026 16:20', NAM, 'Lưu lịch thanh toán · 2 đợt · khớp giá trị')}
${hrow('14/10/2026 16:18', 'Hệ thống', 'Tạo hồ sơ Tour TP-2611-0042 khi lưu Booking · Điều hành đã nhận thông báo')}
${hrow('14/10/2026 16:18', NAM, 'Tạo Booking từ YC-2610-0008 · v3 Chốt')}`, B('Đóng')),
});

// ================= Yêu cầu đổi lịch trình từ Điều hành (RSD DH08 R18) =================
S.W21 = P({
  last: 'BK-2610-0137', body: hdr(M0137, { tab: 1, act: ACT_KD, t2: ' <span class="cnt w">1</span>' }) +
    banner('w', 'w', '<b>Điều hành yêu cầu đổi lịch trình · TP-2611-0042</b> · Trần Minh Anh gửi 10/11/2026 15:20 · hạn phản hồi <b>12/11/2026 17:00</b><div class="small" style="margin-top:3px">Khách sạn Huế 4★ · Superior · 10 phòng · 21/11 – 23/11/2026 · ' + ind('Chờ Kinh doanh', 'a') + ' Hương Giang Riverside, Indochine Palace Huế hết phòng (Festival Huế); không còn NCC 4★ tương đương. Đề xuất: đổi sang KS Huế 3★ Moonlight, hoặc rút 1 đêm Huế, đêm 22/11 nghỉ Hội An.</div><div class="small" style="margin-top:3px">Trao đổi với khách, rồi bấm <b>Điều chỉnh chương trình</b> ở đầu trang; khách đồng ý thì Chuyển sang Điều hành. Yêu cầu tự đóng khi Điều hành áp dụng thay đổi.</div>', B('Xem ở hồ sơ Tour', 'sm')) +
    tab1_0137({ hist: '<div class="small" style="margin-bottom:6px">' + ind('1 yêu cầu đổi lịch trình đang chờ', 'a') + '</div><span class="muted small">Chưa có thay đổi sau khi tạo Booking.</span>' }),
});

// W20 Tạo bị từ chối
S.W20 = P({ last: 'Tạo Booking', body: hdr(M0158, { st: 'new', tab: 1 }) + newForm(1) + foot('Chưa lưu', B('Hủy') + B('Lưu Booking', 'dis')) });

module.exports = S;
