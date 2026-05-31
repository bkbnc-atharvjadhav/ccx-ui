/* ==================================================
   CAMPUS CONNECT V4 FINAL MASTER
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initActiveNavigation();

    initNavbarScroll();

    initSmoothScroll();

    initCounterAnimation();

    initScrollReveal();

    initFaqAccordion();

    initMobileMenu();

    initBackToTop();

    initFormHandler();

});

/* ==================================================
   ACTIVE NAVIGATION
================================================== */

function initActiveNavigation(){

    const currentPage =
        window.location.pathname
        .split("/")
        .pop() || "index.html";

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if(href === currentPage){

                link.classList.add("active");

            }

        });

}

/* ==================================================
   NAVBAR SCROLL EFFECT
================================================== */

function initNavbarScroll(){

    const navbar =
        document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            navbar.style.background =
                "rgba(5,8,22,.95)";

            navbar.style.backdropFilter =
                "blur(24px)";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.25)";

        }

        else{

            navbar.style.background =
                "rgba(5,8,22,.75)";

            navbar.style.boxShadow =
                "none";

        }

    });

}

/* ==================================================
   MOBILE MENU
================================================== */

function initMobileMenu(){

    const nav =
        document.querySelector(".nav-links");

    const container =
        document.querySelector(".nav-container");

    if(!nav || !container) return;

    let button =
        document.querySelector(".mobile-menu-btn");

    if(!button){

        button =
            document.createElement("div");

        button.className =
            "mobile-menu-btn";

        button.innerHTML = "☰";

        container.appendChild(button);

    }

    button.addEventListener("click", () => {

        nav.classList.toggle("active");

        button.innerHTML =
            nav.classList.contains("active")
            ? "✕"
            : "☰";

    });

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                button.innerHTML = "☰";

            });

        });

}

/* ==================================================
   SMOOTH SCROLL
================================================== */

function initSmoothScroll(){

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", e => {

                const targetId =
                    anchor.getAttribute("href");

                if(
                    targetId === "#" ||
                    targetId.length < 2
                ) return;

                const target =
                    document.querySelector(targetId);

                if(!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",
                    block:"start"

                });

            });

        });

}

/* ==================================================
   COUNTER ANIMATION
================================================== */

function initCounterAnimation(){

    const counters =
        document.querySelectorAll(
            ".metric-card h3"
        );

    if(!counters.length) return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if(!entry.isIntersecting) return;

                const element =
                    entry.target;

                const original =
                    element.innerText;

                const number =
                    parseInt(
                        original.replace(/\D/g,"")
                    );

                if(isNaN(number)) return;

                let current = 0;

                const step =
                    Math.ceil(number / 60);

                const timer =
                    setInterval(() => {

                        current += step;

                        if(current >= number){

                            current = number;

                            clearInterval(timer);

                        }

                        element.innerText =
                            current +
                            original.replace(/[0-9]/g,"");

                    },20);

                observer.unobserve(element);

            });

        });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}

/* ==================================================
   SCROLL REVEAL
================================================== */

function initScrollReveal(){

    const items =
        document.querySelectorAll(
            ".feature-card, .metric-card, .journey-step, .roadmap-card, .team-card, .blog-card, .career-card"
        );

    if(!items.length) return;

    items.forEach(item => {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(40px)";

        item.style.transition =
            "all .7s ease";

    });

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },{
            threshold:.12
        });

    items.forEach(item => {

        observer.observe(item);

    });

}

/* ==================================================
   FAQ ACCORDION
================================================== */

function initFaqAccordion(){

    const faqCards =
        document.querySelectorAll(
            ".faq-container .feature-card"
        );

    if(!faqCards.length) return;

    faqCards.forEach(card => {

        const answer =
            card.querySelector("p");

        const title =
            card.querySelector("h3");

        if(!answer || !title) return;

        answer.style.display = "none";

        card.addEventListener("click", () => {

            const open =
                answer.style.display === "block";

            document
                .querySelectorAll(
                    ".faq-container .feature-card p"
                )
                .forEach(p => {

                    p.style.display = "none";

                });

            if(!open){

                answer.style.display =
                    "block";

            }

        });

    });

}

/* ==================================================
   CONTACT FORM
================================================== */

function initFormHandler(){

    const forms =
        document.querySelectorAll("form");

    if(!forms.length) return;

    forms.forEach(form => {

        form.addEventListener("submit", e => {

            e.preventDefault();

            const button =
                form.querySelector(
                    "button"
                );

            if(button){

                const original =
                    button.innerText;

                button.innerText =
                    "Submitting...";

                setTimeout(() => {

                    button.innerText =
                        "Submitted ✓";

                    setTimeout(() => {

                        button.innerText =
                            original;

                    },2500);

                },1000);

            }

        });

    });

}

/* ==================================================
   BACK TO TOP
================================================== */

function initBackToTop(){

    const button =
        document.createElement("button");

    button.className =
        "back-to-top";

    button.innerHTML = "↑";

    document.body.appendChild(button);

    button.style.position = "fixed";
    button.style.right = "24px";
    button.style.bottom = "24px";
    button.style.width = "54px";
    button.style.height = "54px";
    button.style.borderRadius = "50%";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.zIndex = "9999";
    button.style.display = "none";
    button.style.color = "#fff";
    button.style.fontSize = "22px";
    button.style.background =
        "linear-gradient(135deg,#7c5cff,#4f46e5)";
    button.style.boxShadow =
        "0 12px 30px rgba(124,92,255,.35)";

    window.addEventListener("scroll", () => {

        if(window.scrollY > 400){

            button.style.display =
                "block";

        }

        else{

            button.style.display =
                "none";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==================================================
   PRELOAD IMAGE OPTIMIZATION
================================================== */

window.addEventListener("load", () => {

    document
        .querySelectorAll("img")
        .forEach(img => {

            img.loading = "lazy";

        });

});

/* ==================================================
   CONSOLE BRANDING
================================================== */

console.log(
`
🚀 Campus Connect V4

One Platform. Every Campus Experience.

Built with ❤️ by LeadCircle
`
);
