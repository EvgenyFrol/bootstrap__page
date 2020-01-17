import './BaseAccordion.scss';

var acc = document.querySelectorAll('.card');
var logo = document.querySelector('.accordion__icon');

acc.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('card__open')
  })
})
