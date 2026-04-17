import os
import re

# Common mojibake characters found in UTF-8-as-GBK scenarios
MOJIBAKE_REGEX = re.compile(r'[\u4e00-\u9fa5]{2,}') # Look for CJK sequences

def is_mojibake(text):
    # Common mojibake signatures
    signatures = [
        '鍒樻櫙婧', '绠€浣', '棣栭', '宸ヤ綔', '鍏充簬', '鑱旂郴', 
        '鏇挎崲', '绉诲姩', '鎸夐挳', '瀹氫綅', '閬垮厤'
    ]
    return any(sig in text for sig in signatures)

def try_fix_mojibake(text):
    if not is_mojibake(text):
        return text
    
    try:
        # Step 1: Encode as GBK to get raw bytes (undoing the incorrect interpretation)
        raw_bytes = text.encode('gbk', errors='ignore')
        # Step 2: Decode as UTF-8 (the correct way)
        fixed = raw_bytes.decode('utf-8')
        
        # Verify if fixed text contains meaningful Chinese
        if '刘景源' in fixed or '首页' in fixed or '工作' in fixed or '关于' in fixed or '移动' in fixed:
            return fixed
    except:
        pass
    
    # Manual fallback for specific persistent strings
    replacements = {
        '鍒樻櫙婧?': '刘景源',
        '绠€浣撲腑鏂?': '简体中文',
        '姝ｉ珨涓枃': '正體中文',
        '棣栭〉': '首页',
        '宸ヤ綔': '工作',
        '鍏充簬鎴?': '关于我',
        '鑱旂郴鎴?': '联系我',
        '鏇挎崲鍥哄畾瀹氫綅涓虹浉瀵瑰畾浣嶏紝閬垮厤绉诲姩绔伄鎸?': '替换固定定位为相对定位，避免移动端遮挡',
        '绉诲姩绔Е鎺т紭鍖栵細鎸夐挳鏈€灏忓昂瀵?44x44px 鍙婇棿璺濆寮?': '移动端触控优化：按钮最小尺寸 44x44px 及间距增强'
    }
    
    new_text = text
    for old, new in replacements.items():
        new_text = new_text.replace(old, new)
    
    return new_text

def scan_and_fix(root_dir):
    results = []
    for root, dirs, files in os.walk(root_dir):
        if any(x in root for x in ['.git', 'node_modules', '.vscode']):
            continue
            
        for file in files:
            if file.endswith(('.html', '.js', '.css', '.json')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    fixed_content = try_fix_mojibake(content)
                    
                    if fixed_content != content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(fixed_content)
                        results.append(file_path)
                        print(f"Fixed: {file_path}")
                except Exception as e:
                    # Try GBK if UTF-8 fails
                    try:
                        with open(file_path, 'r', encoding='gbk') as f:
                            content = f.read()
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        results.append(file_path)
                        print(f"Converted GBK->UTF-8: {file_path}")
                    except:
                        print(f"Failed to process: {file_path}")
    return results

if __name__ == "__main__":
    target_dir = r"e:\trea\NEW WEBSITE"
    fixed_files = scan_and_fix(target_dir)
    if not fixed_files:
        print("No mojibake found.")
    else:
        print(f"Total fixed files: {len(fixed_files)}")
