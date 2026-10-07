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
    display: '02 e 03 de julho de 2026',
    day1: '02 de Julho de 2026 (Quinta-feira)',
    day2: '03 de Julho de 2026 (Sexta-feira)',
    isoStartDate: '2026-07-02T09:00:00-03:00',
    isoEndDate: '2026-07-03T17:30:00-03:00',
    timeRange: 'Das 07h00 às 17h30',
  },
  location: {
    venue: 'Escola Técnica Estadual (ETE) José de Alencar',
    space: 'Ginásio Poliesportivo e Pátio Central',
    street: 'Av. Getúlio Vargas, s/n',
    neighborhood: 'Bairro Novo',
    city: 'Olinda',
    state: 'PE',
    cep: '53030-010',
    fullAddress: 'Av. Getúlio Vargas, s/n, Bairro Novo, Olinda – PE, 53030-010',
    // Embed URL for Google Maps
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.8877548483257!2d-34.8488829!3d-7.9996766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d27453d1e1f%3A0xe5a3cfa40a436e2f!2sETE%20Jos%C3%A9%20de%20Alencar!5e0!3m2!1spt-BR!2sbr!4v1717000000000',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=ETE+Jose+de+Alencar+Olinda+PE',
    referencePoints: [
      'Em frente à Orla de Bairro Novo (próximo ao Shopping Patteo Olinda)',
      'A 600m da Praça 12 de Março',
      'Fácil acesso pela Av. Governador Carlos de Lima Cavalcanti',
    ],
    transitTips: [
      {
        title: 'Ônibus (Terminais Integrados)',
        description: 'Linhas com desembarque na Av. Getúlio Vargas ou Av. Gov. Carlos de Lima Cavalcanti via TI PE-15, TI Rio Doce e TI Xambá (Ex: 1992 Pau Amarelo, 1993 Conjunto Praia Janga, 1981 Rio Doce).',
      },
      {
        title: 'Bicicleta / Ciclovia',
        description: 'Bicicletário coberto disponível no pátio interno da ETE com segurança para estudantes e visitantes.',
      },
      {
        title: 'Estacionamento de Caravanas Escolares',
        description: 'Baia exclusiva para embarque/desembarque de ônibus escolares da Rede Estadual com credenciamento prévio.',
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
    generalRegistration: 'https://forms.gle/oxemaker2026-visitantes',
    tournamentRegistration: 'https://forms.gle/oxemaker2026-torneios',
    geekRegistration: 'https://forms.gle/oxemaker2026-geek',
    oxethonRegistration: 'https://forms.gle/oxemaker2026-oxethon',
    workshopRegistration: 'https://forms.gle/oxemaker2026-oficinas',
    volunteerRegistration: 'https://forms.gle/oxemaker2026-voluntarios',
    schoolCaravanRegistration: 'https://forms.gle/oxemaker2026-caravanas',
    generalEditalPdf: '#edital-oxemaker-2026',
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
    value: 9,
    suffix: '+',
    label: 'Competições & Desafios',
    description: 'Modalidades de robótica autônoma, combate e cultura geek.',
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
    description: 'Aprenda eletrônica, soldagem, programação de microcontroladores e modelagem 3D do zero com kits abertos.',
    iconName: 'Wrench',
    link: '/oficinas',
    tag: 'Laboratórios Vivos',
    accentColor: 'yellow',
  },
  {
    id: 'conexoes',
    title: 'Conexões que Transformam',
    description: 'Intercâmbio entre estudantes da periferia, pesquisadores universitários e o ecossistema tecnológico do Porto Digital.',
    iconName: 'Network',
    link: '/sobre',
    tag: 'Impacto Social',
    accentColor: 'cyan',
  },
  {
    id: 'torneios',
    title: 'Torneios de Robótica',
    description: 'Batalhas emocionantes de robôs de combate, sumô 1kg e 3kg, seguidores de linha velozes Buzz Line e robô resgate.',
    iconName: 'Bot',
    link: '/torneio',
    tag: 'Arenas Dinâmicas',
    accentColor: 'yellow',
  },
  {
    id: 'oxethon',
    title: 'Oxethon · Hackathon 48h',
    description: 'Maratona imersiva de ideação e prototipagem com foco em soluções para justiça socioambiental e mudanças climáticas.',
    iconName: 'Cpu',
    link: '/oxethon',
    tag: 'Maratona Maker',
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
 * PROGRAMAÇÃO COMPLETA (02 E 03 DE JULHO DE 2026)
 * ============================================================================
 */
export const SCHEDULE_DATA: ScheduleItem[] = [
  // DIA 1 - 02 DE JULHO
  {
    id: 'd1-1',
    day: 'day1',
    time: '07h00 - 08h30',
    title: 'Credenciamento & Recepção das Caravanas Escolares',
    description: 'Entrega de crachás, boas-vindas com o Calango Mascote e pesagem inicial dos robôs nas baias técnicas.',
    category: 'cerimonia',
    location: 'Portaria Principal & Hall da ETE',
    speakerOrHost: 'Equipe de Acolhimento GRE Metro Norte',
  },
  {
    id: 'd1-2',
    day: 'day1',
    time: '08h30 - 09h30',
    title: 'Solenidade de Abertura & Mesa de Convidados',
    description: 'Abertura oficial com gestores da GRE Metropolitana Norte, professores idealizadores e representantes da comunidade.',
    category: 'cerimonia',
    location: 'Palco Central · Pátio',
    speakerOrHost: 'Gestores GRE e Representantes Estudantis',
  },
  {
    id: 'd1-3',
    day: 'day1',
    time: '09h30 - 10h30',
    title: 'Palestra Magna: Educar para a Justiça Socioambiental no Século XXI',
    description: 'Como a robótica com sucata e o pensamento computacional regeneram escolas públicas e comunidades litorâneas.',
    category: 'palestras',
    location: 'Auditório Master',
    speakerOrHost: 'Pesquisadores convidados e Mestres da Rede',
  },
  {
    id: 'd1-4',
    day: 'day1',
    time: '10h00 - 12h00',
    title: 'Oficina: Soldagem para Iniciantes & Placas Sustentáveis',
    description: 'Fundamentos de ferro de solda, segurança, solda estanho e reaproveitamento de componentes descartados.',
    category: 'oficinas',
    location: 'Laboratório Maker 1',
    speakerOrHost: 'Prof. Gilberto Santos & Monitores Técnicos',
  },
  {
    id: 'd1-5',
    day: 'day1',
    time: '10h30 - 12h30',
    title: 'Início das Classificatórias: Buzz Line Júnior & Sumô 1kg',
    description: 'Rodadas eliminatórias nas pistas ópticas de alta precisão e dohyo com sensores ultrassônicos.',
    category: 'robotica',
    location: 'Ginásio · Arena Alfa & Arena Beta',
    speakerOrHost: 'Comitê de Juízes de Robótica',
  },
  {
    id: 'd1-6',
    day: 'day1',
    time: '11h00',
    title: 'Abertura Oficial do Oxethon 48h (Pitch dos Desafios)',
    description: 'Apresentação detalhada das 4 trilhas socioambientais e formação das equipes multidisciplinares.',
    category: 'cerimonia',
    location: 'Espaço Inovação Oxethon',
    speakerOrHost: 'Mentores de Tecnologia Socioambiental',
  },
  {
    id: 'd1-7',
    day: 'day1',
    time: '12h30 - 13h30',
    title: 'Intervalo Almoço & Apresentação Cultural: Maracatu Maker',
    description: 'Percussão pernambucana tradicional mesclada com instrumentos musicais sintetizados por Arduino.',
    category: 'cerimonia',
    location: 'Pátio Central',
    speakerOrHost: 'Grupo Cultural ETE José de Alencar',
  },
  {
    id: 'd1-8',
    day: 'day1',
    time: '13h30 - 15h30',
    title: 'Oficina: Introdução ao Arduino & Sensores do Cotidiano',
    description: 'Montagem de circuito inteligente para alerta de alagamentos urbanos usando sensores de nível de água.',
    category: 'oficinas',
    location: 'Laboratório Maker 2',
    speakerOrHost: 'Profª Danielle Albuquerque',
  },
  {
    id: 'd1-9',
    day: 'day1',
    time: '14h00 - 16h30',
    title: 'Batalhas de Robôs de Combate (Antweight) · Etapa 1',
    description: 'Confrontos na arena blindada de policarbonato com lâminas, tambores rotativos e rádio frequência.',
    category: 'robotica',
    location: 'Ginásio · Arena Blindada',
    speakerOrHost: 'Narrador Geek & Juízes Técnicos',
  },
  {
    id: 'd1-10',
    day: 'day1',
    time: '15h00 - 17h00',
    title: 'Arena Geek: Torneio Aberto Just Dance 2026',
    description: 'Coreografias liberadas para alunos, professores e comunidade no telão interativo.',
    category: 'geek',
    location: 'Palco Geek · Pátio',
    speakerOrHost: 'Coletivo Geek Jovem PE',
  },
  {
    id: 'd1-11',
    day: 'day1',
    time: '17h00 - 17h30',
    title: 'Check-in do Dia 1 & Painel de Resultados Preliminares',
    description: 'Encerramento do primeiro dia com anúncios dos classificados para as semifinais.',
    category: 'cerimonia',
    location: 'Palco Central',
    speakerOrHost: 'Coordenação Geral Ôxe Maker',
  },

  // DIA 2 - 03 DE JULHO
  {
    id: 'd2-1',
    day: 'day2',
    time: '07h30 - 08h30',
    title: 'Abertura dos Portões & Ajustes Técnicos nos Pits de Robôs',
    description: 'Inspeção técnica final, testes de bateria de lítio e alinhamento dos circuitos sensores.',
    category: 'cerimonia',
    location: 'Pits de Engenharia · Ginásio',
    speakerOrHost: 'Comissão Técnica',
  },
  {
    id: 'd2-2',
    day: 'day2',
    time: '08h30 - 10h30',
    title: 'Oficina: Modelagem 3D com Tinkercad para Impressão 3D',
    description: 'Criação de carcaças estruturais ecológicas para peças mecânicas e robôs didáticos.',
    category: 'oficinas',
    location: 'Laboratório Maker 1',
    speakerOrHost: 'Prof. Thiago Bezerra',
  },
  {
    id: 'd2-3',
    day: 'day2',
    time: '09h00 - 12h00',
    title: 'Semifinais & Finais: Buzz PRO & Sumô 3kg Autônomo',
    description: 'Máquinas em velocidade máxima e estratégias de expulsão no dohyo profissional.',
    category: 'robotica',
    location: 'Ginásio · Arenas Principais',
    speakerOrHost: 'Árbitros Oficiais',
  },
  {
    id: 'd2-4',
    day: 'day2',
    time: '10h00 - 12h00',
    title: 'Desafio Robô Resgate Socioambiental',
    description: 'Simulação em pista com obstáculos: robôs móveis resgatando vítimas e amostras ecológicas simuladas.',
    category: 'robotica',
    location: 'Ginásio · Pista de Resgate',
    speakerOrHost: 'Monitores de Automação',
  },
  {
    id: 'd2-5',
    day: 'day2',
    time: '10h30 - 12h30',
    title: 'Oficina: Robótica Sustentável com Sucata Eletrônica',
    description: 'Transformação de drives de DVD, coolers velhos e papelão em robôs bípedes e autômatos divertidos.',
    category: 'oficinas',
    location: 'Laboratório Maker 3',
    speakerOrHost: 'Profª Clarice Santana',
  },
  {
    id: 'd2-6',
    day: 'day2',
    time: '12h30 - 13h30',
    title: 'Intervalo & Batalha de Rimas Maker / Geek',
    description: 'Repente nordestino cruzado com tecnologia e cultura gamer pelos alunos da rede estadual.',
    category: 'geek',
    location: 'Pátio Central',
    speakerOrHost: 'Coletivo de Rima Jovem',
  },
  {
    id: 'd2-7',
    day: 'day2',
    time: '13h30 - 15h00',
    title: 'Desfile & Concurso Oficial de Cosplay Ôxe Maker',
    description: 'Apresentações individuais e em duplas com personagens de animes, jogos, quadrinhos e ficção científica.',
    category: 'geek',
    location: 'Palco Geek',
    speakerOrHost: 'Banca Julgadora de Cosmakers',
  },
  {
    id: 'd2-8',
    day: 'day2',
    time: '14h00',
    title: 'Oxethon 48h: Encerramento de Prototipagem & Bancas de Pitch',
    description: 'Apresentação dos protótipos finais das equipes para a banca examinadora de impacto socioambiental.',
    category: 'palestras',
    location: 'Auditório Master',
    speakerOrHost: 'Banca Julgadora de Inovação',
  },
  {
    id: 'd2-9',
    day: 'day2',
    time: '15h00 - 16h15',
    title: 'Campeonato K-Pop Dance Cover (Solo & Grupos)',
    description: 'Performances e coreografias de destaque com julgamento de precisão rítmica e expressividade.',
    category: 'geek',
    location: 'Palco Geek',
    speakerOrHost: 'Jurados de Dança Urbana',
  },
  {
    id: 'd2-10',
    day: 'day2',
    time: '16h15 - 16h45',
    title: 'Grandes Finais dos Robôs de Combate',
    description: 'Disputa de ouro e prata na arena blindada com torcida vibrante de todas as escolas.',
    category: 'robotica',
    location: 'Ginásio · Arena Blindada',
    speakerOrHost: 'Equipe Organizadora Ôxe Maker',
  },
  {
    id: 'd2-11',
    day: 'day2',
    time: '16h45 - 17h30',
    title: 'Grande Cerimônia de Premiação & Encerramento Oficial',
    description: 'Entrega dos troféus Ôxe Maker 2026, medalhas, kits de robótica e homenagem comemorativa dos 6 anos.',
    category: 'cerimonia',
    location: 'Palco Central',
    speakerOrHost: 'GRE Metropolitana Norte & Fundadores',
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
    scheduleTime: '02/07 às 10h30 (Classificatórias) · 03/07 às 09h00 (Finais)',
    editalPdfUrl: '#edital-buzz-line',
    registrationUrl: 'https://forms.gle/oxemaker2026-buzzline',
    prizeSummary: '1º, 2º e 3º Lugares com Troféu Maker 3D, medalhas e Kits de Sensores Analógicos e Digitais.',
    icon: 'Navigation',
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
    scheduleTime: '03/07 das 09h30 às 11h30',
    editalPdfUrl: '#edital-buzz-pro',
    registrationUrl: 'https://forms.gle/oxemaker2026-buzzpro',
    prizeSummary: 'Troféus de fibra sustentável, placas ESP32-S3 e vouchers para workshops do Porto Digital.',
    icon: 'Zap',
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
    scheduleTime: '02/07 às 11h00 (1kg) · 03/07 às 10h00 (3kg)',
    editalPdfUrl: '#edital-sumo',
    registrationUrl: 'https://forms.gle/oxemaker2026-sumo',
    prizeSummary: 'Troféus dos Guerreiros do Mangue, motores de alto torque N20 e pontes H profissionais.',
    icon: 'Shield',
  },
  {
    id: 'combate',
    name: 'Combate de Robôs (Antweight)',
    category: 'Batalha Blindada',
    description: 'Robôs rádio controlados de até 454g (1 libra) batalhando dentro de uma arena hermética com vidros de policarbonato à prova de impacto.',
    requirements: [
      'Peso máximo: 454 gramas (categoria Antweight)',
      'Fail-safe obrigatório no sistema de transmissão 2.4GHz',
      'Armas ativas: tambores, barras giratórias, cunhas e discos',
      'Chave geral de segurança (weapon safety lock) inspecionada',
    ],
    arenaDetails: 'Arena blindada de 2m x 2m com exaustão, teto em policarbonato 8mm e piso antiderrapante.',
    maxTeamSize: 3,
    scheduleTime: '01ª Rodada: 02/07 às 14h00 · Finais: 03/07 às 16h15',
    editalPdfUrl: '#edital-combate',
    registrationUrl: 'https://forms.gle/oxemaker2026-combate',
    prizeSummary: 'Cinturão Campeão Antweight Ôxe Maker 2026, kits de motores brushless e ESCs.',
    icon: 'Swords',
  },
  {
    id: 'resgate-socioambiental',
    name: 'Robô Resgate Socioambiental',
    category: 'Desafio Temático 2026',
    description: 'Desafio especial conectado ao tema de 2026! Robôs simulam operações de salvamento ecológico: retirada de detritos de rios e resgate em áreas alagadas.',
    requirements: [
      'Estrutura com pelo menos 40% de materiais reciclados ou reaproveitados',
      'Manipulador mecânico ou garra funcional para transporte de amostras',
      'Deslocamento autônomo ou teleoperado com câmera/sensores',
      'Relatório de impacto socioambiental da equipe anexado',
    ],
    arenaDetails: 'Circuito temático simulando áreas ribeirinhas, mangues de Olinda e pontes ecológicas.',
    maxTeamSize: 5,
    scheduleTime: '03/07 das 10h00 às 12h00',
    editalPdfUrl: '#edital-resgate',
    registrationUrl: 'https://forms.gle/oxemaker2026-resgate',
    prizeSummary: 'Troféu Especial Justiça Socioambiental 2026, kit completo de robótica maker e mentoria.',
    icon: 'HeartHandshake',
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
      'Inscrições gratuitas limitadas a 40 participantes',
      'Armas cenográficas de metal cortante ou fogo são terminantemente proibidas',
      'Apresentações individuais (até 1min30s) e duplas (até 2min30s)',
      'Camarim climatizado para preparação dos participantes no local',
    ],
    scheduleTime: 'Sexta, 03 de julho, das 13h30 às 15h00',
    stage: 'Palco Geek · Pátio Central da ETE',
    registrationUrl: 'https://forms.gle/oxemaker2026-cosplay',
    rulesPdfUrl: '#regulamento-cosplay',
    prizes: '1º Lugar: R$ 800 em vales geek + Troféu Calango Dourado; 2º e 3º Lugares: Vales e Colecionáveis.',
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
      'Ensaios de reconhecimento de palco das 11h às 12h no dia 03/07',
    ],
    scheduleTime: 'Sexta, 03 de julho, das 15h00 às 16h15',
    stage: 'Palco Geek · Pátio Central da ETE',
    registrationUrl: 'https://forms.gle/oxemaker2026-kpop',
    rulesPdfUrl: '#regulamento-kpop',
    prizes: 'Troféus para Campeão Solo e Campeão Grupo + Vales em lojas de dança e kits culturais.',
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
      'Horário livre para recreação durante as manhãs',
      'Torneio ranqueado no Dia 01 das 15h00 às 17h00',
      'Músicas sorteadas entre a lista oficial do Just Dance 2025/2026',
    ],
    scheduleTime: 'Quinta, 02 de julho, das 15h00 às 17h00 (e livre nos intervalos)',
    stage: 'Tenda Gamer & Projeção Interativa',
    registrationUrl: 'https://forms.gle/oxemaker2026-justdance',
    rulesPdfUrl: '#regulamento-justdance',
    prizes: 'Medalhas Oficiais Ôxe Maker e brindes temáticos para os 4 maiores pontuadores do dia.',
  },
];

