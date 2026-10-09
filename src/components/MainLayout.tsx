import React, { useEffect } from 'react';
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

const SCIENCE_GLYPHS = Array.from({ length: 200 }, (_, i) => {
  const Icon = GLYPH_ICONS[i % GLYPH_ICONS.length];
  const sizeGap = 5 + ((i * 7) % 6);
  const left = (i * 37) % 100;
  const dur = 22 + ((i * 11) % 24);
  const delay = -(((i * 13) % 46)) - (((i * 7) % 10) * 0.3);
  const color = i % 3 === 1 ? '#FCC140' : '#01B1FD';
  const opacity = 0.10 + ((i * 5) % 7) * 0.01;
  return { Icon, left, cls: `w-${sizeGap} h-${sizeGap}`, dur, delay, color, opacity };
});

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Glifos reagem ao scroll: a velocidade de deriva acelera conforme `a velocidade do scroll
  useEffect(() => {
    let lastY = window.scrollY;
    let lastT = performance.now();
    let rafId = 0;
    let rate = 1;

    const tick = () => {
      const now = performance.now();
      const dt = Math.max(now - lastT, 16);
      const velocity = Math.abs(window.scrollY - lastY) / dt;
      lastY = window.scrollY;
      lastT = now;

      const target = Math.min(7, 1 + velocity * 10);
      rate += (target - rate) * 0.15;
      if (rate < 1.01) rate = 1;

      document.querySelectorAll<HTMLElement>('.science-float').forEach((el) => {
        el.getAnimations().forEach((a) => {
          if (rate !== a.playbackRate) a.playbackRate = rate;
        });
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="isolate min-h-screen flex flex-col bg-blueprint text-slate-100 selection:bg-[#FCC140] selection:text-[#050D34]">
      {/* Fundo fixo: glow central + azul clarinho + glifos de ciência flutuantes */}
      <div aria-hidden className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0030B5]/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[#01B1FD] opacity-15" />
        <div className="absolute inset-0 overflow-hidden">
          {SCIENCE_GLYPHS.map((g, i) => (
            <span
              key={i}
              className="absolute science-float"
              style={{
                left: `${g.left}%`,
                color: g.color,
                opacity: g.opacity,
                animationDuration: `${g.dur}s`,
                animationDelay: `${g.delay}s`,
              }}
            >
              <g.Icon className={g.cls} strokeWidth={1.5} />
              </span>
            ))}
          </div>
        </div>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
        <div key={pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};