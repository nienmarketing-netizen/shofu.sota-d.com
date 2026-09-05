import os
import re

def add_grid_pattern(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to add bg-grid-pattern to the main <section> element of each file.
    # Usually it's something like <section id="..." className="... bg-slate-100">
    # We will look for <section and then insert bg-grid-pattern into its className if not present.
    
    # Simple regex substitution for className="..." inside <section>
    def replacer(match):
        class_content = match.group(1)
        if 'bg-grid-pattern' not in class_content:
            return f'className="{class_content} bg-grid-pattern"'
        return match.group(0)

    # Find <section ... className="..."
    new_content = re.sub(r'className="([^"]*bg-slate-[12]00[^"]*)"', replacer, content, count=1)
    
    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

files_to_update = [
    'src/components/Hero.tsx',
    'src/components/BenefitsSection.tsx',
    'src/components/ScheduleSection.tsx',
    'src/components/ValueStackSection.tsx',
    'src/components/RegistrationForm.tsx',
    'src/components/Footer.tsx'
]

for f in files_to_update:
    if os.path.exists(f):
        add_grid_pattern(f)

print("Grid pattern classes added.")
