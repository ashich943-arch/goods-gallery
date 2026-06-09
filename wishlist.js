// ============================================================
//  GOODS GALLARRY – WISHLIST SYSTEM
// ============================================================
const WISHLIST_KEY = 'gg_wishlist';

function getWishlist() {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
}

function toggleWishlist(productId) {
  let list = getWishlist();
  const idx = list.indexOf(productId);
  if (idx > -1) {
    list.splice(idx, 1);
    showWishlistToast('Removed from Wishlist');
  } else {
    list.push(productId);
    showWishlistToast('Added to Wishlist ❤️');
  }
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  updateWishlistButtons();
  updateWishlistCount();
}

function isWishlisted(productId) {
  return getWishlist().includes(productId);
}

function updateWishlistButtons() {
  document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    const id = parseInt(btn.getAttribute('data-wishlist-id'));
    btn.classList.toggle('wishlisted', isWishlisted(id));
    btn.innerHTML = isWishlisted(id) ? '❤️' : '🤍';
    btn.title = isWishlisted(id) ? 'Remove from Wishlist' : 'Add to Wishlist';
  });
}

function updateWishlistCount() {
  const count = getWishlist().length;
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function showWishlistToast(msg) {
  let toast = document.getElementById('wishlist-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'wishlist-toast';
    toast.className = 'wishlist-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// Wishlist Page Render
function renderWishlistPage() {
  const container = document.getElementById('wishlist-products');
  if (!container) return;
  const list = getWishlist();
  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-wishlist">
        <div style="font-size:3rem;margin-bottom:1rem;">🤍</div>
        <h2>Your wishlist is empty</h2>
        <p>Save products you love for later!</p>
        <a href="products.html" class="btn-primary" style="margin-top:1rem;display:inline-block;">Browse Products</a>
      </div>`;
    return;
  }
  const products = list.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  container.innerHTML = products.map(buildCard).join('');
  updateWishlistButtons();
}

document.addEventListener('DOMContentLoaded', () => {
  updateWishlistButtons();
  updateWishlistCount();
  renderWishlistPage();
});
