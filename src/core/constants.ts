import {
  EventGeneralInfo,
  MetricProof,
  FeatureHighlight,
  ScheduleItem,
  RoboticsTournament,
  GeekCategory,
  Workshop,
  OxethonInfo,
  TimelineMilestone,
  FounderTribute,
  SponsorTier,
  GalleryItem,
} from './types';

/**
 * ============================================================================
 * ÔXE MAKER 2026 — DADOS GERAIS DO EVENTO (CONFIGURAÇÃO CENTRALIZADA)
 * Todos os textos, datas, locais e links do site são editáveis neste arquivo.
 * ============================================================================
 */

export const EVENT_INFO: EventGeneralInfo = {
  name: 'Ôxe Maker — Mostra de Robótica Educacional',
  shortName: 'Ôxe Maker 2026',
  edition: '6ª Edição',
  year: 2026,
  tagline: 'Metropolitana Norte · Vidas · Escolas · Comunidade',
  theme2026: 'Vidas, Escolas e Comunidades: Educar para a Promoção da Justiça Socioambiental',
  organizer: 'GRE Metropolitana Norte',
  organizerFullName: 'Gerência Regional de Educação Metropolitana Norte · Secretaria de Educação e Esportes de Pernambuco',
  dates: {
    display: '27 de novembro de 2026',
    day1: '27 de Novembro de 2026 (Sexta-feira)',
    isoStartDate: '2026-11-27T07:00:00-03:00',
    timeRange: 'Das 07h00 às 18h00',
  },
  location: {
    venue: 'EREM Áurea de Moura',
    fullName: 'Escola de Referência em Ensino Médio (EREM) Áurea de Moura Cavalcanti',
    space: 'Frente da escola, ginásio, pátio e cafeteria',
    street: 'Rodovia PE-15, Km 3,6, s/n',
    neighborhood: 'Ouro Preto',
    city: 'Olinda',
    state: 'PE',
    cep: '53320-640',
    fullAddress: 'Rodovia PE-15, Km 3,6, s/n — Ouro Preto, Olinda – PE, 53320-640',
    // Embed URL for Google Maps
    googleMapsEmbedUrl:
      'https://www.google.com/maps?q=EREM+%C3%81urea+de+Moura+Cavalcanti,+Olinda,+PE,+53320-640&output=embed',
    googleMapsDirectionsUrl:
      'https://maps.google.com/?q=EREM+Áurea+de+Moura+Cavalcanti+Olinda+PE',
    referencePoints: [
      'Localizado na Rodovia PE-15, Km 3,6 — Bairro Ouro Preto, Olinda-PE',
      'Acesso direto pela Rodovia PE-15',
      'Credenciamento na frente do evento (a partir das 07h00)',
    ],
    transitTips: [
      {
        title: 'Ônibus',
        description:
          'Linhas que circulam pela Rodovia PE-15 deixam passageiros nas proximidades da escola. Confirme o trajeto com sua escola ou transporte da região.',
      },
      {
        title: 'Caravana Escolar',
        description:
          'Escolas da rede podem se organizar em caravanas com ônibus próprio. O embarque e desembarque devem ser combinados com a coordenação do evento.',
      },
      {
        title: 'Chegada Antecipada',
        description:
          'O credenciamento acontece das 07h00 às 08h00 na frente do evento. Chegue antes das 08h00 para não perder a abertura cultural.',
      },
    ],
  },
  contact: {
    email: 'oxemaker@gremetronorte.pe.gov.br',
    instagram: '@oxemaker.oficial',
    youtube: 'youtube.com/@GREMetropolitanaNorte',
    phone: '(81) 3183-8400',
  },
  links: {
    oficineirosRegistration: 'https://forms.gle/oxemaker2026-oficineiros',
    mostraRegistration: 'https://forms.gle/oxemaker2026-mostra-de-projetos',
    palestrantesRegistration: 'https://forms.gle/oxemaker2026-palestrantes',
  },
};

/**
 * ============================================================================
 * NÚMEROS E PROVAS SOCIAIS
 * ============================================================================
 */
