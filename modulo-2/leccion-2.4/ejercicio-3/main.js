"use strict";

function price(number) {
  return (
    "Precio sin IVA: " +
    number +
    ", IVA: " +
    number * 0.21 +
    " y Total: " +
    (number + number * 0.21)
  );
}

const totalPrice = price(10);

document.querySelector(".price").innerHTML = totalPrice;

console.log(totalPrice);
