import './ProjectCard.css';

const ProjectCard = ({ title, description, technologies, demoLink, codeLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
        )}
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
