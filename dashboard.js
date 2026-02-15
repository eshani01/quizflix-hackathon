document.addEventListener("DOMContentLoaded", function () {

    const courses = document.querySelectorAll(".course-card:not(.edit-card)");
    const editBtn = document.getElementById("editBtn");
    const avatarEditor = document.getElementById("avatarEditor");
    const closeEditor = document.getElementById("closeEditor");
    const avatarOptions = document.querySelectorAll(".avatar-option");

    let editMode = false;
    let selectedCourseAvatar = null;

    // NORMAL CLICK (Zoom)
    courses.forEach(course => {
        course.addEventListener("click", function () {

            if (!editMode) {
                course.classList.add("zoom");
                setTimeout(() => {
                    window.location.href = course.dataset.link;
                }, 600);
            } 
            else {
                selectedCourseAvatar = course.querySelector(".avatar");
                avatarEditor.classList.add("active");
            }

        });
    });

    // ENTER EDIT MODE
    editBtn.addEventListener("click", function () {

    if (!editMode) {
        // Turn ON edit mode
        editMode = true;
        document.body.classList.add("blur-mode");
    } else {
        // Turn OFF edit mode
        editMode = false;
        document.body.classList.remove("blur-mode");
        avatarEditor.classList.remove("active");
    }

    });

    // CLOSE EDITOR
    closeEditor.addEventListener("click", function () {
    avatarEditor.classList.remove("active");
    });

    // CHANGE AVATAR COLOR
    avatarOptions.forEach(option => {
        option.addEventListener("click", function () {
            if (selectedCourseAvatar) {
                selectedCourseAvatar.style.background =
                    window.getComputedStyle(option).backgroundColor;
            }
        });
    });

});