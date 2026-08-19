import re

with open('src/components/BenefitsSection.tsx', 'r') as f:
    content = f.read()

target = 'className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 uppercase tracking-tight"'
replacement = 'className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 uppercase tracking-tight leading-snug sm:leading-[1.3]"'

content = content.replace(target, replacement)

with open('src/components/BenefitsSection.tsx', 'w') as f:
    f.write(content)
