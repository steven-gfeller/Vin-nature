const burgerMenu = document.getElementById("burgerMenu");
const dropdownMenu = document.getElementById("dropdownMenu");

burgerMenu.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});
