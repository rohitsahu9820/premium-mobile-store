const products = [
  {id:1, name:"Luxury Leather Case", price:1499},
  {id:2, name:"Shockproof Silicone Case", price:999}
];

const list = document.getElementById("product-list");

products.forEach(p => {
  list.innerHTML += `
    <div class="card">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addItem(${p.id})">Add to Cart</button>
    </div>`;
});
