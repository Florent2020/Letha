// CONTACT FORM JS

const form = document.querySelector("#contactForm");

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const comment = document.querySelector("#comment");

const fnameError = document.querySelector("#fnameError");
const lnameError = document.querySelector("#lnameError");
const emailError = document.querySelector("#invalidEmailError");
const phoneError = document.querySelector("#phoneError");
const commentError = document.querySelector("#commentError");


form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const fnameValue = fname.value;

    if (validateLength(fnameValue, 1) === true) {
        fnameError.style.display = "none";
    } else {
        fnameError.style.display = "block";
    }

    const lnameValue = lname.value;

    if (validateLength(lnameValue, 1) === true) {
        lnameError.style.display = "none";
    } else {
        lnameError.style.display = "block";
    }


    const emailValue = email.value;

    if (validateEmail(emailValue)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    const phoneValue = phone.value;

    if (validateLength(phoneValue, 8) === true) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }



    const commentValue = comment.value;

    if (validateLength(commentValue, 1) === true) {
        commentError.style.display = "none";
    } else {
        commentError.style.display = "block";
    }
}

function validateLength(value, lengthCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lengthCheck) {
        return true;
    } else {
        return false;
    }
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(email)) {
        return true;
    } else {
        return false;
    }
}