/**
 * ============================================================================
 * OXETHON · HACKATHON 48 HORAS
 * ============================================================================
 */
export const OXETHON_INFO: OxethonInfo = {
  title: 'Oxethon 2026 · O Hackathon do Ôxe Maker',
  durationHours: 48,
  theme: 'Vidas, Escolas e Comunidades: Prototipando Soluções para a Justiça Socioambiental',
  description: 'Uma maratona intensa onde estudantes da rede pública, orientados por professores e mentores de tecnologia, constroem protótipos funcionais de hardware e software aberto para resolver problemas concretos das comunidades de Olinda, Recife e região metropolitana.',
  registrationDeadline: '25 de junho de 2026 às 23h59',
  maxTeams: 20,
  teamSize: '3 a 5 integrantes (sendo obrigatório ao menos 1 estudante da rede pública de PE)',
  stages: [
    {
      phase: 'Fase 1: Aquecimento & Ideação',
      time: 'Quinta, 02/07 · 11h00',
      description: 'Lançamento das problemáticas reais trazidas pelas comunidades locais, imersão em design thinking e definição dos escopos.',
    },
    {
      phase: 'Fase 2: Mentoria & Prototipagem Mão na Massa',
      time: 'Quinta e Sexta · 13h00 às 11h00',
      description: 'Acesso liberado às bancadas maker (impressoras 3D, microcontroladores, sensores e ferramentas manuais) com mentoria técnica.',
    },
    {
      phase: 'Fase 3: Testes em Campo & Refinamento',
      time: 'Sexta, 03/07 · 11h00 às 13h30',
      description: 'Validação funcional dos protótipos, preparação dos slides de pitch de 3 minutos e gravação de demonstração.',
    },
    {
      phase: 'Fase 4: Grande Banca de Pitch & Premiação',
      time: 'Sexta, 03/07 · 14h00 às 16h00',
      description: 'Apresentação pública perante banca de especialistas do Porto Digital, secretarias de meio ambiente e educadores.',
    },
  ],
  tracks: [
    {
      id: 'trilha-1',
      number: 'Trilha 01',
      title: 'Monitoramento Climático & Prevenção de Enchentes',
      problemStatement: 'Como criar estações meteorológicas escolares de baixo custo com sensores ultrassônicos e rádio LoRa para alertar comunidades sobre risco de alagamentos?',
      expectedDeliverable: 'Protótipo físico com sensor de lâmina d\'água ou pluviômetro conectado a dashboard simples.',
      focusArea: 'Resiliência Urbana',
    },
    {
      id: 'trilha-2',
      number: 'Trilha 02',
      title: 'Preservação dos Manguezais & Rios Locais',
      problemStatement: 'Dispositivos inteligentes para detecção de turbidez da água, pH e microplásticos nos estuários e bacias hidrográficas da Região Metropolitana.',
      expectedDeliverable: 'Dispositivo boia ou sensor submersível com sinalizador luminoso e registro de dados.',
      focusArea: 'Ecossistemas Costeiros',
    },
    {
      id: 'trilha-3',
      number: 'Trilha 03',
      title: 'Economia Circular & Gestão Inteligente de Resíduos',
      problemStatement: 'Lixeiras inteligentes para triagem automatizada de materiais recicláveis nas escolas ou trituradores mecânicos de plástico para filamento 3D.',
      expectedDeliverable: 'Mecanismo eletromecânico automatizado para classificação ou reutilização de insumos escolares.',
      focusArea: 'Resíduos Zero',
    },
    {
      id: 'trilha-4',
      number: 'Trilha 04',
      title: 'Acessibilidade & Tecnologia Assistiva Escolar',
      problemStatement: 'Criação de instrumentos pedagógicos adaptados, leitores táteis e sinalizadores inclusivos para estudantes com deficiência visual ou motora.',
      expectedDeliverable: 'Interface tátil, sonora ou mecânica inclusiva com componentes de baixo custo.',
      focusArea: 'Inclusão & Equidade',
    },
  ],
  prizes: [
    {
      place: '1º Lugar Geral',
      reward: 'R$ 2.500 em equipamentos para o laboratório da escola + Kits Avançados ESP32 + Troféu Ouro Oxethon',
      perks: 'Aceleração e pré-incubação de 6 meses no programa de jovens talentos.',
    },
    {
      place: '2º Lugar Geral',
      reward: 'R$ 1.500 em componentes eletrônicos + Kits Arduino Master + Troféu Prata Oxethon',
      perks: 'Visita técnica imersiva aos centros de inovação do Porto Digital.',
    },
    {
      place: '3º Lugar Geral',
      reward: 'Kits Maker Completos de Eletrônica + Troféu Bronze Oxethon',
      perks: 'Bolsas de curso de formação tecnológica online.',
    },
  ],
  regulationsSummary: [
    'O código e o design desenvolvidos durante a maratona devem ser de código aberto (Creative Commons / MIT).',
    'Todas as equipes receberão mentoria de especialistas voluntários da área de engenharia, design e biologia.',
    'A ETE fornecerá bancadas de soldagem, tomadas, internet dedicada e kit básico de insumos.',
    'Menores de idade devem apresentar autorização dos responsáveis no momento do credenciamento.',
  ],
};

