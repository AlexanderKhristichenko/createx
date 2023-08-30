const body = document.body;
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");

export const navigation = () => {
  burger.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("menu-active");
    nav.classList.toggle("nav--active");
    burger.classList.toggle("burger--active");
  });
};
