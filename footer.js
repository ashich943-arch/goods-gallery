function injectFooter() {
  const footer = `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo-wrap"><span class="logo-text">Goods<span class="logo-accent">Gallarry</span></span></a>
        <p>Your one-stop destination for the latest gadgets, electronics, health & lifestyle products.</p>
        <p style="color:var(--text-muted);font-size:0.82rem;margin-top:0.5rem;">📍 17 Ipswich Street, Rochdale<br/>United Kingdom, OL11 1JS</p>
        <p style="color:var(--text-muted);font-size:0.82rem;">📞 +44 7508 234409</p>
        <div class="footer-social">
          <a href="https://wa.me/447508234409" target="_blank" class="whatsapp-btn">💬 WhatsApp Us</a>
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
        <a href="products.html?cat=audio">Audio</a>
        <a href="products.html?cat=mobile-tablet">Mobiles & Tablets</a>
        <a href="products.html?cat=laptop">Laptops</a>
        <a href="products.html?cat=vitamins">Vitamins</a>
        <a href="products.html?cat=sports">Sports</a>
        <a href="products.html?cat=perfume">Perfume</a>
        <a href="products.html?cat=pet">Pet Supplies</a>
        <a href="products.html?cat=home">Home & Kitchen</a>
        <a href="products.html?cat=grocery">Grocery</a>
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
      <p>© 2025 Goods Gallarry UK. All rights reserved.</p>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}
