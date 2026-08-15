import { FaGithub, FaGlobe } from 'react-icons/fa';

import { Slider, Slide, SliderProps } from '../..';
import DateBadge from '../../../DateBadge';
import { projectsList } from './projectsList';
import { StyledArticle } from './style';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function MainProjectsSlider() {
  const settings: SliderProps = {
    autoplay: prefersReducedMotion ? false : { delay: 4000, disableOnInteraction: true },
    spaceBetween: 50,
    navigation: true,
    pagination: {
      clickable: true,
    },
    draggable: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
  };

  return (
    <Slider settings={settings}>
      {projectsList.map((project, index) => {
        return (
          <Slide key={index}>
            <StyledArticle>
              <video controls src={project.video} poster={project.thumbnail}></video>
              <aside>
                <div className='project-header'>
                  <h2>{project.name}</h2>
                  <DateBadge date={project.date} />
                </div>
                <p
                  className='project-description'
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <span className='project-links'>
                  {project.deploy && (
                    <a
                      className='deploy-link'
                      href={project.deploy}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FaGlobe /> Acesse o site
                    </a>
                  )}
                  {project.repository && (
                    <a
                      className='repo-link'
                      href={project.repository}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FaGithub /> Ver repositório
                    </a>
                  )}
                </span>
              </aside>
            </StyledArticle>
          </Slide>
        );
      })}
    </Slider>
  );
}
