window.addEventListener("load", load);
function load() {
  let loader = document.querySelector("#loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
}

const buttons = document.querySelectorAll(".button");
const slides = document.querySelectorAll(".image");
const contents = document.querySelectorAll(".content");

var sliderNav = function (menuL) {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  buttons[menuL].classList.add("active");
  slides[menuL].classList.add("active");
  contents[menuL].classList.add("active");
};

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
