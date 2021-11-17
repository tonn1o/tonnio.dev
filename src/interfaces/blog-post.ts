export interface BlogPost {
  id: string;
  slug: string;
  excerpt: string;
  timeToRead: number;
  body: string;
  frontmatter: {
    title: string;
    date: string;
  };
}
