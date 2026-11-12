// Wireframe KD01 · Danh sách Tour mẫu và KD02 · Hồ sơ Tour mẫu. Mỗi khóa là một mã W; tên và mục đích ở captions.js.
// Hôm nay trên hình: 11/11/2026. Giá vốn tham khảo của TM-008: khởi hành 08/12/2026, 12 khách.
// TM-012 mới tạo: giá trị mặc định khởi hành 11/12/2026 (hôm nay + 30 ngày), 10 khách.
const { page, drawer, modal, f, B, bd } = require('./lib');
const S = {};
const CSS = `
.tag{display:inline-flex;align-items:center;gap:4px;background:#eef2ff;color:#3730a3;border-radius:4px;padding:0 6px;font-size:11.5px;line-height:19px;margin:1px 3px 1px 0;white-space:nowrap}
.tag.x::after{content:"✕";color:#6366f1;font-size:10px}
.input.tags{height:auto;min-height:30px;flex-wrap:wrap;white-space:normal;padding:3px 8px}
.pr{font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}
.pr .u{font-weight:400;color:#6b7280;font-size:11px}
.pbar{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:7px 12px;margin:10px 0 10px}
.pbar .lb{font-weight:600;white-space:nowrap}
.lt{display:grid;grid-template-columns:216px 1fr;gap:12px;height:508px}
.dnav{background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;display:flex;flex-direction:column}
.dn{padding:5px 10px 5px 8px;border-bottom:1px solid #f1f5f9;display:flex;gap:6px}
.dn .hd{color:#cbd5e1;font-size:12px;line-height:16px}
.dn.on{background:#eff6ff;box-shadow:inset 3px 0 0 #2563eb}
.dn.bad{background:#fef2f2;box-shadow:inset 3px 0 0 #dc2626}
.dn.drag{outline:2px dashed #2563eb;background:#eff6ff}
.dn .t1{font-size:12px;display:flex;gap:6px;align-items:center}
.dn .t2{font-size:12px;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:175px}
.dn .t3{font-size:11px;color:#6b7280}
.ed{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:10px 14px;position:relative;overflow:hidden}
.ed .eh{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.ed .eh .dt{font-size:14px;font-weight:700}
table.sv td,table.sv th{font-size:12px;padding:5px 6px}
table.sv td{vertical-align:top}
.hdl{color:#cbd5e1}
.sumr{display:flex;gap:10px;align-items:center;padding:7px 8px;background:#f8fafc;border-top:1px solid #e5e7eb;font-size:12px}
.savebar{position:absolute;left:0;right:0;bottom:0;height:48px;background:#fff;border-top:1px solid #e5e7eb;display:flex;align-items:center;gap:10px;padding:0 18px;box-shadow:0 -4px 12px rgba(0,0,0,.05)}
.dirty{color:#b45309;font-weight:600}
.toast{bottom:62px}
.hd2{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:10px 16px 0}
.hd2 .nm{font-size:17px;font-weight:700}
.hd2 .cd{color:#6b7280;font-weight:600;font-size:13px}
.ro .input{background:#f9fafb;border-style:dashed}
.pop{position:absolute;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.2);padding:10px 12px;z-index:6;font-size:12.5px}
.daychip{border:1px solid #d1d5db;border-radius:14px;padding:3px 10px;font-size:12px;display:inline-flex;gap:6px;align-items:center;background:#fff}
.daychip.on{border-color:#2563eb;background:#eff6ff;color:#1e40af;font-weight:600}
.daychip.dis{color:#9ca3af;background:#f9fafb}
`;
const P = o => page(Object.assign({ mod: 'Kinh doanh', crumb: 'Tour mẫu', side: 'Tour mẫu', user: 'kd', css: CSS }, o));
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const sw = on => `<span class="sw ${on ? 'on' : ''}"><i></i></span>`;
const tag = (t, cls = '') => `<span class="tag ${cls}">${t}</span>`;
const toast = (t, act = '') => `<div class="toast"><span>${t}</span>${act ? `<a>${act}</a>` : ''}</div>`;

const toastLow = (t, act) => toast(t, act).replace('<div class="toast">', '<div class="toast" style="bottom:20px">');
// ================= KD01 · Dữ liệu minh họa =================
// Cho phép sử dụng 9 · Không cho phép 3 · Tất cả 12. Sắp theo cập nhật mới nhất.
const T = {
  t12: { c: 'TM-012', n: 'Hội An – Mỹ Sơn – Huế 4N3Đ', lt: 'Customized riêng tư', d: 4, dd: 'Hội An, Huế', sv: 4, upd: '11/11/2026', by: 'Nguyễn Hoàng Nam', on: 0, isNew: 1, miss: 2 },
  t08: { c: 'TM-008', n: 'Hà Nội – Hạ Long – Huế – Hội An 8N7Đ', lt: 'Inbound đoàn', d: 8, dd: 'Hà Nội, Hạ Long, Huế, Hội An', sv: 21, stop: 1, upd: '10/11/2026', by: 'Nguyễn Hoàng Nam', on: 1 },
  t11: { c: 'TM-011', n: 'Hà Nội – Ninh Bình – Hạ Long 5N4Đ', lt: 'Inbound đoàn', d: 5, dd: 'Hà Nội, Ninh Bình, Hạ Long', sv: 13, upd: '07/11/2026', by: 'Lê Thu Trang', on: 1 },
  t10: { c: 'TM-010', n: 'Đà Nẵng – Hội An MICE 3N2Đ', lt: 'MICE', d: 3, dd: 'Đà Nẵng, Hội An', sv: 10, upd: '03/11/2026', by: 'Lê Thu Trang', on: 1 },
  t09: { c: 'TM-009', n: 'Sài Gòn – Mekong – Phú Quốc 7N6Đ', lt: 'Inbound đoàn', d: 7, dd: 'TP. Hồ Chí Minh, Cần Thơ, Phú Quốc', sv: 17, upd: '28/10/2026', by: 'Nguyễn Hoàng Nam', on: 1 },
  t07: { c: 'TM-007', n: 'Hà Nội – Sa Pa trekking 4N3Đ', lt: 'Customized riêng tư', d: 4, dd: 'Hà Nội, Sa Pa', sv: 8, upd: '21/10/2026', by: 'Lê Thu Trang', on: 1 },
  t06: { c: 'TM-006', n: 'Nha Trang nghỉ dưỡng 5N4Đ', lt: 'Customized riêng tư', d: 5, dd: 'Nha Trang', sv: 6, stop: 1, upd: '15/10/2026', by: 'Nguyễn Hoàng Nam', on: 0 },
  t05: { c: 'TM-005', n: 'Xuyên Việt 14N13Đ', lt: 'Inbound đoàn', d: 14, dd: 'Hà Nội, Hạ Long, Huế, Hội An, TP. Hồ Chí Minh', sv: 34, upd: '02/10/2026', by: 'Lê Thu Trang', on: 1 },
  t04: { c: 'TM-004', n: 'Hà Nội city tour 1 ngày', lt: 'Customized riêng tư', d: 1, dd: 'Hà Nội', sv: 3, upd: '20/09/2026', by: 'Nguyễn Hoàng Nam', on: 1 },
  t03: { c: 'TM-003', n: 'Huế – Phong Nha 3N2Đ', lt: 'Inbound đoàn', d: 3, dd: 'Huế, Phong Nha', sv: 7, upd: '12/09/2026', by: 'Lê Thu Trang', on: 1 },
  t02: { c: 'TM-002', n: 'Hạ Long du thuyền 2N1Đ', lt: 'Inbound đoàn', d: 2, dd: 'Hạ Long', sv: 4, upd: '30/08/2026', by: 'Nguyễn Hoàng Nam', on: 1 },
  t01: { c: 'TM-001', n: 'Mai Châu – Pù Luông 3N2Đ', lt: 'Customized riêng tư', d: 3, dd: 'Mai Châu, Pù Luông', sv: 6, upd: '14/07/2026', by: 'Lê Thu Trang', on: 0 },
};
const ALL = ['t12', 't08', 't11', 't10', 't09', 't07', 't06', 't05', 't04', 't03', 't02', 't01'];