export const METRICS_DATA: MetricProof[] = [
  {
    id: 'alunos',
    value: 2000,
    suffix: '+',
    label: 'Estudantes Impactados',
    description: 'Jovens cientistas e inventores da rede pública estadual.',
  },
  {
    id: 'escolas',
    value: 58,
    suffix: '+',
    label: 'Escolas Parceiras',
    description: 'Polos de ensino integral, regulares e técnicas de Pernambuco.',
  },
  {
    id: 'competicoes',
    value: 6,
    suffix: '+',
    label: 'Competições & Desafios',
    description: 'Modalidades de robótica, dança e cultura geek.',
  },
  {
    id: 'projetos',
    value: 90,
    suffix: '+',
    label: 'Projetos Makers',
    description: 'Soluções reais para sustentabilidade, clima e inclusão.',
  },
  {
    id: 'visitantes',
    value: 10000,
    suffix: '+',
    label: 'Visitantes em 2025',
    description: 'Comunidade escolar, famílias e entusiastas de tecnologia.',
  },
];

/**
 * ============================================================================
 * 6 DESTAQUES DA HOME
 * ============================================================================
 */
export const HIGHLIGHTS_DATA: FeatureHighlight[] = [
  {
    id: 'oficinas',
    title: 'Oficinas Práticas Mão na Massa',
    description:
      'Oficina de robótica e cultura maker com atividades práticas para alunos e professores da rede.',
    iconName: 'Wrench',
    link: '/oficinas',
    tag: 'Laboratórios Vivos',
    accentColor: 'yellow',
  },
  {
    id: 'conexoes',
    title: 'Conexões que Transformam',
    description:
      'Estudantes, professores e convidados se encontram em um único dia de trocas, ideias e protagonismo juvenil.',
    iconName: 'Network',
    link: '/sobre',
    tag: 'Impacto Social',
    accentColor: 'cyan',
  },
  {
    id: 'torneios',
    title: 'Torneios de Robótica',
    description:
      'Competições de seguidor de linha Buzz Line e Buzz PRO e duelo de Sumô de Robôs, além das disputas geek.',
    iconName: 'Bot',
    link: '/torneio',
    tag: 'Arenas Dinâmicas',
    accentColor: 'yellow',
  },
  {
    id: 'hackathon',
    title: 'Hackathon Ôxe Maker',
    description:
      'As equipes apresentam seus projetos no grande pitch do Hackathon, às 16h00 do dia 27 de novembro.',
    iconName: 'Cpu',
    link: '/oxethon',
    tag: 'Pitch Final',
    accentColor: 'cyan',
  },
  {
    id: 'mostra',
    title: 'Mostra de Projetos Científicos',
    description: 'Estudantes do ensino fundamental e médio apresentando protótipos funcionais, automação agrícola e reciclagem técnica.',
    iconName: 'Sparkles',
    link: '/programacao',
    tag: 'Inovação Aberta',
    accentColor: 'blue',
  },
  {
    id: 'premiacoes',
    title: 'Premiações & Reconhecimento',
    description: 'Troféus de design ecológico, medalhas de mérito técnico, kits de componentes eletrônicos e bolsas de mentoria.',
    iconName: 'Trophy',
    link: '/torneio',
    tag: 'Celebração Maker',
    accentColor: 'yellow',
  },
];

/**
 * ============================================================================
 * PROGRAMAÇÃO OFICIAL (27 DE NOVEMBRO DE 2026 — 1 DIA)
 * ============================================================================
 */
