'use strict';

const rangeInput = document.querySelector('#font-size-control');

const output = document.querySelector('#text');

const rangeHandler = (event) => {
output.style.fontSize = `${event.target.value}px`;
};

rangeInput.addEventListener("input", rangeHandler) 
