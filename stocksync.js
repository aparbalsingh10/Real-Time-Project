// STOCKSYNC HUB - PRODUCT DATA

const products = [{
        id: 1,
        name: "PlayStation 5",
        category: "Gaming",
        subcategory: "PlayStation",
        price: 54999,
        stock: 5,
        icon: "🎮",
        description: "Next generation gaming console.",
        specs: "825GB SSD | 4K Gaming | Ray Tracing",
        sales: 0
    },
    {
        id: 2,
        name: "Xbox Series X",
        category: "Gaming",
        subcategory: "Xbox",
        price: 54990,
        stock: 7,
        icon: "🎮",
        description: "Powerful Xbox gaming console.",
        specs: "1TB SSD | 4K | 120 FPS",
        sales: 0
    },
    {
        id: 3,
        name: "iPhone 16",
        category: "Smartphones",
        subcategory: "Apple",
        price: 69999,
        stock: 15,
        icon: "📱",
        description: "Powerful iPhone with modern design.",
        specs: "128GB | A18 Chip | 48MP Camera",
        sales: 0
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        category: "Smartphones",
        subcategory: "Samsung",
        price: 64999,
        stock: 12,
        icon: "📱",
        description: "Premium Samsung smartphone.",
        specs: "256GB | Snapdragon | AMOLED",
        sales: 0
    },
    {
        id: 5,
        name: "MacBook Air M3",
        category: "Laptops",
        subcategory: "Apple",
        price: 104999,
        stock: 6,
        icon: "💻",
        description: "Powerful laptop for work and study.",
        specs: "M3 | 8GB RAM | 256GB SSD",
        sales: 0
    },
    {
        id: 6,
        name: "ASUS ROG Strix G16",
        category: "Laptops",
        subcategory: "Gaming",
        price: 149999,
        stock: 6,
        icon: "💻",
        description: "High performance gaming laptop.",
        specs: "Intel i9 | RTX 4060 | 16GB RAM",
        sales: 0
    },
    {
        id: 7,
        name: "Gaming Keyboard",
        category: "Accessories",
        subcategory: "Gaming",
        price: 2999,
        stock: 18,
        icon: "⌨️",
        description: "RGB mechanical gaming keyboard.",
        specs: "Mechanical | RGB | USB",
        sales: 0
    },
    {
        id: 8,
        name: "Gaming Headset",
        category: "Accessories",
        subcategory: "Gaming",
        price: 3499,
        stock: 14,
        icon: "🎧",
        description: "Gaming headset with clear audio.",
        specs: "7.1 Surround | Microphone | RGB",
        sales: 0
    }
];

// GLOBAL VARIABLES

let cart = [];
let currentCategory = "All";
let updates = [];
let nextProductId = 9;

const LOW_STOCK_LIMIT = 3;


// PAGE LOAD

window.addEventListener("load", function() {
    setTimeout(function() {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";

        setTimeout(function() {
            loader.style.display = "none";
        }, 500);
    }, 700);

    addUpdate(
        "Marketplace is ready",
        "Live stock simulation has started.",
        "success"
    );

    addUpdate(
        "Inventory sync enabled",
        "Stock status will refresh automatically.",
        "info"
    );

    refreshMarketplace();

    // SIMULATED LIVE STOCK UPDATE
    setInterval(function() {
        const available = products.filter(p => p.stock > 4);

        if (available.length === 0) return;

        const product =
            available[Math.floor(Math.random() * available.length)];

        product.stock--;

        addUpdate(
            "Stock updated: " + product.name,
            "One unit sold in simulation. Remaining stock: " + product.stock,
            "info"
        );

        refreshMarketplace();
    }, 12000);

    // ROTATE OLD UPDATES
    setInterval(function() {
        if (updates.length > 2) {
            updates.push(updates.shift());
            renderUpdates();
        }
    }, 6500);
});


// LIVE UPDATES

function addUpdate(title, message, type = "info") {
    updates.unshift({
        title,
        message,
        type,
        time: new Date().toLocaleTimeString()
    });

    updates = updates.slice(0, 7);
    renderUpdates();
}

function renderUpdates() {
    const list = document.getElementById("updatesList");

    list.innerHTML = updates.map(item => `
      <div class="update-item ${item.type}">
        <div class="update-icon">
          ${item.type === "alert" ? "⚠️" :
            item.type === "success" ? "✅" : "🔔"}
        </div>
  
        <div>
          <strong>${item.title}</strong>
          <small>${item.message} · ${item.time}</small>
        </div>
      </div>
    `).join("");
}


