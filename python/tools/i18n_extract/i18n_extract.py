#!/usr/bin/env python3
"""
Enhanced i18n extractor for Angular templates (fixed)

Fixes:
- Avoid calling .group() on None (use safe_group helper).
- Print exception tracebacks in warnings to help debugging.
- Try lxml parser then fallback to html.parser (if not already present).

Usage:
  python i18n_extract_enhanced_fixed.py --dir=src/app --out=src/assets/i18n/vi.json --dry
"""
import argparse
import glob
import json
import os
import re
import shutil
import unicodedata
import traceback
from bs4 import BeautifulSoup, NavigableString, Comment

VIET_REGEX = re.compile(
    r"[ăâđêôơưĂÂĐÊÔƠƯÁÀẢÃẠẮẰẲẴẶẤẦẨẪẬÉÈẺẼẸÍÌỈĨỊÓÒỎÕỌỐỒỔỖỘỚỜỞỠỢÚÙỦŨỤỨỪỬỮỰÝỲỶỸỴáàảãạắằẳẵặấầẩẫậéèẻẽẹíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]",
    re.U,
)

ATTRS_TO_CHECK = {"placeholder", "title", "aria-label", "alt", "nzTooltipTitle", "tooltip", "matTooltip"}

INTERPOLATION_RE = re.compile(
    r"^\s*\{\{\s*(['\"])(?P<txt>.+?)\1\s*(\|\s*translate\s*)?\s*\}\}\s*$", re.S
)
BINDING_LITERAL_RE = re.compile(r"^\s*(['\"])(?P<txt>.+?)\1\s*(\|\s*translate\s*)?$", re.S)
HAS_TRANSLATE_PIPE = re.compile(r"\|\s*translate\b")

def safe_group(match_obj, default=""):
    """Return match_obj.group(0) if match_obj not None, else default."""
    return match_obj.group(0) if match_obj is not None else default

def remove_diacritics(s: str) -> str:
    nfkd = unicodedata.normalize("NFD", s)
    return "".join(ch for ch in nfkd if not unicodedata.combining(ch))

def slugify_to_key(s: str) -> str:
    s = s.strip()
    s = re.sub(r"\{\{.*?\}\}", "", s)
    s = remove_diacritics(s)
    s = re.sub(r"[^0-9A-Za-z]+", "_", s)
    s = re.sub(r"_+", "_", s)
    s = s.strip("_")
    return s.lower()

def is_vietnamese_text(s: str) -> bool:
    if not s or not s.strip():
        return False
    t = s.strip()
    if re.fullmatch(r"[0-9\.\-\s,]+", t):
        return False
    if re.search(r"\{\{.*\}\}", t):
        return bool(VIET_REGEX.search(t))
    return bool(VIET_REGEX.search(t))

def make_unique_key(base: str, existing_keys: set) -> str:
    if base not in existing_keys:
        return base
    i = 1
    while True:
        cand = f"{base}_{i}"
        if cand not in existing_keys:
            return cand
        i += 1

def convert_binding_value_to_translate(val: str, translations: dict, existing_keys: set, prefix=""):
    if val is None:
        return None
    m = BINDING_LITERAL_RE.match(val.strip())
    if not m:
        return None
    txt = m.group("txt").strip()
    key_base = slugify_to_key(txt)
    if not key_base:
        return None
    if prefix:
        key_base = f"{prefix}_{key_base}"
    key = make_unique_key(key_base, existing_keys)
    existing_keys.add(key)
    translations.setdefault(key, txt)
    return f"'{key}' | translate"

def convert_interpolation_to_translate(val: str, translations: dict, existing_keys: set, prefix=""):
    if val is None:
        return None
    m = INTERPOLATION_RE.match(val)
    if not m:
        return None
    txt = m.group("txt").strip()
    key_base = slugify_to_key(txt)
    if not key_base:
        return None
    if prefix:
        key_base = f"{prefix}_{key_base}"
    key = make_unique_key(key_base, existing_keys)
    existing_keys.add(key)
    translations.setdefault(key, txt)
    return "{{ '" + key + "' | translate }}"

