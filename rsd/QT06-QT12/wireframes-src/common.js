// Khung dùng chung cho báo cáo QT06-QT12. Hôm nay trên hình: 11/11/2026, 10:15.
// Tỷ giá hôm nay (bảng tỷ giá của Kế toán, minh họa) dùng cho dòng ≈ VND: EUR 28.150, USD 25.980, AUD 17.050.
const { page, B, bd } = require('./lib');
const RATE = { EUR: 28150, USD: 25980, AUD: 17050, VND: 1 };
const CUR_ORDER = ['EUR', 'USD', 'AUD', 'VND'];
const fmt = n => (n < 0 ? '−' : '') + String(Math.round(Math.abs(n))).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const fmt1 = n => (n < 0 ? '−' : '') + Math.abs(n).toFixed(1).replace('.', ',');
const pct = (a, b) => (b ? Math.round(a * 100 / b) + '%' : '—');
const money = (v, c) => c === 'VND' ? `${fmt(v)} ₫` : `${fmt(v)} ${c}`;
// m: { EUR: 1, VND: 2 } → các dòng theo thứ tự loại tiền
const moneyLines = (m, cls = 'cur') => CUR_ORDER.filter(c => m[c]).map(c => `<span class="${cls}">${money(m[c], c)}</span>`).join('') || '<span class="muted">0</span>';
const addM = (a, c, v) => { a[c] = (a[c] || 0) + v; return a; };
const toVND = m => Object.keys(m).reduce((s, c) => s + m[c] * RATE[c], 0);
const sumBy = (rows, f) => rows.reduce((s, r) => s + (f(r) || 0), 0);

const fl = (label, val, cls = '') => `<span class="fl ${cls}"><i>${label}:</i> ${val}</span>`;
const kp = (l, v, s = '', cls = '') => `<div class="kp ${cls}"><div class="l">${l}</div><div class="v">${v}</div>${s ? `<div class="s">${s}</div>` : ''}</div>`;
const chips = (arr, on) => arr.map(([k, t, n]) => `<span class="chip ${k === on ? 'on' : ''}">${t} <span class="cnt">${n}</span></span>`).join('');
const rbar = (p, cls = '') => `<div class="rbar"><div class="t"><i class="${cls}" style="width:${Math.max(0, Math.min(100, p))}%"></i></div></div>`;

// Khung một báo cáo
function rep(o) {
  const {
    user = 'kd', side, title, scope = '', from = '', filters = '', clear = false, chipsRow = '', kpis = '', kcols = 4,
    body = '', overlay = '', exp = 'on', upd = true, note = '',
  } = o;
  const expBtn = exp === 'on' ? B('⤓ Xuất Excel') : exp === 'busy' ? B('Đang xuất…', 'busy') : exp === 'off' ? B('⤓ Xuất Excel', 'dis') : '';
  const b = `<div class="ttl"><h1>${title}</h1>${scope ? `<span class="scope">🔒 ${scope}</span>` : ''}${from ? `<span class="muted small">${from}</span>` : ''}
<div class="ml flex">${upd ? `<span class="upd">Số liệu lúc 11/11/2026 10:15 · <span class="lnk">Tải lại</span></span>` : ''}${expBtn}${o.expNote || ''}</div></div>
<div class="flex" style="margin-bottom:10px;flex-wrap:wrap">${filters}${clear ? '<span class="btn lk" style="margin-left:4px">Xóa bộ lọc</span>' : ''}</div>
${chipsRow ? `<div class="flex" style="margin-bottom:10px">${chipsRow}</div>` : ''}
${kpis ? `<div class="kpis" style="grid-template-columns:${typeof kcols==='number'?`repeat(${kcols},1fr)`:kcols}">${kpis}</div>` : ''}
${note}${body}`;
  return page({ crumb: title, mod: 'Báo cáo', side, user, body: b, overlay });
}

module.exports = { RATE, fmt, fmt1, pct, money, moneyLines, addM, toVND, sumBy, fl, kp, chips, rbar, rep, B, bd };
