"use strict";

const paragraph = document.querySelector(".text");
const content = paragraph.innerHTML;

function addParagraph() {
  paragraph.append(content);
}

paragraph.addEventListener("mouseover", addParagraph);
