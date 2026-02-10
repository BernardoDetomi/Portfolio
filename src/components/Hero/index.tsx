import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-950">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Disponível para novos projetos
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Construindo o <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">
                futuro digital
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
              Desenvolvedor Full Stack especializado em criar experiências web modernas, performáticas e escaláveis. Transformo ideias complexas em código limpo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all flex items-center justify-center gap-2 group">
                Ver Projetos
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                Entrar em Contato
              </a>
            </div>

            <div className="mt-16 flex items-center gap-6 text-neutral-500">
              <a href="https://github.com/BernardoDetomi" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/bernardo-maia-detomi-7621a51b9/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:bernardomd01@gmail.com" className="hover:text-orange-500 transition-colors"><Mail size={24} /></a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-orange-500/30 shadow-2xl">
                <img
                  src="/images/profile-photo.jpeg"
                  alt="Bernardo Maia Detomi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
