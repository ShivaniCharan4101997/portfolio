/*=============== SHOW MENU ===============*/
const navMenu  = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#toggle-menu");
const navClose  = document.querySelector("#nav-close");

/* Open menu */
if (navMenu && navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/* Close menu */
if (navMenu && navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/* Close menu when clicking a nav link */
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});




/*=============== REMOVE MENU MOBILE ===============*/


/*=============== HOME TYPED JS ===============*/

var typed = new Typed("#home-typed", {
    strings: ["Frontend Developer", "English Teacher", "Freelancer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = ()=>{
    const header = document.getElementById("header");
    this.scrollY>=50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header");
}
window.addEventListener("scroll", shadowHeader);

/*=============== CONTACT EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/