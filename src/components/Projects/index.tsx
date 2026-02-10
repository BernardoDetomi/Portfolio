import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, ChevronRight } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import { PROJECT_DATA } from '../../data';
import type { Project } from '../../data';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 shadow-lg transition-all"
    >
      <div
        className="h-48 w-full relative overflow-hidden"
        style={{ background: project.image }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-950/60 backdrop-blur-sm gap-4">
          <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition-colors" title="Ver Site">
            <ExternalLink size={20} />
          </a>
          <a href={project.repo} className="p-3 bg-neutral-800 text-white rounded-full hover:bg-orange-500 transition-colors" title="Ver Código">
            <Code2 size={20} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">{project.title}</h3>
        <p className="text-neutral-400 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-neutral-800 text-neutral-300 rounded border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <SectionHeader title="Projetos Recentes" subtitle="Uma seleção dos trabalhos mais impactantes que desenvolvi." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_DATA.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/BernardoDetomi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors">
            Ver todos os repositórios no GitHub <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
