import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * O React Router mantém a posição de rolagem ao trocar de rota. Sem isto,
 * quem clica em "Sobre" no meio da Home chega no meio da página nova.
 * Quando há âncora, a página de destino cuida da rolagem.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
