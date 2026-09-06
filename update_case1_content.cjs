const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase1 = `{
    id: 1,
    title: "Đóng khe thưa",
    doctor: "Sử dụng: Beautifil Injectable X",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.1.webp", note: "Case Study 1 - Tình trạng ban đầu: Hình ảnh trước điều trị cho thấy bệnh nhân có một khoảng thưa rõ rệt (khe thưa răng cửa) giữa hai răng 11 và 21, gây mất thẩm mỹ khi giao tiếp." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.2.webp", note: "Case Study 1 - Cách ly và đánh dấu: Răng được cách ly tuyệt đối bằng đê cao su (rubber dam) để đảm bảo môi trường hoàn toàn khô ráo. Bác sĩ dùng bút đánh dấu các đường viền và tỷ lệ kích thước trên mặt ngoài để định hướng quá trình đắp vật liệu cân xứng." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.3.webp", note: "Case Study 1 - Đặt màng khuôn trong suốt: Màng khuôn trong suốt (celluloid matrix band) được đặt cẩn thận vào vùng kẽ răng. Bước này đóng vai trò như một bức tường định hình thành bên (mesial wall), giúp composite không bị dính vào răng kế cận và tạo độ phồng tự nhiên." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.4.webp", note: "Case Study 1 - Xử lý bề mặt và Dán: Sau khi làm sạch và xói mòn bề mặt men răng ở vùng kẽ, bác sĩ bôi hệ thống keo dán Shofu BeautiBond Universal. Lớp keo này giúp tạo ra độ bám dính vi cơ học vượt trội, đảm bảo khối composite liên kết chặt chẽ và lâu bền với mô răng thật." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.5.webp", note: "Case Study 1 - Tạo hình sơ khởi: Khoảng thưa đã được đóng kín hoàn toàn bằng cách đắp từng lớp vật liệu composite thẩm mỹ Shofu Beautifil II. Hình ảnh được chụp ngay sau khi tháo đê cao su; lúc này hình thể răng đã hoàn thiện nhưng phần nướu kẽ răng hơi đỏ (phản ứng tạm thời do đặt khuôn) và bề mặt răng cần được đánh bóng thêm." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.6.webp", note: "Case Study 1 - Kết quả sau cùng: Phục hình hoàn thiện sau khi được tạo hình chi tiết và đánh bóng kỹ lưỡng bằng hệ thống đĩa Shofu Super-Snap kết hợp mũi cao su OneGloss. Bề mặt kẽ răng đạt độ láng mịn, phản xạ ánh sáng tốt và tệp màu hoàn toàn với men răng tự nhiên xung quanh." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ đóng khe thưa (diastema closure) cho hai răng cửa giữa hàm trên (răng 11 và 21). Quy trình sử dụng kỹ thuật đắp composite trực tiếp kết hợp hệ thống vật liệu dán và trám thẩm mỹ của Shofu nhằm lấp đầy khoảng trống, tái tạo lại tỷ lệ răng cân đối và mang lại nụ cười tự nhiên nhất cho bệnh nhân."
  }`;

content = content.replace(
  /\{\s*id:\s*1,\s*title:\s*"Đóng khe thưa"[\s\S]*?description:\s*".*?"\s*\}/,
  newCase1
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 1 descriptions!");
