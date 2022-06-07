'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const parentBox = document.querySelector('#boxes');

parentBox.style.display = "flex";
parentBox.style.alignItems = "center";
parentBox.style.flexWrap = "wrap";

let sideLength = 30;

const createBoxes = (amount) => {
  amount = Number(input.value);
 
  for (let i = 0; i < amount; i += 1) {

    const box = document.createElement("div");
    box.classList.add("box");
    parentBox.append(box);

    sideLength += 10;

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${sideLength}px`;
    box.style.height = `${sideLength}px`;
  }
};

const destroyBoxes = () => {
  sideLength -= 10 * parentBox.children.length;
  parentBox.innerHTML = '';
}

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

