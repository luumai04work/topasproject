// Wireframe QT05 · Danh mục dùng chung. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
// Hôm nay trên hình: 12/11/2026. Dữ liệu minh họa khớp RSD DH01, DH03, DH06, KD03-KD04, KD06, KD08, KT01.
const { page, drawer, modal, f, B, bd } = require('./lib');
const S = {};
const CSS = `.qt{display:grid;grid-template-columns:232px 1fr;gap:12px;align-items:start}
.nav{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:6px 0 8px;height:686px;overflow:hidden}
.nav .nh{padding:7px 12px 2px;font-size:10px;text-transform:uppercase;letter-spacing:.4px;color:#6b7280;font-weight:700;display:flex;justify-content:space-between}
.nav .nh span{text-transform:none;font-weight:500;letter-spacing:0;color:#9ca3af}
.nav .ni{display:flex;align-items:center;gap:6px;padding:3px 12px;font-size:12.3px;color:#374151;line-height:17px}
.nav .ni .c{margin-left:auto;color:#6b7280;font-size:11px}
.nav .ni.on{background:#eff6ff;color:#1d4ed8;font-weight:600;box-shadow:inset 3px 0 #2563eb}
.nav .ni .lk{color:#9ca3af;font-size:10px}
.nav .ni .wn{background:#fef3c7;color:#92400e;border-radius:8px;padding:0 5px;font-size:10.5px;font-weight:700}
.rp{padding:12px 14px;height:686px;overflow:hidden;position:relative}
.gh{display:flex;align-items:flex-start;gap:10px}
.gh h2{margin:0;font-size:16px}
.gsub{color:#6b7280;font-size:11.8px;margin-top:2px}
.tbl td{font-size:12.3px}
.hd{color:#cbd5e1;width:14px;padding-right:0!important;font-size:12px;letter-spacing:-2px}
.tag{display:inline-flex;align-items:center;gap:4px;background:#eef2ff;color:#3730a3;border-radius:4px;padding:0 6px;font-size:11.5px;line-height:19px;margin:1px 3px 1px 0;white-space:nowrap}
.tag.x::after{content:"✕";color:#6366f1;font-size:10px}
.ein{height:26px;border:1px solid #93c5fd;border-radius:5px;padding:0 7px;display:flex;align-items:center;background:#fff;white-space:nowrap;overflow:hidden;font-size:12.3px}
.ein.sel::after{content:"▾";margin-left:auto;color:#6b7280;padding-left:6px}
.ein.bad{border-color:#dc2626;background:#fff7f7}
.ein.ph{color:#9ca3af}
.ein.gy{color:#9ca3af;font-style:italic}
.ein.warn{border-color:#f59e0b;background:#fffbeb}
.ein.ro{border-style:dashed;border-color:#d1d5db;background:#f9fafb;color:#374151}
tr.ed td{background:#f8fbff;border-bottom:1px solid #bfdbfe;border-top:1px solid #bfdbfe}
tr.edx td{background:#f8fbff;padding-top:0}
.rowact{display:flex;gap:6px;justify-content:flex-end}
.sw.lock{opacity:.45}
.sys{display:inline-block;font-size:10.5px;font-weight:600;border-radius:4px;padding:0 5px;margin-left:5px;line-height:16px;background:#f1f5f9;color:#475569;border:1px solid #e2e8f0}
.pop{position:absolute;background:#111827;color:#fff;border-radius:6px;padding:7px 10px;font-size:11.5px;line-height:1.45;box-shadow:0 8px 20px rgba(0,0,0,.25);z-index:6}
.pop::after{content:"";position:absolute;top:-5px;right:22px;border:5px solid transparent;border-top:none;border-bottom-color:#111827}
.used{color:#1d4ed8;white-space:nowrap}
.mono{font-family:Consolas,monospace;font-size:12px}
.lockcol{color:#6b7280}
.rate td.num{font-variant-numeric:tabular-nums}
.paste{border:1px solid #d1d5db;border-radius:6px;background:#f9fafb;font-family:Consolas,monospace;font-size:11.5px;padding:6px 9px;white-space:pre;line-height:1.5;color:#374151}
.tier td{padding:4px 8px}
.ex{background:#f0f9ff;border:1px solid #bae6fd;border-radius:6px;padding:6px 10px;font-size:12px;color:#0c4a6e}
.res .li{display:flex;align-items:center;gap:10px;padding:7px 10px;border-bottom:1px solid #f1f5f9}
.res .grpn{width:200px;color:#6b7280;font-size:12px}
mark{background:#fef08a;padding:0 1px;border-radius:2px}
`;
const P = o => page(Object.assign({ css: CSS }, o));
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const sw = (on, lock) => `<span class="sw ${on ? 'on' : ''} ${lock ? 'lock' : ''}"><i></i></span>`;
const tag = (t, x) => `<span class="tag ${x ? 'x' : ''}">${t}</span>`;
const sys = (t = 'Hệ thống') => `<span class="sys">${t}</span>`;
const ein = (v, cls = '', w = '') => `<div class="ein ${cls}" ${w ? `style="width:${w}px"` : ''}>${v}</div>`;

// ---------- Nhóm danh mục: [khóa, tên, số giá trị đang dùng, vai trò sửa] ----------
// Vai trò sửa (ngoài Quản trị hệ thống): dh Điều hành, kd Kinh doanh, kt Kế toán, qt chỉ Quản trị.
const SECS = [
  ['Dịch vụ & NCC', 'Điều hành', [['ldv', 'Loại dịch vụ', 13], ['dvt', 'Đơn vị tính', 9], ['hp', 'Hạng phòng', 8], ['the', 'Thẻ bao gồm, không bao gồm', 46], ['dd', 'Địa điểm', 24]], 'dh'],
  ['Nhân sự', 'Điều hành', [['ncv', 'Nhóm công việc', 5], ['nn', 'Ngôn ngữ', 12]], 'dh'],
  ['Khách & bán hàng', 'Kinh doanh', [['lt', 'Loại Tour', 5], ['qg', 'Quốc gia', 249], ['nqg', 'Nhóm quốc gia', 6], ['nk', 'Nguồn khách', 7], ['kq', 'Kết quả chăm sóc', 5], ['lhy', 'Lý do hủy yêu cầu Tour', 6], ['lhb', 'Lý do hủy Booking', 5]], 'kd'],
  ['Tài chính', 'Kế toán', [['lte', 'Loại tiền', 6], ['tg', 'Tỷ giá', '12/11'], ['pt', 'Phương thức thanh toán', 4], ['nh', 'Ngân hàng', 18]], 'kt'],
  ['Giá & chính sách', 'Quản trị', [['hm', 'Hạng mục dịch vụ & Markup', 7], ['cs', 'Chính sách hoàn hủy Booking', 3], ['ts', 'Tham số chung', 14]], 'qt'],
];
const OWNER = {}; SECS.forEach(s => s[2].forEach(g => { OWNER[g[0]] = s[3]; }));
const canEdit = (g, user) => user === 'qt' || OWNER[g] === user;
function nav(active, user, o = {}) {
  return `<div class="nav">${SECS.map(([n, who, gs]) => `<div class="nh">${n}<span>${who}</span></div>` + gs.map(([k, name, c]) => {
    let cnt = o.cnt && o.cnt[k] !== undefined ? o.cnt[k] : c;
    const lock = canEdit(k, user) ? '' : '<span class="lk">🔒</span>';
    const cc = k === 'tg' && o.tgMiss ? '<span class="wn">!</span>' : `<span class="c">${cnt}</span>`;
    return `<div class="ni ${k === active ? 'on' : ''}">${name}${lock}${cc}</div>`;
  }).join('')).join('')}</div>`;
}
const TITLE = (q = '') => `<div class="ttl" style="margin-bottom:10px"><h1>Danh mục dùng chung</h1><span class="muted">Giá trị dùng chung cho các màn · giá trị đã dùng thì tắt, không xóa</span>
<div class="ml input ${q ? 'focus' : 'ph'}" style="width:300px">🔍&nbsp; ${q || 'Tìm giá trị trong mọi nhóm'}</div></div>`;
const shell = ({ user = 'qt', g = 'ldv', body = '', overlay = '', q = '', nv = {} }) => P({ user, overlay, body: TITLE(q) + `<div class="qt">${nav(g, user, nv)}<div class="card rp">${body}</div></div>` });

