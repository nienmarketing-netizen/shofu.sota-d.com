import os

files = {
    'src/components/Hero.tsx': [
        ('https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/Sota-D%20logo%20(1).png', '/sota-d-logo.png'),
        ('https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/Logo_Shofu%20(1).png', '/shofu-logo.png')
    ],
    'src/components/BenefitsSection.tsx': [
        ('https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/beautifil-injectable-x.png', '/beautifil-injectable-x.png'),
        ('https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/beautibond-xtreme.png', '/beautibond-xtreme.png'),
        ('https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BeautilinkSA.png', '/beautilink-sa.png'),
        ('https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/S-PRG.png', '/s-prg.png')
    ],
    'src/components/ScheduleSection.tsx': [
        ('https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BS.Ngo%CC%A3c.png', '/bs-ngoc.png'),
        ('https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BS%20Kha%CC%81nh.png', '/bs-khanh.png')
    ]
}

for filepath, replacements in files.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
