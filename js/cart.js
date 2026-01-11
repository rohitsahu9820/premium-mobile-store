let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addItem(id){
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function loadCart(){
  let total = 0;
  document.getElementById("cart-items").innerHTML = "";
  cart.forEach(id=>{
    let p = products.find(x=>x.id===id);
    total += p.price;
    document.getElementById("cart-items").innerHTML += `<p>${p.name}</p>`;
  });
  document.getElementById("total").innerText = total;
}

loadCart();
