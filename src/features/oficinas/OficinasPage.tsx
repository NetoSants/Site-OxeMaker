import React, { useState } from 'react';
import { WORKSHOPS_DATA, EVENT_INFO } from '../../core/constants';
import { Workshop } from '../../core/types';
import { RegistrationModal } from '../../components/RegistrationModal';
import {
  Wrench,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

export const OficinasPage: React.FC = () => {
  const [selectedWorkshopForReg, setSelectedWorkshopForReg] = useState<Workshop | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#01B1FD] uppercase font-bold tracking-wider">
          <Wrench className="w-4 h-4 text-[#FCC140]" />
          <span>Laboratórios Vivos · Mão na Massa</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
          Oficinas Práticas Maker
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          Cinco opções mão na massa no dia 27 de novembro: a oficina oficial de robótica e cultura
          maker e as temáticas de soldagem, Arduino, modelagem 3D e robótica com sucata. Todos os
          insumos e materiais são fornecidos pela organização.
        </p>
      </div>

      {/* Workshop Detailed Cards */}
      <div className="space-y-8">
        {WORKSHOPS_DATA.map((ws, idx) => (
          <div
            key={ws.id}
            className="bg-[#1E292D] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-6 sm:p-8 transition-all hover:maker-shadow-yellow group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Workshop Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#050D34] text-[#FCC140] font-mono-code text-xs font-bold rounded-sm border border-slate-700">
                      Oficina 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono-code text-[#01B1FD]">
                      {ws.duration ? `${ws.duration} de imersão` : 'Mão na massa'}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading text-white group-hover:text-[#FCC140] transition-colors">
                    {ws.title}
                  </h2>
                </div>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {ws.description}
                </p>

                {/* Target & Prerequisites */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                  <div className="p-3 bg-[#050D34] border border-slate-800 rounded-sm">
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase block mb-1">
                      Público-Alvo:
                    </span>
                    <p className="text-slate-200">{ws.targetAudience}</p>
                  </div>
                  {ws.prerequisites && (
                    <div className="p-3 bg-[#050D34] border border-slate-800 rounded-sm">
                      <span className="text-[10px] font-mono-code text-slate-400 uppercase block mb-1">
                        Pré-Requisitos:
                      </span>
                      <p className="text-slate-200">{ws.prerequisites}</p>
                    </div>
                  )}
                </div>

                {/* Materials Provided */}
                {ws.materialsProvided && (
                  <div>
                    <span className="text-xs font-mono-code text-[#FCC140] uppercase font-bold block mb-2">
                      Materiais & Insumos Inclusos:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 font-sans">
                      {ws.materialsProvided.map((mat, mIdx) => (
                        <li key={mIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#01B1FD] flex-shrink-0" />
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Instructor Profile & Registration Info */}
              <div className="lg:col-span-5 bg-[#050D34] border border-slate-700/80 rounded-sm p-6 space-y-5">
                {/* Time & Room Info */}
                <div className="space-y-2 border-b border-slate-800 pb-4 text-xs font-mono-code">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-4 h-4 text-[#FCC140]" />
                      Data & Hora:
                    </span>
                    <span className="font-bold text-white text-right">{ws.schedule}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-4 h-4 text-[#01B1FD]" />
                      Local:
                    </span>
                    <span className="font-bold text-white">
                      {ws.room || 'A definir'}
                    </span>
                  </div>

                  {ws.capacity && (
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Users className="w-4 h-4 text-emerald-400" />
                        Vagas Disponíveis:
                      </span>
                      <span className="font-bold text-[#FCC140]">{ws.capacity} participantes</span>
                    </div>
                  )}
                </div>

                {/* Instructor Profile Card */}
                {ws.instructor && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase font-bold block">
                      Instrutor Responsável:
                    </span>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-sm bg-[#1E292D] border border-[#FCC140] flex items-center justify-center text-[#FCC140] flex-shrink-0">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-sans">
                          {ws.instructor.name}
                        </h4>
                        <p className="text-[11px] font-mono-code text-[#01B1FD]">
                          {ws.instructor.role}
                        </p>
                        <p className="text-[10px] text-slate-400">{ws.instructor.institution}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 font-sans italic border-l-2 border-slate-700 pl-2.5 pt-1">
                      "{ws.instructor.bio}"
                    </p>
                  </div>
                )}

                {/* CTA Action */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedWorkshopForReg(ws)}
                    className="w-full maker-btn-primary py-3 text-xs uppercase flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Garantir Vaga na Oficina</span>
                  </button>
                  <p className="text-[10px] font-mono-code text-slate-400 text-center mt-2">
                    ✓ Vagas preenchidas por ordem de inscrição
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Registration Modal Dialog */}
      {selectedWorkshopForReg && (
        <RegistrationModal
          isOpen={true}
          onClose={() => setSelectedWorkshopForReg(null)}
          title={`Inscrição · ${selectedWorkshopForReg.title}`}
          categoryName={`Oficina Maker (${selectedWorkshopForReg.room || 'Ôxe Maker 2026'})`}
          formUrl={selectedWorkshopForReg.registrationUrl}
          type="oficina"
        />
      )}
    </div>
  );
};