function rowHtml(k, o = {}) {
  const r = T[k];
  const on = (o.offs || []).includes(k) ? 0 : (o.ons || []).includes(k) ? 1 : r.on;
  const cls = [(o.hl || []).includes(k) ? 'new' : '', !on ? 'off' : ''].join(' ');
  const svc = `${r.sv} dịch vụ${r.stop ? ind(`${r.stop} ngừng sử dụng`, 'a') : ''}`;
  const last = o.ro ? `<span class="${on ? '' : 'muted'}">${on ? 'Cho phép' : 'Không cho phép'}</span>` : sw(on);
  return `<tr class="${cls}"><td><b style="color:#1d4ed8">${r.n}</b>${r.isNew ? ind('Mới', 'b') : ''}<div class="muted small">${r.c} · ${r.lt}</div></td>
<td class="num">${r.d}</td><td style="white-space:normal">${r.dd}</td><td>${svc}</td><td>${r.upd}<div class="muted small">${r.by}</div></td><td style="text-align:center">${last}</td></tr>`;
}
const table = (keys, o = {}) => `<div class="tbl"><table class="nw"><tr><th style="width:330px">Tour mẫu</th><th class="num" style="width:64px">Số ngày</th><th>Điểm đến</th><th style="width:170px">Dịch vụ</th><th style="width:140px">Cập nhật ▼</th><th style="text-align:center;width:${o.ro ? 120 : 96}px">Cho phép sử dụng</th></tr>
${keys.map(k => rowHtml(k, o)).join('')}</table></div>`;
const C_DEF = { on: 9, off: 3, all: 12, pg: '12 Tour mẫu · sắp theo cập nhật mới nhất' };
const chips = (c = C_DEF, active = 'all') => `<div class="flex" style="margin:0 0 8px">${[['on', 'Cho phép sử dụng'], ['off', 'Không cho phép'], ['all', 'Tất cả']].map(([k, n]) => `<span class="chip ${k === active ? 'on' : ''}">${n} <span class="cnt">${c[k]}</span></span>`).join('')}<span class="ml muted small">${c.pg || ''}</span></div>`;
const toolbar = ({ q = '', lt = 'Tất cả', dd = 'Tất cả', d = 'Tất cả', sv = 'Tất cả', clear = false } = {}) => {
  const a = v => v !== 'Tất cả' ? 'focus' : '';
  return `<div class="toolbar" style="margin-top:0">
<div class="input ${q ? 'focus' : 'ph'}" style="width:230px">🔍&nbsp; ${q || 'Tìm tên hoặc mã Tour mẫu'}</div>
<div class="input sel ${a(lt)}" style="width:190px"><span class="muted">Loại Tour:&nbsp;</span>${lt}</div>
<div class="input sel ${a(dd)}" style="width:170px"><span class="muted">Điểm đến:&nbsp;</span>${dd}</div>
<div class="input sel ${a(d)}" style="width:140px"><span class="muted">Số ngày:&nbsp;</span>${d}</div>
<div class="input sel ${a(sv)}" style="width:180px"><span class="muted">Dịch vụ:&nbsp;</span>${sv}</div>
${clear ? B('Xóa bộ lọc', 'lk') : ''}</div>`;
};
const title = (ro = false) => `<div class="ttl"><h1>Tour mẫu</h1><span class="muted">Lịch trình và dịch vụ mẫu để tạo nhanh hành trình cho yêu cầu Tour${ro ? ' · bạn chỉ có quyền xem' : ''}</span><div class="ml flex">${ro ? '' : B('+ Tạo Tour mẫu', 'p')}</div></div>`;
const list = (o = {}) => title(o.ro) + toolbar(o.tb) + chips(o.c, o.chip) + (o.body || table(o.keys || ALL, o.t || {}));

// ---------- W01 Danh sách ----------
S.W01 = P({ body: list() });

// ---------- W02 Lọc theo điểm đến Hội An ----------
S.W02 = P({ body: list({ tb: { dd: 'Hội An', clear: true }, c: { on: 3, off: 1, all: 4, pg: '4 Tour mẫu · sắp theo cập nhật mới nhất' }, keys: ['t12', 't08', 't10', 't05'] }) });

// ---------- W03 Không khớp ----------
S.W03 = P({ body: list({ tb: { q: 'Phú Quốc', lt: 'MICE', clear: true }, c: { on: 0, off: 0, all: 0, pg: '' },
  body: `<div class="tbl"><div class="empty"><div class="big">Không có Tour mẫu khớp bộ lọc</div>Thử bỏ bớt bộ lọc. Muốn tạo mẫu mới thì chọn Tạo Tour mẫu ở góc phải.</div></div>` }) });

// ---------- W04 Lỗi tải ----------
S.W04 = P({ body: list({ tb: { dd: 'Hội An', clear: true }, c: { on: '–', off: '–', all: '–', pg: '' },
  body: `<div class="tbl"><div class="empty"><div class="big" style="color:#b91c1c">Không tải được danh sách Tour mẫu</div>Kết nối tới máy chủ bị gián đoạn. Bộ lọc của bạn vẫn được giữ.<div style="margin-top:12px">${B('Thử lại', 'p')}</div></div></div>` }) });

