/*
====================================================
Campus Connect V2
assets/js/main.js
Base Production Foundation
====================================================
*/

(function () {
  "use strict";

  const $ = (s, p = document) => p.querySelector(s);
  const $$ = (s, p = document) => [...p.querySelectorAll(s)];

  // Navbar Scroll Effect
  const navbar = $(".navbar");

  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  window.addEventListener("scroll", onScroll);
  onScroll();

  // Mobile Menu Toggle
  const menuBtn = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Counter Animation
  const counters = document.querySelectorAll("[data-counter]");

  counters.forEach(counter => {
    const target = Number(counter.dataset.counter);

    const animateCounter = () => {
      let current = 0;

      const increment = Math.max(
        1,
        Math.ceil(target / 100)
      );

      const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        counter.textContent =
          current.toLocaleString();
      }, 20);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter();
            observer.disconnect();
          }
        });
      }
    );

    observer.observe(counter);
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question =
      item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });

  // Smooth Scroll
  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {
      anchor.addEventListener("click", e => {
        const targetId =
          anchor.getAttribute("href");

        if (targetId.length <= 1) return;

        const target =
          document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });

  console.log(
    "🚀 Campus Connect V2 Initialized"
  );
})();

/*
====================================================
Campus Connect V2
FINAL Production main.js
Version 1.0
====================================================
*/

(function () {
  "use strict";

  /* ====================================================
     HELPERS
  ==================================================== */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  /* ====================================================
     NAVBAR SCROLL EFFECT
  ==================================================== */

  const navbar = $(".navbar");

  function handleNavbarScroll() {
    if (!navbar) return;

    navbar.classList.toggle(
      "is-scrolled",
      window.scrollY > 20
    );
  }

  window.addEventListener(
    "scroll",
    handleNavbarScroll
  );

  handleNavbarScroll();

  /* ====================================================
     MOBILE MENU
  ==================================================== */

  const menuToggle =
    document.querySelector("[data-menu-toggle]");

  const mobileMenu =
    document.querySelector("[data-mobile-menu]");

  function closeMenu() {
    if (!mobileMenu) return;

    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  function openMenu() {
    if (!mobileMenu) return;

    mobileMenu.classList.add("active");
    document.body.classList.add("menu-open");
  }

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

      if (
        mobileMenu.classList.contains("active")
      ) {
        closeMenu();
      } else {
        openMenu();
      }

    });

    mobileMenu
      .querySelectorAll("a")
      .forEach(link => {
        link.addEventListener(
          "click",
          closeMenu
        );
      });

    document.addEventListener("click", e => {

      if (
        !mobileMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        closeMenu();
      }

    });

    document.addEventListener("keydown", e => {

      if (e.key === "Escape") {
        closeMenu();
      }

    });

  }

  /* ====================================================
     ACTIVE NAVIGATION
  ==================================================== */

  const currentPage =
    window.location.pathname
      .split("/")
      .pop() || "index.html";

  $$("nav a").forEach(link => {

    const href =
      link.getAttribute("href");

    if (
      href &&
      href.includes(currentPage)
    ) {
      link.classList.add("active");
    }

  });

  /* ====================================================
     REVEAL ON SCROLL
  ==================================================== */

  const revealItems =
    document.querySelectorAll(".reveal");

  if (revealItems.length) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "revealed"
              );

              revealObserver.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.15
        }
      );

    revealItems.forEach(item =>
      revealObserver.observe(item)
    );

  }

  /* ====================================================
     COUNTER ANIMATION
  ==================================================== */

  const counters =
    document.querySelectorAll(
      "[data-counter]"
    );

  counters.forEach(counter => {

    const target =
      Number(counter.dataset.counter);

    const animateCounter = () => {

      let current = 0;

      const increment =
        Math.max(
          1,
          Math.ceil(target / 100)
        );

      const timer =
        setInterval(() => {

          current += increment;

          if (current >= target) {

            current = target;

            clearInterval(timer);

          }

          counter.textContent =
            current.toLocaleString();

        }, 20);

    };

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              animateCounter();

              observer.disconnect();

            }

          });

        }
      );

    observer.observe(counter);

  });

  /* ====================================================
     FAQ ACCORDION
  ==================================================== */

  const faqItems =
    document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {

    const trigger =
      item.querySelector(
        ".faq-question"
      );

    if (!trigger) return;

    trigger.addEventListener(
      "click",
      () => {

        faqItems.forEach(other => {

          if (other !== item) {
            other.classList.remove("open");
          }

        });

        item.classList.toggle("open");

      }
    );

  });

  /* ====================================================
     SMOOTH SCROLL
  ==================================================== */

  $$('a[href^="#"]').forEach(link => {

    link.addEventListener(
      "click",
      e => {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });

  /* ====================================================
     BACK TO TOP
  ==================================================== */

  let backToTop =
    document.querySelector(".back-to-top");

  if (!backToTop) {

    backToTop =
      document.createElement("button");

    backToTop.className =
      "back-to-top";

    backToTop.setAttribute(
      "aria-label",
      "Back to top"
    );

    backToTop.innerHTML = "↑";

    document.body.appendChild(
      backToTop
    );

  }

  function toggleBackToTop() {

    if (window.scrollY > 600) {

      backToTop.classList.add("show");

    } else {

      backToTop.classList.remove("show");

    }

  }

  window.addEventListener(
    "scroll",
    toggleBackToTop
  );

  toggleBackToTop();

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

  /* ====================================================
     IMAGE LAZY EFFECT
  ==================================================== */

  const images =
    document.querySelectorAll("img");

  if ("IntersectionObserver" in window) {

    const imageObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "fade-in"
              );

              imageObserver.unobserve(
                entry.target
              );

            }

          });

        }
      );

    images.forEach(image =>
      imageObserver.observe(image)
    );

  }

  /* ====================================================
     CURRENT YEAR
  ==================================================== */

  const yearElements =
    document.querySelectorAll(
      "[data-current-year]"
    );

  yearElements.forEach(el => {

    el.textContent =
      new Date().getFullYear();

  });

  /* ====================================================
     EXTERNAL LINKS
  ==================================================== */

  $$('a[target="_blank"]').forEach(
    link => {

      if (
        !link.rel.includes(
          "noopener"
        )
      ) {

        link.rel =
          "noopener noreferrer";

      }

    }
  );

  /* ====================================================
     REDUCED MOTION SUPPORT
  ==================================================== */

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

  if (reducedMotion.matches) {

    document.documentElement.style.scrollBehavior =
      "auto";

  }

  /* ====================================================
     INIT
  ==================================================== */

  console.log(
    "%c🚀 Campus Connect V2 Loaded",
    "color:#7C5CFF;font-weight:bold;"
  );

})();