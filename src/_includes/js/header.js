const dropdownItem = document.querySelectorAll(".dropdown");
const dropdownMenu = document.querySelector(".dropdownMenu");

dropdownItem.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    dropdownMenu.style.display = "flex";
  });
  item.addEventListener("mouseleave", () => {
    if (!mouseOverDropdown) {
      setTimeout(() => {
        dropdownMenu.style.display = "none";
      }, 150);
    }
  });
});

let mouseOverDropdown = true;

dropdownMenu.addEventListener("mouseenter", () => {
  mouseOverDropdown = false;
});

dropdownMenu.addEventListener("mouseleave", () => {
  mouseOverDropdown = true;
  setTimeout(() => {
    dropdownMenu.style.display = "none";
  }, 150);
});