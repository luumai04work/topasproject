// Wireframe QT01 · Người dùng. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
const { page, drawer, modal, f, B, bd } = require('./lib');
const S = {};
const CSS = `.tag{display:inline-flex;align-items:center;gap:4px;background:#eef2ff;color:#3730a3;border-radius:4px;padding:0 6px;font-size:11.5px;line-height:19px;margin:1px 3px 1px 0;white-space:nowrap}
.tag.qt{background:#fae8ff;color:#86198f}
.tag.off{background:#f3f4f6;color:#9ca3af}
.fl{display:flex;align-items:center;gap:8px;font-size:12.5px}
.rl{display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;border:1px solid #e5e7eb;border-radius:6px;padding:8px 10px}
.rl .o{display:flex;gap:8px;align-items:flex-start;font-size:12.5px}
.rl .o small{display:block;color:#6b7280;font-size:11px}
.rl .o.dis{color:#9ca3af}
.pw{font-family:Consolas,monospace;font-size:17px;letter-spacing:1px;background:#f8fafc;border:1px dashed #94a3b8;border-radius:6px;padding:6px 10px;display:inline-block}
.kv{display:grid;grid-template-columns:150px 1fr;gap:6px 10px;font-size:12.5px;align-items:center}
.kv>span:nth-child(odd){color:#6b7280}
.own{border:1px solid #e5e7eb;border-radius:6px;padding:7px 10px;background:#f9fafb;font-size:12.5px}
.ol .li{display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid #f1f5f9;font-size:12.5px}
.ol .li .n{width:30px;text-align:right;font-weight:700}
.dis-why{font-size:11px;color:#6b7280;margin-top:2px;text-align:right}
`;
const P = o => page(Object.assign({ crumb: 'Người dùng', side: 'Người dùng', mod: 'Quản trị', user: 'qt', css: CSS }, o));

// ---------- Dữ liệu minh họa (hôm nay 11/11/2026, 09:30) ----------
// Đang hoạt động 10 · Bị khóa 2 · Tất cả 12. Đỗ Quang Huy là Quản trị hệ thống đang hoạt động duy nhất.
// st: on | lock. ind: pw (Chờ đổi mật khẩu). Mật khẩu tạm không hết hạn.
const U = {
  qhuy: { n: 'Đỗ Quang Huy', em: 'huy.doquang@topas-travel.vn', r: ['Quản trị hệ thống'], ns: null, st: 'on', last: '11/11/2026 09:02', me: 1 },
  khoa: { n: 'Đỗ Văn Khoa', em: 'khoa.do@topas-travel.vn', r: ['Điều hành'], ns: ['NS-002', 'Điều hành'], st: 'on', last: '11/11/2026 08:41' },
  lqhuy: { n: 'Lê Quang Huy', em: 'huy.le@topas-travel.vn', r: ['Điều hành'], ns: ['NS-003', 'Điều hành'], st: 'on', last: '10/11/2026 17:55' },
  lha: { n: 'Lê Thu Hà', em: 'ha.le@topas-travel.vn', r: ['Kinh doanh'], ns: null, st: 'on', last: '10/11/2026 18:20' },
  tung: { n: 'Mạc Văn Tùng', em: 'tung.mac@topas-travel.vn', r: ['Điều hành'], ns: ['NS-004', 'Điều hành'], st: 'lock', last: '30/09/2026 17:10', lockd: '02/10/2026' },
  nam: { n: 'Nguyễn Hoàng Nam', em: 'nam.nguyen@topas-travel.vn', r: ['Kinh doanh'], ns: ['NS-008', 'Kinh doanh'], st: 'on', last: '11/11/2026 08:15' },
  hang: { n: 'Nguyễn Thị Hằng', em: 'hang.nguyen@topas-travel.vn', r: ['Kế toán'], ns: null, st: 'on', last: null, ind: 'pw' },
  lan: { n: 'Phạm Ngọc Lan', em: 'lan.pham@topas-travel.vn', r: ['Kế toán'], ns: ['NS-010', 'Kế toán'], st: 'on', last: '11/11/2026 08:30' },
  ptung: { n: 'Phạm Thanh Tùng', em: 'tung.pham@topas-travel.vn', r: ['Kinh doanh'], ns: null, st: 'on', last: '10/11/2026 16:47' },
  pha: { n: 'Phan Thu Hà', em: 'ha.phan@topas-travel.vn', r: ['Điều hành'], ns: ['NS-026', 'Điều hành'], st: 'on', last: null, ind: 'pw', isNew: 1 },
  anh: { n: 'Trần Minh Anh', em: 'anh.tran@topas-travel.vn', r: ['Điều hành'], ns: ['NS-001', 'Điều hành'], st: 'on', last: '11/11/2026 07:58' },
  qbao: { n: 'Trần Quốc Bảo', em: 'bao.tran@topas-travel.vn', r: ['Kinh doanh'], ns: null, st: 'lock', last: '27/10/2026 18:02', lockd: '28/10/2026' },
  minh: { n: 'Vũ Đức Minh', em: 'minh.vu@topas-travel.vn', r: ['Kinh doanh', 'Điều hành'], ns: null, st: 'on', last: null, ind: 'pw' },
};
const ALL = ['qhuy', 'khoa', 'lqhuy', 'lha', 'tung', 'nam', 'hang', 'lan', 'ptung', 'anh', 'qbao', 'minh'];
const ACT = ALL.filter(k => U[k].st === 'on');      // 10
const LOCK = ALL.filter(k => U[k].st === 'lock');   // 2

