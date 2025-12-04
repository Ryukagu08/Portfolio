import './ProjectCard.css';
import skills from '../data/skills';

const ProjectCard = ({ title, description, technologies, demoLink, codeLink, image }) => {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image-container">
          <img src={image} alt={title} className="project-image" />
        </div>
      )}
      <div className="project-content">
        <div className="project-info-left">
          <h3>{title}</h3>
          <p className="project-description">{description}</p>
        </div>
        <div className="project-info-right">
          <div className="project-technologies">
            {technologies.map((techName, index) => {
              const skill = skills.find(s => s.name === techName);
              return (
                <div key={index} className="tech-tag" title={techName}>
                  {skill && skill.icon ? (
                    <img src={skill.icon} alt={techName} className="tech-icon" />
                  ) : null}
                  <span className="tech-name">{techName}</span>
                </div>
              );
            })}
          </div>
          <div className="project-links">
            {codeLink && (
              <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                View Code
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
