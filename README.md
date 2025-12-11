1. Project Overview

The Week 1 Internship Project focuses on building a basic personal portfolio website using HTML.
The goal is to learn foundational HTML concepts, create a clean project structure, and practice organizing content into meaningful sections such as header, about, skills, and contact.

Project Objectives

->Understand and apply essential HTML elements
->Build a structured, semantic portfolio web page
->Practice forms, links, navigation menus, lists, and images
->Follow clean coding and documentation standards
->Validate the HTML file for correctness



2.HTML Concepts Learned
During Week 1, the following key HTML topics were learned and applied:

✔ Basic HTML Structure

<!DOCTYPE html>

'<html>, <head>, <body>'

Meta tags for responsiveness and SEO

Page title and favicon setup

✔ Text & Content Tags

'<h1>–<h6>' headings

<p> paragraphs

<strong>, <em> emphasis tags

✔ Navigation & Linking

'<nav>' semantic tag

'<a>' anchor tags for internal and external links

target="_blank" for opening links in new tabs

✔ Lists

Ordered lists <ol>

Unordered lists <ul>

List items <li>

✔ Images

'<img src="" alt="">'

Importance of the alt attribute

✔ Forms & Input Validation

'<form>'

'<input>' with required, minlength, and email validation

'<textarea>' for multi-line input

'<button>'

✔ Semantic Structure

Sections used to create a readable portfolio:

'<header>'

'<section>'

'<nav>'

3. How the Portfolio is Structured

1. Header Section

Includes my portfolio title and navigation menu.

2. About Section

Contains my profile image and a short introduction.

3. Skills Section

Lists technical and soft skills using clear HTML list tags.

4. Contact Section

A form with validation for name, email, and message.

5. Online Links Section
Links to my GitHub or LinkedIn profile.




4. Setup Instructions

Follow these steps to run or edit the project:

Step 1: Install VS Code/Webstorm

Go to the VS Code/Wenstorm website

Download and install for your OS

Step 2: Create Project Folder

Create a folder named week1-portfolio

Step 3: Create HTML File

Inside the folder, create:index.html

Step 4: write code and add image

Open in Browser

Right-click index.html → Open With → Chrome / Edge / 
Firefox



5. Code Structure

Your project has a simple and clean file hierarchy:

week1-portfolio/
│── index.html
│── images/pfp.jpg        
│── README.md



6. Visual Documentation (Screenshots)

Include the following screenshots in your submission:

1️⃣ Browser View Screenshot
(images/ss/ss1)
(images/ss/ss2)
7. 
8. Technical Details

Even though this project uses HTML only, some technical principles were used:

✔ Architecture

A single-page structure

Semantic layout for accessibility

Separation of concerns (HTML for structure, inline CSS for styling)

✔ No algorithms or data structures

Since this is an HTML-only project, no logic-based algorithms are used.

But HTML validation rules were implemented:

✔ Input Validation Rules
Field	Rule	Purpose
Name	required, minlength="3"	Prevent empty/short names
Email	type="email"	Validate email format
Message	required, minlength="10"	Ensure meaningful messages

 8. Testing Evidence

I performed the following tests:

✔ Browser Testing

Opened the page in Chrome

Verified all sections appear correctly

Checked images and links load properly

✔ Form Validation Tests
Test	Expected Result	Status
Blank form submit	Should show error	Passed
Invalid email	Should show error	Passed
Message too short	Should show error	Passed
All fields correct	Should accept	Passed
✔ HTML Validation

Used the W3C HTML Validator to check for:

Errors

Warnings

Missing attributes

The file is clean and valid.