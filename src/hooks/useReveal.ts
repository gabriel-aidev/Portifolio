import { useLayoutEffect, useRef } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Marca o elemento com `data-reveal="hidden"` e troca para `"shown"` quando ele
 * entra na viewport, para o CSS animar a entrada.
 *
 * O estado escondido é aplicado por JS, em `useLayoutEffect` (antes do paint,
 * então não pisca). Consequência importante: sem JS, sem IntersectionObserver
 * ou com `prefers-reduced-motion`, nenhum atributo é escrito e o conteúdo
 * simplesmente aparece visível — nunca fica preso em opacidade zero.
 */
export const useReveal = <T extends HTMLElement>(threshold = 0.15) => {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return;

    element.dataset.reveal = 'hidden';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.reveal = 'shown';
          observer.unobserve(entry.target);
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
};
