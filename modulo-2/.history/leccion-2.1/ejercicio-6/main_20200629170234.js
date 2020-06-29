'use strict';

const h1 = document.createElement('h1');
const span = document.createElement('div');
const p = document.createElement('p');
const div = document.querySelector('div');

h1.innerHTML = 'lorem ipsum';
div.appendChild(h1);
console.log(h1);
span.innerHTML = 'http://via.placeholder.com/350x150';
console.log(span);
p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
console.log(p);
