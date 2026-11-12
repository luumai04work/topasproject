// Đồng bộ tên hình trong RSD với captions.js: ![Wxx · tên](wireframes/Wxx.png), giữ thụt lề.
// Khung 6 mục: ảnh nằm dưới bước luồng, bước đã mô tả màn nên không chèn dòng mô tả;
// dòng "*Wxx · tên* — mục đích (vị trí)" kiểu cũ (nếu còn) bị xóa.
// node sync-md.js ../<RSD.md>
const fs = require('fs');
const CAP = require('./captions');
const file = process.argv[2];
const lines = fs.readFileSync(file, 'utf8').split('\n');
const out = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^(\s*)!\[(W\d+[a-z]?) · [^\]]*\]\((wireframes\/[^)]+)\)\s*$/);
  if (!m) { out.push(lines[i]); continue; }
  const [, indent, id, target] = m;
  if (!CAP[id]) { console.warn(`captions.js thiếu ${id}`); out.push(lines[i]); continue; }
  out.push(`${indent}![${id} · ${CAP[id][1]}](${target})`);
  if ((lines[i + 1] || '').trim() === '' && /^\s*\*W\d+[a-z]? · .*\* — /.test(lines[i + 2] || '')) i += 2;
}
fs.writeFileSync(file, out.join('\n'));
console.log('synced');
