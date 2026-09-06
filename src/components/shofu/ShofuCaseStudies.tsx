import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ShoppingCart, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Đóng khe thưa",
    doctor: "Sử dụng: Beautifil Injectable X",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.1.webp", note: "(Tình trạng ban đầu): Hình ảnh trước điều trị cho thấy bệnh nhân có một khoảng thưa rõ rệt (khe thưa răng cửa) giữa hai răng 11 và 21, gây mất thẩm mỹ khi giao tiếp." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.2.webp", note: "(Cách ly và đánh dấu): Răng được cách ly tuyệt đối bằng đê cao su (rubber dam) để đảm bảo môi trường hoàn toàn khô ráo. Bác sĩ dùng bút đánh dấu các đường viền và tỷ lệ kích thước trên mặt ngoài để định hướng quá trình đắp vật liệu cân xứng." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.3.webp", note: "(Đặt màng khuôn trong suốt): Màng khuôn trong suốt (celluloid matrix band) được đặt cẩn thận vào vùng kẽ răng. Bước này đóng vai trò như một bức tường định hình thành bên (mesial wall), giúp composite không bị dính vào răng kế cận và tạo độ phồng tự nhiên." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.4.webp", note: "(Xử lý bề mặt và Dán): Sau khi làm sạch và xói mòn bề mặt men răng ở vùng kẽ, bác sĩ bôi hệ thống keo dán Shofu BeautiBond Universal. Lớp keo này giúp tạo ra độ bám dính vi cơ học vượt trội, đảm bảo khối composite liên kết chặt chẽ và lâu bền với mô răng thật." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.5.webp", note: "(Tạo hình sơ khởi): Khoảng thưa đã được đóng kín hoàn toàn bằng cách đắp từng lớp vật liệu composite thẩm mỹ Shofu Beautifil II. Hình ảnh được chụp ngay sau khi tháo đê cao su; lúc này hình thể răng đã hoàn thiện nhưng phần nướu kẽ răng hơi đỏ (phản ứng tạm thời do đặt khuôn) và bề mặt răng cần được đánh bóng thêm." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.6.webp", note: "(Kết quả sau cùng): Phục hình hoàn thiện sau khi được tạo hình chi tiết và đánh bóng kỹ lưỡng bằng hệ thống đĩa Shofu Super-Snap kết hợp mũi cao su OneGloss. Bề mặt kẽ răng đạt độ láng mịn, phản xạ ánh sáng tốt và tệp màu hoàn toàn với men răng tự nhiên xung quanh." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ đóng khe thưa (diastema closure) cho hai răng cửa giữa hàm trên (răng 11 và 21). Quy trình sử dụng kỹ thuật đắp composite trực tiếp kết hợp hệ thống vật liệu dán và trám thẩm mỹ của Shofu nhằm lấp đầy khoảng trống, tái tạo lại tỷ lệ răng cân đối và mang lại nụ cười tự nhiên nhất cho bệnh nhân."
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    id: 5,
    title: "Đóng tam giác đen",
    doctor: "Sử dụng: Beautifil Injectable",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.1.webp", note: "(Tình trạng ban đầu): Hình ảnh cận cảnh cho thấy các \"tam giác đen\" xuất hiện rõ rệt ở vùng kẽ giữa các răng cửa hàm dưới do sự tiêu ngót của mô nướu. Men răng khỏe mạnh nhưng các khoảng trống này làm giảm đáng kể tính thẩm mỹ tổng thể." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.2.webp", note: "(Kết quả sau cùng & Quy trình thực hiện): Hình ảnh phục hình hoàn thiện sau khi đóng kín các khe hở. Để đạt được kết quả này, bác sĩ đã làm sạch màng sinh học và xói mòn bề mặt bằng gel Shofu Select Etch. Tiếp đó, hệ thống keo dán Shofu BeautiBond Universal được sử dụng để tối ưu độ bám dính. Bác sĩ kết hợp màng khuôn trong suốt và bơm vật liệu composite dòng chảy Shofu Beautifil Injectable (hoặc Beautifil Flow Plus) vào vùng kẽ. Đặc tính ôm sát và khuếch tán ánh sáng tốt của dòng composite này giúp lấp đầy hoàn hảo \"tam giác đen\" mà không tạo gờ nhô. Cuối cùng, bề mặt được đánh bóng vi phẫu bằng đĩa Shofu Super-Snap và mũi cao su OneGloss, mang lại độ láng mịn hoàn hảo, tệp màu tự nhiên và mô nướu hoàn toàn khỏe mạnh, không bị kích ứng." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ xử lý tình trạng \"tam giác đen\" (black triangles) vùng kẽ chân răng cửa hàm dưới do tụt gai nướu. Tình trạng này không chỉ gây mất thẩm mỹ mà còn tạo thành mảng bám, giắt thức ăn. Bác sĩ đã sử dụng kỹ thuật trám composite trực tiếp kết hợp hệ thống vật liệu sinh học của Shofu để tái tạo lại điểm tiếp xúc diện rộng (broad contact), lấp đầy khoảng tối vùng kẽ và mang lại sự hài hòa cho nụ cười."
  },
  {
    id: 6,
    title: "Phục hình thẩm mỹ răng nhiễm màu",
    doctor: "Sử dụng: Beautifil II & Super-Snap",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.1.webp", note: "(Tình trạng ban đầu): Hình ảnh trước điều trị cho thấy bề mặt men các răng cửa hàm trên (đặc biệt là răng 11 và 21) xuất hiện nhiều đốm trắng đục và mảng nâu. Tình trạng loang lổ này làm mất đi độ trong mờ tự nhiên của men răng, khiến nụ cười trở nên xỉn màu và kém thẩm mỹ." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.2.webp", note: "(Kết quả sau cùng): Hình ảnh sau khi bề mặt răng được xử lý vi mài mòn và che phủ khiếm khuyết bằng một lớp siêu mỏng composite Shofu Beautifil II (sử dụng hệ thống keo dán Shofu BeautiBond Universal). Để đạt được bề mặt nhẵn mịn như men răng thật, bác sĩ đã tiến hành đánh bóng tích cực bằng hệ thống đĩa Shofu Super-Snap, kết hợp mũi cao su OneGloss và sáp đánh bóng DirectDia Paste. Kết quả cho thấy các đốm màu đã được che lấp hoàn toàn, răng đạt độ bóng láng và tệp màu hoàn hảo." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ xâm lấn tối thiểu nhằm điều trị tình trạng khiếm khuyết men răng, đốm trắng đục và đốm nâu (thường gặp do nhiễm fluor hoặc thiểu sản men) vùng răng cửa. Quy trình sử dụng kỹ thuật che màu bằng composite sinh học và hệ thống đánh bóng chuyên sâu của Shofu để loại bỏ các mảng màu không mong muốn, trả lại bề mặt men răng đồng đều, bóng khỏe và nụ cười trắng sáng tự nhiên."
  },
  {
    id: 7,
    title: "Phục hồi thẩm mỹ răng cửa",
    doctor: "Sử dụng: Beautifil II",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.1.webp", note: "Case Study 7 - Tình trạng ban đầu: Tổn thương răng cửa trước." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.2.webp", note: "Case Study 7 - Phục hình thẩm mỹ hoàn tất, khôi phục nụ cười rạng rỡ." }
    ],
    description: "Độ bền cơ học tốt và tính thẩm mỹ hoàn hảo."
  },
  {
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
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0
  })
};

