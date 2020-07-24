"use strict";

const button = document.querySelector(".change");

function changeMessage() {
  console.log("Mi primer click, ¡ole yo y la mujer que me parió!");
  const text = document.querySelector(".text");
  text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", changeMessage);
