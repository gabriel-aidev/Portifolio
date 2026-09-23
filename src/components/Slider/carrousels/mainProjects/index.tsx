import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
              {project.clips ? (
                <div className='project-clips'>
                  {project.clips.map((clip) => (
                    <video
                      key={clip.src}
                      src={clip.src}
                      poster={clip.poster}
                      aria-label={clip.label}
                      muted
                      loop
                      playsInline
                      preload='metadata'
                      /* quem pediu movimento reduzido vê o pôster e decide se dá play */
                      autoPlay={!prefersReducedMotion}
                      controls={prefersReducedMotion}
                    />
                  ))}
                </div>
              ) : project.video ? (
                <video controls src={project.video} poster={project.thumbnail}></video>
              ) : (
                <div className='project-cover' aria-hidden>
                  <div>
                    <p className='cover-name'>{project.name}</p>
                    {project.cover?.tagline && (
                      <p className='cover-tagline'>{project.cover.tagline}</p>
                    )}
                  </div>
                  {project.cover?.words && (
                    <ul className='cover-words'>
                      {project.cover.words.map((word) => (
                        <li key={word}>{word}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              <aside>
                <div className='project-header'>
                  <h2>{project.name}</h2>
                  <DateBadge date={project.date} since={project.since} />
                </div>
                <p
                  className='project-description'
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <span className='project-links'>
                  {project.learnMore && (
                    <Link className='deploy-link' to={project.learnMore}>
                      <FiBookOpen /> Ver o que pratiquei
                    </Link>
                  )}
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
