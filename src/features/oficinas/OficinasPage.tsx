import React from 'react';
import { WORKSHOPS_DATA } from '../../core/constants';
import {
  Wrench,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  BookOpen,
  School,
  Laptop,
} from 'lucide-react';

export const OficinasPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-wider">
          <Wrench className="w-4 h-4 text-[#8A5A04]" />
          <span>Oficinas 2026 · Propostas Recebidas</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#0B1330] uppercase tracking-tight">
          Oficinas Propostas
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          Nove propostas enviadas por escolas da rede estadual para a 6ª edição. A programação
          final, os horários e a disponibilidade de materiais serão confirmados pela organização.
        </p>
      </div>

      {/* Workshop Proposal Cards */}
      <div className="space-y-8">
        {WORKSHOPS_DATA.map((ws, idx) => (
          <div
            key={ws.id}
            className="bg-[#F9FDFE] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-6 sm:p-8 transition-all hover:maker-shadow-yellow group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Workshop Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#F1F4FB] text-[#8A5A04] font-mono-code text-xs font-bold rounded-sm border border-slate-700">
                      Proposta {String(idx + 1).padStart(2, '0')}
                    </span>
                    {ws.school && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#01B1FD]/15 text-[#0369A1] font-mono-code text-[11px] font-bold rounded-sm border border-[#01B1FD]/40">
                        <School className="w-3.5 h-3.5" />
                        {ws.school}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] group-hover:text-[#8A5A04] transition-colors">
                    {ws.title}
                  </h2>
                </div>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {ws.description}
                </p>

                {ws.materialsProvided && (
                  <div>
                    <span className="text-xs font-mono-code text-[#8A5A04] uppercase font-bold block mb-2">
                      Materiais Solicitados:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 font-sans">
                      {ws.materialsProvided.map((mat, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {ws.equipment && ws.equipment.length > 0 && (
                  <div>
                    <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold block mb-2">
                      Equipamentos Solicitados:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 font-sans">
                      {ws.equipment.map((item, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-2">
                          <Wrench className="w-3.5 h-3.5 text-[#8A5A04] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Proposal Information */}
              <div className="lg:col-span-5 bg-[#F1F4FB] border border-slate-700/80 rounded-sm p-6 space-y-5">
                <div className="space-y-2 border-b border-slate-800 pb-4 text-xs font-mono-code">
                  <div className="flex items-center justify-between gap-3 text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400 shrink-0">
                      <Clock className="w-4 h-4 text-[#8A5A04]" />
                      Data & Hora:
                    </span>
                    <span className="font-bold text-[#0B1330] text-right">{ws.schedule}</span>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400 shrink-0">
                      <MapPin className="w-4 h-4 text-[#0369A1]" />
                      Local:
                    </span>
                    <span className="font-bold text-[#0B1330] text-right">
                      {ws.room || 'A definir'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400 shrink-0">
                      <Users className="w-4 h-4 text-emerald-700" />
                      Público-Alvo:
                    </span>
                    <span className="font-bold text-[#0B1330] text-right">
                      {ws.targetAudience}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {ws.software && (
                    <div>
                      <span className="flex items-center gap-1.5 text-[10px] font-mono-code text-slate-400 uppercase font-bold mb-1">
                        <Laptop className="w-3.5 h-3.5 text-[#8A5A04]" />
                        Programa / Software:
                      </span>
                      <p className="text-xs text-[#0B1330] font-sans font-semibold">
                        {ws.software}
                      </p>
                    </div>
                  )}

                  <div>
                    <span className="flex items-center gap-1.5 text-[10px] font-mono-code text-slate-400 uppercase font-bold mb-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#0369A1]" />
                      Escola Proponente:
                    </span>
                    <p className="text-xs text-[#0B1330] font-sans font-semibold">
                      {ws.school || 'A definir'}
                    </p>
                  </div>
                </div>

                <p className="text-[10px] font-mono-code text-slate-400 border-t border-slate-800 pt-3 leading-relaxed">
                  Proposta recebida para avaliação da organização. Horários e materiais ainda serão
                  confirmados.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
