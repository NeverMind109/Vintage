import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const projectsSlider = new Swiper(".projects__slider", {
  slidesPerView: 3,
  spaceBetween: 34,
  speed: 500,
  pagination: {
    el: ".projects__pagination",
    type: "bullets",
  },
});
