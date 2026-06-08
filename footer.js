function injectFooter() {
  const footer = `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo-wrap"><span class="logo-text">Goods<span class="logo-accent">Gallery</span></span></a>
        <p>Your one-stop destination for the latest gadgets and electronics. Quality products, fast delivery.</p>
        <div class="footer-social">
          <a href="https://wa.me/923076844382" target="_blank" class="whatsapp-btn">💬 WhatsApp Us</a>
        </div>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
        <a href="faq.html">FAQs</a>
        <a href="products.html">Shop All</a>
      </div>
      <div class="footer-links">
        <h4>Categories</h4>
        <a href="products.html?cat=earbuds">Earbuds</a>
        <a href="products.html?cat=headphone">Headphones</a>
        <a href="products.html?cat=laptop">Laptops</a>
        <a href="products.html?cat=tablet">Tablets</a>
        <a href="products.html?cat=mobile">Mobiles</a>
      </div>
      <div class="footer-links">
        <h4>Policies</h4>
        <a href="shipping.html">Shipping Policy</a>
        <a href="returns.html">Return Policy</a>
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Goods Gallery UK. All rights reserved.</p>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}