export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    id: 'd1-1',
    day: 'day1',
    time: '07h00 - 08h00',
    title: 'Credenciamento',
    description: 'Local para credenciamento dos inscritos, na frente do evento.',
    category: 'cerimonia',
    location: 'Frente da EREM Áurea de Moura',
  },
  {
    id: 'd1-2',
    day: 'day1',
    time: '08h30 - 09h00',
    title: 'Abertura Cultural',
    description: 'Abertura com danças e ações culturais.',
    category: 'cerimonia',
    location: 'Palco principal',
  },
  {
    id: 'd1-3',
    day: 'day1',
    time: '09h00 - 09h30',
    title: 'TED Talks / Palestra Breve',
    description: 'Palestra breve (preferencialmente Laís – Tech Woman).',
    category: 'palestras',
    location: 'Palco principal',
    speakerOrHost: 'Laís — Tech Woman',
  },
  {
    id: 'd1-4',
    day: 'day1',
    time: '09h30 - 10h00',
    title: 'Lanche',
    description: 'Momento de pausa para os alunos lancharm.',
    category: 'cerimonia',
    location: 'Cafeteria',
  },
  {
    id: 'd1-5',
    day: 'day1',
    time: '10h00 - 12h00',
    title: 'Oficinas',
    description: 'Oficina de robótica e cultura maker.',
    category: 'oficinas',
    location: 'Salas de oficina',
  },
  {
    id: 'd1-6',
    day: 'day1',
    time: '12h00 - 13h00',
    title: 'Almoço',
    description: 'Intervalo para almoço na cafeteria.',
    category: 'cerimonia',
    location: 'Cafeteria',
  },
  {
    id: 'd1-7',
    day: 'day1',
    time: '13h00 - 14h30',
    title: 'Mostra de Projetos',
    description: 'Momento de apresentação dos projetos para a banca.',
    category: 'mostra',
    location: 'Área da Mostra',
  },
  {
    id: 'd1-8',
    day: 'day1',
    time: '14h30 - 15h30',
    title: 'Competições & Geek',
    description:
      'Competições de Buzz Line (linha mais simples), Buzz PRO (linha mais complexa), Sumô de Robôs, Dança K-POP, Just Dance e Cosplay.',
    category: 'robotica',
    location: 'Arena de Competições',
  },
  {
    id: 'd1-9',
    day: 'day1',
    time: '15h30 - 16h00',
    title: 'Lanche',
    description: 'Momento de pausa para os alunos lancharm.',
    category: 'cerimonia',
    location: 'Cafeteria',
  },
  {
    id: 'd1-10',
    day: 'day1',
    time: '16h00 - 17h00',
    title: 'Apresentação do Pitch do Hackathon',
    description: 'Apresentação dos projetos das equipes do Hackathon Ôxe Maker.',
    category: 'palestras',
    location: 'Palco principal',
  },
  {
    id: 'd1-11',
    day: 'day1',
    time: '17h00 - 18h00',
    title: 'Cerimônia de Premiação',
    description: 'Momento de entrega das premiações e encerramento do evento.',
    category: 'cerimonia',
    location: 'Palco principal',
  },
];

/**
 * ============================================================================
 * 5 COMPETIÇÕES DE ROBÓTICA
 * ============================================================================
 */
export const TOURNAMENTS_DATA: RoboticsTournament[] = [
  {
    id: 'buzz-line',
    name: 'Buzz Line Júnior',
    category: 'Seguidor de Linha',
    description: 'Robôs autônomos que percorrem circuitos demarcados por fita preta em pista branca com curvas acentuadas, cruzamentos e pequenos obstáculos.',
    requirements: [
      'Controle 100% autônomo (sem controle remoto)',
      'Dimensões máximas: 25cm x 25cm na largada',
      'Tensão máxima de alimentação: 12.6V',
      'Plataforma livre (Arduino, ESP32, Raspberry Pi Pico ou circuitos discretos)',
    ],
    arenaDetails: 'Pista de MDF fosco de 3m x 2m com curvas de raio fechado e marcas de parada reflexiva.',
    maxTeamSize: 4,
    scheduleTime: '27/11 · Competições & Geek (14h30 - 15h30)',
    editalPdfUrl: '#edital-buzz-line',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdFEmR2FsT9fwvZZjLlXCztOeZimsvnidaMZOBrRYKDA3u_Kg/viewform',
    prizeSummary: '1º, 2º e 3º Lugares com Troféu Maker 3D, medalhas e Kits de Sensores Analógicos e Digitais.',
    icon: 'Navigation',
    image: 'img/buzzline.png',
  },
  {
    id: 'buzz-pro',
    name: 'Buzz PRO Alta Performance',
    category: 'Seguidor de Linha Avançado',
    description: 'Categoria de altíssima velocidade com algoritmos PID refinados, freio por turbina aerodinâmica e leitura óptica em milissegundos.',
    requirements: [
      'Tempo de volta cronometrado por barreiras infravermelhas de laser',
      'Largura máxima: 20cm · Comprimento livre até 30cm',
      'Permitida turbina de sucção (downforce)',
      'Registro obrigatório de código-fonte aberto para fins educativos',
    ],
    arenaDetails: 'Pista profissional de 6m com desnível suave, curvas parabólicas e retas de arrancada.',
    maxTeamSize: 4,
    scheduleTime: '27/11 · Competições & Geek (14h30 - 15h30)',
    editalPdfUrl: '#edital-buzz-pro',
    registrationUrl: 'https://forms.gle/oxemaker2026-buzzpro',
    prizeSummary: 'Troféus, medalhas e kits de componentes eletrônicos para os vencedores.',
    icon: 'Zap',
    image: 'img/buzzpro.png',
  },
  {
    id: 'sumo',
    name: 'Sumô de Robôs (1kg e 3kg)',
    category: 'Arremesso & Estratégia',
    description: 'Duelos intensos em ringue circular (dohyo). O objetivo é localizar o oponente usando sensores e empurrá-lo para fora da borda branca.',
    requirements: [
      'Subcategorias: 1kg (Mini-Sumô) e 3kg (Sumô Autônomo e RC)',
      'Início com delay regulamentar de 5 segundos após partida',
      'Pás sem pontas cortantes nocivas à integridade dos alunos',
      'Dimensões na largada: 20x20cm (altura livre)',
    ],
    arenaDetails: 'Dohyo de aço/madeira preta de 154cm de diâmetro com borda de 5cm na cor branca brilhante.',
    maxTeamSize: 4,
    scheduleTime: '27/11 · Competições & Geek (14h30 - 15h30)',
    editalPdfUrl: '#edital-sumo',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeOckNfYCA_BdjSqGzWB88LSFskNIXUzmN4hGjTZ1QBykE2VQ/viewform',
    prizeSummary: 'Troféus dos Guerreiros do Mangue, motores de alto torque N20 e pontes H profissionais.',
    icon: 'Shield',
    image: 'img/sumo.png',
  },
];

