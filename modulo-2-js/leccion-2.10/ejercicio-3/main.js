'use strict';

function getUserGitHub() {
  const input = document.querySelector('.js-username-input');
  fetch('https://api.github.com/users/' + input.value)
    .then((response) => response.json())
    .then((profileData) => {
      const userName = document.querySelector('.js-name');
      userName.innerHTML = profileData.login;
      const userImage = document.querySelector('.js-avatar');
      userImage.src = profileData.avatar_url;
      const repository = document.querySelector('.js-repository');
      repository.innerHTML = profileData.public_repos;
    });
}

const btn = document.querySelector('.js-btn-buscar');
btn.addEventListener('click', getUserGitHub);
