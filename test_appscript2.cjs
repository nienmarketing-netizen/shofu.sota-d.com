const url = "https://script.google.com/macros/s/AKfycbxc-EtHL1Un2AgalFAz8RvxlHX0TtE4q6OK2h0CiSNWBo7tvP1sDhBiJv7vvrRkJ3-zgQ/exec";

async function run() {
  const payload = {
    name: 'Direct Node Test 2',
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
