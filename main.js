function introPage() {
  const slideLeft = document.querySelectorAll(".slide-left");
  const noSlide = document.querySelectorAll(".no-slide");
  const slideUp = document.querySelectorAll(".slide-up");
  const navigation = document.querySelector(".navigation");
  const logo = document.querySelector(".logo");
  const burger = document.querySelectorAll(".burger path");
  const burgerItem = document.querySelector(".burger");
  const closeBurger = document.querySelector(".close-burger");

  //Item Fade
  function fadeItems() {
    let scrollY = window.scrollY;
    console.log(scrollY);
    //Make items appear
    slideLeft.forEach(slide => {
      if (slide.getBoundingClientRect().top - window.innerHeight / 1.3 < 0) {
        slide.classList.add("fade-move");
      }
    });
    noSlide.forEach(slide => {
      if (slide.getBoundingClientRect().top - window.innerHeight / 1.3 < 0) {
        slide.classList.add("fade-move");
      }
    });
    slideUp.forEach(slide => {
      if (slide.getBoundingClientRect().top - window.innerHeight / 1.3 < 0) {
        slide.classList.add("fade-move");
      }
    });
    //Navigation
    if (window.innerWidth > 768) {
      if (scrollY > 100) {
        logo.classList.add("no-slide");
        navigation.classList.add("nav-fade");
        burger.forEach((line, index) => {
          line.style.animation = `nav 0.5s ease forwards ${index / 6}s`;
        });
      } else {
        logo.classList.remove("no-slide");
        navigation.classList.remove("nav-fade");
        burger.forEach((line, index) => {
          line.style.animation = `navFade 0.5s ease forwards `;
        });
      }
    }
  }
  window.addEventListener("scroll", throttle(fadeItems, 100));

  burgerItem.addEventListener("click", function() {
    navigation.classList.add("open");
    closeBurger.style.display = "block";
    burgerItem.style.display = "none";
    document.body.style.overflow = "hidden";
  });

  closeBurger.addEventListener("click", function() {
    closeBurger.style.display = "none";
    burgerItem.style.display = "block";
    navigation.classList.remove("open");
    document.body.style.overflow = "auto";
  });
}

const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

function mobileNav() {
  const burgerItem = document.querySelector(".burger");
  const closeBurger = document.querySelector(".close-burger");
  const navigation = document.querySelector(".navigation");

  if (window.innerWidth < 768) {
    burgerItem.style.position = "static";
  }
  burgerItem.addEventListener("click", function() {
    navigation.classList.add("open");
    closeBurger.style.display = "block";
    burgerItem.style.display = "none";
    document.body.style.overflow = "hidden";
  });

  closeBurger.addEventListener("click", function() {
    closeBurger.style.display = "none";
    burgerItem.style.display = "block";
    navigation.classList.remove("open");
    document.body.style.overflow = "auto";
  });
}
