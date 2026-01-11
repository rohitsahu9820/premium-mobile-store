let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  document.getElementById("cart-count").innerText = cart.length;
}
updateCartCount();
