'use strict';

const addMsg = () => {
  const msg = document.querySelector('.message');
  msg.innerHTML = 'Su sesión ha expirado.';
};

setTimeout(addMsg, 15000);
