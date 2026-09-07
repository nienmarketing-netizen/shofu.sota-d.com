const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

const oldPayload = `        ],
        test_event_code: "TEST4249"
      };`;

const newPayload = `        ]
      };`;

if (code.includes(oldPayload)) {
    code = code.replace(oldPayload, newPayload);
    fs.writeFileSync('server.ts', code);
    console.log("Removed test_event_code successfully.");
} else {
    console.log("Could not find the target string. Let me try a generic regex.");
    code = code.replace(/,\s*test_event_code:\s*"TEST4249"/g, '');
    fs.writeFileSync('server.ts', code);
    console.log("Regex replacement attempted.");
}
