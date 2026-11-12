// Wireframe DH03 · DH03.3 Dịch vụ và bảng giá, bảng trượt DH05, góc nhìn theo vai trò, lỗi tải.
const { page, modal, f, B, bd } = require('./lib');
const { _lib: L } = require('./screens-a');
const { nhdr, tg, ind, dw, toast, LOTUS_META, formGeneral, ctTitle, ctTable, secTE, secHuy } = L;
const S = {};

// ---------- Dữ liệu minh họa: dịch vụ của Khách sạn Lotus Hanoi theo LH-2025/HĐ-07 ----------
// Dòng giá: 4 + 2 + 0 + 2 + 1 + 1 = 10 dòng của 5 dịch vụ. Thiếu giá: Phòng Family (chưa có), Giường phụ (ô Tết).
const SV = {
  std: ['Phòng nghỉ tiêu chuẩn', 'Khách sạn', 'Phòng/đêm', '1.350.000', 4, '', true],
  js: ['Phòng Junior Suite', 'Khách sạn', 'Phòng/đêm', '2.900.000', 2, '', true],
  fam: ['Phòng Family (connecting)', 'Khách sạn', 'Phòng/đêm', '—', 0, 'Chưa có giá', true],
  din: ['Ăn tối set menu Việt', 'Nhà hàng', 'Khách/suất', '420.000', 2, '', true],
  lun: ['Ăn trưa buffet', 'Nhà hàng', 'Khách/suất', '350.000', 1, '', false],
  bed: ['Giường phụ', 'Khách sạn', 'Giường/đêm', '450.000', 1, 'Thiếu 1 ô giá', true],
};
const SVK = ['std', 'js', 'fam', 'din', 'lun', 'bed'];
function svTable(keys, { off = {}, hl = '', ro = false, menu = '' } = {}) {
  return `<div class="tbl"><table><tr><th>Dịch vụ</th><th>Loại</th><th>Đơn vị tính</th><th class="num">Giá từ</th><th class="num">Dòng giá</th><th>Giá trong hợp đồng</th><th>Cho phép sử dụng</th><th style="width:40px"></th></tr>
${keys.map(k => { const r = SV[k]; const on = off[k] !== undefined ? off[k] : r[6]; return `<tr class="${hl === k ? 'new' : ''} ${on ? '' : 'dim'}"><td><b style="color:${on ? '#1d4ed8' : '#9ca3af'}">${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td class="num">${r[3]} ${r[3] !== '—' ? '₫' : ''}</td><td class="num">${r[4]}</td><td>${r[5] ? ind(r[5], r[4] ? 'a' : 'r') : '<span class="muted small">Đủ giá</span>'}</td><td>${ro ? (on ? 'Có' : 'Không') : tg(on, on ? '' : 'Ngừng')}</td><td style="position:relative">${ro ? '' : '<span class="btn sm">⋯</span>'}</td></tr>`; }).join('')}</table></div>`;
}
const ctSel = (o = {}) => `<div class="input sel ${o.open ? 'focus' : ''}" style="width:430px"><span class="muted">Hợp đồng:&nbsp;</span><b>${o.no || 'LH-2025/HĐ-07'}</b>&nbsp;· ${o.per || '01/12/2025 – 30/11/2026'}&nbsp;${o.ind === undefined ? ind('Sắp hết hạn', 'a') : o.ind}</div>`;
const svBar = (o = {}) => `<div class="flex" style="margin:10px 0 8px">${ctSel(o)}
<span class="chip ${o.chip === 'miss' ? '' : 'on'}">Tất cả <span class="cnt">6</span></span><span class="chip ${o.chip === 'miss' ? 'on' : ''}">Thiếu giá <span class="cnt w">2</span></span><span class="chip">Ngừng sử dụng <span class="cnt">${o.offCnt || 1}</span></span>
<span class="ml"></span>${o.ro ? '' : B('+ Thêm dịch vụ', 'p')}</div>`;

// W24 Danh sách dịch vụ theo hợp đồng
S.W24 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 3, todo: [L.TODO_RENEW] }) + svBar() + svTable(SVK),
});