const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const tag = t => `<span class="tag ${t === 'Quản trị hệ thống' ? 'qt' : ''}">${t}</span>`;
const stb = st => st === 'lock' ? bd('Bị khóa', 'b-red') : bd('Đang hoạt động', 'b-green');

function row(k, o = {}) {
  const r = Object.assign({}, U[k], o.over || {});
  const cls = [o.hl ? 'new' : '', o.dim ? 'off' : ''].join(' ');
  const indh = r.ind === 'pw' ? ind('Chờ đổi mật khẩu', 'a') : '';
  return `<tr class="${cls}"><td><b style="color:#1d4ed8">${r.n}</b>${r.me ? ind('Bạn', 'b') : ''}${o.hl ? ind('Mới', 'b') : ''}${indh}<div class="muted small">${r.em}</div></td>
<td>${r.r.map(tag).join('')}</td>
<td>${r.ns ? `${r.ns[0]} <span class="muted small">· ${r.ns[1]}</span>` : '<span class="muted">—</span>'}</td>
<td>${stb(r.st)}${r.st === 'lock' && r.lockd ? `<div class="muted small">từ ${r.lockd}</div>` : ''}</td>
<td class="nw">${r.last ? r.last : '<span class="muted">Chưa đăng nhập</span>'}</td></tr>`;
}
function table(keys, o = {}) {
  const rows = keys.map(k => row(k, (o.rowOpt || {})[k] || {})).join('');
  return `<div class="tbl"><table><tr><th>Người dùng ▲</th><th>Vai trò</th><th>Nhân sự liên kết</th><th>Trạng thái</th><th>Đăng nhập gần nhất</th></tr>${rows}</table></div>`;
}
function head() {
  return `<div class="ttl"><h1>Người dùng</h1><span class="muted">Tài khoản đăng nhập TOPAS · vai trò · liên kết nhân sự</span><span class="ml">${B('+ Tạo tài khoản', 'p')}</span></div>`;
}
function filt({ q = '', role = 'Tất cả', link = 'Tất cả', clear = false } = {}) {
  return `<div class="toolbar"><div class="input ${q ? '' : 'ph'}" style="width:300px">🔍&nbsp; ${q || 'Tìm họ tên, email, mã nhân sự'}</div>
<div class="input sel" style="width:200px"><span class="muted">Vai trò:&nbsp;</span>${role}</div>
<div class="input sel" style="width:210px"><span class="muted">Nhân sự liên kết:&nbsp;</span>${link}</div>
${clear ? '<span class="btn lk">Xóa bộ lọc</span>' : ''}</div>`;
}
function chips(a, l, on = 'act', right = '') {
  const t = (a === '–') ? '–' : a + l;
  const c = (k, n, v) => `<span class="chip ${on === k ? 'on' : ''}">${n} <span class="cnt">${v}</span></span>`;
  return `<div class="flex" style="margin-bottom:8px">${c('act', 'Đang hoạt động', a)}${c('lock', 'Bị khóa', l)}${c('all', 'Tất cả', t)}<span class="ml muted small">${right}</span></div>`;
}
const listBody = (o = {}) => head() + filt(o.filt) + chips(...(o.chips || [10, 2, 'act', '10 tài khoản · sắp theo họ tên'])) + (o.table || table(ACT));

