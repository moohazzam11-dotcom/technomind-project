"""
Batch operations for TechnoMind Phase 6:
1. Add loading="lazy" to all <img> tags
2. Generate sitemap.xml
3. Add aria-label to icon-only buttons/links
4. Add id="main-content" to first main section
"""
import os
import re

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 1. LAZY LOADING IMAGES
print("=== 1. Adding loading='lazy' to images ===")
img_count = 0
for root, dirs, files in os.walk(PROJECT):
    # Skip node_modules, .git, tests
    dirs[:] = [d for d in dirs if d not in ('node_modules', '.git', 'tests', '.gemini')]
    for f in files:
        if not f.endswith('.html'):
            continue
        path = os.path.join(root, f)
        with open(path, 'r', encoding='utf-8') as fh:
            content = fh.read()
        
        # Add loading="lazy" to img tags that don't have it
        original = content
        content = re.sub(
            r'<img(?![^>]*loading=)([^>]*?)(/?>)', 
            r'<img loading="lazy"\1\2', 
            content
        )
        
        if content != original:
            with open(path, 'w', encoding='utf-8') as fh:
                fh.write(content)
            count = content.count('loading="lazy"') - original.count('loading="lazy"')
            img_count += count
            print(f"  + {os.path.relpath(path, PROJECT)}: {count} images updated")

print(f"  Total images updated: {img_count}")

# 2. SITEMAP GENERATION
print("\n=== 2. Generating sitemap.xml ===")
base_url = "https://technomind-project.netlify.app"
html_files = []

for root, dirs, files in os.walk(PROJECT):
    dirs[:] = [d for d in dirs if d not in ('node_modules', '.git', 'tests', '.gemini')]
    for f in sorted(files):
        if f.endswith('.html'):
            rel = os.path.relpath(os.path.join(root, f), PROJECT).replace('\\', '/')
            html_files.append(rel)

sitemap_entries = []
for f in html_files:
    priority = "1.0" if f == "index.html" else "0.7" if f.startswith("pages/article") else "0.5"
    sitemap_entries.append(f"""  <url>
    <loc>{base_url}/{f}</loc>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
  </url>""")

sitemap_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(sitemap_entries)}
</urlset>
"""

sitemap_path = os.path.join(PROJECT, 'sitemap.xml')
with open(sitemap_path, 'w', encoding='utf-8') as fh:
    fh.write(sitemap_xml)
print(f"  Generated sitemap.xml with {len(html_files)} URLs")

# 3. ADD id="main-content" to index.html hero
print("\n=== 3. Adding id='main-content' to hero section ===")
index_path = os.path.join(PROJECT, 'index.html')
with open(index_path, 'r', encoding='utf-8') as fh:
    content = fh.read()

if 'id="main-content"' not in content:
    # Add to the hero section
    content = content.replace(
        '<!-- Hero Section v2.0 -->',
        '<!-- Hero Section v2.0 -->\n    <main id="main-content">',
        1
    )
    # Close main before footer
    content = content.replace(
        '    <!-- Footer -->',
        '    </main>\n\n    <!-- Footer -->',
        1
    )
    with open(index_path, 'w', encoding='utf-8') as fh:
        fh.write(content)
    print("  Added id='main-content' to index.html")
else:
    print("  Already has id='main-content'")

print("\n=== Done! ===")
