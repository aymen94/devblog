export const siteConfig = {
  // Site Information
  title: "DevBlog",
  description: "A blazing-fast, developer-first blogging platform",
  author: "Aymen Naghmouchi",
  
  // URLs
  siteUrl: "https://yourdomain.com",
  githubUrl: "https://github.com/aymen94",
  xrUrl: "", // Leave empty to hide
  linkedinUrl: "", // Leave empty to hide
  
  // Navigation
  nav: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ],
  
  // Features
  postsPerPageValue: 10,
  showReadingTime: true,
  showAuthor: true,
  showTags: true,
  
  // SEO
  defaultOgImage: "/og-image.png",
  twitterHandle: "@yourusername",
  
  // Theme
  defaultTheme: "dark", // "dark" | "light" | "system"
};
