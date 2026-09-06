const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase2 = `{
    id: 2,
    title: "Trám xoang II sâu",
    doctor: "Sử dụng: Beautilink SA & BeautiBond",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.1.webp", note: "Case Study 2 - Tình trạng ban đầu: Hình ảnh cận cảnh răng cối nhỏ hàm dưới (ví dụ: răng 35 hoặc 45) với lỗ sâu loại II lớn liên quan đến mặt nhai và mặt bên, gây mất mô răng đáng kể." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.2.webp", note: "Case Study 2 - Đặt đê cao su & Phát hiện sâu răng: Đê cao su được đặt để cách ly hoàn toàn trường phẫu thuật khỏi độ ẩm. Bác sĩ sử dụng chất phát hiện sâu răng Shofu Caries Detector (màu hồng) để xác định chính xác và loại bỏ triệt để mô răng bị nhiễm khuẩn." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.3.webp", note: "Case Study 2 - Sửa soạn xoang trám: Quy trình sửa soạn xoang trám hoàn tất. Mô răng sâu đã được loại bỏ hoàn toàn, tạo ra một xoang trám sạch, được thiết kế tối ưu cho phục hình composite." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.4.webp", note: "Case Study 2 - Đặt khuôn trám & Chêm: Một khuôn trám kim loại và chêm gỗ được đặt xung quanh răng để tái tạo hình thể mặt bên và điểm tiếp xúc tự nhiên với răng lân cận." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.5.webp", note: "Case Study 2 - Xói mòn men/ngà: Bác sĩ bôi gel xói mòn Shofu Etchant Gel lên bề mặt men và ngà răng để tạo các vi hốc lưu giữ cho chất dán." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.6.webp", note: "Case Study 2 - Bôi chất dán: Bôi chất dán một bước Shofu BeautiBond Universal lên xoang trám đã được xói mòn để đảm bảo độ bám dính tối ưu giữa mô răng và composite, đồng thời giảm thiểu độ nhạy cảm sau điều trị." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.7.webp", note: "Case Study 2 - Phục hình hoàn tất: Phục hình composite được đắp lớp và tạo hình giải phẫu bằng Shofu Beautifil II, sau khi được đánh bóng bằng hệ thống Shofu Super-Snap. Hình ảnh cho thấy kết quả phục hồi thẩm mỹ tự nhiên, tệp màu hoàn hảo với răng thật và khôi phục chức năng nhai." }
    ],
    description: "Ca lâm sàng này trình bày quy trình phục hồi thẩm mỹ và chức năng cho một chiếc răng cối nhỏ hàm dưới bị sâu răng loại II lớn. Quy trình sử dụng hệ thống dán và composite tiên tiến của Shofu để đạt được kết quả tự nhiên, bền vững và tương thích sinh học."
  }`;

content = content.replace(
  /\{\s*id:\s*2,\s*title:\s*"Trám xoang II sâu"[\s\S]*?description:\s*".*?"\s*\}/,
  newCase2
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 2 descriptions!");
