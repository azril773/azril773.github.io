export const profile = {
  name: 'Mohammad Azril Sugiarto',
  shortName: 'Azril',
  role: 'Software Engineer',
  tagline: 'Backend-focused. Systems-obsessed. Results-driven.',
  location: 'Cirebon / Tasikmalaya, Indonesia',
  email: 'azrilsugiarto06@gmail.com',
  phone: '+62 8953 8320 8655',
  github: 'github.com/azril773',
  githubUrl: 'https://github.com/azril773',
  bio: 'Backend-focused Software Engineer with 5 years of experience delivering impactful technical solutions. I specialize in building and optimizing RESTful APIs, designing scalable architecture, and migrating legacy systems — with a track record of measurable performance improvements.',
}

export const stats = [
  { value: '5', label: 'Years experience', suffix: 'yrs' },
  { value: '98', label: 'Processing time reduced', suffix: '%' },
  { value: '83', label: 'Efficiency improvement', suffix: '%' },
  { value: '10+', label: 'Technologies mastered', suffix: '' },
]

export const skills: Record<string, { label: string; items: string[]; color: string }> = {
  backend: {
    label: 'Backend',
    color: 'sage',
    items: ['NestJS', 'Node.js', 'Go', 'PHP', 'Python', 'Django'],
  },
  frontend: {
    label: 'Frontend',
    color: 'gold',
    items: ['ReactJS', 'AngularJS', 'TypeScript', 'HTML/CSS'],
  },
  database: {
    label: 'Database',
    color: 'sage',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  devops: {
    label: 'DevOps',
    color: 'gold',
    items: ['Docker', 'Nginx', 'Git', 'REST API'],
  },
}

export const experiences = [
  {
    company: 'PT Asia Tritunggal Jaya',
    role: 'Software Engineer',
    period: 'June 2024 – Present',
    type: 'Full-time',
    highlights: [
      { metric: '83%', label: 'Attendance processing efficiency gain' },
    ],
    achievements: [
      'Led backend optimization initiatives across core business systems',
      'Developed inventory management system replacing legacy solution',
      'Executed data migration project handling inconsistent data & schema mismatches',
      'Set up production infrastructure using Docker & Nginx',
    ],
  },
  {
    company: 'PT Cirebon Digital Solution',
    role: 'Freelance Web Developer',
    period: 'Dec 2024 – Oct 2025',
    type: 'Freelance',
    highlights: [],
    achievements: [
      'Translated UI/UX designs into responsive AngularJS components',
      'Delivered multiple client projects focused on data efficiency',
      'Improved UX across various business web applications',
    ],
  },
  {
    company: 'PT Fath Technology Solution',
    role: 'Software Engineer Intern',
    period: 'Dec 2023 – Apr 2024',
    type: 'Internship',
    highlights: [],
    achievements: [
      'Developed full-stack web application using NestJS + ReactJS',
      'Implemented semi-monolithic architecture for scalability',
      'Collaborated with senior engineers on system design decisions',
    ],
  },
]

export const projects = [
  {
    name: 'Stock Opname System',
    description: 'Inventory counting application that eliminated manual spreadsheet processes.',
    impact: '98% reduction in processing time',
    tags: ['NestJS', 'PostgreSQL', 'ReactJS'],
    type: 'Backend',
  },
  {
    name: 'Attendance Optimization',
    description: 'Redesigned attendance processing pipeline with smarter data handling.',
    impact: '83% efficiency improvement',
    tags: ['Node.js', 'Redis', 'REST API'],
    type: 'Backend',
  },
  {
    name: 'Legacy Data Migration',
    description: 'Migrated production data from legacy systems handling complex edge cases.',
    impact: 'Zero data loss in production',
    tags: ['Go', 'PostgreSQL', 'Docker'],
    type: 'Infrastructure',
  },
  {
    name: 'Inventory Management System',
    description: 'Full replacement of legacy inventory system with modern architecture.',
    impact: 'Replaced legacy system',
    tags: ['NestJS', 'MySQL', 'Docker', 'Nginx'],
    type: 'Full-stack',
  },
]
