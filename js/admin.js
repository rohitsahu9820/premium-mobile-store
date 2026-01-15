function addProduct() {
  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value.trim();
  const image = document.getElementById("image").value.trim() || "assets/images/default.png";

  if (!name || !price) {
    alert("Please fill all fields");
    return;
  }

  const product = {
    id: Date.now(),
    name: name,
    price: price,
    image: image
  };

  let products = JSON.parse(localStorage.getItem("products"));
  if (!Array.isArray(products)) {
    products = [];
  }

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product added!");

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
}
