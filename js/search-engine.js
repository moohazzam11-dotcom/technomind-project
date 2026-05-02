/**
 * TechnoMind Unified Search Engine
 * Aggregates results from Tools, Courses, and Articles.
 */

window.TechnoMindSearch = {
    performGlobalSearch: function (query) {
        if (!query) return { tools: [], courses: [], articles: [] };

        const q = query.toLowerCase().trim();

        // 1. Search Tools
        const tools = (window.technoMindTools || []).filter(item => {
            const title = (item.title || '').toLowerCase();
            const titleEn = (item.title_en || '').toLowerCase();
            const summary = (item.summary || '').toLowerCase();
            const summaryEn = (item.summary_en || '').toLowerCase();
            const category = (item.category || '').toLowerCase();
            const categoryEn = (item.category_en || '').toLowerCase();

            return title.includes(q) || titleEn.includes(q) ||
                summary.includes(q) || summaryEn.includes(q) ||
                category.includes(q) || categoryEn.includes(q);
        });

        // 2. Search Courses
        const courses = (window.technoMindCourses || []).filter(item => {
            const title = (item.title || '').toLowerCase();
            const desc = (item.description || '').toLowerCase();
            // Search module titles if available? Let's keep it simple for now.

            return title.includes(q) || desc.includes(q);
        });

        // 3. Search Articles
        const articles = (window.technoMindArticles || []).filter(item => {
            const title = (item.title || '').toLowerCase();
            const summary = (item.summary || '').toLowerCase();
            const category = (item.category || '').toLowerCase();

            return title.includes(q) || summary.includes(q) || category.includes(q);
        });

        return {
            tools: tools,
            courses: courses,
            articles: articles
        };
    }
};
