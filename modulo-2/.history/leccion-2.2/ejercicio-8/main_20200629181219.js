'use strict';

const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const firstDog = document.querySelector('.firstDog');
firstDog.innerHTML = `${firstDogName} ${firstDogImage}`;

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const secondDog = document.querySelector('.secondDog');
secondDog.innerHTML = `${secondDogName} ${secondDogImage}`;

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';
