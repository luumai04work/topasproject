// Wireframe DH06 · Danh mục nhân sự. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
const { page, drawer, modal, f, B, bd } = require('./lib');
const S = {};
const CSS = `.tag{display:inline-flex;align-items:center;gap:4px;background:#eef2ff;color:#3730a3;border-radius:4px;padding:0 6px;font-size:11.5px;line-height:19px;margin:1px 3px 1px 0;white-space:nowrap}
.tag.x::after{content:"✕";color:#6366f1;font-size:10px}
.tag.lg{background:#f1f5f9;color:#334155}
.tag.off{background:#f3f4f6;color:#9ca3af;text-decoration:line-through}
.seg{display:inline-flex;border:1px solid #d1d5db;border-radius:6px;overflow:hidden}.seg span{padding:5px 12px;font-size:12.5px;border-right:1px solid #d1d5db}.seg span:last-child{border-right:none}.seg span.on{background:#1e40af;color:#fff}
.input.tags{height:auto;min-height:30px;flex-wrap:wrap;white-space:normal;padding:3px 8px}
.load{font-size:12px;line-height:17px}
.dhd{display:flex;align-items:center;gap:8px}
.fl{display:flex;align-items:center;gap:8px;font-size:12.5px}
table.mini td,table.mini th{padding:5px 8px;font-size:12px}
`;
const P = o => page(Object.assign({ crumb: 'Nhân sự', side: 'Nhân sự', css: CSS }, o));

