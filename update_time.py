import glob
import re

for filepath in glob.glob('src/components/*.tsx'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # "10:00 - 11:30" or "10:00 – 11:30"
    new_content = re.sub(r'10:00\s*[-–]\s*11:30', '10:30 - 11:15', content)
    # "10:00 & Chiều"
    new_content = re.sub(r'10:00\s*&\s*Chiều', '10:30 & Chiều', new_content)
    
    if new_content != content:
        print(f"Updated {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