const GINFO = {
  ldv: ['Loại dịch vụ', 'Điều hành, Quản trị hệ thống', 'DH02, DH03, DH05, DH01, DH04, KD06'],
  hp: ['Hạng phòng', 'Điều hành, Quản trị hệ thống', 'DH05.2, KD06.1, KD06.3'],
  dd: ['Địa điểm', 'Điều hành, Quản trị hệ thống', 'DH02, DH03, DH04, DH06, KD01, KD02'],
  the: ['Thẻ bao gồm, không bao gồm', 'Điều hành, Quản trị hệ thống', 'DH05.1 (gợi ý), proposal KD06 (tên tiếng Anh)'],
  ncv: ['Nhóm công việc', 'Điều hành, Quản trị hệ thống', 'DH06, DH07, DH08.5'],
  lt: ['Loại Tour', 'Kinh doanh, Quản trị hệ thống', 'KD01, KD02, KD06, KD08, KD10, DH01'],
  qg: ['Quốc gia', 'Kinh doanh, Quản trị hệ thống', 'KD03, KD04, KD10'],
  lhy: ['Lý do hủy yêu cầu Tour', 'Kinh doanh, Quản trị hệ thống', 'KD06 (hủy yêu cầu), KD08 (tự ghi)'],
  lte: ['Loại tiền', 'Kế toán, Quản trị hệ thống', 'DH03, DH05, DH08.3, KD06, KD08, KT01, DH08.8'],
  tg: ['Tỷ giá', 'Kế toán, Quản trị hệ thống', 'KD06.3 (tính giá), DH08.8 (quyết toán), KT01 (≈ VND)'],
  hm: ['Hạng mục dịch vụ & Markup', 'Quản trị hệ thống', 'KD06.3 (Markup theo hạng mục)'],
  cs: ['Chính sách hoàn hủy Booking', 'Quản trị hệ thống', 'KD08 (chụp khi tạo Booking), KT01 (điều chỉnh sau hủy)'],
  ts: ['Tham số chung', 'Quản trị hệ thống', 'Xem cột Dùng ở'],
};
function ghead(g, user, o = {}) {
  const [n, who, where] = GINFO[g];
  const ed = canEdit(g, user);
  const btns = o.btns !== undefined ? o.btns : ed ? (o.many ? B('Thêm nhiều') : '') + B(o.add || '+ Thêm giá trị', 'p') : '';
  return `<div class="gh"><div><h2>${n}</h2><div class="gsub">Quản lý: ${who} · Dùng ở: ${where}</div></div><div class="ml flex">${btns}</div></div>
${!ed ? `<div class="banner i" style="margin-top:8px;padding:6px 10px"><span class="ico i">i</span><div class="small">Chỉ xem · nhóm này do ${who.replace(', Quản trị hệ thống', '')} và Quản trị hệ thống quản lý.</div></div>` : ''}`;
}
const chips = (c, act = 'on', extra = '') => `<div class="flex" style="margin:10px 0 8px">${c.map(([k, n, v]) => `<span class="chip ${k === act ? 'on' : ''}">${n} <span class="cnt">${v}</span></span>`).join('')}${extra}</div>`;
const STD = (on, off, act = 'on', extra = '') => chips([['on', 'Đang dùng', on], ['off', 'Ngừng dùng', off], ['all', 'Tất cả', on + off]], act, extra);
// cols: [tiêu đề, style]; rows: {c:[ô], on, sys, cls, used, ed(html dòng sửa), noHd}
function tbl(cols, rows, o = {}) {
  const ed = o.ed !== false;
  return `<div class="tbl"><table><tr>${ed ? '<th class="hd"></th>' : ''}${cols.map(([t, st]) => `<th style="${st || ''}">${t}</th>`).join('')}<th style="text-align:center;width:72px">Đang dùng</th>${ed ? '<th style="width:26px"></th>' : ''}</tr>
${rows.map(r => r.raw ? r.raw : `<tr class="${r.cls || ''} ${r.on === 0 ? 'off' : ''}">${ed ? '<td class="hd">⋮⋮</td>' : ''}${r.c.map(x => `<td>${x}</td>`).join('')}<td style="text-align:center">${ed ? sw(r.on !== 0, r.sys || r.lock) : (r.on === 0 ? '<span class="muted small">Ngừng dùng</span>' : '<span class="small" style="color:#166534">Đang dùng</span>')}</td>${ed ? `<td class="muted">${r.sys ? '' : '⋯'}</td>` : ''}</tr>`).join('')}</table></div>`;
}
const toast = (t, undo) => `<div class="toast">${t}${undo ? '<a>Hoàn tác</a>' : ''}</div>`;

// ---------- Loại dịch vụ ----------
const LDV = [
  ['Khách sạn', 'Lưu trú', 'Phòng/đêm', 1, 8, '42 NCC · 318 dịch vụ'],
  ['Du thuyền', 'Lưu trú', 'Cabin/đêm', 1, 6, '5 NCC · 22 dịch vụ'],
  ['Homestay', 'Lưu trú', 'Phòng/đêm', 1, 4, '3 NCC · 9 dịch vụ'],
  ['Vận chuyển đường bộ', 'Di chuyển', 'Xe/ngày', 0, 5, '11 NCC · 64 dịch vụ'],
  ['Vé máy bay nội địa', 'Vé máy bay', 'Vé', 0, 3, '4 NCC · 12 dịch vụ'],
  ['Tàu hỏa', 'Di chuyển', 'Vé', 0, 2, '2 NCC · 6 dịch vụ'],
  ['Hướng dẫn viên', 'Hướng dẫn viên', 'Đoàn/ngày', 0, 4, '6 NCC · 15 dịch vụ'],
  ['Nhà hàng', 'Ăn uống', 'Suất', 0, 4, '27 NCC · 96 dịch vụ'],
  ['Vé tham quan', 'Tham quan', 'Vé', 0, 3, '19 NCC · 41 dịch vụ'],
  ['Show diễn', 'Tham quan', 'Vé', 0, 2, '4 NCC · 7 dịch vụ'],
  ['Thuyền tham quan', 'Tham quan', 'Chuyến', 0, 3, '8 NCC · 13 dịch vụ'],
  ['Hoạt động trải nghiệm', 'Tham quan', 'Khách', 0, 2, ''],
  ['Visa và dịch vụ khác', 'Khác', 'Lần', 0, 0, '2 NCC · 3 dịch vụ'],
  ['Xe điện', 'Di chuyển', 'Chuyến', 0, 0, '1 NCC · 2 dịch vụ', 'off'],
];
const LDV_COLS = [['Loại dịch vụ ▲'], ['Hạng mục Markup'], ['Đơn vị tính mặc định'], ['Hạng phòng', 'text-align:center'], ['Thẻ gợi ý', 'text-align:right'], ['Đang dùng ở']];
const ldvRow = (r, o = {}) => ({ c: [`<b>${r[0]}</b>`, r[1], r[2], `<div style="text-align:center">${r[3] ? '✓' : '<span class="muted">—</span>'}</div>`, `<div class="num">${r[4]}</div>`, r[5] ? `<span class="used">${r[5]}</span>` : '<span class="muted">Chưa dùng</span>'], on: r[6] === 'off' ? 0 : 1, cls: o.cls });
const ldvBody = (user, o = {}) => ghead('ldv', user, { many: false }) + STD(13, 1, 'all') + tbl(LDV_COLS, (o.rows || LDV.map(r => ldvRow(r))), { ed: canEdit('ldv', user) });

S.W01 = shell({ user: 'qt', g: 'ldv', body: ldvBody('qt') });

// W02 Tìm trong mọi nhóm
S.W02 = shell({ user: 'qt', g: '', q: 'phòng', body: `<div class="gh"><div><h2>Kết quả tìm “phòng”</h2><div class="gsub">5 kết quả trong 3 nhóm · tìm theo tên giá trị và tên nhóm, không phân biệt hoa thường và dấu</div></div><div class="ml">${B('Xóa tìm kiếm', 'lk')}</div></div>
<div class="tbl res" style="margin-top:12px">
<div class="li" style="background:#f9fafb;font-size:11.5px;color:#6b7280;font-weight:600"><span style="flex:1">Giá trị</span><span class="grpn">Nhóm</span><span style="width:110px">Tình trạng</span></div>
<div class="li"><span style="flex:1"><b>Nhóm <mark>Hạng phòng</mark></b> <span class="muted small">· 8 giá trị đang dùng</span></span><span class="grpn">Tên nhóm</span><span style="width:110px"></span></div>
<div class="li"><span style="flex:1"><mark>Phòng</mark>/đêm <span class="muted small">· Khách sạn, Homestay · tính theo đêm</span></span><span class="grpn">Đơn vị tính</span><span style="width:110px;color:#166534">Đang dùng</span></div>
<div class="li"><span style="flex:1"><mark>Phòng</mark>/ngày <span class="muted small">· day-use</span></span><span class="grpn">Đơn vị tính</span><span style="width:110px;color:#166534">Đang dùng</span></div>
<div class="li"><span style="flex:1">Phụ thu <mark>phòng</mark> đơn <span class="muted small">· Khách sạn · Không bao gồm</span></span><span class="grpn">Thẻ bao gồm, không bao gồm</span><span style="width:110px;color:#166534">Đang dùng</span></div>
<div class="li"><span style="flex:1">Dọn <mark>phòng</mark> hằng ngày <span class="muted small">· Homestay · Bao gồm</span></span><span class="grpn">Thẻ bao gồm, không bao gồm</span><span style="width:110px" class="muted">Ngừng dùng</span></div>
</div><div class="muted small" style="margin-top:8px">Bấm một kết quả để mở nhóm đó, dòng giá trị được tô sáng.</div>` });

// W03 Kế toán xem nhóm Loại dịch vụ (chỉ xem)
S.W03 = shell({ user: 'kt', g: 'ldv', body: ldvBody('kt') });

// W04 Lỗi tải nhóm
S.W04 = shell({ user: 'qt', g: 'hp', body: ghead('hp', 'qt') + STD('–', '–') + `<div class="tbl"><div class="empty"><div class="big" style="color:#b91c1c">Không tải được nhóm Hạng phòng</div>Kết nối tới máy chủ bị gián đoạn. Các nhóm khác vẫn mở được.<div style="margin-top:12px">${B('Thử lại', 'p')}</div></div></div>`.replace(/<span class="cnt">–<\/span>/g, '<span class="cnt">–</span>') });

