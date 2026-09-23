import styled from 'styled-components';
import { sheenOnHover } from '../../../../styles/motion';

export const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: 28px;
  width: 100%;
  max-width: 1000px;
  min-height: 420px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 20px;
  margin-bottom: 13px;
  transition: box-shadow ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: translateY(-4px);
  }

  video {
    width: 100%;
    aspect-ratio: 16 / 10;
    max-height: 460px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radii.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.bgSoft};
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  &:hover video {
    transform: scale(1.01);
  }

  /* mesma moldura para a capa tipográfica e para os clipes em retrato */
  .project-cover,
  .project-clips {
    width: 100%;
    aspect-ratio: 16 / 10;
    max-height: 460px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.md};
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
  }

  /* capa tipográfica para projetos privados, sem vídeo público */
  .project-cover {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    padding: 28px;
  }

  /* dois clipes 9:16 lado a lado; a largura garante que cabem na moldura 16:10 */
  .project-clips {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 18px;

    .clip {
      position: relative;
      width: min(34%, 240px);
    }

    .clip-sound {
      position: absolute;
      right: 8px;
      bottom: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: ${({ theme }) => theme.radii.pill};
      border: 1px solid ${({ theme }) => theme.colors.border};
      background-color: rgba(9, 12, 10, 0.8);
      color: ${({ theme }) => theme.colors.text};
      transition: border-color ${({ theme }) => theme.transitions.fast},
        color ${({ theme }) => theme.transitions.fast},
        transform ${({ theme }) => theme.transitions.fast};

      svg {
        width: 15px;
        height: 15px;
      }
    }

    .clip-sound:hover {
      border-color: ${({ theme }) => theme.colors.accent};
      transform: translateY(-1px);
    }

    .clip-sound[aria-pressed='true'] {
      border-color: ${({ theme }) => theme.colors.borderStrong};
      background-color: ${({ theme }) => theme.colors.accentDeep};
      color: ${({ theme }) => theme.colors.accent};
    }

    video {
      width: 100%;
      max-height: none;
      aspect-ratio: 9 / 16;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.radii.md};
      border: 1px solid ${({ theme }) => theme.colors.border};
      background-color: ${({ theme }) => theme.colors.bgSoft};
      box-shadow: ${({ theme }) => theme.shadows.card};
    }
  }

  &:hover .project-clips video {
    transform: none;
  }

  .cover-name {
    font-size: clamp(30px, 4vw, 46px);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.colors.text};
  }

  .cover-tagline {
    margin-top: 10px;
    max-width: 30ch;
    font-size: 15px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .cover-words {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    li {
      padding: 4px 10px;
      border-radius: ${({ theme }) => theme.radii.pill};
      border: 1px solid ${({ theme }) => theme.colors.border};
      background-color: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.textMuted};
      font-size: 12px;
      font-weight: 500;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .project-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px 16px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  .project-description {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 15px;
    line-height: 1.6;
    max-height: 260px;
    overflow-y: auto;
    padding-right: 8px;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.radii.pill};
    }
  }

  .project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: auto;
    padding-top: 16px;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 18px;
      border-radius: ${({ theme }) => theme.radii.pill};
      font-size: 14px;
      font-weight: 500;
      transition: transform ${({ theme }) => theme.transitions.fast},
        border-color ${({ theme }) => theme.transitions.fast},
        background-color ${({ theme }) => theme.transitions.fast};
    }

    .deploy-link {
      background-color: ${({ theme }) => theme.colors.accentDeep};
      border: 1px solid ${({ theme }) => theme.colors.borderStrong};
      color: ${({ theme }) => theme.colors.accent};
      ${sheenOnHover}
    }

    .deploy-link:hover {
      transform: translateY(-2px);
      border-color: ${({ theme }) => theme.colors.accent};
    }

    .repo-link {
      background-color: ${({ theme }) => theme.colors.surfaceHover};
      border: 1px solid ${({ theme }) => theme.colors.border};
      color: ${({ theme }) => theme.colors.text};
    }

    .repo-link:hover {
      transform: translateY(-2px);
      border-color: ${({ theme }) => theme.colors.borderStrong};
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: unset;

    video {
      max-height: 340px;
    }

    .project-cover,
    .project-clips {
      max-height: 340px;
    }

    .project-cover {
      padding: 22px;
    }

    .project-clips {
      padding: 14px;
      gap: 12px;
    }

    .project-description {
      max-height: none;
      overflow-y: visible;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;

    h2 {
      font-size: 19px;
    }
  }
`;
