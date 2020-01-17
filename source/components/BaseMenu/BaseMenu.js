import './BaseMenu.scss';

var menu = document.querySelector(".menu");
var button = document.querySelector(".button-menu");
var header = document.querySelector('.header');
var close = document.querySelector('.menu__image');
var link = document.querySelectorAll('.menu__link');
var burger = document.querySelector('.burger-button');
var closeIcon = document.querySelector('.buttonMenu__close');

const toggle = document.querySelector('.js-toggleMenu');

button.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});

close.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
})

link.forEach((item) => {
  item.addEventListener('click', (e) => {
});
})
