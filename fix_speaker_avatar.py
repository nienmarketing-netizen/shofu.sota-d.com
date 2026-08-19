import re

filepath = 'src/components/ScheduleSection.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# For BS Ngoc
content = content.replace(
'''        <div className="w-full aspect-[3/4] rounded-xl sm:rounded-2xl shofu-gradient p-0.5 shrink-0">
         <div className="w-full h-full bg-slate-200 rounded-[10px] sm:rounded-[14px] overflow-hidden">
          <img src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BS.Ngo%CC%A3c.png" alt="BS. Dương Bảo Ngọc" className="w-full h-full object-cover object-top" />''',
'''        <div className="w-full h-fit rounded-xl sm:rounded-2xl shofu-gradient p-0.5 shrink-0">
         <div className="w-full h-fit bg-slate-200 rounded-[10px] sm:rounded-[14px] overflow-hidden">
          <img src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BS.Ngo%CC%A3c.png" alt="BS. Dương Bảo Ngọc" className="w-full h-auto object-contain block" />'''
)

# For BS Khanh
content = content.replace(
'''        <div className="w-full aspect-[3/4] rounded-xl sm:rounded-2xl sota-gradient p-0.5 shrink-0">
         <div className="w-full h-full bg-slate-200 rounded-[10px] sm:rounded-[14px] overflow-hidden">
          <img src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BS%20Kha%CC%81nh.png" alt="ThS.BS Trần Quang Khánh" className="w-full h-full object-cover object-top" />''',
'''        <div className="w-full h-fit rounded-xl sm:rounded-2xl sota-gradient p-0.5 shrink-0">
         <div className="w-full h-fit bg-slate-200 rounded-[10px] sm:rounded-[14px] overflow-hidden">
          <img src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BS%20Kha%CC%81nh.png" alt="ThS.BS Trần Quang Khánh" className="w-full h-auto object-contain block" />'''
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
