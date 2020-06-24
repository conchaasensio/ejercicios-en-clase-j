"use strict";

const paragraph = document.querySelector(".text");
const content = paragraph.innerHTML;

function addParagraph() {
  paragraph.append(content);
  console.log("Hola");
}

paragraph.addEventListener("mouseover", addParagraph);