// ---------- 3.1 Danh sách ----------
S.W01 = P({ body: listBody() });
const ROLE_DH = ['khoa', 'lqhuy', 'tung', 'anh', 'minh'];
S.W02 = P({ body: listBody({ filt: { role: 'Điều hành', clear: true }, chips: [4, 1, 'all', '5 tài khoản · sắp theo họ tên'], table: table(ROLE_DH) }) });
S.W03 = P({
  body: listBody({
    filt: { q: 'hoang van phuc', clear: true }, chips: [0, 0, 'act', '0 tài khoản'],
    table: `<div class="tbl"><table><tr><th>Người dùng ▲</th><th>Vai trò</th><th>Nhân sự liên kết</th><th>Trạng thái</th><th>Đăng nhập gần nhất</th></tr></table><div class="empty"><div class="big">Không có tài khoản khớp bộ lọc</div>Thử từ khóa khác hoặc xóa bộ lọc ở thanh lọc. Người mới chưa có tài khoản thì chọn Tạo tài khoản.</div></div>`,
  }),
});
S.W04 = P({
  body: listBody({
    chips: ['–', '–', 'act', ''],
    table: `<div class="tbl"><div class="empty"><div class="big" style="color:#b91c1c">Không tải được danh sách tài khoản</div>Kết nối tới máy chủ bị gián đoạn. Bộ lọc của bạn vẫn được giữ.<div style="margin-top:12px">${B('Thử lại', 'p')}</div></div></div>`,
  }),
});

// ---------- 3.2 Tạo tài khoản ----------
const ROLES = [['Kinh doanh', 'Khách hàng, yêu cầu Tour, báo giá, Booking, chăm sóc'], ['Điều hành', 'Hồ sơ Tour, NCC, nhân sự, đặt dịch vụ'], ['Kế toán', 'Công nợ, thu chi, quyết toán'], ['Quản trị hệ thống', 'Người dùng, phân quyền, cấu hình']];
function roleBox(sel = [], o = {}) {
  return `<div class="field"><label>Vai trò <span class="req">*</span>${o.auto ? `<span class="auto">${o.auto}</span>` : ''}</label>
<div class="rl" style="${o.err ? 'border-color:#dc2626;background:#fff7f7' : ''}">${ROLES.map(([n, d]) => {
    const dis = (o.dis || {})[n];
    return `<div class="o ${dis ? 'dis' : ''}"><span class="cb ${sel.includes(n) ? 'on' : ''}" style="${dis ? 'opacity:.45' : ''}"></span><div>${n}<small>${dis || d}</small></div></div>`;
  }).join('')}</div>
${o.err ? `<div class="err">${o.err}</div>` : `<div class="hint">${o.hint || 'Chọn một hoặc nhiều vai trò. Quyền của từng vai trò cấu hình ở QT02; tài khoản có quyền của mọi vai trò được chọn.'}</div>`}</div>`;
}
function pwBox(mode = 'auto') {
  return `<div class="field"><label>Mật khẩu tạm <span class="req">*</span></label>
<div class="fl" style="gap:18px"><span class="fl"><span class="rd ${mode === 'auto' ? 'on' : ''}"></span>Hệ thống tự sinh<span class="auto">Mặc định</span></span><span class="fl"><span class="rd ${mode === 'man' ? 'on' : ''}"></span>Tự nhập</span></div>
<div class="hint">Mật khẩu tạm không hết hạn, chỉ hiện một lần sau khi lưu. Người dùng phải đổi mật khẩu ở lần đăng nhập đầu.</div></div>`;
}
const listBg = P;
const NSOPTS = `<div class="menu" style="left:18px;right:18px;top:118px">
<div class="mh2">Nhân sự Nội bộ chưa có tài khoản (DH06)</div>
<div class="mi on"><b>Phan Thu Hà</b><span class="muted small">NS-026 · Điều hành · ha.phan@topas-travel.vn</span></div>
<div class="mi"><b>Trịnh Quốc Bảo</b><span class="muted small">NS-011 · Trưởng đoàn · bao.trinh@topas-travel.vn</span></div>
<div class="mi"><b>Đỗ Văn Khải</b><span class="muted small">NS-006 · Hướng dẫn viên, Trưởng đoàn · khai.do@topas-travel.vn</span></div>
<div class="sep" style="margin:4px 0"></div><div class="mi muted">Không liên kết nhân sự</div></div>`;
function createForm({ filled = false, err = false, open = false } = {}) {
  const a = filled ? 'Từ DH06' : false;
  const nsVal = filled ? 'Phan Thu Hà · NS-026 · Điều hành' : err ? 'Không liên kết nhân sự' : '<span class="muted">Chọn nhân sự Nội bộ chưa có tài khoản, hoặc bỏ trống</span>';
  return (err ? `<div class="banner e" style="margin-bottom:10px">✕ Chưa lưu được: 2 lỗi cần sửa.</div>` : '') +
    `<div class="field" style="position:relative"><label>Nhân sự liên kết</label><div class="input sel ${open ? 'focus' : ''}">${nsVal}</div><div class="hint">Chọn nhân sự thì họ tên, email, điện thoại được điền sẵn và vai trò được gợi ý theo nhóm công việc.</div></div>` +
    `<div class="f2">${f('Họ tên', filled ? 'Phan Thu Hà' : err ? 'Hoàng Văn Phúc' : '', { req: 1, auto: a, cls: filled || err ? '' : 'ph' })}${f('Điện thoại', filled ? '0977 802 413' : '', { auto: a })}</div>` +
    f('Email đăng nhập', filled ? 'ha.phan@topas-travel.vn' : err ? 'ha.le@topas-travel.vn' : '', { req: 1, auto: a, cls: err ? 'bad' : '', err: err ? 'Email đã dùng cho tài khoản Lê Thu Hà · <span class="lnk">Mở tài khoản</span>' : '', hint: err ? '' : 'Dùng để đăng nhập; không trùng với tài khoản khác.' }) +
    roleBox(filled ? ['Điều hành'] : [], { auto: filled ? 'Gợi ý theo nhóm công việc' : '', err: err ? 'Chọn ít nhất một vai trò.' : '' }) +
    pwBox();
}
const createFoot = (dis = false) => `<span class="muted small" style="margin-right:auto">Tài khoản mới ở trạng thái Đang hoạt động, kèm chỉ báo Chờ đổi mật khẩu</span>${B('Hủy')}${B('Tạo tài khoản', dis ? 'dis' : 'p')}`;
S.W05 = listBg({ body: listBody(), overlay: drawer('Tạo tài khoản', createForm({ open: true }) + NSOPTS, createFoot(true), { wide: true }) });
S.W06 = listBg({ body: listBody(), overlay: drawer('Tạo tài khoản', createForm({ filled: true }), createFoot(), { wide: true }) });
S.W07 = listBg({ body: listBody(), overlay: drawer('Tạo tài khoản', createForm({ err: true }), createFoot(), { wide: true }) });

