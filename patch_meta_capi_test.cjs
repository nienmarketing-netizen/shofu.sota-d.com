const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

const oldPayload = `      const payload = {
        data: [
          {
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: eventSourceUrl,
            user_data: {
              client_ip_address: clientIp,
              client_user_agent: userAgent,
              em: hash(email),
              ph: hash(phone)
            },
            custom_data: {
              form_name: formName
            }
          }
        ]
      };`;

const newPayload = `      const payload = {
        data: [
          {
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: eventSourceUrl,
            user_data: {
              client_ip_address: clientIp,
              client_user_agent: userAgent,
              em: hash(email),
              ph: hash(phone)
            },
            custom_data: {
              form_name: formName
            }
          }
        ],
        test_event_code: "TEST4249"
      };`;

if (code.includes(oldPayload)) {
    code = code.replace(oldPayload, newPayload);
    fs.writeFileSync('server.ts', code);
    console.log("Patched test_event_code successfully.");
} else if (code.includes('test_event_code: "TEST4249"')) {
    console.log("Already patched.");
} else {
    console.log("Could not find the target string. The file might have been formatted differently.");
}
