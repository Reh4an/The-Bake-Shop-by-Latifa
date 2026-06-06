// --- Menu Data ---
const menuItems = [
    // Healthy Cakes
    { id: 1, name: "Rustic Wheat Loaf", category: "Healthy Cakes", desc: "A wholesome, fiber-rich loaf baked to perfection.", weight: "1/2 kg", price: 400, image: "assets/Plain Wheat Cake.png", tags: ["Vegan Friendly"],
      hasOptions: true,
      options: [
          { name: "1/2 kg", price: 400 },
          { name: "1kg", price: 700 }
      ]
    },
    { id: 2, name: "Superseed Power Cake", category: "Healthy Cakes", desc: "Packed with nutritious seeds for a healthy crunch.", weight: "1/2 kg", price: 500, image: "assets/Super Seed Health Cake.png", tags: ["Bestseller", "Nutty"],
      hasOptions: true,
      options: [
          { name: "1/2 kg", price: 500 },
          { name: "1kg", price: 900 }
      ]
    },
    { id: 3, name: "Royal Date Walnut Cake", category: "Healthy Cakes", desc: "Naturally sweetened with premium dates and crunchy walnuts.", weight: "1/2 kg", price: 550, image: "assets/Date Walnut Health Cake.png", tags: ["Signature", "Nutty"],
      hasOptions: true,
      options: [
          { name: "1/2 kg", price: 550 },
          { name: "1kg", price: 950 }
      ]
    },
    { id: 4, name: "Signature Fruit & Nut Loaf", category: "Healthy Cakes", desc: "A delightful mix of fresh fruits and roasted nuts.", weight: "1/2 kg", price: 550, image: "assets/Fruit and Nut Health Cake.png", tags: ["Fresh Fruit", "Nutty"],
      hasOptions: true,
      options: [
          { name: "1/2 kg", price: 550 },
          { name: "1kg", price: 950 }
      ]
    },
    
    // Tea Cakes
    { id: 6, name: "Vanilla Cloud Block", category: "Tea Cakes", desc: "Light, airy, and delicately flavored vanilla block.", weight: "1/2 kg", price: 180, image: "assets/Vanilla Cake Block.png", tags: ["Signature"],
      hasOptions: true, options: [{ name: "1/2 kg", price: 180 }, { name: "1kg", price: 300 }] },
    { id: 7, name: "Choco Chip Vanilla Slice", category: "Tea Cakes", desc: "Classic vanilla studded with rich chocolate chips.", weight: "1/2 kg", price: 200, image: "assets/Vanilla Chocochip Cake Block.png", tags: ["Bestseller"],
      hasOptions: true, options: [{ name: "1/2 kg", price: 200 }, { name: "1kg", price: 350 }] },
    { id: 8, name: "Tutti Frutti Fiesta", category: "Tea Cakes", desc: "A nostalgic treat bursting with colorful candied fruits.", weight: "1/2 kg", price: 200, image: "assets/Tootifrooti Cake Block.png", tags: ["Fresh Fruit"],
      hasOptions: true, options: [{ name: "1/2 kg", price: 200 }, { name: "1kg", price: 350 }] },
    { id: 9, name: "Belgian Choco Block", category: "Tea Cakes", desc: "Intense dark chocolate flavor in every bite.", weight: "1/2 kg", price: 250, image: "assets/chocolate cake block.jpeg", tags: ["Rich Chocolate"],
      hasOptions: true, options: [{ name: "1/2 kg", price: 250 }, { name: "1kg", price: 450 }] },
    { id: 10, name: "Pineapple Paradise", category: "Tea Cakes", desc: "Tropical goodness loaded with fresh pineapple chunks.", weight: "1/2 kg", price: 250, image: "assets/Pineapple Cake Block.png", tags: ["Fresh Fruit"],
      hasOptions: true, options: [{ name: "1/2 kg", price: 250 }, { name: "1kg", price: 450 }] },
    { id: 11, name: "Mocha Walnut Block", category: "Tea Cakes", desc: "The perfect pairing of rich coffee and roasted walnuts.", weight: "1/2 kg", price: 250, image: "assets/Coffee Walnut Cake Block.png", tags: ["Nutty", "Signature"],
      hasOptions: true, options: [{ name: "1/2 kg", price: 250 }, { name: "1kg", price: 400 }] },
    { id: 12, name: "Majestic Walnut Slice", category: "Tea Cakes", desc: "A moist tea cake packed with sweet dates and crunchy walnuts, perfect with coffee or chai.", weight: "1/2 kg", price: 280, image: "assets/Date Walnut Cake Block.png", tags: ["Nutty"],
      hasOptions: true, options: [{ name: "1/2 kg", price: 280 }, { name: "1kg", price: 500 }] },
    { id: 13, name: "Hazelnut Praline Block", category: "Tea Cakes", desc: "Warm hazelnut flavors wrapped in a soft tea cake", weight: "1/2 kg", price: 270, image: "assets/Hazelnut Cake Block.png", tags: ["Premium", "Nutty"],
      hasOptions: true, options: [{ name: "1/2 kg", price: 270 }, { name: "1kg", price: 500 }] },
    { id: 14, name: "Strawberry Velvet Slice", category: "Tea Cakes", desc: "Soft velvet cake layered with fresh strawberries.", weight: "1/2 kg", price: 300, image: "assets/stawberry cake block.jpeg", tags: ["Fresh Fruit"],
      hasOptions: true, options: [{ name: "1/2 kg", price: 300 }, { name: "1kg", price: 500 }] },
    { id: 15, name: "Blueberry Bliss Block", category: "Tea Cakes", desc: "Bursting with juicy, antioxidant-rich blueberries.", weight: "1/2 kg", price: 300, image: "assets/Blue berry cake block.jpeg", tags: ["Fresh Fruit", "Bestseller"],
      hasOptions: true, options: [{ name: "1/2 kg", price: 300 }, { name: "1kg", price: 500 }] },

    // Wheat & Jaggery with Ganache Cakes (Mapped to Healthy Cakes)
    { id: 16, name: "Sugar-Free Ganache Indulgence", category: "Healthy Cakes", desc: "Guilt-free decadence made with zero refined sugar.", weight: "1/2 kg", price: 650, image: "assets/wheat jagery cake with ganache.jpeg", tags: ["Premium", "Signature"],
      hasOptions: true,
      options: [
          { name: "Super Seeds - Normal Ganache", price: 650 },
          { name: "Date & Walnut - Normal Ganache", price: 650 },
          { name: "Fruit & Nut - Normal Ganache", price: 650 },
          { name: "Super Seeds - Sugar Free Ganache", price: 1000 },
          { name: "Date & Walnut - Sugar Free Ganache", price: 1000 },
          { name: "Fruit & Nut - Sugar Free Ganache", price: 1000 }
      ]
    },
    { id: 17, name: "Classic Ganache Cake", category: "Creamy Cakes", desc: "Rich and glossy chocolate ganache over a chocolatey base.", weight: "1/2 kg", price: 650, image: "assets/chocolate ganache cake with strawberry.jpg", tags: ["Rich Chocolate"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 650 }, { name: "1kg", price: 1200 }] },
    
    // Cupcake Delights
    { id: 19, name: "Buttercream Bliss Cupcake", category: "Cupcakes", desc: "Soft sponge topped with silky smooth buttercream.", weight: "MOQ 12 pcs", price: 30, image: "assets/Buttercream Cupcake.png", tags: ["Signature"] },
    { id: 20, name: "Vanilla Choco Chip Cupcake", category: "Cupcakes", desc: "Classic vanilla studded with Belgian choco chips.", weight: "MOQ 12 pcs", price: 30, image: "assets/vanilla_choco_bare.png", tags: ["Bestseller"] },
    { id: 21, name: "Pineapple Paradise Cupcake", category: "Cupcakes", desc: "A fluffy pineapple-infused cupcake finished with smooth whipped cream.", weight: "MOQ 12 pcs", price: 30, image: "assets/Pineapple Cupcake.png", tags: ["Fresh Fruit"] },
    { id: 22, name: "Butterscotch Dream Cupcake", category: "Cupcakes", desc: "Classic butterscotch indulgence in every bite.", weight: "MOQ 12 pcs", price: 30, image: "assets/Butterscotch Cupcake.png", tags: ["Bestseller"] },
    { id: 23, name: "Red Velvet Buttercream Cupcake", category: "Cupcakes", desc: "Classic red velvet cupcake topped with smooth, velvety buttercream frosting.", weight: "MOQ 12 pcs", price: 45, image: "assets/Red Velvet Cupcake (buttercream).png", tags: ["Signature"] },
    { id: 24, name: "Signature Red Velvet Cream Cheese Cupcake", category: "Cupcakes", desc: "Authentic red velvet with premium cream cheese frosting.", weight: "MOQ 12 pcs", price: 50, image: "assets/Red Velvet Cupcake (cream cheese).png", tags: ["Cream Cheese", "Premium"] },
    { id: 25, name: "Chocolate Ganache Cupcake", category: "Cupcakes", desc: "Intensely chocolatey cupcakes for true cocoa lovers.", weight: "MOQ 12 pcs", price: 35, image: "assets/Chocolate Ganache Cupcake.png", tags: ["Rich Chocolate"] },
    { id: 26, name: "Royal Date Walnut Cupcake", category: "Cupcakes", desc: "Naturally sweet dates and toasted walnuts come together in this comforting treat.", weight: "MOQ 12 pcs", price: 40, image: "assets/date_walnut_bare.png", tags: ["Nutty"] },
    { id: 27, name: "Mocha Walnut Cupcake", category: "Cupcakes", desc: "Rich coffee flavors paired with crunchy walnuts in a perfectly moist cupcake.", weight: "MOQ 12 pcs", price: 30, image: "assets/mocha_walnut_bare.png", tags: ["Nutty"] },
    { id: 100, name: "Mini Cupcakes", category: "Cupcakes", desc: "Bite-sized delights perfect for any celebration.", weight: "MOQ 50 pcs", price: 15, image: "assets/mini_cupcakes_bare.png", tags: ["Bestseller"] },

    // Buttercream Cakes
    { id: 28, name: "Chocolate Buttercream Delight", category: "Creamy Cakes", desc: "Classic chocolate cake draped in lush buttercream.", weight: "1/2 kg", price: 600, image: "assets/chocolate bc cake.jpeg", tags: ["Bestseller", "Rich Chocolate"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 600 }, { name: "1kg", price: 1100 }] },
    { id: 29, name: "Golden Butterscotch Dream", category: "Creamy Cakes", desc: "Soft butterscoth base layered with rich buttercream.", weight: "1/2 kg", price: 500, image: "assets/Butterscotch cake with Bc..jpeg", tags: ["Signature"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 500 }, { name: "1kg", price: 900 }] },
    { id: 30, name: "Vanilla Buterrcream Bliss", category: "Creamy Cakes", desc: "Elegent, vanilla sponge with soft buttercream.", weight: "1/2 kg", price: 700, image: "assets/Vanilla cake with chocolate Bc..jpeg", tags: ["Premium"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 700 }, { name: "1kg", price: 1300 }] },
    { id: 31, name: "Triple Layer Chocolate Indulgence", category: "Creamy Cakes", desc: "Three luxurious layers of deep chocolate goodness.(ganache, buttercream, whipped cream)", weight: "1/2 kg", price: 800, image: "assets/Chocolate cake with ganache layering and Bc. frosting.jpg", tags: ["Rich Chocolate", "Premium"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 800 }, { name: "1kg", price: 1500 }] },
    { id: 32, name: "Red Velvet Buttercream Bliss", category: "Creamy Cakes", desc: "Velvety sponge layered with soft buttercream.", weight: "1/2 kg", price: 700, image: "assets/red valvet cake with buttercream.jpeg", tags: ["Signature"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 700 }, { name: "1kg", price: 1400 }] },
    { id: 33, name: "Signature Red Velvet Cheesed Frost", category: "Creamy Cakes", desc: "Our famous red velvet with rich cream cheese.", weight: "1/2 kg", price: 800, image: "assets/red valvet cake creamcheese.jpg", tags: ["Cream Cheese", "Bestseller"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 800 }, { name: "1kg", price: 1600 }] },

    // Cheesecakes
    { id: 34, name: "Blueberry Velvet Cheesecake", category: "Cheesecakes", desc: "Creamy baked cheesecake topped with fresh blueberries.", weight: "1/2 kg", price: 800, image: "assets/Blueberry cheese cake.png", tags: ["Cream Cheese", "Fresh Fruit"],
      hasOptions: true,
      options: [
          { name: "1/2 kg", price: 800 },
          { name: "1kg", price: 1600 }
      ]
    },
    { id: 35, name: "Strawberry Bliss Cheesecake", category: "Cheesecakes", desc: "Sweet, tangy, and bursting with fresh strawberry flavor.", weight: "1/2 kg", price: 700, image: "assets/Strawberry cheese cake.png", tags: ["Cream Cheese", "Fresh Fruit"],
      hasOptions: true,
      options: [
          { name: "1/2 kg", price: 700 },
          { name: "1kg", price: 1400 }
      ]
    },
    { id: 36, name: "Lotus Biscoff Heaven", category: "Cheesecakes", desc: "irresistible caramelized cookie cheesecake, biscoff cheesecake.", weight: "1/2 kg", price: 600, image: "assets/Biscoff cheese cake.png", tags: ["Premium", "Bestseller"],
      hasOptions: true,
      options: [
          { name: "1/2 kg", price: 600 },
          { name: "1kg", price: 1200 }
      ]
    },

    // Customized Celebration Cakes
    { id: 37, name: "Golden Whip Vanilla", category: "Creamy Cakes", desc: "Sweet vanillan sponge dipped in layers of whipped cream.", weight: "1/2 kg", price: 400, image: "assets/vanilla whpped cream cake.jpeg", tags: ["Signature"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 400 }, { name: "1kg", price: 800 }] },
    { id: 38, name: "Choco-Whip Cake", category: "Creamy Cakes", desc: "Rich chocolate cake layered with silky whipped cream.", weight: "1/2 kg", price: 500, image: "assets/chocolate whipped cream cake.jpeg", tags: ["Rich Chocolate"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 500 }, { name: "1kg", price: 900 }] },
    { id: 39, name: "Caramel Butterscotch Fantasy", category: "Creamy Cakes", desc: "Drizzled with caramel sauce and whipped cream.", weight: "1/2 kg", price: 600, image: "assets/Butterscotch Cake with Caramel Sauce & Whipped Cream.jpeg", tags: ["Bestseller"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 600 }, { name: "1kg", price: 1100 }] },
    { id: 40, name: "Blueberry Velvet Dream", category: "Creamy Cakes", desc: "Beautifully decorated cake infused with blueberry essence and whipped cream.", weight: "1/2 kg", price: 700, image: "assets/Blue berry whipped cream cake.jpeg", tags: ["Fresh Fruit"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 700 }, { name: "1kg", price: 1300 }] },
    { id: 41, name: "Strawberry Bloom Cake", category: "Creamy Cakes", desc: "A pink-hued strawberry cake kissed with soft whipped cream.", weight: "1/2 kg", price: 600, image: "assets/Strawberry whipped cream cake.jpeg", tags: ["Fresh Fruit"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 600 }, { name: "1kg", price: 1100 }] },
    { id: 43, name: "Royal Rasmalai Fusion", category: "Creamy Cakes", desc: "A rich fusion of indian rasmalai, whipped cream and cake.", weight: "1/2 kg", price: 800, image: "assets/rasmalai cake.jpeg", tags: ["Signature", "Premium"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 800 }, { name: "1kg", price: 1500 }] },
    { id: 42, name: "Pineapple Paradise", category: "Creamy Cakes", desc: "Tropical goodness loaded with fresh pineapple chunks and smooth whipped cream.", weight: "1/2 kg", price: 650, image: "assets/pineapple cake.jpeg", tags: ["Fresh Fruit", "Signature"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 650 }, { name: "1kg", price: 1200 }] },
    { id: 44, name: "Mango Delight", category: "Creamy Cakes", desc: "A rich fusion of classic Indian mangoes, whipped cream and cake.", weight: "1/2 kg", price: 800, image: "assets/mango cake.jpeg", tags: ["Signature"],
      hasOptions: true, customDecorNote: true, options: [{ name: "1/2 kg", price: 800 }, { name: "1kg", price: 1500 }] },

    // Brownies
    { id: 45, name: "Fudgy Walnut Brownie", category: "Brownies & Mousse", desc: "Dense, gooey chocolate loaded with crunchy walnuts.", weight: "Per piece", price: 80, image: "assets/Walnut Brownie.png", tags: ["Rich Chocolate", "Nutty"] },
    { id: 46, name: "Classic Cocoa Brownie", category: "Brownies & Mousse", desc: "The ultimate classic brownie with a perfectly crinkled top.", weight: "Per piece", price: 70, image: "assets/Cakey Brownie.png", tags: ["Rich Chocolate", "Bestseller"] },

    // Dessert Mousse
    { id: 47, name: "Chocolate Velvet Mousse", category: "Brownies & Mousse", desc: "Airy, rich, and intensely chocolatey mousse cup.", weight: "Per cup", price: 70, image: "assets/Chocolate mousse.png", tags: ["Rich Chocolate"] },
    { id: 48, name: "Strawberry Bliss Mousse", category: "Brownies & Mousse", desc: "Light strawberry mousse layered with fresh compote.", weight: "Per cup", price: 80, image: "assets/Strawberry mousse.png", tags: ["Fresh Fruit"] },
    { id: 49, name: "Pineapple Paradise Mousse", category: "Brownies & Mousse", desc: "Refreshing tropical pineapple dessert in a cup.", weight: "Per cup", price: 60, image: "assets/Pineapple mousse.png", tags: ["Fresh Fruit"] },
    { id: 50, name: "Mango Sunshine Mousse", category: "Brownies & Mousse", desc: "Seasonal favorite made with fresh Alphonso mangoes.", weight: "Per cup", price: 60, image: "assets/Mango mousse.png", tags: ["Signature", "Fresh Fruit"] },

        // Cookies
    { id: 51, name: "Wheat chcochips cookies", category: "Cookies", desc: "The goodness of whole wheat meets natural jaggery sweetness and indulgent chocolate chips in every bite", weight: "100gm (8 pcs)", price: 180, image: "assets/Wheat chcochips cookies.png", tags: ["Bestseller"] },
    { id: 52, name: "Ragi Choco almond cookies", category: "Cookies", desc: "Rich in flavor and texture, these ragi cookies bring together nutty almonds and chocolatey goodness.", weight: "100gm (8 pcs)", price: 180, image: "assets/Ragi Choco Almond cookies.png", tags: ["Nutty", "Rich Chocolate"] },
    { id: 53, name: "Ragi Cookies", category: "Cookies", desc: "Lightly crisp and naturally wholesome, perfect for everyday healthy indulgence.", weight: "100gm (8 pcs)", price: 180, image: "assets/Ragi cookies.png", tags: ["Vegan Friendly"] },
    { id: 54, name: "Ragi Oats Cookies", category: "Cookies", desc: "Nutritious ragi and fiber-rich oats come together in a cookie that's both satisfying and delicious.", weight: "100gm (8 pcs)", price: 180, image: "assets/Ragi Oats Cookies.png", tags: ["Vegan Friendly"] },
    { id: 55, name: "Ragi Flaxseed oats cookies", category: "Cookies", desc: "Crafted with ragi, oats, and flaxseeds for a satisfying snack that supports mindful eating", weight: "100gm (8 pcs)", price: 180, image: "assets/Ragi Flaxseed oats cookies.png", tags: ["Vegan Friendly"] },
    { id: 56, name: "Oats chochips cookies", category: "Cookies", desc: "Comforting, delicious, and loaded with choco chips—an everyday favorite for all ages.", weight: "100gm (8 pcs)", price: 180, image: "assets/Oats chochips cookies.png", tags: ["Bestseller"] },
    { id: 57, name: "Oats almond Cookies", category: "Cookies", desc: "Rich in flavor and texture, these cookies make a delightful tea-time companion.", weight: "100gm (8 pcs)", price: 180, image: "assets/Oats almond cookies.png", tags: ["Nutty"] },
    { id: 58, name: "Red velvet cookies", category: "Cookies", desc: "Soft, rich, and irresistibly indulgent, these red velvet cookies offer a touch of luxury in every bite.", weight: "100gm (8 pcs)", price: 180, image: "assets/Redvelvet cookies.png", tags: ["Signature"] },
    { id: 59, name: "Multigrain cookies", category: "Cookies", desc: "Packed with the goodness of multiple grains, these cookies are perfect for mindful snacking.", weight: "100gm (8 pcs)", price: 200, image: "assets/Multigrain cookies.png", tags: ["Vegan Friendly"] },
    { id: 60, name: "Ginger Snap", category: "Cookies", desc: "Crisp and aromatic cookies infused with the warm, comforting flavor of ginger.", weight: "100gm (8 pcs)", price: 180, image: "assets/Ginger Snap.png", tags: ["Signature"] },
    { id: 61, name: "Nutty Mutty Cookies", category: "Cookies", desc: "A delightful medley of premium nuts baked into rich, crunchy cookies bursting with flavor.", weight: "100gm (8 pcs)", price: 180, image: "assets/Nutty mutty cookies.png", tags: ["Nutty"] }
];

