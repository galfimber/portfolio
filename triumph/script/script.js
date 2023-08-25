const canopy = document.getElementById("canopy");
const carport = document.getElementById("carport");
const arbour = document.getElementById("arbour");
const gates = document.getElementById("gates");
const grating = document.getElementById("grating");
const ladder = document.getElementById("ladder");
const grill = document.getElementById("grill");
const railings = document.getElementById("railings");
const entranceGroup = document.getElementById("entrance-group");
const fence = document.getElementById("fence");
const other = document.getElementById("other");

canopy.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  canopy.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".canopy").classList.remove("catalog-hide");
  document.querySelector(".canopy").classList.add("catalog-active");
});
carport.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  carport.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".carport").classList.remove("catalog-hide");
  document.querySelector(".carport").classList.add("catalog-active");
});
arbour.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  arbour.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".arbour").classList.remove("catalog-hide");
  document.querySelector(".arbour").classList.add("catalog-active");
});
gates.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  gates.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".gates").classList.remove("catalog-hide");
  document.querySelector(".gates").classList.add("catalog-active");
});
grating.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  grating.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".grating").classList.remove("catalog-hide");
  document.querySelector(".grating").classList.add("catalog-active");
});
ladder.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  ladder.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".ladder").classList.remove("catalog-hide");
  document.querySelector(".ladder").classList.add("catalog-active");
});
grill.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  grill.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".grill").classList.remove("catalog-hide");
  document.querySelector(".grill").classList.add("catalog-active");
});
railings.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  railings.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".railings").classList.remove("catalog-hide");
  document.querySelector(".railings").classList.add("catalog-active");
});
entranceGroup.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  entranceGroup.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".entrance-group").classList.remove("catalog-hide");
  document.querySelector(".entrance-group").classList.add("catalog-active");
});
fence.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  fence.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".fence").classList.remove("catalog-hide");
  document.querySelector(".fence").classList.add("catalog-active");
});
other.addEventListener("click", function () {
  document.querySelector(".btn--active").classList.remove("btn--active");
  other.classList.add("btn--active");
  const active = document.querySelector(".catalog-active");
  active.classList.remove("catalog-active");
  active.classList.add("catalog-hide");
  document.querySelector(".other").classList.remove("catalog-hide");
  document.querySelector(".other").classList.add("catalog-active");
});
