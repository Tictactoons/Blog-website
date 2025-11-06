


export type BlogPost = {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string; // URL to the blog image
  excerpt: string;
  slug: string; // for routing to post
  writer: string;
};

 const posts: BlogPost[] = [
  {
    id: "1",
    title: "UX review presentations",
    date: "Sunday, 1 Jan 2023",
    category: "Research",
    image: "/images/featured.jpg",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    slug: "featured-blog-post",
    writer: "Ajao Kolawole",
  },
  {
    id: "2",
    title: "Migrating to Linear 101",
    date: "Sunday, 1 Jan 2023",
    category: "News",
    image: "/images/post2.jpg",
    excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    slug: "second-post",
    writer: "Adams Bankole",
  },
  {
    id: "3",
    title: "Building your API Stack",
    date: "Sunday, 1 Jan 2023",
    category: "Lifestyle",
    image: "/images/post3.jpg",
    excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    slug: "third-post",
    writer: "Fola Sumbo",
  },
];

export default posts;