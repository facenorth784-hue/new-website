import os

def fix_content(content):
    try:
        # The content was likely UTF-8 but read/written as GBK
        # Strategy: string -> encode as utf-8 (current state on disk) -> decode as utf-8 (already done by open)
        # Actually, if the string in Python is '鍒樻櫙婧?', it means it was read as UTF-8.
        # To get back the original bytes: encode as GBK.
        original_bytes = content.encode('gbk', errors='ignore')
        # Then decode those bytes as UTF-8.
        fixed_content = original_bytes.decode('utf-8', errors='ignore')
        return fixed_content
    except Exception as e:
        return content

def process_files(root_dir):
    for root, dirs, files in os.walk(root_dir):
        if '.git' in root or 'node_modules' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                print(f"Processing {file_path}...")
                
                # Read as UTF-8
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Check if it looks garbled (contains typical garbled characters)
                    if '鍒' in content or '棣' in content or '宸' in content:
                        fixed = fix_content(content)
                        if fixed != content:
                            with open(file_path, 'w', encoding='utf-8') as f:
                                f.write(fixed)
                            print(f"  Fixed encoding for {file}")
                except Exception as e:
                    print(f"  Error processing {file}: {e}")

if __name__ == "__main__":
    process_files(r"e:\trea\NEW WEBSITE")
