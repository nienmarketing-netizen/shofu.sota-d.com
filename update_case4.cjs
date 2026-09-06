const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase4 = `{
    id: 4,
    title: "Đóng khe thưa mức độ nhẹ",
    doctor: "Sử dụng: Beautifil II & BeautiBond",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.1.webp", note: "(Tình trạng ban đầu): Hình ảnh trước điều trị cho thấy có một khoảng thưa nhỏ giữa hai răng 11 và 21, làm mất đi sự liền mạch và thẩm mỹ của nụ cười." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.2.webp", note: "(Cách ly vùng điều trị): Răng được cách ly tuyệt đối bằng đê cao su (rubber dam) và buộc chỉ nha khoa ở cổ răng để bộc lộ rõ vùng kẽ, đồng thời kiểm soát độ ẩm 100% cho quy trình dán." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.3.webp", note: "(Sửa soạn vi cơ học): Bác sĩ tiến hành thổi cát (air abrasion) vùng kẽ răng để làm sạch màng sinh học và tạo độ nhám vi thể, sau đó xịt rửa và thổi khô kỹ lưỡng. Bước này rất quan trọng để tăng cường diện tích tiếp xúc và tối ưu hóa độ bám dính của vật liệu." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.4.webp", note: "(Sửa soạn vi cơ học): Bác sĩ tiến hành thổi cát (air abrasion) vùng kẽ răng để làm sạch màng sinh học và tạo độ nhám vi thể, sau đó xịt rửa và thổi khô kỹ lưỡng. Bước này rất quan trọng để tăng cường diện tích tiếp xúc và tối ưu hóa độ bám dính của vật liệu." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.5.webp", note: "(Sửa soạn vi cơ học): Bác sĩ tiến hành thổi cát (air abrasion) vùng kẽ răng để làm sạch màng sinh học và tạo độ nhám vi thể, sau đó xịt rửa và thổi khô kỹ lưỡng. Bước này rất quan trọng để tăng cường diện tích tiếp xúc và tối ưu hóa độ bám dính của vật liệu." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.6.webp", note: "(Xói mòn bề mặt - Etching): Răng kế cận được cách ly bảo vệ bằng băng keo Teflon. Gel xói mòn Shofu Select Etch được bơm cẩn thận lên bề mặt men răng vùng kẽ để tạo các vi hốc lưu giữ cơ học chuẩn bị cho bước bôi keo dán." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.7.webp", note: "(Đặt khuôn và Đắp lớp): Một dải màng khuôn trong suốt (celluloid matrix) được đặt vào vị trí để định hình thành bên của răng. Sau khi xử lý bằng hệ thống keo dán Shofu BeautiBond Universal, bác sĩ đắp vật liệu composite Shofu Beautifil II tựa theo màng khuôn để tạo hình khối hoàn hảo lấp đầy khe thưa." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.8.webp", note: "(Kết quả sau cùng): Hình ảnh ngay sau khi tháo đê cao su và hoàn thiện. Bề mặt phục hình được đánh bóng tỉ mỉ bằng hệ thống đĩa Shofu Super-Snap và mũi cao su OneGloss, mang lại độ bóng láng, mô phỏng xuất sắc các đường vân rãnh tự nhiên và tệp màu hoàn toàn với răng thật." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ đóng khe thưa (diastema closure) mức độ nhẹ cho hai răng cửa giữa hàm trên (răng 11 và 21). Quy trình chú trọng vào khâu xử lý bề mặt vi cơ học và sử dụng hệ thống keo dán, composite thẩm mỹ của Shofu để đóng kín khoảng trống, tái tạo kết cấu vi bề mặt (texture) tự nhiên mà không cần mài xâm lấn mô răng thật."
  }`;

content = content.replace(
  /\{\s*id:\s*4,\s*title:\s*"Trám bít hố rãnh"[\s\S]*?description:\s*"Khả năng giải phóng Fluoride liên tục, bảo vệ răng tối ưu."\s*\}/,
  newCase4
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 4 verbatim!");