// W25 Đổi hợp đồng đang xem
S.W25 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 3, todo: [L.TODO_RENEW] }) + svBar({ open: true }) + svTable(SVK) +
    `<div class="menu" style="left:18px;top:237px;width:430px">
<div class="mi on"><b>LH-2025/HĐ-07</b><span class="muted small">01/12/2025 – 30/11/2026</span><span class="ml">${ind('Sắp hết hạn', 'a')}</span></div>
<div class="mi"><b>LH-2024/HĐ-05</b><span class="muted small">01/12/2024 – 30/11/2025</span><span class="ml">${ind('Hết hạn', 'r')}</span></div>
<div class="mi"><b>LH-2023/HĐ-11</b><span class="muted small">01/12/2023 – 30/11/2024 · USD</span><span class="ml">${ind('Hết hạn', 'r')}</span></div>
<div class="mh2" style="border-top:1px solid #f1f5f9;margin-top:4px;padding-top:6px">Mặc định: hợp đồng còn hiệu lực mới nhất</div></div>`,
});

// W26 Tắt dịch vụ ngay trên dòng
S.W26 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 3, todo: [L.TODO_RENEW], meta: LOTUS_META({ svcOn: 4 }) }) + svBar({ offCnt: 2 }) + svTable(SVK, { off: { din: false } }) +
    toast('Đã ngừng sử dụng Ăn tối set menu Việt. Dịch vụ không hiện khi chọn mới.', 'Hoàn tác'),
});

// ---------- Bảng trượt DH05 ----------
const dhead = (name, o = {}) => `<div class="flex" style="gap:10px;margin-right:34px"><span>${name}</span>${o.on === false ? bd('Ngừng sử dụng', 'b-gray') : ''}${o.badge || ''}<span class="ml"></span>
<span class="small" style="font-weight:400">${ctSel({ no: o.no, per: o.per, ind: o.ind, open: o.ctOpen }).replace('width:430px', 'width:400px;height:28px')}</span>
<span class="btn sm">‹</span><span class="small muted" style="font-weight:400">${o.pos || '1 / 6'}</span><span class="btn sm">›</span></div>`;
const dtabs = (on = 1, miss = 0) => `<div class="ntab" style="margin:0 18px"><div class="${on === 1 ? 'on' : ''}">Thông tin dịch vụ</div><div class="${on === 2 ? 'on' : ''}">Bảng giá và phụ thu ${miss ? `<span class="cnt w">${miss}</span>` : ''}</div></div>`;
const d5 = (title, body, foot, o = {}) => `<div class="overlay"></div><div class="drawer xl"><div class="dh"><div class="t" style="display:block">${title}<span class="x" style="position:absolute;right:16px;top:12px">✕</span></div><div class="muted small" style="margin-top:2px">Khách sạn Lotus Hanoi${o.sub ? ' · ' + o.sub : ''}</div></div>${dtabs(o.tab, o.miss)}<div class="db" style="overflow:hidden;padding-top:6px">${body}</div><div class="df">${foot}</div></div>`;
const d5foot = (state = '', btn = 'Lưu') => `<span class="small" style="margin-right:auto;${state.startsWith('●') ? 'color:#92400e' : 'color:#6b7280'}">${state || 'Cập nhật 20/11/2025 · Trần Minh Anh'}</span>${B('Đóng')}${B(btn, state.startsWith('●') ? 'p' : 'dis')}`;
const bg24 = (o = {}) => page({ last: 'Khách sạn Lotus Hanoi', user: o.user || 'dh', body: nhdr({ tab: 3, user: o.user || 'dh', todo: [] }) + svBar({ ro: o.user === 'kd' }) + svTable(SVK, { ro: o.user === 'kd' }), overlay: o.overlay });

