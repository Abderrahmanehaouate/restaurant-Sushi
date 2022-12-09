// cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// cart working js
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//making function
function ready() {
  // quantity changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  //add  to cart
  var addCart = document.getElementsByClassName("add-cart");
  for (let i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", ajoutCartClick);
  }
}


//qunatite changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
function alretM(){
  alert("YOUR COMAMND  SUCCESS");
}


// add to card
function ajoutCartClick(event) {
  var button = event.target;
  var shopProducts = button.parentElement.parentElement;
  var title =
    shopProducts.parentElement.getElementsByClassName("product-title")[0]
      .innerText;
  var price = parseFloat(
    shopProducts.getElementsByClassName("price")[0].innerText
  );
  var img =
    shopProducts.parentElement.parentElement.parentElement.getElementsByClassName(
      "p-img"
    )[0].src;
  addToCart(title, price, img);
  updatetotal();
}

function addToCart(title, price, img) {
  let cart = document.getElementsByClassName("cart-content")[0];
  let item = document.createElement("div");
  let box = `
    <div class="cart-box">
              <img src="${img}" alt="" class="cart-img" />
              <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}$</div>
                <input type="number" value="1" class="cart-quantity">
              </div>
    </div>
    `;
  item.innerHTML = box;
  cart.append(item);
  updatetotal();
  ready();
}

//Update Total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = document.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total += price * quantity;
  }
  document.getElementsByClassName("total-price")[0].innerHTML = "$" + total;
}

// select code

document.getElementById("select-menu").addEventListener("change", function (e) {
  document.querySelectorAll(".package").forEach(function (item) {
    if (item.classList.contains(e.target.value)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
});
