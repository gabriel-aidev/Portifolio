import { useRef, useState } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FiBookOpen, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Slider, Slide, SliderProps } from '../..';
import DateBadge from '../../../DateBadge';
import { FeaturedClip, projectsList } from './projectsList';
import { StyledArticle } from './style';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface ClipProps {
  clip: FeaturedClip;
  muted: boolean;
  onToggle: (video: HTMLVideoElement | null) => void;
}

function Clip({ clip, muted, onToggle }: ClipProps) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div className='clip'>
      <video
        ref={ref}
        src={clip.src}
        poster={clip.poster}
        aria-label={clip.label}
        muted={muted}
        loop
        playsInline
        preload='metadata'
        /* quem pediu movimento reduzido vê o pôster e decide se dá play */
        autoPlay={!prefersReducedMotion}
        controls={prefersReducedMotion}
      />
      <button
        type='button'
        className='clip-sound'
        aria-pressed={!muted}
        aria-label={muted ? 'Ativar som do vídeo' : 'Silenciar vídeo'}
        title={muted ? 'Ativar som' : 'Silenciar'}
        onClick={() => onToggle(ref.current)}
      >
        {muted ? <FiVolumeX aria-hidden /> : <FiVolume2 aria-hidden />}
      </button>
    </div>
  );
}

/**
 * Par de clipes ilustrativos em loop. Nascem mudos porque o navegador não
 * deixa tocar som sem gesto do usuário. O som é um estado do par: ligar num
 * clipe silencia o outro, e o carrossel para de avançar para a pessoa ouvir.
 */
function ProjectClips({ clips }: { clips: FeaturedClip[] }) {
  const [soundOn, setSoundOn] = useState<number | null>(null);

  const toggle = (index: number, video: HTMLVideoElement | null) => {
    const turningOn = soundOn !== index;
    setSoundOn(turningOn ? index : null);
    if (!turningOn || !video) return;

    const swiper = (video.closest('.swiper') as (Element & { swiper?: any }) | null)?.swiper;
    swiper?.autoplay?.stop();
    if (video.paused) void video.play().catch(() => undefined);
  };

  return (
    <div className='project-clips'>
      {clips.map((clip, index) => (
        <Clip
          key={clip.src}
          clip={clip}
          muted={soundOn !== index}
          onToggle={(video) => toggle(index, video)}
        />
      ))}
    </div>
  );
}

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
                <ProjectClips clips={project.clips} />
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
