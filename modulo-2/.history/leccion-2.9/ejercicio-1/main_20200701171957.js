'use strict';

let numbers = [];

function get100Numbers(numbers) {
  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
  }

  return numbers;
}

console.log(numbers);
