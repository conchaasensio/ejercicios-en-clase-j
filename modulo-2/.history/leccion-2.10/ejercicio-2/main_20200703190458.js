'use strict';

/* Función genérica a la que hay que pasarle los parámetros url e imageAlt al ejecutarla */

function changeDogImage(url, imageAlt) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = imageAlt;
    });
}

// Función para generar la imagen aleatoria de perretes. Ejecutamos la función genérica, pasándole los parámetros que nos interesan.
function getDogImage() {
  changeDogImage('https://dog.ceo/api/breeds/image/random', 'Un perro');
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);

// Hacemos lo mismo que en la función de perretes, pero ahora con los parámetros necesarios para qeu sólo salgan chihuahuas.

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
