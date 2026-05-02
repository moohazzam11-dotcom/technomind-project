import os
import glob
import re

# Base paths
base_dir = r"c:\Users\axe\Documents\Github\TechnoMind Project"
pages_dir = os.path.join(base_dir, "pages")

# Get all HTML files
pages_files = glob.glob(os.path.join(pages_dir, "*.html"))
index_file = os.path.join(base_dir, "index.html")

all_files = pages_files + [index_file]

nav_pattern = re.compile(r'<nav class="nav-links">.*?</nav>', re.DOTALL)
menu_pattern = re.compile(r'<div class="menu-dropdown" id="mainMenu">.*?</div>', re.DOTALL)

def generate_nav(filepath):
    filename = os.path.basename(filepath)
    is_tools_hub = "tools-hub" in filename
    is_ai = "ai-simplified" in filename
    is_tools = "apps-tools" in filename
    is_contact = "contact" in filename
    is_home = filename == "index.html"
    
    # Check if we are in the root directory (index.html) or in pages/
    is_root = filename == "index.html"
    
    # Path prefixes
    prefix_pages = "pages/" if is_root else ""
    prefix_root = "" if is_root else "../"
    
    # Active style
    active_style = ' style="font-weight: bold; color: var(--color-primary);"'
    
    nav_html = '<nav class="nav-links">\n'
    nav_html += f'                <a href="{prefix_root}index.html" data-en="Home"{active_style if is_home else ""}>الرئيسية</a>\n'
    nav_html += f'                <a href="{prefix_pages}ai-simplified.html" data-en="AI Simplified"{active_style if is_ai else ""}>الذكاء الاصطناعي</a>\n'
    nav_html += f'                <a href="{prefix_pages}courses.html" data-en="Courses"{active_style if "courses.html" in filename else ""}>الدورات</a>\n'
    nav_html += f'                <a href="{prefix_pages}apps-tools.html" data-en="Tools"{active_style if is_tools else ""}>الأدوات</a>\n'
    nav_html += f'                <a href="{prefix_pages}tools-hub.html" data-en="Tools Hub"{active_style if is_tools_hub else ""}>مركز الأدوات</a>\n'
    nav_html += f'                <a href="{prefix_pages}contact.html" data-en="Contact"{active_style if is_contact else ""}>اتصل بنا</a>\n'
    nav_html += '            </nav>'
    return nav_html

def generate_menu(filepath):
    filename = os.path.basename(filepath)
    is_root = filename == "index.html"
    
    prefix_pages = "pages/" if is_root else ""
    
    menu_html = '<div class="menu-dropdown" id="mainMenu">\n'
    menu_html += f'                <a href="{prefix_pages}signup.html" class="menu-item" id="menu-login-item" data-en="Login / Sign Up">\n'
    menu_html += '                    <span>👤</span> <span class="text">تسجيل الدخول / حساب جديد</span>\n'
    menu_html += '                </a>\n'
    menu_html += f'                <a href="{prefix_pages}contact.html?subject=support" class="menu-item" data-en="Support">\n'
    menu_html += '                    <span>🛠️</span> <span class="text">الدعم الفني</span>\n'
    menu_html += '                </a>\n'
    menu_html += f'                <a href="{prefix_pages}contact.html" class="menu-item" data-en="Contact Us">\n'
    menu_html += '                    <span>📞</span> <span class="text">اتصل بنا</span>\n'
    menu_html += '                </a>\n'
    menu_html += '            </div>'
    return menu_html

count = 0
for filepath in all_files:
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    filename = os.path.basename(filepath)
    
    # Generate new blocks
    new_nav = generate_nav(filepath)
    new_menu = generate_menu(filepath)
    
    # Replace Nav
    new_content = nav_pattern.sub(new_nav, content)
    
    # Replace Menu
    new_content = menu_pattern.sub(new_menu, new_content)
    
    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filename}")
        count += 1
    else:
        print(f"No changes for {filename}")

print(f"Total updated: {count}")
