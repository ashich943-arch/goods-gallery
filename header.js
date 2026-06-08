// Shared header injector
function injectHeader(activePage) {
  const nav = `
  <div class="topbar">
    <div class="topbar-scroll">
      <span>🚚 Free Shipping Worldwide When Order Above $500</span>
      <span>🚚 Free Shipping Worldwide When Order Above $500</span>
      <span>🚚 Free Shipping Worldwide When Order Above $500</span>
      <span>🚚 Free Shipping Worldwide When Order Above $500</span>
    </div>
  </div>
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo-wrap">
        <span class="logo-text">Goods<span class="logo-accent">Gallery</span></span>
      </a>
      <div class="search-bar">
        <input type="text" id="global-search" placeholder="Search for products..." />
        <button onclick="globalSearch()">🔍 Search</button>
      </div>
      <div class="header-actions">
        <a href="javascript:void(0)" class="icon-btn account-btn">👤 Account</a>
        <a href="javascript:void(0)" class="icon-btn cart-btn" onclick="toggleCart()">
          🛒 Cart <span class="cart-count" id="cart-count">0</span>
        </a>
      </div>
    </div>
    <nav class="nav">
      <a href="products.html" class="${activePage==='products'?'active':''}">Shop All</a>
      <a href="electronics.html" class="${activePage==='electronics'?'active':''}">Electronics</a>
      <a href="offers.html" class="${activePage==='offers'?'active':''}">Offers</a>
      <a href="contact.html" class="${activePage==='contact'?'active':''}">Contact</a>
      <span class="nav-divider">|</span>
      <a href="products.html">All Collections</a>
      <a href="faq.html" class="${activePage==='faq'?'active':''}">FAQs</a>
      <a href="about.html" class="${activePage==='about'?'active':''}">About Us</a>
    </nav>
  </header>
  <!-- CART SIDEBAR -->
  <div class="cart-overlay" id="cart-overlay" onclick="toggleCart()"></div>
  <div class="cart-sidebar" id="cart-sidebar">
    <div class="cart-header">
      <h2>Your Cart 🛒</h2>
      <button class="close-cart" onclick="toggleCart()">✕</button>
    </div>
    <div class="cart-items" id="cart-items">
      <div class="cart-empty">Your cart is empty</div>
    </div>
    <div class="cart-footer" id="cart-footer" style="display:none">
      <div class="cart-total">Total: <span id="cart-total">£0.00</span></div>
      <button class="btn-checkout">Proceed to Checkout</button>
      <button class="btn-clear" onclick="clearCart()">Clear Cart</button>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

function globalSearch() {
  const q = document.getElementById('global-search')?.value?.trim();
  if (q) window.location.href = `products.html?search=${encodeURIComponent(q)}`;
}
