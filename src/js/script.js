$(document).ready(function () {
  $('.menu__icon').click(function () {
    $('body').toggleClass('menu_shown');
  });
});
$('.mobile a').on("click", function () { 
  $('body').toggleClass('menu_shown'); 
})




document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.accordion-icon');

      content.classList.toggle('active');
      icon.style.transform = content.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0)';
    });
  });
});