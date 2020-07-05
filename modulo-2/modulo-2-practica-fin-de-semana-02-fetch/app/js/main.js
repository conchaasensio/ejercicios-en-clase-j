'use strict';

const ENDPOINT =
  'https://raw.githubusercontent.com/conchaasensiomr/ejercicios-en-clase-j/master/modulo-2/modulo-2-practica-fin-de-semana-02-fetch/data/users.json';

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const princess = data[i];

      let ul = document.querySelector('.js-user-list');
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(princess.name));
      ul.appendChild(li);
      li.addEventListener('click', changeBackground);

      let princessPicture = document.createElement('img');
      princessPicture.src = princess.picture;
      princessPicture.alt = 'Una princesa';
      li.appendChild(princessPicture);

      let princessComment = document.createElement('p');
      princessComment.appendChild(document.createTextNode(princess.comment));
      li.appendChild(princessComment);
    }
  });

function changeBackground(event) {
  event.currentTarget.classList.add('selected');
}

let users = [];
let favorites = [];

/* Do your magic! 🦄🦄🦄*/
