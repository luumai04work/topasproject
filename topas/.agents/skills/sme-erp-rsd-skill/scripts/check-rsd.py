"""Check the release hygiene of a Markdown RSD and its local wireframes."""
import argparse
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit

IMAGE = re.compile(r"!\[([^\]\n]+)\]\((<[^>\n]+>|[^\s)\n]+)\)")
WIRE_ID = re.compile(r"\bW\d+[a-z]?(?:\.\d+)?\b", re.IGNORECASE)
OPEN_LABEL = re.compile(
    r"\[\s*(?:chờ đặc tả|đề xuất(?:\s+[^\]\n]*)?|tbd|todo)\s*\]"
    r"|^\s*(?:chờ đặc tả|đề xuất|còn cần chốt)\s*[:–—]"
    r"|\bbản dự thảo\b",
    re.IGNORECASE,
)

def check(path, final):
    issues, images, wire_ids = [], 0, {}
    base = path.parent.resolve()
    columns = None
    for number, line in enumerate(path.read_text(encoding="utf-8-sig").splitlines(), 1):
        if final and OPEN_LABEL.search(line):
            issues.append(f"{number}: unresolved release label")
        line = line.strip()
        if line.startswith("|"):
            count = len(re.split(r"(?<!\\)\|", line)) - 2
            if not line.endswith("|") or columns is not None and count != columns:
                issues.append(f"{number}: inconsistent Markdown table")
            columns = count
        else:
            columns = None
        for match in IMAGE.finditer(line):
            images += 1
            caption, target = match.groups()
            target = target.removeprefix("<").removesuffix(">")
            loc = urlsplit(target)
            item = (base / unquote(loc.path)).resolve()
            if loc.scheme or loc.netloc or Path(unquote(loc.path)).is_absolute() or not item.is_relative_to(base):
                issues.append(f"{number}: image must use a relative path inside the RSD package: {target}")
            elif not item.is_file():
                issues.append(f"{number}: image missing: {target}")
            image_id = WIRE_ID.search(caption)
            if image_id:
                identifier = image_id.group().upper()
                if identifier in wire_ids and wire_ids[identifier] != item:
                    issues.append(f"{number}: {identifier} points to more than one image")
                wire_ids[identifier] = item
    return issues, images, len(wire_ids)

OLD_HEAD = re.compile(r"^##\s+\d+\.\s+(Wireframe giao diện|Đặc tả thao tác và phản hồi giao diện)\b")
OLD_CAPTION = re.compile(r"^\s*\*W\d+[a-z]? · .*\* — ")

def layout_warnings(path):
    """Khung 6 mục (references/khung-rsd.md): mỗi ảnh nhúng một lần; không còn mục wireframe, bảng thao tác hay dòng mô tả dưới ảnh."""
    out, embeds = [], {}
    for number, line in enumerate(path.read_text(encoding="utf-8-sig").splitlines(), 1):
        if OLD_HEAD.match(line):
            out.append(f"{number}: tiêu đề của khung 8 mục cũ; gộp vào bước luồng theo khung-rsd.md")
        if OLD_CAPTION.match(line):
            out.append(f"{number}: dòng mô tả dưới ảnh kiểu cũ; mô tả nằm trong câu của bước")
        for match in IMAGE.finditer(line):
            image_id = WIRE_ID.search(match.group(1))
            if image_id:
                embeds.setdefault(image_id.group().upper(), []).append(number)
    for key, rows in embeds.items():
        if len(rows) > 1:
            out.append(f"{key} nhúng {len(rows)} lần (dòng {', '.join(map(str, rows))}); giữ ở bước đầu tiên, nơi khác dẫn mã W")
    return out

def flow_warnings(path):
    """Tiêu chuẩn đầu ra: mỗi bước ở mục 3 có mã W; mỗi mục con của mục 3 có ngoại lệ (mã E). Chỉ cảnh báo."""
    lines = path.read_text(encoding="utf-8-sig").splitlines()
    start = next((i for i, l in enumerate(lines) if re.match(r"^##\s+3\.", l)), None)
    if start is None:
        return ['Không tìm thấy mục "## 3." để kiểm tra bước và ngoại lệ.']
    end = next((i for i in range(start + 1, len(lines)) if re.match(r"^##\s+\d+\.", lines[i])), len(lines))
    no_w, no_e, sub, sub_has_e = [], [], None, False
    for i in range(start + 1, end):
        line = lines[i]
        if line.startswith("### "):
            if sub and not sub_has_e:
                no_e.append(sub)
            sub, sub_has_e = f"{i + 1}: {line[4:]}", False
            continue
        if re.search(r"\bE\d+(?:\.\d+)?\b", line):
            sub_has_e = True
        if re.match(r"^\d+\.\s", line) and not re.search(r"\bW\d+[a-z]?\b", line, re.IGNORECASE):
            no_w.append(f"  {i + 1}: {line[:70]}")
    if sub and not sub_has_e:
        no_e.append(sub)
    out = []
    if no_w:
        out.append(f"Bước ở mục 3 chưa có mã W ({len(no_w)}) — thêm W hoặc giải thích:")
        out += no_w
    if no_e:
        out.append(f"Mục con của mục 3 chưa có ngoại lệ mã E ({len(no_e)}):")
        out += [f"  {x}" for x in no_e]
    return out

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("file", type=Path)
    parser.add_argument("--final", action="store_true")
    args = parser.parse_args()
    issues, images, ids = check(args.file, args.final)
    print(f"Checked {images} embedded image references and {ids} distinct wireframe IDs.")
    layout = layout_warnings(args.file)
    if layout:
        print(f"Lặp hoặc còn khung cũ ({len(layout)}):")
        for warning in layout:
            print(f"  {warning}")
        if args.final:
            issues.append(f"{len(layout)} lỗi lặp hoặc khung cũ (xem trên)")
    for warning in flow_warnings(args.file):
        print(warning)
    for issue in issues:
        print(issue)
    return int(bool(issues))

if __name__ == "__main__":
    raise SystemExit(main())
