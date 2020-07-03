'use strict';

fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.body.innerHTML = data.result;
  });