/**
 * ============================================================================
 * 4 OFICINAS PRÁTICAS
 * ============================================================================
 */
export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'soldagem',
    title: 'Soldagem para Iniciantes & Eletrônica Básica',
    instructor: {
      name: 'Prof. Gilberto Santos',
      role: 'Engenheiro Eletrônico & Educador Maker',
      institution: 'ETE José de Alencar / GRE Metro Norte',
      bio: 'Especialista em automação industrial e entusiasta do conserto autônomo de circuitos com 12 anos de docência na rede pública estadual.',
    },
    schedule: '02 de julho · 10h00 às 12h00',
    duration: '2 horas',
    capacity: 25,
    room: 'Laboratório Maker 1 (Sala 102)',
    targetAudience: 'Estudantes a partir do 8º ano do fundamental e professores iniciantes.',
    prerequisites: 'Nenhum conhecimento prévio exigido. Uso de óculos de proteção fornecido no local.',
    description: 'Aprenda na prática a manusear o ferro de solda com segurança, entender resistores, LEDs e trilhas em placas perfuradas, montando seu próprio crachá eletrônico piscante.',
    materialsProvided: [
      'Ferro de solda e suporte com esponja vegetal',
      'Fio de estanho ecológico (sem chumbo)',
      'Placa de circuito didática e componentes (LEDs, resistores, bateria moeda)',
      'Óculos de proteção individual',
    ],
    registrationUrl: 'https://forms.gle/oxemaker2026-oficina-soldagem',
  },
  {
    id: 'arduino',
    title: 'Introdução ao Arduino & Sensores do Cotidiano',
    instructor: {
      name: 'Profª Danielle Albuquerque',
      role: 'Mestre em Ensino das Ciências & Coordenadora de Robótica',
      institution: 'Escola de Referência em Ensino Médio (EREM)',
      bio: 'Pioneira na criação de clubes escolares de robótica na Zona Norte, mentora premiada na OBR (Olimpíada Brasileira de Robótica).',
    },
    schedule: '02 de julho · 13h30 às 15h30',
    duration: '2 horas',
    capacity: 30,
    room: 'Laboratório Maker 2 (Sala de Informática)',
    targetAudience: 'Estudantes do ensino fundamental e médio, curiosos por programação.',
    prerequisites: 'Conhecimentos básicos de uso de computador.',
    description: 'Descubra a facilidade da programação em blocos e C++ para Arduino. Construa na hora um sistema de alarme com sensor ultrassônico de distância e buzzer sonoro.',
    materialsProvided: [
      'Kit Arduino Uno com cabo USB',
      'Protoboard e cabos jumper macho-fêmea',
      'Sensor ultrassônico HC-SR04 e buzzer sonoro',
      'Apostila digital ilustrada para download',
    ],
    registrationUrl: 'https://forms.gle/oxemaker2026-oficina-arduino',
  },
  {
    id: 'tinkercad-3d',
    title: 'Modelagem 3D com Tinkercad para Impressão 3D',
    instructor: {
      name: 'Prof. Thiago Bezerra',
      role: 'Designer de Produto & Instrutor FabLab',
      institution: 'Laboratório de Inovação Pedagógica GRE',
      bio: 'Atua facilitando oficinas de fabricação digital para comunidades escolares e articulando projetos sustentáveis em impressão 3D.',
    },
    schedule: '03 de julho · 08h30 às 10h30',
    duration: '2 horas',
    capacity: 25,
    room: 'Laboratório Maker 1 (Sala 102)',
    targetAudience: 'Estudantes e professores que desejam materializar ideias tridimensionais.',
    prerequisites: 'Familiaridade com mouse e navegação na internet.',
    description: 'Do plano mental ao mundo real! Aprenda operações booleanas simples no Tinkercad, entenda a física da extrusão de filamento PLA e acompanhe a impressão de um chaveiro exclusivo do Calango Mascote.',
    materialsProvided: [
      'Computadores com acesso ao Tinkercad',
      'Acompanhamento de impressora 3D em funcionamento contínuo',
      'Filamento PLA ecológico à base de milho',
      'Chaveiro impresso para levar para casa',
    ],
    registrationUrl: 'https://forms.gle/oxemaker2026-oficina-3d',
  },
  {
    id: 'sucata',
    title: 'Robótica Sustentável com Sucata Eletrônica & Lixo Zero',
    instructor: {
      name: 'Profª Clarice Santana',
      role: 'Bióloga & Artista Maker de Upcycling',
      institution: 'Rede Estadual de Educação de Pernambuco',
      bio: 'Dedica-se há uma década à educação socioambiental através da desmontagem segura de lixo eletrônico (e-waste) em comunidades periféricas.',
    },
    schedule: '03 de julho · 10h30 às 12h30',
    duration: '2 horas',
    capacity: 28,
    room: 'Laboratório Maker 3 (Sala de Artes)',
    targetAudience: 'Todas as idades (crianças com acompanhante, jovens e famílias).',
    prerequisites: 'Vontade de desmontar coisas e criar com imaginação livre!',
    description: 'Transforme motores de leitores de CD, pilhas reutilizadas, tampinhas de garrafa PET e palitos em pequenos "inseto-robôs" vibratórios que caminham pela mesa.',
    materialsProvided: [
      'Pequenos micromotores DC reciclados',
      'Porta-pilhas, pilhas AA e suportes',
      'Alicates de corte e cola quente com supervisão',
      'Tampas, fios coloridos e adereços decorativos',
    ],
    registrationUrl: 'https://forms.gle/oxemaker2026-oficina-sucata',
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
    description: 'O Ôxe Maker atinge sua 6ª edição com o tema "Vidas, Escolas e Comunidades: Educar para a Promoção da Justiça Socioambiental", lançando o Oxethon 48h e o Desafio Robô Resgate Ecológico.',
    stats: '58+ escolas parceiras · 9+ competições · 90+ projetos makers',
  },
];

