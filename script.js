// Advanced JavaScript with GSAP-like animations and smooth interactions

class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupLoadingScreen();
        this.setupThemeToggle();
        this.setupNavigationScroll();
        this.setupMobileMenu();
        this.setupScrollAnimations();
        this.setupParallax();
        this.setupCursorEffect();
        this.setupFormValidation();
        this.setupNameAnimation();
        this.setupTypingEffect();
        this.setupStatsCounter();
        this.setupScrollProgress();
        this.setupFloatingButtons();
        this.setupTestimonials();
        this.setupMarqueeHover();
        this.setupMouseTracking();
        this.setupSmoothScroll();
        this.setupActiveNavigation();
    }

    // Smooth scroll for navigation
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Active navigation highlighting
    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const highlightNav = () => {
            const scrollY = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', highlightNav);
        highlightNav(); // Run on load
    }

    // Scroll progress bar
    setupScrollProgress() {
        const progressBar = document.querySelector('.scroll-progress-bar');
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    setupMouseTracking() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                card.style.setProperty('--mouse-x', x + '%');
                card.style.setProperty('--mouse-y', y + '%');
            });
        });
    }

    // Floating action buttons
    setupFloatingButtons() {
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Testimonials slider
    setupTestimonials() {
        const cards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.testimonial-dots .dot');
        let currentIndex = 0;
        let autoPlayInterval;

        const showTestimonial = (index) => {
            cards.forEach(card => card.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            cards[index].classList.add('active');
            dots[index].classList.add('active');
            currentIndex = index;
        };

        const nextTestimonial = () => {
            const nextIndex = (currentIndex + 1) % cards.length;
            showTestimonial(nextIndex);
        };

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(nextTestimonial, 5000);
        };

        const stopAutoPlay = () => {
            clearInterval(autoPlayInterval);
        };

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
                stopAutoPlay();
                startAutoPlay();
            });
        });

        // Swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        const testimonialSlider = document.querySelector('.testimonials-slider');
        
        testimonialSlider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        testimonialSlider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                nextTestimonial();
                stopAutoPlay();
                startAutoPlay();
            }
            if (touchEndX > touchStartX + 50) {
                const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
                showTestimonial(prevIndex);
                stopAutoPlay();
                startAutoPlay();
            }
        };

        startAutoPlay();
    }

    // Marquee hover pause
    setupMarqueeHover() {
        const marquee = document.querySelector('.marquee-content');
        
        marquee?.addEventListener('mouseenter', () => {
            marquee.style.animationPlayState = 'paused';
        });

        marquee?.addEventListener('mouseleave', () => {
            marquee.style.animationPlayState = 'running';
        });
    }

    // Loading screen
    setupLoadingScreen() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.classList.add('loaded');
                this.addProjectVisuals();
            }, 2200);
        });
    }

    // Theme toggle
    setupThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        const currentTheme = localStorage.getItem('theme') || 'dark';
        
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        }

        themeToggle?.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Animated stats counter
    setupStatsCounter() {
        const stats = document.querySelectorAll('.achievement-stat[data-count], .hero-stats .stat-number[data-count]');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    this.animateCounter(entry.target);
                }
            });
        }, observerOptions);

        stats.forEach(stat => observer.observe(stat));
    }

    animateCounter(element) {
        const target = parseFloat(element.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                if (target > 100) {
                    element.textContent = Math.floor(current).toLocaleString() + '+';
                } else {
                    element.textContent = current.toFixed(3);
                }
                requestAnimationFrame(updateCounter);
            } else {
                if (target > 100) {
                    element.textContent = Math.floor(target).toLocaleString() + '+';
                } else {
                    element.textContent = target.toFixed(3);
                }
            }
        };
        
        updateCounter();
    }

    // Smooth scroll navigation with offset
    setupNavigationScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offset = 80;
                    const targetPosition = targetElement.offsetTop - offset;
                    
                    this.smoothScrollTo(targetPosition, 1000);
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    anchor.classList.add('active');
                }
            });
        });

        // Update active nav on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveNav();
        });
    }

    smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function (easeInOutCubic)
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }

    updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Mobile menu toggle
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    // Scroll animations (GSAP-like)
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Stagger animation for cards
                    if (entry.target.classList.contains('expertise-grid') ||
                        entry.target.classList.contains('projects-list') ||
                        entry.target.classList.contains('timeline')) {
                        this.staggerChildren(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe sections and cards
        document.querySelectorAll('section, .expertise-card, .project-card, .timeline-item').forEach(el => {
            observer.observe(el);
        });
    }

    staggerChildren(parent) {
        const children = parent.children;
        Array.from(children).forEach((child, index) => {
            setTimeout(() => {
                child.style.opacity = '0';
                child.style.transform = 'translateY(30px)';
                child.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    }

    // Parallax effect
    setupParallax() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    
                    // Parallax for hero section
                    const hero = document.querySelector('.hero-content');
                    if (hero) {
                        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                        hero.style.opacity = 1 - scrolled / 800;
                    }

                    // Parallax for section titles
                    document.querySelectorAll('.section-title').forEach(title => {
                        const rect = title.getBoundingClientRect();
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                            const offset = (window.innerHeight - rect.top) * 0.1;
                            title.style.transform = `translateX(${offset}px)`;
                        }
                    });

                    ticking = false;
                });

                ticking = true;
            }
        });
    }

    // Custom cursor effect
    setupCursorEffect() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'cursor-follower';
        document.body.appendChild(cursorFollower);

        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        // Smooth follower animation
        const animateFollower = () => {
            const distX = mouseX - followerX;
            const distY = mouseY - followerY;

            followerX += distX * 0.1;
            followerY += distY * 0.1;

            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';

            requestAnimationFrame(animateFollower);
        };
        animateFollower();

        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .btn, .expertise-card, .project-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursorFollower.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursorFollower.classList.remove('cursor-hover');
            });
        });
    }

    // Form validation with animations
    setupFormValidation() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;

            // Validation
            const email = formData.get('email');
            if (!this.validateEmail(email)) {
                this.showFormError('Please enter a valid email address');
                return;
            }

            // Show loading state
            button.textContent = 'Sending...';
            button.disabled = true;
            button.style.opacity = '0.6';

            try {
                // Submit to Web3Forms
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Success state
                    button.textContent = '✓ Message Sent!';
                    button.style.background = '#00ff88';
                    button.style.color = '#0a0a0a';
                    
                    // Show success message
                    this.showFormSuccess('Thank you! Your message has been sent successfully.');
                    
                    // Reset form
                    form.reset();

                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                        button.style.opacity = '1';
                        button.style.background = '';
                        button.style.color = '';
                    }, 3000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                this.showFormError('Oops! Something went wrong. Please try again or email directly.');
                
                button.textContent = originalText;
                button.disabled = false;
                button.style.opacity = '1';
            }
        });

        // Real-time validation
        const emailInput = document.getElementById('email');
        emailInput.addEventListener('blur', (e) => {
            if (e.target.value && !this.validateEmail(e.target.value)) {
                e.target.style.borderColor = '#ff4444';
            } else {
                e.target.style.borderColor = '';
            }
        });
    }

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showFormError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ff4444;
            margin-top: 1rem;
            padding: 0.75rem;
            border-radius: 8px;
            background: rgba(255, 68, 68, 0.1);
            border: 1px solid rgba(255, 68, 68, 0.3);
            animation: shake 0.5s;
            text-align: center;
        `;
        
        const form = document.getElementById('contactForm');
        const existingError = form.querySelector('.form-error');
        const existingSuccess = form.querySelector('.form-success');
        if (existingError) existingError.remove();
        if (existingSuccess) existingSuccess.remove();
        
        form.appendChild(errorDiv);
        setTimeout(() => errorDiv.remove(), 5000);
    }

    showFormSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.textContent = message;
        successDiv.style.cssText = `
            color: #00ff88;
            margin-top: 1rem;
            padding: 0.75rem;
            border-radius: 8px;
            background: rgba(0, 255, 136, 0.1);
            border: 1px solid rgba(0, 255, 136, 0.3);
            animation: fadeInUp 0.5s;
            text-align: center;
        `;
        
        const form = document.getElementById('contactForm');
        const existingError = form.querySelector('.form-error');
        const existingSuccess = form.querySelector('.form-success');
        if (existingError) existingError.remove();
        if (existingSuccess) existingSuccess.remove();
        
        form.appendChild(successDiv);
        setTimeout(() => successDiv.remove(), 5000);
    }

    // Loading animation
    setupLoadingAnimation() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Animate elements on page load
            setTimeout(() => {
                const heroElements = document.querySelectorAll('.hero-content > *');
                heroElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
                    }, index * 100);
                });
            }, 100);

            // Add animated dots to project images
            this.addProjectVisuals();
        });
    }

    // Add animated dots to project backgrounds
    addProjectVisuals() {
        const projectImages = document.querySelectorAll('.project-image');
        
        projectImages.forEach((image, projectIndex) => {
            const canvas = document.createElement('canvas');
            canvas.className = 'project-canvas';
            canvas.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                opacity: 0.3;
            `;
            image.appendChild(canvas);

            const ctx = canvas.getContext('2d');
            canvas.width = image.offsetWidth;
            canvas.height = image.offsetHeight;

            // Create grid pattern
            const drawGrid = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.strokeStyle = 'rgba(0, 255, 136, 0.15)';
                ctx.lineWidth = 1;

                const gridSize = 30;
                const time = Date.now() * 0.001;

                // Horizontal lines
                for (let y = 0; y < canvas.height; y += gridSize) {
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(canvas.width, y);
                    ctx.stroke();
                }

                // Vertical lines
                for (let x = 0; x < canvas.width; x += gridSize) {
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, canvas.height);
                    ctx.stroke();
                }

                // Animated dots at intersections
                ctx.fillStyle = '#00ff88';
                for (let y = 0; y < canvas.height; y += gridSize) {
                    for (let x = 0; x < canvas.width; x += gridSize) {
                        const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;
                        const radius = 2 + pulse * 2;
                        ctx.beginPath();
                        ctx.arc(x, y, radius, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            };

            // Animate only when in view
            let animationFrame;
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const animate = () => {
                            drawGrid();
                            animationFrame = requestAnimationFrame(animate);
                        };
                        animate();
                    } else {
                        cancelAnimationFrame(animationFrame);
                    }
                });
            });

            observer.observe(image);
        });
        
        // Animate hero elements
        setTimeout(() => {
            const heroElements = document.querySelectorAll('.hero-content > *');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
                }, index * 100);
            });
        }, 100);
    }

    // Epic name animation with letter-by-letter reveal
    setupNameAnimation() {
        const nameElement = document.getElementById('nameAnimation');
        if (!nameElement) return;

        const name = 'DAVIS SEBASTIAN';
        const letters = name.split('');
        
        // Wait for loading screen to finish
        setTimeout(() => {
            // Clear and prepare
            nameElement.innerHTML = '';
            
            // Create letter spans
            letters.forEach((letter, index) => {
                const span = document.createElement('span');
                span.className = 'letter';
                span.textContent = letter === ' ' ? '\u00A0' : letter; // Use non-breaking space
                span.style.setProperty('--i', index);
                nameElement.appendChild(span);
            });
        }, 2300); // Run after loading screen (2200ms + 100ms buffer)
    }

    // Typing effect for hero subtitle
    setupTypingEffect() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;

        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.opacity = '1';

        let index = 0;
        const typeSpeed = 50;

        const type = () => {
            if (index < text.length) {
                subtitle.textContent += text.charAt(index);
                index++;
                setTimeout(type, typeSpeed);
            }
        };

        setTimeout(type, 1000);
    }
}

