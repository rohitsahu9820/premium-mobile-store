let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item
function addToCart(id) {
  cart.push(id);
  saveCart();
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

// Save + refresh
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  if (typeof renderCart === "function") renderCart();
}

// Update cart count
function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.innerText = cart.length;
}

updateCartCount();
