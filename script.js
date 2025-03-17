// Function to toggle the menu visibility on click of the hamburger icon
function toggleMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle the active class to show or hide the menu
    navLinks.classList.toggle("active");

    // Toggle the active class on the hamburger icon to animate it
    hamburger.classList.toggle("active");
}
