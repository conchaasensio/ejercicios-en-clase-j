'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);

const button = document.createElement('button');
button.type = 'button';
button.innerHTML = 'Enséñame otro Chihuahua';
document.body.appendChild(button);

button.addEventListener('click', getDogImage);

// https://dog.ceo/api/breed/chihuahua/images/random
