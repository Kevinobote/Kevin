import ProjectCards from '../components/ProjectCards';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-10">
      {/* <Projects /> */}
      <ProjectCards />
    </div>
  );
};

export default ProjectsPage;