// Particle background effect
class ParticleBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.3;
        `;
        document.body.prepend(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = '#00ff88';
            this.ctx.fill();
        });

        // Draw connections
        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(0, 255, 136, ${1 - distance / 150})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Add cursor styles
const style = document.createElement('style');
style.textContent = `
    .custom-cursor, .cursor-follower {
        position: fixed;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
    }

    .custom-cursor {
        width: 10px;
        height: 10px;
        background: #00ff88;
        transform: translate(-50%, -50%);
    }

    .cursor-follower {
        width: 40px;
        height: 40px;
        border: 2px solid #00ff88;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
    }

    .custom-cursor.cursor-hover {
        transform: translate(-50%, -50%) scale(1.5);
    }

    .cursor-follower.cursor-hover {
        transform: translate(-50%, -50%) scale(1.5);
        background: rgba(0, 255, 136, 0.1);
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }

    .nav-link.active {
        color: var(--primary-color);
    }

    .nav-link.active::after {
        width: 100%;
    }

    @media (max-width: 968px) {
        .custom-cursor, .cursor-follower {
            display: none;
        }

        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(10, 10, 10, 0.98);
            backdrop-filter: blur(20px);
            padding: 2rem;
            gap: 1.5rem;
            border-top: 1px solid var(--border-color);
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Portfolio();
        new ParticleBackground();
    });
} else {
    new Portfolio();
    new ParticleBackground();
}

// Counter animation for stats (if you add stats section)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Export for potential use in React
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Portfolio, ParticleBackground, animateCounter };
}
