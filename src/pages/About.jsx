import './About.css';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'HTML/CSS', 'Node.js', 
    'Git', 'Responsive Design', 'REST APIs', 'Vite'
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate web developer who loves creating beautiful and 
              functional websites. I started my journey in web development because I 
              enjoy solving problems and bringing ideas to life through code.
            </p>
            <p>
              I specialize in building modern, responsive web applications using the 
              latest technologies. I'm always learning and staying up-to-date with 
              industry trends to deliver the best possible solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>
          <div className="about-skills">
            <h3>Technologies I Work With</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
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
