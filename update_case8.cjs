const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase8 = `{
    id: 8,
    title: "Phục hình thẩm mỹ trực tiếp",
    doctor: "Sử dụng: Beautifil II, BeautiBond",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.1.webp", note: "Case Study 8 - Tình trạng ban đầu: Bệnh nhân bị mẻ góc cạnh cắn ở cả hai răng cửa giữa hàm trên (răng 11 và 21)." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.2.webp", note: "Case Study 8 - Cận cảnh trước điều trị: Đánh giá chi tiết cấu trúc mô răng, mức độ tổn thương và màu sắc/độ trong mờ." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.3.webp", note: "Case Study 8 - Thử khóa silicone: Định hình sẵn khung vòm miệng (palatal shell) cho quá trình đắp composite." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.4.webp", note: "Case Study 8 - Cách ly và sửa soạn: Răng được cách ly bằng đê cao su và vát mép (bevel) kỹ lưỡng ở đường viền." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.5.webp", note: "Case Study 8 - Xử lý bề mặt - Etching: Xói mòn men răng để tạo vi lưu giữ cơ học cho hệ thống keo dán." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.6.webp", note: "Case Study 8 - Bôi keo dán: Sử dụng băng keo Teflon bảo vệ răng kế cận và bôi hệ thống keo dán Shofu BeautiBond Universal." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.7.webp", note: "Case Study 8 - Đắp lớp mặt trong - Palatal Shell: Sử dụng Beautifil II đắp lớp mỏng đầu tiên tựa vào khóa silicone tạo bức tường mặt trong." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.8.webp", note: "Case Study 8 - Hình thể sơ khởi: Quá trình đắp các lớp composite ngà và men tiếp theo đã hoàn tất." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.9.webp", note: "Case Study 8 - Kết quả sau cùng: Bề mặt phục hình đạt độ bóng láng hoàn hảo, tệp màu hoàn toàn với răng thật." }
    ],
    description: "Tái tạo lại hình thể, màu sắc và chức năng nhai một cách tự nhiên nhất với phương pháp đắp lớp (layering technique)."
  }`;

content = content.replace(
  /\{\s*id:\s*8,\s*title:\s*"Sửa chữa phục hình sứ"[\s\S]*?description:\s*"Lực dán cao trên cả Zirconia và Lithium Disilicate."\s*\}/,
  newCase8
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 8!");
