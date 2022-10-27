let logout=()=>{
    // sessionStorage.removeItem('name');
    sessionStorage.clear();
    
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

let shopNow=document.getElementById('shopNow');
shopNow.href='./log.html';

let orderNow=document.getElementById('orderNow');
orderNow.href='./log.html';

}
// if(user!=""){
//   document.getElementById('login').href="./index.html";
//   document.getElementById('login').setAttribute("onclick","logout()" );
//   console.log(document.getElementById('login'))
// }

let basket = JSON.parse(sessionStorage.getItem("data")) || [];
  
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

// sessionStorage.setItem("list",JSON.stringify([]));

