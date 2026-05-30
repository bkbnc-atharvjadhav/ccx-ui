/* ==========================================
   CAMPUS CONNECT | MAIN.JS
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       FAQ ACCORDION
       ====================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if (faq !== item) {
                    faq.classList.remove("open");
                }

            });

            item.classList.toggle("open");

        });

    });

    /* ======================================
       SCROLL REVEAL
       ====================================== */

    const revealElements =
        document.querySelectorAll(
            ".feature-card, .phone-card, .screenshot-grid img"
        );

    function revealOnScroll() {

        const triggerPoint =
            window.innerHeight * 0.85;

        revealElements.forEach(element => {

            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < triggerPoint) {

                element.classList.add("show");

            }

        });

    }

    revealOnScroll();

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    /* ======================================
       ACTIVE NAVIGATION
       ====================================== */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();

    /* ======================================
       NAVBAR SHADOW
       ====================================== */

    const navbar =
        document.querySelector(".navbar");

    function navbarEffect() {

        if (window.scrollY > 40) {

            navbar.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.35)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }

    window.addEventListener(
        "scroll",
        navbarEffect
    );

    navbarEffect();

    /* ======================================
       PHONE FLOAT EFFECT
       ====================================== */

    const phones =
        document.querySelectorAll(".phone-card");

    document.addEventListener(
        "mousemove",
        (e) => {

            const x =
                (window.innerWidth / 2 - e.clientX)
                / 60;

            const y =
                (window.innerHeight / 2 - e.clientY)
                / 60;

            phones.forEach(phone => {

                phone.style.transform =
                    `translate(${x}px, ${y}px)`;

            });

        }
    );

    /* ======================================
       SMOOTH SCROLL LINKS
       ====================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    e.preventDefault();

                    const target =
                        document.querySelector(
                            this.getAttribute("href")
                        );

                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        });

    /* ======================================
       EARLY ACCESS FORM
       ====================================== */

    const earlyAccessForm =
        document.querySelector(
            ".early-access-form"
        );

    if (earlyAccessForm) {

        earlyAccessForm.addEventListener(
            "submit",
            (e) => {

                e.preventDefault();

                alert(
                    "Thank you for your interest in Campus Connect! We will contact you soon."
                );

                earlyAccessForm.reset();

            }
        );

    }

    /* ======================================
       COUNTER ANIMATION
       ====================================== */

    const counters =
        document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target =
                Number(
                    counter.getAttribute(
                        "data-target"
                    )
                );

            const current =
                Number(counter.innerText);

            const increment =
                target / 80;

            if (current < target) {

                counter.innerText =
                    Math.ceil(
                        current + increment
                    );

                setTimeout(
                    updateCounter,
                    20
                );

            } else {

                counter.innerText =
                    target;

            }

        };

        updateCounter();

    });

    /* ======================================
       BUTTON GLOW EFFECT
       ====================================== */

    const buttons =
        document.querySelectorAll(
            ".btn-primary"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.boxShadow =
                    "0 0 30px rgba(108,99,255,0.45)";

            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.boxShadow =
                    "none";

            }
        );

    });

});

/* ==========================================
   END OF FILE
   ========================================== */
