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


//////////////// contact form validation //////////////////

const form = document.querySelector(".contactMe__wrapper__form");

const name = document.querySelector(".contactMe__wrapper__form__input--name");
const email = document.querySelector(".contactMe__wrapper__form__input--email");
const message = document.querySelector(".contactMe__wrapper__form__input--message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

name.addEventListener('input', function (event) {
    
    if(!name.validity.valid) {
        name.classList.remove('pass');
        showErrorName();
        
      } else {
          name.classList.add("pass");
          nameError.textContent = "";
      }
});

email.addEventListener('input', function (event){
    if(!email.validity.valid) {
        email.classList.remove('pass');
        showErrorEmail();
    } else {
        email.classList.add("pass");
        emailError.textContent = "";
    }
});

message.addEventListener('input', function (event) {
    
    if(!message.validity.valid) {
        message.classList.remove('pass');
        showErrorMessage();
        
      } else {
          message.classList.add("pass");
          messageError.textContent = "";
      }
});

form.addEventListener('submit', function(event) {
    if(!name.validity.valid) {
        showErrorName();
        event.preventDefault();
    } else if (!email.validity.valid) {
        showErrorEmail();
        event.preventDefault();
    } else if (!message.validity.valid) {
        showErrorMessage();
        event.preventDefault();
    }
});

function showErrorName () {

    if(name.validity.tooShort){
        name.classList.add('nopass');
        nameError.textContent = `Name should be at least ${ name.minLength } characters, you entered ${ name.value.length }.`;
    } else if (name.validity.valueMissing) {
        name.classList.add('nopass');
        nameError.textContent = `You need to enter your name.`;
    }
};

function showErrorEmail () {
    if(email.validity.valueMissing) {
        email.classList.add('nopass');
        emailError.textContent = 'You need to enter an e-mail address.'
    } else if (email.validity.typeMismatch) {
        email.classList.add('nopass');
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
        email.classList.add('nopass');
        emailError.textContent = `Email should be at least ${ email.minLength } characters, you entered ${ email.value.length }.`;
    }
};

function showErrorMessage () {

    if(message.validity.tooShort){
        message.classList.add('nopass');
        messageError.textContent = `Message should be at least ${ message.minLength } characters, you entered ${ message.value.length }.`;
    } else if (message.validity.valueMissing) {
        message.classList.add('nopass');
        messageError.textContent = `You need to enter a message.`;
    }
}





















// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// });

// function checkInputs () {
//     // get the values from the inputs
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const messageValue = message.value.trim();

//     if(nameValue === '') {
//         //show eror
//         //add error class
//         setErrorFor(username, "Name cannot be blank")
//     } else {
//         //add success class
//     }

// }

// function setErrorFor(input, message) {

// }



