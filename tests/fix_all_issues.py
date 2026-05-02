"""
Fix all 14 issues found by check_all_files.py
"""
import os, re

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGES = os.path.join(PROJECT, 'pages')
fixed = 0

# ============================================================
# 1. Fix blog/index.html - add favicon, enhancements.css, enhancements.js
# ============================================================
print("=== 1. Fixing blog/index.html ===")
blog_path = os.path.join(PROJECT, 'blog', 'index.html')
if os.path.exists(blog_path):
    with open(blog_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add favicon if missing
    if '<link rel="icon"' not in content and '</head>' in content:
        content = content.replace('</head>', 
            '    <link rel="icon" type="image/svg+xml" href="../images/logo.svg">\n    <link rel="apple-touch-icon" href="../images/logo.png">\n</head>')
        fixed += 1
    
    # Add enhancements.css if missing
    if 'enhancements.css' not in content and 'style.css' in content:
        content = content.replace(
            '<link rel="stylesheet" href="../css/style.css">',
            '<link rel="stylesheet" href="../css/style.css">\n    <link rel="stylesheet" href="../css/enhancements.css">')
        fixed += 1
    
    # Add enhancements.js if missing
    if 'enhancements.js' not in content and '</body>' in content:
        content = content.replace('</body>', '    <script src="../js/enhancements.js"></script>\n</body>')
        fixed += 1
    
    with open(blog_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Fixed blog/index.html ({fixed} fixes)")

# ============================================================
# 2. Fix about.html, disclaimer.html, terms.html - add main.js
# ============================================================
print("\n=== 2. Adding main.js to pages ===")
pages_needing_mainjs = ['about.html', 'disclaimer.html', 'terms.html']

for page in pages_needing_mainjs:
    path = os.path.join(PAGES, page)
    if not os.path.exists(path):
        print(f"  SKIP: {page} not found")
        continue
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'main.js' not in content and '</body>' in content:
        # Add main.js before enhancements.js or before </body>
        if 'enhancements.js' in content:
            content = content.replace(
                '<script src="../js/enhancements.js"></script>',
                '<script src="../js/main.js"></script>\n    <script src="../js/enhancements.js"></script>')
        else:
            content = content.replace('</body>', '    <script src="../js/main.js"></script>\n</body>')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed += 1
        print(f"  + {page}")

# ============================================================
# 3. Fix missing article thumbnails
# Replace local image refs with Unsplash placeholders
# ============================================================
print("\n=== 3. Fixing missing article thumbnails ===")
thumb_fixes = {
    '../images/ai-thumb.png': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&auto=format&fit=crop&q=60',
    '../images/earn-thumb.png': 'https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?w=400&auto=format&fit=crop&q=60',
    '../images/tools-thumb.png': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&auto=format&fit=crop&q=60',
}

for root, dirs, files in os.walk(PAGES):
    for f in files:
        if not f.endswith('.html'):
            continue
        path = os.path.join(root, f)
        with open(path, 'r', encoding='utf-8') as fh:
            content = fh.read()
        
        original = content
        for old_src, new_src in thumb_fixes.items():
            content = content.replace(f'src="{old_src}"', f'src="{new_src}"')
        
        if content != original:
            with open(path, 'w', encoding='utf-8') as fh:
                fh.write(content)
            fixed += 1
            print(f"  + {f}")

# ============================================================
# SUMMARY
# ============================================================
print(f"\n=== TOTAL FIXES: {fixed} ===")
