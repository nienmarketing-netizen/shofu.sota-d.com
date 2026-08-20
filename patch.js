const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuHeader.tsx', 'utf8');

const target = `          <div className="flex items-center gap-3">
            <img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Sota-D%20logo%20(1).png" alt="Sota-D" className="h-6 sm:h-8 object-contain" />
            <div className="w-[1px] h-6 bg-slate-300 hidden sm:block"></div>
            <img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Logo_Shofu%20(1).png" alt="Shofu" className="h-6 sm:h-8 object-contain hidden sm:block" />
          </div>`;

const replacement = `          <div className="flex items-center gap-3">
            <a href="https://www.shofu.sota-d.com" className="hover:opacity-80 transition-opacity">
              <img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Sota-D%20logo%20(1).png" alt="Sota-D" className="h-6 sm:h-8 object-contain" />
            </a>
            <div className="w-[1px] h-6 bg-slate-300 hidden sm:block"></div>
            <a href="https://www.shofu.sota-d.com" className="hover:opacity-80 transition-opacity hidden sm:block">
              <img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Logo_Shofu%20(1).png" alt="Shofu" className="h-6 sm:h-8 object-contain" />
            </a>
          </div>`;

content = content.replace(target, replacement);
fs.writeFileSync('src/components/shofu/ShofuHeader.tsx', content);
