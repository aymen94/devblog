<h1 align="center">⚡Devblog</h1>

<p align="center">
  <strong>A blazing-fast, developer-first blogging platform built with React & Vite</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#writing-posts">Writing Posts</a> •
  <a href="#customization">Customization</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome">
</p>

---

## ✨ Why devblog?

**devblog** is designed for developers who want to focus on writing, not configuring. Get your personal blog up and running in under 2 minutes with a beautiful dark theme, markdown support, and zero configuration needed.

### 🎯 Instant Play

clone and run, you're live in 30 seconds:

```bash
npx degit aymen94/devblog my-blog && cd my-blog && npm install && npm run dev
```

That's it! Open [http://localhost:5173](http://localhost:5173) and start blogging. 🚀

<details>
<summary>📋 What this does</summary>

| Step | Command | Description |
|------|---------|-------------|
| 1 | `npx degit aymen94/devblog my-blog` | Clones the template (without git history) |
| 2 | `cd my-blog` | Enters the project folder |
| 3 | `npm install` | Installs dependencies |
| 4 | `npm run dev` | Starts the dev server |

</details>

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| ⚡ **Lightning Fast** | Built on Vite 7 for instant HMR and optimized production builds |
| 📝 **Markdown First** | Write posts in Markdown with frontmatter support |
| 🏷️ **Tag System** | Organize posts with tags and browse by category |
| 🌙 **Dark Mode** | Beautiful GitHub-inspired dark theme out of the box |
| 📱 **Fully Responsive** | Looks great on desktop, tablet, and mobile |
| ⏱️ **Reading Time** | Auto-calculated reading time for each post |
| 🔍 **SEO Ready** | Optimized meta tags and semantic HTML |
| 📖 **Zero Config** | Works immediately after installation |
| 🎨 **Customizable** | CSS variables for easy theming |
| 🛠️ **Developer DX** | Hot reload, TypeScript support, path aliases |

---

## 📦 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/aymen94/devblog.git my-blog
cd my-blog

# Install dependencies
npm install

# Generate posts manifest
npm run generate-posts

# Start development server
npm run dev
```

Open [http://localhost:port](http://localhost:port) to see your blog! 🎉

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run generate-posts` | Regenerate posts manifest after adding/editing posts |

---

## ✍️ Writing Posts

### Create Your First Post

1. Create a new `.md` file in `src/posts/`:

```bash
touch src/posts/my-awesome-post.md
```

2. Add frontmatter at the top of your file:

```yaml
---
title: "My Awesome Post"
date: 2026-02-02
description: "A brief description that appears in previews and SEO"
author: "Your Name"
tags: ["javascript", "react", "tutorial"]
published: true
---
```

3. Write your content in Markdown:

```markdown
# Welcome to My Post!

This is the body of your post. You can use all **Markdown** features.

## Code Blocks

\`\`\`javascript
const greeting = "Hello, devblog!";
console.log(greeting);
\`\`\`

## And More!

- Lists
- [Links](https://github.com)
- Images
- Tables
- And everything Markdown supports!
```

4. Regenerate the manifest:

```bash
npm run generate-posts
```

Your post is now live! 🚀

### Frontmatter Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title displayed in headers and previews |
| `date` | date | ✅ | Publication date (YYYY-MM-DD format) |
| `description` | string | ✅ | Short description for SEO and previews |
| `author` | string | ⬜ | Author name (defaults to "Anonymous") |
| `tags` | array | ⬜ | List of tags for categorization |
| `published` | boolean | ⬜ | Set to `false` to hide the post (draft mode) |
| `slug` | string | ⬜ | Custom URL slug (defaults to filename) |

---

## 🎨 Customization

### Theming

devblog uses CSS custom properties for easy theming. Edit `src/styles/global.css`:

```css
:root {
  --color-bg: #0d1117;           /* Main background */
  --color-bg-secondary: #161b22; /* Secondary background */
  --color-text: #c9d1d9;         /* Primary text */
  --color-text-muted: #8b949e;   /* Muted text */
  --color-primary: #58a6ff;      /* Links and accents */
  --color-border: #30363d;       /* Borders */
  --max-width: 800px;            /* Content max width */
}
```

### Adding Pages

Add new routes in `src/App.jsx`:

```jsx
import { MyPage } from './pages/MyPage';

// Inside Routes component
<Route path="/my-page" element={<MyPage />} />
```

---

## 📁 Project Structure

```
devblog/
├── 📁 scripts/
│   └── generate-posts.js    # Post manifest generator
├── 📁 src/
│   ├── 📁 components/       # Reusable React components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostContent.jsx
│   │   └── TagList.jsx
│   ├── 📁 generated/        # Auto-generated files (git-ignored)
│   │   └── posts-manifest.json
│   ├── 📁 pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── PostPage.jsx
│   │   └── TagPage.jsx
│   ├── 📁 posts/            # Your markdown blog posts
│   │   └── hello-world.md
│   ├── 📁 styles/           # Global CSS styles
│   │   └── global.css
│   ├── 📁 types/            # TypeScript type definitions
│   │   └── post.ts
│   ├── 📁 utils/            # Utility functions
│   │   ├── markdown.js
│   │   └── posts.js
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aymen94/devblog)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aymen94/devblog)

### GitHub Pages

1. Add a `base` to your `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run generate-posts
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

3. Enable GitHub Pages in your repository settings under **Settings > Pages > Source** and select "GitHub Actions".

### Manual Deployment

```bash
# Build for production
npm run build

# The 'dist' folder contains your static site
# Deploy it to any static hosting service
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch: `git checkout -b feature/amazing-feature`
3. 💾 Commit your changes: `git commit -m 'Add amazing feature'`
4. 📤 Push to the branch: `git push origin feature/amazing-feature`
5. 🔃 Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation for new features
- Test your changes thoroughly

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💖 Support

If you find devblog useful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/aymen94">Aymen</a>
</p>

<p align="center">
  <sub>Built for developers, by developers</sub>
</p>
