const payload = { 'Nguồn Lead': 'Space Test' };
const s1 = new URLSearchParams();
s1.append('Nguồn Lead', 'Space Test');
console.log("URLSearchParams:", s1.toString());

const s2 = Object.entries(payload).map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v)).join('&');
console.log("encodeURIComponent:", s2);
