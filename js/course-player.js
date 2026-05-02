document.addEventListener('DOMContentLoaded', () => {
    // 1. Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    let currentLessonId = urlParams.get('lesson');

    // Language helper — defaults to Arabic
    const lang = localStorage.getItem('technomind_lang') || 'ar';
    const isEn = lang === 'en';
    const t = (obj, field) => isEn ? (obj[field + '_en'] || obj[field]) : obj[field];

    // 2. Find the course
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        document.body.innerHTML = `<div class="container" style="padding-top:100px; text-align:center;">
            <h1>${isEn ? 'Course not found' : 'الدورة غير موجودة'}</h1>
            <a href="courses.html" class="btn btn-primary">${isEn ? 'Back to Courses' : 'العودة للدورات'}</a>
        </div>`;
        return;
    }

    // 3. Set Header Info
    document.title = `${t(course, 'title')} - TechnoMind`;
    document.getElementById('courseHeaderTitle').textContent = t(course, 'title');

    // 4. Flatten lessons for easier navigation (Next/Prev)
    const allLessons = [];
    course.modules.forEach(module => {
        module.lessons.forEach(lesson => {
            allLessons.push(lesson);
        });
    });

    // Default to first lesson if none specified
    if (!currentLessonId && allLessons.length > 0) {
        currentLessonId = allLessons[0].id;
    }

    // 5. Render Sidebar
    const sidebar = document.getElementById('courseSidebar');
    let sidebarHTML = '';

    course.modules.forEach(module => {
        sidebarHTML += `<div class="module-title">${t(module, 'title')}</div>`;
        module.lessons.forEach(lesson => {
            const isActive = lesson.id === currentLessonId ? 'active' : '';
            sidebarHTML += `
                <a href="?id=${courseId}&lesson=${lesson.id}" class="lesson-item ${isActive}" data-id="${lesson.id}">
                    <span style="font-size:12px; margin-left:8px;">▶</span> ${t(lesson, 'title')}
                    <span style="margin-right:auto; font-size:11px; opacity:0.7;">${lesson.duration}</span>
                </a>
            `;
        });
    });

    sidebar.innerHTML = sidebarHTML;

    // 6. Load Current Lesson
    const currentLesson = allLessons.find(l => l.id === currentLessonId);
    if (currentLesson) {
        loadLesson(currentLesson);
    }

    // 7. Handle Navigation Buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) prevBtn.textContent = isEn ? '← Previous' : '→ السابق';
    if (nextBtn) nextBtn.textContent = isEn ? 'Next →' : 'التالي ←';

    const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);

    if (currentIndex > 0) {
        prevBtn.disabled = false;
        prevBtn.onclick = () => {
            window.location.href = `?id=${courseId}&lesson=${allLessons[currentIndex - 1].id}`;
        };
    }

    if (currentIndex < allLessons.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => {
            window.location.href = `?id=${courseId}&lesson=${allLessons[currentIndex + 1].id}`;
        };
    }

    function loadLesson(lesson) {
        document.getElementById('lessonTitle').textContent = t(lesson, 'title');
        document.getElementById('lessonDesc').textContent = t(lesson, 'description') || '';

        // Handle YouTube Embeds
        const player = document.getElementById('videoPlayer');
        player.src = `https://www.youtube.com/embed/${lesson.videoId}?rel=0`;

        // Save Progress
        if (window.db) {
            window.db.saveProgress(courseId, lesson.id);
        }

        // Scroll sidebar to active element
        setTimeout(() => {
            const activeEl = document.querySelector('.lesson-item.active');
            if (activeEl) activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
});
