import os

pages_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'pages')
css_link = '    <link rel="stylesheet" href="../css/enhancements.css">'
js_script = '    <script src="../js/enhancements.js"></script>'

modified = []
skipped = []

for f in sorted(os.listdir(pages_dir)):
    if not f.endswith('.html'):
        continue
    path = os.path.join(pages_dir, f)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    changed = False
    
    # Add CSS if not already present
    if 'enhancements.css' not in content:
        if '../css/style.css' in content:
            content = content.replace(
                '<link rel="stylesheet" href="../css/style.css">',
                '<link rel="stylesheet" href="../css/style.css">\n' + css_link,
                1
            )
            changed = True
    
    # Add JS if not already present
    if 'enhancements.js' not in content:
        if '</body>' in content:
            content = content.replace(
                '</body>',
                js_script + '\n</body>',
                1
            )
            changed = True
    
    if changed:
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(content)
        modified.append(f)
    else:
        skipped.append(f)

print(f'Modified: {len(modified)} files')
for m in modified:
    print(f'  + {m}')
print(f'Skipped: {len(skipped)} files')
for s in skipped:
    print(f'  - {s}')
