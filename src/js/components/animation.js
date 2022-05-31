import AOS from "aos";
AOS.init({
  disable: function () {
    var maxWidth = 1024;
    return window.innerWidth < maxWidth;
  },
});