function credModal(who, sub, em, pw) {
  return modal('Thông tin đăng nhập tạm', `<div class="banner s" style="margin-bottom:12px">✓ ${sub}</div>
<div class="kv"><span>Họ tên</span><b>${who}</b><span>Địa chỉ đăng nhập</span><span>https://topas.topas-travel.vn</span><span>Email đăng nhập</span><span>${em}</span><span>Mật khẩu tạm</span><span><span class="pw">${pw}</span></span></div>
<div class="banner w" style="margin-top:12px;font-size:12.3px">Mật khẩu chỉ hiện một lần, hệ thống không gửi email. Gửi thông tin này cho người dùng qua kênh nội bộ. Người dùng phải đổi mật khẩu ở lần đăng nhập đầu.</div>`,
    `${B('Đóng')}${B('⧉ Sao chép thông tin đăng nhập', 'p')}`, 560);
}
const ACT_NEW = ['qhuy', 'khoa', 'lqhuy', 'lha', 'nam', 'hang', 'lan', 'ptung', 'pha', 'anh', 'minh'];
S.W08 = listBg({ body: listBody({ chips: [11, 2, 'act', '11 tài khoản · sắp theo họ tên'], table: table(ACT_NEW, { rowOpt: { pha: { hl: 1 } } }) }), overlay: credModal('Phan Thu Hà', 'Đã tạo tài khoản và liên kết nhân sự NS-026.', 'ha.phan@topas-travel.vn', 'Tq7mVx4pK2rd') });
S.W09 = P({
  body: listBody({ chips: [11, 2, 'act', '11 tài khoản · sắp theo họ tên'], table: table(ACT_NEW, { rowOpt: { pha: { hl: 1 } } }) }),
  overlay: `<div class="toast">✓ Đã tạo tài khoản Phan Thu Hà · liên kết NS-026 <a>Mở</a></div>`,
});

