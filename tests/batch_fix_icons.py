"""
Comprehensive batch fix for TechnoMind:
1. Replace emoji icons with SVG icons in all sub-pages (menu items)
2. Replace emoji social icons with SVG in all pages
3. Add favicon link to all sub-pages
4. Fix missing course images in index.html
"""
import os
import re

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# SVG icons (inline, Lucide-style)
SVG_ICONS = {
    # Menu item replacements
    'dashboard': '<svg class="menu-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    'support': '<svg class="menu-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    'contact': '<svg class="menu-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    'login': '<svg class="menu-icon" viewBox="0 0 24 24"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>',
    # Social icons
    'twitter': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>',
    'linkedin': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
    'instagram': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    # Globe (language toggle)
    'globe': '<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
}

# Emoji -> SVG replacement patterns
EMOJI_REPLACEMENTS = [
    # Menu items - dashboard/login
    (r'<span>👤</span>\s*<span class="text">', lambda m: SVG_ICONS['dashboard'] + '\n                    <span class="text">'),
    # Menu items - support
    (r'<span>🛠️</span>\s*<span class="text">', lambda m: SVG_ICONS['support'] + '\n                    <span class="text">'),
    # Menu items - contact
    (r'<span>📞</span>\s*<span class="text">', lambda m: SVG_ICONS['contact'] + '\n                    <span class="text">'),
    # Social icons
    (r'<span>🐦</span>', lambda m: SVG_ICONS['twitter']),
    (r'<span>💼</span>', lambda m: SVG_ICONS['linkedin']),
    (r'<span>📸</span>', lambda m: SVG_ICONS['instagram']),
    # Language toggle emoji
    (r'🌐\s*<span', lambda m: SVG_ICONS['globe'] + '\n                    <span'),
]

# Favicon link for sub-pages (relative path from /pages/)
FAVICON_LINKS = '''
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
    <link rel="apple-touch-icon" href="../images/logo.png">'''

print("=== 1. Replacing emoji icons with SVG in sub-pages ===")
pages_dir = os.path.join(PROJECT, 'pages')
updated_count = 0

for f in sorted(os.listdir(pages_dir)):
    if not f.endswith('.html'):
        continue
    path = os.path.join(pages_dir, f)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    original = content
    
    # Apply emoji -> SVG replacements
    for pattern, replacement in EMOJI_REPLACEMENTS:
        content = re.sub(pattern, replacement, content)
    
    # Add favicon if missing
    if 'rel="icon"' not in content and '</head>' in content:
        content = content.replace('</head>', FAVICON_LINKS + '\n</head>', 1)
    
    if content != original:
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(content)
        updated_count += 1
        changes = []
        if re.search(r'menu-icon', content) and not re.search(r'menu-icon', original):
            changes.append('SVG menu icons')
        if 'rel="icon"' in content and 'rel="icon"' not in original:
            changes.append('favicon')
        if SVG_ICONS['twitter'] in content and SVG_ICONS['twitter'] not in original:
            changes.append('SVG social icons')
        print(f"  + {f}: {', '.join(changes) if changes else 'emoji replacements'}")

print(f"  Updated {updated_count} files")

# 2. Fix missing course images in index.html
print("\n=== 2. Fixing missing course images in index.html ===")
index_path = os.path.join(PROJECT, 'index.html')
with open(index_path, 'r', encoding='utf-8') as fh:
    content = fh.read()

# Replace local images with Unsplash placeholders (AI/tech themed)
replacements = {
    'images/courses/ai-101.jpg': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60',
    'images/courses/productivity.jpg': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60',
}

for old, new in replacements.items():
    if old in content:
        content = content.replace(old, new)
        print(f"  Fixed: {old}")

with open(index_path, 'w', encoding='utf-8') as fh:
    fh.write(content)

print("\n=== Done! ===")