// DH05.1 Thông tin dịch vụ
function info({ empty = false, copyOpen = false, merged = false, ro = false } = {}) {
  const c = ro ? 'ro' : '';
  const inc = empty ? '' : `<span class="tag">Ăn sáng buffet ✕</span><span class="tag">Wifi ✕</span><span class="tag">Nước uống trong phòng ✕</span><span class="tag">VAT 8% và phí phục vụ 5% ✕</span>${merged ? '<span class="tag" style="background:#dcfce7;color:#166534">Hồ bơi và phòng gym ✕</span>' : ''}`;
  const exc = empty ? '' : `<span class="tag x">Minibar ✕</span><span class="tag x">Giặt là ✕</span><span class="tag x">Ăn trưa, ăn tối ✕</span>${merged ? '<span class="tag x" style="background:#dcfce7;color:#166534">Tiền tip ✕</span>' : ''}`;
  return `<div class="f3">${f('Tên dịch vụ', empty ? '<span class="muted">Nhập tên dịch vụ</span>' : 'Phòng nghỉ tiêu chuẩn', { req: !ro, cls: (empty ? 'focus ' : '') + c })}${f('Loại dịch vụ', 'Khách sạn', { req: !ro, cls: 'sel ' + c, auto: empty ? 'Theo NCC' : '' })}${f('Đơn vị tính', 'Phòng/đêm', { req: !ro, cls: 'sel ' + c, auto: empty ? 'Theo loại dịch vụ' : '' })}</div>
${f('Mô tả', empty ? '<span class="muted">Mô tả ngắn hiện ở báo giá và email đặt dịch vụ</span>' : 'Phòng 28–32 m², giường đôi hoặc 2 giường đơn, hướng phố. Hạng Superior và Deluxe.', { cls: 'area ' + c })}
<div class="flex" style="margin:-2px 0 8px"><label style="font-size:12px;font-weight:600">Cho phép sử dụng</label>${tg(true, '', ro)}</div>
<div class="field"><label>Dịch vụ bao gồm <span class="lockn">· đã nằm trong giá</span>${ro ? '' : `<span class="lnk small" style="float:right;font-weight:400">Sao chép từ dịch vụ khác</span>`}</label><div class="tags">${inc}${ro ? '' : `<span class="muted small" style="margin-left:4px">Gõ hoặc chọn…</span>`}</div>
${ro ? '' : `<div class="small muted" style="margin-top:4px">Gợi ý cho Khách sạn: <span class="tag sg">+ Đón tiễn sân bay</span><span class="tag sg">+ Hồ bơi và phòng gym</span><span class="tag sg">+ Trà, cà phê trong phòng</span></div>`}</div>
<div class="field"><label>Dịch vụ không bao gồm</label><div class="tags">${exc}${ro ? '' : `<span class="muted small" style="margin-left:4px">Gõ hoặc chọn…</span>`}</div>
${ro ? '' : `<div class="small muted" style="margin-top:4px">Gợi ý: <span class="tag sg">+ Tiền tip</span><span class="tag sg">+ Chi phí cá nhân</span><span class="tag sg">+ Phụ thu lễ Tết</span></div>`}</div>
${copyOpen ? `<div class="menu" style="right:30px;top:265px;width:380px"><div class="mh2">Sao chép bao gồm và không bao gồm từ</div>
<div class="mi on"><b>Phòng Junior Suite</b><span class="ml muted small">5 bao gồm · 4 không bao gồm</span></div>
<div class="mi"><b>Phòng Family (connecting)</b><span class="ml muted small">4 · 3</span></div>
<div class="mi"><b>Giường phụ</b><span class="ml muted small">1 · 2</span></div>
<div class="mh2" style="border-top:1px solid #f1f5f9;margin-top:4px;padding-top:6px">Thêm vào danh sách hiện có, không trùng thẻ</div></div>` : ''}`;
}

// W27 DH05.1
S.W27 = bg24({ overlay: d5(dhead('Phòng nghỉ tiêu chuẩn'), info(), d5foot(), { tab: 1 }) });
// W28 Sao chép từ dịch vụ khác
S.W28 = bg24({ overlay: d5(dhead('Phòng nghỉ tiêu chuẩn'), info({ copyOpen: true }), d5foot(), { tab: 1 }) });
// W29 Thêm dịch vụ mới
S.W29 = bg24({ overlay: d5(dhead('Dịch vụ mới', { pos: 'Mới', badge: ind('Chưa lưu', 'a') }), info({ empty: true }), d5foot('● Dịch vụ mới chưa lưu', 'Lưu dịch vụ'), { tab: 1 }) });

