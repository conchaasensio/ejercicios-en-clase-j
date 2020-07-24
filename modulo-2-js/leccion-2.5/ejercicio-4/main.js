"use strict";

const paragraphClasses = document.querySelector(".text").classList;
function changeBackgroundColor() {
  if (window.scrollY > 250) {
    paragraphClasses.add("change");
  } else {
    paragraphClasses.remove("change");
  }
}

window.addEventListener("scroll", changeBackgroundColor);
