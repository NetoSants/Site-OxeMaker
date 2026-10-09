# Contexto — Novo Site Ôxe Maker 2026

> Documento de contexto gerado em **07/10/2026** para transferência de conhecimento
> na criação de um **site novo do zero** (Google AI Studio), substituindo o site atual.

---

## 1. O que fizemos nesta sessão

1. **Instalamos as dependências** do site atual (`npm install`, 184 pacotes, Node v24).
2. **Mapeamos o repositório atual** (`oxeMaker-webSite`): estrutura, rotas, stack e conteúdo.
3. **Verificamos o Git**: branch `main` (sincronizada com `origin/main`); último commit de
   Brenno Felipe (10/05/2026, PR #9 `feature/mudarCoresTitulo`).
4. **Listamos todas as branches**: as mais recentes são `feat/botao-alternar-tema` (31/07/2026),
   `fix/npm-vulnerabilidades` (30/07/2026) e `dev` (25/06/2026) — todas **à frente da main**.
5. **Fizemos checkout da branch mais recente** `feat/botao-alternar-tema` (botão de tema
   claro/escuro + correções visuais), rodamos `npm install` e subimos o dev server
   (localhost:5173). **O repositório está nesta branch agora.**
6. **Coletamos informações do Obsidian** (`TrabalhosGRE`) — notas do evento, pendências do site,
   resumos semanais e notas diárias.
7. **Pesquisamos na web** (Folha PE, 25/06/2025) — cobertura oficial do Ôxe Maker 2025.
8. **Filtramos apenas informações úteis** para o site (decisão: **remover toda menção à OBR**).
9. **Criamos o prompt** para geração do novo site no Google AI Studio (seção 7).
10. **Criamos a pasta `logos-site/`** com **todas as 18 imagens** do site atual.

---

## 2. Sobre o evento (fonte: Obsidian + site atual + web)

- **Nome:** Ôxe Maker — Mostra de Robótica Educacional
- **Realização:** GRE Metropolitana Norte (rede pública estadual de Pernambuco)
  - Endereço da GRE: R. Acdo. Hélio Ramos, 500 — Cidade Universitária, CDU – PE, 50740-530
- **6ª edição (2021–2026)**; "Ôxe" é expressão pernambucana
- **Mascote:** Calango (no site atual aparece como "Zé Calango")
- **Slogan:** *Metropolitana Norte · Vidas · Escolas · Comunidade*
- **Tema pedagógico 2026:** "Vidas, Escolas e Comunidades: Educar para a Promoção da Justiça Socioambiental"
- **Público:** estudantes da rede pública, professores e famílias
- **Eixos:** robótica + cultura maker + cultura geek; protagonismo juvenil; aprendizado "mão na massa"

### Dados do evento (serviço)

| Campo | Valor |
|-------|-------|
| Data | 02 e 03 de julho de 2026 |
| Horário | 07:00 – 17:30 |
| Local | ETE José de Alencar — Ginásio e Pátio Central |
| Endereço | Av. Getúlio Vargas, s/n, Bairro Novo, Olinda – PE, 53030-010 |
| Entrada | Gratuita |
| Inscrições | Google Forms (links externos, sem banco de dados) |
| Countdown alvo | 2026-07-02T09:00:00 |

### Números de impacto (provas sociais)

- **2.000+** alunos impactados · **58+** escolas parceiras · **9+** competições · **90+** projetos makers
- Edição 2025: +70 escolas, ~2 mil estudantes, ~10 mil visitantes circulantes

---

## 3. Estrutura de conteúdo do site (páginas)

1. **Home** — hero com logo/mascote animado, countdown, CTA "Inscreva-se";
   grid de 6 destaques (Oficinas Práticas, Conexões que Transformam, Competições,
   Oxethon Hackathon 48h, Mostra de Projetos, Premiações); galeria 2021–2026;
   patrocinadores por tier; CTA final
2. **/programacao** — grade de 2 dias (credenciamento, abertura com mesa de convidados,
   apresentação cultural, oficinas, cosplay, K-pop)
3. **/mapa** — endereço, Google Maps, botão "Como chegar"
4. **/torneio** — competições: Buzz Line, Buzz PRO, Sumô, Combate (cards com descrição,
   inscrição e edital PDF)
5. **/geek** — Cosplay, K-pop, Just Dance
6. **/oxethon** — hackathon de 48 horas com CTA de inscrição
7. **/oficinas** — Soldagem para Iniciantes, Introdução ao Arduino, Modelagem 3D com
   Tinkercad, Robótica com Sucata (instrutores, horário, inscrição)
8. **/sobre** — história desde 2021, missão, homenagem à fundadora **Lidyane Lira**
   (foto + texto), estatísticas com contadores animados

> ⚠️ **Decisão:** remover totalmente qualquer interação/menção à **OBR** do novo site.

---

## 4. Identidade visual (validada no site atual)

| Item | Valor |
|------|-------|
| Fundo | `#050D34` (oxe-dark) |
| Amarelo (CTAs/headings) | `#FCC140` |
| Ciano (destaques/bordas) | `#01B1FD` |
| Azul institucional | `#0030B5` |
| Cards | `#1E292D` |
| Fonte títulos | Londrina Solid |
| Fonte corpo | Inter |
| Fonte labels técnicos | Space Mono |
| Estética | maker/neon — cards com borda sólida + sombra offset amarela; botões com sombra inferior sólida e efeito press-down; background de grade blueprint |
| Animações | countdown ao vivo, contadores com IntersectionObserver, hover lift nos cards |

---

## 5. Site atual — referências técnicas

- **Stack:** React 19 + TypeScript 5.8 + Vite 6 + Tailwind CSS 4 + React Router 7
- **Repositório:** `https://github.com/DevBF1907/oxeMaker-webSite.git`
- **Branch atual:** `feat/botao-alternar-tema` (mais recente, com tema claro/escuro)
- **Organização:** Feature-Sliced — `core/` (types + constants), `components/`,
  `features/` (uma pasta por página)
- **Todos os dados do evento** ficam em `src/core/constants.ts` (data, programação,
  patrocinadores, galeria) — padrão a manter no novo site
- **Scripts:** `dev`, `build` (tsc + vite build), `lint` (tsc --noEmit), `preview`

### Pendências conhecidas do site atual (resolver no novo)

- [ ] Programação real ainda placeholder
- [ ] Mapa do evento não definido/no-site
- [ ] Formulários e regulamentos a conferir
- [ ] Subtítulos redundantes a remover (Cultura geek, Oficinas, Ôxethon)
- [ ] Menu hambúrguer com ajustes visuais pendentes (mobile)
- [ ] Logos de patrocinadores são placeholders (picsum.photos)
- [ ] Galeria 2023 usa imagem placeholder externa (não há arquivo local)
- [ ] Bug de temas claro/escuro (só corrigido na branch mais recente)

---

## 6. Imagens disponíveis — pasta `logos-site/`

Todas as 18 imagens do site atual foram copiadas para `logos-site/`:

**Logos / mascotes**
- `calango-logo.png` — logo/mascote animado (navbar)
- `logo06oxemaker.jpeg` — logo 2026 (galeria + seção Sobre)
- `logo01oxemaker.jpeg` — logo 2021 (galeria)
- `oxemaker-logo01.jpeg` — logo 2022 (galeria)
- `oxemakerlogo2024.jpeg` — logo 2024 (galeria)
- `logoOxemaker05.jpeg` — logo 2025 (galeria)
- `logooxemaker02.jpeg` — logo (variação)
- `logos-claras.png` — logos dos parceiros (footer)

**Competições**
- `buzzline.png`, `buzzpro.png`, `sumo.png`, `cupim-calango.jpeg`, `oxethon.png`

**Cultura geek**
- `calango-cosplay.jpeg`, `calango-just.jpeg`, `k-pop.png`

**Pessoas**
- `foto-lidy.jpeg` — foto da fundadora Lidyane Lira

**Não copiados (não são imagens):** editais PDF em `src/public/editais/`
(`edital-buzzline.pdf`, `edital-sumo.pdf`)

---

## 7. Prompt para o Google AI Studio

```text
Crie do zero o site oficial do "Ôxe Maker 2026", evento de robótica educacional e
cultura maker/geek. Entregue um projeto completo, funcional e responsivo.

=== CONTEXTO DO EVENTO ===
- Nome: Ôxe Maker — Mostra de Robótica Educacional
- Realização: GRE Metropolitana Norte (rede pública estadual de Pernambuco)
- 6ª edição (2021–2026); "Ôxe" é expressão pernambucana
- Mascote: Calango — usar ícone/ilustração local
- Slogan: "Metropolitana Norte · Vidas · Escolas · Comunidade"
- Tema 2026: "Vidas, Escolas e Comunidades: Educar para a Promoção da Justiça Socioambiental"
- Público: estudantes da rede pública, professores e famílias
- Eixos: robótica + cultura maker + cultura geek, protagonismo juvenil,
  aprendizado "mão na massa"

=== SERVIÇOS ===
- Data: 02 e 03 de julho de 2026, das 07h às 17h30
- Local: ETE José de Alencar — Ginásio e Pátio Central
- Endereço: Av. Getúlio Vargas, s/n, Bairro Novo, Olinda – PE, 53030-010
- Entrada gratuita; inscrições via Google Forms (links como placeholders editáveis)
- Countdown regressivo para 02/07/2026 09:00

=== NÚMEROS (provas sociais) ===
2.000+ alunos impactados · 58+ escolas parceiras · 9+ competições ·
90+ projetos makers · em 2025: +70 escolas, ~2 mil estudantes, ~10 mil visitantes

=== ESTRUTURA (React 19 + TypeScript + Vite + Tailwind CSS 4 + React Router) ===
1. Home — hero com logo/mascote animado, título, countdown, CTA "Inscreva-se",
   grid de 6 destaques (Oficinas Práticas, Conexões que Transformam, Competições,
   Oxethon Hackathon 48h, Mostra de Projetos, Premiações), galeria 2021–2026,
   patrocinadores por tier, CTA final
2. /programacao — grade de 2 dias (credenciamento, abertura com mesa de convidados,
   cultura, oficinas, cosplay, K-pop)
3. /mapa — endereço, embed do Google Maps e botão "Como chegar"
4. /torneio — competições de robótica (Buzz Line, Buzz PRO, Sumô, Combate) em cards
   com descrição, botão de inscrição e link para edital PDF
5. /geek — 3 categorias: Cosplay, K-pop, Just Dance
6. /oxethon — hackathon de 48 horas, regulamento resumido e CTA de inscrição
7. /oficinas — 4 oficinas (Soldagem para Iniciantes, Introdução ao Arduino,
   Modelagem 3D com Tinkercad, Robótica com Sucata) com instrutores editáveis,
   horário e inscrição
8. /sobre — história desde 2021, missão, homenagem à fundadora (foto + texto),
   estatísticas com contadores animados ao rolar

=== DESIGN ===
- Tema escuro "maker/neon": fundo #050D34, destaque amarelo #FCC140,
  ciano #01B1FD, azul #0030B5, cards #1E292D
- Fontes: Londrina Solid (títulos), Inter (corpo), Space Mono (labels técnicos)
- Cards com borda sólida e sombra offset amarela; botões com sombra sólida
  inferior e efeito press-down; background sutil de grade blueprint
- Responsivo mobile-first: navbar fixa com menu hambúrguer animado,
  mega-menu em desktop
- Animações: countdown ao vivo, contadores com IntersectionObserver,
  hover lift nos cards
- Acessibilidade: contraste AA, foco visível, alt em imagens

=== TÉCNICO ===
- Código em camadas: /src/core (types.ts + constants.ts com TODOS os dados
  editáveis do evento em um único arquivo), /src/components (Navbar, Footer, Logo,
  ScrollToTop, AnimatedCounter, MainLayout), /src/features (uma pasta por página)
- Todos os textos, datas, links e imagens saem de constants.ts — nada hardcoded em JSX
- Imagens: placeholders locais em /public/img com comentários indicando o que substituir
- Scripts: dev, build (tsc + vite build), lint (tsc --noEmit), preview
- Entregue README com instruções de instalação e onde editar cada conteúdo

Gere o projeto completo, arquivo por arquivo, pronto para `npm install && npm run dev`.
```

---

## 8. Hospedagem (decisão pendente)

Site 100% estático, sem banco de dados — inscrições em Google Forms externo.

| Opção | Prós | Observação |
|-------|------|-----------|
| **GitHub Pages** | Já existe repo; grátis | React Router + `BrowserRouter` exige truque do `404.html` ou `HashRouter` |
| **Netlify** | Arrastar `dist/`; redirect de SPA automático | Grátis; HTTPS e subdomínio inclusos |
| **Vercel** | Detecta Vite; deploy automático a cada push na main | Ideal para CI/CD sem configuração |
| **Cloudflare Pages** | Bandwidth ilimitado, CDN global | Rápido no Brasil |

**Recomendação:** Netlify ou Vercel — resolvem rotas do React Router sem gambiarra.
Caminho mais simples: `npm run build` → arrastar `dist/` no Netlify → no ar.

---

## 9. Acessos e referências

- **Repositório:** `https://github.com/DevBF1907/oxeMaker-webSite.git`
- **Site atual (local):** http://localhost:5173 (dev server pode estar rodando)
- **Obsidian de contexto:** `C:\Users\netoa\OneDrive\Documentos\Obsidian\TrabalhosGRE`
  - `Eventos/Ôxe Maker/Ôxe Maker 2026.md`
  - `Eventos/Ôxe Maker/Site Ôxe-Maker.md` (pendências do site)
- **Imagens:** `logos-site/` (neste diretório)
- **Forms (editáveis/placeholder):** Google Forms das competições — ver
  `src/features/tournament/RoboticsTournament.tsx` e `src/features/geek/GeekCulture.tsx`
  do site atual para URLs existentes
- **Google Maps:** `https://www.google.com/maps/search/ETE+José+de+Alencar+Olinda`

---

*Gerado automaticamente — atualizado em 07/10/2026.*
