import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # App.tsx
    content = content.replace('bg-[#030304]', 'bg-white')
    content = content.replace('text-white', 'text-slate-900')
    content = content.replace('selection:bg-[#F7931A]/30', 'selection:bg-sky-200')
    content = content.replace('selection:text-[#FFD600]', 'selection:text-sky-900')

    # text colors
    content = content.replace('text-gray-100', 'text-slate-900')
    content = content.replace('text-gray-200', 'text-slate-800')
    content = content.replace('text-gray-300', 'text-slate-700')
    content = content.replace('text-gray-400', 'text-slate-600')
    content = content.replace('text-slate-300', 'text-slate-700')
    content = content.replace('text-slate-400', 'text-slate-600')
    
    # borders
    content = content.replace('border-white/10', 'border-slate-200')
    content = content.replace('border-white/20', 'border-slate-300')
    content = content.replace('border-white/5', 'border-slate-100')
    
    # backgrounds
    content = content.replace('bg-[#050811]', 'bg-slate-50')
    content = content.replace('bg-[#0A0F1D]', 'bg-white')
    content = content.replace('bg-white/5', 'bg-slate-50')
    content = content.replace('bg-white/10', 'bg-slate-100')
    content = content.replace('bg-white/20', 'bg-slate-200')
    
    # specific fix for buttons that need white text
    content = re.sub(r'(shofu-gradient|sota-gradient|sota-shofu-gradient|bg-gradient-[^\s]+)[^>]*?text-slate-900', r'\g<0> text-white', content)
    
    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))

