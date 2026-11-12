// node build.js [W01 W02 ...]  → html/Wxx.html + ../wireframes/Wxx.png (Edge/Chrome headless)
// Ảnh 1280×800 chỉ có màn hình. Tên và mục đích lấy từ captions.js, dùng cho index.html và mục 6 (sync-md.js).
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const S = Object.assign({}, require('./screens-a'), require('./screens-b'));
const CAP = require('./captions');
const only = process.argv.slice(2);
const htmlDir = path.join(__dirname, 'html'), pngDir = path.join(__dirname, '..', 'wireframes');
fs.mkdirSync(htmlDir, { recursive: true }); fs.mkdirSync(pngDir, { recursive: true });
const browsers = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe'];
const exe = browsers.find(b => fs.existsSync(b));
const CAPCSS = `body{height:860px!important}
.cap{height:60px;background:#0f172a;color:#fff;display:flex;align-items:center;gap:14px;padding:0 20px;font-family:"Segoe UI",Arial,sans-serif;border-bottom:3px solid #3b82f6}
.cap .id{background:#3b82f6;border-radius:6px;padding:3px 10px;font-weight:700;font-size:16px}
.cap .t{font-size:17px;font-weight:700;line-height:1.2}
.cap .d{font-size:12.5px;color:#cbd5e1;margin-top:2px}
.cap .r{margin-left:auto;text-align:right;font-size:12px;color:#94a3b8;line-height:1.5;white-space:nowrap}
.cap .r b{color:#e2e8f0}`;
const missing = Object.keys(S).filter(k => !CAP[k]);
if (missing.length) throw new Error('Thiếu tên cho: ' + missing.join(', '));
const ids = Object.keys(S).filter(k => !only.length || only.includes(k));
for (const id of ids) {
  const [where, title, desc] = CAP[id];
  const role = (S[id].match(/class="user"><span class="muted small">([^<]+)/) || [])[1] || '';
  const strip = `<div class="cap"><span class="id">${id}</span><div><div class="t">${title}</div><div class="d">${desc}</div></div><div class="r"><b>${where}</b><br>Người dùng: ${role}</div></div>`;
  const html = S[id]; // không in tiêu đề lên ảnh; tên màn nằm ở mục 6 của RSD
  const h = path.join(htmlDir, id + '.html');
  fs.writeFileSync(h, html);
  const out = path.join(pngDir, id + '.png');
  execFileSync(exe, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--window-size=1280,800', '--screenshot=' + out, 'file:///' + h.replace(/\\/g, '/')], { stdio: 'ignore' });
  console.log(id, fs.existsSync(out) ? fs.statSync(out).size : 'MISSING');
}
// Trang xem nhanh toàn bộ wireframe, có mục lục theo tên
fs.writeFileSync(path.join(pngDir, 'index.html'), `<!doctype html><meta charset="utf-8"><title>DH08 wireframes</title><body style="font-family:Segoe UI;background:#e5e7eb;margin:20px">
<h2>RSD DH08 · Wireframe</h2><ol>${Object.keys(S).map(k => `<li><a href="#${k}">${k} · ${CAP[k][1]}</a> <span style="color:#555">— ${CAP[k][0]}</span></li>`).join('')}</ol>
${Object.keys(S).map(k => `<h3 id="${k}">${k} · ${CAP[k][1]}</h3><p>${CAP[k][2]}</p><img src="${k}.png" style="width:1280px;border:1px solid #999;background:#fff">`).join('')}</body>`);
