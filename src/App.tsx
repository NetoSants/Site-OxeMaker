/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { HomePage } from './features/home/HomePage';
import { ProgramacaoPage } from './features/programacao/ProgramacaoPage';
import { MapaPage } from './features/mapa/MapaPage';
import { TorneioPage } from './features/torneio/TorneioPage';
import { GeekPage } from './features/geek/GeekPage';
import { OxethonPage } from './features/oxethon/OxethonPage';
import { OficinasPage } from './features/oficinas/OficinasPage';
import { SobrePage } from './features/sobre/SobrePage';
import { Bot, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => (
  <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
    <div className="w-20 h-20 mx-auto rounded-full bg-[#1E292D] border-2 border-[#FCC140] flex items-center justify-center text-[#FCC140] maker-shadow-yellow">
      <Bot className="w-10 h-10" />
    </div>
    <div className="space-y-2">
      <span className="text-xs font-mono-code text-[#01B1FD] uppercase font-bold tracking-widest">
        Erro 404 · Circuito Desconectado
      </span>
      <h1 className="text-4xl font-heading text-white uppercase">Página Não Encontrada</h1>
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
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/programacao" element={<ProgramacaoPage />} />
          <Route path="/mapa" element={<MapaPage />} />
          <Route path="/torneio" element={<TorneioPage />} />
          <Route path="/geek" element={<GeekPage />} />
          <Route path="/oxethon" element={<OxethonPage />} />
          <Route path="/oficinas" element={<OficinasPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
