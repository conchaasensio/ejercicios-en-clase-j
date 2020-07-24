'use strict';

fetch('https://swapi.dev/api/')
  .then((response) => response.json())
  .then((data) => console.log(data));

const button = document.querySelector('.js-button');

function handleClick() {
  console.log('me han clickado');
}

button.addEventListener('click', handleClick);
