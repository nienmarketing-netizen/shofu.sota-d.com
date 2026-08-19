const webhookUrl = process.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;
const payload = {
  'sheetName': 'Sota-D | Leads',
  'Nguồn Lead': 'Test Node.js 2',
  'Tên Bác sĩ': 'Dr. Test 2',
};
const searchParams = new URLSearchParams();
Object.entries(payload).forEach(([key, value]) => {
  searchParams.append(key, value);
});
fetch(webhookUrl, {
  method: 'POST',
  body: searchParams,
}).then(res => res.text()).then(text => console.log("Response:", text)).catch(console.error);
