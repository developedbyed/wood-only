window.addEventListener("DOMContentLoaded", parallaxEffect, false);

let scrollY;
const header = document.querySelector("header");
const bigRose = document.querySelector(".big-rose");
const smallRose = document.querySelector(".small-rose");
const slideLeft = document.querySelectorAll(".slide-left");
const products1 = document.querySelector(".products");
const products2 = document.querySelector(".products2");
let pause = false;

function parallaxEffect() {
  scrollY = window.scrollY;
  if (pause) return;
  requestAnimationFrame(parallaxEffect);
  parallaxEl(0, scrollY / 1, header);
  parallaxEl(0, scrollY / 0.8, bigRose);
  parallaxEl(0, scrollY / 4, smallRose);
}

function parallaxEl(x, y, el) {
  el.style.transform = "translate3d(" + x + "," + y + "px, 0)";
}

function fadeItems() {
  //Fade each slide
  slideLeft.forEach(slide => {
    if (slide.getBoundingClientRect().top - window.innerHeight / 1.5 < 0) {
      slide.classList.add("fade-move");
    }
  });
}

window.addEventListener("scroll", throttle(fadeItems, 200));

//Debounce
function throttle(func, interval) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = false;
    };
    if (!timeout) {
      func.apply(context, args);
      timeout = true;
      setTimeout(later, interval);
    }
  };
}
