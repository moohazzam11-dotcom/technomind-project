const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../js/data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'articles.js');

// Ensure directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const categories = [
    { name: 'AI Writing', icon: '✍️' },
    { name: 'Image Generation', icon: '🎨' },
    { name: 'Video Editing', icon: '🎥' },
    { name: 'Coding Assistants', icon: '💻' },
    { name: 'Productivity', icon: '🚀' },
    { name: 'Marketing', icon: '📈' },
    { name: 'Audio & Speech', icon: '🎙️' },
    { name: 'Data Analysis', icon: '📊' }
];

const adjectives = ['Super', 'Ultra', 'Smart', 'Auto', 'Hyper', 'Mega', 'Quick', 'Pro', 'Master', 'Genius'];
const nouns = ['Writer', 'Creator', 'Bot', 'Assistant', 'Gen', 'Mind', 'Brain', 'Flow', 'Spark', 'Lens'];

const realTools = [
    {
        id: 1,
        title: "Midjourney 6.0",
        category: "Image Generation",
        icon: "🎨",
        summary: "The undisputed king of AI image generation, offering photorealistic detail and artistic control.",
        content: `
            <img src="https://picsum.photos/seed/midjourney/800/400" alt="Midjourney" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
            <p><strong>Midjourney</strong> is widely considered the <strong>best tool for generating images</strong> available today. Version 6.0 has set a new standard for photorealism, text rendering, and prompt adherence.</p>
            <h3>Why it's the Best</h3>
            <p>Unlike other generators, Midjourney has a distinctive artistic flair. It doesn't just create images; it creates art. Its ability to handle complex lighting, textures, and even text within images makes it superior to DALL-E 3 and Stable Diffusion for high-end creative work.</p>
            <h3>Key Features</h3>
            <ul>
                <li><strong>Photorealism:</strong> Indistinguishable from real clarity.</li>
                <li><strong>Style Control:</strong> Mimic specific artists, eras, or camera lenses.</li>
                <li><strong>In-painting:</strong> Edit specific parts of an image after generation.</li>
            </ul>
            <h3>Pricing</h3>
            <p>Starts at $10/month. No free tier currently available.</p>
        `
    },
    {
        id: 2,
        title: "ChatGPT (GPT-4)",
        category: "AI Writing", // Can also serve as coding
        icon: "🤖",
        summary: "The most versatile AI assistant, excellent for coding, writing, and analysis.",
        content: `
            <img src="https://picsum.photos/seed/chatgpt/800/400" alt="ChatGPT" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
            <p><strong>ChatGPT</strong> running on GPT-4 is the <strong>best tool for creating websites</strong> (via coding assistance) and general text generation. It understands complex instructions and can generate entire codebases.</p>
            <h3>Best for Web Development</h3>
            <p>If you want to build a website, ChatGPT acts as your senior developer. You can paste requirements, and it will output HTML, CSS, and JavaScript. Combined with tools like 'Cursor', it streamlines the development process by 90%.</p>
            <h3>Pros & Cons</h3>
            <ul>
                <li>✅ Unmatched reasoning capability</li>
                <li>✅ Huge plugin ecosystem</li>
                <li>❌ Can be verbose or confidentially wrong</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "ElevenLabs",
        category: "Audio & Speech",
        icon: "🎙️",
        summary: "The most realistic AI voice generator with emotional range and cloning capabilities.",
        content: `
            <img src="https://picsum.photos/seed/elevenlabs/800/400" alt="ElevenLabs" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
            <p><strong>ElevenLabs</strong> is hands down the <strong>best tool for speech generation</strong>. Its ability to clone voices with just a few minutes of audio is unmatched in the industry.</p>
            <h3>Why it Leads the Field</h3>
            <p>Most TTS (Text-to-Speech) engines sound robotic. ElevenLabs captures breath, intonation, and emotion, making it perfect for audiobooks, game characters, and YouTube narration.</p>
            <h3>Features</h3>
            <ul>
                <li><strong>Voice Cloning:</strong> Create a digital twin of your own voice.</li>
                <li><strong>Dubbing Studio:</strong> Translate videos while preserving the original voice.</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Gemini Advanced",
        category: "AI Writing",
        icon: "✨",
        external_url: "https://gemini.google.com",
        summary: "Google's most capable AI model, integrated deep into the workspace ecosystem.",
        content: `
            <img src="https://picsum.photos/seed/gemini/800/400" alt="Gemini" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
            <p><strong>Gemini</strong> is Google's answer to GPT-4, offering seamless integration with Docs, Gmail, and Drive. It excels at processing large amounts of information and multimodal reasoning.</p>
            <h3>Key Advantages</h3>
            <ul>
                <li><strong>Native Integration:</strong> works directly inside your Google Apps.</li>
                <li><strong>Multimodal:</strong> Understands video, audio, and images natively (not just text).</li>
                <li><strong>Speed:</strong> Generally faster response times for search-related queries.</li>
            </ul>
        `
    }
];

