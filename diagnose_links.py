import os
import re
from html.parser import HTMLParser
from urllib.parse import unquote

class ResourceChecker(HTMLParser):
    def __init__(self, base_dir, html_file):
        super().__init__()
        self.base_dir = base_dir
        self.html_file = html_file
        self.errors = []
        self.current_file_dir = os.path.dirname(html_file)

    def handle_starttag(self, tag, attrs):
        attr_map = dict(attrs)
        src = attr_map.get('src') or attr_map.get('href') or attr_map.get('data-src')
        
        if src and not src.startswith(('http', 'https', 'data:', '#')):
            # Clean up the path (remove query strings like ?v=...)
            clean_path = src.split('?')[0]
            # Decode URL encoding (e.g., %20 to space)
            clean_path = unquote(clean_path)
            
            # Resolve relative path
            full_path = os.path.normpath(os.path.join(self.current_file_dir, clean_path))
            
            if not os.path.exists(full_path):
                self.errors.append({
                    'tag': tag,
                    'attr': 'src' if 'src' in attr_map else 'href',
                    'value': src,
                    'resolved_path': full_path,
                    'file': self.html_file
                })

def scan_project(root_dir):
    all_errors = []
    for root, dirs, files in os.walk(root_dir):
        if 'node_modules' in root or '.git' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    checker = ResourceChecker(root_dir, file_path)
                    checker.feed(content)
                    
                    # Also check for url() in style tags or attributes
                    style_urls = re.findall(r'url\([\'"]?([^\'"]+)[\'"]?\)', content)
                    for url in style_urls:
                        if not url.startswith(('http', 'https', 'data:', '#')):
                            clean_path = url.split('?')[0]
                            clean_path = unquote(clean_path)
                            full_path = os.path.normpath(os.path.join(os.path.dirname(file_path), clean_path))
                            if not os.path.exists(full_path):
                                checker.errors.append({
                                    'tag': 'style/url',
                                    'attr': 'url',
                                    'value': url,
                                    'resolved_path': full_path,
                                    'file': file_path
                                })
                    
                    all_errors.extend(checker.errors)
    return all_errors

if __name__ == "__main__":
    root = r"e:\trea\NEW WEBSITE"
    errors = scan_project(root)
    if errors:
        print(f"Found {len(errors)} broken references:")
        for err in errors:
            print(f"File: {err['file']}")
            print(f"  Tag: <{err['tag']}> {err['attr']}='{err['value']}'")
            print(f"  Expected Path: {err['resolved_path']}")
            print("-" * 40)
    else:
        print("No broken references found!")
