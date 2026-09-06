const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase5 = `{
    id: 5,
    title: "Đóng tam giác đen",
    doctor: "Sử dụng: Beautifil Injectable",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.1.webp", note: "(Tình trạng ban đầu): Hình ảnh cận cảnh cho thấy các \\"tam giác đen\\" xuất hiện rõ rệt ở vùng kẽ giữa các răng cửa hàm dưới do sự tiêu ngót của mô nướu. Men răng khỏe mạnh nhưng các khoảng trống này làm giảm đáng kể tính thẩm mỹ tổng thể." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.2.webp", note: "(Kết quả sau cùng & Quy trình thực hiện): Hình ảnh phục hình hoàn thiện sau khi đóng kín các khe hở. Để đạt được kết quả này, bác sĩ đã làm sạch màng sinh học và xói mòn bề mặt bằng gel Shofu Select Etch. Tiếp đó, hệ thống keo dán Shofu BeautiBond Universal được sử dụng để tối ưu độ bám dính. Bác sĩ kết hợp màng khuôn trong suốt và bơm vật liệu composite dòng chảy Shofu Beautifil Injectable (hoặc Beautifil Flow Plus) vào vùng kẽ. Đặc tính ôm sát và khuếch tán ánh sáng tốt của dòng composite này giúp lấp đầy hoàn hảo \\"tam giác đen\\" mà không tạo gờ nhô. Cuối cùng, bề mặt được đánh bóng vi phẫu bằng đĩa Shofu Super-Snap và mũi cao su OneGloss, mang lại độ láng mịn hoàn hảo, tệp màu tự nhiên và mô nướu hoàn toàn khỏe mạnh, không bị kích ứng." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ xử lý tình trạng \\"tam giác đen\\" (black triangles) vùng kẽ chân răng cửa hàm dưới do tụt gai nướu. Tình trạng này không chỉ gây mất thẩm mỹ mà còn tạo thành mảng bám, giắt thức ăn. Bác sĩ đã sử dụng kỹ thuật trám composite trực tiếp kết hợp hệ thống vật liệu sinh học của Shofu để tái tạo lại điểm tiếp xúc diện rộng (broad contact), lấp đầy khoảng tối vùng kẽ và mang lại sự hài hòa cho nụ cười."
  }`;

content = content.replace(
  /\{\s*id:\s*5,\s*title:\s*"Phục hồi đóng tam giác đen"[\s\S]*?description:\s*"Màu sắc tiệp hoàn toàn, đường hoàn tất vô hình."\s*\}/,
  newCase5
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 5 verbatim!");