// ---------- Hạng phòng ----------
const HP = [
  ['Standard', 'Phòng tiêu chuẩn', '38 dòng giá'], ['Superior', 'Cao hơn Standard, thường có cửa sổ', '61 dòng giá'], ['Deluxe', 'Diện tích lớn hơn, view đẹp', '74 dòng giá'],
  ['Junior Suite', 'Có khu tiếp khách nhỏ', '19 dòng giá'], ['Suite', 'Phòng khách riêng', '12 dòng giá'], ['Family', 'Cho 3–4 người', '15 dòng giá'],
  ['Cabin Deluxe Balcony', 'Du thuyền, có ban công', '9 dòng giá'], ['Cabin Suite', 'Du thuyền, cabin lớn nhất', '6 dòng giá'],
];
const HP_COLS = [['Hạng phòng'], ['Mô tả'], ['Đang dùng ở']];
const hpRow = r => ({ c: [`<b>${r[0]}</b>`, `<span class="muted">${r[1]}</span>`, r[2] ? `<span class="used">${r[2]}</span>` : '<span class="muted">Chưa dùng</span>'], on: 1 });
const newRow = (cells, act = '') => `<tr class="ed"><td class="hd">⋮⋮</td>${cells.map(x => `<td>${x}</td>`).join('')}<td style="text-align:center">${sw(1)}</td><td></td></tr>
<tr class="edx"><td></td><td colspan="${cells.length + 2}"><div class="rowact" style="justify-content:flex-start;gap:10px">${act}</div></td></tr>`;
const ROWACT = (hint = 'Enter: lưu và thêm dòng mới · Esc: hủy') => `${B('Lưu', 'p sm')}${B('Hủy', 'sm')}<span class="muted small">${hint}</span>`;

S.W05 = shell({ user: 'dh', g: 'hp', body: ghead('hp', 'dh') + STD(8, 0) + tbl(HP_COLS, [
  { raw: newRow([ein('Premier Deluxe', '', 200) + '<div class="hint">Thêm vào cuối danh sách</div>', ein('Deluxe tầng cao, có bồn tắm', '', 260), '<span class="muted small">Chưa dùng</span>'], ROWACT()) },
  ...HP.map(hpRow)]) });

S.W06 = shell({ user: 'dh', g: 'hp', nv: { cnt: { hp: 9 } }, body: ghead('hp', 'dh') + STD(9, 0) + tbl(HP_COLS, [
  { raw: newRow([ein('Tên hạng phòng', 'ph', 200), ein('Mô tả', 'ph', 260), '<span class="muted small">Chưa dùng</span>'], ROWACT()) },
  ...HP.map(hpRow), Object.assign(hpRow(['Premier Deluxe', 'Deluxe tầng cao, có bồn tắm', '']), { cls: 'new' })]) + toast('Đã thêm Premier Deluxe vào Hạng phòng') });

// W07 Thêm nhiều (Địa điểm)
const DD = [['Toàn quốc', 1], ['Hà Nội'], ['Hạ Long'], ['Ninh Bình'], ['Sa Pa'], ['Huế'], ['Đà Nẵng'], ['Hội An'], ['Nha Trang'], ['Đà Lạt'], ['TP. Hồ Chí Minh'], ['Cần Thơ']];
const ddBody = (o = {}) => ghead('dd', 'dh', { many: true }) + STD(24, 0) + tbl([['Địa điểm'], ['Đang dùng ở']], DD.map(r => ({ c: [`<b>${r[0]}</b>${r[1] ? sys() : ''}`, r[1] ? '<span class="used">NCC phục vụ mọi nơi, nhân sự Toàn quốc</span>' : `<span class="used">${(r[0].length * 3) % 17 + 2} NCC · ${(r[0].length * 5) % 9 + 1} Tour mẫu</span>`], on: 1, sys: r[1] })));
S.W07 = shell({ user: 'dh', g: 'dd', body: ddBody(), overlay: modal('Thêm nhiều địa điểm', `<div class="small" style="margin-bottom:6px">Dán hoặc gõ mỗi giá trị một dòng (tối đa 200 dòng). Giá trị mới ở trạng thái Đang dùng, thêm vào cuối danh sách.</div>
<div class="paste" style="height:96px">Hà Giang
Cao Bằng
Ninh Bình
Phú Quốc
hà giang</div>
<div class="flex" style="margin:10px 0 6px"><span class="chip on">Sẽ thêm <span class="cnt">3</span></span><span class="chip">Bỏ qua <span class="cnt">2</span></span></div>
<div class="tbl"><table class="mini"><tr><th>Dòng</th><th>Giá trị</th><th>Kết quả</th></tr>
<tr><td>1</td><td>Hà Giang</td><td style="color:#166534">Sẽ thêm</td></tr>
<tr><td>2</td><td>Cao Bằng</td><td style="color:#166534">Sẽ thêm</td></tr>
<tr class="bad"><td>3</td><td>Ninh Bình</td><td>Bỏ qua · đã có trong nhóm</td></tr>
<tr><td>4</td><td>Phú Quốc</td><td style="color:#166534">Sẽ thêm</td></tr>
<tr class="bad"><td>5</td><td>hà giang</td><td>Bỏ qua · trùng dòng 1</td></tr></table></div>`, B('Hủy') + B('Thêm 3 giá trị', 'p'), 560) });

// W08 Sửa dòng Loại dịch vụ (Điều hành)
S.W08 = shell({ user: 'dh', g: 'ldv', body: ghead('ldv', 'dh') + STD(13, 1, 'all') + tbl(LDV_COLS, [
  ldvRow(LDV[0]), ldvRow(LDV[1]), ldvRow(LDV[2]), ldvRow(LDV[3]),
  { raw: `<tr class="ed"><td class="hd">⋮⋮</td><td>${ein('Vé máy bay nội địa', '', 170)}</td><td>${ein('Vé máy bay', 'sel', 120)}</td><td>${ein('Vé', 'sel', 100)}</td><td style="text-align:center"><span class="cb"></span></td><td class="num">3</td><td><span class="used">4 NCC · 12 dịch vụ</span></td><td style="text-align:center">${sw(1)}</td><td></td></tr>
<tr class="edx"><td></td><td colspan="8"><div class="hint" style="margin:0 0 6px">Đang dùng ở 4 NCC, 12 dịch vụ. Tên mới hiện ở mọi màn; báo giá, Booking, lần đặt đã lưu giữ tên lúc lưu. Đổi hạng mục chỉ áp cho lần tính giá sau (R04).</div><div class="rowact" style="justify-content:flex-start;gap:10px">${B('Lưu', 'p sm')}${B('Hủy', 'sm')}<span class="muted small">Enter: lưu · Esc: hủy</span></div></td></tr>` },
  ...LDV.slice(5, 13).map(r => ldvRow(r))]) });

// W09 Kéo đổi thứ tự (Lý do hủy Booking)
const LHB = [['Khách hủy chuyến', '9 Booking'], ['Khách hoãn hoặc đổi thời gian', '6 Booking'], ['Khách không thanh toán', '2 Booking'], ['Khách dừng chuyến giữa chừng', ''], ['Khác', '3 Booking', 1]];
S.W09 = shell({ user: 'kd', g: 'lhb', body: `<div class="gh"><div><h2>Lý do hủy Booking</h2><div class="gsub">Quản lý: Kinh doanh, Quản trị hệ thống · Dùng ở: KD08 (hủy Booking)</div></div><div class="ml flex">${B('Thêm nhiều')}${B('+ Thêm giá trị', 'p')}</div></div>` + STD(5, 0) + tbl([['Lý do'], ['Đang dùng ở']], [
  { c: [`<b>${LHB[0][0]}</b>`, `<span class="used">${LHB[0][1]}</span>`], on: 1 },
  { raw: `<tr style="opacity:.35"><td class="hd">⋮⋮</td><td><b>Khách hoãn hoặc đổi thời gian</b></td><td></td><td></td><td></td></tr>` },
  { raw: `<tr><td colspan="5" style="padding:0;border:none"><div style="height:3px;background:#2563eb;border-radius:2px"></div></td></tr>` },
  { c: [`<b>${LHB[2][0]}</b>`, `<span class="used">${LHB[2][1]}</span>`], on: 1 },
  { c: [`<b>${LHB[3][0]}</b>`, '<span class="muted">Chưa dùng</span>'], on: 1 },
  { c: [`<b>Khác</b>${sys()}`, `<span class="used">3 Booking</span>`], on: 1, sys: 1 }]) +
  `<div style="position:absolute;left:150px;top:205px;width:560px;background:#fff;border:1px solid #93c5fd;border-radius:6px;box-shadow:0 10px 24px rgba(0,0,0,.18);padding:7px 10px;display:flex;gap:12px;align-items:center;font-size:12.3px"><span class="hd" style="color:#2563eb">⋮⋮</span><b>Khách hoãn hoặc đổi thời gian</b><span class="used ml">6 Booking</span></div>
<div class="hint" style="margin-top:8px">Kéo ⋮⋮ để đổi thứ tự. Thứ tự này là thứ tự hiện trong ô chọn lý do ở KD08. Thả là lưu ngay.</div>` });

