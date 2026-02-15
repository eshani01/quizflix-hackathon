document.addEventListener("DOMContentLoaded", function() {

    const playBtn = document.querySelector(".play-btn");
    const cards = document.querySelectorAll(".card");

    playBtn.addEventListener("click", function() {
        alert("Starting Neutral Amino Acids Lesson...");
        // Later replace with:
        // window.location.href = "lesson.html";
    });

    cards.forEach(card => {
        card.addEventListener("click", function() {
            alert("Opening: " + card.innerText);
        });
    });

});