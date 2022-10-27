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



let list = JSON.parse(sessionStorage.getItem("list"));
console.log(list)
var dataSet = [];
var stars = document.getElementsByClassName("star");
var rating;
list.map((x) => {
    if (x.status == "Delivered") {
       

        if (x.comments != "") {



            var feedback = `<div class="rating">
            <i class="fas fa-star star1" style="${x.rating>=1?'color:#ffd93b':' rgb(83, 75, 75)'}"></i>
            <i class="fas fa-star star1" style="${x.rating>=2?'color:#ffd93b':' rgb(83, 75, 75)'}"></i>
            <i class="fas fa-star star1" style="${x.rating>=3?'color:#ffd93b':' rgb(83, 75, 75)'}"></i>
            <i class="fas fa-star star1" style="${x.rating>=4?'color:#ffd93b':' rgb(83, 75, 75)'}"></i>
            <i class="fas fa-star star1" style="${x.rating>=5?'color:#ffd93b':' rgb(83, 75, 75)'}"></i><br>
            <input type="text" class="form-control form-control-sm" id="comment" value="${x.comments}" placeholder="Tell us more" readOnly>
        </div>  `;

        
           
           
        

        }
        else {
            var feedback = `<div class="rating">
        <i class="fas fa-star star"  onclick="fillStar(1)"></i>
        <i class="fas fa-star star" onclick="fillStar(2)"></i>
        <i class="fas fa-star star" onclick="fillStar(3)"></i>
        <i class="fas fa-star star" onclick="fillStar(4)"></i>
        <i class="fas fa-star star" onclick="fillStar(5)"></i><br>
        <input type="text" class="form-control form-control-sm" id="comment" placeholder="Tell us more">
    </div>  `;
        }



        let item = [`<a data-bs-toggle="modal" href="#exampleModalToggle" role="button"  href="" onclick="showProducts(${x.orderId})">${x.orderId}</a>`, x.invoiceDate, x.billAmount, x.address, x.paymentMode, x.status, feedback, `<button class='btn btn-success' id="reviewbtn" onclick='submitRating(${x.orderId})' disabled>Submit Review</button>`]

        dataSet.push(item);




    }
    else if (x.status == "Ordered") {
        let item = [`<a data-bs-toggle="modal" href="#exampleModalToggle" role="button" href="" onclick="showProducts(${x.orderId})">${x.orderId}</a>`, x.invoiceDate, x.billAmount, x.address, x.paymentMode, x.status, `<div class="rating">
        <i class="fas fa-star star" ></i>
        <i class="fas fa-star star" ></i>
        <i class="fas fa-star star" ></i>
        <i class="fas fa-star star" ></i>
        <i class="fas fa-star star" ></i>
        <input type="text" class="form-control form-control-sm" id="comment" placeholder="Tell us more" readOnly>
    </div>  `, `<button type="submit" class='btn btn-danger' onclick='cancelOrder(${x.orderId})'  >Cancel</button>`]
        dataSet.push(item);
    }



});



let showProducts=(orderId)=>{
    let row = document.getElementById('tableBody');
    row.innerHTML="";
    let tfoot = document.getElementById('tableFooter');
    tfoot.innerHTML=""

    let fil=list.filter(x => x.orderId == orderId);

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
    
    let tfoot = document.getElementById('tableFooter');
    tfoot.innerHTML += `
    <tr>
    <td colspan="3" >Total Amount:</td>
    <td class="table-active">${x.billAmount}</td>
    </tr>

    `;

});


}


function fillStar(rate) {
    rating = rate;
    document.getElementById('reviewbtn').disabled = false;
    for (let i = 0; i < rate; i++) {
        stars[i].style.color = "#ffd93b";
    }

    for (let j = rate; j < 5; j++) {
        stars[j].style.color = " rgb(83, 75, 75)";
    }

}


function cancelOrder(id) {

    let updatedList = list.filter(x => x.orderId != id);
    sessionStorage.setItem("list", JSON.stringify(updatedList));
    sessionStorage.setItem("orders", JSON.stringify(updatedList));
    window.location.reload();
}


function submitRating(id) {
    list.filter(x => x.orderId == id).map((y) => {

        y.rating = rating;
        y.comments = document.getElementById('comment').value;

    });
    reviewed = true;
    document.getElementById('reviewbtn').disabled = true;

    $('.star').removeAttr('onclick');
    document.getElementById('comment').readOnly = true;
    // console.log(updatedList)
    sessionStorage.setItem("list", JSON.stringify(list));
    sessionStorage.setItem("orders", JSON.stringify(list));
}








$(document).ready(function () {

    $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: 'Order Id' },
            { title: 'Order Date' },
            { title: 'Amount' },
            { title: 'Address' },
            { title: 'Payment Mode' },
            { title: 'Status' },
            { title: 'Rate your Experience' },
            { title: 'Action' }

        ],
    });

});