// W10 Lỗi trùng và thiếu (Loại dịch vụ, thêm mới)
S.W10 = shell({ user: 'dh', g: 'ldv', body: ghead('ldv', 'dh') + STD(13, 1, 'all') + tbl(LDV_COLS, [
  { raw: `<tr class="ed"><td class="hd">⋮⋮</td><td>${ein('khách  sạn', 'bad', 170)}<div class="err">Đã có “Khách sạn” trong nhóm</div></td><td>${ein('Khác', 'sel', 120)}<div class="hint" style="margin:2px 0 0"><span class="auto" style="margin:0">Mặc định</span></div></td><td>${ein('Chọn đơn vị', 'sel bad ph', 110)}<div class="err">Bắt buộc</div></td><td style="text-align:center"><span class="cb"></span></td><td class="num">0</td><td><span class="muted small">Chưa dùng</span></td><td style="text-align:center">${sw(1)}</td><td></td></tr>
<tr class="edx"><td></td><td colspan="8"><div class="rowact" style="justify-content:flex-start;gap:10px">${B('Lưu', 'p sm')}${B('Hủy', 'sm')}<span class="err" style="margin:0">2 lỗi · sửa rồi lưu lại; dữ liệu đang nhập được giữ</span></div></td></tr>` },
  ...LDV.slice(0, 11).map(r => ldvRow(r))]) });

// W11 Xung đột khi lưu
S.W11 = shell({ user: 'dh', g: 'hp', body: ghead('hp', 'dh') + STD(8, 0) + tbl(HP_COLS, [
  hpRow(HP[0]), hpRow(HP[1]),
  { raw: `<tr class="ed"><td class="hd">⋮⋮</td><td>${ein('Deluxe', '', 200)}</td><td>${ein('Diện tích từ 32 m², view thành phố', '', 280)}</td><td><span class="used">74 dòng giá</span></td><td style="text-align:center">${sw(1)}</td><td></td></tr>
<tr class="edx"><td></td><td colspan="5"><div class="banner e" style="padding:6px 10px;margin-bottom:6px"><span class="ico e">!</span><div class="small">Giá trị này vừa được <b>Đỗ Văn Khoa</b> sửa lúc 09:42 (mô tả: “Diện tích lớn hơn, view đẹp hoặc ban công”). Thay đổi của bạn chưa được lưu và vẫn ở trên dòng.</div></div><div class="rowact" style="justify-content:flex-start;gap:10px">${B('Tải bản mới', 'p sm')}${B('Hủy', 'sm')}<span class="muted small">Tải bản mới: dòng hiện bản mới, giá trị bạn đã nhập hiện dưới từng ô để nhập lại nếu vẫn cần</span></div></td></tr>` },
  ...HP.slice(3).map(hpRow)]) });

// ---------- Loại Tour (Kinh doanh) ----------
const LT = [
  ['Inbound đoàn', '15 %', 'Chuẩn 2026', 'Mẫu Inbound đoàn', '3 Tour mẫu · 64 yêu cầu · 38 Booking'],
  ['Customized riêng tư', '18 %', 'Chuẩn 2026', 'Mẫu Customized riêng tư', '4 Tour mẫu · 52 yêu cầu · 21 Booking'],
  ['MICE', '12 %', 'MICE 2026', 'Mẫu MICE', '1 Tour mẫu · 9 yêu cầu · 4 Booking'],
  ['Tour Golf', '20 %', 'Mặc định', 'Mẫu mặc định (mẫu riêng ngừng dùng)', '2 Tour mẫu · 5 yêu cầu · 2 Booking'],
  ['Tour học sinh', '10 %', 'Mặc định', 'Mẫu mặc định', '2 Tour mẫu · 4 yêu cầu · 4 Booking'],
];
const LT_COLS = [['Loại Tour'], ['Markup mặc định 🔒'], ['Chính sách hoàn hủy'], ['Mẫu checklist (DH01)'], ['Đang dùng ở']];
const ltRow = (r, o = {}) => ({ c: [`<b>${r[0]}</b>`, `<span class="lockcol">${r[1]}</span>`, `<span class="lnk">${r[2]}</span>`, `<span class="muted small">${r[3]}</span>`, `<span class="used small">${r[4]}</span>`], on: o.off ? 0 : 1, cls: o.cls || '' });
const ltBody = (o = {}) => ghead('lt', 'kd') + STD(o.on || 5, o.off || 0) + tbl(LT_COLS, LT.map((r, i) => ltRow(r, { off: o.offIdx === i }))) + `<div class="hint" style="margin-top:8px">🔒 Markup mặc định chỉ Quản trị hệ thống sửa (R10). Chính sách hoàn hủy đặt ở nhóm Chính sách hoàn hủy Booking; mẫu checklist ở DH01.</div>`;
S.W21 = shell({ user: 'kd', g: 'lt', body: ltBody() });

// W12 Tắt loại Tour đang dùng → hộp thoại
S.W12 = shell({ user: 'kd', g: 'lt', body: ltBody(), overlay: modal('Tắt sử dụng loại Tour “Tour học sinh”?', `<div class="small" style="margin-bottom:8px">Giá trị này đang được dùng ở:</div>
<div class="tbl"><table class="mini"><tr><th>Nơi dùng</th><th class="num">Số bản ghi</th></tr>
<tr><td>Tour mẫu (KD02)</td><td class="num">2</td></tr><tr><td>Yêu cầu Tour đang xử lý (KD06)</td><td class="num">1</td></tr><tr><td>Booking hiệu lực (KD08)</td><td class="num">3</td></tr><tr><td>Bản ghi đã kết thúc (yêu cầu đã hủy, Booking đã hủy, hồ sơ đã đóng)</td><td class="num">4</td></tr></table></div>
<div class="small" style="margin-top:10px;line-height:1.55"><b>Sau khi tắt:</b><br>• Các bản ghi trên giữ nguyên loại Tour, hiện kèm “(ngừng dùng)”; bộ lọc vẫn lọc được.<br>• Không chọn được khi tạo hoặc sửa Tour mẫu, yêu cầu Tour, chiến dịch.<br>• Bật lại được bất cứ lúc nào.</div>`, B('Không tắt') + B('Tắt sử dụng', 'p'), 560) });

// W13 Sau khi tắt
S.W13 = shell({ user: 'kd', g: 'lt', nv: { cnt: { lt: 4 } }, body: ltBody({ on: 4, off: 1, offIdx: 4 }) + toast('Đã tắt Tour học sinh', true) });

// W14 Menu ⋯ của giá trị đã dùng: Xóa khóa
S.W14 = shell({ user: 'kd', g: 'lt', body: ltBody() + `<div class="menu" style="right:18px;top:318px;width:280px"><div class="mi" style="color:#9ca3af">Xóa</div><div class="small muted" style="padding:0 12px 6px">Không xóa được: MICE đang dùng ở 14 bản ghi. Tắt sử dụng nếu không dùng nữa.</div></div>`.replace('top:318px', 'top:296px') });

// W15 Xóa giá trị chưa dùng
S.W15 = shell({ user: 'qt', g: 'ldv', body: ldvBody('qt'), overlay: modal('Xóa loại dịch vụ “Hoạt động trải nghiệm”?', `<div class="small" style="line-height:1.55">Giá trị chưa được dùng ở NCC, dịch vụ, mẫu checklist hay bản ghi nào nên xóa được.<br>Xóa cùng 2 thẻ gợi ý bao gồm, không bao gồm của loại này.<br>Không hoàn tác được. Nếu chỉ tạm ngừng, hãy tắt sử dụng.</div>`, B('Không xóa') + B('Xóa', 'dp'), 500) });

// W16 Giá trị hệ thống (Lý do hủy yêu cầu Tour)
const LHY = [['Khách hoãn hoặc hủy chuyến', '21 yêu cầu'], ['Khách chọn đơn vị khác', '14 yêu cầu'], ['Giá không phù hợp', '17 yêu cầu'], ['Không liên lạc được khách', '8 yêu cầu']];
S.W16 = shell({ user: 'kd', g: 'lhy', body: ghead('lhy', 'kd', { many: true }) + STD(6, 0) + tbl([['Lý do'], ['Ai chọn'], ['Đang dùng ở']], [
  ...LHY.map(r => ({ c: [`<b>${r[0]}</b>`, 'Người phụ trách yêu cầu', `<span class="used">${r[1]}</span>`], on: 1 })),
  { c: [`<b>Khác</b>${sys()}`, 'Người phụ trách yêu cầu · ghi chú bắt buộc', '<span class="used">6 yêu cầu</span>'], on: 1, sys: 1 },
  { c: [`<b>Booking đã hủy</b>${sys()}`, 'Hệ thống tự ghi khi hủy Booking (KD08)', '<span class="used">3 yêu cầu</span>'], on: 1, sys: 1 }]) +
  `<div class="pop" style="right:40px;top:376px;width:300px">Giá trị hệ thống: không đổi tên, không tắt, không xóa; chỉ đổi thứ tự. Hệ thống tự ghi lý do này khi Booking của yêu cầu bị hủy (R06).</div>` });

