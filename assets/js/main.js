document.addEventListener('DOMContentLoaded', () => {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Parallax effect for the split screen (hero left)
    const heroLeft = document.querySelector('.hero-left');
    if (heroLeft && window.innerWidth > 900) {
        window.addEventListener('scroll', () => {
            let offset = window.scrollY;
            // The split line shifts subtly to the right as you scroll down
            // by manipulating the clip-path polygon
            let skewValue = 85 + (offset * 0.05);
            if (skewValue > 100) skewValue = 100;
            heroLeft.style.clipPath = `polygon(0 0, 100% 0, ${skewValue}% 100%, 0% 100%)`;
            
            // Subtle upward shift of the image itself
            const img = heroLeft.querySelector('img');
            if (img) {
                img.style.transform = `translateY(${offset * 0.3}px)`;
            }
        });
    }
});