// STOCK STATUS

function stockStatus(product) {
    if (product.stock <= 0) {
        return ["Out of Stock", "status-out"];
    }

    if (product.stock <= LOW_STOCK_LIMIT) {
        return ["Low Stock", "status-low"];
    }

    return ["Available", "status-good"];
}


// AUTOMATIC RESTOCK

function scheduleAutoRestock(product) {
    if (
        product.stock <= 0 ||
        product.stock > LOW_STOCK_LIMIT ||
        product.restockPending
    ) {
        return;
    }

    product.restockPending = true;

    addUpdate(
        "Low-stock alert: " + product.name,
        "Only " + product.stock +
        " units remain. Auto-restock of 10 units scheduled.",
        "alert"
    );

    document.getElementById("lowStockAlert").classList.add("show");

    document.getElementById("lowStockMessage").textContent =
        product.name + " has only " + product.stock +
        " units left. Automatic restock is in progress.";

    setTimeout(function() {
        product.stock += 10;
        product.restockPending = false;

        addUpdate(
            "Product restocked: " + product.name,
            "10 units added. New stock: " + product.stock,
            "success"
        );

        refreshMarketplace();
    }, 8000);
}

function checkLowStock() {
    products.forEach(function(product) {
        if (product.stock > 0 && product.stock <= LOW_STOCK_LIMIT) {
            scheduleAutoRestock(product);
        }
    });

    const low = products.filter(
        p => p.stock > 0 && p.stock <= LOW_STOCK_LIMIT
    );

    const alert = document.getElementById("lowStockAlert");

    if (low.length > 0) {
        alert.classList.add("show");

        document.getElementById("lowStockMessage").textContent =
            low.map(p => p.name + " (" + p.stock + ")").join(", ");
    } else if (!products.some(p => p.restockPending)) {
        alert.classList.remove("show");
    }
}


// REFRESH ALL SECTIONS

function refreshMarketplace() {
    const search =
        document.getElementById("searchBox").value || "";

    displayProducts(getFilteredProducts(search));
    displayInventory();
    updateDashboard();
    updateCart();
    displayBestSellers();

    const raceStock = document.getElementById("raceStock");

    if (raceStock) {
        raceStock.textContent = "1 unit";
    }

    checkLowStock();
}


// FILTER PRODUCTS

function getFilteredProducts(searchValue = "") {
    const value = searchValue.toLowerCase().trim();

    return products.filter(function(product) {
        const searchable = (
            product.name + " " +
            product.category + " " +
            product.subcategory + " " +
            product.description
        ).toLowerCase();

        return (
            searchable.includes(value) &&
            (
                currentCategory === "All" ||
                product.category === currentCategory
            )
        );
    });
}


// DISPLAY PRODUCTS

function displayProducts(list = products) {
    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = `
        <div class="no-products">
          <h2>No Products Found</h2>
          <p>Try another search.</p>
        </div>
      `;
        return;
    }

    const bestProduct = [...products].sort(
        (a, b) => b.sales - a.sales
    )[0];

    list.forEach(function(product) {
        const [status] = stockStatus(product);

        const badges = `
        ${product.isNew ?
          '<span class="product-badge new">NEW</span>' : ""}
  
        ${product === bestProduct && product.sales > 0 ?
          '<span class="product-badge best">BEST SELLER</span>' : ""}
      `;

        const card = document.createElement("article");

        card.className = "product-card";
        card.onclick = function() {
            openProduct(product.id);
        };

        card.innerHTML = `
        <div class="product-image">
          <div class="badge-row">${badges}</div>
          ${product.icon}
        </div>
  
        <div class="product-content">
          <span class="product-category">
            ${product.subcategory}
          </span>
  
          <h3>${product.name}</h3>
  
          <p class="product-description">
            ${product.description}
          </p>
  
          <div class="product-price">
            ₹${product.price.toLocaleString("en-IN")}
          </div>
  
          <div class="product-stock ${
            product.stock <= 0 ? "stock-out" :
            product.stock <= LOW_STOCK_LIMIT ? "stock-low" :
            "stock-good"
          }">
            ${product.stock <= 0 ?
              "Out of Stock" :
              product.stock + " available · " + status}
          </div>
        </div>
      `;

        grid.appendChild(card);
    });
}


// PRODUCT DETAILS

