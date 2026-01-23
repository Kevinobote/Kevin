import Experience from '../components/Experience';
import ExperienceHero from '../components/ExperienceHero';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-10">
      <ExperienceHero />
      <Experience />
    </div>
  );
};

export default ExperiencePage;