// ============================================================
//  GOODS GALLERY – PRODUCTS DATA (GBP £, UK)
// ============================================================
const WHATSAPP_NUMBER = "923076844382";

const PRODUCTS = [
  {
    id: 1,
    name: "Compact Pocket Size Power Bank",
    brand: "Goods Gallery",
    category: "hard",
    price: 12.99, oldPrice: 16.99,
    colors: ["#c084fc","#f9a8d4","#a3e635","#fbbf24","#34d399","#60a5fa","#f87171"],
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80","https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=600&q=80"],
    badge: "Save £4", rating: 4.5, reviews: 128,
    description: "Ultra-compact power bank that fits in your pocket. 10,000mAh capacity with fast charging support. Perfect for travel and daily use.",
    features: ["10,000 mAh","Fast Charging 18W","Type-C & USB-A","LED Indicator","Lightweight 180g"],
  },
  {
    id: 2,
    name: "KeyPop Combo Keyboard & Mouse",
    brand: "Goods Gallery",
    category: "keyboard",
    price: 24.99, oldPrice: 32.99,
    colors: ["#6b7280","#f59e0b","#10b981","#3b82f6","#ec4899","#ef4444","#a855f7"],
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80"],
    badge: "Save £8", rating: 4.3, reviews: 95,
    description: "Retro-style wireless keyboard and mouse combo with vibrant backlit keys and precise optical tracking.",
    features: ["Wireless 2.4GHz","Retro Keycaps","RGB Backlit","1600 DPI Mouse","Battery 12 months"],
  },
  {
    id: 3,
    name: "Open Ear Wireless Earbuds",
    brand: "Goods Gallery",
    category: "earbuds",
    price: 34.99, oldPrice: 44.99,
    colors: ["#111827","#f3f4f6"],
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80"],
    badge: "New", rating: 4.7, reviews: 212,
    description: "Open-ear design with bone conduction technology. Stay aware of your surroundings while enjoying crystal-clear audio.",
    features: ["Open Ear Design","8hr Battery","IPX5 Waterproof","Bluetooth 5.3","Touch Controls"],
  },
  {
    id: 4,
    name: "Portable Outdoor Wireless Speaker",
    brand: "Goods Gallery",
    category: "hard",
    price: 29.99, oldPrice: 39.99,
    colors: ["#1d4ed8","#1e3a5f","#111827","#7c3aed","#b45309"],
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80"],
    badge: "Save £10", rating: 4.4, reviews: 87,
    description: "360° surround sound with deep bass. IPX7 waterproof rating makes it perfect for outdoor adventures.",
    features: ["360° Sound","IPX7 Waterproof","20hr Battery","Bluetooth 5.0","Built-in Mic"],
  },
  {
    id: 5,
    name: "Wireless Digital Multimedia Projector",
    brand: "Goods Gallery",
    category: "hard",
    price: 149.99, oldPrice: 179.99,
    colors: ["#111827","#374151"],
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80"],
    badge: "Save £30", rating: 4.6, reviews: 63,
    description: "Full HD 1080p projector with built-in Android, WiFi, and Bluetooth. Transform any wall into a cinema screen.",
    features: ["1080p Full HD","Built-in Android","WiFi & Bluetooth","4000 Lumens","HDMI / USB"],
  },
  {
    id: 6,
    name: "Pro Noise Cancelling Headphones",
    brand: "Goods Gallery",
    category: "headphone",
    price: 69.99, oldPrice: 89.99,
    colors: ["#111827","#b45309","#1d4ed8"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"],
    badge: "Save £20", rating: 4.8, reviews: 341,
    description: "Industry-leading active noise cancellation with 30-hour battery life. Premium sound for audiophiles.",
    features: ["Active Noise Cancel","30hr Battery","Hi-Res Audio","Foldable Design","Multi-device"],
  },
  {
    id: 7,
    name: "UltraBook Pro 14-inch Laptop",
    brand: "Goods Gallery",
    category: "laptop",
    price: 649.99, oldPrice: 799.99,
    colors: ["#c0c0c0","#b8860b","#111827"],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80"],
    badge: "Save £150", rating: 4.7, reviews: 189,
    description: "Slim and powerful 14-inch laptop with i7 processor, 16GB RAM, and 512GB SSD. Perfect for professionals.",
    features: ["Intel i7 12th Gen","16GB DDR5 RAM","512GB NVMe SSD","14\" FHD IPS","Backlit KB"],
  },
  {
    id: 8,
    name: "Laptop Hardshell Protective Case",
    brand: "Goods Gallery",
    category: "laptop",
    price: 19.99, oldPrice: 27.99,
    colors: ["#111827","#ef4444","#3b82f6","#10b981"],
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80"],
    badge: "Save £8", rating: 4.2, reviews: 44,
    description: "Hard-shell protective case for laptops 13-16 inch. Shock-absorbing interior with premium finish.",
    features: ["Universal 13\"-16\"","Shock Proof","Water Resistant","Multiple Colors","Easy Access"],
  },
  {
    id: 9,
    name: "Galaxy Tab Pro 11-inch Tablet",
    brand: "Goods Gallery",
    category: "tablet",
    price: 299.99, oldPrice: 369.99,
    colors: ["#111827","#c0c0c0","#1d4ed8"],
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80"],
    badge: "Save £70", rating: 4.6, reviews: 156,
    description: "11-inch AMOLED display tablet with S-Pen support, 12GB RAM, and DeX mode.",
    features: ["11\" AMOLED","S-Pen Included","12GB RAM","256GB Storage","DeX Mode"],
  },
  {
    id: 10,
    name: "ProMax 5G Smartphone",
    brand: "Goods Gallery",
    category: "mobile",
    price: 549.99, oldPrice: 649.99,
    colors: ["#6b21a8","#1d4ed8","#111827","#d1d5db"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"],
    badge: "Save £100", rating: 4.8, reviews: 520,
    description: "Flagship 5G smartphone with 200MP camera, Snapdragon 8 Gen 3, 6.7-inch Dynamic AMOLED display.",
    features: ["200MP Camera","Snapdragon 8 Gen 3","5G Ready","5000mAh Battery","Fast Charge 65W"],
  },
  {
    id: 11,
    name: "UltraSlim A55 Android Phone",
    brand: "Goods Gallery",
    category: "mobile",
    price: 349.99, oldPrice: 429.99,
    colors: ["#1e40af","#111827","#d4d4d4","#7c3aed"],
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"],
    badge: "Save £80", rating: 4.5, reviews: 310,
    description: "Sleek mid-range smartphone with 6.5-inch Super AMOLED, 108MP camera, and 4500mAh battery.",
    features: ["108MP Camera","6.5\" Super AMOLED","4500mAh","64MP Selfie","5G Ready"],
  },
  {
    id: 12,
    name: "Budget Smart 4G Phone",
    brand: "Goods Gallery",
    category: "mobile",
    price: 129.99, oldPrice: 169.99,
    colors: ["#065f46","#1e3a5f","#111827","#fbbf24"],
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80"],
    badge: "Save £40", rating: 4.1, reviews: 198,
    description: "Affordable 4G smartphone with large battery, dual camera, and smooth performance.",
    features: ["48MP Dual Camera","6000mAh Battery","6.3\" HD+","4GB RAM","Face Unlock"],
  },
  {
    id: 13,
    name: "Premium In-Ear Earphones",
    brand: "Goods Gallery",
    category: "earphone",
    price: 14.99, oldPrice: 19.99,
    colors: ["#111827","#f3f4f6","#ef4444"],
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80"],
    badge: "Save £5", rating: 4.3, reviews: 278,
    description: "Wired in-ear earphones with 10mm dynamic drivers, tangle-free cable, and inline microphone.",
    features: ["10mm Drivers","3.5mm Jack","Inline Mic","Tangle-Free","3 Ear Tip Sizes"],
  },
  {
    id: 14,
    name: "Laser Jet Colour Printer",
    brand: "Goods Gallery",
    category: "printer",
    price: 189.99, oldPrice: 229.99,
    colors: ["#f3f4f6","#111827"],
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80"],
    badge: "Save £40", rating: 4.4, reviews: 72,
    description: "High-speed colour laser jet printer with WiFi and automatic duplex printing.",
    features: ["1200 DPI","WiFi Enabled","Auto Duplex","30 ppm","250-Sheet Tray"],
  },
  {
    id: 15,
    name: "128GB USB 3.0 Flash Drive",
    brand: "Goods Gallery",
    category: "pendrive",
    price: 9.99, oldPrice: 14.99,
    colors: ["#111827","#3b82f6","#ef4444"],
    image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=600&q=80"],
    badge: "Save £5", rating: 4.2, reviews: 193,
    description: "High-speed 128GB USB 3.0 flash drive with read speeds up to 200MB/s.",
    features: ["128GB Storage","USB 3.0","200MB/s Read","Metal Body","Retractable Cap"],
  },
];

function formatPrice(p) {
  return "£" + p.toFixed(2);
}

function starHTML(rating) {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) s += "★";
    else if (i - rating < 1) s += "½";
    else s += "☆";
  }
  return `<span class="stars">${s}</span> <span class="rev-count">(${rating})</span>`;
}

