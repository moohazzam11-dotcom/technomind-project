const courses = [
    {
        id: "ai-mastery-101",
        title: "إتقان الذكاء الاصطناعي 101",
        title_en: "AI Mastery 101: From Zero to Hero",
        description: "الدورة الشاملة لإتقان أدوات الذكاء الاصطناعي التوليدي. تعلم كيف تستخدم ChatGPT و Midjourney وغيرها في عملك وحياتك اليومية.",
        description_en: "The comprehensive guide to mastering Generative AI tools. Learn how to use ChatGPT, Midjourney, and more in your work and daily life.",
        instructor: "فريق TechnoMind",
        instructor_en: "TechnoMind Team",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60",
        level: "مبتدئ",
        level_en: "Beginner",
        duration: "4 ساعات",
        duration_en: "4 Hours",
        modules: [
            {
                title: "مقدمة في الذكاء الاصطناعي",
                title_en: "Introduction to AI",
                lessons: [
                    {
                        id: "l1",
                        title: "ما هو الذكاء الاصطناعي؟ — شرح مبسط",
                        title_en: "What is AI? — Explained Simply",
                        videoId: "JMUxmLyrhSk",
                        duration: "8:00",
                        description: "شرح واضح ومبسط لما هو الذكاء الاصطناعي ولماذا هو مهم الآن.",
                        description_en: "A clear, beginner-friendly explanation of what Artificial Intelligence actually is and why it matters."
                    },
                    {
                        id: "l2",
                        title: "أنواع الذكاء الاصطناعي: تعلم الآلة والتعلم العميق",
                        title_en: "Types of AI: Machine Learning & Deep Learning",
                        videoId: "ad79nYk2keg",
                        duration: "12:00",
                        description: "افهم الفرق بين تعلم الآلة والتعلم العميق والذكاء الاصطناعي التوليدي.",
                        description_en: "Understand the difference between ML, Deep Learning, and Generative AI."
                    },
                    {
                        id: "l3",
                        title: "كيف تعمل الشبكات العصبية؟",
                        title_en: "How Neural Networks Work",
                        videoId: "aircAruvnKk",
                        duration: "10:00",
                        description: "شرح بصري لكيفية معالجة الشبكات العصبية للمعلومات.",
                        description_en: "A visual explanation of how neural networks process information."
                    }
                ]
            },
            {
                title: "إتقان ChatGPT",
                title_en: "Mastering ChatGPT",
                lessons: [
                    {
                        id: "l4",
                        title: "أساسيات ChatGPT",
                        title_en: "ChatGPT Fundamentals",
                        videoId: "yR27J-QUx2o",
                        duration: "15:00",
                        description: "تعلم أساسيات كتابة الأوامر وكيفية التحدث مع نماذج اللغة الكبيرة.",
                        description_en: "Learn the basics of prompting and how to talk to Large Language Models."
                    },
                    {
                        id: "l5",
                        title: "مميزات GPT-4 والاستخدامات المتقدمة",
                        title_en: "GPT-4 Features & Advanced Uses",
                        videoId: "2FeymQoKvrk",
                        duration: "12:00",
                        description: "استكشف قدرات GPT-4 المتعددة: الرؤية وتحليل البيانات وتوليد الأكواد.",
                        description_en: "Explore GPT-4's multimodal capabilities: vision, data analysis, and code generation."
                    },
                    {
                        id: "l6",
                        title: "هندسة الأوامر المتقدمة (Prompt Engineering)",
                        title_en: "Advanced Prompt Engineering",
                        videoId: "pGOyw_M1mNE",
                        duration: "14:00",
                        description: "تقنيات التفكير المتسلسل والأمثلة القليلة والتعليمات المبنية على الأدوار.",
                        description_en: "Techniques like chain-of-thought, few-shot prompting, and role-based instructions."
                    }
                ]
            },
            {
                title: "الإبداع البصري وتوليد الصور",
                title_en: "Visual AI & Image Generation",
                lessons: [
                    {
                        id: "l7",
                        title: "Midjourney: أنشئ أعمالاً فنية مذهلة بالذكاء الاصطناعي",
                        title_en: "Midjourney: Create Stunning AI Art",
                        videoId: "B1hOFU-Wzf8",
                        duration: "18:00",
                        description: "دليل خطوة بخطوة لإنشاء أول تحفة فنية بالذكاء الاصطناعي مع Midjourney.",
                        description_en: "Step-by-step guide to generating your first AI masterpiece with Midjourney."
                    },
                    {
                        id: "l8",
                        title: "DALL-E 3: تحويل النص إلى صور بسهولة",
                        title_en: "DALL-E 3: Text-to-Image Made Easy",
                        videoId: "nYqeHIRKboM",
                        duration: "10:00",
                        description: "أنشئ صوراً واقعية من أوصاف نصية بسيطة باستخدام DALL-E 3.",
                        description_en: "Generate photorealistic images from simple text descriptions using DALL-E 3."
                    },
                    {
                        id: "l9",
                        title: "Stable Diffusion: توليد الصور مفتوح المصدر",
                        title_en: "Stable Diffusion: Open-Source Image AI",
                        videoId: "Asg1e_IYzR8",
                        duration: "16:00",
                        description: "شغّل نظام توليد صور قوي على جهازك الشخصي مع Stable Diffusion.",
                        description_en: "Run powerful image generation locally with Stable Diffusion."
                    },
                    {
                        id: "l10",
                        title: "Canva Magic Studio: التصميم بالذكاء الاصطناعي",
                        title_en: "Canva Magic Studio",
                        videoId: "dH-6-8cW7Bs",
                        duration: "10:00",
                        description: "تصميم احترافي بالذكاء الاصطناعي — لا تحتاج لخبرة تصميم سابقة.",
                        description_en: "AI-powered design for everyone — no design experience needed."
                    }
                ]
            }
        ]
    },
    {
        id: "productivity-revolution",
        title: "ثورة الإنتاجية مع الذكاء الاصطناعي",
        title_en: "Productivity Revolution with AI",
        description: "كيف تضاعف إنتاجيتك وتبني نظاماً معرفياً لا يقهر باستخدام Notion و Obsidian والذكاء الاصطناعي.",
        description_en: "How to double your productivity and build an invincible knowledge system using Notion, Obsidian, and AI.",
        instructor: "فريق TechnoMind",
        instructor_en: "TechnoMind Team",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60",
        level: "متوسط",
        level_en: "Intermediate",
        duration: "3 ساعات",
        duration_en: "3 Hours",
        modules: [
            {
                title: "بناء العقل الثاني",
                title_en: "Building a Second Brain",
                lessons: [
                    {
                        id: "p1",
                        title: "مفهوم العقل الثاني (إدارة المعرفة الشخصية)",
                        title_en: "The Concept of a Second Brain (PKM)",
                        videoId: "n8r1nF5UUFo",
                        duration: "15:00",
                        description: "افهم منهجية إدارة المعرفة الشخصية ولماذا هي ضرورية.",
                        description_en: "Understand the methodology of Personal Knowledge Management and why it's essential."
                    },
                    {
                        id: "p2",
                        title: "Notion AI للتنظيم والإنتاجية",
                        title_en: "Notion AI for Organization",
                        videoId: "BdIvd8FAlMU",
                        duration: "20:00",
                        description: "إعداد مساحة عملك الرقمية بميزات Notion المدعومة بالذكاء الاصطناعي.",
                        description_en: "Setting up your digital workspace with Notion's AI-powered features."
                    }
                ]
            },
            {
                title: "سير العمل المدعوم بالذكاء الاصطناعي",
                title_en: "AI-Powered Workflows",
                lessons: [
                    {
                        id: "p3",
                        title: "أتمتة المهام مع الذكاء الاصطناعي و Zapier",
                        title_en: "Automating Tasks with AI & Zapier",
                        videoId: "DbsAQSIKQXk",
                        duration: "14:00",
                        description: "اربط تطبيقاتك وأتمت العمل المتكرر باستخدام سير عمل ذكي.",
                        description_en: "Connect your apps and automate repetitive work using AI-powered workflows."
                    },
                    {
                        id: "p4",
                        title: "الذكاء الاصطناعي للبحث والتلخيص",
                        title_en: "AI for Research & Summarization",
                        videoId: "BdrxTINe3V0",
                        duration: "12:00",
                        description: "استخدم Perplexity AI و ChatGPT للبحث في المواضيع وتلخيص المستندات بثوانٍ.",
                        description_en: "Use Perplexity AI and ChatGPT to research topics and summarize documents in seconds."
                    }
                ]
            },
            {
                title: "أنظمة الإنتاجية المتقدمة",
                title_en: "Advanced Productivity Systems",
                lessons: [
                    {
                        id: "p5",
                        title: "ChatGPT كمساعدك الشخصي الذكي",
                        title_en: "ChatGPT as Your Personal Assistant",
                        videoId: "jHv63Uvk5VA",
                        duration: "16:00",
                        description: "أنشئ GPT مخصص، إحاطات يومية، واستخدم ChatGPT للبريد والجدولة والتخطيط.",
                        description_en: "Custom GPTs, daily briefings, and using ChatGPT for email, scheduling, and planning."
                    },
                    {
                        id: "p6",
                        title: "الملاحظات الصوتية بالذكاء الاصطناعي مع ElevenLabs",
                        title_en: "AI Voice Notes with ElevenLabs",
                        videoId: "ouaWZgEBt_s",
                        duration: "10:00",
                        description: "حوّل ملاحظاتك إلى صوت، أنشئ ملخصات صوتية، وابنِ نظام عمل صوتي.",
                        description_en: "Convert notes to voice, create audio summaries, and build a voice-first workflow."
                    }
                ]
            }
        ]
    },
    {
        id: "prompt-engineering",
        title: "هندسة الأوامر: دورة شاملة",
        title_en: "Prompt Engineering Masterclass",
        description: "تعلّم فن كتابة الأوامر (Prompts) للحصول على أفضل النتائج من أي أداة ذكاء اصطناعي.",
        description_en: "Master the art of writing effective prompts to get the best results from any AI tool.",
        instructor: "فريق TechnoMind",
        instructor_en: "TechnoMind Team",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60",
        level: "متوسط",
        level_en: "Intermediate",
        duration: "2.5 ساعة",
        duration_en: "2.5 Hours",
        modules: [
            {
                title: "أساسيات كتابة الأوامر",
                title_en: "Prompt Foundations",
                lessons: [
                    {
                        id: "pe1",
                        title: "ما الذي يجعل الأمر (Prompt) جيداً؟",
                        title_en: "What Makes a Good Prompt?",
                        videoId: "yR27J-QUx2o",
                        duration: "10:00",
                        description: "تشريح الأمر الفعال: السياق، التعليمات، التنسيق، والقيود.",
                        description_en: "The anatomy of an effective prompt: context, instruction, format, and constraints."
                    },
                    {
                        id: "pe2",
                        title: "التفكير المتسلسل والأمثلة القليلة",
                        title_en: "Chain-of-Thought & Few-Shot Prompting",
                        videoId: "pGOyw_M1mNE",
                        duration: "14:00",
                        description: "تقنيات متقدمة تحسن جودة مخرجات الذكاء الاصطناعي بشكل كبير.",
                        description_en: "Advanced techniques that dramatically improve AI output quality."
                    }
                ]
            },
            {
                title: "أوامر النصوص والبرمجة",
                title_en: "Prompts for Text & Code",
                lessons: [
                    {
                        id: "pe3",
                        title: "كتابة الأوامر لإنشاء المحتوى",
                        title_en: "Writing Prompts for Content Creation",
                        videoId: "jHv63Uvk5VA",
                        duration: "12:00",
                        description: "مقالات، منشورات تواصل اجتماعي، بريد إلكتروني، ونصوص تسويقية — كلها بالذكاء الاصطناعي.",
                        description_en: "Blog posts, social media, emails, and marketing copy — all with AI."
                    },
                    {
                        id: "pe4",
                        title: "البرمجة مع الذكاء الاصطناعي: GitHub Copilot",
                        title_en: "Coding with AI: GitHub Copilot",
                        videoId: "PlZkWcnnRt4",
                        duration: "15:00",
                        description: "اكتب أكواداً أفضل وأسرع مع مساعد البرمجة الذكي.",
                        description_en: "Write better code faster with AI pair programming."
                    },
                    {
                        id: "pe5",
                        title: "Cursor AI: محرر الأكواد الذكي",
                        title_en: "Cursor AI: The AI-First Code Editor",
                        videoId: "Fi3AJZZregI",
                        duration: "12:00",
                        description: "ابنِ تطبيقات كاملة بتعليمات باللغة الطبيعية.",
                        description_en: "Build entire applications with natural language instructions."
                    }
                ]
            },
            {
                title: "أوامر الصور والتصميم",
                title_en: "Prompts for Images & Visuals",
                lessons: [
                    {
                        id: "pe6",
                        title: "تقنيات أوامر Midjourney",
                        title_en: "Midjourney Prompt Techniques",
                        videoId: "5PLXPm-nXCY",
                        duration: "16:00",
                        description: "كلمات الأسلوب، نسب العرض، الأوامر السلبية، والتحكم في التكوين.",
                        description_en: "Style keywords, aspect ratios, negative prompts, and compositional control."
                    },
                    {
                        id: "pe7",
                        title: "أوامر DALL-E و Stable Diffusion",
                        title_en: "DALL-E & Stable Diffusion Prompts",
                        videoId: "Asg1e_IYzR8",
                        duration: "14:00",
                        description: "كيف تكتب أوامر دقيقة لنماذج توليد الصور المختلفة.",
                        description_en: "How to write precise prompts for different image generation models."
                    }
                ]
            }
        ]
    },
    {
        id: "ai-content-creators",
        title: "الذكاء الاصطناعي لصناع المحتوى",
        title_en: "AI for Content Creators",
        description: "كيف تستخدم الذكاء الاصطناعي لإنشاء محتوى احترافي: فيديو، صوت، صور، ونصوص.",
        description_en: "How to use AI to create professional content: video, audio, images, and text.",
        instructor: "فريق TechnoMind",
        instructor_en: "TechnoMind Team",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60",
        level: "مبتدئ",
        level_en: "Beginner",
        duration: "3 ساعات",
        duration_en: "3 Hours",
        modules: [
            {
                title: "الكتابة والنصوص بالذكاء الاصطناعي",
                title_en: "AI Writing & Text",
                lessons: [
                    {
                        id: "cc1",
                        title: "كتابة المقالات والتدوينات بالذكاء الاصطناعي",
                        title_en: "Writing Blog Posts & Articles with AI",
                        videoId: "2FeymQoKvrk",
                        duration: "12:00",
                        description: "أنشئ محتوى مكتوب عالي الجودة مع ChatGPT و Claude.",
                        description_en: "Generate high-quality written content with ChatGPT and Claude."
                    },
                    {
                        id: "cc2",
                        title: "استراتيجية محتوى التواصل الاجتماعي بالذكاء الاصطناعي",
                        title_en: "Social Media Content Strategy with AI",
                        videoId: "pGOyw_M1mNE",
                        duration: "10:00",
                        description: "أنشئ محتوى شهر كامل لوسائل التواصل الاجتماعي في دقائق.",
                        description_en: "Create a month of social media posts in minutes using AI."
                    }
                ]
            },
            {
                title: "التصميم البصري بالذكاء الاصطناعي",
                title_en: "AI Visual Design",
                lessons: [
                    {
                        id: "cc3",
                        title: "إنشاء الصور المصغرة والرسومات بالذكاء الاصطناعي",
                        title_en: "Creating Thumbnails & Graphics with AI",
                        videoId: "B1hOFU-Wzf8",
                        duration: "14:00",
                        description: "صمم صوراً مصغرة جذابة ورسومات اجتماعية مع Midjourney و Canva AI.",
                        description_en: "Design eye-catching thumbnails and social graphics with Midjourney and Canva AI."
                    },
                    {
                        id: "cc4",
                        title: "Canva AI: صمم بدون مصمم",
                        title_en: "Canva AI: Design Without a Designer",
                        videoId: "dH-6-8cW7Bs",
                        duration: "10:00",
                        description: "استخدم Magic Studio من Canva للشعارات والعروض التقديمية وهوية العلامة التجارية.",
                        description_en: "Use Canva's Magic Studio for logos, presentations, and brand kits."
                    }
                ]
            },
            {
                title: "الصوت والتعليق الصوتي بالذكاء الاصطناعي",
                title_en: "AI Audio & Voice",
                lessons: [
                    {
                        id: "cc5",
                        title: "توليد الأصوات بالذكاء الاصطناعي مع ElevenLabs",
                        title_en: "AI Voice Generation with ElevenLabs",
                        videoId: "ouaWZgEBt_s",
                        duration: "12:00",
                        description: "استنسخ الأصوات، أنشئ تعليقات صوتية، وأنتج محتوى صوتي متعدد اللغات.",
                        description_en: "Clone voices, generate narration, and create multilingual audio content."
                    },
                    {
                        id: "cc6",
                        title: "البودكاست والتعليق الصوتي بالذكاء الاصطناعي",
                        title_en: "Podcast & Video Narration with AI",
                        videoId: "TbuNNO3hnno",
                        duration: "14:00",
                        description: "ابنِ بودكاست احترافي أو قناة يوتيوب بأصوات مولدة بالذكاء الاصطناعي.",
                        description_en: "Build a professional podcast or YouTube channel with AI-generated voices."
                    }
                ]
            }
        ]
    },
    {
        id: "make-money-with-ai",
        title: "الربح من الذكاء الاصطناعي",
        title_en: "Make Money with AI",
        description: "استراتيجيات عملية ومجربة لتحقيق دخل من خلال أدوات الذكاء الاصطناعي.",
        description_en: "Practical, proven strategies to generate income using AI tools.",
        instructor: "فريق TechnoMind",
        instructor_en: "TechnoMind Team",
        thumbnail: "https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?w=500&auto=format&fit=crop&q=60",
        level: "متقدم",
        level_en: "Advanced",
        duration: "2.5 ساعة",
        duration_en: "2.5 Hours",
        modules: [
            {
                title: "العمل الحر بالذكاء الاصطناعي",
                title_en: "AI Freelancing",
                lessons: [
                    {
                        id: "mm1",
                        title: "العمل الحر باستخدام أدوات الذكاء الاصطناعي",
                        title_en: "Freelancing with AI Tools",
                        videoId: "KMZDGiGNx5E",
                        duration: "14:00",
                        description: "كيف تقدم خدمات مدعومة بالذكاء الاصطناعي على Upwork و Fiverr و مستقل.",
                        description_en: "How to offer AI-powered services on Upwork, Fiverr, and Freelancer."
                    },
                    {
                        id: "mm2",
                        title: "وكالة محتوى بالذكاء الاصطناعي: البناء والتوسع",
                        title_en: "AI Content Agency: Build & Scale",
                        videoId: "jHv63Uvk5VA",
                        duration: "16:00",
                        description: "أنشئ وكالة محتوى بالذكاء الاصطناعي واحصل على أول عملائك.",
                        description_en: "Start an AI content creation agency and land your first clients."
                    }
                ]
            },
            {
                title: "المنتجات الرقمية بالذكاء الاصطناعي",
                title_en: "Digital Products with AI",
                lessons: [
                    {
                        id: "mm3",
                        title: "بيع التصاميم والفنون المولدة بالذكاء الاصطناعي",
                        title_en: "Selling AI-Generated Art & Designs",
                        videoId: "5PLXPm-nXCY",
                        duration: "12:00",
                        description: "المنصات والتسعير والاستراتيجيات لبيع الأعمال الفنية المولدة بالذكاء الاصطناعي.",
                        description_en: "Platforms, pricing, and strategies for selling AI artwork."
                    },
                    {
                        id: "mm4",
                        title: "إنشاء وبيع الدورات التعليمية بالذكاء الاصطناعي",
                        title_en: "Creating & Selling Online Courses with AI",
                        videoId: "2FeymQoKvrk",
                        duration: "14:00",
                        description: "استخدم الذكاء الاصطناعي لبناء وتسويق وبيع دوراتك التعليمية.",
                        description_en: "Use AI to build, market, and sell your own educational courses."
                    }
                ]
            },
            {
                title: "الذكاء الاصطناعي للأعمال",
                title_en: "AI for Business",
                lessons: [
                    {
                        id: "mm5",
                        title: "أتمتة أعمالك بالذكاء الاصطناعي",
                        title_en: "Automating Your Business with AI",
                        videoId: "DbsAQSIKQXk",
                        duration: "10:00",
                        description: "وفر أكثر من 20 ساعة أسبوعياً عبر أتمتة المهام المتكررة.",
                        description_en: "Save 20+ hours per week by automating repetitive tasks."
                    },
                    {
                        id: "mm6",
                        title: "بناء تطبيقات ذكية بدون برمجة",
                        title_en: "Building AI-Powered Apps (No Code)",
                        videoId: "Fi3AJZZregI",
                        duration: "18:00",
                        description: "استخدم Cursor AI وأدوات أخرى لبناء تطبيقات بدون مهارات برمجة تقليدية.",
                        description_en: "Use Cursor AI and other tools to build apps without traditional coding skills."
                    }
                ]
            }
        ]
    }
];

// Export to global scope
window.technoMindCourses = courses;
