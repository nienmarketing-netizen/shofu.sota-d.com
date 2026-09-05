import re

filepath = 'src/components/BenefitsSection.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace aspect-square with aspect-video and add padding/flex
content = content.replace('w-full aspect-square bg-slate-50 rounded-lg mb-3 overflow-hidden border border-slate-100',
                          'w-full aspect-[4/3] bg-slate-50 rounded-lg mb-3 overflow-hidden border border-slate-100 p-2 flex items-center justify-center')

# Replace object-cover with object-contain for the showcase strip images
# We'll use a regex to be safe, but simple replace might work if we only target those images
content = content.replace('className="w-full h-full object-cover"', 'className="w-full h-full object-contain"')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
