import os
import re

css_path = 'src/index.css'
with open(css_path, 'r') as f:
    css = f.read()

# Make all custom gradient classes solid colors
css = re.sub(r'\.sota-gradient\s*\{[^}]*\}', '.sota-gradient { background: #C43838; }', css, flags=re.DOTALL)
css = re.sub(r'\.shofu-gradient\s*\{[^}]*\}', '.shofu-gradient { background: #00ADEF; }', css, flags=re.DOTALL)
css = re.sub(r'\.sota-shofu-gradient\s*\{[^}]*\}', '.sota-shofu-gradient { background: #00ADEF; }', css, flags=re.DOTALL)
css = re.sub(r'\.text-gradient\s*\{[^}]*\}', '.text-gradient { color: #00ADEF; }', css, flags=re.DOTALL)

with open(css_path, 'w') as f:
    f.write(css)

def simplify_tsx(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace all green/emerald with sky (Blue)
    content = re.sub(r'emerald-[0-9]+', 'sky-500', content)
    content = re.sub(r'green-[0-9]+', 'sky-500', content)
    
    # Replace all amber/yellow/orange with slate (Neutral) or red
    content = re.sub(r'amber-[0-9]+', 'slate-200', content)
    content = re.sub(r'yellow-[0-9]+', 'slate-200', content)
    content = re.sub(r'orange-[0-9]+', 'red-500', content)
    
    # Replace random hex codes that are not brand colors
    # We'll just force the few known bad ones to standard tailwind
    content = content.replace('bg-[#FFD600]/10', 'bg-slate-50')
    content = content.replace('text-[#FFD600]', 'text-slate-800')
    content = content.replace('border-[#FFD600]/30', 'border-slate-200')
    
    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            simplify_tsx(os.path.join(root, file))

