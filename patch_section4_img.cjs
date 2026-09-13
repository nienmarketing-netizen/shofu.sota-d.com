const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const targetImage = `<div className="w-full lg:w-1/2">
             <ImagePlaceholder 
                className="aspect-square w-full" 
                text="Sơ đồ 3D cấu tạo hạt độn S-PRG (Cyan & Đỏ). Hạt độn trung tâm tỏa 6 quầng sáng đại diện 6 ion bảo vệ hướng về phía chiếc răng thật đang được bao bọc bởi lớp màng sinh học lấp lánh." 
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

content = content.replace(targetImage, replacementImage);

fs.writeFileSync(file_path, content);
console.log("Patched Section 4 image");
