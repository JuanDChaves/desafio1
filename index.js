const headerContainer = document.querySelector(".header__container");

function callHTML() {
  fetch("/components/header/index.html")
    .then(function (res) {
      res.text().then(function (texto) {
        headerContainer.innerHTML = texto;
      });
    })
    .catch(function () {
      console.error("Hubo un error!");
    });
}

callHTML();

// Header

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