// --- Load GSAP ---
const gsapScript = document.createElement('script');
gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
document.head.appendChild(gsapScript);

// --- Shared HTML Components ---
const navbarHTML = `
    <!-- Navbar -->
    <nav class="navbar" id="navbar">
        <a href="index.html" class="nav-logo">
            <span class="accent-text">The</span> Bake Shop
        </a>
        
        <div class="nav-links" id="navLinks">
            <a href="home.html" data-page="home">Home</a>
            <a href="menu.html" data-page="menu">Menu</a>
            <a href="custom-cakes.html" data-page="custom-cakes">Custom Cakes</a>
            <a href="about.html" data-page="about">About</a>
        </div>
        
        <div class="nav-icons">
            <button id="themeToggle" title="Toggle Theme">
                <i class="ph ph-moon"></i>
            </button>
            <button id="cartBtn" title="Cart">
                <i class="ph ph-shopping-cart"></i>
                <span class="cart-count" id="cartCount">0</span>
            </button>
            <a href="https://instagram.com/thebakeshopbylatifa" target="_blank" title="Instagram">
                <i class="ph ph-instagram-logo"></i>
            </a>
            <button class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
`;

const footerHTML = `
    <!-- Floating Support Button (Replaces floating WA if needed, but keeping separate is fine) -->
    <div class="floating-support-btn">
        <a href="https://wa.me/919689327789" target="_blank" class="support-icon">
            <i class="ph ph-whatsapp-logo"></i>
        </a>
    </div>

    <!-- Footer / Contact -->
    <footer id="contact" class="footer">
        <div class="footer-grid">
            <div class="footer-col">
                <div class="nav-logo" style="color:#FDFBF7; margin-bottom: 1rem;">
                    <span class="accent-text" style="color:var(--accent-gold);">The</span> Bake Shop
                </div>
                <p>Taste the love in every bite. Handcrafted artisanal bakery.</p>
                <div class="social-links">
                    <a href="https://instagram.com/thebakeshopbylatifa" target="_blank"><i class="ph ph-instagram-logo"></i></a>
                    <a href="https://wa.me/919689327789" target="_blank"><i class="ph ph-whatsapp-logo"></i></a>
                    <a href="#"><i class="ph ph-facebook-logo"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h3>Quick Links</h3>
                <a href="home.html">Home</a>
                <a href="menu.html">Our Menu</a>
                <a href="custom-cakes.html">Custom Cakes</a>
                <a href="about.html">About</a>
            </div>
            <div class="footer-col">
                <h3>Contact Us</h3>
                <p><i class="ph ph-user"></i> Latifa Shaikh</p>
                <p><i class="ph ph-phone"></i> 9689327789</p>
                <p><i class="ph ph-envelope"></i> order@thebakeshop.com</p>
            </div>
        </div>
        
        <!-- Luxury Branding Footer Statement -->
        <div class="luxury-footer-statement" style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(212,175,55,0.2);">
            <p style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--accent-gold); font-style: italic; animation: fadeIn 2s forwards 0.5s;">
                "Every cake is handcrafted uniquely for your celebration."
            </p>
        </div>
        <div class="footer-bottom" style="margin-top: 1.5rem;">
            &copy; 2026 The Bake Shop by Latifa. All rights reserved.
        </div>
    </footer>
`;

