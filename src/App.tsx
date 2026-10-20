/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy } from 'react';
import { HashRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { HomePage } from './features/home/HomePage';
import { Bot, ArrowLeft } from 'lucide-react';

const ProgramacaoPage = lazy(() =>
  import('./features/programacao/ProgramacaoPage').then((m) => ({ default: m.ProgramacaoPage })),
);
const MapaPage = lazy(() =>
  import('./features/mapa/MapaPage').then((m) => ({ default: m.MapaPage })),
);
const TorneioPage = lazy(() =>
  import('./features/torneio/TorneioPage').then((m) => ({ default: m.TorneioPage })),
);
const GeekPage = lazy(() =>
  import('./features/geek/GeekPage').then((m) => ({ default: m.GeekPage })),
);
const OxethonPage = lazy(() =>
  import('./features/oxethon/OxethonPage').then((m) => ({ default: m.OxethonPage })),
);
const OficinasPage = lazy(() =>
  import('./features/oficinas/OficinasPage').then((m) => ({ default: m.OficinasPage })),
);
const SobrePage = lazy(() =>
  import('./features/sobre/SobrePage').then((m) => ({ default: m.SobrePage })),
);
const NoticiasPage = lazy(() =>
  import('./features/noticias/NoticiasPage').then((m) => ({ default: m.NoticiasPage })),
);

const NotFoundPage: React.FC = () => (
  <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
    <div className="w-20 h-20 mx-auto rounded-full bg-[#F9FDFE] border-2 border-[#FCC140] flex items-center justify-center text-[#8A5A04] maker-shadow-yellow">
      <Bot className="w-10 h-10" />
    </div>
    <div className="space-y-2">
      <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-widest">
        Erro 404 · Circuito Desconectado
      </span>
      <h1 className="text-4xl font-heading text-[#0B1330] uppercase">Página Não Encontrada</h1>
      <p className="text-sm text-slate-300 font-sans">
        Ôxe! Parece que este caminho na pista do seguidor de linha não existe ou foi movido.
      </p>
    </div>
    <div>
      <Link
        to="/"
        className="maker-btn-primary px-6 py-3 text-xs uppercase inline-flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar para a Página Inicial</span>
      </Link>
    </div>
  </div>
);

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/programacao" element={<ProgramacaoPage />} />
          <Route path="/mapa" element={<MapaPage />} />
          <Route path="/torneio" element={<TorneioPage />} />
          <Route path="/geek" element={<GeekPage />} />
          <Route path="/oxethon" element={<OxethonPage />} />
          <Route path="/oficinas" element={<OficinasPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
