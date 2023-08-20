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

// let swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   keyboard: {
//     enabled: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  slidesPerView: 3,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper.slideTo(1, 0);

function openPage(event, pageName) {
  var i, tabContent, tabButton;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabButton = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }
  document.getElementById(pageName).style.display = "block";
  event.currentTarget.className += " active";
}

// За замовчуванням відкриємо першу сторінку
document.getElementById("page2").style.display = "block";
document.getElementsByClassName("tab-button")[0].className += " active";