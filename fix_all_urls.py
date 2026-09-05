import os

commit = "03c66c4af6e28e2a69254e4d674c5a45ab53e988"
base_url = f"https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/{commit}/"

files = {
    'src/components/Hero.tsx': [
        ('/sota-d-logo.png', base_url + 'Sota-D%20logo%20(1).png'),
        ('/shofu-logo.png', base_url + 'Logo_Shofu%20(1).png')
    ],
    'src/components/BenefitsSection.tsx': [
        ('/beautifil-injectable-x.png', base_url + 'beautifil-injectable-x.png'),
        ('/beautibond-xtreme.png', base_url + 'beautibond-xtreme.png'),
        ('/beautilink-sa.png', base_url + 'BeautilinkSA.png'),
        ('/s-prg.png', base_url + 'S-PRG.png')
    ],
    'src/components/ScheduleSection.tsx': [
        ('/bs-ngoc.png', base_url + 'BS.Ngo%CC%A3c.png'),
        ('/bs-khanh.png', base_url + 'BS%20Kha%CC%81nh.png')
    ]
}

for filepath, replacements in files.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