export function ShofuCaseStudies() {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedCaseIndex === null) return;
    const totalImages = caseStudies[selectedCaseIndex].images.length;
    setDirection(1);
    setCurrentImageIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedCaseIndex === null) return;
    const totalImages = caseStudies[selectedCaseIndex].images.length;
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
  };

  const openModal = (index) => {
    setSelectedCaseIndex(index);
    setCurrentImageIndex(0);
    setDirection(0);
  };

  const hasMultipleImages = selectedCaseIndex !== null && caseStudies[selectedCaseIndex].images.length > 1;

  return (
    <section id="case-studies" className="py-20 relative border-t border-slate-200 bg-slate-50 bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bitcoin-gradient opacity-[0.03]"></div>
      
      <div className="w-[90%] lg:w-[80%] mx-auto mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="font-mono text-xs font-bold text-slate-600 uppercase tracking-widest">Thư viện Case Study</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
            Hiệu quả vượt trội từ <br />
            <span className="text-[#00ADEF]">thực tế lâm sàng</span>
          </h2>
          <p className="font-body text-slate-600 max-w-2xl mx-auto">
            Khám phá những ca điều trị thành công sử dụng vật liệu nha khoa Shofu.
            <strong className="text-slate-900"> Công nghệ S-PRG</strong> và hệ thống vật liệu tiên tiến mang lại <strong className="text-emerald-600">kết quả thẩm mỹ</strong> và <strong className="text-amber-600">độ bền tối ưu</strong>.
          </p>
        </motion.div>
      </div>

      {/* Instagram-style Grid */}
      <div className="w-[90%] lg:w-[80%] mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-square cursor-pointer group bg-slate-200 overflow-hidden sm:rounded-xl"
              onClick={() => openModal(index)}
            >
              <img src={item.coverImage} referrerPolicy="no-referrer"
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <ZoomIn className="w-6 h-6 text-white mb-2" />
                <h3 className="font-heading font-bold text-white text-sm sm:text-base leading-tight mb-1">{item.title}</h3>
                <p className="font-body text-slate-300 text-xs truncate">{item.doctor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center px-4 relative z-10">
        <button onClick={() => window.dispatchEvent(new CustomEvent("open-offer-modal"))} className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-heading font-bold text-base sm:text-lg hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1">
          <ShoppingCart className="w-5 h-5" />
          <span>Xem ưu đãi và đặt hàng</span>
          <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCaseIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={() => setSelectedCaseIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-[110] p-2 bg-black/20 rounded-full hover:bg-black/40"
              onClick={() => setSelectedCaseIndex(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content (No key with image index, so it doesn't unmount) */}
            <motion.div
              key={selectedCaseIndex} 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row bg-slate-900 rounded-2xl overflow-hidden shadow-2xl m-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Area with Slide Animation */}
              <div className="flex-1 bg-black relative flex items-center justify-center min-h-[40vh] md:min-h-[60vh] overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentImageIndex}
                    src={caseStudies[selectedCaseIndex].images[currentImageIndex].url}
                    referrerPolicy="no-referrer"
                    alt={`${caseStudies[selectedCaseIndex].title} - Image ${currentImageIndex + 1}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute max-w-full max-h-full object-contain"
                  />
                </AnimatePresence>
                
                {/* Image Counter */}
                {hasMultipleImages && (
                  <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-mono px-3 py-1.5 rounded-full z-[120]">
                    {currentImageIndex + 1} / {caseStudies[selectedCaseIndex].images.length}
                  </div>
                )}

                {/* Navigation Buttons (Unified) */}
                {hasMultipleImages && (
                  <>
                    <button 
                      onClick={handlePrev} 
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 rounded-full text-white/70 hover:text-white hover:bg-black/60 transition-colors z-[120]"
                    >
                      <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                    <button 
                      onClick={handleNext} 
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 rounded-full text-white/70 hover:text-white hover:bg-black/60 transition-colors z-[120]"
                    >
                      <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                  </>
                )}
              </div>

              {/* Info Area with text transition */}
              <div className="w-full md:w-[350px] shrink-0 bg-white p-6 md:p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-bold mb-4 w-fit">
                  Case Study #{caseStudies[selectedCaseIndex].id}
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
                  {caseStudies[selectedCaseIndex].title}
                </h3>
                <div className="text-[#00ADEF] font-bold text-sm mb-4">
                  {caseStudies[selectedCaseIndex].doctor}
                </div>
                <div className="w-12 h-1 bg-slate-200 mb-4"></div>
                
                <div className="relative min-h-[80px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentImageIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="font-body text-slate-600 leading-relaxed"
                    >
                      {caseStudies[selectedCaseIndex].images[currentImageIndex].note || caseStudies[selectedCaseIndex].description}
                    </motion.p>
                  </AnimatePresence>
                </div>
                
                <div className="mt-8 text-xs text-slate-400 font-mono">
                  Sota-D & Shofu Dental
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
