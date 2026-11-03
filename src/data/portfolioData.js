export const profile = {
  eyebrow: 'Data Engineer • Software Developer',
  name: 'Diogo Oike',
  headline: 'Building solutions and digital products with data',
  ctaPrimary: 'Browse projects',
  ctaSecondary: 'Get in touch',
  location: 'Brazil',
  availability: 'Full time position, freelance and technical collaborations',
  pipeline: ['COLLECT', 'STRUCTURE', 'DELIVER'],
  spotlightBody:
    'My work sits between engineering and clarity: collect information, structure it well, expose it with the right logic, and turn that into something a person can actually use.',
  contactTitle: 'Contact',
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
    title: 'Cyber Attacks Dashboard',
    summary:
      'An interactive dashboard analyzing the financial and market impact of cyber attacks from a Kaggle dataset, with client-side filtering across attack vectors, sectors and stock market reaction.',
    category: 'Data Visualization',
    year: '2026',
    stack: ['React', 'Vite', 'Plotly.js'],
    demoUrl: 'https://cyber-attacks-dashboard.vercel.app',
    repoUrl: 'https://github.com/Dnaka27/cyber-attacks-dashboard',
    featured: true,
  },
]

// Two parallel paths, each listed oldest first.
export const background = [
  {
    id: 'academic',
    title: 'Academic',
    steps: [
      {
        id: 'technologist',
        period: 'Graduation · 2021 – 2025',
        title: 'Information Technology Management',
        subjects: [
          {
            title: 'Software development',
            topics: [
              { label: 'Programming logic', stack: ['C++'] },
              { label: 'Object-oriented programming', stack: ['Java'] },
              { label: 'Web development', stack: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
              { label: 'Systems development' },
            ],
          },
          {
            title: 'Data',
            topics: [
              { label: 'Databases', stack: ['SQL'] },
              { label: 'Data science fundamentals', stack: ['Python'] },
            ],
          },
          {
            title: 'Infrastructure and security',
            summary: 'Operating systems, networks and cybersecurity basics.',
          },
          {
            title: 'Management',
            summary: 'People, process, finance and auditing.',
          },
        ],
      },
      {
        id: 'mba',
        period: 'Postgraduate · 2026 – In progress',
        title: 'MBA in Data Science and Artificial Intelligence',
        subjects: [
          {
            title: 'Data science',
            stack: ['Python', 'R'],
            summary: 'Data mining, predictive analytics, ML and neural networks.',
          },
          {
            title: 'Infrastructure',
            summary: 'Cloud computing and big data.',
          },
          {
            title: 'Applied AI',
            summary: 'AI in business, RPA and decision support.',
          },
          {
            title: 'Management',
            summary: 'BI and strategy.',
          },
        ],
      },
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    steps: [
      {
        id: 'equal',
        period: 'Apr 2024 – Oct 2025',
        title: 'BI Analyst and Data Engineer',
        org: 'Equal BI',
        place: 'Florianópolis · Hybrid',
        context: 'ABC EVO: analytics for 2,000+ gyms across Latin America.',
        subjects: [
          {
            title: 'Data engineering',
            topics: [
              { label: 'Cloud ETL pipelines', stack: ['SQL', 'Python', 'Azure'] },
              { label: 'Async API ingestion into a Medallion Bronze layer' },
              { label: 'Data validation and monitoring', stack: ['PySpark', 'Pandas'] },
            ],
          },
          {
            title: 'Cloud',
            topics: [
              { label: 'VM runtime and cost optimization', stack: ['Azure Virtual Machines'] },
              { label: 'Multi-cloud data integration', stack: ['GCP', 'BigQuery', 'Compute Engine'] },
            ],
          },
          {
            title: 'BI',
            topics: [
              { label: 'Data modeling and dashboards', stack: ['DAX', 'Power BI'] },
            ],
          },
        ],
      },
      {
        id: 'ilha-service',
        period: 'Oct 2025 – Apr 2026',
        title: 'Data Engineer and Systems Analyst',
        org: 'Ilha Service',
        place: 'Florianópolis · On-site',
        context: 'Client: Santa Catarina State Health Department.',
        subjects: [
          {
            title: 'Data engineering',
            topics: [
              { label: 'ETL from REST APIs', stack: ['Python', 'PostgreSQL'] },
              { label: 'Event-driven ingestion', stack: ['Kafka'] },
              { label: 'Orchestration', stack: ['Airflow', 'Pentaho'] },
              { label: 'Web scraping', stack: ['Requests', 'BeautifulSoup'] },
            ],
          },
          {
            title: 'BI',
            topics: [
              { label: 'Views and aggregate tables', stack: ['Pandas', 'PySpark', 'Power BI'] },
            ],
          },
        ],
      },
    ],
  },
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
