import './Header.css';

function Header(){
  return (
    <header className="header">
      <div className="nav-container">
        <nav className="nav">
          <div className="logo">NJ</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;