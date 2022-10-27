


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

  let label = document.getElementById("label");
  let ShoppingCart = document.getElementById("shopping-cart");
  let billAmount;
  let basket = JSON.parse(sessionStorage.getItem("data")) || [];
  
  let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();
  
  let generateCartItems = () => {
    if (basket.length !== 0) {
      return (ShoppingCart.innerHTML = basket
        .map((x) => {
          let { id, item } = x;
        
        
          let search = products.find((y) => y.id === id) || [];
          var rate = `<div class="rating">
          <i class="fas fa-star star1" style="${search.rating>=1?'color:#ffd93b':'#e4e4e4'}"></i>
          <i class="fas fa-star star1" style="${search.rating>=2?'color:#ffd93b':'#e4e4e4'}"></i>
          <i class="fas fa-star star1" style="${search.rating>=3?'color:#ffd93b':'#e4e4e4'}"></i>
          <i class="fas fa-star star1" style="${search.rating>=4?'color:#ffd93b':'#e4e4e4'}"></i>
          <i class="fas fa-star star1" style="${search.rating>=5?'color:#ffd93b':'#e4e4e4'}"></i>
          </div>`

          return `
          <div class="col">
          <div class="card h-100 product " >
        <img src="${search.images}" class="card-img-top" alt="img">
            
              <div class="card-body">
                <h5 class="card-title">${search.productName}   <i onclick="removeItem(${id})" style="float:right" class="fa fa-times"></i></h5>
                <p class="card-text"> Rs.${search.price} <span id="rating" >${rate}</span></p>
                <p class="card-text"> ${search.description} </p>
                <h5 style="float:right;">Rs. ${item * search.price}</h5>
                <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                  <div id=${id} class="quantity">
                  ${item}
                  </div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                 
                </div>
               
              </div>
              
          </div>
        </div>
        `;
        })
        .join(""));
    } else {
      ShoppingCart.innerHTML = ``;
      label.innerHTML = `
      <h2>Cart is Empty</h2>
      <a href="shop.html">
        <button class="btn btn-success">Continue Shopping</button>
      </a>
      `;
    }
  };
  
  generateCartItems();
  
  let increment = (id) => {
    // let selectedItem = id;
    let search = basket.find((x) => x.id === id);
  
    if (search === undefined) {
      basket.push({
        id: id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
  
    generateCartItems();
    update(id);
    sessionStorage.setItem("data", JSON.stringify(basket));
  };
  let decrement = (id) => {
    // let selectedItem = id;
    let search = basket.find((x) => x.id === id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }
    update(id);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    sessionStorage.setItem("data", JSON.stringify(basket));
  };
  
  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
  };
  
  let removeItem = (id) => {
    // let selectedItem = id;
    // console.log(selectedItem.id);
    basket = basket.filter((x) => x.id !== id);
    generateCartItems();
    TotalAmount();
    sessionStorage.setItem("data", JSON.stringify(basket));
  };
  
  let clearCart = () => {
    basket = [];
    generateCartItems();
    sessionStorage.setItem("data", JSON.stringify(basket));
  };
  
  let TotalAmount = () => {
    if (basket.length !== 0) {
      let amount = basket
        .map((x) => {
          let { item, id } = x;
          let search = products.find((y) => y.id === id) || [];
  
          return item * search.price;
        })
        .reduce((x, y) => x + y, 0);
      // console.log(amount);
      label.innerHTML = `
      <h2>Subtotal : Rs ${amount}</h2>
      
      <button class="btn btn-danger" onclick="clearCart()">Clear Cart</button>
      <a href="./payment.html"><button class="btn btn-success" >Proceed to Buy</button></a>
      `;
      billAmount=amount;

    } else return;
  };
  
  TotalAmount();
  

  sessionStorage.setItem("billAmount",billAmount);
  