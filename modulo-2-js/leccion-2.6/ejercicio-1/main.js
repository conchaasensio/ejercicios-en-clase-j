"use strict";

const adalaber1 = {
  name: "Susana",
  age: "34 años",
  profession: "periodista",
};

const adalaber2 = {
  name: "Rocío",
  age: "25 años",
  profession: "actriz",
};

const message = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.profession}`;

let body = document.querySelector("body");

body.append(message);