// ---------- Dữ liệu minh họa (hôm nay 11/11/2026) ----------
// Đang nhận phân công 24 · Không nhận phân công 3 · Tất cả 27. Trang 1 hiện 12 dòng đầu theo tên.
// kind: nb (Nội bộ), ctv (Cộng tác viên). acc: email tài khoản liên kết (QT01), null = chưa có, 'lock' = bị khóa.
// load: [hồ sơ phụ trách, việc chưa xong, số Tour phục vụ, ngày phục vụ gần nhất]
const N = {
  bthanh: { n: 'Bùi Thị Thanh', code: 'NS-021', kind: 'ctv', grp: ['Hướng dẫn viên'], lang: ['Anh'], area: 'Hội An', tel: '0905 214 377', em: 'thanh.guide.hoian@gmail.com', load: [0, 0, 1, '28/11'], on: 1 },
  khai: { n: 'Đỗ Văn Khải', code: 'NS-006', kind: 'nb', grp: ['Hướng dẫn viên', 'Trưởng đoàn'], lang: ['Đức', 'Anh'], area: 'Toàn quốc', tel: '0913 562 208', em: 'khai.do@topas-travel.vn', acc: null, load: [0, 0, 2, '18/11'], on: 1 },
  khoa: { n: 'Đỗ Văn Khoa', code: 'NS-002', kind: 'nb', grp: ['Điều hành'], lang: ['Anh', 'Hàn'], area: 'Toàn quốc', tel: '0904 771 925', em: 'khoa.do@topas-travel.vn', acc: 'khoa.do@topas-travel.vn', load: [4, 6, 0], on: 1 },
  vinh: { n: 'Hồ Quang Vinh', code: 'NS-014', kind: 'ctv', grp: ['Hướng dẫn viên'], lang: ['Đức', 'Anh'], area: 'Toàn quốc', tel: '0935 118 640', em: 'vinh.ho.guide@gmail.com', load: [0, 0, 1, '20/11'], on: 1 },
  huy: { n: 'Lê Quang Huy', code: 'NS-003', kind: 'nb', grp: ['Điều hành'], lang: ['Anh', 'Pháp'], area: 'Toàn quốc', tel: '0912 406 381', em: 'huy.le@topas-travel.vn', acc: 'huy.le@topas-travel.vn', load: [2, 3, 0], on: 1 },
  yen: { n: 'Lý Hải Yến', code: 'NS-017', kind: 'ctv', grp: ['Hướng dẫn viên'], lang: ['Hàn', 'Anh'], area: 'Toàn quốc', tel: '0986 245 019', em: 'haiyen.korea@gmail.com', load: [0, 0, 1, '04/12'], on: 1 },
  mai: { n: 'Ngô Thị Mai', code: 'NS-015', kind: 'ctv', grp: ['Hướng dẫn viên'], lang: ['Anh', 'Pháp'], area: 'Huế', tel: '0914 503 772', em: 'ngomai.hue@gmail.com', load: [0, 0, 1, '22/11'], on: 1 },
  nam: { n: 'Nguyễn Hoàng Nam', code: 'NS-008', kind: 'nb', grp: ['Kinh doanh'], lang: ['Anh'], area: 'Toàn quốc', tel: '0903 118 264', em: 'nam.nguyen@topas-travel.vn', acc: 'nam.nguyen@topas-travel.vn', load: [0, 0, 0], on: 1 },
  lan: { n: 'Phạm Ngọc Lan', code: 'NS-010', kind: 'nb', grp: ['Kế toán'], lang: [], area: 'Toàn quốc', tel: '0909 336 152', em: 'lan.pham@topas-travel.vn', acc: 'lan.pham@topas-travel.vn', load: [0, 1, 0], on: 1 },
  ha: { n: 'Phan Thu Hà', code: 'NS-026', kind: 'nb', grp: ['Điều hành'], lang: ['Anh', 'Nhật'], area: 'Toàn quốc', tel: '0977 802 413', em: 'ha.phan@topas-travel.vn', acc: null, load: [0, 0, 0], on: 1, created: '01/11/2026' },
  anh: { n: 'Trần Minh Anh', code: 'NS-001', kind: 'nb', grp: ['Điều hành'], lang: ['Đức', 'Anh'], area: 'Toàn quốc', tel: '0912 225 680', em: 'anh.tran@topas-travel.vn', acc: 'anh.tran@topas-travel.vn', load: [6, 9, 0], on: 1 },
  bao: { n: 'Trịnh Quốc Bảo', code: 'NS-011', kind: 'nb', grp: ['Trưởng đoàn'], lang: ['Anh'], area: 'Toàn quốc', tel: '0918 640 337', em: 'bao.trinh@topas-travel.vn', acc: null, load: [0, 0, 1, '21/11'], on: 1 },
  long: { n: 'Vũ Đức Long', code: 'NS-013', kind: 'ctv', grp: ['Hướng dẫn viên'], lang: ['Đức'], area: 'Toàn quốc', tel: '0983 557 120', em: 'longvu.german@gmail.com', load: [0, 0, 1, '20/11'], on: 1 },
  // Không nhận phân công (3)
  hoa: { n: 'Đinh Thị Hoa', code: 'NS-019', kind: 'ctv', grp: ['Hướng dẫn viên'], lang: ['Anh'], area: 'Hà Nội', tel: '0966 410 285', em: 'hoa.dinh.guide@gmail.com', load: [0, 0, 0], on: 0 },
  tung: { n: 'Mạc Văn Tùng', code: 'NS-004', kind: 'nb', grp: ['Điều hành'], lang: ['Anh', 'Trung'], area: 'Toàn quốc', tel: '0915 002 734', em: 'tung.mac@topas-travel.vn', acc: 'lock', load: [0, 0, 0], on: 0 },
  khoi: { n: 'Tạ Minh Khôi', code: 'NS-022', kind: 'ctv', grp: ['Hướng dẫn viên'], lang: ['Nhật', 'Anh'], area: 'Toàn quốc', tel: '0938 271 904', em: 'khoi.ta.jp@gmail.com', load: [0, 0, 0], on: 0 },
  // Thêm mới (W05–W07, W15)
  gbao: { n: 'Phùng Gia Bảo', code: 'NS-028', kind: 'ctv', grp: ['Hướng dẫn viên'], lang: ['Tây Ban Nha', 'Anh'], area: 'Toàn quốc', tel: '0978 330 512', em: 'giabao.spanish@gmail.com', load: [0, 0, 0], on: 1, isNew: 1 },
};
const PAGE1 = ['bthanh', 'khai', 'khoa', 'vinh', 'huy', 'yen', 'mai', 'nam', 'lan', 'ha', 'anh', 'bao'];
const OFF3 = ['hoa', 'tung', 'khoi'];

