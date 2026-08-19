import re

with open('src/components/BenefitsSection.tsx', 'r') as f:
    content = f.read()

target = 'LỢI ÍCH & ĐỘT PHÁ CÔNG NGHỆ'
replacement = 'NỘI DUNG CHUYÊN SÂU VÀ HANDS-ON'

content = content.replace(target, replacement)

with open('src/components/BenefitsSection.tsx', 'w') as f:
    f.write(content)
