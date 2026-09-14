const fs = require('fs');
let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

// 1. Remove "100% Tỷ lệ lưu giữ..."
const t1_old = `                        <li className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong className="text-white">100%</strong> Tỷ lệ lưu giữ phục hình (Retention rate)</span>
                        </li>`;
content = content.replace(t1_old, '');

// 2. Remove "(tỷ lệ sâu răng tái phát chỉ 3%)"
const t2_old = `<span><strong className="text-[#00ADEF] text-lg">96%</strong> Phục hình hoàn toàn không xuất hiện sâu răng thứ phát (tỷ lệ sâu răng tái phát chỉ 3%)</span>`;
const t2_new = `<span><strong className="text-[#00ADEF] text-lg">96%</strong> Phục hình hoàn toàn không xuất hiện sâu răng thứ phát</span>`;
content = content.replace(t2_old, t2_new);

// 3. Change "Tỷ lệ lưu giữ..." to "0% ê buốt..."
const t3_old = `<span>Tỷ lệ lưu giữ phục hình duy trì bền vững từ <strong className="text-white">61% – 66%</strong> qua 13 năm</span>`;
const t3_new = `<span><strong className="text-white">0%</strong> ê buốt/ nhạy cảm sau điều trị</span>`;
content = content.replace(t3_old, t3_new);

fs.writeFileSync(file_path, content);
console.log("Stats patched.");
