import { FaGithub, FaGlobe } from 'react-icons/fa';

import { Slider, Slide, SliderProps } from '../..';
import { projectsList } from './projectsList';
import { StyledArticle } from './style';

export function MainProjectsSlider({}) {
  const settings: SliderProps = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
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
                <h2>{project.name}</h2>
                <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                <span>
                  {project.deploy && (
                    <a href={project.deploy} target='_blank'>
                      <FaGlobe /> Acesse o site
                    </a>
                  )}
                  {project.repository && (
                    <a href={project.repository} target='_blank'>
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
