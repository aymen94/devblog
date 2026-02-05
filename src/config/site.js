export const siteConfig = {
  // Site Information
  title: "DevBlog",
  description: "A blazing-fast, developer-first blogging platform",
  author: "Your Name",
  
  // URLs
  siteUrl: "https://yourdomain.com",
  githubUrl: "https://github.com/yourusername",
  twitterUrl: "", // Leave empty to hide
  linkedinUrl: "", // Leave empty to hide
  
  // Navigation
  nav: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ],
  
  // Footer
  footerText: "Built with ❤️ using DevBlog",
  showSourceLink: true, // Show "View Source" link in footer
  
  // Features
  postsPerPage: 10,
  showReadingTime: true,
  showAuthor: true,
  showTags: true,
  
  // SEO
  defaultOgImage: "/og-image.png",
  twitterHandle: "@yourusername",
  
  // Theme
  defaultTheme: "dark", // "dark" | "light" | "system"
};
