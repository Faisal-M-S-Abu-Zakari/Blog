interface Author {
  name: string;
  bio: string;
  avatar: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: Author;
  image: string;
  relatedPosts?: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
  }[];
}

export type { BlogPost };
