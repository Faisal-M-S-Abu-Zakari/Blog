export const post = {
  id: "1",
  title: "Getting Started with Next.js 14",
  excerpt:
    "Learn how to build modern web applications with Next.js 14 and React Server Components.",
  content: `
      <p>Next.js is a powerful React framework that enables you to build full-stack web applications. With the release of Next.js 14, developers now have access to even more powerful features and optimizations.</p>
      
      <h2>What's New in Next.js 14?</h2>
      
      <p>Next.js 14 introduces several new features and improvements:</p>
      
      <ul>
        <li>Improved developer experience with faster refresh times</li>
        <li>Enhanced Server Components support</li>
        <li>Better image optimization</li>
        <li>Improved routing capabilities</li>
        <li>More efficient bundling</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>To create a new Next.js 14 project, you can use the following command:</p>
      
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new Next.js project with all the latest features and configurations.</p>
      
      <h2>Understanding React Server Components</h2>
      
      <p>React Server Components are a new way to build React applications that leverage the server to improve performance and user experience. With Server Components, you can:</p>
      
      <ul>
        <li>Reduce the amount of JavaScript sent to the client</li>
        <li>Improve initial page load performance</li>
        <li>Simplify data fetching</li>
        <li>Maintain a clean separation of concerns</li>
      </ul>
      
      <p>In Next.js 14, Server Components are the default, making it easier than ever to build performant applications.</p>
      
      <h2>Conclusion</h2>
      
      <p>Next.js 14 represents a significant step forward for React development, providing developers with powerful tools to build modern, performant web applications. Whether you're building a simple blog or a complex e-commerce platform, Next.js 14 has the features you need to succeed.</p>
    `,
  date: "May 5, 2025",
  readTime: "8 min read",
  category: "Development",
  tags: ["Next.js", "React", "Web Development", "JavaScript"],
  author: {
    name: "Sarah Johnson",
    bio: "Senior Frontend Developer with 8 years of experience specializing in React and Next.js.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  image: "/placeholder.svg?height=600&width=1200",
  relatedPosts: [
    {
      id: "2",
      title: "Understanding React Server Components",
      excerpt:
        "Dive deep into React Server Components and learn how they can improve your application performance.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      title: "Mastering Tailwind CSS",
      excerpt:
        "Learn how to build beautiful user interfaces with Tailwind CSS utility classes.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
};
