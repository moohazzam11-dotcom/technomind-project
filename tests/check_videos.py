"""
Check all YouTube video IDs from courses and articles to verify they exist.
Uses YouTube thumbnail API: if thumbnail returns 200 with reasonable size, video exists.
"""
import urllib.request
import re
import os
import json

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 1. Extract video IDs from courses.js
courses_path = os.path.join(PROJECT, 'js', 'data', 'courses.js')
with open(courses_path, 'r', encoding='utf-8') as f:
    courses_content = f.read()

course_videos = re.findall(r'videoId:\s*"([^"]+)"', courses_content)
print("=== COURSE VIDEO IDs ===")
for vid in course_videos:
    print(f"  {vid}")

# 2. Extract video IDs from articles.js
articles_path = os.path.join(PROJECT, 'js', 'data', 'articles.js')
with open(articles_path, 'r', encoding='utf-8') as f:
    articles_content = f.read()

# Match youtube.com/watch?v=XXXX patterns
article_videos_watch = re.findall(r'youtube\.com/watch\?v=([a-zA-Z0-9_-]{11})', articles_content)
# Match youtube.com/embed/XXXX patterns
article_videos_embed = re.findall(r'youtube\.com/embed/([a-zA-Z0-9_-]{11})', articles_content)
# Match youtu.be/XXXX patterns
article_videos_short = re.findall(r'youtu\.be/([a-zA-Z0-9_-]{11})', articles_content)

article_videos = list(set(article_videos_watch + article_videos_embed + article_videos_short))

print(f"\n=== ARTICLE VIDEO IDs ({len(article_videos)} unique) ===")
for vid in sorted(article_videos):
    print(f"  {vid}")

# 3. Combine all unique video IDs
all_videos = list(set(course_videos + article_videos))
print(f"\n=== VERIFYING {len(all_videos)} UNIQUE VIDEO IDs ===")

working = []
broken = []
suspicious = []

for vid in sorted(all_videos):
    # Check standard 11-char format
    if len(vid) != 11:
        broken.append((vid, 'INVALID FORMAT (not 11 chars)'))
        print(f"  BROKEN {vid} - invalid format ({len(vid)} chars)")
        continue
    
    try:
        url = f'https://img.youtube.com/vi/{vid}/mqdefault.jpg'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        r = urllib.request.urlopen(req, timeout=5)
        size = len(r.read())
        
        if size < 1000:
            # Very small image = likely the "no video" placeholder
            broken.append((vid, f'thumbnail too small ({size}b) - video likely deleted'))
            print(f"  BROKEN {vid} - tiny thumbnail ({size}b)")
        elif size < 5000:
            suspicious.append((vid, f'small thumbnail ({size}b) - may be placeholder'))
            print(f"  WARN  {vid} - small thumbnail ({size}b)")
        else:
            working.append(vid)
            print(f"  OK    {vid} ({size}b)")
    except Exception as e:
        broken.append((vid, str(e)))
        print(f"  ERROR {vid} - {e}")

# 4. Check which course lessons have broken videos
print(f"\n=== COURSE LESSON STATUS ===")
course_lesson_names = re.findall(r'title:\s*"([^"]+)",\s*\n\s*videoId:\s*"([^"]+)"', courses_content)
for title, vid in course_lesson_names:
    status = "OK" if vid in working else ("BROKEN" if vid in [b[0] for b in broken] else "WARN")
    print(f"  {status} [{vid}] {title}")

print(f"\n=== SUMMARY ===")
print(f"  Working: {len(working)}")
print(f"  Suspicious: {len(suspicious)}")
print(f"  Broken: {len(broken)}")
if broken:
    print(f"\n  BROKEN VIDEO IDs:")
    for vid, reason in broken:
        print(f"    {vid}: {reason}")
