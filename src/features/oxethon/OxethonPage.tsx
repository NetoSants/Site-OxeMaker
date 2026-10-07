import React, { useState } from 'react';
import { OXETHON_INFO, EVENT_INFO } from '../../core/constants';
import { RegistrationModal } from '../../components/RegistrationModal';
import {
  Cpu,
  Clock,
  Trophy,
  CheckCircle2,
  Calendar,
  Users,
  Target,
  Lightbulb,
  Award,
  Sparkles,
  ShieldCheck,
  FileText,
  AlertCircle,
} from 'lucide-react';

export const OxethonPage: React.FC = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#FCC140] uppercase font-bold tracking-wider">
          <Cpu className="w-4 h-4 text-[#01B1FD]" />
          <span>Maratona Maker de Inovação Aberta · 48 Horas Imersivas</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
          Oxethon 2026 · O Hackathon Socioambiental
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          Estudantes da rede pública reunidos com mentores de tecnologia para prototipar soluções
          reais e de baixo custo para o enfrentamento das mudanças climáticas, enchentes e
          sustentabilidade das comunidades pernambucanas.
        </p>

        <div className="pt-3 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsRegModalOpen(true)}
            className="maker-btn-primary px-6 py-3 text-xs uppercase flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Inscrever Minha Equipe no Oxethon</span>
          </button>
          <span className="text-xs font-mono-code text-slate-400">
            Prazo: até {OXETHON_INFO.registrationDeadline}
          </span>
        </div>
      </div>

      {/* Quick Overview Bento Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-[#1E292D] border-2 border-slate-700/80 rounded-sm maker-shadow-yellow space-y-2">
          <div className="flex items-center gap-2 text-[#FCC140] font-mono-code text-xs uppercase font-bold">
            <Clock className="w-4 h-4" />
            <span>Duração & Formato</span>
          </div>
          <h3 className="text-xl font-heading text-white">48 Horas de Prototipagem</h3>
          <p className="text-xs text-slate-300 font-sans">
            Das 11h de quinta-feira (02/07) às 14h de sexta-feira (03/07), com bancada de testes e
            mentores rotativos.
          </p>
        </div>

        <div className="p-5 bg-[#1E292D] border-2 border-slate-700/80 rounded-sm maker-shadow-cyan space-y-2">
          <div className="flex items-center gap-2 text-[#01B1FD] font-mono-code text-xs uppercase font-bold">
            <Users className="w-4 h-4" />
            <span>Equipes Multidisciplinares</span>
          </div>
          <h3 className="text-xl font-heading text-white">3 a 5 Integrantes</h3>
          <p className="text-xs text-slate-300 font-sans">
            Composição recomendada: desenvolvedores, montadores de hardware, pesquisadores e
            apresentadores de pitch.
          </p>
        </div>

        <div className="p-5 bg-[#1E292D] border-2 border-slate-700/80 rounded-sm maker-shadow-yellow space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-mono-code text-xs uppercase font-bold">
            <Trophy className="w-4 h-4" />
            <span>Premiações Oficiais</span>
          </div>
          <h3 className="text-xl font-heading text-white">R$ 5.000 em Prêmios</h3>
          <p className="text-xs text-slate-300 font-sans">
            Troféus ecológicos em 3D, equipamentos para os laboratórios das escolas e bolsas de
            aceleração no Porto Digital.
          </p>
        </div>
      </div>

      {/* 4 Thematic Tracks */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono-code text-[#01B1FD] uppercase font-bold tracking-widest block mb-1">
            Desafios Reais
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-white uppercase">
            As 4 Trilhas do Oxethon 2026
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OXETHON_INFO.tracks.map((track) => (
            <div
              key={track.id}
              className="bg-[#1E292D] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-6 space-y-4 transition-all hover:maker-shadow-yellow group"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="px-2 py-0.5 bg-[#050D34] text-[#FCC140] font-mono-code text-xs font-bold rounded-sm border border-slate-700">
                  {track.number}
                </span>
                <span className="text-xs font-mono-code text-[#01B1FD] uppercase font-bold">
                  {track.focusArea}
                </span>
              </div>

              <h3 className="text-xl font-heading text-white group-hover:text-[#FCC140] transition-colors">
                {track.title}
              </h3>

              <div className="space-y-2 text-xs font-sans text-slate-300">
                <div>
                  <strong className="text-white block font-mono-code text-[11px] uppercase mb-0.5">
                    Problemática da Comunidade:
                  </strong>
                  <p className="leading-relaxed">{track.problemStatement}</p>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <strong className="text-[#01B1FD] block font-mono-code text-[11px] uppercase mb-0.5">
                    Entregável Esperado:
                  </strong>
                  <p className="leading-relaxed">{track.expectedDeliverable}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 48-Hour Phases Timeline */}
      <div className="bg-[#1E292D] border-2 border-[#01B1FD] rounded-sm p-6 sm:p-8 maker-shadow-cyan-lg space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
          <Calendar className="w-5 h-5 text-[#FCC140]" />
          <h2 className="text-2xl font-heading text-white uppercase">
            Cronograma das Fases do Hackathon
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {OXETHON_INFO.stages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-[#050D34] border border-slate-700/80 p-4 rounded-sm space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono-code text-[#01B1FD] uppercase font-bold block mb-1">
                  Etapa 0{idx + 1}
                </span>
                <h4 className="text-sm font-bold font-heading text-white">{stage.phase}</h4>
                <span className="text-xs font-mono-code text-[#FCC140] block my-1">
                  {stage.time}
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prizes Section */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono-code text-[#FCC140] uppercase font-bold tracking-widest block mb-1">
            Reconhecimento & Apoio
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-white uppercase">
            Premiação dos Projetos Destaque
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OXETHON_INFO.prizes.map((pz, idx) => (
            <div
              key={idx}
              className={`p-6 bg-[#1E292D] border-2 rounded-sm space-y-3 ${
                idx === 0
                  ? 'border-[#FCC140] maker-shadow-yellow'
                  : 'border-slate-700 hover:border-[#01B1FD]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code font-bold uppercase text-[#FCC140]">
                  {pz.place}
                </span>
                <Trophy
                  className={`w-5 h-5 ${
                    idx === 0
                      ? 'text-[#FCC140]'
                      : idx === 1
                      ? 'text-slate-300'
                      : 'text-amber-600'
                  }`}
                />
              </div>

              <h3 className="text-base font-bold text-white font-sans">{pz.reward}</h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed border-t border-slate-800 pt-2">
                {pz.perks}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Regulations summary */}
      <div className="bg-[#1E292D] border border-slate-700/80 rounded-sm p-6 space-y-4">
        <h3 className="text-base font-bold font-heading text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#01B1FD]" />
          <span>Regulamento Resumido & Código de Ética</span>
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
          {OXETHON_INFO.regulationsSummary.map((reg, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#01B1FD] flex-shrink-0 mt-0.5" />
              <span>{reg}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Final Register CTA Banner */}
      <div className="text-center p-8 bg-[#0030B5]/20 border-2 border-[#FCC140] rounded-sm maker-shadow-yellow space-y-4">
        <h3 className="text-2xl sm:text-3xl font-heading text-white uppercase">
          Pronto para Transformar sua Ideia em Solução Real?
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans">
          Reúna sua equipe escolar e garanta uma das 20 vagas exclusivas do Oxethon 2026.
        </p>
        <button
          onClick={() => setIsRegModalOpen(true)}
          className="maker-btn-primary px-8 py-3.5 text-xs uppercase inline-flex items-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>Preencher Inscrição da Equipe</span>
        </button>
      </div>

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={isRegModalOpen}
        onClose={() => setIsRegModalOpen(false)}
        title="Inscrição de Equipe · Oxethon 2026"
        categoryName="Oxethon Hackathon 48h (Socioambiental)"
        formUrl={EVENT_INFO.links.oxethonRegistration}
        type="oxethon"
      />
    </div>
  );
};
