import re

filepath = 'src/components/Hero.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('src="/sota-d-logo.png"', 'src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/Sota-D%20logo%20(1).png"')
content = content.replace('src="/shofu-logo.png"', 'src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/Logo_Shofu%20(1).png"')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
