const loginButton = document.querySelector('.login-btn');
const registerButton = document.querySelector('.register-btn');
const formTitle = document.querySelector('.form-title');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const eyeButtons = document.querySelectorAll('.eye-btn');
const navigateLinks = document.querySelectorAll('.navigate-link')

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

//SHOW PASSWORD WHEN CLICK EYE BUTTONs
eyeButtons.forEach(eye=>{
  eye.addEventListener('click', () => {
    const input = eye.previousElementSibling;
    if(input.type === 'password'){
        //CHANGE INPUT TYPE INTO TEXT
        input.type = 'text';
        eye.firstElementChild.classList.replace('fa-eye','fa-eye-slash');
    }else{
        //CHANGE INPUT TYPE INTO PASSWORD
        input.type = 'password'
        eye.firstElementChild.classList.replace('fa-eye-slash','fa-eye');
    }
  });
});

navigateLinks.forEach(link =>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const dataLink = link.dataset.link;

        if(dataLink === "register"){
           registerButton.click();
        }else if(dataLink === "login"){
            loginButton.click();
        }
    });
});