import fs from 'fs';

let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `              <span className="font-mono text-[9px] min-[375px]:text-[10px] sm:text-xs font-bold text-[#00ADEF] tracking-tight sm:tracking-wide whitespace-nowrap uppercase">
                XU THẾ NHA KHOA CAN THIỆP TỐI THIỂU & PHỤC HỒI BIOPLASTIC
              </span>`;
              
const replaceStr = `              <span className="font-mono text-[9px] min-[375px]:text-[10px] sm:text-xs font-bold text-[#00ADEF] tracking-tight sm:tracking-wide whitespace-nowrap">
                Xu thế nha khoa can thiệp tối thiểu & phục hồi Bioplastic
              </span>`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replaceStr);
  fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
  console.log("Replaced successfully!");
} else {
  console.log("Target string not found, let's look closer.");
}
