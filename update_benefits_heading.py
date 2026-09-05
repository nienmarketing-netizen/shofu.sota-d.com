import re

with open('src/components/BenefitsSection.tsx', 'r') as f:
    content = f.read()

target = 'Giải pháp Công nghệ Lâm sàng <span className="text-gradient">từ SHOFU</span>'
replacement = 'Giải pháp Công nghệ và ứng dụng Lâm sàng <span className="text-gradient">từ SHOFU</span>'

content = content.replace(target, replacement)

with open('src/components/BenefitsSection.tsx', 'w') as f:
    f.write(content)