// ---------- W05 Bật bị chặn (TM-012) ----------
S.W05 = P({ body: list() + `<div class="pop" style="top:236px;right:24px;width:390px">
<div class="flex" style="margin-bottom:6px"><span class="ico e">!</span><b>Chưa cho phép sử dụng được TM-012</b></div>
<div class="small" style="margin-bottom:6px">Tour mẫu cần có ít nhất một ngày và mọi ngày phải có nội dung lịch trình. Còn thiếu:</div>
<div class="list small"><div class="li"><span>Ngày 3 · chưa có nội dung lịch trình</span></div><div class="li"><span>Ngày 4 · chưa có nội dung lịch trình</span></div></div>
<div class="flex" style="margin-top:8px"><span class="muted small">Công tắc giữ Không cho phép</span><span class="ml">${B('Mở Ngày 3', 'p sm')}</span></div></div>` });

// ---------- W06 Sau khi bật (TM-006 có dịch vụ ngừng sử dụng) ----------
S.W06 = P({ body: list({ c: { on: 10, off: 2, all: 12, pg: C_DEF.pg }, t: { ons: ['t06'], hl: ['t06'] } }),
  overlay: toastLow('Đã cho phép sử dụng TM-006 · còn 1 dịch vụ ngừng sử dụng (Ánh Dương Hotel), nên đổi trước khi dùng', 'Hoàn tác') });

// ---------- W07 Sau khi tắt (TM-007) ----------
S.W07 = P({ body: list({ c: { on: 8, off: 4, all: 12, pg: C_DEF.pg }, t: { offs: ['t07'] } }),
  overlay: toastLow('Đã tắt cho phép sử dụng TM-007 · hành trình đã tạo từ mẫu này không đổi', 'Hoàn tác') });

// ---------- W08 Điều hành xem ----------
S.W08 = P({ user: 'dh', body: list({ ro: true, t: { ro: true } }) });

// ================= KD02 · Khung hồ sơ =================
function hdr({ mode = 'edit', code = 'TM-008', name = T.t08.n, on = 1, tab = 'lt', cnt = '<span class="cnt w">1</span>', meta = '8 ngày · 21 dịch vụ · Cập nhật 10/11/2026 14:20 bởi Nguyễn Hoàng Nam', lockLt = false } = {}) {
  let st;
  if (mode === 'new') st = bd('Chưa lưu', 'b-gray');
  else if (mode === 'ro') st = on ? bd('Cho phép sử dụng', 'b-green') : bd('Không cho phép', 'b-gray');
  else st = `<span class="flex small" style="gap:6px">${sw(on)}<b>${on ? 'Cho phép sử dụng' : 'Không cho phép'}</b></span>`;
  const nm = mode === 'new' ? `<span class="nm">Tạo Tour mẫu</span>` : `<span class="cd">${code}</span><span class="nm">${name}</span>`;
  return `<div class="hd2"><div class="r1">${B('← Tour mẫu', 'lk')}<span style="width:6px"></span>${nm}<span style="width:6px"></span>${st}${mode === 'ro' ? ind('Chỉ xem', 'b') : ''}</div>
<div class="meta">${mode === 'new' ? '<span>Mã Tour mẫu cấp khi lưu · lưu thông tin chung trước rồi nhập lịch trình</span>' : `<span>${meta}</span>`}</div>
<div class="tabs"><div class="tab ${tab === 'gi' ? 'on' : ''}">Thông tin chung</div><div class="tab ${tab === 'lt' ? 'on' : ''} ${lockLt ? 'lock' : ''}">Lịch trình và dịch vụ ${lockLt ? '🔒' : cnt}</div></div></div>`;
}
const P2 = o => P(Object.assign({ last: o.code || 'TM-008' }, o));

// ================= KD02.1 · Thông tin chung =================
function giForm({ name = T.t08.n, lt = 'Inbound đoàn', dd = ['Hà Nội', 'Hạ Long', 'Huế', 'Hội An'], desc, note, mode = 'edit', days = '', errs = {}, foot = '', top = '' } = {}) {
  const ddTags = `<div class="field"><label>Điểm đến <span class="req">*</span></label><div class="input tags ${errs.dd ? 'bad' : ''}">${dd.length ? dd.map(t => tag(t, mode === 'ro' ? '' : 'x')).join('') : '<span class="muted">Chọn một hoặc nhiều điểm đến</span>'}</div>${errs.dd ? `<div class="err">${errs.dd}</div>` : '<div class="hint">Dùng để lọc ở danh sách và gợi ý địa điểm khi chọn dịch vụ.</div>'}</div>`;
  const left = `${f('Tên Tour mẫu', name, { req: true, cls: errs.name ? 'bad' : (mode === 'new' && !name ? 'ph' : ''), err: errs.name, hint: errs.name ? '' : 'Tên hiện khi Kinh doanh chọn mẫu ở Yêu cầu Tour. Không trùng tên Tour mẫu khác.' })}
<div class="f2">${f('Loại Tour', lt, { req: true, cls: 'sel' })}${mode === 'new' ? f('Số ngày', days, { req: true, cls: errs.days ? 'bad' : '', err: errs.days, hint: errs.days ? '' : 'Hệ thống tạo sẵn số ngày trống, 1–30.' }) : f('Mã Tour mẫu', mode === 'new' ? 'Cấp khi lưu' : 'TM-008', { cls: 'ro' })}</div>${ddTags}`;
  const right = `<div class="field"><label>Mô tả</label><div class="input area" style="min-height:118px">${desc}</div><div class="hint">Giới thiệu ngắn hiện khi chọn mẫu ở Yêu cầu Tour. Tối đa 1.000 ký tự.</div></div>
<div class="field"><label>Ghi chú nội bộ</label><div class="input area" style="min-height:62px">${note}</div><div class="hint">Chỉ người dùng TOPAS thấy. Tối đa 1.000 ký tự.</div></div>`;
  return `<div class="card ${mode === 'ro' ? 'ro' : ''}" style="margin-top:10px">${top}<div class="grid" style="grid-template-columns:1fr 1fr;gap:20px">${`<div>${left}</div><div>${right}</div>`}</div></div>${foot}`;
}
const D08 = 'Hành trình 8 ngày qua bốn điểm nổi bật miền Bắc và miền Trung: phố cổ Hà Nội, một đêm trên du thuyền vịnh Hạ Long, cố đô Huế và phố cổ Hội An. Phù hợp đoàn châu Âu lần đầu đến Việt Nam.';
const N08 = 'Đoàn Đức ưu tiên HDV tiếng Đức Đất Việt Guides. Mùa mưa miền Trung (10–11) cân nhắc thay Mỹ Sơn bằng làng gốm Thanh Hà.';
const formFoot = (left, btns) => `<div class="savebar">${left}<span class="ml"></span>${btns}</div>`;

