
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
  'Python',
  'JavaScript',
  'HTML',
  'SQL',
  'Git',
  'Streamlit',
  'Uvicorn',
  'Google Cloud Platform',
  'VS Code',
  'Excel',
  'Power Bi',
  'Flask',
  'Three.js',
  'Tailwind CSS',
  'PDF.js',
  'Web Speech API',
  'Google Gemini API',
  'Pandas',
  'Numpy',
  'TensorFlow',
  'PyTorch',
  'Transformers',
  'FastAPI',
];

export const projects = [
  {
    id: 1,
    title: 'Advanced Text Summarization using NLP and Gemini API',
    description: [
      'Developed a full-stack AI-powered text summarization tool using Flask (Python) and Google Gemini API, enabling multi-mode summaries.',
      'Integrated advanced frontend features including speech-to-text, text-to-speech, drag-and-drop PDF/TXT uploads, offline caching, history with search, and customizable themes using Three.js, Tailwind CSS, and Web Speech API.',
      'Implemented export and accessibility options (PDF, DOCX, TXT, clipboard, read-aloud) with keyword highlighting, multi-language support, and interactive 3D/FX backgrounds for an engaging UX.',
    ],
    technologies: ['Python', 'HTML5', 'JavaScript', 'CSS3/Tailwind CSS', 'Gemini API'],
    image: placeholderImages.find(p => p.id === "project-1")?.imageUrl ?? "",
    imageHint: "natural language processing",
    repoUrl: 'https://github.com/richard476/Advanced-Text-Summarizer-using-Google_Gemini-API',
  },
  {
    id: 2,
    title: 'Cricket Team Management System using Machine Learning',
    description: [
      'Developed a Cricket Team Management System using Python and machine learning to optimize player selection and performance analysis.',
      'Built predictive models to forecast player performance, suggest team strategies, and reduce injury risks.',
      'Designed a modular architecture integrating ML models, database systems, and user roles for efficient team management workflows.',
    ],
    technologies: ['Python', 'CSS', 'SQL', 'HTML', 'PHP', 'JavaScript'],
    image: placeholderImages.find(p => p.id === "project-2")?.imageUrl ?? "",
    imageHint: "player statistics",
    repoUrl: 'https://github.com/richard476/Cricket-Team-management-System',
  },
  {
    id: 3,
    title: 'Advanced Music Player using Python',
    description: [
      'Local Music Player – Play and manage songs from your library with a clean Tkinter interface.',
      'Rich Features – Includes playlist, shuffle, repeat, search, volume control, and progress tracking.',
      'Enhanced Audio – Real-time equalizer presets powered by pygame, pydub, and ffmpeg.',
    ],
    technologies: ['Python', 'Tkinter', 'Pygame', 'Pydub', 'ffmpeg'],
    image: placeholderImages.find(p => p.id === "project-3")?.imageUrl ?? "",
    imageHint: "music player interface",
    repoUrl: 'https://github.com/richard476/Music-Player-using-Swift-for-IOS',
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/richard476',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/richard-abishekraj-34981a300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    icon: Linkedin,
  },
  {
    name: 'Mail',
    url: 'mailto:richardabishekraj@gmail.com',
    icon: Mail,
  },
];
