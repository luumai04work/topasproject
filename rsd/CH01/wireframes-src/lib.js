// CH01 wireframe kit. CH01 has no pictures: Sign in and Change password use the shared kit of the other RSDs (`.card`,
// `.ttl`, `.field`, `.input`, `.btn`, `.banner`), so this file holds only what CGD K7.13 adds on a window narrower than
// 768 px (K7.01). apps/web/scripts/build-wireframe-css.mjs writes these rules into apps/web/src/styles/wireframe.css
// (`pnpm --filter @topas/web wireframe-css`). The HD01 kit (docs/rsd/HD01/wireframes-src/lib.js) holds the K7 frame.
// - K7.13, K7.05: Sign in (`.login-page`) fields and buttons 44 px high, text 16 px (K7.02).
const CSS = `
@media (max-width:767px){.login-page .input,.login-page .btn{min-height:44px;font-size:16px}.login-page .btn{min-width:44px}}
`;

module.exports = { CSS };
