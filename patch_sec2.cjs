const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

const targetRegex = /<p className="font-body text-slate-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">[\s\S]*?gây sâu răng thứ phát\.\s*<\/p>/;

const replacement = `<div className="max-w-5xl mx-auto mt-12 flex flex-col md:flex-row gap-6 text-left">
              <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6 shrink-0">
                  <AlertTriangle className="w-6 h-6 text-slate-500" />
                </div>
                <p className="font-body text-slate-600 leading-relaxed text-base sm:text-lg">
                  Khó cô lập hoàn toàn, dễ bị nhiễm ẩm, khó tạo tiếp xúc bên, và đặc biệt là áp lực co ngót vật liệu kéo giật cùi răng gây hở vi kẽ. Nhiều Bác sĩ trẻ thường tự đổ lỗi cho kỹ năng thao tác thổi khô sai kỹ thuật của mình.
                </p>
              </div>
              
              <div className="flex-1 bg-red-50/80 border border-red-100 rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-red-500/20 transition-all duration-500"></div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 shrink-0 relative z-10">
                  <ShieldAlert className="w-6 h-6 text-red-500" />
                </div>
                <p className="font-body text-base sm:text-lg text-slate-800 font-medium leading-relaxed relative z-10">
                  Nhưng sự thật y khoa chứng minh: <strong className="text-red-600">lỗi lớn nằm ở bản chất vật liệu thế hệ cũ.</strong> Lớp keo dán chứa HEMA rất dễ hút nước, làm phân hủy lớp lai. Đồng thời, composite thông thường co ngót quá lớn kéo giật đường viền, tạo điều kiện cho vi khuẩn bám đọng gây sâu răng thứ phát.
                </p>
              </div>
            </div>`;

content = content.replace(targetRegex, replacement);

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
