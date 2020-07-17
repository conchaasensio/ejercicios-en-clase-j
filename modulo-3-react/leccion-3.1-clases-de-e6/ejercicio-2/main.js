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

console.log(
  `El cuadrado 1 tiene un perímetro de ${mySquare1.perimeter()}cm y un área de ${mySquare1.area()}cm`
);
