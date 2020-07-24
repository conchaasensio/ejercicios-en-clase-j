"use strict";

const adalaber1 = {};
adalaber1.name = "María";
adalaber1.age = "34 años";
adalaber1.profession = "periodista";
adalaber1.run = (phrase) => `Estoy corriendo.`;
adalaber1.showBio = function () {
  return `Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.profession}`;
};

console.log(adalaber1.showBio());
