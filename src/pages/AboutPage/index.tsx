import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import Header from '../../components/Header';
import StoryFigure from '../../components/StoryFigure';
import { Container } from '../../styles/global';
import { storySteps } from '../../data/story';
import { useStoryProgress } from '../../hooks/useStoryProgress';
import { StyledAboutPage } from './style';

const AboutPage = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const { activeIndex, progress } = useStoryProgress(listRef, '.step');
  const active = storySteps[activeIndex] ?? storySteps[0];

  return (
    <StyledAboutPage>
      <Header />
      <Container>
        <section className='about-intro'>
          <h1>Minha trajetória</h1>
          <p>
            De servidores de jogo na adolescência a um sistema de logística em produção, na
            ordem em que aconteceu.
          </p>
        </section>

        <div className='story'>
          <aside className='story-panel' aria-hidden>
            <div className='panel-card'>
              <span className='panel-period'>{active.period}</span>
              <div className='panel-figures'>
                {storySteps.map((step, index) => (
                  <StoryFigure
                    key={step.id}
                    className={`panel-figure ${index === activeIndex ? 'is-active' : ''}`}
                    figure={step.figure}
                    active={index === activeIndex}
                  />
                ))}
              </div>
              <span className='panel-title'>{active.title}</span>
            </div>
          </aside>

          <div className='story-rail' aria-hidden>
            <span className='rail-track' />
            <span className='rail-fill' style={{ transform: `scaleY(${progress})` }} />
          </div>

          <ol className='story-steps' ref={listRef}>
            {storySteps.map((step, index) => {
              const isActive = index === activeIndex;
              const isReached = index <= activeIndex;
              return (
                <li
                  key={step.id}
                  id={step.id}
                  className='step'
                  data-active={isActive ? 'true' : 'false'}
                  data-reached={isReached ? 'true' : 'false'}
                >
                  <span className='step-dot' aria-hidden />
                  <div className='step-inline-figure'>
                    <span className='inline-period'>{step.period}</span>
                    <StoryFigure figure={step.figure} active={isActive} />
                  </div>
                  <h2>{step.title}</h2>
                  <span className='step-period'>{step.period}</span>
                  {step.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                  {index === storySteps.length - 1 && (
                    <div className='step-actions'>
                      <Link className='action-primary' to='/projetos'>
                        Ver projetos <FiArrowRight aria-hidden />
                      </Link>
                      <Link className='action-secondary' to='/contato'>
                        Falar comigo
                      </Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </StyledAboutPage>
  );
};

export default AboutPage;
