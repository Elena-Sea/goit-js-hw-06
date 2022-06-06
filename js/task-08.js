'use strict';

const form = document.querySelector('.login-form');
console.log(form);

let user = {
    email: '',
    password: '',
};

const formHandler = (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
         alert("Please fill in all the fields!");
    } else {
        user.email = email.value;
        user.password = password.value;
        console.log(user);
    }
    event.currentTarget.reset();
}

form.addEventListener("submit", formHandler);
