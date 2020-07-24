'use strict';

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if (counter === 6) {
    clearInterval(temp);
  }
};

temp = setInterval(incrementAndShowCounter, 2000);
