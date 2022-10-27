

let logout=()=>{
  // sessionStorage.removeItem('name');b 
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


let shop = document.getElementById("shopp");
let cartNumber;
sessionStorage.setItem("cartNumber",cartNumber);

let basket = JSON.parse(sessionStorage.getItem("data")) || [];
console.log(basket)

let generateShop = () => {
   
  return (shop.innerHTML = products
    .map((x) => {
      let { id,productName, price, description, images,rating} = x;

      var rate = `<div class="rating">
            <i class="fas fa-star star1" style="${rating>=1?'color:#ffd93b':'#e4e4e4'}"></i>
            <i class="fas fa-star star1" style="${rating>=2?'color:#ffd93b':'#e4e4e4'}"></i>
            <i class="fas fa-star star1" style="${rating>=3?'color:#ffd93b':'#e4e4e4'}"></i>
            <i class="fas fa-star star1" style="${rating>=4?'color:#ffd93b':'#e4e4e4'}"></i>
            <i class="fas fa-star star1" style="${rating>=5?'color:#ffd93b':'#e4e4e4'}"></i>
            </div>`


      let search = basket.find((x) => x.id === id) || [];
      return `

      <div class="col pro">
      <div class="card h-100 product " >
    <img src="${images}" class="card-img-top" alt="img">
        
          <div class="card-body">
            <h5 class="card-title product-name">${productName}<span id="rating" style="float:right;">${rate}</span></h5>
            <p class="card-text"> Rs.${price} </p>
            <p class="card-text"> ${description}</p>
            
            <div class="buttons ">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
       
      </div>
    </div>

    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(id);
  sessionStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  sessionStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  sessionStorage.setItem("cartNumber",search.item);
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();


function seacrhProducts(){
  let searchInput = document.getElementById("searchText").value;
  let names = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".pro");
  
  names.forEach((product, i) => {
    if ((product.textContent).toLowerCase().includes(searchInput.toLowerCase())) {
      cards[i].style.display="";
    } else {
      cards[i].style.display='none';

    }
  });
}




