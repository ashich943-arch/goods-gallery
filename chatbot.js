// ============================================================
//  GOODS GALLERY – AI CHATBOT
// ============================================================
const CHATBOT_WA = "923076844382";

const BOT_KNOWLEDGE = {
  greetings: ["hi","hello","hey","salam","assalam","helo","good morning","good evening"],
  farewells: ["bye","goodbye","thanks","thank you","cheers","ok thanks"],

  products: {
    mobile: [
      { name:"ProMax 5G Smartphone", price:"£549.99", oldPrice:"£649.99", features:"200MP Camera, Snapdragon 8 Gen 3, 5G, 5000mAh, Fast Charge 65W" },
      { name:"UltraSlim A55 Android Phone", price:"£349.99", oldPrice:"£429.99", features:"108MP Camera, 6.5\" Super AMOLED, 4500mAh, 5G" },
      { name:"Budget Smart 4G Phone", price:"£129.99", oldPrice:"£169.99", features:"48MP Camera, 6000mAh Battery, 6.3\" HD+, Face Unlock" },
    ],
    laptop: [
      { name:"UltraBook Pro 14-inch Laptop", price:"£649.99", oldPrice:"£799.99", features:"Intel i7 12th Gen, 16GB RAM, 512GB SSD, FHD IPS Display" },
      { name:"Laptop Hardshell Protective Case", price:"£19.99", oldPrice:"£27.99", features:"Universal 13-16\", Shock Proof, Water Resistant" },
    ],
    headphone: [{ name:"Pro Noise Cancelling Headphones", price:"£69.99", oldPrice:"£89.99", features:"Active Noise Cancel, 30hr Battery, Hi-Res Audio" }],
    earbuds: [{ name:"Open Ear Wireless Earbuds", price:"£34.99", oldPrice:"£44.99", features:"Bone Conduction, 8hr Battery, IPX5, Bluetooth 5.3" }],
    earphone: [{ name:"Premium In-Ear Earphones", price:"£14.99", oldPrice:"£19.99", features:"10mm Drivers, Inline Mic, Tangle-Free" }],
    tablet: [{ name:"Galaxy Tab Pro 11-inch Tablet", price:"£299.99", oldPrice:"£369.99", features:"11\" AMOLED, S-Pen, 12GB RAM, 256GB, DeX Mode" }],
    speaker: [{ name:"Portable Outdoor Wireless Speaker", price:"£29.99", oldPrice:"£39.99", features:"360° Sound, IPX7 Waterproof, 20hr Battery" }],
    keyboard: [{ name:"KeyPop Combo Keyboard & Mouse", price:"£24.99", oldPrice:"£32.99", features:"Wireless, RGB Backlit, 1600 DPI Mouse" }],
    projector: [{ name:"Wireless Digital Multimedia Projector", price:"£149.99", oldPrice:"£179.99", features:"1080p Full HD, Android, WiFi, 4000 Lumens" }],
    powerbank: [{ name:"Compact Pocket Size Power Bank", price:"£12.99", oldPrice:"£16.99", features:"10,000mAh, Fast Charge 18W, Type-C & USB-A" }],
    printer: [{ name:"Laser Jet Colour Printer", price:"£189.99", oldPrice:"£229.99", features:"1200 DPI, WiFi, Auto Duplex, 30ppm" }],
    usb: [{ name:"128GB USB 3.0 Flash Drive", price:"£9.99", oldPrice:"£14.99", features:"200MB/s Read Speed, Metal Body" }],
  },

  faqs: {
    shipping: "We offer FREE shipping on all orders over £50! Standard delivery takes 2-4 business days across the UK. Express next-day delivery is also available.",
    return: "We have a 7-day easy return policy. If you're not satisfied, contact us on WhatsApp within 7 days of delivery for a full refund or exchange.",
    payment: "We accept all major payment methods including Credit/Debit cards, PayPal, and Bank Transfer. You can also order via WhatsApp and pay on delivery.",
    warranty: "All our electronics come with a 1-year manufacturer warranty. Accessories have a 3-month warranty. We only sell 100% genuine products.",
    order: "To place an order, simply add items to your cart and click 'Order via WhatsApp'. Our team will confirm your order within 1 hour!",
    contact: "You can reach us on WhatsApp: +923076844382 or email: support@goodsgallery.co.uk. We're available 7 days a week, 9am-9pm.",
    location: "Goods Gallery is a UK-based electronics store. We deliver across the entire United Kingdom.",
    cheapest: "Our cheapest product is the 128GB USB Flash Drive at only £9.99! We have products starting from £9.99 up to £649.99.",
    expensive: "Our premium product is the UltraBook Pro 14-inch Laptop at £649.99 (was £799.99). Great value for a professional laptop!",
    discount: "We have amazing deals! Check our Featured Collection for discounts up to £150 off. Free shipping on orders over £50!",
    track: "Once your order is dispatched, you'll receive a tracking number via WhatsApp. Contact us at +923076844382 for order updates.",
  }
};

