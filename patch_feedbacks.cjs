const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const oldDesktopList = `                const testimonials = [
                  { text: "\\"Dòng sản phẩm tự dán ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ các bước nhạy cảm kỹ thuật.\\"", name: "Dr. Shukan Kanuga", role: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, CA" },
                  { text: "\\"Hệ thống Giomer đáp ứng trọn vẹn xu hướng vật liệu sinh học tự trị liệu nhờ cơ chế trung hòa axit, giải phóng và tái sạc ion liên tục.\\"", name: "Dr. Jennifer Bell", role: "Viện Thẩm mỹ Nha khoa Quốc tế, NC" },
                  { text: "\\"Lớp keo dán siêu mỏng dưới 5 micron tối ưu hóa khoảng ghép khít sát tuyệt đối, đồng thời là cầu nối lý tưởng giúp ion sinh học khuếch tán để bảo vệ mô răng.\\"", name: "Prof. Keiichi Hosaka", role: "ĐH Tokushima, Nhật Bản" },
                  { text: "\\"Gắn phục hình chưa bao giờ dễ dàng và an tâm đến thế. Bệnh nhân của tôi hoàn toàn không phàn nàn về bất kỳ cơn ê buốt nào sau điều trị. Điều này thực sự nâng tầm trải nghiệm phòng khám.\\"", name: "Dr. Michael Smith", role: "Chuyên gia Phục hình, New York" },
                  { text: "\\"BeautiLink SA giúp tiết kiệm một lượng thời gian khổng lồ. Quy trình đơn giản hơn, dọn dẹp xi măng thừa cực kỳ dễ dàng và độ lưu giữ vô cùng vượt trội.\\"", name: "Dr. Anna Lee", role: "Bác sĩ trưởng, Tuổi trẻ Nha khoa, Sydney" },
                  { text: "\\"Từ khi chuyển sang hệ thống Shofu, tỷ lệ sút phục hình tại phòng khám giảm gần như bằng không. Sự ổn định và bền vững khác biệt hoàn toàn so với trước đây.\\"", name: "Dr. Trần Văn An", role: "Chuyên gia Phục hình thẩm mỹ, TP.HCM" },
                  { text: "\\"Điều tôi thích nhất ở keo dán BeautiBond Xtreme là tính kỵ nước tuyệt đối. Nó tạo ra lớp màng bảo vệ hoàn hảo, ngăn chặn sự thoái hóa lớp lai theo thời gian.\\"", name: "Dr. Elena Rodriguez", role: "Viện thẩm mỹ Madrid, Tây Ban Nha" },
                  { text: "\\"Công nghệ hạt độn sinh học S-PRG thực sự thay đổi luật chơi trong việc ngăn ngừa sâu răng thứ phát dưới lớp phục hình, giúp viền luôn khỏe mạnh.\\"", name: "Prof. Tanaka", role: "Đại học Y khoa Tokyo, Nhật Bản" },
                  { text: "\\"Việc loại bỏ các chai lọ primer lỉnh kỉnh giúp tôi kiểm soát vật tư phòng khám tốt hơn hẳn. Ít sai sót lâm sàng hơn, hiệu quả kinh tế cao hơn rõ rệt.\\"", name: "Dr. William Chen", role: "Quản lý chuỗi nha khoa, Singapore" },
                  { text: "\\"Màng keo dán siêu mỏng giúp việc gắn các mặt dán veneer trở nên chính xác tuyệt đối mà không sợ cộm khớp hay làm đổi màu phục hình sứ.\\"", name: "Dr. Maria Garcia", role: "Thẩm mỹ Nha khoa Cao cấp, Brazil" }
                ];`;

