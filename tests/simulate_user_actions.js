
const fs = require('fs');
const path = require('path');

// MOCK BROWSER ENV
const localStorageMock = (function () {
    let store = {};
    return {
        getItem: function (key) { return store[key] || null; },
        setItem: function (key, value) { store[key] = value.toString(); },
        clear: function () { store = {}; },
        removeItem: function (key) { delete store[key]; }
    };
})();

global.window = {
    dispatchEvent: (event) => console.log(`[Event] ${event.type} dispatched`)
};
global.localStorage = localStorageMock;
global.CustomEvent = class CustomEvent { constructor(type, detail) { this.type = type; this.detail = detail; } };
global.console = {
    ...console,
    warn: (msg) => console.log(`[WARN] ${msg}`),
    error: (msg) => console.log(`[ERROR] ${msg}`)
};

// LOAD DB.JS
const dbScript = fs.readFileSync(path.join(__dirname, '../js/db.js'), 'utf8');
eval(dbScript); // Executes and sets window.db

// TEST SCENARIO: User watches a lesson
console.log('--- TEST: Course Progress ---');
const courseId = 'course-1';
const lessonId = 'lesson-1-2';

console.log(`1. Saving progress for ${courseId}, lesson ${lessonId}`);
window.db.saveProgress(courseId, lessonId);

const progress = window.db.getProgress(courseId);
console.log('2. Retrieved Progress:', progress);

if (progress && progress.lastLessonId === lessonId && progress.completedLessons.includes(lessonId)) {
    console.log('✅ PASS: Progress saved correctly.');
} else {
    console.error('❌ FAIL: Progress mismatch.');
}

// TEST SCENARIO: User completes another lesson in same course
console.log('\n--- TEST: Second Lesson ---');
const lessonId2 = 'lesson-1-3';
window.db.saveProgress(courseId, lessonId2);
const progress2 = window.db.getProgress(courseId);
console.log('Retrieved Progress 2:', progress2);

if (progress2.completedLessons.length === 2 && progress2.lastLessonId === lessonId2) {
    console.log('✅ PASS: Second lesson added correctly.');
} else {
    console.error('❌ FAIL: Second lesson logic failed.');
}

// TEST SCENARIO: Favorites
console.log('\n--- TEST: Favorites ---');
window.db.toggleFavorite('tool-xyz');
if (window.db.isFavorite('tool-xyz')) {
    console.log('✅ PASS: Favorite added.');
} else {
    console.error('❌ FAIL: Favorite not added.');
}
