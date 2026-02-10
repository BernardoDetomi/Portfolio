import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      {/* Faixa superior escura */}
      <div style={{ background: "#111111" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/images/bmd-logo.png"
                alt="BMD"
                className="w-44 sm:w-52 lg:w-56 h-auto"
              />
            </div>

            {/* Contatos */}
            <div className="text-center lg:text-left">
              <div className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2">
                CONTATOS
              </div>
              <div className="text-white text-sm sm:text-base mb-1">
                bernardomd01@gmail.com<br />
                <a href="https://github.com/BernardoDetomi" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">github.com/BernardoDetomi</a><br />
                <a href="https://www.linkedin.com/in/bernardo-maia-detomi-7621a51b9/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">LinkedIn</a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center lg:justify-start mt-3">
                <a
                  href="https://github.com/BernardoDetomi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110 text-white hover:text-orange-400"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>

                <a
                  href="https://www.linkedin.com/in/bernardo-maia-detomi-7621a51b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110 text-white hover:text-orange-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>

                <a
                  href="mailto:bernardomd01@gmail.com"
                  className="transition-transform duration-200 hover:scale-110 text-white hover:text-orange-400"
                  aria-label="Email"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>

            {/* Sobre */}
            <div className="text-center lg:text-left">
              <div className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2">
                SOBRE
              </div>
              <div className="text-white text-sm sm:text-base mb-3">
                Portfólio pessoal de Bernardo Maia<br className="hidden sm:block" />
                Detomi — Desenvolvedor Full Stack.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa inferior com crédito */}
      <div style={{ background: "#df5200" }} className="text-center py-6">
        <div className="text-white font-bold text-sm sm:text-base mb-4">
          DESENVOLVIDO POR
        </div>
        <div className="flex justify-center mb-2">
          <a
            href="https://github.com/BernardoDetomi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <img
              src="/images/bmd-logo.png"
              alt="BMD"
              className="w-24 sm:w-32 lg:w-36 h-auto"
            />
          </a>
        </div>
        <div className="text-white text-xs sm:text-sm">
          © Copyright. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
