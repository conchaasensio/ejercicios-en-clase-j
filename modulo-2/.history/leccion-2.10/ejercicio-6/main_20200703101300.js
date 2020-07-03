'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((dogImageResponse) => dogImageResponse.json())
    .then((dogImageData) => {
      const dogImage = dogImageData.meessage;
      return fetch('https://dog.ceo/api/breed/' + breeds[0] + '/images/random');
    })
    .then(function (data) {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}

const btn = document.querySelector('.js-button');
btn.addEventListener('click', getDogImage);
