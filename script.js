const burgerMenu = document.querySelector(".burger__icon");
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".menu__content");

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__icon_active");
  navMenu.classList.toggle("menu__content_active");
});

const link = document.querySelector(".project_zoo");
link.addEventListener("click", () => {
  window.open(
    "https://rolling-scopes-school.github.io/dimas-worker-JSFE2021Q1/online-zoo/"
  );
});
const certificateLink = document.querySelector(".certificate_link");
certificateLink.addEventListener("click", () => {
  window.open("https://app.rs.school/certificate/djcncwru");
});
