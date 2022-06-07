'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

const colorChangeHandler = () => {
  colorName.textContent = getRandomHexColor();
  body.style.backgroundColor = colorName.textContent;
}

button.addEventListener('click', colorChangeHandler);