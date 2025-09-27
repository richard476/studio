
import { Github, Linkedin, Mail } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'GraphQL',
  'PostgreSQL',
  'Firebase',
  'Tailwind CSS',
  'Figma',
  'Docker',
];

export const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with a custom CMS, payment integration, and a responsive user interface built with Next.js.',
    image: placeholderImages.find(p => p.id === "project-1")?.imageUrl ?? "",
    imageHint: placeholderImages.find(p => p.id === "project-1")?.imageHint ?? "ecommerce website",
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively, featuring real-time updates with Firebase.',
    image: placeholderImages.find(p => p.id === "project-2")?.imageUrl ?? "",
    imageHint: placeholderImages.find(p => p.id === "project-2")?.imageHint ?? "dashboard app",
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Personal Blog',
    description: 'A lightweight, static-generated blog created with Next.js and Markdown, focused on performance and SEO.',
    image: placeholderImages.find(p => p.id === "project-3")?.imageUrl ?? "",
    imageHint: placeholderImages.find(p => p.id === "project-3")?.imageHint ?? "blog website",
    liveUrl: '#',
    repoUrl: '#',
  },
    {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, built with React and D3.js, providing insightful analytics.',
    image: placeholderImages.find(p => p.id === "project-4")?.imageUrl ?? "",
    imageHint: placeholderImages.find(p => p.id === "project-4")?.imageHint ?? "analytics dashboard",
    liveUrl: '#',
    repoUrl: '#',
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'Mail',
    url: 'mailto:richard.abishekraj@email.com',
    icon: Mail,
  },
];
