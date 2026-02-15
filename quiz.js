document.addEventListener("DOMContentLoaded", function () {

const questions = [
    {
        question: "Which of the following is a neutral amino acid?",
        options: ["Lysine", "Aspartic Acid", "Alanine", "Glutamic Acid"],
        correct: 2
    },
    {
        question: "Neutral amino acids have how many amino groups?",
        options: ["Two", "One", "Three", "Zero"],
        correct: 1
    },
    {
        question: "Which amino acid has a non-polar side chain?",
        options: ["Alanine", "Arginine", "Histidine", "Aspartate"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let streak = 0;
let timerInterval;
let startTime;

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const timerDisplay = document.getElementById("timer");

function startTimer() {
    let seconds = 0;
    startTime = Date.now();

    timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = seconds + "s";
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("div");
        btn.classList.add("option");
        btn.textContent = option;

        btn.addEventListener("click", function () {

    // Stop timer
    stopTimer();

    // Remove previous selections
    document.querySelectorAll(".option").forEach(opt => {
        opt.classList.remove("selected");
    });

    // Mark selected
    btn.classList.add("selected");

    // Disable all options after selection
    document.querySelectorAll(".option").forEach(opt => {
        opt.style.pointerEvents = "none";
    });

    if (index === q.correct) {
        score++;
        streak++;
        btn.classList.add("correct");
    } else {
        streak = 0;
        btn.classList.add("wrong");

        // Highlight correct answer
        document.querySelectorAll(".option")[q.correct]
            .classList.add("correct");
    }

    if (streak === 3) {
        alert("🍿 Binge Mode Activated!");
    }
});

        optionsContainer.appendChild(btn);
    });

    startTimer();
}

nextBtn.addEventListener("click", function () {
    stopTimer();
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz Completed! Score: " + score);
    }
});

loadQuestion();

});