// ---------- 3.3 Sửa tài khoản ----------
function accDrawer(k, { tab = 'info', body = '', foot = '', acts = null, over = {}, sub2 = '' } = {}) {
  const r = Object.assign({}, U[k], over);
  const a = acts !== null ? acts : (r.st === 'lock' ? B('Mở khóa tài khoản', 'p') : B('Đặt lại mật khẩu') + B('Khóa tài khoản', 'd'));
  const t = `${r.n} ${stb(r.st)}${r.me ? ind('Bạn', 'b') : ''}${r.ind === 'pw' ? ind('Chờ đổi mật khẩu', 'a') : ''}<span class="ml flex" style="font-size:12.5px;font-weight:400">${a}</span>`;
  const sub = `${r.em} · tạo ${r.created || '02/03/2026'} · đăng nhập gần nhất ${r.last || 'chưa có'}${sub2}`;
  const tabs = `<div class="ntab"><div class="${tab === 'info' ? 'on' : ''}">Thông tin</div><div class="${tab === 'hist' ? 'on' : ''}">Lịch sử</div></div>`;
  return `<div class="overlay"></div><div class="drawer wide"><div class="dh"><div class="t">${t}<span class="x" style="margin-left:10px">✕</span></div><div class="muted small" style="margin-top:2px">${sub}</div></div><div class="db">${tabs}${body}</div><div class="df">${foot}</div></div>`;
}
function infoForm(k, o = {}) {
  const r = U[k];
  const ns = o.ns !== undefined ? o.ns : r.ns;
  return (o.top || '') +
    `<div class="field"><label>Nhân sự liên kết</label><div class="flex"><div class="input sel" style="flex:1">${ns ? `${r.n} · ${ns[0]} · ${ns[1]}` : '<span class="muted">Chưa liên kết · chọn nhân sự Nội bộ chưa có tài khoản</span>'}</div>${ns ? '<span class="btn lk">Gỡ liên kết</span>' : ''}</div></div>` +
    `<div class="f2">${f('Họ tên', r.n, { req: 1 })}${f('Điện thoại', o.tel || '0903 118 264')}</div>` +
    f('Email đăng nhập', r.em, { req: 1 }) +
    roleBox(o.roles || r.r, o.roleOpt || {}) +
    `<div class="field"><label>Đang phụ trách <span class="muted small" style="font-weight:400">· tính lúc mở, từ KD04, KD06, KD08, KD10, DH08</span></label><div class="own">${o.own || 'Không phụ trách bản ghi nào'}</div></div>`;
}
const bgD = (k, o = {}) => accDrawer(k, Object.assign({ body: infoForm(k, o.form || {}), foot: editFoot('clean', o.upd) }, o.d || {}));
const OWN_NAM = '64 khách hàng · 12 yêu cầu Tour đang xử lý · 7 Booking hiệu lực · 2 chiến dịch chăm sóc';
const editFoot = (st = 'dirty', upd = '02/03/2026 09:12') => st === 'dirty'
  ? `<span class="small" style="margin-right:auto;color:#b45309">● Có thay đổi chưa lưu</span>${B('Hủy thay đổi')}${B('Lưu', 'p')}`
  : st === 'saved' ? `<span class="muted small" style="margin-right:auto">Cập nhật lúc 09:35 bởi Đỗ Quang Huy</span>${B('Đóng')}${B('Lưu', 'dis')}<span class="muted small">Chưa có thay đổi</span>`
    : `<span class="muted small" style="margin-right:auto">Cập nhật lúc ${upd}</span>${B('Đóng')}${B('Lưu', 'dis')}<span class="muted small">Chưa có thay đổi</span>`;
