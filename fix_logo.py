import os
import shutil
import glob

# Paths
source_logo = r"C:\Users\axe\.gemini\antigravity\brain\184a67b9-df41-4f61-ab9e-2a4e252d69e8\technomind_logo_neon_monogram_1768954188482.png"
dest_logo = r"c:\Users\axe\Documents\Github\TechnoMind Project\images\logo.png"

# 1. Move/Copy Logo
try:
    shutil.copy2(source_logo, dest_logo)
    print(f"Success: Copied logo to {dest_logo}")
except Exception as e:
    print(f"Error copying logo: {e}")

# 2. Update HTML Files
project_root = r"c:\Users\axe\Documents\Github\TechnoMind Project"
old_src_snippet = "technomind_logo_neon_monogram_1768954188482.png"
# The full path in HTML is file:///C:/Users/axe/.gemini/antigravity/brain/184a67b9-df41-4f61-ab9e-2a4e252d69e8/technomind_logo_neon_monogram_1768954188482.png
# We will search for the specific filename and replace the whole src attribute or just the line.
# Better to be precise.

html_files = glob.glob(os.path.join(project_root, "*.html")) + glob.glob(os.path.join(project_root, "pages", "*.html"))

for filepath in html_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Determine relative path
        is_root = os.path.dirname(filepath) == project_root
        new_src = "images/logo.png" if is_root else "../images/logo.png"
        
        # Regex or simple string replace?
        # The line usually looks like: <img src="file:///..." alt="TechnoMind" ...>
        # Let's find the long absolute path string.
        # It starts with file:/// and ends with .png
        
        # Construct the target string to replace
        # We can just match the filename since it's unique enough?
        # Or match "file:///C:/Users/axe/.gemini/antigravity/brain/184a67b9-df41-4f61-ab9e-2a4e252d69e8/technomind_logo_neon_monogram_1768954188482.png"
        target_string = "file:///C:/Users/axe/.gemini/antigravity/brain/184a67b9-df41-4f61-ab9e-2a4e252d69e8/technomind_logo_neon_monogram_1768954188482.png"
        
        if target_string in content:
            new_content = content.replace(target_string, new_src)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(filepath)}")
            
    except Exception as e:
        print(f"Error updating {filepath}: {e}")
