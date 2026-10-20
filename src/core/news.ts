import { NewsItem } from './types';

/**
 * ============================================================================
 * NA MÍDIA — PUBLICAÇÕES QUE CITAM O ÔXE MAKER
 * Ordem cronológica decrescente (mais recente primeiro).
 * Apenas veículos que mencionam o evento nominalmente.
 * ============================================================================
 */
export const NEWS_DATA: NewsItem[] = [
  {
    id: 'see-2025-cobertura',
    date: '2025-06-26',
    outlet: 'Secretaria de Educação e Esportes de Pernambuco',
    title:
      'Ôxe Maker: Mostra de Robótica Educacional reúne inovação, cultura geek, criatividade e protagonismo estudantil',
    summary:
      'Cobertura da 5ª edição, realizada na ETE José de Alencar Gomes da Silva, em Paulista, com mais de 70 escolas, cerca de 2 mil estudantes, palestras, cosplay, K-pop e batalhas de robôs.',
    url: 'https://portal.educacao.pe.gov.br/oxe-maker-mostra-de-robotica-educacional-reune-inovacao-cultura-geek-criatividade-e-protagonismo-estudantil/',
    type: 'reportagem',
    alsoPublishedAt: {
      outlet: 'Consed',
      url: 'https://www.consed.org.br/noticia/oxe-maker-mostra-de-robotica-educacional-reune-inovacao-cultura-geek-criatividade-e-protagonismo-estudantil',
    },
  },
  {
    id: 'folha-pe-2025',
    date: '2025-06-25',
    outlet: 'Folha de Pernambuco',
    title: 'Ôxe Maker: Mostra de Robótica Educacional reúne inovação, cultura geek e criatividade',
    summary:
      'Anúncio da edição de 26 e 27 de junho de 2025, na ETE José de Alencar Gomes da Silva, em Paulista, com participação de mais de 70 escolas e cerca de 2 mil estudantes.',
    url: 'https://www.folhape.com.br/noticias/oxe-maker/420562',
    type: 'reportagem',
  },
  {
    id: 'see-2024',
    date: '2024-10-18',
    outlet: 'Secretaria de Educação e Esportes de Pernambuco',
    title: 'GRE Metro Norte promoveu o evento "Ôxe Maker"',
    summary:
      'Registro da edição de 2024 no Ginásio de Paulista: cerca de 600 estudantes, mais de 70 escolas e 20 oficinas, além de palestras, cosplay, K-pop e batalhas de robôs.',
    url: 'https://portal.educacao.pe.gov.br/gre-metro-norte-promoveu-o-evento-oxe-maker/',
    type: 'reportagem',
  },
];
