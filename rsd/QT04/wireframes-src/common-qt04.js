// Thành phần dùng chung cho wireframe QT04 · Mẫu tài liệu và email.
// Dữ liệu minh họa: hôm nay 12/11/2026, 10:15. Hồ sơ xem trước TP-2611-0042 (Müller Reisen GmbH, 18 khách) khớp RSD DH08;
// mẫu Survey GR-01, EU-01, CU-01, MI-01 và email RM-03, RM-05 khớp RSD KD09, KD10.
const { page, B, bd } = require('./lib');

const CSS = `
.drawer.xl{width:1060px}
.fc{background:#fef9c3;border:1px solid #fde68a;border-radius:4px;padding:0 4px;font-size:12px;white-space:nowrap;color:#713f12}
.fc.bad{background:#fee2e2;border-color:#fca5a5;color:#991b1b;text-decoration:underline wavy #dc2626}
.opt{border-bottom:1.5px dashed #0e7490;background:#ecfeff;padding:0 1px}
.opt::before{content:"[";color:#0e7490;font-weight:700}.opt::after{content:"]";color:#0e7490;font-weight:700}
.fixed{background:#f3f4f6;border:1px dashed #cbd5e1;border-radius:6px;padding:6px 8px;color:#6b7280;font-size:11.5px;margin-top:6px}
.ed{border:1px solid #d1d5db;border-radius:6px;background:#fff}
.ed .tb{display:flex;gap:4px;align-items:center;border-bottom:1px solid #e5e7eb;padding:4px 6px;background:#f9fafb;border-radius:6px 6px 0 0}
.ed .tb span.t{border:1px solid transparent;border-radius:4px;padding:0 6px;font-size:12px;color:#374151;line-height:22px}
.ed .tb span.t.on{border-color:#2563eb;background:#eff6ff;color:#1d4ed8}
.ed .bx{padding:8px 10px;font-size:12.3px;line-height:1.6;white-space:pre-line;min-height:120px}
.lt{display:flex;gap:0;border-bottom:1px solid #e5e7eb;margin-bottom:8px;align-items:flex-end}
.lt div{padding:5px 11px;font-size:12.5px;color:#4b5563;border-bottom:2px solid transparent;white-space:nowrap}
.lt div.on{color:#1d4ed8;border-color:#2563eb;font-weight:600}
.lt div.add{color:#2563eb}
.sw{display:inline-block;width:30px;height:17px;border-radius:9px;background:#cbd5e1;position:relative;vertical-align:middle}
.sw::after{content:"";position:absolute;top:2px;left:2px;width:13px;height:13px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.3)}
.sw.on{background:#16a34a}.sw.on::after{left:15px}
.sw.lock{opacity:.5}
tr.off td{color:#9ca3af}
tr.off td b{color:#6b7280}
.mx td,.mx th{text-align:center;padding:4px 6px;font-size:12px}
.mx td:first-child,.mx th:first-child{text-align:left}
.ck{display:inline-block;width:15px;height:15px;border:1.5px solid #94a3b8;border-radius:3px;vertical-align:middle;background:#fff}
.ck.on{background:#2563eb;border-color:#2563eb;position:relative}
.ck.on::after{content:"✓";color:#fff;font-size:11px;position:absolute;left:2px;top:-2px;font-weight:700}
.ck.lock{opacity:.55}
.mx td.badc{background:#fef2f2}
.mx th.badc{background:#fee2e2;color:#991b1b}
.q{border:1px solid #e5e7eb;border-radius:8px;padding:7px 10px;margin-bottom:6px;display:flex;gap:10px;align-items:center;background:#fff}
.q.bad{border-color:#f87171;background:#fef2f2}
.q .n{width:20px;color:#94a3b8;font-weight:700}
.dfl{margin-right:auto;display:flex;align-items:center;gap:8px}
.diff-a{background:#dcfce7}.diff-a .opt{background:#dcfce7}.diff-d{background:#fee2e2;text-decoration:line-through}
.vrow{display:flex;gap:10px;align-items:center;padding:7px 8px;border-bottom:1px solid #f1f5f9;font-size:12.3px}
.vrow.on{background:#eff6ff;border-left:3px solid #2563eb}
.doc{border:1px solid #cbd5e1;border-radius:6px;background:#fff;padding:10px 12px}
.doc h5{margin:0 0 2px;font-size:13px}
`;

