const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase7 = `{
    id: 7,
    title: "Phục hình mẻ răng cửa",
    doctor: "Sử dụng: Beautifil II & BeautiBond",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.1.webp", note: "(Tình trạng ban đầu): Hình ảnh khớp cắn trung tâm cho thấy răng 21 bị gãy vỡ mất góc gần và một phần rìa cắn (có thể do chấn thương hoặc cắn vật cứng), gây mất thẩm mỹ. Bề mặt men răng có các gợn trắng đục và vệt màu tự nhiên, đòi hỏi vật liệu trám phải có khả năng tái tạo hiệu ứng tương đồng." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.2.webp", note: "(Phân tích quang học với nền đen): Bác sĩ sử dụng tấm nền đen (contrastor) trong miệng để chụp cận cảnh, cô lập ánh sáng chói. Bước này giúp làm nổi bật rõ rệt độ trong mờ (translucency) ở phần rìa cắn, độ dày của men răng và chi tiết các đốm trắng. Đây là thao tác bắt buộc để thiết lập \\"bản đồ màu sắc\\" (color mapping) chuẩn xác, chuẩn bị cho kỹ thuật sửa soạn, bôi keo dán Shofu BeautiBond Universal và đắp lớp (layering) bằng các sắc độ ngà, men của hệ thống composite Shofu Beautifil II ở các bước tiếp theo." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ trực tiếp cho răng cửa giữa hàm trên (răng 21) bị mẻ góc gần - cạnh cắn. Thách thức lớn nhất của ca này là mô răng thật có cấu trúc màu sắc khá phức tạp, bao gồm các dải vân trắng đục và độ trong mờ đặc trưng ở rìa cắn. Bác sĩ hướng tới việc sử dụng hệ thống composite đắp lớp sinh học của Shofu để không chỉ phục hồi lại cấu trúc giải phẫu mà còn mô phỏng hoàn hảo các hiệu ứng quang học của răng lân cận."
  }`;

content = content.replace(
  /\{\s*id:\s*7,\s*title:\s*"Phục hồi thẩm mỹ răng cửa"[\s\S]*?description:\s*"Độ bền cơ học tốt và tính thẩm mỹ hoàn hảo."\s*\}/,
  newCase7
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 7 verbatim!");