function openProduct(id) {
    const product = products.find(p => p.id === id);

    if (!product) return;

    const [status] = stockStatus(product);

    document.getElementById("productDetails").innerHTML = `
      <div class="product-detail">
  
        <div class="detail-image">
          ${product.icon}
        </div>
  
        <div class="detail-info">
  
          <span class="detail-category">
            ${product.category} / ${product.subcategory}
          </span>
  
          <h1>${product.name}</h1>
  
          <p class="detail-description">
            ${product.description}
          </p>
  
          <div class="detail-price">
            ₹${product.price.toLocaleString("en-IN")}
          </div>
  
          <div class="detail-stock ${
            product.stock <= 0 ? "stock-out" :
            product.stock <= LOW_STOCK_LIMIT ? "stock-low" :
            "stock-good"
          }">
            ${status} · ${product.stock} unit(s)
          </div>
  
          <button
            class="buy-button"
            onclick="addToCart(${product.id})"
            ${product.stock <= 0 ? "disabled" : ""}>
            🛒 Add to Cart
          </button>
  
          <div class="specifications">
            <h3>Product Specifications</h3>
            <p>${product.specs}</p>
          </div>
  
        </div>
      </div>
    `;

    document.getElementById("productModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeProduct() {
    document.getElementById("productModal").style.display = "none";
    document.body.style.overflow = "auto";
}

function closeProductOutside(event) {
    if (event.target.id === "productModal") {
        closeProduct();
    }
}


// ADD TO CART

function addToCart(id) {
    const product = products.find(p => p.id === id);

    if (!product || product.stock <= 0) {
        alert("Sorry! This product is out of stock.");
        return;
    }

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            quantity: 1
        });
    }

    product.stock--;
    product.sales = (product.sales || 0) + 1;

    addUpdate(
        "Purchase reserved: " + product.name,
        "One unit added to cart. Remaining stock: " + product.stock,
        "success"
    );

    refreshMarketplace();
    openProduct(id);
}


// CART

function openCart() {
    document.getElementById("cartPanel").classList.add("open");
    document.getElementById("cartOverlay").style.display = "block";
}

function closeCart() {
    document.getElementById("cartPanel").classList.remove("open");
    document.getElementById("cartOverlay").style.display = "none";
}

function updateCart() {
    let count = 0;
    let total = 0;

    cart.forEach(function(item) {
        count += item.quantity;
        total += item.price * item.quantity;
    });

    document.getElementById("cartCount").textContent = count;
    document.getElementById("cartItems").textContent = count;

    document.getElementById("cartTotal").textContent =
        total.toLocaleString("en-IN");

    displayCart();
}

