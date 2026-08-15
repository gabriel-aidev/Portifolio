import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { Box, Chip, ClickAwayListener, Modal } from '@mui/material';
import { Link } from 'react-router-dom';

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

import { Container, SectionTitle } from '../../styles/global';
import { mainTheme } from '../../styles/theme';
import { modalStyle, ModuleButton, StyledProjectsPage } from './style';

type OtherProject = {
  description: string;
  page: string;
  repository: string;
  date: string;
  estimated?: boolean;
  modalMsg?: string;
  apiLink?: string;
};

const chipSx = {
  borderColor: mainTheme.colors.border,
  backgroundColor: mainTheme.colors.surface,
  color: mainTheme.colors.textMuted,
  borderRadius: mainTheme.radii.pill,
};

const ProjectsPage = () => {
  const [openM1, setOpenM1] = React.useState(false);
  const [openM2, setOpenM2] = React.useState(false);
  const [openM3, setOpenM3] = React.useState(false);
  const [modalOpened, setModalOpened] = React.useState<number | null>(null);
  const [modalList, setModalList] = React.useState<OtherProject[]>([]);

  const anyOpen = openM1 || openM2 || openM3;

  const closeAll = () => {
    setOpenM1(false);
    setOpenM2(false);
    setOpenM3(false);
  };

  const toggleM1 = () => {
    setOpenM1((prev) => !prev);
    setOpenM2(false);
    setOpenM3(false);
  };

  const toggleM2 = () => {
    setOpenM2((prev) => !prev);
    setOpenM1(false);
    setOpenM3(false);
  };

  const toggleM3 = () => {
    setOpenM3((prev) => !prev);
    setOpenM1(false);
    setOpenM2(false);
  };

  /**
   * O modal do MUI é renderizado em portal, fora desta região: sem esta guarda,
   * fechar o modal pelo backdrop contaria como clique fora e fecharia o acordeão.
   */
  const handleClickAway = () => {
    if (modalOpened !== null) return;
    closeAll();
  };

  const otherProjectsExpand = (techsList: string[], projectsList: OtherProject[]) => {
    const openModal = (index: number) => {
      if (!projectsList[index]?.modalMsg) return;
      setModalList(projectsList);
      setModalOpened(index);
    };

    return (
      <div className='other-projects-expands'>
        <span className='skills-chips'>
          {techsList.map((tech) => (
            <Chip key={tech} label={tech} variant='outlined' size='small' sx={chipSx} />
          ))}
        </span>
        <OtherProjectsSlider openModal={openModal} projectsList={projectsList} />
      </div>
    );
  };

  return (
    <StyledProjectsPage>
      <Header />
      <Container className='projects-container'>
        <SectionTitle as='h1'>Projetos em destaque</SectionTitle>
        <MainProjectsSlider />
        <SectionTitle>Outros Projetos</SectionTitle>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className='other-projects-region'>
            <ul className='other-projects-section'>
              <li>
                <ModuleButton
                  type='button'
                  $active={openM1}
                  $hidden={anyOpen && !openM1}
                  aria-expanded={openM1}
                  onClick={toggleM1}
                >
                  <span className='module-label'>
                    <h3>Introdução ao Front End</h3>
                    <span className='module-sub'>HTML, CSS, JS</span>
                  </span>
                  {openM1 ? (
                    <SlArrowUp className='arrowUp' />
                  ) : (
                    <SlArrowDown className='arrowDown' />
                  )}
                </ModuleButton>
              </li>
              <li>
                <ModuleButton
                  type='button'
                  $active={openM2}
                  $hidden={anyOpen && !openM2}
                  aria-expanded={openM2}
                  onClick={toggleM2}
                >
                  <span className='module-label'>
                    <h3>Aprofundando em JS, CSS</h3>
                    <span className='module-sub'>Consumindo APIs</span>
                  </span>
                  {openM2 ? (
                    <SlArrowUp className='arrowUp' />
                  ) : (
                    <SlArrowDown className='arrowDown' />
                  )}
                </ModuleButton>
              </li>
              <li>
                <ModuleButton
                  type='button'
                  $active={openM3}
                  $hidden={anyOpen && !openM3}
                  aria-expanded={openM3}
                  onClick={toggleM3}
                >
                  <span className='module-label'>
                    <h3>React, TypeScript</h3>
                    <span className='module-sub'>Estrutura de projetos</span>
                  </span>
                  {openM3 ? (
                    <SlArrowUp className='arrowUp' />
                  ) : (
                    <SlArrowDown className='arrowDown' />
                  )}
                </ModuleButton>
              </li>
            </ul>
            {openM1 && otherProjectsExpand(m1Techs, m1Projects)}
            {openM2 && otherProjectsExpand(m2Techs, m2Projects)}
            {openM3 && otherProjectsExpand(m3Techs, m3Projects)}
          </div>
        </ClickAwayListener>

        <div className='github-callout'>
          <Link to='https://github.com/PONGSU' target='_blank' rel='noreferrer'>
            <FaGithub /> Clique aqui para acessar todos meus projetos públicos no GitHub
          </Link>
        </div>

        <SectionTitle>Certificados</SectionTitle>
        <div className='certificate-box'>
          <div className='certificate-frame'>
            <iframe
              src='https://drive.google.com/file/d/1MzUV1dLgUsdeqW532pguxiyt37GVF7ow/preview'
              title='Certificado de conclusão 1'
              allow='autoplay'
              loading='lazy'
            ></iframe>
          </div>
        </div>
        <div className='certificate-box'>
          <div className='certificate-frame'>
            <iframe
              src='https://drive.google.com/file/d/1xC0lm6k7Hr9fEuEZdxm4v2S8Smb7fo5G/preview'
              title='Certificado de conclusão 2'
              allow='autoplay'
              loading='lazy'
            ></iframe>
          </div>
        </div>

        <Modal
          open={modalOpened !== null}
          onClose={() => setModalOpened(null)}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={modalStyle}>
            {modalOpened !== null && (
              <>
                <p>{modalList[modalOpened]?.modalMsg}</p>
                {modalList[modalOpened]?.apiLink && (
                  <a
                    style={{
                      color: mainTheme.colors.accent,
                      textDecoration: 'underline',
                      textUnderlineOffset: '7px',
                    }}
                    href={modalList[modalOpened].apiLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Abrir repositório da API
                  </a>
                )}
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </StyledProjectsPage>
  );
};

export default ProjectsPage;
