
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typewriter-text');
    if (!textElement) return;

    const phrases = [
        { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence" },
        { ar: "المستقبل", en: "The Future" },
        { ar: "الإنتاجية", en: "Productivity" },
        { ar: "البرمجة", en: "Programming" }
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;

    function type() {
        const currentPhraseObj = phrases[phraseIndex];
        const isEn = document.documentElement.getAttribute('lang') === 'en';
        const currentText = isEn ? currentPhraseObj.en : currentPhraseObj.ar;

        if (isWaiting) {
            setTimeout(() => {
                isWaiting = false;
                type();
            }, 2000); // Wait before deleting
            return;
        }

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            isWaiting = true; // Wait at full text
            typeSpeed = 0; // Handled by isWaiting timeout
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        if (!isWaiting) {
            setTimeout(type, typeSpeed);
        }
    }

    // Listen for language changes to reset or adjust immediately if needed
    // For simplicity, it will pick up the new language on the next full cycle or character update.

    type();
});
