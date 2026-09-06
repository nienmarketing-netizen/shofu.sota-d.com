const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase5 = `{
    id: 5,
    title: "Phục hồi đóng tam giác đen",
    doctor: "Sử dụng: Beautifil II",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.1.webp", note: "Case Study 5 - Tình trạng ban đầu: Tam giác đen vùng răng cửa dưới." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.2.webp", note: "Case Study 5 - Phục hình hoàn tất, khe hở được đóng kín thẩm mỹ." }
    ],
    description: "Màu sắc tiệp hoàn toàn, đường hoàn tất vô hình."
  }`;

content = content.replace(
  /\{\s*id:\s*5,\s*title:\s*"Phục hình răng trước mẻ"[\s\S]*?description:\s*"Màu sắc tiệp hoàn toàn, đường hoàn tất vô hình."\s*\}/,
  newCase5
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 5!");
