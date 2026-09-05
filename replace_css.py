import os

with open('src/index.css', 'r') as f:
    content = f.read()

content = content.replace('background: rgba(8, 14, 26, 0.85);', 'background: rgba(255, 255, 255, 0.85);')
content = content.replace('background: #050811;', 'background: #F1F5F9;')
content = content.replace('background: #1E293B;', 'background: #CBD5E1;')

with open('src/index.css', 'w') as f:
    f.write(content)