/**
 * ============================================================================
 * 3 CATEGORIAS GEEK (COSPLAY, K-POP, JUST DANCE)
 * ============================================================================
 */
export const GEEK_CATEGORIES: GeekCategory[] = [
  {
    id: 'cosplay',
    name: 'Concurso Cosplay Ôxe Maker',
    subtitle: 'Criatividade, Caracterização & Performance',
    description: 'Celebração da cultura pop onde os estudantes se transformam em personagens de animes, mangás, games, HQs e universos geek.',
    criteria: [
      'Fidelidade e Acabamento da Fantasia (40%)',
      'Criatividade no uso de materiais makers e recicláveis (20%)',
      'Interpretação e Presença de Palco (30%)',
      'Empatia e Respeito às Normas do Evento (10%)',
    ],
    rulesHighlight: [
      'Inscrições limitadas a 40 participantes',
      'Armas cenográficas de metal cortante ou fogo são terminantemente proibidas',
      'Apresentações individuais (até 1min30s) e duplas (até 2min30s)',
      'Camarim climatizado para preparação dos participantes no local',
    ],
    scheduleTime: 'Sexta, 27 de novembro · Competições & Geek (14h30 - 15h30)',
    stage: 'EREM Áurea de Moura · Olinda-PE',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd4R3JcsSD_8gPA9DwBJ3HMes4C9Z5YwhQk57AadqcZn6wGug/viewform',
    rulesPdfUrl: '#regulamento-cosplay',
    prizes: '1º Lugar: R$ 800 em vales geek + Troféu Calango Dourado; 2º e 3º Lugares: Vales e Colecionáveis.',
    image: 'img/calango-cosplay.jpeg',
  },
  {
    id: 'kpop',
    name: 'Mostra & Torneio K-Pop Dance Cover',
    subtitle: 'Sincronia, Energia & Expressão Corporal',
    description: 'O palco ferve com coreografias das principais bandas e solistas da música pop coreana, revelando o talento rítmico dos jovens da rede pública.',
    criteria: [
      'Precisão da Coreografia e Sincronia (40%)',
      'Expressão Facial e Carisma Cênico (30%)',
      'Figurino e Caracterização do Grupo (20%)',
      'Harmonia de Grupo / Ocupação de Espaço (10%)',
    ],
    rulesHighlight: [
      'Modalidades: Solo e Grupos (de 2 a 9 integrantes)',
      'Tempo máximo de música: 4 minutos em áudio enviado previamente em alta qualidade (MP3)',
      'Ensaios e reconhecimento de palco combinados com a coordenação no dia 27/11',
    ],
    scheduleTime: 'Sexta, 27 de novembro · Competições & Geek (14h30 - 15h30)',
    stage: 'EREM Áurea de Moura · Olinda-PE',
    registrationUrl: 'https://forms.gle/oxemaker2026-kpop',
    rulesPdfUrl: '#regulamento-kpop',
    prizes: 'Troféus para Campeão Solo e Campeão Grupo + Vales em lojas de dança e kits culturais.',
    image: 'img/k-pop.png',
  },
  {
    id: 'justdance',
    name: 'Arena Just Dance Interativa',
    subtitle: 'Diversão Coletiva & Ritmo Sem Parar',
    description: 'Espaço aberto com projeção de alta definição e sensores de movimento. Qualquer estudante, professor ou visitante pode entrar na fila e dançar.',
    criteria: [
      'Pontuação direta calculada pelo sistema do jogo',
      'Partidas em mata-mata nas eliminatórias da tarde',
      'Bônus do juri popular para melhor animação',
    ],
    rulesHighlight: [
      'Espaço aberto durante todo o evento, com torneio no horário das Competições & Geek',
      'Torneio ranqueado no dia 27/11, das 14h30 às 15h30',
      'Músicas sorteadas entre a lista oficial do Just Dance 2025/2026',
    ],
    scheduleTime: 'Sexta, 27 de novembro · Competições & Geek (14h30 - 15h30)',
    stage: 'Tenda Gamer & Projeção Interativa',
    registrationUrl: 'https://forms.gle/oxemaker2026-justdance',
    rulesPdfUrl: '#regulamento-justdance',
    prizes: 'Medalhas Oficiais Ôxe Maker e brindes temáticos para os 4 maiores pontuadores do dia.',
    image: 'img/calango-just.jpeg',
  },
];

