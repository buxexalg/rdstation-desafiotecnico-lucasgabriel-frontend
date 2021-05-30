const freeAccountButton = document.querySelector(".freeAccountButton");
const freeAccountSection = document.querySelector(".freeAccountSection");
const headerDiv = document.querySelector(".headerDiv");
const headerNavDiv = document.querySelector(".headerNavDiv");
const header = document.querySelector("header");
const body = document.querySelector("body");

if (window.matchMedia("(max-width: 600px)").matches) {
  freeAccountSection.append(freeAccountButton);

  const menuHamburger = document.createElement("div");
  menuHamburger.className = "menuHamburger";

  const menuHamburgerIcon = document.createElement("img");
  menuHamburgerIcon.src = "../../assets/svg/hamburger.svg";

  menuHamburger.append(menuHamburgerIcon);

  headerNavDiv.style.display = "flex";

  const menuHamburgerOpened = document.createElement("div");
  menuHamburgerOpened.className = "menuHamburgerOpened";
  menuHamburgerOpened.append(headerNavDiv);
  menuHamburgerOpened.style.display = "none";
  header.append(menuHamburgerOpened);

  let menuHamburgerOpen = false;
  menuHamburger.addEventListener("click", () => {
    if (!menuHamburgerOpen) {
      menuHamburgerOpened.style.display = "flex";
      menuHamburgerIcon.src = "../../assets/svg/closeHamburger.svg";
      menuHamburgerOpen = true;
	  body.className = "overflowHidden";
    } else {
      menuHamburgerOpened.style.display = "none";
      menuHamburgerIcon.src = "../../assets/svg/hamburger.svg";
      menuHamburgerOpen = false;
	  body.className = "";
    }
  });

  headerDiv.append(menuHamburger);
}
