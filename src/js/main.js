const burgerMenu = document.getElementById("burgerMenu");
const dropdownMenu = document.getElementById("dropdownMenu");

burgerMenu.addEventListener("click", () => {
  // Toggle display between none and block
  if (
    dropdownMenu.style.display === "none" ||
    dropdownMenu.style.display === ""
  ) {
    dropdownMenu.style.display = "flex"; // Show the dropdown menu
  } else {
    dropdownMenu.style.display = "none"; // Hide the dropdown menu
  }
});
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  dropdownMenu.style.display = "none"; // Hide the dropdown menu when "X" is clicked
});
