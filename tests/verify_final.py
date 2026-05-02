import urllib.request

BASE = 'http://localhost:9090'

# Check key pages
pages = [
    'index.html',
    'pages/ai-simplified.html', 'pages/courses.html',
    'pages/tools-directory.html', 'pages/reviews.html',
    'sitemap.xml', 'manifest.json', 'sw.js'
]

print("=== Page Status ===")
all_ok = True
for p in pages:
    try:
        r = urllib.request.urlopen(f'{BASE}/{p}')
        data = r.read()
        print(f'  OK  {p}: {len(data)} bytes')
    except Exception as e:
        print(f'  FAIL {p}: {e}')
        all_ok = False

# Check content in index.html
r = urllib.request.urlopen(f'{BASE}/index.html')
html = r.read().decode('utf-8')

checks = {
    'favicon (logo.svg)': 'rel="icon" type="image/svg+xml"' in html,
    'enhancements.css': 'enhancements.css' in html,
    'enhancements.js': 'enhancements.js' in html,
    'manifest.json': 'manifest.json' in html,
    'JSON-LD': 'application/ld+json' in html,
    'stats-section': 'stats-section' in html,
    'main-content': 'main-content' in html,
    'skip-to-content': 'skip-to-content' in html,
    'loading=lazy': 'loading="lazy"' in html,
    'SVG menu icons': 'menu-icon' in html,
    'SVG social icons (X/twitter)': 'M4 4l11.733 16' in html,
    'NO broken course image': 'images/courses/' not in html,
    'Globe SVG (no emoji)': '🌐' not in html,
}

print('\n=== Index.html Content Checks ===')
for k, v in checks.items():
    status = 'OK' if v else 'MISSING'
    print(f'  {status}  {k}')
    if not v:
        all_ok = False

# Check a sub-page
r = urllib.request.urlopen(f'{BASE}/pages/courses.html')
sub = r.read().decode('utf-8')

sub_checks = {
    'favicon': 'rel="icon"' in sub,
    'enhancements.css': 'enhancements.css' in sub,
    'enhancements.js': 'enhancements.js' in sub,
    'SVG menu icons': 'menu-icon' in sub,
}

print('\n=== courses.html Content Checks ===')
for k, v in sub_checks.items():
    status = 'OK' if v else 'MISSING'
    print(f'  {status}  {k}')
    if not v:
        all_ok = False

print(f'\n{"ALL PASS ✓" if all_ok else "SOME CHECKS FAILED ✗"}')
