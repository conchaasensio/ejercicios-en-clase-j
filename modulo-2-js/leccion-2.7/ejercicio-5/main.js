'use strict';

const numbers = [2, 4, 6, 8, 10];
numbers[5] = 12;

// let acc = 0;

// for (let i = 0; i < numbers.length; i++) {
//   acc += numbers[i];
// }
// acc = acc / numbers.length;
// console.log(acc);

function average(numbers) {
  let acc = 0;

  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
  }
  acc = acc / numbers.length;
  return acc;
}

console.log(average(numbers));