// ---------- DH05.2 Bảng giá ma trận ----------
const SEAS = ['Cao điểm<br><span class="muted">Ngày thường</span>', 'Cao điểm<br><span class="muted">Cuối tuần</span>', 'Tết<br>Nguyên đán', 'Thấp điểm'];
const ROWS = [
  ['Superior', '1 – 19', 'Phòng/đêm', ['1.650.000', '1.850.000', '2.200.000', '1.450.000'], '0', '350.000', '2'],
  ['Superior', '≥ 20', 'Phòng/đêm', ['1.550.000', '1.750.000', '2.100.000', '1.350.000'], '0', '350.000', '2'],
  ['Deluxe', '1 – 19', 'Phòng/đêm', ['1.950.000', '2.150.000', '2.600.000', '1.700.000'], '0', '350.000', '2'],
  ['Deluxe', '≥ 20', 'Phòng/đêm', ['1.850.000', '2.050.000', '2.500.000', '1.600.000'], '0', '350.000', '2'],
];
// rows: mảng [hạng, khách, căn cứ, [4 giá], em bé, trẻ em, số phụ thu, {cls:{i:cls}, rowErr, rowCls}]
function sheet(rows, { selCol = -1, tip = false, ro = false } = {}) {
  const cell = (v, cls) => v === '' ? `<td class="miss ${cls || ''}">thiếu</td>` : `<td class="n ${cls || ''}">${v}</td>`;
  return `<div class="sheet"><table><tr><th style="width:24px"></th><th style="width:96px">Hạng phòng</th><th style="width:70px">Số khách</th><th style="width:88px">Căn cứ tính</th>
${SEAS.map((s, i) => `<th class="${i === selCol ? 'csel' : ''}" style="position:relative"><span class="dot ${['s1', 's1', 's4', 's2'][i]}"></span>${s}${tip && i === 0 ? `<div class="menu" style="left:10px;top:44px;width:270px;text-align:left;font-weight:400;padding:6px 10px;color:#111827">01/12/2025 – 13/02/2026<br>23/02/2026 – 30/04/2026<br>01/09/2026 – 30/11/2026<br><span class="muted">Ngày thường: Chủ nhật – Thứ Năm</span></div>` : ''}</th>`).join('')}
<th style="width:74px">Em bé<br><span class="muted">0 – dưới 4</span></th><th style="width:80px">Trẻ em<br><span class="muted">4 – dưới 12</span></th><th style="width:42px">Tiền</th><th style="width:70px">Phụ thu</th></tr>
${rows.map((r, i) => { const o = r[7] || {}; const cc = o.cls || {}; return `<tr><td class="rh">${i + 1}</td><td class="${cc.h || ''}">${r[0]}</td><td class="${cc.k || ''}">${r[1]}</td><td class="${cc.c || ''}">${r[2]}</td>${r[3].map((v, j) => cell(v, (cc[j] || '') + (j === selCol ? ' csel' : ''))).join('')}${cell(r[4], cc.e)}${cell(r[5], cc.t)}<td>VND</td><td class="small">${ro ? (r[6] !== '0' ? r[6] + ' khoản' : '—') : (r[6] !== '0' ? `<span class="lnk">▸ ${r[6]} khoản</span>` : '<span class="lnk">▸ Thêm</span>')}</td></tr>${o.err ? `<tr><td></td><td colspan="11" class="err" style="padding:2px 6px;background:#fef2f2">✕ ${o.err}</td></tr>` : ''}${o.ext || ''}`; }).join('')}</table></div>`;
}
const gridBar = (ro = false) => ro ? '' : `<div class="flex" style="margin:4px 0 8px">${B('+ Thêm dòng', 'sm')}${B('Nhân bản dòng', 'sm')}${B('Điền nhanh', 'sm')}<span style="width:1px;height:20px;background:#e5e7eb"></span>${B('Nhập file Excel', 'sm')}${B('Tải file mẫu', 'sm lk')}<span class="ml muted small">Dán thẳng từ Excel bằng Ctrl+V · <span class="dot s0" style="border:1px solid #fcd34d"></span>ô thiếu giá</span></div>`;
const legend = `<div class="small muted" style="margin-top:6px">Mỗi dòng là một tổ hợp hạng phòng × số khách × căn cứ tính; mỗi cột là một mùa của hợp đồng. Cột trẻ em theo nhóm tuổi của chính sách trẻ em. Rê chuột trên tiêu đề cột để xem khoảng ngày.</div>`;

// W30 Bảng giá ma trận
S.W30 = bg24({ overlay: d5(dhead('Phòng nghỉ tiêu chuẩn'), gridBar() + sheet(ROWS, { tip: true }) + legend, d5foot(), { tab: 2 }) });

// W31 Điền nhanh cho vùng đã chọn
const NEWR = [
  ['Deluxe Lake View', '1 – 19', 'Phòng/đêm', ['', '', '', ''], '0', '350.000', '0', { cls: { 0: 'csel cur', 1: 'csel', 2: 'csel', 3: 'csel' } }],
  ['Deluxe Lake View', '≥ 20', 'Phòng/đêm', ['', '', '', ''], '0', '350.000', '0', { cls: { 0: 'csel', 1: 'csel', 2: 'csel', 3: 'csel' } }],
];
S.W31 = bg24({
  overlay: d5(dhead('Phòng nghỉ tiêu chuẩn', { badge: ind('Chưa lưu', 'a') }), gridBar() + sheet(ROWS.concat(NEWR)) +
    `<div class="menu" style="left:330px;top:420px;width:400px;padding:10px 12px"><b>Điền nhanh 8 ô đã chọn</b>
<div class="flex" style="margin-top:8px"><span class="rd on"></span>Một giá cho mọi ô<span class="input focus" style="width:120px;margin-left:auto">2.100.000</span></div>
<div class="flex" style="margin-top:6px"><span class="rd"></span>Lấy theo dòng<span class="input sel" style="width:120px;margin-left:auto">Deluxe 1 – 19</span><span class="input" style="width:70px">+ 0</span></div>
<div class="flex" style="margin-top:10px;justify-content:flex-end">${B('Hủy', 'sm')}${B('Điền 8 ô', 'sm p')}</div></div>`,
    d5foot('● 2 dòng mới chưa lưu · 8 ô thiếu giá'), { tab: 2, miss: 8 }),
});