/**
 * ============================================================================
 * HOMENAGEM À FUNDADORA
 * ============================================================================
 */
export const FOUNDER_TRIBUTE: FounderTribute = {
  name: 'Profª Marilene Cavalcanti da Silva',
  role: 'Idealizadora do Ôxe Maker & Professora Emérita da Rede Estadual de PE',
  title: 'A Mãe da Robótica Escolar no Litoral Norte Pernambucano',
  quote: '"Quando uma criança da escola pública pega um ferro de solda e vê um LED acender pela primeira vez, não é eletricidade que está correndo ali: é a certeza de que o futuro pertence a ela."',
  bio: [
    'Licenciada em Física pela UFPE e com mais de 30 anos dedicados ao chão da escola pública, a Professora Marilene iniciou oficinas voluntárias de robótica com sucata nos intervalos das aulas quando quase ninguém acreditava que escolas estaduais pudessem ter laboratórios de ponta.',
    'Em 2021, em um momento de desânimo coletivo pós-pandemia, reuniu outros quatro educadores visionários na GRE Metropolitana Norte e disse: "Vamos fazer uma mostra. Não precisa ser perfeita, precisa ser dos nossos estudantes."',
    'Nascia ali o Ôxe Maker. Hoje, com milhares de jovens impactados, sua dedicação continua sendo a bússola ética e pedagógica de cada edição do evento.',
  ],
  imagePlaceholder: '/img/homenagem-marilene.svg',
};

