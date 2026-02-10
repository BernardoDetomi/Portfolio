export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  repo: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Certification {
  title: string;
  issuer: string;
  image: string;
}

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Painel administrativo completo com gráficos em tempo real, gestão de estoque e análise de vendas. Focado em performance e UX.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    link: "#",
    repo: "#"
  },
  {
    id: 2,
    title: "SaaS Financeiro",
    description: "Aplicação para gestão financeira pessoal com integração bancária (Open Finance) e categorização automática via IA.",
    tags: ["React", "Node.js", "PostgreSQL", "OpenAI API"],
    image: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    link: "#",
    repo: "#"
  },
  {
    id: 3,
    title: "Social Network App",
    description: "Rede social focada em desenvolvedores. Features incluem feed em tempo real, chat via WebSockets e editor de código compartilhado.",
    tags: ["Vue.js", "Firebase", "Tailwind", "WebSockets"],
    image: "linear-gradient(135deg, #2a1b0a 0%, #4a2b0f 100%)",
    link: "#",
    repo: "#"
  }
];

export const SKILLS_DATA: { frontend: Skill[]; backend: Skill[] } = {
  frontend: [
    { name: "React", level: 80 },
    { name: "Next.js", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Sass/SCSS", level: 70 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Java", level: 75 },
    { name: "PHP", level: 70 },
    { name: "C/C++", level: 75 },
    { name: "SQL/MySQL", level: 75 },
    { name: "Firebase", level: 80 },
  ]
};

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "RocketSeat - Nível Iniciante",
    issuer: "RocketSeat",
    image: "/images/certificados/certificateRocketSeatIniciante.jpg"
  },
  {
    title: "RocketSeat - Nível Intermediário",
    issuer: "RocketSeat",
    image: "/images/certificados/certificateRocketSeatIntermediario.jpg"
  },
  {
    title: "JavaScript",
    issuer: "Curso Online",
    image: "/images/certificados/javascript.jpg"
  },
  {
    title: "Lógica de Programação Avançada",
    issuer: "Curso Online",
    image: "/images/certificados/logicaavancada.jpg"
  },
  {
    title: "PHP",
    issuer: "Curso Online",
    image: "/images/certificados/php.jpg"
  },
  {
    title: "Certificado Complementar",
    issuer: "Curso Online",
    image: "/images/certificados/certificado.jpeg"
  }
];

export const SOFT_SKILLS = [
  'Git/GitHub',
  'Agile/Scrum',
  'Vercel',
  'Figma',
  'Clean Code',
  'Comunicação',
  'Liderança Técnica',
  'Linux',
  'VS Code',
  'REST APIs',
  'TypeScript',
  'Sass/SCSS',
  'Trabalho em Equipe',
  'Resolução de Problemas',
  'Power BI',
  'CorelDraw',
  'Photoshop',
  'Pacote Office',
];
