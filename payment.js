let logout = () => {
    // sessionStorage.removeItem('name');
    sessionStorage.clear();
    document.getElementById('login').href="./index.html";
}



const user = sessionStorage.getItem('name');
document.getElementById('user').innerHTML = "Welcome " + user;
document.getElementById('user').style.color = "#aaa816";

if (user == "") {

    let shop = document.getElementById('shop');
    shop.classList.remove('active');
    shop.classList.add('disabled');

    let cart = document.getElementById('cart');
    cart.classList.remove('active');
    cart.classList.add('disabled')

    let myOrders = document.getElementById('myOrders');
    myOrders.classList.remove('active');
    myOrders.classList.add('disabled')


}


let basket = JSON.parse(sessionStorage.getItem("data")) || [];
  
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();




let paymentMode;
if(!JSON.parse(sessionStorage.getItem("list"))){
    let list = [{
      orderId: 1, 
      address: "chennai",
      billAmount: "240",
      cartItems: [{ productName: "Orange", price: 120, Amount: 120, quantity: 1 }, { productName: "Apple", price: 120, Amount: 120, quantity: 1 }],
      invoiceDate: "28-7-2022",
      paymentMode: "Pay on delivery",
      status:"Delivered",
      rating:"",
      comments:""
    }];
    
    sessionStorage.setItem("list",JSON.stringify(list));
  }
  



// sessionStorage.removeItem("orders")


let lists = JSON.parse(sessionStorage.getItem("list"))
console.log(lists)
let orderId = lists.length;
console.log(orderId)
orderId += 1;
// let basket = JSON.parse(sessionStorage.getItem("data")) || [];
// console.log(basket)
let cartItems = []


const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let invoiceDate = `${day}-${month}-${year}`;




function radioCheck() {

    if (document.getElementById('validationFormCheck2').checked) {
        paymentMode = document.getElementById('credit').innerHTML;
        let cardNumber = document.getElementById('cardNumber');
        cardNumber.required = true;
        let expMonth = document.getElementById('exMonth');
        expMonth.required = true;
        let exp = document.getElementById('exYear');
        exp.required = true;
        let cvv = document.getElementById('CVV');
        cvv.required = true;
    }
    else if (document.getElementById('validationFormCheck3').checked) {
        paymentMode = document.getElementById('pod').innerHTML;
        let cardNumber = document.getElementById('cardNumber');
        cardNumber.required = false;
        let expMonth = document.getElementById('exMonth');
        expMonth.required = false;
        let exp = document.getElementById('exYear');
        exp.required = false;
        let cvv = document.getElementById('CVV');
        cvv.required = false;
    }
}


// let card = false;
// let expiry = false;
// let Cvv = false;


// function validateCardNumber() {
//     console.log('hi')
//     var no = document.getElementById("cardNumber").value;
//     let pattern = /^[0-9]{16}$/;

//     if (no.match(pattern)) {
//         // document.getElementById('fname').style.border = "3px solid green";
//         document.getElementsById('numberErr').innerHTML = "";
//         card = true;
//     }
//     else {
//         // document.getElementById('fname').style.border = "3px solid red";
//         document.getElementsById('numberErr').innerHTML = "Enter valid card details";
//         card = false;
//     }

// }



