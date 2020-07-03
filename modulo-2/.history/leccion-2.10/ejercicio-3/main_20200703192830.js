'use strict';

function getUserGitHub() {
  fetch('https://api.github.com/users/gootyfer')
    .then((response) => response.json())
    .then((data) => {
      const userName = document.querySelector('.js-name');
      userName.innerHTML = data.login;
      const userImage = document.querySelector('img');
      userImage.src = data.avatar_url;
      const repositories = console.log(data);
    });
}
getUserGitHub();
