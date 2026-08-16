export const profile = {
  eyebrow: 'Data Engineer • Software Developer',
  name: 'Diogo Oike',
  headline: 'Building solutions and digital products with data',
  ctaPrimary: 'Browse projects',
  ctaSecondary: 'Get in touch',
  location: 'Brazil',
  availability: 'Full time position, freelance and technical collaborations',
  focusAreas: ['Python', 'Data Engineering', 'Software Development'],
  pipeline: ['COLLECT', 'STRUCTURE', 'DELIVER'],
  spotlightTitle: 'From data pipelines to useful interfaces',
  spotlightBody:
    'My work sits between engineering and clarity: collect information, structure it well, expose it with the right logic, and turn that into something a person can actually use.',
  noteTitle: 'Academic background',
  noteBody:
    'Graduated in Information Technology Management, with studies across software development, network infrastructure, systems processes, people management and business fundamentals.',
  principles: [
    {
      title: 'Automation first',
      body: 'I like to solve problems and tasks by building interfaces and automations that solve a real operational need.',
    },
    {
      title: 'Data driven',
      body: 'I rely on data, process signals and measurable outcomes to guide what gets built and what gets improved.',
    },
  ],
  stackTitle:
    'A profile shaped by software, data and implementation fundamentals.',
  stackBody:
    'The strongest axis is Python and data-oriented problem solving, supported by web fundamentals and SQL.',
  contactTitle: 'Contact',
  contactBody:
    'If you are building a dashboard, automation, software service or data product, I am interested in collaborations where clean logic and practical delivery matter.',
}

export const portfolioProjects = [
  {
    id: 'repo-explainer',
    title: 'Repo Explainer',
    summary:
      'A tool that analyzes a public GitHub repository and uses Google Gemini to generate a flowchart, an architecture diagram and a summary of how the codebase works.',
    category: 'AI Tooling',
    year: '2026',
    stack: ['Python', 'FastAPI', 'React', 'Google Gemini'],
    demoUrl: 'https://repo-explainer-weld.vercel.app',
    repoUrl: 'https://github.com/Dnaka27/repo-explainer',
    featured: true,
  },
  {
    id: 'rag-gemini',
    title: 'RAG Gemini',
    summary:
      'A retrieval-augmented generation system built with Python and Google Gemini using embeddings to improve contextual question answering.',
    category: 'Artificial Intelligence',
    year: '2025',
    stack: ['Python', 'Google Gemini', 'Embeddings'],
    demoUrl: 'https://rag-gemini-embedding.vercel.app',
    repoUrl: 'https://github.com/Dnaka27/RAG-Gemini-embedding',
    featured: true,
  },
  {
    id: 'cv-hand-controller',
    title: 'CV Hand Controller',
    summary:
      'A computer-vision hand gesture controller using real-time tracking to drive interactions and system inputs.',
    category: 'Computer Vision',
    year: '2025',
    stack: ['Python', 'MediaPipe', 'PyAutoGUI'],
    demoUrl: null,
    repoUrl: 'https://github.com/Dnaka27/Computer_vision-Hand_control',
    featured: false,
  },
  {
    id: 'cyber-attacks',
    title: 'Cyber Attacks',
    summary:
      'A cyber attacks analysis application using a Kaggle dataset, built with Python and Streamlit.',
    category: 'Data Science',
    year: '2026',
    stack: ['Python', 'Streamlit', 'Data Analysis'],
    demoUrl: null,
    repoUrl: 'https://github.com/Dnaka27/cyber-attacks-dashboard',
    featured: false,
  },
]

export const skillGroups = [
  {
    title: 'Soft Skills',
    skills: ['Teamwork', 'Emotional Intelligence', 'Communication', 'Adaptability'],
  },
  {
    title: 'Hard Skills',
    skills: [
      {
        label: 'Web Development',
        items: ['HTML, CSS, JavaScript', 'React, Node.js'],
      },
      {
        label: 'Data Engineering',
        items: ['Python, SQL', 'Pandas, Spark', 'Airflow'],
      },
    ],
  },
  {
    title: 'Academic Foundations',
    skills: [
      'Information Technology Management',
      'Network Infrastructure',
      'Systems Development Processes',
      'People Management',
      'Economic and Financial Management',
      'Process Management'
    ],
  },
]

export const certificates = [
  'Google AI Essentials',
  'Databricks Fundamentals',
  'Datacamp Azure Introduction',
  'DIO Amazon Web Services',
  'DIO Potencia Tech Data Science',
  'Coursera Google Data Analytics',
  'Udemy Python Bootcamp',
  'Cubos Academy Data Analysis',
]

export const socialLinks = [
  {
    label: 'Email',
    value: 'diogooikejapan@gmail.com',
    href: 'mailto:diogooikejapan@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Dnaka27',
    href: 'https://github.com/Dnaka27',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/diogo-oike-kanefuku',
    href: 'https://www.linkedin.com/in/diogo-oike-kanefuku/',
  },
]
