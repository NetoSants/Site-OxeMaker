import React, { useState } from 'react';
import { TOURNAMENTS_DATA, EVENT_INFO } from '../../core/constants';
import { RoboticsTournament } from '../../core/types';
import { RegistrationModal } from '../../components/RegistrationModal';
import { EditalModal } from '../../components/EditalModal';
import {
  Bot,
  Zap,
  Shield,
  Swords,
  HeartHandshake,
  Navigation,
  FileText,
  Users,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export const TorneioPage: React.FC = () => {
  const [selectedTournamentForEdital, setSelectedTournamentForEdital] =
    useState<RoboticsTournament | null>(null);
  const [selectedTournamentForReg, setSelectedTournamentForReg] =
    useState<RoboticsTournament | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#FCC140]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#01B1FD]" />;
      case 'Swords':
        return <Swords className="w-6 h-6 text-rose-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-emerald-400" />;
      default:
        return <Navigation className="w-6 h-6 text-[#FCC140]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#FCC140] uppercase font-bold tracking-wider">
          <Bot className="w-4 h-4" />
          <span>Arenas de Competição · Ginásio da ETE José de Alencar</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
          Torneios de Robótica 2026
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          5 modalidades oficiais de robótica autônoma, combate rádio controlado e resgate
          socioambiental. Reúna sua equipe escolar, construa seu robô e dispute troféus históricos!
        </p>
      </div>

      {/* Safety & Weigh-in Notice Banner */}
      <div className="p-4 bg-[#1E292D] border-l-4 border-[#01B1FD] border-y border-r border-slate-700/80 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#FCC140] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 space-y-0.5">
            <span className="font-bold text-white block uppercase font-mono-code">
              Pesagem e Homologação Técnica dos Robôs:
            </span>
            <p>
              Todos os robôs devem passar obrigatoriamente pela bancada de vistoria técnica no dia
              02/07 entre 07h30 e 08h30. Baterias LiPo devem possuir bolsa de proteção (safe bag).
            </p>
          </div>
        </div>
        <span className="text-xs font-mono-code text-[#01B1FD] font-bold flex-shrink-0">
          Vagas Limitadas por Escola
        </span>
      </div>

      {/* 5 Tournament Cards */}
      <div className="space-y-8">
        {TOURNAMENTS_DATA.map((t, index) => (
          <div
            key={t.id}
            className="bg-[#1E292D] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-6 sm:p-8 transition-all hover:maker-shadow-yellow group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Title, Category, Description */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#050D34] border border-slate-700 rounded-sm">
                    {getIcon(t.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-mono-code text-[#01B1FD] uppercase font-bold tracking-wider block">
                      Modalidade 0{index + 1} · {t.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading text-white group-hover:text-[#FCC140] transition-colors">
                      {t.name}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {t.description}
                </p>

                {/* Requirements bullet list */}
                <div>
                  <span className="text-xs font-mono-code text-[#FCC140] uppercase font-bold block mb-2">
                    Regras & Requisitos Principais:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {t.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#01B1FD] flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arena details */}
                <div className="p-3 bg-[#050D34] border border-slate-800 rounded-sm text-xs font-sans text-slate-300">
                  <strong className="text-slate-200 block font-mono-code text-[11px] uppercase mb-0.5">
                    Especificações da Arena:
                  </strong>
                  <span>{t.arenaDetails}</span>
                </div>
              </div>

              {/* Right Column: Schedule, Team size, Prize and Actions */}
              <div className="lg:col-span-5 bg-[#050D34] border border-slate-700/80 rounded-sm p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-code text-slate-300 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-4 h-4 text-[#FCC140]" />
                      Horário:
                    </span>
                    <span className="font-bold text-white text-right">{t.scheduleTime}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono-code text-slate-300 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Users className="w-4 h-4 text-[#01B1FD]" />
                      Tamanho da Equipe:
                    </span>
                    <span className="font-bold text-white">Até {t.maxTeamSize} integrantes</span>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1">
                    <span className="text-[11px] font-mono-code text-[#FCC140] uppercase font-bold block">
                      Premiação:
                    </span>
                    <p className="font-sans leading-tight text-slate-300">{t.prizeSummary}</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => setSelectedTournamentForReg(t)}
                    className="flex-1 maker-btn-primary py-2.5 px-4 text-xs uppercase flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Inscrever Robô</span>
                  </button>

                  <button
                    onClick={() => setSelectedTournamentForEdital(t)}
                    className="maker-btn-secondary py-2.5 px-4 text-xs uppercase flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Ver Edital</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Registration Modal Dialog */}
      {selectedTournamentForReg && (
        <RegistrationModal
          isOpen={true}
          onClose={() => setSelectedTournamentForReg(null)}
          title={`Inscrição · ${selectedTournamentForReg.name}`}
          categoryName={`Torneio de Robótica (${selectedTournamentForReg.category})`}
          formUrl={selectedTournamentForReg.registrationUrl}
          type="torneio"
        />
      )}

      {/* Edital Modal Dialog */}
      {selectedTournamentForEdital && (
        <EditalModal
          isOpen={true}
          onClose={() => setSelectedTournamentForEdital(null)}
          tournamentName={selectedTournamentForEdital.name}
          category={selectedTournamentForEdital.category}
        />
      )}
    </div>
  );
};