const floatingWaHTML = `
    <!-- Floating WhatsApp -->
    <a href="https://wa.me/919689327789" class="floating-wa" target="_blank" title="Order on WhatsApp">
        <i class="ph ph-whatsapp-logo"></i>
    </a>
`;


const optionsModalHTML = `
    <!-- Options Modal -->
    <div class="modal-overlay" id="optionsModalOverlay" style="z-index: 1001; display: none;"></div>
    <div class="cart-modal" id="optionsModal" style="z-index: 1002; display: none; top: 50%; left: 50%; transform: translate(-50%, -50%); position: fixed; width: 90%; max-width: 400px; height: auto;">
        <div class="cart-header">
            <div>
                <h2 id="optionsProductName" style="margin: 0 0 0.2rem 0; font-size: 1.2rem; color: var(--accent-gold);"></h2>
                <h3 style="font-size: 0.95rem; font-weight: normal; margin: 0; color: var(--text-muted);">Select Quantity</h3>
            </div>
            <button class="close-cart" id="closeOptionsBtn" onclick="closeOptionsModal()"><i class="ph ph-x"></i></button>
        </div>
        <div class="cart-items" id="optionsContainer" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
            <!-- Options will be injected here -->
        </div>
        <div id="customDecorNote" style="display: none; padding: 0 1.5rem 1.5rem; font-size: 0.85rem; color: var(--text-muted); font-style: italic; text-align: center;">
            *Heavy/extreme cake decor or custom designs will be at additional cost.
        </div>
    </div>
`;

