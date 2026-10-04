# Portfólio | Pedro Mitsuaki Tanaka Costa

Portfólio pessoal estático, responsivo e acessível, criado para candidaturas a vagas Front-End Jr/Pleno, projetos freelancer e oportunidades em Web Design Front-End.

## Diferenciais

- Direção visual premium em dark mode
- Case study do PrimeFlix
- Dashboard visual de competências
- Timeline profissional e processo de desenvolvimento
- Scroll reveal com respeito a `prefers-reduced-motion`
- Navegação por teclado, skip link, foco visível e mensagens acessíveis
- SEO técnico com Open Graph, Twitter Cards e Schema.org Person
- Sem frameworks, backend, Node.js ou banco de dados

## Tecnologias

- HTML5 semântico
- CSS3 responsivo
- JavaScript Vanilla

## Estrutura

```text
portfolio-pedro/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
```

## Personalização obrigatória

Antes de publicar, substitua em `index.html`:

- `SEU-USUARIO` pelo usuário real do GitHub
- `SEU-EMAIL@exemplo.com` pelo e-mail profissional
- URLs dos cards pelas URLs reais dos repositórios e demos
- `og-image.png` por uma imagem social de 1200 × 630 px adicionada na raiz, ou remova as tags de imagem até criar o arquivo
- URL canônica pela URL final do site

Também altere o e-mail em `data-email` no botão de copiar.

> As descrições dos projetos foram criadas a partir dos nomes fornecidos. Ajuste-as para refletir com precisão funcionalidades, decisões e resultados reais.

## Execução local

Não existe etapa de build. Abra `index.html` diretamente no navegador. Para simular hospedagem local, qualquer servidor HTTP simples é suficiente, mas não é obrigatório.

## Publicação no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `portfolio`.
2. Envie `index.html`, `README.md`, `css/style.css` e `js/app.js`, preservando as pastas.
3. No repositório, abra **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione a branch `main`, a pasta `/(root)` e salve.
6. Acesse o endereço apresentado pelo GitHub Pages e atualize a URL canônica, Open Graph e Schema.org no HTML.

Para um site de usuário, o repositório pode ser nomeado `SEU-USUARIO.github.io`. Para um site de projeto, o endereço normalmente inclui o nome do repositório.

## Checklist antes de enviar a recrutadores

- [ ] Trocar todos os placeholders
- [ ] Confirmar links dos cinco projetos
- [ ] Revisar descrições conforme o código real
- [ ] Testar em celular e desktop
- [ ] Navegar somente com Tab, Shift+Tab e Enter
- [ ] Rodar Lighthouse no Chrome DevTools
- [ ] Validar HTML e dados estruturados
- [ ] Adicionar uma imagem Open Graph real

## Performance

O projeto reduz dependências e usa JavaScript com carregamento `defer`, IntersectionObserver e animações leves. A fonte do Google é a única dependência externa. Para máxima autonomia e desempenho, baixe as fontes, hospede-as localmente e ajuste o `@font-face`.

A meta 95+/100 depende do ambiente, rede, navegador, conteúdo final e hospedagem. Portanto, deve ser confirmada em auditoria após a publicação, não tratada como garantia.

## Evoluções futuras

1. Adicionar screenshots WebP/AVIF reais e dimensões explícitas.
2. Criar páginas detalhadas para cada case study.
3. Incluir currículo PDF e versão em inglês.
4. Adicionar domínio próprio e analytics com foco em privacidade.
5. Incorporar recomendações profissionais verificáveis.
6. Criar `sitemap.xml`, `robots.txt` e página `404.html` caso a restrição de apenas três arquivos seja removida.
7. Automatizar testes em CI apenas se o projeto futuramente aceitar ferramentas de build.

## Licença

Conteúdo pessoal de Pedro Mitsuaki Tanaka Costa. O código pode ser adaptado para uso pessoal, preservando os créditos quando aplicável.
