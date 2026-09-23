import { RefObject, useEffect, useState } from 'react';

interface StoryProgress {
  /** Índice da etapa que cruza o centro da viewport; -1 antes da primeira. */
  activeIndex: number;
  /** Quanto da lista de etapas já passou pelo centro, de 0 a 1. */
  progress: number;
}

/**
 * Lê a posição de rolagem e devolve a etapa ativa e o progresso da história.
 * A etapa ativa é a última cujo topo já passou do centro da tela, então a
 * troca acontece quando o leitor chega nela, e não quando ela aparece na borda.
 */
export const useStoryProgress = (
  listRef: RefObject<HTMLElement>,
  stepSelector: string
): StoryProgress => {
  const [state, setState] = useState<StoryProgress>({ activeIndex: 0, progress: 0 });

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const steps = Array.from(list.querySelectorAll<HTMLElement>(stepSelector));
      if (steps.length === 0) return;

      const center = window.innerHeight * 0.5;
      const listRect = list.getBoundingClientRect();

      let active = 0;
      steps.forEach((step, index) => {
        if (step.getBoundingClientRect().top <= center) active = index;
      });

      let progress = Math.min(1, Math.max(0, (center - listRect.top) / listRect.height));

      /*
        A última etapa é curta e fica colada no fim da página: o centro da tela
        nunca chega nela. Com a rolagem no fim, a história está completa.
      */
      const doc = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
      if (atBottom) {
        active = steps.length - 1;
        progress = 1;
      }

      setState((prev) =>
        prev.activeIndex === active && Math.abs(prev.progress - progress) < 0.002
          ? prev
          : { activeIndex: active, progress }
      );
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [listRef, stepSelector]);

  return state;
};
