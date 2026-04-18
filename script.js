require('dotenv').config();

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;

emailjs.init(PUBLIC_KEY);

document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this, PUBLIC_KEY)
    .then(() => {
      alert("Message sent successfully!");
    }, (error) => {
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
