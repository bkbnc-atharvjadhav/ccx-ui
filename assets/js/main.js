/* ==========================================
   CAMPUS CONNECT - MAIN.JS V2.1
   Production Ready
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            menuToggle.innerHTML =
                mobileMenu.classList.contains("active")
                    ? "✕"
                    : "☰";

        });

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                menuToggle.innerHTML = "☰";

            });

        });

        /* ESC KEY CLOSE */

        document.addEventListener(
            "keydown",
            (e) => {

                if (
                    e.key === "Escape" &&
                    mobileMenu.classList.contains("active")
                ) {

                    mobileMenu.classList.remove("active");

                    menuToggle.innerHTML = "☰";

                }

            }
        );

        /* CLICK OUTSIDE CLOSE */

        document.addEventListener(
            "click",
            (e) => {

                if (
                    mobileMenu.classList.contains("active") &&
                    !mobileMenu.contains(e.target) &&
                    !menuToggle.contains(e.target)
                ) {

                    mobileMenu.classList.remove("active");

                    menuToggle.innerHTML = "☰";

                }

            }
        );

    }

    /* ==========================================
       NAVBAR SCROLL EFFECT
    ========================================== */

    const navbar =
        document.querySelector(".navbar");

    function handleNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5,8,22,0.92)";

            navbar.style.backdropFilter =
                "blur(25px)";

            navbar.style.boxShadow =
                "0 10px 40px rgba(0,0,0,0.35)";

        } else {

            navbar.style.background =
                "rgba(5,8,22,0.75)";

            navbar.style.backdropFilter =
                "blur(20px)";

            navbar.style.boxShadow =
                "none";

        }

    }

    window.addEventListener(
        "scroll",
        handleNavbar
    );

    handleNavbar();

    /* ==========================================
       FADE UP ANIMATION
    ========================================== */

    const fadeElements =
        document.querySelectorAll(
            ".feature-card, .team-card, .metric-card, .roadmap-card, .journey-step, .showcase-phone"
        );

    fadeElements.forEach(el => {

        el.classList.add("fade-up");

    });

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    fadeElements.forEach(el => {

        observer.observe(el);

    });

    /* ==========================================
       HERO METRIC COUNTER
    ========================================== */

    const counters =
        document.querySelectorAll(
            ".metric h3, .metric-card h3"
        );

    const animateCounter = counter => {

        const targetText =
            counter.innerText;

        const target =
            parseInt(targetText);

        if (isNaN(target)) return;

        let current = 0;

        const increment =
            Math.ceil(target / 35);

        const timer =
            setInterval(() => {

                current += increment;

                if (current >= target) {

                    counter.innerText =
                        targetText;

                    clearInterval(timer);

                } else {

                    if (
                        targetText.includes("+")
                    ) {

                        counter.innerText =
                            current + "+";

                    } else {

                        counter.innerText =
                            current;

                    }

                }

            }, 30);

    };

    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        animateCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.5
            }
        );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );

                    if (!target) return;

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }
            );

        });

    /* ==========================================
       SCREENSHOT HOVER
    ========================================== */

    const screenshots =
        document.querySelectorAll(
            ".showcase-phone img"
        );

    screenshots.forEach(img => {

        img.addEventListener(
            "mouseenter",
            () => {

                img.style.transform =
                    "scale(1.03)";

            }
        );

        img.addEventListener(
            "mouseleave",
            () => {

                img.style.transform =
                    "scale(1)";

            }
        );

    });

    /* ==========================================
       BUTTON HOVER EFFECT
    ========================================== */

    const buttons =
        document.querySelectorAll(
            ".btn-primary"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.transform =
                    "translateY(-3px) scale(1.02)";

            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translateY(0) scale(1)";

            }
        );

    });

});

/* ==========================================
   END OF FILE
========================================== */
