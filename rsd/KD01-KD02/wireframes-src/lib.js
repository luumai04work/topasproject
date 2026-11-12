// Thư viện dựng wireframe dùng chung (từ DH08, DH02) — khung chung, thành phần và dữ liệu minh họa.
const CSS = `
*{box-sizing:border-box}
body{margin:0;font:13px/1.42 "Segoe UI",Arial,sans-serif;color:#1f2937;background:#f3f4f6;width:1280px;height:800px;overflow:hidden}
.app{display:flex;height:800px}
.side{width:176px;background:#1e293b;color:#cbd5e1;padding:14px 0;flex:none}
.side .logo{color:#fff;font-weight:700;font-size:16px;padding:0 16px 12px;letter-spacing:.5px}
.side .grp{padding:10px 16px 4px;font-size:10.5px;text-transform:uppercase;color:#64748b;letter-spacing:.4px}
.side a{display:block;padding:5px 16px;color:#cbd5e1;font-size:12.5px}
.side a.on{background:#334155;color:#fff;border-left:3px solid #60a5fa;padding-left:13px}
.main{flex:1;display:flex;flex-direction:column;min-width:0;position:relative}
.top{height:42px;background:#fff;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;padding:0 18px;justify-content:space-between;flex:none}
.crumb{color:#6b7280}.crumb b{color:#111827}
.user{display:flex;gap:8px;align-items:center;color:#374151}
.avatar{width:26px;height:26px;border-radius:50%;background:#dbeafe;color:#1d4ed8;display:grid;place-items:center;font-weight:700;font-size:11px}
.page{padding:12px 18px;overflow:hidden;flex:1}
.hdr{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:10px 16px 0}
.r1{display:flex;align-items:center;gap:8px}
.code{font-size:18px;font-weight:700;margin-right:4px}
.meta{display:flex;gap:6px 20px;margin-top:6px;color:#6b7280;flex-wrap:wrap;font-size:12.5px}
.meta b{color:#111827;font-weight:600}
.lnk{color:#2563eb!important;text-decoration:underline}
.actions{margin-left:auto;display:flex;gap:8px;align-items:center}
.btn{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:6px;border:1px solid #d1d5db;background:#fff;color:#111827;font-weight:500;white-space:nowrap;font-size:12.5px}
.btn.p{background:#2563eb;border-color:#2563eb;color:#fff}
.btn.g{background:#16a34a;border-color:#16a34a;color:#fff}
.btn.d{border-color:#fca5a5;color:#b91c1c}
.btn.dp{background:#dc2626;color:#fff;border-color:#dc2626}
.btn.dis{background:#f3f4f6;color:#9ca3af;border-color:#e5e7eb}
.btn.sm{height:24px;padding:0 8px;font-size:12px}
.btn.lk{border:none;background:none;color:#2563eb;padding:0;height:auto}
.btn.busy{background:#93c5fd;border-color:#93c5fd;color:#fff}
.tabs{display:flex;gap:2px;margin-top:8px}
.tab{padding:7px 11px;color:#4b5563;border-bottom:2px solid transparent;display:flex;gap:6px;align-items:center;font-size:12.5px;white-space:nowrap}
.tab.on{color:#1d4ed8;border-color:#2563eb;font-weight:600}
.tab.lock{color:#9ca3af}
.cnt{background:#e5e7eb;color:#374151;border-radius:9px;padding:0 6px;font-size:11px;font-weight:600}
.cnt.w{background:#fef3c7;color:#92400e}.cnt.r{background:#fee2e2;color:#991b1b}.cnt.g{background:#dcfce7;color:#166534}
.badge{display:inline-block;padding:1px 8px;border-radius:10px;font-size:11.5px;font-weight:600;white-space:nowrap;line-height:18px}
.b-gray{background:#f3f4f6;color:#374151;border:1px solid #e5e7eb}
.b-blue{background:#dbeafe;color:#1e40af}.b-green{background:#dcfce7;color:#166534}
.b-amber{background:#fef3c7;color:#92400e}.b-red{background:#fee2e2;color:#991b1b}
.b-violet{background:#ede9fe;color:#5b21b6}.b-cyan{background:#cffafe;color:#155e75}
.card{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:12px 14px}
.card h3{margin:0 0 8px;font-size:13px;display:flex;align-items:center;gap:8px}
.grid{display:grid;gap:12px}
table{width:100%;border-collapse:collapse;background:#fff}
th{font-size:11.5px;color:#6b7280;text-align:left;font-weight:600;padding:6px 8px;border-bottom:1px solid #e5e7eb;background:#f9fafb;white-space:nowrap}
td{padding:6px 8px;border-bottom:1px solid #f1f5f9;vertical-align:middle}
tr.sel td{background:#eff6ff}
tr.hot td{background:#fffbeb}
tr.bad td{background:#fef2f2}
tr.grp td{background:#f8fafc;font-weight:600;color:#334155;font-size:12px;padding:5px 8px}
tr.dim td{color:#9ca3af}
.tbl{border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;background:#fff}
.muted{color:#6b7280}.small{font-size:11.5px}.b{font-weight:600}
.toolbar{display:flex;gap:8px;align-items:center;margin:10px 0}
.input{height:30px;border:1px solid #d1d5db;border-radius:6px;padding:0 10px;display:flex;align-items:center;background:#fff;color:#111827;min-width:0;white-space:nowrap;overflow:hidden}
.input.ph{color:#9ca3af}
.input.sel::after{content:"▾";margin-left:auto;color:#6b7280;padding-left:8px}
.input.area{height:auto;min-height:54px;align-items:flex-start;padding:6px 10px;white-space:normal}
.input.bad{border-color:#dc2626;background:#fff7f7}
.input.ro{background:#f9fafb;color:#374151;border-style:dashed}
.input.focus{border-color:#2563eb;box-shadow:0 0 0 3px #dbeafe}
.chip{border:1px solid #d1d5db;border-radius:14px;padding:3px 10px;background:#fff;color:#374151;font-size:12px;white-space:nowrap;display:inline-flex;gap:5px;align-items:center}
.chip.on{background:#1e40af;color:#fff;border-color:#1e40af}
.chip.on .cnt{background:#3b82f6;color:#fff}
.cb{width:14px;height:14px;border:1.5px solid #9ca3af;border-radius:3px;display:inline-block;vertical-align:middle;background:#fff;position:relative;flex:none}
.cb.on{background:#2563eb;border-color:#2563eb}
.cb.on::after{content:"";position:absolute;left:3.5px;top:0.5px;width:4px;height:8px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}
.cb.part{background:#2563eb;border-color:#2563eb}.cb.part::after{content:"";position:absolute;left:2px;top:5px;width:7px;height:2px;background:#fff}
.rd{width:14px;height:14px;border:1.5px solid #9ca3af;border-radius:50%;display:inline-block;vertical-align:middle;background:#fff;flex:none}
.rd.on{border:4px solid #2563eb}
.banner{border-radius:8px;padding:8px 12px;display:flex;gap:10px;align-items:center}
.banner.w{background:#fffbeb;border:1px solid #fcd34d;color:#78350f}
.banner.e{background:#fef2f2;border:1px solid #fca5a5;color:#7f1d1d}
.banner.i{background:#eff6ff;border:1px solid #bfdbfe;color:#1e3a8a}
.banner.s{background:#f0fdf4;border:1px solid #86efac;color:#14532d}
.overlay{position:absolute;inset:0;background:rgba(15,23,42,.40)}
.drawer{position:absolute;top:0;right:0;bottom:0;width:600px;background:#fff;box-shadow:-6px 0 24px rgba(0,0,0,.18);display:flex;flex-direction:column}
.drawer.wide{width:760px}
.dh{padding:12px 18px;border-bottom:1px solid #e5e7eb}
.dh .t{font-size:15px;font-weight:700;display:flex;align-items:center;gap:8px}
.dh .x{margin-left:auto;color:#6b7280;font-weight:400;font-size:18px}
.db{padding:12px 18px;flex:1;overflow:hidden}
.df{padding:10px 18px;border-top:1px solid #e5e7eb;display:flex;gap:8px;justify-content:flex-end;align-items:center}
.modal{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:540px;background:#fff;border-radius:10px;box-shadow:0 20px 50px rgba(0,0,0,.28)}
.mh{padding:14px 18px 10px;font-size:15px;font-weight:700}
.mb{padding:4px 18px 14px}
.mf{padding:12px 18px;border-top:1px solid #e5e7eb;display:flex;justify-content:flex-end;gap:8px;align-items:center}
.field{margin-bottom:9px}
.field>label{display:block;font-size:12px;color:#374151;margin-bottom:3px;font-weight:600}
.f2{display:grid;grid-template-columns:1fr 1fr;gap:0 12px}
.f3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0 12px}
.req{color:#dc2626}
.auto{font-size:10.5px;background:#ecfeff;color:#0e7490;border-radius:4px;padding:0 5px;margin-left:6px;font-weight:600}
.err{color:#b91c1c;font-size:11.5px;margin-top:3px}
.hint{color:#6b7280;font-size:11.5px;margin-top:3px}
.toast{position:absolute;right:20px;bottom:20px;background:#111827;color:#fff;padding:10px 14px;border-radius:8px;display:flex;gap:14px;align-items:center;box-shadow:0 8px 20px rgba(0,0,0,.25)}
.toast a{color:#93c5fd;font-weight:600}
.bulk{background:#1e3a8a;color:#fff;border-radius:8px;padding:7px 12px;display:flex;align-items:center;gap:10px;margin:8px 0}
.bulk .btn{background:#fff;border-color:#fff}
.bulk .btn.p{background:#3b82f6;border-color:#93c5fd;color:#fff}
.email{border:1px solid #e5e7eb;border-radius:8px;background:#fff}
.email .row{display:flex;border-bottom:1px solid #f1f5f9;padding:5px 10px;gap:8px;align-items:center}
.email .row>span:first-child{width:64px;color:#6b7280;flex:none}
.email .body{padding:8px 10px;font-size:12.3px;line-height:1.5;white-space:pre-line}
.hl{background:#fef9c3;border-radius:2px;padding:0 2px}
.prog{height:6px;background:#e5e7eb;border-radius:3px;overflow:hidden;flex:1}
.prog i{display:block;height:100%;background:#2563eb}
.prog.g i{background:#16a34a}.prog.a i{background:#f59e0b}
.kpi{font-size:19px;font-weight:700}
.tl{border-left:2px solid #e5e7eb;margin-left:6px;padding-left:16px}
.tl .it{position:relative;margin-bottom:11px}
.tl .it::before{content:"";position:absolute;left:-22px;top:4px;width:10px;height:10px;border-radius:50%;background:#94a3b8;border:2px solid #fff}
.tl .it.inc::before{background:#dc2626}.tl .it.ok::before{background:#16a34a}.tl .it.bl::before{background:#2563eb}
.flex{display:flex;gap:8px;align-items:center}
.col{display:flex;flex-direction:column;gap:8px}
.ml{margin-left:auto}
.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.sep{height:1px;background:#e5e7eb;margin:10px 0}
.sec{font-size:11px;text-transform:uppercase;letter-spacing:.4px;color:#6b7280;font-weight:700;margin:10px 0 6px}
.list .li{display:flex;gap:10px;align-items:center;padding:7px 0;border-bottom:1px solid #f1f5f9}
.ico{width:18px;height:18px;border-radius:50%;display:inline-grid;place-items:center;font-size:11px;font-weight:700;flex:none}
.ico.ok{background:#dcfce7;color:#166534}.ico.w{background:#fef3c7;color:#92400e}.ico.e{background:#fee2e2;color:#991b1b}.ico.i{background:#dbeafe;color:#1e40af}
.pill{border:1px dashed #cbd5e1;border-radius:6px;padding:4px 8px;font-size:12px;background:#f8fafc}
.room{border:1px solid #e5e7eb;border-radius:8px;padding:8px;background:#fff}
.room.bad{border-color:#f87171;background:#fef2f2}
.room h4{margin:0 0 6px;font-size:12.5px;display:flex;gap:6px;align-items:center}
.pax{background:#f1f5f9;border-radius:4px;padding:3px 6px;font-size:12px;margin-bottom:4px;display:flex;gap:6px;align-items:center}
.drag{outline:2px dashed #2563eb;background:#eff6ff}
.ntab{display:flex;gap:0;border-bottom:1px solid #e5e7eb;margin-bottom:10px}
.ntab div{padding:6px 12px;font-size:12.5px;color:#4b5563;border-bottom:2px solid transparent}
.ntab div.on{color:#1d4ed8;border-color:#2563eb;font-weight:600}
.cal{display:grid;grid-template-columns:210px repeat(8,1fr);border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;background:#fff}
.cal>div{border-bottom:1px solid #f1f5f9;border-right:1px solid #f1f5f9;padding:6px 8px;font-size:12px;min-height:34px}
.cal .h{background:#f9fafb;color:#6b7280;font-weight:600;font-size:11.5px}
.bar{border-radius:4px;padding:2px 6px;font-size:11.5px;color:#fff;background:#2563eb;white-space:nowrap;overflow:hidden}
.bar.g{background:#0d9488}.bar.v{background:#7c3aed}.bar.r{background:#dc2626}
.file{border:1px solid #e5e7eb;border-radius:6px;padding:6px 10px;display:flex;gap:8px;align-items:center;font-size:12px;margin-bottom:6px}
.file.bad{border-color:#fca5a5;background:#fef2f2}
.drop{border:1.5px dashed #cbd5e1;border-radius:8px;padding:10px;text-align:center;color:#6b7280;font-size:12px}
.isel{display:inline-flex;align-items:center;gap:6px;border:1px solid #e5e7eb;border-radius:5px;padding:1px 7px;background:#fff;white-space:nowrap}
.isel::after{content:"▾";color:#9ca3af;font-size:11px}
.isel.ph{color:#9ca3af;border-style:dashed}
.dd::after{content:" ▾";font-weight:400}
.skel{background:#e5e7eb;border-radius:4px;height:12px}
.ttl{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.ttl h1{font-size:18px;margin:0}
.isel.red{border-color:#f87171;color:#b91c1c;background:#fff7f7}
.isel.open{border-color:#2563eb;box-shadow:0 0 0 3px #dbeafe}
.menu{position:absolute;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.18);padding:6px 0;z-index:5}
.menu .mi{padding:6px 12px;display:flex;gap:8px;align-items:center;font-size:12.5px}
.menu .mi.on{background:#eff6ff}
.menu .mh2{padding:4px 12px;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:.3px}
.bell{position:relative;font-size:15px;margin-right:6px}
.bell i{position:absolute;top:-6px;right:-8px;background:#dc2626;color:#fff;border-radius:8px;font-size:10px;font-style:normal;padding:0 4px;font-weight:700}
.ind{display:inline-block;font-size:11px;font-weight:600;border-radius:4px;padding:0 5px;margin-left:4px;line-height:17px;white-space:nowrap}
.ind.r{background:#fee2e2;color:#991b1b}.ind.a{background:#fef3c7;color:#92400e}.ind.g{background:#dcfce7;color:#166534}.ind.b{background:#dbeafe;color:#1e40af}.ind.v{background:#ede9fe;color:#5b21b6}
.strip{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;margin-bottom:10px}
tr.new td{background:#f0fdf4}
.empty{padding:60px 20px;text-align:center;color:#6b7280}
.empty .big{font-size:15px;color:#111827;font-weight:600;margin-bottom:6px}
.sw{display:inline-block;width:30px;height:17px;border-radius:9px;background:#d1d5db;position:relative;vertical-align:middle;flex:none}
.sw i{position:absolute;top:2px;left:2px;width:13px;height:13px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.3)}
.sw.on{background:#16a34a}.sw.on i{left:15px}
.nw td{white-space:nowrap}
tr.off td{color:#9ca3af}tr.off td b{color:#9ca3af!important}
.steps{display:flex;gap:14px;font-size:12px;color:#6b7280;margin-bottom:10px}
.steps .on{color:#1d4ed8;font-weight:700}
`;

