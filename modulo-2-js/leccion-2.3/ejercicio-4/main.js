"use strict";

const dogAge = 0;
let humanAge = 0;

if (dogAge === 1) {
  humanAge = 15;
} else if (dogAge === 2) {
  humanAge = 15 + 9;
} else if (dogAge > 2) {
  humanAge = 24 + (dogAge - 2) * 5;
}
console.log(`La edad humana de tu perro es de ${humanAge} años`);