const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const sw = on => `<span class="sw ${on ? 'on' : ''}"><i></i></span>`;
const tag = (t, cls = '') => `<span class="tag ${cls}">${t}</span>`;

function accCell(r) {
  if (r.kind === 'ctv') return '<span class="muted">—</span>';
  if (r.acc === 'lock') return '<span style="color:#b91c1c">Bị khóa</span>';
  if (r.acc) return '<span style="color:#166534">✓ Đã liên kết</span>';
  return r.grp.includes('Điều hành') ? '<span class="b" style="color:#b45309">Chưa có</span>' : '<span class="muted">Chưa có</span>';
}
function loadCell(r) {
  const [hs, vc, t, d] = r.load; const p = [];
  if (hs) p.push(`${hs} hồ sơ`); if (vc) p.push(`${vc} việc`);
  if (t) p.push(`${t} Tour · từ ${d}`);
  return p.length ? `<div class="load">${p.join(' · ')}</div>` : '<span class="muted">—</span>';
}
// mode: edit (công tắc) | ro
function rowHtml(k, { off = false, onx = false, hl = false, pend = false } = {}) {
  const r = N[k];
  const on = off ? 0 : onx ? 1 : r.on;
  const cls = [hl ? 'new' : '', !on ? 'off' : ''].join(' ');
  return `<tr class="${cls}"><td><b style="color:#1d4ed8">${r.n}</b>${r.kind === 'ctv' ? ind('Cộng tác viên', 'v') : ''}${r.isNew ? ind('Mới', 'b') : ''}${pend ? ind('Cần giao lại 2 hồ sơ · 3 việc', 'a') : ''}<div class="muted small">${r.code} · ${r.area}</div></td>
<td>${r.grp.join(', ')}</td><td>${r.lang.length ? r.lang.join(', ') : '<span class="muted">—</span>'}</td><td>${r.tel}<div class="muted small">${r.em}</div></td>
<td>${accCell(r)}</td><td>${loadCell(r)}</td><td style="text-align:center">${sw(on)}</td></tr>`;
}
function table(keys, o = {}) {
  return `<div class="tbl"><table class="nw"><tr><th>Nhân sự ▲</th><th>Nhóm công việc</th><th>Ngôn ngữ</th><th>Liên hệ</th><th>Tài khoản</th><th>Đang được giao</th><th style="text-align:center;width:96px">Nhận phân công</th></tr>
${keys.map(k => rowHtml(k, { off: (o.offs || []).includes(k), onx: (o.ons || []).includes(k), hl: (o.hl || []).includes(k), pend: (o.pend || []).includes(k) })).join('')}</table></div>`;
}
const C_DEF = { on: 24, off: 3, all: 27, pg: 'Hiển thị 1–20 / 24 · sắp theo tên' };
const chips = (c = C_DEF, active = 'on') => `<div class="flex" style="margin:0 0 8px">${[['on', 'Đang nhận phân công'], ['off', 'Không nhận phân công'], ['all', 'Tất cả']].map(([k, n]) => `<span class="chip ${k === active ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}<span class="ml muted small">${c.pg || ''}</span></div>`;
const toolbar = ({ q = '', grp = 'Tất cả', kind = 'Tất cả', lang = 'Tất cả', clear = false } = {}) => `<div class="toolbar" style="margin-top:0">
<div class="input ${q ? 'focus' : 'ph'}" style="width:270px">🔍&nbsp; ${q || 'Tìm tên, điện thoại, email'}</div>
<div class="input sel ${grp !== 'Tất cả' ? 'focus' : ''}" style="width:230px"><span class="muted">Nhóm công việc:&nbsp;</span>${grp}</div>
<div class="input sel ${kind !== 'Tất cả' ? 'focus' : ''}" style="width:150px"><span class="muted">Loại:&nbsp;</span>${kind}</div>
<div class="input sel ${lang !== 'Tất cả' ? 'focus' : ''}" style="width:180px"><span class="muted">Ngôn ngữ:&nbsp;</span>${lang}</div>
${clear ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
const title = `<div class="ttl"><h1>Nhân sự</h1><span class="muted">Danh mục để phân công phụ trách hồ sơ, công việc và phục vụ Tour · không tạo tài khoản đăng nhập</span><div class="ml flex">${B('+ Thêm nhân sự', 'p')}</div></div>`;
const list = (o = {}) => title + toolbar(o.tb) + (o.banner || '') + chips(o.c, o.chip) + (o.body || table(o.keys || PAGE1, o.t || {}));

// ---------- W01 Danh sách mặc định ----------
S.W01 = P({ body: list() });

// ---------- W02 Lọc HDV tiếng Đức ----------
S.W02 = P({ body: list({ tb: { grp: 'Hướng dẫn viên', lang: 'Đức', clear: true }, c: { on: 3, off: 0, all: 3, pg: 'Hiển thị 1–3 / 3 · sắp theo tên' }, keys: ['khai', 'vinh', 'long'] }) });

// ---------- W03 Không khớp bộ lọc ----------
S.W03 = P({ body: list({ tb: { grp: 'Hướng dẫn viên', lang: 'Tây Ban Nha', clear: true }, c: { on: 0, off: 0, all: 0, pg: '' },
  body: `<div class="tbl"><div class="empty"><div class="big">Không có nhân sự khớp bộ lọc</div>Thử bỏ bớt bộ lọc. Người chưa có trong danh mục thì chọn Thêm nhân sự ở góc phải.</div></div>` }) });

// ---------- W04 Lỗi tải ----------
S.W04 = P({ body: list({ tb: { grp: 'Hướng dẫn viên', clear: true }, c: { on: '–', off: '–', all: '–', pg: '' },
  body: `<div class="tbl"><div class="empty"><div class="big" style="color:#b91c1c">Không tải được danh sách nhân sự</div>Kết nối tới máy chủ bị gián đoạn. Bộ lọc của bạn vẫn được giữ.<div style="margin-top:12px">${B('Thử lại', 'p')}</div></div></div>` }) });

// ---------- Bảng trượt nhân sự ----------
const kindSeg = k => `<div class="field"><label>Loại <span class="req">*</span></label><div class="seg"><span class="${k === 'nb' ? 'on' : ''}">Nội bộ</span><span class="${k === 'ctv' ? 'on' : ''}">Cộng tác viên</span></div></div>`;
const tagsInput = (arr, ph, o = {}) => `<div class="input tags ${o.cls || ''}">${arr.length ? arr.map(t => tag(t, 'x')).join('') : `<span class="muted">${ph}</span>`}</div>`;
const fieldTags = (label, arr, ph, o = {}) => `<div class="field"><label>${label}${o.req ? ' <span class="req">*</span>' : ''}${o.auto ? `<span class="auto">${o.auto}</span>` : ''}</label>${tagsInput(arr, ph, o)}${o.err ? `<div class="err">${o.err}</div>` : ''}${o.hint ? `<div class="hint">${o.hint}</div>` : ''}</div>`;
function infoForm(r, o = {}) {
  const accBox = r.kind === 'ctv'
    ? `<div class="hint">Cộng tác viên không có tài khoản đăng nhập. Được phân công phục vụ Tour theo nhóm công việc.</div>`
    : r.acc && r.acc !== 'lock' ? f('Tài khoản đăng nhập', `${r.acc} · đang hoạt động`, { cls: 'ro', hint: 'Liên kết và khóa tài khoản ở QT01 · Người dùng.' })
      : r.acc === 'lock' ? f('Tài khoản đăng nhập', `<span style="color:#b91c1c">${r.em} · bị khóa</span>`, { cls: 'ro' })
        : f('Tài khoản đăng nhập', '<span class="muted">Chưa liên kết</span>', { cls: 'ro' });
  return `${o.top || ''}<div class="f2">${f('Họ tên', r.n, { req: true, cls: o.nameCls || '' })}${f('Mã nhân sự', o.newCode || r.code, { cls: 'ro' })}</div>
