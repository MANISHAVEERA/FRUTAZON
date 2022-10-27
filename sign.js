function validateContactEmail(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    var emailPattern = /[a-z0-9]+@([gmail]{5})+.[a-z]{2,3}$/;
    const email_error = document.getElementById("error_email")
    var btn = document.getElementById('subBtn')

    if (email == '') {
        email_error.innerHTML = ("**required");
        mail=false;
      
    }
    else if (!email.match(emailPattern)) {
        email_error.innerHTML = ("**Please enter valid email");
        mail=false;
      
    }
    else if (email.match(emailPattern)) {
        email_error.innerHTML = (" ");
        mail=true;
    }

if(namee && mail){
    btn.disabled=false;

}


}

function validateSignupForm(){

    console.log('sign up')

    const email = document.getElementById("email").value
    const name = document.getElementById("name").value;
    const mob = document.getElementById("mobile").value;
    const password = document.getElementById("pass").value;
    const cpassword = document.getElementById("cpass").value;

   


    var emailPattern = /[a-z0-9]+@([gmail]{5})+.[a-z]{2,3}$/;
    var namePattern = /^([a-zA-Z])+$/;
    var mobPattern = /^[0-9]{10}$/;
    var passw = /^[A-Za-z0-9]{7,14}$/;

    const email_error = document.getElementById("error_email")
    const name_error = document.getElementById("error_name")
    const password_error = document.getElementById("error_pass")
    const mob_error = document.getElementById("error_mob")
    const cpass_error = document.getElementById("error_cpass")

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

    if (mob == '') {
        mob_error.innerHTML = ("**required")
        return false;
    }
    else if (!mob.match(mobPattern)) {
        mob_error.innerHTML = ('**Mobile Number should contain only 10 digits')
        return false;
    }
    else if (mob.match(mobPattern)) {
        mob_error.innerHTML = (" ")
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
    if (cpassword == '') {
        cpass_error.innerHTML = ("**required")
        return false;
    }
    else if (cpassword!=password) {
        cpass_error.innerHTML = ("**Password Mismatch")
        return false;
    }
    else if (cpassword==password) {
        cpass_error.innerHTML = (" ")
    }

    else if (name != "" && email!="" && mob!="" && password != "" && cpassword!="") {

        return true;
    }

}

