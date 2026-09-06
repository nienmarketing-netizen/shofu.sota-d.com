const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase6 = `{
    id: 6,
    title: "Phục hình thẩm mỹ răng nhiễm màu",
    doctor: "Sử dụng: Beautifil II & Super-Snap",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.1.webp", note: "(Tình trạng ban đầu): Hình ảnh trước điều trị cho thấy bề mặt men các răng cửa hàm trên (đặc biệt là răng 11 và 21) xuất hiện nhiều đốm trắng đục và mảng nâu. Tình trạng loang lổ này làm mất đi độ trong mờ tự nhiên của men răng, khiến nụ cười trở nên xỉn màu và kém thẩm mỹ." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.2.webp", note: "(Kết quả sau cùng): Hình ảnh sau khi bề mặt răng được xử lý vi mài mòn và che phủ khiếm khuyết bằng một lớp siêu mỏng composite Shofu Beautifil II (sử dụng hệ thống keo dán Shofu BeautiBond Universal). Để đạt được bề mặt nhẵn mịn như men răng thật, bác sĩ đã tiến hành đánh bóng tích cực bằng hệ thống đĩa Shofu Super-Snap, kết hợp mũi cao su OneGloss và sáp đánh bóng DirectDia Paste. Kết quả cho thấy các đốm màu đã được che lấp hoàn toàn, răng đạt độ bóng láng và tệp màu hoàn hảo." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ xâm lấn tối thiểu nhằm điều trị tình trạng khiếm khuyết men răng, đốm trắng đục và đốm nâu (thường gặp do nhiễm fluor hoặc thiểu sản men) vùng răng cửa. Quy trình sử dụng kỹ thuật che màu bằng composite sinh học và hệ thống đánh bóng chuyên sâu của Shofu để loại bỏ các mảng màu không mong muốn, trả lại bề mặt men răng đồng đều, bóng khỏe và nụ cười trắng sáng tự nhiên."
  }`;

content = content.replace(
  /\{\s*id:\s*6,\s*title:\s*"Thay miếng trám cũ răng cửa trên"[\s\S]*?description:\s*"Dễ dàng tạo hình, giữ form tốt, không bị chảy lún."\s*\}/,
  newCase6
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 6 verbatim!");