// W32 Dán từ Excel có ô lỗi
S.W32 = bg24({
  overlay: d5(dhead('Phòng nghỉ tiêu chuẩn', { badge: ind('Chưa lưu', 'a') }),
    `<div class="banner e" style="margin-bottom:6px;padding:6px 10px"><span class="ico e">!</span><div class="small" style="flex:1"><b>Đã dán 3 dòng, còn 2 lỗi phải sửa trước khi lưu.</b> Các ô lỗi được tô đỏ; ô đúng đã nhận giá.</div></div>` + gridBar() +
    sheet(ROWS.concat([
      ['Deluxe Lake View', '1 – 19', 'Phòng/đêm', ['2.100.000', '2.300.000', '2.750.000', '1.850.000'], '0', '350.000', '0', { cls: { h: 'imp', k: 'imp', c: 'imp', 0: 'imp', 1: 'imp', 2: 'imp', 3: 'imp' } }],
      ['Deluxe Lake View', '≥ 20', 'Phòng/đêm', ['2.000.000', '2.2OO.000', '2.650.000', '1.750.000'], '0', '350.000', '0', { cls: { 0: 'imp', 1: 'bad', 2: 'imp', 3: 'imp' }, err: 'Cột Cao điểm cuối tuần: “2.2OO.000” không phải số (chữ O thay số 0).' }],
      ['Superior', '1 – 19', 'Phòng/đêm', ['1.700.000', '1.900.000', '2.250.000', '1.500.000'], '0', '350.000', '0', { cls: { h: 'bad', k: 'bad', c: 'bad' }, err: 'Trùng tổ hợp Superior · 1 – 19 · Phòng/đêm với dòng 1. Sửa hạng phòng hoặc số khách, hoặc xóa một dòng.' }],
    ])), d5foot('● 3 dòng mới chưa lưu · 2 lỗi'), { tab: 2 }),
});

// W33 Mở rộng dòng: phụ thu và quy tắc kết hợp
const EXT = `<tr><td></td><td colspan="11" style="background:#f8fafc;padding:8px 10px">
<div class="flex" style="align-items:flex-start;gap:16px"><div style="flex:1.4"><div class="sec" style="margin-top:0">Phụ thu lễ Tết</div>
<table style="border:1px solid #e5e7eb"><tr><th>Ngày</th><th>Mức</th><th>Căn cứ</th><th>Áp dụng cho</th><th>Kết hợp</th></tr>
<tr><td>24/12/2025</td><td>1.200.000</td><td>Mỗi khách</td><td>Người lớn, trẻ em 50%</td><td>Cộng dồn</td></tr>
<tr><td>31/12/2025</td><td>1.500.000</td><td>Mỗi khách</td><td>Người lớn, trẻ em 50%</td><td>Cộng dồn</td></tr></table><span class="lnk small">+ Thêm ngày</span></div>
<div style="flex:1">${f('Phụ thu phòng đơn', 'Không áp dụng · giá đã tính theo phòng', { cls: 'sel' })}${f('Giá cơ sở cho phụ thu theo tỷ lệ', 'Giá mùa của dòng', { cls: 'sel' })}</div>
<div style="flex:1">${f('Điều kiện áp dụng', 'Lưu trú tối thiểu 2 đêm vào cuối tuần mùa Cao điểm', { cls: 'area' })}${f('Quy tắc kết hợp', 'Mùa Tết thay thế giá thường; phụ thu lễ cộng thêm', { cls: 'sel' })}</div></div></td></tr>`;
S.W33 = bg24({
  overlay: d5(dhead('Phòng nghỉ tiêu chuẩn'), gridBar() + sheet([Object.assign([...ROWS[0]], { 6: '2', 7: { ext: EXT } })].concat(ROWS.slice(1))).replace('▸ 2 khoản', '▾ 2 khoản'), d5foot(), { tab: 2 }),
});