function getBotResponse(msg) {
  const m = msg.toLowerCase().trim();

  // Greetings
  if (BOT_KNOWLEDGE.greetings.some(g => m.includes(g))) {
    return "Hello! 👋 Welcome to **Goods Gallery**! I'm your shopping assistant. How can I help you today?\n\nYou can ask me about:\n• 📱 Products & prices\n• 🚚 Shipping & delivery\n• ↩️ Returns & warranty\n• 💬 How to order";
  }

  // Farewells
  if (BOT_KNOWLEDGE.farewells.some(f => m.includes(f))) {
    return "Thank you for visiting Goods Gallery! 😊 Feel free to come back anytime. Happy shopping! 🛍️";
  }

  // Product queries
  if (m.includes("phone") || m.includes("mobile") || m.includes("smartphone")) {
    const prods = BOT_KNOWLEDGE.products.mobile;
    return "📱 **We have 3 smartphones:**\n\n" + prods.map(p =>
      `• **${p.name}**\n  Price: ${p.price} ~~${p.oldPrice}~~\n  ${p.features}`
    ).join("\n\n") + "\n\n[View all phones →](products.html?cat=mobile)";
  }

  if (m.includes("laptop") || m.includes("notebook") || m.includes("macbook")) {
    const prods = BOT_KNOWLEDGE.products.laptop;
    return "💻 **Our Laptops:**\n\n" + prods.map(p =>
      `• **${p.name}**\n  Price: ${p.price} ~~${p.oldPrice}~~\n  ${p.features}`
    ).join("\n\n") + "\n\n[View laptops →](products.html?cat=laptop)";
  }

  if (m.includes("headphone") || m.includes("headset")) {
    const p = BOT_KNOWLEDGE.products.headphone[0];
    return `🎧 **${p.name}**\nPrice: **${p.price}** ~~${p.oldPrice}~~\n✨ ${p.features}\n\n[View product →](detail.html?id=6)`;
  }

  if (m.includes("earbud") || m.includes("earphone") || m.includes("earpiece") || m.includes("audio")) {
    return "🎵 **Our Audio Products:**\n\n• **Open Ear Wireless Earbuds** - £34.99\n• **Premium In-Ear Earphones** - £14.99\n• **Pro Noise Cancelling Headphones** - £69.99\n\n[View all →](products.html?cat=earbuds)";
  }

  if (m.includes("tablet") || m.includes("ipad")) {
    const p = BOT_KNOWLEDGE.products.tablet[0];
    return `📱 **${p.name}**\nPrice: **${p.price}** ~~${p.oldPrice}~~\n✨ ${p.features}\n\n[View product →](detail.html?id=9)`;
  }

  if (m.includes("speaker") || m.includes("bluetooth speaker")) {
    const p = BOT_KNOWLEDGE.products.speaker[0];
    return `🔊 **${p.name}**\nPrice: **${p.price}** ~~${p.oldPrice}~~\n✨ ${p.features}\n\n[View product →](detail.html?id=4)`;
  }

  if (m.includes("keyboard") || m.includes("mouse") || m.includes("combo")) {
    const p = BOT_KNOWLEDGE.products.keyboard[0];
    return `⌨️ **${p.name}**\nPrice: **${p.price}** ~~${p.oldPrice}~~\n✨ ${p.features}\n\n[View product →](detail.html?id=2)`;
  }

  if (m.includes("projector") || m.includes("project")) {
    const p = BOT_KNOWLEDGE.products.projector[0];
    return `📽️ **${p.name}**\nPrice: **${p.price}** ~~${p.oldPrice}~~\n✨ ${p.features}\n\n[View product →](detail.html?id=5)`;
  }

  if (m.includes("power bank") || m.includes("powerbank") || m.includes("charger")) {
    const p = BOT_KNOWLEDGE.products.powerbank[0];
    return `🔋 **${p.name}**\nPrice: **${p.price}** ~~${p.oldPrice}~~\n✨ ${p.features}\n\n[View product →](detail.html?id=1)`;
  }

  if (m.includes("printer") || m.includes("print")) {
    const p = BOT_KNOWLEDGE.products.printer[0];
    return `🖨️ **${p.name}**\nPrice: **${p.price}** ~~${p.oldPrice}~~\n✨ ${p.features}\n\n[View product →](detail.html?id=14)`;
  }

  if (m.includes("usb") || m.includes("flash drive") || m.includes("pendrive") || m.includes("storage")) {
    const p = BOT_KNOWLEDGE.products.usb[0];
    return `💾 **${p.name}**\nPrice: **${p.price}** ~~${p.oldPrice}~~\n✨ ${p.features}\n\n[View product →](detail.html?id=15)`;
  }

  // Price queries
  if (m.includes("cheap") || m.includes("budget") || m.includes("affordable") || m.includes("lowest price")) {
    return "💰 " + BOT_KNOWLEDGE.faqs.cheapest + "\n\n[View all products →](products.html)";
  }

  if (m.includes("expensive") || m.includes("best") || m.includes("premium") || m.includes("top")) {
    return "⭐ " + BOT_KNOWLEDGE.faqs.expensive + "\n\n[View laptop →](detail.html?id=7)";
  }

  if (m.includes("discount") || m.includes("offer") || m.includes("sale") || m.includes("deal")) {
    return "🏷️ " + BOT_KNOWLEDGE.faqs.discount + "\n\n[View deals →](products.html)";
  }

  if (m.includes("price") || m.includes("cost") || m.includes("how much") || m.includes("£")) {
    return "💷 **Our price range:**\n\n• USB Flash Drive: **£9.99**\n• Earphones: **£14.99**\n• Power Bank: **£12.99**\n• Keyboard+Mouse: **£24.99**\n• Speaker: **£29.99**\n• Earbuds: **£34.99**\n• Headphones: **£69.99**\n• Projector: **£149.99**\n• Printer: **£189.99**\n• Budget Phone: **£129.99**\n• Tablet: **£299.99**\n• Mid Phone: **£349.99**\n• Flagship Phone: **£549.99**\n• Laptop: **£649.99**\n\n[Browse all →](products.html)";
  }

  // Store queries
  if (m.includes("shipping") || m.includes("delivery") || m.includes("deliver")) {
    return "🚚 " + BOT_KNOWLEDGE.faqs.shipping;
  }

  if (m.includes("return") || m.includes("refund") || m.includes("exchange")) {
    return "↩️ " + BOT_KNOWLEDGE.faqs.return;
  }

  if (m.includes("payment") || m.includes("pay") || m.includes("card") || m.includes("paypal")) {
    return "💳 " + BOT_KNOWLEDGE.faqs.payment;
  }

  if (m.includes("warranty") || m.includes("guarantee") || m.includes("genuine") || m.includes("original")) {
    return "✅ " + BOT_KNOWLEDGE.faqs.warranty;
  }

  if (m.includes("order") || m.includes("buy") || m.includes("purchase") || m.includes("how to")) {
    return "🛒 " + BOT_KNOWLEDGE.faqs.order + "\n\nOr click below to WhatsApp us directly:\n👉 [Order on WhatsApp](https://wa.me/" + CHATBOT_WA + ")";
  }

  if (m.includes("contact") || m.includes("whatsapp") || m.includes("number") || m.includes("reach")) {
    return "📞 " + BOT_KNOWLEDGE.faqs.contact + "\n\n[Contact page →](contact.html)";
  }

  if (m.includes("track") || m.includes("tracking") || m.includes("where is my")) {
    return "📦 " + BOT_KNOWLEDGE.faqs.track;
  }

  if (m.includes("location") || m.includes("uk") || m.includes("where") || m.includes("based")) {
    return "📍 " + BOT_KNOWLEDGE.faqs.location;
  }

  if (m.includes("all product") || m.includes("what do you sell") || m.includes("categories") || m.includes("what sell")) {
    return "🛍️ **We sell:**\n\n📱 Smartphones (3 models)\n💻 Laptops\n🎧 Headphones & Earbuds\n📱 Tablets\n⌨️ Keyboards & Mice\n🔊 Speakers\n📽️ Projectors\n🔋 Power Banks\n🖨️ Printers\n💾 USB Drives\n\n[Shop all →](products.html)";
  }

  // Default
  return "I'm not sure about that, but I'm happy to help! 😊\n\nYou can ask me about:\n• 📱 **Products** (phones, laptops, headphones...)\n• 💷 **Prices & deals**\n• 🚚 **Shipping & delivery**\n• ↩️ **Returns & warranty**\n• 🛒 **How to order**\n\nOr [contact us on WhatsApp](https://wa.me/" + CHATBOT_WA + ") for instant help!";
}

