
let logout=()=>{
    // sessionStorage.removeItem('name');
    sessionStorage.clear();
    document.getElementById('login').href="./index.html";
  }
  
  const user=sessionStorage.getItem('name');
  document.getElementById('user').innerHTML="Welcome "+user;
  document.getElementById('user').style.color="#aaa816";
  
  if(user==""){
  
  let shop=document.getElementById('shop');
  shop.classList.remove('active');
  shop.classList.add('disabled');
  
  let cart=document.getElementById('cart');
  cart.classList.remove('active');
  cart.classList.add('disabled')
  
  let myOrders=document.getElementById('myOrders');
  myOrders.classList.remove('active');
  myOrders.classList.add('disabled')
  
  
  }
  
    
let basket = JSON.parse(sessionStorage.getItem("data")) || [];
  
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();


  
var namee=false;
var mail=false;
var btn = document.getElementById('subBtn')

function validateName(){
    const name = document.getElementById("name").value;
    var namePattern = /^([a-zA-Z\s])+$/;
    const name_error = document.getElementById("error_name")
    if (name == '') {
        name_error.innerHTML = ("**required")
        namee=false;
    }
    else if (!name.match(namePattern)) {
        name_error.innerHTML = ('**Username cannot contain numbers')
        namee=false;
    }
    else if (name.match(namePattern)) {
        name_error.innerHTML = (" ");
        namee=true;
    }
}

function validateContactEmail(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    var emailPattern = /[a-z0-9]+@([gmail]{5})+.[a-z]{2,3}$/;
    const email_error = document.getElementById("error_email")
   

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


function closeModal(){
document.getElementById("name").value="";
document.getElementById("email").value="";
btn.disabled=true;
}


