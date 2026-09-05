const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `                  <img 
                    src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/qua-tang-giomer-khong-e-buot.webp" 
                    alt="Bộ quà tặng đặc quyền Giomer" 
                    className="w-full max-w-[196px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />`;

const replacementStr = `                  <img 
                    src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/qua-tang-giomer-khong-e-buot.webp" 
                    alt="Bộ quà tặng đặc quyền Giomer" 
                    className="w-full max-w-[235px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Gift image size increased");
} else {
    console.log("Target not found");
}
