/* ==================================================
   CAMPUS CONNECT V6 ENHANCED FINAL
   assets/js/main.js
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE NAVIGATION
    ========================================== */

    const menuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            menuBtn.innerHTML =
                navLinks.classList.contains("active")
                ? "✕"
                : "☰";

        });

        document.querySelectorAll("#navLinks a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("active");

                    menuBtn.innerHTML = "☰";

                });

            });

    }

    /* ==========================================
       NAVBAR SCROLL EFFECT
    ========================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(3,7,18,.95)";

            navbar.style.backdropFilter =
                "blur(20px)";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.25)";

        } else {

            navbar.style.background =
                "rgba(3,7,18,.80)";

            navbar.style.boxShadow =
                "none";

        }

    }

    updateNavbar();

    window.addEventListener(
        "scroll",
        updateNavbar
    );

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (
                href === currentPage ||
                (
                    currentPage === "" &&
                    href === "index.html"
                )
            ) {

                link.classList.add("active");

            }

        });

    /* ==========================================
       SMOOTH SCROLLING
    ========================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    const target =
                        document.querySelector(
                            this.getAttribute("href")
                        );

                    if (!target) return;

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth",
                        block: "start"

                    });

                }
            );

        });

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements =
        document.querySelectorAll(

            ".feature-card, \
             .module-card, \
             .impact-card, \
             .team-card, \
             .advisor-card, \
             .roadmap-card, \
             .blog-card, \
             .download-card, \
             .support-card, \
             .journey-step, \
             .fade-up"

        );

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    revealElements.forEach(el => {

        el.classList.add(
            "reveal-hidden"
        );

        revealObserver.observe(el);

    });

    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );

    faqItems.forEach(item => {

        const question =
            item.querySelector(
                ".faq-question"
            );

        const answer =
            item.querySelector(
                ".faq-answer"
            );

        if (
            !question ||
            !answer
        ) return;

        answer.style.display =
            "none";

        question.addEventListener(
            "click",
            () => {

                const isOpen =
                    item.classList.contains(
                        "active"
                    );

                faqItems.forEach(i => {

                    i.classList.remove(
                        "active"
                    );

                    const a =
                        i.querySelector(
                            ".faq-answer"
                        );

                    if (a)
                        a.style.display =
                            "none";

                });

                if (!isOpen) {

                    item.classList.add(
                        "active"
                    );

                    answer.style.display =
                        "block";

                }

            }
        );

    });

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const scrollBtn =
        document.getElementById(
            "scrollTop"
        );

    function toggleScrollButton() {

        if (!scrollBtn) return;

        if (window.scrollY > 400) {

            scrollBtn.style.opacity =
                "1";

            scrollBtn.style.visibility =
                "visible";

        } else {

            scrollBtn.style.opacity =
                "0";

            scrollBtn.style.visibility =
                "hidden";

        }

    }

    toggleScrollButton();

    window.addEventListener(
        "scroll",
        toggleScrollButton
    );

    if (scrollBtn) {

        scrollBtn.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    const counters =
        document.querySelectorAll(
            ".impact-card h3"
        );

    const counterObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) return;

                    const counter =
                        entry.target;

                    const text =
                        counter.innerText;

                    const value =
                        parseInt(
                            text.replace(
                                /\D/g,
                                ""
                            )
                        );

                    if (
                        isNaN(value)
                    ) return;

                    let current = 0;

                    const speed =
                        value / 40;

                    const interval =
                        setInterval(() => {

                            current +=
                                speed;

                            if (
                                current >= value
                            ) {

                                current =
                                    value;

                                clearInterval(
                                    interval
                                );

                            }

                            let suffix = "";

                            if (
                                text.includes(
                                    "%"
                                )
                            )
                                suffix = "%";

                            if (
                                text.includes(
                                    "+"
                                )
                            )
                                suffix = "+";

                            counter.innerText =
                                Math.floor(
                                    current
                                ) + suffix;

                        }, 25);

                    counterObserver.unobserve(
                        counter
                    );

                });

            }

        );

    counters.forEach(counter => {

        counterObserver.observe(
            counter
        );

    });

    /* ==========================================
       CONTACT FORM
    ========================================== */

    const contactForm =
        document.querySelector(
            "#contactForm"
        );

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function () {

                const submitBtn =
                    contactForm.querySelector(
                        "button[type='submit']"
                    );

                if (submitBtn) {

                    submitBtn.disabled =
                        true;

                    submitBtn.innerHTML =
                        "Sending...";

                }

            }
        );

    }

    /* ==========================================
       IMAGE HOVER EFFECT
    ========================================== */

    document
        .querySelectorAll(
            ".screenshot-card img"
        )
        .forEach(img => {

            img.addEventListener(
                "mouseenter",
                () => {

                    img.style.transform =
                        "scale(1.04)";

                    img.style.transition =
                        ".4s ease";

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
       PRELOADER SUPPORT
    ========================================== */

    const preloader =
        document.getElementById(
            "preloader"
        );

    if (preloader) {

        window.addEventListener(
            "load",
            () => {

                preloader.style.opacity =
                    "0";

                setTimeout(() => {

                    preloader.remove();

                }, 500);

            }
        );

    }

});

/* ==========================================
   GLOBAL HELPERS
========================================== */

function openExternal(url) {

    window.open(
        url,
        "_blank"
    );

}

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({

        behavior: "smooth"

    });

}

/* ==================================================
   END OF MAIN.JS
================================================== */