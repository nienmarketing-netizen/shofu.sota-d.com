import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the syntax error by replacing the lines
content = re.sub(
    r"import \{ Loader2, Loader2 \} from \\'lucide-react\\';",
    "",
    content
)
content = re.sub(
    r"import \{ UserCheck, QrCode, CheckCircle2, AlertCircle, Building, Phone, User, Loader2 \} from \\'lucide-react\\';",
    "import { UserCheck, QrCode, CheckCircle2, AlertCircle, Building, Phone, User, Loader2 } from 'lucide-react';",
    content
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

