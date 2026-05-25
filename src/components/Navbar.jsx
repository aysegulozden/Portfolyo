function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="logo">
        Ayşegül Özden
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">Hakkımda</a>
        </li>
        <li>
          <a href="#projects">Projeler</a>
        </li>
        <li>
          <a href="#contact">İletişim</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
