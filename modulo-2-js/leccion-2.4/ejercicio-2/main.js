"use strict";

function average(a, b, c, d) {
  return (a + b + c + d) / 4;
}

const amountAverage = average(33, 27, 18, 56);
console.log(amountAverage);
document.getElementById("result").innerHTML = amountAverage;
