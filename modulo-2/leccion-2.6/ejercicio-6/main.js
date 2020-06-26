"use strict";

const pearBasket = {
  maxNumbersPears: 10,
  minNumberPears: 2,
  currentNumberPears: 5,
  initialNumberPears: 1,
  add: function (number) {
    this.currentNumberPears = this.currentNumberPears + number;
  },
  increment: (number) => {
    console.log(
      (pearBasket.currentNumberPears = pearBasket.currentNumberPears + number)
    );
  },
};

pearBasket.increment(2);

pearBasket.add(1);

console.log(pearBasket.increment(1));
console.log(pearBasket);
