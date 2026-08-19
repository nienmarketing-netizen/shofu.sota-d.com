import re
import os

files = {
    'src/components/Hero.tsx': 'bg-slate-50',
    'src/components/BenefitsSection.tsx': 'bg-slate-100',
    'src/components/ScheduleSection.tsx': 'bg-slate-50',
    'src/components/ValueStackSection.tsx': 'bg-slate-100',
    'src/components/RegistrationForm.tsx': 'bg-slate-50'
}

for filepath, new_bg in files.items():
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Remove any existing bg-white, bg-slate-50, bg-slate-100 from the section tag
    # Find the main section tag
    match = re.search(r'(<section[^>]*?className=")([^"]*)(")', content)
    if match:
        classes = match.group(2)
        # Remove old bg classes
        classes = re.sub(r'\bbg-white\b', '', classes)
        classes = re.sub(r'\bbg-slate-50\b', '', classes)
        classes = re.sub(r'\bbg-slate-100\b', '', classes)
        
        # Add new bg class
        classes = f"{classes.strip()} {new_bg}"
        # Cleanup multiple spaces
        classes = re.sub(r'\s+', ' ', classes)
        
        content = content[:match.start()] + f'{match.group(1)}{classes}{match.group(3)}' + content[match.end():]
        
    with open(filepath, 'w') as f:
        f.write(content)

# We should also ensure the body background is slate-50 instead of white, just in case