// W34 Hộp thoại nhập file Excel
S.W34 = bg24({
  overlay: d5(dhead('Phòng nghỉ tiêu chuẩn'), gridBar() + sheet(ROWS), d5foot(), { tab: 2 }) +
    `<div class="modal" style="width:560px"><div class="mh">Nhập bảng giá từ file Excel</div><div class="mb">
<div class="small muted" style="margin-bottom:8px">Dùng file mẫu của hợp đồng LH-2025/HĐ-07: cột là 4 cột giá theo mùa và 2 nhóm tuổi trẻ em. <span class="lnk">Tải file mẫu</span></div>
<div class="file">📗 Bang-gia-Lotus-2026.xlsx <span class="muted">· 18 KB · 7 dòng</span><span class="ml muted">✕</span></div>
<div class="sec">Khi dòng trong file trùng tổ hợp với dòng đã có</div>
<div class="flex small" style="margin-bottom:4px"><span class="rd on"></span>Cập nhật giá của dòng đã có, thêm dòng mới</div>
<div class="flex small"><span class="rd"></span>Thay toàn bộ bảng giá của dịch vụ trong hợp đồng này</div></div>
<div class="mf">${B('Hủy')}${B('Xem trước', 'p')}</div></div>`,
});

// W35 Xem trước dữ liệu nhập
S.W35 = bg24({
  overlay: d5(dhead('Phòng nghỉ tiêu chuẩn'), gridBar() + sheet(ROWS), d5foot(), { tab: 2 }) +
    `<div class="modal" style="width:760px"><div class="mh">Xem trước · Bang-gia-Lotus-2026.xlsx</div><div class="mb">
<div class="flex" style="margin-bottom:8px">${ind('4 cập nhật', 'b')}${ind('2 dòng mới', 'g')}${ind('1 dòng lỗi', 'r')}<span class="ml muted small">Chỉ dòng hợp lệ được đưa vào bảng. Chưa lưu cho tới khi bạn bấm Lưu.</span></div>
<div class="tbl"><table><tr><th>Dòng file</th><th>Hạng phòng · số khách</th><th>Kết quả</th><th>Chi tiết</th></tr>
<tr><td>2–5</td><td>Superior, Deluxe · 1 – 19, ≥ 20</td><td>${ind('Cập nhật', 'b')}</td><td class="small">Đổi 6 ô giá, ví dụ Superior 1 – 19 Cao điểm NT 1.650.000 → 1.700.000</td></tr>
<tr><td>6–7</td><td>Deluxe Lake View · 1 – 19, ≥ 20</td><td>${ind('Mới', 'g')}</td><td class="small">8 ô giá, 4 ô trẻ em</td></tr>
<tr class="bad"><td>8</td><td>Junior Suite · 1 – 19</td><td>${ind('Lỗi', 'r')}</td><td class="small">Cột “Cao diem NT” không khớp mùa nào của hợp đồng. Sửa tiêu đề cột theo file mẫu.</td></tr></table></div></div>
<div class="mf"><span class="lnk small" style="margin-right:auto">Tải danh sách dòng lỗi</span>${B('Quay lại')}${B('Đưa 6 dòng hợp lệ vào bảng', 'p')}</div></div>`,
});

// W36 Sau khi đưa dữ liệu nhập vào bảng
const IMPR = ROWS.map((r, i) => { const n = [...r]; n[3] = [...r[3]]; if (i < 2) { n[3][0] = i ? '1.600.000' : '1.700.000'; n[3][2] = i ? '2.150.000' : '2.250.000'; n[7] = { cls: { 0: 'imp', 2: 'imp' } }; } if (i === 2) { n[3][0] = '2.000.000'; n[7] = { cls: { 0: 'imp' } }; } if (i === 3) { n[3][0] = '1.900.000'; n[7] = { cls: { 0: 'imp' } }; } return n; });
S.W36 = bg24({
  overlay: d5(dhead('Phòng nghỉ tiêu chuẩn', { badge: ind('Chưa lưu', 'a') }),
    `<div class="banner s" style="margin-bottom:6px;padding:6px 10px"><span class="ico ok">✓</span><div class="small" style="flex:1">Đã đưa 6 dòng từ file vào bảng: 4 cập nhật, 2 mới (tô xanh). 1 dòng lỗi bị bỏ qua. Kiểm tra rồi bấm <b>Lưu</b>.</div></div>` + gridBar() +
    sheet(IMPR.concat([
      ['Deluxe Lake View', '1 – 19', 'Phòng/đêm', ['2.100.000', '2.300.000', '2.750.000', '1.850.000'], '0', '350.000', '0', { cls: { h: 'imp', k: 'imp', c: 'imp', 0: 'imp', 1: 'imp', 2: 'imp', 3: 'imp', e: 'imp', t: 'imp' } }],
      ['Deluxe Lake View', '≥ 20', 'Phòng/đêm', ['2.000.000', '2.200.000', '2.650.000', '1.750.000'], '0', '350.000', '0', { cls: { h: 'imp', k: 'imp', c: 'imp', 0: 'imp', 1: 'imp', 2: 'imp', 3: 'imp', e: 'imp', t: 'imp' } }],
    ])), d5foot('● 6 dòng thay đổi chưa lưu'), { tab: 2 }),
});

