import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects = () => {

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
