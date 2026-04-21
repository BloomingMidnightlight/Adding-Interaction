// Select elements
const toggleBtn = document.getElementById("toggleImageBtn");
const darkModeBtn = document.getElementById("darkModeToggle");
const image = document.querySelector(".card img");

// Track image state
let isOriginal = true;

// Image toggle function
toggleBtn.addEventListener("click", function () {
    if (isOriginal) {
        image.src = "assets/images/smart-lamp-2.jpg"; // second image
    } else {
        image.src = "assets/images/smart-lamp.jpg"; // original
    }

    isOriginal = !isOriginal;
});

// Dark mode toggle
darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});