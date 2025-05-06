// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Խնդրում ենք լրացնել բոլոր դաշտերը:");
    return;
  }

  // Send email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: name,
    email: email,
    message: message,
  })
  .then(() => {
    alert("Ձեր հաղորդագրությունը հաջողությամբ ուղարկվել է:");
    document.getElementById("contact-form").reset(); 
  })
  .catch((error) => {
    console.error("Error sending email:", error);
    alert("Տեղի ունեցավ սխալ, խնդրում ենք փորձել կրկին:");
  });
});