//плагин миксин для фильтрации карточек в портфолио
$(document).ready(function () {
  let containerEl = document.querySelector("#mix-cards");

  let mixer = mixitup(containerEl, {
    classNames: {
      block: "",
    },
  });
});

//изменение размера карточек при фильтрации
const btnCards = document.querySelectorAll(".btn-cards");
const bigCards = document.querySelectorAll(".card--big");
for (let i = 0; i < btnCards.length; i++) {
  btnCards[i].addEventListener("click", function () {
    if (i == 0) {
      for (let j = 0; j < 2; j++) {
        bigCards[j].classList.add("card--big");
      }
    } else {
      for (let j = 0; j < 2; j++) {
        bigCards[j].classList.remove("card--big");
      }
    }
  });
}

//открытие меню бургер
const burger = document.querySelector(".mobile-menu");
const menuBurger = document.querySelector(".menu-burger");
const nav = document.querySelector(".mobile-nav-menu");
const navLinks = document.querySelectorAll(".mobile-nav-menu__list li a");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
  menuBurger.classList.toggle("menu-burger__active");
  nav.classList.toggle("mobile-nav-menu-active");
  overlay.classList.toggle("overlay-active");
  body.classList.toggle("block");
});

//закрытие меню бургер при клике на элемент меню
navLinks.forEach(function (item) {
  item.addEventListener("click", function () {
    menuBurger.classList.toggle("menu-burger__active");
    nav.classList.toggle("mobile-nav-menu-active");
    overlay.classList.toggle("overlay-active");
    body.classList.toggle("block");
  });
});

//форма
const input = document.querySelector(".form__input");
const text = document.querySelector(".form__text");
const spanInput = document.querySelector(".span-email");
const spanText = document.querySelector(".span-text");

input.addEventListener("focus", function () {
  spanInput.classList.add("span-email-top");
});
input.addEventListener("focusout", function () {
  if (input.value == "") spanInput.classList.remove("span-email-top");
  else;
});
text.addEventListener("focus", function () {
  spanText.classList.add("span-text-top");
});
text.addEventListener("focusout", function () {
  if (text.value == "") spanText.classList.remove("span-text-top");
  else;
});

//btn-backtop
const btnTop = document.querySelector("#btn-top");

document.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    btnTop.classList.add("btn-top--visible")
  } else {
    btnTop.classList.remove("btn-top--visible")
  }
});

//фильтры для карточек портфолио

// const allWorks = document.getElementById("all-works");
// const html = document.getElementById("html");
// const wordPress = document.getElementById("wordpress");

// const allCards = document.querySelectorAll(".card");
// const htmlCards = document.querySelectorAll(".html");
// const wordPressCards = document.querySelectorAll(".wordpress");

// allWorks.addEventListener("click", function () {
//   const btnActive = document.querySelector(".btn-cards--active");
//   btnActive.classList.remove("btn-cards--active");
//   allWorks.classList.add("btn-cards--active");
//   const block = document.querySelectorAll(".card-active");
//   block.forEach(function (item) {
//     item.classList.remove("card-active");
//     item.classList.add("card-block");
//   });
//   allCards.forEach(function (item) {
//     item.classList.remove("card-block");
//     item.classList.add("card-active");
//   });
// });
// html.addEventListener("click", function () {
//   const btnActive = document.querySelector(".btn-cards--active");
//   btnActive.classList.remove("btn-cards--active");
//   html.classList.add("btn-cards--active");
//   const block = document.querySelectorAll(".card-active");
//   block.forEach(function (item) {
//     item.classList.remove("card-active");
//     item.classList.add("card-block");
//   });
//   htmlCards.forEach(function (item) {
//     item.classList.remove("card-block");
//     item.classList.add("card-active");
//   });
// });
// wordPress.addEventListener("click", function () {
//   const btnActive = document.querySelector(".btn-cards--active");
//   btnActive.classList.remove("btn-cards--active");
//   wordPress.classList.add("btn-cards--active");
//   const block = document.querySelectorAll(".card-active");
//   block.forEach(function (item) {
//     item.classList.remove("card-active");
//     item.classList.add("card-block");
//   });
//   wordPressCards.forEach(function (item) {
//     item.classList.remove("card-block");
//     item.classList.add("card-active");
//   });
// });
