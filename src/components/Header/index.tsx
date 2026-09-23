import { Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import { StyledHeader } from './style';
import { Container } from '../../styles/global';
import headerLogo from '../../assets/headerLogo.png';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <StyledHeader>
      <Container>
        <div className='header'>
          <Link to={'/'} className='logo-box' aria-label='Ir para a página inicial'>
            <img src={headerLogo} alt='' />
            <span className='logo-name'>Gabriel Maciel</span>
          </Link>
          <ul className='desktop-menu'>
            <li>
              <Link className={isActive('/') ? 'active' : ''} to={'/'}>
                Início
              </Link>
            </li>
            <li>
              <Link className={isActive('/sobre') ? 'active' : ''} to={'/sobre'}>
                Sobre
              </Link>
            </li>
            <li>
              <Link className={isActive('/projetos') ? 'active' : ''} to={'/projetos'}>
                Projetos
              </Link>
            </li>
            <li>
              <Link className={isActive('/contato') ? 'active' : ''} to={'/contato'}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <Menu id='mobile-menu'>
        <Link className='menu-item' to={'/'}>
          Início
        </Link>
        <Link className='menu-item' to={'/sobre'}>
          Sobre
        </Link>
        <Link className='menu-item' to={'/projetos'}>
          Projetos
        </Link>
        <Link className='menu-item' to={'/contato'}>
          Contato
        </Link>
      </Menu>
    </StyledHeader>
  );
};

export default Header;
