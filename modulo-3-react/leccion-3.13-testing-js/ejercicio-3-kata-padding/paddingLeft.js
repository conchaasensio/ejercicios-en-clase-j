'use strict';

function paddingLeft(initialString, finalSize, padding) {
  if (finalSize <= initialString.length) {
    return initialString;
  } else {
    const numberOfPadding = (finalSize - initialString.length) / padding.length;
    return padding.repeat(numberOfPadding) + initialString;
  }
}

module.exports = paddingLeft;
