import React, { useState, useMemo } from 'react';
import { EVENT_INFO, SCHEDULE_DATA } from '../../core/constants';
import { ScheduleItem } from '../../core/types';
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Filter,
  Download,
  Bot,
  Wrench,
  Sparkles,
  Award,
  Mic,
  CalendarCheck2,
} from 'lucide-react';

export const ProgramacaoPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<'all' | 'day1' | 'day2'>('day1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Todas as Áreas' },
    { id: 'robotica', label: 'Torneios de Robótica', icon: Bot },
    { id: 'oficinas', label: 'Oficinas Práticas', icon: Wrench },
    { id: 'geek', label: 'Cultura Geek & Dança', icon: Sparkles },
    { id: 'palestras', label: 'Palestras & Pitches', icon: Mic },
    { id: 'cerimonia', label: 'Solenidades & Abertura', icon: Award },
  ];

  const filteredSchedule = useMemo(() => {
    return SCHEDULE_DATA.filter((item) => {
      const matchDay = selectedDay === 'all' || item.day === selectedDay;
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.speakerOrHost &&
          item.speakerOrHost.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchDay && matchCategory && matchSearch;
    });
  }, [selectedDay, selectedCategory, searchQuery]);

  const handleExportSchedule = () => {
    let content = `PROGRAMAÇÃO OFICIAL - ÔXE MAKER 2026\nData: 02 e 03 de julho de 2026 | ETE José de Alencar, Olinda-PE\n\n`;

    SCHEDULE_DATA.forEach((item) => {
      const dayLabel = item.day === 'day1' ? '02/07 (Dia 1)' : '03/07 (Dia 2)';
      content += `[${dayLabel}] ${item.time} - ${item.title}\nLocal: ${item.location}\nCategoria: ${item.category.toUpperCase()}\nDetalhes: ${item.description}\nResponsável: ${item.speakerOrHost || 'Equipe Ôxe Maker'}\n----------------------------------------\n`;
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Programacao-OxeMaker-2026.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getCategoryBadge = (category: ScheduleItem['category']) => {
    switch (category) {
      case 'robotica':
        return {
          label: 'Robótica & Batalhas',
          bg: 'bg-[#FCC140]/10 border-[#FCC140]/50 text-[#FCC140]',
        };
      case 'oficinas':
        return {
          label: 'Oficina Maker',
          bg: 'bg-[#01B1FD]/10 border-[#01B1FD]/50 text-[#01B1FD]',
        };
      case 'geek':
        return {
          label: 'Cultura Geek',
          bg: 'bg-purple-500/10 border-purple-500/50 text-purple-300',
        };
      case 'palestras':
        return {
          label: 'Palestra / Debate',
          bg: 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300',
        };
      case 'cerimonia':
        return {
          label: 'Solenidade Oficial',
          bg: 'bg-amber-500/10 border-amber-500/50 text-amber-300',
        };
      default:
        return {
          label: 'Geral',
          bg: 'bg-slate-700/50 border-slate-600 text-slate-300',
        };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#FCC140] uppercase font-bold tracking-wider">
          <Calendar className="w-4 h-4" />
          <span>Grade Oficial de Atividades · 07h00 às 17h30</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
          Programação dos 2 Dias
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          Acompanhe todos os horários de credenciamento, mesa de abertura, eliminatórias de
          robótica, oficinas práticas, concurso de cosplay e torneio de K-pop na ETE José de
          Alencar.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={handleExportSchedule}
            className="maker-btn-secondary px-4 py-2 text-xs uppercase flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar Programação (.TXT)</span>
          </button>
          <span className="text-xs font-mono-code text-slate-400">
            ✓ Horário de Brasília (GMT-3) · Sujeito a pequenos ajustes no local
          </span>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-[#1E292D] border-2 border-slate-700/80 rounded-sm p-4 space-y-4 maker-shadow-yellow">
        {/* Day Selector Segmented Control */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-700/80 pb-3">
          <span className="text-xs font-mono-code uppercase font-bold text-slate-300 mr-2 flex items-center gap-1">
            <CalendarCheck2 className="w-4 h-4 text-[#01B1FD]" />
            Dia:
          </span>
          <button
            onClick={() => setSelectedDay('day1')}
            className={`px-3.5 py-1.5 text-xs font-mono-code font-bold rounded-sm uppercase transition-all ${
              selectedDay === 'day1'
                ? 'bg-[#FCC140] text-[#050D34] shadow-sm'
                : 'bg-[#050D34] text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            02/07 · Quinta (Dia 1)
          </button>
          <button
            onClick={() => setSelectedDay('day2')}
            className={`px-3.5 py-1.5 text-xs font-mono-code font-bold rounded-sm uppercase transition-all ${
              selectedDay === 'day2'
                ? 'bg-[#FCC140] text-[#050D34] shadow-sm'
                : 'bg-[#050D34] text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            03/07 · Sexta (Dia 2)
          </button>
          <button
            onClick={() => setSelectedDay('all')}
            className={`px-3.5 py-1.5 text-xs font-mono-code font-bold rounded-sm uppercase transition-all ${
              selectedDay === 'all'
                ? 'bg-[#FCC140] text-[#050D34] shadow-sm'
                : 'bg-[#050D34] text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            Ver Ambos os Dias
          </button>
        </div>

        {/* Category & Search Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400 mr-1 hidden sm:inline" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 text-xs font-mono-code rounded-sm transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#01B1FD] text-[#050D34] font-bold'
                    : 'bg-[#050D34]/70 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search field */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por atração ou sala..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#050D34] border border-slate-700 focus:border-[#FCC140] rounded-sm text-xs text-white placeholder-slate-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Schedule Items Timeline */}
      {filteredSchedule.length === 0 ? (
        <div className="text-center py-16 bg-[#1E292D] border border-slate-800 rounded-sm">
          <Clock className="w-10 h-10 text-slate-500 mx-auto mb-2" />
          <h3 className="text-lg font-heading text-white">Nenhuma atividade encontrada</h3>
          <p className="text-xs text-slate-400 mt-1">
            Tente remover os filtros ou buscar por outro termo.
          </p>
          <button
            onClick={() => {
              setSelectedDay('all');
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-mono-code text-[#01B1FD] hover:underline"
          >
            Limpar todos os filtros
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredSchedule.map((item) => {
            const badge = getCategoryBadge(item.category);
            const isDay1 = item.day === 'day1';

            return (
              <div
                key={item.id}
                className="bg-[#1E292D] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-4 sm:p-5 transition-all hover:maker-shadow-yellow group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  {/* Left: Time and Day Tag */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-code text-sm sm:text-base font-bold text-[#FCC140] flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#01B1FD]" />
                      {item.time}
                    </span>
                    <span className="text-slate-500">·</span>
                    <span
                      className={`text-[11px] font-mono-code px-2 py-0.5 rounded-sm border ${
                        isDay1
                          ? 'bg-[#0030B5]/30 border-[#01B1FD]/40 text-[#01B1FD]'
                          : 'bg-amber-900/30 border-amber-500/40 text-amber-300'
                      }`}
                    >
                      {isDay1 ? 'Dia 1 · 02/07' : 'Dia 2 · 03/07'}
                    </span>
                  </div>

                  {/* Right: Category badge */}
                  <span
                    className={`inline-block text-[11px] font-mono-code uppercase px-2.5 py-0.5 rounded-sm border ${badge.bg}`}
                  >
                    {badge.label}
                  </span>
                </div>

                {/* Middle: Title & Description */}
                <div className="py-3 space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-heading text-white group-hover:text-[#FCC140] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Location and Speaker */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code text-slate-400 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-[#01B1FD]" />
                    <span>{item.location}</span>
                  </div>

                  {item.speakerOrHost && (
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <span className="text-slate-500">Coordenação:</span>
                      <span className="text-slate-200">{item.speakerOrHost}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
