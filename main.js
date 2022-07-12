const navItems = document.querySelector("#nav__items");
const openBurgerButton = document.querySelector("#nav__button-open");
const closeBurgerButton = document.querySelector("#nav__button-close");

openBurgerButton.addEventListener("click", () => {
  navItems.style.display = "flex";
  openBurgerButton.style.display = "none";
  closeBurgerButton.style.display = "inline-block";
});

closeBurgerButton.addEventListener("click", () => {
  navItems.style.display = "none";
  openBurgerButton.style.display = "inline-block";
  closeBurgerButton.style.display = "none";
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

window.addEventListener("scroll", () => {
  document
    .querySelector("nav ")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
