// Thành phần dùng chung cho wireframe KD10 · Hồ sơ chiến dịch chăm sóc.
// Dữ liệu minh họa: hôm nay 11/11/2026, 10:15; khớp RSD KD09 (W01) và RSD KD03-KD04 (KD04.4 của Müller Reisen GmbH).
const { page, B, bd } = require('./lib');
const NAM = 'Nguyễn Hoàng Nam', HA = 'Lê Thu Hà', TUNG = 'Phạm Thanh Tùng';
const ST = { run: ['Đang chạy', 'b-green'], pause: ['Tạm dừng', 'b-amber'], draft: ['Nháp', 'b-gray'], new: ['Chưa lưu', 'b-gray'] };
const typ = t => t === 'sv' ? '<span class="badge b-violet" style="font-size:10.5px;line-height:15px;padding:0 6px">Survey</span>' : '<span class="badge b-cyan" style="font-size:10.5px;line-height:15px;padding:0 6px">Remarketing</span>';
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const P = (last, o) => page(Object.assign({ crumb: 'Chiến dịch chăm sóc', last, side: 'Chăm sóc khách hàng' }, o));

// Header hồ sơ chiến dịch: id, tên, loại, trạng thái, meta (mảng chuỗi), actions, tab ('set'|'log'), cnt (số trên tab Lịch sử gửi), lock
function hdr({ id = 'Chiến dịch mới', name = '', t = 'sv', st = 'new', meta = [], actions = '', tab = 'set', cnt = '', lockLog = false, ro = '' }) {
  const s = ST[st];
  return `<div class="hdr"><div class="r1"><span class="code">${id}</span>${typ(t)}${bd(s[0], s[1])}${name ? `<span class="b" style="margin-left:4px">${name}</span>` : ''}${ro ? `<span class="muted small" style="margin-left:6px">🔒 ${ro}</span>` : ''}<div class="actions">${actions}</div></div>
${meta.length ? `<div class="meta">${meta.map(m => `<span>${m}</span>`).join('')}</div>` : ''}
<div class="tabs"><div class="tab ${tab === 'set' ? 'on' : ''}">Thiết lập chiến dịch</div><div class="tab ${tab === 'log' ? 'on' : ''} ${lockLog ? 'lock' : ''}">Lịch sử gửi${lockLog ? ' 🔒' : ''}${cnt ? ' ' + cnt : ''}</div>${lockLog ? '<span class="muted small" style="align-self:center;margin-left:8px">Lưu chiến dịch để mở Lịch sử gửi</span>' : ''}</div></div>`;
}
const card = (h, b, st = '') => `<div class="card" style="${st}"><h3>${h}</h3>${b}</div>`;
const fld = (label, val, o = {}) => `<div class="field"><label>${label}${o.req ? ' <span class="req">*</span>' : ''}${o.auto ? `<span class="auto">${o.auto}</span>` : ''}</label><div class="input ${o.cls || ''}">${val}</div>${o.err ? `<div class="err">${o.err}</div>` : ''}${o.hint ? `<div class="hint">${o.hint}</div>` : ''}</div>`;
const foot = (l, r) => `<div style="position:absolute;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #e5e7eb;padding:10px 18px;display:flex;align-items:center;gap:8px"><span class="muted small">${l}</span><span class="ml flex">${r}</span></div>`;
const tags = (arr, ro) => `<div class="tags" style="${ro ? 'background:#f9fafb;border-style:dashed' : ''}">${arr.map(x => `<span class="tag">${x}${ro ? '' : ' ✕'}</span>`).join('')}</div>`;
const tg = (on, label) => `<span class="tg ${on ? 'on' : ''}"><i></i>${label}</span>`;

// Bảng bước Remarketing: [bước, ngày giờ, tiêu đề, mẫu, tình trạng html, số người]
const stepTable = (rows, o = {}) => `<div class="tbl"><table><tr><th>Bước</th><th>Ngày giờ gửi</th><th>Tiêu đề email</th><th>Mẫu</th><th>Tình trạng</th>${o.edit ? '<th></th>' : ''}</tr>
${rows.map(r => `<tr class="${r[6] || ''}"><td><b>${r[0]}</b></td><td style="white-space:nowrap">${r[1]}</td><td>${r[2]}</td><td class="small muted">${r[3]}</td><td class="small" style="white-space:nowrap">${r[4]}</td>${o.edit ? `<td style="white-space:nowrap">${r[5] || ''}</td>` : ''}</tr>`).join('')}</table></div>`;

module.exports = { NAM, HA, TUNG, ST, typ, ind, P, hdr, card, fld, foot, tags, tg, stepTable, B, bd, page };
