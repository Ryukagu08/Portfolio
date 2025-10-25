import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'Spectre Memorial Site',
      description: 'A fan made memorial site built to honor Spectre Divide, featuring game info, and media galleries and more.',
      technologies: ['HTML', 'JavaScript', 'Python'],
      demoLink: 'https://spectre-memorial.vercel.app/',
      codeLink: 'https://github.com/Ryukagu08/SpectreMemorial-Site'
    },
    {
      title: 'PCsCalatayud Project',
      description: 'A custom PC building service project built and designed for a school assignment.',
      technologies: ['React', 'Firebase', 'JavaScript','Vite'],
      demoLink: 'https://pcs-calatayud.vercel.app',
    },
    {
      title: 'This Portfolio',
      description: 'My personal portfolio website showcasing my projects, skills, and contact information.',
      technologies: ['React', 'JavaScript', 'Vite'],
      demoLink: 'https://ryukagu.vercel.app/',
      codeLink: 'https://github.com/Ryukagu08/Portfolio'
    }
  ];

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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
