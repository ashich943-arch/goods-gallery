// ============================================================
//  GOODS GALLARRY — HERO SLIDER
// ============================================================
const SLIDES = [
  {
    tag:     "Welcome to Goods Gallarry",
    title:   "Your Ultimate<br/><span>UK Shopping</span><br/>Destination",
    sub:     "Electronics, Health, Home, Beauty & More — All in One Place",
    btn1:    { text: "Shop All →", link: "products.html" },
    btn2:    { text: "View Deals →", link: "offers.html" },
    image:   "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=90",
    // Shopping bags / general store
  },
  {
    tag:     "Electronics",
    title:   "Latest Gadgets<br/><span>& Electronics</span>",
    sub:     "Phones, Laptops, Headphones, Tablets — Top Brands, Best Prices",
    btn1:    { text: "Shop Electronics →", link: "electronics.html" },
    btn2:    { text: "View Offers →", link: "offers.html" },
    image:   "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=900&q=90",
    // Electronics flat lay
  },
  {
    tag:     "Health & Wellness",
    title:   "Vitamins &<br/><span>Supplements</span>",
    sub:     "Premium Quality Health Products for Your Daily Wellbeing",
    btn1:    { text: "Shop Vitamins →", link: "products.html?cat=vitamins" },
    btn2:    { text: "Shop Sports →", link: "products.html?cat=sports" },
    image:   "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=90",
    // Health supplements
  },
  {
    tag:     "Perfume & Beauty",
    title:   "Luxury<br/><span>Fragrances</span>",
    sub:     "Chanel, Mugler & More — Discover Your Perfect Scent",
    btn1:    { text: "Shop Perfumes →", link: "products.html?cat=perfume" },
    btn2:    { text: "View Collection →", link: "products.html" },
    image:   "https://images.unsplash.com/photo-1541643600914-78b084683702?w=900&q=90",
    // Perfume bottles
  },
  {
    tag:     "Home & Kitchen",
    title:   "Everything for<br/><span>Your Home</span>",
    sub:     "Kitchen Essentials, Storage Solutions & More for Modern Living",
    btn1:    { text: "Shop Home →", link: "products.html?cat=home" },
    btn2:    { text: "Shop Grocery →", link: "products.html?cat=grocery" },
    image:   "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=90",
    // Modern kitchen
  },
  {
    tag:     "Pet Supplies",
    title:   "Care for Your<br/><span>Beloved Pets</span>",
    sub:     "Trusted Brands — FRONTLINE, NutriPaw & More for Your Furry Friends",
    btn1:    { text: "Shop Pet Supplies →", link: "products.html?cat=pet" },
    btn2:    { text: "View All →", link: "products.html" },
    image:   "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=90",
    // Happy dog
  },
];

let currentSlide = 0;
let sliderInterval = null;
let isAnimating = false;

function buildSlider() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  hero.innerHTML = `
    <div class="slider-wrap">
      <!-- Slides -->
      <div class="slides-container" id="slides-container">
        ${SLIDES.map((s, i) => `
          <div class="slide ${i === 0 ? 'active' : ''}" id="slide-${i}">
            <div class="slide-img-wrap">
              <img src="${s.image}" alt="${s.tag}" class="slide-img" loading="${i === 0 ? 'eager' : 'lazy'}"/>
              <div class="slide-overlay"></div>
            </div>
            <div class="slide-content">
              <span class="hero-tag slide-tag">${s.tag}</span>
              <h1 class="slide-title">${s.title}</h1>
              <p class="hero-sub slide-sub">${s.sub}</p>
              <div class="hero-btns">
                <a href="${s.btn1.link}" class="btn-primary">${s.btn1.text}</a>
                <a href="${s.btn2.link}" class="btn-secondary">${s.btn2.text}</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Arrows -->
      <button class="slider-arrow slider-prev" onclick="prevSlide()" aria-label="Previous">&#8592;</button>
      <button class="slider-arrow slider-next" onclick="nextSlide()" aria-label="Next">&#8594;</button>

      <!-- Dots -->
      <div class="slider-dots" id="slider-dots">
        ${SLIDES.map((_, i) => `
          <button class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})" aria-label="Slide ${i+1}"></button>
        `).join('')}
      </div>

      <!-- Progress bar -->
      <div class="slider-progress"><div class="slider-progress-bar" id="slider-progress-bar"></div></div>
    </div>
  `;

  startSlider();
}

function goToSlide(index, direction) {
  if (isAnimating || index === currentSlide) return;
  isAnimating = true;

  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.slider-dot');
  const prev   = currentSlide;
  currentSlide = index;

  // Direction
  const dir = direction || (index > prev ? 1 : -1);

  // Animate out
  slides[prev].style.transform = `translateX(${dir * -100}%)`;
  slides[prev].style.opacity   = '0';
  slides[prev].classList.remove('active');

  // Prepare new slide
  slides[currentSlide].style.transform = `translateX(${dir * 100}%)`;
  slides[currentSlide].style.opacity   = '0';
  slides[currentSlide].classList.add('active');

  // Force reflow
  slides[currentSlide].offsetHeight;

  // Animate in
  slides[currentSlide].style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease';
  slides[currentSlide].style.transform  = 'translateX(0)';
  slides[currentSlide].style.opacity    = '1';

  // Reset prev
  setTimeout(() => {
    slides[prev].style.transition = 'none';
    slides[prev].style.transform  = 'translateX(0)';
    slides[prev].style.opacity    = '1';
    isAnimating = false;
  }, 750);

  // Update dots
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));

  // Reset progress
  resetProgress();
}

function nextSlide() {
  const next = (currentSlide + 1) % SLIDES.length;
  goToSlide(next, 1);
}

function prevSlide() {
  const prev = (currentSlide - 1 + SLIDES.length) % SLIDES.length;
  goToSlide(prev, -1);
}

function startSlider() {
  resetProgress();
  sliderInterval = setInterval(nextSlide, 5000);
}

function resetProgress() {
  const bar = document.getElementById('slider-progress-bar');
  if (!bar) return;
  bar.style.transition = 'none';
  bar.style.width = '0%';
  bar.offsetHeight; // reflow
  bar.style.transition = 'width 5s linear';
  bar.style.width = '100%';
}

// Pause on hover
document.addEventListener('DOMContentLoaded', () => {
  buildSlider();
  document.querySelector('.slider-wrap')?.addEventListener('mouseenter', () => {
    clearInterval(sliderInterval);
    const bar = document.getElementById('slider-progress-bar');
    if (bar) bar.style.animationPlayState = 'paused';
  });
  document.querySelector('.slider-wrap')?.addEventListener('mouseleave', () => {
    sliderInterval = setInterval(nextSlide, 5000);
    resetProgress();
  });

  // Touch/swipe support
  let touchStartX = 0;
  document.querySelector('.slider-wrap')?.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  document.querySelector('.slider-wrap')?.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
  }, { passive: true });
});
