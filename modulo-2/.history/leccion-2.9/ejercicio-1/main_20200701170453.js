'use strict';

let numbers = [];

function get100Numbers() {
  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
  }
}

get100Numbers();
console.log(get100Numbers());
