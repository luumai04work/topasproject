// Wireframe KD03 · Danh sách khách hàng. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
// Dữ liệu minh họa: hôm nay 11/11/2026; cửa sổ chăm sóc sau Tour 30 ngày (từ 12/10/2026).
// Khách của tôi (Nguyễn Hoàng Nam) 64; Tất cả 412; Cần chăm sóc sau Tour 3 = Chen Wei-Ling (30/10), Müller Reisen (05/11), Hanami Tours (08/11).
const { page, modal, B, bd } = require('./lib');
const S = {};
const P = o => page(Object.assign({ crumb: 'Khách hàng', side: 'Khách hàng' }, o));
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const typ = t => t === 'DN' ? '<span class="badge b-violet" style="font-size:10.5px;line-height:15px;padding:0 6px">Doanh nghiệp</span>' : '<span class="badge b-cyan" style="font-size:10.5px;line-height:15px;padding:0 6px">Cá nhân</span>';
const CARE = { 'Hài lòng': 'b-green', 'Có nhu cầu Tour mới': 'b-blue', 'Chưa hài lòng': 'b-amber', 'Không liên lạc được': 'b-gray' };

// t: CN | DN; ct: liên hệ chính; sub: email/điện thoại; tours: số Tour đã đi; last: Tour gần nhất; open: yêu cầu đang xử lý; care: [ngày, kết quả] hoặc 'need'
const C = {
  atlas: { n: 'Atlas Voyages SARL', code: 'KH-00087', t: 'DN', nat: 'Pháp', ct: 'Claire Dubois', sub: 'claire.dubois@atlasvoyages.fr', lang: 'Tiếng Pháp', pt: 'Nguyễn Hoàng Nam', tours: 5, last: 'TP-2609-0044 · đóng 22/09/2026', open: 1, care: ['28/09/2026', 'Hài lòng'] },
  blue: { n: 'Blue Lotus Travel Pty Ltd', code: 'KH-00152', t: 'DN', nat: 'Úc', ct: 'Mark Fraser', sub: 'mark@bluelotustravel.com.au', lang: 'Tiếng Anh', pt: 'Nguyễn Hoàng Nam', tours: 2, last: 'TP-2607-0019 · đóng 14/07/2026', open: 0, care: ['20/07/2026', 'Có nhu cầu Tour mới'] },
  chen: { n: 'Chen Wei-Ling', code: 'KH-00377', t: 'CN', nat: 'Đài Loan', ct: '', sub: 'weiling.chen@gmail.com · +886 912 345 678', lang: 'Tiếng Trung', pt: 'Nguyễn Hoàng Nam', tours: 1, last: 'TP-2610-0027 · đóng 30/10/2026', open: 0, care: 'need' },
  david: { n: 'David Thompson', code: 'KH-00398', t: 'CN', nat: 'Anh', ct: '', sub: 'd.thompson@outlook.com · +44 7700 900 123', lang: 'Tiếng Anh', pt: 'Nguyễn Hoàng Nam', tours: 0, last: '', open: 1, care: null },
  giulia: { n: 'Giulia Rossi', code: 'KH-00241', t: 'CN', nat: 'Ý', ct: '', sub: 'giulia.rossi@libero.it', lang: 'Tiếng Ý', pt: 'Nguyễn Hoàng Nam', tours: 2, last: 'TP-2605-0008 · đóng 15/05/2026', open: 0, care: ['20/05/2026', 'Chưa hài lòng'] },
  hanami: { n: 'Hanami Tours Co., Ltd.', code: 'KH-00064', t: 'DN', nat: 'Nhật Bản', ct: 'Sato Yuki', sub: 'y.sato@hanamitours.jp', lang: 'Tiếng Nhật', pt: 'Nguyễn Hoàng Nam', tours: 4, last: 'TP-2610-0035 · đóng 08/11/2026', open: 2, care: 'need' },
  james: { n: 'James Williams', code: 'KH-00266', t: 'CN', nat: 'Hoa Kỳ', ct: '', sub: 'jwilliams@yahoo.com · +1 415 555 0142', lang: 'Tiếng Anh', pt: 'Nguyễn Hoàng Nam', tours: 1, last: 'TP-2607-0031 · đóng 02/08/2026', open: 0, care: ['10/08/2026', 'Hài lòng'] },
  kim: { n: 'Kim Min-jun', code: 'KH-00219', t: 'CN', nat: 'Hàn Quốc', ct: '', sub: 'minjun.kim@naver.com', lang: 'Tiếng Hàn', pt: 'Nguyễn Hoàng Nam', tours: 1, last: 'TP-2603-0005 · đóng 12/03/2026', open: 0, care: ['18/03/2026', 'Hài lòng'] },
  muller: { n: 'Müller Reisen GmbH', code: 'KH-00128', t: 'DN', nat: 'Đức', ct: 'Anna Schneider', sub: 'anna.schneider@muellerreisen.de', lang: 'Tiếng Đức', pt: 'Nguyễn Hoàng Nam', tours: 3, last: 'TP-2610-0031 · đóng 05/11/2026', open: 1, care: 'need' },
  nordic: { n: 'Nordic Explorer AB', code: 'KH-00405', t: 'DN', nat: 'Thụy Điển', ct: 'Erik Lindqvist', sub: 'erik@nordicexplorer.se', lang: 'Tiếng Anh', pt: 'Nguyễn Hoàng Nam', tours: 0, last: '', open: 1, care: null },
  vdb: { n: 'Van den Berg Reizen BV', code: 'KH-00041', t: 'DN', nat: 'Hà Lan', ct: 'Pieter de Vries', sub: 'p.devries@vdbreizen.nl', lang: 'Tiếng Hà Lan', pt: 'Nguyễn Hoàng Nam', tours: 6, last: 'TP-2610-0012 · đóng 25/10/2026', open: 1, care: ['27/10/2026', 'Hài lòng'] },
  wander: { n: 'Wanderlust Adventures LLC', code: 'KH-00190', t: 'DN', nat: 'Hoa Kỳ', ct: 'Megan Clark', sub: 'megan@wanderlustadv.com', lang: 'Tiếng Anh', pt: 'Nguyễn Hoàng Nam', tours: 1, last: 'TP-2605-0022 · đóng 01/06/2026', open: 0, care: ['05/06/2026', 'Không liên lạc được'] },
  // Tìm "schneider" (W03): khách cá nhân do Lê Thu Hà phụ trách
  lukas: { n: 'Lukas Schneider', code: 'KH-00309', t: 'CN', nat: 'Đức', ct: '', sub: 'lukas.schneider@web.de · +49 170 555 2201', lang: 'Tiếng Đức', pt: 'Lê Thu Hà', tours: 1, last: 'TP-2608-0016 · đóng 30/08/2026', open: 0, care: ['04/09/2026', 'Hài lòng'] },
};
// 12 khách của Lê Thu Hà (W06, W07)
const LH = [
  ['Aussie Wanderers Pty Ltd', 'KH-00033', 'DN', 'Úc', 'Tom Harris', 'Tiếng Anh', 3],
  ['Belle Époque Voyages', 'KH-00058', 'DN', 'Pháp', 'Julien Moreau', 'Tiếng Pháp', 2],
  ['Carlos Mendes', 'KH-00112', 'CN', 'Bồ Đào Nha', '', 'Tiếng Anh', 1],
  ['Elena Petrova', 'KH-00134', 'CN', 'Nga', '', 'Tiếng Nga', 0],
  ['Global Faith Pilgrimages', 'KH-00171', 'DN', 'Philippines', 'Maria Santos', 'Tiếng Anh', 4],
  ['Iberia Escapadas SL', 'KH-00186', 'DN', 'Tây Ban Nha', 'Lucía Gómez', 'Tiếng Tây Ban Nha', 1],
  ['Lukas Schneider', 'KH-00309', 'CN', 'Đức', '', 'Tiếng Đức', 1],
  ['Maple Leaf Journeys Inc.', 'KH-00225', 'DN', 'Canada', 'Olivia Brown', 'Tiếng Anh', 2],
  ['Nguyễn Thị Lan Anh', 'KH-00287', 'CN', 'Úc', '', 'Tiếng Việt', 1],
  ['Siam Smile Travel', 'KH-00315', 'DN', 'Thái Lan', 'Somchai P.', 'Tiếng Thái', 0],
  ['Swiss Alpine Tours AG', 'KH-00342', 'DN', 'Thụy Sĩ', 'Reto Keller', 'Tiếng Đức', 5],
  ['Tran Family Trust', 'KH-00366', 'DN', 'Hoa Kỳ', 'Kevin Tran', 'Tiếng Anh', 1],
];

