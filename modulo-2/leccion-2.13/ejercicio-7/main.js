'use strict';

const times = [56, 9, 45, 28, 35];

const sum = times.reduce((acc, number) => (acc += number));
const average = sum / times.length;
console.log(average);
