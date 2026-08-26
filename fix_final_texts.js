import fs from 'fs';

let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace(
  '<p className="text-sm font-medium opacity-90 text-slate-500 mt-4 text-center sm:text-left">Trọn gói giải pháp bảo chứng bởi JADA & Dental Advisor</p>',
  '<p className="font-body text-xs sm:text-sm font-medium opacity-90 text-slate-500 mt-4 text-center sm:text-left">Trọn gói giải pháp bảo chứng bởi JADA & Dental Advisor</p>'
);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
