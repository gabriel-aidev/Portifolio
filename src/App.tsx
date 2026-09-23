import { ThemeProvider } from 'styled-components';

import Router from './routes/routes';
import ScrollToTop from './components/ScrollToTop';
import { GlobalStyle } from './styles/global';
import { mainTheme } from './styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