/**
 * ============================================================================
 * HACKATHON ÔXE MAKER (PITCH NO DIA 27/11)
 * ============================================================================
 */
export const OXETHON_INFO: OxethonInfo = {
  title: 'Hackathon Ôxe Maker',
  description:
    'As equipes do Hackathon Ôxe Maker apresentam seus projetos no grande pitch, no dia 27 de novembro de 2026, das 16h00 às 17h00, logo antes da cerimônia de premiação.',
  stages: [
    {
      phase: 'Apresentação do Pitch do Hackathon',
      time: 'Sexta, 27/11 · 16h00 às 17h00',
      description:
        'Momento de apresentação dos projetos das equipes, seguido da cerimônia de premiação às 17h00.',
    },
  ],
  regulationsSummary: [
    'As inscrições de equipes e projetos são feitas até 09 de outubro de 2026 pelos formulários oficiais.',
    'Mais detalhes do regulamento do Hackathon serão divulgados pela coordenação.',
    'Menores de idade devem apresentar autorização dos responsáveis no credenciamento (07h00 às 08h00).',
  ],
  slogan: 'O Hackathon Arretado',
  story:
    'O Ôxethon é a maratona de desenvolvimento e criação do Ôxe-Maker. Durante 48 horas, equipes multidisciplinares trabalham intensamente para criar soluções tecnológicas que impactem positivamente a comunidade local. É o lugar onde o código encontra a realidade e a inovação acontece na prática.',
  registrationUrl: 'https://forms.gle/oxemaker2026-oficineiros',
  regulationsUrl: '#regulamento-oxethon',
  image: 'img/oxethon.png',
};

/**
 * ============================================================================
 * OFICINA OFICIAL (27 DE NOVEMBRO DE 2026)
 * ============================================================================
 */
