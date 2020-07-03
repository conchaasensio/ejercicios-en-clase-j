'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

function even() {
  let evenNumbers = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    const element = lostNumbers[i];
    if (element % 2 === 0) {
      evenNumbers.push(element);
    }
  }
  return evenNumbers;
}

function multipleOfThree() {
  let multipleOfThreeNumbers = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    const element = lostNumbers[i];
    if (element % 3 === 0) {
      multipleOfThreeNumbers.push(element);
    }
  }
  return multipleOfThreeNumbers;
}

const numbers = even().concat(multipleOfThree());
console.log(numbers);
