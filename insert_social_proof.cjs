const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const targetSection = `{/* SECTION 6: FAQ */}`;

const newSection = `{/* SECTION 5.5: SOCIAL PROOF MARQUEE */}
      <section className="py-20 lg:py-28 bg-white relative border-t border-slate-200 overflow-hidden">
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 mb-12">
          <div className="text-center">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4"><span className="text-[#00ADEF]">Hàng ngàn nha sĩ và chuyên gia</span> đã chọn</h2>
          </div>
        </div>

        {/* Marquee Wrapper (Full Width) */}
        <div className="relative z-10 w-full overflow-hidden flex flex-col gap-6 lg:gap-8 pb-4">
          
          {/* ALL SCREENS (2 Rows) */}
          <div className="flex flex-col gap-6 w-full overflow-hidden">
            {/* Row 1 - Left */}
            <div className="flex overflow-hidden group w-full">
              <div className="flex animate-marquee-left w-max hover:animation-play-state-paused">
                {(() => {
                  const t1 = [
                    { text: "\\"Hệ thống đánh bóng Shofu Super-Snap thực sự là tiêu chuẩn vàng. Độ bóng đạt được hoàn hảo chỉ trong tích tắc, giúp tiết kiệm thời gian đáng kể.\\"", name: "Dr. Hoàng Minh Tú", role: "Chuyên gia Phục hình, Hà Nội" },
                    { text: "\\"Công nghệ hạt độn sinh học S-PRG thực sự thay đổi luật chơi. Nhờ Giomer, tôi hoàn toàn yên tâm về khả năng phòng ngừa sâu răng thứ phát dưới lớp phục hình.\\"", name: "Prof. Tanaka", role: "Đại học Y khoa Tokyo, Nhật Bản" },
                    { text: "\\"Từ khi chuyển sang hệ thống Shofu Beautifil, tỷ lệ nhạy cảm sau trám giảm gần như bằng không. Sự ổn định và bền vững khác biệt hoàn toàn so với trước đây.\\"", name: "Dr. Trần Văn An", role: "Chuyên gia Phục hình thẩm mỹ, TP.HCM" },
                    { text: "\\"Dòng sản phẩm ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ các bước nhạy cảm kỹ thuật.\\"", name: "Dr. Shukan Kanuga", role: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, CA" },
                    { text: "\\"Hệ thống Giomer đáp ứng trọn vẹn xu hướng vật liệu sinh học tự trị liệu nhờ cơ chế trung hòa axit, giải phóng và tái sạc ion liên tục.\\"", name: "Dr. Jennifer Bell", role: "Viện Thẩm mỹ Nha khoa Quốc tế, NC" }
                  ];
                  const dup = [...t1, ...t1];
                  return dup.map((item, idx) => (
                    <div key={\`row-1-\${idx}\`} className="bg-slate-50 rounded-2xl p-5 lg:p-6 shadow-sm flex flex-col w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 mx-2 sm:mx-3 border border-slate-200 whitespace-normal">
                      <p className="font-body text-[13.5px] sm:text-[14px] text-slate-600 italic mb-5 lg:mb-6 leading-relaxed flex-1">{item.text}</p>
                      <div className="border-t border-slate-200 pt-4 lg:pt-5 mt-auto">
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
                    { text: "\\"Chất lượng thẩm mỹ của Composite Beautifil thực sự tuyệt vời. Hiệu ứng tắc kè hoa giúp màu sắc tệp hoàn toàn vào răng thật.\\"", name: "Dr. Anna Lee", role: "Bác sĩ trưởng, Tuổi trẻ Nha khoa, Sydney" },
                    { text: "\\"Điều tôi thích nhất ở keo dán BeautiBond Xtreme là tính kỵ nước tuyệt đối. Nó tạo ra lớp màng bảo vệ hoàn hảo, thao tác lại vô cùng tinh gọn.\\"", name: "Dr. Elena Rodriguez", role: "Viện thẩm mỹ Madrid, Tây Ban Nha" },
                    { text: "\\"Tốc độ đánh bóng và độ bền màu của vật liệu Shofu giúp bệnh nhân của tôi luôn hài lòng tuyệt đối sau nhiều năm theo dõi.\\"", name: "Dr. Phạm Hoàng Tuấn", role: "Bác sĩ trưởng, Cần Thơ" },
                    { text: "\\"Màng keo dán siêu mỏng giúp việc thực hiện các miếng trám xoang lớn trở nên chính xác tuyệt đối mà không sợ cộm khớp.\\"", name: "Dr. Maria Garcia", role: "Nha khoa Cao cấp, Brazil" },
                    { text: "\\"Trám răng chưa bao giờ dễ dàng và an tâm đến thế. Bệnh nhân của tôi hoàn toàn không phàn nàn về bất kỳ cơn ê buốt nào sau điều trị.\\"", name: "Dr. Michael Smith", role: "Chuyên gia Phục hình, New York" }
                  ];
                  const dup = [...t2, ...t2];
                  return dup.map((item, idx) => (
                    <div key={\`row-2-\${idx}\`} className="bg-slate-50 rounded-2xl p-5 lg:p-6 shadow-sm flex flex-col w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 mx-2 sm:mx-3 border border-slate-200 whitespace-normal">
                      <p className="font-body text-[13.5px] sm:text-[14px] text-slate-600 italic mb-5 lg:mb-6 leading-relaxed flex-1">{item.text}</p>
                      <div className="border-t border-slate-200 pt-4 lg:pt-5 mt-auto">
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
      </section>

      {/* SECTION 6: FAQ */}`;

content = content.replace(targetSection, newSection);

fs.writeFileSync(file_path, content);
console.log("Inserted Marquee Social Proof into DirectRestoration");
