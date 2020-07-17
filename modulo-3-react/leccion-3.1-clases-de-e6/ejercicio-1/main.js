'use strict';

let squareSide = 5;

class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return side * side;
  }
}

const mySquare = new Square();

console.log(
  `El cuadrado tiene un perímetro de ${mySquare.perimeter(squareSide)}cm`
);
console.log(`El cuadrado tiene un área de ${mySquare.area(squareSide)}cm`);
