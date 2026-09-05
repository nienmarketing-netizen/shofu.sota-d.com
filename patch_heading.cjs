const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuSolutions.tsx', 'utf-8');

content = content.replace(
  /<h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">\s*Hệ sinh thái vật liệu nha khoa Shofu\s*<\/h3>/g,
  `<h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
    Chương Trình Khuyến Mãi Nổi Bật
  </h3>`
);

content = content.replace(
  /<p className="text-slate-600 mt-4 max-w-2xl mx-auto">\s*Sota-D phân phối chính hãng toàn bộ hệ sinh thái giải pháp nha khoa từ Shofu Nhật Bản, đảm bảo chất lượng kiểm định khắt khe nhất.\s*<\/p>/g,
  `<p className="text-slate-600 mt-4 max-w-2xl mx-auto">
    Đừng bỏ lỡ các ưu đãi đặc quyền lớn nhất năm dành riêng cho Quý Bác sĩ từ Sota-D và Shofu Nhật Bản.
  </p>`
);

fs.writeFileSync('src/components/shofu/ShofuSolutions.tsx', content);
