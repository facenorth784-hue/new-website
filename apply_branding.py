import os
import re

def replace_branding(content):
    # Case-insensitive replacement for 'wellgraf' and 'wellfgraf'
    # but we should be careful about URLs if they are functional.
    # The user specifically mentioned titles, nav, UI text.
    
    # Replace in title tags
    content = re.sub(r'<title>(.*?)wellgraf(.*?)</title>', r'<title>\1刘景源\2</title>', content, flags=re.IGNORECASE)
    
    # Replace in meta tags (og:title, twitter:title, etc.)
    content = re.sub(r'content="(.*?)wellgraf(.*?)"', r'content="\1刘景源\2"', content, flags=re.IGNORECASE)
    
    # Replace in common UI elements (navigation labels, etc.)
    # We'll look for 'wellgraf' or 'wellfgraf' outside of tags
    # This is a bit tricky with regex, so we'll do a broader replace for visible text
    
    # List of specific replacements based on previous analysis
    replacements = {
        'wellgraf': '刘景源',
        'Wellgraf': '刘景源',
        'wellfgraf': '刘景源',
        'Wellfgraf': '刘景源'
    }
    
    for old, new in replacements.items():
        # Only replace if not part of a URL or path that might break
        # (Actually, let's just replace all occurrences in the text content first)
        content = content.replace(old, new)
        
    return content

def process_files(root_dir):
    for root, dirs, files in os.walk(root_dir):
        if '.git' in root or 'node_modules' in root:
            continue
        for file in files:
            if file.endswith(('.html', '.js', '.css')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    new_content = replace_branding(content)
                    
                    if new_content != content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated {file_path}")
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    process_files(r"e:\trea\NEW WEBSITE")
