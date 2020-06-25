"use strict";

const adalaber1 = {
  name: "Susana",
  age: "34 años",
  profession: "periodista",
};

const message = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.profession}`;

let body = document.querySelector("body");

body.append(message);
