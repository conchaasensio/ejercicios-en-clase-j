'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((dogImageResponse) => dogImageResponse.json())
    .then((dogImageData) => {
      const dogImage = dogImageData.meessage;
      return fetch('https://api.rand.fun/number/integer');
    })
    .then((imageResponse) => imageResponse.json());
}

const btn = document.querySelector('.js-button');
btn.addEventListener('click', getDogImage);
