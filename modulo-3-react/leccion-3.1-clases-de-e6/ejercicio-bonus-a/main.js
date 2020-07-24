'use strict';

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  //Método para calcular el perímetro
  perimeter() {
    return this.base * this.numberOfSides;
  }
  //Método para calcular el área
  area() {
    return this.base * this.height;
  }
}

//Subclases
class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
    this.side = side;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
  }
}

//Instancias

const square = new Square(4);
const triangle = new Triangle(4, 3);

console.log(
  `El cuadrado tiene un perímetro de ${square.perimeter()}cm y un área de ${square.area()}cm`
);
console.log(`El triángulo tiene un área de ${triangle.area()}cm`);
