import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace arbitrary glowing shadows in tailwind classes
    content = re.sub(r'shadow-\[0_0_[^\]]+\]', 'shadow-sm', content)
    content = re.sub(r'hover:shadow-\[0_0_[^\]]+\]', 'hover:shadow-md', content)
    
    # Remove custom glow classes
    content = content.replace('red-glow-lg', '')
    content = content.replace('red-glow', '')
    content = content.replace('cyan-glow-lg', '')
    content = content.replace('cyan-glow', '')
    content = content.replace('orange-glow-lg', '')
    content = content.replace('orange-glow', '')
    content = content.replace('gold-glow', '')
    content = content.replace('animate-pulse-glow', '')
    
    # Clean up double spaces that might be left over
    content = content.replace('  ', ' ')

    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))

