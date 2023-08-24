import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { RxEyeOpen } from 'react-icons/rx';

import Header from '../../components/Header';
import { Container } from '../../styles/global';
import homePic from '../../assets/homePic.png';
import TechsLogos from '../../components/TechsLogos';
import curriculo from '../../assets/Curriculo-Gabriel-Carvalho-Maciel.pdf';
import { StyledHomePage } from './style';

const HomePage = () => {
  return (
    <StyledHomePage id='outer-container'>
      <Header />
      <Container>
        <section>
          <div className='title-area'>
            <h1>Desenvolvedor Fullstack</h1>
            <span className='sub-title-area'>
              <h2 className='backend'>
                {' '}
                Experiência em projetos individuais e em equipe com tecnologias como HTML, CSS,
                Javascript, React, Styled Components, Typescript, Node.js, Git, Git Flow, express,
                python, django typeOrm, noSQL, postgress, utilizando sempre boas práticas de código
                e metodologias ágeis como Scrum. Possuo conhecimento intermediário de inglês
                envolvendo escrita e conversação, e básico em espanhol.
              </h2>
              {/* <span className='anim-box'>
                <h2 className='anim'>em formação /&gt;</h2>
              </span> */}
            </span>
            <div className='contacts-icons'>
              <a href='mailto:gabrielc.maciel42@gmail.com' target={'_blank'}>
                <FiMail />
              </a>
              <a href='https://wa.me/5522981167375' target={'_blank'}>
                <FaWhatsapp />
              </a>
              <a href='https://www.linkedin.com/in/gabriel-maciel-5600a6246/' target={'_blank'}>
                <FaLinkedin />
              </a>
              <a href='https://github.com/PONGSU' target={'_blank'}>
                <FaGithub />
              </a>
            </div>
          </div>
          <div className='img-area'>
            <img src={homePic} alt='' />
          </div>
          <div className='curriculum-box'>
            <p>Currículo</p>
            <a
              href='https://drive.google.com/file/d/19OysCdcoYy2lTYzbz6gXbwklu4GAuU_k/view?usp=sharing'
              target={'_blank'}
            >
              <RxEyeOpen />
            </a>
            <a href={curriculo} download>
              <FiDownload />
            </a>
          </div>
        </section>
        <aside>
          <TechsLogos />
        </aside>
      </Container>
    </StyledHomePage>
  );
};

export default HomePage;
