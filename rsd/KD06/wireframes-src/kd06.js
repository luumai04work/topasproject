// Thành phần dùng chung cho wireframe KD06 · Hồ sơ yêu cầu Tour (không phải tệp screens-*, build.js không dựng trực tiếp).
// Hôm nay trên hình: 11/11/2026. Người dùng chính: Nguyễn Hoàng Nam (Kinh doanh).
// Kịch bản dữ liệu:
//  - YC-2611-0031 · Bianchi Viaggi S.r.l. (mới tạo hôm nay): 10/03 – 19/03/2027, 10N9Đ, 16 khách = 14 NL + 2 TE (7, 9 tuổi), Deluxe, 0 phòng đơn → 7 phòng.
//  - YC-2611-0019 · Müller Reisen GmbH: 15/03 – 28/03/2027, 14N13Đ, 25 khách = 23 NL + 2 TE (8, 10 tuổi), 2 phòng đơn → 13 phòng.
//    v1 05/11 54.100 EUR (Cần điều chỉnh); v2 08/11 52.750 EUR (Cần điều chỉnh) = 2.110×23 + 1.690×2 + 420×2.
//    v3 11/11: giá vốn 1.107.886.000 ₫ + 4.280 USD = 44.317,40 EUR (EUR 27.450 ₫, USD 25.380 ₫); Markup 15%;
//    NL 1.772,80 → 2.040; TE 1.415,30 → 1.630; phụ thu phòng đơn 356,20 → 410 (làm tròn lên bội 10 EUR) → 51.000 EUR.
//  - YC-2610-0031 · Hanami Tours: 20/12 – 26/12/2026, v3 Chốt 6.120.000 JPY, Booking BK-2611-0149 đã hủy 10/11.
//  - YC-2611-0028 · Ahmed Rahman: hủy rồi mở lại.
const { page, drawer, modal, f, B, bd } = require('./lib');

const CSS = `
.lt{display:grid;grid-template-columns:216px 1fr;gap:12px}
.dnav{background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;display:flex;flex-direction:column}
.dn{padding:5px 10px 5px 8px;border-bottom:1px solid #f1f5f9;display:flex;gap:6px}
.dn .hd{color:#cbd5e1;font-size:12px;line-height:16px}
.dn.on{background:#eff6ff;box-shadow:inset 3px 0 0 #2563eb}
.dn.bad{background:#fef2f2;box-shadow:inset 3px 0 0 #dc2626}
.dn.new{background:#f0fdf4;box-shadow:inset 3px 0 0 #16a34a}
.dn .t1{font-size:12px;display:flex;gap:6px;align-items:center}
.dn .t2{font-size:12px;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:175px}
.ed{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:10px 14px;position:relative;overflow:hidden}
.ed .eh{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.ed .eh .dt{font-size:14px;font-weight:700}
table.sv td,table.sv th{font-size:12px;padding:5px 6px}
table.sv td{vertical-align:top}
.hdl{color:#cbd5e1}
.savebar{position:absolute;left:0;right:0;bottom:0;height:48px;background:#fff;border-top:1px solid #e5e7eb;display:flex;align-items:center;gap:10px;padding:0 18px;box-shadow:0 -4px 12px rgba(0,0,0,.05)}
.dirty{color:#b45309;font-weight:600}
.toast{bottom:62px}
.pop{position:absolute;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.2);padding:10px 12px;z-index:6;font-size:12.5px}
.way{border:1px solid #e5e7eb;border-radius:10px;background:#fff;padding:16px;display:flex;flex-direction:column;gap:8px}
.way .ic{font-size:22px}
.way h4{margin:0;font-size:14px}
.sum{display:flex;gap:6px 18px;flex-wrap:wrap;background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;font-size:12.5px;color:#6b7280}
.sum b{color:#111827;font-weight:600}
.seg{display:inline-flex;border:1px solid #d1d5db;border-radius:6px;overflow:hidden;background:#fff}
.seg span{padding:4px 11px;font-size:12.5px;border-left:1px solid #e5e7eb;white-space:nowrap}
.seg span:first-child{border-left:none}
.seg span.on{background:#1e40af;color:#fff;font-weight:600}
.seg span.g.on{background:#16a34a}.seg span.a.on{background:#d97706}.seg span.x.on{background:#6b7280}
.kv{display:grid;grid-template-columns:150px 1fr;gap:4px 10px;font-size:12.5px}
.kv>span:nth-child(odd){color:#6b7280}
.ai{background:#faf5ff;border:1px solid #e9d5ff}
.money{font-variant-numeric:tabular-nums;white-space:nowrap}
.tot{display:flex;gap:18px;align-items:flex-end;justify-content:flex-end;padding:8px 10px;background:#f8fafc;border-top:1px solid #e5e7eb}
.tot .k{font-size:11px;color:#6b7280}.tot .v{font-size:15px;font-weight:700}
.linkbox{display:flex;align-items:center;gap:8px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:6px;padding:6px 10px;font-size:12.5px}
.ro .input{background:#f9fafb;border-style:dashed}
`;

