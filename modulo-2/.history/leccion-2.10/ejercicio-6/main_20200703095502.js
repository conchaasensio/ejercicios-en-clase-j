'use strict';

fetch('https://dog.ceo/api/breeds/image/random')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.body.innerHTML = data.result;
  });