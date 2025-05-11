export interface PostFormValues {
  title: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  featuredImage: File | null;
  isPublished: boolean;
  seoTitle: string;
  seoDescription: string;
}
