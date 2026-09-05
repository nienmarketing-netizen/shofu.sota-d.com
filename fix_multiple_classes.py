import os
import re

directories = ['src/components/shofu', 'src/pages']

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find <button className="cursor-pointer" ... className="..."> and merge them
    # Because my script did: <button className="cursor-pointer"  onClick={() => ...} className="group relative ...">
    def merge_classnames(match):
        full_tag = match.group(0)
        # Find all classNames
        class_matches = re.findall(r'className=(["\'])(.*?)\1', full_tag)
        if len(class_matches) > 1:
            # We have multiple className attributes.
            all_classes = []
            for m in class_matches:
                classes = m[1].split()
                for c in classes:
                    if c not in all_classes:
                        all_classes.append(c)
            merged = " ".join(all_classes)
            # Remove all className attributes
            tag_no_classes = re.sub(r'\s*className=(["\'])(.*?)\1', '', full_tag)
            # Insert the merged className right after the tag name
            tag_name = re.match(r'<([a-zA-Z0-9_\.]+)', tag_no_classes).group(1)
            final_tag = tag_no_classes.replace(f'<{tag_name}', f'<{tag_name} className="{merged}"', 1)
            return final_tag
        return full_tag

    new_content = re.sub(r'<([a-zA-Z0-9_\.]+)[^>]+>', merge_classnames, content, flags=re.DOTALL)
    
    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed {filepath}")

for d in directories:
    if os.path.exists(d):
        for root, _, files in os.walk(d):
            for file in files:
                if file.endswith('.tsx') or file.endswith('.jsx'):
                    fix_file(os.path.join(root, file))

