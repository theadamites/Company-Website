let cart = [];
let index = 0;


const products = {
    acids: [
      {
        id: "Sulfuric Acid",
        name: "Sulfuric Acid",
        price: 21.99,
        quantity: 1,
      },
      {
        id: "Nitric Acid",
        name: "Nitric Acid",
        price: 24.99,
        quantity: 1,
      },
      {
        id: "Phosphoric Acid",
        name: "Phosphoric Acid",
        price: 59.99,
        quantity: 1,
      },
    ],
    bases: [
      {
        id: "Sodium Hydroxide",
        name: "Sodium Hydroxide",
        price: 9.99,
        quantity: 1,
      },
      {
        id: "Potassium Hydroxide",
        name: "Potassium Hydroxide",
        price: 4.99,
        quantity: 1,
      },
      {
        id: "Calcium Hydroxide",
        name: "Calcium Hydroxide",
        price: 29.99,
        quantity: 1,
      },
    ],
    solvents: [
      {
        id: "Ethanol",
        name: "Ethanol",
        price: 3.99,
        quantity: 1,
      },
      {
        id: "Isopropanol",
        name: "Isopropanol",
        price: 99.99,
        quantity: 1,
      },
      {
        id: "Acetone",
        name: "Acetone",
        price: 29.99,
        quantity: 1,
      },
    ],
    catalysts: [
      {
        id: "Platinum",
        name: "Platinum",
        price: 149.99,
        quantity: 1,
      },
      {
        id: "Palladium",
        name: "Palladium",
        price: 199.99,
        quantity: 1,
      },
      {
        id: "Rhodium",
        name: "Rhodium",
        price: 249.99,
        quantity: 1,
      },
    ],
    equipment: [
      {
        id: "Bunsen Burner",
        name: "Bunsen Burner",
        price: 34.99,
        quantity: 1,
      },
      {
        id: "Glass Beaker",
        name: "Glass Beaker",
        price: 14.99,
        quantity: 1,
      },
      {
        id: "Erlenmeyer Flask",
        name: "Erlenmeyer Flask",
        price: 19.99,
        quantity: 1,
      },
    ],
  };
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const productsContainer = document.querySelector('#products');
const store=document.getElementById("store");
const cartpage=document.getElementById("cart");

store.addEventListener("click", function(){

    cartpagebody=document.getElementById("products");
    while (cartpagebody.firstChild) {
        cartpagebody.removeChild(cartpagebody.firstChild);
    };

Object.keys(products).forEach(category => {
  // Create a heading for the category
  const categoryHeading = document.createElement('h2');
  categoryHeading.textContent = category;

  // Append the heading to the products container
  productsContainer.appendChild(categoryHeading); 

  // Loop through each product in the category array and create HTML elements for each
  products[category].forEach(product => {
    // Create a div to hold the product information
    const productDiv = document.createElement('div');

    // Create HTML elements for the product name, price, quantity, and button
    const nameElement = document.createElement('h3');
    nameElement.textContent = product.name;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: $${product.price}`;

    const quantityElement = document.createElement('input');
    quantityElement.type = 'number';
    quantityElement.min = 1;
    quantityElement.value = product.quantity;

    const buttonElement = document.createElement('button');
    buttonElement.id="buy-button";
    buttonElement.setAttribute("data-price", parseFloat(product.price).toFixed(2));
    buttonElement.setAttribute("data-quantity", parseInt(product.quantity));
    buttonElement.setAttribute("data-indexnum", index);
    buttonElement.setAttribute("data-name",  product.name);
    buttonElement.textContent = 'Add to Cart';

    // Append the product information to the product div
    productDiv.appendChild(nameElement);
    productDiv.appendChild(priceElement);
    productDiv.appendChild(quantityElement);
    productDiv.appendChild(buttonElement);

    // Append the product div to the products container
    productsContainer.appendChild(productDiv);
  });
});




// add items to cart
const buttons = document.querySelectorAll("#buy-button");
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {

    event.target.dataset.quantity = parseInt(event.target.previousElementSibling.value);

    const quantity = event.target.previousElementSibling.value;
    const price = event.target.dataset.price;
    const name = event.target.dataset.name;

    index++;
    let item = { name: name, price: price, quantity: quantity, itemNum: index };
    cart.push(item);
    totalItems += parseInt(quantity);
    totalPrice += quantity * price;

    
  });
});


});




////////////////////////////////////
let totalItems=0;
let totalPrice=0;

cartpage.addEventListener("click", function displayCartItems(){

      // Calculate total items and price
  totalItems = 0;
  totalPrice = 0;
  cart.forEach(item => {
    totalItems += parseInt(item.quantity);
    totalPrice += parseFloat(item.price) * parseInt(item.quantity);
  });

   
cartpagebody=document.getElementById("products");
while (cartpagebody.firstChild) {
    cartpagebody.removeChild(cartpagebody.firstChild);
};
/////////////////




  // Display cart items
  cart.forEach(item => {
    
    const itemDiv = document.createElement('div');

    // Create HTML elements for the item name, quantity, price, and remove button
    const nameElement = document.createElement('h3');
    nameElement.textContent = item.name;

    const quantityElement = document.createElement('p');
    quantityElement.textContent = `Quantity: ${item.quantity}`;

    const priceElement = document.createElement('p');
    const totalPrice = item.price * item.quantity;
    priceElement.textContent = `Price: $${totalPrice.toFixed(2)}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Item';
    removeButton.setAttribute("data-price", parseFloat(item.price).toFixed(2));
    removeButton.setAttribute("data-quantity", parseInt(item.quantity));



    removeButton.addEventListener('click', function(event) {
      cart = cart.filter(cartItem => cartItem.itemNum !== item.itemNum);
      
      const cartItemElement = event.target.parentNode;
      cartItemElement.remove();

      //totalItems -= parseFloat(event.target.dataset.quantity);
      //totalPrice -= event.target.dataset.price * event.target.dataset.quantity;

      displayCartItems();
    });



    // Append the item information to the item div
    itemDiv.appendChild(nameElement);
    itemDiv.appendChild(quantityElement);
    itemDiv.appendChild(priceElement);
    itemDiv.appendChild(removeButton);

    // Append the item div to the cart items container
    cartpagebody.appendChild(itemDiv);
  });

  // Display total price and total items
  const totalPriceElement = document.createElement('p');
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  const totalItemsElement = document.createElement('p');
  totalItemsElement.textContent = `Total Items: ${totalItems}`;

  // Append total price and total items to the cart container
  cartpagebody.appendChild(totalPriceElement);
  cartpagebody.appendChild(totalItemsElement);
});




    







