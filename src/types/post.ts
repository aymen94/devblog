export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  published: boolean;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

export interface PostSummary extends PostMeta {
  excerpt: string;
}
