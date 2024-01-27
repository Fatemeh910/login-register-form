const loginButton = document.querySelector('login-btn');
const registerButton = document.querySelector('register-btn');
const formTitle = document.querySelector('form-title');
//EVENT

registerButton.addEventListener('click',() =>{
 formTitle.innerHTML = "registerform";
})