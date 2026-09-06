const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase6 = `{
    id: 6,
    title: "Thay miếng trám cũ răng cửa trên",
    doctor: "Sử dụng: Beautifil Injectable XSL",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.1.webp", note: "Case Study 6 - Tình trạng ban đầu: Miếng trám cũ xỉn màu và hở bờ." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.2.webp", note: "Case Study 6 - Hoàn tất thay miếng trám mới, phục hồi thẩm mỹ tự nhiên." }
    ],
    description: "Dễ dàng tạo hình, giữ form tốt, không bị chảy lún."
  }`;

content = content.replace(
  /\{\s*id:\s*6,\s*title:\s*"Đóng khe thưa"[\s\S]*?description:\s*"Dễ dàng tạo hình, giữ form tốt, không bị chảy lún."\s*\}/,
  newCase6
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 6!");
