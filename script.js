/* =====================================================
   SYNCMARKET PRODUCT DATABASE
===================================================== */

const products = [

    /* GAMING */

    {
        id: 1,
        name: "PlayStation 5",
        category: "Gaming",
        subcategory: "PlayStation",
        price: 54999,
        stock: 5,
        icon: "🎮",
        description: "Next generation PlayStation console for an immersive gaming experience.",
        specs: "825GB SSD | 4K Gaming | Ray Tracing | 120Hz"
    },

    {
        id: 2,
        name: "PlayStation 5 Slim",
        category: "Gaming",
        subcategory: "PlayStation",
        price: 49999,
        stock: 8,
        icon: "🎮",
        description: "Slim and powerful PlayStation console with fast loading and smooth gameplay.",
        specs: "1TB SSD | 4K Gaming | HDR | Wi-Fi"
    },

    {
        id: 3,
        name: "PlayStation 5 Pro",
        category: "Gaming",
        subcategory: "PlayStation",
        price: 79999,
        stock: 5,
        icon: "🎮",
        description: "High performance PlayStation designed for advanced gaming and graphics.",
        specs: "2TB SSD | Advanced Ray Tracing | 4K | 8K Support"
    },

    {
        id: 4,
        name: "Xbox Series X",
        category: "Gaming",
        subcategory: "Xbox",
        price: 54990,
        stock: 7,
        icon: "🎮",
        description: "Powerful Xbox console with fast loading and high quality gaming.",
        specs: "1TB SSD | 4K | 120 FPS | HDR"
    },

    {
        id: 5,
        name: "Xbox Series S",
        category: "Gaming",
        subcategory: "Xbox",
        price: 34990,
        stock: 12,
        icon: "🎮",
        description: "Compact digital gaming console suitable for modern gaming.",
        specs: "512GB SSD | 1440p | HDR | Digital"
    },


    /* ACCESSORIES */

    {
        id: 6,
        name: "PS5 DualSense Controller",
        category: "Accessories",
        subcategory: "Controller",
        price: 5999,
        stock: 20,
        icon: "🎮",
        description: "Wireless controller with adaptive triggers and haptic feedback.",
        specs: "Wireless | Haptic Feedback | Adaptive Triggers | USB-C"
    },

    {
        id: 7,
        name: "Xbox Wireless Controller",
        category: "Accessories",
        subcategory: "Controller",
        price: 5499,
        stock: 15,
        icon: "🎮",
        description: "Comfortable wireless controller for Xbox and PC gaming.",
        specs: "Bluetooth | Wireless | PC Compatible"
    },

    {
        id: 8,
        name: "Gaming RGB Keyboard",
        category: "Accessories",
        subcategory: "Gaming",
        price: 2999,
        stock: 18,
        icon: "⌨️",
        description: "RGB mechanical gaming keyboard with responsive keys.",
        specs: "Mechanical | RGB | USB | Anti-Ghosting"
    },

    {
        id: 9,
        name: "Gaming Mouse",
        category: "Accessories",
        subcategory: "Gaming",
        price: 1999,
        stock: 25,
        icon: "🖱️",
        description: "High precision gaming mouse designed for competitive gaming.",
        specs: "12000 DPI | RGB | USB | 6 Buttons"
    },

    {
        id: 10,
        name: "Gaming Headset",
        category: "Accessories",
        subcategory: "Gaming",
        price: 3499,
        stock: 14,
        icon: "🎧",
        description: "Gaming headset with clear audio and comfortable ear cushions.",
        specs: "7.1 Surround | Microphone | USB | RGB"
    },


    /* IPHONE */

    {
        id: 11,
        name: "iPhone 16",
        category: "Smartphones",
        subcategory: "Apple",
        price: 69999,
        stock: 15,
        icon: "📱",
        description: "Powerful iPhone with modern design and advanced camera features.",
        specs: "128GB | A18 Chip | 48MP Camera | 5G"
    },

    {
        id: 12,
        name: "iPhone 16 Plus",
        category: "Smartphones",
        subcategory: "Apple",
        price: 79999,
        stock: 10,
        icon: "📱",
        description: "Large display iPhone designed for entertainment and everyday use.",
        specs: "128GB | A18 Chip | 48MP Camera | 5G"
    },

    {
        id: 13,
        name: "iPhone 16 Pro",
        category: "Smartphones",
        subcategory: "Apple",
        price: 109999,
        stock: 8,
        icon: "📱",
        description: "Professional iPhone with advanced camera and high performance processor.",
        specs: "128GB | A18 Pro | Pro Camera | 5G"
    },

    {
        id: 14,
        name: "iPhone 16 Pro Max",
        category: "Smartphones",
        subcategory: "Apple",
        price: 119999,
        stock: 6,
        icon: "📱",
        description: "Premium iPhone with large display and professional camera system.",
        specs: "256GB | A18 Pro | 5x Telephoto | 5G"
    },

    {
        id: 15,
        name: "iPhone 15",
        category: "Smartphones",
        subcategory: "Apple",
        price: 59999,
        stock: 18,
        icon: "📱",
        description: "Powerful everyday iPhone with modern design and excellent camera.",
        specs: "128GB | A16 Bionic | 48MP | 5G"
    },


    /* SAMSUNG */

    {
        id: 16,
        name: "Samsung Galaxy S24",
        category: "Smartphones",
        subcategory: "Samsung",
        price: 64999,
        stock: 12,
        icon: "📱",
        description: "Premium Samsung smartphone with powerful performance and camera.",
        specs: "256GB | Snapdragon | 50MP Camera | AMOLED"
    },

    {
        id: 17,
        name: "Samsung Galaxy S24 Plus",
        category: "Smartphones",
        subcategory: "Samsung",
        price: 79999,
        stock: 9,
        icon: "📱",
        description: "Large premium display smartphone with powerful performance.",
        specs: "256GB | Snapdragon | AMOLED | 5G"
    },

    {
        id: 18,
        name: "Samsung Galaxy S24 Ultra",
        category: "Smartphones",
        subcategory: "Samsung",
        price: 109999,
        stock: 7,
        icon: "📱",
        description: "Flagship Samsung phone with S Pen and professional camera system.",
        specs: "256GB | Snapdragon | 200MP | S Pen"
    },

    {
        id: 19,
        name: "Samsung Galaxy A55",
        category: "Smartphones",
        subcategory: "Samsung",
        price: 39999,
        stock: 18,
        icon: "📱",
        description: "Balanced Samsung smartphone for everyday use and entertainment.",
        specs: "256GB | AMOLED | 50MP | 5G"
    },

    {
        id: 20,
        name: "Samsung Galaxy A35",
        category: "Smartphones",
        subcategory: "Samsung",
        price: 29999,
        stock: 20,
        icon: "📱",
        description: "Affordable Samsung smartphone with smooth display and good camera.",
        specs: "128GB | AMOLED | 50MP | 5G"
    },


    /* MACBOOK */

    {
        id: 21,
        name: "MacBook Air M2",
        category: "Laptops",
        subcategory: "Apple",
        price: 89999,
        stock: 8,
        icon: "💻",
        description: "Lightweight laptop with excellent battery life and Apple Silicon performance.",
        specs: "M2 | 8GB RAM | 256GB SSD | 13.6 inch"
    },

    {
        id: 22,
        name: "MacBook Air M3",
        category: "Laptops",
        subcategory: "Apple",
        price: 104999,
        stock: 6,
        icon: "💻",
        description: "Powerful and lightweight MacBook for study, work and development.",
        specs: "M3 | 8GB RAM | 256GB SSD | 13.6 inch"
    },

    {
        id: 23,
        name: "MacBook Pro M3",
        category: "Laptops",
        subcategory: "Professional",
        price: 169999,
        stock: 5,
        icon: "💻",
        description: "Professional laptop for developers, designers and creators.",
        specs: "M3 | 16GB RAM | 512GB SSD | Retina Display"
    },


    /* GAMING LAPTOPS */

    {
        id: 24,
        name: "ASUS ROG Strix G16",
        category: "Laptops",
        subcategory: "Gaming",
        processor: "Intel i9",
        price: 149999,
        stock: 6,
        icon: "💻",
        description: "High performance gaming laptop with powerful CPU and dedicated graphics.",
        specs: "Intel i9 | RTX 4060 | 16GB RAM | 1TB SSD"
    },

    {
        id: 25,
        name: "Lenovo Legion 5",
        category: "Laptops",
        subcategory: "Gaming",
        processor: "AMD Ryzen 7",
        price: 124999,
        stock: 8,
        icon: "💻",
        description: "Powerful gaming laptop designed for gaming and multitasking.",
        specs: "Ryzen 7 | RTX 4060 | 16GB RAM | 1TB SSD"
    },

    {
        id: 26,
        name: "HP Victus Gaming",
        category: "Laptops",
        subcategory: "Gaming",
        processor: "AMD Ryzen 5",
        price: 84999,
        stock: 10,
        icon: "💻",
        description: "Gaming laptop for gaming, college work and entertainment.",
        specs: "Ryzen 5 | RTX 3050 | 16GB RAM | 512GB SSD"
    },

    {
        id: 27,
        name: "Acer Nitro V",
        category: "Laptops",
        subcategory: "Gaming",
        processor: "Intel i5",
        price: 74999,
        stock: 9,
        icon: "💻",
        description: "Gaming laptop with dedicated graphics for modern games.",
        specs: "Intel i5 | RTX 4050 | 16GB RAM | 512GB SSD"
    },


    /* BUSINESS / STUDENT */

    {
        id: 28,
        name: "Dell Inspiron 15",
        category: "Laptops",
        subcategory: "Business",
        processor: "Intel i5",
        price: 64999,
        stock: 14,
        icon: "💻",
        description: "Reliable laptop for office work, coding and everyday productivity.",
        specs: "Intel i5 | 16GB RAM | 512GB SSD | Full HD"
    },

    {
        id: 29,
        name: "HP Pavilion 14",
        category: "Laptops",
        subcategory: "Student",
        processor: "Intel i5",
        price: 61999,
        stock: 12,
        icon: "💻",
        description: "Compact laptop suitable for students and daily productivity.",
        specs: "Intel i5 | 16GB RAM | 512GB SSD | Full HD"
    },

    {
        id: 30,
        name: "Lenovo IdeaPad Slim 5",
        category: "Laptops",
        subcategory: "Student",
        processor: "AMD Ryzen 5",
        price: 57999,
        stock: 15,
        icon: "💻",
        description: "Slim laptop designed for students, work and entertainment.",
        specs: "Ryzen 5 | 16GB RAM | 512GB SSD | Full HD"
    },

    {
        id: 31,
        name: "Dell G15 Gaming",
        category: "Laptops",
        subcategory: "Gaming",
        processor: "Intel i7",
        price: 99999,
        stock: 7,
        icon: "💻",
        description: "Gaming focused laptop with strong processing and graphics performance.",
        specs: "Intel i7 | RTX 4050 | 16GB RAM | 1TB SSD"
    },

    {
        id: 32,
        name: "ASUS TUF Gaming F15",
        category: "Laptops",
        subcategory: "Gaming",
        processor: "Intel i7",
        price: 94999,
        stock: 8,
        icon: "💻",
        description: "Durable gaming laptop designed for high performance gaming.",
        specs: "Intel i7 | RTX 4060 | 16GB RAM | 1TB SSD"
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let cart = [];

let currentCategory = "All";


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", function() {

    setTimeout(function() {

        const loader =
            document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(function() {

            loader.style.display = "none";

        }, 500);

    }, 1000);


    displayProducts();

    displayInventory();

    updateDashboard();

    updateCart();

});


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(list = products) {

    const grid =
        document.getElementById("productGrid");


    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `

            <div class="no-products">

                <h2>
                    No Products Found
                </h2>

                <p>
                    Try another search.
                </p>

            </div>

        `;

        return;

    }


    list.forEach(function(product) {

        let stockText;

        let stockClass;


        if (product.stock === 0) {

            stockText = "Out of Stock";

            stockClass = "stock-out";

        } else if (product.stock <= 5) {

            stockText =
                "Only " +
                product.stock +
                " left";

            stockClass = "stock-low";

        } else {

            stockText =
                product.stock +
                " available";

            stockClass = "stock-good";

        }


        grid.innerHTML += `

            <div
                class="product-card"
                onclick="openProduct(${product.id})">

                <div class="product-image">

                    ${product.icon}

                </div>


                <div class="product-content">

                    <span class="product-category">

                        ${product.subcategory}

                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <p class="product-description">

                        ${product.description}

                    </p>


                    <div class="product-price">

                        ₹${product.price.toLocaleString()}

                    </div>


                    <div
                        class="product-stock ${stockClass}">

                        ${stockText}

                    </div>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   PRODUCT DETAILS
===================================================== */

function openProduct(id) {

    const product =
        products.find(function(item) {

            return item.id === id;

        });


    if (!product) {
        return;
    }


    const modal =
        document.getElementById("productModal");


    const details =
        document.getElementById("productDetails");


    let stockText;

    let stockClass;


    if (product.stock === 0) {

        stockText = "✕ Out of Stock";

        stockClass = "stock-out";

    } else if (product.stock <= 5) {

        stockText =
            "⚠ Only " +
            product.stock +
            " left";

        stockClass = "stock-low";

    } else {

        stockText =
            "✓ " +
            product.stock +
            " items available";

        stockClass = "stock-good";

    }


    details.innerHTML = `

        <div class="product-detail">

            <div class="detail-image">

                ${product.icon}

            </div>


            <div class="detail-info">

                <span class="detail-category">

                    ${product.category}
                    /
                    ${product.subcategory}

                </span>


                <h1>
                    ${product.name}
                </h1>


                <p class="detail-description">

                    ${product.description}

                </p>


                <div class="detail-price">

                    ₹${product.price.toLocaleString()}

                </div>


                <div class="detail-stock ${stockClass}">

                    ${stockText}

                </div>


                <button
                    class="buy-button"
                    onclick="addToCart(${product.id})"
                    ${product.stock === 0 ? "disabled" : ""}>

                    🛒 Add to Cart

                </button>


                <div class="specifications">

                    <h3>
                        Product Specifications
                    </h3>

                    <p>
                        ${product.specs}
                    </p>

                </div>

            </div>

        </div>

    `;


    modal.style.display = "flex";

    document.body.style.overflow = "hidden";

}


/* =====================================================
   CLOSE PRODUCT
===================================================== */

function closeProduct() {

    document.getElementById(
        "productModal"
    ).style.display = "none";

    document.body.style.overflow = "auto";

}


function closeProductOutside(event) {

    if (
        event.target.id === "productModal"
    ) {

        closeProduct();

    }

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(id) {

    const product =
        products.find(function(item) {

            return item.id === id;

        });


    if (!product) {
        return;
    }


    if (product.stock <= 0) {

        alert(
            "This product is out of stock."
        );

        return;

    }


    const existing =
        cart.find(function(item) {

            return item.id === id;

        });


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


    updateCart();

    displayProducts();

    displayInventory();

    updateDashboard();


    alert(
        product.name +
        " added to cart successfully!"
    );

}


/* =====================================================
   CART
===================================================== */

function openCart() {

    document.getElementById(
        "cartPanel"
    ).classList.add("open");


    document.getElementById(
        "cartOverlay"
    ).style.display = "block";

}


function closeCart() {

    document.getElementById(
        "cartPanel"
    ).classList.remove("open");


    document.getElementById(
        "cartOverlay"
    ).style.display = "none";

}


function updateCart() {

    let count = 0;

    let total = 0;


    cart.forEach(function(item) {

        count += item.quantity;

        total +=
            item.price *
            item.quantity;

    });


    document.getElementById(
        "cartCount"
    ).innerText = count;


    document.getElementById(
        "cartItems"
    ).innerText = count;


    document.getElementById(
            "cartTotal"
        ).innerText =
        total.toLocaleString();


    displayCart();

}


function displayCart() {

    const container =
        document.getElementById("cartList");


    container.innerHTML = "";


    if (cart.length === 0) {

        container.innerHTML = `

            <div style="
                text-align:center;
                padding:60px 10px;
                color:#64748b;
            ">

                <div style="
                    font-size:55px;
                    margin-bottom:15px;
                ">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add products to continue.
                </p>

            </div>

        `;

        return;

    }


    cart.forEach(function(item) {

        container.innerHTML += `

            <div class="cart-item">

                <div>

                    <h4>
                        ${item.icon}
                        ${item.name}
                    </h4>

                    <p>
                        ₹${item.price.toLocaleString()}
                        × ${item.quantity}
                    </p>

                    <button
                        class="remove-btn"
                        onclick="removeFromCart(${item.id})">

                        Remove

                    </button>

                </div>


                <strong>

                    ₹${(
                        item.price *
                        item.quantity
                    ).toLocaleString()}

                </strong>

            </div>

        `;

    });

}


/* =====================================================
   REMOVE CART ITEM
===================================================== */

function removeFromCart(id) {

    const index =
        cart.findIndex(function(item) {

            return item.id === id;

        });


    if (index === -1) {
        return;
    }


    const item =
        cart[index];


    const product =
        products.find(function(p) {

            return p.id === id;

        });


    if (product) {

        product.stock += item.quantity;

    }


    cart.splice(index, 1);


    updateCart();

    displayProducts();

    displayInventory();

    updateDashboard();

}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    alert(
        "Order placed successfully! 🎉"
    );


    cart = [];


    updateCart();

    closeCart();

    displayProducts();

    displayInventory();

    updateDashboard();

}


/* =====================================================
   SEARCH
===================================================== */

function searchProducts() {

    const value =
        document.getElementById(
            "searchBox"
        ).value
        .toLowerCase()
        .trim();


    const filtered =
        products.filter(function(product) {

            const text =
                (
                    product.name +
                    " " +
                    product.category +
                    " " +
                    product.subcategory +
                    " " +
                    (product.processor || "") +
                    " " +
                    product.description
                ).toLowerCase();


            const matchesSearch =
                text.includes(value);


            const matchesCategory =
                currentCategory === "All" ||
                product.category === currentCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    displayProducts(filtered);

}


/* =====================================================
   CATEGORY FILTER
===================================================== */

function filterCategory(category, button) {

    currentCategory = category;


    document
        .querySelectorAll(".filter")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    searchProducts();

}


/* =====================================================
   INVENTORY
===================================================== */

function displayInventory() {

    const table =
        document.getElementById(
            "inventoryTable"
        );


    table.innerHTML = "";


    products.forEach(function(product) {

        let status;

        let statusClass;


        if (product.stock === 0) {

            status = "Out of Stock";

            statusClass = "stock-out";

        } else if (product.stock <= 5) {

            status = "Low Stock";

            statusClass = "stock-low";

        } else {

            status = "Available";

            statusClass = "stock-good";

        }


        table.innerHTML += `

            <tr>

                <td>
                    ${product.icon}
                    ${product.name}
                </td>

                <td>
                    ${product.category}
                </td>

                <td>
                    ₹${product.price.toLocaleString()}
                </td>

                <td>
                    ${product.stock}
                </td>

                <td>

                    <span
                        class="${statusClass}">

                        ${status}

                    </span>

                </td>

                <td>

                    <button
                        class="add-stock"
                        onclick="addStock(${product.id})">

                        + Add Stock

                    </button>

                </td>

            </tr>

        `;

    });

}


/* =====================================================
   ADD STOCK
===================================================== */

function addStock(id) {

    const product =
        products.find(function(item) {

            return item.id === id;

        });


    if (!product) {
        return;
    }


    product.stock += 5;


    displayProducts();

    displayInventory();

    updateDashboard();


    alert(
        product.name +
        " stock increased by 5."
    );

}


/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

    let totalStock = 0;

    let lowStock = 0;


    products.forEach(function(product) {

        totalStock += product.stock;


        if (
            product.stock > 0 &&
            product.stock <= 5
        ) {

            lowStock++;

        }

    });


    document.getElementById(
            "totalProducts"
        ).innerText =
        products.length;


    document.getElementById(
            "totalStock"
        ).innerText =
        totalStock;


    document.getElementById(
            "lowStock"
        ).innerText =
        lowStock;

}


/* =====================================================
   SCROLL
===================================================== */

function goToProducts() {

    document.getElementById(
        "products"
    ).scrollIntoView({
        behavior: "smooth"
    });

}