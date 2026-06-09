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
        <span class="logo-text">Goods<span class="logo-accent">Gallarry</span></span>
      </a>
      <div class="search-bar">
        <input type="text" id="global-search" placeholder="Search for products..." />
        <button onclick="globalSearch()">🔍 Search</button>
      </div>
      <div class="header-actions">
        <a href="javascript:void(0)" class="icon-btn account-btn">👤 Account</a>
      <a href="wishlist.html" class="icon-btn wishlist-nav-btn" title="My Wishlist">
        🤍 <span class="wishlist-count" style="display:none;background:#ef4444;color:white;border-radius:50%;width:18px;height:18px;font-size:0.7rem;font-weight:700;align-items:center;justify-content:center;margin-left:2px;">0</span>
      </a>
        <a href="javascript:void(0)" class="icon-btn cart-btn" onclick="toggleCart()">
          🛒 Cart <span class="cart-count" id="cart-count">0</span>
        </a>
      </div>
    </div>
    <nav class="nav">
      <a href="products.html" class="${activePage==='products'?'active':''}">Shop All</a>
      <a href="electronics.html" class="${activePage==='electronics'?'active':''}">Electronics</a>
      <a href="offers.html" class="${activePage==='offers'?'active':''}">Offers</a>
      <a href="products.html?cat=vitamins" class="${activePage==='vitamins'?'active':''}">Vitamins</a>
      <a href="products.html?cat=sports" class="${activePage==='sports'?'active':''}">Sports</a>
      <a href="products.html?cat=perfume" class="${activePage==='perfume'?'active':''}">Perfume</a>
      <a href="products.html?cat=pet" class="${activePage==='pet'?'active':''}">Pet</a>
      <a href="products.html?cat=home" class="${activePage==='home'?'active':''}">Home</a>
      <a href="products.html?cat=grocery" class="${activePage==='grocery'?'active':''}">Grocery</a>
      <a href="products.html?cat=stationery" class="${activePage==='stationery'?'active':''}">Stationery</a>
      <a href="products.html?cat=garden" class="${activePage==='garden'?'active':''}">Garden</a>
      <a href="contact.html" class="${activePage==='contact'?'active':''}">Contact</a>
      <span class="nav-divider">|</span>
      <a href="faq.html" class="${activePage==='faq'?'active':''}">FAQs</a>
      <a href="about.html" class="${activePage==='about'?'active':''}">About Us</a>
      <a href="order-tracking.html" class="${activePage==='tracking'?'active':''}">Track Order</a>
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
      <a href="checkout.html" class="btn-checkout" style="display:block;text-align:center;text-decoration:none;">✅ Proceed to Checkout</a>
      <button class="btn-whatsapp-order" onclick="orderOnWhatsApp(cart, cart.reduce((s,i)=>s+i.qty*i.price,0))">💬 Quick Order via WhatsApp</button>
      <button class="btn-clear" onclick="clearCart()">Clear Cart</button>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

// Header scroll shadow
window.addEventListener('scroll', () => {
  const h = document.querySelector('.header');
  if (h) h.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

function globalSearch() {
  const q = document.getElementById('global-search')?.value?.trim();
  if (q) window.location.href = `products.html?search=${encodeURIComponent(q)}`;
}
