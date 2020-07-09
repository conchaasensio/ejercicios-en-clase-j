'use strict';

let counter = 0;
let temp;
const message = document.querySelector('.message');

const incrementAndShowMessage = () => {
  counter++;
  if (counter === 1) {
    message.innerHTML = 'Escrito hace 1 segundo';
  }
  if (counter === 30) {
    message.innerHTML = 'Escrito hace 30 segundos';
  }
  if (counter === 60) {
    message.innerHTML = 'Escrito hace 1 minuto.';
  }
  if (counter > 60) {
    clearInterval(temp);
  }
};

temp = setInterval(incrementAndShowMessage, 1000);