def make_soup(raw, path=None):
    try:
        return BeautifulSoup(raw, "lxml")
    except Exception as e:
        if path:
            print(f"Warning: couldn't use 'lxml' parser for {path}: {e}")
        else:
            print(f"Warning: couldn't use 'lxml' parser: {e}")
        print("Falling back to built-in 'html.parser'.")
        return BeautifulSoup(raw, "html.parser")

def process_attribute(el, attr, translations, existing_keys, dry_run, prefix=""):
    raw_val = el.get(attr)
    if raw_val is None:
        return False
    if isinstance(raw_val, list):
        raw_val = " ".join(raw_val)
    is_bracket_binding = attr.startswith("[") and attr.endswith("]")
    try:
        if "{{" in raw_val and "}}" in raw_val:
            conv = convert_interpolation_to_translate(raw_val, translations, existing_keys, prefix=prefix)
            if conv:
                if el.get(attr) != conv:
                    if not dry_run:
                        el[attr] = conv
                    return True
            return False
        conv_bind = convert_binding_value_to_translate(raw_val, translations, existing_keys, prefix=prefix)
        if conv_bind:
            if is_bracket_binding:
                new_val = conv_bind
            else:
                new_val = "{{ '" + conv_bind.split("'")[1] + "' | translate }}"
            if el.get(attr) != new_val:
                if not dry_run:
                    el[attr] = new_val
                return True
        if HAS_TRANSLATE_PIPE.search(raw_val):
            m = re.search(r"(['\"])(?P<txt>.+?)\1", raw_val)
            if m:
                txt = m.group("txt").strip()
                key_base = slugify_to_key(txt)
                if key_base:
                    if prefix:
                        key_base = f"{prefix}_{key_base}"
                    key = make_unique_key(key_base, existing_keys)
                    existing_keys.add(key)
                    translations.setdefault(key, txt)
                    if is_bracket_binding:
                        new_val = f"'{key}' | translate"
                    else:
                        new_val = "{{ '" + key + "' | translate }}"
                    if el.get(attr) != new_val:
                        if not dry_run:
                            el[attr] = new_val
                        return True
        if is_vietnamese_text(raw_val):
            key_base = slugify_to_key(raw_val)
            if not key_base:
                return False
            if prefix:
                key_base = f"{prefix}_{key_base}"
            key = make_unique_key(key_base, existing_keys)
            existing_keys.add(key)
            translations.setdefault(key, raw_val.strip())
            new_val = "{{ '" + key + "' | translate }}"
            if el.get(attr) != new_val:
                if not dry_run:
                    el[attr] = new_val
                return True
    except Exception as e:
        print(f"Warning: failed to process attribute {attr} in element {getattr(el, 'name', '')}: {e}")
        traceback.print_exc()
    return False

def process_text_node(node, translations, existing_keys, dry_run, prefix=""):
    orig = str(node)
    stripped = orig.strip()
    if not stripped:
        return False
    try:
        # pure interpolation
        if re.match(r"^\s*\{\{.*\}\}\s*$", orig, re.S):
            conv = convert_interpolation_to_translate(orig, translations, existing_keys, prefix=prefix)
            if conv:
                leading = safe_group(re.match(r"^\s*", orig))
                trailing = safe_group(re.match(r"\s*$", orig))
                new_node = leading + conv + trailing
                if new_node != orig:
                    if not dry_run:
                        node.replace_with(new_node)
                    return True
            return False
        # pure plain text
        if is_vietnamese_text(orig) and "{{" not in orig:
            key_base = slugify_to_key(orig)
            if not key_base:
                return False
            if prefix:
                key_base = f"{prefix}_{key_base}"
            key = make_unique_key(key_base, existing_keys)
            existing_keys.add(key)
            translations.setdefault(key, stripped)
            leading = safe_group(re.match(r"^\s*", orig))
            trailing = safe_group(re.match(r"\s*$", orig))
            new_node = leading + "{{ '" + key + "' | translate }}" + trailing
            if new_node != orig:
                if not dry_run:
                    node.replace_with(new_node)
                return True
    except Exception as e:
        print(f"Warning: failed to process text node in element {getattr(node, 'parent', '')}: {e}")
        traceback.print_exc()
    return False

