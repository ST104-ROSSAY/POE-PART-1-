// =========================================================================
// Credit Builder Flow - POE Part 3 External JavaScript Functionality
// =========================================================================

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Dynamic Footer Year Configuration
    // Automatically updates the copyright year so it is never out of date.
    const footerYear = document.getElementById("current-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // 2. Interactive Mobile Navigation Toggle
    // Opens and closes the navigation menu when viewed on small mobile screens.
    const menuToggle = document.getElementById("mobile-menu-btn");
    const navLinks = document.querySelector("nav");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function() {
            // Toggle visibility by shifting CSS classes dynamically
            navLinks.classList.toggle("nav-active");
            
            // Dynamic accessibility attributes manipulation for screen readers
            const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
            menuToggle.setAttribute("aria-expanded", !expanded);
        });
    }
});
