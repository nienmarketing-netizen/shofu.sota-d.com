const payload = { 'Nguồn Lead': 'Raw Key Test' };
const bodyString = Object.entries(payload).map(([k, v]) => k + '=' + encodeURIComponent(v)).join('&');
console.log("Body:", bodyString);
const webhookUrl = process.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;
fetch(webhookUrl, {
  method: 'POST',
  body: bodyString,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
}).then(res => res.text()).then(console.log).catch(console.error);
