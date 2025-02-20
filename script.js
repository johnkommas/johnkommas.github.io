/*
 * Copyright (c) Ioannis E. Kommas 2025. All Rights Reserved
 */

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Reveal sections on scroll
    const sections = document.querySelectorAll("section");
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Initial check

    // Header background change on scroll
    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.9)";
        } else {
            header.style.background = "rgba(0, 0, 0, 0.8)";
        }
    });

    // Form validation
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.querySelector("input[name='name']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let message = document.querySelector("textarea[name='message']").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent successfully.");
        document.querySelector("form").reset();
    });
});