// W37 Đóng khi còn thay đổi chưa lưu
S.W37 = bg24({
  overlay: d5(dhead('Phòng nghỉ tiêu chuẩn', { badge: ind('Chưa lưu', 'a') }), gridBar() + sheet(IMPR), d5foot('● 6 dòng thay đổi chưa lưu'), { tab: 2 }) +
    modal('Đóng khi chưa lưu?', '<div class="small">Phòng nghỉ tiêu chuẩn có 6 dòng giá thay đổi chưa lưu ở tab Bảng giá và phụ thu. Nếu đóng, các thay đổi này sẽ mất.</div>', B('Ở lại') + B('Bỏ thay đổi', 'd') + B('Lưu và đóng', 'p'), 460).replace('<div class="overlay"></div>', ''),
});

// W38 Sau khi lưu: ở lại bảng trượt
S.W38 = bg24({
  overlay: d5(dhead('Phòng nghỉ tiêu chuẩn'), gridBar() + sheet(IMPR.map(r => { const n = [...r]; n[7] = {}; return n; }).concat([
    ['Deluxe Lake View', '1 – 19', 'Phòng/đêm', ['2.100.000', '2.300.000', '2.750.000', '1.850.000'], '0', '350.000', '0'],
    ['Deluxe Lake View', '≥ 20', 'Phòng/đêm', ['2.000.000', '2.200.000', '2.650.000', '1.750.000'], '0', '350.000', '0']])),
  d5foot('Đã lưu 11/11/2026 11:05 · Trần Minh Anh'), { tab: 2 }) + toast('Đã lưu Phòng nghỉ tiêu chuẩn · 6 dòng giá. Báo giá và Booking đã lưu không đổi.', 'Dịch vụ tiếp theo ›'),
});

// W39 Đổi hợp đồng trong bảng trượt khi chưa lưu
S.W39 = bg24({
  overlay: d5(dhead('Phòng nghỉ tiêu chuẩn', { badge: ind('Chưa lưu', 'a'), ctOpen: true }), gridBar() + sheet(IMPR), d5foot('● 6 dòng thay đổi chưa lưu'), { tab: 2 }) +
    modal('Lưu trước khi chuyển sang LH-2024/HĐ-05?', '<div class="small">Bảng giá của LH-2025/HĐ-07 có 6 dòng thay đổi chưa lưu. Mỗi hợp đồng có bảng giá riêng; hãy lưu hoặc bỏ thay đổi trước khi chuyển.</div>', B('Ở lại') + B('Bỏ thay đổi và chuyển', 'd') + B('Lưu và chuyển', 'p'), 500).replace('<div class="overlay"></div>', ''),
});

// W40 Hộp thoại nhân bản dịch vụ
S.W40 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 3, todo: [L.TODO_RENEW] }) + svBar() + svTable(SVK),
  overlay: modal('Nhân bản Phòng nghỉ tiêu chuẩn',
    `${f('Tên dịch vụ mới', 'Phòng Deluxe hướng hồ', { req: true, cls: 'focus' })}
<div class="sec">Sao chép</div>
<div class="flex small" style="margin-bottom:5px"><span class="cb on"></span>Loại, đơn vị tính, mô tả</div>
<div class="flex small" style="margin-bottom:5px"><span class="cb on"></span>Dịch vụ bao gồm (4) và không bao gồm (3)</div>
<div class="flex small" style="margin-bottom:5px"><span class="cb on"></span>Bảng giá và phụ thu</div>
<div style="margin-left:22px" class="small"><div class="flex" style="margin-bottom:4px"><span class="rd on"></span>Chỉ hợp đồng đang chọn LH-2025/HĐ-07 · 4 dòng giá</div><div class="flex"><span class="rd"></span>Mọi hợp đồng · 3 hợp đồng, 11 dòng giá</div></div>
<div class="hint" style="margin-top:8px">Dịch vụ mới được tạo ở trạng thái Cho phép sử dụng và mở ngay để sửa hạng phòng, giá.</div>`,
    B('Hủy') + B('Nhân bản và mở', 'p'), 520),
});

