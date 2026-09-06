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
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.1.webp", note: "<strong className=\"text-slate-900\">Tình trạng ban đầu:</strong> Hình ảnh trước điều trị cho thấy bệnh nhân có một khoảng thưa rõ rệt (khe thưa răng cửa) giữa hai răng 11 và 21, gây mất thẩm mỹ khi giao tiếp." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.2.webp", note: "<strong className=\"text-slate-900\">Cách ly và đánh dấu:</strong> Răng được cách ly tuyệt đối bằng <span className=\"text-[#00ADEF] font-bold\">đê cao su</span> (<span className=\"text-[#00ADEF] font-bold\">rubber dam</span>) để đảm bảo môi trường hoàn toàn khô ráo. Bác sĩ dùng bút đánh dấu các đường viền và tỷ lệ kích thước trên mặt ngoài để định hướng quá trình đắp vật liệu cân xứng." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.3.webp", note: "<strong className=\"text-slate-900\">Đặt màng khuôn trong suốt:</strong> Màng khuôn trong suốt (celluloid matrix band) được đặt cẩn thận vào vùng kẽ răng. Bước này đóng vai trò như một bức tường định hình thành bên (mesial wall), giúp composite không bị dính vào răng kế cận và tạo độ phồng tự nhiên." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.4.webp", note: "<strong className=\"text-slate-900\">Xử lý bề mặt và Dán:</strong> Sau khi làm sạch và xói mòn bề mặt men răng ở vùng kẽ, bác sĩ bôi hệ thống keo dán <span className=\"text-[#00ADEF] font-bold\">Shofu BeautiBond Xtreme</span>. Lớp keo này giúp tạo ra độ bám dính vi cơ học vượt trội, đảm bảo khối composite liên kết chặt chẽ và lâu bền với mô răng thật." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.5.webp", note: "<strong className=\"text-slate-900\">Tạo hình sơ khởi:</strong> Khoảng thưa đã được đóng kín hoàn toàn bằng cách đắp từng lớp vật liệu composite thẩm mỹ <span className=\"text-[#00ADEF] font-bold\">Shofu Beautifil II</span>. Hình ảnh được chụp ngay sau khi tháo <span className=\"text-[#00ADEF] font-bold\">đê cao su</span>; lúc này hình thể răng đã hoàn thiện nhưng phần nướu kẽ răng hơi đỏ (phản ứng tạm thời do đặt khuôn) và bề mặt răng cần được đánh bóng thêm." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.6.webp", note: "<strong className=\"text-slate-900\">Kết quả sau cùng:</strong> Phục hình hoàn thiện sau khi được tạo hình chi tiết và đánh bóng kỹ lưỡng bằng hệ thống đĩa <span className=\"text-[#00ADEF] font-bold\">Shofu Super-Snap</span> kết hợp mũi cao su <span className=\"text-[#00ADEF] font-bold\">OneGloss</span>. Bề mặt kẽ răng đạt độ láng mịn, phản xạ ánh sáng tốt và tệp màu hoàn toàn với men răng tự nhiên xung quanh." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ đóng khe thưa (diastema closure) cho hai răng cửa giữa hàm trên (răng 11 và 21). Quy trình sử dụng kỹ thuật đắp composite trực tiếp kết hợp hệ thống vật liệu dán và trám thẩm mỹ của Shofu nhằm lấp đầy khoảng trống, tái tạo lại tỷ lệ răng cân đối và mang lại nụ cười tự nhiên nhất cho bệnh nhân."
  },
  {
    id: 2,
    title: "Trám xoang II sâu",
    doctor: "Sử dụng: <span className=\"text-[#00ADEF] font-bold\">Beautilink SA</span> & <span className=\"text-[#00ADEF] font-bold\">BeautiBond</span>",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.1.webp", note: "<strong className=\"text-slate-900\">Tình trạng ban đầu:</strong> Hình ảnh cận cảnh răng cối nhỏ hàm dưới (ví dụ: răng 35 hoặc 45) với lỗ sâu loại II lớn liên quan đến mặt nhai và mặt bên, gây mất mô răng đáng kể." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.2.webp", note: "<strong className=\"text-slate-900\">Đặt <span className=\"text-[#00ADEF] font-bold\">đê cao su</span> & Phát hiện sâu răng:</strong> Đê cao su được đặt để cách ly hoàn toàn trường phẫu thuật khỏi độ ẩm. Bác sĩ sử dụng chất phát hiện sâu răng <span className=\"text-[#00ADEF] font-bold\">Shofu Caries Detector</span> (màu hồng) để xác định chính xác và loại bỏ triệt để mô răng bị nhiễm khuẩn." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.3.webp", note: "<strong className=\"text-slate-900\">Sửa soạn xoang trám:</strong> Quy trình sửa soạn xoang trám hoàn tất. Mô răng sâu đã được loại bỏ hoàn toàn, tạo ra một xoang trám sạch, được thiết kế tối ưu cho phục hình composite." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.4.webp", note: "<strong className=\"text-slate-900\">Đặt khuôn trám & Chêm:</strong> Một khuôn trám kim loại và chêm gỗ được đặt xung quanh răng để tái tạo hình thể mặt bên và điểm tiếp xúc tự nhiên với răng lân cận." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.5.webp", note: "<strong className=\"text-slate-900\">Xói mòn men/ngà:</strong> Bác sĩ bôi gel xói mòn <span className=\"text-[#00ADEF] font-bold\">Shofu Etchant Gel</span> lên bề mặt men và ngà răng để tạo các vi hốc lưu giữ cho chất dán." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.6.webp", note: "<strong className=\"text-slate-900\">Bôi chất dán:</strong> Bôi chất dán một bước <span className=\"text-[#00ADEF] font-bold\">Shofu BeautiBond Xtreme</span> lên xoang trám đã được xói mòn để đảm bảo độ bám dính tối ưu giữa mô răng và composite, đồng thời giảm thiểu độ nhạy cảm sau điều trị." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-2.7.webp", note: "<strong className=\"text-slate-900\">Phục hình hoàn tất:</strong> Phục hình composite được đắp lớp và tạo hình giải phẫu bằng <span className=\"text-[#00ADEF] font-bold\">Shofu Beautifil II</span>, sau khi được đánh bóng bằng hệ thống <span className=\"text-[#00ADEF] font-bold\">Shofu Super-Snap</span>. Hình ảnh cho thấy kết quả phục hồi thẩm mỹ tự nhiên, tệp màu hoàn hảo với răng thật và khôi phục chức năng nhai." }
    ],
    description: "Ca lâm sàng này trình bày quy trình phục hồi thẩm mỹ và chức năng cho một chiếc răng cối nhỏ hàm dưới bị sâu răng loại II lớn. Quy trình sử dụng hệ thống dán và composite tiên tiến của Shofu để đạt được kết quả tự nhiên, bền vững và tương thích sinh học."
  },
  {
    id: 3,
    title: "Phục hình trực tiếp xoang loại II",
    doctor: "Sử dụng: <span className=\"text-[#00ADEF] font-bold\">Beautifil II</span>, Flow Plus & <span className=\"text-[#00ADEF] font-bold\">BeautiBond</span>",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.1.webp", note: "<strong className=\"text-slate-900\">Tình trạng ban đầu:</strong> Hình ảnh khớp cắn cho thấy răng cối nhỏ có tổn thương xoang loại II (mất chất phần lớn ở mặt nhai và kẽ mặt bên) do sâu răng hoặc bong tróc mảng trám cũ, cần được làm sạch và phục hồi lại." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.2.webp", note: "<strong className=\"text-slate-900\">Cách ly và sửa soạn:</strong> Răng được cách ly an toàn và khô ráo tuyệt đối bằng hệ thống <span className=\"text-[#00ADEF] font-bold\">đê cao su</span> (<span className=\"text-[#00ADEF] font-bold\">rubber dam</span>). Bác sĩ đã tiến hành làm sạch toàn bộ mô ngà nhiễm khuẩn, sửa soạn thành vách xoang trám gọn gàng, sẵn sàng cho quy trình dán dính." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.3.webp", note: "<strong className=\"text-slate-900\">Bôi keo dán và trám lót:</strong> Xoang trám sáng bóng sau khi được xử lý bề mặt và phủ hệ thống keo dán <span className=\"text-[#00ADEF] font-bold\">Shofu BeautiBond Xtreme</span> giúp bám dính vi cơ học tối đa. Ở phần đáy xoang và mặt bên, bác sĩ lót một lớp mỏng composite lỏng <span className=\"text-[#00ADEF] font-bold\">Shofu Beautifil Flow Plus</span> để đảm bảo vật liệu len lỏi khít sát vào các góc khuất, ngăn ngừa bọt khí và vi kẽ." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-3.4.webp", note: "<strong className=\"text-slate-900\">Kết quả sau cùng:</strong> Hình ảnh sau khi tháo <span className=\"text-[#00ADEF] font-bold\">đê cao su</span>. Răng được đắp lớp và tạo hình giải phẫu mặt nhai chi tiết bằng vật liệu composite hạt độn <span className=\"text-[#00ADEF] font-bold\">Shofu Beautifil II</span>. Sau khi đánh bóng bằng hệ thống đĩa <span className=\"text-[#00ADEF] font-bold\">Shofu Super-Snap</span> và mũi cao su <span className=\"text-[#00ADEF] font-bold\">OneGloss</span>, phục hình đạt độ bóng mượt tự nhiên, phục hồi hoàn hảo điểm tiếp xúc kẽ và chức năng ăn nhai." }
    ],
    description: "Ca lâm sàng phục hình trực tiếp xoang loại II cho răng cối nhỏ. Với tổn thương mất chất ở cả mặt bên và mặt nhai, quy trình đòi hỏi việc tái tạo lại điểm tiếp xúc bên chặt chẽ và phục hồi chức năng nhai. Bác sĩ đã sử dụng hệ thống keo dán và vật liệu <span className=\"text-[#00ADEF] font-semibold\"><span className=\"text-[#00ADEF] font-bold\">composite sinh học</span></span> của Shofu để mang lại kết quả bền vững, khít sát và thẩm mỹ cao."
  },
  {
    id: 4,
    title: "Đóng khe thưa mức độ nhẹ",
    doctor: "Sử dụng: <span className=\"text-[#00ADEF] font-bold\">Beautifil II</span> & <span className=\"text-[#00ADEF] font-bold\">BeautiBond</span>",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.1.webp", note: "<strong className=\"text-slate-900\">Tình trạng ban đầu:</strong> Hình ảnh trước điều trị cho thấy có một khoảng thưa nhỏ giữa hai răng 11 và 21, làm mất đi sự liền mạch và thẩm mỹ của nụ cười." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.2.webp", note: "<strong className=\"text-slate-900\">Cách ly vùng điều trị:</strong> Răng được cách ly tuyệt đối bằng <span className=\"text-[#00ADEF] font-bold\">đê cao su</span> (<span className=\"text-[#00ADEF] font-bold\">rubber dam</span>) và buộc chỉ nha khoa ở cổ răng để bộc lộ rõ vùng kẽ, đồng thời kiểm soát độ ẩm 100% cho quy trình dán." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.3.webp", note: "<strong className=\"text-slate-900\">Sửa soạn vi cơ học:</strong> Bác sĩ tiến hành thổi cát (air abrasion) vùng kẽ răng để làm sạch màng sinh học và tạo độ nhám vi thể, sau đó xịt rửa và thổi khô kỹ lưỡng. Bước này rất quan trọng để tăng cường diện tích tiếp xúc và tối ưu hóa độ bám dính của vật liệu." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.4.webp", note: "<strong className=\"text-slate-900\">Sửa soạn vi cơ học:</strong> Bác sĩ tiến hành thổi cát (air abrasion) vùng kẽ răng để làm sạch màng sinh học và tạo độ nhám vi thể, sau đó xịt rửa và thổi khô kỹ lưỡng. Bước này rất quan trọng để tăng cường diện tích tiếp xúc và tối ưu hóa độ bám dính của vật liệu." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.5.webp", note: "<strong className=\"text-slate-900\">Sửa soạn vi cơ học:</strong> Bác sĩ tiến hành thổi cát (air abrasion) vùng kẽ răng để làm sạch màng sinh học và tạo độ nhám vi thể, sau đó xịt rửa và thổi khô kỹ lưỡng. Bước này rất quan trọng để tăng cường diện tích tiếp xúc và tối ưu hóa độ bám dính của vật liệu." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.6.webp", note: "<strong className=\"text-slate-900\">Xói mòn bề mặt - Etching:</strong> Răng kế cận được cách ly bảo vệ bằng băng keo Teflon. Gel xói mòn <span className=\"text-[#00ADEF] font-bold\">Shofu Select Etch</span> được bơm cẩn thận lên bề mặt men răng vùng kẽ để tạo các vi hốc lưu giữ cơ học chuẩn bị cho bước bôi keo dán." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.7.webp", note: "<strong className=\"text-slate-900\">Đặt khuôn và Đắp lớp:</strong> Một dải màng khuôn trong suốt (celluloid matrix) được đặt vào vị trí để định hình thành bên của răng. Sau khi xử lý bằng hệ thống keo dán <span className=\"text-[#00ADEF] font-bold\">Shofu BeautiBond Xtreme</span>, bác sĩ đắp vật liệu composite <span className=\"text-[#00ADEF] font-bold\">Shofu Beautifil II</span> tựa theo màng khuôn để tạo hình khối hoàn hảo lấp đầy khe thưa." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-4.8.webp", note: "<strong className=\"text-slate-900\">Kết quả sau cùng:</strong> Hình ảnh ngay sau khi tháo <span className=\"text-[#00ADEF] font-bold\">đê cao su</span> và hoàn thiện. Bề mặt phục hình được đánh bóng tỉ mỉ bằng hệ thống đĩa <span className=\"text-[#00ADEF] font-bold\">Shofu Super-Snap</span> và mũi cao su <span className=\"text-[#00ADEF] font-bold\">OneGloss</span>, mang lại độ bóng láng, mô phỏng xuất sắc các đường vân rãnh tự nhiên và tệp màu hoàn toàn với răng thật." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ đóng khe thưa (diastema closure) mức độ nhẹ cho hai răng cửa giữa hàm trên (răng 11 và 21). Quy trình chú trọng vào khâu xử lý bề mặt vi cơ học và sử dụng hệ thống keo dán, composite thẩm mỹ của Shofu để đóng kín khoảng trống, tái tạo kết cấu vi bề mặt (texture) tự nhiên mà không cần mài xâm lấn mô răng thật."
  },
  {
    id: 5,
    title: "Đóng tam giác đen",
    doctor: "Sử dụng: Beautifil Injectable",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.1.webp", note: "<strong className=\"text-slate-900\">Tình trạng ban đầu:</strong> Hình ảnh cận cảnh cho thấy các \"tam giác đen\" xuất hiện rõ rệt ở vùng kẽ giữa các răng cửa hàm dưới do sự tiêu ngót của mô nướu. Men răng khỏe mạnh nhưng các khoảng trống này làm giảm đáng kể tính thẩm mỹ tổng thể." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.2.webp", note: "<strong className=\"text-slate-900\">Kết quả sau cùng & Quy trình thực hiện:</strong> Hình ảnh phục hình hoàn thiện sau khi đóng kín các khe hở. Để đạt được kết quả này, bác sĩ đã làm sạch màng sinh học và xói mòn bề mặt bằng gel <span className=\"text-[#00ADEF] font-bold\">Shofu Select Etch</span>. Tiếp đó, hệ thống keo dán <span className=\"text-[#00ADEF] font-bold\">Shofu BeautiBond Xtreme</span> được sử dụng để tối ưu độ bám dính. Bác sĩ kết hợp màng khuôn trong suốt và bơm vật liệu composite dòng chảy <span className=\"text-[#00ADEF] font-bold\">Shofu Beautifil Injectable</span> (hoặc Beautifil Flow Plus) vào vùng kẽ. Đặc tính ôm sát và khuếch tán ánh sáng tốt của dòng composite này giúp lấp đầy hoàn hảo \"tam giác đen\" mà không tạo gờ nhô. Cuối cùng, bề mặt được đánh bóng vi phẫu bằng đĩa <span className=\"text-[#00ADEF] font-bold\">Shofu Super-Snap</span> và mũi cao su <span className=\"text-[#00ADEF] font-bold\">OneGloss</span>, mang lại độ láng mịn hoàn hảo, tệp màu tự nhiên và mô nướu hoàn toàn khỏe mạnh, không bị kích ứng." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ xử lý tình trạng \"tam giác đen\" (black triangles) vùng kẽ chân răng cửa hàm dưới do tụt gai nướu. Tình trạng này không chỉ gây mất thẩm mỹ mà còn tạo thành mảng bám, giắt thức ăn. Bác sĩ đã sử dụng kỹ thuật trám composite trực tiếp kết hợp hệ thống vật liệu sinh học của Shofu để tái tạo lại điểm tiếp xúc diện rộng (broad contact), lấp đầy khoảng tối vùng kẽ và mang lại sự hài hòa cho nụ cười."
  },
  {
    id: 6,
    title: "Phục hình thẩm mỹ răng nhiễm màu",
    doctor: "Sử dụng: <span className=\"text-[#00ADEF] font-bold\">Beautifil II</span> & <span className=\"text-[#00ADEF] font-bold\">Super-Snap</span>",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.1.webp", note: "<strong className=\"text-slate-900\">Tình trạng ban đầu:</strong> Hình ảnh trước điều trị cho thấy bề mặt men các răng cửa hàm trên (đặc biệt là răng 11 và 21) xuất hiện nhiều đốm trắng đục và mảng nâu. Tình trạng loang lổ này làm mất đi độ trong mờ tự nhiên của men răng, khiến nụ cười trở nên xỉn màu và kém thẩm mỹ." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.2.webp", note: "<strong className=\"text-slate-900\">Kết quả sau cùng:</strong> Hình ảnh sau khi bề mặt răng được xử lý vi mài mòn và che phủ khiếm khuyết bằng một lớp siêu mỏng composite <span className=\"text-[#00ADEF] font-bold\">Shofu Beautifil II</span> (sử dụng hệ thống keo dán <span className=\"text-[#00ADEF] font-bold\">Shofu BeautiBond Xtreme</span>). Để đạt được bề mặt nhẵn mịn như men răng thật, bác sĩ đã tiến hành đánh bóng tích cực bằng hệ thống đĩa <span className=\"text-[#00ADEF] font-bold\">Shofu Super-Snap</span>, kết hợp mũi cao su <span className=\"text-[#00ADEF] font-bold\">OneGloss</span> và sáp đánh bóng <span className=\"text-[#00ADEF] font-bold\">DirectDia Paste</span>. Kết quả cho thấy các đốm màu đã được che lấp hoàn toàn, răng đạt độ bóng láng và tệp màu hoàn hảo." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ xâm lấn tối thiểu nhằm điều trị tình trạng khiếm khuyết men răng, đốm trắng đục và đốm nâu (thường gặp do nhiễm fluor hoặc thiểu sản men) vùng răng cửa. Quy trình sử dụng kỹ thuật che màu bằng <span className=\"text-[#00ADEF] font-semibold\"><span className=\"text-[#00ADEF] font-bold\">composite sinh học</span></span> và hệ thống đánh bóng chuyên sâu của Shofu để loại bỏ các mảng màu không mong muốn, trả lại bề mặt men răng đồng đều, bóng khỏe và nụ cười trắng sáng tự nhiên."
  },
  {
    id: 7,
    title: "Phục hình mẻ răng cửa",
    doctor: "Sử dụng: <span className=\"text-[#00ADEF] font-bold\">Beautifil II</span> & <span className=\"text-[#00ADEF] font-bold\">BeautiBond</span>",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.1.webp", note: "<strong className=\"text-slate-900\">Tình trạng ban đầu:</strong> Hình ảnh khớp cắn trung tâm cho thấy răng 21 bị gãy vỡ mất góc gần và một phần rìa cắn (có thể do chấn thương hoặc cắn vật cứng), gây mất thẩm mỹ. Bề mặt men răng có các gợn trắng đục và vệt màu tự nhiên, đòi hỏi vật liệu trám phải có khả năng tái tạo hiệu ứng tương đồng." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.2.webp", note: "<strong className=\"text-slate-900\">Phân tích quang học với nền đen:</strong> Bác sĩ sử dụng tấm nền đen (contrastor) trong miệng để chụp cận cảnh, cô lập ánh sáng chói. Bước này giúp làm nổi bật rõ rệt độ trong mờ (translucency) ở phần rìa cắn, độ dày của men răng và chi tiết các đốm trắng. Đây là thao tác bắt buộc để thiết lập \"bản đồ màu sắc\" (color mapping) chuẩn xác, chuẩn bị cho kỹ thuật sửa soạn, bôi keo dán <span className=\"text-[#00ADEF] font-bold\">Shofu BeautiBond Xtreme</span> và đắp lớp (layering) bằng các sắc độ ngà, men của hệ thống composite <span className=\"text-[#00ADEF] font-bold\">Shofu Beautifil II</span> ở các bước tiếp theo." }
    ],
    description: "Ca lâm sàng phục hình thẩm mỹ trực tiếp cho răng cửa giữa hàm trên (răng 21) bị mẻ góc gần - cạnh cắn. Thách thức lớn nhất của ca này là mô răng thật có cấu trúc màu sắc khá phức tạp, bao gồm các dải vân trắng đục và độ trong mờ đặc trưng ở rìa cắn. Bác sĩ hướng tới việc sử dụng hệ thống composite đắp lớp sinh học của Shofu để không chỉ phục hồi lại cấu trúc giải phẫu mà còn mô phỏng hoàn hảo các hiệu ứng quang học của răng lân cận."
  },
  {
    id: 8,
    title: "Phục hình thẩm mỹ trực tiếp",
    doctor: "Sử dụng: <span className=\"text-[#00ADEF] font-bold\">Beautifil II</span>, <span className=\"text-[#00ADEF] font-bold\">BeautiBond</span>",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.1.webp", note: "<strong className=\"text-slate-900\">Tình trạng ban đầu:</strong> Bệnh nhân bị mẻ góc cạnh cắn ở cả hai răng cửa giữa hàm trên (răng 11 và 21)." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.2.webp", note: "<strong className=\"text-slate-900\">Cận cảnh trước điều trị:</strong> Đánh giá chi tiết cấu trúc mô răng, mức độ tổn thương và màu sắc/độ trong mờ." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.3.webp", note: "<strong className=\"text-slate-900\">Thử khóa silicone:</strong> Định hình sẵn khung vòm miệng (palatal shell) cho quá trình đắp composite." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.4.webp", note: "<strong className=\"text-slate-900\">Cách ly và sửa soạn:</strong> Răng được cách ly bằng <span className=\"text-[#00ADEF] font-semibold\"><span className=\"text-[#00ADEF] font-bold\">đê cao su</span></span> và vát mép (bevel) kỹ lưỡng ở đường viền." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.5.webp", note: "<strong className=\"text-slate-900\">Xử lý bề mặt - Etching:</strong> Xói mòn men răng để tạo vi lưu giữ cơ học cho hệ thống keo dán." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.6.webp", note: "<strong className=\"text-slate-900\">Bôi keo dán:</strong> Sử dụng băng keo Teflon bảo vệ răng kế cận và bôi hệ thống keo dán <span className=\"text-[#00ADEF] font-semibold\"><span className=\"text-[#00ADEF] font-bold\">Shofu BeautiBond Xtreme</span></span>." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.7.webp", note: "<strong className=\"text-slate-900\">Đắp lớp mặt trong - Palatal Shell:</strong> Sử dụng <span className=\"text-[#00ADEF] font-semibold\"><span className=\"text-[#00ADEF] font-bold\">Beautifil II</span></span> đắp lớp mỏng đầu tiên tựa vào khóa silicone tạo bức tường mặt trong." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.8.webp", note: "<strong className=\"text-slate-900\">Hình thể sơ khởi:</strong> Quá trình đắp các lớp composite ngà và men tiếp theo đã hoàn tất." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-8.9.webp", note: "<strong className=\"text-slate-900\">Kết quả sau cùng:</strong> Bề mặt phục hình đạt độ bóng láng hoàn hảo, tệp màu hoàn toàn với răng thật." }
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
                <p 
                  className="font-body text-slate-300 text-xs truncate"
                  dangerouslySetInnerHTML={{ __html: item.doctor }}
                />
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
                <div 
                  className="text-[#00ADEF] font-bold text-sm mb-4"
                  dangerouslySetInnerHTML={{ __html: caseStudies[selectedCaseIndex].doctor }}
                />
                <div className="w-12 h-1 bg-slate-200 mb-4"></div>
                
                <div className="relative min-h-[80px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="font-body text-slate-600 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: caseStudies[selectedCaseIndex].images[currentImageIndex].note || caseStudies[selectedCaseIndex].description
                      }}
                    />
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