// ---------- W09 Tạo Tour mẫu ----------
S.W09 = P({ last: 'Tạo Tour mẫu', body: hdr({ mode: 'new', tab: 'gi', lockLt: true }) + giForm({ mode: 'new', name: 'Hội An – Mỹ Sơn – Huế 4N3Đ', lt: 'Customized riêng tư', dd: ['Hội An', 'Huế'], days: '4',
  desc: 'Bốn ngày khám phá di sản miền Trung cho khách riêng tư: phố cổ Hội An, thánh địa Mỹ Sơn và cố đô Huế.', note: '<span class="muted">Không bắt buộc</span>' }),
  overlay: formFoot('<span class="muted small">🔒 Tab Lịch trình và dịch vụ mở sau khi lưu thông tin chung</span>', B('Hủy') + B('Lưu và nhập lịch trình', 'p')) });

// ---------- W10 Lỗi khi tạo ----------
S.W10 = P({ last: 'Tạo Tour mẫu', body: hdr({ mode: 'new', tab: 'gi', lockLt: true }) + giForm({ mode: 'new', name: 'Hà Nội – Sa Pa trekking 4N3Đ', lt: 'Customized riêng tư', dd: [], days: '0',
  errs: { name: 'Đã có Tour mẫu cùng tên: TM-007 · <a class="lnk">Mở TM-007</a>', dd: 'Chọn ít nhất một điểm đến', days: 'Số ngày từ 1 đến 30' },
  top: `<div class="banner e" style="margin-bottom:10px"><span class="ico e">!</span><div class="small"><b>Chưa lưu được: 3 lỗi.</b> Sửa các trường tô đỏ rồi lưu lại. Dữ liệu đã nhập được giữ.</div></div>`,
  desc: 'Trekking bản làng Sa Pa cho nhóm nhỏ, 2 đêm homestay.', note: '<span class="muted">Không bắt buộc</span>' }),
  overlay: formFoot('<span class="muted small">🔒 Tab Lịch trình và dịch vụ mở sau khi lưu thông tin chung</span>', B('Hủy') + B('Lưu và nhập lịch trình', 'p')) });

// ---------- W12 Sửa thông tin chung ----------
S.W12 = P2({ body: hdr({ tab: 'gi' }) + giForm({ desc: D08 + ' <span class="hl">Có thể thay Mỹ Sơn bằng làng gốm Thanh Hà.</span>', note: N08 }),
  overlay: formFoot('<span class="dirty">● Có thay đổi chưa lưu</span>', B('Hủy thay đổi') + B('Lưu', 'p')) });

// ---------- W13 Xung đột khi lưu ----------
S.W13 = P2({ body: hdr({ tab: 'gi' }) + giForm({ desc: D08 + ' <span class="hl">Có thể thay Mỹ Sơn bằng làng gốm Thanh Hà.</span>', note: N08,
  top: `<div class="banner e" style="margin-bottom:10px"><span class="ico e">!</span><div class="small"><b>Chưa lưu: Lê Thu Trang vừa lưu Tour mẫu này lúc 14:32.</b> Thay đổi của bạn vẫn còn trên màn hình. Xem bản mới, đưa lại thay đổi của bạn rồi lưu.</div><span class="ml">${B('Xem bản mới', 'sm')}</span></div>` }),
  overlay: formFoot('<span class="dirty">● Có thay đổi chưa lưu</span>', B('Hủy thay đổi') + B('Lưu', 'p')) });

