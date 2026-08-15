import styled from 'styled-components';

export const StyledHomePage = styled.main`
  display: flex;
  flex-direction: column;

  .title-area {
    display: flex;
    flex-direction: column;
    max-width: 620px;

    h1 {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 700;
      font-size: clamp(32px, 5vw, 56px);
      line-height: 1.15;
      letter-spacing: -0.02em;
    }

    @supports (background-clip: text) or (-webkit-background-clip: text) {
      h1 {
        background: ${({ theme }) => theme.gradients.heading};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
      }
    }

    .backend {
      margin-top: 22px;
      text-align: left;
      color: ${({ theme }) => theme.colors.textMuted};
      font-size: 17px;
      line-height: 1.7;
      max-width: 65ch;
    }
  }

  section {
    margin-top: 85px;
    padding-top: 50px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .img-area {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 13px 13px 13px;
    width: 50%;
    min-height: 50vh;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 320px;
      height: 320px;
      max-width: 80%;
      background: radial-gradient(circle, ${({ theme }) => theme.colors.accentGlow} 0%, transparent 70%);
      filter: blur(40px);
      z-index: 0;
    }

    img {
      position: relative;
      z-index: 1;
      max-height: 250px;
      animation: imgMove 4s ease-in-out infinite;
    }
  }

  .contacts-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 14px;
    margin-top: 28px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: ${({ theme }) => theme.radii.pill};
      background-color: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      transition: border-color ${({ theme }) => theme.transitions.base},
        background-color ${({ theme }) => theme.transitions.base},
        box-shadow ${({ theme }) => theme.transitions.base},
        transform ${({ theme }) => theme.transitions.fast};

      svg {
        color: ${({ theme }) => theme.colors.text};
        height: 19px;
        width: 19px;
        transition: color ${({ theme }) => theme.transitions.fast};
      }

      &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        background-color: ${({ theme }) => theme.colors.surfaceHover};
        box-shadow: ${({ theme }) => theme.shadows.glow};
        transform: translateY(-2px);

        svg {
          color: ${({ theme }) => theme.colors.accent};
        }
      }
    }
  }

  .curriculum-box {
    margin-top: 18px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    width: fit-content;
    max-width: 100%;
    padding: 10px 16px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};

    p {
      font-weight: 600;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.text};
    }

    a {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.textMuted};
      border-radius: ${({ theme }) => theme.radii.sm};
      padding: 5px 9px;
      transition: color ${({ theme }) => theme.transitions.fast},
        background-color ${({ theme }) => theme.transitions.fast};

      svg {
        height: 16px;
        width: 16px;
      }
    }

    a:hover {
      color: ${({ theme }) => theme.colors.accent};
      background-color: ${({ theme }) => theme.colors.surfaceHover};
    }
  }

  @keyframes imgMove {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-14px);
    }
    100% {
      transform: translateY(0);
    }
  }

  aside {
    margin-bottom: 60px;

    h2 {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 800px) {
    .title-area {
      h1 {
        font-size: clamp(28px, 6vw, 40px);
      }
    }
  }

  @media (max-width: 700px) {
    section {
      padding-top: 80px;
      flex-direction: column;
    }

    .title-area {
      max-width: 100%;
    }

    .img-area {
      width: 100%;
      margin-top: 20px;
      min-height: min-content;
      padding: 30px;

      img {
        width: min(70%, 240px);
        max-height: none;
      }
    }
  }

  @media (max-width: 450px) {
    .title-area {
      .backend {
        font-size: 15px;
      }
    }
  }
`;