const SIDE = (on = 'Hồ sơ Tour', user = 'kd') => `<div class="side"><div class="logo">TOPAS</div>
<div class="grp">Kinh doanh</div>${['Tour mẫu', 'Khách hàng', 'Yêu cầu Tour', 'Booking'].map(x => `<a class="${x === on ? 'on' : ''}">${x}</a>`).join('')}
<div class="grp">Điều hành</div>${['Hồ sơ Tour', 'Nhà cung cấp', 'Dịch vụ & bảng giá', 'Nhân sự', 'Mẫu checklist'].map(x => `<a class="${x === on ? 'on' : ''}">${x}</a>`).join('')}
<div class="grp">Kế toán</div><a>Công nợ & thu chi</a>
<div class="grp">Quản trị</div><a>Mẫu tài liệu</a><a>Báo cáo</a></div>`;

const USERS = {
  dh: ['TA', 'Trần Minh Anh', 'Điều hành'],
  kd: ['HN', 'Nguyễn Hoàng Nam', 'Kinh doanh'],
  kt: ['NL', 'Phạm Ngọc Lan', 'Kế toán'],
  dh2: ['ĐK', 'Đỗ Văn Khoa', 'Điều hành'],
  kd2: ['TT', 'Lê Thu Trang', 'Kinh doanh'],
};

