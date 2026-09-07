/* =========================================
   THEME
========================================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

});


/* =========================================
   LOAD SAVED THEME
========================================= */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.querySelector("nav");


menuBtn.addEventListener("click", () => {

    const isOpen =
        nav.classList.toggle("open");

    menuBtn.classList.toggle("open", isOpen);

    menuBtn.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close the mobile menu after tapping a link */

nav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuBtn.classList.remove("open");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================
   SCROLL PROGRESS / NAVBAR STATE / TO-TOP
========================================= */

const progressBar =
    document.getElementById("scrollProgress");

const navbar =
    document.querySelector(".navbar");

const toTop =
    document.getElementById("toTop");


window.addEventListener(
    "scroll",
    () => {

        const doc =
            document.documentElement;

        const max =
            doc.scrollHeight - window.innerHeight;

        const progress =
            max > 0
                ? window.scrollY / max
                : 0;

        progressBar.style.transform =
            `scaleX(${progress})`;

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 40
        );

        toTop.classList.toggle(
            "visible",
            window.scrollY > 600
        );

    },
    { passive: true }
);


toTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   TYPING EFFECT
========================================= */

const typedText =
    document.getElementById("typedText");

const roles = [
    "Software Developer",
    "UI/UX Enthusiast",
    "Problem Solver"
];

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (prefersReducedMotion) {

    typedText.textContent = roles[0];

} else {

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeLoop = () => {

        const currentRole =
            roles[roleIndex];

        if (!deleting) {

            charIndex++;

            typedText.textContent =
                currentRole.slice(0, charIndex);

            if (charIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeLoop, 1900);

                return;

            }

            setTimeout(typeLoop, 85);

        } else {

            charIndex--;

            typedText.textContent =
                currentRole.slice(0, charIndex);

            if (charIndex === 0) {

                deleting = false;

                roleIndex =
                    (roleIndex + 1) % roles.length;

                setTimeout(typeLoop, 450);

                return;

            }

            setTimeout(typeLoop, 45);

        }

    };

    typeLoop();

}


/* =========================================
   PROFILE CARD TILT
========================================= */

const tiltCard =
    document.querySelector(".profile-card");

const canHover =
    window.matchMedia("(hover: hover)").matches;


if (tiltCard && canHover && !prefersReducedMotion) {

    tiltCard.addEventListener("mousemove", (e) => {

        const rect =
            tiltCard.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) / rect.width;

        const y =
            (e.clientY - rect.top) / rect.height;

        const rotateY =
            (x - 0.5) * 8;

        const rotateX =
            (0.5 - y) * 8;

        tiltCard.style.transform =
            `translateY(-6px) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    tiltCard.addEventListener("mouseleave", () => {

        tiltCard.style.transform = "";

    });

}


/* =========================================
   CARD SPOTLIGHT
========================================= */

const glowCards =
    document.querySelectorAll(
        ".profile-card, .focus-card, .project-card"
    );


glowCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        card.style.setProperty(
            "--mx",
            `${e.clientX - rect.left}px`
        );

        card.style.setProperty(
            "--my",
            `${e.clientY - rect.top}px`
        );

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".profile-card, .stats, .about-content, .focus-card, .skill, .project-card, .reveal"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                const el =
                    entry.target;

                el.classList.add("show");

                /* Restore snappy hover transitions after the entrance */
                const delay =
                    (parseFloat(
                        getComputedStyle(el).transitionDelay
                    ) || 0) * 1000;

                setTimeout(() => {
                    el.classList.add("entered");
                }, delay + 750);

                observer.unobserve(el);

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {
    observer.observe(element);
});


/* =========================================
   NUMBER COUNTER
========================================= */

const counters =
    document.querySelectorAll("[data-count]");


const counterObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                const counter =
                    entry.target;

                const target =
                    Number(
                        counter.dataset.count
                    );

                let current = 0;

                const speed = 40;

                const updateCounter = () => {

                    current += 1;

                    counter.textContent =
                        current + "+";

                    if (current < target) {

                        setTimeout(
                            updateCounter,
                            speed
                        );

                    }

                };

                updateCounter();

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.8
        }
    );


counters.forEach((counter) => {
    counterObserver.observe(counter);
});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");


const updateActiveNav = () => {

    let current = "home";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);

/* Run once so the correct link is active on load */
updateActiveNav();