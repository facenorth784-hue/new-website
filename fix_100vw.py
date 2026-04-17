import os
import re

css_file = r"e:\trea\NEW WEBSITE\css\3-刘景源.webflow.shared.4b3a59d80.css"

with open(css_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all occurrences of 100vw with 100% when used for width
content = re.sub(r'width:\s*100vw\s*;', 'width: 100%;', content)
content = re.sub(r'max-width:\s*100vw\s*;', 'max-width: 100%;', content)

with open(css_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced 100vw with 100% in main CSS.")
