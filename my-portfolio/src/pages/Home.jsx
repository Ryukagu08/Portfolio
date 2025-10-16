import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <p className="home-subtitle">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <p className="home-description">
            I build modern web applications with a focus on clean code, 
            great user experiences, and innovative solutions.
          </p>
          <div className="home-cta">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="cta-button primary"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="cta-button secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
