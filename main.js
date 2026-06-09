// ============================================================
//  GOODS GALLARRY – HOMEPAGE JS
// ============================================================
// ── Header scroll shadow ──
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderDeals();
  startCountdown();
});

function renderFeatured() {
  const grid = document.getElementById("featured-products");
  if (!grid) return;

  // Mix of electronics + new categories
  const featuredIds = [1, 4, 8, 13, 17, 21, 24, 30, 35, 41, 46, 48];
  const featured = featuredIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  grid.innerHTML = featured.map(buildCard).join("");
  if (typeof updateWishlistButtons === 'function') updateWishlistButtons();
}

function renderDeals() {
  const container = document.getElementById("deal-products");
  if (!container) return;

  // Deal products: Headphones, Laptop, Vitamins, Sports Protein
  const dealIds = [1, 8, 13, 17];
  const deals = dealIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

  container.innerHTML = deals.map(p => `
    <div class="deal-product-card">
      <img src="${p.image}" alt="${p.name}" />
      <div class="deal-product-info">
        <p class="card-brand">${p.brand}</p>
        <p class="deal-product-name">${p.name}</p>
        <div class="card-prices">
          <span class="price-new">${formatPrice(p.price)}</span>
          <span class="price-old">${formatPrice(p.oldPrice)}</span>
        </div>
        <button class="btn-add-cart" onclick="addToCart(${p.id})" style="margin-top:0.5rem;font-size:0.78rem;padding:0.35rem 0.7rem">Add to Cart</button>
      </div>
    </div>
  `).join("");
}

function startCountdown() {
  const end = new Date();
  end.setDate(end.getDate() + 3);
  end.setHours(end.getHours() + 5);

  function tick() {
    const diff = end - new Date();
    if (diff <= 0) return;
    document.getElementById("days").textContent    = String(Math.floor(diff/86400000)).padStart(2,"0");
    document.getElementById("hours").textContent   = String(Math.floor((diff%86400000)/3600000)).padStart(2,"0");
    document.getElementById("minutes").textContent = String(Math.floor((diff%3600000)/60000)).padStart(2,"0");
    document.getElementById("seconds").textContent = String(Math.floor((diff%60000)/1000)).padStart(2,"0");
  }
  tick();
  setInterval(tick, 1000);
}
