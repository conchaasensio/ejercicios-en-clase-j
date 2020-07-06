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

//Filter hecho a mano, pero sin duplicados

// const lostNumbers = [4, 8, 15, 16, 23, 42];

// function even() {
//   return filter(element => element % 2 === 0);
// }

// function multipleOfThree() {
//   return filter(element => element % 3 === 0);
// }

// function filter(myFunction) {
//   let result = [];
//   for (let i = 0; i < lostNumbers.length; i++) {
//     const element = lostNumbers[i];
//     if (myFunction(element)) {
//       result.push(element);
//     }
//   }
//   return result;
// }

// const numbers = even(lostNumbers).concat(multipleOfThree());
// console.log(numbers);

/******************************* */

// Filter de Javascript

// const lostNumbers = [4, 8, 15, 16, 23, 42];

// function even() {
//   return lostNumbers.filter(element => element % 2 === 0);
// }

// function multipleOfThree() {
//   return lostNumbers.filter(element => element % 3 === 0);
// }

// const numbers = even(lostNumbers).concat(multipleOfThree());
// console.log(numbers);

/******************************* */

//Tratando de parametrizar una función

// const lostNumbers = [4, 8, 15, 16, 23, 42];

// function even(array) {
//   let evenNumbers = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element % 2 === 0) {
//       evenNumbers.push(element);
//     }
//   }
//   return evenNumbers;
// }

// function multipleOfThree() {
//   let multipleOfThreeNumbers = [];
//   for (let i = 0; i < lostNumbers.length; i++) {
//     const element = lostNumbers[i];
//     if (element % 3 === 0) {
//       multipleOfThreeNumbers.push(element);
//     }
//   }
//   return multipleOfThreeNumbers;
// }

// const numbers = even(lostNumbers).concat(multipleOfThree());
// console.log(numbers);
// console.log(even([1, 2, 3, 4]));
