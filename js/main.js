let submit = document.getElementById("submit");
let input = document.querySelectorAll("input")

submit.onclick = (e) => {
    e.preventDefault()

}

// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}


// scroll active link

let section = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")


window.onscroll = () =>
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
            })
        }

    })

// sticky navbar 


let header = document.querySelector("header");

function handleScroll() {
    header.classList.toggle("sticky", window.scrollY > 100);


    // remove toggle icon and navbar when scrolled due to link click

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

}

window.addEventListener("scroll", handleScroll);


// scroll reveal

ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });

ScrollReveal().reveal('.html, .css, .js, .bootstrap, .react, .github, .sass, .adobe', {
    delay: 200, origin: "left",
})

// multi text script

const text = new Typed(".multi-text", {
    strings: ['Frontend Developer', 'Sport Enthusiast', 'Graphic Designer Hobbyist',],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,

});

// disabled button

const btnDisabled = document.querySelector(".btn-hover");
const btnEmail = document.querySelector(".btn-email");
const formReset = document.getElementById("form");

btnDisabled.onclick = (e) => {
    e.preventDefault();
    btnDisabled.value = "Form Disabled; Use Send Email Button";
    btnDisabled.style.border = "1px solid #888"
    btnDisabled.style.backgroundColor = "#ddd";
    btnEmail.style.display = "inline-flex";
    formReset.reset();
}

// read more function

function readMore() {

    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("readBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}

function readMore2() {

    const dots = document.getElementById("dots2");
    const moreText = document.getElementById("more2");
    const btnText = document.getElementById("readBtn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}
