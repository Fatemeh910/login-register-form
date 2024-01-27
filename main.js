const loginButton = document.querySelector('.login-btn');
const registerButton = document.querySelector('.register-btn');
const formTitle = document.querySelector('.form-title');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const eyeButton = document.querySelectorAll('.eye-btn');


//SHOW REGISTER FORM WHEN CLICK TO REGISTER BUTTON
registerButton.addEventListener("click", () => {
    formTitle.innerText = "Register Form";

//TOGLE FORM BUTTONS
    registerButton.classList.add('active');
    loginButton.classList.remove("active");

//SHOW REGISTER FORM AND HIDE LOGIN FORM
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
});

//SHOW LOGIN FORM WHEN CLICK TO LOGIN BUTTON
loginButton.addEventListener('click',() =>{
    formTitle.innerText = "Login Form";

//TOGLE FORM BUTTONS
    loginButton.classList.add("active");
    registerButton.classList.remove('active');

//SHOW REGISTER FORM AND HIDE REGISTER FORM
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});