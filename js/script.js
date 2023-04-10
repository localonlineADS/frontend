let menu = document.querySelector('#menu-bars');
let navegar = document.querySelector('.menu-navegacion');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navegar.classList.toggle('active');
}

var swiper = new Swiper(".promociones-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
