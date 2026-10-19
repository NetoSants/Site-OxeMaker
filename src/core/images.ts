const modules = import.meta.glob('../assets/img/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

/**
 * Resolve o caminho de uma imagem otimizada em `src/assets/img`.
 * O Vite aplica hash no nome final, permitindo cache imutável no navegador.
 */
export const img = (file: string): string => modules[`../assets/img/${file}`] ?? '';
