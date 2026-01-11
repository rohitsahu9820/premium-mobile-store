const list = document.getElementById("product-list");

products.forEach(p => {
  list.innerHTML += `
    <div class="product-card">
      <img src="${p.image}" loading="lazy">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <strong>₹${p.price}</strong>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `;
});