function page({ mod = 'Điều hành', crumb = 'Hồ sơ Tour', last = '', user = 'dh', body = '', overlay = '', bell = 0, side = 'Hồ sơ Tour', css = '' }) {
  const u = USERS[user];
  const cr = last ? `${mod} / ${crumb} / <b>${last}</b>` : `${mod} / <b>${crumb}</b>`;
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><style>${CSS}${css}</style></head><body><div class="app">${SIDE(side)}
<div class="main"><div class="top"><div class="crumb">${cr}</div>
<div class="user"><span class="bell">🔔${bell ? `<i>${bell}</i>` : ''}</span><span class="muted small">${u[2]}</span><div class="avatar">${u[0]}</div>${u[1]}</div></div>
<div class="page">${body}</div>${overlay}</div></div></body></html>`;
}

const STATUS = {
  new: ['Mới tạo', 'b-gray'],
  run: ['Đang diễn ra', 'b-blue'],
  end: ['Đã kết thúc', 'b-violet'],
  closed: ['Đã đóng', 'b-gray'],
};

const TABDEF = [
  ['ov', 'Tổng quan'],
  ['sv', 'Dịch vụ & checklist'],
  ['bk', 'Đặt dịch vụ'],
  ['px', 'Khách đoàn'],
  ['hr', 'Nhân sự'],
  ['lg', 'Nhật ký & sự cố'],
  ['co', 'Chi phí phát sinh'],
  ['st', 'Quyết toán'],
];
const DEFCNT = { sv: '<span class="cnt">12/18</span>', bk: '<span class="cnt w">4</span>', px: '<span class="cnt w">2</span>', st: '<span class="small">🔒</span>' };

function hdr({ status = 'new', extra = '', actions = '', tab = 'ov', cnt = {}, meta = {} } = {}) {
  const s = STATUS[status];
  const c = Object.assign({}, DEFCNT, cnt);
  const m = Object.assign({ thu: '152.400.000 ₫', tra: '98.650.000 ₫', pt: 'Trần Minh Anh' }, meta);
  return `<div class="hdr"><div class="r1"><span class="code">TP-2611-0042</span><span class="badge ${s[1]}">${s[0]}</span>${extra}
<div class="actions">${actions}</div></div>
<div class="meta"><span>Booking <b class="lnk">BK-2610-0137</b></span><span>Khách <b>Müller Reisen GmbH</b> · 18 khách</span><span>Thời gian <b>18/11 – 25/11/2026</b> · 8N7Đ</span><span>Ngôn ngữ phục vụ <b>Tiếng Đức</b></span><span>Phụ trách <b>${m.pt}</b></span><span>Phải thu còn <b>${m.thu}</b></span><span>Phải trả còn <b>${m.tra}</b></span></div>
<div class="tabs">${TABDEF.map(([k, n]) => `<div class="tab ${k === tab ? 'on' : ''} ${k === 'st' && status === 'new' || k === 'st' && status === 'run' ? 'lock' : ''}">${n}${c[k] ? ' ' + c[k] : ''}</div>`).join('')}</div></div>`;
}

const drawer = (title, body, foot, { wide = false, sub = '' } = {}) => `<div class="overlay"></div><div class="drawer ${wide ? 'wide' : ''}"><div class="dh"><div class="t">${title}<span class="x">✕</span></div>${sub ? `<div class="muted small" style="margin-top:2px">${sub}</div>` : ''}</div><div class="db">${body}</div><div class="df">${foot}</div></div>`;
const modal = (title, body, foot, w = 540) => `<div class="overlay"></div><div class="modal" style="width:${w}px"><div class="mh">${title}</div><div class="mb">${body}</div><div class="mf">${foot}</div></div>`;
const f = (label, val, o = {}) => `<div class="field"><label>${label}${o.req ? ' <span class="req">*</span>' : ''}${o.auto ? `<span class="auto">${o.auto === true ? 'Tự điền' : o.auto}</span>` : ''}</label><div class="input ${o.cls || ''}">${val}</div>${o.err ? `<div class="err">${o.err}</div>` : ''}${o.hint ? `<div class="hint">${o.hint}</div>` : ''}</div>`;
const B = (t, cls = '') => `<span class="btn ${cls}">${t}</span>`;
const bd = (t, c) => `<span class="badge ${c}">${t}</span>`;
const SVC = {
  'Cần đặt': 'b-amber', 'Chờ kết quả': 'b-blue', 'Cần đặt lại': 'b-red', 'Đã xác nhận': 'b-green', 'Đã hủy': 'b-gray', 'Xác nhận một phần': 'b-violet', 'Chờ Kinh doanh': 'b-cyan', 'Cần hủy': 'b-red', 'Cần điều chỉnh': 'b-amber',
};
const sv = t => bd(t, SVC[t] || 'b-gray');
const PRG = { 'Chưa làm': 'b-gray', 'Đang làm': 'b-blue', 'Hoàn tất': 'b-green' };
const pg = (t, dd) => `<span class="badge ${PRG[t]} ${dd ? "dd" : ""}">${t}</span>`;

module.exports = { page, hdr, drawer, modal, f, B, bd, sv, pg, STATUS, USERS };
