// node build.js [W01 W02 ...]  → html/Wxx.html + ../wireframes/Wxx.png (Edge/Chrome headless, 1280×800)
// Nạp mọi tệp screens-*.js trong thư mục. Ảnh chỉ chứa màn hình; tên và mục đích lấy từ captions.js
// (dùng cho wireframes/index.html và mục 6 của RSD qua sync-md.js).
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const S = {};
for (const f of fs.readdirSync(__dirname).filter(f => /^screens-.*\.js$/.test(f)).sort()) Object.assign(S, require('./' + f));
const _o = Object.keys(S).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)) || a.localeCompare(b)); const _S = {}; _o.forEach(k => { _S[k] = S[k]; }); for (const k of Object.keys(S)) delete S[k]; Object.assign(S, _S);
const CAP = require('./captions');
const only = process.argv.slice(2);
const htmlDir = path.join(__dirname, 'html'), pngDir = path.join(__dirname, '..', 'wireframes');
fs.mkdirSync(htmlDir, { recursive: true }); fs.mkdirSync(pngDir, { recursive: true });
const browsers = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
];
const exe = browsers.find(b => fs.existsSync(b));
if (!exe) throw new Error('Không tìm thấy Edge/Chrome để chụp ảnh');
const missing = Object.keys(S).filter(k => !CAP[k]);
if (missing.length) throw new Error('Thiếu tên trong captions.js cho: ' + missing.join(', '));
for (const id of Object.keys(S).filter(k => !only.length || only.includes(k))) {
  const h = path.join(htmlDir, id + '.html');
  fs.writeFileSync(h, S[id]);
  const out = path.join(pngDir, id + '.png');
  execFileSync(exe, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--window-size=1280,800', '--screenshot=' + out, 'file:///' + h.replace(/\\/g, '/')], { stdio: 'ignore' });
  console.log(id, fs.existsSync(out) ? fs.statSync(out).size : 'MISSING');
}
fs.writeFileSync(path.join(pngDir, 'index.html'), `<!doctype html><meta charset="utf-8"><title>Wireframes</title><body style="font-family:Segoe UI,Arial;background:#e5e7eb;margin:20px">
<h2>Wireframe</h2><ol>${Object.keys(S).map(k => `<li><a href="#${k}">${k} · ${CAP[k][1]}</a> <span style="color:#555">— ${CAP[k][0]}</span></li>`).join('')}</ol>
${Object.keys(S).map(k => `<h3 id="${k}">${k} · ${CAP[k][1]}</h3><p>${CAP[k][2]}</p><img src="${k}.png" style="width:1280px;border:1px solid #999;background:#fff">`).join('')}</body>`);
