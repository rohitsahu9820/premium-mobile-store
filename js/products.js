document.addEventListener("DOMContentLoaded", () => {

  const productGrid = document.getElementById("productGrid");

  if (!productGrid) {
    console.error("productGrid not found");
    return;
  }

  const products = JSON.parse(localStorage.getItem("products")) || [];

  if (products.length === 0) {
    productGrid.innerHTML = "<p style='text-align:center;'>No products available</p>";
    return;
  }

  productGrid.innerHTML = "";

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

});
