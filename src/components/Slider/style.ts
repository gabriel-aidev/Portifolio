import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledSlider = styled(Swiper)`
  @media only screen and (max-width: 470px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }

    &.swiper {
      padding-bottom: 32px;
      padding-top: 32px;
    }
  }

  @media only screen and (min-width: 400px) {
    &.swiper {
      padding: 32px;
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    height: auto;
  }

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background-color: ${({ theme }) => theme.colors.textFaint};
    opacity: 0.5;
    border-radius: ${({ theme }) => theme.radii.pill};
    transform-origin: center;
    transition: opacity ${({ theme }) => theme.transitions.fast},
      background-color ${({ theme }) => theme.transitions.fast},
      transform ${({ theme }) => theme.transitions.base};
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scaleX(2.86);
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: ${({ theme }) => theme.colors.text};
    transition: border-color ${({ theme }) => theme.transitions.fast},
      color ${({ theme }) => theme.transitions.fast},
      background-color ${({ theme }) => theme.transitions.fast},
      transform ${({ theme }) => theme.transitions.fast};

    &::after {
      font-size: 16px;
    }
  }

  .swiper-button-prev {
    left: -1px;
  }

  .swiper-button-next {
    right: 1px;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.surfaceHover};
    transform: scale(1.08);
  }

  .swiper-button-disabled {
    opacity: 0.35;
  }

  .swiper-notification {
    display: none;
  }
`;

export default StyledSlider;
