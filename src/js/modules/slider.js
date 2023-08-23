import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const heroSlider = () => {
  const swiper = new Swiper(".hero__slider", {
    modules: [Navigation, Pagination],
    pagination: {
      el: ".hero__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero__btn-next",
      prevEl: ".hero__btn-prev",
    },
  });
};

export const portfolioSlider = () => {
  const swiper = new Swiper(".portfolio-slider__slider", {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".portfolio-slider__btn-next",
      prevEl: ".portfolio-slider__btn-prev",
    },
  });
};

export const testimonialsSlider = () => {
  const swiper = new Swiper(".testimonials__slider", {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: ".testimonials__btn-next",
      prevEl: ".testimonials__btn-prev",
    },
  });
};
