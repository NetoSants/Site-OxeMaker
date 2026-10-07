import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, Calendar, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { RegistrationModal } from './RegistrationModal';
import { EVENT_INFO } from '../core/constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track scroll for slight header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Programação', path: '/programacao' },
    { label: 'Torneios', path: '/torneio' },
    { label: 'Cultura Geek', path: '/geek' },
    { label: 'Oxethon 48h', path: '/oxethon' },
    { label: 'Oficinas', path: '/oficinas' },
    { label: 'Mapa & Local', path: '/mapa' },
    { label: 'Sobre', path: '/sobre' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#050D34]/95 backdrop-blur-md border-b-2 border-[#01B1FD]/30 shadow-lg shadow-black/40'
            : 'bg-[#050D34]/90 backdrop-blur-sm border-b border-slate-800'
        }`}
      >
        {/* Top Info Micro-Bar */}
        <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#0030B5]/30 border-b border-[#01B1FD]/15 text-[11px] font-mono-code text-slate-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#FCC140]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{EVENT_INFO.dates.display} · {EVENT_INFO.dates.timeRange}</span>
            </span>
            <span className="text-slate-500">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#01B1FD]" />
              <span>{EVENT_INFO.location.venue} · Olinda-PE</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-semibold">● Entrada Franca</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">GRE Metropolitana Norte</span>
          </div>
        </div>

        {/* Main Nav Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegação Principal">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2.5 py-1.5 text-xs xl:text-sm font-semibold transition-colors relative tracking-wide rounded-sm ${
                      isActive
                        ? 'text-[#FCC140] font-bold border-b-2 border-[#FCC140]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setIsRegModalOpen(true)}
                className="maker-btn-primary px-4 py-2 text-xs uppercase flex items-center gap-1.5 tracking-wider cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Inscreva-se Grátis</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setIsRegModalOpen(true)}
                className="maker-btn-primary px-3 py-1.5 text-[11px] uppercase tracking-wider"
              >
                Inscrever
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FCC140]"
                aria-label={isOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6 text-[#FCC140]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#050D34] border-b-2 border-[#FCC140] px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="p-2 mb-2 bg-[#1E292D] border border-slate-700 rounded-sm text-xs font-mono-code text-slate-300">
              <p className="text-[#FCC140] font-bold">Ôxe Maker 2026 · 6ª Edição</p>
              <p className="text-[11px] text-slate-400">{EVENT_INFO.dates.display} · ETE José de Alencar</p>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-sm transition-colors ${
                    isActive
                      ? 'bg-[#1E292D] text-[#FCC140] border-l-4 border-[#FCC140]'
                      : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                  }`
                }
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsRegModalOpen(true);
                }}
                className="w-full maker-btn-primary py-3 text-xs uppercase flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Garantir Inscrição Gratuita</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={isRegModalOpen}
        onClose={() => setIsRegModalOpen(false)}
        title="Inscrição Oficial · Ôxe Maker 2026"
        categoryName="Credenciamento Geral & Visitantes"
        formUrl={EVENT_INFO.links.generalRegistration}
      />
    </>
  );
};
