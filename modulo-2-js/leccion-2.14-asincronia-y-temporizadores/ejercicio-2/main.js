'use strict';

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if (counter === 12) {
    clearInterval(temp);
  }
};

temp = setInterval(incrementAndShowCounter, 1000);
