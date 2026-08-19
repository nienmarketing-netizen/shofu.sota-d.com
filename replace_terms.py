import os
import re

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Case insensitive replacements
    content = re.sub(r'(?i)booth Sota-D', 'gian hàng Sota-D', content)
    content = re.sub(r'(?i)quầy Sota-D', 'gian hàng Sota-D', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

directory = 'src/'
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            replace_in_file(os.path.join(root, file))

print("Replacement complete.")
