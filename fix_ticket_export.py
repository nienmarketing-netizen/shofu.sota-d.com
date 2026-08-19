import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Original string
old_str = '       {/* Digital Pass Ticket Box */}\n       <div ref={ticketRef} className="p-6 rounded-2xl bg-white border border-slate-200 text-slate-900 text-left shadow-xl max-w-md mx-auto space-y-4 shadow-2xl relative overflow-hidden">'

# New string with wrapper
new_str = '       {/* Digital Pass Ticket Box */}\n       <div className="max-w-md mx-auto w-full">\n        <div ref={ticketRef} className="p-6 rounded-2xl bg-white border border-slate-200 text-slate-900 text-left shadow-xl w-full space-y-4 shadow-2xl relative overflow-hidden m-0">'

content = content.replace(old_str, new_str)

# We also need to close the wrapper div. 
# Let's find where the ticket box ends.
# It ends right before "       <div className="flex justify-center gap-3 pt-2">"
old_end = '       </div>\n\n       <div className="flex justify-center gap-3 pt-2">'
new_end = '        </div>\n       </div>\n\n       <div className="flex justify-center gap-3 pt-2">'

content = content.replace(old_end, new_end)

# Also let's set a fixed width just in case during capture.
# Wait, `w-full` should be fine. 
# In handleDownloadTicket, let's also pass width and height explicitly to toPng if possible, or just style.
old_toPng = "const image = await toPng(ticketRef.current, { pixelRatio: 2, backgroundColor: '#ffffff' });"
new_toPng = """const el = ticketRef.current;
     const image = await toPng(el, { 
       pixelRatio: 2, 
       backgroundColor: '#ffffff',
       style: { margin: '0' }
     });"""
content = content.replace(old_toPng, new_toPng)


with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fix applied.")
