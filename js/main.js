// ==================== GLOBAL VARIABLES ====================
let eventsData = [];
let galleryData = [];
let prayersData = [];

// ==================== DOM ELEMENTS ====================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');
const backToTopBtn = document.getElementById('backToTop');

// ==================== MOBILE MENU ====================
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mainNav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header-content')) {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// ==================== BACK TO TOP BUTTON ====================
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== SIMPLE AOS (ANIMATE ON SCROLL) ====================
function initAOS() {
    const aosElements = document.querySelectorAll('[data-aos]');
    
    if (aosElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    aosElements.forEach(el => observer.observe(el));
}

// ==================== LOAD EVENTS ====================
function loadEvents() {
    // Sample events data
    eventsData = [
        {
            id: 1,
            title: 'Maha Aarti',
            description: 'Grand evening aarti with devotional songs and prasad distribution',
            date: '2024-01-20',
            time: '7:00 PM',
            location: 'Main Temple Hall',
            icon: 'fa-fire'
        },
        {
            id: 2,
            title: 'Hanuman Jayanti',
            description: 'Celebrate the birth of Lord Hanuman with special puja and bhajans',
            date: '2024-04-23',
            time: '6:00 AM',
            location: 'Temple Premises',
            icon: 'fa-om'
        },
        {
            id: 3,
            title: 'Annadan Seva',
            description: 'Community food service for devotees and visitors',
            date: '2024-01-15',
            time: '12:00 PM',
            location: 'Dining Hall',
            icon: 'fa-utensils'
        }
    ];

    const eventsGrid = document.getElementById('eventsGrid');
    if (eventsGrid) {
                eventsGrid.innerHTML = eventsData.map(event => `
            <div class="event-card" data-aos="fade-up">
                <div class="event-image">
                    <i class="fas ${event.icon}"></i>
                </div>
                <div class="event-content">
                    <span class="event-date-badge">${formatDate(event.date)}</span>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                    <div class="event-meta">
                        <span><i class="fas fa-clock"></i> ${event.time}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ==================== LOAD GALLERY ====================
function loadGallery() {
    // Sample gallery data
    galleryData = [
        { id: 1, alt: 'Temple Main Deity', icon: 'fa-gopuram' },
        { id: 2, alt: 'Morning Aarti', icon: 'fa-fire' },
        { id: 3, alt: 'Festival Celebration', icon: 'fa-drum' },
        { id: 4, alt: 'Temple Architecture', icon: 'fa-building' },
        { id: 5, alt: 'Evening Darshan', icon: 'fa-moon' },
        { id: 6, alt: 'Prasad Distribution', icon: 'fa-hands' }
    ];

    const galleryPreview = document.getElementById('galleryPreview');
    if (galleryPreview) {
        galleryPreview.innerHTML = galleryData.slice(0, 6).map(item => `
            <div class="gallery-item" data-aos="fade-up">
                <div class="gallery-placeholder">
                    <i class="fas ${item.icon}"></i>
                </div>
            </div>
        `).join('');
    }
}

// ==================== LOAD PRAYERS ====================
function loadPrayers() {
    // Sample prayers data
    prayersData = [
        {
            id: 1,
            text: 'May Lord bless my family with good health and prosperity. Thank you for your divine grace.',
            author: 'Devotee',
            date: '2024-01-10'
        },
        {
            id: 2,
            text: 'Seeking blessings for my child\'s education. Om Namah Shivaya.',
            author: 'Ramesh Kumar',
            date: '2024-01-09'
        },
        {
            id: 3,
            text: 'Grateful for all the blessings. Please continue to guide us on the righteous path.',
            author: 'Priya Sharma',
            date: '2024-01-08'
        }
    ];

    const prayersPreview = document.getElementById('prayersPreview');
    if (prayersPreview) {
        prayersPreview.innerHTML = prayersData.map(prayer => `
            <div class="prayer-card" data-aos="fade-up">
                <p class="prayer-text">"${prayer.text}"</p>
                <div class="prayer-author">— ${prayer.author}</div>
                <div class="prayer-date">${formatDate(prayer.date)}</div>
            </div>
        `).join('');
    }
}

// ==================== UTILITY: FORMAT DATE ====================
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ==================== TOAST NOTIFICATION ====================
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconMap = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    toast.innerHTML = `
        <i class="fas ${iconMap[type]} toast-icon"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== FORM VALIDATION ====================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// ==================== LIVE STATUS CHECK ====================
function updateLiveStatus() {
    const liveStatus = document.getElementById('liveStatus');
    if (liveStatus) {
        const now = new Date();
        const hours = now.getHours();
        
        // Example: Live during morning (5-7 AM) and evening (6-8 PM) aarti
        const isLive = (hours >= 5 && hours < 7) || (hours >= 18 && hours < 20);
        
        if (isLive) {
            liveStatus.textContent = '🔴 Live Now';
            liveStatus.style.color = 'var(--color-secondary)';
        } else {
            liveStatus.textContent = 'Next Live: ' + getNextLiveTime(hours);
            liveStatus.style.color = 'var(--color-text)';
        }
    }
}

function getNextLiveTime(currentHour) {
    if (currentHour < 5) return '5:00 AM';
    if (currentHour < 18) return '6:00 PM';
    return 'Tomorrow 5:00 AM';
}

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== LOCAL STORAGE HELPERS ====================
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Error reading from localStorage:', e);
        return null;
    }
}

// ==================== LOADING ANIMATION ====================
function hideLoadingSpinner() {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.style.opacity = '0';
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 300);
    }
}

// ==================== PERFORMANCE OPTIMIZATION ====================
function optimizeImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ==================== ACCESSIBILITY IMPROVEMENTS ====================
function improveAccessibility() {
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--color-primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--color-primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ==================== ERROR HANDLING ====================
function handleError(error, context = 'Unknown') {
    console.error(`Error in ${context}:`, error);
    
    // Show user-friendly error message
    showToast('Something went wrong. Please refresh the page.', 'error');
}

// ==================== INITIALIZE ON PAGE LOAD ====================
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Show loading spinner initially
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--color-white);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: opacity 0.3s ease;
            ">
                <div class="spinner"></div>
            </div>
        `;
        document.body.appendChild(spinner);
        
        // Initialize all features with error handling
        try {
            initAOS();
        } catch (e) { handleError(e, 'AOS initialization'); }
        
        try {
            loadEvents();
        } catch (e) { handleError(e, 'Events loading'); }
        
        try {
            loadGallery();
        } catch (e) { handleError(e, 'Gallery loading'); }
        
        try {
            loadPrayers();
        } catch (e) { handleError(e, 'Prayers loading'); }
        
        try {
            updateLiveStatus();
        } catch (e) { handleError(e, 'Live status update'); }
        
        try {
            optimizeImages();
        } catch (e) { handleError(e, 'Image optimization'); }
        
        try {
            improveAccessibility();
        } catch (e) { handleError(e, 'Accessibility improvements'); }
        
        // Hide loading spinner after everything is loaded
        setTimeout(hideLoadingSpinner, 1000);
        
        // Update live status every minute
        setInterval(() => {
            try {
                updateLiveStatus();
            } catch (e) { handleError(e, 'Live status update interval'); }
        }, 60000);
        
    } catch (e) {
        handleError(e, 'Page initialization');
        hideLoadingSpinner();
    }
});

// ==================== PAGE VISIBILITY (Stop animations when tab inactive) ====================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden
        document.body.style.animationPlayState = 'paused';
    } else {
        // Page is visible
        document.body.style.animationPlayState = 'running';
    }
});