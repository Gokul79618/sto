// Product data
const products = [
  { id: 1, name: "T-Shirt", price: 15.99, image: "https://via.placeholder.com/200x150" },
  { id: 2, name: "Sneakers", price: 49.99, image: "https://via.placeholder.com/200x150" },
  { id: 3, name: "Hat", price: 9.99, image: "https://via.placeholder.com/200x150" },
  { id: 4, name: "Jeans", price: 39.99, image: "https://via.placeholder.com/200x150" }
];

// DOM elements
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

let total = 0;

// Render all products
function renderProducts() {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Add product to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const li = document.createElement("li");
  li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
  cartItems.appendChild(li);

  total += product.price;
  totalDisplay.textContent = total.toFixed(2);
}

// Initialize
renderProducts();
