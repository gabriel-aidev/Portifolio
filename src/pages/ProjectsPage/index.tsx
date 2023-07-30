import React from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { Box, Chip, ClickAwayListener, Modal } from '@mui/material';

import Header from '../../components/Header';
import { MainProjectsSlider } from '../../components/Slider/carrousels/mainProjects';
import { OtherProjectsSlider } from '../../components/Slider/carrousels/OtherProjects';

import {
  m1Projects,
  m1Techs,
} from '../../components/Slider/carrousels/OtherProjects/otherProjectsLists/m1List';
import {
  m2Projects,
  m2Techs,
} from '../../components/Slider/carrousels/OtherProjects/otherProjectsLists/m2List';
import {
  m3Projects,
  m3Techs,
} from '../../components/Slider/carrousels/OtherProjects/otherProjectsLists/m3List';

import { Container } from '../../styles/global';
import { modalStyle, StyledProjectsPage } from './style';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const [openM1, setOpenM1] = React.useState(false);
  const [openM2, setOpenM2] = React.useState(false);
  const [openM3, setOpenM3] = React.useState(false);
  const [modalOpened, setModalOpened] = React.useState<number>(0);

  const openModal = (index: number) => {
    setModalOpened(index);
  };

  const closeAll = () => {
    setTimeout(() => {
      setOpenM1(false);
      setOpenM2(false);
      setOpenM3(false);
    }, 150);
  };

  const toggleM1 = () => {
    setTimeout(() => {
      setOpenM1(!openM1);
      setOpenM2(false);
      setOpenM3(false);
    }, 250);
  };

  const toggleM2 = () => {
    setTimeout(() => {
      setOpenM2(!openM2);
      setOpenM1(false);
      setOpenM3(false);
    }, 250);
  };

  const toggleM3 = () => {
    setTimeout(() => {
      setOpenM3(!openM3);
      setOpenM1(false);
      setOpenM2(false);
    }, 250);
  };

  const otherProjectsExpand = (
    techsList: string[],
    projectsList: { description: string; page: string; repository: string; modalMsg?: string }[]
  ) => {
    return (
      <ClickAwayListener onClickAway={() => closeAll()}>
        <div className='other-projects-expands'>
          <span className='skills-chips'>
            {techsList.map((tech) => (
              <Chip key={tech} label={tech} variant='outlined' color='success' size='small' />
            ))}
          </span>
          <OtherProjectsSlider openModal={openModal} projectsList={projectsList} />
          <Modal
            open={modalOpened !== 0}
            onClose={() => setModalOpened(0)}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={modalStyle}>
              <p>{m2Projects[modalOpened].modalMsg}</p>
              {m2Projects[modalOpened].apiLink && (
                <a
                  style={{
                    color: '#538D22',
                    textDecoration: 'underline',
                    textUnderlineOffset: '7px',
                  }}
                  href={m2Projects[modalOpened].apiLink}
                  target='_blank'
                >
                  Abrir repositório da API
                </a>
              )}
            </Box>
          </Modal>
        </div>
      </ClickAwayListener>
    );
  };

  return (
    <StyledProjectsPage>
      <Header />
      <Container style={{ paddingTop: 85 }}>
        <MainProjectsSlider />
        <h2 className='other-projects-title'>Outros Projetos</h2>
        <ul className='other-projects-section'>
          <li
            className={
              'selected-' +
              openM1.toString() +
              ' mobile-' +
              openM1.toString() +
              openM2.toString() +
              openM3.toString()
            }
            onClick={() => toggleM1()}
          >
            <span>
              <h3>Introdução ao Front End</h3>
              <h3>HTML, CSS, JS</h3>
            </span>
            {openM1 ? <SlArrowUp className='arrowUp' /> : <SlArrowDown className='arrowDown' />}
          </li>
          <li
            className={
              'selected-' +
              openM2.toString() +
              ' mobile-' +
              openM2.toString() +
              openM1.toString() +
              openM3.toString()
            }
            onClick={() => toggleM2()}
          >
            <span>
              <h3>Aprofundando em JS, CSS</h3>
              <h3> Consumindo APIs</h3>
            </span>
            {openM2 ? <SlArrowUp className='arrowUp' /> : <SlArrowDown className='arrowDown' />}
          </li>
          <li
            className={
              'selected-' +
              openM3.toString() +
              ' mobile-' +
              openM3.toString() +
              openM1.toString() +
              openM2.toString()
            }
            onClick={() => toggleM3()}
          >
            <span>
              <h3>React, TypeScript</h3>
              <h3>Estrutura de projetos</h3>
            </span>
            {openM3 ? <SlArrowUp className='arrowUp' /> : <SlArrowDown className='arrowDown' />}
          </li>
        </ul>
        {openM1 && otherProjectsExpand(m1Techs, m1Projects)}
        {openM2 && otherProjectsExpand(m2Techs, m2Projects)}
        {openM3 && otherProjectsExpand(m3Techs, m3Projects)}
        <h2 className='other-projects-title'>
          <Link style={{ fontSize: 20 }} target='blank' to='https://github.com/PONGSU'>
            Clique aqui para acessar todos meus projetos públicos no GitHub
          </Link>
        </h2>
        <h2 className='other-projects-title'>Certificados</h2>
        <div className='certificate-box'>
          <iframe
            style={{ border: 'none' }}
            src='https://drive.google.com/file/d/1MzUV1dLgUsdeqW532pguxiyt37GVF7ow/preview'
            width='940'
            height='585'
            allow='autoplay'
          ></iframe>
        </div>
        <div className='certificate-box'>
          <iframe
            style={{ border: 'none' }}
            src='https://drive.google.com/file/d/1xC0lm6k7Hr9fEuEZdxm4v2S8Smb7fo5G/preview'
            width='940'
            height='585'
            allow='autoplay'
          ></iframe>
        </div>
      </Container>
    </StyledProjectsPage>
  );
};

export default ProjectsPage;
