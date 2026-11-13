// Bản Node của scripts/check-rsd.py (skill sme-erp-rsd-skill). node check-rsd.js <RSD.md> [--final]
const fs = require('fs'), path = require('path');
const file = process.argv[2], final = process.argv.includes('--final');
const IMAGE = /!\[([^\]\n]+)\]\((<[^>\n]+>|[^\s)\n]+)\)/g;
const WIRE = /\bW\d+[a-z]?(?:\.\d+)?\b/i;
const OPEN = /\[\s*(?:chờ đặc tả|đề xuất(?:\s+[^\]\n]*)?|tbd|todo)\s*\]|^\s*(?:chờ đặc tả|đề xuất|còn cần chốt)\s*[:–—]|\bbản dự thảo\b/i;
const base = path.dirname(path.resolve(file));
const issues = []; let images = 0; const ids = {}; const embeds = {}; let cols = null;
const OLD_HEAD = /^##\s+\d+\.\s+(Wireframe giao diện|Đặc tả thao tác và phản hồi giao diện)\b/;
const lay = [];
fs.readFileSync(file, 'utf8').replace(/^﻿/, '').split(/\r?\n/).forEach((raw, i) => {
  const n = i + 1;
  if (final && OPEN.test(raw)) issues.push(`${n}: unresolved release label`);
  const line = raw.trim();
  if (OLD_HEAD.test(raw)) lay.push(`${n}: tiêu đề của khung 8 mục cũ (${raw.replace(/^#+\s*/, '')}); gộp vào bước luồng theo khung-rsd.md`);
  if (/^\s*\*W\d+[a-z]? · .*\* — /.test(raw)) lay.push(`${n}: dòng mô tả dưới ảnh kiểu cũ; mô tả nằm trong câu của bước`);
  if (line.startsWith('|')) {
    const c = line.split(/(?<!\\)\|/).length - 2;
    if (!line.endsWith('|') || (cols !== null && c !== cols)) issues.push(`${n}: inconsistent Markdown table`);
    cols = c;
  } else cols = null;
  for (const m of line.matchAll(IMAGE)) {
    images++;
    const t = m[2].replace(/^</, '').replace(/>$/, '');
    const p = path.resolve(base, decodeURIComponent(t));
    if (/^[a-z]+:/i.test(t) || path.isAbsolute(t) || !p.startsWith(base)) issues.push(`${n}: image must be relative: ${t}`);
    else if (!fs.existsSync(p)) issues.push(`${n}: image missing: ${t}`);
    const w = m[1].match(WIRE);
    if (w) { const k = w[0].toUpperCase(); if (ids[k] && ids[k] !== p) issues.push(`${n}: ${k} points to more than one image`); ids[k] = p; (embeds[k] = embeds[k] || []).push(n); }
  }
});
// Bổ sung: mã W được nhắc trong văn bản nhưng không có hình
const text = fs.readFileSync(file, 'utf8');
const cited = new Set((text.match(/\bW\d+[a-z]?\b/g) || []).map(x => x.toUpperCase()));
const missing = [...cited].filter(x => !ids[x]);
console.log(`Checked ${images} embedded image references and ${Object.keys(ids).length} distinct wireframe IDs.`);
if (missing.length) console.log('W cited without image: ' + missing.join(', '));
const unused = Object.keys(ids).filter(k => (text.match(new RegExp('\\b' + k + '\\b', 'gi')) || []).length < 2);
if (unused.length) console.log('W có hình nhưng không được nhắc ở đâu khác: ' + unused.join(', '));
// Khung 6 mục (references/khung-rsd.md): mỗi ảnh nhúng một lần; không còn mục wireframe, bảng thao tác hay dòng mô tả dưới ảnh.
Object.entries(embeds).filter(([, v]) => v.length > 1).forEach(([k, v]) => lay.push(`${k} nhúng ${v.length} lần (dòng ${v.join(', ')}); giữ ở bước đầu tiên, nơi khác dẫn mã W`));
if (lay.length) { console.log(`Lặp hoặc còn khung cũ (${lay.length}):`); lay.forEach(x => console.log('  ' + x)); if (final) issues.push(`${lay.length} lỗi lặp hoặc khung cũ (xem trên)`); }
// Tiêu chuẩn đầu ra (references/tieu-chuan-dau-ra.md): mỗi bước ở mục 3 có mã W; mỗi mục con của mục 3 có ngoại lệ (mã E).
// Đây là cảnh báo; sửa hoặc giải thích từng cảnh báo trước khi bàn giao.
const lines = text.replace(/^﻿/, '').split(/\r?\n/);
const s3 = lines.findIndex(l => /^##\s+3\./.test(l));
const s4 = lines.findIndex((l, i) => i > s3 && /^##\s+\d+\./.test(l));
if (s3 >= 0) {
  const end = s4 > s3 ? s4 : lines.length;
  const noW = []; const noE = [];
  let sub = null, subHasE = false;
  const closeSub = () => { if (sub && !subHasE) noE.push(sub); };
  for (let i = s3 + 1; i < end; i++) {
    const l = lines[i];
    if (/^###\s/.test(l)) { closeSub(); sub = `${i + 1}: ${l.replace(/^###\s+/, '')}`; subHasE = false; continue; }
    if (/\bE\d+(?:\.\d+)?\b/.test(l)) subHasE = true;
    if (/^\d+\.\s/.test(l) && !/\bW\d+[a-z]?\b/i.test(l)) noW.push(`${i + 1}: ${l.slice(0, 70)}`);
  }
  closeSub();
  if (noW.length) { console.log(`Bước ở mục 3 chưa có mã W (${noW.length}) — thêm W hoặc giải thích (bước không đổi giao diện thì dẫn W của bước trước):`); noW.forEach(x => console.log('  ' + x)); }
  if (noE.length) { console.log(`Mục con của mục 3 chưa có ngoại lệ mã E (${noE.length}):`); noE.forEach(x => console.log('  ' + x)); }
} else console.log('Không tìm thấy mục "## 3." để kiểm tra bước và ngoại lệ.');
issues.forEach(x => console.log(x));
process.exit(issues.length ? 1 : 0);