S.W10 = listBg({ body: listBody(), overlay: accDrawer('nam', { body: infoForm('nam', { roles: ['Kinh doanh', 'Quản trị hệ thống'], own: OWN_NAM }), foot: editFoot('dirty') }) });
S.W11 = listBg({
  body: listBody({ table: table(ACT, { rowOpt: { nam: { over: { r: ['Kinh doanh', 'Quản trị hệ thống'] } } } }) }),
  overlay: accDrawer('nam', { over: { r: ['Kinh doanh', 'Quản trị hệ thống'] }, body: infoForm('nam', { roles: ['Kinh doanh', 'Quản trị hệ thống'], own: OWN_NAM }), foot: editFoot('saved') }) +
    `<div class="toast" style="z-index:9;bottom:66px">✓ Đã lưu vai trò của Nguyễn Hoàng Nam. Quyền mới áp dụng từ thao tác tiếp theo của người dùng.</div>`,
});
const OWN_HA = '12 khách hàng · 9 yêu cầu Tour đang xử lý · 4 Booking hiệu lực · 1 chiến dịch chăm sóc';
S.W12 = listBg({
  body: listBody(),
  overlay: accDrawer('lha', {
    body: infoForm('lha', { tel: '0938 552 106', roles: ['Điều hành'], own: OWN_HA }),
    foot: `<div style="flex:1"><div class="banner w" style="font-size:12.3px;margin-bottom:8px;display:block"><b>Bỏ vai trò Kinh doanh khi Lê Thu Hà đang phụ trách 12 khách hàng, 9 yêu cầu Tour, 4 Booking, 1 chiến dịch.</b><br>Bản ghi giữ nguyên, tên hiện kèm “(ngừng hoạt động)”; Lê Thu Hà không còn sửa được. Chuyển người phụ trách ở <span class="lnk">Khách hàng</span> · <span class="lnk">Yêu cầu Tour</span> · <span class="lnk">Booking</span> · <span class="lnk">Chiến dịch</span> (mở thẻ mới, lọc sẵn).</div><div class="flex" style="justify-content:flex-end">${B('Quay lại sửa')}${B('Vẫn lưu', 'p')}</div></div>`,
  }),
});
S.W13 = listBg({
  body: listBody(),
  overlay: accDrawer('qhuy', {
    acts: `<span>${B('Đặt lại mật khẩu', 'dis')}<div class="dis-why">Tự đổi ở Tài khoản của tôi</div></span><span>${B('Khóa tài khoản', 'dis')}<div class="dis-why">Không tự khóa tài khoản của mình</div></span>`,
    over: { created: '15/01/2026' },
    body: infoForm('qhuy', { tel: '0904 660 218', roleOpt: { dis: { 'Quản trị hệ thống': 'Quản trị hệ thống đang hoạt động duy nhất · gán cho người khác trước khi bỏ' } } }),
    foot: editFoot('clean'),
  }),
});
S.W14 = listBg({
  body: listBody(),
  overlay: accDrawer('nam', {
    body: infoForm('nam', { roles: ['Kinh doanh', 'Quản trị hệ thống'], own: OWN_NAM, top: `<div class="banner e" style="margin-bottom:10px;font-size:12.3px;display:block"><b>Chưa lưu: tài khoản vừa được cập nhật ở phiên khác lúc 09:41</b> (Đỗ Quang Huy · đổi số điện thoại). Thay đổi của bạn vẫn còn trên form.<div class="flex" style="margin-top:6px">${B('Tải bản mới và nhập lại', 'sm')}</div></div>` }),
    foot: editFoot('dirty'),
  }),
});
S.W15 = listBg({
  body: listBody(),
  overlay: bgD('anh', { form: { tel: '0912 225 680', own: '6 hồ sơ Tour đang phụ trách · 9 công việc chưa hoàn tất (qua nhân sự NS-001)' } }) + modal('Gỡ liên kết nhân sự NS-001 khỏi tài khoản Trần Minh Anh?', `<div style="font-size:12.8px">
<p style="margin:0 0 8px">Nhân sự <b>Trần Minh Anh (NS-001 · Điều hành)</b> đang phụ trách <b>6 hồ sơ Tour</b> và <b>9 công việc</b> chưa hoàn tất.</p>
<div class="sec">Sau khi gỡ</div>
<ul style="margin:0;padding-left:18px;line-height:1.6"><li>Tài khoản vẫn đăng nhập được, vai trò giữ nguyên.</li><li>NS-001 ở DH06 hiện Tài khoản “Chưa có”; không còn được chọn làm phụ trách hồ sơ mới và không nhận thông báo nhóm Điều hành (RSD DH06 R03).</li><li>6 hồ sơ Tour và 9 công việc giữ nguyên người phụ trách.</li></ul></div>`,
    `${B('Hủy')}${B('Gỡ liên kết', 'dp')}`, 580),
});
function hist() {
  const it = (c, t, d) => `<div class="it ${c}"><b>${t}</b><div class="muted small">${d}</div></div>`;
  return `<div class="flex" style="margin-bottom:10px"><span class="muted small">6 sự kiện · mới nhất trước</span><span class="ml btn lk">Xem thao tác của người này (QT03)</span></div><div class="tl">
${it('bl', 'Thêm vai trò Quản trị hệ thống', '11/11/2026 09:35 · Đỗ Quang Huy · Vai trò: Kinh doanh → Kinh doanh, Quản trị hệ thống')}
${it('ok', 'Đổi mật khẩu tạm', '15/08/2026 14:20 · Nguyễn Hoàng Nam · lần đăng nhập đầu sau khi đặt lại')}
${it('', 'Đặt lại mật khẩu', '15/08/2026 14:02 · Đỗ Quang Huy · 2 phiên bị đăng xuất')}
${it('ok', 'Đổi mật khẩu tạm', '02/03/2026 10:05 · Nguyễn Hoàng Nam · lần đăng nhập đầu')}
${it('bl', 'Liên kết nhân sự NS-008', '02/03/2026 09:12 · Đỗ Quang Huy')}
${it('bl', 'Tạo tài khoản', '02/03/2026 09:12 · Đỗ Quang Huy · Vai trò: Kinh doanh · email na•••@topas-travel.vn')}</div>
<div class="hint" style="margin-top:6px">Đọc từ nhật ký thao tác QT03: email, điện thoại hiện dạng đã che; mật khẩu chỉ ghi “đã đổi”.</div>`;
}
S.W16 = listBg({ body: listBody(), overlay: accDrawer('nam', { tab: 'hist', over: { r: ['Kinh doanh', 'Quản trị hệ thống'] }, body: hist(), foot: `${B('Đóng')}` }) });

