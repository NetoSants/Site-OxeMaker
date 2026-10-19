import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Atom,
  FlaskConical,
  Dna,
  CircuitBoard,
  Microscope,
  Lightbulb,
  Cpu,
  Zap,
  Star,
  Rocket,
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

const GLYPH_ICONS = [Atom, FlaskConical, Dna, CircuitBoard, Microscope, Lightbulb, Cpu, Zap, Star, Rocket];

const SCIENCE_GLYPHS = Array.from({ length: 28 }, (_, i) => {
  const Icon = GLYPH_ICONS[i % GLYPH_ICONS.length];
  const size = 20 + ((i * 7) % 24);
  const left = (i * 37) % 100;
  const dur = 22 + ((i * 11) % 24);
  const delay = -(((i * 13) % 46)) - (((i * 7) % 10) * 0.3);
  const color = i % 3 === 1 ? '#FCC140' : '#01B1FD';
  const opacity = 0.16 + ((i * 5) % 7) * 0.02;
  return { Icon, left, size, dur, delay, color, opacity };
});

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Glifos reagem ao scroll: a velocidade de deriva acelera conforme a rolagem.
  // Otimizações: refs/animações cacheadas, pausa quando ocioso ou aba oculta
  // e respeito a `prefers-reduced-motion`.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const animations = Array.from(document.querySelectorAll<HTMLElement>('.science-float'))
      .flatMap((el) => el.getAnimations());

    if (animations.length === 0) return;

    let lastY = window.scrollY;
    let lastT = performance.now();
    let rafId = 0;
    let rate = 1;
    let idleFrames = 0;

    const tick = () => {
      const now = performance.now();
      const dt = Math.max(now - lastT, 16);
      const velocity = Math.abs(window.scrollY - lastY) / dt;
      lastY = window.scrollY;
      lastT = now;

      const target = Math.min(7, 1 + velocity * 10);
      rate += (target - rate) * 0.15;

      if (rate !== 1) {
        animations.forEach((animation) => {
          if (animation.playbackRate !== rate) animation.playbackRate = rate;
        });
      }

      if (rate < 1.01 && target === 1) {
        rate = 1;
        idleFrames += 1;
      } else {
        idleFrames = 0;
      }

      if (idleFrames > 30) {
        rafId = 0;
        return;
      }

      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafId) return;
      lastY = window.scrollY;
      lastT = performance.now();
      idleFrames = 0;
      rafId = requestAnimationFrame(tick);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = 0;
      } else {
        start();
      }
    };

    start();
    window.addEventListener('scroll', start, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', start);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="isolate min-h-screen flex flex-col bg-blueprint text-slate-100 selection:bg-[#FCC140] selection:text-[#050D34]">
      {/* Fundo fixo: glow central + cor de ambiente + glifos de ciência flutuantes */}
      <div aria-hidden className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[90px] rounded-full bg-[#0030B5]/20" />
        <div className="absolute inset-0 bg-[#01B1FD] opacity-[0.06]" />
        <div className="absolute inset-0 overflow-hidden">
          {SCIENCE_GLYPHS.map((glyph, i) => (
            <span
              key={i}
              className="absolute science-float"
              style={{
                left: `${glyph.left}%`,
                color: glyph.color,
                opacity: glyph.opacity,
                width: glyph.size,
                height: glyph.size,
                animationDuration: `${glyph.dur}s`,
                animationDelay: `${glyph.delay}s`,
              }}
            >
              <glyph.Icon style={{ width: '100%', height: '100%' }} strokeWidth={1.5} />
            </span>
          ))}
        </div>
      </div>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
        <div key={pathname} className="page-enter">
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Carregando página">
                <span className="w-9 h-9 border-4 border-[#01B1FD]/30 border-t-[#FCC140] rounded-full animate-spin" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
};
