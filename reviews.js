// ============================================================
//  GOODS GALLARRY – PRODUCT REVIEWS SYSTEM
// ============================================================
const REVIEWS_KEY = 'gg_reviews';

function getReviews(productId) {
  const all = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
  return all[productId] || [];
}

function saveReview(productId, review) {
  const all = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
  if (!all[productId]) all[productId] = [];
  all[productId].unshift({ ...review, date: new Date().toLocaleDateString('en-GB'), id: Date.now() });
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
}

function getAvgRating(productId) {
  const reviews = getReviews(productId);
  if (!reviews.length) return null;
  return (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
}

function renderStarInput(containerId, inputId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let selected = 0;
  container.innerHTML = [1,2,3,4,5].map(i => `
    <span class="star-input" data-val="${i}" onclick="setReviewStar(${i},'${inputId}')" 
      onmouseover="hoverStar(${i},'${containerId}')" onmouseout="resetStars('${containerId}',${selected})">★</span>
  `).join('');
  document.getElementById(inputId).value = 0;

  window.setReviewStar = (val, id) => {
    selected = val;
    document.getElementById(id).value = val;
    resetStars(containerId, val);
  };
  window.hoverStar = (val, cid) => {
    document.querySelectorAll(`#${cid} .star-input`).forEach((s, i) => {
      s.style.color = i < val ? '#f5c518' : '#374151';
    });
  };
  window.resetStars = (cid, val) => {
    document.querySelectorAll(`#${cid} .star-input`).forEach((s, i) => {
      s.style.color = i < val ? '#f5c518' : '#374151';
    });
  };
}

function renderReviews(productId, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const reviews = getReviews(productId);
  const avg = getAvgRating(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  const baseRating = product ? product.rating : 4.5;
  const baseReviews = product ? product.reviews : 0;

  container.innerHTML = `
    <div class="reviews-section">
      <div class="reviews-header">
        <div class="reviews-summary">
          <div class="reviews-avg-score">${avg || baseRating}</div>
          <div>
            <div class="reviews-stars">${renderStarsHTML(parseFloat(avg || baseRating))}</div>
            <div class="reviews-count">${reviews.length + baseReviews} reviews</div>
          </div>
        </div>
        <button class="btn-write-review" onclick="toggleReviewForm('${productId}')">✍️ Write a Review</button>
      </div>

      <!-- Review Form -->
      <div class="review-form-wrap" id="review-form-${productId}" style="display:none">
        <h3>Write Your Review</h3>
        <div class="form-group">
          <label>Your Name</label>
          <input type="text" id="rv-name-${productId}" placeholder="John S." maxlength="40"/>
        </div>
        <div class="form-group">
          <label>Rating *</label>
          <div id="star-input-${productId}" class="star-input-wrap"></div>
          <input type="hidden" id="rv-rating-${productId}" value="0"/>
        </div>
        <div class="form-group">
          <label>Review Title</label>
          <input type="text" id="rv-title-${productId}" placeholder="Great product!" maxlength="60"/>
        </div>
        <div class="form-group">
          <label>Your Review *</label>
          <textarea id="rv-body-${productId}" rows="3" placeholder="Tell others what you think..." maxlength="500"></textarea>
        </div>
        <div class="review-form-btns">
          <button class="btn-primary" onclick="submitReview('${productId}')">Submit Review</button>
          <button class="btn-secondary" onclick="toggleReviewForm('${productId}')">Cancel</button>
        </div>
      </div>

      <!-- Reviews List -->
      <div class="reviews-list">
        ${reviews.length === 0 ? '<p class="no-reviews">No reviews yet — be the first to review this product!</p>' :
          reviews.map(r => `
            <div class="review-item">
              <div class="review-top">
                <span class="reviewer-name">${r.name || 'Anonymous'}</span>
                <span class="review-stars">${renderStarsHTML(r.rating)}</span>
                <span class="review-date">${r.date}</span>
              </div>
              ${r.title ? `<p class="review-title">${r.title}</p>` : ''}
              <p class="review-body">${r.body}</p>
            </div>
          `).join('')
        }
      </div>
    </div>`;

  renderStarInput(`star-input-${productId}`, `rv-rating-${productId}`);
}

function renderStarsHTML(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) s += '<span style="color:#f5c518">★</span>';
    else if (i - rating < 1) s += '<span style="color:#f5c518">½</span>';
    else s += '<span style="color:#374151">★</span>';
  }
  return s;
}

function toggleReviewForm(productId) {
  const form = document.getElementById(`review-form-${productId}`);
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function submitReview(productId) {
  const name   = document.getElementById(`rv-name-${productId}`).value.trim();
  const rating = parseInt(document.getElementById(`rv-rating-${productId}`).value);
  const title  = document.getElementById(`rv-title-${productId}`).value.trim();
  const body   = document.getElementById(`rv-body-${productId}`).value.trim();

  if (!rating) { alert('Please select a star rating!'); return; }
  if (!body)   { alert('Please write your review!'); return; }

  saveReview(productId, { name: name || 'Anonymous', rating, title, body });
  renderReviews(productId, `reviews-container-${productId}`);
  alert('✅ Thank you for your review!');
}
