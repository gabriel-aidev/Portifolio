import styled, { keyframes } from 'styled-components';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** Desenha o traço: com `pathLength="1"`, todo caminho vai de 1 a 0. */
const draw = keyframes`
  to { stroke-dashoffset: 0; }
`;

/**
 * Moldura da ilustração. Fora do gate de movimento reduzido o traço já nasce
 * completo, então nada depende da animação para ficar visível.
 */
export const StyledStoryFigure = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.textMuted};

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .ink {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .accent {
    stroke: ${({ theme }) => theme.colors.accent};
  }

  .dashed {
    stroke-dasharray: 0.08 0.06;
  }

  @media (prefers-reduced-motion: no-preference) {
    &[data-active='true'] .ink {
      stroke-dasharray: 1;
      stroke-dashoffset: 1;
      animation: ${draw} 900ms ${EASE} forwards;
    }

    &[data-active='true'] .dashed {
      /* o círculo aberto mantém o pontilhado; só o offset anima */
      stroke-dasharray: 0.08 0.06;
      stroke-dashoffset: 1.4;
    }

    ${Array.from(
      { length: 20 },
      (_, i) => `
      &[data-active='true'] .ink:nth-child(${i + 1}) {
        animation-delay: ${i * 55}ms;
      }
    `
    ).join('')}
  }
`;
