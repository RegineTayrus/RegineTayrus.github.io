// ================= NAVBAR DROPDOWN =================

const dropdownButton = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector("#dropdownMenu");

dropdownButton.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
});