// ===== Navigation Highlight on Click =====
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ===== Navigation Highlight on Scroll =====
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// ===== Contact Form with EmailJS =====
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_17c9lbi", "template_445yppg", this, "HHhafwc-GHAHY6AUL")
    .then(() => {
      alert("Message sent successfully!");
    }, (error) => {
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