const newDesktopList = `                const testimonials = [
                  { text: "\\"Dòng sản phẩm tự dán ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ các bước nhạy cảm kỹ thuật.\\"", name: "Dr. Shukan Kanuga", role: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, CA" },
                  { text: "\\"Khả năng che màu cùi răng của BeautiLink SA Opaque thực sự ấn tượng. Viền phục hình luôn tự nhiên và không bao giờ bị ánh xám sau nhiều năm.\\"", name: "Dr. Nguyễn Hải Đăng", role: "Chuyên gia Phục hình, Hà Nội" },
                  { text: "\\"Hệ thống Giomer đáp ứng trọn vẹn xu hướng vật liệu sinh học tự trị liệu nhờ cơ chế trung hòa axit, giải phóng và tái sạc ion liên tục.\\"", name: "Dr. Jennifer Bell", role: "Viện Thẩm mỹ Nha khoa Quốc tế, NC" },
                  { text: "\\"Lớp keo dán siêu mỏng dưới 5 micron tối ưu hóa khoảng ghép khít sát tuyệt đối, đồng thời là cầu nối lý tưởng giúp ion sinh học khuếch tán để bảo vệ mô răng.\\"", name: "Prof. Keiichi Hosaka", role: "ĐH Tokushima, Nhật Bản" },
                  { text: "\\"Điều làm tôi an tâm nhất khi dùng keo dán BBX là không còn lo bệnh nhân phàn nàn ê buốt sau gắn Veneer. Thao tác lại vô cùng tinh gọn.\\"", name: "Dr. Lê Huỳnh Anh", role: "Nha khoa Thẩm mỹ, Đà Nẵng" },
                  { text: "\\"Gắn phục hình chưa bao giờ dễ dàng và an tâm đến thế. Bệnh nhân của tôi hoàn toàn không phàn nàn về bất kỳ cơn ê buốt nào sau điều trị. Điều này thực sự nâng tầm trải nghiệm phòng khám.\\"", name: "Dr. Michael Smith", role: "Chuyên gia Phục hình, New York" },
                  { text: "\\"Từ khi chuyển sang hệ thống Shofu, tỷ lệ sút phục hình tại phòng khám giảm gần như bằng không. Sự ổn định và bền vững khác biệt hoàn toàn so với trước đây.\\"", name: "Dr. Trần Văn An", role: "Chuyên gia Phục hình thẩm mỹ, TP.HCM" },
                  { text: "\\"BeautiLink SA giúp tiết kiệm một lượng thời gian khổng lồ. Quy trình đơn giản hơn, dọn dẹp xi măng thừa cực kỳ dễ dàng và độ lưu giữ vô cùng vượt trội.\\"", name: "Dr. Anna Lee", role: "Bác sĩ trưởng, Tuổi trẻ Nha khoa, Sydney" },
                  { text: "\\"Từ ngày dùng xi măng của Shofu, tốc độ dọn dẹp xi măng thừa giảm xuống chỉ còn vài giây. Rất sạch sẽ và không gây kích ứng nướu.\\"", name: "Dr. Phạm Hoàng Tuấn", role: "Bác sĩ trưởng, Cần Thơ" },
                  { text: "\\"Điều tôi thích nhất ở keo dán BeautiBond Xtreme là tính kỵ nước tuyệt đối. Nó tạo ra lớp màng bảo vệ hoàn hảo, ngăn chặn sự thoái hóa lớp lai theo thời gian.\\"", name: "Dr. Elena Rodriguez", role: "Viện thẩm mỹ Madrid, Tây Ban Nha" },
                  { text: "\\"Công nghệ hạt độn sinh học S-PRG thực sự thay đổi luật chơi trong việc ngăn ngừa sâu răng thứ phát dưới lớp phục hình, giúp viền luôn khỏe mạnh.\\"", name: "Prof. Tanaka", role: "Đại học Y khoa Tokyo, Nhật Bản" },
                  { text: "\\"Tỷ lệ lưu giữ của BeautiLink SA với các ca cùi ngắn rất tuyệt vời. Kết hợp cùng BBX tạo nên một màng bảo vệ viền khít sát đến hoàn hảo.\\"", name: "Dr. Vũ Thanh Trà", role: "Chuyên gia Răng Hàm Mặt, Hải Phòng" },
                  { text: "\\"Việc loại bỏ các chai lọ primer lỉnh kỉnh giúp tôi kiểm soát vật tư phòng khám tốt hơn hẳn. Ít sai sót lâm sàng hơn, hiệu quả kinh tế cao hơn rõ rệt.\\"", name: "Dr. William Chen", role: "Quản lý chuỗi nha khoa, Singapore" },
                  { text: "\\"Màng keo dán siêu mỏng giúp việc gắn các mặt dán veneer trở nên chính xác tuyệt đối mà không sợ cộm khớp hay làm đổi màu phục hình sứ.\\"", name: "Dr. Maria Garcia", role: "Thẩm mỹ Nha khoa Cao cấp, Brazil" }
                ];`;

