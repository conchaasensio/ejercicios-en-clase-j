'use strict';

let squareSide = 5;

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return this.side * this.side;
  }
}

const mySquare1 = new Square(1);
const mySquare2 = new Square(2);
const mySquare3 = new Square(3);

console.log(
  `El cuadrado 1 tiene un perímetro de ${mySquare1.perimeter()}cm y un área de ${mySquare1.area()}cm`
);
console.log(
  `El cuadrado 1 tiene un perímetro de ${mySquare2.perimeter()}cm y un área de ${mySquare2.area()}cm`
);
console.log(
  `El cuadrado 1 tiene un perímetro de ${mySquare3.perimeter()}cm y un área de ${mySquare3.area()}cm`
);
