import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Error block to extract
error_block_regex = r"       {/\* Error Message Alert \*/}\n       {errorMsg && \(\n        <div className=\"p-4 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-300 font-body text-xs flex items-center gap-2\">\n         <AlertCircle className=\"w-4 h-4 text-red-400 shrink-0\" />\n         <span>{errorMsg}</span>\n        </div>\n       \)}\n\n"

# Check if we can find it
match = re.search(error_block_regex, content)
if match:
    # Remove from top
    content = content.replace(match.group(0), "")
    
    # Insert right before CTA 2 Button
    target = "       {/* CTA 2 Button */}"
    if target in content:
        content = content.replace(target, match.group(0) + target)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Moved error block successfully.")
    else:
        print("Could not find target CTA 2 Button")
else:
    print("Could not find error block")

