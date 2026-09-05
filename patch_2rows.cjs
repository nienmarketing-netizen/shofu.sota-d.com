const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStart = '{/* Marquee Wrapper (Full Width) */}';
const targetEnd = '        {/* Re-open w-[90%] container for the button */}';

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd);

if (startIndex === -1 || endIndex === -1) {
  console.log('Targets not found');
  process.exit(1);
}

const replacementHTML = `{/* Marquee Wrapper (Full Width) */}
        <div className="relative z-10 w-full overflow-hidden flex flex-col gap-6 lg:gap-8 pb-4">
          
          {/* ALL SCREENS (2 Rows) */}
          <div className="flex flex-col gap-6 w-full overflow-hidden">
            {/* Row 1 - Left */}
            <div className="flex overflow-hidden group w-full">
              <div className="flex animate-marquee-left w-max hover:animation-play-state-paused">
                {(() => {
                  const t1 = [
                    { text: "\\"Dòng sản phẩm tự dán ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ các bước nhạy cảm kỹ thuật.\\"", name: "Dr. Shukan Kanuga", role: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, CA" },
                    { text: "\\"Khả năng che màu cùi răng của BeautiLink SA Opaque thực sự ấn tượng. Viền phục hình luôn tự nhiên và không bao giờ bị ánh xám sau nhiều năm.\\"", name: "Dr. Nguyễn Hải Đăng", role: "Chuyên gia Phục hình, Hà Nội" },
                    { text: "\\"Hệ thống Giomer đáp ứng trọn vẹn xu hướng vật liệu sinh học tự trị liệu nhờ cơ chế trung hòa axit, giải phóng và tái sạc ion liên tục.\\"", name: "Dr. Jennifer Bell", role: "Viện Thẩm mỹ Nha khoa Quốc tế, NC" },
                    { text: "\\"Lớp keo dán siêu mỏng dưới 5 micron tối ưu hóa khoảng ghép khít sát tuyệt đối, đồng thời là cầu nối lý tưởng giúp ion sinh học khuếch tán để bảo vệ mô răng.\\"", name: "Prof. Keiichi Hosaka", role: "ĐH Tokushima, Nhật Bản" },
                    { text: "\\"Điều làm tôi an tâm nhất khi dùng keo dán BBX là không còn lo bệnh nhân phàn nàn ê buốt sau gắn Veneer. Thao tác lại vô cùng tinh gọn.\\"", name: "Dr. Lê Huỳnh Anh", role: "Nha khoa Thẩm mỹ, Đà Nẵng" },
                    { text: "\\"Gắn phục hình chưa bao giờ dễ dàng và an tâm đến thế. Bệnh nhân của tôi hoàn toàn không phàn nàn về bất kỳ cơn ê buốt nào sau điều trị. Điều này thực sự nâng tầm trải nghiệm phòng khám.\\"", name: "Dr. Michael Smith", role: "Chuyên gia Phục hình, New York" },
                    { text: "\\"Từ khi chuyển sang hệ thống Shofu, tỷ lệ sút phục hình tại phòng khám giảm gần như bằng không. Sự ổn định và bền vững khác biệt hoàn toàn so với trước đây.\\"", name: "Dr. Trần Văn An", role: "Chuyên gia Phục hình thẩm mỹ, TP.HCM" }
                  ];
                  const dup = [...t1, ...t1];
                  return dup.map((item, idx) => (
                    <div key={\`row-1-\${idx}\`} className="bg-white rounded-2xl p-5 lg:p-6 shadow-sm flex flex-col w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 mx-2 sm:mx-3 border border-slate-100 whitespace-normal">
                      <p className="font-body text-[13.5px] sm:text-[14px] text-slate-600 italic mb-5 lg:mb-6 leading-relaxed flex-1">{item.text}</p>
                      <div className="border-t border-slate-100 pt-4 lg:pt-5 mt-auto">
                        <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 text-slate-900">{item.name}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-500">{item.role}</p>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
            
            {/* Row 2 - Right */}
            <div className="flex overflow-hidden group w-full">
              <div className="flex animate-marquee-right w-max hover:animation-play-state-paused">
                {(() => {
                  const t2 = [
                    { text: "\\"BeautiLink SA giúp tiết kiệm một lượng thời gian khổng lồ. Quy trình đơn giản hơn, dọn dẹp xi măng thừa cực kỳ dễ dàng và độ lưu giữ vô cùng vượt trội.\\"", name: "Dr. Anna Lee", role: "Bác sĩ trưởng, Tuổi trẻ Nha khoa, Sydney" },
                    { text: "\\"Từ ngày dùng xi măng của Shofu, tốc độ dọn dẹp xi măng thừa giảm xuống chỉ còn vài giây. Rất sạch sẽ và không gây kích ứng nướu.\\"", name: "Dr. Phạm Hoàng Tuấn", role: "Bác sĩ trưởng, Cần Thơ" },
                    { text: "\\"Điều tôi thích nhất ở keo dán BeautiBond Xtreme là tính kỵ nước tuyệt đối. Nó tạo ra lớp màng bảo vệ hoàn hảo, ngăn chặn sự thoái hóa lớp lai theo thời gian.\\"", name: "Dr. Elena Rodriguez", role: "Viện thẩm mỹ Madrid, Tây Ban Nha" },
                    { text: "\\"Công nghệ hạt độn sinh học S-PRG thực sự thay đổi luật chơi trong việc ngăn ngừa sâu răng thứ phát dưới lớp phục hình, giúp viền luôn khỏe mạnh.\\"", name: "Prof. Tanaka", role: "Đại học Y khoa Tokyo, Nhật Bản" },
                    { text: "\\"Tỷ lệ lưu giữ của BeautiLink SA với các ca cùi ngắn rất tuyệt vời. Kết hợp cùng BBX tạo nên một màng bảo vệ viền khít sát đến hoàn hảo.\\"", name: "Dr. Vũ Thanh Trà", role: "Chuyên gia RHM, Hải Phòng" },
                    { text: "\\"Việc loại bỏ các chai lọ primer lỉnh kỉnh giúp tôi kiểm soát vật tư phòng khám tốt hơn hẳn. Ít sai sót lâm sàng hơn, hiệu quả kinh tế cao hơn rõ rệt.\\"", name: "Dr. William Chen", role: "Quản lý chuỗi nha khoa, Singapore" },
                    { text: "\\"Màng keo dán siêu mỏng giúp việc gắn các mặt dán veneer trở nên chính xác tuyệt đối mà không sợ cộm khớp hay làm đổi màu phục hình sứ.\\"", name: "Dr. Maria Garcia", role: "Nha khoa Cao cấp, Brazil" }
                  ];
                  const dup = [...t2, ...t2];
                  return dup.map((item, idx) => (
                    <div key={\`row-2-\${idx}\`} className="bg-white rounded-2xl p-5 lg:p-6 shadow-sm flex flex-col w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 mx-2 sm:mx-3 border border-slate-100 whitespace-normal">
                      <p className="font-body text-[13.5px] sm:text-[14px] text-slate-600 italic mb-5 lg:mb-6 leading-relaxed flex-1">{item.text}</p>
                      <div className="border-t border-slate-100 pt-4 lg:pt-5 mt-auto">
                        <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 text-slate-900">{item.name}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-500">{item.role}</p>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>

        </div>
`;

let newContent = content.substring(0, startIndex) + replacementHTML + content.substring(endIndex);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', newContent);
console.log('Updated');
