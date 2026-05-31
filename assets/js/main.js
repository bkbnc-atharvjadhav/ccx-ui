/* =========================================
   CAMPUS CONNECT V4
   MAIN.JS FINAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initActiveNavigation();

    initNavbarScroll();

    initSmoothScroll();

    initCounterAnimation();

    initScrollReveal();

    initFaqAccordion();

    initBackToTop();

});

/* =========================================
   ACTIVE NAVIGATION
========================================= */

function initActiveNavigation() {

    const currentPage =
        window.location.pathname
        .split("/")
        .pop() || "index.html";

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (href === currentPage) {

                link.classList.add("active");

            }

        });

}

/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

function initNavbarScroll() {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.style.background =
                "rgba(5,8,22,0.92)";

            navbar.style.backdropFilter =
                "blur(24px)";

            navbar.style.borderBottom =
                "1px solid rgba(124,92,255,0.15)";

        }

        else {

            navbar.style.background =
                "rgba(5,8,22,0.75)";

            navbar.style.borderBottom =
                "1px solid rgba(255,255,255,0.05)";

        }

    });

}

/* =========================================
   SMOOTH SCROLL
========================================= */

function initSmoothScroll() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", e => {

                const targetId =
                    anchor.getAttribute("href");

                if (
                    targetId === "#" ||
                    targetId.length < 2
                ) return;

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

}

/* =========================================
   COUNTER ANIMATION
========================================= */

function initCounterAnimation() {

    const counters =
        document.querySelectorAll(
            ".metric-card h3"
        );

    if (!counters.length) return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                const element =
                    entry.target;

                const text =
                    element.innerText;

                const number =
                    parseInt(
                        text.replace(/\D/g, "")
                    );

                if (
                    isNaN(number)
                ) return;

                let current = 0;

                const step =
                    Math.ceil(number / 50);

                const timer =
                    setInterval(() => {

                        current += step;

                        if (current >= number) {

                            current = number;

                            clearInterval(timer);

                        }

                        element.innerText =
                            current +
                            text.replace(/[0-9]/g, "");

                    }, 20);

                observer.unobserve(element);

            });

        });

    counters.forEach(counter =>
        observer.observe(counter)
    );

}

/* =========================================
   SCROLL REVEAL
========================================= */

function initScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".feature-card, .metric-card, .journey-step, .roadmap-card"
        );

    if (!elements.length) return;

    elements.forEach(el => {

        el.style.opacity = "0";

        el.style.transform =
            "translateY(40px)";

        el.style.transition =
            "all .7s ease";

    });

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        }, {
            threshold: 0.12
        });

    elements.forEach(el =>
        observer.observe(el)
    );

}

/* =========================================
   FAQ ACCORDION
========================================= */

function initFaqAccordion() {

    const faqCards =
        document.querySelectorAll(
            ".faq-container .feature-card"
        );

    if (!faqCards.length) return;

    faqCards.forEach(card => {

        const answer =
            card.querySelector("p");

        if (!answer) return;

        answer.style.display = "none";

        card.style.cursor = "pointer";

        card.addEventListener("click", () => {

            const isOpen =
                answer.style.display === "block";

            document
                .querySelectorAll(
                    ".faq-container .feature-card p"
                )
                .forEach(item => {

                    item.style.display = "none";

                });

            if (!isOpen) {

                answer.style.display =
                    "block";

            }

        });

    });

}

/* =========================================
   BACK TO TOP BUTTON
========================================= */

function initBackToTop() {

    const button =
        document.createElement("button");

    button.innerHTML = "↑";

    button.className =
        "back-to-top";

    document.body.appendChild(button);

    button.style.position = "fixed";
    button.style.right = "24px";
    button.style.bottom = "24px";
    button.style.width = "52px";
    button.style.height = "52px";
    button.style.borderRadius = "50%";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.zIndex = "999";
    button.style.fontSize = "20px";
    button.style.display = "none";
    button.style.color = "#fff";
    button.style.background =
        "linear-gradient(135deg,#7c5cff,#4f46e5)";
    button.style.boxShadow =
        "0 10px 30px rgba(124,92,255,.35)";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            button.style.display =
                "block";

        }

        else {

            button.style.display =
                "none";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* =========================================
   CONSOLE BANNER
========================================= */

console.log(
`
🚀 Campus Connect V4

One Platform.
Every Campus Experience.

Developed by LeadCircle.
`
);
