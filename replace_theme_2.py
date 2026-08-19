import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Common dark mode hex colors
    content = content.replace('text-[#94A3B8]', 'text-slate-500')
    content = content.replace('text-[#CBD5E1]', 'text-slate-600')
    content = content.replace('text-[#FF5252]', 'text-[#C43838]')
    
    # Backgrounds and borders
    content = content.replace('bg-[#00ADEF]/20', 'bg-sky-100')
    content = content.replace('bg-[#00ADEF]/10', 'bg-sky-50')
    content = content.replace('border-[#00ADEF]/30', 'border-sky-200')
    content = content.replace('border-[#00ADEF]/40', 'border-sky-300')
    
    content = content.replace('bg-[#C43838]/20', 'bg-red-100')
    content = content.replace('bg-[#C43838]/10', 'bg-red-50')
    content = content.replace('border-[#C43838]/30', 'border-red-200')
    content = content.replace('border-[#C43838]/40', 'border-red-300')

    content = content.replace('bg-[#FFD600]/20', 'bg-amber-100')
    content = content.replace('bg-[#FFD600]/10', 'bg-amber-50')
    content = content.replace('border-[#FFD600]/30', 'border-amber-200')
    content = content.replace('border-[#FFD600]/40', 'border-amber-300')
    content = content.replace('text-[#FFD600]', 'text-amber-600')

    # text-slate-900 text-white
    content = content.replace('text-slate-900 text-white', 'text-white')
    
    # fix button text colors specifically
    content = re.sub(r'icon=\{<([^>]+)text-slate-900', r'icon={<div\g<1>text-white', content)
    
    # general white backgrounds for cards if any are still dark
    content = content.replace('bg-slate-950/50', 'bg-slate-50/50')
    content = content.replace('bg-slate-950/40', 'bg-slate-50')
    content = content.replace('bg-[#0F172A]', 'bg-white')
    content = content.replace('bg-slate-900/80', 'bg-white')
    content = content.replace('bg-slate-950', 'bg-slate-900')
    
    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))

