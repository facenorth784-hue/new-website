import os
import re
import time

# Get current timestamp for versioning
version = time.strftime("%Y%m%d%H%M")

# File extensions to process
html_files = [f for f in os.listdir('.') if f.endswith('.html')]
dist_html_files = []
if os.path.exists('wellgraf-clone/dist'):
    dist_html_files = [os.path.join('wellgraf-clone/dist', f) for f in os.listdir('wellgraf-clone/dist') if f.endswith('.html')]

all_html_files = html_files + dist_html_files

# Regex to find CSS and JS links
# Examples:
# <link href="css/3-刘景源.webflow.shared.4b3a59d80.css" rel="stylesheet" type="text/css">
# <script src="js/webflow.js" type="text/javascript"></script>

css_pattern = re.compile(r'(href="[^"]+\.css)(\?[^"]*)?(")')
js_pattern = re.compile(r'(src="[^"]+\.js)(\?[^"]*)?(")')

def apply_cache_busting(file_path):
    print(f"Processing {file_path}...")
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Replace CSS links
    new_content = css_pattern.sub(r'\1?v=' + version + r'\3', content)
    # Replace JS links
    new_content = js_pattern.sub(r'\1?v=' + version + r'\3', new_content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

modified_count = 0
for file in all_html_files:
    if apply_cache_busting(file):
        modified_count += 1

print(f"Successfully updated {modified_count} files with version ?v={version}")
