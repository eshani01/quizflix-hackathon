document.addEventListener("DOMContentLoaded", function() {

    const playBtn = document.querySelector(".play-btn");
    const modal = document.getElementById("lessonModal");
    const lessonPlay = document.querySelector(".play-lesson");
    const mainContent = document.body;

    // Open modal
    playBtn.addEventListener("click", function() {
        modal.classList.add("active");
        mainContent.classList.add("blur");
    });

    // Open modal from card
    document.querySelectorAll(".card").forEach(card => {
        if (card.innerText.includes("Neutral Amino Acids")) {
            card.addEventListener("click", function() {
                modal.classList.add("active");
                mainContent.classList.add("blur");
            });
        }
    });

    // Final Play -> Redirect
    lessonPlay.addEventListener("click", function() {
        window.location.href = "quiz.html";
    });

    // Close modal if clicked outside
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.classList.remove("active");
            mainContent.classList.remove("blur");
        }
    });

});