const cartModalHTML = `
    <!-- Cart Modal -->
    <div class="modal-overlay" id="modalOverlay"></div>
    <div class="cart-modal" id="cartModal">
        <div class="cart-header">
            <h3><i class="ph ph-shopping-bag"></i> Your Order</h3>
            <button class="close-cart" id="closeCartBtn"><i class="ph ph-x"></i></button>
        </div>
        <div class="cart-items" id="cartItemsContainer">
            <p style="text-align:center; color:var(--text-muted); margin-top: 2rem;">Your cart is empty.</p>
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Total:</span>
                <span id="cartTotalValue">Rs. 0</span>
            </div>
            <button class="btn-primary" id="checkoutBtn" style="justify-content: center;">
                <i class="ph ph-whatsapp-logo"></i> Order via WhatsApp
            </button>
        </div>
    </div>
`;

// --- Inject Components ---
function injectComponents() {
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML + floatingWaHTML + optionsModalHTML + cartModalHTML);
}

// Global Variables
let cart = [];
let themeToggle, navbar, hamburger, navLinks, menuGrid, filterBtns, searchInput;
let cartBtn, closeCartBtn, cartModal, modalOverlay, cartItemsContainer, cartTotalValue, cartCount, checkoutBtn;

// --- Initialization ---
function initApp() {
    // Inject dynamic HTML
    injectComponents();
    
    // Grab elements
    themeToggle = document.getElementById('themeToggle');
    navbar = document.getElementById('navbar');
    hamburger = document.getElementById('hamburger');
    navLinks = document.getElementById('navLinks');
    
    // Menu page specific elements
    menuGrid = document.getElementById('menuGrid');
    filterBtns = document.querySelectorAll('.filter-btn');
    searchInput = document.getElementById('searchInput');

    // Cart Elements
    cartBtn = document.getElementById('cartBtn');
    closeCartBtn = document.getElementById('closeCartBtn');
    cartModal = document.getElementById('cartModal');
    modalOverlay = document.getElementById('modalOverlay');
    cartItemsContainer = document.getElementById('cartItemsContainer');
    cartTotalValue = document.getElementById('cartTotalValue');
    cartCount = document.getElementById('cartCount');
    checkoutBtn = document.getElementById('checkoutBtn');

    // Initialize Theme
    initTheme();

    // Initialize Sliders
    initSliders();

    // Setup Event Listeners
    setupEventListeners();

    // Load Cart from LocalStorage
    loadCart();

    // Determine Active Page and render specific content
    const path = window.location.pathname;
    let page = 'index';
    if (path.includes('menu.html')) page = 'menu';
    if (path.includes('custom-cakes.html')) page = 'custom-cakes';
    if (path.includes('gallery.html')) page = 'gallery';
    if (path.includes('about.html')) page = 'about';
    
    // Set active nav link
    const activeLink = document.querySelector(`.nav-links a[data-page="${page}"]`);
    if (activeLink) {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        activeLink.classList.add('active');
    }

    // Page Specific Logic
    if (page === 'menu' && menuGrid) {
        // Check URL parameters for pre-selected category
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        if (category) {
            window.filterMenu(category);
        } else {
            renderMenu(menuItems);
        }
        
        if (window.location.hash) {
            setTimeout(() => {
                const targetEl = document.querySelector(window.location.hash);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 600); // Allow time for items to render
        }
    }

    if (page === 'custom-cakes') {
        const form = document.getElementById('customCakeForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert("Thank you! Your custom cake request has been received. We will contact you on WhatsApp shortly to discuss details.");
                e.target.reset();
            });
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// --- Slider Logic ---
function initSliders() {
    const sliders = document.querySelectorAll('.auto-slider');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        if (slides.length <= 1) return;
        
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000);
    });
}

