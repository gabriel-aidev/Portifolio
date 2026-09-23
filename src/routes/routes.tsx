import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/sobre' element={<AboutPage />} />
      <Route path='/projetos' element={<ProjectsPage />} />
      <Route path='/contato' element={<ContactPage />} />
      <Route path='/*' element={<HomePage />} />
    </Routes>
  );
};

export default Router;
