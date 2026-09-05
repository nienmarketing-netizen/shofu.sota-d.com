import os

files = {
    'src/components/RegistrationForm.tsx': [
        ('0901 769 510 (Mr. Huy)', '0967 287 139')
    ],
    'src/components/Footer.tsx': [
        ('href="tel:0901769510"', 'href="tel:0967287139"'),
        ('0901769510 (Mr. Huy)', '0967 287 139')
    ]
}

for filepath, replacements in files.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