window.nextSlide = function(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.slide');
    if (slides.length <= 1) return;
    
    const nameOverlay = slider.querySelector(`#${sliderId}Name`);
    let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    
    if (activeIndex === -1) activeIndex = 0;
    slides[activeIndex].classList.remove('active');
    
    activeIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[activeIndex].classList.add('active');
    
    if (nameOverlay) {
        nameOverlay.innerText = slides[activeIndex].getAttribute('data-name') || '';
    }
};

// --- Theme Management ---
function initTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
    }
}

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'ph ph-sun';
    } else {
        icon.className = 'ph ph-moon';
    }
}

// --- Event Listeners ---
function setupEventListeners() {
    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        }
    });

    // Navbar Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger Menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cart Modals
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    modalOverlay.addEventListener('click', closeCart);

    // Checkout
    checkoutBtn.addEventListener('click', handleCheckout);

    // Filter Buttons (only if they exist on the page)
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                window.filterMenu(e.target.dataset.filter);
            });
        });
    }

    // Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeCategoryBtn = document.querySelector('.filter-btn.active');
            const activeCategory = activeCategoryBtn ? activeCategoryBtn.dataset.filter : 'All';
            window.filterMenu(activeCategory);
        });
    }
}

// --- Menu Rendering & Filtering ---
function renderMenu(items) {
    if (!menuGrid) return;
    
    // Simulate loading skeletons
    menuGrid.innerHTML = '';
    for(let i=0; i<6; i++) {
        menuGrid.innerHTML += `
            <div class="skeleton-card">
                <div class="skeleton-img"></div>
                <div class="skeleton-text title"></div>
                <div class="skeleton-text desc-1"></div>
                <div class="skeleton-text desc-2"></div>
                <div class="skeleton-footer"></div>
            </div>
        `;
    }

    setTimeout(() => {
        menuGrid.innerHTML = '';
        if (items.length === 0) {
            menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted)">No items found.</p>';
            return;
        }
        
        items.forEach((item, index) => {
            const cartItem = cart.find(c => c.id === item.id);
            const qty = cartItem ? cartItem.qty : 0;
            
            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item';
            itemEl.style.opacity = '0';
            itemEl.style.transform = 'translateY(20px)';
            
            let footerHTML = '';
            if (qty > 0) {
                footerHTML = `
                    <div class="qty-selector-morphed" id="footer-actions-${item.id}">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                        <input type="text" class="qty-input" id="qty-${item.id}" value="${qty}" readonly>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    </div>
                `;
            } else {
                footerHTML = `
                    <div id="footer-actions-${item.id}" style="width:100%">
                        <button class="btn-add" onclick="triggerAddToCart(${item.id}, event)">ADD</button>
                    </div>
                `;
            }

            itemEl.innerHTML = `
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}" id="img-${item.id}">
                    ${item.tags ? `<div class="menu-item-tags">
                        ${item.tags.map(tag => `<span class="menu-tag tag-${tag.replace(/\s+/g, '-').toLowerCase()}">${tag}</span>`).join('')}
                    </div>` : ''}
                </div>
                <div class="menu-item-header">
                    <div class="menu-item-title">${item.name}</div>
                </div>
                <div class="menu-item-desc">${item.desc}</div>
                <div class="menu-item-info">
                    <span class="info-weight">${item.weight}</span>
                    <span class="info-price">Rs. ${item.price}</span>
                </div>
                <div class="menu-item-footer">
                    ${footerHTML}
                </div>
            `;
            menuGrid.appendChild(itemEl);
            
            if (window.gsap) {
                gsap.to(itemEl, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "power2.out"
                });
            } else {
                itemEl.style.opacity = '1';
                itemEl.style.transform = 'none';
            }
        });
    }, 350); // skeleton display duration
}

