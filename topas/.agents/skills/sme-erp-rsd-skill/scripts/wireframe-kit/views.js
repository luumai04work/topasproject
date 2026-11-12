// Thành phần dạng xem dùng chung cho các màn danh sách (Bảng · Kanban · Lịch · Dòng thời gian).
// lib.js nạp VCSS vào trang. Không kéo thả: Kanban và Lịch chỉ để xem, bấm thẻ mở hồ sơ như bấm dòng.
const VCSS = `
.dot{display:inline-block;width:10px;height:10px;border-radius:2px;vertical-align:middle;margin-right:4px}
.vsw{display:inline-flex;border:1px solid #d1d5db;border-radius:6px;overflow:hidden;background:#fff;flex:none}
.vsw a{text-decoration:none;cursor:pointer;padding:3px 10px;font-size:12px;color:#374151;border-left:1px solid #e5e7eb;display:inline-flex;gap:5px;align-items:center;white-space:nowrap;line-height:18px}
.vsw a:first-child{border-left:none}
.vsw a.on{background:#1e40af;color:#fff;font-weight:600}
.seg{display:inline-flex;border:1px solid #d1d5db;border-radius:6px;overflow:hidden;background:#fff;flex:none}
.seg span{padding:2px 9px;font-size:12px;color:#374151;border-left:1px solid #e5e7eb;white-space:nowrap}
.seg span:first-child{border-left:none}
.seg span.on{background:#e0e7ff;color:#1e3a8a;font-weight:600}
.kb{display:grid;gap:10px;align-items:start}
.kcol{background:#eef1f5;border-radius:8px;padding:8px;display:flex;flex-direction:column;gap:7px;min-width:0;max-height:596px;overflow:hidden;position:relative}
.kcol.fold{background:#f3f4f6}
.kh{display:flex;align-items:center;gap:6px;font-weight:600;font-size:12.5px;padding:0 2px}
.ksub{font-size:11.5px;color:#6b7280;padding:0 2px;margin-top:-4px;display:flex;align-items:center;gap:6px}
.kc{background:#fff;border:1px solid #e5e7eb;border-radius:7px;padding:7px 9px;font-size:12px;line-height:1.4;box-shadow:0 1px 1px rgba(0,0,0,.04)}
.kc .t{display:flex;gap:6px;align-items:center}
.kc .t>b:first-child{color:#1d4ed8}
.kc .r{display:flex;gap:6px;align-items:center;margin-top:3px;flex-wrap:wrap}
.kc.dim{opacity:.5}
.kc.hot{border-left:3px solid #dc2626}
.kc.sel{outline:2px solid #2563eb}
.kc.new{background:#f0fdf4}
.kmore{text-align:center;font-size:12px;color:#2563eb;padding:2px}
.kfade{position:absolute;left:0;right:0;bottom:0;height:46px;background:linear-gradient(rgba(238,241,245,0),#eef1f5 70%);display:flex;align-items:flex-end;justify-content:center;padding-bottom:6px;font-size:12px;color:#2563eb}
.kempty{border:1.5px dashed #cbd5e1;border-radius:7px;padding:18px 8px;text-align:center;color:#6b7280;font-size:12px;background:#f8fafc}
.kerr{border:1px solid #fca5a5;border-radius:7px;padding:14px 8px;text-align:center;color:#7f1d1d;font-size:12px;background:#fef2f2}
.cm{border:1px solid #e5e7eb;border-radius:8px;background:#fff;overflow:hidden;flex:1;min-width:0}
.cm .dow{display:grid;grid-template-columns:repeat(7,1fr);background:#f9fafb;border-bottom:1px solid #e5e7eb}
.cm .dow div{padding:4px 8px;font-size:11.5px;color:#6b7280;font-weight:600}
.cm .wk{display:grid;grid-template-columns:repeat(7,1fr);grid-auto-rows:min-content;grid-auto-flow:row dense;row-gap:2px;border-bottom:1px solid #eef0f3;min-height:88px;padding-bottom:3px;
  background-image:linear-gradient(to right,#eef0f3 1px,transparent 1px);background-size:calc(100% / 7) 100%}
.cm .wk:last-child{border-bottom:none}
.cm .dn{grid-row:1;padding:3px 7px;font-size:11.5px;color:#374151}
.cm .dn.out{color:#c0c4cc}
.cm .dn.we{color:#9ca3af}
.cm .dn.td span{background:#2563eb;color:#fff;border-radius:9px;padding:0 6px;font-weight:700}
.ev{margin:0 3px;border-radius:4px;padding:1px 6px;font-size:11px;line-height:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-left:3px solid transparent}
.ev.l{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:0}
.ev.r{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}
.ev.blue{background:#dbeafe;color:#1e3a8a;border-left-color:#2563eb}
.ev.green{background:#dcfce7;color:#14532d;border-left-color:#16a34a}
.ev.gray{background:#f3f4f6;color:#6b7280;border-left-color:#9ca3af;text-decoration:line-through}
.ev.gray2{background:#f3f4f6;color:#374151;border-left-color:#9ca3af}
.ev.violet{background:#ede9fe;color:#4c1d95;border-left-color:#7c3aed}
.ev.amber{background:#fef3c7;color:#78350f;border-left-color:#f59e0b}
.ev.red{background:#fee2e2;color:#7f1d1d;border-left-color:#dc2626}
.ev.dash{background:#fff;color:#b91c1c;border:1px dashed #f87171;border-left:3px solid #dc2626}
.ev.dim{opacity:.45}
.ev.sel{outline:2px solid #1e40af;outline-offset:-1px}
.emore{margin:0 3px;font-size:11px;color:#2563eb;font-weight:600;padding:0 4px;line-height:16px}
.tray{width:250px;flex:none;border:1px solid #e5e7eb;border-radius:8px;background:#fff;padding:8px 10px;align-self:flex-start}
.tray h4{margin:0 0 6px;font-size:12.5px;display:flex;gap:6px;align-items:center}
.tray .it{border:1px solid #e5e7eb;border-radius:6px;padding:5px 8px;margin-bottom:6px;font-size:11.5px;line-height:1.4}
.tlg{border:1px solid #e5e7eb;border-radius:8px;background:#fff;overflow:hidden}
.tlh,.tlr{display:grid;grid-template-columns:190px 1fr}
.tlh{background:#f9fafb;border-bottom:1px solid #e5e7eb}
.tlh .lb,.tlr .lb{padding:5px 10px;font-size:12px;border-right:1px solid #e5e7eb}
.tld{display:grid}
.tld div{font-size:10.5px;color:#6b7280;text-align:center;padding:3px 0;border-left:1px solid #eef0f3;line-height:1.25}
.tld div.we{background:#f3f4f6}
.tld div.td{background:#2563eb;color:#fff;font-weight:700}
.tlr{border-bottom:1px solid #eef0f3;min-height:44px}
.tlr:last-child{border-bottom:none}
.tlr.un{background:#fff7f7}
.lane{display:grid;grid-auto-rows:min-content;grid-auto-flow:row dense;row-gap:3px;padding:5px 0;position:relative}
.lane .ev{margin:0 2px}
`;

