import re
import os

files = {
    'src/components/Hero.tsx': 'bg-slate-100',
    'src/components/BenefitsSection.tsx': 'bg-slate-200',
    'src/components/ScheduleSection.tsx': 'bg-slate-100',
    'src/components/ValueStackSection.tsx': 'bg-slate-200',
    'src/components/RegistrationForm.tsx': 'bg-slate-100'
}

for filepath, new_bg in files.items():
    with open(filepath, 'r') as f:
        content = f.read()
    
    match = re.search(r'(<section[^>]*?className=")([^"]*)(")', content)
    if match:
        classes = match.group(2)
        classes = re.sub(r'\bbg-slate-50\b', '', classes)
        classes = re.sub(r'\bbg-slate-100\b', '', classes)
        classes = re.sub(r'\bbg-slate-200\b', '', classes)
        
        classes = f"{classes.strip()} {new_bg}"
        classes = re.sub(r'\s+', ' ', classes)
        
        content = content[:match.start()] + f'{match.group(1)}{classes}{match.group(3)}' + content[match.end():]
        
    with open(filepath, 'w') as f:
        f.write(content)

