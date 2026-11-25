// HD01 wireframe kit: the CGD K7 phone frame (HD01 My tours; CH01 on a window narrower than 768 px).
// HD01 has no pictures, so this file holds only what the K7 frame adds to the shared kit of the other RSDs (`.top`,
// `.page`, `.bell`, `.menu .mi`, `.chip`, `.btn`); the sizes are K7's own. apps/web/scripts/build-wireframe-css.mjs
// writes these rules into apps/web/src/styles/wireframe.css (`pnpm --filter @topas/web wireframe-css`).
// - K7.02: one column at most 600 px wide, centred; body text 16 px.
// - K7.04: the compact top bar 56 px high (sticky like every `.top`), the ☰ button and the bell (its count inside its
//   44 px box, so nothing is cut, K7.02); the bottom bar's ways each an icon over its text (`.tab-ico`).
// - K7.05: every touch target at least 44 × 44 px.
// - K7.08: the ☰ menu and the CH02 notification panel open as full-screen pages (`.menu.phone-sheet`) with their own
//   top bar “←” and name; the content is the kit's `.page` and `.menu .mi` rows.
// - HD01.2 (ticket 74): the bottom tab bar `.phone-tabs` sticking to the bottom of the column (2.1, 2.5), a day of the
//   program `.my-day` (today tinted like DH08's `tr.sel`, past days faded, its text `.my-day-content`), service, guest
//   and room rows, stay chips; the record's “←” link of the top bar `.back` (K7.05); the tour header `.my-tour-head`
//   (its h1 the size of `.ttl h1`), a line with a call button `.my-call`, the guest search `.my-search`.
// - HD01.3 (ticket 75): the Today block `.my-today` with its buttons `.my-actions`, a log entry row `.my-entry` (a
//   full-width button), the floating “+ Add” `.my-fab` above the bottom bar with its menu `.my-fab-menu`; the
//   full-screen form `.my-form` (K7.07: fields one under the other, the main button in the sticky bottom bar
//   `.my-form-bar`, Delete and the like in `.my-form-end`, a yes/no switch `.my-switch`, kept text `.my-kept`); on a
//   phone a dialog spans the width less 16 px, its buttons stacked, the confirm one on top (K7.08).
// - Ticket 78: the “Download program PDF” block `.my-pdf` under the Today block; a shown passport number
//   `.my-passport` (L2.3 step 2: bold, large, to read out at a check-in desk); two call/button lines in a row keep
//   8 px between their targets (K7.05); the printed program of the PDF `.program-print` (W18: A4, a `tfoot` repeated
//   on every page for the footer).
// - HD01.4 (ticket 76): the totals line of the extra costs `.my-total`; the receipts of a phone form (K7.09) as two
//   buttons Take photo / Choose file `.attach-buttons` and file cards with a thumbnail `.file .thumb`, their buttons
//   44 px (K7.05); four ways in the bottom bar share its width, a name wrapping under its icon on a narrow phone.
// - Ticket 77 (R08, L5.1): the banner W41 “n items not sent” over the tour, a full-width tappable `.banner.w` 44 px high
//   `.my-unsent`, its list of drafts `.my-unsent-list` (kind, time, first words, Open), the yellow dot of a card on
//   HD01.1 `.my-unsent-dot` (the amber of the kit's warning marks).
// CH01 Sign in on a phone (K7.13) is CH01's own kit: docs/rsd/CH01/wireframes-src/lib.js.
const CSS = `
.phone{max-width:600px;min-height:100vh;margin:0 auto;font-size:16px}
.phone .top{height:56px;padding:0 16px}
.phone .page{padding:12px 16px}
.phone .burger{min-width:44px;min-height:44px;font-size:20px;cursor:pointer}
.phone .bell{min-width:44px;min-height:44px}
.phone .bell i{top:4px;right:2px}
.phone h2.sec{margin-top:16px}
.phone-sheet.menu{position:fixed;inset:0;max-width:600px;margin:0 auto;z-index:45;border-radius:0;padding:0;overflow-y:auto;box-shadow:none}
.phone-sheet .top{justify-content:flex-start;gap:8px}
.phone-sheet .mi{width:100%;min-height:44px;font-size:16px;padding:8px 4px;cursor:pointer}
.phone-sheet .chip{min-height:44px;padding:0 14px;font-size:14px}
.phone-sheet .btn{min-height:44px}
.phone .btn{height:auto;min-height:44px;min-width:44px;font-size:14px}
.phone .chip{min-height:44px;padding:0 14px;font-size:14px}
.phone .input{min-height:44px;font-size:16px}
.phone-tabs{position:sticky;bottom:0;z-index:20;background:#fff;border-top:1px solid #e5e7eb;margin-top:12px;padding:8px 0}
.phone-tabs .tabs{margin-top:0;gap:8px}
.phone-tabs .tab{flex:1;flex-direction:column;justify-content:center;gap:2px;min-height:44px;font-size:14px;border-bottom:0;border-top:2px solid transparent}
.phone-tabs .tab.on{border-top-color:#2563eb}
.phone-tabs .tab-ico{font-size:18px;line-height:1}
.card.my-day{padding:0}
.my-day-head{display:flex;flex-wrap:wrap;width:100%;min-height:44px;justify-content:space-between;align-items:center;gap:8px;padding:10px 14px;text-align:left;cursor:pointer}
.my-day>div{padding:0 14px 12px}
.my-day.today{background:#eff6ff;border-color:#bfdbfe}
.my-day.past{opacity:.6}
.my-day-content{white-space:pre-line;margin:4px 0 8px}
.my-services,.my-rows{list-style:none;margin:0;padding:0}
.my-services li,.my-rows li{padding:8px 0;border-top:1px solid #f3f4f6}
.my-services li:first-child,.my-rows li:first-child{border-top:0}
.my-pdf{margin-bottom:8px}
.my-passport{font-size:20px;font-weight:700;letter-spacing:.5px}
.my-call+.my-call{margin-top:8px}
.program-print{width:100%;border-collapse:collapse;font-size:12px;line-height:1.45;color:#111827}
.program-print td{padding:0;vertical-align:top}
.program-print h1{font-size:18px;margin:0 0 4px}
.program-print h2{font-size:14px;margin:14px 0 4px;padding-bottom:2px;border-bottom:1px solid #d1d5db}
.program-print h3{font-size:12px;margin:10px 0 2px}
.program-print ul{list-style:none;margin:0;padding:0}
.program-print li{padding:3px 0;border-top:1px solid #f3f4f6;break-inside:avoid}
.program-print .program-foot{padding-top:8px;font-size:10px;color:#6b7280}
.my-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px}
.phone .top .back{display:inline-flex;align-items:center;min-height:44px;color:inherit;text-decoration:none}
.my-tour-head{margin-bottom:8px}
.my-tour-head h1{font-size:18px}
.my-call{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:4px}
.my-search{margin:8px 0}
.phone .top button.back{background:none;border:0;padding:0;font:inherit;cursor:pointer}
.my-today{margin-bottom:8px}
.my-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.my-actions .btn{flex:1 1 0;justify-content:center}
.my-entry{display:block;width:100%;min-height:44px;padding:0;text-align:left;background:none;border:0;font:inherit;color:inherit;cursor:pointer}
.my-entry>.flex{gap:8px;align-items:center}
.my-fab{position:sticky;bottom:76px;z-index:21;display:flex;flex-direction:column;align-items:flex-end;gap:8px;margin-top:12px;pointer-events:none}
.my-fab>*{pointer-events:auto}
.my-fab-menu{display:flex;flex-direction:column;gap:8px;min-width:160px;background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:8px;box-shadow:0 8px 24px rgba(0,0,0,.15)}
.my-form .field{margin-bottom:16px}
.my-form textarea.input{min-height:88px}
.my-form select.input{width:100%}
.my-form .banner{margin-bottom:12px}
.my-switch{width:100%;justify-content:flex-start;margin-bottom:16px}
.my-form-end{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:8px 0 16px}
.my-form-bar{position:sticky;bottom:0;z-index:20;display:flex;flex-direction:column;gap:8px;background:#fff;border-top:1px solid #e5e7eb;margin-top:16px;padding:8px 0}
.my-form-bar .btn{width:100%;justify-content:center}
.my-told{color:#92400e;font-weight:600}
.my-kept{white-space:pre-wrap;user-select:text;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;margin:12px 0}
.phone .modal{left:16px;right:16px;width:auto;max-width:none;transform:translateY(-50%)}
.phone .modal .mf{flex-direction:column-reverse;align-items:stretch}
.phone .modal .mf .btn{width:100%;justify-content:center}
.my-total{margin-top:8px}
.attach-buttons{display:flex;gap:8px;margin-top:4px}
.attach-buttons .btn{flex:1 1 0;justify-content:center}
.file .thumb{width:40px;height:40px;object-fit:cover;border-radius:4px;flex:none}
.phone .file button{min-width:44px;min-height:44px}
.phone-tabs .tabs{gap:0}
.phone-tabs .tab{min-width:0;padding:4px 2px;white-space:normal;text-align:center;line-height:1.2}
.my-unsent{margin-bottom:8px}
.my-unsent>.banner{width:100%;min-height:44px;text-align:left;font:inherit;cursor:pointer}
.my-unsent-list{margin:8px 0 0;padding:4px 14px}
.my-unsent-list>div{display:flex;align-items:center;gap:8px;padding:8px 0;border-top:1px solid #f3f4f6}
.my-unsent-list>div:first-child{border-top:0}
.my-unsent-dot{display:inline-block;width:10px;height:10px;border-radius:50%;background:#f59e0b;flex:none}
`;

module.exports = { CSS };
