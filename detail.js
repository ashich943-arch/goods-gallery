// ============================================================
//  CELLO STORE – PRODUCT DETAIL PAGE JS
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    document.getElementById("product-detail").innerHTML = `<div class="loading">Product not found. <a href="products.html">Go back</a></div>`;
    return;
  }

  document.title = `${product.name} – Cello`;
  document.getElementById("breadcrumb-name").textContent = product.name;

  let selectedColor = product.colors?.[0] || null;
  let activeImg = 0;
  const imgs = product.images || [product.image];

  function render() {
    document.getElementById("product-detail").innerHTML = `
      <div class="detail-gallery">
        <div class="thumb-list">
          ${imgs.map((src, i) => `
            <img src="${src}" class="thumb ${i === activeImg ? 'active' : ''}" onclick="setImg(${i})" alt="View ${i+1}" />
          `).join("")}
        </div>
        <div class="main-img-wrap">
          <img src="${imgs[activeImg]}" id="main-img" class="main-img" alt="${product.name}" />
        </div>
      </div>
      <div class="detail-info">
        <p class="card-brand">${product.brand}</p>
        <h1 class="detail-name">${product.name}</h1>
        <div class="detail-rating">${starHTML(product.rating)} &nbsp; ${product.rating}/5</div>
        ${product.badge ? `<span class="badge${product.badge === 'New' ? ' badge-new' : ''}">${product.badge}</span>` : ""}
        <div class="detail-prices">
          <span class="price-new">${formatPrice(product.price)}</span>
          <span class="price-old">${formatPrice(product.oldPrice)}</span>
          <span class="save-tag">Save ${formatPrice(product.oldPrice - product.price)}</span>
        </div>
        <p class="detail-desc">${product.description}</p>
        ${product.colors ? `
          <div class="detail-colors">
            <p><strong>Color:</strong></p>
            <div class="color-dots large">
              ${product.colors.map(c => `
                <span class="dot ${selectedColor === c ? 'selected' : ''}" style="background:${c}" onclick="selectColor('${c}')"></span>
              `).join("")}
            </div>
          </div>
        ` : ""}
        ${product.features ? `
          <div class="detail-features">
            <p><strong>Key Features:</strong></p>
            <ul>${product.features.map(f => `<li>✓ ${f}</li>`).join("")}</ul>
          </div>
        ` : ""}
        <div class="detail-actions">
          <div class="qty-input">
            <button onclick="detailQty(-1)">−</button>
            <span id="detail-qty">1</span>
            <button onclick="detailQty(1)">+</button>
          </div>
          <button class="btn-primary btn-big" onclick="detailAddCart(${product.id})">🛒 Add to Cart</button>
          <button class="btn-whatsapp-buy" onclick="buyNowWhatsApp(${product.id})">💬 Buy via WhatsApp</button>
        </div>
        <div class="detail-badges">
          <span>🚚 Free Delivery on orders above £50</span>
          <span>↩️ 7-day easy return</span>
          <span>✅ 100% Original Product</span>
        </div>
      </div>
    `;
  }

  render();

  window.setImg = function(i) {
    activeImg = i;
    document.getElementById("main-img").src = imgs[i];
    document.querySelectorAll(".thumb").forEach((t,idx) => t.classList.toggle("active", idx===i));
  };

  window.selectColor = function(c) {
    selectedColor = c;
    document.querySelectorAll(".dot.large, .detail-colors .dot").forEach(d => d.classList.remove("selected"));
    document.querySelectorAll(".detail-colors .dot").forEach(d => {
      if (d.style.background === c || d.style.backgroundColor === c) d.classList.add("selected");
    });
  };

  let qty = 1;
  window.detailQty = function(delta) {
    qty = Math.max(1, qty + delta);
    document.getElementById("detail-qty").textContent = qty;
  };

  window.buyNowWhatsApp = function(pid) {
    const product = PRODUCTS.find(p => p.id === pid);
    if (!product) return;
    const msg = "Hello Goods Gallarry! 👋\n\nI want to order:\n• " + product.name + " x" + qty + " = " + formatPrice(product.price * qty) + "\n\nPlease confirm. Thank you!";
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
  };

  window.detailAddCart = function(pid) {
    for (let i = 0; i < qty; i++) addToCart(pid);
    document.getElementById("cart-sidebar").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
  };

  // Related products
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0,4);
  const relGrid = document.getElementById("related-products");
  if (related.length > 0) {
    relGrid.innerHTML = related.map(buildCard).join("");
  } else {
    document.querySelector(".related-section").style.display = "none";
  }
});
