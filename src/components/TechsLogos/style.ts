import styled from 'styled-components';
import { fadeUp } from '../../styles/motion';

/** Mesma curva usada nos helpers de `styles/motion.ts` e em `theme.transitions`. */
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/**
 * O `data-reveal` de `useReveal` é escrito no `<aside>` que envolve esta grade
 * (ver `HomePage/index.tsx`), não neste componente — `TechsLogos/index.tsx` é
 * fronteira alheia e não pode receber a ref. Por isso o seletor abaixo procura
 * o atributo num ancestral (`[data-reveal='shown'] &`) em vez de usar
 * `revealStagger` de `motion.ts`, que assume o atributo no próprio elemento.
 * A cascata é por grupo: cada grupo entra inteiro, um depois do outro.
 */
export const StyledTechsLogos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;

  [data-reveal='hidden'] & .tech-group {
    opacity: 0;
  }

  [data-reveal='shown'] & .tech-group {
    animation: ${fadeUp} 600ms ${EASE} both;
  }

  ${Array.from(
    { length: 4 },
    (_, i) => `
    [data-reveal='shown'] & .tech-group:nth-child(${i + 1}) {
      animation-delay: ${i * 110}ms;
    }
  `
  ).join('')}

  .tech-group-label {
    margin-bottom: 12px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textFaint};
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
    gap: 12px;
  }

  .tech-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 104px;
    padding: 16px 10px;
    border-radius: ${({ theme }) => theme.radii.lg};
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    transition: transform ${({ theme }) => theme.transitions.base},
      border-color ${({ theme }) => theme.transitions.base},
      background-color ${({ theme }) => theme.transitions.base};

    svg {
      width: 28px;
      height: 28px;
      color: ${({ theme }) => theme.colors.text};
      transition: color ${({ theme }) => theme.transitions.fast};
    }

    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.25;
      text-align: center;
      color: ${({ theme }) => theme.colors.textMuted};
      transition: color ${({ theme }) => theme.transitions.fast};
    }
  }

  .tech-box:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.surfaceHover};

    svg {
      color: ${({ theme }) => theme.colors.accent};
    }

    span {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .tech-practices {
    font-size: 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  @media (max-width: 480px) {
    .tech-grid {
      grid-template-columns: repeat(auto-fill, minmax(92px, 1fr));
      gap: 10px;
    }

    .tech-box {
      min-height: 92px;
      padding: 12px 8px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
