window.addEventListener("scroll", (e) => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
});

$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger, .header-menu-burger").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".header-menu-burger .header-menu ul li, .header-menu-burger .header-account").click(function (event) {
    $(".header-burger, .header-menu-burger").removeClass("active");
    $("body").removeClass("lock");
  });
});