// ================= KD02.2 · Lịch trình và dịch vụ =================
function pbar({ date = '08/12/2026', pax = '12', auto = false, total = '<b>9.865.000 ₫ + 305 USD</b> mỗi khách', note = 'chưa gồm 2 dịch vụ: 1 thiếu giá, 1 ngừng sử dụng' } = {}) {
  const a = auto ? '<span class="auto">Mặc định</span>' : '';
  return `<div class="pbar"><span class="lb">Giá vốn tham khảo</span>
<div class="input" style="width:170px"><span class="muted">Khởi hành&nbsp;</span>${date}</div>${a}
<div class="input" style="width:100px"><span class="muted">Số khách&nbsp;</span>${pax}</div>
<span class="muted small" style="max-width:300px;white-space:normal">Giá NCC theo hợp đồng, mùa và số khách; giữ loại tiền gốc. Không phải báo giá.</span>
<span class="ml" style="text-align:right"><span class="small muted">Cả Tour:</span> ${total}${note ? `<div class="small" style="color:#b45309">${note}</div>` : ''}</span></div>`;
}
const D08N = [
  ['08/12', 'Hà Nội – đón khách', 2], ['09/12', 'Hà Nội – Hạ Long, ngủ du thuyền', 2], ['10/12', 'Hạ Long – Hà Nội', 3], ['11/12', 'Hà Nội – bay Huế – city Huế', 3],
  ['12/12', 'Huế – đèo Hải Vân – Hội An', 5, ind('1 thiếu giá', 'a')], ['13/12', 'Hội An – Mỹ Sơn', 3], ['14/12', 'Hội An tự do', 2], ['15/12', 'Hội An – sân bay Đà Nẵng', 1, ind('1 ngừng', 'a')],
];
function nav(days, sel, o = {}) {
  return `<div class="dnav"><div style="padding:7px 10px;border-bottom:1px solid #e5e7eb" class="flex"><b>${days.length} ngày</b>${o.ro ? "" : "<span class=\"ml muted small\">Kéo ⋮⋮ để sắp xếp</span>"}</div>
${days.map((d, i) => `<div class="dn ${i + 1 === sel ? 'on' : ''} ${(o.bad || []).includes(i + 1) ? 'bad' : ''} ${o.drag === i + 1 ? 'drag' : ''}">${o.ro ? "" : "<span class=\"hd\">⋮⋮</span>"}<div style="min-width:0"><div class="t1"><b>Ngày ${i + 1}</b><span class="muted">${d[0]} · ${d[2] ? d[2] + " dv" : "0 dv"}</span>${d[3] || ''}${(o.dirty || []).includes(i + 1) ? '<span class="dirty" style="font-size:11px">●</span>' : ''}</div>
<div class="t2">${d[1] || '<span class="muted">Chưa có tiêu đề</span>'}</div></div></div>`).join('')}
${o.ro ? '' : `<div style="padding:8px 10px">${B('+ Thêm ngày', 'sm')}</div>`}</div>`;
}
// r: [dịch vụ, NCC · loại, số lượng, ghi chú, đơn giá html, thành tiền, cờ]
function svTable(rows, o = {}) {
  return `<div class="tbl"><table class="sv"><tr>${o.ro ? '' : '<th style="width:16px"></th>'}<th>Dịch vụ</th><th style="width:124px">Số lượng</th><th style="width:118px">Ghi chú</th><th style="width:168px">Đơn giá tham khảo</th><th class="num" style="width:98px">Thành tiền</th>${o.ro ? '' : '<th style="width:22px"></th>'}</tr>
${rows.map(r => `<tr class="${r[6] === 'new' ? 'new' : ''}">${o.ro ? '' : '<td class="hdl">⋮⋮</td>'}<td><b>${r[0]}</b>${r[6] === 'stop' ? ind('Dịch vụ ngừng sử dụng', 'a') : ''}${r[6] === 'new' ? ind('Mới', 'b') : ''}<div class="muted small">${r[1]}</div></td>
<td>${o.ro ? r[2] : `<span class="isel">${r[2]}</span>`}</td><td class="small">${r[3] || '<span class="muted">—</span>'}</td><td>${r[4]}</td><td class="num">${r[5]}</td>${o.ro ? '' : '<td class="muted">⋯</td>'}</tr>`).join('')}</table>
${o.sum ? `<div class="sumr">${o.sum}</div>` : ''}</div>`;
}
const pr = (p, u, s) => `<span class="pr">${p} <span class="u">${u}</span></span><div class="muted small">${s}</div>`;
const R5 = [
  ['Xe 16 chỗ Huế – Hội An qua đèo Hải Vân', 'Hue Travel Car · Vận chuyển', 'Cố định · 1', 'Đón 8:00 tại khách sạn', pr('2.600.000 ₫', '/xe/lượt', 'Cả kỳ hợp đồng'), '2.600.000 ₫'],
  ['HDV tiếng Đức · theo ngày', 'Đất Việt Guides · Hướng dẫn viên', 'Cố định · 1', '', pr('1.300.000 ₫', '/đoàn/ngày', '1–15 khách · Cả kỳ hợp đồng'), '1.300.000 ₫'],
  ['Set menu Huế · bữa trưa', 'Golden Lotus Restaurant · Nhà hàng', 'Theo số khách · 12', '', '<span class="ind r" style="margin:0">Không có hợp đồng cho 12/12</span>', '<span class="muted">—</span>'],
  ['Set menu Việt Nam · bữa tối', 'Mỹ Sơn Garden · Nhà hàng', 'Theo số khách · 12', '', pr('350.000 ₫', '/khách', '10–20 khách · Cả kỳ hợp đồng'), '4.200.000 ₫'],
  ['Phòng Deluxe Garden View', 'Hoi An Riverside Resort · Khách sạn', 'Theo số phòng · 6', 'Phòng twin', pr('2.800.000 ₫', '/phòng/đêm', 'Cao điểm · cuối tuần'), '16.800.000 ₫'],
];
const SUM5 = `<b>Tạm tính Ngày 5:</b> 24.900.000 ₫ · 2.075.000 ₫/khách <span style="color:#b45309">· chưa gồm 1 dịch vụ thiếu giá</span>`;
function editor({ day, date, ttl, content, rows, sum, ro = false, err = '', extra = '', menu = '', empty = false }) {
  const ttlF = ro ? `<div class="input" style="flex:1">${ttl}</div>` : `<div class="input" style="flex:1">${ttl || '<span class="muted">Tiêu đề ngày, ví dụ Hà Nội – Hạ Long</span>'}</div>`;
  return `<div class="ed ${ro ? 'ro' : ''}"><div class="eh"><span class="dt">Ngày ${day}</span><span class="muted">${date}</span>${ttlF}${ro ? '' : B('⋯', 'sm')}</div>
<div class="field"><label>Nội dung lịch trình${ro ? '' : ' <span class="req">*</span>'}</label><div class="input area ${err ? 'bad' : ''}" style="min-height:${ro ? 58 : 58}px">${content || '<span class="muted">Mô tả hoạt động trong ngày: tham quan, di chuyển, bữa ăn, nơi nghỉ.</span>'}</div>${err ? `<div class="err">${err}</div>` : ''}</div>
<div class="flex" style="margin:4px 0 6px"><b>Dịch vụ</b><span class="muted small">chọn từ danh mục NCC · số lượng tính theo số khách tham chiếu</span>${ro ? '' : `<span class="ml">${B('+ Thêm dịch vụ', 'sm')}</span>`}</div>
${empty ? `<div class="tbl"><div class="empty" style="padding:34px 20px"><div class="big">Chưa có dịch vụ</div>Chọn Thêm dịch vụ để lấy khách sạn, xe, nhà hàng, HDV… từ danh mục NCC.</div></div>` : svTable(rows, { ro, sum })}${extra}${menu}</div>`;
}
const C5 = 'Trả phòng, xe đưa đoàn vượt đèo Hải Vân, dừng chụp ảnh tại đỉnh đèo. Ăn trưa set menu Huế. Chiều nhận phòng tại Hội An, tối dạo phố cổ, ăn tối tại nhà hàng Mỹ Sơn Garden.';
const saveBar = (dirty, extra = '') => `<div class="savebar">${dirty ? '<span class="dirty">● Có thay đổi chưa lưu</span>' : '<span class="muted small">Đã lưu 10/11/2026 14:20 bởi Nguyễn Hoàng Nam</span>'}${extra}<span class="ml"></span>${dirty ? B('Hủy thay đổi') + B('Lưu lịch trình', 'p') : B('Hủy thay đổi', 'dis') + B('Lưu lịch trình', 'dis') + '<span class="muted small">Chưa có thay đổi</span>'}</div>`;
const LT = (o) => P2(Object.assign({}, o, { body: hdr(o.h || {}) + (o.pb === undefined ? pbar() : o.pb) + `<div class="lt">${o.nav}${o.ed}</div>`, overlay: (o.ro ? '' : saveBar(o.dirty, o.sbx)) + (o.ov || '') }));

// ---------- W14 Lịch trình TM-008 · Ngày 5 ----------
S.W14 = LT({ nav: nav(D08N, 5), ed: editor({ day: 5, date: 'thứ Bảy 12/12/2026', ttl: 'Huế – đèo Hải Vân – Hội An', content: C5, rows: R5, sum: SUM5 }) });

// ---------- TM-012 (mới) ----------
const D12 = (n1 = 0, n2 = 0, t1 = '', t2 = '') => [['11/12', t1, n1], ['12/12', t2, n2], ['13/12', '', 0], ['14/12', '', 0]];
const H12 = (cnt, meta) => ({ code: 'TM-012', name: T.t12.n, on: 0, cnt, meta });
const PB12 = (total = '<span class="muted">—</span>', note = '') => pbar({ date: '11/12/2026', pax: '10', auto: true, total, note });