const NAM = 'Nguyễn Hoàng Nam', HA = 'Lê Thu Hà', ANH = 'Trần Minh Anh', HAI = 'Ngô Văn Hải';
const fc = (t, bad) => `<span class="fc ${bad ? 'bad' : ''}">{${t}}</span>`;
const opt = t => `<span class="opt">${t}</span>`;
const sw = (on, lock) => `<span class="sw ${on ? 'on' : ''} ${lock ? 'lock' : ''}"></span>`;
const ck = (on, lock) => `<span class="ck ${on ? 'on' : ''} ${lock ? 'lock' : ''}"></span>`;
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const toast = (t, a) => `<div class="toast"><span>${t}</span>${a ? `<a>${a}</a>` : ''}</div>`;
const fld = (label, val, o = {}) => `<div class="field"><label>${label}${o.req ? ' <span class="req">*</span>' : ''}${o.auto ? `<span class="auto">${o.auto}</span>` : ''}</label><div class="input ${o.cls || ''}">${val}</div>${o.err ? `<div class="err">${o.err}</div>` : ''}${o.hint ? `<div class="hint">${o.hint}</div>` : ''}</div>`;
const tags = (arr, o = {}) => `<div class="tags" style="${o.ro ? 'background:#f9fafb;border-style:dashed' : ''}${o.bad ? 'border-color:#dc2626;background:#fff7f7' : ''}">${arr.map(x => `<span class="tag">${x}${o.ro ? '' : ' ✕'}</span>`).join('')}</div>`;

// user: 'dh' (Điều hành) | 'kd' (Kinh doanh)
const P = (o) => page(Object.assign({ mod: 'Quản trị', crumb: 'Mẫu tài liệu và email', side: 'Mẫu tài liệu', css: CSS }, o));

// Tiêu đề màn + hai tab nhóm mẫu
const head = ({ tab = 'dh', ro = false, canCreate = true, kdCnt = 7, dhCnt = 9 } = {}) => `<div class="ttl"><h1>Mẫu tài liệu và email</h1>${ro ? '<span class="muted small">🔒 Chỉ xem nhóm mẫu này</span>' : ''}<span class="ml"></span>${canCreate && !ro ? B('+ Tạo mẫu', 'p') : ''}</div>
<div class="tabs" style="margin:0 0 4px;border-bottom:1px solid #e5e7eb"><div class="tab ${tab === 'kd' ? 'on' : ''}">Kinh doanh · Survey và email chăm sóc <span class="cnt">${kdCnt}</span></div><div class="tab ${tab === 'dh' ? 'on' : ''}">Điều hành · Email đặt dịch vụ, Pax list, Rooming list <span class="cnt">${dhCnt}</span></div></div>`;

const chips = (arr, on) => arr.map(([t, n]) => `<span class="chip ${t === on ? 'on' : ''}">${t} <b>${n}</b></span>`).join('');
const toolbar = ({ q = '', st = 'Đang dùng', chipArr, on = 'Tất cả', clear = false, extra = '' }) => `<div class="toolbar"><div class="input ${q ? '' : 'ph'}" style="width:270px">🔍 ${q || 'Tìm mã, tên mẫu, nội dung…'}</div><div class="input sel" style="width:170px">Trạng thái: ${st}</div>${extra}${clear ? '<span class="btn lk small">Xóa bộ lọc</span>' : ''}<span class="ml"></span>${chips(chipArr, on)}</div>`;

