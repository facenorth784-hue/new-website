import os

def rename_assets(root_dir):
    # Walk from bottom up to handle nested renames correctly
    for root, dirs, files in os.walk(root_dir, topdown=False):
        if '.git' in root:
            continue
            
        # Rename files
        for name in files:
            if 'wellgraf' in name.lower() or 'wellfgraf' in name.lower():
                old_path = os.path.join(root, name)
                # Simple replacement for demonstration
                new_name = name.replace('wellgraf', '刘景源').replace('Wellgraf', '刘景源').replace('wellfgraf', '刘景源').replace('Wellfgraf', '刘景源')
                new_path = os.path.join(root, new_name)
                
                if old_path != new_path:
                    try:
                        if os.path.exists(new_path):
                            os.remove(old_path)
                            print(f"Removed old asset {old_path} (new one already exists)")
                        else:
                            os.rename(old_path, new_path)
                            print(f"Renamed file: {old_path} -> {new_path}")
                    except Exception as e:
                        print(f"Error renaming file {old_path}: {e}")

        # Rename directories
        for name in dirs:
            if 'wellgraf' in name.lower() or 'wellfgraf' in name.lower():
                old_path = os.path.join(root, name)
                new_name = name.replace('wellgraf', '刘景源').replace('Wellgraf', '刘景源').replace('wellfgraf', '刘景源').replace('Wellfgraf', '刘景源')
                new_path = os.path.join(root, new_name)
                
                if old_path != new_path:
                    try:
                        if os.path.exists(new_path):
                            print(f"Warning: directory {new_path} already exists. Merging not implemented.")
                        else:
                            os.rename(old_path, new_path)
                            print(f"Renamed dir: {old_path} -> {new_path}")
                    except Exception as e:
                        print(f"Error renaming dir {old_path}: {e}")

if __name__ == "__main__":
    rename_assets(r"e:\trea\NEW WEBSITE")
