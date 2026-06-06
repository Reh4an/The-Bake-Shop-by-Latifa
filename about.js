// about.js - GSAP Animations for the About Page

document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Load Timeline (Hero)
    const tl = gsap.timeline();
    
    tl.to('.about-hero-content h1', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
    })
    .to('.about-hero-content p', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8");

    // Fade Up Elements
    const fadeUpElements = gsap.utils.toArray('.fade-up');
    fadeUpElements.forEach(el => {
        gsap.fromTo(el, 
            { y: 50, opacity: 0 },
            { 
                y: 0, opacity: 1, 
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Staggered Feature Cards
    gsap.fromTo('.feature-box', 
        { y: 50, opacity: 0 },
        { 
            y: 0, opacity: 1, 
            duration: 0.8, 
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.features-grid',
                start: "top 80%",
            }
        }
    );

    // Staggered Newspaper Cards
    gsap.fromTo('.featured-card', 
        { y: 50, opacity: 0 },
        { 
            y: 0, opacity: 1, 
            duration: 0.8, 
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.featured-grid',
                start: "top 80%",
            }
        }
    );

    // Timeline Items Animation
    gsap.fromTo('.timeline-item', 
        { opacity: 0, x: (i, el) => el.style.textAlign === 'left' ? 50 : -50 },
        { 
            opacity: 1, x: 0, 
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.timeline',
                start: "top 75%",
            }
        }
    );

    // Number Counters
    const counters = document.querySelectorAll('.counter-val');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        
        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2.5,
                    snap: { innerHTML: 1 },
                    ease: "power1.inOut"
                });
            }
        });
    });
});


// --- Modal Logic ---

window.openLightbox = function(imageSrc) {
    const modal = document.getElementById('imageLightbox');
    const img = document.getElementById('lightboxImg');
    img.src = imageSrc;
    modal.style.display = 'block';
    
    // Add small delay to trigger CSS transition
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
};

window.closeLightbox = function() {
    const modal = document.getElementById('imageLightbox');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById('lightboxImg').src = '';
    }, 300);
};

// Gallery Logic for ItsGoa Feature
const galleryImages = [
    'assets/itsgoa_1.jpg',
    'assets/itsgoa_2.jpg',
    'assets/itsgoa_3.jpg',
    'assets/itsgoa_4.jpg',
    'assets/itsgoa_5.jpg'
];
let currentGalleryIndex = 0;

window.openGallery = function() {
    currentGalleryIndex = 0;
    updateGalleryView();
    
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'block';
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
};

window.closeGallery = function() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
};

window.changeGalleryImage = function(direction) {
    currentGalleryIndex += direction;
    
    if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryImages.length - 1;
    } else if (currentGalleryIndex >= galleryImages.length) {
        currentGalleryIndex = 0;
    }
    
    updateGalleryView();
};

function updateGalleryView() {
    const img = document.getElementById('galleryImg');
    const indicator = document.getElementById('galleryIndicator');
    
    // Fade out effect
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        img.src = galleryImages[currentGalleryIndex];
        indicator.innerText = `Page ${currentGalleryIndex + 1} of ${galleryImages.length}`;
        
        // Fade in effect
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
        img.style.transition = 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)';
    }, 200);
}

// Close modals when clicking outside the content
document.addEventListener('click', function(event) {
    const lightboxModal = document.getElementById('imageLightbox');
    const galleryModal = document.getElementById('galleryModal');
    
    if (event.target === lightboxModal) {
        closeLightbox();
    }
    if (event.target === galleryModal) {
        closeGallery();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const galleryModal = document.getElementById('galleryModal');
    const lightboxModal = document.getElementById('imageLightbox');
    
    if (galleryModal && galleryModal.classList.contains('show')) {
        if (event.key === 'ArrowLeft') {
            changeGalleryImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeGalleryImage(1);
        } else if (event.key === 'Escape') {
            closeGallery();
        }
    } else if (lightboxModal && lightboxModal.classList.contains('show')) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    }
});


// Mobile Swipe Logic for Gallery
let touchStartX = 0;
let touchEndX = 0;

const galleryContainer = document.querySelector('.gallery-container');
if (galleryContainer) {
    galleryContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    galleryContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
}

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swiped Left - Next Image
        changeGalleryImage(1);
    }
    if (touchEndX > touchStartX + 50) {
        // Swiped Right - Previous Image
        changeGalleryImage(-1);
    }
}
