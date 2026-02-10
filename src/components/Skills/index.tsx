import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Terminal, Cpu } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import { SKILLS_DATA, CERTIFICATIONS_DATA, SOFT_SKILLS } from '../../data';
import type { Skill } from '../../data';

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  skills: Skill[];
}

const SkillCard = ({ icon: Icon, title, skills }: SkillCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-6 bg-neutral-900 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all shadow-lg"
  >
    <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-orange-500 mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-3">
      {skills.map((skill) => (
        <li key={skill.name} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-300">{skill.name}</span>
            <span className="text-neutral-500">{skill.level}%</span>
          </div>
          <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-orange-500 rounded-full"
            />
          </div>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <SectionHeader title="Stack Tecnológico" subtitle="Ferramentas e tecnologias que domino no dia a dia." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            icon={Layout}
            title="Front-End"
            skills={SKILLS_DATA.frontend}
          />
          <SkillCard
            icon={Server}
            title="Back-End"
            skills={SKILLS_DATA.backend}
          />

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 bg-neutral-900 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all shadow-lg flex flex-col"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-orange-500 mb-6">
              <Terminal size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Soft Skills & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map(item => (
                <span key={item} className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm border border-white/5 hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2"><Cpu size={18} /> Certificações</h4>
              <div className="space-y-4">
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col group cursor-pointer"
                  >
                    <span className="text-orange-400 font-medium text-sm group-hover:text-orange-300 transition-colors">{cert.title}</span>
                    <span className="text-neutral-500 text-xs">{cert.issuer}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
