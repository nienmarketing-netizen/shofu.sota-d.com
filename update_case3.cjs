const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const newCase3 = `{
    id: 3,
    title: "Phục hình trực tiếp xoang loại II",
    doctor: "Sử dụng: Beautifil II, Flow Plus & BeautiBond",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.1.webp", note: "(Tình trạng ban đầu): Hình ảnh khớp cắn cho thấy răng cối nhỏ có tổn thương xoang loại II (mất chất phần lớn ở mặt nhai và kẽ mặt bên) do sâu răng hoặc bong tróc mảng trám cũ, cần được làm sạch và phục hồi lại." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.2.webp", note: "(Cách ly và sửa soạn): Răng được cách ly an toàn và khô ráo tuyệt đối bằng hệ thống đê cao su (rubber dam). Bác sĩ đã tiến hành làm sạch toàn bộ mô ngà nhiễm khuẩn, sửa soạn thành vách xoang trám gọn gàng, sẵn sàng cho quy trình dán dính." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.3.webp", note: "(Bôi keo dán và trám lót): Xoang trám sáng bóng sau khi được xử lý bề mặt và phủ hệ thống keo dán Shofu BeautiBond Universal giúp bám dính vi cơ học tối đa. Ở phần đáy xoang và mặt bên, bác sĩ lót một lớp mỏng composite lỏng Shofu Beautifil Flow Plus để đảm bảo vật liệu len lỏi khít sát vào các góc khuất, ngăn ngừa bọt khí và vi kẽ." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.4.webp", note: "(Kết quả sau cùng): Hình ảnh sau khi tháo đê cao su. Răng được đắp lớp và tạo hình giải phẫu mặt nhai chi tiết bằng vật liệu composite hạt độn Shofu Beautifil II. Sau khi đánh bóng bằng hệ thống đĩa Shofu Super-Snap và mũi cao su OneGloss, phục hình đạt độ bóng mượt tự nhiên, phục hồi hoàn hảo điểm tiếp xúc kẽ và chức năng ăn nhai." }
    ],
    description: "Ca lâm sàng phục hình trực tiếp xoang loại II cho răng cối nhỏ. Với tổn thương mất chất ở cả mặt bên và mặt nhai, quy trình đòi hỏi việc tái tạo lại điểm tiếp xúc bên chặt chẽ và phục hồi chức năng nhai. Bác sĩ đã sử dụng hệ thống keo dán và vật liệu composite sinh học của Shofu để mang lại kết quả bền vững, khít sát và thẩm mỹ cao."
  }`;

content = content.replace(
  /\{\s*id:\s*3,\s*title:\s*"Phục hồi cùi răng"[\s\S]*?description:\s*"Độ bền cơ học cao, chịu lực nén tốt, thao tác nhanh."\s*\}/,
  newCase3
);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated Case 3 verbatim!");
