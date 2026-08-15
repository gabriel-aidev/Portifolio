import { css, keyframes } from 'styled-components';

/**
 * Camada de movimento compartilhada.
 *
 * O bloco `prefers-reduced-motion` do GlobalStyle zera duração e atraso de
 * todas as animações, então tudo aqui degrada para o estado final visível.
 */

export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.94);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const floatY = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

/** Desloca o gradiente do título, criando um brilho que atravessa o texto. */
export const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

/** Pulso lento do halo atrás da foto do hero. */
export const halo = keyframes`
  0%, 100% {
    opacity: 0.55;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.85;
    transform: translate(-50%, -50%) scale(1.12);
  }
`;

/** Varredura de brilho usada no hover dos botões em pílula. */
export const sheenSweep = keyframes`
  from { transform: translateX(-120%); }
  to { transform: translateX(220%); }
`;

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/**
 * Todo helper daqui nasce dentro de `prefers-reduced-motion: no-preference`.
 *
 * A regra global que zera durações já daria conta, mas ela depende de a animação
 * chegar ao fim para o `fill-mode: both` deixar o elemento visível. Quem pediu
 * movimento reduzido não deve depender disso: assim, simplesmente não existe
 * animação nem `opacity: 0`, e o conteúdo é estático e visível desde o primeiro
 * frame. É a diferença entre degradar e depender de sorte.
 */

/** Entrada na montagem do componente, para conteúdo acima da dobra. */
export const enter = (delayMs = 0, duration = 700) => css`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeUp} ${duration}ms ${EASE} both;
    animation-delay: ${delayMs}ms;
  }
`;

/**
 * Entrada quando o elemento chega na viewport.
 * Depende do `useReveal`, que só marca `data-reveal` quando o JS roda e o
 * usuário não pediu movimento reduzido — sem isso o elemento fica visível,
 * nunca preso em opacidade zero.
 */
export const revealable = css`
  @media (prefers-reduced-motion: no-preference) {
    &[data-reveal='hidden'] {
      opacity: 0;
    }

    &[data-reveal='shown'] {
      animation: ${fadeUp} 700ms ${EASE} both;
    }
  }
`;

/**
 * Igual ao `revealable`, mas escalonando os filhos em cascata.
 * `count` é o número máximo de filhos que recebem atraso próprio.
 */
export const revealStagger = (childSelector: string, count = 12, stepMs = 70) => css`
  @media (prefers-reduced-motion: no-preference) {
    &[data-reveal='hidden'] ${childSelector} {
      opacity: 0;
    }

    &[data-reveal='shown'] ${childSelector} {
      animation: ${fadeUp} 600ms ${EASE} both;
    }

    ${Array.from(
      { length: count },
      (_, i) => css`
        &[data-reveal='shown'] ${childSelector}:nth-child(${i + 1}) {
          animation-delay: ${i * stepMs}ms;
        }
      `
    )}
  }
`;

/** Brilho que atravessa o botão no hover. Aplique em elemento `position: relative`. */
export const sheenOnHover = css`
  position: relative;
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 40%;
      pointer-events: none;
      background: linear-gradient(
        100deg,
        transparent 0%,
        rgba(255, 255, 255, 0.14) 50%,
        transparent 100%
      );
      transform: translateX(-120%);
    }

    &:hover::before {
      animation: ${sheenSweep} 750ms ${EASE};
    }
  }
`;
