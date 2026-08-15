import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: rgba(9, 12, 10, 0.72);
  border-bottom: 1px solid ${mainTheme.colors.border};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  .header {
    width: 100%;
    padding: 13px 0;
    display: flex;
    justify-content: space-between;
    height: 85px;

    .logo-box {
      display: flex;
      align-items: center;
      gap: 13px;

      .logo-name {
        font-weight: 700;
        font-size: 23px;
        color: ${mainTheme.colors.text};
        transition: color ${mainTheme.transitions.fast};
      }

      &:hover .logo-name {
        color: ${mainTheme.colors.accent};
      }
    }

    .desktop-menu {
      display: none;
      align-items: center;
      gap: 25px;
      a {
        position: relative;
        color: ${mainTheme.colors.textMuted};
        font-size: 20px;
        font-weight: 400;
        padding-bottom: 4px;
        transition: color ${mainTheme.transitions.fast};

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          background: ${mainTheme.colors.accent};
          transition: width ${mainTheme.transitions.base};
        }

        &:hover {
          color: ${mainTheme.colors.text};
        }

        &:hover::after {
          width: 100%;
        }

        &.active {
          color: ${mainTheme.colors.accent};
        }

        &.active::after {
          width: 100%;
        }
      }
    }

  }

  @media (min-width: 620px) {
    .header {
      .desktop-menu {
        display: flex;
      }
    }
    .bm-burger-button {
      display: none;
    }
  }
  @media (max-width: 350px) {
    .header {
      .logo-box {
        .logo-name {
          font-size: 18px;
        }
      }
    }
  }

  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 25px;
  }

  .bm-burger-bars {
    border-radius: 50px;
    background: ${mainTheme.colors.text};
  }

  .bm-burger-bars-hover {
    background: ${mainTheme.colors.accent};
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: ${mainTheme.colors.text};
  }

  .bm-menu-wrap {
    position: fixed;
    left: -5vw;
    height: 100%;
  }

  .bm-menu {
    background: ${mainTheme.colors.surfaceSolid};
    padding: 2.5em 1.5em 0;
    font-size: 20px;
  }

  .bm-item-list {
    color: ${mainTheme.colors.text};
    padding: 20px;
  }

  .bm-item {
    margin-top: 20px;
    color: ${mainTheme.colors.text};
    padding-left: 50px;
    transition: color ${mainTheme.transitions.fast};

    &:hover {
      color: ${mainTheme.colors.accent};
    }
  }

  .bm-overlay {
    background-color: rgba(9, 12, 10, 0.88) !important;
  }
`;
