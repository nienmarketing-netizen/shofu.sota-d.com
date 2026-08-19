import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_block = """       {/* Error Message Alert */}
       {errorMsg && (
        <div className="p-4 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-300 font-body text-xs flex items-center gap-2">
         <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
         <span>{errorMsg}</span>
        </div>
       )}"""

new_block = """       {/* Error Message Alert */}
       {errorMsg && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 font-body text-[13px] leading-tight flex items-start gap-2.5 shadow-sm">
         <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
         <span className="font-medium">{errorMsg}</span>
        </div>
       )}"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Replaced successfully.")
else:
    print("Could not find the block to replace. It might have slight whitespace differences.")

