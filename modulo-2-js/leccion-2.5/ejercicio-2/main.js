"use strict";

const button = document.querySelector(".change");

function addName() {
  const name = document.querySelector(".name").value;
  console.log(`Hola, ${name}`);
}

button.addEventListener("click", addName);
