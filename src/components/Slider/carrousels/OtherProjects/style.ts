import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  width: 270px;
  max-width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 14px;
  margin-bottom: 20px;
  transition: transform ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  .spacer {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
  }

  .other-project-text {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.5;
    flex: 1;
  }

  .other-project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: auto;
  }

  .other-project-links a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: ${({ theme }) => theme.radii.pill};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    transition: border-color ${({ theme }) => theme.transitions.fast},
      color ${({ theme }) => theme.transitions.fast};
  }

  .other-project-links a:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }

  .api-modal-link {
    display: block;
    margin-top: 8px;
    padding: 0;
    background: none;
    border: none;
    font: inherit;
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
    text-underline-offset: 3px;
    cursor: pointer;
    text-align: left;
  }

  .api-modal-link:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;
