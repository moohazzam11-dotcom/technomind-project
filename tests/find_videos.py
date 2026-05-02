"""Find and verify working YouTube video IDs for new course content."""
import urllib.request

# Candidate video IDs for various AI topics
# These are popular, well-known AI tutorial videos
candidates = {
    # AI fundamentals / general
    'JMUxmLyrhSk': 'AI explained in 5 minutes',
    'ad79nYk2keg': 'Machine learning basics',
    'aircAruvnKk': 'Neural networks explained',
    'mEsleV16qDo': 'How AI is changing the world',
    
    # ChatGPT / LLMs
    'jHv63Uvk5VA': 'ChatGPT tutorial 2024',
    '2FeymQoKvrk': 'GPT-4 features explained',
    'r7k0tPGm8Eo': 'Prompt engineering tips',
    'pGOyw_M1mNE': 'Advanced ChatGPT uses',
    'oCkKCBsyPWs': 'ChatGPT for beginners',
    
    # Image generation
    'Asg1e_IYzR8': 'Stable Diffusion tutorial',
    'nYqeHIRKboM': 'DALL-E 3 tutorial',
    
    # AI for business/money
    'hsJy1skvalE': 'Make money with AI 2024',
    'wjZofJBR0MI': 'AI freelancing guide',
    
    # AI content creation
    'wfIjKbLFMzU': 'AI video editing',
    'tAJ4gWJyxYM': 'Runway ML tutorial',
    
    # Coding with AI
    '2q0BoioYSxQ': 'GitHub Copilot X tutorial',
    'Fi3AJZZregI': 'Cursor AI tutorial',
    'hPBKH8Oq8Ms': 'V0 by Vercel tutorial',
    
    # Productivity
    'jsc7agXcj3E': 'Obsidian tutorial',
    '3gGpAQoERV0': 'Notion templates 2024',
    'DbsAQSIKQXk': 'Zapier AI automation',
}

print(f"Verifying {len(candidates)} candidate video IDs...")
working = []
broken = []

for vid, desc in candidates.items():
    try:
        url = f'https://img.youtube.com/vi/{vid}/mqdefault.jpg'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        r = urllib.request.urlopen(req, timeout=5)
        size = len(r.read())
        
        if size > 5000:
            working.append((vid, desc, size))
            print(f'  OK    {vid} ({size:>6}b) - {desc}')
        elif size > 1000:
            working.append((vid, desc, size))
            print(f'  WARN  {vid} ({size:>6}b) - {desc}')
        else:
            broken.append((vid, desc))
            print(f'  BROKEN {vid} ({size:>6}b) - {desc}')
    except Exception as e:
        broken.append((vid, desc))
        print(f'  ERROR {vid} - {desc} ({e})')

print(f'\nWorking: {len(working)}, Broken: {len(broken)}')
print(f'\nWorking IDs for use:')
for vid, desc, size in working:
    print(f'  "{vid}", // {desc}')