export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'robótica-cultura-maker',
    title: 'Robótica e Cultura Maker',
    description:
      'Oficina de robótica e cultura maker, das 10h00 às 12h00 no dia 27 de novembro. Os oficineiros (alunos e professores) são inscritos pelo formulário oficial até 09 de outubro de 2026.',
    schedule: '27 de novembro · 10h00 às 12h00',
    duration: '2 horas',
    room: 'Salas de oficina da EREM Áurea de Moura',
    targetAudience: 'Alunos e professores inscritos como oficineiros.',
    prerequisites: 'Inscrição previa pelo formulário oficial de Oficineiros (até 09/10/2026).',
    materialsProvided: [
      'Insumos e materiais fornecidos pela organização',
      'Atividades práticas de robótica educacional',
      'Abordagem de cultura maker: faça você mesmo',
    ],
    registrationUrl: 'https://forms.gle/oxemaker2026-oficineiros',
  },
  {
    id: 'soldagem-iniciantes',
    title: 'Soldagem para Iniciantes',
    description:
      'Aprenda as técnicas básicas de soldagem eletrônica e monte seu primeiro circuito arretado.',
    schedule: '27 de novembro · horário da tarde (a definir)',
    duration: '1h30',
    room: 'Laboratório Maker · EREM Áurea de Moura',
    targetAudience: 'Oficineiros iniciantes com ou sem experiência em eletrônica.',
    prerequisites: 'Inscrição como oficineiro pelo formulário oficial (até 09/10/2026).',
    materialsProvided: [
      'Ferros de solda e estações de retrabalho',
      'Kits de componentes eletrônicos para o circuito da aula',
      'Protoboard de prática individual',
    ],
    instructor: {
      name: 'Mestre Faísca',
      role: 'Instrutor de Eletrônica',
      institution: 'Equipe Ôxe Maker',
      bio: 'Especialista em eletrônica prática e reparos, conduz as aulas com didática mão na massa.',
    },
    registrationUrl: 'https://forms.gle/oxemaker2026-oficineiros',
  },
  {
    id: 'arduino-intro',
    title: 'Introdução ao Arduino',
    description:
      'Dê vida aos seus projetos! Aprenda a programar microcontroladores e controlar sensores e atuadores.',
    schedule: '27 de novembro · horário da tarde (a definir)',
    duration: '1h30',
    room: 'Laboratório Maker · EREM Áurea de Moura',
    targetAudience: 'Oficineiros com noções básicas de lógica de programação.',
    prerequisites: 'Inscrição como oficineiro pelo formulário oficial (até 09/10/2026).',
    materialsProvided: [
      'Placas Arduino e cabos USB',
      'Sensores (LDR, ultrassônico e de linha) e atuadores',
      'Computadores disponíveis no laboratório',
    ],
    instructor: {
      name: 'Eng. Bitola',
      role: 'Instrutor de Programação',
      institution: 'Equipe Ôxe Maker',
      bio: 'Engenheiro de sistemas e entusiasta maker, guia os primeiros passos com microcontroladores.',
    },
    registrationUrl: 'https://forms.gle/oxemaker2026-oficineiros',
  },
  {
    id: 'modelagem-3d',
    title: 'Modelagem 3D com Tinkercad',
    description:
      'Crie seus próprios objetos em 3D e entenda como funciona a impressão 3D na prática.',
    schedule: '27 de novembro · horário da tarde (a definir)',
    duration: '1h30',
    room: 'Laboratório Maker · EREM Áurea de Moura',
    targetAudience: 'Oficineiros curiosos por design e fabricação digital.',
    prerequisites: 'Inscrição como oficineiro pelo formulário oficial (até 09/10/2026).',
    materialsProvided: [
      'Acesso online ao Tinkercad',
      'Impressão 3D ao vivo das peças modeladas na aula',
      'Filamentos PLA de demonstração',
    ],
    instructor: {
      name: 'Profa. Polígono',
      role: 'Instrutora de Design & Impressão 3D',
      institution: 'Equipe Ôxe Maker',
      bio: 'Arquiteta e educadora, une design digital à fabricação acessível.',
    },
    registrationUrl: 'https://forms.gle/oxemaker2026-oficineiros',
  },
  {
    id: 'robotica-sucata',
    title: 'Robótica com Sucata',
    description:
      'Transforme o que seria lixo em tecnologia! Oficina prática de reaproveitamento de materiais.',
    schedule: '27 de novembro · horário da tarde (a definir)',
    duration: '1h30',
    room: 'Laboratório Maker · EREM Áurea de Moura',
    targetAudience: 'Oficineiros de todas as idades, alinhado ao tema de justiça socioambiental.',
    prerequisites: 'Inscrição como oficineiro pelo formulário oficial (até 09/10/2026).',
    materialsProvided: [
      'Sucatas eletrônicas e mecânicas (coolers, motores, caixas de leite)',
      'Ferramentas de montagem e cola quente',
      'Baterias e fiação de reaproveitamento',
    ],
    instructor: {
      name: 'Recicla-Man',
      role: 'Instrutor de Reaproveitamento Maker',
      institution: 'Equipe Ôxe Maker',
      bio: 'Mestre do upcycling, transforma descarte em máquinas funcionais.',
    },
    registrationUrl: 'https://forms.gle/oxemaker2026-oficineiros',
  },
];

/**
 * ============================================================================
 * LINHA DO TEMPO DA HISTÓRIA (2021–2026)
 * ============================================================================
 */
