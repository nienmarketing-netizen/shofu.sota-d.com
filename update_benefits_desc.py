import re

with open('src/components/BenefitsSection.tsx', 'r') as f:
    content = f.read()

target = 'Giải quyết triệt để hai thách thức lớn nhất trong phục hồi nha khoa: Tối ưu hóa thời gian ghế khám và triệt tiêu hoàn toàn tình trạng ê buốt sau dán.'
replacement = 'Giải quyết triệt để hai thách thức lớn trong phục hồi nha khoa: Tối ưu hóa thời gian ghế khám và triệt tiêu hoàn toàn tình trạng ê buốt sau dán.'

content = content.replace(target, replacement)

with open('src/components/BenefitsSection.tsx', 'w') as f:
    f.write(content)
