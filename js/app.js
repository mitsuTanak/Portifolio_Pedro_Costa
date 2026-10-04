document.documentElement.classList.remove('no-js');
const App = (() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initLoader() {
    const finish = () => document.body.classList.add('loaded');
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    setTimeout(finish, 1800);
  }

  function initNavigation() {
    const button = $('.nav-toggle');
    const list = $('.nav-list');
    const header = $('.site-header');
    button?.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
    $$('.nav-list a').forEach(link => link.addEventListener('click', () => {
      list.classList.remove('open'); button?.setAttribute('aria-expanded', 'false');
    }));
    addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 18), { passive: true });
  }

  function initReveal() {
    const items = $$('.reveal');
    if (reducedMotion || !('IntersectionObserver' in window)) return items.forEach(el => el.classList.add('visible'));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: .12, rootMargin: '0px 0px -40px' });
    items.forEach(item => observer.observe(item));
  }

  function initActiveLinks() {
    const sections = $$('main section[id]');
    const links = $$('.nav-list a[href^="#"]');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }), { rootMargin: '-30% 0px -60%' });
    sections.forEach(section => observer.observe(section));
  }

  function initEmailCopy() {
    const button = $('.copy-email');
    const status = $('.copy-status');
    button?.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(button.dataset.email); status.textContent = 'E-mail copiado para a área de transferência.'; }
      catch { status.textContent = 'Não foi possível copiar. Selecione o e-mail no botão ao lado.'; }
      setTimeout(() => status.textContent = '', 3500);
    });
  }

  function init() {
    initLoader(); initNavigation(); initReveal(); initActiveLinks(); initEmailCopy();
    $('#year').textContent = new Date().getFullYear();
  }
  return { init };
})();
document.addEventListener('DOMContentLoaded', App.init);

