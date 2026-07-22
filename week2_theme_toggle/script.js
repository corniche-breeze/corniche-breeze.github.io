// Select the button and the body element.
const button = document.querySelector("#theme-button");
const body = document.querySelector("body");

// Run this code whenever the button is clicked.
button.addEventListener("click", function () {

    // Add or remove the dark-mode class on the body.
    body.classList.toggle("dark-mode");

    // Change the button text based on the current theme.
    if (body.classList.contains("dark-mode")) {
        button.textContent = "Switch to Light Mode";
    } else {
        button.textContent = "Switch to Dark Mode";
    }

});