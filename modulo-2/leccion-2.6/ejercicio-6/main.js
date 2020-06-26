"use strict";

const pearBasket = {
  maxNumbersPears: 10,
  minNumberPears: 2,
  currentNumberPears: 5,
  initialNumberPears: 1,
  add: function (number) {
    this.currentNumberPears = this.currentNumberPears + number;
  },
  decrease: function (number) {
    this.currentNumberPears = this.currentNumberPears - number;
  },
  reset: function () {
    this.currentNumberPears = this.initialNumberPears;
  },
};

pearBasket.add(2);
console.log(pearBasket.currentNumberPears);

pearBasket.decrease(1);
console.log(pearBasket.currentNumberPears);

pearBasket.reset();
console.log(pearBasket.currentNumberPears);