// ---------- W11 Sau khi tạo: tab lịch trình với 4 ngày trống ----------
S.W11 = LT({ code: 'TM-012', h: H12('<span class="cnt w">4</span>', '4 ngày · 0 dịch vụ · Tạo 11/11/2026 09:15 bởi Nguyễn Hoàng Nam'), pb: PB12('<span class="muted">—</span>', ''),
  nav: nav(D12(), 1), ed: editor({ day: 1, date: 'thứ Sáu 11/12/2026', ttl: '', content: '', empty: true }),
  ov: toast('Đã tạo Tour mẫu TM-012 với 4 ngày trống · nhập nội dung và dịch vụ từng ngày'), dirty: false });

// ---------- W15 Chọn dịch vụ (bảng trượt) ----------
const pk = (cb, sv, ncc, loc, price, o = {}) => `<tr class="${cb ? 'sel' : ''}"><td><span class="cb ${cb ? 'on' : ''}"></span></td><td><b>${sv}</b>${o.ind || ''}<div class="muted small">${ncc}</div></td><td>${loc}</td><td>${price}</td></tr>`;
const pkHead = `<table class="sv"><tr><th style="width:20px"></th><th>Dịch vụ · NCC</th><th style="width:90px">Địa điểm</th><th style="width:200px">Giá tham khảo 11/12 · 10 khách</th></tr>`;
const pkFilter = (q, chip, loc, auto = 'Theo điểm đến') => `<div class="toolbar" style="margin:0 0 8px"><div class="input ${q ? 'focus' : 'ph'}" style="width:290px">🔍&nbsp; ${q || 'Tìm tên dịch vụ hoặc NCC'}</div>
<div class="input sel focus" style="width:200px"><span class="muted">Địa điểm:&nbsp;</span>${loc}</div><span class="auto">${auto}</span></div>
<div class="flex" style="margin-bottom:8px;flex-wrap:wrap">${['Tất cả', 'Khách sạn', 'Nhà hàng', 'Vận chuyển', 'Hướng dẫn viên', 'Du thuyền', 'Vé tham quan'].map(x => `<span class="chip ${x === chip ? 'on' : ''}">${x}</span>`).join('')}</div>`;
S.W15 = LT({ code: 'TM-012', h: H12('<span class="cnt w">3</span>', '4 ngày · 0 dịch vụ · Tạo 11/11/2026 09:15 bởi Nguyễn Hoàng Nam'), pb: PB12(),
  nav: nav(D12(0, 0, 'Đà Nẵng – Hội An'), 1, { dirty: [1] }), ed: editor({ day: 1, date: 'thứ Sáu 11/12/2026', ttl: 'Đà Nẵng – Hội An', content: 'Đón khách tại sân bay Đà Nẵng, đưa về Hội An nhận phòng. Chiều dạo phố cổ, tối ăn tại nhà hàng Mỹ Sơn Garden.', empty: true }), dirty: true,
  ov: drawer('Thêm dịch vụ', pkFilter('', 'Tất cả', 'Hội An, Huế') + `<div class="tbl">${pkHead}
${pk(1, 'Phòng Deluxe Garden View', 'Hoi An Riverside Resort · Khách sạn · phòng/đêm', 'Hội An', pr('2.800.000 ₫', '/phòng/đêm', 'Cao điểm · cuối tuần'))}
${pk(0, 'Phòng Superior', 'Hoi An Riverside Resort · Khách sạn · phòng/đêm', 'Hội An', pr('2.300.000 ₫', '/phòng/đêm', 'Cao điểm · cuối tuần'))}
${pk(0, 'Phòng Deluxe Balcony', 'Phố Hội Boutique · Khách sạn · phòng/đêm', 'Hội An', pr('1.350.000 ₫', '/phòng/đêm', 'Cả kỳ hợp đồng'))}
${pk(1, 'Set menu Việt Nam · bữa tối', 'Mỹ Sơn Garden · Nhà hàng · khách/bữa', 'Hội An', pr('350.000 ₫', '/khách', '10–20 khách · Cả kỳ hợp đồng'))}
${pk(0, 'Set menu Huế · bữa trưa', 'Golden Lotus Restaurant · Nhà hàng · khách/bữa', 'Huế', '<span class="ind r" style="margin:0">Không có hợp đồng cho 11/12</span>')}
${pk(0, 'Xe 16 chỗ city tour Huế', 'Hue Travel Car · Vận chuyển · xe/ngày', 'Huế', pr('1.800.000 ₫', '/xe/ngày', 'Cả kỳ hợp đồng'))}
${pk(0, 'Xe 16 chỗ Huế – Hội An qua đèo Hải Vân', 'Hue Travel Car · Vận chuyển · xe/lượt', 'Huế', pr('2.600.000 ₫', '/xe/lượt', 'Cả kỳ hợp đồng'))}
</table></div><div class="muted small" style="margin-top:6px">Chỉ hiện dịch vụ đang dùng của NCC đang dùng. 23 dịch vụ khớp · cuộn để xem thêm.</div>`,
  `<span class="b">Thêm vào:</span><span class="daychip on">✓ Ngày 1</span><span class="daychip on">✓ Ngày 2</span><span class="daychip">Ngày 3</span><span class="daychip">Ngày 4</span><span class="ml muted small">2 dịch vụ × 2 ngày = 4 dòng</span>${B('Hủy')}${B('Thêm 4 dòng', 'p')}`,
  { wide: true, sub: 'Tour mẫu TM-012 · đang ở Ngày 1 · có thể thêm cùng lúc vào nhiều ngày (ví dụ khách sạn nhiều đêm)' }) });

// ---------- W16 Sau khi thêm dịch vụ (chưa lưu) ----------
const R12 = (flag) => [
  ['Set menu Việt Nam · bữa tối', 'Mỹ Sơn Garden · Nhà hàng', 'Theo số khách · 10', '', pr('350.000 ₫', '/khách', '10–20 khách · Cả kỳ hợp đồng'), '3.500.000 ₫', flag],
  ['Phòng Deluxe Garden View', 'Hoi An Riverside Resort · Khách sạn', 'Theo số phòng · 5', '', pr('2.800.000 ₫', '/phòng/đêm', 'Cao điểm · cuối tuần'), '14.000.000 ₫', flag],
];
const SUM12 = `<b>Tạm tính Ngày 1:</b> 17.500.000 ₫ · 1.750.000 ₫/khách`;
const C12 = 'Đón khách tại sân bay Đà Nẵng, đưa về Hội An nhận phòng. Chiều dạo phố cổ, tối ăn tại nhà hàng Mỹ Sơn Garden.';
S.W16 = LT({ code: 'TM-012', h: H12('<span class="cnt w">3</span>', '4 ngày · 0 dịch vụ · Tạo 11/11/2026 09:15 bởi Nguyễn Hoàng Nam'), pb: PB12('<b>3.500.000 ₫</b> mỗi khách', 'tính cả dịch vụ chưa lưu'),
  nav: nav(D12(2, 2, 'Đà Nẵng – Hội An'), 1, { dirty: [1, 2] }), ed: editor({ day: 1, date: 'thứ Sáu 11/12/2026', ttl: 'Đà Nẵng – Hội An', content: C12, rows: R12('new'), sum: SUM12 }), dirty: true,
  ov: toast('Đã thêm 4 dòng vào Ngày 1, Ngày 2 · bấm Lưu lịch trình để lưu', 'Hoàn tác') });

