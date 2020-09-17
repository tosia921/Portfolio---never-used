import './styles/main.scss';

// // import Swiper JS
// import swiper from 'swiper/bundle';
// // import Swiper styles
// import 'swiper/swiper-bundle.css';




const selectElement = (element) => document.querySelector(element);
const selectAllElements = (element) => document.querySelectorAll(element);

//EventListener Function

selectElement('.menu__btn').addEventListener('click', () => {
    //animated hamburger button
    selectElement('.menu__btn').classList.toggle('open');
    //showing menu list background on click
    selectElement('.header__nav__list').classList.toggle('show');
    //drop down of each menu items
    selectAllElements('.header__nav__list__item--link').forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ``;
        } else {
            link.style.animation = `drop 0.5s ease forwards ${index / 3.5 + 0.2}s`;
        }
    });
});


var mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    keyboard: {
        enabled: true,
    },
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })