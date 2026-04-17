import os
import re

html_file = r"e:\trea\NEW WEBSITE\p刘景源.html"

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix fixed widths that break small screens
content = content.replace('babybear:w-[360px]', 'babybear:w-full')
content = content.replace('min-w-[360px]', 'min-w-full')
content = content.replace('babybear:max-w-[350px]', 'babybear:max-w-full')
content = content.replace('mamabear:max-w-[360px]', 'mamabear:max-w-full')
content = content.replace('papabear:max-w-[365px]', 'papabear:max-w-full')

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed fixed widths in p刘景源.html")
