import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';
import { revealable, revealStagger, sheenOnHover } from '../../styles/motion';

export const StyledProjectsPage = styled.main`
  .projects-container {
    padding-top: 85px;
  }

  .featured-projects-section {
    ${revealable}
  }

  .other-projects-section {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    ${revealStagger('li', 3, 90)}
  }

  .other-projects-expands {
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};
    box-shadow: ${({ theme }) => theme.shadows.soft};
    padding: 24px;
    margin-bottom: 50px;

    /*
      animações puras de CSS (sem useReveal) em navegadores automatizados com
      prefers-reduced-motion podem ficar presas no primeiro frame do keyframe
      mesmo com a duração zerada pelo GlobalStyle; por segurança, só roda
      quando o usuário não pediu movimento reduzido.
    */
    @media (prefers-reduced-motion: no-preference) {
      /* o token já traz duração + curva; acrescentar outra timing function invalida o shorthand */
      animation: fadeInUp ${({ theme }) => theme.transitions.slow};
    }
  }

  .skills-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 24px;

    /* painel monta/desmonta sob demanda: cascata puramente em CSS, sem useReveal */
    @media (prefers-reduced-motion: no-preference) {
      > * {
        animation: fadeInUp 420ms ease both;
      }

      ${Array.from(
        { length: 12 },
        (_, i) => `
        > *:nth-child(${i + 1}) {
          animation-delay: ${i * 35}ms;
        }
      `
      ).join('')}
    }
  }

  .github-callout {
    display: flex;
    justify-content: center;
    margin: 10px 0 50px;
    ${revealable}

    a {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      border-radius: ${({ theme }) => theme.radii.pill};
      background-color: ${({ theme }) => theme.colors.accentDeep};
      border: 1px solid ${({ theme }) => theme.colors.borderStrong};
      color: ${({ theme }) => theme.colors.accent};
      font-size: 15px;
      text-align: center;
      transition: transform ${({ theme }) => theme.transitions.fast},
        border-color ${({ theme }) => theme.transitions.fast};
      ${sheenOnHover}
    }

    a:hover {
      transform: translateY(-2px);
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }

  .certificates-area {
    ${revealable}
  }

  .certificate-box {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }

  .certificate-frame {
    width: 100%;
    max-width: 940px;
    aspect-ratio: 940 / 585;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.surfaceSolid};

    iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .module-arrow {
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  button[aria-expanded='true'] .module-arrow {
    transform: rotate(180deg);
  }

  @media (max-width: 690px) {
    .other-projects-section {
      flex-direction: column;
      align-items: stretch;
    }

    .other-projects-expands {
      border-radius: ${({ theme }) => theme.radii.md};
    }
  }
`;

export const ModuleButton = styled.button<{ $active: boolean; $hidden?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 14px 20px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.accentDeep : theme.colors.surface};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.borderStrong : theme.colors.border)};
  color: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.text)};
  font-size: 15px;
  text-align: left;
  transform: ${({ $active }) => ($active ? 'translateY(-2px)' : 'translateY(0)')};
  transition: background-color ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base},
    color ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.base};

  .module-label {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
  }

  .module-sub {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.textMuted)};
  }

  svg {
    height: 18px;
    width: 18px;
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 968px) {
    padding: 12px 16px;
    font-size: 13px;
  }

  @media (max-width: 690px) {
    display: ${({ $hidden }) => ($hidden ? 'none' : 'flex')};
  }
`;

export const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '90vw',
  display: 'flex',
  flexDirection: 'column' as 'column',
  gap: '20px',
  color: mainTheme.colors.text,
  bgcolor: mainTheme.colors.surfaceSolid,
  border: `1px solid ${mainTheme.colors.border}`,
  boxShadow: 24,
  p: '24px',
  borderRadius: mainTheme.radii.lg,
};
