import re

filepath = 'src/components/BenefitsSection.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the fixed aspect ratio
content = content.replace('w-full aspect-[4/3] bg-slate-100 rounded-lg mb-3 overflow-hidden border border-slate-200',
                          'w-full bg-slate-100 rounded-lg mb-3 overflow-hidden border border-slate-200')

# Change the image classes to allow natural height
content = content.replace('className="w-full h-full object-cover"', 'className="w-full h-auto object-contain"')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
