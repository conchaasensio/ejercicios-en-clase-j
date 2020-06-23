"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);

  if (!element) {
    console.log(
      `No existe ningún elemento con clase, id o tag llamado ${element}`
    );
  }

  return element;
}

const btnEl = getEl(".btn");
console.log(btnEl);
