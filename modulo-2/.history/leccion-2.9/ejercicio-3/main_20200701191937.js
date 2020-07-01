'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber() {
  let evenLostNumbers = [];

  for (let i = 0; i < lostNumbers.length; i++) {
    if (i % 2 === 0) {
      console.log(lostNumbers);
    }
  }
}
