const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});

const contactForm = document.getElementById("contact-form");
const visitorNameInput = document.getElementById("visitor-name");
const emailInput = document.getElementById("email");
const greetingMsg = document.getElementById("greeting-msg");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = visitorNameInput.value.trim();
  const email = emailInput.value.trim();

  if (email === "") {
    greetingMsg.textContent = "Please enter your email.";
    return;
  }

  greetingMsg.textContent = "Hello " + name + ", thanks for your message.";
  contactForm.reset();
});