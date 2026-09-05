import os

commit = "03c66c4af6e28e2a69254e4d674c5a45ab53e988"
base_url = f"https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/{commit}/"

files = {
    'src/components/shofu/ShofuHeader.tsx': [
        ('/sota-d-logo.png', base_url + 'Sota-D%20logo%20(1).png'),
        ('/shofu-logo.png', base_url + 'Logo_Shofu%20(1).png')
    ],
    'src/components/shofu/ShofuFooter.tsx': [
        ('/sota-d-logo.png', base_url + 'Sota-D%20logo%20(1).png'),
        ('/shofu-logo.png', base_url + 'Logo_Shofu%20(1).png')
    ]
}

for filepath, replacements in files.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