// ============================================================
//  CHATBOT UI INJECTOR
// ============================================================
function injectChatbot() {
  const html = `
  <div class="chatbot-bubble" id="chatbot-bubble" onclick="toggleChatbot()" title="Chat with us">
    <span class="bubble-icon">💬</span>
    <span class="bubble-badge" id="bubble-badge" style="display:none">1</span>
  </div>

  <div class="chatbot-box" id="chatbot-box">
    <div class="chatbot-head">
      <div class="chatbot-head-info">
        <div class="chatbot-avatar">GG</div>
        <div>
          <strong>Goods Gallery</strong>
          <span class="chatbot-status">🟢 Online</span>
        </div>
      </div>
      <button class="chatbot-close" onclick="toggleChatbot()">✕</button>
    </div>
    <div class="chatbot-messages" id="chatbot-messages">
      <div class="bot-msg">
        <div class="msg-bubble">Hello! 👋 Welcome to <strong>Goods Gallery</strong>!<br/>I can help you with products, prices, orders & more. What are you looking for?</div>
        <div class="msg-time">Just now</div>
      </div>
      <div class="chatbot-suggestions">
        <button onclick="sendSuggestion('Show all products')">🛍️ All Products</button>
        <button onclick="sendSuggestion('What phones do you have?')">📱 Phones</button>
        <button onclick="sendSuggestion('Shipping info')">🚚 Shipping</button>
        <button onclick="sendSuggestion('How to order?')">🛒 How to Order</button>
      </div>
    </div>
    <div class="chatbot-input-row">
      <input type="text" id="chatbot-input" placeholder="Type a message..." onkeydown="if(event.key==='Enter')sendChat()" />
      <button onclick="sendChat()" class="chatbot-send">➤</button>
    </div>
    <div class="chatbot-footer">
      <a href="https://wa.me/${CHATBOT_WA}" target="_blank">💬 Chat on WhatsApp instead</a>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
  setTimeout(() => {
    document.getElementById('bubble-badge').style.display = 'flex';
  }, 3000);
}

function toggleChatbot() {
  const box = document.getElementById('chatbot-box');
  const badge = document.getElementById('bubble-badge');
  box.classList.toggle('open');
  badge.style.display = 'none';
}

function sendChat() {
  const input = document.getElementById('chatbot-input');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  appendMessage(msg, 'user');
  setTimeout(() => {
    const response = getBotResponse(msg);
    appendMessage(response, 'bot');
  }, 500);
}

function sendSuggestion(text) {
  appendMessage(text, 'user');
  setTimeout(() => {
    appendMessage(getBotResponse(text), 'bot');
  }, 400);
  // Hide suggestions after first use
  const sugg = document.querySelector('.chatbot-suggestions');
  if (sugg) sugg.style.display = 'none';
}

function appendMessage(text, type) {
  const container = document.getElementById('chatbot-messages');
  const now = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

  // Convert markdown-like bold and links
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/~~(.*?)~~/g, '<s>$1</s>');
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color:#f5c518">$1</a>');
  text = text.replace(/\n/g, '<br/>');

  const div = document.createElement('div');
  div.className = type === 'user' ? 'user-msg' : 'bot-msg';
  div.innerHTML = `<div class="msg-bubble">${text}</div><div class="msg-time">${now}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

document.addEventListener('DOMContentLoaded', injectChatbot);
