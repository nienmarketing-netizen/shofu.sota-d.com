import re

with open('src/components/Hero.tsx', 'r') as f:
    hero_content = f.read()

hero_content = hero_content.replace('Còn 4/15 suất', 'Còn 9/15 suất')
hero_content = hero_content.replace('Còn 6/15 suất', 'Còn 8/15 suất')

with open('src/components/Hero.tsx', 'w') as f:
    f.write(hero_content)

with open('src/components/ScheduleSection.tsx', 'r') as f:
    schedule_content = f.read()

schedule_content = schedule_content.replace('Còn 4 suất', 'Còn 9 suất')
schedule_content = schedule_content.replace('Còn 6 suất', 'Còn 8 suất')

with open('src/components/ScheduleSection.tsx', 'w') as f:
    f.write(schedule_content)

