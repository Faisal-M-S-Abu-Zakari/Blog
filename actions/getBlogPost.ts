// actions/getBlogPost.ts
import { BlogPost } from "@/@types/blogPost";
import { posts } from "@/constant/posts";

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const postChosen = posts.find((p: BlogPost) => p.id === id);
    return postChosen || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}
