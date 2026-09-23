import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiMail, FiArrowDown } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

import Header from '../../components/Header';
import { Container, SectionTitle } from '../../styles/global';
import homePic from '../../assets/homePic.png';
import TechsLogos from '../../components/TechsLogos';
import CaseStudy from '../../components/CaseStudy';
import { practiceProjects } from '../../data/practice';
import { useReveal } from '../../hooks/useReveal';
import { StyledHomePage } from './style';

const HomePage = () => {
  const location = useLocation();
  const practiceRef = useReveal<HTMLElement>(0.05);
  const techsRef = useReveal<HTMLElement>();

  /**
   * O React Router não rola até a âncora sozinho: quem chega por `/#pratica`
   * (por exemplo, pelo carrossel de projetos) precisa desse empurrão.
   */
  useEffect(() => {
    if (!location.hash) return;
    const target = document.getElementById(location.hash.slice(1));
    target?.scrollIntoView({ block: 'start' });
  }, [location.hash]);

  return (
    <StyledHomePage id='outer-container'>
      <Header />
      <Container>
        <section className='hero'>
          <div className='title-area'>
            <h1>Desenvolvedor Fullstack</h1>
            <p className='backend'>
              Construo produtos completos: API, banco, web e o app na mão de quem usa. Em 2026
              mantenho dois sistemas reais, uma plataforma de operações logísticas em produção
              e um app de tarô com tutora de IA. No front-end, React e TypeScript desde 2023;
              no back-end, Node.js com NestJS, Prisma e PostgreSQL; no mobile, React Native
              com Expo. Tenho inglês avançado, escrito e falado, e espanhol intermediário.
            </p>
            <a className='hero-anchor' href='#pratica'>
              <FiArrowDown aria-hidden />
              Ver o que estou praticando agora
            </a>
            <div className='contacts-icons'>
              <a
                href='mailto:gabrielc.maciel42@gmail.com'
                aria-label='Enviar e-mail para Gabriel Maciel'
              >
                <FiMail />
              </a>
              <a
                href='https://wa.me/5522981167375'
                target={'_blank'}
                rel='noreferrer'
                aria-label='Conversar pelo WhatsApp'
              >
                <FaWhatsapp />
              </a>
              <a
                href='https://www.linkedin.com/in/gabriel-maciel-5600a6246/'
                target={'_blank'}
                rel='noreferrer'
                aria-label='Visitar perfil no LinkedIn'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://github.com/gabriel-aidev'
                target={'_blank'}
                rel='noreferrer'
                aria-label='Visitar perfil no GitHub'
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className='img-area'>
            <img src={homePic} alt='Ilustração de Gabriel Maciel' />
          </div>
        </section>

        <section
          id='pratica'
          className='practice-area'
          ref={practiceRef}
          aria-labelledby='pratica-title'
        >
          <SectionTitle id='pratica-title'>Em prática agora</SectionTitle>
          <p className='practice-intro'>
            Dois produtos reais de 2026, feitos do banco ao app. O código é privado; o que
            aprendi construindo cada um está aqui, com a stack usada de verdade.
          </p>
          <div className='practice-list'>
            {practiceProjects.map((project) => (
              <CaseStudy key={project.id} project={project} />
            ))}
          </div>
        </section>

        <aside ref={techsRef} className='techs-area'>
          <SectionTitle>Tecnologias</SectionTitle>
          <TechsLogos />
        </aside>
      </Container>
    </StyledHomePage>
  );
};

export default HomePage;
