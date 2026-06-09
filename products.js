let activeCategory = "all";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const search = params.get("search");
  if (cat) activeCategory = cat;
  if (search) document.getElementById("global-search").value = search;
  buildCategoryFilters();
  filterProducts();
});

function buildCategoryFilters() {
  const cats = ["all", ...new Set(PRODUCTS.map(p => p.category))];
  const labels = {
    all:"All Products",
    audio:"🎧 Audio",
    "mobile-tablet":"📱 Mobiles & Tablets",
    laptop:"💻 Laptops",
    accessories:"⌨️ Accessories",
    vitamins:"💊 Vitamins",
    sports:"🏋️ Sports",
    perfume:"🌸 Perfume",
    pet:"🐾 Pet Supplies",
    home:"🏠 Home & Kitchen",
    grocery:"🛒 Grocery",
    stationery:"📎 Stationery",
    garden:"🌿 Garden"
  };
  const container = document.getElementById("category-filters");
  container.innerHTML = cats.map(c => `
    <label class="filter-label ${activeCategory===c?"active":""}">
      <input type="radio" name="cat" value="${c}" ${activeCategory===c?"checked":""} onchange="setCat('${c}')"/>
      ${labels[c]||c}
    </label>
  `).join("");
}

function setCat(cat) {
  activeCategory = cat;
  document.querySelectorAll(".filter-label").forEach(l=>l.classList.remove("active"));
  document.querySelectorAll(`input[value="${cat}"]`).forEach(i=>i.parentElement.classList.add("active"));
  filterProducts();
}

function filterProducts() {
  const search = (document.getElementById("global-search")?.value||"").toLowerCase();
  const maxPrice = parseFloat(document.getElementById("price-range")?.value||800);
  const sort = document.getElementById("sort-select")?.value||"default";
  document.getElementById("price-max-label").textContent = "£"+parseFloat(maxPrice).toFixed(2);

  let filtered = PRODUCTS.filter(p => {
    const matchCat = activeCategory==="all"||p.category===activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search)||p.brand.toLowerCase().includes(search);
    const matchPrice = p.price<=maxPrice;
    return matchCat&&matchSearch&&matchPrice;
  });

  if (sort==="price-asc") filtered.sort((a,b)=>a.price-b.price);
  else if (sort==="price-desc") filtered.sort((a,b)=>b.price-a.price);
  else if (sort==="name-asc") filtered.sort((a,b)=>a.name.localeCompare(b.name));

  const grid = document.getElementById("products-grid");
  const count = document.getElementById("results-count");
  count.textContent = `Showing ${filtered.length} product${filtered.length!==1?"s":""}`;
  grid.innerHTML = filtered.length ? filtered.map(buildCard).join("") : `<div class="no-results">😔 No products found.</div>`;
}
