function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value || "assets/images/default.png";

  if (!name || !price) {
    alert("Please fill all required fields");
    return;
  }

  const product = {
    id: Date.now(),
    name,
    price,
    image
  };

  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product Added Successfully!");
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
}