// W17 Đơn vị tính · căn cứ mặc định và cờ theo đêm
const DVT = [['Phòng/đêm', 'Phòng', 1, '161 dịch vụ'], ['Cabin/đêm', 'Phòng', 1, '22 dịch vụ'], ['Xe/ngày', 'Đơn vị dịch vụ', 0, '64 dịch vụ'], ['Đoàn/ngày', 'Đoàn', 0, '15 dịch vụ'], ['Suất', 'Khách', 0, '96 dịch vụ'], ['Vé', 'Khách', 0, '66 dịch vụ'], ['Chuyến', 'Đơn vị dịch vụ', 0, '15 dịch vụ'], ['Khách', 'Khách', 0, '9 dịch vụ']];
S.W17 = shell({ user: 'dh', g: 'dvt', body: `<div class="gh"><div><h2>Đơn vị tính</h2><div class="gsub">Quản lý: Điều hành, Quản trị hệ thống · Dùng ở: DH05.1, DH05.2, KD02.2, KD06.3, DH04</div></div><div class="ml flex">${B('+ Thêm giá trị', 'p')}</div></div>` + STD(9, 0) +
  tbl([['Đơn vị tính'], ['Căn cứ tính mặc định'], ['Tính theo đêm', 'text-align:center'], ['Đang dùng ở']], [
    ...DVT.slice(0, 3).map(r => ({ c: [`<b>${r[0]}</b>`, r[1], `<div style="text-align:center">${r[2] ? '✓' : '<span class="muted">—</span>'}</div>`, `<span class="used">${r[3]}</span>`], on: 1 })),
    { raw: `<tr class="ed"><td class="hd">⋮⋮</td><td>${ein('Phòng/ngày', '', 140)}</td><td>${ein('Phòng', 'sel', 150)}</td><td style="text-align:center"><span class="cb on"></span></td><td><span class="used">14 dịch vụ · 31 dòng giá</span></td><td style="text-align:center">${sw(1)}</td><td></td></tr>
<tr class="edx"><td></td><td colspan="5"><div class="banner w" style="padding:6px 10px;margin-bottom:6px"><span class="ico w">!</span><div class="small">Bật Tính theo đêm cho đơn vị đang dùng ở 14 dịch vụ: từ lần tính giá sau, KD06.3, KD02.2 và DH04 tính giá cho từng đêm theo ngày nhận phòng (RSD DH03 R14). Báo giá, Booking đã lưu không đổi (R04).</div></div><div class="rowact" style="justify-content:flex-start;gap:10px">${B('Lưu', 'p sm')}${B('Hủy', 'sm')}</div></td></tr>` },
    ...DVT.slice(3).map(r => ({ c: [`<b>${r[0]}</b>`, r[1], `<div style="text-align:center">${r[2] ? '✓' : '<span class="muted">—</span>'}</div>`, `<span class="used">${r[3]}</span>`], on: 1 }))]) +
  `<div class="hint" style="margin-top:8px">Căn cứ tính mặc định điền sẵn ở dòng giá DH05.2 và cách tính số lượng ở KD02.2: Khách, Phòng, Đoàn, Đơn vị dịch vụ.</div>` });

// W18 Thẻ bao gồm, không bao gồm
const THE = [
  ['Bao gồm', 'Ăn sáng buffet', 'Daily buffet breakfast', '212 dịch vụ'], ['Bao gồm', 'Nước uống chào đón', 'Welcome drink', '48 dịch vụ'], ['Bao gồm', 'Wifi miễn phí', 'Free Wi-Fi', '160 dịch vụ'],
  ['Bao gồm', 'Thuế và phí phục vụ', 'Taxes and service charge', '290 dịch vụ'], ['Bao gồm', 'Đưa đón sân bay', null, '12 dịch vụ'],
  ['Không bao gồm', 'Minibar', 'Minibar', '75 dịch vụ'], ['Không bao gồm', 'Giặt là', null, '30 dịch vụ'], ['Không bao gồm', 'Phụ thu phòng đơn', 'Single room supplement', '40 dịch vụ'],
];
S.W18 = shell({ user: 'dh', g: 'the', body: ghead('the', 'dh', { many: true }) +
  `<div class="flex" style="margin:10px 0 8px"><div class="input sel focus" style="width:230px"><span class="muted">Loại dịch vụ:&nbsp;</span>Khách sạn</div><span class="chip">Tất cả <span class="cnt">8</span></span><span class="chip on">Thiếu tên tiếng Anh <span class="cnt">2</span></span><span class="chip">Ngừng dùng <span class="cnt">0</span></span></div>` +
  tbl([['Kiểu'], ['Tên tiếng Việt'], ['Tên tiếng Anh (proposal)'], ['Đang dùng ở']], THE.map((r, i) => i === 4 ? { raw: `<tr class="ed"><td class="hd">⋮⋮</td><td>${r[0]}</td><td><b>${r[1]}</b></td><td>${ein('Airport transfer', '', 220)}</td><td><span class="used">${r[3]}</span></td><td style="text-align:center">${sw(1)}</td><td></td></tr><tr class="edx"><td></td><td colspan="6"><div class="rowact" style="justify-content:flex-start;gap:10px">${B('Lưu', 'p sm')}${B('Hủy', 'sm')}<span class="muted small">Enter: lưu và sang dòng thiếu tên tiếng Anh tiếp theo</span></div></td></tr>` } :
    { c: [r[0] === 'Bao gồm' ? bd('Bao gồm', 'b-green') : bd('Không bao gồm', 'b-gray'), `<b>${r[1]}</b>`, r[2] || '<span class="err" style="margin:0">Chưa có tên tiếng Anh</span>', `<span class="used">${r[3]}</span>`], on: 1, cls: r[2] ? '' : 'bad' })) +
  `<div class="hint" style="margin-top:8px">Chip Thiếu tên tiếng Anh đang chọn nhưng dòng đã có tên vẫn hiện mờ trong bảng đầy đủ; danh sách trên là Tất cả của Khách sạn để thấy ngữ cảnh. Proposal English lấy tên tiếng Anh theo tên tiếng Việt của thẻ (RSD KD06 R18).</div>`.replace('Chip Thiếu tên tiếng Anh đang chọn nhưng dòng đã có tên vẫn hiện mờ trong bảng đầy đủ; danh sách trên là Tất cả của Khách sạn để thấy ngữ cảnh. ', '') }).replace('<span class="chip">Tất cả <span class="cnt">8</span></span><span class="chip on">', '<span class="chip on">Tất cả <span class="cnt">8</span></span><span class="chip">');

// W19 Nhóm công việc và vai trò phục vụ
S.W19 = shell({ user: 'dh', g: 'ncv', body: ghead('ncv', 'dh') + STD(5, 0) + tbl([['Nhóm công việc'], ['Vai trò phục vụ Tour được nhận (DH08.5)'], ['Đang dùng ở']], [
  { c: [`<b>Điều hành</b>${sys()}`, '<span class="muted">—</span>', '<span class="used">6 nhân sự</span>'], on: 1, sys: 1 },
  { c: ['<b>Kinh doanh</b>', '<span class="muted">—</span>', '<span class="used">4 nhân sự</span>'], on: 1 },
  { c: ['<b>Kế toán</b>', '<span class="muted">—</span>', '<span class="used">2 nhân sự</span>'], on: 1 },
  { raw: `<tr class="ed"><td class="hd">⋮⋮</td><td>${ein('Hướng dẫn viên', '', 160)}</td><td><div class="ein sel" style="height:auto;min-height:26px;flex-wrap:wrap;white-space:normal;width:300px">${tag('HDV chính', 1)}${tag('HDV điểm', 1)}</div></td><td><span class="used">15 nhân sự · 9 phân công</span></td><td style="text-align:center">${sw(1)}</td><td></td></tr><tr class="edx"><td></td><td colspan="5"><div class="rowact" style="justify-content:flex-start;gap:10px">${B('Lưu', 'p sm')}${B('Hủy', 'sm')}<span class="muted small">Bỏ một vai trò không đổi phân công đã có ở DH08.5 (R07)</span></div></td></tr>` },
  { c: ['<b>Trưởng đoàn</b>', tag('Trưởng đoàn'), '<span class="used">3 nhân sự</span>'], on: 1 }]) +
  `<div class="menu" style="left:420px;top:328px;width:230px"><div class="mh2">Vai trò phục vụ Tour</div><div class="mi"><span class="cb on"></span>HDV chính</div><div class="mi"><span class="cb on"></span>HDV điểm</div><div class="mi"><span class="cb"></span>Trưởng đoàn</div></div>` });

