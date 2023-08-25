//Form input
const inputName = document.getElementById("input-name");
const inputMail = document.getElementById("input-mail");
const labelName = document.getElementById("label-name");
const labelMail = document.getElementById("label-mail");

inputName.addEventListener("focus", function () {
  labelName.classList.add("label--top");
});
inputName.addEventListener("focusout", function () {
  if (inputName.value == "") {
    labelName.classList.remove("label--top");
  } else return;
});

inputMail.addEventListener("focus", function () {
  labelMail.classList.add("label--top");
});
inputMail.addEventListener("focusout", function () {
  if (inputMail.value == "") {
    labelMail.classList.remove("label--top");
  } else return;
});

//One page scroll
//const documentHeight = document.documentElement.clientHeight;
//document.addEventListener("wheel", function (event) {
//  let delta = event.deltaY || event.detail || event.wheelDelta;
//  if (delta < 0) {
//    window.scrollBy(0, -documentHeight);
//  } else {
//    window.scrollBy(0, documentHeight);
//  }
//});

//Smooth show
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("anim-active");
    } else {
      change.target.classList.remove("anim-active");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".anim-item");

for (let elm of elements) {
  observer.observe(elm);
}

//Nav-menu
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-menu__link");
const shadow = document.querySelector(".shadow-overlay");
const body = document.body;
const scrollWidth = innerWidth - body.clientWidth;

nav.addEventListener("click", function () {
  nav.classList.toggle("nav--active");
  navMenu.setAttribute("style", `top:${scrollY}px;`);
  navMenu.classList.toggle("nav-menu--active");
  shadow.classList.toggle("shadow-overlay--active");
  if (body.classList.toggle("nav-menu--active")) {
    body.setAttribute("style", "padding-right:" + scrollWidth + "px");
  } else {
    body.style.removeProperty("padding-right");
  }
});
navLink.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.toggle("nav--active");
    navMenu.classList.toggle("nav-menu--active");
    shadow.classList.toggle("shadow-overlay--active");
    if (body.classList.toggle("nav-menu--active")) {
      body.setAttribute("style", "padding-right:" + scrollWidth + "px");
    } else {
      body.style.removeProperty("padding-right");
    }
  });
});
