import urllib.request

pages = [
    'index.html',
    'pages/ai-simplified.html',
    'pages/reviews.html',
    'pages/courses.html',
    'sitemap.xml',
    'manifest.json',
    'sw.js'
]

all_ok = True
for p in pages:
    try:
        r = urllib.request.urlopen('http://localhost:8080/' + p)
        data = r.read()
        print(f'  OK  {p}: {r.status} ({len(data)} bytes)')
    except Exception as e:
        print(f'  FAIL {p}: {e}')
        all_ok = False

# Check key content in index.html
r = urllib.request.urlopen('http://localhost:8080/index.html')
html = r.read().decode('utf-8')
checks = {
    'enhancements.css': 'enhancements.css' in html,
    'enhancements.js': 'enhancements.js' in html,
    'manifest.json': 'manifest.json' in html,
    'skip-to-content': 'skip-to-content' in html,
    'JSON-LD': 'application/ld+json' in html,
    'stats-section': 'stats-section' in html,
    'main-content': 'main-content' in html,
    'loading=lazy': 'loading="lazy"' in html,
}

print('\nContent checks:')
for k, v in checks.items():
    status = 'OK' if v else 'MISSING'
    print(f'  {status}  {k}')
    if not v:
        all_ok = False

print(f'\n{"ALL PASS" if all_ok else "SOME FAILED"}')