// ---------- Dữ liệu QT04.2 ----------
// [mã, tên, loại · mục đích, áp dụng cho, ngôn ngữ, mặc định, phiên bản, đã dùng, đang dùng]
const DH = {
  'DV-01': ['DV-01', 'Đặt phòng khách sạn', 'Email đặt dịch vụ · Đặt dịch vụ', 'Khách sạn', 'VI, EN', 1, 'v6 · 05/11/2026 · ' + ANH, '214 email', 1],
  'DV-02': ['DV-02', 'Đặt nhà hàng', 'Email đặt dịch vụ · Đặt dịch vụ', 'Nhà hàng', 'VI, EN', 1, 'v3 · 22/09/2026 · ' + ANH, '96 email', 1],
  'DV-03': ['DV-03', 'Đặt xe vận chuyển', 'Email đặt dịch vụ · Đặt dịch vụ', 'Vận chuyển', 'VI', 1, 'v4 · 14/10/2026 · ' + HAI, '88 email', 1],
  'DV-04': ['DV-04', 'Đặt du thuyền', 'Email đặt dịch vụ · Đặt dịch vụ', 'Du thuyền', 'VI, EN', 1, 'v2 · 30/08/2026 · ' + ANH, '31 email', 1],
  'DV-05': ['DV-05', 'Đặt dịch vụ chung', 'Email đặt dịch vụ · Đặt dịch vụ', 'Mọi loại dịch vụ', 'VI, EN', 1, 'v5 · 18/10/2026 · ' + ANH, '150 email', 1],
  'DV-06': ['DV-06', 'Điều chỉnh dịch vụ', 'Email đặt dịch vụ · Điều chỉnh', 'Mọi loại dịch vụ', 'VI, EN', 1, 'v2 · 01/10/2026 · ' + HAI, '22 email', 1],
  'DV-07': ['DV-07', 'Hủy dịch vụ', 'Email đặt dịch vụ · Hủy', 'Mọi loại dịch vụ', 'VI, EN', 1, 'v3 · 01/10/2026 · ' + HAI, '17 email', 1],
  'DV-08': ['DV-08', 'Đặt phòng khách sạn – mẫu 2025', 'Email đặt dịch vụ · Đặt dịch vụ', 'Khách sạn', 'VI', 0, 'v9 · 20/12/2025 · ' + HAI, '402 email', 0],
  'PL-01': ['PL-01', 'Pax list – EN', 'Pax list', '7 loại dịch vụ có tập cột riêng', 'EN', 1, 'v3 · 28/10/2026 · ' + ANH, '63 tài liệu', 1],
  'PL-02': ['PL-02', 'Pax list – VI', 'Pax list', '3 loại dịch vụ có tập cột riêng', 'VI', 0, 'v1 · 10/11/2026 · ' + HAI, 'Chưa dùng', 0],
  'RL-01': ['RL-01', 'Rooming list – EN', 'Rooming list', 'Khách sạn, Du thuyền', 'EN', 1, 'v2 · 12/09/2026 · ' + ANH, '58 tài liệu', 1],
};
const DH_ALL = ['DV-01', 'DV-02', 'DV-03', 'DV-04', 'DV-05', 'DV-06', 'DV-07', 'PL-01', 'RL-01'];
const dhTable = ({ keys = DH_ALL, ro = false, hl = {}, extraRows = {} } = {}) => `<div class="tbl"><table><tr><th>Mẫu</th><th>Loại · mục đích</th><th>Áp dụng cho</th><th>Ngôn ngữ</th><th>Phiên bản hiện hành</th><th>Đã dùng</th><th>Đang dùng</th></tr>
${keys.map(k => { const r = extraRows[k] || DH[k]; const cls = hl[k] || (r[8] ? '' : 'off'); return `<tr class="${cls}"><td><b style="color:${r[8] ? '#1d4ed8' : '#6b7280'}">${r[0]} · ${r[1]}</b></td><td class="small">${r[2]}</td><td class="small">${r[3]}</td><td class="small">${r[4]}</td><td class="small muted">${r[6]}</td><td class="small">${r[7]}</td><td>${sw(r[8], ro)}${r[8] ? '' : ' <span class="small muted">Ngừng dùng</span>'}</td></tr>`; }).join('')}</table></div>`;
const DH_CHIPS = [['Tất cả', 9], ['Email đặt dịch vụ', 7], ['Pax list', 1], ['Rooming list', 1]];

