'use strict';

fetch('https://ap')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.body.innerHTML = data.result;
  });
