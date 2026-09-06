const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const replacements = [
    // Case 1
    {
        old: 'Hình ảnh trước điều trị cho thấy bệnh nhân có một khoảng thưa rõ rệt (khe thưa răng cửa) giữa hai răng 11 và 21, gây mất thẩm mỹ khi giao tiếp.',
        new: 'Khoảng thưa rõ rệt giữa hai răng 11 và 21, gây mất thẩm mỹ khi giao tiếp.'
    },
    {
        old: 'Răng được cách ly tuyệt đối bằng <span className="text-[#00ADEF] font-bold">đê cao su</span> (<span className="text-[#00ADEF] font-bold">rubber dam</span>) để đảm bảo môi trường hoàn toàn khô ráo. Bác sĩ dùng bút đánh dấu các đường viền và tỷ lệ kích thước trên mặt ngoài để định hướng quá trình đắp vật liệu cân xứng.',
        new: 'Cách ly hoàn toàn bằng <span className="text-[#00ADEF] font-bold">đê cao su</span>. Bác sĩ đánh dấu đường viền và tỷ lệ mặt ngoài để định hướng quá trình đắp composite.'
    },
    {
        old: 'Màng khuôn trong suốt (celluloid matrix band) được đặt cẩn thận vào vùng kẽ răng. Bước này đóng vai trò như một bức tường định hình thành bên (mesial wall), giúp composite không bị dính vào răng kế cận và tạo độ phồng tự nhiên.',
        new: 'Màng khuôn trong suốt được đặt vào kẽ răng để định hình thành bên, giúp composite không dính vào răng kế cận và tạo độ phồng tự nhiên.'
    },
    {
        old: 'Sau khi làm sạch và xói mòn bề mặt men răng ở vùng kẽ, bác sĩ bôi hệ thống keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>. Lớp keo này giúp tạo ra độ bám dính vi cơ học vượt trội, đảm bảo khối composite liên kết chặt chẽ và lâu bền với mô răng thật.',
        new: 'Sau khi xói mòn men răng, bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> để tạo độ bám dính vi cơ học vượt trội, đảm bảo phục hình bền chắc.'
    },
    {
        old: 'Khoảng thưa đã được đóng kín hoàn toàn bằng cách đắp từng lớp vật liệu composite thẩm mỹ <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span>. Hình ảnh được chụp ngay sau khi tháo <span className="text-[#00ADEF] font-bold">đê cao su</span>; lúc này hình thể răng đã hoàn thiện nhưng phần nướu kẽ răng hơi đỏ (phản ứng tạm thời do đặt khuôn) và bề mặt răng cần được đánh bóng thêm.',
        new: 'Khoảng thưa được đóng kín bằng composite thẩm mỹ <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span>. Hình thể đã hoàn thiện và chuẩn bị cho quá trình đánh bóng.'
    },
    {
        old: 'Phục hình hoàn thiện sau khi được tạo hình chi tiết và đánh bóng kỹ lưỡng bằng hệ thống đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> kết hợp mũi cao su <span className="text-[#00ADEF] font-bold">OneGloss</span>. Bề mặt kẽ răng đạt độ láng mịn, phản xạ ánh sáng tốt và tệp màu hoàn toàn với men răng tự nhiên xung quanh.',
        new: 'Phục hình hoàn thiện sau khi đánh bóng kỹ lưỡng bằng đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> và mũi cao su <span className="text-[#00ADEF] font-bold">OneGloss</span>. Bề mặt láng mịn, phản xạ ánh sáng tốt và tệp màu hoàn toàn với răng thật.'
    },

    // Case 2
    {
        old: 'Hình ảnh cận cảnh răng cối nhỏ hàm dưới (ví dụ: răng 35 hoặc 45) với lỗ sâu loại II lớn liên quan đến mặt nhai và mặt bên, gây mất mô răng đáng kể.',
        new: 'Lỗ sâu loại II lớn ở răng cối nhỏ hàm dưới liên quan mặt nhai và mặt bên, gây mất mô răng đáng kể.'
    },
    {
        old: '<span className="text-[#00ADEF] font-bold">đê cao su</span> được đặt để cách ly hoàn toàn trường phẫu thuật khỏi độ ẩm. Bác sĩ sử dụng chất phát hiện sâu răng <span className="text-[#00ADEF] font-bold">Shofu Caries Detector</span> (màu hồng) để xác định chính xác và loại bỏ triệt để mô răng bị nhiễm khuẩn.',
        new: 'Cách ly bằng <span className="text-[#00ADEF] font-bold">đê cao su</span>. Sử dụng chất phát hiện sâu răng <span className="text-[#00ADEF] font-bold">Shofu Caries Detector</span> để xác định và loại bỏ triệt để mô nhiễm khuẩn.'
    },
    {
        old: 'Quy trình sửa soạn xoang trám hoàn tất. Mô răng sâu đã được loại bỏ hoàn toàn, tạo ra một xoang trám sạch, được thiết kế tối ưu cho phục hình composite.',
        new: 'Sửa soạn xoang hoàn tất. Mô sâu được loại bỏ hoàn toàn, tạo xoang trám sạch tối ưu cho phục hình.'
    },
    {
        old: 'Một khuôn trám kim loại và chêm gỗ được đặt xung quanh răng để tái tạo hình thể mặt bên và điểm tiếp xúc tự nhiên với răng lân cận.',
        new: 'Khuôn trám kim loại và chêm gỗ được đặt để tái tạo hình thể mặt bên và điểm tiếp xúc tự nhiên.'
    },
    {
        old: 'Bác sĩ bôi gel xói mòn <span className="text-[#00ADEF] font-bold">Shofu Etchant Gel</span> lên bề mặt men và ngà răng để tạo các vi hốc lưu giữ cho chất dán.',
        new: 'Bôi gel xói mòn <span className="text-[#00ADEF] font-bold">Shofu Etchant Gel</span> lên men và ngà răng để tạo vi hốc lưu giữ cơ học.'
    },
    {
        old: 'Bôi chất dán một bước <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> lên xoang trám đã được xói mòn để đảm bảo độ bám dính tối ưu giữa mô răng và composite, đồng thời giảm thiểu độ nhạy cảm sau điều trị.',
        new: 'Bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> để đảm bảo độ bám dính tối ưu và giảm thiểu nhạy cảm sau điều trị.'
    },
    {
        old: 'Phục hình composite được đắp lớp và tạo hình giải phẫu bằng <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span>, sau khi được đánh bóng bằng hệ thống <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span>. Hình ảnh cho thấy kết quả phục hồi thẩm mỹ tự nhiên, tệp màu hoàn hảo với răng thật và khôi phục chức năng nhai.',
        new: 'Phục hình bằng <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> và đánh bóng với <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span>. Kết quả phục hồi tự nhiên, tệp màu hoàn hảo và khôi phục chức năng nhai.'
    },

    // Case 3
    {
        old: 'Hình ảnh khớp cắn cho thấy răng cối nhỏ có tổn thương xoang loại II (mất chất phần lớn ở mặt nhai và kẽ mặt bên) do sâu răng hoặc bong tróc mảng trám cũ, cần được làm sạch và phục hồi lại.',
        new: 'Răng cối nhỏ tổn thương xoang loại II lớn ở mặt nhai và kẽ mặt bên do sâu hoặc bong trảng trám cũ.'
    },
    {
        old: 'Răng được cách ly an toàn và khô ráo tuyệt đối bằng hệ thống <span className="text-[#00ADEF] font-bold">đê cao su</span> (<span className="text-[#00ADEF] font-bold">rubber dam</span>). Bác sĩ đã tiến hành làm sạch toàn bộ mô ngà nhiễm khuẩn, sửa soạn thành vách xoang trám gọn gàng, sẵn sàng cho quy trình dán dính.',
        new: 'Cách ly bằng <span className="text-[#00ADEF] font-bold">đê cao su</span>. Làm sạch mô nhiễm khuẩn và sửa soạn vách xoang gọn gàng để dán dính.'
    },
    {
        old: 'Xoang trám sáng bóng sau khi được xử lý bề mặt và phủ hệ thống keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> giúp bám dính vi cơ học tối đa. Ở phần đáy xoang và mặt bên, bác sĩ lót một lớp mỏng composite lỏng <span className="text-[#00ADEF] font-bold">Shofu Beautifil Flow Plus</span> để đảm bảo vật liệu len lỏi khít sát vào các góc khuất, ngăn ngừa bọt khí và vi kẽ.',
        new: 'Bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>. Lót đáy xoang bằng composite lỏng <span className="text-[#00ADEF] font-bold">Shofu Beautifil Flow Plus</span> để lấp đầy góc khuất, ngăn bọt khí và vi kẽ.'
    },
    {
        old: 'Hình ảnh sau khi tháo <span className="text-[#00ADEF] font-bold">đê cao su</span>. Răng được đắp lớp và tạo hình giải phẫu mặt nhai chi tiết bằng vật liệu composite hạt độn <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span>. Sau khi đánh bóng bằng hệ thống đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> và mũi cao su <span className="text-[#00ADEF] font-bold">OneGloss</span>, phục hình đạt độ bóng mượt tự nhiên, phục hồi hoàn hảo điểm tiếp xúc kẽ và chức năng ăn nhai.',
        new: 'Đắp lớp tạo hình bằng <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> và đánh bóng với <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> & <span className="text-[#00ADEF] font-bold">OneGloss</span>. Phục hình đạt độ bóng tự nhiên, hoàn thiện điểm tiếp xúc và chức năng nhai.'
    },

    // Case 4
    {
        old: 'Hình ảnh cho thấy bệnh nhân có nhiều khe thưa lớn giữa các răng cửa hàm trên (từ răng 12 đến răng 22), gây ảnh hưởng nghiêm trọng đến thẩm mỹ nụ cười.',
        new: 'Bệnh nhân có nhiều khe thưa lớn giữa các răng cửa hàm trên, ảnh hưởng nghiêm trọng đến thẩm mỹ nụ cười.'
    },
    {
        old: 'Sử dụng banh môi và dụng cụ cách ly để bộc lộ hoàn toàn vùng răng cửa, đảm bảo môi trường làm việc khô ráo và sạch sẽ trước khi thực hiện quy trình phục hình.',
        new: 'Sử dụng banh môi và dụng cụ cách ly để bộc lộ hoàn toàn vùng răng cửa, đảm bảo môi trường khô ráo sạch sẽ.'
    },
    {
        old: 'Bề mặt các răng cần trám được làm sạch kỹ lưỡng để loại bỏ mảng bám sinh học. Bước này chuẩn bị bề mặt men răng tối ưu cho việc xói mòn và dán dính composite.',
        new: 'Làm sạch bề mặt răng để loại bỏ mảng bám sinh học, chuẩn bị tối ưu cho việc xói mòn và dán dính.'
    },
    {
        old: 'Gel xói mòn <span className="text-[#00ADEF] font-bold">Shofu Select Etch</span> (axit phosphoric) được bôi cẩn thận lên bề mặt men răng vùng kẽ. Thao tác này tạo ra các vi hốc xốp trên men răng, giúp tăng cường lưu giữ cơ học cho chất dán.',
        new: 'Bôi gel xói mòn <span className="text-[#00ADEF] font-bold">Shofu Select Etch</span> lên men răng vùng kẽ để tạo vi hốc xốp, tăng cường lưu giữ cơ học.'
    },
    {
        old: 'Gel xói mòn được rửa sạch hoàn toàn bằng nước. Sau đó, bề mặt răng được thổi khô nhẹ nhàng, để lại bề mặt men răng trắng đục, dấu hiệu của quá trình xói mòn thành công.',
        new: 'Rửa sạch gel xói mòn và thổi khô nhẹ nhàng. Bề mặt men răng trắng đục cho thấy xói mòn thành công.'
    },
    {
        old: 'Bác sĩ sử dụng thước đo chuyên dụng để kiểm tra và xác định chính xác tỷ lệ, khoảng cách cần phục hồi, đảm bảo tính cân đối và thẩm mỹ cho các thân răng sau khi đắp composite.',
        new: 'Sử dụng thước đo chuyên dụng để xác định tỷ lệ và khoảng cách cần phục hồi, đảm bảo thân răng cân đối.'
    },
    {
        old: 'Một dải màng khuôn trong suốt (celluloid matrix) được đặt vào vị trí để định hình thành bên của răng. Sau khi xử lý bằng hệ thống keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>, bác sĩ đắp vật liệu composite <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> tựa theo màng khuôn để tạo hình khối hoàn hảo lấp đầy khe thưa.',
        new: 'Đặt màng khuôn trong suốt. Bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> và đắp composite <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> tựa theo khuôn để lấp đầy khe thưa.'
    },
    {
        old: 'Hình ảnh ngay sau khi tháo <span className="text-[#00ADEF] font-bold">đê cao su</span> và hoàn thiện. Bề mặt phục hình được đánh bóng tỉ mỉ bằng hệ thống đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> và mũi cao su <span className="text-[#00ADEF] font-bold">OneGloss</span>, mang lại độ bóng láng, mô phỏng xuất sắc các đường vân rãnh tự nhiên và tệp màu hoàn toàn với răng thật.',
        new: 'Bề mặt được đánh bóng tỉ mỉ bằng đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> và mũi cao su <span className="text-[#00ADEF] font-bold">OneGloss</span>, mô phỏng vân rãnh tự nhiên và tệp màu hoàn toàn với răng thật.'
    },

    // Case 5 (5.1 is a bit long)
    {
        old: 'Hình ảnh cận cảnh cho thấy các \\"tam giác đen\\" xuất hiện rõ rệt ở vùng kẽ giữa các răng cửa hàm dưới do sự tiêu ngót của mô nướu. Men răng khỏe mạnh nhưng các khoảng trống này làm giảm đáng kể tính thẩm mỹ tổng thể.',
        new: 'Các \\"tam giác đen\\" xuất hiện rõ rệt ở vùng kẽ răng cửa hàm dưới do tụt gai nướu, làm giảm đáng kể thẩm mỹ nụ cười.'
    },

    // Case 6
    {
        old: 'Hình ảnh trước điều trị cho thấy bề mặt men các răng cửa hàm trên (đặc biệt là răng 11 và 21) xuất hiện nhiều đốm trắng đục và mảng nâu. Tình trạng loang lổ này làm mất đi độ trong mờ tự nhiên của men răng, khiến nụ cười trở nên xỉn màu và kém thẩm mỹ.',
        new: 'Bề mặt men răng cửa xuất hiện nhiều đốm trắng đục và mảng nâu, làm mất đi độ trong mờ tự nhiên và khiến nụ cười kém thẩm mỹ.'
    },
    {
        old: 'Hình ảnh sau khi bề mặt răng được xử lý vi mài mòn và che phủ khiếm khuyết bằng một lớp siêu mỏng composite <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> (sử dụng hệ thống keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>). Để đạt được bề mặt nhẵn mịn như men răng thật, bác sĩ đã tiến hành đánh bóng tích cực bằng hệ thống đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span>, kết hợp mũi cao su <span className="text-[#00ADEF] font-bold">OneGloss</span> và sáp đánh bóng <span className="text-[#00ADEF] font-bold">DirectDia Paste</span>. Kết quả cho thấy các đốm màu đã được che lấp hoàn toàn, răng đạt độ bóng láng và tệp màu hoàn hảo.',
        new: 'Xử lý vi mài mòn và che phủ bằng composite siêu mỏng <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> với keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>. Đánh bóng tích cực bằng <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span>, <span className="text-[#00ADEF] font-bold">OneGloss</span> và sáp <span className="text-[#00ADEF] font-bold">DirectDia Paste</span> che lấp hoàn toàn đốm màu, mang lại độ bóng láng hoàn hảo.'
    },

    // Case 7
    {
        old: 'Hình ảnh khớp cắn trung tâm cho thấy răng 21 bị gãy vỡ mất góc gần và một phần rìa cắn (có thể do chấn thương hoặc cắn vật cứng), gây mất thẩm mỹ. Bề mặt men răng có các gợn trắng đục và vệt màu tự nhiên, đòi hỏi vật liệu trám phải có khả năng tái tạo hiệu ứng tương đồng.',
        new: 'Răng 21 bị gãy vỡ mất góc gần và một phần rìa cắn. Bề mặt men răng có các gợn trắng và vệt màu tự nhiên đòi hỏi vật liệu trám phải tái tạo hiệu ứng tương đồng.'
    },
    {
        old: 'Bác sĩ sử dụng tấm nền đen (contrastor) trong miệng để chụp cận cảnh, cô lập ánh sáng chói. Bước này giúp làm nổi bật rõ rệt độ trong mờ (translucency) ở phần rìa cắn, độ dày của men răng và chi tiết các đốm trắng. Đây là thao tác bắt buộc để thiết lập \\"bản đồ màu sắc\\" (color mapping) chuẩn xác, chuẩn bị cho kỹ thuật sửa soạn, bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> và đắp lớp (layering) bằng các sắc độ ngà, men của hệ thống composite <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span> ở các bước tiếp theo.',
        new: 'Chụp cận cảnh với tấm nền đen để làm nổi bật độ trong mờ và chi tiết đốm trắng, giúp thiết lập \\"bản đồ màu sắc\\" chuẩn xác trước khi bôi keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> và đắp lớp composite <span className="text-[#00ADEF] font-bold">Shofu Beautifil II</span>.'
    }
];

let matchCount = 0;
replacements.forEach(({old, new: newText}) => {
    if (content.includes(old)) {
        content = content.replace(old, newText);
        matchCount++;
    } else {
        console.log("Could not find:", old.substring(0, 50) + "...");
    }
});

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log(`Replaced ${matchCount}/${replacements.length} strings successfully!`);
