import './Home.css';
import LogoSilver from '../assets/LogoSilver.webp';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Probably Over-Engineering It
          </h1>
          <p className="home-subtitle">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <p className="home-description">
            Hi, I'm Roberto Ghita, also known as Ryu. I love building 
            modern and intuitive web applications with a focus on clean code and visual appeal. 
            My passion lies in crafting great user experiences, and innovative solutions.
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
        <img src={LogoSilver} alt="Logo Silver" className='home-logo' />
      </div>
    </section>
  );
};

export default Home;
