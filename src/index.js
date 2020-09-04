import './styles/main.scss';

//Function to select elements

const selectElement = (element) => document.querySelector(element);


selectElement('.menu__btn').addEventListener('click', () => {
    selectElement('.menu__btn').classList.toggle('open');
});

// const hamburger = document.querySelector('.menu__btn');
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('open');
// });