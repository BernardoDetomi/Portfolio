import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// =====================================================
// CONFIGURE AQUI SUAS CREDENCIAIS DO EMAILJS
// Acesse https://www.emailjs.com/ para criar sua conta
// =====================================================
const EMAILJS_SERVICE_ID = 'service_68zjvuo';
const EMAILJS_TEMPLATE_ID = 'template_yajfv4v'; // Crie o template e cole o ID aqui
const EMAILJS_PUBLIC_KEY = 'dktY_8rEhZpi6Q2v6';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-neutral-900 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vamos trabalhar juntos?</h2>
            <p className="text-neutral-400">Tem um projeto em mente ou quer apenas bater um papo sobre tecnologia? Mande uma mensagem!</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <a href="mailto:bernardomd01@gmail.com" className="flex items-start gap-4 group">
                <div className="p-3 bg-neutral-800 rounded-lg text-orange-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-neutral-400 text-sm group-hover:text-orange-400 transition-colors">bernardomd01@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/bernardo-maia-detomi-7621a51b9/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="p-3 bg-neutral-800 rounded-lg text-orange-500">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-neutral-400 text-sm group-hover:text-orange-400 transition-colors">Bernardo Maia Detomi</p>
                </div>
              </a>
              <a href="https://github.com/BernardoDetomi" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="p-3 bg-neutral-800 rounded-lg text-orange-500">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-neutral-400 text-sm group-hover:text-orange-400 transition-colors">github.com/BernardoDetomi</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-800 rounded-lg text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Localização</h4>
                  <p className="text-neutral-400 text-sm">São João del-Rei, MG - Brasil</p>
                </div>
              </div>
            </div>

            <form ref={formRef} className="md:col-span-3 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Nome</label>
                  <input type="text" name="from_name" required className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Email</label>
                  <input type="email" name="from_email" required className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Assunto</label>
                <input type="text" name="subject" required className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Sobre o projeto..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Mensagem</label>
                <textarea rows={4} name="message" required className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none" placeholder="Como posso ajudar?"></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3">
                  <CheckCircle size={18} />
                  <span className="text-sm font-medium">Mensagem enviada com sucesso!</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  <AlertCircle size={18} />
                  <span className="text-sm font-medium">Erro ao enviar. Tente novamente ou envie por email.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-600/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>Enviando... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Enviar Mensagem <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
