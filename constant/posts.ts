// constant/staticBlog.ts
export const posts = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to build modern web applications with Next.js 15 and React Server Components.",
    content:
      "<p>Learn how to build modern web applications with Next.js 15 and React Server Components. This post covers the basics and advanced features.</p>", // Added fallback
    date: "May 5, 2025",
    readTime: "8 min read",
    category: "Development",
    tags: ["Next.js", "React"], // Added fallback
    author: {
      name: "Sarah Johnson",
      bio: "Sarah is a frontend developer passionate about modern web technologies.", // Added fallback
      avatar: "/sarah.webp",
    },
    image: "/nextjs.jpg",
    relatedPosts: [
      // Added sample related posts
      {
        id: "2",
        title: "Understanding React Server Components",
        excerpt: "Dive deep into React Server Components.",
        image: "/react.png",
      },
      {
        id: "5",
        title: "Introduction to TypeScript",
        excerpt: "Learn the basics of TypeScript.",
        image: "/typescript.png",
      },
    ],
  },
  {
    id: "2",
    title: "Understanding React Server Components",
    excerpt:
      "Dive deep into React Server Components and learn how they can improve your application performance.",
    content:
      "<p>Dive deep into React Server Components and learn how they can improve your application performance.</p>", // Added fallback
    date: "May 2, 2025",
    readTime: "6 min read",
    category: "React",
    tags: ["React", "Server Components"], // Added fallback
    author: {
      name: "Michael Chen",
      bio: "Michael is a full-stack developer with expertise in React.", // Added fallback
      avatar: "/michael.jpeg",
    },
    image: "/react.png",
    relatedPosts: [
      {
        id: "1",
        title: "Getting Started with Next.js 15",
        excerpt: "Learn how to build modern web applications.",
        image: "/nextjs.jpg",
      },
      {
        id: "6",
        title: "State Management with Redux Toolkit",
        excerpt: "Simplify your Redux code.",
        image: "/redux.png",
      },
    ],
  },
  {
    id: "3",
    title: "Mastering Tailwind CSS",
    excerpt:
      "Learn how to build beautiful user interfaces with Tailwind CSS utility classes.",
    content:
      "<p>Learn how to build beautiful user interfaces with Tailwind CSS utility classes.</p>", // Added fallback
    date: "April 28, 2025",
    readTime: "5 min read",
    category: "CSS",
    tags: ["Tailwind", "CSS"], // Added fallback
    author: {
      name: "Emily Rodriguez",
      bio: "Emily is a UI/UX designer and developer.", // Added fallback
      avatar: "/emily.webp",
    },
    image: "/css.png",
    relatedPosts: [
      {
        id: "1",
        title: "Getting Started with Next.js 15",
        excerpt: "Learn how to build modern web applications.",
        image: "/nextjs.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Building a REST API with Node.js",
    excerpt:
      "A comprehensive guide to building robust REST APIs with Node.js and Express.",
    content:
      "<p>A comprehensive guide to building robust REST APIs with Node.js and Express.</p>", // Added fallback
    date: "April 25, 2025",
    readTime: "10 min read",
    category: "Backend",
    tags: ["Node.js", "Express"], // Added fallback
    author: {
      name: "David Kim",
      bio: "David is a backend developer with a focus on APIs.", // Added fallback
      avatar: "/david.webp",
    },
    image: "/nodejs.jpg",
    relatedPosts: [
      {
        id: "5",
        title: "Introduction to TypeScript",
        excerpt: "Learn the basics of TypeScript.",
        image: "/typescript.png",
      },
    ],
  },
  {
    id: "5",
    title: "Introduction to TypeScript",
    excerpt:
      "Learn the basics of TypeScript and how it can improve your JavaScript development experience.",
    content:
      "<p>Learn the basics of TypeScript and how it can improve your JavaScript development experience.</p>", // Added fallback
    date: "April 20, 2025",
    readTime: "7 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript"], // Added fallback
    author: {
      name: "Jessica Lee",
      bio: "Jessica is a developer advocate for TypeScript.", // Added fallback
      avatar: "/Jessica.webp",
    },
    image: "/typescript.png",
    relatedPosts: [
      {
        id: "4",
        title: "Building a REST API with Node.js",
        excerpt: "A comprehensive guide to building REST APIs.",
        image: "/nodejs.jpg",
      },
    ],
  },
  {
    id: "6",
    title: "State Management with Redux Toolkit",
    excerpt:
      "Simplify your Redux code with Redux Toolkit and learn best practices for state management.",
    content:
      "<p>Simplify your Redux code with Redux Toolkit and learn best practices for state management.</p>", // Added fallback
    date: "April 15, 2025",
    readTime: "9 min read",
    category: "React",
    tags: ["Redux", "React"], // Added fallback
    author: {
      name: "Robert Johnson",
      bio: "Robert is a senior React developer.", // Added fallback
      avatar: "/Robert.webp",
    },
    image: "/redux.png",
    relatedPosts: [
      {
        id: "2",
        title: "Understanding React Server Components",
        excerpt: "Dive deep into React Server Components.",
        image: "/react.png",
      },
    ],
  },
];
