const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const startTarget = '<div className="text-white text-left relative overflow-hidden">';
const endTarget = '<ShieldCheck className="w-4 h-4 text-emerald-400" /> Cam kết hoàn tiền 100% trong 30 ngày nếu xảy ra ê buốt do vật liệu.\n              </p>\n            </div>\n            \n            {/* Right Column (30%) - Image */}\n            <div className="w-full lg:w-[35%] xl:w-[30%] relative flex justify-center items-center">\n              <img \n                src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/beautilink-bbx.png" \n                alt="Combo BeautiLink SA và BeautiBond Xtreme" \n                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl" \n                referrerPolicy="no-referrer"\n              />\n            </div>\n          </div>';

let startIndex = content.indexOf(startTarget);
if (startIndex !== -1) {
  // Try to find the exact end block
  let textToReplace = content.substring(startIndex);
  let endIndex = textToReplace.indexOf('</div>\n          </div>');
  
  if (endIndex !== -1) {
      // Just replacing the whole text-left block until the end of that specific wrapper
  }
}

// Let's do a more precise replacement using regex or indexOf
