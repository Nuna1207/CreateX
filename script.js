'use strict'
var modal = document.getElementById('modal');
var btn = document.getElementById("autorization");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function (){
    modal.style.display="block";
}
span.onclick=function (){
    modal.style.display = "none";
}
const button = document.querySelector('#button-sign_up');
button.addEventListener('click', (event) => {
    if (inputHandler()){
    location.href="Profile.html";
    }
});
function inputHandler() {
    const inputEmail = document.querySelector('#email-input');
    const inputPassword = document.querySelector('#password-input');
    const labelErrorEmail = document.querySelector('#errorInfoEmail');
    const labelErrorPassword = document.querySelector('#errorInfoPassword');
    if (inputEmail.value.length==0){
        labelErrorEmail.innerHTML='не валидный';
        labelErrorEmail.style.color = 'red';
        inputEmail.style.border = '1px solid red';

    }
    else if (!(validateEmail(inputEmail.value))){
        labelErrorEmail.innerHTML='не валидный';
        labelErrorEmail.style.color = 'red';
        inputEmail.style.border = '1px solid red';
    }
    if (inputPassword.value.length==0) {
        labelErrorPassword.innerHTML='не валидный';
        labelErrorPassword.style.color = 'red';
        inputPassword.style.border = '1px solid red';
    }
    else if (inputPassword.value.length<8){
        labelErrorPassword.innerHTML='не валидный';
        labelErrorPassword.style.color = 'red';
        inputPassword.style.border = '1px solid red';
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
