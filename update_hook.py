import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

target = """      <p className="font-body text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
       Đến xem trực tiếp kỹ thuật và học cách áp dụng ngay vào lâm sàng.
      </p>"""

replacement = """      <p className="font-body text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
       Cập nhật báo cáo khoa học vật liệu, trực tiếp hands-on kỹ thuật, áp dụng ngay vào thực tế lâm sàng và <strong className="font-semibold text-slate-900">nhận bộ quà tặng giá trị từ Shofu và Sota-D.</strong>
      </p>"""

content = content.replace(target, replacement)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

