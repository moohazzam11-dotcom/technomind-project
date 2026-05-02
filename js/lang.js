/**
 * TechnoMind Language Switcher Logic
 * Handles toggling between Arabic (RTL) and English (LTR).
 */

const translations = {
    ar: {
        docTitle: "TechnoMind عربي - دليلك الذكي لعالم التقنية والذكاء الاصطناعي",
        langBtn: "EN"
    },
    en: {
        docTitle: "TechnoMind - Your Smart Guide to AI & Tech",
        langBtn: "عربي"
    }
};

// Initialize Language on Page Load
function initLanguage() {
    const savedLang = localStorage.getItem('technomind_lang') || 'ar'; // Default to Arabic
    applyLanguage(savedLang);
}

// Toggle Language
function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('lang') || 'ar';
    const newLang = currentLang === 'ar' ? 'en' : 'ar';

    // Save preference
    localStorage.setItem('technomind_lang', newLang);

    // Apply changes
    applyLanguage(newLang);

    // Dispatch Global Event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: newLang } }));
}

// Apply Language Settings
function applyLanguage(lang) {
    const isEn = lang === 'en';

    // 1. Update HTML attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isEn ? 'ltr' : 'rtl');

    // 2. Update Document Title
    document.title = translations[lang].docTitle;

    // 3. Update Language Button
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.innerHTML = `🌐 <span style="font-size: 14px; margin-${isEn ? 'left' : 'right'}: 4px;">${translations[lang].langBtn}</span>`;
    }

    // 4. Update Text Content based on data attributes
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach(el => {
        // Save original Arabic text if not already saved
        if (!el.getAttribute('data-ar')) {
            // For menu items with icons, we need to target the text span inside if possible, 
            // or perform a smart replace. 
            // In index.html, we wrapped text in <span class="text"> for menu items, 
            // but let's check if the element has children first.

            // Simpler approach: Store the *full* innerHTML or textContent? 
            // TextContent is safer for pure text replacement.
            // If the element contains icons (SVG), replacing textContent wipes the icon.
            // So we should target elements that are PURE text or find the text node.

            // Strategy: 
            // If the element has a child with class 'text' (like our menu items), target that.
            // Else, treat the element itself as the text container.

            const textSpan = el.querySelector('.text');
            if (textSpan) {
                textSpan.setAttribute('data-ar', textSpan.innerText);
                el.setAttribute('data-has-span', 'true');
            } else {
                // Check if it has SVG children (icons) but no text span wrapper
                if (el.querySelector('svg')) {
                    // Complex case: mixed content without wrapper. 
                    // We should refrain from modifying these unless wrapped.
                    // In our index.html update, we added <span class="text"> to menu items.
                    // Nav links are pure text. Hero text is pure text.
                    // So we are good.
                } else {
                    el.setAttribute('data-ar', el.innerText);
                }
            }
        }

        const textSpan = el.querySelector('.text');
        const arText = textSpan ? textSpan.getAttribute('data-ar') : el.getAttribute('data-ar');
        const enText = el.getAttribute('data-en');

        if (textSpan) {
            textSpan.innerText = isEn ? enText : arText;
        } else if (!el.querySelector('svg') && enText) {
            // Check if we need to render HTML (for gradients in titles)
            const content = isEn ? enText : arText;
            if (el.classList.contains('hero-title') || (content && content.includes('<'))) {
                el.innerHTML = content;
            } else {
                el.innerText = content;
            }
        }
    });

    // 5. Update Placeholders
    const placeholders = document.querySelectorAll('[data-en-placeholder]');
    placeholders.forEach(el => {
        if (!el.getAttribute('data-ar-placeholder')) {
            el.setAttribute('data-ar-placeholder', el.getAttribute('placeholder'));
        }
        const arPlaceholder = el.getAttribute('data-ar-placeholder');
        const enPlaceholder = el.getAttribute('data-en-placeholder');
        el.setAttribute('placeholder', isEn ? enPlaceholder : arPlaceholder);
    });

    // 6. Flip alignments/margins if necessary (Dynamic CSS overrides)
    // Most should be handled by 'dir=ltr' automatically via CSS, but custom margins might need help.
    // CSS variable approach is best, but for now we rely on browser's RTL flipping.
}

// Run on load
document.addEventListener('DOMContentLoaded', initLanguage);
