const fs = require('fs');
let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const match = content.match(/import \{([^}]+)\} from 'lucide-react';/);
if (match && !match[1].includes('Gift')) {
    const newImport = "import {" + match[1] + ", Gift} from 'lucide-react';";
    content = content.replace(match[0], newImport);
}

fs.writeFileSync(file_path, content);
