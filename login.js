const getStarted = document.getElementById("getStarted");
const extraFields = document.getElementById("extraFields");
const createAccount = document.getElementById("createAccount");

getStarted.addEventListener("click", function() {
    extraFields.style.display = "flex";
});

createAccount.addEventListener("click", function() {
    window.location.href = "code.html";
});
