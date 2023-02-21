let cart = [];
let Item = {};
index=0;

let buttons = document.querySelectorAll(".buy-product");
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const quantity = event.target.previousElementSibling.value;
    const price = event.target.dataset.price;
    const name = event.target.dataset.name;
    index++;
    Item = { name: name, price: price, quantity: quantity ,itemNum:index};
    cart.push(Item);

    let intial=[];
    try {
      intial=JSON.parse(localStorage.getItem("cart"))||[];
    } catch (error) {
      intial=[];
    };
    localStorage.setItem("cart",JSON.stringify(intial.concat(cart)));
    console.log(cart);
  });
});

function add(){
    var update=JSON.parse(localStorage.getItem("cart"));
    update.forEach(function(Item){
        console.log(works);

    const itembox=document.createElement("p");
    itembox.id="newElement";
    
    const Itemname = document.createElement("p");
    Itemname.id="newElement";
    div.innerHTML=Item.name;

    var ItemQuantity = document.createElement("p");
    ItemQuantity.id="newElement";
    ItemQuantity.textContent = Item.quantity;
  
    var ItemPrice = document.createElement("p");
    ItemPrice.id="newElement";
    ItemPrice.textContent = Item.price;

    var removeItem=document.createElement("button");
    removeItem.setAttribute("data-price", Item.price);
    removeItem.setAttribute("data-quantity", Item.quantity);
    removeItem.setAttribute("data-indexnum", Item.index);
    removeItem.id="Remove";
  
    var container = document.getElementById("#cart-items");
    itembox.appendChild(Itemname);
    itembox.appendChild(ItemQuantity);
    itembox.appendChild(ItemPrice);
    itembox.appendChild(removeItem);
    container.appendChild(itembox);
})
};

