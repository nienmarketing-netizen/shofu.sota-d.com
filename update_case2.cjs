const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase2 = `{
    id: 2,
    title: "Trám xoang II sâu",
    doctor: "Sử dụng: Beautilink SA & BeautiBond",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.1.webp", note: "Case Study 2 - Tình trạng ban đầu." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.2.webp", note: "Case Study 2 - Sửa soạn khoang trám." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.3.webp", note: "Case Study 2 - Xử lý bề mặt với hệ thống dán." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.4.webp", note: "Case Study 2 - Lớp composite đầu tiên." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.5.webp", note: "Case Study 2 - Tạo hình giải phẫu mặt nhai." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.6.webp", note: "Case Study 2 - Đánh bóng hoàn thiện." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.7.webp", note: "Case Study 2 - Kết quả sau điều trị: khít sát và thẩm mỹ cao." }
    ],
    description: "Độ khít sát biên hoàn hảo, ngăn ngừa nhạy cảm sau phục hình."
  }`;

content = content.replace(
  /\{\s*id:\s*2,\s*title:\s*"Trám xoang II sâu"[\s\S]*?description:\s*"Độ khít sát biên hoàn hảo, ngăn ngừa nhạy cảm sau phục hình."\s*\}/,
  newCase2
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 2!");
