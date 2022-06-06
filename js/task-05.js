'use strict';

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');


const textInputHandler = ("input", (event) => {
    if (event.currentTarget.value === "") {
        textOutput.textContent = "Anonymus";
    } else {
        textOutput.textContent = event.currentTarget.value;
    }
    return textOutput.textContent;
});



textInput.addEventListener("input", textInputHandler);
