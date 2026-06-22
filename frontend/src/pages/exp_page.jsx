import Experience from '../components/Experience';
import ExperienceHero from '../components/ExperienceHero';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-slate-900 text-slate-700 dark:text-slate-200">
      <ExperienceHero />
      <Experience />
    </div>
  );
};

export default ExperiencePage;
