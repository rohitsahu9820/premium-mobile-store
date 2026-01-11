document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("home-products");

  // Show only first 3 products on home
  products.slice(0, 3).forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" loading="lazy" alt="${p.name}">
      <h3>${p.name}</h3>
      <strong>₹${p.price}</strong>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;

    container.appendChild(card);
  });
});