function careCell(r) {
  if (r.care === 'need') return '<span class="b" style="color:#b45309">Chưa chăm sóc sau Tour</span>';
  if (!r.care) return '<span class="muted">—</span>';
  return `${r.care[0]}<div>${bd(r.care[1], CARE[r.care[1]])}</div>`;
}
const hl = (s, q) => q ? s.replace(new RegExp(q, 'i'), m => `<span class="hl">${m}</span>`) : s;
function rowHtml(k, o = {}) {
  const r = C[k];
  const ctCell = r.t === 'DN' ? `${hl(r.ct, o.q)}<div class="muted small">${r.sub}</div>` : `<div class="muted small" style="white-space:normal;max-width:230px">${r.sub}</div>`;
  const lastCell = r.last ? `<span class="small">${r.last.split(' · ')[0]}</span><div class="small ${r.care === 'need' ? '' : 'muted'}" style="${r.care === 'need' ? 'color:#b45309' : ''}">${r.last.split(' · ')[1]}</div>` : '<span class="muted">—</span>';
  return `<tr class="${o.cls || ''}"><td><b style="color:#1d4ed8">${hl(r.n, o.q)}</b> ${typ(r.t)}<div class="muted small">${r.code} · ${r.nat}</div></td>
<td>${ctCell}</td><td>${r.lang}</td>${o.pt ? `<td>${r.pt}</td>` : ''}<td class="num">${r.tours}</td><td>${lastCell}</td><td class="num">${r.open || '<span class="muted">—</span>'}</td><td>${careCell(r)}</td></tr>`;
}
function table(keys, o = {}) {
  return `<div class="tbl"><table><tr><th>Khách hàng ▲</th><th>Liên hệ chính</th><th>Ngôn ngữ</th>${o.pt ? '<th>Phụ trách</th>' : ''}<th class="num">Tour đã đi</th><th>Tour gần nhất</th><th class="num">Yêu cầu đang xử lý</th><th>Chăm sóc gần nhất</th></tr>
${keys.map(k => rowHtml(k, o)).join('')}</table></div>`;
}
const C_DEF = { mine: 64, all: 412, care: 3, pg: 'Hiển thị 1–20 / 64 · sắp theo tên' };
// Quản trị (qt) chỉ có chip Tất cả: không phụ trách khách và không chăm sóc.
const chips = (c = C_DEF, active = 'mine', qt = false) => qt ? `<div class="flex" style="margin:0 0 8px"><span class="chip on">Tất cả <span class="cnt">${c.all}</span></span><span class="ml muted small">${c.pg || ''}</span></div>` : `<div class="flex" style="margin:0 0 8px">${[['mine', 'Khách của tôi'], ['all', 'Tất cả']].map(([k, n]) => `<span class="chip ${k === active ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}
<span style="width:1px;height:20px;background:#d1d5db;margin:0 4px"></span>
<span class="chip ${active === 'care' ? 'on' : ''}" style="${active === 'care' ? '' : 'border-color:#fcd34d;background:#fffbeb;color:#92400e'}">⚠ Cần chăm sóc sau Tour <span class="cnt ${active === 'care' ? '' : 'w'}">${c.care}</span></span>
<span class="ml muted small">${c.pg || ''}</span></div>`;
const toolbar = ({ q = '', type = 'Tất cả', tour = 'Tất cả', nat = 'Tất cả', pt = '', clear = false } = {}) => `<div class="toolbar" style="margin-top:0">
<div class="input ${q ? 'focus' : 'ph'}" style="width:300px">🔍&nbsp; ${q || 'Tìm tên, mã, email, điện thoại, người liên hệ'}</div>
<div class="input sel ${type !== 'Tất cả' ? 'focus' : ''}" style="width:170px"><span class="muted">Loại:&nbsp;</span>${type}</div>
<div class="input sel ${tour !== 'Tất cả' ? 'focus' : ''}" style="width:210px"><span class="muted">Tour đã đóng:&nbsp;</span>${tour}</div>
<div class="input sel ${nat !== 'Tất cả' ? 'focus' : ''}" style="width:170px"><span class="muted">Quốc gia:&nbsp;</span>${nat}</div>
${pt ? `<div class="input sel focus" style="width:210px"><span class="muted">Phụ trách:&nbsp;</span>${pt}</div>` : ''}
${clear ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
const title = ({ user = 'kd' } = {}) => `<div class="ttl"><h1>Khách hàng</h1>${user === 'qt' ? '<span class="muted">Quản trị · chỉ chuyển người phụ trách</span>' : `<div class="ml flex">${B('+ Tạo khách hàng', 'p')}</div>`}</div>`;
const PAGE1 = ['atlas', 'blue', 'chen', 'david', 'giulia', 'hanami', 'james', 'kim', 'muller', 'nordic', 'vdb', 'wander'];
const list = (o = {}) => title(o) + toolbar(o.tb) + (o.banner || '') + chips(o.c, o.chip, o.user === 'qt') + (o.bulk || '') + (o.body || table(o.keys || PAGE1, o.t || {}));

// ---------- W01 Danh sách mặc định: Khách của tôi ----------
S.W01 = P({ body: list() });

// ---------- W02 Cần chăm sóc sau Tour ----------
S.W02 = P({ body: list({ chip: 'care', c: Object.assign({}, C_DEF, { pg: '3 khách · sắp theo ngày đóng Tour, cũ trước' }), keys: ['chen', 'muller', 'hanami'] }) });

// ---------- W03 Tìm theo tên người liên hệ, chip Tất cả ----------
S.W03 = P({ body: list({ tb: { q: 'schneider', clear: true }, chip: 'all', c: { mine: 1, all: 2, care: 1, pg: '2 khách khớp' }, keys: ['muller', 'lukas'], t: { pt: true, q: 'schneider' } }) });

// ---------- W04 Không khớp bộ lọc ----------
S.W04 = P({ body: list({ tb: { q: 'hoffmann', type: 'Doanh nghiệp', clear: true }, chip: 'all', c: { mine: 0, all: 0, care: 0, pg: '' }, body: `<div class="tbl"><div class="empty"><div class="big">Không có khách hàng khớp bộ lọc</div>Kiểm tra lại chính tả hoặc bỏ bớt bộ lọc. Khách chưa có trong hệ thống thì chọn Tạo khách hàng.</div></div>` }) });

// ---------- W05 Lỗi tải danh sách ----------
S.W05 = P({ body: list({ tb: { tour: 'Đóng trong 30 ngày', clear: true }, c: { mine: '–', all: '–', care: '–', pg: '' }, body: `<div class="tbl"><div class="empty"><div class="big" style="color:#991b1b">Không tải được danh sách khách hàng</div>Bộ lọc của bạn được giữ nguyên. Kiểm tra kết nối rồi thử lại.<div style="margin-top:12px">${B('↻ Thử lại', 'p')}</div></div></div>` }) });

// ---------- W06, W07 Quản trị chuyển phụ trách hàng loạt ----------
function lhRows({ sel = true, done = false } = {}) {
  return `<div class="tbl"><table><tr><th style="width:26px"><span class="cb ${sel ? 'on' : ''}"></span></th><th>Khách hàng ▲</th><th>Liên hệ chính</th><th>Ngôn ngữ</th><th>Phụ trách</th><th class="num">Tour đã đi</th></tr>
${LH.map(([n, code, t, nat, ct, lang, tours], i) => {
    const skip = done && code === 'KH-00309';
    const pt = !done ? 'Lê Thu Hà' : skip ? `Nguyễn Hoàng Nam <div class="small" style="color:#b45309">Bỏ qua: đã đổi ở phiên khác lúc 09:12</div>` : `<b>Vũ Đức Minh</b> ${'<span class="ind g">Vừa chuyển</span>'}`;
    return `<tr class="${sel && !done ? 'sel' : ''} ${done && !skip ? 'dim' : ''}"><td>${done ? '' : `<span class="cb ${sel ? 'on' : ''}"></span>`}</td><td><b style="color:${done && !skip ? '#9ca3af' : '#1d4ed8'}">${n}</b> ${typ(t)}<span class="muted small"> · ${code} · ${nat}</span></td><td>${ct || '<span class="muted">—</span>'}</td><td>${lang}</td><td>${pt}</td><td class="num">${tours}</td></tr>`;
  }).join('')}</table></div>`;
}
const qtTb = { pt: 'Lê Thu Hà', clear: true };
S.W06 = P({
  user: 'qt', body: list({
    user: 'qt', tb: qtTb, chip: 'all', c: { mine: 0, all: 12, care: 0, pg: 'Hiển thị 1–12 / 12' },
    bulk: `<div class="bulk"><b>Đã chọn 12 khách hàng</b><span style="opacity:.8">· Chuyển phụ trách cho</span><span class="input sel" style="width:210px;height:28px;color:#111827">Vũ Đức Minh</span>${B('Chuyển phụ trách', 'p')}<span class="ml">${B('Bỏ chọn')}</span></div>`,
    body: lhRows(),
  }),
});
S.W07 = P({
  user: 'qt', body: list({
    user: 'qt', tb: qtTb, chip: 'all', c: { mine: 0, all: 0, care: 0, pg: 'Không còn khách khớp bộ lọc · các dòng giữ tại chỗ đến khi tải lại' },
    banner: `<div class="banner w" style="margin-bottom:8px"><span class="ico w">!</span><div><b>Đã chuyển 11 khách hàng cho Vũ Đức Minh.</b> 1 khách bỏ qua vì người phụ trách đã được đổi ở phiên khác. Vũ Đức Minh đã nhận thông báo.</div><span class="ml">${B('✕', 'sm')}</span></div>`,
    body: lhRows({ sel: false, done: true }),
  }),
});

// ---------- W19a Sau khi xóa khách hàng: quay về KD03 ----------
S.W19a = P({ body: list() + `<div class="toast">Đã xóa khách hàng Anna Schneider (KH-00413).</div>` });

module.exports = S;
