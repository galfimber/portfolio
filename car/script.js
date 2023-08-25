$(document).ready(function () {
  $(".nav_menu_burger").click(function (event) {
    $(".burger, .nav ul").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".nav ul").click(function (event) {
    $(".burger , .nav ul").removeClass("active");
    $("body").removeClass("lock");
  });
});

new Swiper(".carousel-slider", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    681: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
    881: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1281: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  loop: true,
});
new Swiper(".description-slider", {
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  loop: true,
  slidesPerView: 1,
});
new Swiper(".description-slider2", {
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
  loop: true,
  slidesPerView: 1,
});
new Swiper(".description-slider2-2", {
  navigation: {
    nextEl: ".next4",
    prevEl: ".prev4",
  },
  loop: true,
  slidesPerView: 1,
});

$(document).ready(function () {
  $(".pasting").click(function (event) {
    $(".pasting").addClass("active");
    $(".cards-pasting").addClass("active");
    $(".detailing").removeClass("active");
    $(".cards-detailing").removeClass("active");
  });
  $(".detailing").click(function (event) {
    $(".detailing").addClass("active");
    $(".cards-detailing").addClass("active");
    $(".pasting").removeClass("active");
    $(".cards-pasting").removeClass("active");
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".upbtn").css({
      bottom: "60px",
    });
  } else {
    $(".upbtn").css({
      bottom: "-80px",
    });
  }
});
$(".upbtn").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    100
  );
  return false;
});
