import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/FooterNew';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio | Bernardo Maia Detomi</title>
        <meta name="description" content="Portfólio de Bernardo Maia Detomi - Desenvolvedor Full Stack" />
      </Head>
      <div className="bg-neutral-950 min-h-screen text-neutral-200 font-sans selection:bg-orange-500/30 selection:text-orange-200">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
