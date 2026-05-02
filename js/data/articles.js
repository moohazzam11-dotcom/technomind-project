const articles = [
    {
        "id": 1,
        "title": "Midjourney 6.0",
        "title_en": "Midjourney 6.0",
        "category": "توليد الصور",
        "category_en": "Image Generation",
        "icon": "🎨",
        "summary": "ملك توليد الصور بالذكاء الاصطناعي. بلا منازع، الأداة الأقوى لتوليد صور واقعية وفنية بدقة مذهلة.",
        "summary_en": "The undisputed king of AI image generation. Create photorealistic images and art with stunning precision.",
        "content": `
        <a href="https://www.youtube.com/watch?v=5PLXPm-nXCY" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/5PLXPm-nXCY/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        
        <p><strong>Midjourney</strong> هو أداة ذكاء اصطناعي متخصصة في تحويل النصوص إلى لوحات فنية مذهلة. يعتبر حالياً الأفضل عالمياً في فهم الإضاءة، التركيب، والتفاصيل الدقيقة.</p>
        
        <h3>فيديو الشرح (Tutorial)</h3>
        <p>شاهد الفيديو أعلاه لتعرف كيفية البدء في استخدام Midjourney من الصفر، وشرح كيفية كتابة الـ Prompts للحصول على أفضل النتائج.</p>

        <h3>كيف يعمل؟ (شرح الصورة)</h3>
        <img src="../images/midjourney_demo.png" alt="Midjourney Demo" style="width: 100%; border-radius: 12px; margin: 16px 0;">
        <p>كما يظهر في الصورة التوضيحية، واجهة Midjourney (عادة عبر Discord) تعتمد على كتابة "وصف" (Prompt) دقيق.</p>
        <ol>
            <li><strong>اكتب الوصف:</strong> ابدأ بكتابة <code>/imagine</code> ثم صف ما تريد. مثلاً: "مدينة مستقبلية من الكريستال".</li>
            <li><strong>توليد الصورة:</strong> يقوم الذكاء الاصطناعي برسم الصورة بكسل تلو الآخر.</li>
            <li><strong>النتيجة:</strong> تظهر لك 4 خيارات (Grid) لتختار منها أو تقوم بتطويرها (Upscale).</li>
        </ol>

        <h3>مميزات الإصدار 6.0</h3>
        <ul>
            <li><strong>محاكاة الواقع:</strong> صور لا يمكن تمييزها عن الصور الفوتوغرافية الحقيقية.</li>
            <li><strong>كتابة النصوص:</strong> لأول مرة، يمكنك طلب كتابة نصوص داخل الصورة (مثل لافتات المحلات).</li>
            <li><strong>فهم دقيق:</strong> يستوعب الأوصاف الطويلة والمعقدة دون تجاهل التفاصيل.</li>
        </ul>
    `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=5PLXPm-nXCY" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/5PLXPm-nXCY/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>

        <p><strong>Midjourney</strong> is an AI tool specialized in transforming text into stunning artistic masterpieces. It is currently considered the world's best at understanding lighting, composition, and fine details.</p>
        
        <h3>Video Tutorial</h3>
        <p>Watch the video above to learn how to start using Midjourney from scratch, and how to write Prompts for the best results.</p>
        
        <h3>How it Works (Image Explanation)</h3>
        <img src="../images/midjourney_demo.png" alt="Midjourney Demo" style="width: 100%; border-radius: 12px; margin: 16px 0;">
        <p>As shown in the demo image, the interface (usually via Discord) relies on writing a precise "Prompt".</p>
        <ol>
            <li><strong>Type the Prompt:</strong> Start with <code>/imagine</code> then describe what you want. E.g., "A futuristic city made of crystal".</li>
            <li><strong>Generate:</strong> The AI paints the image pixel by pixel based on your words.</li>
            <li><strong>Result:</strong> You get 4 high-quality variations to choose from or upscale.</li>
        </ol>

        <h3>Version 6.0 Features</h3>
        <ul>
            <li><strong>Photorealism:</strong> Images indistinguishable from real photography.</li>
            <li><strong>Text Rendering:</strong> For the first time, you can ask for legible text inside the image (e.g., shop signs).</li>
            <li><strong>Precise Understanding:</strong> Handles long, complex prompts without ignoring details.</li>
        </ul>
    `,
        "external_url": "https://www.midjourney.com",
        "date": "2026-01-20",
        "tool_type": "prompt"
    },
    {
        "id": 2,
        "title": "ChatGPT (GPT-4)",
        "title_en": "ChatGPT (GPT-4)",
        "category": "الكتابة والبرمجة",
        "category_en": "Writing & Coding",
        "icon": "🤖",
        "summary": "المساعد الذكي الأكثر تنوعاً، ممتاز في البرمجة، الكتابة، والتحليل المعقد.",
        "summary_en": "The most versatile AI assistant, excellent for coding, writing, and complex analysis.",
        "content": `
        <a href="https://www.youtube.com/watch?v=6iOdpzn0L8Q" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/6iOdpzn0L8Q/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>

        <p><strong>ChatGPT</strong> هو مساعدك الشخصي الذكي، قادر على القيام بمهام معقدة مثل البرمجة، الكتابة، والتحليل. يعتمد على نموذج GPT-4 الأحدث لفهم السياق العميق.</p>
        
        <h3>فيديو الشرح (Tutorial)</h3>
        <p>الفيديو بالأعلى يشرح الميزات الجديدة في GPT-4 وكيفية استخدامه لزيادة إنتاجيتك اليومية.</p>

        <h3>طريقة الاستخدام (كما في الصورة)</h3>
        <img src="../images/chatgpt_demo.png" alt="ChatGPT Demo" style="width: 100%; border-radius: 12px; margin: 16px 0;">
        <p>واجهة البرنامج تشبه تماماً تطبيقات المحادثة (مثل واتساب):</p>
        <ul>
            <li><strong>أنت تطلب:</strong> تكتب طلباً مثل "اكتب كود بايثون للعبة ثعبان" (Write a Snake game in Python).</li>
            <li><strong>هو يجيب:</strong> في ثوانٍ، يقوم ChatGPT بكتابة الكود كاملاً، مع تلوين النصوص البرمجية (Syntax Highlighting) كما يظهر في المثال.</li>
        </ul>
        <h3>استخدامات متقدمة</h3>
        <ul>
            <li><strong>تحليل البيانات:</strong> ارفع ملف Excel واطلب منه رسم بياني للنتائج.</li>
            <li><strong>الدراسة:</strong> "اشرح لي نظرية النسبية كأنني في الخامسة من عمري".</li>
            <li><strong>تعلم اللغات:</strong> مارس المحادثة باللغة الفرنسية أو الإسبانية معه مباشرة.</li>
        </ul>
    `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=yR27J-QUx2o" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/yR27J-QUx2o/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>

        <p><strong>ChatGPT</strong> is your smart personal assistant, capable of complex tasks like coding, writing, and analysis. It is powered by the latest GPT-4 model to understand deep context.</p>
        
        <h3>Video Tutorial</h3>
        <p>The video above explains the new features in GPT-4 and how to use it to boost your daily productivity.</p>
        
        <h3>How to Use (As shown)</h3>
        <img src="../images/chatgpt_demo.png" alt="ChatGPT Demo" style="width: 100%; border-radius: 12px; margin: 16px 0;">
        <p>The interface looks exactly like a chat app (like WhatsApp):</p>
        <ul>
            <li><strong>You Ask:</strong> Type a request like "Write a Snake game in Python".</li>
            <li><strong>It Answers:</strong> In seconds, ChatGPT writes the full code, with Syntax Highlighting for readability, as shown in the example.</li>
        </ul>
        <h3>Advanced Uses</h3>
        <ul>
            <li><strong>Data Analysis:</strong> Upload an Excel file and ask it to graph the results.</li>
            <li><strong>Study:</strong> "Explain the theory of relativity to me like I'm five."</li>
            <li><strong>Language Learning:</strong> Practice conversation in French or Spanish directly with it.</li>
        </ul>
    `,
        "external_url": "https://chat.openai.com",
        "date": "2026-01-20",
        "tool_type": "chat"
    },
    {
        "id": 3,
        "title": "ElevenLabs",
        "title_en": "ElevenLabs",
        "category": "الصوت والكلام",
        "category_en": "Voice & Speech",
        "icon": "🎙️",
        "summary": "أفضل نظام لتوليد ومحاكاة الأصوات بواقعية ومشاعر لا تصدق.",
        "summary_en": "The best system for generating and cloning voices with incredible realism and emotion.",
        "content": `
        <a href="https://www.youtube.com/watch?v=ouaWZgEBt_s" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/ouaWZgEBt_s/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>ElevenLabs</strong> هو أقوى نظام لتوليد الأصوات البشرية. يمكنك كتابة أي نص، وسيقرأه بصوت واقعي مليء بالمشاعر.</p>
        <h3>فيديو الشرح (Tutorial)</h3>
        <p>تعلم كيفية استنساخ صوتك أو إنشاء أصوات جديدة تماماً في الفيديو أعلاه.</p>
        <h3>كيف يعمل؟</h3>
        <p>الواجهة بسيطة للغاية:</p>
        <ul>
            <li><strong>Voice Lab:</strong> صمم صوتك الخاص أو اختر من المكتبة.</li>
            <li><strong>Text to Speech:</strong> اكتب النص واحصل على ملف صوتي جاهز للتحميل.</li>
        </ul>
    `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=ouaWZgEBt_s" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/ouaWZgEBt_s/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>ElevenLabs</strong> is the most powerful human voice generation system. Type any text, and it will read it with realistic, emotional voice.</p>
        <h3>Video Tutorial</h3>
        <p>Learn how to clone your voice or create entirely new ones in the video above.</p>
        <h3>How it Works?</h3>
        <p>The interface is extremely simple:</p>
        <ul>
            <li><strong>Voice Lab:</strong> Design your own voice or pick from the library.</li>
            <li><strong>Text to Speech:</strong> Type text and get a downloadable audio file instantly.</li>
        </ul>
    `,
        "external_url": "https://elevenlabs.io",
        "date": "2026-01-20",
        "tool_type": "chat"
    },
    {
        "id": 4,
        "title": "Gemini Advanced",
        "title_en": "Gemini Advanced",
        "category": "الكتابة والبحث",
        "category_en": "Writing & Research",
        "icon": "✨",
        "external_url": "https://gemini.google.com",
        "summary": "نموذج جوجل الأقوى، مدمج بعمق في بيئة عمل جوجل (Docs, Drive).",
        "summary_en": "Google's most powerful model, deeply integrated into the Google Workspace ecosystem.",
        "content": `
        <a href="https://www.youtube.com/watch?v=ZopPeoCEqnw" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/ZopPeoCEqnw/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Gemini</strong> هو نموذج جوجل المتطور، المدمج تماماً مع أدواتك اليومية (Docs, Gmail).</p>
        <h3>لماذا تستخدمه؟</h3>
        <p>لأنه يستطيع "قراءة" ملفاتك في Google Drive وتلخيصها، أو كتابة مسودة رسالة بريد إلكتروني مباشرة داخل Gmail.</p>
        <ul>
            <li><strong>تحليل المستندات:</strong> ارفع ملف PDF واطرح أسئلة حوله.</li>
            <li><strong>البرمجة:</strong> قدرات عالية في كتابة وتصحيح الكود.</li>
        </ul>
    `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=sr5FEbE7o_A" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/sr5FEbE7o_A/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Gemini</strong> is Google's advanced model, fully integrated with your daily tools (Docs, Gmail).</p>
        <h3>Why use it?</h3>
        <p>Because it can "read" your Google Drive files and summarize them, or draft emails directly inside Gmail.</p>
        <ul>
            <li><strong>Document Analysis:</strong> Upload a PDF and ask questions about it.</li>
            <li><strong>Coding:</strong> High capabilities in writing and debugging code.</li>
        </ul>
    `,
        "external_url": "https://gemini.google.com",
        "date": "2026-01-20",
        "tool_type": "chat"
    },
    {
        "id": 5,
        "title": "Claude 3.5 Sonnet",
        "title_en": "Claude 3.5 Sonnet",
        "category": "الكتابة والبرمجة",
        "category_en": "Writing & Coding",
        "icon": "🧠",
        "summary": "المنافس الأقوى لـ ChatGPT. يمتاز بأسلوب كتابة طبيعي وقدرات برمجية استثنائية.",
        "summary_en": "The strongest competitor to ChatGPT. Known for natural writing style and exceptional coding capabilities.",
        "content": `
            <a href="https://www.youtube.com/watch?v=SRbMNpdfoRo" target="_blank" class="video-link-card">
                <img src="https://img.youtube.com/vi/SRbMNpdfoRo/hqdefault.jpg" alt="Video Tutorial">
                <div class="video-play-button"></div>
            </a>
            <p><strong>Claude 3.5 Sonnet</strong> من شركة Anthropic هو النموذج المفضل للمبرمجين بفضل نافذة السياق الضخمة (Context Window).</p>
            <h3>المميزات الرئيسية</h3>
            <ul>
                <li><strong>Artifacts:</strong> ميزة حصرية تعرض الكود والتطبيقات التفاعلية في نافذة جانبية فوراً.</li>
                <li><strong>الذكاء البصري:</strong> قدرة فائقة على تحليل الصور والمخططات البيانية.</li>
            </ul>
        `,
        "content_en": `
            <a href="https://www.youtube.com/watch?v=n8r1nF5UUFo" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/n8r1nF5UUFo/maxresdefault.jpg" alt="Video Tutorial">
                <div class="video-play-button"></div>
            </a>
            <p><strong>Claude 3.5 Sonnet</strong> by Anthropic is a developer favorite due to its massive Context Window.</p>
            <h3>Key Features</h3>
            <ul>
                <li><strong>Artifacts:</strong> Exclusive feature that renders code and interactive apps in a side panel instantly.</li>
                <li><strong>Visual Intelligence:</strong> Superior ability to analyze images and charts.</li>
            </ul>
        `,
        "external_url": "https://claude.ai",
        "date": "2026-01-21",
        "tool_type": "chat"
    },
    {
        "id": 6,
        "title": "Runway Gen-2",
        "title_en": "Runway Gen-2",
        "category": "تحرير الفيديو",
        "category_en": "Video Editing",
        "icon": "🎥",
        "summary": "منصة المبدعين الأولى لتحويل النصوص إلى فيديو سينمائي مذهل.",
        "summary_en": "The premier creator platform for turning text into stunning cinematic video.",
        "content": `
        <a href="https://www.youtube.com/watch?v=KMZDGiGNx5E" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/KMZDGiGNx5E/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Runway</strong> هي استوديو سينمائي كامل في متصفحك. تخيل مشهد فيديو، اكتبه، وشاهده يتحقق.</p>
        <h3>أدوات المخرج</h3>
        <p>لا تكتفِ بالكتابة فقط، استخدم "فرشاة الحركة" (Motion Brush) لتحريك أجزاء معينة من الصورة (مثل تدفق شلال أو حركة سحاب).</p>
    `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=PlZkWcnnRt4" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/PlZkWcnnRt4/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Runway</strong> is a full movie studio in your browser. Imagine a scene, write it, and watch it come to life.</p>
        <h3>Director Tools</h3>
        <p>Don't just type; use the "Motion Brush" to animate specific parts of the image (like a flowing waterfall or moving clouds).</p>
    `,
        "external_url": "https://runwayml.com",
        "date": "2026-01-21",
        "tool_type": "prompt"
    },
    {
        "id": 7,
        "title": "Notion AI",
        "title_en": "Notion AI",
        "category": "الإنتاجية",
        "category_en": "Productivity",
        "icon": "⚡",
        "summary": "مساحة العمل المفضلة للجميع، الآن مدعومة بذكاء اصطناعي لتلخيص الاجتماعات وتنظيم المشاريع.",
        "summary_en": "Everyone's favorite workspace, now powered by AI to summarize meetings and organize projects.",
        "content": `
        <a href="https://www.youtube.com/watch?v=BdIvd8FAlMU" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/BdIvd8FAlMU/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Notion AI</strong> يحول ملاحظاتك الفوضوية إلى خطط عمل منظمة. يساعدك في التلخيص، العصف الذهني، وإنشاء الجداول تلقائياً.</p>
        <h3>المميزات</h3>
        <ul>
            <li><strong>Q&A:</strong> اسأل Notion عن أي شيء في ملاحظاتك وسيجيبك فوراً.</li>
            <li><strong>التلخيص:</strong> لخص اجتماعات طويلة في ثوانٍ.</li>
        </ul>
        `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=n8r1nF5UUFo" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/n8r1nF5UUFo/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Notion AI</strong> turns your messy notes into organized action plans. It helps with summarizing, brainstorming, and auto-generating tables.</p>
        <h3>Features</h3>
        <ul>
            <li><strong>Q&A:</strong> Ask Notion anything about your notes and it answers instantly.</li>
            <li><strong>Summarization:</strong> Summarize long meetings in seconds.</li>
        </ul>
        `,
        "external_url": "https://www.notion.so",
        "date": "2026-01-21"
    },
    {
        "id": 8,
        "title": "Canva Magic Studio",
        "title_en": "Canva Magic Studio",
        "category": "التصميم",
        "category_en": "Design",
        "icon": "🖌️",
        "summary": "لم يعد التصميم حكراً على المحترفين. أدوات سحرية لتحرير الصور والفيديو والعروض التقديمية.",
        "summary_en": "Design is no longer just for pros. Magical tools for editing photos, videos, and presentations.",
        "content": `
        <a href="https://www.youtube.com/watch?v=ErZcDZ6yXTk" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/ErZcDZ6yXTk/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Canva Magic Studio</strong> هو مجموعة أدوات تجعل كل شخص مصمماً محترفاً.</p>
        <h3>أدوات سحرية</h3>
        <ul>
            <li><strong>Magic Edit:</strong> حدد أي جزء في الصورة واطلب تغييره (مثلاً: "بدل الزهرة بقطة").</li>
            <li><strong>Magic Expand:</strong> وسع خلفية الصورة لتناسب أي مقاس.</li>
        </ul>
    `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=dH-6-8cW7Bs" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/dH-6-8cW7Bs/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Canva Magic Studio</strong> is a suite of tools that turns anyone into a pro designer.</p>
        <h3>Magic Features</h3>
        <ul>
            <li><strong>Magic Edit:</strong> Select any part of an image and ask to change it (e.g., "Replace flower with cat").</li>
            <li><strong>Magic Expand:</strong> Expand the background of an image to fit any size.</li>
        </ul>
    `,
        "external_url": "https://www.canva.com",
        "date": "2026-01-21",
        "tool_type": "prompt"
    },
    {
        "id": 9,
        "title": "Suno AI",
        "title_en": "Suno AI",
        "category": "الصوت والموسيقى",
        "category_en": "Audio & Music",
        "icon": "🎵",
        "summary": "اصنع أغاني كاملة (كلمات، لحن، وغناء) بجودة الراديو من واجهة بسيطة.",
        "summary_en": "Create full songs (lyrics, melody, and vocals) with radio quality from a simple interface.",
        "content": `
        <a href="https://www.youtube.com/watch?v=B6B9nMcUVi4" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/B6B9nMcUVi4/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Suno</strong> هو استوديو موسيقي في جيبك. يمكنك تأليف أغنية كاملة بكلمات وألحان وصوت بشري واقعي.</p>
        <h3>كيف يعمل؟</h3>
        <p>فقط صف الأغنية (مثلاً: "أغنية بوب حزينة عن المطر") وسيقوم Suno بتوليد مقطعين موسيقيين لتختار منهما.</p>
        `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=72R1NjNaUnE" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/72R1NjNaUnE/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Suno</strong> is a music studio in your pocket. Compose full songs with lyrics, melody, and realistic vocals.</p>
        <h3>How it Works?</h3>
        <p>Just describe the song (e.g., "Sad pop song about rain") and Suno will generate two clips for you to choose from.</p>
        `,
        "external_url": "https://suno.com",
        "date": "2026-01-21"
    },
    {
        "id": 10,
        "title": "Perplexity AI",
        "title_en": "Perplexity AI",
        "category": "البحث",
        "category_en": "Search",
        "icon": "🔎",
        "summary": "محرك إجابات وليس محرك بحث. يعطيك المعلومة الصافية مع المصادر بدلاً من عشرات الروابط.",
        "summary_en": "An answer engine, not a search engine. Gives you pure information with sources instead of links.",
        "content": `
        <a href="https://www.youtube.com/watch?v=BdrxTINe3V0" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/BdrxTINe3V0/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Perplexity AI</strong> هو محرك إجابات ذكي يغنيك عن البحث التقليدي.</p>
        <h3>المميزات الفريدة</h3>
        <ul>
            <li><strong>المصادر:</strong> كل معلومة تأتي مع رابط للمصدر الأصلي.</li>
            <li><strong>Copilot:</strong> يطرح عليك أسئلة لتوضيح بحثك والحصول على أفضل نتيجة.</li>
        </ul>
    `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=BdrxTINe3V0" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/BdrxTINe3V0/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Perplexity AI</strong> is a smart answer engine that replaces traditional search.</p>
        <h3>Unique Features</h3>
        <ul>
            <li><strong>Citations:</strong> Every piece of info comes with a link to the source.</li>
            <li><strong>Copilot:</strong> Asks you clarifying questions to refine your search.</li>
        </ul>
    `,
        "external_url": "https://www.perplexity.ai",
        "date": "2026-01-21",
        "tool_type": "chat"
    },
    {
        "id": 11,
        "title": "GitHub Copilot",
        "title_en": "GitHub Copilot",
        "category": "الكتابة والبرمجة",
        "category_en": "Writing & Coding",
        "icon": "💻",
        "summary": "مساعد المبرمج الأول عالمياً. يكمل الكود عنك ويفهم سياق مشروعك بالكامل.",
        "summary_en": "The world's #1 developer assistant. Autocompletes code and understands your full project context.",
        "content": `
        <a href="https://www.youtube.com/watch?v=TbuNNO3hnno" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/TbuNNO3hnno/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>GitHub Copilot</strong> هو "الطيار المساعد" للمبرمجين، يعمل داخل بيئة التطوير (IDE) الخاصة بك.</p>
        <h3>الميزات الجديدة</h3>
        <ul>
            <li><strong>Copilot Chat:</strong> تحدث مع الكود الخاص بك واطلب شرحاً أو تصحيحاً للأخطاء.</li>
            <li><strong>CLI Support:</strong> احصل على اقتراحات للأوامر في سطر الأوامر (Terminal).</li>
        </ul>
    `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=PlZkWcnnRt4" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/PlZkWcnnRt4/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>GitHub Copilot</strong> is the "copilot" for programmers, working directly inside your IDE.</p>
        <h3>New Features</h3>
        <ul>
            <li><strong>Copilot Chat:</strong> Chat with your code, ask for explanations, or fix bugs.</li>
            <li><strong>CLI Support:</strong> Get command suggestions directly in your terminal.</li>
        </ul>
    `,
        "external_url": "https://github.com/features/copilot",
        "date": "2026-01-21",
        "tool_type": "code"
    },
    {
        "id": 12,
        "title": "Gamma",
        "title_en": "Gamma",
        "category": "الإنتاجية",
        "category_en": "Productivity",
        "icon": "📊",
        "summary": "وداعاً للبوربوينت الممل. اصنع عروضاً تقديمية ومواقع ويب تفاعلية في ثوانٍ.",
        "summary_en": "Goodbye boring PowerPoint. Create interactive presentations and websites in seconds.",
        "content": `
        <a href="https://www.youtube.com/watch?v=hoO1JcyTsjo" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/hoO1JcyTsjo/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Gamma</strong> تصنع عروضاً تقديمية مذهلة في ثوانٍ. فقط اكتب الموضوع، وسيتم إنشاء الشرائح والصور والنصوص تلقائياً.</p>
        <h3>كيف تستفيد منه؟</h3>
        <p>مثالي للطلاب ورواد الأعمال الذين يحتاجون إلى عروض احترافية (Presentations) دون قضاء ساعات في التنسيق.</p>
        `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=KcbXKUR7-a0" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/KcbXKUR7-a0/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Gamma</strong> creates stunning presentations in seconds. Just type the topic, and it generates slides, images, and text automatically.</p>
        <h3>Why use it?</h3>
        <p>Perfect for students and entrepreneurs who need professional presentations (Decks) without spending hours on formatting.</p>
        `,
        "external_url": "https://gamma.app",
        "date": "2026-01-21"
    },
    {
        "id": 13,
        "title": "Leonardo.ai",
        "title_en": "Leonardo.ai",
        "category": "توليد الصور",
        "category_en": "Image Generation",
        "icon": "🎨",
        "summary": "المنافس الأقوى لميدجورني بواجهة ويب سهلة وأدوات تحكم دقيقة.",
        "summary_en": "The strongest Midjourney competitor with an easy web interface and precise control tools.",
        "content": `
        <a href="https://www.youtube.com/watch?v=q3tFX9Vqlao" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/q3tFX9Vqlao/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Leonardo.ai</strong> هو كنز للفنانين ومطوري الألعاب. يتميز بأدوات تحكم دقيقة جداً في التكوين والأسلوب.</p>
        <h3>الميزة القاتلة: التدريب</h3>
        <p>يمكنك رفع صورك الخاصة (مثلاً رسوماتك أو منتجاتك) وتدريب نموذج خاص لإنشاء صور بنفس الأسلوب تماماً.</p>
        `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=PcGQl1sZIQk" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/PcGQl1sZIQk/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Leonardo.ai</strong> is a treasure for artists and game devs. It features precise controls over composition and style.</p>
        <h3>Killer Feature: Training</h3>
        <p>You can upload your own images (e.g., your sketches or products) and train a custom model to generate images in that exact style.</p>
        `,
        "external_url": "https://leonardo.ai",
        "date": "2026-01-21",
        "tool_type": "prompt"
    },
    {
        "id": 14,
        "title": "Descript",
        "title_en": "Descript",
        "category": "الصوت والفيديو",
        "category_en": "Audio & Video",
        "icon": "🎬",
        "summary": "حرر الفيديو وكأنه ملف وورد. احذف الكلام بحذف النص، وحسن جودة الصوت بلمسة زر.",
        "summary_en": "Edit video like a word doc. Remove speech by deleting text, and fix audio quality with one click.",
        "content": `
        <a href="https://www.youtube.com/watch?v=i2A7OO0e5zw" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/i2A7OO0e5zw/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Descript</strong> يغير قواعد لعبة المونتاج. حرر الفيديو بتعديل النص المكتوب!</p>
        <h3>كيف يعمل؟</h3>
        <ul>
            <li><strong>النسخ النصي:</strong> يحول الفيديو إلى نص تلقائياً.</li>
            <li><strong>Overdub:</strong> صحح أخطاء الكلام بالكتابة، وسيولد صوتك بالذكاء الاصطناعي (ميزة حصرية).</li>
            <li><strong>Studio Sound:</strong> حذف الضوضاء وجعل صوتك يبدو وكأنه مسجل في استوديو بضغطة زر.</li>
        </ul>
        `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=z1ajPE7mmag" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/z1ajPE7mmag/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Descript</strong> changes the editing game. Edit video by editing text!</p>
        <h3>How it Works?</h3>
        <ul>
            <li><strong>Transcription:</strong> Automatically turns video into text.</li>
            <li><strong>Overdub:</strong> Fix speech errors by typing; AI generates your voice (exclusive feature).</li>
            <li><strong>Studio Sound:</strong> Remove noise and make your voice sound studio-quality with one click.</li>
        </ul>
        `,
        "external_url": "https://www.descript.com",
        "date": "2026-01-21"
    },
    {
        "id": 101,
        "title": "Smart Prompt Generator",
        "title_en": "Smart Prompt Generator",
        "category": "أدواتنا",
        "category_en": "Our Tools",
        "icon": "✨",
        "summary": "أنشئ أوامر احترافية لـ ChatGPT و Midjourney بنقرة واحدة. حسن نتائجك فوراً.",
        "summary_en": "Generate professional prompts for ChatGPT and Midjourney with one click. Improve your results instantly.",
        "internal_url": "tool-prompt-generator.html",
        "date": "2026-01-22"
    },
    {
        "id": 102,
        "title": "TechnoBot AI",
        "title_en": "TechnoBot AI",
        "category": "أدواتنا",
        "category_en": "Our Tools",
        "icon": "🤖",
        "summary": "مساعد ذكي مخصص للإجابة على استفساراتك التقنية ومساعدتك في تصفح الموقع.",
        "summary_en": "A specialized AI assistant to answer your tech queries and help you navigate the site.",
        "internal_url": "tool-technobot.html",
        "content": `
        <img src="../images/technobot_modern.png" alt="TechnoBot AI" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
        <p><strong>TechnoBot</strong> هو مساعدنا الذكي الخاص في موقع TechnoMind.</p>
        <h3>المميزات</h3>
        <p>تم تدريبه للإجابة المسائل التقنية بأسلوب مبسط. يجمع بين قدرات البحث وقواعد البيانات الخاصة بنا.</p>
    `,
        "content_en": `
        <img src="../images/technobot_modern.png" alt="TechnoBot AI" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
        <p><strong>TechnoBot</strong> is our custom AI assistant here at TechnoMind.</p>
        <h3>Features</h3>
        <p>Trained to answer technical questions in a simplified manner. It combines search capabilities with our own knowledge base.</p>
    `,
        "tool_type": "chat",
        "date": "2026-01-22"
    },
    {
        "id": 103,
        "title": "AI Code Generator",
        "title_en": "AI Code Generator",
        "category": "أدواتنا",
        "category_en": "Our Tools",
        "icon": "💻",
        "summary": "احصل على مكونات واجهة مستخدم (UI) جاهزة وأكواد HTML/CSS نظيفة لمشروعك.",
        "summary_en": "Get ready-made UI components and clean HTML/CSS code for your project.",
        "internal_url": "tool-code-generator.html",
        "date": "2026-01-22"
    },
    {
        "id": 15,
        "title": "بناء العقل الثاني",
        "title_en": "Building a Second Brain",
        "category": "الإنتاجية",
        "category_en": "Productivity",
        "icon": "🧠",
        "summary": "كيف تبني قاعدة معرفة شخصية باستخدام الذكاء الاصطناعي (Notion + Obsidian + ChatGPT).",
        "summary_en": "How to build a personal knowledge base using AI (Notion + Obsidian + ChatGPT).",
        "content": `
        <a href="https://www.youtube.com/watch?v=vp6pHpgaXFU" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/vp6pHpgaXFU/hqdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>العقل الثاني (Second Brain)</strong> هو نظام لحفظ وتنظيم كل ما تتعلمه، لتتمكن من استرجاعه في أي وقت. مع الذكاء الاصطناعي، أصبح بناء هذا النظام أسهل وأذكى.</p>
        
        <h3>الأدوات المطلوبة</h3>
        <ul>
            <li><strong>Notion:</strong> لتنظيم المشاريع والمهام (قاعدة البيانات).</li>
            <li><strong>Obsidian:</strong> لربط الأفكار والملاحظات (الشبكة المعرفية).</li>
            <li><strong>ChatGPT/Claude:</strong> لتلخيص المعلومات واقتراح الروابط بين الأفكار.</li>
        </ul>

        <h3>خطوات البناء</h3>
        <p>ابدأ بجمع كل الروابط والمقالات التي تهمك في مكان واحد (Inbox). ثم خصص وقتاً أسبوعياً لتصنيفها وتلخيصها بمساعدة AI.</p>
    `,
        "content_en": `
        <a href="https://www.youtube.com/watch?v=vp6pHpgaXFU" target="_blank" class="video-link-card">
            <img src="https://img.youtube.com/vi/vp6pHpgaXFU/maxresdefault.jpg" alt="Video Tutorial">
            <div class="video-play-button"></div>
        </a>
        <p><strong>Second Brain</strong> is a system to capture and organize everything you learn. With AI, building this system is easier and smarter.</p>
        
        <h3>Required Tools</h3>
        <ul>
            <li><strong>Notion:</strong> For projects and tasks (Database).</li>
            <li><strong>Obsidian:</strong> For linking ideas (Knowledge Graph).</li>
            <li><strong>ChatGPT/Claude:</strong> To summarize info and suggest thought links.</li>
        </ul>

        <h3>Steps to Build</h3>
        <p>Start by capturing every link and article in one Inbox. Then spend time weekly sorting and summarizing them with AI help.</p>
    `,
        "internal_url": "guide-knowledge-base.html",
        "date": "2026-01-24"
    },
    {
        "id": 16,
        "title": "العمل الحر للمبتدئين",
        "title_en": "Freelancing for Beginners",
        "category": "الربح والعمل الحر",
        "category_en": "Profit & Freelance",
        "icon": "💸",
        "summary": "دليلك الكامل للبدء في العمل الحر (Freelancing) وتحقيق أول 1000$ من الإنترنت.",
        "summary_en": "Your complete guide to starting freelancing and making your first $1000 online.",
        "internal_url": "article-earn.html",
        "date": "2026-01-12"
    },
    {
        "id": 17,
        "title": "بيع المنتجات الرقمية",
        "title_en": "Selling Digital Products",
        "category": "الربح والعمل الحر",
        "category_en": "Profit & Freelance",
        "icon": "📦",
        "summary": "كيف تنشئ وتبيع الكتب الرقمية، القوالب، والدورات التعليمية مرة واحدة وتربح للأبد.",
        "summary_en": "How to create and sell ebooks, templates, and courses once and profit forever.",
        "internal_url": "article-digital-products.html",
        "date": "2026-01-18"
    },
    {
        "id": 18,
        "title": "إضافات متصفح خرافية",
        "title_en": "Must-Have Browser Extensions",
        "category": "الإنتاجية",
        "category_en": "Productivity",
        "icon": "🧩",
        "summary": "أفضل 5 إضافات للمتصفح ستضاعف إنتاجيتك وتوفر عليك ساعات من العمل الشاق.",
        "summary_en": "Top 5 browser extensions that will double your productivity and save hours of hard work.",
        "internal_url": "article-productivity.html",
        "date": "2026-01-19"
    },
    {
        "id": 19,
        "title": "بناء المواقع بالذكاء الاصطناعي",
        "title_en": "Web Dev with AI",
        "category": "تطوير الويب",
        "category_en": "Web Development",
        "icon": "🌐",
        "summary": "كيف تبني موقعاً إلكترونياً كاملاً باستخدام ChatGPT و Midjourney بدون كتابة كود.",
        "summary_en": "How to build a full website using ChatGPT and Midjourney without writing code.",
        "internal_url": "article-web-dev-ai.html",
        "date": "2026-01-20"
    },
    {
        "id": 20,
        "title": "أفضل 10 أدوات AI",
        "title_en": "Top 10 AI Tools",
        "category": "أدوات",
        "category_en": "Tools",
        "icon": "🏆",
        "summary": "قائمة بأقوى 10 أدوات ذكاء اصطناعي مجانية يجب أن تستخدمها في 2026.",
        "summary_en": "A list of the top 10 free AI tools you must use in 2026.",
        "internal_url": "article-tools.html",
        "date": "2026-01-14"
    }
];

// Export to global scope
window.technoMindArticles = articles;