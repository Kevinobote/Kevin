import AppWrapper from './components/AppWrapper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/main_page';
import AboutPage from './pages/about_page';
import ResearchPage from './pages/research_page';
import ProjectsPage from './pages/projects_page';
import ExperiencePage from './pages/exp_page';
import TeachingPage from './pages/teaching_page';
import VolunteerPage from './pages/volunteer_page';
import ContactPage from './pages/contact_page';

const App = () => {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-slate-900 text-slate-700 dark:text-slate-200">
      <AppWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/teaching" element={<TeachingPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      </AppWrapper>
    </div>
  );
};

export default App;
