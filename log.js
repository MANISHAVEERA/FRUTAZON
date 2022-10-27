
sessionStorage.setItem("name", "");
function validateForm() {
   
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value;
    const password = document.getElementById("pass").value;

    
    sessionStorage.setItem("name", name);
    


    var emailPattern = /[a-z0-9]+@([gmail]{5})+.[a-z]{2,3}$/;
    var namePattern = /^([a-zA-Z])+$/;
    var passw = /^[A-Za-z0-9]{7,14}$/;

    const email_error = document.getElementById("error_email")
    const name_error = document.getElementById("error_name")
    const password_error = document.getElementById("error_pass")

    if (email == '') {
        email_error.innerHTML = ("**required")
        return false;
    }
    else if (!email.match(emailPattern)) {
        email_error.innerHTML = ("**Please enter valid email")
        return false;
    }
    else if (email.match(emailPattern)) {
        email_error.innerHTML = (" ")
    }
    if (name == '') {
        name_error.innerHTML = ("**required")
        return false;
    }
    else if (!name.match(namePattern)) {
        name_error.innerHTML = ('**Username cannot contain numbers')
        return false;
    }
    else if (name.match(namePattern)) {
        name_error.innerHTML = (" ")
    }

    if (password == '') {
        password_error.innerHTML = ("**required")
        return false;
    }
    else if (!password.match(passw)) {
        password_error.innerHTML = ("**Please enter valid password")
        return false;
    }
    else if (password.match(passw)) {
        password_error.innerHTML = (" ")
    }
    else if (name != "" && password != "") {

        return true;
    }

    

}

function validateEmail() {
    console.log('hi')
    const email = document.getElementById("ema").value;
    var emailPattern = /[a-z0-9]+@([gmail]{5})+.[a-z]{2,3}$/;
    const email_error = document.getElementById("error_ema");
    var btn = document.getElementById('sendbtn')

    if (email == '') {
        email_error.innerHTML = ("**required")
        return false;
    }
    else if (!email.match(emailPattern)) {
        email_error.innerHTML = ("**Please enter valid email")
        return false;
    }
    else if (email.match(emailPattern)) {
        email_error.innerHTML = (" ")
        btn.disabled = false;
        return true;

    }
}