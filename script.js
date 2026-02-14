const landing = document.getElementById("landing");
const logo = document.getElementById("logo");
const tagline = document.getElementById("tagline");

landing.addEventListener("click", function () {
    
    // Fade out tagline
    tagline.classList.add("fade-out");

    // Zoom logo
    logo.classList.add("zoom");

    // Redirect after animation
    setTimeout(() => {
        window.location.href = "login.html";
    }, 900);
});