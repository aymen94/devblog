# Contributing to devblog

First off, thank you for considering contributing to devblog! 🎉

## Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming and inclusive environment. Please be respectful and constructive in all interactions.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- A clear and descriptive title
- Exact steps to reproduce the problem
- Expected behavior vs. actual behavior
- Screenshots if applicable
- Your environment (Node version, OS, browser)

### 💡 Suggesting Features

Feature suggestions are welcome! Please:

- Use a clear and descriptive title
- Provide a detailed description of the proposed feature
- Explain why this feature would be useful
- Include mockups or examples if applicable

### 🔧 Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests and linting
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/blog.git
cd blog

# Install dependencies
npm install

# Generate posts manifest
npm run generate-posts

# Start development server
npm run dev
```

### Coding Guidelines

- Follow the existing code style
- Use meaningful variable and function names
- Write comments for complex logic
- Keep components small and focused
- Use TypeScript types where applicable

### Commit Message Guidelines

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests when relevant

## Project Structure

```
devblog/
├── scripts/          # Build scripts
├── src/
│   ├── components/   # React components
│   ├── pages/        # Page components
│   ├── posts/        # Markdown blog posts
│   ├── styles/       # CSS styles
│   ├── types/        # TypeScript types
│   └── utils/        # Utility functions
└── ...
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you for contributing! ⚡
