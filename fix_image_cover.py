import re

filepath = 'src/components/BenefitsSection.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the padding and flex classes from the image wrapper to let the image fill it
content = content.replace('w-full aspect-[4/3] bg-slate-50 rounded-lg mb-3 overflow-hidden border border-slate-100 p-2 flex items-center justify-center',
                          'w-full aspect-[4/3] bg-slate-100 rounded-lg mb-3 overflow-hidden border border-slate-200')

# Change object-contain to object-cover so it fills the whole box without empty space
content = content.replace('className="w-full h-full object-contain"', 'className="w-full h-full object-cover"')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
