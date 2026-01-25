📌 Project Overview
Project Title

Responsive Portfolio Website using Advanced CSS Techniques

Goal & Objectives

The goal of this project is to design and develop a modern, responsive portfolio website that demonstrates advanced 
frontend skills using HTML, CSS, and JavaScript.

Objectives:

=> Build a clean, professional personal portfolio

=> Implement CSS Grid and Flexbox for complex layouts

=> Use CSS variables for theme management

=> Add smooth animations and transitions for better UX

=> Follow BEM methodology for scalable CSS

=> Ensure mobile-first, responsive design

=> Optimize performance and accessibility



⚙️ Setup Instructions
Prerequisites

Web browser (Chrome, Firefox, Edge)

Code editor (VS Code recommended)


Installation Steps

Clone or download the project

git clone <repository-url>


Open the project folder

Open index.html in a browser
(No build tools required)



🗂️ Code Structure

portfolio/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── ShivaniCV.pdf
└── README.md

Structure Rationale

Separation of concerns (HTML / CSS / JS)

Easy scalability and maintainability

Clear asset organization


🎨 Advanced CSS Techniques Used
1️⃣ CSS Grid for Layout Architecture

CSS Grid is used for primary layouts, ensuring flexibility and responsiveness.

.projects__container {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}


2️⃣ Flexbox for Alignment & Navigation

Flexbox is used for navigation, buttons, icons, and alignment.

.nav {
display: flex;
justify-content: space-between;
align-items: center;
}


3️⃣ CSS Variables (Custom Properties)

Centralized theming using :root variables.
:root {
--first-color: hsl(180, 80%, 48%);
--body-color: hsl(180, 8%, 8%);
}

4️⃣ Theme Switching via CSS Variables

Theme switching is implemented by toggling a class on <body>.

body.light-theme {
--body-color: hsl(180, 20%, 95%);
}

5️⃣ Animations & Transitions

Smooth UI interactions using transition and transform.

.projects__card:hover .projects__data {
opacity: 1;
transform: translateY(0);
}

6️⃣ Advanced CSS Selectors

Used for precision styling and clean markup.

Examples:

Pseudo-elements: ::after

Pseudo-classes: :hover, :focus

Descendant selectors

Attribute & state-based styling

.nav__link span::after { ... }
.contact__input:focus::placeholder { ... }


7️⃣ BEM Methodology

Strict Block–Element–Modifier naming ensures scalable CSS.

Example:
.projects__card
.projects__title
.button__ghost
.active-link


📱 Responsive Design (Mobile-First)
Approach:

Base styles target mobile devices

Enhancements via min-width media queries
@media screen and (min-width: 768px) {
.home__container {
grid-template-columns: repeat(2, 350px);
}
}
✔ Mobile-first
✔ Tablet optimized
✔ Desktop enhanced
✔ 2K resolution support


⚡ Performance Optimizations
1️⃣ CSS-Only Animations

Used transform and opacity

Avoided layout-thrashing properties (top, left)

2️⃣ Reusable Utility Classes
.grid {
display: grid;
gap: 1.5rem;
}
Reduced duplicated CSS

Smaller stylesheet size

3️⃣ Optimized Images

Responsive images

object-fit: cover

No unnecessary large assets

4️⃣ Minimal JavaScript

No heavy libraries

DOM updates kept minimal

Theme state stored in localStorage


🧠 Technical Details (Architecture)
Architecture Type

Component-based static architecture

Each section acts as a self-contained component

CSS handles layout & interaction

JS handles behavior only

Data Structures & Logic

DOM manipulation

Event listeners

LocalStorage key-value storage

No unnecessary loops or recursion


🧪 Testing Evidence
Manual Test Cases

| Test Case               | Expected Result            | Status |
| ----------------------- | -------------------------- | ------ |
| Mobile menu toggle      | Menu opens/closes smoothly | ✅      |
| Theme switch            | UI colors change correctly | ✅      |
| Page reload             | Theme preference retained  | ✅      |
| Responsive layout       | No overflow/breaking       | ✅      |
| Hover effects           | Smooth animations          | ✅      |
| Contact form validation | Required fields enforced   | ✅      |
