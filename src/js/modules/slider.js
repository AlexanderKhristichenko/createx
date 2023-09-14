import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

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
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".portfolio-slider__btn-next",
      prevEl: ".portfolio-slider__btn-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
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

export const heroSlider2 = () => {
  const swiper = new Swiper(".hero-slider1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".hero-slider2", {
    modules: [Navigation, Thumbs],
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
};

export const historySlider = () => {
  const swiper = new Swiper(".history__slider", {
    modules: [Pagination],
    pagination: {
      el: ".history__pagination",
      clickable: true,
    },
    loop: true,
  });

  const paginationItems = document.querySelectorAll(
    ".swiper-pagination-bullet",
  );
  const historyTimeline = document.querySelectorAll(".history__timeline-item");

  paginationItems.forEach((item, ind) => {
    if (item.classList.contains("swiper-pagination-bullet-active")) {
      historyTimeline[ind].classList.add("history__timeline-item--active");
    }

    historyTimeline[ind].addEventListener("click", () => {
      historyTimeline.forEach((item2) => {
        item2.classList.remove("history__timeline-item--active");
      });
      item.click();
      if (item.classList.contains("swiper-pagination-bullet-active")) {
        historyTimeline[ind].classList.add("history__timeline-item--active");
      }
    });
  });
};
