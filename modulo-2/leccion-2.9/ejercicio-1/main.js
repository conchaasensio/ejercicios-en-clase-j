'use strict';

function get100Numbers() {
  let numbers = [];

  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
  }

  return numbers;
}

const numbers = get100Numbers();
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