// W20 Quốc gia
const QG = [['Áo', 'AT', 'Châu Âu', 'Tiếng Đức', '9 khách'], ['Anh', 'GB', 'Châu Âu', 'Tiếng Anh', '22 khách'], ['Đức', 'DE', 'Châu Âu', 'Tiếng Đức', '64 khách'], ['Hàn Quốc', 'KR', 'Châu Á', 'Tiếng Hàn', '18 khách'], ['Hoa Kỳ', 'US', 'Bắc Mỹ', 'Tiếng Anh', '20 khách'], ['Nhật Bản', 'JP', 'Châu Á', 'Tiếng Nhật', '15 khách'], ['Pháp', 'FR', 'Châu Âu', 'Tiếng Pháp', '41 khách']];
S.W20 = shell({ user: 'kd', g: 'qg', body: ghead('qg', 'kd') +
  `<div class="flex" style="margin:10px 0 8px"><div class="input sel" style="width:210px"><span class="muted">Nhóm quốc gia:&nbsp;</span>Tất cả</div><span class="chip">Đang dùng <span class="cnt">249</span></span><span class="chip">Ngừng dùng <span class="cnt">0</span></span><span class="chip on">Thiếu ngôn ngữ mặc định <span class="cnt">3</span></span></div>` +
  tbl([['Quốc gia'], ['Mã ISO'], ['Nhóm quốc gia'], ['Ngôn ngữ mặc định'], ['Đang dùng ở']], [
    { raw: `<tr class="ed"><td class="hd">⋮⋮</td><td><b>Thụy Sĩ</b></td><td class="mono">CH</td><td>${ein('Châu Âu', 'sel', 120)}</td><td>${ein('Tiếng Đức', 'sel', 130)}</td><td><span class="used">7 khách</span></td><td style="text-align:center">${sw(1)}</td><td></td></tr><tr class="edx"><td></td><td colspan="6"><div class="rowact" style="justify-content:flex-start;gap:10px">${B('Lưu', 'p sm')}${B('Hủy', 'sm')}<span class="muted small">Ngôn ngữ mặc định chỉ gợi ý khi tạo khách mới; không đổi khách đã có (R08)</span></div></td></tr>` },
    { c: ['<b>Ả Rập Xê Út</b>', '<span class="mono">SA</span>', 'Trung Đông', '<span class="muted">—</span>', '<span class="muted">Chưa dùng</span>'], on: 1 },
    { c: ['<b>Brazil</b>', '<span class="mono">BR</span>', 'Mỹ Latinh', '<span class="muted">—</span>', '<span class="used">1 khách</span>'], on: 1 }]) +
  `<div class="sec">Đã đủ ngôn ngữ mặc định · ví dụ</div>` + tbl([['Quốc gia'], ['Mã ISO'], ['Nhóm quốc gia'], ['Ngôn ngữ mặc định'], ['Đang dùng ở']], QG.map(r => ({ c: [`<b>${r[0]}</b>`, `<span class="mono">${r[1]}</span>`, r[2], r[3], `<span class="used">${r[4]}</span>`], on: 1, cls: 'dim' }))) });

// W22 Hạng mục dịch vụ & Markup (Quản trị)
S.W22 = shell({ user: 'qt', g: 'hm', body: ghead('hm', 'qt', { btns: B('+ Thêm hạng mục', 'p') }) +
  `<div class="banner i" style="margin:10px 0 8px;padding:6px 10px"><span class="ico i">i</span><div class="small">Markup theo hạng mục được điền sẵn khi tính giá ở KD06.3; để trống thì dùng Markup chung của loại Tour (nhóm Loại Tour). Gán loại dịch vụ vào hạng mục ở nhóm Loại dịch vụ.</div></div>` +
  tbl([['Hạng mục'], ['Markup mặc định'], ['Loại dịch vụ thuộc hạng mục']], [
    { raw: `<tr class="ed"><td class="hd">⋮⋮</td><td><b>Lưu trú</b></td><td>${ein('12', '', 70)}<span class="muted small"> %</span></td><td class="small">Khách sạn, Du thuyền, Homestay</td><td style="text-align:center">${sw(1)}</td><td></td></tr><tr class="edx"><td></td><td colspan="5"><div class="rowact" style="justify-content:flex-start;gap:10px">${B('Lưu', 'p sm')}${B('Hủy', 'sm')}<span class="muted small">0–300 %, tối đa 2 chữ số thập phân; để trống = dùng Markup chung. Áp cho lần tính giá sau, không đổi phiên bản đã lưu</span></div></td></tr>` },
    { c: ['<b>Di chuyển</b>', '<span class="muted">Trống · dùng Markup chung</span>', '<span class="small">Vận chuyển đường bộ, Tàu hỏa, Xe điện <span class="muted">(ngừng dùng)</span></span>'], on: 1 },
    { c: ['<b>Vé máy bay</b>', '5 %', '<span class="small">Vé máy bay nội địa</span>'], on: 1 },
    { c: ['<b>Hướng dẫn viên</b>', '20 %', '<span class="small">Hướng dẫn viên</span>'], on: 1 },
    { c: ['<b>Tham quan</b>', '<span class="muted">Trống · dùng Markup chung</span>', '<span class="small">Vé tham quan, Show diễn, Thuyền tham quan, Hoạt động trải nghiệm</span>'], on: 1 },
    { c: ['<b>Ăn uống</b>', '<span class="muted">Trống · dùng Markup chung</span>', '<span class="small">Nhà hàng</span>'], on: 1 },
    { c: [`<b>Khác</b>${sys()}`, '<span class="muted">Trống · dùng Markup chung</span>', '<span class="small">Visa và dịch vụ khác</span>'], on: 1, sys: 1 }]) });

// W23 Loại tiền (Kế toán)
const LTE = [['VND', 'Việt Nam đồng', '₫', '0', '10.000', '1 · tiền gốc', 1], ['EUR', 'Euro', '€', '2', '10', '27.480 · 12/11'], ['USD', 'Đô la Mỹ', '$', '2', '10', '25.400 · 12/11'], ['AUD', 'Đô la Úc', 'A$', '2', '10', '16.650 · 12/11'], ['JPY', 'Yên Nhật', '¥', '0', '1.000', '168 · 12/11'], ['GBP', 'Bảng Anh', '£', '2', '10', '32.900 · 12/11']];
S.W23 = shell({ user: 'kt', g: 'lte', body: ghead('lte', 'kt', { add: '+ Thêm loại tiền' }) + STD(6, 0) +
  tbl([['Mã'], ['Tên'], ['Ký hiệu'], ['Số lẻ thập phân', 'text-align:right'], ['Bội số làm tròn giá bán 🔒', 'text-align:right'], ['Tỷ giá gần nhất (₫)', 'text-align:right'], ['Đang dùng ở']], LTE.map(r => ({ c: [`<b class="mono">${r[0]}</b>${r[6] ? sys() : ''}`, r[1], r[2], `<div class="num">${r[3]}</div>`, `<div class="num lockcol">${r[4]}</div>`, `<div class="num">${r[5]}</div>`, `<span class="used small">${r[0] === 'VND' ? 'Mọi màn tiền' : r[0] === 'EUR' ? '31 hợp đồng · 118 báo giá' : r[0] === 'USD' ? '12 hợp đồng · 64 báo giá' : r[0] === 'JPY' ? '0 hợp đồng · 9 báo giá' : '2 hợp đồng · 7 báo giá'}</span>`], on: 1, sys: r[6] }))) +
  `<div class="hint" style="margin-top:8px">Số lẻ thập phân không đổi được khi loại tiền đã có số tiền được lưu (R11). 🔒 Bội số làm tròn giá bán do Quản trị hệ thống sửa (R10). Tỷ giá nhập ở nhóm Tỷ giá.</div>` });

// ---------- Tỷ giá (Kế toán) ----------
const RATES = [
  ['11/11/2026', 'Thứ Tư', '27.450', '25.380', '16.630', '167,80', '32.870', 'Vietcombank · bán chuyển khoản', '3 báo giá'],
  ['10/11/2026', 'Thứ Ba', '27.420', '25.370', '16.610', '167,50', '32.850', 'Vietcombank · bán chuyển khoản', '1 báo giá'],
  ['07/11/2026', 'Thứ Bảy', '27.400', '25.360', '16.600', '167,20', '32.820', 'Nhập trước cuối tuần', ''],
  ['06/11/2026', 'Thứ Sáu', '27.400', '25.360', '16.600', '167,20', '32.820', '', '2 báo giá'],
  ['05/11/2026', 'Thứ Năm', '27.380', '25.350', '16.590', '168,10', '32.800', '', ''],
  ['04/11/2026', 'Thứ Tư', '27.390', '25.340', '16.580', '168,40', '32.790', '', '1 quyết toán'],
  ['03/11/2026', 'Thứ Ba', '27.370', '25.330', '16.570', '169,00', '32.760', '', ''],
  ['02/11/2026', 'Thứ Hai', '27.360', '25.320', '16.560', '169,30', '32.750', '', ''],
];
const rateHead = (o = {}) => `<div class="gh"><div><h2>Tỷ giá</h2><div class="gsub">Quản lý: Kế toán, Quản trị hệ thống · VND cho 1 đơn vị ngoại tệ · Dùng ở: KD06.3, DH08.8, KT01</div></div><div class="ml flex">${B('‹')}<div class="input sel" style="width:120px">Tháng 11/2026</div>${B('›')}${B('Dán từ Excel')}${o.todayDone ? B('+ Nhập tỷ giá hôm nay', 'dis') : B('+ Nhập tỷ giá hôm nay', 'p')}</div></div>`;
const rateRow = (r, o = {}) => `<tr class="${o.cls || ''}"><td><b>${r[0]}</b><div class="muted small">${r[1]}</div></td>${r.slice(2, 7).map(x => `<td class="num">${x}</td>`).join('')}<td class="small muted" style="max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r[7] || ''}</td><td class="small">${r[8] ? `<span class="used">${r[8]}</span>` : '<span class="muted">Chưa dùng</span>'}</td><td class="muted">⋯</td></tr>`;
const RATE_TH = `<tr><th>Ngày hiệu lực ▼</th><th class="num">EUR</th><th class="num">USD</th><th class="num">AUD</th><th class="num">JPY</th><th class="num">GBP</th><th>Ghi chú nguồn</th><th>Đã dùng ở</th><th style="width:20px"></th></tr>`;
const rateTbl = (pre = '', rows = RATES, o = {}) => `<div class="tbl rate"><table>${RATE_TH}${pre}${rows.map((r, i) => rateRow(r, { cls: (o.hl === i ? 'new' : '') })).join('')}</table></div>`;
const MISS = `<div class="banner w" style="margin:10px 0 8px;padding:6px 10px"><span class="ico w">!</span><div class="small">Chưa nhập tỷ giá hôm nay <b>12/11/2026</b>. Các màn đang dùng tỷ giá có hiệu lực gần nhất là ngày <b>11/11/2026</b> và ghi rõ ngày đó (R13).</div></div>`;
S.W24 = shell({ user: 'kt', g: 'tg', nv: { tgMiss: 1 }, body: rateHead() + MISS + rateTbl() + `<div class="muted small" style="margin-top:6px">Tháng 11/2026: 8 ngày đã nhập · ngày không có dòng dùng tỷ giá của ngày gần nhất trước đó · người nhập, thời điểm: rê chuột trên ô</div>` });