const oldMobileT1 = `                  const t1 = [
                    { text: "\\"Dòng sản phẩm tự dán ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ.\\"", name: "Dr. Shukan Kanuga", role: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, CA" },
                    { text: "\\"Hệ thống Giomer đáp ứng trọn vẹn xu hướng vật liệu sinh học tự trị liệu nhờ cơ chế trung hòa axit, giải phóng và tái sạc ion liên tục.\\"", name: "Dr. Jennifer Bell", role: "Viện Thẩm mỹ Nha khoa Quốc tế, NC" },
                    { text: "\\"Lớp keo dán siêu mỏng dưới 5 micron tối ưu hóa khoảng ghép khít sát tuyệt đối, đồng thời bảo vệ mô răng sống.\\"", name: "Prof. Keiichi Hosaka", role: "ĐH Tokushima, Nhật Bản" },
                    { text: "\\"Bệnh nhân của tôi hoàn toàn không phàn nàn về bất kỳ cơn ê buốt nào sau điều trị. Điều này thực sự nâng tầm trải nghiệm phòng khám.\\"", name: "Dr. Michael Smith", role: "Chuyên gia Phục hình, New York" },
                    { text: "\\"BeautiLink SA giúp tiết kiệm lượng lớn thời gian. Quy trình đơn giản hơn, dọn dẹp xi măng thừa dễ dàng và lưu giữ vượt trội.\\"", name: "Dr. Anna Lee", role: "Tuổi trẻ Nha khoa, Sydney" }
                  ];`;

const newMobileT1 = `                  const t1 = [
                    { text: "\\"Dòng sản phẩm tự dán ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ.\\"", name: "Dr. Shukan Kanuga", role: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, CA" },
                    { text: "\\"Khả năng che màu cùi răng của BeautiLink SA Opaque ấn tượng. Viền phục hình tự nhiên và không bị ánh xám.\\"", name: "Dr. Nguyễn Hải Đăng", role: "Chuyên gia Phục hình, Hà Nội" },
                    { text: "\\"Hệ thống Giomer đáp ứng trọn vẹn xu hướng vật liệu sinh học tự trị liệu nhờ cơ chế trung hòa axit, giải phóng ion liên tục.\\"", name: "Dr. Jennifer Bell", role: "Viện Thẩm mỹ Nha khoa Quốc tế, NC" },
                    { text: "\\"Lớp keo dán siêu mỏng dưới 5 micron tối ưu hóa khoảng ghép khít sát tuyệt đối, đồng thời bảo vệ mô răng sống.\\"", name: "Prof. Keiichi Hosaka", role: "ĐH Tokushima, Nhật Bản" },
                    { text: "\\"An tâm nhất khi dùng keo dán BBX là không còn lo bệnh nhân phàn nàn ê buốt sau gắn Veneer. Thao tác vô cùng tinh gọn.\\"", name: "Dr. Lê Huỳnh Anh", role: "Nha khoa Thẩm mỹ, Đà Nẵng" },
                    { text: "\\"Bệnh nhân của tôi hoàn toàn không phàn nàn về bất kỳ cơn ê buốt nào sau điều trị. Điều này thực sự nâng tầm trải nghiệm.\\"", name: "Dr. Michael Smith", role: "Chuyên gia Phục hình, New York" },
                    { text: "\\"Từ khi chuyển sang Shofu, tỷ lệ sút phục hình giảm gần như bằng không. Sự ổn định và bền vững khác biệt hoàn toàn.\\"", name: "Dr. Trần Văn An", role: "Chuyên gia Phục hình, TP.HCM" }
                  ];`;

