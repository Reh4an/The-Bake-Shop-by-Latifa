// landing.js - GSAP Animations for the Premium Landing Page

document.addEventListener("DOMContentLoaded", () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Load Timeline
    const tl = gsap.timeline();

    // Fade in Nav
    tl.fromTo('.landing-nav', 
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Fade in Hero Subtitle
    tl.to('.hero-subtitle', 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=0.5"
    );

    // Stagger reveal Hero Title words
    tl.to('.hero-title .word', 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out' },
        "-=0.8"
    );

    // Fade in Hero Desc
    tl.to('.hero-desc',
        { opacity: 1, duration: 1, ease: 'power2.out'},
        "-=0.6"
    );

    // Fade in CTA
    tl.to('.hero-cta-wrapper', 
        { opacity: 1, duration: 1, ease: 'power2.out' },
        "-=0.8"
    );

    // Parallax Hero Image
    gsap.to('.hero-bg-image', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.landing-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Nav Background Change on Scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'scrolled', targets: '.landing-nav'}
    });

    // Fade Up Elements globally
    gsap.utils.toArray('.fade-up').forEach(elem => {
        
        let delay = 0;
        if(elem.classList.contains('delay-1')) delay = 0.2;
        if(elem.classList.contains('delay-2')) delay = 0.4;

        gsap.to(elem, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: elem,
                start: 'top 85%',
                toggleActions: "play none none reverse"
            }
        });
    });

    // Fade In Elements globally
    gsap.utils.toArray('.fade-in').forEach(elem => {
        gsap.to(elem, {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: elem,
                start: 'top 80%',
                toggleActions: "play none none reverse"
            }
        });
    });

    // Image Parallax (slower scroll for images inside wrappers)
    gsap.utils.toArray('.parallax-img').forEach(img => {
        gsap.to(img, {
            y: '-15%', // moves image up slightly while scrolling down
            ease: 'none',
            scrollTrigger: {
                trigger: img.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Simple Testimonial Slider
    const slides = document.querySelectorAll('.testimonial-slide');
    if(slides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            gsap.to(slides[currentSlide], {opacity: 0, duration: 0.5, onComplete: () => {
                slides[currentSlide].style.display = 'none';
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].style.display = 'block';
                slides[currentSlide].style.opacity = '0';
                gsap.to(slides[currentSlide], {opacity: 1, duration: 0.5});
            }});
        }, 5000);
    }
});
