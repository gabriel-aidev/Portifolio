import styled, { createGlobalStyle } from 'styled-components';
import { mainTheme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar{
    width: 10px;
    background-color: ${mainTheme.colors.bg};
  }

  ::-webkit-scrollbar-thumb{
    background-color: rgba(61, 220, 90, 0.22);
    border-radius: ${mainTheme.radii.pill};
    border: 2px solid ${mainTheme.colors.bg};
  }

  ::-webkit-scrollbar-thumb:hover{
    background-color: rgba(61, 220, 90, 0.42);
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: ${mainTheme.fonts.primary};
  }

  html{
    scroll-behavior: smooth;
    scrollbar-color: rgba(61, 220, 90, 0.28) ${mainTheme.colors.bg};
  }

  body{
    background-color: ${mainTheme.colors.bg};
    color: ${mainTheme.colors.text};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    min-height: 100vh;
    background-image:
      radial-gradient(60rem 40rem at 12% -10%, rgba(61, 220, 90, 0.10), transparent 60%),
      radial-gradient(45rem 35rem at 105% 8%, rgba(65, 93, 67, 0.22), transparent 62%),
      radial-gradient(50rem 40rem at 50% 110%, rgba(61, 220, 90, 0.06), transparent 65%);
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  /* elementos de interface não devem ser selecionáveis; texto de conteúdo sim */
  nav, header, button, .swiper-button-prev, .swiper-button-next, .swiper-pagination{
    user-select: none;
  }

  ::selection{
    background-color: rgba(61, 220, 90, 0.28);
    color: ${mainTheme.colors.white};
  }

  a{
    color: inherit;
    transition: color ${mainTheme.transitions.fast};
  }

  :focus-visible{
    outline: 2px solid ${mainTheme.colors.accent};
    outline-offset: 3px;
    border-radius: ${mainTheme.radii.sm};
  }

  img{
    max-width: 100%;
    max-height: 100%;
  }

  button{
    cursor: pointer;
    border: none;
    font: inherit;
    color: inherit;
    background: none;
  }

  dialog{
    display: unset;
    position: unset;
  }

  @media (prefers-reduced-motion: reduce){
    html{
      scroll-behavior: auto;
    }

    *, *::before, *::after{
      animation-duration: 0.01ms !important;
      /* sem zerar o atraso, um elemento em cascata ficaria invisível durante ele */
      animation-delay: 0ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      transition-delay: 0ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const Container = styled.div`
  max-width: 90vw;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 800px) {
    max-width: 85vw;
  }

  @media (min-width: 1500px) {
    max-width: 1320px;
  }
`;

/** Título de seção com fio de destaque — reaproveitado nas páginas. */
export const SectionTitle = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.gradients.hairline};
  }
`;
