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
// window.addEventListener("resize", () => {
//   reviewsSwiper.params.slidesPerView = calculateSlidesPerView();
//   reviewsSwiper.update();
// });



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
  initialSlide: 1,
});


//Tabs

function openPage(event, pageName) {
  let i, tabContent, tabButton;
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
document.getElementById("page5").style.display = "block";
document.getElementsByClassName("tab-button")[0].className += " active";


//Tabs on page Servis

/*const individualTab = document.getElementById('individualTab');
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
*/

//PopUp on page Servis

document.getElementById("popupButton").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

//Slider on page About-us

let swiper = new Swiper(".about-us__swipper", {
  initialSlide: 1,  // Початковий слайд буде другим (індекс 1)
  effect: "coverflow",
  slidesPerView: 3,
  spaceBetween: 45,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  initialSlide: 1,
});

// Slider on page Info


let swiperInfo = new Swiper(".other-projects__swiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 70,
  grabCursor: true,
  initialSlide: 2,
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 1,
    },
  },
  on: {
    resize: function () {
      if (window.innerWidth < 1200 && window.innerWidth >= 992) {
        this.params.spaceBetween = 40;
      } else if (window.innerWidth < 992 && window.innerWidth >= 768) {
        this.params.slidesPerView = 3;
        this.params.spaceBetween = 30;
      } else if (window.innerWidth < 768 && window.innerWidth >= 576) {
        this.params.slidesPerView = 2;
        this.params.spaceBetween = 30;
      } else if (window.innerWidth < 576 && window.innerWidth >= 0) {
        this.params.slidesPerView = 1;
      } else {
        this.params.slidesPerView = 4;
      }
      this.update();
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

