import argparse
import re
from pathlib import Path


def cells(line):
    return re.split(r"(?<!\\)\|", line.strip()[1:-1])


def check(path):
    lines = path.read_text(encoding="utf-8-sig").splitlines()
    index = 0
    tables = []
    while index < len(lines):
        if not lines[index].lstrip().startswith("|"):
            index += 1
            continue
        start = index
        while index < len(lines) and lines[index].lstrip().startswith("|"):
            if not lines[index].strip().endswith("|"):
                raise ValueError(f"Line {index + 1}: missing closing pipe")
            index += 1
        block = [cells(line) for line in lines[start:index]]
        width = len(block[0])
        if len(block) < 3 or not all(
            re.fullmatch(r"\s*:?-{3,}:?\s*", cell) for cell in block[1]
        ):
            raise ValueError(f"Line {start + 1}: missing separator or table rows")
        for offset, row in enumerate(block, start=start + 1):
            if len(row) != width:
                raise ValueError(f"Line {offset}: expected {width} cells")
            if any(re.search(r"[→←↔⇒➜]", cell) for cell in row):
                raise ValueError(f"Line {offset}: contains an arrow")
        tables.append([[cell.strip() for cell in row] for row in block])
    if not tables:
        raise ValueError("No Markdown table found")
    return tables


def check_modules(path, tables):
    lines = path.read_text(encoding="utf-8-sig").splitlines()
    headings = [line for line in lines if line.startswith("## Module ")]
    header = ["Nhóm", "Màn / Tab", "Vai trò", "Danh mục", "Luồng thao tác", "Tính năng"]
    modules = [table for table in tables if table[0] == header]
    if not headings or len(headings) != len(modules) or len(set(headings)) != len(headings):
        raise ValueError("Expected one screen table for each distinct module")
    table_starts = [
        index for index, line in enumerate(lines)
        if line.strip().startswith("|") and cells(line)
        and [cell.strip() for cell in cells(line)] == header
    ]
    for start in table_starts:
        heading = next(
            (line for line in reversed(lines[:start]) if line.startswith("## ")), ""
        )
        if not heading.startswith("## Module "):
            raise ValueError(f"Line {start + 1}: screen table must belong to a module")
    if len({next(
        line for line in reversed(lines[:start]) if line.startswith("## ")
    ) for start in table_starts}) != len(headings):
        raise ValueError("Each module must have exactly one screen table")
    groups = {"Hệ thống", "Danh mục", "Nghiệp vụ", "Báo cáo"}
    seen = set()
    screens = tabs = 0
    for table in modules:
        parent = None
        for group, name, *_ in table[2:]:
            if group not in groups:
                raise ValueError(f"Invalid group for {name}: {group}")
            match = re.match(r"^(Màn|Tab)\s+([A-Z]+\d+(?:\.\d+)?)\s+·\s+", name)
            if not match:
                raise ValueError(f"Invalid screen or tab label: {name}")
            kind, code = match.groups()
            if code in seen:
                raise ValueError(f"Duplicate code: {code}")
            seen.add(code)
            if kind == "Màn" and "." not in code:
                parent = code
                screens += 1
            elif kind == "Tab" and "." in code and code.split(".")[0] == parent:
                tabs += 1
            else:
                raise ValueError(f"Invalid screen code or misplaced tab: {code}")
    return len(modules), screens, tabs


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Check screen inventory Markdown.")
    parser.add_argument("file", type=Path)
    args = parser.parse_args()
    try:
        modules, screens, tabs = check_modules(args.file, check(args.file))
        print(f"Validated {modules} module(s), {screens} screen(s), {tabs} tab(s).")
    except (OSError, ValueError) as error:
        raise SystemExit(str(error))