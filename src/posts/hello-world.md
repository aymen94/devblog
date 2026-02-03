---
title: "Welcome to devblog: Your Developer Blog Starts Here"
date: 2026-02-02
description: "Get started with devblog — the blazing-fast, developer-first blogging platform. Learn how to create posts in minutes."
author: "Aymen"
tags: ["getting-started", "tutorial", "devblog"]
published: true
---

# ⚡ Welcome to devblog!

Congratulations on setting up your new developer blog! **devblog** is designed to let you focus on what matters most — writing great content.

## Why devblog?

- 🚀 **Blazing Fast** — Built on Vite for instant development and optimized builds
- 📝 **Markdown First** — Write posts in the format you already know and love
- 🎨 **Beautiful by Default** — Dark theme that's easy on the eyes
- 🛠️ **Zero Config** — Start writing immediately, no setup required

## Creating Your First Post

Getting started is simple:

1. Create a new `.md` file in the `src/posts/` directory
2. Add frontmatter at the top with your post metadata
3. Run `npm run generate-posts` to update the manifest
4. Your post is now live! 🎉

## Frontmatter Reference

Every post starts with YAML frontmatter:

```yaml
---
title: "Your Post Title"
date: 2026-02-02
description: "A brief description of your post"
author: "Your Name"
tags: ["javascript", "react"]
published: true
---
```

## Markdown Features

devblog supports all standard Markdown features:

- **Bold text** and *italic text*
- [Links](https://github.com/aymen94/devblog)
- Code blocks with syntax highlighting
- Lists, quotes, tables, and more

### Code Example

```javascript
// devblog makes blogging simple
const devblog = {
  fast: true,
  beautiful: true,
  developerFriendly: true
};

console.log("Welcome to devblog! ⚡");
```

> 💡 **Pro Tip:** Set `published: false` in the frontmatter to save a post as a draft.

## What's Next?

1. **Customize** — Edit `src/styles/global.css` to match your style
2. **Write** — Create new posts in the `src/posts/` directory
3. **Deploy** — Ship to Vercel, Netlify, or any static host
4. **Share** — Tell the world about your blog!

---

Happy writing! 🚀
