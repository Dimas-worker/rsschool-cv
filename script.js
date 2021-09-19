const burgerMenu = document.querySelector(".burger__icon");
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".menu__content");
const menuList = document.querySelectorAll(".menu__list");

function switchBurger() {
  burgerMenu.classList.toggle("burger__icon_active");
  navMenu.classList.toggle("menu__content_active");
}
burger.addEventListener("click", switchBurger);
menuList.forEach((el) => {
  el.addEventListener("click", switchBurger);
});
const linkZoo = document.querySelector(".project_zoo");
const linkSlider = document.querySelector(".project_slider");
linkZoo.addEventListener("click", () => {
  window.open(
    "https://rolling-scopes-school.github.io/dimas-worker-JSFE2021Q1/online-zoo/"
  );
});
linkSlider.addEventListener("click", () => {
  window.open(
    "https://rolling-scopes-school.github.io/dimas-worker-JSFEPRESCHOOL/vertical-slider/"
  );
});
const certificateLink = document.querySelector(".certificate_link");
certificateLink.addEventListener("click", () => {
  window.open("https://app.rs.school/certificate/djcncwru");
});

console.log(`Score: 150/ 150
1. вёрстка валидная (10)
2. вёрстка семантическая (20)
3. для оформления СV используются css-стили (10)
4. контент размещается в блоке, который горизонтально центрируется на странице (10)
5. вёрстка адаптивная (10)
6. есть адаптивное бургер-меню (10)
7. на странице СV присутствует изображение, пропорции изображения не искажены, у изображения есть атрибут alt (10)
8. контакты для связи и перечень навыков оформлены в виде списка ul > li (10)
9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, примеры кода или выполненных проектов, информацию об образовании и уровне английского (10)
10. CV содержит пример вашего кода, использоваться js-библиотека (10)
11. CV содержит изображения-ссылки на выполненные вами проект (10)
12. CV выполнено на английском языке (10)
13. выполнены требования к Pull Request (10)
14. есть видеорезюме автора CV на английском языке (10)
15. на ваш взгляд`);
