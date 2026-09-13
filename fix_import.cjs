const fs = require('fs');
let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

// The sed command above made it: import { ..., Gift, from "lucide-react";
// let's undo that.
content = content.replace(/Gift, from "lucide-react";/g, 'from "lucide-react";');

// Now add it properly
if (!content.includes(' Gift,')) {
    content = content.replace(/import \{ /, 'import { Gift, ');
}

fs.writeFileSync(file_path, content);
