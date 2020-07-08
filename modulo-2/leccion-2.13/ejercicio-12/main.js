'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

users.sort((a, b) => a.pin - b.pin);
console.log(users);

//Sort no funciona con esto. Tenemos que hacer un if y decir qué número devuelve (positivo, negativo o 0)
users.sort((a, b) => a.name - b.name);
console.log(users);