// ---------- 3.4 Đặt lại mật khẩu ----------
S.W17 = listBg({
  body: listBody(),
  overlay: bgD('hang', { form: { tel: '0968 410 772' }, d: { over: { created: '05/11/2026' } }, upd: '05/11/2026 10:15' }) + modal('Đặt lại mật khẩu cho Nguyễn Thị Hằng?', `<div style="font-size:12.8px">
<div class="kv" style="margin-bottom:10px"><span>Email đăng nhập</span><span>hang.nguyen@topas-travel.vn</span><span>Tình trạng mật khẩu</span><span>${ind('Chờ đổi mật khẩu', 'a')} mật khẩu tạm đặt 05/11/2026 10:15</span></div>
<ul style="margin:0 0 10px;padding-left:18px;line-height:1.6"><li>Mật khẩu hiện tại mất hiệu lực; mọi phiên đăng nhập của người này bị đăng xuất.</li><li>Hệ thống không gửi email. Mật khẩu tạm mới hiện một lần sau khi xác nhận.</li></ul>
${pwBox()}</div>`, `${B('Hủy')}${B('Đặt lại mật khẩu', 'p')}`, 560),
});

// ---------- 3.5 Khóa, mở khóa ----------
S.W18 = listBg({
  body: listBody(),
  overlay: bgD('lha', { form: { tel: '0938 552 106', own: OWN_HA } }) + modal('Khóa tài khoản Lê Thu Hà?', `<div style="font-size:12.8px">
<p style="margin:0 0 6px">Lê Thu Hà (Kinh doanh) đang phụ trách các bản ghi dưới đây. Khóa xong, bản ghi <b>giữ nguyên</b>, tên hiện kèm “(ngừng hoạt động)” và chỉ Quản trị hệ thống chuyển được.</p>
<div class="ol">
<div class="li"><span class="n">12</span><span>khách hàng</span><span class="ml btn lk">Mở Khách hàng ↗</span></div>
<div class="li"><span class="n">9</span><span>yêu cầu Tour đang xử lý</span><span class="ml btn lk">Mở Yêu cầu Tour ↗</span></div>
<div class="li"><span class="n">4</span><span>Booking hiệu lực</span><span class="ml btn lk">Mở Booking ↗</span></div>
<div class="li"><span class="n">1</span><span>chiến dịch chăm sóc · Đang chạy, vẫn gửi theo lịch</span><span class="ml btn lk">Mở Chiến dịch ↗</span></div></div>
<div class="hint" style="margin:4px 0 10px">Mỗi liên kết mở màn ở thẻ mới, lọc sẵn Phụ trách: Lê Thu Hà.</div>
<ul style="margin:0 0 10px;padding-left:18px;line-height:1.6"><li>Lê Thu Hà bị đăng xuất ngay (2 phiên) và không đăng nhập được nữa.</li><li>Không nhận thông báo, không có trong danh sách chọn người phụ trách.</li></ul>
${f('Lý do khóa', 'Nghỉ việc từ 11/11/2026', { req: 1 })}</div>`, `${B('Hủy')}${B('Khóa tài khoản', 'dp')}`, 600),
});
const ACT_AFTER_LOCK = ACT; // dòng giữ tại chỗ đến khi tải lại
S.W19 = P({
  body: listBody({ chips: [9, 3, 'act', '10 dòng đang hiện · 1 dòng vừa đổi'], table: table(ACT_AFTER_LOCK, { rowOpt: { lha: { dim: 1, over: { st: 'lock', lockd: '11/11/2026' } } } }) }),
  overlay: `<div class="toast">✓ Đã khóa tài khoản Lê Thu Hà · đã đăng xuất 2 phiên <a>Xem ở Bị khóa</a></div>`,
});
S.W20 = listBg({
  body: listBody(),
  overlay: bgD('hang', { form: { tel: '0968 410 772' }, d: { over: { created: '05/11/2026' } }, upd: '05/11/2026 10:15' }) + modal('Khóa tài khoản Nguyễn Thị Hằng?', `<div style="font-size:12.8px">
<div class="banner i" style="margin-bottom:10px">Nguyễn Thị Hằng không phụ trách bản ghi nào.</div>
<ul style="margin:0 0 10px;padding-left:18px;line-height:1.6"><li>Mật khẩu tạm hiện tại mất hiệu lực; người này không đăng nhập được.</li><li>Mở khóa lại bất cứ lúc nào ở chip Bị khóa.</li></ul>
${f('Lý do khóa', '<span class="muted">Ví dụ: Chưa nhận việc, tạm hoãn</span>', { req: 1 })}</div>`, `${B('Hủy')}${B('Khóa tài khoản', 'dis')}<span class="muted small">Nhập lý do</span>`, 540),
});
const lockBody = listBody({ chips: [10, 2, 'lock', '2 tài khoản · sắp theo họ tên'], table: table(LOCK) });
S.W21 = P({
  body: lockBody,
  overlay: accDrawer('qbao', {
    sub2: ' · <span style="color:#b91c1c">khóa 28/10/2026 bởi Đỗ Quang Huy · lý do: Nghỉ việc</span>',
    over: { created: '10/04/2026' },
    body: infoForm('qbao', { tel: '0916 274 830' }),
    foot: editFoot('clean', '28/10/2026 17:30 bởi Đỗ Quang Huy'),
  }),
});
S.W22 = P({
  body: lockBody,
  overlay: bgD('qbao', { form: { tel: '0916 274 830' }, d: { over: { created: '10/04/2026' }, sub2: ' · <span style="color:#b91c1c">khóa 28/10/2026 bởi Đỗ Quang Huy · lý do: Nghỉ việc</span>' }, upd: '28/10/2026 17:30 bởi Đỗ Quang Huy' }) + modal('Mở khóa tài khoản Trần Quốc Bảo?', `<div style="font-size:12.8px">
<div class="kv" style="margin-bottom:10px"><span>Email đăng nhập</span><span>bao.tran@topas-travel.vn</span><span>Vai trò giữ nguyên</span><span>${tag('Kinh doanh')}</span><span>Bị khóa từ</span><span>28/10/2026 · Nghỉ việc</span></div>
<div class="fl" style="margin-bottom:4px"><span class="cb on"></span><b>Đặt mật khẩu tạm mới</b><span class="auto">Mặc định</span></div>
<div class="hint" style="margin:0 0 10px 22px">Bỏ chọn thì người dùng đăng nhập bằng mật khẩu cũ. Cần đổi vai trò thì sửa ở tab Thông tin trước khi mở khóa.</div></div>`,
    `${B('Hủy')}${B('Mở khóa', 'p')}`, 540),
});
S.W23 = P({
  body: listBody({ chips: [11, 1, 'lock', '2 dòng đang hiện · 1 dòng vừa đổi'], table: table(LOCK, { rowOpt: { qbao: { dim: 1, over: { st: 'on', lockd: null, ind: 'pw' } } } }) }),
  overlay: `<div class="toast">✓ Đã mở khóa tài khoản Trần Quốc Bảo · đã đặt mật khẩu tạm mới <a>Xem ở Đang hoạt động</a></div>`,
});

module.exports = S;