window.filterMenu = function(category) {
    if (!menuGrid) return;

    if (filterBtns) {
        filterBtns.forEach(b => {
            b.classList.remove('active');
            if (b.dataset.filter === category) {
                b.classList.add('active');
            }
        });
    }

    let filtered = menuItems;
    if (category !== 'All') {
        filtered = menuItems.filter(item => item.category === category);
    }
    
    if (searchInput) {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(item => item.name.toLowerCase().includes(searchTerm));
        }
    }
    
    renderMenu(filtered);
}

// --- Premium Cart Logic ---

window.showOptionsModal = function(item) {
    const overlay = document.getElementById('optionsModalOverlay');
    const modal = document.getElementById('optionsModal');
    const container = document.getElementById('optionsContainer');
    
    document.getElementById('optionsProductName').innerText = item.name;
    
    const noteEl = document.getElementById('customDecorNote');
    if (noteEl) {
        noteEl.style.display = item.customDecorNote ? 'block' : 'none';
    }
    
    overlay.style.display = 'block';
    modal.style.display = 'block';
    
    container.innerHTML = '';
    item.options.forEach((opt, index) => {
        container.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border: 1px solid rgba(212,175,55,0.3); border-radius: 8px;">
                <div>
                    <div style="font-weight: 600; color: var(--text-main); font-size: 0.95rem;">${opt.name}</div>
                    <div style="color: var(--accent-gold); font-size: 0.85rem; margin-top: 4px;">Rs. ${opt.price}</div>
                </div>
                <button class="btn-add" style="padding: 5px 15px; width: auto; font-size: 0.8rem;" onclick="addOptionToCart(${item.id}, ${index})">Add</button>
            </div>
        `;
    });
    
    overlay.onclick = closeOptionsModal;
}

window.closeOptionsModal = function() {
    document.getElementById('optionsModalOverlay').style.display = 'none';
    document.getElementById('optionsModal').style.display = 'none';
}

window.addOptionToCart = function(itemId, optionIndex) {
    const item = menuItems.find(m => m.id === itemId);
    const option = item.options[optionIndex];
    
    const cartId = `${itemId}_${optionIndex}`;
    const existing = cart.find(c => c.cartId === cartId);
    
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: itemId,
            cartId: cartId,
            name: `${item.name} (${option.name})`,
            price: option.price,
            image: item.image,
            qty: 1
        });
    }
    
    saveCart();
    updateCartUI();
    closeOptionsModal();
    animateCartIcon();
    showCartFeedback();
};

function loadCart() {
    const savedCart = localStorage.getItem('bakeShopCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('bakeShopCart', JSON.stringify(cart));
}

window.triggerAddToCart = function(id, event) {
    const item = menuItems.find(m => m.id === id);
    if (item.hasOptions) {
        showOptionsModal(item);
        return;
    }

    // 1. Morph Button to Qty Selector
    const actionsContainer = document.getElementById(`footer-actions-${id}`);
    if (actionsContainer) {
        actionsContainer.outerHTML = `
            <div class="qty-selector-morphed" id="footer-actions-${id}" style="opacity: 0; transform: scale(0.9);">
                <button class="qty-btn" onclick="updateQty(${id}, -1)">-</button>
                <input type="text" class="qty-input" id="qty-${id}" value="1" readonly>
                <button class="qty-btn" onclick="updateQty(${id}, 1)">+</button>
            </div>
        `;
        const newSelector = document.getElementById(`footer-actions-${id}`);
        if (window.gsap) {
            gsap.to(newSelector, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.5)" });
        } else {
            newSelector.style.opacity = '1';
            newSelector.style.transform = 'scale(1)';
        }
    }

    // 2. Add to cart backend
    cart.push({ ...item, qty: 1 });
    saveCart();
    
    // We update cart UI immediately (which updates cart array and cartDrawer)
    updateCartUI();
    
    // 3. Flying Image Animation
    if (event && window.gsap) {
        createFlyingItem(id, event);
    } else {
        animateCartIcon();
    }
}

window.updateQty = function(id, change) {
    const existing = cart.find(c => c.id === id);
    if (!existing) return;
    
    existing.qty += change;
    
    if (existing.qty <= 0) {
        // Remove from cart and revert button
        cart = cart.filter(c => c.id !== id);
        const actionsContainer = document.getElementById(`footer-actions-${id}`);
        if (actionsContainer) {
            actionsContainer.outerHTML = `
                <div id="footer-actions-${id}" style="width:100%">
                    <button class="btn-add" onclick="triggerAddToCart(${id}, event)">ADD</button>
                </div>
            `;
        }
    } else {
        // Update input field and animate
        const input = document.getElementById(`qty-${id}`);
        if (input) {
            input.value = existing.qty;
            if (window.gsap && change > 0) {
                gsap.fromTo(input, { scale: 1.5, color: 'var(--accent-gold)' }, { scale: 1, color: 'var(--text-main)', duration: 0.3, ease: "back.out(2)" });
            }
        }
    }
    
    saveCart();
    updateCartUI();

    if (change > 0 && window.gsap) {
        animateCartIcon();
    }
};

function createFlyingItem(id, event) {
    if (!cartBtn) return;
    
    const sourceImg = document.getElementById(`img-${id}`);
    if (!sourceImg) return;
    
    const sourceRect = sourceImg.getBoundingClientRect();
    const cartRect = cartBtn.getBoundingClientRect();
    
    const flyingImg = document.createElement('img');
    flyingImg.src = sourceImg.src;
    flyingImg.className = 'flying-thumbnail';
    document.body.appendChild(flyingImg);
    
    gsap.set(flyingImg, {
        x: sourceRect.left,
        y: sourceRect.top,
        width: sourceRect.width,
        height: sourceRect.height,
        borderRadius: "8px"
    });
    
    const targetX = cartRect.left + cartRect.width / 2 - 20; // 20 is half of target size
    const targetY = cartRect.top + cartRect.height / 2 - 20;
    
    const tl = gsap.timeline({
        onComplete: () => {
            flyingImg.remove();
            animateCartIcon();
            showCartFeedback();
        }
    });
    
    tl.to(flyingImg, {
        x: targetX,
        duration: 0.65,
        ease: "power2.inOut" 
    }, 0)
    .to(flyingImg, {
        y: targetY,
        duration: 0.65,
        ease: "back.in(1.2)" 
    }, 0)
    .to(flyingImg, {
        width: 40,
        height: 40,
        opacity: 0.2,
        duration: 0.65,
        ease: "power2.inOut"
    }, 0);
}

function animateCartIcon() {
    if (!cartBtn) return;
    if (window.gsap) {
        cartBtn.classList.add('cart-icon-glow');
        gsap.fromTo(cartBtn, 
            { scale: 1.3 }, 
            { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)", onComplete: () => cartBtn.classList.remove('cart-icon-glow') }
        );
        
        // Also bounce the cart count
        if (cartCount) {
            gsap.fromTo(cartCount, { scale: 1.5 }, { scale: 1, duration: 0.4, ease: "back.out(2)" });
        }
    }
}

function showCartFeedback() {
    if (!cartBtn) return;
    let feedback = document.querySelector('.cart-feedback-float');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'cart-feedback-float';
        cartBtn.parentElement.appendChild(feedback); 
    }
    
    feedback.innerText = "+1";
    
    gsap.killTweensOf(feedback);
    gsap.fromTo(feedback, 
        { y: 0, opacity: 0 },
        { y: -30, opacity: 1, duration: 0.4, ease: "back.out(2)" }
    );
    
    gsap.to(feedback, {
        y: -40, opacity: 0, duration: 0.3, delay: 0.8
    });
}

window.removeFromCart = function(cartId) {
    cart = cart.filter(c => (c.cartId || c.id) != cartId);
    saveCart();
    updateCartUI();
    // Also reset the menu card footer if we are on the menu page
    const actionsContainer = document.getElementById(`footer-actions-${cartId}`);
    if (actionsContainer) {
        actionsContainer.outerHTML = `
            <div id="footer-actions-${cartId}" style="width:100%">
                <button class="btn-add" onclick="triggerAddToCart(${cartId}, event)">ADD</button>
            </div>
        `;
    }
}

function updateCartUI() {
    if (!cartCount || !cartItemsContainer || !cartTotalValue) return;

    cartCount.innerText = cart.reduce((sum, item) => sum + item.qty, 0);
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align:center; padding: 3rem 1rem;">
                <i class="ph ph-shopping-bag" style="font-size: 3rem; color: var(--border-color); margin-bottom: 1rem;"></i>
                <p style="color:var(--text-muted); font-size: 1.1rem;">Your cart feels light.</p>
                <p style="color:var(--text-muted); font-size: 0.9rem;">Add some delicious treats!</p>
            </div>
        `;
        cartTotalValue.innerText = 'Rs. 0';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: var(--radius-sm);">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">Rs. ${item.price} x ${item.qty}</div>
            </div>
            <div style="display:flex; flex-direction:column; align-items:flex-end; gap:0.5rem;">
                <div style="font-weight:700; color:var(--accent-gold)">Rs. ${itemTotal}</div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.cartId || item.id}')">
                    <i class="ph ph-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(el);
        
        // Stagger cart items entry
        if (window.gsap && cartModal.classList.contains('active')) {
            gsap.fromTo(el, 
                { x: 20, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 0.4, delay: index * 0.05, ease: "power2.out" }
            );
        }
    });
    
    cartTotalValue.innerText = `Rs. ${total}`;
}

function openCart() {
    if (cartModal && modalOverlay) {
        cartModal.classList.add('active');
        modalOverlay.classList.add('active');
    }
}

function closeCart() {
    if (cartModal && modalOverlay) {
        cartModal.classList.remove('active');
        modalOverlay.classList.remove('active');
    }
}

function handleCheckout() {
    if (cart.length === 0) return;
    
    let message = "Hi Latifa! I would like to place an order:%0A%0A";
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        message += `- ${item.name} (x${item.qty}) = Rs. ${itemTotal}%0A`;
    });
    
    message += `%0A*Total: Rs. ${total}*%0A%0APlease let me know the payment details. Thank you!`;
    
    window.open(`https://wa.me/919689327789?text=${message}`, '_blank');
}

// Expose navigateToMenu logic globally for the hero links
window.navigateToMenu = function(category, hash = null) {
    let url = `menu.html?category=${encodeURIComponent(category)}`;
    if (hash) url += `#${hash}`;
    window.location.href = url;
};