<div class="f2">${kindSeg(r.kind)}${fieldTags('Khu vực phục vụ', [r.area], 'Toàn quốc', { auto: o.areaAuto })}</div>
${fieldTags('Nhóm công việc', o.grp || r.grp, 'Chọn một hoặc nhiều nhóm', { req: true, cls: o.grpCls, err: o.grpErr, hint: o.grpHint })}
${fieldTags('Ngôn ngữ phục vụ', r.lang, 'Chọn ngôn ngữ', { req: (o.grp || r.grp).includes('Hướng dẫn viên'), hint: 'Bắt buộc với nhóm Hướng dẫn viên. Dùng để gợi ý và cảnh báo lệch ngôn ngữ ở DH07, DH08.5.' })}
<div class="f2">${f('Điện thoại', o.tel || r.tel, { req: true, cls: o.telCls || '', err: o.telErr })}${f('Email', r.em)}</div>
${accBox}${f('Ghi chú', o.note || '<span class="muted">Ví dụ: chỉ nhận Tour miền Trung, không nhận Tour trekking</span>', { cls: 'area' })}`;
}
const dHead = (r, on, o = {}) => `<div class="dhd">${r.n}${r.kind === 'ctv' ? ind('Cộng tác viên', 'v') : ind('Nội bộ', 'b')}<span class="ml fl">${sw(on)}<span class="small">${on ? 'Nhận phân công' : 'Không nhận phân công'}</span></span></div>`;
const tabs = (t = 'info') => `<div class="ntab"><div class="${t === 'info' ? 'on' : ''}">Thông tin</div><div class="${t === 'cal' ? 'on' : ''}">Lịch phân công</div></div>`;
const editFoot = (o = {}) => `${o.del === 'dis' ? `<span class="btn lk" style="color:#9ca3af">Xóa nhân sự</span><span class="muted small">${o.delWhy}</span>` : B('Xóa nhân sự', 'lk" style="color:#b91c1c')}<span class="ml muted small">${o.stamp !== undefined ? o.stamp : 'Cập nhật lần cuối 05/11/2026 · Trần Minh Anh'}</span>${B('Đóng')}${o.save || B('Lưu', 'dis')}`;
const sub = r => `${r.code} · tạo ${r.created || (r.kind === 'ctv' ? '02/03/2026' : '15/01/2026')}`;

// ---------- W05 Thêm nhân sự ----------
const G = N.gbao;
S.W05 = P({ body: list(), overlay: drawer('Thêm nhân sự',
  infoForm(G, { newCode: '<span class="muted">Cấp khi lưu</span>', areaAuto: 'Mặc định', note: 'Nhận Tour tiếng Tây Ban Nha toàn quốc.' }) +
  `<div class="field"><label>Nhận phân công<span class="auto">Mặc định</span></label><div class="fl">${sw(1)} Có · hiện ngay trong danh sách chọn ở DH07, DH08</div></div>`,
  `${B('Hủy')}${B('Lưu nhân sự', 'p')}`, { wide: true }) });

// ---------- W06 Lỗi khi lưu ----------
S.W06 = P({ body: list(), overlay: drawer('Thêm nhân sự',
  infoForm(G, { newCode: '<span class="muted">Cấp khi lưu</span>', grp: [], grpCls: 'bad', grpErr: 'Chọn ít nhất một nhóm công việc.',
    tel: '0935 118 640', telCls: 'bad', telErr: 'Trùng điện thoại với Hồ Quang Vinh (NS-014). <span class="lnk">Mở nhân sự này</span>',
    note: 'Nhận Tour tiếng Tây Ban Nha toàn quốc.', top: `<div class="banner e" style="margin-bottom:10px"><span class="ico e">!</span><div>Chưa lưu được. Còn 2 lỗi cần sửa; dữ liệu đã nhập được giữ.</div></div>` }),
  `${B('Hủy')}${B('Lưu nhân sự', 'p')}`, { wide: true }) });

// ---------- W07 Sau khi thêm ----------
const P07 = ['bthanh', 'khai', 'khoa', 'vinh', 'huy', 'yen', 'mai', 'nam', 'lan', 'ha', 'gbao', 'anh'];
S.W07 = P({ body: list({ c: { on: 25, off: 3, all: 28, pg: 'Hiển thị 1–20 / 25 · sắp theo tên' }, keys: P07, t: { hl: ['gbao'] } }),
  overlay: `<div class="toast">Đã thêm Phùng Gia Bảo (NS-028). Có thể phân công ngay ở DH08.5.</div>` });

// ---------- W08 Sửa nhân sự: Thông tin (Điều hành chưa liên kết tài khoản) ----------
const H = N.ha;
S.W08 = P({ body: list(), overlay: drawer(dHead(H, 1), tabs('info') +
  `<div class="banner w" style="margin-bottom:10px;align-items:flex-start;font-size:12.3px"><span class="ico w">!</span><div>Chưa liên kết tài khoản đăng nhập nên chưa được chọn làm <b>phụ trách hồ sơ</b> và chưa nhận thông báo của nhóm Điều hành. Quản trị hệ thống liên kết ở QT01 · Người dùng.</div></div>` +
  infoForm(H, { note: 'Nhân viên mới từ 01/11/2026.' }), editFoot({ stamp: 'Chưa có thay đổi · cập nhật lần cuối 01/11/2026 · Trần Minh Anh' }), { wide: true, sub: sub(H) }) });

// ---------- W09 Bỏ nhóm công việc đang được giao ----------
const K = N.khai;
S.W09 = P({ body: list(), overlay: drawer(dHead(K, 1), tabs('info') +
  `<div class="banner w" style="margin-bottom:10px;align-items:flex-start;font-size:12.3px"><span class="ico w">!</span><div><b>Đỗ Văn Khải đang phục vụ 2 Tour chưa kết thúc với vai trò thuộc nhóm Hướng dẫn viên</b>