const oldMobileT2 = `                  const t2 = [
                    { text: "\\"Từ khi chuyển sang Shofu, tỷ lệ sút phục hình giảm gần như bằng không. Sự ổn định và bền vững khác biệt hoàn toàn.\\"", name: "Dr. Trần Văn An", role: "Chuyên gia Phục hình, TP.HCM" },
                    { text: "\\"Tính kỵ nước tuyệt đối của BeautiBond Xtreme tạo ra lớp màng bảo vệ hoàn hảo, ngăn chặn sự thoái hóa lớp lai theo thời gian.\\"", name: "Dr. Elena Rodriguez", role: "Viện thẩm mỹ Madrid, Tây Ban Nha" },
                    { text: "\\"S-PRG thực sự thay đổi luật chơi trong việc ngăn ngừa sâu răng thứ phát dưới lớp phục hình, giúp viền luôn khỏe mạnh.\\"", name: "Prof. Tanaka", role: "Đại học Y khoa Tokyo, Nhật Bản" },
                    { text: "\\"Loại bỏ các chai lọ primer lỉnh kỉnh giúp kiểm soát vật tư phòng khám tốt hơn. Ít sai sót lâm sàng, hiệu quả kinh tế cao.\\"", name: "Dr. William Chen", role: "Quản lý chuỗi nha khoa, Singapore" },
                    { text: "\\"Màng keo dán siêu mỏng giúp gắn các veneer trở nên chính xác tuyệt đối mà không sợ cộm khớp hay làm đổi màu sứ.\\"", name: "Dr. Maria Garcia", role: "Nha khoa Cao cấp, Brazil" }
                  ];`;

const newMobileT2 = `                  const t2 = [
                    { text: "\\"BeautiLink SA giúp tiết kiệm lượng lớn thời gian. Quy trình đơn giản hơn, dọn dẹp xi măng thừa dễ dàng và lưu giữ vượt trội.\\"", name: "Dr. Anna Lee", role: "Tuổi trẻ Nha khoa, Sydney" },
                    { text: "\\"Từ ngày dùng xi măng của Shofu, tốc độ dọn dẹp xi măng thừa giảm xuống chỉ còn vài giây. Rất sạch sẽ và không gây kích ứng nướu.\\"", name: "Dr. Phạm Hoàng Tuấn", role: "Bác sĩ trưởng, Cần Thơ" },
                    { text: "\\"Tính kỵ nước tuyệt đối của BeautiBond Xtreme tạo ra lớp màng bảo vệ hoàn hảo, ngăn chặn sự thoái hóa lớp lai theo thời gian.\\"", name: "Dr. Elena Rodriguez", role: "Viện thẩm mỹ Madrid, Tây Ban Nha" },
                    { text: "\\"S-PRG thực sự thay đổi luật chơi trong việc ngăn ngừa sâu răng thứ phát dưới lớp phục hình, giúp viền luôn khỏe mạnh.\\"", name: "Prof. Tanaka", role: "Đại học Y khoa Tokyo, Nhật Bản" },
                    { text: "\\"Tỷ lệ lưu giữ của BeautiLink SA với các ca cùi ngắn tuyệt vời. Kết hợp BBX tạo màng bảo vệ viền khít sát đến hoàn hảo.\\"", name: "Dr. Vũ Thanh Trà", role: "Chuyên gia RHM, Hải Phòng" },
                    { text: "\\"Loại bỏ các chai lọ primer lỉnh kỉnh giúp kiểm soát vật tư phòng khám tốt hơn. Ít sai sót lâm sàng, hiệu quả kinh tế cao.\\"", name: "Dr. William Chen", role: "Quản lý chuỗi nha khoa, Singapore" },
                    { text: "\\"Màng keo dán siêu mỏng giúp gắn các veneer trở nên chính xác tuyệt đối mà không sợ cộm khớp hay làm đổi màu sứ.\\"", name: "Dr. Maria Garcia", role: "Nha khoa Cao cấp, Brazil" }
                  ];`;


content = content.replace(oldDesktopList, newDesktopList);
content = content.replace(oldMobileT1, newMobileT1);
content = content.replace(oldMobileT2, newMobileT2);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Updated");
