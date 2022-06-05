'use strict';

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const value = document.querySelector('#value');

let counterValue = 0;

const incrBtnClickHandler = () => {
    counterValue += 1;
    value.textContent = counterValue;
};
const decrBtnClickHandler = () => {
    counterValue -= 1;
    value.textContent = counterValue;

};

incrementBtn.addEventListener("click", incrBtnClickHandler);
decrementBtn.addEventListener("click", decrBtnClickHandler);

