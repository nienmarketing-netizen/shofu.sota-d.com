const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const t1_old = `const t1 = [
                    { text: "\\"Hệ thống đánh bóng Shofu Super-Snap thực sự là tiêu chuẩn vàng. Độ bóng đạt được hoàn hảo chỉ trong tích tắc, giúp tiết kiệm thời gian đáng kể.\\"", name: "Dr. Hoàng Minh Tú", role: "Chuyên gia Phục hình, Hà Nội" },
                    { text: "\\"Công nghệ hạt độn sinh học S-PRG thực sự thay đổi luật chơi. Nhờ Giomer, tôi hoàn toàn yên tâm về khả năng phòng ngừa sâu răng thứ phát dưới lớp phục hình.\\"", name: "Prof. Tanaka", role: "Đại học Y khoa Tokyo, Nhật Bản" },
                    { text: "\\"Từ khi chuyển sang hệ thống Shofu Beautifil, tỷ lệ nhạy cảm sau trám giảm gần như bằng không. Sự ổn định và bền vững khác biệt hoàn toàn so với trước đây.\\"", name: "Dr. Trần Văn An", role: "Chuyên gia Phục hình thẩm mỹ, TP.HCM" },
                    { text: "\\"Dòng sản phẩm ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ các bước nhạy cảm kỹ thuật.\\"", name: "Dr. Shukan Kanuga", role: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, CA" },
                    { text: "\\"Hệ thống Giomer đáp ứng trọn vẹn xu hướng vật liệu sinh học tự trị liệu nhờ cơ chế trung hòa axit, giải phóng và tái sạc ion liên tục.\\"", name: "Dr. Jennifer Bell", role: "Viện Thẩm mỹ Nha khoa Quốc tế, NC" }
                  ];`;

const t1_new = `const t1 = [
                    { text: "\\"Hệ thống đánh bóng Super-Snap và OneGloss giúp tôi tiết kiệm 50% thời gian hoàn thiện miếng trám. Bề mặt composite sáng bóng như răng thật chỉ sau vài thao tác.\\"", name: "Dr. Hoàng Minh Tú", role: "Chuyên gia Thẩm mỹ, Hà Nội" },
                    { text: "\\"Hạt độn S-PRG trong Giomer thay đổi hoàn toàn tư duy trám răng. Không chỉ lấp đầy xoang sâu, miếng trám giờ đây còn chủ động phóng thích Fluoride bảo vệ mô răng xung quanh.\\"", name: "Prof. Tanaka", role: "Đại học Y khoa Tokyo, Nhật Bản" },
                    { text: "\\"Khả năng tái tạo quang học của Beautifil II rất ấn tượng. Hiệu ứng tắc kè hoa giúp miếng trám chìm hoàn toàn vào mô răng thật, không để lại đường viền lộ liễu.\\"", name: "Dr. Trần Văn An", role: "Chuyên gia Phục hình Thẩm mỹ, TP.HCM" },
                    { text: "\\"Lớp lai (hybrid layer) tạo bởi BeautiBond cực kỳ đồng nhất và kháng thủy phân tốt. Tình trạng ê buốt sau trám của bệnh nhân gần như bằng 0.\\"", name: "Dr. Nguyễn Hải Đăng", role: "Bác sĩ trưởng, Nha khoa Thẩm mỹ" },
                    { text: "\\"Độ cứng và khả năng chịu lực của dòng Beautifil Flow Plus khiến tôi kinh ngạc. Trám bít hố rãnh hay tạo thành bờ đều vô cùng đáp ứng và không bị chảy xệ.\\"", name: "Dr. Jennifer Bell", role: "Viện Thẩm mỹ Nha khoa Quốc tế, NC" }
                  ];`;

const t2_old = `const t2 = [
                    { text: "\\"Chất lượng thẩm mỹ của Composite Beautifil thực sự tuyệt vời. Hiệu ứng tắc kè hoa giúp màu sắc tệp hoàn toàn vào răng thật.\\"", name: "Dr. Anna Lee", role: "Bác sĩ trưởng, Tuổi trẻ Nha khoa, Sydney" },
                    { text: "\\"Điều tôi thích nhất ở keo dán BeautiBond Xtreme là tính kỵ nước tuyệt đối. Nó tạo ra lớp màng bảo vệ hoàn hảo, thao tác lại vô cùng tinh gọn.\\"", name: "Dr. Elena Rodriguez", role: "Viện thẩm mỹ Madrid, Tây Ban Nha" },
                    { text: "\\"Tốc độ đánh bóng và độ bền màu của vật liệu Shofu giúp bệnh nhân của tôi luôn hài lòng tuyệt đối sau nhiều năm theo dõi.\\"", name: "Dr. Phạm Hoàng Tuấn", role: "Bác sĩ trưởng, Cần Thơ" },
                    { text: "\\"Màng keo dán siêu mỏng giúp việc thực hiện các miếng trám xoang lớn trở nên chính xác tuyệt đối mà không sợ cộm khớp.\\"", name: "Dr. Maria Garcia", role: "Nha khoa Cao cấp, Brazil" },
                    { text: "\\"Trám răng chưa bao giờ dễ dàng và an tâm đến thế. Bệnh nhân của tôi hoàn toàn không phàn nàn về bất kỳ cơn ê buốt nào sau điều trị.\\"", name: "Dr. Michael Smith", role: "Chuyên gia Phục hình, New York" }
                  ];`;

const t2_new = `const t2 = [
                    { text: "\\"Độ co ngót thể tích siêu thấp của Beautifil II LS (chỉ 0.85%) giải quyết triệt để vấn đề vi thấm và sút vỡ viền miếng trám cho các ca xoang II lớn.\\"", name: "Dr. Anna Lee", role: "Bác sĩ trưởng, Nha khoa Kỹ thuật cao, Sydney" },
                    { text: "\\"Khả năng trung hòa axit và chống bám đọng mảng bám của composite Shofu giúp viền nướu quanh miếng trám xoang V luôn hồng hào và khỏe mạnh sau nhiều năm.\\"", name: "Dr. Phạm Hoàng Tuấn", role: "Bác sĩ trưởng, Cần Thơ" },
                    { text: "\\"Chỉ với 1 mũi OneGloss duy nhất, tôi có thể thay đổi áp lực tay để vừa tạo hình vừa đánh bóng miếng trám. Quá tinh gọn và hiệu quả cho phòng khám bận rộn.\\"", name: "Dr. Lê Huỳnh Anh", role: "Nha khoa Thẩm mỹ, Đà Nẵng" },
                    { text: "\\"Độ nhớt của Beautifil Flow rất vừa phải, dễ dàng len lỏi vào các vùng ngách phức tạp mà không để lại bọt khí. Cản quang tốt giúp dễ kiểm soát trên phim X-quang.\\"", name: "Dr. Maria Garcia", role: "Nha khoa Cao cấp, Brazil" },
                    { text: "\\"Công nghệ monomer kép kỵ nước của Shofu mang lại lực dán ổn định trên cả men và ngà mà không cần các bước primer phức tạp. Nhanh chóng và vô cùng an tâm.\\"", name: "Dr. Michael Smith", role: "Chuyên gia Phục hình, New York" }
                  ];`;

content = content.replace(t1_old, t1_new);
content = content.replace(t2_old, t2_new);

fs.writeFileSync(file_path, content);
console.log("Feedbacks updated");
