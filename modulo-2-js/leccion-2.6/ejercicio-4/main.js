"use strict";

const button = document.querySelector(".button");
const event = {};

function logEvent() {
  console.log(event);
}

button.addEventListener("click", logEvent);
