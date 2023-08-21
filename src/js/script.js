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

const reviewsSwiper = new Swiper(".reviews__swiper", {
  slidesPerView: 3,
  spaceBetween: 5,
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
  initialSlide: 0, // Додайте цей рядок для початкового слайда 0 (перший слайд)
  slidesPerView: calculateSlidesPerView(),
});
// Функція для розрахунку slidesPerView залежно від розміру вікна
function calculateSlidesPerView() {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth < 1200) {
    return 2;
  } else {
    return 3;
  }
}

// Додаємо обробник події для оновлення слайдера при зміні розміру вікна
window.addEventListener("resize", () => {
  reviewsSwiper.params.slidesPerView = calculateSlidesPerView();
  reviewsSwiper.update();
});



//Swiper Slider next

const worksSwiper = new Swiper(".mySwiper", {
  initialSlide: 1,  // Початковий слайд буде другим (індекс 1)
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


//Tabs

// function openPage(event, pageName) {
//   var i, tabContent, tabButton;
//   tabContent = document.getElementsByClassName("tab-content");
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none";
//   }
//   tabButton = document.getElementsByClassName("tab-button");
//   for (i = 0; i < tabButton.length; i++) {
//     tabButton[i].className = tabButton[i].className.replace(" active", "");
//   }
//   document.getElementById(pageName).style.display = "block";
//   event.currentTarget.className += " active";
// }

// За замовчуванням відкриємо першу сторінку
// document.getElementById("page1").style.display = "block";
// document.getElementsByClassName("tab-button")[0].className += " active";


//Tabs on page Servis

const individualTab = document.getElementById('individualTab');
const singleTab = document.getElementById('singleTab');
const individualContent = document.getElementById('individualContent');
const singleContent = document.getElementById('singleContent');

individualTab.addEventListener('click', () => {
  individualContent.classList.add('active');
  singleContent.classList.remove('active');
  individualTab.classList.add('active');
  singleTab.classList.remove('active');
});

singleTab.addEventListener('click', () => {
  singleContent.classList.add('active');
  individualContent.classList.remove('active');
  singleTab.classList.add('active');
  individualTab.classList.remove('active');
});