const VIEW = { table: ['☰', 'Bảng'], kanban: ['▥', 'Kanban'], cal: ['▦', 'Lịch'] };
// views: danh sách khóa trong VIEW, on: khóa đang chọn
// Liên kết giữa các trang HTML (bấm Bảng · Kanban · Lịch để chuyển trang wireframe); không đổi ảnh PNG.
const LINKS = {};
const setLinks = o => Object.assign(LINKS, o);
const viewSwitch = (views, on) => `<span class="vsw">${views.map(k => `<a href="${LINKS[k] || '#'}" class="${k === on ? 'on' : ''}">${VIEW[k][0]} ${VIEW[k][1]}</a>`).join('')}</span>`;
const seg = (items, on) => `<span class="seg">${items.map(t => `<span class="${t === on ? 'on' : ''}">${t}</span>`).join('')}</span>`;

// cols: [{ h: tiêu đề (đã có nhãn), sub, cards: [html], fold, empty, err, more, fade }]; w: grid-template-columns
const kanban = (cols, w) => `<div class="kb" style="grid-template-columns:${w || `repeat(${cols.length},1fr)`}">${cols.map(c => `<div class="kcol ${c.fold ? 'fold' : ''}">
<div class="kh">${c.h}</div>${c.sub ? `<div class="ksub">${c.sub}</div>` : ''}
${c.err ? `<div class="kerr">${c.err}</div>` : c.empty ? `<div class="kempty">${c.empty}</div>` : (c.cards || []).join('')}
${c.more ? `<div class="kmore">${c.more}</div>` : ''}${c.fade ? `<div class="kfade">${c.fade}</div>` : ''}</div>`).join('')}</div>`;

// Lịch tháng. weeks: [{ days: [[số, cls]] (cls: out|we|td), ev: [{ s (1–7), n, t, c, l, r, x }], more: [{ s, t }] }]
const DOW = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
const calMonth = weeks => `<div class="cm"><div class="dow">${DOW.map(d => `<div>${d}</div>`).join('')}</div>
${weeks.map(w => `<div class="wk">${w.days.map(([d, c], i) => `<div class="dn ${c || ''}" style="grid-column:${i + 1}"><span>${d}</span></div>`).join('')}
${(w.ev || []).map(e => `<div class="ev ${e.c} ${e.l ? 'l' : ''} ${e.r ? 'r' : ''} ${e.x || ''}" style="grid-column:${e.s} / span ${e.n}">${e.l ? '◂ ' : ''}${e.t}${e.r ? ' ▸' : ''}</div>`).join('')}
${(w.more || []).map(m => `<div class="emore" style="grid-column:${m.s}">${m.t}</div>`).join('')}</div>`).join('')}</div>`;

// Dòng thời gian. days: [[nhãn, cls]] (cls: we|td); rows: [{ h, sub, cls, ev: [{ s (1..N), n, t, c, l, r, x }] }]
const timeline = (days, rows) => {
  const N = days.length, cols = `repeat(${N},1fr)`;
  const bg = `background-image:linear-gradient(to right,#eef0f3 1px,transparent 1px);background-size:calc(100% / ${N}) 100%`;
  return `<div class="tlg"><div class="tlh"><div class="lb muted small b">Người phụ trách</div><div class="tld" style="grid-template-columns:${cols}">${days.map(([d, c]) => `<div class="${c || ''}">${d}</div>`).join('')}</div></div>
${rows.map(r => `<div class="tlr ${r.cls || ''}"><div class="lb">${r.h}${r.sub ? `<div class="muted small">${r.sub}</div>` : ''}</div>
<div class="lane" style="grid-template-columns:${cols};${bg}">${(r.ev || []).map(e => `<div class="ev ${e.c} ${e.l ? 'l' : ''} ${e.r ? 'r' : ''} ${e.x || ''}" style="grid-column:${e.s} / span ${e.n}">${e.l ? '◂ ' : ''}${e.t}${e.r ? ' ▸' : ''}</div>`).join('')}</div></div>`).join('')}</div>`;
};

module.exports = { VCSS, setLinks, viewSwitch, seg, kanban, calMonth, timeline };
