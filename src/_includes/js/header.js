const dropdownItem = document.querySelectorAll(".dropdown");
const dropdownMenu = document.querySelector(".dropdownMenu");

//hover saindo quando coloca mouse no menu
dropdownItem.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    dropdownMenu.style.display = "flex";
  });
  item.addEventListener("mouseleave", (e) => {
    setTimeout(() => {
      dropdownMenu.style.display = "none";
    }, 150);
  });
});
