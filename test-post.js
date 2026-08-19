const webhookUrl = process.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;
const payload = {
  'Nguồn Lead': 'Test Node.js',
  'Tên Bác sĩ': 'Dr. Test',
  'Số điện thoại (Zalo)': '0909090909'
};
const searchParams = new URLSearchParams();
Object.entries(payload).forEach(([key, value]) => {
  searchParams.append(key, value);
});
console.log("Payload:", searchParams.toString());
fetch(webhookUrl, {
  method: 'POST',
  body: searchParams,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}).then(res => {
  console.log("Status:", res.status);
  return res.text();
}).then(text => console.log("Response:", text)).catch(console.error);
