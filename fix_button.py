import re

with open('src/components/ui/Button.tsx', 'r') as f:
    content = f.read()

content = re.sub(r'bg-gradient-to-r from-\[[^\]]+\] to-\[[^\]]+\]', 'bg-[#C43838]', content)
content = re.sub(r'shadow-\[0_0_20px_[^\]]+\]', 'shadow-sm', content)
content = re.sub(r'hover:shadow-\[0_0_30px_[^\]]+\]', 'hover:shadow-md', content)

with open('src/components/ui/Button.tsx', 'w') as f:
    f.write(content)
