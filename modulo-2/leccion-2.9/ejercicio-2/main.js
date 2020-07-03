'use strict';

function get100Numbers() {
  let numbers = [];

  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
  }

  return numbers;
}

function getReversed100Numbers() {
  return get100Numbers().reverse();
}

console.log(getReversed100Numbers());
