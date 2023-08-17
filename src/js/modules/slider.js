import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const heroSlider = () => {
  const swiper = new Swiper(".hero__slider", {
    modules: [Navigation, Pagination],
    // loop: true,
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
