import re

filepath = 'src/components/BenefitsSection.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Align grid items to start so they don't stretch vertically
content = content.replace('gap-3 sm:gap-6 text-center"', 'gap-3 sm:gap-6 text-center items-start"')

# 2. Remove h-full from card containers and replace with h-fit
content = content.replace('flex flex-col h-full', 'flex flex-col h-fit')

# 3. Reduce the margin below the image wrapper from mb-3 to mb-1.5
content = content.replace('rounded-lg mb-3 overflow-hidden', 'rounded-lg mb-1.5 overflow-hidden')

# 4. Remove mt-auto which was pushing text to the bottom
content = content.replace('uppercase mt-auto', 'uppercase mt-1')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
