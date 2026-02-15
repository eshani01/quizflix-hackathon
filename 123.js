document.addEventListener("DOMContentLoaded", function () {

    const joinBtn = document.getElementById("joinBtn");
    const popupOverlay = document.getElementById("popupOverlay");
    const enterBtn = document.getElementById("enterBtn");

    // Open popup smoothly
    joinBtn.addEventListener("click", function () {
        popupOverlay.classList.add("active");
    });

    // Redirect to dashboard
    enterBtn.addEventListener("click", function () {
        window.location.href = "dashboard.html";
    });

});