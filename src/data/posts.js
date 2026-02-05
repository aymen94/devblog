export const posts = [
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    date: '2024-01-15',
    excerpt: 'Learn the basics of React and start building modern web applications.',
    tags: ['React', 'JavaScript', 'Frontend'],
    content: `
# Getting Started with React

React is a popular JavaScript library for building user interfaces.

## Why React?

- Component-based architecture
- Virtual DOM for performance
- Large ecosystem and community

## Your First Component

\`\`\`jsx
function Hello() {
  return <h1>Hello, World!</h1>;
}
\`\`\`
    `
  },
  {
    slug: 'understanding-javascript-promises',
    title: 'Understanding JavaScript Promises',
    date: '2024-01-10',
    excerpt: 'A deep dive into JavaScript Promises and async/await patterns.',
    tags: ['JavaScript', 'Async', 'Web Development'],
    content: `
# Understanding JavaScript Promises

Promises are a powerful way to handle asynchronous operations in JavaScript.

## What is a Promise?

A Promise represents a value that may be available now, later, or never.

## Basic Usage

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000);
});

promise.then(result => console.log(result));
\`\`\`
    `
  },
  {
    slug: 'css-grid-layout-guide',
    title: 'CSS Grid Layout Guide',
    date: '2024-01-05',
    excerpt: 'Master CSS Grid and create complex layouts with ease.',
    tags: ['CSS', 'Frontend', 'Web Development'],
    content: `
# CSS Grid Layout Guide

CSS Grid is a two-dimensional layout system for the web.

## Basic Grid

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
\`\`\`
    `
  },
  {
    slug: 'nodejs-best-practices',
    title: 'Node.js Best Practices',
    date: '2024-01-01',
    excerpt: 'Learn the best practices for building scalable Node.js applications.',
    tags: ['Node.js', 'JavaScript', 'Backend'],
    content: `
# Node.js Best Practices

Building scalable and maintainable Node.js applications.

## Project Structure

Keep your code organized with a clear folder structure.

## Error Handling

Always handle errors properly in async operations.
    `
  }
];