(() => {
  const dictionary = {
    "Disponível para novas oportunidades": "Available for new opportunities",
    "Código com propósito.": "Code with purpose.",
    "Interfaces com impacto.": "Interfaces with impact.",
    "Sou Pedro, desenvolvedor Front-End e Full Stack Júnior em São Paulo. Transformo problemas em experiências web claras, acessíveis e performáticas.": "I’m Pedro, a Junior Front-End and Full Stack Developer based in São Paulo. I turn problems into clear, accessible, and high-performance web experiences.",
    "Explorar projetos": "Explore projects", "Vamos conversar": "Let’s talk",
    "Sobre": "About", "Projetos": "Projects", "Trajetória": "Journey", "Contato": "Contact",
    "Tecnologias no stack": "Technologies in my stack", "Frentes de projetos": "Project areas",
    "Papéis de liderança": "Leadership roles", "Formações em tecnologia": "Technology education paths",
    "01 / Sobre": "01 / About", "Fundamentos sólidos.": "Strong foundations.", "Visão de produto.": "Product mindset.",
    "Desenvolvedor Full Stack Júnior com formação técnica em Desenvolvimento de Sistemas pelo SENAI e graduando em Cybersegurança.": "Junior Full Stack Developer with a technical degree in Systems Development from SENAI and currently pursuing a degree in Cybersecurity.",
    "Participei do desenvolvimento de um sistema web em Flask, implementando autenticação, controle de permissões e integração com banco de dados. Atuei como Scrum Master e Líder de Equipe em Projeto Integrador, conectando execução técnica, comunicação e organização.": "I contributed to a Flask web system, implementing authentication, permission control, and database integration. I also worked as Scrum Master and Team Lead on an Integrative Project, connecting technical execution, communication, and organization.",
    "Comunicação": "Communication", "Resolução de problemas": "Problem solving", "Trabalho em equipe": "Teamwork",
    "Agora": "Now", "Construindo experiências digitais que combinam clareza e engenharia.": "Building digital experiences that combine clarity and engineering.",
    "Local": "Location", "Foco": "Focus", "Idiomas": "Languages", "PT nativo · EN intermediário": "Native Portuguese · Intermediate English",
    "Da interface ao banco.": "From interface to database.", "Com foco no usuário.": "With a user-first mindset.",
    "Foco principal": "Primary focus", "Base Full Stack": "Full Stack foundation", "Forma de trabalhar": "How I work",
    "Liderança": "Leadership", "Colaboração": "Collaboration",
    "Indicadores visuais representam familiaridade relativa entre as competências deste portfólio, não certificações ou anos de experiência.": "Visual indicators represent relative familiarity among the skills in this portfolio, not certifications or years of experience.",
    "03 / Projetos selecionados": "03 / Selected projects", "Aprendizado transformado": "Learning transformed", "em produto.": "into products.",
    "Case principal · React": "Main case · React", "Código": "Code", "Produtividade": "Productivity", "Laboratório": "Lab",
    "Ver projeto ↗": "View project ↗", "Ver repositório ↗": "View repository ↗", "Ver coleção ↗": "View collection ↗", "Ver projetos ↗": "View projects ↗",
    "04 / Case study": "04 / Case study", "PrimeFlix: decisões antes": "PrimeFlix: decisions before", "de decoração.": "decoration.",
    "O desafio": "The challenge", "A abordagem": "The approach", "O resultado técnico": "The technical outcome",
    "05 / Processo": "05 / Process", "Um fluxo simples.": "A simple workflow.", "Decisões conscientes.": "Deliberate decisions.",
    "Entender": "Understand", "Estruturar": "Structure", "Construir": "Build", "Validar": "Validate",
    "06 / Evolução": "06 / Journey", "Aprender, liderar,": "Learn, lead,", "entregar.": "deliver.",
    "Formação técnica": "Technical education", "Projeto Integrador": "Integrative Project", "Scrum Master & Líder de Equipe": "Scrum Master & Team Lead",
    "Em andamento": "In progress", "Graduação em Cybersegurança": "Cybersecurity degree", "Próximo capítulo": "Next chapter", "Front-End profissional": "Professional Front-End",
    "07 / Contato": "07 / Contact", "Tem um desafio?": "Have a challenge?", "Vamos construir.": "Let’s build it.",
    "Aberto a vagas Front-End Jr/Pleno, projetos freelancer e colaborações em desenvolvimento web.": "Open to Junior/Mid-Level Front-End roles, freelance projects, and web development collaborations.",
    "Enviar e-mail": "Send email", "Copiar e-mail": "Copy email", "Voltar ao topo ↑": "Back to top ↑",
    "Pular para o conteúdo": "Skip to content", "Abrir menu": "Open menu"
  };
  const originals = new WeakMap();
  const meta = {
    "pt-BR": "Portfólio de Pedro Mitsuaki Tanaka Costa, desenvolvedor Front-End e Full Stack Júnior em São Paulo.",
    "en-US": "Portfolio of Pedro Mitsuaki Tanaka Costa, a Junior Front-End and Full Stack Developer based in São Paulo."
  };
  function walk(node, lang) {
    if (node.nodeType === Node.TEXT_NODE) {
      const value = node.nodeValue;
      const key = value.trim();
      if (!key) return;
      if (!originals.has(node)) originals.set(node, value);
      const source = originals.get(node), sourceKey = source.trim();
      node.nodeValue = lang === "en-US" && dictionary[sourceKey] ? source.replace(sourceKey, dictionary[sourceKey]) : source;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "STYLE", "CODE", "PRE"].includes(node.tagName)) return;
    node.childNodes.forEach(child => walk(child, lang));
  }
  function setLanguage(lang) {
    lang = lang === "en-US" ? "en-US" : "pt-BR";
    walk(document.body, lang);
    document.documentElement.lang = lang;
    document.title = lang === "en-US" ? "Pedro Costa | Front-End Developer" : "Pedro Costa | Desenvolvedor Front-End";
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta[lang]);
    const button = document.querySelector(".language-toggle");
    if (button) {
      button.querySelector(".lang-current").textContent = lang === "pt-BR" ? "PT" : "EN";
      button.querySelector(".lang-next").textContent = lang === "pt-BR" ? "EN" : "PT";
      const label = lang === "pt-BR" ? "Switch to American English" : "Mudar para Português do Brasil";
      button.setAttribute("aria-label", label); button.title = label;
    }
    localStorage.setItem("portfolio-language", lang);
  }
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("portfolio-language");
    setLanguage(saved || (navigator.language.toLowerCase().startsWith("en") ? "en-US" : "pt-BR"));
    document.querySelector(".language-toggle")?.addEventListener("click", () =>
      setLanguage(document.documentElement.lang === "pt-BR" ? "en-US" : "pt-BR")
    );
  });
})();
