// burger
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
// ------

// slider

let slides = document.querySelectorAll(".slide__container");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1 ) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index + 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// cart

document.querySelectorAll(".featured__img-1").forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    let src = image_1.getAttribute('src');
    document.querySelector(".big_img-1").src = src;
  })
}); 

document.querySelectorAll(".featured__img-2").forEach((image_2) => {
  image_2.addEventListener("click", () => {
    let src = image_2.getAttribute("src");
    document.querySelector(".big_img-2").src = src;
  });
}); 

document.querySelectorAll(".featured__img-3").forEach((image_3) => {
  image_3.addEventListener("click", () => {
    let src = image_3.getAttribute("src");
    document.querySelector(".big_img-3").src = src;
  });
}); 