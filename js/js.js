const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const numEl = document.querySelector('#num');
const ageEl = document.querySelector('#age');
const urlEl = document.querySelector('#url');
const textareaEl = document.querySelector('#textarea');
const form = document.querySelector('#signup');



form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    checkUsername();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
    CheckNum();
    CheckAge();
    isValidURL();
    isValidMesg();
    
});

function checkLength(){
    if(emailEl.length == "")
    {
document.getElementById("emailmsg").innerText="* Feild Required";
    }
}

function checkUsername(){
    if(usernameEl.value.length> 3 && usernameEl.value.length < 10)
    {
        document.getElementById("usermsg").innerText = "Correct Length";
    }
    else if(usernameEl.value.length > 10){
        document.getElementById("usermsg").innerText = "Your name lenght must be less than 10 charecters";

    }
    else{
        document.getElementById("usermsg").innerText = "Your name lenght must be more than 3 charecters";

    }
};

function checkEmail(){
if(emailEl.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    document.getElementById("emailmsg").innerText = "Correct Email";

}
else{
    document.getElementById("emailmsg").innerText = "Invalid Email";

}

};

function checkPassword(){
    if(passwordEl.value.length > 6){
if(passwordEl.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/))
{
    document.getElementById("passmsg").innerText = "Correct";
}
else{
    document.getElementById("passmsg").innerText = "Your password must contains an uppercase letter, symbol, lowercase letters, and numbers";
}
    }
    else{
        document.getElementById("passmsg").innerText = "Your password must be more than 6 charecters";
    }
};

function checkConfirmPassword(){
    if(passwordEl.value == confirmPasswordEl.value)
    {
        document.getElementById("confpassmsg").innerText = "Correct, Your Password Confirmed";
  
    }
    else{
        document.getElementById("confpassmsg").innerText = "Your Not Match!";

    }
}

function CheckNum() {
    if (numEl.value.trim().substring(0, 3) == "777" && numEl.value.length == 9) {
        document.getElementById("nummsg").innerText = "Correct";
    }
    else if (numEl.value.trim().substring(0, 3) != "777" && numEl.value.length == 9) {
        document.getElementById("nummsg").innerText = "You Number Must Began With 777";
    }
    else if (numEl.value.trim().substring(0, 3) == "777" && numEl.value.length != 9) {
        document.getElementById("nummsg").innerText = "You Number Length Must Be 9 Digits";
    }
    else {
        document.getElementById("nummsg").innerText = "You Number Length Must Be 9 Digits And Began With 777";
    }
};

function CheckAge() {
    if (ageEl.value.trim() < 18) {
        document.getElementById("agemsg").innerText = "Your Age Must Be More Than 18 Years Old";
    }
    else {
        document.getElementById("agemsg").innerText = "Correct";
    }
};

function isValidURL() {
    if (urlEl.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
        document.getElementById("urlmsg").innerText = "Correct";
    }
    else {
        document.getElementById("urlmsg").innerText = "Pattern Does Not Mach";
    }

};

function isValidMesg() {
    if (textareaEl.value.length < 20) {
        document.getElementById("textmsg").innerText = "Your Message Legnth Must Be More Than 20 Charecter";
    }
    else {
        document.getElementById("textmsg").innerText = "Correct";
    }
}

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
        case 'num':
            CheckNum();
            break;
        case 'age':
            CheckAge();
            break;
        case 'url':
            isValidURL();
            break;
        case 'textarea':
            isValidMesg();
            break;
    }
}));