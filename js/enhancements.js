
/**
 * TechnoMind UI Enhancements v2.0
 * 
 * Features:
 *   1. Scroll-Reveal Animations (IntersectionObserver)
 *   2. Glassmorphic Floating Header (sticky + blur + shrink)
 *   3. Toast Notification System (replaces alert())
 *   4. Command Palette (Ctrl+K / ⌘K)
 *   5. 3D Card Tilt on Hover
 *   6. Reading Progress Bar
 *   7. Back-to-Top Button
 *   8. Page Transitions (View Transitions API)
 *   9. Multi-Theme Picker
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initFloatingHeader();
    initToastSystem();
    initCommandPalette();
    initCardTilt();
    initReadingProgressBar();
    initBackToTop();
    initPageTransitions();
    initThemePicker();
    initAnimatedCounters();
    initServiceWorker();
});

/* ========================================================================
   1. SCROLL-REVEAL ANIMATIONS
   ======================================================================== */
function initScrollReveal() {
    const selectors = [
        '.card',
        '.hf-card',
        '.testimonial-card',
        'section > .container > h2',
        'section > .container > p',
        '.footer-content > *',
        '.quick-access-bar',
        '.course-card-featured',
        '[style*="grid"] > a',
        '[style*="grid"] > div',
    ];

    const elements = document.querySelectorAll(selectors.join(','));

    elements.forEach((el, i) => {
        if (el.closest('.hero') && el.classList.contains('animate-fade-up')) return;
        el.classList.add('sr-hidden');
        const staggerDelay = (i % 6) * 0.08;
        el.style.transitionDelay = `${staggerDelay}s`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('sr-visible');
                entry.target.classList.remove('sr-hidden');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    elements.forEach(el => {
        if (el.classList.contains('sr-hidden')) {
            observer.observe(el);
        }
    });
}

/* ========================================================================
   2. GLASSMORPHIC FLOATING HEADER
   ======================================================================== */
function initFloatingHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        if (currentScroll > lastScroll && currentScroll > 300) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

/* ========================================================================
   3. TOAST NOTIFICATION SYSTEM
   ======================================================================== */
function initToastSystem() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);

    window.alert = function (message) {
        showToast(message);
    };

    window.showToast = showToast;
}

function showToast(message, type = 'info', duration = 3500) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const icons = { info: 'ℹ️', success: '✅', warning: '⚠️', error: '❌' };
    const safeType = Object.keys(icons).includes(type) ? type : 'info';

    const toast = document.createElement('div');
    toast.className = `toast toast-${safeType}`;

    const iconEl = document.createElement('span');
    iconEl.className = 'toast-icon';
    iconEl.textContent = icons[safeType];

    const msgEl = document.createElement('span');
    msgEl.className = 'toast-message';
    msgEl.textContent = message;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.textContent = '✕';
    closeBtn.addEventListener('click', () => toast.classList.add('toast-exit'));

    toast.append(iconEl, msgEl, closeBtn);
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('toast-enter'));

    const timer = setTimeout(() => toast.classList.add('toast-exit'), duration);

    toast.addEventListener('animationend', (e) => {
        if (e.animationName === 'toastSlideOut') {
            clearTimeout(timer);
            toast.remove();
        }
    });
}

/* ========================================================================
   4. COMMAND PALETTE (Ctrl+K)
   ======================================================================== */
