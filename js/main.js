/* TechnoMind Arabic - Main JavaScript */

document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
    setupNewsletterForm();
    injectSearchOverlay();
    highlightActiveLink();
    initTheme(); // Initialize Theme
    // setupDynamicHero(); // Randomize Hero Text - Disabled for v2.0 Design

    // Close menu when clicking outside (for mainMenu)
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('mainMenu');
        const btn = document.querySelector('[onclick="toggleMainMenu()"]');
        if (menu && menu.classList.contains('active') && !menu.contains(e.target) && (!btn || !btn.contains(e.target))) {
            menu.classList.remove('active');
        }
    });
});

// Dynamic Hero Content
function setupDynamicHero() {
    // Only run on homepage
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const contents = [
        {
            ar_title: 'استشرف مستقبل <span class="text-gradient">الذكاء الاصطناعي</span> والتقنية',
            en_title: 'Discover the Future of AI & Technology',
            ar_desc: 'منصتك العربية الشاملة لاكتشاف أحدث أدوات الذكاء الاصطناعي، تعلم التقنيات المستقبلية، واكتساب المهارات الرقمية بأسلوب علمي وعملي.',
            en_desc: 'Your premier destination for mastering AI tools, exploring modern technologies, and building future skills with precision and clarity.'
        },
        {
            ar_title: 'أتقن أدوات <span class="text-gradient">المستقبل</span>، اليوم',
            en_title: 'Master the Tools of Tomorrow, Today',
            ar_desc: 'تعلم كيف تسخر قوة الذكاء الاصطناعي لزيادة إنتاجيتك وتحقيق أهدافك المهنية بسرعة وكفاءة.',
            en_desc: 'Learn how to harness the power of AI to boost your productivity and achieve your career goals with speed and efficiency.'
        },
        {
            ar_title: 'بوابتك نحو <span class="text-gradient">الابتكار الرقمي</span>',
            en_title: 'Your Gateway to Digital Innovation',
            ar_desc: 'نقدم لك أحدث الشروحات والأدوات التي تساعدك على البقاء في الطليعة في عالم تقني دائم التغير.',
            en_desc: 'We provide you with the latest tutorials and tools to help you stay ahead in an ever-changing tech world.'
        },
        {
            ar_title: 'الذكاء الاصطناعي <span class="text-gradient">مبسط للجميع</span>',
            en_title: 'Artificial Intelligence Simplified for Everyone',
            ar_desc: 'لا مزيد من التعقيد. شروحات سهلة ومباشرة تجعل التقنيات المتقدمة في متناول يديك.',
            en_desc: 'No more complexity. Easy and straightforward tutorials putting advanced technologies right at your fingertips.'
        }
    ];

    // Pick random index
    const randomIndex = Math.floor(Math.random() * contents.length);
    const content = contents[randomIndex];

    // Update Elements
    const heroDesc = document.querySelector('.hero-description');

    // Check current language to set initial text correctly
    const isEnglish = document.documentElement.lang === 'en';

    if (heroTitle) {
        heroTitle.innerHTML = isEnglish ? content.en_title : content.ar_title;
        heroTitle.setAttribute('data-en', content.en_title);
        // Store Arabic for toggling back
        heroTitle.setAttribute('data-ar', content.ar_title);
    }

    if (heroDesc) {
        heroDesc.innerHTML = isEnglish ? content.en_desc : content.ar_desc;
        heroDesc.setAttribute('data-en', content.en_desc);
        // Store Arabic for toggling back
        heroDesc.setAttribute('data-ar', content.ar_desc);
    }
}

// Theme Handling
window.toggleTheme = () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
};

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        updateThemeIcon(true);
    }
}

function updateThemeIcon(isLight) {
    const iconSvg = document.getElementById('themeIconSvg');
    if (iconSvg) {
        if (isLight) {
            // Sun Icon
            iconSvg.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        } else {
            // Moon Icon
            iconSvg.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        }
    }
}

// Contact Form Handling (only binds if form has no existing inline onsubmit handler)
function setupContactForm() {
    const contactForm = document.querySelector('#contactForm, form.contact-form');
    if (contactForm && !contactForm.getAttribute('onsubmit')) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic Validation
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--color-accent-red)';
                } else {
                    input.style.borderColor = '';
                }
            });

            if (isValid) {
                // Simulate sending
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;

                submitBtn.innerText = 'جاري الإرسال...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert('تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.');
                    contactForm.reset();
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            } else {
                alert('يرجى ملء جميع الحقول المطلوبة.');
            }
        });
    }
}

