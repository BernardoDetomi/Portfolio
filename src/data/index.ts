export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  screenshot?: string;
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
    title: "Eletrov - Energia Solar",
    description: "Site institucional desenvolvido para a Eletrov, empresa especializada na venda e instalação de painéis solares. Design moderno focado em conversão e apresentação dos serviços.",
    tags: ["Next.js 15", "TypeScript", "React 19", "Tailwind CSS 4", "Framer Motion"],
    image: "linear-gradient(135deg, #0a4d1a 0%, #1a7a2e 100%)",
    screenshot: "/images/projects/eletrov.png",
    link: "https://eletrov.com",
    repo: "#"
  },
  {
    id: 2,
    title: "Sítio Cangumbim",
    description: "Site para divulgação e aluguel do Sítio Cangumbim. Apresenta fotos, informações sobre o espaço, localização e facilita o contato para reservas.",
    tags: ["Next.js 14", "TypeScript", "React 18", "Tailwind CSS", "Lucide Icons"],
    image: "linear-gradient(135deg, #2a1b0a 0%, #4a6b0f 100%)",
    screenshot: "/images/projects/sitiocangumbim.png",
    link: "https://sitiocangumbim.com.br",
    repo: "#"
  },
  {
    id: 3,
    title: "BarberizeApp",
    description: "Plataforma que reúne diversas barbearias em um só lugar, permitindo que clientes encontrem e agendem horários de forma prática e rápida. Em desenvolvimento.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
    image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    screenshot: "/images/projects/barberize.png",
    link: "https://barberize.uk",
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