const editRate = (vals, o = {}) => `<tr class="ed"><td><b>12/11/2026</b><div class="muted small">Thứ Năm · hôm nay</div></td>${vals.map(v => `<td>${ein(v[0], v[1] || '', 64)}${v[2] ? `<div class="${v[1] === 'warn' ? 'hint' : 'err'}" style="${v[1] === 'warn' ? 'color:#92400e' : ''};white-space:nowrap">${v[2]}</div>` : ''}</td>`).join('')}<td>${ein(o.note || 'Vietcombank · bán chuyển khoản', o.noteCls || '', 140)}</td><td class="small muted">Chưa dùng</td><td></td></tr>
<tr class="edx"><td colspan="9"><div class="rowact" style="justify-content:flex-start;gap:10px">${B('Lưu', 'p sm')}${B('Hủy', 'sm')}<span class="muted small">${o.hint || 'Ô chữ xám là gợi ý từ ngày 11/11; gõ để thay. Ô để trống thì loại tiền đó dùng tỷ giá ngày gần nhất.'}</span></div></td></tr>`;
S.W25 = shell({ user: 'kt', g: 'tg', nv: { tgMiss: 1 }, body: rateHead() + MISS + rateTbl(editRate([['27.480'], ['25.400'], ['16.650'], ['186', 'warn', '+10,8 % so với 11/11'], ['32.870', 'gy']], { noteCls: 'gy' }), RATES.slice(0, 7)) });

const RATES12 = [['12/11/2026', 'Thứ Năm', '27.480', '25.400', '16.650', '168', '32.900', 'Vietcombank · bán chuyển khoản', '']].concat(RATES.slice(0, 7));
S.W26 = shell({ user: 'kt', g: 'tg', body: rateHead({ todayDone: 1 }) + `<div style="height:8px"></div>` + rateTbl('', RATES12, { hl: 0 }) + toast('Đã lưu tỷ giá 12/11/2026 · 5 loại tiền') });

// W27 Dán từ Excel
S.W27 = shell({ user: 'kt', g: 'tg', body: rateHead({ todayDone: 1 }) + `<div style="height:8px"></div>` + rateTbl('', RATES12), overlay: modal('Dán tỷ giá từ Excel', `<div class="small" style="margin-bottom:6px">Cột đầu là ngày (dd/mm/yyyy), dòng đầu là mã loại tiền. Ô trống được bỏ qua, không xóa tỷ giá đã có.</div>
<div class="paste" style="height:74px">Ngày        EUR     USD     AUD     JPY     GBP
30/10/2026  27.340  25.310  16.540  170,10  32.730
02/11/2026  27.365  25.320  16.560  169,30  32.750
15/11/2026  27.500  25.410  16.660  168,00  32.910</div>
<div class="flex" style="margin:10px 0 6px"><span class="chip on">Tất cả <span class="cnt">5</span></span><span class="chip">Sẽ thêm <span class="cnt">3</span></span><span class="chip">Sẽ cập nhật <span class="cnt">1</span></span><span class="chip">Bỏ qua <span class="cnt">1</span></span></div>
<div class="tbl"><table class="mini"><tr><th>Ngày</th><th>Kết quả</th><th>Chi tiết</th></tr>
<tr class="bad"><td>15/11/2026</td><td>Bỏ qua</td><td>Ngày sau hôm nay</td></tr>
<tr class="hot"><td>02/11/2026</td><td>Sẽ cập nhật</td><td>EUR 27.360 → 27.365; 4 ô khác không đổi</td></tr>
<tr><td>30/10/2026</td><td style="color:#166534">Sẽ thêm</td><td>5 loại tiền</td></tr>
<tr><td>29/10/2026</td><td style="color:#166534">Sẽ thêm</td><td>5 loại tiền</td></tr>
<tr><td>28/10/2026</td><td style="color:#166534">Sẽ thêm</td><td>5 loại tiền</td></tr></table></div>
<div class="hint">Hiện 2 dòng đầu của nội dung đã dán; 5 dòng dữ liệu được đọc.</div>`, B('Hủy') + B('Áp dụng 4 ngày', 'p'), 640) });

// W28 Sửa tỷ giá đã dùng
S.W28 = shell({ user: 'kt', g: 'tg', body: rateHead({ todayDone: 1 }) + `<div style="height:8px"></div>` + `<div class="tbl rate"><table>${RATE_TH}${rateRow(RATES12[0])}
<tr class="ed"><td><b>11/11/2026</b><div class="muted small">Thứ Tư</div></td><td>${ein('27.450', '', 64)}</td><td>${ein('25.385', '', 64)}</td><td>${ein('16.630', '', 64)}</td><td>${ein('167,80', '', 64)}</td><td>${ein('32.870', '', 64)}</td><td>${ein('Vietcombank · bán chuyển khoản', '', 140)}</td><td class="small"><span class="used">3 báo giá</span></td><td></td></tr>
<tr class="edx"><td colspan="9"><div class="banner w" style="padding:6px 10px;margin-bottom:6px"><span class="ico w">!</span><div class="small">Tỷ giá ngày 11/11 đã dùng ở <b>3 phiên bản báo giá</b> (YC-2611-0048 v2, YC-2611-0051 v1, YC-2610-0036 v4). Bản đã lưu giữ tỷ giá cũ; chỉ lần tính sau dùng số mới. KT01 tính lại số ≈ VND (R14).</div></div>
<div class="flex" style="gap:10px"><div style="width:420px">${f('Lý do sửa', 'Nhập nhầm USD, đối chiếu lại bảng Vietcombank 11/11', { req: true })}</div>${B('Lưu', 'p sm')}${B('Hủy', 'sm')}</div></td></tr>
${RATES.slice(1, 7).map(r => rateRow(r)).join('')}</table></div>` });

// ---------- Chính sách hoàn hủy Booking (Quản trị) ----------
const tiers = t => t.map(x => `${x[0]}: ${x[1]}`).join(' · ');
const POL = [
  ['Chính sách mặc định', 'Loại Tour chưa có chính sách riêng: Tour Golf, Tour học sinh', [['≥ 30 ngày', '20 %'], ['15–29', '50 %'], ['< 15', '100 %']], 'v1 · 03/01/2026', '6 Booking', 'def'],
  ['Chuẩn 2026', 'Inbound đoàn, Customized riêng tư', [['≥ 45 ngày', '10 %'], ['30–44', '25 %'], ['15–29', '50 %'], ['7–14', '75 %'], ['< 7', '100 %']], 'v2 · 15/06/2026', '41 Booking'],
  ['MICE 2026', 'MICE', [['≥ 60 ngày', '20 %'], ['30–59', '50 %'], ['15–29', '80 %'], ['< 15', '100 %']], 'v1 · 15/06/2026', '4 Booking'],
];
const polRow = (p, o = {}) => ({ c: [`<b>${p[0]}</b>${p[5] ? ind('Mặc định', 'b') : ''}`, `<span class="small">${p[1]}</span>`, `<span class="small">${tiers(p[2])}</span>`, `<span class="small">${o.ver || p[3]}</span>`, `<span class="used small">${p[4]}</span>`], on: 1, lock: p[5], cls: o.cls });
const polBody = (o = {}) => ghead('cs', 'qt', { btns: B('+ Thêm chính sách', 'p') }) + `<div style="height:10px"></div>` +
  tbl([['Chính sách'], ['Áp dụng cho loại Tour'], ['Các bậc · hủy trước ngày khởi hành → giữ lại'], ['Phiên bản'], ['Đã chụp vào']], POL.map((p, i) => polRow(p, o.ver && i === 1 ? { ver: o.ver, cls: 'new' } : {}))) +
  `<div class="hint" style="margin-top:8px">Booking chụp chính sách đang dùng theo loại Tour lúc tạo (RSD KD08 R03); sửa chính sách tạo phiên bản mới, Booking đã tạo giữ bản chụp. Chính sách mặc định luôn đang dùng, không tắt được (R16).</div>`;
S.W29 = shell({ user: 'qt', g: 'cs', body: polBody() });

