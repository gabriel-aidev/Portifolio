import styled from 'styled-components';
import { enter, revealStagger } from '../../styles/motion';

export const StyledContactPage = styled.main`
  display: flex;
  justify-content: center;
  padding: 150px 0 90px;

  .contacts-intro {
    margin: 0 auto 32px;
    max-width: 560px;
  }

  /*
    animações puras de CSS podem ficar presas no primeiro frame do keyframe em
    navegadores automatizados com prefers-reduced-motion, mesmo com a duração
    zerada pelo GlobalStyle; por segurança, só roda quando o usuário não pediu
    movimento reduzido.
  */
  @media (prefers-reduced-motion: no-preference) {
    .contacts-intro h1 {
      ${enter(0)}
    }

    .contacts-intro p {
      ${enter(90)}
    }
  }

  .contacts-intro p {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 15px;
    line-height: 1.6;
  }

  .contacts-card {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 18px;
    max-width: 560px;
    width: 100%;
    background: ${({ theme }) => theme.colors.surface};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};
    box-shadow: ${({ theme }) => theme.shadows.card};
    ${revealStagger('.contact-row', 4, 90)}
  }

  .contact-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px;
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.radii.md};
    transition: background-color ${({ theme }) => theme.transitions.fast},
      border-color ${({ theme }) => theme.transitions.fast},
      transform ${({ theme }) => theme.transitions.fast},
      box-shadow ${({ theme }) => theme.transitions.fast};
  }

  .contact-row:hover,
  .contact-row:focus-within {
    background-color: ${({ theme }) => theme.colors.surfaceHover};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateX(4px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  .icon-pill {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 42px;
    height: 42px;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.pill};
    font-size: 19px;
    color: ${({ theme }) => theme.colors.accent};
  }

  .contact-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .contact-label {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .contact-value {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    overflow-wrap: anywhere;
  }

  .copy-wrap {
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .copy-feedback {
    position: absolute;
    right: calc(100% + 10px);
    white-space: nowrap;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.accent};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.fast};
    pointer-events: none;
  }

  .copy-feedback.is-visible {
    /* garante visibilidade mesmo se a animação abaixo não rodar (reduced motion) */
    opacity: 1;
  }

  @media (prefers-reduced-motion: no-preference) {
    .copy-feedback.is-visible {
      animation: copyFeedbackIn 250ms cubic-bezier(0.22, 1, 0.36, 1) both;
    }
  }

  @keyframes copyFeedbackIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .copy-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 17px;
    transition: color ${({ theme }) => theme.transitions.fast},
      border-color ${({ theme }) => theme.transitions.fast},
      background-color ${({ theme }) => theme.transitions.fast};
  }

  .copy-button:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.surfaceHover};
  }

  .copy-button.is-copied {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 480px) {
    padding: 120px 0 60px;

    .contact-row {
      flex-wrap: wrap;
      row-gap: 8px;
      padding: 12px 10px;
    }

    .contact-link {
      gap: 10px;
    }

    .icon-pill {
      width: 36px;
      height: 36px;
      font-size: 16px;
    }

    .contact-text {
      flex-direction: column;
    }

    .contact-value {
      font-size: 14px;
    }

    .copy-feedback {
      right: auto;
      left: 0;
      top: calc(100% + 4px);
    }
  }
`;
