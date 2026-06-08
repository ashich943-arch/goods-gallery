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
    all:"All Products", earbuds:"Earbuds", hard:"Hard Devices",
    keyboard:"Keyboard", mobile:"Mobile", printer:"Printer",
    earphone:"Earphone", headphone:"Headphones", laptop:"Laptop",
    pendrive:"Pen Drive", tablet:"Tablet"
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
  const maxPrice = parseInt(document.getElementById("price-range")?.value||75000);
  const sort = document.getElementById("sort-select")?.value||"default";
  document.getElementById("price-max-label").textContent = "Rs. "+maxPrice.toLocaleString("en-IN");

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
