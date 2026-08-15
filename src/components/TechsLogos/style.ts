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
 */
export const StyledTechsLogos = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
  gap: 16px;

  [data-reveal='hidden'] & .tech-box {
    opacity: 0;
  }

  [data-reveal='shown'] & .tech-box {
    animation: ${fadeUp} 600ms ${EASE} both;
  }

  ${Array.from(
    { length: 16 },
    (_, i) => `
    [data-reveal='shown'] & .tech-box:nth-child(${i + 1}) {
      animation-delay: ${i * 55}ms;
    }
  `
  ).join('')}

  .tech-box {
    aspect-ratio: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.lg};
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    transition: transform ${({ theme }) => theme.transitions.base},
      border-color ${({ theme }) => theme.transitions.base},
      background-color ${({ theme }) => theme.transitions.base};

    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }

  .tech-box:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.surfaceHover};
  }

  .SCRUM {
    img {
      max-height: 55%;
      max-width: 65%;
    }

    h4 {
      color: ${({ theme }) => theme.colors.textMuted};
      margin-top: 6px;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      letter-spacing: 0.03em;
    }
  }
`;
