const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const target = `<div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">`;

const replacement = `<div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          <div className="w-full lg:w-1/2">`;

const targetImage = `<div className="w-full lg:w-1/2">
             <ImagePlaceholder 
              className="aspect-square w-full max-w-[500px] bg-white shadow-xl rounded-[2.5rem] border border-slate-100 mx-auto lg:mr-0" 
              text="Đồ họa mô phỏng mặt cắt 3D của cấu trúc hạt độn S-PRG với 3 lớp rõ rệt: lõi thủy tinh, lớp phản ứng bề mặt và lớp bảo vệ bên ngoài, cùng các phân tử ion Fluoride, Borate đang liên tục tỏa ra xung quanh." 
             />
          </div>`;

const replacementImage = `<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <img 
              src="/image/Shofu-S-PRG-technology.webp"
              alt="Công nghệ hạt độn sinh học S-PRG"
              className="w-full max-w-[500px] h-auto object-contain block lg:pt-2" 
              loading="lazy"
             />
          </div>`;

content = content.replace(target, replacement);
content = content.replace(targetImage, replacementImage);

fs.writeFileSync(file_path, content);
console.log("Patched Section 4 layout and image");