function initCommandPalette() {
    // Build navigation items
    const navItems = [
        { title: 'الرئيسية / Home', url: getBasePath() + 'index.html', icon: '🏠', type: 'page' },
        { title: 'أدوات الذكاء الاصطناعي / AI Tools', url: getBasePath() + 'pages/tools-directory.html', icon: '🧰', type: 'page' },
        { title: 'الدورات التعليمية / Courses', url: getBasePath() + 'pages/courses.html', icon: '🎓', type: 'page' },
        { title: 'الذكاء الاصطناعي المبسط / AI Simplified', url: getBasePath() + 'pages/ai-simplified.html', icon: '🧠', type: 'page' },
        { title: 'الربح من الإنترنت / Make Money', url: getBasePath() + 'pages/make-money.html', icon: '💰', type: 'page' },
        { title: 'التطبيقات والأدوات / Apps & Tools', url: getBasePath() + 'pages/apps-tools.html', icon: '📱', type: 'page' },
        { title: 'المراجعات / Reviews', url: getBasePath() + 'pages/reviews.html', icon: '⭐', type: 'page' },
        { title: 'المفضلة / Favorites', url: getBasePath() + 'pages/favorites.html', icon: '❤️', type: 'page' },
        { title: 'لوحة التحكم / Dashboard', url: getBasePath() + 'pages/dashboard.html', icon: '📊', type: 'page' },
        { title: 'المقارنة / Compare Tools', url: getBasePath() + 'pages/compare.html', icon: '⚖️', type: 'page' },
        { title: 'قاموس المصطلحات / Glossary', url: getBasePath() + 'pages/glossary.html', icon: '📖', type: 'page' },
        { title: 'خارطة الطريق / Roadmap', url: getBasePath() + 'pages/roadmap.html', icon: '🗺️', type: 'page' },
        { title: 'من نحن / About', url: getBasePath() + 'pages/about.html', icon: '👥', type: 'page' },
        { title: 'اتصل بنا / Contact', url: getBasePath() + 'pages/contact.html', icon: '📞', type: 'page' },
        { title: 'الإعدادات / Settings', url: getBasePath() + 'pages/settings.html', icon: '⚙️', type: 'page' },
    ];

    // Add tools from global data (if available)
    const getToolItems = () => {
        const tools = window.technoMindTools || window.articles || [];
        return tools.slice(0, 30).map(t => ({
            title: `${t.title || t.title_en} — ${t.category || t.category_en || ''}`,
            url: getBasePath() + 'pages/tool-viewer.html?id=' + t.id,
            icon: t.icon || '🔧',
            type: 'tool'
        }));
    };

    // Add courses from global data (if available)
    const getCourseItems = () => {
        const coursesList = window.courses || [];
        return coursesList.map(c => ({
            title: `${c.title} — ${c.level || ''}`,
            url: getBasePath() + 'pages/course-viewer.html?id=' + c.id,
            icon: '🎓',
            type: 'course'
        }));
    };

    // Create the palette HTML
    const overlay = document.createElement('div');
    overlay.id = 'cmdPalette';
    overlay.className = 'cmd-palette-overlay';
    overlay.innerHTML = `
        <div class="cmd-palette" role="dialog" aria-label="Command Palette">
            <div class="cmd-palette-header">
                <span class="cmd-search-icon">🔍</span>
                <input type="text" id="cmdPaletteInput" class="cmd-palette-input" 
                       placeholder="اكتب للبحث... / Type to search..." autocomplete="off" />
                <kbd class="cmd-kbd">ESC</kbd>
            </div>
            <div class="cmd-palette-results" id="cmdPaletteResults"></div>
            <div class="cmd-palette-footer">
                <span><kbd>↑↓</kbd> للتنقل</span>
                <span><kbd>Enter</kbd> للفتح</span>
                <span><kbd>Esc</kbd> للإغلاق</span>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const input = document.getElementById('cmdPaletteInput');
    const resultsEl = document.getElementById('cmdPaletteResults');
    let selectedIndex = 0;
    let currentResults = [];

    function getAllItems() {
        return [...navItems, ...getToolItems(), ...getCourseItems()];
    }

    function renderResults(query) {
        const allItems = getAllItems();
        currentResults = query
            ? allItems.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
            : allItems.slice(0, 12);
        selectedIndex = 0;

        if (currentResults.length === 0) {
            resultsEl.innerHTML = `<div class="cmd-no-results">لا توجد نتائج / No results found</div>`;
            return;
        }

        resultsEl.innerHTML = currentResults.map((item, i) => `
            <a href="${item.url}" class="cmd-result-item ${i === 0 ? 'cmd-selected' : ''}" data-index="${i}">
                <span class="cmd-result-icon">${item.icon}</span>
                <span class="cmd-result-title">${highlightMatch(item.title, query)}</span>
                <span class="cmd-result-type">${item.type}</span>
            </a>
        `).join('');
    }

    function highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    function updateSelection() {
        resultsEl.querySelectorAll('.cmd-result-item').forEach((el, i) => {
            el.classList.toggle('cmd-selected', i === selectedIndex);
            if (i === selectedIndex) el.scrollIntoView({ block: 'nearest' });
        });
    }

    function openPalette() {
        overlay.classList.add('cmd-open');
        input.value = '';
        renderResults('');
        setTimeout(() => input.focus(), 50);
        document.body.style.overflow = 'hidden';
    }

    function closePalette() {
        overlay.classList.remove('cmd-open');
        document.body.style.overflow = '';
    }

    // Keyboard shortcut: Ctrl+K or ⌘K
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (overlay.classList.contains('cmd-open')) {
                closePalette();
            } else {
                openPalette();
            }
        }
        if (e.key === 'Escape' && overlay.classList.contains('cmd-open')) {
            closePalette();
        }
    });

    // Click outside to close
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closePalette();
    });

    // Search input
    input.addEventListener('input', () => renderResults(input.value));

    // Keyboard navigation
    input.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, currentResults.length - 1);
            updateSelection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, 0);
            updateSelection();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const selected = resultsEl.querySelector('.cmd-selected');
            if (selected) window.location.href = selected.href;
        }
    });

    // Expose globally
    window.openCommandPalette = openPalette;
}

function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/pages/')) {
        return '../';
    }
    return '';
}

/* ========================================================================
   5. 3D CARD TILT ON HOVER
   ======================================================================== */
function initCardTilt() {
    const cards = document.querySelectorAll('.card, .hf-card, .course-card-featured');

    cards.forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        card.style.transition = card.style.transition
            ? card.style.transition + ', transform 0.15s ease-out'
            : 'transform 0.15s ease-out';

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Max tilt: 6 degrees
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

/* ========================================================================
   6. READING PROGRESS BAR
   ======================================================================== */
function initReadingProgressBar() {
    // Only show on article pages
    const isArticle = window.location.pathname.includes('article-') ||
        window.location.pathname.includes('guide-');
    if (!isArticle) return;

    const bar = document.createElement('div');
    bar.className = 'reading-progress-bar';
    bar.id = 'readingProgressBar';
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = `${Math.min(progress, 100)}%`;
    }, { passive: true });
}

/* ========================================================================
   7. BACK-TO-TOP BUTTON
   ======================================================================== */
function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'backToTopBtn';
    btn.innerHTML = '⬆';
    btn.setAttribute('aria-label', 'Back to top');
    btn.title = 'العودة للأعلى / Back to Top';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            btn.classList.add('btt-visible');
        } else {
            btn.classList.remove('btt-visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ========================================================================
   8. PAGE TRANSITIONS (View Transitions API)
   ======================================================================== */
function initPageTransitions() {
    // Add view-transition meta tag for same-origin navigation
    if (!document.querySelector('meta[name="view-transition"]')) {
        const meta = document.createElement('meta');
        meta.name = 'view-transition';
        meta.content = 'same-origin';
        document.head.appendChild(meta);
    }

    // Add fade-out class on link clicks for browsers without View Transitions
    if (!document.startViewTransition) {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (!link) return;
            const href = link.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('javascript:') ||
                href.startsWith('http') || link.target === '_blank') return;

            e.preventDefault();
            document.body.classList.add('page-exit');
            setTimeout(() => {
                window.location.href = href;
            }, 250);
        });
    }

    // Fade-in on page load
    document.body.classList.add('page-enter');
}

/* ========================================================================
   9. MULTI-THEME PICKER
   ======================================================================== */
const THEMES = {
    midnight: {
        name: 'Midnight',
        nameAr: 'منتصف الليل',
        icon: '🌙',
        vars: {} // default dark theme, no overrides needed
    },
    ocean: {
        name: 'Ocean',
        nameAr: 'المحيط',
        icon: '🌊',
        vars: {
            '--color-primary': '#06B6D4',
            '--color-primary-dark': '#0891B2',
            '--color-primary-light': '#67E8F9',
            '--color-primary-lighter': 'rgba(6, 182, 212, 0.15)',
            '--color-section-ai': '#22D3EE',
            '--shadow-btn': '0 0 20px rgba(6, 182, 212, 0.4)',
        }
    },
    forest: {
        name: 'Forest',
        nameAr: 'الغابة',
        icon: '🌿',
        vars: {
            '--color-primary': '#10B981',
            '--color-primary-dark': '#059669',
            '--color-primary-light': '#6EE7B7',
            '--color-primary-lighter': 'rgba(16, 185, 129, 0.15)',
            '--color-section-ai': '#34D399',
            '--shadow-btn': '0 0 20px rgba(16, 185, 129, 0.4)',
        }
    },
    sunset: {
        name: 'Sunset',
        nameAr: 'الغروب',
        icon: '🌅',
        vars: {
            '--color-primary': '#F59E0B',
            '--color-primary-dark': '#D97706',
            '--color-primary-light': '#FCD34D',
            '--color-primary-lighter': 'rgba(245, 158, 11, 0.15)',
            '--color-section-ai': '#FBBF24',
            '--shadow-btn': '0 0 20px rgba(245, 158, 11, 0.4)',
        }
    },
    rose: {
        name: 'Rose',
        nameAr: 'الوردي',
        icon: '🌸',
        vars: {
            '--color-primary': '#EC4899',
            '--color-primary-dark': '#DB2777',
            '--color-primary-light': '#F9A8D4',
            '--color-primary-lighter': 'rgba(236, 72, 153, 0.15)',
            '--color-section-ai': '#F472B6',
            '--shadow-btn': '0 0 20px rgba(236, 72, 153, 0.4)',
        }
    }
};

function initThemePicker() {
    // Create theme picker button
    const picker = document.createElement('div');
    picker.className = 'theme-picker';
    picker.innerHTML = `
        <button class="theme-picker-toggle" id="themePickerToggle" aria-label="Change theme" title="تغيير الثيم / Change Theme">
            🎨
        </button>
        <div class="theme-picker-dropdown" id="themePickerDropdown">
            ${Object.entries(THEMES).map(([key, theme]) => `
                <button class="theme-option" data-theme="${key}" title="${theme.name}">
                    <span>${theme.icon}</span>
                    <span class="theme-option-name">${theme.nameAr}</span>
                </button>
            `).join('')}
        </div>
    `;
    document.body.appendChild(picker);

    const toggle = document.getElementById('themePickerToggle');
    const dropdown = document.getElementById('themePickerDropdown');

    toggle.addEventListener('click', () => {
        dropdown.classList.toggle('tp-open');
    });

    document.addEventListener('click', (e) => {
        if (!picker.contains(e.target)) {
            dropdown.classList.remove('tp-open');
        }
    });

    // Theme selection
    dropdown.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const themeKey = btn.dataset.theme;
            applyTheme(themeKey);
            localStorage.setItem('tm_color_theme', themeKey);
            dropdown.classList.remove('tp-open');

            // Update active indicator
            dropdown.querySelectorAll('.theme-option').forEach(b => b.classList.remove('tp-active'));
            btn.classList.add('tp-active');
        });
    });

    // Restore saved theme
    const saved = localStorage.getItem('tm_color_theme') || 'midnight';
    applyTheme(saved);
    const activeBtn = dropdown.querySelector(`[data-theme="${saved}"]`);
    if (activeBtn) activeBtn.classList.add('tp-active');
}

function applyTheme(themeKey) {
    const theme = THEMES[themeKey];
    if (!theme) return;

    // Reset to defaults first (remove custom properties)
    Object.keys(THEMES).forEach(k => {
        const t = THEMES[k];
        Object.keys(t.vars).forEach(prop => {
            document.documentElement.style.removeProperty(prop);
        });
    });

    // Apply new theme variables
    Object.entries(theme.vars).forEach(([prop, value]) => {
        document.documentElement.style.setProperty(prop, value);
    });
}

/* ========================================================================
   10. ANIMATED COUNTERS
   ======================================================================== */
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000; // ms
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        // Format with +/K suffix
        if (target >= 1000) {
            el.textContent = (current / 1000).toFixed(current >= target ? 0 : 1) + 'K+';
        } else {
            el.textContent = current + '+';
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/* ========================================================================
   11. SERVICE WORKER REGISTRATION
   ======================================================================== */
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        const swPath = getBasePath() + 'sw.js';
        navigator.serviceWorker.register(swPath).catch(() => {
            // SW registration failed silently (e.g., not on HTTPS)
        });
    }
}