export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: 2021,
    edition: '1ª Edição',
    title: 'O Começo de Tudo: A Centelha no Pátio',
    description: 'Em meio aos desafios da retomada escolar pós-isolamento, um grupo incansável de professores de física, matemática e informática da GRE Metropolitana Norte uniu 8 escolas no pátio da ETE para compartilhar os primeiros carrinhos seguidores de linha feitos de papelão.',
    stats: '8 escolas · 120 estudantes · 1 arena improvisada',
  },
  {
    year: 2022,
    edition: '2ª Edição',
    title: 'Nasce a Identidade: O Ôxe que Conecta',
    description: 'O evento ganha oficialmente o nome "Ôxe Maker", celebrando o sotaque e o orgulho pernambucano. Introdução da modalidade Sumô de Robôs e adesão de escolas regulares do ensino fundamental.',
    stats: '18 escolas · 350 estudantes · 400 visitantes',
  },
  {
    year: 2023,
    edition: '3ª Edição',
    title: 'A Chegada da Cultura Geek & Palco Aberto',
    description: 'Reconhecendo que a robótica anda de mãos dadas com animes, ficção científica e dança urbana, o evento expande suas fronteiras com o primeiro Concurso Cosplay e Arena Gamer na rede pública.',
    stats: '32 escolas · 780 participantes · 2 dias de mostra',
  },
  {
    year: 2024,
    edition: '4ª Edição',
    title: 'Consolidação Regional & Primeira Arena Blindada',
    description: 'Criação do combate de robôs com gaiola de proteção e a primeira maratona de prototipagem rápida. Escolas de Olinda, Paulista, Abreu e Lima e Igarassu lotam o ginásio da ETE.',
    stats: '46 escolas parceiras · 1.400 estudantes · 4.500 visitantes',
  },
  {
    year: 2025,
    edition: '5ª Edição',
    title: 'Marco Histórico: +70 Escolas e 10 Mil Visitantes',
    description: 'A 5ª edição celebrou a maturidade do movimento com mais de 70 escolas envolvidas, feira de projetos científicos premiada nacionalmente e cerca de 10.000 pessoas circulando nos 2 dias.',
    stats: '70+ escolas · ~2.000 alunos protagonistas · ~10.000 visitantes',
  },
  {
    year: 2026,
    edition: '6ª Edição',
    title: 'O Presente: Justiça Socioambiental & Futuro',
    description:
      'A 6ª edição acontece em um único dia, 27 de novembro, na EREM Áurea de Moura em Olinda, com oficinas, mostra de projetos, competições, cultura geek e o pitch do Hackathon.',
    stats: '58+ escolas parceiras · 6+ competições · 90+ projetos makers',
  },
];

/**
 * ============================================================================
 * HOMENAGEM À FUNDADORA
 * ============================================================================
 */
export const FOUNDER_TRIBUTE: FounderTribute = {
  name: 'Lidyane Lira',
  role: 'Fundadora do Ôxe Maker',
  title: 'Idealizadora da Mostra de Robótica Educacional',
  bio: [
    'Lidyane Lira é a fundadora do Ôxe Maker, a Mostra de Robótica Educacional da GRE Metropolitana Norte que, desde 2021, leva robótica, cultura maker e protagonismo juvenil para as escolas da rede pública de Pernambuco.',
    'Sua dedicação é a bússola ética e pedagógica de cada edição do evento, que em 2026 chega à sua 6ª edição.',
  ],
  imagePlaceholder: '/img/homenagem-lidyane.svg',
};

/**
 * ============================================================================
 * REALIZAÇÃO OFICIAL
 * ============================================================================
 */
export const SPONSORS_TIERS: SponsorTier[] = [
  {
    tierName: 'Realização Oficial',
    description: 'Iniciativa institucional pública de educação e cidadania',
    sponsors: [
      {
        name: 'GRE Metropolitana Norte',
        role: 'Gerência Regional de Educação de Pernambuco',
        logoAlt: 'Logo da GRE Metropolitana Norte',
      },
      {
        name: 'Secretaria de Educação e Esportes de PE',
        role: 'Governo do Estado de Pernambuco',
        logoAlt: 'Logo da Secretaria de Educação e Esportes de Pernambuco',
      },
      {
        name: 'EREM Áurea de Moura',
        role: 'Escola Anfitriã (Olinda-PE)',
        logoAlt: 'Logo da EREM Áurea de Moura',
      },
    ],
  },
];

/**
 * ============================================================================
 * GALERIA HISTÓRICA DE MOMENTOS (2021–2026)
 * ============================================================================
 */
