import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>My Portfolio</h2>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
