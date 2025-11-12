import { useState, useEffect } from 'react';

/**
 * Hook para detectar preferência do usuário por movimento reduzido
 * Retorna true se o usuário preferir reduzir animações (acessibilidade)
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Verifica se o navegador suporta matchMedia
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Define o estado inicial
    setPrefersReducedMotion(mediaQuery.matches);

    // Handler para mudanças na preferência
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Adiciona listener para mudanças
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}