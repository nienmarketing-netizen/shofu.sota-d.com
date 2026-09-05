const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStart = '<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">';
const targetEnd = '<div className="mt-12 md:mt-16 text-center relative z-10">';

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.log('Targets not found');
  process.exit(1);
}

// Find <section className="py-20 lg:py-28 bg-slate-100 relative overflow-hidden">
const sectionStartTag = '<section className="py-20 lg:py-28 bg-slate-100 relative overflow-hidden">';
const newSectionStartTag = `<section className="py-20 lg:py-28 bg-slate-100 relative overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: \`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marquee-left 40s linear infinite;
          }
          .animate-marquee-right {
            animation: marquee-right 40s linear infinite;
          }
          .animate-marquee-left:hover, .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        \`}} />`;

const replacementHTML = `        {/* Marquee Wrapper */}
        <div className="relative z-10 w-full overflow-hidden flex flex-col gap-6 lg:gap-8 pb-4">
          
          {/* DESKTOP (1 Row) */}
          <div className="hidden lg:flex overflow-hidden group w-full">
            <div className="flex animate-marquee-left w-max hover:animation-play-state-paused">
              {(() => {
                const testimonials = [
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
                ];
                
                const duplicated = [...testimonials, ...testimonials];
                return duplicated.map((item, idx) => (
                  <div key={\`desktop-\${idx}\`} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col w-[350px] shrink-0 mx-3 sm:mx-4 border border-slate-100 whitespace-normal">
                    <p className="font-body text-[14px] text-slate-600 italic mb-6 leading-relaxed flex-1">{item.text}</p>
                    <div className="border-t border-slate-100 pt-5 mt-auto">
                      <h4 className="font-heading font-bold text-[15px] mb-1 text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>

          {/* MOBILE (2 Rows) */}
          <div className="flex flex-col gap-6 lg:hidden w-full overflow-hidden">
            {/* Row 1 - Left */}
            <div className="flex overflow-hidden group w-full">
              <div className="flex animate-marquee-left w-max hover:animation-play-state-paused">
                {(() => {
                  const t1 = [
                    { text: "\\"Dòng sản phẩm tự dán ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ.\\"", name: "Dr. Shukan Kanuga", role: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, CA" },
                    { text: "\\"Hệ thống Giomer đáp ứng trọn vẹn xu hướng vật liệu sinh học tự trị liệu nhờ cơ chế trung hòa axit, giải phóng và tái sạc ion liên tục.\\"", name: "Dr. Jennifer Bell", role: "Viện Thẩm mỹ Nha khoa Quốc tế, NC" },
                    { text: "\\"Lớp keo dán siêu mỏng dưới 5 micron tối ưu hóa khoảng ghép khít sát tuyệt đối, đồng thời bảo vệ mô răng sống.\\"", name: "Prof. Keiichi Hosaka", role: "ĐH Tokushima, Nhật Bản" },
                    { text: "\\"Bệnh nhân của tôi hoàn toàn không phàn nàn về bất kỳ cơn ê buốt nào sau điều trị. Điều này thực sự nâng tầm trải nghiệm phòng khám.\\"", name: "Dr. Michael Smith", role: "Chuyên gia Phục hình, New York" },
                    { text: "\\"BeautiLink SA giúp tiết kiệm lượng lớn thời gian. Quy trình đơn giản hơn, dọn dẹp xi măng thừa dễ dàng và lưu giữ vượt trội.\\"", name: "Dr. Anna Lee", role: "Tuổi trẻ Nha khoa, Sydney" }
                  ];
                  const dup = [...t1, ...t1];
                  return dup.map((item, idx) => (
                    <div key={\`mobile-1-\${idx}\`} className="bg-white rounded-2xl p-5 shadow-sm flex flex-col w-[280px] sm:w-[320px] shrink-0 mx-2 sm:mx-3 border border-slate-100 whitespace-normal">
                      <p className="font-body text-[13.5px] sm:text-[14px] text-slate-600 italic mb-5 leading-relaxed flex-1">{item.text}</p>
                      <div className="border-t border-slate-100 pt-4 mt-auto">
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
                    { text: "\\"Từ khi chuyển sang Shofu, tỷ lệ sút phục hình giảm gần như bằng không. Sự ổn định và bền vững khác biệt hoàn toàn.\\"", name: "Dr. Trần Văn An", role: "Chuyên gia Phục hình, TP.HCM" },
                    { text: "\\"Tính kỵ nước tuyệt đối của BeautiBond Xtreme tạo ra lớp màng bảo vệ hoàn hảo, ngăn chặn sự thoái hóa lớp lai theo thời gian.\\"", name: "Dr. Elena Rodriguez", role: "Viện thẩm mỹ Madrid, Tây Ban Nha" },
                    { text: "\\"S-PRG thực sự thay đổi luật chơi trong việc ngăn ngừa sâu răng thứ phát dưới lớp phục hình, giúp viền luôn khỏe mạnh.\\"", name: "Prof. Tanaka", role: "Đại học Y khoa Tokyo, Nhật Bản" },
                    { text: "\\"Loại bỏ các chai lọ primer lỉnh kỉnh giúp kiểm soát vật tư phòng khám tốt hơn. Ít sai sót lâm sàng, hiệu quả kinh tế cao.\\"", name: "Dr. William Chen", role: "Quản lý chuỗi nha khoa, Singapore" },
                    { text: "\\"Màng keo dán siêu mỏng giúp gắn các veneer trở nên chính xác tuyệt đối mà không sợ cộm khớp hay làm đổi màu sứ.\\"", name: "Dr. Maria Garcia", role: "Nha khoa Cao cấp, Brazil" }
                  ];
                  const dup = [...t2, ...t2];
                  return dup.map((item, idx) => (
                    <div key={\`mobile-2-\${idx}\`} className="bg-white rounded-2xl p-5 shadow-sm flex flex-col w-[280px] sm:w-[320px] shrink-0 mx-2 sm:mx-3 border border-slate-100 whitespace-normal">
                      <p className="font-body text-[13.5px] sm:text-[14px] text-slate-600 italic mb-5 leading-relaxed flex-1">{item.text}</p>
                      <div className="border-t border-slate-100 pt-4 mt-auto">
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

if (newContent.includes(sectionStartTag)) {
  newContent = newContent.replace(sectionStartTag, newSectionStartTag);
}

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', newContent);
console.log('Updated');
