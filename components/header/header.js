function startHeaderMenu() {
  const menuIcon = document.querySelector(".header__menu-icon");
  const menuMobile = document.querySelector(".header__menu-mobile");
  menuIcon.addEventListener("click", function () {
    menuMobile.classList.toggle("show");
  });

  menuMobile.addEventListener("click", function () {
    menuMobile.classList.toggle("show");
  });
}

function startHeader() {
  startHeaderMenu();
}

function main() {
  startHeader();
}

main();
