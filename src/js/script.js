//Mobile menu

$(document).ready(function () {
  $('.menu__icon').click(function () {
    $('body').toggleClass('menu_shown');
  });
});
$('.mobile a').on("click", function () {
  $('body').toggleClass('menu_shown');
})

//Acordion

document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.services__accordion-header, .questions__accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.services__accordion-icon, .questions__accordion-icon');

      content.classList.toggle('active');
      icon.style.transform = content.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0)';
    });
  });
});


//Swiper Slider

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


