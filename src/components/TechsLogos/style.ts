import styled from 'styled-components';

export const StyledTechsLogos = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
  gap: 16px;

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
