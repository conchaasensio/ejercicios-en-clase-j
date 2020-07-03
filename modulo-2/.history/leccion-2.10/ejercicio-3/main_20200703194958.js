'use strict';

function getUserGitHub() {
  const input = document.querySelector('.js-username-input');
  fetch('https://api.github.com/users/' + input.value)
    .then((response) => response.json())
    .then((data) => {
      const userName = document.querySelector('.js-name');
      userName.innerHTML = data.login;
      const userImage = document.querySelector('.js-avatar');
      userImage.src = data.avatar_url;
      const repository = document.querySelector('.js-repository');
      repository.innerHTML = data.public_repos;
    });
}

const btn = document.querySelector('.js-btn-buscar');
btn.addEventListener('click', getUserGitHub);
