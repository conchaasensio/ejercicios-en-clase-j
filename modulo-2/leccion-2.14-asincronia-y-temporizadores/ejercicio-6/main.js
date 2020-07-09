'use strict';

let counter = 0;
const stopButton = document.querySelector('.js-stop-button');
const startButton = document.querySelector('.js-start-button');
const time = document.querySelector('.time');

const incrementAndShowCounter = () => {
  counter++;
  time.innerHTML = counter;
};

let temp = setInterval(incrementAndShowCounter, 1000);

function handleStopButton() {
  clearInterval(temp);
}

function handleStartButton() {
  setInterval(incrementAndShowCounter, 1000);
}

stopButton.addEventListener('click', handleStopButton);
startButton.addEventListener('click', handleStartButton);
