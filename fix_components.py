import re
import os

components_dir = 'src/components'
files = [
    'Hero.tsx',
    'BenefitsSection.tsx',
    'ScheduleSection.tsx',
    'ValueStackSection.tsx',
    'RegistrationForm.tsx',
    'Footer.tsx'
]

for file in files:
    filepath = os.path.join(components_dir, file)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to replace `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ...">`
    # and `<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ...">`
    # with `<div className="w-[90%] md:w-[80%] max-w-7xl mx-auto relative z-10 ...">` (keep the max-w, drop the px)
    
    def replacer(match):
        original = match.group(0)
        max_w = match.group(1) # '7xl' or '4xl'
        rest = match.group(2)
        
        # We replace `max-w-{max_w} mx-auto px-4 sm:px-6 lg:px-8` with `w-[90%] md:w-[80%] max-w-{max_w} mx-auto`
        # and keep the rest. 
        # Note: some files might have `w-full max-w-full` at the end which overrides things.
        # So we should also remove `w-full max-w-full` from the inner container class if it exists.
        
        # New string
        new_class = f'w-[90%] md:w-[80%] max-w-{max_w} mx-auto {rest}'
        
        # clean up any w-full max-w-full
        new_class = new_class.replace('w-full max-w-full', '').strip()
        
        return f'<div className="{new_class}">'

    content = re.sub(r'<div className="max-w-([a-z0-9]+) mx-auto px-4 sm:px-6 lg:px-8 (.*?)">', replacer, content)

    # Footer has slightly different:
    content = re.sub(r'<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 w-full max-w-full">', 
                     '<div className="w-[90%] md:w-[80%] max-w-7xl mx-auto space-y-8 sm:space-y-10">', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Components updated successfully.")
