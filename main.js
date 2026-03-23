(function () {
  emailjs.init("Aw0EgKP-WMWJGoL207fGa"); // ✅ your public key
})();

function submitForm() {

  let name = document.getElementById("fname").value.trim();
  let email = document.getElementById("femail").value.trim();
  let message = document.getElementById("fmsg").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Enter a valid email");
    return;
  }

  let btn = document.querySelector(".btn-primary");
  btn.innerText = "Sending...";
  btn.disabled = true;

  emailjs.send("service_i305qwp", "template_33hts6m", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(() => {
    document.getElementById("formContent").style.display = "none";
    document.getElementById("formSuccess").style.display = "block";
    document.querySelector("form").reset(); // ✅ reset form
  })
  .catch((error) => {
    console.log(error);
    alert("Failed to send message");

    btn.innerText = "Send Message ✉";
    btn.disabled = false;
  });
}