// ---------- Dữ liệu QT04.1 ----------
// [mã, tên, loại, ngôn ngữ, phiên bản, dùng ở, đang dùng]
const KD = {
  'GR-01': ['GR-01', 'Đoàn Inbound', 'Survey · 5 câu hỏi', 'EN, FR, DE', 'v4 · 02/10/2026 · ' + NAM, '2 chiến dịch', 1],
  'EU-01': ['EU-01', 'Khảo sát sau Tour', 'Survey · 6 câu hỏi', 'EN, DE, FR', 'v3 · 15/09/2026 · ' + HA, '2 chiến dịch', 1],
  'CU-01': ['CU-01', 'Customized', 'Survey · 4 câu hỏi', 'EN, VI', 'v2 · 20/08/2026 · ' + HA, '1 chiến dịch', 1],
  'MI-01': ['MI-01', 'Sự kiện MICE', 'Survey · 5 câu hỏi', 'EN', 'v1 · 03/07/2026 · ' + NAM, '1 chiến dịch', 1],
  'RM-03': ['RM-03', 'Ưu đãi mùa', 'Email chăm sóc', 'EN, DE, FR', 'v2 · 01/10/2026 · ' + NAM, '1 chiến dịch', 1],
  'RM-05': ['RM-05', 'Mùa lễ', 'Email chăm sóc', 'EN, FR', 'v3 · 25/10/2026 · ' + HA, '1 chiến dịch', 1],
  'RM-06': ['RM-06', 'Giới thiệu Tour mới', 'Email chăm sóc', 'EN', 'v1 · 08/11/2026 · ' + NAM, 'Chưa dùng', 1],
  'RM-01': ['RM-01', 'Tri ân 2025', 'Email chăm sóc', 'EN', 'v2 · 10/12/2025 · ' + HA, '1 chiến dịch', 0],
};
const KD_ALL = ['GR-01', 'EU-01', 'CU-01', 'MI-01', 'RM-03', 'RM-05', 'RM-06'];
const kdTable = ({ keys = KD_ALL, ro = false, hl = {}, over = {} } = {}) => `<div class="tbl"><table><tr><th>Mẫu</th><th>Loại</th><th>Ngôn ngữ</th><th>Phiên bản hiện hành</th><th>Dùng ở</th><th>Đang dùng</th></tr>
${keys.map(k => { const r = Object.assign([], KD[k], over[k] || {}); const cls = hl[k] || (r[6] ? '' : 'off'); return `<tr class="${cls}"><td><b style="color:${r[6] ? '#1d4ed8' : '#6b7280'}">${r[0]} · ${r[1]}</b></td><td class="small">${r[2]}</td><td class="small">${r[3]}</td><td class="small muted">${r[4]}</td><td class="small">${r[5]}</td><td>${sw(r[6], ro)}${r[6] ? '' : ' <span class="small muted">Ngừng dùng</span>'}</td></tr>`; }).join('')}</table></div>`;
const KD_CHIPS = [['Tất cả', 7], ['Survey', 4], ['Email chăm sóc', 3]];
const proposalNote = `<div class="muted small" style="margin:-2px 0 8px">Proposal báo giá do hệ thống dựng theo mẫu của công ty và không cấu hình ở đây (RSD KD06 R18).</div>`;

// ---------- Bảng trượt mẫu ----------
const drawerXL = (title, body, foot, sub = '') => `<div class="overlay"></div><div class="drawer xl"><div class="dh"><div class="t">${title}<span class="x">✕</span></div>${sub ? `<div class="muted small" style="margin-top:2px">${sub}</div>` : ''}</div><div class="db" style="padding-top:10px">${body}</div><div class="df">${foot}</div></div>`;
const sub3 = (on, arr = ['Nội dung', 'Xem trước', 'Lịch sử phiên bản']) => `<div class="ntab" style="margin-bottom:8px">${arr.map(t => `<div class="${t === on ? 'on' : ''}">${t}</div>`).join('')}</div>`;
const langTabs = (arr, on, add = true) => `<div class="lt">${arr.map(l => { const [t, m] = Array.isArray(l) ? l : [l, '']; return `<div class="${t === on ? 'on' : ''}">${t}${m}</div>`; }).join('')}${add ? '<div class="add">+ Thêm ngôn ngữ</div>' : ''}</div>`;
const edTb = (o = {}) => `<div class="tb"><span class="t"><b>B</b></span><span class="t"><i>I</i></span><span class="t">• Danh sách</span><span class="t">🔗 Liên kết</span><span style="width:1px;height:16px;background:#e5e7eb;margin:0 4px"></span><span class="t ${o.ins ? 'on' : ''}">{ } Chèn trường ▾</span><span class="t ${o.opt ? 'on' : ''}">[ ] Cụm tùy chọn</span>${o.tbx || ''}</div>`;
const editor = (body, o = {}) => `<div class="ed" style="${o.bad ? 'border-color:#dc2626' : ''}">${edTb(o)}<div class="bx" style="${o.h ? 'min-height:' + o.h + 'px' : ''}">${body}</div></div>`;
const foot = (left, right) => `<div class="dfl">${left}</div>${right}`;

module.exports = { CSS, NAM, HA, ANH, HAI, fc, opt, sw, ck, ind, toast, fld, tags, P, head, chips, toolbar, DH, DH_ALL, dhTable, DH_CHIPS, KD, KD_ALL, kdTable, KD_CHIPS, proposalNote, drawerXL, sub3, langTabs, editor, foot, B, bd };
