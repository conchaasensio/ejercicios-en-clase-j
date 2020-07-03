'use strict';

/* Función genérica a la que hay que pasarle los */

function changeDogImage(url, imageAlt) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = imageAlt;
    });
}

function getDogImage() {
  changeDogImage('https://dog.ceo/api/breeds/image/random', 'Un perro');
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);

function getChihuahua() {
  changeDogImage(
    'https://dog.ceo/api/breed/chihuahua/images/random',
    'Un chihuahua'
  );
}

const button = document.createElement('button');
button.type = 'button';
button.innerHTML = 'Enséñame un Chihuahua';
document.body.appendChild(button);

button.addEventListener('click', getChihuahua);
