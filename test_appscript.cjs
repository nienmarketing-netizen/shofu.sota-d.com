const url = "https://script.google.com/macros/library/d/1kKuAggz_Mc63pwdvBQWx8LZbWmk7Eq4KwXKVyX2JztmPDHpzHKdjnIFE/8";

async function run() {
  const payload = {
    name: 'Direct Node Test',
    phone: '0987654321',
    clinic: 'Node Clinic',
    wantsCustomOffer: 'No',
    selectedPromos: 'Node Promo'
  };
  
  const bodyString = Object.entries(payload)
        .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
        .join('&');

  try {
    const res = await fetch(url, {
      method: 'POST',
      body: bodyString,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      redirect: 'follow'
    });
    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Response:", text);
  } catch (e) {
    console.error("Error:", e);
  }
}
run();
