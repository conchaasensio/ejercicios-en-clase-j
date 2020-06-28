'use strict';

//SELECTORS...

const userName = document.querySelector('.js-user-name');
const userPassword = document.querySelector('.js-user-password');
const button = document.querySelector('.js-login-button');
const errorMessage = document.querySelector('.error-wrapper');
//Number of user attemps
let attemps = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
  name: 'front23',
  password: 'bicicleta',
};

//FUNCTIONS

function letEnter(name, password) {
  if (
    userName.value === userInfo.name &&
    userPassword.value === userInfo.password
  ) {
    alert('Estás dentro');
  } else if (attemps < 3) {
    errorMessage.classList.remove('hidden');
    attemps++;
  } else {
    console.log('Estás bloqueado');
  }
}
//LISTENERS

button.addEventListener('click', letEnter);
