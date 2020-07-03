'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
