const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
M.AutoInit();
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init({
    fullWidth: true
  });
  // instance = M.Carousel.init({

  //   });
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 4,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 750,
    autoplayHoverPause: true,
    animateOut: true,
    animateIn: true,
    loop: true,
    center: true,
    stagePadding: 20
    // nav: true
  });
});
