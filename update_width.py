import glob
import re

for filepath in glob.glob('src/**/*.tsx', recursive=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Standardize existing ones that might have both
    # Replace "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" -> "w-[90%] lg:w-[80%] mx-auto"
    content = re.sub(r'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', r'w-[90%] lg:w-[80%] mx-auto', content)
    content = re.sub(r'w-\[90%\] md:w-\[80%\] max-w-7xl mx-auto', r'w-[90%] lg:w-[80%] mx-auto', content)
    content = re.sub(r'w-\[90%\] md:w-\[80%\] max-w-4xl mx-auto', r'w-[90%] lg:w-[80%] mx-auto', content)
    content = re.sub(r'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8', r'w-[90%] lg:w-[80%] mx-auto', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

