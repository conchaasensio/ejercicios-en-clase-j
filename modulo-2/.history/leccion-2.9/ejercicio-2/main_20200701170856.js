'use strict';

function get100Numbers() {
  let numbers = [];

  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
  }
}

function getReverseNumbers() {
  get100Numbers();
  console.log(get100Numbers);
}