function displayCart() {
    const container = document.getElementById("cartList");

    if (cart.length === 0) {
        container.innerHTML = `
        <div class="empty-cart">
          <div>🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add products to continue.</p>
        </div>
      `;
        return;
    }

    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div>
          <h4>${item.icon} ${item.name}</h4>
  
          <p>
            ₹${item.price.toLocaleString("en-IN")}
            × ${item.quantity}
          </p>
  
          <button
            class="remove-btn"
            onclick="removeFromCart(${item.id})">
            Remove
          </button>
        </div>
  
        <strong>
          ₹${(item.price * item.quantity).toLocaleString("en-IN")}
        </strong>
      </div>
    `).join("");
}


// REMOVE CART ITEM

function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);

    if (index === -1) return;

    const item = cart[index];

    const product = products.find(p => p.id === id);

    if (product) {
        product.stock += item.quantity;
    }

    cart.splice(index, 1);

    addUpdate(
        "Cart updated",
        item.name + " removed and stock returned to inventory.",
        "info"
    );

    refreshMarketplace();
}


// CHECKOUT

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const purchased = [...cart];

    cart = [];

    addUpdate(
        "Order placed successfully",
        purchased.length + " product type(s) checked out.",
        "success"
    );

    refreshMarketplace();
    closeCart();

    alert("Order placed successfully! 🎉");
}


// SEARCH

function searchProducts() {
    const value = document.getElementById("searchBox").value;

    displayProducts(getFilteredProducts(value));
}


// CATEGORY FILTER

function filterCategory(category, button) {
    currentCategory = category;

    document.querySelectorAll(".filter").forEach(function(btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    searchProducts();
}


// INVENTORY TABLE

function displayInventory() {
    const table = document.getElementById("inventoryTable");

    table.innerHTML = products.map(function(product) {
        const [status, cls] = stockStatus(product);

        return `
        <tr>
          <td>${product.icon} ${product.name}</td>
          <td>${product.category}</td>
          <td>₹${product.price.toLocaleString("en-IN")}</td>
          <td>${product.stock}</td>
          <td>${product.sales || 0}</td>
  
          <td>
            <span class="status-pill ${cls}">
              ${status}
            </span>
          </td>
  
          <td>
            <button
              class="add-stock"
              onclick="addStock(${product.id})">
              + Add 5
            </button>
          </td>
        </tr>
      `;
    }).join("");
}


// MANUAL STOCK UPDATE

function addStock(id) {
    const product = products.find(p => p.id === id);

    if (!product) return;

    product.stock += 5;
    product.restockPending = false;

    addUpdate(
        "Manual restock: " + product.name,
        "Seller added 5 units. Current stock: " + product.stock,
        "success"
    );

    refreshMarketplace();
}


// DASHBOARD

function updateDashboard() {
    document.getElementById("totalProducts").textContent =
        products.length;

    document.getElementById("totalStock").textContent =
        products.reduce((sum, p) => sum + p.stock, 0);

    document.getElementById("lowStock").textContent =
        products.filter(
            p => p.stock > 0 && p.stock <= LOW_STOCK_LIMIT
        ).length;
}


// BEST SELLERS

function displayBestSellers() {
    const top = [...products]
        .sort((a, b) => b.sales - a.sales)
        .slice(0, 3);

    document.getElementById("bestSellerList").innerHTML =
        top.map((product, index) => `
        <article class="best-card">
          <div class="best-rank">#${index + 1}</div>
          <div class="best-icon">${product.icon}</div>
  
          <div>
            <h3>${product.name}</h3>
            <p>${product.sales || 0} successful purchase(s)</p>
          </div>
        </article>
      `).join("");
}


// ADD NEW PRODUCT

function addNewProduct() {
    const name = prompt("Enter the new product name:");

    if (!name || !name.trim()) return;

    const price = Number(
        prompt("Enter product price in ₹:", "9999")
    );

    if (!Number.isFinite(price) || price <= 0) {
        alert("Please enter a valid price.");
        return;
    }

    const category = prompt(
        "Enter category: Gaming, Smartphones, Laptops or Accessories",
        "Accessories"
    );

    const allowed = [
        "Gaming",
        "Smartphones",
        "Laptops",
        "Accessories"
    ];

    if (!allowed.includes(category)) {
        alert("Please enter a valid category.");
        return;
    }

    const icon =
        category === "Gaming" ? "🎮" :
        category === "Smartphones" ? "📱" :
        category === "Laptops" ? "💻" : "🎧";

    const product = {
        id: nextProductId++,
        name: name.trim(),
        category: category,
        subcategory: "New Arrival",
        price: price,
        stock: 10,
        icon: icon,
        description: "Newly launched product added to StockSync marketplace.",
        specs: "New product · Inventory tracking enabled",
        sales: 0,
        isNew: true
    };

    products.unshift(product);

    addUpdate(
        "New product launched: " + product.name,
        "10 units are now available in the marketplace.",
        "success"
    );

    refreshMarketplace();
}


// RACE CONDITION DEMO

let raceDemoStock = 1;

function runRaceDemo() {
    const result = document.getElementById("raceResult");
    const button = document.querySelector(".race-btn");

    if (raceDemoStock <= 0) {
        resetRaceDemo();
    }

    result.textContent =
        "Shopper A and Shopper B are trying to reserve the last unit...";

    button.disabled = true;

    setTimeout(function() {
        const winner =
            Math.random() < 0.5 ? "Shopper A" : "Shopper B";

        raceDemoStock = 0;

        result.textContent =
            "🏆 " + winner +
            " wins! The last unit is locked. The other shopper sees SOLD OUT.";

        document.getElementById("raceStock").textContent =
            "0 units · SOLD OUT";

        addUpdate(
            "Last-unit race completed",
            winner + " secured the final unit. The second shopper received a sold-out message.",
            "alert"
        );

        button.disabled = false;
        button.textContent = "Reset & run again";
        button.onclick = resetRaceDemo;

    }, 1200);
}

function resetRaceDemo() {
    raceDemoStock = 1;

    document.getElementById("raceStock").textContent = "1 unit";

    document.getElementById("raceResult").textContent =
        "Demo reset. Ready for another race.";

    const button = document.querySelector(".race-btn");

    button.textContent = "Run shopper race →";
    button.onclick = runRaceDemo;
}


// SCROLL

function goToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}