import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../core/theme';

interface ThemeToggleProps {
  className?: string;
  withLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', withLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={isDark ? 'Tema claro' : 'Tema escuro'}
      aria-pressed={isDark}
      className={className}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      {withLabel && <span>{isDark ? 'Tema claro' : 'Tema escuro'}</span>}
    </button>
  );
};
