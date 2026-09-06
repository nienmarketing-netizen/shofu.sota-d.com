const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase7 = `{
    id: 7,
    title: "Phục hồi thẩm mỹ răng cửa",
    doctor: "Sử dụng: Beautifil II",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.1.webp", note: "Case Study 7 - Tình trạng ban đầu: Tổn thương răng cửa trước." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.2.webp", note: "Case Study 7 - Phục hình thẩm mỹ hoàn tất, khôi phục nụ cười rạng rỡ." }
    ],
    description: "Độ bền cơ học tốt và tính thẩm mỹ hoàn hảo."
  }`;

content = content.replace(
  /\{\s*id:\s*7,\s*title:\s*"Gắn Inlay\/Onlay"[\s\S]*?description:\s*"Độ cứng uốn cao, dễ dàng làm sạch xi măng thừa."\s*\}/,
  newCase7
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 7!");
