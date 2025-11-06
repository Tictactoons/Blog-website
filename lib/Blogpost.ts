export type BlogPost = {
  id: string;
  title: string;
  date: string;
  category: string[];
  image: string; // URL to the blog image
  excerpt: string;
  slug: string; // for routing to post
  writer: string;
};

const posts: BlogPost[] = [
  {
    id: "1",
    title: "UX Review Presentations",
    date: "Sunday, 1 Jan 2023",
    category: ["Design", "UX", "AI", "Research"],
    image: "/images/featured.jpg",
    excerpt:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    slug: "featured-blog-post",
    writer: "Ajao Kolawole",
  },
  {
    id: "2",
    title: "Migrating to Linear 101",
    date: "Sunday, 1 Jan 2023",
    category: ["Productivity", "SaaS"],
    image: "/images/post2.jpg",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started...",
    slug: "migrating-to-linear-101",
    writer: "Adams Bankole",
  },
  {
    id: "3",
    title: "Building Your API Stack",
    date: "Monday, 2 Jan 2023",
    category: ["Development", "API", "Tools"],
    image: "/images/post3.jpg",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them efficiently.",
    slug: "building-your-api-stack",
    writer: "Fola Sumbo",
  },
  {
    id: "4",
    title: "Design Systems in 2025",
    date: "Wednesday, 4 Jan 2023",
    category: ["Design", "UI/UX", "Trends"],
    image: "/images/post4.png",
    excerpt:
      "Discover how modern design systems are shaping collaboration and creativity in product teams.",
    slug: "design-systems-2025",
    writer: "Ifeanyi Umeh",
  },
  {
    id: "5",
    title: "Understanding Server Components in Next.js",
    date: "Thursday, 5 Jan 2023",
    category: ["Web Development", "Next.js", "React"],
    image: "/images/post5.jpg",
    excerpt:
      "Next.js server components simplify your app architecture. Here’s how they actually work under the hood.",
    slug: "understanding-server-components-nextjs",
    writer: "Isaiah Onans",
  },
  {
    id: "6",
    title: "Why Accessibility Matters",
    date: "Friday, 6 Jan 2023",
    category: ["Accessibility", "Design", "Web"],
    image: "/images/post6.jpg",
    excerpt:
      "Accessibility ensures everyone can use your product effectively. Learn the core principles and practices.",
    slug: "why-accessibility-matters",
    writer: "Aisha Bello",
  },
  {
    id: "7",
    title: "Data-Driven Marketing Strategies",
    date: "Saturday, 7 Jan 2023",
    category: ["Marketing", "Analytics", "Business"],
    image: "/images/post7.jpg",
    excerpt:
      "Leverage analytics to drive personalized campaigns and improve customer engagement.",
    slug: "data-driven-marketing-strategies",
    writer: "John Doe",
  },
  {
    id: "8",
    title: "Mastering Tailwind CSS for Modern Design",
    date: "Sunday, 8 Jan 2023",
    category: ["Design", "Frontend", "TailwindCSS"],
    image: "/images/post8.jpg",
    excerpt:
      "Tailwind CSS gives developers superpowers to create elegant UIs faster than ever before.",
    slug: "mastering-tailwind-css-modern-design",
    writer: "Faith Adeyemi",
  },
  {
    id: "9",
    title: "Automation in the Age of AI",
    date: "Monday, 9 Jan 2023",
    category: ["AI", "Automation", "Technology"],
    image: "/images/post9.jpg",
    excerpt:
      "Explore how automation and artificial intelligence are reshaping workflows and creativity.",
    slug: "automation-in-the-age-of-ai",
    writer: "David Ojo",
  },
  {
    id: "10",
    title: "Getting Started with TypeScript",
    date: "Tuesday, 10 Jan 2023",
    category: ["Programming", "JavaScript", "TypeScript"],
    image: "/images/post10.jpg",
    excerpt:
      "TypeScript makes JavaScript more reliable. Here’s a beginner’s guide to using it effectively.",
    slug: "getting-started-with-typescript",
    writer: "Chioma Ikenna",
  },
  {
    id: "11",
    title: "The Psychology of User Experience",
    date: "Wednesday, 11 Jan 2023",
    category: ["UX", "Psychology", "Design Thinking"],
    image: "/images/post11.jpg",
    excerpt:
      "Understanding user behavior is key to designing experiences that feel natural and engaging.",
    slug: "psychology-of-user-experience",
    writer: "Ayo Badmus",
  },
  {
    id: "12",
    title: "SEO in 2025: What Still Works",
    date: "Thursday, 12 Jan 2023",
    category: ["SEO", "Marketing", "Content Strategy"],
    image: "/images/post12.jpg",
    excerpt:
      "From backlinks to page speed — here’s what really matters for search rankings in 2025.",
    slug: "seo-in-2025-what-still-works",
    writer: "Juliet Eze",
  },
  {
    id: "13",
    title: "Creating a Personal Brand Online",
    date: "Friday, 13 Jan 2023",
    category: ["Branding", "Social Media", "Business"],
    image: "/images/post13.jpg",
    excerpt:
      "Learn the steps to craft a personal brand that stands out on LinkedIn, Twitter, and beyond.",
    slug: "creating-a-personal-brand-online",
    writer: "Tunde Adebayo",
  },
  {
    id: "14",
    title: "Integrating APIs in React Applications",
    date: "Saturday, 14 Jan 2023",
    category: ["React", "API", "Development"],
    image: "/images/post14.jpg",
    excerpt:
      "APIs power modern apps. Here’s how to integrate them smoothly in your React projects.",
    slug: "integrating-apis-in-react-applications",
    writer: "Blessing Ogundipe",
  },
  {
    id: "15",
    title: "The Future of Remote Work",
    date: "Sunday, 15 Jan 2023",
    category: ["Remote Work", "Business", "Productivity"],
    image: "/images/post15.jpg",
    excerpt:
      "Remote work is here to stay — but how can teams stay connected and productive?",
    slug: "future-of-remote-work",
    writer: "Michael Adekunle",
  },
  {
    id: "16",
    title: "Healthy Habits for Remote Workers",
    date: "Monday, 16 Jan 2023",
    category: ["Health", "Lifestyle", "Remote Work"],
    image: "/images/post16.jpg",
    excerpt:
      "Balance work and wellness with these actionable routines for remote professionals.",
    slug: "healthy-habits-for-remote-workers",
    writer: "Okpara Michael",
  },
  {
    id: "17",
    title: "Sustainable Business Practices in 2025",
    date: "Tuesday, 17 Jan 2023",
    category: ["Sustainability", "Business", "Innovation"],
    image: "/images/post17.jpg",
    excerpt:
      "Sustainability is shaping modern business decisions — here’s how companies can adapt.",
    slug: "sustainable-business-practices-2025",
    writer: "David Sanjo",
  },
];

export default posts;
