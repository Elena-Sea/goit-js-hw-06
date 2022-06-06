'use strict';

const input = document.querySelector('#validation-input');

const inputLength = Number(input.dataset.length);

input.addEventListener("focus", () => {
    input.classList.remove("valid");
    input.classList.remove("invalid");

});

input.addEventListener("blur", () => {
    input.value.length === inputLength ? input.classList.add("valid") : input.classList.add("invalid");

});
