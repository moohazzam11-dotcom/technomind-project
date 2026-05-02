// js/db.js
// Handles all client-side persistence for Reviews, Upvotes, and Favorites

const STORAGE_KEYS = {
    REVIEWS: 'tm_reviews',
    USER_VOTES: 'tm_user_votes',   // IDs of tools user reviewed/upvoted
    TOOL_STATS: 'tm_tool_stats',   // Global counters (simulated)
    FAVORITES: 'tm_favorites'
};

class TechnoMindDB {
    constructor() {
        this.init();
    }

    init() {
        try {
            // Initialize storage if missing
            if (!localStorage.getItem(STORAGE_KEYS.REVIEWS)) localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify({}));
            if (!localStorage.getItem(STORAGE_KEYS.USER_VOTES)) localStorage.setItem(STORAGE_KEYS.USER_VOTES, JSON.stringify([]));
            if (!localStorage.getItem(STORAGE_KEYS.FAVORITES)) localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([]));

            // Seed simulated global stats if empty
            if (!localStorage.getItem(STORAGE_KEYS.TOOL_STATS)) {
                const initialStats = {};
                for (let i = 1; i <= 20; i++) {
                    initialStats[i] = {
                        upvotes: Math.floor(Math.random() * 100) + 10,
                        reviews: Math.floor(Math.random() * 20) + 1,
                        rating: (Math.random() * 1.5 + 3.4).toFixed(1)
                    };
                }
                localStorage.setItem(STORAGE_KEYS.TOOL_STATS, JSON.stringify(initialStats));
            }
        } catch (e) {
            console.warn('TechnoMindDB: Storage initialization failed', e);
        }
    }

    _safeGet(key, defaultVal) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultVal;
        } catch (e) {
            console.error(`TechnoMindDB: Error parsing ${key}`, e);
            return defaultVal;
        }
    }

    _safeSet(key, val) {
        try {
            localStorage.setItem(key, JSON.stringify(val));
        } catch (e) {
            console.error(`TechnoMindDB: Error saving ${key}`, e);
        }
    }

    // --- FAVORITES ---
    getFavorites() {
        return this._safeGet(STORAGE_KEYS.FAVORITES, []);
    }

    isFavorite(toolId) {
        return this.getFavorites().includes(toolId);
    }

    toggleFavorite(toolId) {
        let favs = this.getFavorites();
        if (favs.includes(toolId)) {
            favs = favs.filter(id => id !== toolId);
        } else {
            favs.push(toolId);
        }
        this._safeSet(STORAGE_KEYS.FAVORITES, favs);

        // Dispatch event for UI updates
        try {
            window.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: { toolId, isFav: this.isFavorite(toolId) } }));
        } catch (e) { /* Ignore event errors */ }

        return this.isFavorite(toolId);
    }

    // --- COURSE PROGRESS ---
    saveProgress(courseId, lessonId) {
        const progress = this._safeGet('tm_course_progress', {});

        if (!progress[courseId]) {
            progress[courseId] = {
                startedAt: new Date().toISOString(),
                completedLessons: [],
                lastLessonId: lessonId
            };
        }

        progress[courseId].lastLessonId = lessonId;
        progress[courseId].lastAccessed = new Date().toISOString();

        // Add to completed if not already there
        if (!progress[courseId].completedLessons.includes(lessonId)) {
            progress[courseId].completedLessons.push(lessonId);
        }

        this._safeSet('tm_course_progress', progress);
    }

    getProgress(courseId) {
        const progress = this._safeGet('tm_course_progress', {});
        return progress[courseId] || null;
    }

    getAllProgress() {
        return this._safeGet('tm_course_progress', {});
    }

    // --- UPVOTES ---
    getToolStats(toolId) {
        const stats = this._safeGet(STORAGE_KEYS.TOOL_STATS, {});
        return stats[toolId] || { upvotes: 0, reviews: 0, rating: 0 };
    }

    hasUpvoted(toolId) {
        const votes = this._safeGet(STORAGE_KEYS.USER_VOTES, []);
        return votes.includes(`up_${toolId}`);
    }

    toggleUpvote(toolId) {
        const votes = this._safeGet(STORAGE_KEYS.USER_VOTES, []);
        const stats = this.getToolStats(toolId);
        const hasUp = votes.includes(`up_${toolId}`);

        if (hasUp) {
            // Remove upvote (optional, usually you can't un-vote on some sites, but let's allow it)
            const newVotes = votes.filter(v => v !== `up_${toolId}`);
            this._safeSet(STORAGE_KEYS.USER_VOTES, newVotes);
            stats.upvotes--;
        } else {
            votes.push(`up_${toolId}`);
            this._safeSet(STORAGE_KEYS.USER_VOTES, votes);
            stats.upvotes++;
        }

        this._updateToolStats(toolId, stats);
        return { hasUpvoted: !hasUp, stats: stats };
    }

    _updateToolStats(toolId, newStats) {
        const stats = this._safeGet(STORAGE_KEYS.TOOL_STATS, {});
        stats[toolId] = newStats;
        this._safeSet(STORAGE_KEYS.TOOL_STATS, stats);
    }

    // --- REVIEWS ---
    getReviews(toolId) {
        const reviews = this._safeGet(STORAGE_KEYS.REVIEWS, {});
        return reviews[toolId] || [];
    }

    addReview(toolId, reviewData) { // { user, rating, comment, date }
        const allReviews = this._safeGet(STORAGE_KEYS.REVIEWS, {});

        if (!allReviews[toolId]) allReviews[toolId] = [];

        const newReview = {
            ...reviewData,
            id: Date.now(),
            date: new Date().toISOString()
        };

        allReviews[toolId].unshift(newReview); // Add to beginning
        this._safeSet(STORAGE_KEYS.REVIEWS, allReviews);

        // Update average rating
        this._recalcAvgRating(toolId, allReviews[toolId]);

        return newReview;
    }

    _recalcAvgRating(toolId, reviews) {
        if (!reviews.length) return;
        const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
        const avg = parseFloat((sum / reviews.length).toFixed(1));

        const stats = this.getToolStats(toolId);
        stats.rating = avg;
        stats.reviews = reviews.length;

        this._updateToolStats(toolId, stats);
    }
}

// Global instance
try {
    window.db = new TechnoMindDB();
} catch (e) {
    console.error("Failed to initialize TechnoMindDB", e);
}
