const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `                <div className="w-full md:w-[40%] lg:w-[35%] flex justify-center items-center">
                  <img 
                    src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/beautilink-bbx.webp" 
                    alt="Combo BeautiLink SA và BeautiBond Xtreme" 
                    className="w-full max-w-[280px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>`;

const replacementStr = `                <div className="w-full md:w-[40%] lg:w-[35%] flex justify-center items-center">
                  <img 
                    src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/beautilink-bbx.webp" 
                    alt="Combo BeautiLink SA và BeautiBond Xtreme" 
                    className="w-full max-w-[196px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Image size reduced");
} else {
    console.log("Target not found");
}
