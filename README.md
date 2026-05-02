# TechnoMind Project (Arabic)

Welcome to the **TechnoMind Project**, a fully localized Arabic guide to AI tools and technologies. This project features a modern, responsive design with a "Deep Blue Sky" theme.

## Features

- **Fully Arabic Interface**: All pages, navigation, and interactive tools are localized.
- **Modern Theme**: "Deep Blue Sky" aesthetic with glassmorphism effects and dark mode optimizations.
- **Interactive Tools**:
  - **AI Prompt Generator**: Create prompts for ChatGPT and Midjourney.
  - **AI Code Generator**: Generate UI components (Buttons, Cards, Navbars).
  - **Chatbot**: A simple rule-based AI assistant.
- **Responsive Design**: Optimized for desktop and mobile viewing.

## Project Structure

- `index.html`: Main landing page.
- `pages/`: Contains all subpages (Articles, Guides, Contact, etc.).
- `css/`: Stylesheets (`style.css`).
- `js/`: JavaScript logic (`main.js`, `tools.js`, `auth.js`, `lang.js`) and data (`data/articles.js`).
- `images/`: static assets.

## Deployment

This website is a **Static Site** (HTML/CSS/JS). You can deploy it easily using any static hosting service.

### GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings > Pages**.
3. Select the `main` branch and `/ (root)` folder.
4. Click **Save**.

### Netlify / Vercel
1. Connect your GitHub repository.
2. The build settings should remain empty (no build command needed).
3. Publish directory: `/` (root).

## Customization

- **Articles**: Edit `js/data/articles.js` to add or modify content.
- **Theme**: Adjust colors in `css/style.css` under the `:root` variables.
- **Language**: Logic for the language switcher is in `js/lang.js`.

---
*Developed as part of the TechnoMind initiative.*
