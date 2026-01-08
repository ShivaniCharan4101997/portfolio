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
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e)=>{
    e.preventDefault();
    // serviceid ,templateid,#form,publicKey
    emailjs.sendForm('service_b7kb52a','template_qto4jdk','#contact_form','JPRM-rqgRfEqjgFgA').then(()=>{
        contactMessage.textContent = 'Message sent Successfully!';

    //     remove message after 5sec
        setTimeout(()=>{
            contactMessage.textContent = '';
        },5000)

    //     clear input fields

        contactForm.reset()
    },()=>{
        // error message
        contactMessage.textContent = 'Message not sent Successfully!';
    })
}

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = ()=>{
    const scrollUp = document.getElementById("scroll-up");
    this.scrollY >= 350? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = ()=>{
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "    ]");

        if(scrollDown>sectionTop && scrollDown<= sectionTop+sectionHeight){
            sectionsClass.classList.add("active-link");
        }else{
            sectionsClass.classList.remove("active-link");
        }
    })
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/