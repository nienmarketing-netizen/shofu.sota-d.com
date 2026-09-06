const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase4 = `{
    id: 4,
    title: "Trám bít hố rãnh",
    doctor: "Công nghệ S-PRG",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.1.webp", note: "Case Study 4 - Tình trạng ban đầu: Rãnh mặt nhai sâu và đổi màu." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.2.webp", note: "Case Study 4 - Sửa soạn và làm sạch hố rãnh." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.3.webp", note: "Case Study 4 - Tiến hành cách ly và xoi mòn." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.4.webp", note: "Case Study 4 - Phủ chất dán." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.5.webp", note: "Case Study 4 - Trám bít hố rãnh với vật liệu chuyên dụng." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.6.webp", note: "Case Study 4 - Quang trùng hợp." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.7.webp", note: "Case Study 4 - Kiểm tra khớp cắn." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.8.webp", note: "Case Study 4 - Hoàn tất: Rãnh được trám bít hoàn toàn, bảo vệ lâu dài." }
    ],
    description: "Khả năng giải phóng Fluoride liên tục, bảo vệ răng tối ưu."
  }`;

content = content.replace(
  /\{\s*id:\s*4,\s*title:\s*"Trám bít hố rãnh"[\s\S]*?description:\s*"Khả năng giải phóng Fluoride liên tục, bảo vệ răng tối ưu."\s*\}/,
  newCase4
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 4!");
