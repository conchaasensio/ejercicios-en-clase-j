'use strict';

function getUserGitHub() {
  const input = document.querySelector('.js-input');
  fetch('https://api.github.com/users/' + input.value)
    .then((response) => response.json())
    .then((data) => {
      const userName = document.querySelector('.js-name');
      userName.innerHTML = data.login;
      const userImage = document.querySelector('.js-img');
      userImage.src = data.avatar_url;
      const rep = document.querySelector('.js-rep');
      rep.innerHTML = data.public_repos;
      console.log(data);
    });
}

const btn = document.querySelector('.js-btn-buscar');
btn.addEventListener('click', getUserGitHub);
