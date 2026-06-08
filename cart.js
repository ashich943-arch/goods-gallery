// ============================================================
//  CELLO STORE – CART LOGIC
// ============================================================
let cart = JSON.parse(localStorage.getItem("cello_cart") || "[]");

function saveCart() {
  localStorage.setItem("cello_cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: productId, name: product.name, price: product.price, image: product.image, qty: 1 });
  }
  saveCart();
  renderCart();
  // show cart
  document.getElementById("cart-sidebar").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
  // animate button
  const btns = document.querySelectorAll(`[onclick="addToCart(${productId})"]`);
  btns.forEach(btn => {
    btn.textContent = "✓ Added!";
    btn.style.background = "#22c55e";
    setTimeout(() => {
      btn.textContent = "🛒 Add to Cart";
      btn.style.background = "";
    }, 1500);
  });
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else { saveCart(); renderCart(); }
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const footer = document.getElementById("cart-footer");
  const countEl = document.getElementById("cart-count");
  const totalEl = document.getElementById("cart-total");
  if (!container) return;

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.qty * i.price, 0);

  countEl.textContent = totalQty;

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">🛒 Your cart is empty</div>';
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";
  totalEl.textContent = formatPrice(totalPrice);

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
        <div class="qty-ctrl">
          <button onclick="changeQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join("");
}

function toggleCart() {
  const sidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("cart-overlay");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("open");
}

// Init on page load
document.addEventListener("DOMContentLoaded", renderCart);
