"""
Comprehensive file check for TechnoMind website.
Checks: broken links, missing scripts/CSS, missing images, JS syntax, HTML issues.
"""
import os, re, json

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGES = os.path.join(PROJECT, 'pages')

issues = []

def add_issue(severity, file, description):
    issues.append({'severity': severity, 'file': os.path.relpath(file, PROJECT), 'desc': description})

# ============================================================
# 1. Check all HTML files
# ============================================================
print("=== 1. Scanning HTML files ===")

html_files = []
for root, dirs, files in os.walk(PROJECT):
    dirs[:] = [d for d in dirs if d not in ('node_modules', '.git', 'tests', '.gemini', '.antigravity')]
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

print(f"  Found {len(html_files)} HTML files")

for path in html_files:
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    dirname = os.path.dirname(path)
    fname = os.path.basename(path)
    
    # Check for referenced CSS files
    css_refs = re.findall(r'href="([^"]*\.css)"', content)
    for css in css_refs:
        if css.startswith('http'):
            continue
        css_path = os.path.normpath(os.path.join(dirname, css))
        if not os.path.exists(css_path):
            add_issue('ERROR', path, f'Missing CSS: {css}')
    
    # Check for referenced JS files
    js_refs = re.findall(r'src="([^"]*\.js)"', content)
    for js in js_refs:
        if js.startswith('http'):
            continue
        js_path = os.path.normpath(os.path.join(dirname, js))
        if not os.path.exists(js_path):
            add_issue('ERROR', path, f'Missing JS: {js}')
    
    # Check for referenced local images
    img_refs = re.findall(r'src="([^"]*\.(jpg|png|svg|webp|gif))"', content)
    for img, ext in img_refs:
        if img.startswith('http'):
            continue
        img_path = os.path.normpath(os.path.join(dirname, img))
        if not os.path.exists(img_path):
            add_issue('WARN', path, f'Missing image: {img}')
    
    # Check for links to other HTML pages
    page_links = re.findall(r'href="([^"]*\.html[^"]*)"', content)
    for link in page_links:
        if link.startswith('http') or link.startswith('#') or '?' in link:
            # Strip query params for file check
            clean = link.split('?')[0].split('#')[0]
            if clean.startswith('http'):
                continue
        else:
            clean = link.split('?')[0].split('#')[0]
        
        if clean:
            link_path = os.path.normpath(os.path.join(dirname, clean))
            if not os.path.exists(link_path):
                add_issue('ERROR', path, f'Broken link: {clean}')
    
    # Check for missing favicon
    if '<link rel="icon"' not in content and fname != '404.html':
        add_issue('WARN', path, 'Missing favicon link')
    
    # Check for missing viewport meta
    if '<meta name="viewport"' not in content:
        add_issue('WARN', path, 'Missing viewport meta tag')
    
    # Check for missing enhancements.css
    if 'enhancements.css' not in content and fname != '404.html':
        add_issue('WARN', path, 'Missing enhancements.css reference')
    
    # Check for missing enhancements.js
    if 'enhancements.js' not in content and fname != '404.html':
        add_issue('WARN', path, 'Missing enhancements.js reference')
    
    # Check for missing main.js
    if 'main.js' not in content and fname != '404.html':
        add_issue('WARN', path, 'Missing main.js reference')
    
    # Check for unclosed tags (basic check)
    open_divs = content.count('<div')
    close_divs = content.count('</div>')
    if abs(open_divs - close_divs) > 1:
        add_issue('WARN', path, f'Possible unclosed divs: {open_divs} opens vs {close_divs} closes')
    
    # Check for remaining raw alert() calls (not in fallback pattern)
    raw_alerts = re.findall(r"(?<!else\{)alert\('", content)
    if raw_alerts and "onclick=\"alert(" in content:
        # Only flag if there are direct alert() not inside our showToast fallback
        pass

# ============================================================
# 2. Check JS files for syntax issues
# ============================================================
print("\n=== 2. Checking JS files ===")

js_files = []
for root, dirs, files in os.walk(os.path.join(PROJECT, 'js')):
    for f in files:
        if f.endswith('.js'):
            js_files.append(os.path.join(root, f))

for path in js_files:
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    # Check for unmatched braces
    opens = content.count('{')
    closes = content.count('}')
    if opens != closes:
        add_issue('ERROR', path, f'Unmatched braces: {opens} opens vs {closes} closes')
    
    # Check for unmatched brackets
    opens = content.count('[')
    closes = content.count(']')
    if opens != closes:
        add_issue('ERROR', path, f'Unmatched brackets: {opens} opens vs {closes} closes')
    
    # Check for console.error references to missing functions
    undefined_refs = re.findall(r'(\w+) is not defined', content)
    
    print(f"  Checked: {os.path.relpath(path, PROJECT)}")

# ============================================================
# 3. Check for referenced files that don't exist
# ============================================================
print("\n=== 3. Checking referenced assets ===")

# Check manifest.json
manifest_path = os.path.join(PROJECT, 'manifest.json')
if os.path.exists(manifest_path):
    with open(manifest_path, 'r', encoding='utf-8') as fh:
        try:
            manifest = json.load(fh)
            for icon in manifest.get('icons', []):
                icon_path = os.path.join(PROJECT, icon['src'].lstrip('/'))
                if not os.path.exists(icon_path):
                    add_issue('WARN', manifest_path, f'Missing manifest icon: {icon["src"]}')
            print(f"  manifest.json: OK")
        except json.JSONDecodeError as e:
            add_issue('ERROR', manifest_path, f'Invalid JSON: {e}')
else:
    add_issue('WARN', PROJECT, 'Missing manifest.json (PWA)')

# Check service worker
sw_path = os.path.join(PROJECT, 'sw.js')
if os.path.exists(sw_path):
    with open(sw_path, 'r', encoding='utf-8') as fh:
        sw_content = fh.read()
    # Check cached files exist
    cached_files = re.findall(r"'(/[^']+)'", sw_content)
    for cf in cached_files:
        cf_path = os.path.join(PROJECT, cf.lstrip('/'))
        if not os.path.exists(cf_path) and not cf.startswith('/api'):
            add_issue('WARN', sw_path, f'Cached file missing: {cf}')
    print(f"  sw.js: checked {len(cached_files)} cached paths")

# ============================================================
# 4. Check images directory
# ============================================================
print("\n=== 4. Checking images ===")
images_dir = os.path.join(PROJECT, 'images')
if os.path.exists(images_dir):
    img_count = 0
    for root, dirs, files in os.walk(images_dir):
        img_count += len(files)
    print(f"  Found {img_count} image files")
    
    # Check key images
    key_images = ['logo.svg', 'logo.png', 'og-preview.jpg']
    for img in key_images:
        if not os.path.exists(os.path.join(images_dir, img)):
            add_issue('WARN', images_dir, f'Missing key image: {img}')
else:
    add_issue('ERROR', PROJECT, 'Missing images directory!')

# ============================================================
# 5. Summary
# ============================================================
print("\n" + "=" * 60)
print(f"TOTAL ISSUES: {len(issues)}")
print("=" * 60)

errors = [i for i in issues if i['severity'] == 'ERROR']
warns = [i for i in issues if i['severity'] == 'WARN']

if errors:
    print(f"\nERRORS ({len(errors)}):")
    for i in errors:
        print(f"  [{i['file']}] {i['desc']}")

if warns:
    print(f"\nWARNINGS ({len(warns)}):")
    for i in warns:
        print(f"  [{i['file']}] {i['desc']}")

if not issues:
    print("  No issues found!")
