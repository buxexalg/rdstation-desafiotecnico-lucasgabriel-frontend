const passwordIcon = document.querySelectorAll(".passwordIcon");
const passwordField = document.querySelectorAll(".passwordField");

passwordIcon.forEach((itemIcon) => {
  itemIcon.addEventListener("click", () => {

    passwordField.forEach((item) => {
      console.log(item.type);
      if (item.type === "password") {
        itemIcon.src = "../../assets/svg/hidePassword.svg";
        item.type = "text";
      } else {
        itemIcon.src = "../../assets/svg/seePassword.svg";
        item.type = "password";
      }
    });
  });
});
