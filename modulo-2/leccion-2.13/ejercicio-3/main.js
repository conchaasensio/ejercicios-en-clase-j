'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const helloUsers = users.map((user) => {
  if (user.isPremium) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros`;
  } else {
    return `Bienvenida ${user.name}`;
  }
});

console.log(helloUsers);
