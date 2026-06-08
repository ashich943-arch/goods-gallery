// ============================================================
//  CELLO STORE – HOMEPAGE JS
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderDeals();
  startCountdown();
});

function renderFeatured() {
  const grid = document.getElementById("featured-products");
  if (!grid) return;
  const featured = PRODUCTS.slice(0, 6);
  grid.innerHTML = featured.map(buildCard).join("");
}

function renderDeals() {
  const container = document.getElementById("deal-products");
  if (!container) return;
  const deals = PRODUCTS.slice(0, 4);
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
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) return;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById("days").textContent = String(d).padStart(2,"0");
    document.getElementById("hours").textContent = String(h).padStart(2,"0");
    document.getElementById("minutes").textContent = String(m).padStart(2,"0");
    document.getElementById("seconds").textContent = String(s).padStart(2,"0");
  }
  tick();
  setInterval(tick, 1000);
}