/**
 * ============================================================================
 * PATROCINADORES E REALIZADORES POR TIER
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
        name: 'ETE José de Alencar',
        role: 'Escola Técnica Estadual Anfitriã (Olinda-PE)',
        logoAlt: 'Logo da ETE José de Alencar',
      },
    ],
  },
  {
    tierName: 'Apoio Institucional & Ciência',
    description: 'Parcerias com universidades públicas e ecossistemas de tecnologia',
    sponsors: [
      {
        name: 'SECTI · Sec. de Ciência, Tecnologia e Inovação',
        role: 'Governo de Pernambuco',
        logoAlt: 'Logo da SECTI PE',
      },
      {
        name: 'Porto Digital',
        role: 'Parque Tecnológico e de Inovação de Recife',
        logoAlt: 'Logo do Porto Digital',
      },
      {
        name: 'UPE · Escola Politécnica de Pernambuco',
        role: 'Apoio em Arbitragem & Mentoria Técnica',
        logoAlt: 'Logo da Universidade de Pernambuco',
      },
      {
        name: 'IFPE · Campus Olinda / Recife',
        role: 'Núcleo de Robótica Educacional',
        logoAlt: 'Logo do Instituto Federal de Pernambuco',
      },
    ],
  },
  {
    tierName: 'Parceiros Maker & Comunidade',
    description: 'Empresas, fablabs e coletivos que fortalecem a educação pública',
    sponsors: [
      {
        name: 'FabLab Recife & Olinda Maker',
        role: 'Insumos para Impressão 3D e Corte a Laser',
        logoAlt: 'Logo do FabLab',
      },
      {
        name: 'Robótica Livre Brasil',
        role: 'Kits Didáticos e Sensores Abertos',
        logoAlt: 'Logo Robótica Livre',
      },
      {
        name: 'Coletivo MangueTech Geek',
        role: 'Curadoria do Palco Geek e Just Dance',
        logoAlt: 'Logo MangueTech',
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
  },
  {
    id: 'gal-2',
    title: 'Mão na Massa: Montando o Primeiro Circuito',
    year: 2025,
    category: 'oficinas',
    description: 'Estudantes do ensino fundamental testando sensores de luz LDR durante a oficina prática de Arduino.',
    caption: 'Foto: Laboratório Maker ETE',
  },
  {
    id: 'gal-3',
    title: 'Desfile Cosplay com Torcida Apaixonada',
    year: 2024,
    category: 'geek',
    description: 'O palco do pátio reuniu caracterizações marcantes inspiradas em jogos e heróis da ficção científica.',
    caption: 'Foto: Palco Geek Ôxe Maker',
  },
  {
    id: 'gal-4',
    title: 'Prototipando com Sucata e Motores Reciclados',
    year: 2023,
    category: 'projetos',
    description: 'Robôs construídos com coolers de computador e caixas de leite demonstrando a força do lixo zero.',
    caption: 'Foto: Mostra Científica 2023',
  },
  {
    id: 'gal-5',
    title: 'A Largada do Seguidor de Linha Buzz Line',
    year: 2024,
    category: 'competicoes',
    description: 'Concentração absoluta dos jovens pilotos antes de acionar a chave táctil do robô seguidor.',
    caption: 'Foto: Pista Alfa de Robótica',
  },
  {
    id: 'gal-6',
    title: 'A Celebração dos Troféus no Pódio Maker',
    year: 2025,
    category: 'competicoes',
    description: 'Equipes de 12 escolas diferentes comemorando juntas com os troféus ecológicos feitos em 3D.',
    caption: 'Foto: Cerimônia de Premiação 2025',
  },
];

/**
 * ============================================================================
 * PERGUNTAS FREQUENTES (FAQ)
 * ============================================================================
 */
