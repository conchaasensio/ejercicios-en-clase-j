'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((dogImageResponse) => dogImageResponse.json())
    .then((dogImageData) => {
      const dogImage = dogImageData.meessage;
      return fetch('https://dog.ceo/api/breeds/' + dogImage + '/images/random');
    })
    .then((imageResponse) => imageResponse.json())
    .then((imageData) => {
      const img = document.querySelector('img');
      img.src = imageData.message;
      img.alt = 'Un perro';
    });
}

const btn = document.querySelector('.js-button');
btn.addEventListener('click', getDogImage);