// ---------- W17 Sau khi lưu lịch trình ----------
S.W17 = LT({ code: 'TM-012', h: H12('<span class="cnt w">2</span>', '4 ngày · 4 dịch vụ · Cập nhật 11/11/2026 09:32 bởi Nguyễn Hoàng Nam'), pb: PB12('<b>3.500.000 ₫</b> mỗi khách', ''),
  nav: nav(D12(2, 2, 'Đà Nẵng – Hội An', 'Hội An – Mỹ Sơn – Hội An'), 1), ed: editor({ day: 1, date: 'thứ Sáu 11/12/2026', ttl: 'Đà Nẵng – Hội An', content: C12, rows: R12(''), sum: SUM12,
    extra: `<div class="banner i" style="margin-top:10px"><span class="ico i">i</span><div class="small">Ngày 3, Ngày 4 chưa có nội dung lịch trình. Cần nhập đủ trước khi bật Cho phép sử dụng.</div><span class="ml">${B('Mở Ngày 3', 'sm')}</span></div>` }), dirty: false,
  ov: toast('Đã lưu lịch trình · 4 ngày · 4 dịch vụ') }).replace('Đã lưu 10/11/2026 14:20 bởi Nguyễn Hoàng Nam', 'Đã lưu 11/11/2026 09:32 bởi Nguyễn Hoàng Nam');

// ---------- W18 Thao tác trên ngày (menu ⋯) ----------
const R6 = [
  ['Xe 16 chỗ Hội An – Mỹ Sơn', 'Hue Travel Car · Vận chuyển', 'Cố định · 1', 'Khởi hành 5:30', pr('1.200.000 ₫', '/xe/lượt', 'Cả kỳ hợp đồng'), '1.200.000 ₫'],
  ['Set menu Việt Nam · bữa tối', 'Mỹ Sơn Garden · Nhà hàng', 'Theo số khách · 12', '', pr('350.000 ₫', '/khách', '10–20 khách · Cả kỳ hợp đồng'), '4.200.000 ₫'],
  ['Phòng Deluxe Garden View', 'Hoi An Riverside Resort · Khách sạn', 'Theo số phòng · 6', 'Phòng twin', pr('2.400.000 ₫', '/phòng/đêm', 'Cao điểm · ngày thường'), '14.400.000 ₫'],
];
const menu6 = `<div class="menu" style="top:40px;right:14px;width:230px"><div class="mi">Thêm ngày phía sau</div><div class="mi on">Nhân bản ngày này</div><div class="mi">Chuyển lên</div><div class="mi">Chuyển xuống</div><div style="height:1px;background:#e5e7eb;margin:4px 0"></div><div class="mi" style="color:#b91c1c">Xóa ngày (3 dịch vụ)</div></div>`;
S.W18 = LT({ nav: nav(D08N, 6), ed: editor({ day: 6, date: 'Chủ nhật 13/12/2026', ttl: 'Hội An – Mỹ Sơn', content: 'Sáng sớm đi thánh địa Mỹ Sơn, ngắm bình minh. Chiều tự do tại Hội An. Tối ăn tại Mỹ Sơn Garden.', rows: R6,
  sum: '<b>Tạm tính Ngày 6:</b> 19.800.000 ₫ · 1.650.000 ₫/khách', menu: menu6 }) });

// ---------- W19 Sau khi xóa Ngày 7 (chưa lưu) ----------
const D08D = [...D08N.slice(0, 6), ['14/12', 'Hội An – sân bay Đà Nẵng', 1, ind('1 ngừng', 'a')]];
S.W19 = LT({ h: { cnt: '<span class="cnt w">1</span>', meta: '8 ngày · 21 dịch vụ · Cập nhật 10/11/2026 14:20 bởi Nguyễn Hoàng Nam' },
  pb: pbar({ total: '<b>8.315.000 ₫ + 305 USD</b> mỗi khách', note: 'tính cả thay đổi chưa lưu · chưa gồm 2 dịch vụ' }),
  nav: nav(D08D, 7, { dirty: [7] }), ed: editor({ day: 7, date: 'thứ Hai 14/12/2026', ttl: 'Hội An – sân bay Đà Nẵng', content: 'Trả phòng, xe đưa đoàn ra sân bay Đà Nẵng. Kết thúc chương trình.',
    rows: [['Xe 45 chỗ Đà Nẵng – Hội An', 'Hải Vân Transport · Vận chuyển', 'Cố định · 1', 'Đưa ra sân bay', '<span class="muted small">Không tính · dịch vụ ngừng sử dụng</span>', '<span class="muted">—</span>', 'stop']],
    sum: '<b>Tạm tính Ngày 7:</b> <span class="muted">chưa có dịch vụ được tính giá</span> <span style="color:#b45309">· 1 dịch vụ ngừng sử dụng</span>' }), dirty: true,
  ov: toast('Đã xóa Ngày 7 “Hội An tự do” (2 dịch vụ) · các ngày sau dồn lên', 'Hoàn tác') });

// ---------- W20 Lỗi khi lưu lịch trình ----------
const R4 = [
  ['Xe 16 chỗ city tour Huế', 'Hue Travel Car · Vận chuyển', 'Cố định · 1', '', pr('1.800.000 ₫', '/xe/ngày', 'Cả kỳ hợp đồng'), '1.800.000 ₫'],
  ['HDV tiếng Đức · theo ngày', 'Đất Việt Guides · Hướng dẫn viên', 'Cố định · 1', '', pr('1.300.000 ₫', '/đoàn/ngày', '1–15 khách · Cả kỳ hợp đồng'), '1.300.000 ₫'],
  ['Phòng Deluxe River View', 'Hương Giang Hotel · Khách sạn', 'Theo số phòng · 6', 'Phòng twin', pr('1.900.000 ₫', '/phòng/đêm', 'Cao điểm'), '11.400.000 ₫'],
];
S.W20 = LT({ h: { cnt: '<span class="cnt w">2</span>' }, pb: `<div class="banner e" style="margin:10px 0"><span class="ico e">!</span><div class="small"><b>Chưa lưu được lịch trình.</b> Tour mẫu đang cho phép sử dụng nên mọi ngày phải có nội dung lịch trình. Ngày 4 đang trống. Nhập nội dung, hoặc tắt Cho phép sử dụng ở phần đầu rồi lưu.</div></div>`,
  nav: nav(D08N, 4, { bad: [4], dirty: [4] }), ed: editor({ day: 4, date: 'thứ Sáu 11/12/2026', ttl: 'Hà Nội – bay Huế – city Huế', content: '', err: 'Nhập nội dung lịch trình của ngày này', rows: R4,
    sum: '<b>Tạm tính Ngày 4:</b> 14.500.000 ₫ · 1.208.000 ₫/khách' }), dirty: true });

