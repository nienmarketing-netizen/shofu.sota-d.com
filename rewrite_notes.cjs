const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const startIndex = content.indexOf('const caseStudies = [');
const endIndex = content.indexOf('];', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  let caseStudiesBlock = content.substring(startIndex, endIndex);

  // Here is the new array of notes we want to inject. We'll match them by the original `url` to make sure we replace the correct note.
  const notesMap = {
    // Case 1
    "case-study-1.1.webp": '<strong className="text-slate-900">Tình trạng ban đầu:</strong> Khoảng thưa rõ rệt giữa hai răng 11 và 21, gây mất thẩm mỹ khi giao tiếp.',
    "case-study-1.2.webp": '<strong className="text-slate-900">Cách ly và đánh dấu:</strong> Cách ly hoàn toàn bằng <span className="text-[#00ADEF] font-bold">đê cao su</span>. Bác sĩ đánh dấu đường viền và tỷ lệ mặt ngoài để định hướng đắp composite.',
    "case-study-1.3.webp": '<strong className="text-slate-900">Đặt màng khuôn trong suốt:</strong> Màng khuôn trong suốt được đặt vào kẽ răng để định hình thành bên, giúp composite không dính vào răng kế cận và tạo độ phồng tự nhiên.',
    "case-study-1.4.webp": '<strong className="text-slate-900">Xử lý bề mặt và Dán:</strong> Sau khi xói mòn men răng, bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> tạo độ bám dính vi cơ học vượt trội, đảm bảo phục hình bền chắc.',
    "case-study-1.5.webp": '<strong className="text-slate-900">Tạo hình sơ khởi:</strong> Khoảng thưa được đóng kín bằng composite thẩm mỹ <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span>. Hình thể đã hoàn thiện và chuẩn bị cho quá trình đánh bóng.',
    "case-study-1.6.webp": '<strong className="text-slate-900">Kết quả sau cùng:</strong> Phục hình hoàn thiện sau khi đánh bóng kỹ lưỡng bằng đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> và mũi cao su <span className="text-[#00ADEF] font-bold">OneGloss</span>. Bề mặt láng mịn, phản xạ ánh sáng tốt và tệp màu tự nhiên.',

    // Case 2
    "case-study-2.1.webp": '<strong className="text-slate-900">Tình trạng ban đầu:</strong> Lỗ sâu loại II lớn ở răng cối nhỏ hàm dưới liên quan mặt nhai và mặt bên, gây mất mô răng đáng kể.',
    "case-study-2.2.webp": '<strong className="text-slate-900">Đặt đê cao su & Phát hiện sâu răng:</strong> Cách ly bằng <span className="text-[#00ADEF] font-bold">đê cao su</span>. Sử dụng <span className="text-[#00ADEF] font-bold">Shofu Caries Detector</span> để xác định và loại bỏ triệt để mô nhiễm khuẩn.',
    "case-study-2.3.webp": '<strong className="text-slate-900">Sửa soạn xoang trám:</strong> Sửa soạn xoang hoàn tất. Mô sâu được loại bỏ hoàn toàn, tạo xoang trám sạch tối ưu cho phục hình.',
    "case-study-2.4.webp": '<strong className="text-slate-900">Đặt khuôn trám & Chêm:</strong> Khuôn trám kim loại và chêm gỗ được đặt để tái tạo hình thể mặt bên và điểm tiếp xúc tự nhiên.',
    "case-study-2.5.webp": '<strong className="text-slate-900">Xói mòn men/ngà:</strong> Bôi gel xói mòn <span className="text-[#00ADEF] font-bold">Shofu Etchant Gel</span> lên men và ngà răng để tạo vi hốc lưu giữ cơ học.',
    "case-study-2.6.webp": '<strong className="text-slate-900">Bôi chất dán:</strong> Bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> để đảm bảo độ bám dính tối ưu và giảm thiểu nhạy cảm sau điều trị.',
    "case-study-2.7.webp": '<strong className="text-slate-900">Phục hình hoàn tất:</strong> Phục hình bằng <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> và đánh bóng với <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span>. Kết quả phục hồi tự nhiên, tệp màu hoàn hảo và khôi phục chức năng nhai.',

    // Case 3
    "case-study-3.1.webp": '<strong className="text-slate-900">Tình trạng ban đầu:</strong> Răng cối nhỏ tổn thương xoang loại II lớn ở mặt nhai và kẽ mặt bên do sâu hoặc bong trảng trám cũ.',
    "case-study-3.2.webp": '<strong className="text-slate-900">Cách ly và sửa soạn:</strong> Cách ly bằng <span className="text-[#00ADEF] font-bold">đê cao su</span>. Làm sạch mô nhiễm khuẩn và sửa soạn vách xoang gọn gàng để dán dính.',
    "case-study-3.3.webp": '<strong className="text-slate-900">Bôi keo dán và trám lót:</strong> Bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>. Lót đáy xoang bằng composite lỏng <span className="text-[#00ADEF] font-bold">Shofu Beautifil Flow Plus</span> để lấp đầy góc khuất, ngăn bọt khí và vi kẽ.',
    "case-study-3.4.webp": '<strong className="text-slate-900">Kết quả sau cùng:</strong> Đắp lớp tạo hình bằng <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> và đánh bóng với <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> & <span className="text-[#00ADEF] font-bold">OneGloss</span>. Phục hình đạt độ bóng tự nhiên, hoàn thiện điểm tiếp xúc và chức năng nhai.',

    // Case 4
    "case-study-4.1.webp": '<strong className="text-slate-900">Tình trạng ban đầu:</strong> Bệnh nhân có nhiều khe thưa lớn giữa các răng cửa hàm trên, ảnh hưởng nghiêm trọng đến thẩm mỹ nụ cười.',
    "case-study-4.2.webp": '<strong className="text-slate-900">Cô lập và Cách ly:</strong> Sử dụng banh môi và dụng cụ cách ly để bộc lộ hoàn toàn vùng răng cửa, đảm bảo môi trường khô ráo sạch sẽ.',
    "case-study-4.3.webp": '<strong className="text-slate-900">Xử lý bề mặt:</strong> Làm sạch bề mặt răng để loại bỏ mảng bám sinh học, chuẩn bị tối ưu cho việc xói mòn và dán dính.',
    "case-study-4.4.webp": '<strong className="text-slate-900">Bôi gel xói mòn:</strong> Bôi gel <span className="text-[#00ADEF] font-bold">Shofu Select Etch</span> lên men răng vùng kẽ để tạo vi hốc xốp, tăng cường lưu giữ cơ học.',
    "case-study-4.5.webp": '<strong className="text-slate-900">Rửa sạch và Thổi khô:</strong> Rửa sạch gel xói mòn và thổi khô nhẹ nhàng. Bề mặt men răng trắng đục cho thấy xói mòn thành công.',
    "case-study-4.6.webp": '<strong className="text-slate-900">Xác định kích thước:</strong> Sử dụng thước đo chuyên dụng để xác định tỷ lệ và khoảng cách cần phục hồi, đảm bảo thân răng cân đối.',
    "case-study-4.7.webp": '<strong className="text-slate-900">Đặt khuôn và Đắp lớp:</strong> Đặt màng khuôn trong suốt. Bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> và đắp composite <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> tựa theo khuôn để lấp đầy khe thưa.',
    "case-study-4.8.webp": '<strong className="text-slate-900">Kết quả sau cùng:</strong> Bề mặt được đánh bóng tỉ mỉ bằng đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> và mũi cao su <span className="text-[#00ADEF] font-bold">OneGloss</span>, mô phỏng vân rãnh tự nhiên và tệp màu hoàn toàn với răng thật.',

    // Case 5
    "case-study-5.1.webp": '<strong className="text-slate-900">Tình trạng ban đầu:</strong> Các "tam giác đen" xuất hiện rõ rệt ở vùng kẽ răng cửa hàm dưới do tụt gai nướu, làm giảm đáng kể thẩm mỹ nụ cười.',
    "case-study-5.2.webp": '<strong className="text-slate-900">Kết quả & Quy trình:</strong> Khe hở được lấp đầy hoàn hảo bằng <span className="text-[#00ADEF] font-bold">Shofu Beautifil Injectable</span> sau khi xử lý bằng <span className="text-[#00ADEF] font-bold">Shofu Select Etch</span> và keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>. Bề mặt được đánh bóng vi phẫu bằng đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> & mũi cao su <span className="text-[#00ADEF] font-bold">OneGloss</span> mang lại độ láng mịn và tệp màu tự nhiên.',

    // Case 6
    "case-study-6.1.webp": '<strong className="text-slate-900">Tình trạng ban đầu:</strong> Bề mặt men răng cửa xuất hiện nhiều đốm trắng đục và mảng nâu, làm mất đi độ trong mờ tự nhiên và khiến nụ cười kém thẩm mỹ.',
    "case-study-6.2.webp": '<strong className="text-slate-900">Kết quả sau cùng:</strong> Xử lý vi mài mòn và che phủ bằng composite siêu mỏng <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> với keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>. Đánh bóng tích cực bằng <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span>, <span className="text-[#00ADEF] font-bold">OneGloss</span> và sáp <span className="text-[#00ADEF] font-bold">DirectDia Paste</span> che lấp hoàn toàn đốm màu, mang lại độ bóng láng hoàn hảo.',

    // Case 7
    "case-study-7.1.webp": '<strong className="text-slate-900">Tình trạng ban đầu:</strong> Răng 21 bị gãy vỡ mất góc gần và một phần rìa cắn. Bề mặt men răng có các gợn trắng và vệt màu tự nhiên đòi hỏi vật liệu trám phải tái tạo hiệu ứng tương đồng.',
    "case-study-7.2.webp": '<strong className="text-slate-900">Phân tích quang học với nền đen:</strong> Chụp cận cảnh với tấm nền đen để làm nổi bật độ trong mờ và chi tiết đốm trắng, giúp thiết lập "bản đồ màu sắc" chuẩn xác trước khi bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> và đắp lớp composite <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span>.',

    // Case 8 (already somewhat short, but we can clean it up slightly if needed, leaving as is for safety or standardizing)
    "case-study-8.1.webp": '<strong className="text-slate-900">Tình trạng ban đầu:</strong> Bệnh nhân bị mẻ góc cạnh cắn ở cả hai răng cửa giữa hàm trên (răng 11 và 21).',
    "case-study-8.2.webp": '<strong className="text-slate-900">Cận cảnh trước điều trị:</strong> Đánh giá chi tiết cấu trúc mô răng, mức độ tổn thương và màu sắc/độ trong mờ.',
    "case-study-8.3.webp": '<strong className="text-slate-900">Thử khóa silicone:</strong> Định hình sẵn khung vòm miệng (palatal shell) cho quá trình đắp composite.',
    "case-study-8.4.webp": '<strong className="text-slate-900">Cách ly và sửa soạn:</strong> Răng được cách ly bằng <span className="text-[#00ADEF] font-bold">đê cao su</span> và vát mép (bevel) kỹ lưỡng ở đường viền.',
    "case-study-8.5.webp": '<strong className="text-slate-900">Xử lý bề mặt - Etching:</strong> Xói mòn men răng để tạo vi lưu giữ cơ học cho hệ thống keo dán.',
    "case-study-8.6.webp": '<strong className="text-slate-900">Bôi keo dán:</strong> Sử dụng băng keo Teflon bảo vệ răng kế cận và bôi hệ thống keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>.',
    "case-study-8.7.webp": '<strong className="text-slate-900">Đắp lớp mặt trong - Palatal Shell:</strong> Sử dụng <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> đắp lớp mỏng đầu tiên tựa vào khóa silicone tạo bức tường mặt trong.',
    "case-study-8.8.webp": '<strong className="text-slate-900">Hình thể sơ khởi:</strong> Quá trình đắp các lớp composite ngà và men tiếp theo đã hoàn tất.',
    "case-study-8.9.webp": '<strong className="text-slate-900">Kết quả sau cùng:</strong> Bề mặt phục hình đạt độ bóng láng hoàn hảo, tệp màu hoàn toàn với răng thật.'
  };

  for (const [filename, newNote] of Object.entries(notesMap)) {
      // Create a regex to match the specific object with this filename
      // It looks like: { url: "...filename", note: "..." }
      
      const regex = new RegExp(`(\\{ url: "[^"]*${filename}", note: ")[^"]+(" \\})`, 'g');
      
      // Because there are some escaping issues with quotes in note string in regex, a better way:
      // We know `note:` is followed by a string. Let's parse carefully or use non-greedy matching.
      const safeRegex = new RegExp(`(\\{ url: "[^"]*${filename.replace('.', '\\.')}", note: ")[^"]+(" \\})`, 'g');
      
      // Let's replace:
      caseStudiesBlock = caseStudiesBlock.replace(safeRegex, `$1${newNote.replace(/"/g, '\\"')}$2`);
  }

  content = content.substring(0, startIndex) + caseStudiesBlock + content.substring(endIndex);
}

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Rewrite completed successfully!");
