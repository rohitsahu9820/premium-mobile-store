document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("product-list");

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" loading="lazy" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <strong>₹${p.price}</strong>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;

    list.appendChild(card);
  });
});
