

products= [
    {
        "productName": "Orange",
        "price": 120,
        "description": "Orange juice is a concentrated source of vitamin C, a water-soluble vitamin that doubles as a powerful antioxidant and plays a central role in immune function.Orange juice is also rich in folate, which is needed for DNA synthesis.",
        "images": "images/orange.jpeg"
    },
    {
        "productName": "Apple",
        "price": 120,
        "description": "Apple juice includes higher amounts of nutrition, nutrients as well as phenolic compounds which help in enhancing health and avoiding various kinds of illnesses. It is usually stated that consuming an apple daily may help in avoiding the necessity of a doctor.",
        "images": "images/apple.jpeg"
    },
    {
        "productName": "Pomegranate",
        "price": 120,
        "description": "Pomegranates are a good source of vitamin C, vitamin K, and potassium, as well as several other key nutrients.It contains two compounds - punicalagin and punicic acid which give it all the potent benefits.",
        "images": "images/pome.jpeg"
    },
    {
        "productName": "Defence Concoction",
        "price": 150,
        "description": "With Frutazon's Defense Concoction, we use a mixture of fruits and cereals in proportionate amount to boost your defense system and build immunity. \n Apple + Papaya + Pineapple + Grapes + Strawberry ",
        "images": "images/defence.jpeg"
    },
    {
        "productName": "Radiance",
        "price": 150,
        "description": "The Frutazon's Radiance Concoction uses a mixture of fruits and veggies in a proportionate amount to help purify skin, cellulite, acne scars and keep it young. Orange + Pineapple + Papaya + Muskmelon + Carrot",
        "images": "images/orange.jpeg"
    },
    {
        "productName": "BoneVita Concoction",
        "price": 150,
        "description": "With Frutazon's BoneVita Concoction, we use a mixture of fruits and veggies in a proportionate amount to strengthen bones, making them keep calcium and other vitamins locked in for long, keeping you Bone-strong refreshed. ",
        "images": "images/endurance.jpeg"
    },
    {
        "productName": "Subscription4",
        "price": 630,
        "description": "Frutazon offers subscription packs that are available for 1 week in which 4 bottles of our delicious smoothies and juices are delivered to your doorstep.",
        "images": "images/pack4.jpeg"
    },
    {
        "productName": "Subscription6",
        "price": 945,
        "description": "Frutazon offers subscription packs that are available for 1 week in which 6 bottles of our delicious smoothies and juices are delivered to your doorstep.",
        "images": "images/pack5.jpeg"
    },
    {
        "productName": "Subscription7",
        "price": 1080,
        "description": "Frutazon offers subscription packs that are available for 1 week in which 7 bottles of our delicious smoothies and juices are delivered to your doorstep.",
        "images": "images/pack5.jpeg"
    },
    {
        "productName": "valuepack4",
        "price": 559,
        "description": "We offer value packs wherein you can opt for 4 bottles of our juices at once and enjoy the health benefits and pamper your taste buds with awe.",
        "images": "images/pack4.jpeg"
    },
    {
        "productName": "valuepack5",
        "price": 659,
        "description": "We offer value packs wherein you can opt for 5 bottles of our juices at once and enjoy the health benefits and pamper your taste buds with awe.",
        "images": "images/pack5.jpeg"
    },
   
    {
        "productName": "valuepack8",
        "price": 1020,
        "description": "We offer value packs wherein you can opt for 8 bottles of our juices at once and enjoy the health benefits and pamper your taste buds with awe.",
        "images": "images/pack8.jpeg"
    }
  ]
  
  displayProducts(products)
  function displayProducts(products) {
      main.innerHTML = ""
      products.forEach((product) => {
  
          const divEle = document.createElement('div');
       
          divEle.innerHTML = `
          <div class="col">
       <div class="card h-100 product " >
     <img src="${product.images}" class="card-img-top" alt="img">
         
           <div class="card-body">
             <h5 class="card-title">${product.productName}</h5>
             <p class="card-text"> Rs.${product.price}</p>
             <p class="card-text"> ${product.description}</p>
             <input type="number" class="form-control " placeholder="Quantity" aria-label="quantity"><br>
             <button class="btn btn-success" type="button" > Add to cart </button>
           </div>
        
       </div>
     </div>
  
     
  `;
  
          main.appendChild(divEle);
  
      });
  
  }