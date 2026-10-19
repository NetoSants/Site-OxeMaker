import React from 'react';
import { Link } from 'react-router-dom';
import { img } from '../core/images';

interface LogoProps {
  className?: string;
  showMascot?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showMascot = true,
  size = 'md',
}) => {
  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-4xl md:text-5xl',
  };

  const badgeSizes = {
    sm: 'text-[9px] px-1.5 py-0.5',
    md: 'text-[10px] px-2 py-0.5',
    lg: 'text-xs px-2.5 py-1',
  };

  const mascotSizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group transition-transform active:scale-[0.98] ${className}`}
      aria-label="Ôxe Maker 2026 - Página Inicial"
    >
      {showMascot && (
        <div
          className={`relative flex-shrink-0 transition-transform group-hover:rotate-6 ${mascotSizes[size]}`}
        >
          <img
            src={img('calango-logo.webp')}
            alt="Calango Maker · mascote do Ôxe Maker"
            width={512}
            height={413}
            decoding="async"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-wider uppercase brand-name font-heading whitespace-nowrap transition-all ${textSizes[size]}`}
          >
            ÔXE MAKER
          </span>
          <span
            className={`font-mono-code font-black bg-[#01B1FD] text-[#050D34] rounded-sm uppercase tracking-wider font-bold ${badgeSizes[size]}`}
          >
            2026
          </span>
        </div>
        <span className="text-[10px] md:text-[11px] font-mono-code whitespace-nowrap text-slate-300 tracking-wider uppercase mt-0.5">
          Robótica · GRE Metro Norte
        </span>
      </div>
    </Link>
  );
};
