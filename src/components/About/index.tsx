import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const About = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <SectionHeader title="Sobre Mim" subtitle="Minha jornada profissional e o que me motiva a programar." />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-neutral-300 leading-relaxed"
          >
            <p>
              Olá! Sou Bernardo Maia Detomi, desenvolvedor apaixonado por tecnologia e inovação. Estou cursando Ciência da Computação na UFSJ e venho construindo soluções digitais robustas e modernas.
            </p>
            <p>
              Atualmente sou estagiário no SETIR da UFSJ e fiz parte do setor de projetos da LinkedEJ, a empresa júnior do curso de Ciência da Computação, atuando em diversos projetos. Minha abordagem combina design thinking com engenharia de software rigorosa.
            </p>
            <p>
              Quando não estou codando, estou contribuindo para a comunidade open-source, explorando novas tecnologias ou aprimorando minhas habilidades em desenvolvimento web Full Stack.
            </p>

            <div className="pt-4 flex gap-4">
              <a
                href="/CurriculoBernardoMD.pdf"
                download
                className="flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium group"
              >
                <Download size={18} /> Baixar CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-3 opacity-20 blur-sm"></div>
            <div className="relative bg-neutral-800 p-8 rounded-2xl border border-white/5 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-neutral-900/50 rounded-xl">
                  <h3 className="text-3xl font-bold text-orange-500 mb-1">CC</h3>
                  <p className="text-sm text-neutral-400">Ciência da Computação</p>
                </div>
                <div className="text-center p-4 bg-neutral-900/50 rounded-xl">
                  <h3 className="text-3xl font-bold text-orange-500 mb-1">UFSJ</h3>
                  <p className="text-sm text-neutral-400">Universidade</p>
                </div>
                <div className="text-center p-4 bg-neutral-900/50 rounded-xl col-span-2">
                  <h3 className="text-3xl font-bold text-orange-500 mb-1">100%</h3>
                  <p className="text-sm text-neutral-400">Comprometimento</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
