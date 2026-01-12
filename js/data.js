// Sample product data (ONLY ONE PRODUCT)

const products = [
  {
    id: 1,
    name: "Premium Silicone Mobile Case",
    price: 499,
    image: "assets/sample-product.jpg",
    description: "High-quality premium silicone case with shock protection."
  }
];

// Cart data (persistent)
let cart = JSON.parse(localStorage.getItem("cart")) || [];
