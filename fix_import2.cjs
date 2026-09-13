const fs = require('fs');
let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

if (!content.includes('Gift')) {
    content = content.replace(/from 'lucide-react';/g, 'Gift } from "lucide-react";');
    content = content.replace(/} Gift }/g, ', Gift }');
} else {
    // If Gift is already there, we just need to ensure it's in the import statement
    const match = content.match(/import \{([^}]+)\} from 'lucide-react';/);
    if (match && !match[1].includes('Gift')) {
        content = content.replace(match[0], \`import {\${match[1]}, Gift} from 'lucide-react';\`);
    }
}
fs.writeFileSync(file_path, content);
