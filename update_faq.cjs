const fs = require('fs');
let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const targetOld = `  const faqs = [
    {
      q: "Phục hồi composite xoang II sâu có nhất thiết phải cô lập đê cao su tuyệt đối để tránh ê buốt không?",
      a: "Đê cao su là tiêu chuẩn vàng. Tuy nhiên, keo dán BeautiBond Xtreme HEMA-Free kỵ nước với dung môi bay hơi siêu nhanh Acetone tự thâm nhập và bít kín ống ngà ẩm, triệt tiêu 100% ê buốt sau phục hồi bất chấp độ ẩm lâm sàng."
    },
    {
      q: "Làm thế nào để giải quyết triệt để tình trạng composite dính dụng cụ điêu khắc múi rãnh?",
      a: "Bác sĩ nên lau sạch dụng cụ định kỳ, vo tròn composite hoặc nhúng nhẹ đầu khắc vào dung dịch hỗ trợ tạo hình Modeling Liquid của Shofu để điêu khắc mượt mà, lướt êm không dính cây."
    },
    {
      q: "Hạt độn S-PRG liên tục giải phóng ion thì phục hồi có bị mòn nhanh hay rỗng xốp theo thời gian không?",
      a: "Hoàn toàn không. S-PRG được bọc trong màng biến tính bền vững và phân bổ đồng đều trong mạng nhựa polymer. Beautifil II LS đạt lực nén 364 MPa, lực uốn 120 MPa đảm bảo kháng mòn cao và bóng láng vĩnh cửu."
    },
    {
      q: "Lực dán tự soi mòn (Self-Etch) của BeautiBond Xtreme có bị suy giảm theo thời gian không?",
      a: "Tuyệt đối không. BBX ứng dụng công nghệ ARS bọc giáp bảo vệ Silane kháng axit kết hợp monomer MDP tạo liên kết hóa học siêu cường, duy trì lực dán bền bỉ ~30-35 MPa bất chấp lão hóa nhiệt."
    }
  ];`;

const replacementNew = `  const faqs = [
    {
      q: "Phục hồi composite xoang II sâu có nhất thiết phải cô lập đê cao su tuyệt đối để tránh ê buốt sau điều trị không?",
      a: "Đê cao su luôn là tiêu chuẩn vàng trong nha khoa. Tuy nhiên, căn nguyên thực sự của ê buốt sau trám không chỉ xuất phát từ độ ẩm lâm sàng mà từ hiện tượng thủy phân màng dán do thành phần HEMA ngấm nước. Keo dán BeautiBond Xtreme (BBX) loại bỏ hoàn toàn HEMA (HEMA-Free kỵ nước), ứng dụng hệ dung môi Acetone bay hơi chớp nhoáng giúp đưa monomer thâm nhập sâu và bít kín các ống ngà ẩm. Màng keo siêu mỏng ~5µm cùng lực dán Self-Etch bền bỉ ~30–35 MPa giúp khóa chặt vi kẽ và triệt tiêu nguy cơ ê buốt sau phục hồi."
    },
    {
      q: "Làm thế nào để kiểm soát lực co ngót trùng hợp và hiện tượng hở bờ viền ở sàn ngà xoang II có C-Factor cao?",
      a: "Sự nứt kẽ vi thể và cơn đau nhói khi ăn nhai chủ yếu do ứng suất co ngót kéo tách màng dán khỏi sàn ngà. Composite đặc Beautifil II LS sở hữu tỷ lệ hạt độn cao (83 wt%) giúp hạ độ co rút thể tích xuống mức kỷ lục 0.85% Vol và ứng suất co ngót tối thiểu chỉ 1.37 MPa. Đặc tính này giúp triệt tiêu lực kéo giật sàn ngà, ngăn chặn vi thấm và giữ cho đường hoàn tất khít sát tuyệt đối sau nhiều năm ăn nhai."
    },
    {
      q: "Composite đắp lót xoang II có đảm bảo độ bền chịu lực và không tạo bọt khí ở các hốc sâu vi thể?",
      a: "Hoàn toàn đảm bảo với Beautifil Injectable X. Sản phẩm ứng dụng công nghệ Nano-Optimized Silane với đặc tính lưu biến thông minh (Thixotropic): tự động chảy loang phẳng láng dưới áp lực bơm để len lỏi bít kín mọi hốc sâu vi thể mà không đọng bọt khí, nhưng lập tức đứng yên định hình khi ngừng bơm. Đặc biệt, độ bền nén cơ học đạt 400 MPa (tương đương composite đặc), cho phép đắp khối chịu lực trực tiếp ở vùng răng sau."
    },
    {
      q: "Làm thế nào để khắc phục triệt để tình trạng composite dính cây phục hình khi điêu khắc múi rãnh?",
      a: "Bác sĩ nên lau sạch dụng cụ định kỳ, vo tròn khối composite hoặc nhúng nhẹ đầu khắc vào dung dịch hỗ trợ tạo hình Modeling Liquid của Shofu. Dung dịch này giúp bôi trơn bề mặt, giúp cây khắc lướt êm, không kéo rách hay dính composite, giúp thao tác điêu khắc hình thể múi rãnh chính xác, mượt mà và nhàn tênh."
    },
    {
      q: "Hạt độn S-PRG liên tục giải phóng ion thì phục hình có bị mòn nhanh, rỗng xốp hay suy giảm lực dán theo thời gian không?",
      a: "Tuyệt đối không. Cấu trúc hạt độn S-PRG 3 lớp được bảo vệ bởi màng biến tính bền vững và phân bổ đồng đều trong mạng polymer. Beautifil II LS đạt độ bền nén 364 MPa và độ bền uốn 120 MPa, đảm bảo độ cứng chắc và kháng mòn cao. Nghiên cứu lâm sàng độc lập tại Đại học Florida công bố trên tạp chí JADA chứng minh: sau 8 năm đạt 100% tỷ lệ lưu giữ (0% ê buốt, 0% sâu răng thứ phát) và sau 13 năm đạt 96% phục hình sạch bóng sâu răng tái phát."
    },
    {
      q: "Quy trình đánh bóng composite có tốn nhiều thời gian và dễ làm trầy xước bề mặt miếng trám không?",
      a: "Hệ thống đĩa đánh bóng Super-Snap X-Treme giải quyết triệt để vấn đề này nhờ cơ chế gài Snap-on thông minh và thiết kế đĩa không chứa vòng kim loại ở giữa, loại bỏ nguy cơ làm trầy miếng trám. Với 4 dải màu phân định rõ ràng (từ mài thô đến siêu bóng) kết hợp mũi đá mài nhẵn CA, Bác sĩ chỉ mất vài giây để tái tạo bề mặt láng mịn. Để đạt độ bóng gương hoàn hảo, Bác sĩ có thể chốt bằng đĩa nỉ Super-Snap Buff Mini Disk dùng kèm kem đánh bóng kim cương DirectDia Paste."
    }
  ];`;

content = content.replace(targetOld, replacementNew);

fs.writeFileSync(file_path, content);
console.log("FAQ updated");