export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Disputa Intensa no Dohyo de Sumô',
    year: 2025,
    category: 'competicoes',
    description: 'Momento decisivo entre os robôs autônomos da EREM Olinda e ETE Paulista no ginásio lotado.',
    caption: 'Foto: Arquivo GRE Metro Norte 2025',
    image: 'img/logo06oxemaker.jpeg',
  },
  {
    id: 'gal-2',
    title: 'Mão na Massa: Montando o Primeiro Circuito',
    year: 2025,
    category: 'oficinas',
    description: 'Estudantes do ensino fundamental testando sensores de luz LDR durante a oficina prática de Arduino.',
    caption: 'Foto: Laboratório Maker Ôxe Maker',
    image: 'img/logoOxemaker05.jpeg',
  },
  {
    id: 'gal-3',
    title: 'Desfile Cosplay com Torcida Apaixonada',
    year: 2024,
    category: 'geek',
    description: 'O palco do pátio reuniu caracterizações marcantes inspiradas em jogos e heróis da ficção científica.',
    caption: 'Foto: Palco Geek Ôxe Maker',
    image: 'img/oxemakerlogo2024.jpeg',
  },
  {
    id: 'gal-4',
    title: 'Prototipando com Sucata e Motores Reciclados',
    year: 2023,
    category: 'projetos',
    description: 'Robôs construídos com coolers de computador e caixas de leite demonstrando a força do lixo zero.',
    caption: 'Foto: Mostra Científica 2023',
    image: 'img/oxemaker-logo01.jpeg',
  },
  {
    id: 'gal-5',
    title: 'A Largada do Seguidor de Linha Buzz Line',
    year: 2024,
    category: 'competicoes',
    description: 'Concentração absoluta dos jovens pilotos antes de acionar a chave táctil do robô seguidor.',
    caption: 'Foto: Pista Alfa de Robótica',
    image: 'img/logo01oxemaker.jpeg',
  },
  {
    id: 'gal-6',
    title: 'A Celebração dos Troféus no Pódio Maker',
    year: 2025,
    category: 'competicoes',
    description: 'Equipes de 12 escolas diferentes comemorando juntas com os troféus ecológicos feitos em 3D.',
    caption: 'Foto: Cerimônia de Premiação 2025',
    image: 'img/logooxemaker02.jpeg',
  },
];

/**
 * ============================================================================
 * PERGUNTAS FREQUENTES (FAQ)
 * ============================================================================
 */
export const FAQ_DATA = [
  {
    question: 'Quando e onde acontece o Ôxe Maker 2026?',
    answer:
      'O evento acontece em um único dia: 27 de novembro de 2026 (sexta-feira), das 07h00 às 18h00, na EREM Áurea de Moura (Rodovia PE-15, Km 3,6 — Ouro Preto, Olinda-PE).',
  },
  {
    question: 'Até quando posso me inscrever?',
    answer:
      'As inscrições vão até 09 de outubro de 2026 e são feitas em três modalidades: Oficineiros (alunos e professores), Mostra de Projetos (equipes) e Palestrantes.',
  },
  {
    question: 'Quais são as modalidades de inscrição?',
    answer:
      'São três: Oficineiros (para alunos e professores que querem participar das oficinas), Mostra de Projetos (para equipes apresentarem seus projetos à banca) e Palestrantes (para quem deseja palestrar, preferencialmente no formato TED Talks).',
  },
  {
    question: 'Quem pode participar do Ôxe Maker?',
    answer:
      'O evento é da GRE Metropolitana Norte e abre espaço para toda a comunidade escolar: estudantes da rede estadual, professores, famílias e amantes da tecnologia.',
  },
  {
    question: 'Como faço para participar das competições?',
    answer:
      'Acesse as abas Torneios (Buzz Line, Buzz PRO e Sumô de Robôs) e Cultura Geek (Cosplay, K-POP e Just Dance), confirme as regras da categoria desejada e faça sua inscrição até 09/10/2026. As competições acontecem no dia 27/11, das 14h30 às 15h30.',
  },
  {
    question: 'Qual é a programação do dia do evento?',
    answer:
      'Das 07h00 às 08h00 credenciamento; 08h30 abertura cultural; 09h00 TED Talks; 09h30 lanche; 10h00 às 12h00 oficinas; 12h00 almoço; 13h00 Mostra de Projetos; 14h30 competições e cultura geek; 16h00 pitch do Hackathon; 17h00 cerimônia de premiação. A grade completa está na aba Programação.',
  },
];