// W41 Sau khi nhân bản
S.W41 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 3, todo: [L.TODO_RENEW], meta: LOTUS_META({ svcOn: 6 }).replace('<b>6</b> dịch vụ', '<b>7</b> dịch vụ') }) + svBar() + svTable(SVK),
  overlay: d5(dhead('Phòng Deluxe hướng hồ', { pos: '7 / 7' }), `<div class="banner s" style="margin-bottom:6px;padding:6px 10px"><span class="ico ok">✓</span><div class="small">Đã tạo từ <b>Phòng nghỉ tiêu chuẩn</b>, sao chép 4 dòng giá của LH-2025/HĐ-07. Sửa hạng phòng và giá rồi lưu.</div></div>` + gridBar() + sheet(ROWS.map(r => { const n = [...r]; n[7] = { cls: { h: 'cur' } }; return n; })), d5foot(), { tab: 2 }),
});

// W42 Xóa dịch vụ chưa dùng
S.W42 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 3, todo: [L.TODO_RENEW] }) + svBar() + svTable(SVK),
  overlay: modal('Xóa Phòng Family (connecting)?', '<div class="small">Dịch vụ chưa được dùng trong Tour mẫu, hành trình yêu cầu Tour, báo giá, Booking hay hồ sơ Tour nên có thể xóa, cùng thông tin bao gồm, không bao gồm. Dịch vụ chưa có dòng giá nào. Không hoàn tác được.</div>', B('Giữ lại') + B('Xóa dịch vụ', 'dp'), 480),
});

// W42a Menu ⋯ của dịch vụ đã dùng
S.W42a = page({
  last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ tab: 3, todo: [L.TODO_RENEW] }) + svBar() + svTable(SVK) +
    `<div class="menu" style="right:30px;top:300px;width:400px"><div class="mi">Nhân bản dịch vụ</div><div class="mi" style="color:#9ca3af;align-items:flex-start">🗑 Xóa dịch vụ<div class="small" style="margin-left:auto;text-align:right;color:#6b7280">Đã dùng trong 2 Tour mẫu, 5 hành trình yêu cầu Tour,<br>11 báo giá, 3 Booking, 3 hồ sơ Tour.<br>Tắt Cho phép sử dụng thay cho xóa.</div></div></div>`,
});

// W43 Kinh doanh xem hồ sơ NCC
S.W43 = page({
  user: 'kd', last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ user: 'kd', todo: [] }).replace('<span class="code">', '<span class="code">').replace('</span><div class="actions">', '</span><span class="muted small">Chỉ xem</span><div class="actions">') + `<div style="margin-top:10px">${formGeneral({ ro: true })}</div>`,
});

// W44 Kinh doanh xem hợp đồng và chính sách
S.W44 = page({
  user: 'kd', last: 'Khách sạn Lotus Hanoi',
  body: nhdr({ user: 'kd', tab: 2, todo: [] }) + ctTitle(true) + ctTable(['cur', 'old', 'old2'], { ro: true }).replace(/<th>Thanh toán<\/th>/, '').replace(/<td class="small">(Cọc 30% · 2 đợt|Thanh toán 1 đợt)<\/td>/g, ''),
  overlay: dw('md', `Hợp đồng LH-2025/HĐ-07 ${ind('Sắp hết hạn', 'a')} <span class="muted small" style="font-weight:400">Chỉ xem</span>`, secHuy({ ro: true }) + secTE({ ro: true }), B('Đóng'), 'Khách sạn Lotus Hanoi · 01/12/2025 – 30/11/2026 · VND',
    `<div class="secnav">${['Hợp đồng', 'Mùa giá', 'Chính sách đổi hủy', 'Chính sách trẻ em'].map((x, i) => `<span class="${i === 2 ? 'on' : ''}">${x}</span>`).join('')}</div>`),
});

// W45 Lỗi tải hồ sơ
S.W45 = page({
  last: 'Khách sạn Lotus Hanoi',
  body: `<div class="hdr" style="padding-bottom:10px"><div class="r1"><span class="skel" style="width:260px;height:20px"></span></div><div class="meta"><span class="skel" style="width:520px"></span></div></div>
<div class="card" style="margin-top:10px"><div class="empty"><div class="big">Không tải được hồ sơ nhà cung cấp</div><div style="margin-bottom:12px">Kết nối bị gián đoạn. Dữ liệu chưa bị thay đổi.</div>${B('Thử lại', 'p')} ${B('Về danh sách NCC')}</div></div>`,
});

module.exports = S;
