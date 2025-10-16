import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart functionality, product filtering, and secure checkout process.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application that displays current conditions and forecasts using external API integration.',
      technologies: ['React', 'API', 'CSS', 'JavaScript'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task tracker with drag-and-drop functionality, user authentication, and real-time updates.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Context API'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/yourusername/project3'
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
