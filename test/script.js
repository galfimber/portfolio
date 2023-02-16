$(document).ready(function () {
  $(".nav_menu_burger").click(function (event) {
    $(".burger , .nav, .nav_logo , .nav_logo_menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".menu, .nav-button, .nav_social").click(function (event) {
    $(".burger , .nav, .nav_logo , .nav_logo_menu").removeClass("active");
    $("body").removeClass("lock");
  });
});

new Swiper(".three-slider", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    374: {
      slidesPerView: 1.21,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.6,
      spaceBetween: 16,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  loop: true,
});

$('input[type="radio"]').click(function () {
  $(".four_img").css({ background: "url(" + $(this).val() + ")" });
  $(".four_img").css({ "background-size": "cover" });
});

let plus = document.querySelectorAll(".five_faq_plus");
for (i = 0; i < plus.length; i++) {
  let thisDiv = plus[i].parentElement;
  let mainDiv = thisDiv.parentElement;
  let subTitle = thisDiv.nextElementSibling;
  let thisPlus = plus[i];

  mainDiv.addEventListener("click", function () {
    subTitle.classList.toggle("open");
    thisPlus.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      } else {
        alert("Ошибка");
      }
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll(".req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("error");
    input.classList.add("error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("error");
    input.classList.remove("error");
  }
});
