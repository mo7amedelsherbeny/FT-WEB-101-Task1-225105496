const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});

const revealItems = document.querySelectorAll(".top-bar, .profile-row, .card, .contact-area");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add("show");
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealItems.forEach(function (item) {
  item.classList.add("reveal");
  observer.observe(item);
});

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("mousemove", function (e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  });
});

const contactForm = document.getElementById("contact-form");
const visitorNameInput = document.getElementById("visitor-name");
const emailInput = document.getElementById("email");
const greetingMsg = document.getElementById("greeting-msg");

function typeMessage(text, element) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(function () {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 35);
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = visitorNameInput.value.trim();
  const email = emailInput.value.trim();

  if (email === "") {
    typeMessage("Please enter your email.", greetingMsg);
    return;
  }

  typeMessage("Hello " + name + ", thanks for your message!", greetingMsg);
  contactForm.reset();
});
