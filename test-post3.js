const webhookUrl = process.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;
const payload = {
  'Nguồn Lead': 'Test Node.js 3',
  'Tên Bác sĩ': 'Dr. Test 3',
};
const searchParams = new URLSearchParams();
Object.entries(payload).forEach(([key, value]) => {
  searchParams.append(key, value);
});
fetch(webhookUrl + "?sheetName=Sheet1", {
  method: 'POST',
  body: searchParams,
}).then(res => res.text()).then(text => console.log("Response:", text)).catch(console.error);
