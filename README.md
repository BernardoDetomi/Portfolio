# Portfólio | Bernardo Maia Detomi

Portfólio pessoal desenvolvido com Next.js, Tailwind CSS e Framer Motion. Design moderno e responsivo com tema escuro e detalhes em laranja.

## Tecnologias

- **Next.js** — Framework React com SSR/SSG
- **TypeScript** — Tipagem estática
- **Tailwind CSS v4** — Estilização utilitária
- **Framer Motion** — Animações fluidas
- **Lucide React** — Ícones modernos
- **EmailJS** — Envio de emails pelo formulário de contato

## Estrutura do Projeto

```
src/
  components/
    Navbar/        — Navegação fixa com menu mobile
    Hero/          — Seção inicial com foto de perfil
    About/         — Sobre mim + download do CV
    Skills/        — Stack tecnológico + soft skills + certificações
    Projects/      — Projetos recentes
    Contact/       — Formulário de contato com EmailJS
    FooterNew/     — Rodapé com logo e links
    SectionHeader/ — Componente reutilizável de título
  data/
    index.ts       — Dados e constantes (projetos, skills, certificações)
  pages/
    index.tsx      — Página principal (composição dos componentes)
    _app.tsx       — App wrapper
    _document.tsx  — Documento HTML customizado
  styles/
    globals.css    — Tailwind CSS + estilos globais
public/
  images/          — Imagens (logo, foto, certificados)
  CurriculoBernardoMD.pdf — Currículo para download
```

## Começando

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000).

## Configuração do EmailJS

O formulário de contato usa [EmailJS](https://www.emailjs.com/) para enviar emails. Configure as credenciais em `src/components/Contact/index.tsx`:

```ts
const EMAILJS_SERVICE_ID = 'seu_service_id';
const EMAILJS_TEMPLATE_ID = 'seu_template_id';
const EMAILJS_PUBLIC_KEY = 'sua_public_key';
```

O template deve usar as variáveis: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`.

## Deploy

Pronto para deploy na [Vercel](https://vercel.com/):

```bash
npm run build
```

## Autor

**Bernardo Maia Detomi**
- [GitHub](https://github.com/BernardoDetomi)
- [LinkedIn](https://www.linkedin.com/in/bernardo-maia-detomi-7621a51b9/)
- Email: bernardomd01@gmail.com
