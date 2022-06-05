'use strict';

const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

const value = document.querySelector('#value');
console.log(value);

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

