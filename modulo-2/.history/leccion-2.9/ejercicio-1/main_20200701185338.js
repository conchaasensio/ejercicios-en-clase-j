'use strict';

function get100Numbers(100) {
  let numbers = [];

  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
    console.log(get100Numbers(100));
  }

  return numbers;
}
