import { FiMail, FiDownload } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RxEyeOpen } from 'react-icons/rx';

import Header from '../../components/Header';
import { Container, SectionTitle } from '../../styles/global';
import homePic from '../../assets/homePic.png';
import TechsLogos from '../../components/TechsLogos';
import curriculo from '../../assets/Curriculo-Gabriel-Carvalho-Maciel.pdf';
import { useReveal } from '../../hooks/useReveal';
import { StyledHomePage } from './style';

const HomePage = () => {
  const techsRef = useReveal<HTMLElement>();

  return (
    <StyledHomePage id='outer-container'>
      <Header />
      <Container>
        <section>
          <div className='title-area'>
            <h1>Desenvolvedor Fullstack</h1>
            <p className='backend'>
              Desenvolvo projetos web sozinho e em equipe, sempre buscando código limpo e seguindo
              o fluxo ágil do Scrum. No front-end trabalho com React e TypeScript; no back-end,
              com Node.js e Express ou Python e Django, usando bancos SQL e NoSQL conforme o
              projeto pede. Tenho inglês intermediário, escrito e falado, e espanhol básico.
            </p>
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
                href='https://github.com/PONGSU'
                target={'_blank'}
                rel='noreferrer'
                aria-label='Visitar perfil no GitHub'
              >
                <FaGithub />
              </a>
            </div>
            <div className='curriculum-box'>
              <p>Currículo</p>
              <a
                href='https://drive.google.com/file/d/19OysCdcoYy2lTYzbz6gXbwklu4GAuU_k/view?usp=sharing'
                target={'_blank'}
                rel='noreferrer'
                aria-label='Visualizar currículo no Google Drive'
              >
                <RxEyeOpen />
                <span>Visualizar</span>
              </a>
              <a href={curriculo} download aria-label='Baixar currículo em PDF'>
                <FiDownload />
                <span>Baixar PDF</span>
              </a>
            </div>
          </div>
          <div className='img-area'>
            <img src={homePic} alt='Ilustração de Gabriel Maciel' />
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
