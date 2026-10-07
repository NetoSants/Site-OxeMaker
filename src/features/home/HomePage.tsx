import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  EVENT_INFO,
  METRICS_DATA,
  HIGHLIGHTS_DATA,
  GALLERY_DATA,
  SPONSORS_TIERS,
  FAQ_DATA,
} from '../../core/constants';
import { CalangoMascot } from '../../components/CalangoMascot';
import { CountdownTimer } from '../../components/CountdownTimer';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import { RegistrationModal } from '../../components/RegistrationModal';
import {
  Sparkles,
  Calendar,
  MapPin,
  ArrowRight,
  ChevronDown,
  Wrench,
  Network,
  Bot,
  Cpu,
  Trophy,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [regTitle, setRegTitle] = useState('Inscrição Oficial · Ôxe Maker 2026');
  const [regCategory, setRegCategory] = useState('Visitante Geral & Comunidade');
  const [regUrl, setRegUrl] = useState(EVENT_INFO.links.generalRegistration);

  const [activeGalleryCategory, setActiveGalleryCategory] = useState<string>('todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Wrench: <Wrench className="w-6 h-6 text-[#FCC140]" />,
    Network: <Network className="w-6 h-6 text-[#01B1FD]" />,
    Bot: <Bot className="w-6 h-6 text-[#FCC140]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#01B1FD]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#01B1FD]" />,
    Trophy: <Trophy className="w-6 h-6 text-[#FCC140]" />,
  };

  const handleOpenRegistration = (title: string, category: string, url: string) => {
    setRegTitle(title);
    setRegCategory(category);
    setRegUrl(url);
    setIsRegModalOpen(true);
  };

  const filteredGallery =
    activeGalleryCategory === 'todos'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeGalleryCategory);

  return (
    <div className="space-y-20 pb-16">
      {/* =====================================================================
          1. HERO SECTION
         ===================================================================== */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 border-b border-slate-800">
        {/* Glow backdrop circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0030B5]/20 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#01B1FD]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Edition and Slogan Kicker */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono-code">
                <span className="px-2.5 py-1 bg-[#FCC140] text-[#050D34] font-bold rounded-sm uppercase tracking-wider">
                  {EVENT_INFO.edition} · 2021–2026
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-[#01B1FD] font-semibold tracking-wide">
                  {EVENT_INFO.tagline}
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black tracking-tight text-white uppercase leading-[1.05]">
                  ÔXE MAKER <span className="text-[#FCC140]">2026</span>
                </h1>
                <p className="text-lg sm:text-xl font-heading text-[#01B1FD] tracking-wide">
                  Mostra de Robótica Educacional & Cultura Maker da Rede Estadual
                </p>
              </div>

              {/* 2026 Theme Banner */}
              <div className="p-4 bg-[#1E292D] border-l-4 border-[#FCC140] border-y border-r border-slate-700/80 rounded-sm text-left">
                <span className="text-[11px] font-mono-code text-[#FCC140] uppercase font-bold tracking-wider block mb-1">
                  Tema Central 2026:
                </span>
                <p className="text-sm md:text-base text-slate-200 font-medium">
                  "{EVENT_INFO.theme2026}"
                </p>
              </div>

              {/* Event Location and Date Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono-code text-slate-300">
                <div className="flex items-center gap-1.5 bg-[#050D34] border border-slate-700 px-3 py-1.5 rounded-sm">
                  <Calendar className="w-4 h-4 text-[#FCC140]" />
                  <span>{EVENT_INFO.dates.display} (07h às 17h30)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#050D34] border border-slate-700 px-3 py-1.5 rounded-sm">
                  <MapPin className="w-4 h-4 text-[#01B1FD]" />
                  <span>ETE José de Alencar · Olinda-PE</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() =>
                    handleOpenRegistration(
                      'Credenciamento Gratuito · Ôxe Maker 2026',
                      'Credenciamento Geral de Visitantes',
                      EVENT_INFO.links.generalRegistration
                    )
                  }
                  className="maker-btn-primary px-6 py-3.5 text-sm uppercase flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Garantir Entrada Gratuita</span>
                </button>

                <Link
                  to="/programacao"
                  className="maker-btn-secondary px-5 py-3.5 text-sm uppercase flex items-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>Ver Grade de 2 Dias</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Mascot & Live Countdown */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              <div className="relative group p-6 rounded-2xl bg-gradient-to-b from-[#1E292D]/70 to-[#050D34] border-2 border-[#01B1FD]/30 maker-shadow-cyan-lg">
                <div className="text-center mb-2">
                  <span className="text-[11px] font-mono-code text-[#FCC140] uppercase tracking-wider block">
                    Conheça o nosso Mascote Oficial
                  </span>
                  <h3 className="text-xl font-heading text-white">
                    Calango Maker · O Lagarto Cientista
                  </h3>
                </div>

                <div className="flex justify-center py-2">
                  <CalangoMascot size="hero" animated={true} />
                </div>

                <p className="text-center text-xs text-slate-300 font-sans max-w-xs mx-auto">
                  Símbolo da resiliência, agilidade e engenhosidade dos estudantes pernambucanos!
                </p>
              </div>

              {/* Live Countdown to 02/07/2026 09:00 */}
              <div className="w-full">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. PROVAS SOCIAIS & NÚMEROS DO EVENTO (ANIMATED COUNTERS)
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-mono-code text-[#01B1FD] uppercase font-bold tracking-widest">
            A Força da Escola Pública
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-white uppercase">
            Números que Transformam o Futuro
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Consolidação do Ôxe Maker como a maior vitrine de ciência, tecnologia e cultura geek da
            Região Metropolitana Norte de Pernambuco.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {METRICS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-[#1E292D] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm maker-shadow-yellow text-center transition-all group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono-code text-[#FCC140] group-hover:scale-105 transition-transform mb-1">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase font-heading tracking-wide mb-1">
                {item.label}
              </h3>
              <p className="text-[11px] text-slate-400 font-sans leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2025 Retrospective Snapshot Callout */}
        <div className="mt-6 p-4 bg-[#0030B5]/20 border border-[#01B1FD]/40 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-code">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FCC140] flex-shrink-0 animate-ping" />
            <p className="text-slate-200">
              <strong className="text-[#FCC140]">Retrospectiva 2025:</strong> +70 escolas
              participantes, cerca de 2 mil estudantes no protagonismo direto e mais de 10 mil
              visitantes nos 2 dias.
            </p>
          </div>
          <Link
            to="/sobre"
            className="text-[#01B1FD] hover:text-[#FCC140] flex items-center gap-1 font-bold flex-shrink-0"
          >
            <span>Conheça a história desde 2021</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* =====================================================================
          3. GRID DE 6 DESTAQUES
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono-code text-[#FCC140] uppercase font-bold tracking-widest block mb-1">
              Pilares do Evento
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-white uppercase">
              O Que Rola no Ôxe Maker 2026
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Dois dias intensos de aprendizado mão na massa, adrenalina nas arenas de batalha e
            celebração do protagonismo juvenil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS_DATA.map((item) => (
            <div
              key={item.id}
              className="maker-card p-6 rounded-sm flex flex-col justify-between group relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#050D34] border border-slate-700 rounded-sm">
                    {iconMap[item.iconName] || <Bot className="w-6 h-6 text-[#FCC140]" />}
                  </div>
                  <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded-sm bg-slate-800 text-slate-300 border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-heading text-white group-hover:text-[#FCC140] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800">
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#01B1FD] hover:text-[#FCC140] font-bold group-hover:translate-x-1 transition-all"
                >
                  <span>Saiba Mais Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          4. GALERIA HISTÓRICA 2021–2026
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-mono-code text-[#01B1FD] uppercase font-bold tracking-widest">
            Memórias & Trajetória
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-white uppercase">
            Galeria Ôxe Maker (2021–2026)
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Registros marcantes de robôs em combate, oficinas cheias de entusiasmo e jovens
            descobrindo suas vocações científicas.
          </p>
        </div>

        {/* Gallery interactive filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'todos', label: 'Todos os Momentos' },
            { id: 'competicoes', label: 'Torneios & Batalhas' },
            { id: 'oficinas', label: 'Oficinas Mão na Massa' },
            { id: 'geek', label: 'Cultura Geek & Cosplay' },
            { id: 'projetos', label: 'Feira Científica' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveGalleryCategory(tab.id)}
              className={`px-3 py-1.5 text-xs font-mono-code font-bold uppercase rounded-sm transition-all ${
                activeGalleryCategory === tab.id
                  ? 'bg-[#FCC140] text-[#050D34] maker-shadow-cyan'
                  : 'bg-[#1E292D] text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="bg-[#1E292D] border-2 border-slate-700/80 hover:border-[#01B1FD] rounded-sm p-4 transition-all hover:maker-shadow-cyan group"
            >
              {/* Graphic visual illustration placeholder */}
              <div className="relative aspect-video bg-[#050D34] rounded-sm border border-slate-800 overflow-hidden flex flex-col items-center justify-center p-4 text-center mb-3">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <Bot className="w-10 h-10 text-[#01B1FD] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono-code text-[#FCC140] uppercase tracking-wider">
                  Edição {item.year}
                </span>
                <span className="text-xs font-bold text-white z-10">{item.title}</span>
              </div>

              <p className="text-xs text-slate-300 font-sans mb-2 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-400 border-t border-slate-800 pt-2">
                <span>{item.caption}</span>
                <span className="text-[#01B1FD] uppercase font-bold">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. PATROCINADORES & REALIZADORES POR TIER
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-16">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-mono-code text-[#FCC140] uppercase font-bold tracking-widest">
            Aliança Pela Educação
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-white uppercase">
            Realizadores & Apoiadores Institucionais
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Uma rede de cooperação unindo o Estado, universidades, centros de tecnologia e a
            comunidade maker em prol do futuro dos estudantes.
          </p>
        </div>

        <div className="space-y-10">
          {SPONSORS_TIERS.map((tier, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
                <h3 className="text-sm font-mono-code uppercase font-bold text-[#FCC140] tracking-wider">
                  {tier.tierName}
                </h3>
                <span className="text-xs text-slate-400 font-sans hidden sm:inline">
                  — {tier.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tier.sponsors.map((sponsor, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 bg-[#1E292D] border border-slate-700/80 rounded-sm hover:border-[#01B1FD] transition-all flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-sm bg-[#050D34] border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#01B1FD]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-sans">{sponsor.name}</h4>
                      <p className="text-xs text-slate-400 font-mono-code">{sponsor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. PERGUNTAS FREQUENTES (FAQ)
         ===================================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-mono-code text-[#01B1FD] uppercase font-bold tracking-widest">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-white uppercase">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-[#1E292D] border border-slate-700 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 text-white font-semibold hover:text-[#FCC140] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-sans">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#01B1FD] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#FCC140]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800 leading-relaxed font-sans">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          7. CTA FINAL & CONVITE
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#050D34] via-[#1E292D] to-[#0030B5] border-2 border-[#FCC140] rounded-sm maker-shadow-yellow-lg p-8 sm:p-12 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#01B1FD] uppercase font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#FCC140]" />
                <span>Entrada 100% Gratuita · Aberto a Toda a Comunidade</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading text-white uppercase leading-tight">
                Venha Viver o Maior Encontro Maker de Pernambuco!
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans">
                Traga sua escola, seus amigos e sua família para prestigiar o talento e a inovação
                dos jovens estudantes da Rede Estadual na ETE José de Alencar em Olinda.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() =>
                  handleOpenRegistration(
                    'Credenciamento Oficial · Ôxe Maker 2026',
                    'Visitantes & Comunidade Escolar',
                    EVENT_INFO.links.generalRegistration
                  )
                }
                className="maker-btn-primary py-3.5 px-6 text-xs uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Garantir Inscrição Agora</span>
              </button>

              <Link
                to="/mapa"
                className="maker-btn-secondary py-3.5 px-6 text-xs uppercase flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Ver Mapa & Transporte</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={isRegModalOpen}
        onClose={() => setIsRegModalOpen(false)}
        title={regTitle}
        categoryName={regCategory}
        formUrl={regUrl}
      />
    </div>
  );
};
