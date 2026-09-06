const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase3 = `{
    id: 3,
    title: "Phục hồi cùi răng",
    doctor: "Sử dụng: Core Paste & Bond",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.1.webp", note: "Case Study 3 - Tình trạng ban đầu: cùi răng tổn thương." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.2.webp", note: "Case Study 3 - Sửa soạn và làm sạch bề mặt." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.3.webp", note: "Case Study 3 - Quá trình tái tạo cùi." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.4.webp", note: "Case Study 3 - Hoàn tất phục hình cùi răng vững chắc." }
    ],
    description: "Độ bền cơ học cao, chịu lực nén tốt, thao tác nhanh."
  }`;

content = content.replace(
  /\{\s*id:\s*3,\s*title:\s*"Phục hồi cùi răng"[\s\S]*?description:\s*"Độ bền cơ học cao, chịu lực nén tốt, thao tác nhanh."\s*\}/,
  newCase3
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 3!");