function buildCard(p) {
  const isNew = p.badge === "New";
  const badgeClass = isNew ? "badge badge-new" : "badge";
  return `
    <div class="product-card" data-id="${p.id}">
      ${p.badge ? `<span class="${badgeClass}">${p.badge}</span>` : ""}
      <a href="detail.html?id=${p.id}">
        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy"/>
          <div class="quick-look">Quick Look</div>
        </div>
      </a>
      <div class="card-body">
        <p class="card-brand">${p.brand}</p>
        <a href="detail.html?id=${p.id}"><h3 class="card-name">${p.name}</h3></a>
        <div class="card-prices">
          <span class="price-new">${formatPrice(p.price)}</span>
          <span class="price-old">${formatPrice(p.oldPrice)}</span>
        </div>
        ${p.colors ? `<div class="color-dots">${p.colors.map(c=>`<span class="dot" style="background:${c}"></span>`).join("")}</div>` : ""}
        <button class="btn-add-cart" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
      </div>
    </div>
  `;
}

// WhatsApp Order
function orderOnWhatsApp(cartItems, total) {
  let msg = "Hello Goods Gallery! 👋\n\nI would like to place an order:\n\n";
  cartItems.forEach(item => {
    msg += `• ${item.name} x${item.qty} = ${formatPrice(item.price * item.qty)}\n`;
  });
  msg += `\n*Total: ${formatPrice(total)}*\n\nPlease confirm my order. Thank you!`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