const NAM = 'Nguyễn Hoàng Nam';
const P = o => page(Object.assign({ crumb: 'Yêu cầu Tour', side: 'Yêu cầu Tour', css: CSS }, o));
const ind = (t, c) => `<span class="ind ${c}">${t}</span>`;
const toast = (t, act = '', low = false) => `<div class="toast" ${low ? 'style="bottom:20px"' : ''}><span>${t}</span>${act ? `<a>${act}</a>` : ''}</div>`;
const QRES = { 'Chốt': 'b-green', 'Cần điều chỉnh': 'b-amber', 'Không chốt': 'b-gray', 'Chưa có kết quả': 'b-blue', 'Đã thay thế': 'b-gray' };
const qb = r => bd(r, QRES[r]);
const ST = { run: ['Đang xử lý', 'b-blue'], bk: ['Đã có Booking', 'b-green'], cx: ['Đã hủy', 'b-gray'], new: ['Chưa lưu', 'b-gray'] };

// Yêu cầu minh họa
const REQ = {
  bia: { id: 'YC-2611-0031', kh: 'Bianchi Viaggi S.r.l.', lh: 'Marco Rossi', tg: '10/03 – 19/03/2027', dur: '10N9Đ', pax: '16 khách', paxd: '14 người lớn, 2 trẻ em', nn: 'Tiếng Ý', lt: 'Inbound đoàn', q: null, bud: 'đến 2.000 EUR/khách' },
  mul: { id: 'YC-2611-0019', kh: 'Müller Reisen GmbH', lh: 'Anna Schneider', tg: '15/03 – 28/03/2027', dur: '14N13Đ', pax: '25 khách', paxd: '23 người lớn, 2 trẻ em', nn: 'Tiếng Đức', lt: 'Inbound đoàn', q: 'v2 · Cần điều chỉnh', bud: 'đến 2.100 EUR/khách' },
  han: { id: 'YC-2610-0031', kh: 'Hanami Tours Co., Ltd.', lh: 'Sato Yuki', tg: '20/12 – 26/12/2026', dur: '7N6Đ', pax: '32 khách', paxd: '32 người lớn', nn: 'Tiếng Nhật', lt: 'Inbound đoàn', q: 'v3 · Chốt', bud: 'đến 200.000 JPY/khách' },
  rah: { id: 'YC-2611-0028', kh: 'Ahmed Rahman', lh: '', tg: '20/05 – 27/05/2027', dur: '8N7Đ', pax: '6 khách', paxd: '4 người lớn, 2 trẻ em', nn: 'Tiếng Anh', lt: 'Customized riêng tư', q: null, bud: 'đến 15.000 USD cả đoàn' },
};

// Phần đầu KD06. o: st (run|bk|cx), tab (i|h|q), act (HTML nút), cnt {h,q}, extra (HTML sau nhãn), meta (ghi đè), ro (chuỗi chỉ đọc)
function hdr(r, o = {}) {
  const st = ST[o.st || 'run'];
  const m = Object.assign({}, r, o.meta || {});
  const tabs = [['i', 'Thông tin yêu cầu'], ['h', 'Hành trình'], ['q', 'Báo giá']];
  const cnt = o.cnt || {};
  return `<div class="hdr"><div class="r1"><span class="code">${m.id}</span>${bd(st[0], st[1])}${o.extra || ''}${o.ro ? `<span class="ind" style="background:#f3f4f6;color:#374151">🔒 ${o.ro}</span>` : ''}
<div class="actions">${o.act !== undefined ? o.act : B('Hủy yêu cầu', 'd') + B('⋯')}</div></div>
<div class="meta"><span>Khách <b class="lnk">${m.kh}</b>${m.lh ? ' · ' + m.lh : ''}</span><span>Thời gian đi <b>${m.tg}</b> · ${m.dur}</span><span><b>${m.pax}</b> (${m.paxd})</span><span>Ngân sách <b>${m.bud || '—'}</b></span><span>Ngôn ngữ phục vụ <b>${m.nn}</b></span><span>Phụ trách <b>${m.pt || NAM}</b></span><span>Báo giá mới nhất <b>${m.q || '—'}</b></span>${m.bk ? `<span>Booking <b>${m.bk}</b></span>` : ''}</div>
<div class="tabs">${tabs.map(([k, n]) => `<div class="tab ${k === o.tab ? 'on' : ''}">${n}${cnt[k] ? ' ' + cnt[k] : ''}</div>`).join('')}</div></div>`;
}
const savebar = (l, r) => `<div class="savebar"><span class="muted small">${l}</span><span class="ml flex">${r}</span></div>`;
const card = (h, b, st = '') => `<div class="card" style="${st}"><h3>${h}</h3>${b}</div>`;

module.exports = { CSS, NAM, P, ind, toast, qb, QRES, ST, REQ, hdr, savebar, card, page, drawer, modal, f, B, bd };
