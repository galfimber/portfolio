//Slider
new Swiper(".slider__carousel", {
  navigation: {
    nextEl: ".nextEl",
    prevEl: ".prevEl",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.19,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  loop: true,
});

//Gallery изменение изображения
const img = document.querySelector(".gallery__img");
function imgchange(tag) {
  img.style.backgroundImage = "url(" + tag + ")";
}

//Question drop-block
function dropBlock(drop) {
  drop.parentElement.parentElement.classList.toggle(
    "question__drops-block--active"
  );
  drop.classList.toggle("close--active");
}

const burger = document.querySelector(".burger");
const nav = document.querySelector(".mobile-nav");
const body = document.body;
const menu = document.querySelectorAll(".mobile-nav__link");
const logo = document.querySelector(".logo");
const logoMob = document.querySelector(".logo__mobile");

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  nav.classList.toggle("mobile-nav--active");
  burger.classList.toggle("burger--active");
  logo.classList.toggle("logo--active");
  logoMob.classList.toggle("logo__mobile--active");
  body.classList.toggle("noscroll");
}

menu.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  nav.classList.remove("mobile-nav--active");
  burger.classList.remove("burger--active");
  logo.classList.toggle("logo--active");
  logoMob.classList.toggle("logo__mobile--active");
  body.classList.remove("noscroll");
}

const formSend = document.querySelector(".form__btn");
const formCheckbox = document.querySelector(".form__checkbox");
const formCheckfake = document.querySelector(".form__check");
const input = document.querySelector(".input");

function validateForm() {
  valid = true;

  if (document.contact__form.contact__quest.value == "") {
    document.contact__form.contact__quest.classList.add("input__error");
    valid = false;
  } else {
    document.contact__form.contact__quest.classList.remove("input__error");
  }
  if (document.contact__form.contact__phone.value == "") {
    document.contact__form.contact__phone.classList.add("input__error");
    valid = false;
  } else {
    document.contact__form.contact__phone.classList.remove("input__error");
  }
  if (document.contact__form.contact__name.value == "") {
    document.contact__form.contact__name.classList.add("input__error");
    valid = false;
  } else {
    document.contact__form.contact__name.classList.remove("input__error");
  }
  if (document.contact__form.contact__agree.checked == false) {
    formCheckfake.classList.add("form__check--error");
    valid = false;
  } else {
    formCheckfake.classList.remove("form__check--error");
  }

  if (valid) {
    alert("Форма отправлена!");
  }
  return valid;
}
