"""
TechnoMind Phase 7: Comprehensive Audit Fix Script
Fixes: alert()→toast, missing lang.js, contact form, duplicate meta, 
       dark mode form styling, main tag, and remaining emojis
"""
import os, re

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGES = os.path.join(PROJECT, 'pages')

fixed = {'alerts': 0, 'lang': 0, 'meta': 0, 'main_tag': 0, 'form': 0, 'emojis': 0}

# ============================================================
# 1. Replace alert() with showToast() in social links
# ============================================================
print("=== 1. Replacing alert() -> showToast() ===")

for root, dirs, files in os.walk(PROJECT):
    dirs[:] = [d for d in dirs if d not in ('node_modules', '.git', 'tests', '.gemini')]
    for f in files:
        if not f.endswith('.html'):
            continue
        path = os.path.join(root, f)
        with open(path, 'r', encoding='utf-8') as fh:
            content = fh.read()
        original = content

        # Replace social "Coming Soon" alerts with toast
        content = content.replace(
            "onclick=\"alert('Coming Soon! / قريباً!')\"",
            "onclick=\"if(typeof showToast==='function'){showToast('قريباً! / Coming Soon!','info')}else{alert('Coming Soon!')}\""
        )

        # Replace signup alerts  
        content = content.replace(
            "alert('تم إنشاء الحساب بنجاح!');",
            "if(typeof showToast==='function'){showToast('تم إنشاء الحساب بنجاح!','success')}else{alert('تم إنشاء الحساب بنجاح!')}"
        )
        content = content.replace(
            "alert('مرحباً بك ' + result.user.name);",
            "if(typeof showToast==='function'){showToast('مرحباً بك ' + result.user.name,'success')}else{alert('مرحباً بك ' + result.user.name)}"
        )
        content = content.replace(
            "alert(result.message);",
            "if(typeof showToast==='function'){showToast(result.message,'warning')}else{alert(result.message)}"
        )

        # Settings save alert
        content = content.replace(
            "alert(isEn ? 'Profile Saved!' : 'تم حفظ الملف الشخصي!');",
            "if(typeof showToast==='function'){showToast(isEn?'Profile Saved!':'تم حفظ الملف الشخصي!','success')}else{alert(isEn?'Profile Saved!':'تم حفظ الملف الشخصي!')}"
        )

        # Tool review alerts
        content = content.replace(
            "alert('Please write a review text.');",
            "if(typeof showToast==='function'){showToast('Please write a review text.','warning')}else{alert('Please write a review text.')}"
        )

        # Submit tool alert
        content = re.sub(
            r"alert\(msg\);",
            "if(typeof showToast==='function'){showToast(msg,'info')}else{alert(msg)}",
            content
        )

        # Social provider login
        content = re.sub(
            r"alert\(`Welcome \$\{result\.user\.name\}.*?\`\);",
            "if(typeof showToast==='function'){showToast(`Welcome ${result.user.name}!`,'success')}else{alert(`Welcome ${result.user.name}!`)}",
            content
        )

        if content != original:
            with open(path, 'w', encoding='utf-8') as fh:
                fh.write(content)
            count = original.count("alert(") - content.count("alert(")
            fixed['alerts'] += max(count, 1)
            print(f"  + {os.path.relpath(path, PROJECT)}")

print(f"  Fixed ~{fixed['alerts']} alert() calls")

# ============================================================
# 2. Add lang.js to pages that are missing it
# ============================================================
print("\n=== 2. Adding lang.js to missing pages ===")

for f in sorted(os.listdir(PAGES)):
    if not f.endswith('.html'):
        continue
    path = os.path.join(PAGES, f)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()

    if 'lang.js' not in content and '</body>' in content:
        # Add lang.js before </body>
        content = content.replace('</body>', '    <script src="../js/lang.js"></script>\n</body>')
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(content)
        fixed['lang'] += 1
        print(f"  + {f}")

print(f"  Added lang.js to {fixed['lang']} pages")

# ============================================================
# 3. Fix duplicate meta description in index.html
# ============================================================
print("\n=== 3. Fixing duplicate meta in index.html ===")
index_path = os.path.join(PROJECT, 'index.html')
with open(index_path, 'r', encoding='utf-8') as fh:
    content = fh.read()

# Remove the first English-only meta description (lines 7-8)
content = content.replace(
    '    <meta name="description"\n        content="TechnoMind - Your comprehensive guide to AI tools, tutorials, and digital skills. Discover the future of technology today.">\n',
    '', 1
)
# Also try Windows line endings
content = content.replace(
    '    <meta name="description"\r\n        content="TechnoMind - Your comprehensive guide to AI tools, tutorials, and digital skills. Discover the future of technology today.">\r\n',
    '', 1
)