// Add external URLs to existing tools
realTools[0].external_url = "https://www.midjourney.com"; // Midjourney
realTools[1].external_url = "https://chat.openai.com"; // ChatGPT
realTools[2].external_url = "https://elevenlabs.io"; // ElevenLabs

function generateArticles(count) {
    const articles = [];

    // Add Real Tools First
    articles.push(...realTools.map(t => ({ ...t, date: '2026-01-20' })));

    // Generate remaining Generic content
    for (let i = realTools.length + 1; i <= count; i++) {
        const cat = categories[Math.floor(Math.random() * categories.length)];
        const title = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]} ${Math.floor(Math.random() * 1000)}`;

        articles.push({
            id: i,
            title: title + (Math.random() > 0.8 ? ' Pro' : ''),
            category: cat.name,
            icon: cat.icon,
            date: '2026-01-20',
            summary: `A professional ${cat.name} tool designed to optimize your workflow with AI-driven features.`,
            content: `
                <img src="https://picsum.photos/seed/${i}/800/400" alt="${title}" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
                <p><strong>${title}</strong> is a comprehensive solution for professionals in the <strong>${cat.name}</strong> space. It leverages advanced machine learning to automate repetitive tasks.</p>
                
                <h3>Detailed Overview</h3>
                <p>In the crowded market of AI tools, ${title} distinguishes itself with a focus on usability and speed. It integrates seamlessly into existing workflows, allowing users to generate high-quality outputs without a steep learning curve.</p>
                
                <h3>Key Features</h3>
                <ul>
                    <li><strong>Smart Automation:</strong> Reduces manual work by up to 40%.</li>
                    <li><strong>Cloud Sync:</strong> Access your projects from any device.</li>
                    <li><strong>AI Suggestions:</strong> Real-time recommendations to improve quality.</li>
                </ul>

                <h3>Pros & Cons</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div style="background: #f0fdf4; padding: 15px; border-radius: 8px;">
                        <h4 style="color: #166534; margin-top:0;">✅ Pros</h4>
                        <ul style="margin: 0; padding-left: 20px;">
                            <li>Intuitive Interface</li>
                            <li>Fast processing</li>
                            <li>Affordable entry tier</li>
                        </ul>
                    </div>
                    <div style="background: #fef2f2; padding: 15px; border-radius: 8px;">
                        <h4 style="color: #991b1b; margin-top:0;">❌ Cons</h4>
                        <ul style="margin: 0; padding-left: 20px;">
                            <li>Mobile app is limited</li>
                            <li>Advanced features require Pro plan</li>
                        </ul>
                    </div>
                </div>

                <h3>Pricing Model</h3>
                <p><strong>Free:</strong> Basic features.<br><strong>Pro ($19/mo):</strong> Unlimited generations and priority support.</p>
            `
        });
    }
    return articles;
}

const data = generateArticles(1000);
const fileContent = `window.technoMindTools = ${JSON.stringify(data, null, 2)};`;
fs.writeFileSync(OUTPUT_FILE, fileContent);

console.log(`Successfully generated ${data.length} articles in ${OUTPUT_FILE}`);
