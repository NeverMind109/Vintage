import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const projectsSlider = new Swiper(".projects__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 500,
  pagination: {
    el: ".projects__pagination",
    type: "bullets",
  },
  breakpoints: {
    577: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 34,
    },
  },
});