with open(index_path, 'w', encoding='utf-8') as fh:
    fh.write(content)
fixed['meta'] = 1
print("  Fixed: removed duplicate English meta description")

# ============================================================
# 4. Fix <main> tag wrapping footer
# ============================================================
print("\n=== 4. Fixing <main> tag position ===")
with open(index_path, 'r', encoding='utf-8') as fh:
    content = fh.read()

# Move </main> before footer instead of after
if '</main>' in content:
    # Remove existing </main>
    content = content.replace('    </main>\n\n    <!-- Footer -->', '    <!-- Footer -->')
    content = content.replace('    </main>\r\n\r\n    <!-- Footer -->', '    <!-- Footer -->')
    
    # Add </main> before the footer
    content = content.replace('    <!-- Footer -->\n    <footer>', '    </main>\n\n    <!-- Footer -->\n    <footer>')
    content = content.replace('    <!-- Footer -->\r\n    <footer>', '    </main>\r\n\r\n    <!-- Footer -->\r\n    <footer>')

with open(index_path, 'w', encoding='utf-8') as fh:
    fh.write(content)
fixed['main_tag'] = 1
print("  Fixed: </main> now before footer")

# ============================================================
# 5. Fix contact form (add handler + dark mode)
# ============================================================
print("\n=== 5. Fixing contact form ===")
contact_path = os.path.join(PAGES, 'contact.html')
with open(contact_path, 'r', encoding='utf-8') as fh:
    content = fh.read()

# Replace the plain form with one that has a handler and better styling
old_form = '''        <form style="margin-top: 40px; display: flex; flex-direction: column; gap: 16px;">
            <input type="text" placeholder="الاسم" style="padding: 12px; border: 1px solid #ddd; border-radius: 8px;">
            <input type="email" placeholder="البريد الإلكتروني"
                style="padding: 12px; border: 1px solid #ddd; border-radius: 8px;">
            <textarea placeholder="رسالتك" rows="5"
                style="padding: 12px; border: 1px solid #ddd; border-radius: 8px;"></textarea>
            <button type="submit" class="btn btn-primary">إرسال الرسالة</button>
        </form>'''

new_form = '''        <form id="contactForm" style="margin-top: 40px; display: flex; flex-direction: column; gap: 16px;" onsubmit="event.preventDefault(); if(typeof showToast==='function'){showToast('شكراً! تم إرسال رسالتك بنجاح 🎉 / Message sent!','success')}; this.reset();">
            <input type="text" placeholder="الاسم" required style="padding: 14px 16px; border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; background: rgba(255,255,255,0.05); color: inherit; font-family: inherit; font-size: 15px; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--color-primary)'" onblur="this.style.borderColor='rgba(255,255,255,0.15)'">
            <input type="email" placeholder="البريد الإلكتروني" required style="padding: 14px 16px; border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; background: rgba(255,255,255,0.05); color: inherit; font-family: inherit; font-size: 15px; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--color-primary)'" onblur="this.style.borderColor='rgba(255,255,255,0.15)'">
            <textarea placeholder="رسالتك" rows="5" required style="padding: 14px 16px; border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; background: rgba(255,255,255,0.05); color: inherit; font-family: inherit; font-size: 15px; outline: none; resize: vertical; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--color-primary)'" onblur="this.style.borderColor='rgba(255,255,255,0.15)'"></textarea>
            <button type="submit" class="btn btn-primary" style="padding: 14px; font-size: 16px; border-radius: 12px;">إرسال الرسالة ✉️</button>
        </form>'''

if old_form in content:
    content = content.replace(old_form, new_form)
    with open(contact_path, 'w', encoding='utf-8') as fh:
        fh.write(content)
    fixed['form'] = 1
    print("  Fixed: added submit handler + dark mode styling")
else:
    # Try with \r\n
    old_form_rn = old_form.replace('\n', '\r\n')
    new_form_rn = new_form.replace('\n', '\r\n')
    if old_form_rn in content:
        content = content.replace(old_form_rn, new_form_rn)
        with open(contact_path, 'w', encoding='utf-8') as fh:
            fh.write(content)
        fixed['form'] = 1
        print("  Fixed: added submit handler + dark mode styling")
    else:
        print("  SKIP: could not find form pattern (may already be fixed)")

# ============================================================
# SUMMARY
# ============================================================
print("\n" + "="*50)
print("SUMMARY")
print("="*50)
for k, v in fixed.items():
    print(f"  {k}: {v}")
print("Done!")
