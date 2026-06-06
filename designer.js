// designer.js - Logic for the Custom Cake Designer

document.addEventListener('DOMContentLoaded', () => {
    // --- State Management ---
    let currentStep = 1;
    const totalSteps = 10;
    
    const designerState = {
        occasion: '',
        type: '',
        flavors: [],
        frosting: [],
        theme: '',
        colors: [],
        size: '',
        budget: 5000,
        inspirationImages: [],
        notes: '',
        name: ''
    };

    // --- DOM Elements ---
    const steps = document.querySelectorAll('.designer-step');
    const dots = document.querySelectorAll('.progress-dot');
    const nextBtns = document.querySelectorAll('.next-step');
    const prevBtns = document.querySelectorAll('.prev-step');
    const masonryGrid = document.getElementById('previewMasonry');
    const budgetSlider = document.getElementById('budgetSlider');
    const budgetDisplay = document.getElementById('budgetDisplay');
    const aiBtn = document.getElementById('aiGeneratorBtn');
    const aiLoading = document.getElementById('aiLoading');
    const aiResult = document.getElementById('aiResult');
    const summaryContainer = document.getElementById('summaryContainer');

    // --- Image Preview Database Mock ---
    // In a real app, this would be fetched from an API.
    // For now, we map themes/occasions to the images in our assets and generated previews.
    const previewAssets = {
        'wedding': [
            { src: 'assets/hero_premium_cake_1779000541751.png', label: 'Classic Elegance' },
            { src: 'assets/preview_wedding_cake.png', label: 'Luxury Multi-Tier' }
        ],
        'birthday': [
            { src: 'assets/custom_elegant_cake_1779000577498.png', label: 'Elegant Birthday' },
            { src: 'assets/customized cake 3.jpeg', label: 'Birthday Celebration' },
            { src: 'assets/chocolate cake with rose.jpeg', label: 'Chocolate Rose' }
        ],
        'korean minimal': [
            { src: 'assets/preview_korean_minimal.png', label: 'Pastel Vintage' },
            { src: 'assets/bento cake.jpeg', label: 'Classic Bento' }
        ],
        'floral': [
            { src: 'assets/preview_floral_cake.png', label: 'Buttercream Botanicals' },
            { src: 'assets/chocolate cake with rose.jpeg', label: 'Chocolate Floral' }
        ],
        'anime': [
            { src: 'assets/preview_anime_cake.png', label: 'Dark Anime Aesthetic' }
        ],
        'cartoon': [
            { src: 'assets/preview_cartoon_cake.png', label: 'Pastel Kids Theme' }
        ],
        'default': [
            { src: 'assets/custom_elegant_cake_1779000577498.png', label: 'Bespoke Design' },
            { src: 'assets/hero_premium_cake_1779000541751.png', label: 'Luxury Premium' },
            { src: 'assets/customized cake 1.jpeg', label: 'Custom Design' },
            { src: 'assets/customized cake 2.jpeg', label: 'Elegant Finish' }
        ]
    };

    // --- Navigation Logic ---
    function updateStep(newStep) {
        // Hide all steps
        steps.forEach(step => step.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current step
        currentStep = newStep;
        document.querySelector(`.designer-step[data-step="${currentStep}"]`).classList.add('active');
        
        // Update dots up to current step
        for (let i = 0; i < currentStep; i++) {
            dots[i].classList.add('active');
        }

        // Specific step logic
        const formArea = document.querySelector('.designer-form-area');
        const previewArea = document.querySelector('.designer-preview-area');

        if (currentStep === 9) {
            generateFinalInspiration();
        }
        if (currentStep === 10) {
            updateSummary();
            if (formArea) formArea.classList.add('full-width');
            if (previewArea) previewArea.classList.add('hidden');
        } else {
            if (formArea) formArea.classList.remove('full-width');
            if (previewArea) previewArea.classList.remove('hidden');
        }
        
        // Scroll to top of form
        document.querySelector('.designer-form-area').scrollTo({ top: 0, behavior: 'smooth' });
    }

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep < totalSteps) updateStep(currentStep + 1);
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 1) updateStep(currentStep - 1);
        });
    });

    // --- Dynamic AI Generation (Triggered on Step 9) ---
    let previewCountdownTimer = null;
    let aiCountdownTimer = null;
    
    function generateFinalInspiration() {
        if (!masonryGrid) return;
        
        // Only run once automatically
        if (masonryGrid.getAttribute('data-generated') === 'true') return;
        masonryGrid.setAttribute('data-generated', 'true');
        
        // Sync with left side loader
        const aiLoading = document.getElementById('aiLoading');
        const aiResult = document.getElementById('aiResult');
        const aiBtn = document.getElementById('aiGeneratorBtn');
        const aiGeneratedImage = document.getElementById('aiGeneratedImage');
        const aiDownloadBtn = document.getElementById('aiDownloadBtn');
        
        if (aiBtn) aiBtn.style.display = 'none';
        if (aiLoading) aiLoading.style.display = 'block';
        if (aiResult) aiResult.style.display = 'none';
        
        // Show cute loader while generating on the right side
        masonryGrid.innerHTML = `
            <div style="grid-column: 1 / -1; display:flex; justify-content:center; align-items:center; height:100%; width:100%; padding: 4rem 0;">
                <div class="cute-loader" style="background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); padding: 3rem; border-radius: var(--radius-lg); border: 1px solid rgba(212, 175, 55, 0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center; width: 100%; max-width: 400px;">
                    <i class="ph ph-cake cute-loader-icon" style="font-size: 4rem;"></i>
                    <p id="previewLoaderText" style="margin-top:1rem; color:var(--text-main); font-weight:500; font-size: 1.1rem;">Crafting your bespoke design...</p>
                    <p style="margin-top:0.5rem; color:var(--accent-gold); font-size:2rem; font-weight:bold; font-family: var(--font-heading);"><span id="previewCountdown">0</span>s</p>
                </div>
            </div>
        `;
        
        // Build prompt from current selections
        let parts = [];
        if (designerState.theme && designerState.theme !== 'other') parts.push(designerState.theme + ' theme');
        if (designerState.occasion && designerState.occasion !== 'other') parts.push(designerState.occasion);
        if (designerState.type && designerState.type !== 'other') parts.push(designerState.type);
        if (designerState.flavors.length > 0 && !designerState.flavors.includes('other')) parts.push(designerState.flavors[0] + ' flavor');
        
        let basePrompt = parts.length > 0 ? parts.join(' ') : 'Luxury bespoke beautiful custom';
        const safePrompt = encodeURIComponent("A highly premium luxury beautiful cake, " + basePrompt + ", professional pastry photography, soft cinematic lighting, bakery setting");
        
        // Auto-fill the manual prompt box so they can see what was generated
        const promptInput = document.getElementById('aiPrompt');
        if (promptInput) promptInput.value = basePrompt;
        
        let timeElapsed = 0;
        const funnyTexts = ["Mixing the batter...", "Preheating the oven...", "Baking the layers...", "Whipping the frosting...", "Adding gold leaf...", "Finalizing details..."];
        
        clearInterval(previewCountdownTimer);
        previewCountdownTimer = setInterval(() => {
            timeElapsed++;
            const countEl = document.getElementById('previewCountdown');
            const textEl = document.getElementById('previewLoaderText');
            if (countEl) countEl.innerText = timeElapsed;
            if (textEl && timeElapsed < funnyTexts.length) textEl.innerText = funnyTexts[timeElapsed];
            
            // Sync mobile left side loader texts if they exist
            if (aiLoading) {
                const aiCountEl = aiLoading.querySelector('.ai-countdown');
                const aiTextEl = aiLoading.querySelector('p:not(.ai-countdown)');
                if (aiCountEl) aiCountEl.innerText = timeElapsed;
                if (aiTextEl && timeElapsed < funnyTexts.length) aiTextEl.innerText = funnyTexts[timeElapsed];
            }
        }, 1000);
        
        // Generate 1 beautiful large image
        // Use LoremFlickr as a dynamic photo fetcher instead of Pollinations API
        let rawPromptStr = "";
        if (typeof basePrompt !== 'undefined') {
            rawPromptStr = basePrompt;
        } else if (typeof promptInput !== 'undefined') {
            rawPromptStr = typeof promptInput === 'string' ? promptInput : (promptInput.value || "");
        }
        rawPromptStr = rawPromptStr.toLowerCase();
        
        let keywords = "cake";
        const possibleKeywords = ['wedding', 'chocolate', 'floral', 'elegant', 'birthday', 'vanilla', 'strawberry', 'tier', 'red', 'blue', 'pink', 'gold', 'buttercream', 'fondant', 'rustic', 'modern', 'vintage', 'fruit', 'lemon'];
        const matched = possibleKeywords.filter(kw => rawPromptStr.includes(kw));
        if (matched.length > 0) {
            keywords += "," + matched.slice(0, 3).join(",");
        } else {
            keywords += ",luxury";
        }
        
        const seed = Math.floor(Math.random() * 1000000);
        const imageUrl = `https://loremflickr.com/768/1024/${keywords}/all?lock=${seed}`;
        
        const img = new Image();
        
        img.onload = () => {
            clearInterval(previewCountdownTimer);
            masonryGrid.innerHTML = `
                <div style="grid-column: 1 / -1; display:flex; justify-content:center;">
                    <div class="preview-item" style="width: 100%; max-width: 500px; animation: fadeIn 0.8s ease;">
                        <img src="${imageUrl}" alt="Live AI Inspiration" style="width: 100%; border-radius: var(--radius-lg); box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
                        <div class="preview-overlay" style="border-bottom-left-radius: var(--radius-lg); border-bottom-right-radius: var(--radius-lg); font-size: 1.1rem; padding: 2rem 1.5rem 1.5rem;">
                            Your Live Design Inspiration
                        </div>
                    </div>
                </div>
            `;
            
            // Show in left form for mobile
            if (aiGeneratedImage) aiGeneratedImage.src = imageUrl;
            if (aiDownloadBtn) aiDownloadBtn.href = imageUrl;
            if (aiLoading) aiLoading.style.display = 'none';
            if (aiResult) aiResult.style.display = 'block';
            if (aiBtn) {
                aiBtn.style.display = 'flex';
                aiBtn.innerHTML = '<i class="ph ph-sparkle"></i> Regenerate Idea';
            }
        };
        
        img.onerror = () => {
            clearInterval(previewCountdownTimer);
            masonryGrid.innerHTML = `<p style="text-align:center; color:red; grid-column: 1 / -1;">Failed to generate inspiration. The AI server might be busy. Please try again.</p>`;
            if (aiLoading) aiLoading.style.display = 'none';
            if (aiBtn) aiBtn.style.display = 'flex';
        };
        
        img.src = imageUrl;
    }

    // --- Selection Interactions ---
    
    // Single/Multi Selectors (Image Cards - Occasion, Type, Frosting, Theme)
    document.querySelectorAll('.image-card').forEach(card => {
        card.addEventListener('click', function() {
            const group = this.getAttribute('data-group');
            const value = this.getAttribute('data-value');
            const isMulti = this.parentElement.classList.contains('multi-select');
            
            if (isMulti) {
                this.classList.toggle('selected');
                // Ensure array exists
                if (!Array.isArray(designerState[group])) {
                    designerState[group] = [];
                }
                if (this.classList.contains('selected')) {
                    designerState[group].push(value);
                } else {
                    designerState[group] = designerState[group].filter(v => v !== value);
                }
            } else {
                // Deselect others in group
                document.querySelectorAll(`.image-card[data-group="${group}"]`).forEach(c => c.classList.remove('selected'));
                
                // Select this
                this.classList.add('selected');
                
                // Update state
                designerState[group] = value;
            }
        });
    });

    // Multi/Single Selectors (Pills - Flavors, Size)
    document.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', function() {
            const group = this.getAttribute('data-group');
            const value = this.getAttribute('data-value');
            const isMulti = this.parentElement.classList.contains('multi-select');

            if (isMulti) {
                this.classList.toggle('selected');
                if (this.classList.contains('selected')) {
                    designerState[group].push(value);
                } else {
                    designerState[group] = designerState[group].filter(v => v !== value);
                }
            } else {
                document.querySelectorAll(`.pill[data-group="${group}"]`).forEach(p => p.classList.remove('selected'));
                this.classList.add('selected');
                designerState[group] = value;
            }
        });
    });

    // Color Pickers
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', function() {
            this.classList.toggle('selected');
            const color = this.getAttribute('title');
            if (this.classList.contains('selected')) {
                designerState.colors.push(color);
            } else {
                designerState.colors = designerState.colors.filter(c => c !== color);
            }
        });
    });

    // Budget Slider & Adjusters
    const decreaseBudget = document.getElementById('decreaseBudget');
    const increaseBudget = document.getElementById('increaseBudget');

    function updateBudget(val) {
        // Clamp value between 500 and 20000
        val = Math.max(500, Math.min(20000, val));
        designerState.budget = val;
        if (budgetSlider) budgetSlider.value = val;
        if (budgetDisplay) budgetDisplay.innerText = val === 20000 ? '₹20,000+' : `₹${val.toLocaleString()}`;
    }

    if (budgetSlider && budgetDisplay) {
        budgetSlider.addEventListener('input', function() {
            updateBudget(parseInt(this.value));
        });
        
        if (decreaseBudget) {
            decreaseBudget.addEventListener('click', () => {
                updateBudget(designerState.budget - 50);
            });
        }
        
        if (increaseBudget) {
            increaseBudget.addEventListener('click', () => {
                updateBudget(designerState.budget + 50);
            });
        }
    }

    // Drag and Drop
    const uploadZone = document.getElementById('uploadZone');
    const uploadInput = document.getElementById('uploadInput');
    if (uploadZone && uploadInput) {
        uploadZone.addEventListener('click', () => uploadInput.click());
        
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            uploadZone.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            uploadZone.addEventListener(eventName, () => uploadZone.classList.add('dragover'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            uploadZone.addEventListener(eventName, () => uploadZone.classList.remove('dragover'), false);
        });

        uploadZone.addEventListener('drop', handleDrop, false);
        uploadInput.addEventListener('change', function() { handleFiles(this.files) });

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            handleFiles(files);
        }

        function handleFiles(files) {
            if(files.length > 0) {
                const file = files[0]; // Support first file for preview
                designerState.inspirationImages = Array.from(files);
                
                const objectUrl = URL.createObjectURL(file);
                
                // Show uploaded image in upload zone with remove button
                uploadZone.innerHTML = `
                    <div style="position:relative; display:inline-block;">
                        <img src="${objectUrl}" style="max-height:150px; border-radius:var(--radius-md); box-shadow:var(--shadow-sm);">
                        <button id="removeUploadBtn" style="position:absolute; top:-10px; right:-10px; background:var(--accent-gold); color:white; border:none; border-radius:50%; width:25px; height:25px; cursor:pointer; font-weight:bold;">&times;</button>
                    </div>
                    <p style="margin-top:0.5rem; font-size:0.9rem; color:var(--text-main);">${file.name}</p>
                `;
                
                // Handle remove
                document.getElementById('removeUploadBtn').addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering click on uploadZone
                    designerState.inspirationImages = [];
                    uploadInput.value = '';
                    uploadZone.innerHTML = `
                        <div class="upload-border"></div>
                        <i class="ph ph-upload-simple upload-icon"></i>
                        <h4 style="font-family:var(--font-heading);">Upload Inspiration Images</h4>
                        <p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--text-muted);">Share Pinterest, Instagram, or reference cake designs.</p>
                        <p style="margin-bottom:0; font-size:0.8rem; color:var(--accent-gold);">Drag & drop or click to browse (Max 5MB)</p>
                    `;
                    // Reset step 10 preview to default icon
                    const previewIcon = document.querySelector('.cake-preview-card .preview-icon');
                    if (previewIcon) {
                        previewIcon.outerHTML = '<i class="ph ph-cake preview-icon"></i>';
                    }
                });

                // Populate Step 10 Cake Preview
                const previewIcon = document.querySelector('.cake-preview-card .preview-icon');
                if (previewIcon) {
                    previewIcon.outerHTML = `<img class="preview-icon" src="${objectUrl}" style="max-width:150px; max-height:150px; border-radius:var(--radius-md); object-fit:cover; margin-bottom:1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">`;
                } else {
                    const existingImg = document.querySelector('.cake-preview-card img.preview-icon');
                    if (existingImg) {
                        existingImg.src = objectUrl;
                    }
                }
            }
        }
    }

    // --- AI Generator ---
    const aiGeneratedImage = document.getElementById('aiGeneratedImage');
    const aiDownloadBtn = document.getElementById('aiDownloadBtn');
    // aiCountdownTimer already declared above

    if (aiBtn) {
        aiBtn.addEventListener('click', () => {
            const promptInput = document.getElementById('aiPrompt').value;
            if (!promptInput) return;

            // Regenerate image manually
            // Hide current image, show loaders
            aiBtn.style.display = 'none';
            aiLoading.style.display = 'block';
            aiResult.style.display = 'none';
            
            masonryGrid.innerHTML = `
                <div style="grid-column: 1 / -1; display:flex; justify-content:center; align-items:center; height:100%; width:100%; padding: 4rem 0;">
                    <div class="cute-loader" style="background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); padding: 3rem; border-radius: var(--radius-lg); border: 1px solid rgba(212, 175, 55, 0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center; width: 100%; max-width: 400px;">
                        <i class="ph ph-cake cute-loader-icon" style="font-size: 4rem;"></i>
                        <p id="previewLoaderText" style="margin-top:1rem; color:var(--text-main); font-weight:500; font-size: 1.1rem;">Re-crafting your bespoke design...</p>
                        <p style="margin-top:0.5rem; color:var(--accent-gold); font-size:2rem; font-weight:bold; font-family: var(--font-heading);"><span id="previewCountdown">0</span>s</p>
                    </div>
                </div>
            `;
            
            clearInterval(previewCountdownTimer);
            let timeElapsed = 0;
            const funnyTexts = ["Mixing the batter...", "Preheating the oven...", "Baking the layers...", "Whipping the frosting...", "Adding gold leaf...", "Finalizing details..."];
            
            const aiLoaderText = aiLoading.querySelector('p');
            let countdownSpan = aiLoading.querySelector('.ai-countdown');
            if(!countdownSpan) {
                const p = document.createElement('p');
                p.style.cssText = "margin-top:0.5rem; color:var(--accent-gold); font-size:1.5rem; font-weight:bold;";
                p.innerHTML = `<span class="ai-countdown">0</span>s`;
                aiLoading.appendChild(p);
                countdownSpan = p.querySelector('.ai-countdown');
            } else {
                countdownSpan.innerText = '0';
            }
            if(aiLoaderText) aiLoaderText.innerText = 'Re-baking your ideas...';
            
            previewCountdownTimer = setInterval(() => {
                timeElapsed++;
                if (countdownSpan) countdownSpan.innerText = timeElapsed;
                if (aiLoaderText && timeElapsed < funnyTexts.length) aiLoaderText.innerText = funnyTexts[timeElapsed];
                
                const countEl = document.getElementById('previewCountdown');
                const textEl = document.getElementById('previewLoaderText');
                if (countEl) countEl.innerText = timeElapsed;
                if (textEl && timeElapsed < funnyTexts.length) textEl.innerText = funnyTexts[timeElapsed];
            }, 1000);

            // Use LoremFlickr as a dynamic photo fetcher instead of Pollinations API
            let rawPromptStr = "";
            if (typeof promptInput !== 'undefined') {
                rawPromptStr = typeof promptInput === 'string' ? promptInput : (promptInput.value || "");
            }
            rawPromptStr = rawPromptStr.toLowerCase();
            
            let keywords = "cake";
            const possibleKeywords = ['wedding', 'chocolate', 'floral', 'elegant', 'birthday', 'vanilla', 'strawberry', 'tier', 'red', 'blue', 'pink', 'gold', 'buttercream', 'fondant', 'rustic', 'modern', 'vintage', 'fruit', 'lemon'];
            const matched = possibleKeywords.filter(kw => rawPromptStr.includes(kw));
            if (matched.length > 0) {
                keywords += "," + matched.slice(0, 3).join(",");
            } else {
                keywords += ",luxury";
            }
            
            const seed = Math.floor(Math.random() * 1000000);
            const imageUrl = `https://loremflickr.com/768/1024/${keywords}/all?lock=${seed}`;

            const img = new Image();
            
            img.onload = () => {
                clearInterval(previewCountdownTimer);
                aiGeneratedImage.src = imageUrl;
                aiDownloadBtn.href = imageUrl;
                
                aiLoading.style.display = 'none';
                aiResult.style.display = 'block';
                aiBtn.style.display = 'flex';
                aiBtn.innerHTML = '<i class="ph ph-sparkle"></i> Generate Another Idea';
                
                masonryGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; display:flex; justify-content:center;">
                        <div class="preview-item" style="width: 100%; max-width: 500px; animation: fadeIn 0.8s ease;">
                            <img src="${imageUrl}" alt="Live AI Inspiration" style="width: 100%; border-radius: var(--radius-lg); box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
                            <div class="preview-overlay" style="border-bottom-left-radius: var(--radius-lg); border-bottom-right-radius: var(--radius-lg); font-size: 1.1rem; padding: 2rem 1.5rem 1.5rem;">
                                Your Live Design Inspiration
                            </div>
                        </div>
                    </div>
                `;
            };
            
            img.onerror = () => {
                clearInterval(previewCountdownTimer);
                aiLoading.style.display = 'none';
                aiBtn.style.display = 'flex';
                alert("AI failed to generate an image. The AI server might be busy. Please try again.");
                masonryGrid.innerHTML = `<p style="text-align:center; color:red; grid-column: 1 / -1;">Failed to generate inspiration. Please try again.</p>`;
            };
            
            img.src = imageUrl;
        });
    }

    // --- Step 10 Delivery Toggle & Pricing Calculation ---
    const pickupToggle = document.getElementById('pickupToggle');
    const deliveryToggle = document.getElementById('deliveryToggle');
    const deliveryAddressGroup = document.querySelector('.delivery-address-group');
    
    if (pickupToggle && deliveryToggle && deliveryAddressGroup) {
        pickupToggle.addEventListener('change', () => {
            if (pickupToggle.checked) deliveryAddressGroup.style.display = 'none';
        });
        deliveryToggle.addEventListener('change', () => {
            if (deliveryToggle.checked) deliveryAddressGroup.style.display = 'block';
        });
    }

    const cakeMessage = document.getElementById('cakeMessage');
    const msgCount = document.getElementById('msgCount');
    if (cakeMessage && msgCount) {
        cakeMessage.addEventListener('input', () => {
            msgCount.innerText = cakeMessage.value.length;
        });
    }

    function calculatePrice() {
        if (!document.getElementById('priceBase')) return;
        
        let basePrice = 2500; // Default base
        if (designerState.size) {
            if (designerState.size.includes('8-10')) basePrice = 4500;
            if (designerState.size.includes('15-20')) basePrice = 7500;
            if (designerState.size.includes('25+')) basePrice = 10000;
        }
        
        let flavorCharge = 0;
        if (designerState.flavors.includes('Ferrero Rocher') || designerState.flavors.includes('Blueberry')) {
            flavorCharge = 800;
        } else if (designerState.flavors.length > 1) {
            flavorCharge = 500;
        }

        let designCharge = 0;
        if (designerState.theme && (designerState.theme === 'luxury' || designerState.theme === 'floral')) {
            designCharge = 1200;
        } else if (designerState.frosting.includes('Fondant')) {
            designCharge = 1500;
        }

        const total = basePrice + flavorCharge + designCharge;

        document.getElementById('priceBase').innerText = `₹${basePrice.toLocaleString()}`;
        document.getElementById('priceFlavor').innerText = `₹${flavorCharge.toLocaleString()}`;
        document.getElementById('priceDesign').innerText = `₹${designCharge.toLocaleString()}`;
        document.getElementById('priceTotal').innerText = `₹${total.toLocaleString()}`;
    }

    // --- Summary Update ---
    function updateSummary() {
        if (!summaryContainer) return;
        
        const createPill = (text) => `<span class="luxury-pill">${text}</span>`;
        const formatArr = (arr) => arr.length > 0 ? arr.map(createPill).join('') : '<span class="luxury-pill empty">Not selected</span>';
        const formatStr = (str) => str ? createPill(str) : '<span class="luxury-pill empty">Not selected</span>';
        
        summaryContainer.innerHTML = `
            <div class="summary-item"><span class="summary-label"><i class="ph ph-calendar-star"></i> Occasion</span><div class="pill-group">${formatStr(designerState.occasion)}</div></div>
            <div class="summary-item"><span class="summary-label"><i class="ph ph-cake"></i> Cake Type</span><div class="pill-group">${formatStr(designerState.type)}</div></div>
            <div class="summary-item"><span class="summary-label"><i class="ph ph-drop"></i> Flavors</span><div class="pill-group">${formatArr(designerState.flavors)}</div></div>
            <div class="summary-item"><span class="summary-label"><i class="ph ph-paint-brush-broad"></i> Frosting</span><div class="pill-group">${formatArr(designerState.frosting)}</div></div>
            <div class="summary-item"><span class="summary-label"><i class="ph ph-palette"></i> Theme/Style</span><div class="pill-group">${formatStr(designerState.theme)}</div></div>
            <div class="summary-item"><span class="summary-label"><i class="ph ph-swatches"></i> Colors</span><div class="pill-group">${formatArr(designerState.colors)}</div></div>
            <div class="summary-item"><span class="summary-label"><i class="ph ph-users"></i> Size/Servings</span><div class="pill-group">${formatStr(designerState.size)}</div></div>
            <div class="summary-item"><span class="summary-label"><i class="ph ph-wallet"></i> Target Budget</span><div class="pill-group"><span class="luxury-pill gold-pill">₹${designerState.budget.toLocaleString()}${designerState.budget===20000?'+':''}</span></div></div>
        `;

        calculatePrice();

        // Optional Step 10 specific animations (runs when Step 10 is shown)
        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.timeline-step', 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", delay: 0.2 }
            );
            gsap.fromTo('.cake-preview-card',
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)" }
            );
        }
    }

    // Form Submit
    const finalForm = document.getElementById('finalForm');
    if (finalForm) {
        finalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            designerState.notes = document.getElementById('finalNotes').value;
            designerState.name = document.getElementById('finalName').value;
            designerState.message = document.getElementById('cakeMessage') ? document.getElementById('cakeMessage').value : '';
            
            const btn = finalForm.querySelector('.btn-luxury-submit');
            const btnText = btn.querySelector('.btn-text');
            btnText.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Reserving...';
            
            setTimeout(() => {
                btnText.innerHTML = '<i class="ph ph-check-circle"></i> Reservation Confirmed';
                btn.style.background = 'linear-gradient(135deg, #1f4024 0%, #2e7d32 100%)';
                btn.style.borderColor = '#2e7d32';
                btn.style.boxShadow = '0 0 25px rgba(46, 125, 50, 0.4)';
                
                // Add success GSAP pulse
                if (typeof gsap !== 'undefined') {
                    gsap.to(btn, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 });
                }
            }, 2000);
        });
    }

});
