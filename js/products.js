document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const products = JSON.parse(localStorage.getItem("products")) || [];

  if (products.length === 0) {
    grid.innerHTML = "<p>No products available</p>";
    return;
  }

  grid.innerHTML = "";
  products.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
});
