import { FaGithub, FaGlobe } from 'react-icons/fa';

import { Slider, Slide, SliderProps } from '../..';
import DateBadge from '../../../DateBadge';
import { StyledCard } from './style';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const OtherProjectsSlider = ({
  projectsList,
  openModal,
}: {
  projectsList: {
    description: string;
    page: string;
    repository: string;
    date: string;
    estimated?: boolean;
    modalMsg?: string;
    apiLink?: string;
  }[];
  openModal: (index: number) => void;
}) => {
  const settings: SliderProps = {
    autoplay: prefersReducedMotion ? false : { delay: 4000, disableOnInteraction: true },
    spaceBetween: 45,
    navigation: true,
    pagination: {
      clickable: false,
    },
    draggable: true,
    loop: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      570: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      930: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  };

  return (
    <Slider settings={settings}>
      {projectsList.map((project, index) => {
        return (
          <Slide key={index}>
            <StyledCard>
              <DateBadge date={project.date} estimated={project.estimated} compact />
              <p className='other-project-text'>
                {project.description}
                {project.modalMsg && (
                  <button type='button' className='api-modal-link' onClick={() => openModal(index)}>
                    É preciso rodar a API localmente
                  </button>
                )}
              </p>
              <span className='spacer'></span>
              <span className='other-project-links'>
                {project.page && (
                  <a href={project.page} target='_blank' rel='noreferrer'>
                    <FaGlobe /> Site
                  </a>
                )}
                <a href={project.repository} target='_blank' rel='noreferrer'>
                  <FaGithub /> Repositório
                </a>
              </span>
            </StyledCard>
          </Slide>
        );
      })}
    </Slider>
  );
};
