// ========================================
// CAMPUS CONNECT | MAIN JS
// ========================================

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
  ".feature-card, .phone-card, section h2"
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ========================================
// NAVBAR SHADOW
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.35)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// ========================================
// ACTIVE NAV LINK
// ========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === `#${current}`
    ) {
      link.classList.add("active");
    }

  });

});

// ========================================
// COUNTER ANIMATION
// ========================================

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {

  const updateCounter = () => {

    const target = +counter.dataset.target;

    const count = +counter.innerText;

    const increment = target / 80;

    if (count < target) {

      counter.innerText =
        Math.ceil(count + increment);

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

// ========================================
// FAQ ACCORDION
// ========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question =
    item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    item.classList.toggle("open");

  });

});

// ========================================
// SMOOTH BUTTON GLOW
// ========================================

const buttons =
  document.querySelectorAll(".btn-primary");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.boxShadow =
      "0 0 30px rgba(108,99,255,0.5)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.boxShadow = "none";

  });

});

// ========================================
// HERO FLOATING EFFECT
// ========================================

const phoneCards =
  document.querySelectorAll(".phone-card");

window.addEventListener("mousemove", (e) => {

  const x =
    (window.innerWidth / 2 - e.pageX) / 40;

  const y =
    (window.innerHeight / 2 - e.pageY) / 40;

  phoneCards.forEach((card) => {

    card.style.transform =
      `translate(${x}px, ${y}px)`;

  });

});

// ========================================
// PRELOADER (OPTIONAL)
// ========================================

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});
