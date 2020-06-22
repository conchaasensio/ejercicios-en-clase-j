"use strict";
const birthDate = new Date(1987, 1, 27);
const today = Date.now();
const msLived = today - birthDate;
const hoursLived = msLived / 1000 / 60 / 60;
console.log(hoursLived);