function storeDetails() {
    let address = document.getElementById('address').value;

    let placedorder=document.getElementById('thanks');
    placedorder.innerHTML="Order Placed!"

    let generateCartItems = () => {
        if (basket.length !== 0) {
            basket.map((x) => {
                let { id, item } = x;

                let search = products.find((y) => y.id === id) || [];
                let cartItem = { productName: search.productName, price: search.price, Amount: item * search.price, quantity: item }
                console.log(cartItem)
                cartItems.push(cartItem)

            })
                .join("");
        }
    }
    generateCartItems();

    var billAmount = sessionStorage.getItem("billAmount");
    var obj = { orderId: orderId, address: address, paymentMode: paymentMode, cartItems: cartItems, billAmount: billAmount, invoiceDate: invoiceDate,status:"Ordered",rating:"",comments:""};
   
    lists.unshift(obj)
    console.log(lists)
    let fil=lists.filter(x => x.orderId == orderId);
    console.log(fil)
    orderId = lists.length;
    orderId+=1;
    // let obj1=JSON.parse(sessionStorage.getItem("orders"))
    sessionStorage.setItem("orders", JSON.stringify(lists));

    sessionStorage.setItem("list", JSON.stringify(lists));

   

    fil.map((x)=>{

        console.log(x);

        (x.cartItems).map((y, index) => {

            let row = document.getElementById('tableBody');
            row.innerHTML += `
                <tr>
                <td>${index + 1}</td>
                <td>${y.productName}</td>
                <td>${y.quantity}</td>
                <td>${y.Amount}</td>
                </tr>
                `
    

    });

        let ship=document.getElementById('shipping');
        ship.innerHTML=" "+ x.address;

        let paid=document.getElementById('paid');
        paid.innerHTML=" "+x.paymentMode;

        let orderdate=document.getElementById('date');
        orderdate.innerHTML=" "+x.invoiceDate;

        let orderNumber=document.getElementById('orderNumber');
        orderNumber.innerHTML=" "+x.orderId;

        let deliveryDate=document.getElementById('deliveryDate');
        deliveryDate.innerHTML="  Today";

        let tfoot = document.getElementById('tableFooter');
        tfoot.innerHTML += `
        <tr>
        <td colspan="3" >Total Amount:</td>
        <td class="table-active">${x.billAmount}</td>
        </tr>
    
        `;

    });

sessionStorage.removeItem("data");


  
  calculation();

    


}



// sessionStorage.removeItem("list")




function validateNumber() {
   

    var no = document.getElementById("cardNumber").value;
    let pattern = /^[0-9]{16}$/;
    if (no == '') {
        document.getElementById('numberErr').innerHTML = ("**required");
        cnumber = false;

    }
    else if (!no.match(pattern)) {
        document.getElementById('numberErr').innerHTML = ("Enter valid card details");

        cnumber = false;
    }
    else {
        document.getElementById('numberErr').innerHTML = "";

        cnumber = true;
    }
}

function validateExp() {
    var exMonth = document.getElementById("exMonth").value;
    var exYear = document.getElementById("exYear").value;
    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();
    console.log(exYear.selectedIndex)
    




    // if (exMonth.selectedIndex === 0) {
    //     document.getElementById('expiryErr').innerHTML = ("Please select the month");
    //     exp = false;

    // }
    // if (exYear.selectedIndex === 0) {
    //     document.getElementById('expiry1Err').innerHTML = ("Please select the year");
    //     exp = false;

    // }
    // if ((exYear < year) || (year === exYear && exMonth < month)) {
    //     document.getElementById('expiry2Err').innerHTML = ("The expiry date is before today's date. Please select a valid expiry date");
    //     exp = false;

    // }
    // else {
    //     document.getElementById('expiry2Err').innerHTML = "";
    //     exp = true;
    // }
}

function validateCvv() {
    var cvv = document.getElementById("CVV").value;
    let pattern = /^[0-9]{3}$/;
  if (!cvv.match(pattern)) {
        document.getElementById('cvvErr').innerHTML = ("Enter valid cvv");
        cvvv = false;
    }
    else {
        document.getElementById('cvvErr').innerHTML = " ";
        cvvv = true;
    }

}

function validateZip() {
    var zip = document.getElementById("zip").value;
    var btn = document.getElementById('subBtn')

    let pattern = /^[0-9]{6}$/;
    if (!zip.match(pattern)) {
        document.getElementById('zip_error').innerHTML = ("zipcode must be 6 digits only");
        zipp = false;
    }
    else {
        document.getElementById('zip_error').innerHTML = " ";
        zipp = true;
    }

   

}



var doc = new jsPDF();
var specialElementHandlers = {
    '#print-btn': function (element, renderer) {
        return true;
    }
};

$('#print').click(function () {
    doc.fromHTML($('#invoice').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('invoice.pdf');
});