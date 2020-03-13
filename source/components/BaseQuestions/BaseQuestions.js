import './BaseQuestions.scss';
/* eslint-disable no-unused-vars */
const accordion = document.querySelectorAll('.questions__header');
const accbody = document.querySelectorAll('.questions__body');
const card = document.querySelectorAll('.questions__card');

card.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('questions__open');
  })
})
