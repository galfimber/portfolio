//открытие меню бургер
const burger = document.querySelector(".btn-header__menu-burger");
const menuBurger = document.querySelector(".btn-header__burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const paddingBody = innerWidth - document.body.clientWidth;

burger.addEventListener("click", function () {
  menuBurger.classList.toggle("menu-burger__active");
  nav.classList.toggle("nav-active");
  if (innerWidth > 1199) {
    if (document.body.classList.toggle("block")) {
      document.body.setAttribute(
        "style",
        "padding-right:" + paddingBody + "px"
      );
    } else {
      document.body.style.removeProperty("padding-right");
    }
  }
});

//закрытие меню бургер при клике на элемент меню
navLinks.forEach(function (item) {
  item.addEventListener("click", function () {
    menuBurger.classList.toggle("menu-burger__active");
    nav.classList.toggle("nav-active");
    if (innerWidth > 1199) {
      if (document.body.classList.toggle("block")) {
        document.body.setAttribute(
          "style",
          "padding-right:" + paddingBody + "px"
        );
      } else {
        document.body.style.removeProperty("padding-right");
      }
    }
  });
});
console.log(document.body.clientWidth);
console.log(innerWidth);

//если текста в инпут нет, он закрывается, если есть, отправляется форма
const searchForm = document.querySelector(".form__search");
const searchBtn = document.querySelector(".btn-header__search");
const searchInput = document.querySelector(".search__input");

searchBtn.addEventListener("click", function (e) {
  if (searchInput.value == "") {
    e.preventDefault();
    searchForm.classList.toggle("form__search--active");
  } else {
    searchForm.classList.toggle("form__search--active");
  }
  if (searchForm.classList.contains("form__search--active")) {
    searchInput.focus();
  } else {
    searchInput.blur();
  }
});
