let navBtn = document.querySelector(".nav-icon-btn");
let navIcon = document.querySelector(".nav-icon");
let nav = document.querySelector(".header__top-row");
let navItems = document.querySelectorAll(".nav__list li");

navBtn.addEventListener("click", function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("header__top-row--mobile");
      navIcon.classList.remove("nav-icon--active");
    });
  });
});
