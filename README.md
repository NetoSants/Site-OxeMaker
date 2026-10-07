# Ôxe Maker 2026 — Site Oficial

Site oficial da **6ª edição do Ôxe Maker (2021–2026)** — Mostra de Robótica Educacional e Cultura Maker/Geek da **GRE Metropolitana Norte** (Rede Pública Estadual de Pernambuco).

- **Data do Evento**: 02 e 03 de julho de 2026 (07h00 às 17h30)
- **Local**: Escola Técnica Estadual (ETE) José de Alencar — Ginásio e Pátio Central
- **Endereço**: Av. Getúlio Vargas, s/n, Bairro Novo, Olinda – PE, 53030-010
- **Tema 2026**: *"Vidas, Escolas e Comunidades: Educar para a Promoção da Justiça Socioambiental"*
- **Slogan**: *"Metropolitana Norte · Vidas · Escolas · Comunidade"*
- **Mascote**: Calango Maker (Lagarto com óculos maker e detalhes robóticos)

---

## 🛠️ Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS 4**
- **React Router DOM 7** (Navegação SPA client-side)
- **Lucide Icons**
- **Fontes Google Fonts**: Londrina Solid (títulos), Space Mono (labels/código), Inter (corpo)

---

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18+)
- npm ou yarn

### Como rodar em desenvolvimento
```bash
npm install
npm run dev
```
O servidor de desenvolvimento estará disponível em `http://localhost:3000`.

### Como compilar para produção
```bash
npm run build
npm run preview
```

### Como verificar tipagem e linting
```bash
npm run lint
```

---

## 📁 Arquitetura do Projeto

O código foi organizado em camadas modulares para facilitar manutenções futuras sem tocar na estrutura do JSX:

```text
├── index.html                   # HTML base com fontes e tags OpenGraph/SEO
├── metadata.json                # Metadados do applet
├── public/
│   └── img/                     # Imagens locais e placeholders (com guia LEIA-ME.txt)
└── src/
    ├── core/                    # DADOS CENTRALIZADOS (FONTE ÚNICA DA VERDADE)
    │   ├── types.ts             # Interfaces TypeScript de todo o evento
    │   └── constants.ts         # TODOS OS TEXTOS, DATAS, LINKS E TABELAS EDITÁVEIS
    ├── components/              # Componentes reutilizáveis
    │   ├── Navbar.tsx           # Cabeçalho responsivo com menu mobile animado
    │   ├── Footer.tsx           # Rodapé institucional com realização e redes
    │   ├── Logo.tsx             # Marca oficial com tipografia e mascote
    │   ├── CalangoMascot.tsx    # Mascote Calango vetorial animado (SVG)
    │   ├── CountdownTimer.tsx   # Contagem regressiva ao vivo para 02/07/2026 09:00
    │   ├── AnimatedCounter.tsx  # Contadores com IntersectionObserver
    │   ├── RegistrationModal.tsx# Modal interativo de inscrição (com Google Forms e simulação)
    │   ├── EditalModal.tsx      # Modal de leitura e download de editais técnicos
    │   ├── ScrollToTop.tsx      # Restaura scroll ao trocar de rota
    │   └── MainLayout.tsx       # Shell com grade blueprint e layout padrão
    ├── features/                # Telas do evento
    │   ├── home/                # Hero, Provas Sociais, 6 Destaques, Galeria, Patrocinadores e FAQ
    │   ├── programacao/         # Grade de 2 dias com filtros e busca
    │   ├── mapa/                # Endereço, Google Maps embed, transporte e setores
    │   ├── torneio/             # 5 Competições de robótica, requisitos e editais
    │   ├── geek/                # Cosplay, K-pop Dance Cover e Arena Just Dance
    │   ├── oxethon/             # Hackathon 48h, 4 trilhas e regulamento
    │   ├── oficinas/            # 4 Oficinas práticas com instrutores editáveis
    │   └── sobre/               # História desde 2021, linha do tempo e Homenagem à Fundadora
    ├── index.css                # Tema escuro maker, sombras offset e estilos blueprint
    ├── App.tsx                  # Definição das rotas React Router
    └── main.tsx                 # Ponto de entrada React 19
```

---

## ✏️ Onde Editar Cada Conteúdo

Todos os textos, datas, nomes e links de inscrição estão concentrados no arquivo:
👉 **`/src/core/constants.ts`**

| O que você quer alterar | Onde editar em `/src/core/constants.ts` |
|---|---|
| **Data, hora e local do evento** | Objeto `EVENT_INFO.dates` e `EVENT_INFO.location` |
| **Links dos formulários Google Forms** | Objeto `EVENT_INFO.links` |
| **Contatos e Redes Sociais** | Objeto `EVENT_INFO.contact` |
| **Números de impacto (provas sociais)** | Array `METRICS_DATA` |
| **Grade de horários dos 2 dias** | Array `SCHEDULE_DATA` |
| **Regras dos torneios de robótica** | Array `TOURNAMENTS_DATA` |
| **Categorias geek (Cosplay, K-pop, Just Dance)** | Array `GEEK_CATEGORIES` |
| **Desafios e trilhas do Oxethon 48h** | Objeto `OXETHON_INFO` |
| **Professores e detalhes das oficinas** | Array `WORKSHOPS_DATA` |
| **Linha do tempo histórica (2021 a 2026)** | Array `TIMELINE_DATA` |
| **Texto de homenagem à Fundadora** | Objeto `FOUNDER_TRIBUTE` |
| **Patrocinadores e realizadores por tier** | Array `SPONSORS_TIERS` |
| **Perguntas frequentes (FAQ)** | Array `FAQ_DATA` |

---

## 🎨 Paleta de Cores Oficial (Maker / Neon)

- **Fundo Escuro**: `#050D34`
- **Amarelo Destaque**: `#FCC140`
- **Ciano Neon**: `#01B1FD`
- **Azul Institucional**: `#0030B5`
- **Fundo dos Cards**: `#1E292D`
- **Verde Calango**: `#107C41` / `#84CC16`
