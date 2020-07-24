"use strict";

function oddEven(number) {
  return number % 2 === 0;
}

const resultOddEven = oddEven(6);

document.querySelector(".oddEven").innerHTML = resultOddEven;

console.log(resultOddEven);
