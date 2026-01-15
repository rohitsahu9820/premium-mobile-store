const productGrid = document.getElementById("productGrid");
const products = JSON.parse(localStorage.getItem("products")) || [];

if (products.length === 0) {
  productGrid.innerHTML = "<p>No products available</p>";
} else {
  products.forEach(product => {
    productGrid.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });
}
