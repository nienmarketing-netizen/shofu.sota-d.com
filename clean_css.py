import re

with open('src/index.css', 'r') as f:
    content = f.read()

# Remove glow blocks
content = re.sub(r'/\* Glow Effects \*/.*?/\* Glassmorphism Cards \*/', '/* Glassmorphism Cards */', content, flags=re.DOTALL)
content = re.sub(r'@keyframes pulseGlow.*?\}', '', content, flags=re.DOTALL)
content = re.sub(r'\.animate-pulse-glow.*?\}', '', content, flags=re.DOTALL)

with open('src/index.css', 'w') as f:
    f.write(content)