const tierTbl = (rows, o = {}) => `<div class="tbl"><table class="tier"><tr><th>Hủy trước ngày khởi hành từ</th><th>Giữ lại (% giá trị Booking)</th><th>Khoảng áp dụng</th><th style="width:24px"></th></tr>
${rows.map(r => `<tr class="${r[4] || ''}"><td>${r[0] === 0 ? '<div class="ein ro" style="width:110px">0 ngày</div><div class="hint" style="margin:2px 0 0">Bậc cuối, gồm không đến</div>' : `<div class="flex" style="gap:4px">${ein(r[0], (r[3]||'').includes('n') ? 'bad' : '', 70)}<span class="muted small">ngày</span></div>${(r[3]||'').includes('n') ? '<div class="err">Trùng bậc 30 ngày</div>' : ''}`}</td><td><div class="flex" style="gap:4px">${ein(r[1], (r[3]||'').includes('p') ? 'bad' : (r[3]||'').includes('w') ? 'warn' : '', 70)}<span class="muted small">%</span></div>${(r[3]||'').includes('p') ? '<div class="err">0–100 %</div>' : (r[3]||'').includes('w') ? '<div class="hint" style="color:#92400e">Thấp hơn bậc xa hơn (50 %)</div>' : ''}</td><td class="small muted">${r[2]}</td><td class="muted">${r[0] === 0 ? '' : '✕'}</td></tr>`).join('')}</table></div>${o.add !== false ? `<div style="margin-top:6px">${B('+ Thêm bậc', 'lk')}</div>` : ''}`;
const polForm = (o = {}) => drawer(o.title || 'Chuẩn 2026', `${o.top || ''}
<div class="f2">${f('Tên chính sách', o.name || 'Chuẩn 2026', { req: true, cls: o.name === '' ? 'ph' : '' })}<div class="field"><label>Áp dụng cho loại Tour <span class="req">*</span></label><div class="input" style="height:auto;min-height:30px;flex-wrap:wrap;white-space:normal;padding:3px 8px">${o.lt || tag('Inbound đoàn', 1) + tag('Customized riêng tư', 1)}</div>${o.ltHint ? `<div class="hint">${o.ltHint}</div>` : ''}</div></div>
<div class="sec">Các bậc${o.tierAuto ? `<span class="auto">${o.tierAuto}</span>` : ''}</div>
${tierTbl(o.tiers || [[45, '10', '≥ 45 ngày'], [30, '30', '30–44 ngày', '', 'hot'], [15, '50', '15–29 ngày'], [7, '75', '7–14 ngày'], [0, '100', 'dưới 7 ngày hoặc không đến']])}
<div class="ex" style="margin-top:10px">${o.ex || 'Ví dụ: hủy trước 35 ngày → giữ lại 30 % (v2 là 25 %). Hủy trước 3 ngày → giữ lại 100 %.'}</div>
${o.note !== false ? `<div style="margin-top:10px">${f('Ghi chú thay đổi', o.noteVal || 'Tăng bậc 30–44 ngày theo chính sách hãng hàng không 2027', {})}</div>` : ''}`,
  o.foot || `<span class="muted small">● Có thay đổi chưa lưu</span><span class="ml"></span>${B('Hủy')}${B('Lưu phiên bản 3', 'p')}`, { wide: true, sub: o.sub || 'Phiên bản hiện hành v2 · 15/06/2026 · đã chụp vào 41 Booking' });
S.W30 = shell({ user: 'qt', g: 'cs', body: polBody(), overlay: polForm({ top: `<div class="banner i" style="margin-bottom:10px;padding:6px 10px"><span class="ico i">i</span><div class="small">Lưu sẽ tạo <b>phiên bản 3</b>. 41 Booking đã tạo giữ bản chụp của phiên bản lúc tạo; chỉ Booking tạo sau khi lưu dùng phiên bản 3 (R15).</div></div>` }) });

POL[1][2] = [['≥ 45 ngày', '10 %'], ['30–44', '30 %'], ['15–29', '50 %'], ['7–14', '75 %'], ['< 7', '100 %']];
S.W31 = shell({ user: 'qt', g: 'cs', body: polBody({ ver: 'v3 · 12/11/2026' }) + toast('Đã lưu Chuẩn 2026 phiên bản 3 · Booking tạo từ bây giờ dùng v3') });
POL[1][2] = [['≥ 45 ngày', '10 %'], ['30–44', '25 %'], ['15–29', '50 %'], ['7–14', '75 %'], ['< 7', '100 %']];

S.W32 = shell({ user: 'qt', g: 'cs', body: polBody(), overlay: polForm({ title: 'Thêm chính sách hoàn hủy', sub: 'Chính sách mới ở trạng thái Đang dùng khi lưu', name: '', lt: `<span class="muted">Chọn loại Tour</span>`, ltHint: 'Chỉ liệt kê loại Tour đang dùng chưa có chính sách riêng: Tour Golf, Tour học sinh',
  tierAuto: 'Từ chính sách mặc định', tiers: [[30, '20', '≥ 30 ngày'], [15, '50', '15–29 ngày'], [0, '100', 'dưới 15 ngày hoặc không đến']], ex: 'Ví dụ: hủy trước 20 ngày → giữ lại 50 %.', note: false,
  foot: `${B('Hủy')}${B('Lưu chính sách', 'p')}` }).replace('<div class="input ph">', '<div class="input ph">Ví dụ: Golf 2027') });

S.W33 = shell({ user: 'qt', g: 'cs', body: polBody(), overlay: polForm({ top: `<div class="banner e" style="margin-bottom:10px;padding:6px 10px"><span class="ico e">!</span><div class="small">2 lỗi cần sửa trước khi lưu · 1 cảnh báo (vẫn lưu được)</div></div>`,
  tiers: [[45, '10', '—'], [30, '30', '—'], [30, '120', '—', 'np', 'bad'], [15, '50', '—'], [7, '40', '—', 'w'], [0, '100', '—']],
  ex: 'Ví dụ chưa tính được khi còn lỗi.' }) });

// W34 Tham số chung
const TS = [
  ['Ngưỡng Đến hạn (đợt thanh toán, khoản công nợ)', '7', 'ngày', 'KD07, KD08, KT01, QT10', '1–60'],
  ['Ngưỡng hợp đồng NCC sắp hết hạn', '30', 'ngày', 'DH02, DH03, DH04', '1–180'],
  ['Cần chăm sóc sau Tour', '30', 'ngày sau ngày đóng', 'KD03, KD04', '1–180'],
  ['Hạn link Survey', '30', 'ngày từ lúc gửi', 'KD10', '1–90'],
  ['Hạn mặc định của proposal', '30', 'ngày từ lúc publish', 'KD06', '1–180'],
  ['Loại tiền báo giá mặc định', 'USD', 'loại tiền đang dùng', 'KD06.3', '—'],
  ['Tiền tố Tour Code', 'TP', '2–4 chữ in hoa', 'DH07', '—'],
  ['Ngưỡng nhắc hồ sơ chưa giao', '7', 'ngày trước khởi hành', 'DH07', '1–60'],
  ['Ngưỡng cảnh báo hộ chiếu', '6', 'tháng', 'DH08', '1–24'],
  ['Ngưỡng chờ phản hồi NCC', '48', 'giờ', 'DH08', '1–240'],
  ['Hạn phản hồi của Kinh doanh', '2', 'ngày làm việc', 'DH08', '1–10'],
  ['Khoảng cập nhật mặc định cột Kanban', '90 ngày', '30 ngày, 90 ngày, 12 tháng, Tất cả', 'KD05', '—'],
  ['Giờ chạy nhắc hằng ngày', '08:00', 'giờ tròn', 'DH02', '—'],
  ['Giờ gửi mặc định của chiến dịch', '09:00', 'giờ tròn', 'KD10', '—'],
];
S.W34 = shell({ user: 'qt', g: 'ts', body: ghead('ts', 'qt', { btns: '' }) + `<style>.w34 td{padding-top:4px;padding-bottom:4px;white-space:nowrap}.w34 td:first-child{white-space:normal}</style><div style="height:6px"></div><div class="tbl w34"><table><tr><th>Tham số</th><th>Giá trị</th><th>Đơn vị</th><th>Dùng ở</th><th>Cập nhật lần cuối</th></tr>
<tr class="ed"><td><b>${TS[0][0]}</b></td><td>${ein('10', '', 60)}</td><td class="small">ngày</td><td class="small">${TS[0][3]}</td><td class="small muted">12/11/2026 · Lê Thu Quyên</td></tr>
<tr class="edx"><td colspan="5"><div class="hint" style="margin:0 0 6px">Khoảng hợp lệ 1–60. Áp dụng ngay khi lưu: KD07, KD08, KT01 và QT10 tính lại tình trạng Đến hạn ở lần tải sau (R17).</div><div class="rowact" style="justify-content:flex-start;gap:10px">${B('Lưu', 'p sm')}${B('Hủy', 'sm')}</div></td></tr>
${TS.slice(1).map(t => `<tr><td><b>${t[0]}</b></td><td>${t[1]}</td><td class="small">${t[2]}</td><td class="small">${t[3]}</td><td class="small muted">${t[0].startsWith('Tiền tố') ? '01/10/2026' : '15/06/2026'}</td></tr>`).join('')}</table></div>
<div class="hint" style="margin-top:8px">Bấm giá trị để sửa tại chỗ. Tham số không bật, tắt, thêm hay xóa; danh sách tham số do hệ thống định nghĩa.</div>` });

module.exports = S;
