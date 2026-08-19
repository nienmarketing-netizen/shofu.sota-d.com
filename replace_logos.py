filepath = 'src/components/Hero.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_sota = "https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/Sota-D%20logo%20(1).png"
old_shofu = "https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/Logo_Shofu%20(1).png"

content = content.replace(old_sota, "/sota-d-logo.png")
content = content.replace(old_shofu, "/shofu-logo.png")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
