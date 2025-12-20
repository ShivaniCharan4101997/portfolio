# Week 1 Internship Project – Personal Portfolio Website

## 1. Project Overview

The **Week 1 Internship Project** focuses on building a basic personal portfolio website using **HTML**.

The goal of this project is to understand foundational HTML concepts, create a clean and well-organized project structure, and practice arranging content into meaningful sections such as **Header, About, Skills, and Contact**.

### Project Objectives

* Understand and apply essential HTML elements
* Build a structured and semantic portfolio web page
* Practice using forms, links, navigation menus, lists, and images
* Follow clean coding and documentation standards
* Validate the HTML file for correctness using standard tools

---

## 2. HTML Concepts Learned

During Week 1, the following key HTML topics were learned and applied:

### ✔ Basic HTML Structure

* `<!DOCTYPE html>`
* `<html>`, `<head>`, `<body>`
* Meta tags for responsiveness and SEO
* Page title setup

### ✔ Text & Content Tags

* `<h1>` – `<h6>` headings
* `<p>` paragraphs
* `<strong>` and `<em>` emphasis tags

### ✔ Navigation & Linking

* `<nav>` semantic tag
* `<a>` anchor tags for internal and external links
* `target="_blank"` for opening links in new tabs

### ✔ Lists

* Ordered lists `<ol>`
* Unordered lists `<ul>`
* List items `<li>`

### ✔ Images

* `<img src="" alt="">`
* Importance of the `alt` attribute for accessibility

### ✔ Forms & Input Validation

* `<form>`
* `<input>` with `required`, `minlength`, and `type="email"`
* `<textarea>` for multi-line input
* `<button>` for form submission

### ✔ Semantic Structure

Semantic tags were used to improve readability and accessibility:

* `<header>`
* `<section>`
* `<nav>`

---

## 3. How the Portfolio is Structured

### 1. Header Section

* Contains the portfolio title
* Includes a navigation menu linking to different sections

### 2. About Section

* Displays a profile image
* Includes a short personal introduction

### 3. Skills Section

* Lists technical skills
* Lists soft skills using HTML list tags

### 4. Contact Section

* Includes a contact form
* Validation for name, email, and message fields

### 5. Online Links Section

* Links to GitHub and LinkedIn profiles

---

## 4. Setup Instructions

Follow these steps to run or edit the project locally:

### Step 1: Install a Code Editor

* Download and install **VS Code** or **WebStorm** for your operating system

### Step 2: Create Project Folder

* Create a folder named `week1-portfolio`

### Step 3: Create HTML File

* Inside the folder, create a file named `index.html`

### Step 4: Write Code and Add Images

* Add your HTML code
* Place images inside the `images` folder

### Step 5: Open in Browser

* Right-click `index.html`
* Open with Chrome / Edge / Firefox

---

## 5. Code Structure

The project follows a simple and clean file hierarchy:

```
week1-portfolio/
│── index.html
│── images/
│   └── pfp.jpg
│── README.md
```

---

## 6. Visual Documentation (Screenshots)

Include the following screenshots in your submission:

* Browser view of the portfolio homepage
* Screenshots stored in:

    * `images/ss/ss1`
    * `images/ss/ss2`

---

## 7. Technical Details

Although this project uses **HTML only**, several technical principles were applied:

### ✔ Architecture

* Single-page website structure
* Semantic HTML layout for accessibility
* Clear separation of concerns (HTML for structure)

### ✔ No Algorithms or Data Structures

* This is a static HTML project
* No logic-based algorithms were required

### ✔ Input Validation Rules

| Field   | Rule                         | Purpose                      |
| ------- | ---------------------------- | ---------------------------- |
| Name    | `required`, `minlength="3"`  | Prevent empty or short names |
| Email   | `type="email"`               | Validate email format        |
| Message | `required`, `minlength="10"` | Ensure meaningful messages   |

---

## 8. Testing Evidence

The following tests were performed:

### ✔ Browser Testing

* Opened the website in Chrome
* Verified all sections display correctly
* Confirmed images and links load properly

### ✔ Form Validation Testing

| Test Case             | Expected Result     | Status |
| --------------------- | ------------------- | ------ |
| Blank form submission | Error message shown | Passed |
| Invalid email format  | Error message shown | Passed |
| Short message         | Error message shown | Passed |
| All valid inputs      | Form accepted       | Passed |

### ✔ HTML Validation

* Used the **W3C HTML Validator** to check:

    * Errors
    * Warnings
    * Missing attributes

The HTML file passed validation successfully and is clean and error-free.