def load_translations(path):
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            print("Warning: cannot parse existing translations file; starting empty.")
            return {}
    return {}

def write_translations(path, obj, dry_run):
    dirp = os.path.dirname(path)
    if dirp and not os.path.exists(dirp):
        os.makedirs(dirp, exist_ok=True)
    content = json.dumps(obj, ensure_ascii=False, indent=2)
    if not dry_run:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
    else:
        print("Dry-run: translations that would be written:")
        print(content)

def process_html_file(path, translations, existing_keys, results, dry_run, prefix=""):
    with open(path, "r", encoding="utf-8") as f:
        raw = f.read()
    soup = make_soup(raw, path)
    modified = False
    for el in soup.find_all(True):
        for attr in list(el.attrs.keys()):
            if attr not in ATTRS_TO_CHECK and not (attr.startswith("[") and attr.endswith("]")):
                continue
            try:
                changed = process_attribute(el, attr, translations, existing_keys, dry_run, prefix=prefix)
                if changed:
                    results.append({"file": path, "attr": attr})
                    modified = True
            except Exception as e:
                print(f"Warning: failed to process attribute {attr} in {path}: {e}")
                traceback.print_exc()
    text_nodes = list(soup.find_all(string=True))
    for node in text_nodes:
        if isinstance(node, Comment):
            continue
        parent = node.parent
        if parent and parent.name and parent.name.lower() in {"script", "style"}:
            continue
        try:
            changed = process_text_node(node, translations, existing_keys, dry_run, prefix=prefix)
            if changed:
                results.append({"file": path, "text": True})
                modified = True
        except Exception as ex:
            print(f"Warning: failed to process text node in {path}: {ex}")
            traceback.print_exc()
    if modified:
        bak = path + ".bak"
        if not dry_run:
            if not os.path.exists(bak):
                shutil.copy2(path, bak)
            out_str = str(soup)
            with open(path, "w", encoding="utf-8") as f:
                f.write(out_str)
    return modified

def main():
    parser = argparse.ArgumentParser(description="Enhanced extractor (fixed) for Vietnamese strings in Angular templates.")
    parser.add_argument("--dir", default="src", help="Root directory to scan for .html files")
    parser.add_argument("--out", default="src/assets/i18n/vi.json", help="Output translations JSON file")
    parser.add_argument("--dry", action="store_true", help="Dry-run (don't modify files)")
    parser.add_argument("--prefix", default="", help="Optional prefix for keys")
    parser.add_argument("--ext", default="html", help="File extensions to scan (comma separated)")
    args = parser.parse_args()
    exts = [e.strip() for e in args.ext.split(",")]
    patterns = [os.path.join(args.dir, "**", f"*.{e}") for e in exts]
    files = []
    for p in patterns:
        files.extend(glob.glob(p, recursive=True))
    if not files:
        print("No files found in", args.dir)
        return
    translations = load_translations(args.out)
    existing_keys = set(translations.keys())
    results = []
    modified_files = []
    for fpath in files:
        try:
            mod = process_html_file(fpath, translations, existing_keys, results, args.dry, prefix=args.prefix)
            if mod:
                modified_files.append(fpath)
        except Exception as ex:
            print(f"Error processing {fpath}: {ex}")
            traceback.print_exc()
    write_translations(args.out, translations, args.dry)
    if not results:
        print("No convertible Vietnamese strings detected.")
    else:
        print("\nDetected/changed items (summary):")
        files_changed = sorted(set(r["file"] for r in results))
        for ff in files_changed:
            print(" -", ff)
    if args.dry:
        print("\nDry-run mode: no files were modified. Run without --dry to apply changes.")
    else:
        print(f"\nUpdated files ({len(modified_files)}):")
        for ff in modified_files:
            print(" -", ff)
        print(f"Translations written to {args.out}")

if __name__ == "__main__":
    main()