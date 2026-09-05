import re

filepath = 'src/components/ScheduleSection.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Change aspect-square to aspect-[3/4] for speakers
content = content.replace('w-full aspect-square rounded-xl sm:rounded-2xl shofu-gradient',
                          'w-full aspect-[3/4] rounded-xl sm:rounded-2xl shofu-gradient')
content = content.replace('w-full aspect-square rounded-xl sm:rounded-2xl sota-gradient',
                          'w-full aspect-[3/4] rounded-xl sm:rounded-2xl sota-gradient')

# Adjust object-cover to include object-top so it pins to the top of the image
# To avoid replacing too many things blindly, we will use regex for the images in the speaker block
# Actually, since these are the only avatars in this component, we can just replace the specific img tags

content = content.replace('<img src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BS.Ngo%CC%A3c.png" alt="BS. Dương Bảo Ngọc" className="w-full h-full object-cover" />',
                          '<img src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BS.Ngo%CC%A3c.png" alt="BS. Dương Bảo Ngọc" className="w-full h-full object-cover object-top" />')

content = content.replace('<img src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BS%20Kha%CC%81nh.png" alt="ThS.BS Trần Quang Khánh" className="w-full h-full object-cover" />',
                          '<img src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/BS%20Kha%CC%81nh.png" alt="ThS.BS Trần Quang Khánh" className="w-full h-full object-cover object-top" />')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
