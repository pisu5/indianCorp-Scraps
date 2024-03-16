function openPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
  }

  function submitForm() {
    const m = "+91 9165880140"; // Your WhatsApp number
    const mobile = document.getElementById("mobile").value;
    const city = document.getElementById("city").value;
    const scrapsType = document.getElementById("scrapsType").value;
    const quantity = document.getElementById("quantity").value;

    if (mobile === "" || city === "" || scrapsType === "" || quantity === "") {
      alert("Please fill in all fields.");
      return false; // Prevent form submission
    }

  // Construct WhatsApp URL with form data
  const phoneNumber = "7999798981"; // Change this to your WhatsApp number
  const baseURL = "https://api.whatsapp.com/send";
  const params = new URLSearchParams({
    phone: m,
    text: `Mobile: ${phoneNumber}%0A` +
          `City: ${city}%0A` +
          `Scraps Type: ${scrapsType}%0A` +
          `Quantity: ${quantity}%0A%0A`
  });
  const url = `${baseURL}?${params.toString()}`;
    window.open(url, '_blank').focus();

    closePopup();
    showSuccessDialog();

    return false; // Prevent form submission
  }

  function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
  }

  function showSuccessDialog() {
    alert(
      "Success! We'll contact you within 30 minutes, or for faster processing, you may call us directly and our team will reach out to you."
    );
  }