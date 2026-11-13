// Thụt lề ảnh nằm sau một bước đánh số (3 khoảng) hoặc một gạch đầu dòng (2 khoảng) để ảnh thuộc về mục danh sách đó.
// node indent-images.js <RSD.md>
const fs = require('fs');
const file = process.argv[2];
const lines = fs.readFileSync(file, 'utf8').split('\n');
let ctx = '';
let changed = 0;
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (/^!\[W\d+[a-z]? · /.test(l)) {
    const pad = ctx === 'num' ? '   ' : ctx === 'bul' ? '  ' : '';
    if (pad) { lines[i] = pad + l; changed++; }
    continue;
  }
  if (l.trim() === '' || /^\s/.test(l)) continue;
  ctx = /^\d+\.\s/.test(l) ? 'num' : /^- /.test(l) ? 'bul' : '';
}
fs.writeFileSync(file, lines.join('\n'));
console.log(`indented ${changed}`);