// Newsletter Form Handling
function setupNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const btn = form.querySelector('button[type="submit"]');
        if (!input || !input.value.trim()) return;

        const originalText = btn.textContent;
        btn.textContent = 'جاري التسجيل...';
        btn.disabled = true;

        setTimeout(() => {
            if (typeof showToast === 'function') {
                showToast('شكراً! تم تسجيل بريدك بنجاح. 🎉', 'success');
            }
            form.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1000);
    });
}

// Mobile Menu Logic — handled by toggleMainMenu() / click-outside listener above

// Active Link Highlighting
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;

        const linkPath = href.replace(/^\.\.\//, '');
        const currentFile = currentPath.split('/').pop() || 'index.html';

        if (linkPath.includes(currentFile) || (currentFile === '' && linkPath === 'index.html')) {
            link.style.color = 'var(--color-primary)';
            link.style.fontWeight = '700';
        }
    });
}

// Search Overlay Feature
function injectSearchOverlay() {
    // Check if already injected
    if (document.getElementById('searchOverlay')) return;

    const overlayHTML = `
        <div id="searchOverlay" class="search-overlay">
            <button class="search-close" onclick="toggleSearch()" aria-label="Close Search">×</button>
            <div class="search-container">
                <input type="text" id="searchInputLg" class="search-input-lg" placeholder="Start typing to search... / ابحث هنا" aria-label="Search Query">
                <p style="text-align:center; color: var(--color-neutral-400); margin-top: 16px; font-size: 14px;">Press Enter to search / اضغط إنتر للبحث</p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', overlayHTML);

    // Event Listener for Enter Key
    const input = document.getElementById('searchInputLg');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query) {
                    const isPages = window.location.pathname.includes('/pages/');
                    const target = isPages ? 'tools-directory.html' : 'pages/tools-directory.html';
                    window.location.href = `${target}?search=${encodeURIComponent(query)}`;
                }
            }
            if (e.key === 'Escape') toggleSearch();
        });
    }
}

// Global Toggle Functions
window.toggleSearch = () => {
    const overlay = document.getElementById('searchOverlay');
    const input = document.getElementById('searchInputLg');

    if (overlay) {
        if (overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        } else {
            overlay.classList.add('active');
            setTimeout(() => input && input.focus(), 100);
        }
    }
};

window.toggleMainMenu = () => {
    const menu = document.getElementById('mainMenu');
    if (menu) menu.classList.toggle('active');
};

// Hero Live Search
window.handleHeroSearch = (query) => {
    const suggestionBox = document.getElementById('heroSearchSuggestions');
    if (!suggestionBox) return;

    if (!query || query.length < 2) {
        suggestionBox.style.display = 'none';
        return;
    }

    const term = query.toLowerCase();

    // Tools from window.technoMindTools (loaded via tools.js)
    const allTools = window.technoMindTools || [];

    // Filter matches
    const matches = allTools.filter(t =>
        (t.title && t.title.toLowerCase().includes(term)) ||
        (t.title_en && t.title_en.toLowerCase().includes(term)) ||
        (t.category && t.category.toLowerCase().includes(term))
    ).slice(0, 5); // Limit to 5

    if (matches.length === 0) {
        suggestionBox.style.display = 'none';
        return;
    }

    // Render matches safely (no innerHTML with tool data)
    suggestionBox.innerHTML = '';
    matches.forEach(t => {
        const url = t.internal_url || ('pages/tool-viewer.html?id=' + encodeURIComponent(t.id));
        const item = document.createElement('div');
        item.className = 'search-suggestion-item';
        item.addEventListener('click', () => { window.location.href = url; });

        const iconEl = document.createElement('span');
        iconEl.className = 'search-suggestion-icon';
        iconEl.textContent = t.icon || '🚀';

        const textWrap = document.createElement('div');
        const titleEl = document.createElement('div');
        titleEl.style.cssText = 'font-weight:bold; color:var(--color-white)';
        titleEl.textContent = t.title;

        const catEl = document.createElement('div');
        catEl.style.cssText = 'font-size:12px; opacity:0.7';
        catEl.textContent = t.category;

        textWrap.append(titleEl, catEl);
        item.append(iconEl, textWrap);
        suggestionBox.appendChild(item);
    });

    suggestionBox.style.display = 'block';
};

// Close suggestions on click outside
document.addEventListener('click', (e) => {
    const suggestionBox = document.getElementById('heroSearchSuggestions');
    const input = document.getElementById('heroSearchInput');
    if (suggestionBox && input && !suggestionBox.contains(e.target) && !input.contains(e.target)) {
        suggestionBox.style.display = 'none';
    }
});
