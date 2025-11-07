// lib/project.ts
export type Project = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    slug: "personal-portfolio",
    excerpt:
      "A modern personal portfolio built with Next.js, Tailwind CSS, and shadcn/ui components.",
    image: "/images/my.png",
    category: ["Web Development", "Frontend", "Next.js"],
  },
  {
    id: 2,
    title: "Food Content Creator Landing Page",
    slug: "food-creator-landing",
    excerpt:
      "A stylish landing page for a food content creator, integrating email capture and SEO optimization.",
    image: "/images/post2.jpg",
    category: ["UI/UX Design", "Branding", "Content Strategy"],
  },
  {
    id: 3,
    title: "Email Automation Dashboard",
    slug: "email-automation-dashboard",
    excerpt:
      "A dashboard app that connects marketing automation workflows via APIs like Mailchimp and Zapier.",
    image: "/images/featured.jpg",
    category: ["Automation", "Email Marketing", "Dashboard UI"],
  },
  {
    id: 4,
    title: "Tech Blog Website",
    slug: "tech-blog",
    excerpt:
      "A fully responsive blog platform for sharing tech tutorials, using Next.js and Sanity CMS.",
    image: "/images/post3.jpg",
    category: ["Web Development", "Blogging", "Content Management"],
  },
  {
    id: 5,
    title: "Freelance Services Site",
    slug: "freelance-services",
    excerpt:
      "A portfolio site showcasing freelance services and client testimonials with a contact form.",
    image: "/images/post5.jpg",
    category: ["Freelancing", "Personal Branding", "UI Design"],
  },
  {
    id: 6,
    title: "AI Workflow Builder",
    slug: "ai-workflow-builder",
    excerpt:
      "A visual tool for building and connecting AI automations using OpenAI and no-code APIs.",
    image: "/images/post4.jpg",
    category: ["AI Automation", "No-code", "APIs"],
  },
  {
    id: 7,
    title: "Social Media Analytics Dashboard",
    slug: "social-analytics",
    excerpt:
      "An interactive analytics dashboard to monitor engagement metrics across platforms.",
    image: "/images/post8.jpg",
    category: ["Marketing Tech", "Data Visualization", "Analytics"],
  },
  {
    id: 8,
    title: "Startup Pitch Website",
    slug: "startup-pitch",
    excerpt:
      "A sleek one-page website designed for startups to showcase products and collect leads.",
    image: "/images/post9.jpg",
    category: ["Branding", "Product Design", "Landing Page"],
  },
  {
    id: 9,
    title: "Workflow Automation Portfolio",
    slug: "workflow-portfolio",
    excerpt:
      "A portfolio showcasing automated workflows built with Make.com and Zapier.",
    image: "/images/workflow.png",
    category: ["No-code", "Automation", "Portfolio"],
  },
];
