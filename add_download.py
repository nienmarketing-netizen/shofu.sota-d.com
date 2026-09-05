import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix React import
content = content.replace("import React, { useState } from 'react';", "import React, { useState, useRef } from 'react';")

# Fix Lucide import
content = re.sub(r"import \{ (.*?) \} from 'lucide-react';", r"import { \1, Download } from 'lucide-react';", content)

# Add html2canvas import
content = content.replace("import { Button } from './ui/Button';", "import { Button } from './ui/Button';\nimport html2canvas from 'html2canvas';")

# Add ticketRef
content = content.replace("const [showPopup, setShowPopup] = useState(false);", "const [showPopup, setShowPopup] = useState(false);\n const ticketRef = useRef<HTMLDivElement>(null);\n const [isDownloading, setIsDownloading] = useState(false);")

# Add handleDownload function
download_func = """
 const handleDownloadTicket = async () => {
   if (!ticketRef.current) return;
   setIsDownloading(true);
   try {
     const canvas = await html2canvas(ticketRef.current, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
     const image = canvas.toDataURL('image/png');
     const link = document.createElement('a');
     link.href = image;
     link.download = `Ve_VIDEC2026_${fullName.replace(/\s+/g, '_')}.png`;
     link.click();
   } catch (error) {
     console.error('Lỗi khi tải ảnh:', error);
   } finally {
     setIsDownloading(false);
   }
 };
"""

# Insert right before handleSubmit
content = content.replace(' const handleSubmit = async (e: React.FormEvent) => {', download_func + '\n const handleSubmit = async (e: React.FormEvent) => {')

# Attach ref to ticket div
content = content.replace('<div className="p-6 rounded-2xl bg-white border border-slate-200 text-slate-900 text-left shadow-xl max-w-md mx-auto space-y-4 shadow-2xl relative overflow-hidden">', 
                          '<div ref={ticketRef} className="p-6 rounded-2xl bg-white border border-slate-200 text-slate-900 text-left shadow-xl max-w-md mx-auto space-y-4 shadow-2xl relative overflow-hidden">')

# Add Download button
buttons = """
       <div className="flex justify-center gap-3 pt-2">
        <Button
         onClick={handleDownloadTicket}
         disabled={isDownloading}
         className="font-mono text-xs bg-[#00ADEF] hover:bg-sky-600 text-white gap-2"
        >
         {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
         Tải vé về máy
        </Button>
        <Button
         variant="outline"
"""
content = content.replace('<div className="flex justify-center gap-3 pt-2">\n        <Button\n         variant="outline"', buttons)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Patch complete.")