export const FAQ_DATA = [
  {
    question: 'A entrada no Ôxe Maker é realmente gratuita?',
    answer: 'Sim! O Ôxe Maker é um evento 100% público e gratuito, realizado pela GRE Metropolitana Norte para toda a comunidade escolar, estudantes de outras redes, famílias e amantes da tecnologia.',
  },
  {
    question: 'Preciso ser aluno da rede pública para visitar o evento?',
    answer: 'Não! Qualquer pessoa da comunidade pode visitar as mostras de projetos, assistir às competições na arquibancada do ginásio e curtir o palco geek. Para competir ou participar das oficinas com vagas limitadas, basta preencher o formulário de inscrição correspondente.',
  },
  {
    question: 'Como as escolas podem agendar caravanas com ônibus?',
    answer: 'Gestores e professores da rede estadual podem preencher o formulário de caravanas escolares em nosso site até 20 de junho de 2026 para reservar vagas de estacionamento e horário especial de acolhimento.',
  },
  {
    question: 'Haverá certificado de horas complementares?',
    answer: 'Sim! Emitimos certificado digital oficial de participação (16 horas totais para os 2 dias) homologado pela GRE Metropolitana Norte para participantes credenciados e voluntários.',
  },
  {
    question: 'Como faço para inscrever meu robô nas competições?',
    answer: 'Acesse a aba Torneios, consulte o edital da categoria desejada (Buzz Line, Buzz PRO, Sumô, Combate ou Robô Resgate) e clique no botão de inscrição. As vagas são preenchidas por ordem de envio dos dados da equipe.',
  },
];
