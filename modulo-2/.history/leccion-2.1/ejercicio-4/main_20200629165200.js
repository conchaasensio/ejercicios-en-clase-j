'use strict';

const mainTitle = document.querySelector('.title').value;
const element1 = document.querySelector('.element1');
const element2 = document.querySelector('.element2');

mainTitle.innerHTML = mainTitle + element2.innerHTML;