<table class="mini" style="margin:4px 0"><tr><td class="b" style="color:#1d4ed8">TP-2611-0042</td><td>Müller Reisen GmbH</td><td>HDV chính</td><td>18/11 – 25/11/2026</td></tr><tr><td class="b" style="color:#1d4ed8">TP-2612-0011</td><td>Schneider Gruppenreisen</td><td>HDV chính</td><td>10/12 – 16/12/2026</td></tr></table>
Lưu thì hai phân công này giữ nguyên; từ nay không chọn được Đỗ Văn Khải cho vai trò Hướng dẫn viên mới.</div></div>` +
  infoForm(K, { grp: ['Trưởng đoàn'], grpCls: 'focus', grpHint: 'Đã bỏ: <span class="tag off">Hướng dẫn viên</span>' }),
  `<span class="muted small">● Có thay đổi chưa lưu</span><span class="ml"></span>${B('Hủy thay đổi')}${B('Vẫn lưu', 'p')}`, { wide: true, sub: sub(K) }) });

// ---------- W10 Lịch phân công ----------
const A = N.anh;
const hs = (c, k, d, s, sc) => `<tr><td class="b" style="color:#1d4ed8">${c}</td><td>${k}</td><td>${d}</td><td>${bd(s, sc)}</td></tr>`;
const vc = (c, t, h, cls = '') => `<tr><td class="b" style="color:#1d4ed8">${c}</td><td>${t}</td><td class="${cls}">${h}</td></tr>`;
S.W10 = P({ body: list(), overlay: drawer(dHead(A, 1), tabs('cal') +
  `<div class="muted small" style="margin-bottom:6px">Phân công còn hiệu lực từ hôm nay 11/11/2026. Bấm Tour Code để mở hồ sơ ở thẻ mới. Lịch sử đã qua xem trong từng hồ sơ.</div>
