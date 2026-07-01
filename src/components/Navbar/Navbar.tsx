import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          David<span>.</span>
        </a>

        <nav>
          <ul className="navbar__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;