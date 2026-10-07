import React, { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Copy, Sparkles, AlertCircle } from 'lucide-react';
import { EVENT_INFO } from '../core/constants';

export interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  categoryName?: string;
  formUrl?: string;
  type?: 'visitante' | 'torneio' | 'geek' | 'oxethon' | 'oficina' | 'caravana';
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  title = 'Inscrição Gratuita · Ôxe Maker 2026',
  categoryName = 'Participação Geral',
  formUrl = EVENT_INFO.links.generalRegistration,
  type = 'visitante',
}) => {
  const [copied, setCopied] = useState(false);
  const [isSimulatedSubmitted, setIsSimulatedSubmitted] = useState(false);
  const [protocolNumber, setProtocolNumber] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    phone: '',
    role: 'Estudante da Rede Estadual',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset simulation state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSimulatedSubmitted(false);
      setCopied(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(formUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulatedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    const randCode = Math.floor(1000 + Math.random() * 9000);
    setProtocolNumber(`OXE-${new Date().getFullYear()}-${randCode}`);
    setIsSimulatedSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-[#1E292D] border-2 border-[#FCC140] rounded-sm maker-shadow-yellow-lg p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-700/80 pb-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#01B1FD] uppercase font-bold tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FCC140]" />
              <span>{categoryName}</span>
            </div>
            <h2 id="modal-title" className="text-2xl font-bold font-heading text-white">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
            aria-label="Fechar janela de inscrição"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSimulatedSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#107C41]/20 border-2 border-[#107C41] flex items-center justify-center text-[#4ADE80]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#FCC140]">
              Inscrição Confirmada com Sucesso!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Parabéns, <strong className="text-white">{formData.name}</strong>! Seus dados foram
              registrados para <strong className="text-[#01B1FD]">{categoryName}</strong> no Ôxe Maker
              2026.
            </p>

            <div className="p-4 bg-[#050D34] border border-slate-700 rounded-sm font-mono-code text-sm">
              <span className="text-slate-400 block text-xs uppercase mb-1">
                Protocolo Digital da Vaga
              </span>
              <span className="text-lg font-bold text-[#FCC140] tracking-widest">
                {protocolNumber}
              </span>
              <span className="text-xs text-slate-400 block mt-1">
                Apresente este código ou seu documento no credenciamento em 02 ou 03/07/2026.
              </span>
            </div>

            <div className="pt-3 flex gap-3 justify-center">
              <button
                type="button"
                onClick={() => setIsSimulatedSubmitted(false)}
                className="px-4 py-2 text-xs font-mono-code text-slate-300 hover:text-white border border-slate-600 rounded-sm"
              >
                Nova Inscrição
              </button>
              <button
                type="button"
                onClick={onClose}
                className="maker-btn-primary px-5 py-2 text-xs uppercase"
              >
                Concluir & Fechar
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Direct Google Forms CTA Banner */}
            <div className="p-4 bg-[#050D34] border border-[#01B1FD]/50 rounded-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#01B1FD] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 space-y-1">
                  <p className="font-bold text-white">
                    Formulário Oficial da GRE Metropolitana Norte
                  </p>
                  <p>
                    As inscrições oficiais também podem ser preenchidas diretamente pelo Google Forms
                    oficial da comissão organizadora.
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#01B1FD] hover:bg-[#01B1FD]/90 text-[#050D34] font-mono-code text-xs font-bold rounded-sm transition-colors"
                >
                  <span>Abrir Google Forms Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono-code text-xs rounded-sm border border-slate-700 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Link Copiado!' : 'Copiar Link'}</span>
                </button>
              </div>
            </div>

            {/* In-app registration form */}
            <div className="border-t border-slate-700/80 pt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono-code uppercase font-bold text-[#FCC140]">
                  Ou inscreva-se direto por aqui:
                </span>
                <span className="text-[11px] font-mono-code text-slate-400">100% Gratuito</span>
              </div>

              <form onSubmit={handleSimulatedSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Maria Clara dos Santos"
                    className="w-full px-3 py-2 bg-[#050D34] border border-slate-600 focus:border-[#FCC140] rounded-sm text-sm text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1">
                      E-mail para Confirmação *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-3 py-2 bg-[#050D34] border border-slate-600 focus:border-[#FCC140] rounded-sm text-sm text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(81) 99999-9999"
                      className="w-full px-3 py-2 bg-[#050D34] border border-slate-600 focus:border-[#FCC140] rounded-sm text-sm text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1">
                      Escola / Instituição
                    </label>
                    <input
                      type="text"
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                      placeholder="Ex: ETE José de Alencar"
                      className="w-full px-3 py-2 bg-[#050D34] border border-slate-600 focus:border-[#FCC140] rounded-sm text-sm text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1">
                      Perfil do Participante
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 bg-[#050D34] border border-slate-600 focus:border-[#FCC140] rounded-sm text-sm text-white focus:outline-none"
                    >
                      <option value="Estudante da Rede Estadual">Estudante da Rede Estadual PE</option>
                      <option value="Estudante da Rede Municipal / Outras">Estudante de Outra Rede</option>
                      <option value="Professor / Educador">Professor / Educador</option>
                      <option value="Familiar / Comunidade">Familiar / Comunidade</option>
                      <option value="Entusiasta de Tecnologia / Maker">Entusiasta Maker / Outro</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full maker-btn-primary py-3 text-sm uppercase flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirmar Inscrição Gratuita</span>
                  </button>
                  <p className="text-[11px] font-mono-code text-slate-400 text-center mt-2">
                    ✓ Entrada franca · Certificado digital incluso de 16h
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
