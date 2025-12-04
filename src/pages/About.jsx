import './About.css';
import skills from '../data/skills';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I've always been passionate about creating from scratch, it's the ultimate way for me to express creativity and solve problems. 
              This drive led me directly to programming, where I can bring ideas to life through code.
            </p>
            <p>
              I love the challenge of building modern, intuitive web applications with a focus on clean code and visual appeal. 
              As a dedicated tech enthusiast, I'm committed to crafting great user experiences.
            </p>
            <p>
              My love for the craft is probably why my motto is "Probably Over-Engineering It" I believe in building things right. When I'm not coding, you can find me exploring new technologies or just enjoying a good cup of coffee.
            </p>
          </div>
          <div className="about-skills">
            <h3>Technologies I Work With</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill.icon && <img src={skill.icon} alt={skill.name} className="skill-icon" />}
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
