const errors = document.getElementsByClassName("err");

const fnameElement = document.getElementById("fname");
const lnameElement = document.getElementById("lname");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

function clearErrors() {
    for (er of errors) {
        er.style.display = "none";
    }
}


function validate() {
    let isValid = true;

    let fname = fnameElement.value.trim();
    let lname = lnameElement.value.trim();

    if (!fname) {
        isValid = false;
        document.getElementById("fname-err").style.display = "block";
    }
    if (!lname) {
        isValid = false;
        document.getElementById("lname-err").style.display = "block";
    }

    return isValid;
}

document.getElementById("appointment-form").onsubmit = validate;