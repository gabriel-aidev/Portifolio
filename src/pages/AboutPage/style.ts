import styled from 'styled-components';
import { enter, sheenOnHover } from '../../styles/motion';

export const StyledAboutPage = styled.main`
  .about-intro {
    /* 85px do cabeçalho fixo mais o respiro da abertura */
    padding: 125px 0 32px;
    max-width: 760px;

    h1 {
      font-size: clamp(32px, 5vw, 56px);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.colors.text};
      ${enter(0)}
    }

    p {
      margin-top: 18px;
      max-width: 70ch;
      font-size: 17px;
      line-height: 1.7;
      color: ${({ theme }) => theme.colors.textMuted};
      ${enter(100)}
    }
  }

  /* --- composição: painel fixo | trilho | etapas --- */

  .story {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) 48px minmax(0, 1fr);
    gap: 0 24px;
    padding-bottom: 80px;
    ${enter(200)}
  }

  .story-panel {
    position: sticky;
    top: 110px;
    align-self: start;
  }

  /* a altura do cartão vem da ilustração (4:3), não de um valor fixo:
     assim ela preenche a moldura e o cartão inteiro cabe na primeira tela */
  .panel-card {
    display: flex;
    flex-direction: column;
    padding: 24px 28px;
    border-radius: ${({ theme }) => theme.radii.lg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.bgSoft};
    background-image: radial-gradient(
        28rem 20rem at 100% 0%,
        ${({ theme }) => theme.colors.accentGlow},
        transparent 65%
      ),
      linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    background-size: auto, 28px 28px, 28px 28px;
    background-position: 0 0, -1px -1px, -1px -1px;
    box-shadow: ${({ theme }) => theme.shadows.card};
  }

  .panel-period {
    font-size: clamp(28px, 3.2vw, 44px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
    color: ${({ theme }) => theme.colors.text};
    font-variant-numeric: tabular-nums;
  }

  .panel-figures {
    position: relative;
    aspect-ratio: 4 / 3;
    margin: 12px 0;
  }

  .panel-figure {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity ${({ theme }) => theme.transitions.slow},
      transform ${({ theme }) => theme.transitions.slow};

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .panel-figure.is-active {
    opacity: 1;
    transform: translateY(0);
  }

  .panel-title {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  /* --- trilho de progresso --- */

  .story-rail {
    position: relative;
  }

  .rail-track,
  .rail-fill {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    margin-left: -1px;
    border-radius: ${({ theme }) => theme.radii.pill};
  }

  .rail-track {
    background-color: ${({ theme }) => theme.colors.border};
  }

  .rail-fill {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.accent} 0%,
      ${({ theme }) => theme.colors.accent} 85%,
      transparent 100%
    );
    transform-origin: top;
    transition: transform 120ms linear;
  }

  /* --- etapas --- */

  .story-steps {
    display: flex;
    flex-direction: column;
  }

  .step {
    position: relative;
    /* cada parada ocupa mais ou menos a altura do cartão que a acompanha */
    min-height: clamp(360px, 52vh, 520px);
    padding: 0 0 64px;
    max-width: 60ch;
  }

  .step:last-child {
    min-height: 0;
    padding-bottom: 0;
  }

  .step-dot {
    position: absolute;
    top: 8px;
    left: calc(-24px - 24px - 8px);
    width: 16px;
    height: 16px;
    border-radius: ${({ theme }) => theme.radii.pill};
    border: 2px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.bg};
    transition: border-color ${({ theme }) => theme.transitions.base},
      background-color ${({ theme }) => theme.transitions.base},
      box-shadow ${({ theme }) => theme.transitions.base};
  }

  .step[data-reached='true'] .step-dot {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  .step[data-active='true'] .step-dot {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.accentGlow};
  }

  .step h2 {
    font-size: clamp(22px, 2.6vw, 30px);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.text};
    text-wrap: balance;
    transition: color ${({ theme }) => theme.transitions.base};
  }

  .step[data-active='false'] h2 {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  /* no desktop o período vive no painel, que é aria-hidden: aqui ele fica
     só para leitores de tela */
  .step-period {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .step p {
    margin-top: 16px;
    font-size: 16px;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color ${({ theme }) => theme.transitions.base};
  }

  .step[data-active='true'] p {
    color: ${({ theme }) => theme.colors.text};
  }

  .step-inline-figure {
    display: none;
  }

  .step-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 22px;
      border-radius: ${({ theme }) => theme.radii.pill};
      font-size: 15px;
      font-weight: 500;
      transition: transform ${({ theme }) => theme.transitions.fast},
        border-color ${({ theme }) => theme.transitions.fast};

      svg {
        width: 16px;
        height: 16px;
      }
    }

    a:hover {
      transform: translateY(-2px);
    }

    .action-primary {
      background-color: ${({ theme }) => theme.colors.accentDeep};
      border: 1px solid ${({ theme }) => theme.colors.borderStrong};
      color: ${({ theme }) => theme.colors.accent};
      ${sheenOnHover}
    }

    .action-primary:hover {
      border-color: ${({ theme }) => theme.colors.accent};
    }

    .action-secondary {
      background-color: ${({ theme }) => theme.colors.surfaceHover};
      border: 1px solid ${({ theme }) => theme.colors.border};
      color: ${({ theme }) => theme.colors.text};
    }

    .action-secondary:hover {
      border-color: ${({ theme }) => theme.colors.borderStrong};
    }
  }

  /* --- uma coluna: a ilustração entra acima de cada etapa --- */

  @media (max-width: 900px) {
    .story {
      grid-template-columns: 28px minmax(0, 1fr);
      gap: 0 18px;
    }

    .story-panel {
      display: none;
    }

    .step {
      min-height: 0;
      padding-bottom: 64px;
    }

    .step-dot {
      left: calc(-18px - 14px - 8px);
      top: 10px;
    }

    /* no celular o período visível está na figura inline; some o duplicado */
    .step-period {
      display: none;
    }

    .step-inline-figure {
      display: block;
      margin-bottom: 18px;
      padding: 16px 18px;
      border-radius: ${({ theme }) => theme.radii.md};
      border: 1px solid ${({ theme }) => theme.colors.border};
      background-color: ${({ theme }) => theme.colors.bgSoft};
      background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
      background-size: 28px 28px;

      svg {
        max-height: 180px;
        margin: 0 auto;
      }
    }

    .inline-period {
      display: block;
      margin-bottom: 6px;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.colors.text};
      font-variant-numeric: tabular-nums;
    }

    .step[data-active='false'] h2,
    .step p {
      color: ${({ theme }) => theme.colors.text};
    }

    .step p {
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }

  @media (max-width: 480px) {
    .about-intro {
      padding: 125px 0 28px;
    }

    .step p {
      font-size: 15px;
    }
  }
`;
