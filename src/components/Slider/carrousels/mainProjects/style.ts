import styled from 'styled-components';

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
    border-color ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  video {
    width: 100%;
    aspect-ratio: 16 / 10;
    max-height: 460px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radii.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.bgSoft};
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
