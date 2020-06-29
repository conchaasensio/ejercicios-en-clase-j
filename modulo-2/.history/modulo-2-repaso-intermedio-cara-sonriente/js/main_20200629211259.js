'use strict';

const btn = document.querySelector('.js-update');
const face = document.querySelector('.js-face');
const select = document.querySelector('.js-select-face');
const container = document.querySelector('.js-container');

function handleUpdateClick() {
  updateFace();
  updateBackground();
}

function updateFace() {
  let selectValue = select.value;
  face.innerHTML = selectValue;
}

function updateBackground() {
  const randomNumber = getRandomNumber();
  container.classList.remove('correct-yellow-color');
  container.classList.remove('chilean-fire-color');
  if (randomNumber % 2 === 0) {
    container.classList.add('correct-yellow-color');
  } else {
    container.classList.add('chilean-fire-color');
  }
}

const getRandomNumber = function () {
  const randomNumber = parseInt(Math.random() * 100);
  return randomNumber;
};

btn.addEventListener('click', handleUpdateClick);