<div class="sec">Phụ trách hồ sơ · 6</div><div class="tbl"><table class="mini"><tr><th>Tour Code</th><th>Khách</th><th>Thời gian</th><th>Trạng thái</th></tr>
${hs('TP-2611-0039', 'Lefèvre Voyages', '12/11 – 19/11/2026', 'Mới tạo', 'b-gray')}${hs('TP-2611-0042', 'Müller Reisen GmbH', '18/11 – 25/11/2026', 'Mới tạo', 'b-gray')}${hs('TP-2611-0051', 'Hamburg Kultur Reisen', '20/11 – 26/11/2026', 'Mới tạo', 'b-gray')}${hs('TP-2610-0118', 'Vista Travel Australia', '05/11 – 13/11/2026', 'Đang diễn ra', 'b-blue')}${hs('TP-2610-0097', 'Bern Alpin Tours', '28/10 – 06/11/2026', 'Đã kết thúc', 'b-violet')}${hs('TP-2612-0008', 'Rhein Senioren Club', '07/12 – 15/12/2026', 'Mới tạo', 'b-gray')}</table></div>
<div class="sec">Công việc chưa hoàn tất · 9 <span style="text-transform:none;font-weight:400">(5 việc hạn gần nhất)</span></div><div class="tbl"><table class="mini"><tr><th>Tour Code</th><th>Công việc</th><th>Hạn</th></tr>
${vc('TP-2611-0039', 'Gửi Rooming list cho khách sạn', 'Quá hạn 1 ngày · 10/11', 'b" style="color:#b91c1c')}${vc('TP-2611-0039', 'Xác nhận xe đón sân bay Nội Bài', '12/11/2026')}${vc('TP-2611-0042', 'Đặt du thuyền Hạ Long 2N1Đ', '13/11/2026')}${vc('TP-2611-0042', 'Gửi Pax list cho du thuyền', '15/11/2026')}${vc('TP-2611-0051', 'Xác nhận HDV tiếng Đức', '16/11/2026')}
<tr><td colspan="3" class="muted small" style="text-align:center">… 4 việc khác, hạn từ 18/11 đến 30/11</td></tr></table></div>
<div class="sec">Phục vụ Tour · 0</div><div class="muted small">Không có phân công phục vụ Tour.</div>`,
  `<span class="ml"></span>${B('Đóng')}`, { wide: true, sub: sub(A) }) });

// ---------- W11 Xung đột khi lưu ----------
const HU = N.huy;
S.W11 = P({ body: list(), overlay: drawer(dHead(HU, 1), tabs('info') +
  `<div class="banner e" style="margin-bottom:10px;align-items:flex-start"><span class="ico e">!</span><div style="flex:1"><b>Chưa lưu: nhân sự này vừa được Đỗ Văn Khoa cập nhật lúc 10:42.</b><div class="small">Thay đổi của bạn vẫn còn trên form. Xem bản mới rồi lưu lại.</div></div>${B('Xem bản mới', 'sm')}</div>` +
  infoForm(HU, { tel: '0912 406 389', telCls: 'focus' }),
  `<span class="muted small">● Có thay đổi chưa lưu</span><span class="ml"></span>${B('Hủy thay đổi')}${B('Lưu', 'p')}`, { wide: true, sub: sub(HU) }) });

// ---------- W12 Hộp thoại tắt nhận phân công ----------
const offBox = `<div class="muted" style="margin-bottom:8px"><b style="color:#111827">Lê Quang Huy</b> đang được giao:</div>
<div class="card" style="padding:8px 12px;margin-bottom:8px">
<div class="sec" style="margin-top:0">Phụ trách 2 hồ sơ Tour chưa đóng</div>
<table class="mini"><tr><th>Tour Code</th><th>Khách</th><th>Thời gian</th><th>Trạng thái</th></tr>
${hs('TP-2611-0047', 'Dupont Voyages', '21/11 – 27/11/2026', 'Mới tạo', 'b-gray')}${hs('TP-2612-0003', 'Kim Tours Korea', '04/12 – 09/12/2026', 'Mới tạo', 'b-gray')}</table>
<div class="sec">3 công việc chưa hoàn tất</div>
<table class="mini"><tr><th>Tour Code</th><th>Công việc</th><th>Hạn</th></tr>
${vc('TP-2611-0047', 'Gửi Rooming list cho khách sạn', '14/11/2026')}${vc('TP-2611-0047', 'Xác nhận xe đón sân bay Đà Nẵng', '18/11/2026')}${vc('TP-2612-0003', 'Đặt vé tham quan Bà Nà', '27/11/2026')}</table>
<div class="sec">Phục vụ Tour</div><div class="small">Không có.</div></div>
<div class="banner i" style="align-items:flex-start;font-size:12.3px"><span class="ico i">i</span><div>Sau khi tắt: Lê Quang Huy không hiện khi chọn người mới ở DH07, DH08. Các phân công trên <b>giữ nguyên</b> và được gắn chỉ báo “Không nhận phân công” để giao lại. Nhóm Điều hành nhận một thông báo liệt kê 2 hồ sơ này.</div></div>`;
S.W12 = P({ body: list(), overlay: modal('Tắt nhận phân công của Lê Quang Huy?', offBox, `${B('Giữ nhận phân công')}${B('Tắt nhận phân công', 'dp')}`, 660) });

// ---------- W13 Sau khi tắt ----------
S.W13 = P({ body: list({ c: { on: 23, off: 4, all: 27, pg: 'Hiển thị 1–20 / 23 · sắp theo tên' }, t: { offs: ['huy'], pend: ['huy'] } }),
  overlay: `<div class="toast">Đã tắt nhận phân công của Lê Quang Huy. 2 hồ sơ, 3 công việc được gắn chỉ báo để giao lại.<a>Hoàn tác</a></div>` });

// ---------- W14 Bật lại ----------
S.W14 = P({ body: list({ chip: 'off', c: { on: 25, off: 2, all: 27, pg: 'Hiển thị 1–3 / 3 · sắp theo tên' }, keys: OFF3, t: { hl: ['khoi'], ons: ['khoi'] } }),
  overlay: `<div class="toast">Đã bật nhận phân công cho Tạ Minh Khôi.<a>Hoàn tác</a></div>` });

// ---------- W15 Xóa nhân sự chưa dùng ----------
S.W15 = P({ body: list({ c: { on: 25, off: 3, all: 28, pg: 'Hiển thị 1–20 / 25 · sắp theo tên' }, keys: P07 }),
  overlay: drawer(dHead(G, 1), tabs('info') + infoForm(G, { note: 'Nhận Tour tiếng Tây Ban Nha toàn quốc.' }), editFoot({ stamp: 'Tạo 11/11/2026 09:20 · Trần Minh Anh' }), { wide: true, sub: 'NS-028 · tạo 11/11/2026' })
    + modal('Xóa nhân sự Phùng Gia Bảo?', `<div>Nhân sự này <b>chưa từng được phân công</b> ở hồ sơ Tour, công việc hay phục vụ Tour nên có thể xóa.</div><div class="muted small" style="margin-top:6px">Xóa không hoàn tác được. Nếu chỉ tạm ngừng hợp tác, hãy tắt Nhận phân công.</div>`, `${B('Giữ lại')}${B('Xóa nhân sự', 'dp')}`, 480) });

// ---------- W15a Không xóa được ----------
S.W15a = P({ body: list(), overlay: drawer(dHead(K, 1), tabs('info') + infoForm(K, {}),
  editFoot({ del: 'dis', delWhy: 'Đã phân công ở 7 hồ sơ Tour. Hãy tắt Nhận phân công.', stamp: 'Chưa có thay đổi' }), { wide: true, sub: sub(K) }) });

module.exports = S;
