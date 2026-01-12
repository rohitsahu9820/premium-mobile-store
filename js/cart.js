function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.innerText = cart.length;
}

updateCartCount();