// ---------- W21 Dịch vụ ngừng sử dụng → Đổi dịch vụ ----------
const menu8 = `<div class="menu" style="top:196px;right:14px;width:200px"><div class="mi on">Đổi dịch vụ</div><div class="mi">Chuyển sang ngày khác</div><div style="height:1px;background:#e5e7eb;margin:4px 0"></div><div class="mi" style="color:#b91c1c">Xóa khỏi ngày</div></div>`;
S.W21 = LT({ nav: nav(D08N, 8), ed: editor({ day: 8, date: 'thứ Ba 15/12/2026', ttl: 'Hội An – sân bay Đà Nẵng', content: 'Trả phòng, xe đưa đoàn ra sân bay Đà Nẵng. Kết thúc chương trình.',
  rows: [['Xe 45 chỗ Đà Nẵng – Hội An', 'Hải Vân Transport · Vận chuyển', 'Cố định · 1', 'Đưa ra sân bay', '<span class="muted small">Không tính · dịch vụ ngừng sử dụng</span>', '<span class="muted">—</span>', 'stop']],
  sum: '<b>Tạm tính Ngày 8:</b> <span class="muted">chưa có dịch vụ được tính giá</span> <span style="color:#b45309">· 1 dịch vụ ngừng sử dụng</span>', menu: menu8,
  extra: `<div class="banner w" style="margin-top:10px"><span class="ico w">!</span><div class="small">Dịch vụ này đã ngừng sử dụng ở danh mục NCC (Điều hành tắt ngày 02/11/2026). Dòng được giữ để bạn chọn dịch vụ thay thế; khi tạo hành trình từ mẫu, dịch vụ này sẽ được đánh dấu.</div></div>` }) });

// ---------- W22 Chọn dịch vụ thay thế ----------
const pkR = (rd, sv, ncc, loc, price, o = {}) => `<tr class="${rd ? 'sel' : ''}"><td><span class="rd ${rd ? 'on' : ''}"></span></td><td><b>${sv}</b><div class="muted small">${ncc}</div></td><td>${loc}</td><td>${price}</td></tr>`;
S.W22 = LT({ nav: nav(D08N, 8), ed: editor({ day: 8, date: 'thứ Ba 15/12/2026', ttl: 'Hội An – sân bay Đà Nẵng', content: 'Trả phòng, xe đưa đoàn ra sân bay Đà Nẵng. Kết thúc chương trình.',
  rows: [['Xe 45 chỗ Đà Nẵng – Hội An', 'Hải Vân Transport · Vận chuyển', 'Cố định · 1', 'Đưa ra sân bay', '<span class="muted small">Không tính · dịch vụ ngừng sử dụng</span>', '<span class="muted">—</span>', 'stop']] }),
  ov: drawer('Đổi dịch vụ', `<div class="banner i" style="margin-bottom:10px"><span class="ico i">i</span><div class="small">Thay <b>Xe 45 chỗ Đà Nẵng – Hội An</b> (Hải Vân Transport) ở Ngày 8. Giữ số lượng <b>Cố định · 1</b> và ghi chú “Đưa ra sân bay”.</div></div>`
    + pkFilter('', 'Vận chuyển', 'Đà Nẵng, Hội An', 'Theo dịch vụ cũ') + `<div class="tbl"><table class="sv"><tr><th style="width:20px"></th><th>Dịch vụ · NCC</th><th style="width:90px">Địa điểm</th><th style="width:200px">Giá tham khảo 15/12 · 12 khách</th></tr>
${pkR(1, 'Đón tiễn sân bay Đà Nẵng – Hội An', 'Hải Vân Transport · Vận chuyển · xe/lượt', 'Đà Nẵng', pr('950.000 ₫', '/xe/lượt', 'HĐ HVT-2027 · 10–14 khách'))}
${pkR(0, 'Xe 29 chỗ city tour Đà Nẵng', 'Hải Vân Transport · Vận chuyển · xe/ngày', 'Đà Nẵng', pr('1.900.000 ₫', '/xe/ngày', 'HĐ HVT-2027 · Cả kỳ hợp đồng'))}
${pkR(0, 'Xe 16 chỗ Hội An – sân bay Đà Nẵng', 'Sơn Trà Limousine · Vận chuyển · xe/lượt', 'Hội An', pr('750.000 ₫', '/xe/lượt', 'Cả kỳ hợp đồng'))}
</table></div><div class="muted small" style="margin-top:6px">Lọc sẵn theo loại và địa điểm của dịch vụ cũ. Bỏ bộ lọc để xem loại khác.</div>`,
  `<span class="small">Đã chọn: <b>Đón tiễn sân bay Đà Nẵng – Hội An</b></span><span class="ml"></span>${B('Hủy')}${B('Đổi dịch vụ', 'p')}`, { wide: true, sub: 'Tour mẫu TM-008 · Ngày 8 · thứ Ba 15/12/2026' }) });

// ---------- W23 Rời khi chưa lưu ----------
S.W23 = LT({ nav: nav(D08N, 5, { dirty: [5] }), ed: editor({ day: 5, date: 'thứ Bảy 12/12/2026', ttl: 'Huế – đèo Hải Vân – Hội An', content: C5, rows: R5, sum: SUM5 }), dirty: true,
  ov: modal('Rời khỏi lịch trình?', `<div>Lịch trình của <b>TM-008</b> có thay đổi chưa lưu ở Ngày 5. Nếu rời đi mà không lưu, các thay đổi này sẽ mất.</div>`, `${B('Ở lại')}${B('Bỏ thay đổi', 'd')}${B('Lưu và rời', 'p')}`, 480) });

// ---------- W24 Điều hành xem lịch trình ----------
S.W24 = P2({ user: 'dh', body: hdr({ mode: 'ro', cnt: '' }) + pbar() + `<div class="lt">${nav(D08N, 5, { ro: true })}${editor({ day: 5, date: 'thứ Bảy 12/12/2026', ttl: 'Huế – đèo Hải Vân – Hội An', content: C5, rows: R5, sum: SUM5, ro: true })}</div>` });

module.exports = S;
