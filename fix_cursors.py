import os
import re

directories = ['src/components/shofu', 'src/pages']

def add_cursor_pointer(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Regex to find <button ... className="..."> or <a ... className="...">
    # and add cursor-pointer if not present.
    # It's safer to just do a regex replace on className for any tag that we want, 
    # but we only want clickable ones.
    
    # Let's find all <button ... className="...> and <a ... className="...>
    
    def replacer(match):
        tag = match.group(1)
        inside = match.group(2)
        
        # find className="..."
        class_match = re.search(r'className=(["\'])(.*?)\1', inside)
        if class_match:
            classes = class_match.group(2)
            if 'cursor-pointer' not in classes and 'cursor-' not in classes:
                # Add cursor-pointer
                new_classes = classes + ' cursor-pointer'
                new_inside = inside[:class_match.start(2)] + new_classes + inside[class_match.end(2):]
                return f'<{tag}{new_inside}>'
        else:
            # If no className, we could add it, but usually they have className.
            if 'className=' not in inside:
                return f'<{tag} className="cursor-pointer" {inside}>'
            
        return match.group(0)

    # We match <button...> and <a...> and <motion.button...> and anything with onClick=
    
    # First, let's just replace class="... " in button tags
    new_content = re.sub(r'<(button|a|motion\.button)([^>]*?)>', replacer, content, flags=re.DOTALL)
    
    # Now for any element with onClick that isn't already handled:
    def onclick_replacer(match):
        tag = match.group(1)
        if tag in ['button', 'a', 'motion.button']:
            return match.group(0) # already handled
        inside = match.group(2)
        if 'onClick=' in inside:
            class_match = re.search(r'className=(["\'])(.*?)\1', inside)
            if class_match:
                classes = class_match.group(2)
                if 'cursor-pointer' not in classes and 'cursor-' not in classes:
                    new_classes = classes + ' cursor-pointer'
                    new_inside = inside[:class_match.start(2)] + new_classes + inside[class_match.end(2):]
                    return f'<{tag}{new_inside}>'
        return match.group(0)
        
    new_content = re.sub(r'<([a-zA-Z0-9_\.]+)([^>]*?)>', onclick_replacer, new_content, flags=re.DOTALL)
    
    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for d in directories:
    if os.path.exists(d):
        for root, _, files in os.walk(d):
            for file in files:
                if file.endswith('.tsx') or file.endswith('.jsx'):
                    add_cursor_pointer(os.path.join(root, file))

