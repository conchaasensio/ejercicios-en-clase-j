'use strict';

const numbers = [1, 2, 3];
const items = document.querySelector('.js-items-list');

//Utilizo un bucle para crear un <li> por cada uno de los elementos que componen el array.
for (const number of numbers) {
  //Creamos el elemento <li>
  const newItem = document.createElement('li');
  //Creo contenido indicando como tal el elemento del array, en este caso, los números.
  const newContent = document.createTextNode(number);
  //Le añado el contenido al <li> mediante el método appendChild.
  newItem.appendChild(newContent);
  //Añado los elementos al DOM, incluyendo los <li> dentro del <ul> que ya existía en mi HTML.
  items.appendChild(newItem);
}
