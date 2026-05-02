import urllib.request
pages = ['index.html','pages/courses.html','pages/contact.html','404.html']
for p in pages:
    r = urllib.request.urlopen(f'http://localhost:9090/{p}')
    d = r.read().decode('utf-8')
    print(f'OK {p}: {len(d)} bytes')

# Content checks
r = urllib.request.urlopen('http://localhost:9090/index.html')
h = r.read().decode('utf-8')
checks = {
    'No remaining alert() social': "alert('Coming Soon" not in h,
    'Stats SVG icons': 'stat-icon"><svg' in h,
    'No duplicate meta': h.count('meta name="description"') == 1,
    'main closes before footer': '</main>' in h.split('<!-- Footer -->')[0],
}
print()
for k,v in checks.items():
    print(f'{"PASS" if v else "FAIL"} {k}')

r = urllib.request.urlopen('http://localhost:9090/pages/contact.html')
c = r.read().decode('utf-8')
checks2 = {
    'Contact form has handler': 'onsubmit="event.preventDefault' in c,
    'Contact has lang.js': 'lang.js' in c,
    'Toast instead of alert': 'showToast' in c,
}
for k,v in checks2.items():
    print(f'{"PASS" if v else "FAIL"} {k}')
