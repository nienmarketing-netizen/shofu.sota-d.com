const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const t1_old = `<p className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl text-left">
              Trải nghiệm bước dịch chuyển đột phá từ "Phục hồi cơ học thụ động" sang <strong className="text-slate-900">"Trị liệu sinh học chủ động"</strong> với hệ sinh thái Giomer ứng dụng công nghệ hạt độn S-PRG từ <strong className="text-slate-900">Shofu Nhật Bản</strong>. Quy trình lâm sàng được tối giản hóa tối đa, giúp <strong className="text-slate-900">bảo tồn cấu trúc ngà sống</strong> và giải phóng hoàn toàn áp lực nhạy cảm kỹ thuật cho Bác sĩ.
            </p>`;
const t1_new = `<p className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl text-left">
              Trải nghiệm bước dịch chuyển đột phá từ "Phục hồi cơ học thụ động" sang <strong className="font-bold text-[#00ADEF] bg-sky-50 px-1.5 py-0.5 rounded">"Trị liệu sinh học chủ động"</strong> với hệ sinh thái Giomer ứng dụng công nghệ hạt độn S-PRG từ <strong className="font-bold text-slate-900">Shofu Nhật Bản</strong>. Quy trình lâm sàng được tối giản hóa tối đa, giúp <strong className="font-bold text-slate-900 underline decoration-sky-300 decoration-2 underline-offset-4">bảo tồn cấu trúc ngà sống</strong> và <strong className="font-bold text-slate-900">giải phóng hoàn toàn áp lực nhạy cảm kỹ thuật</strong> cho Bác sĩ.
            </p>`;

const t2_old = `<p className="font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Thiết lập quy trình phục hồi trực tiếp vị tha trên lâm sàng, giải phóng hoàn toàn áp lực kỹ thuật cho Bác sĩ.
            </p>`;
const t2_new = `<p className="font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Thiết lập quy trình phục hồi trực tiếp <strong className="font-bold text-slate-900 bg-sky-100/50 px-1.5 rounded">vị tha trên lâm sàng</strong>, giải phóng hoàn toàn <strong className="font-bold text-slate-900">áp lực kỹ thuật</strong> cho Bác sĩ.
            </p>`;

const t3_old = `<p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">
                  BBX loại bỏ hoàn toàn thành phần HEMA ưa nước. Ứng dụng hệ dung môi Acetone bay hơi nhanh giúp đưa 4 monomer chức năng (đặc biệt là biến thể 10-MDP và Carboxylic) thâm nhập sâu vào các ống ngà ẩm, tạo màng dán dính kỵ nước cực kỳ bền vững.
                </p>`;
const t3_new = `<p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">
                  BBX <strong className="font-bold text-slate-900 underline decoration-sky-300 decoration-2 underline-offset-2">loại bỏ hoàn toàn thành phần HEMA ưa nước</strong>. Ứng dụng hệ dung môi Acetone bay hơi nhanh giúp đưa 4 monomer chức năng (đặc biệt là biến thể 10-MDP và Carboxylic) thâm nhập sâu vào các ống ngà ẩm, <strong className="font-bold text-[#00ADEF] bg-sky-50 px-1 rounded">tạo màng dán dính kỵ nước cực kỳ bền vững</strong>.
                </p>`;

const t5_old = `<p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">
                  Với đặc tính lưu biến thông minh (thixotropic), Beautifil Injectable X định hình cực tốt khi đắp lớp nhưng tự động chảy loang phẳng láng dưới áp lực. Vật liệu len lỏi hoàn hảo vào các ngóc ngách xoang II hẹp dưới nướu mà không tạo bọt khí.
                </p>`;
const t5_new = `<p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">
                  Với <strong className="font-bold text-[#00ADEF] bg-sky-50 px-1 rounded">đặc tính lưu biến thông minh (thixotropic)</strong>, Beautifil Injectable X định hình cực tốt khi đắp lớp nhưng tự động chảy loang phẳng láng dưới áp lực. Vật liệu <strong className="font-bold text-slate-900 underline decoration-sky-300 decoration-2 underline-offset-2">len lỏi hoàn hảo vào các ngóc ngách xoang II hẹp dưới nướu mà không tạo bọt khí</strong>.
                </p>`;

const t6_old = `<p className="font-body text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Sota-D mang đến những bằng chứng thép từ các nghiên cứu lâm sàng độc lập uy tín nhất thế giới đăng trên tạp chí JADA (Journal of the American Dental Association):
            </p>`;
const t6_new = `<p className="font-body text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Sota-D mang đến những bằng chứng thép từ các <strong className="font-bold text-white bg-slate-800/80 px-1.5 rounded">nghiên cứu lâm sàng độc lập uy tín nhất thế giới đăng trên tạp chí JADA</strong> (Journal of the American Dental Association):
            </p>`;

content = content.replace(t1_old, t1_new);
content = content.replace(t2_old, t2_new);
content = content.replace(t3_old, t3_new);
content = content.replace(t5_old, t5_new);
content = content.replace(t6_old, t6_new);

fs.writeFileSync(file_path, content);
console.log("Highlights applied");
