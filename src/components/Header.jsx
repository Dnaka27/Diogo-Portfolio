import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header" id="menu">
      <nav className="navbar navbar-expand-lg navbar-dark" id="nav-style">
        <button
          id="nav-toggler"
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" id="nav-list">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("projects")}
              >
                PROJECTS
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("EB")}
              >
                ACADEMIC
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("skills")}
              >
                SKILLS
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="header-content">
        <div className="my-info">
          <div className="my-role">
            <h1>DIOGO OIKE</h1>
            <div className="my-functions">
              <div className="main-role">
                <span>DATA ENGINEER</span>{" "}
                <div className="function-icons">
                  <i className="fa-brands fa-python"></i>
                  <i className="fa-solid fa-database"></i>
                  <i className="fa-solid fa-chart-simple"></i>
                </div>
              </div>
              <div className="secondary-role">
                <span>BACKEND DEVELOPER</span>{" "}
                <div className="function-icons">
                  <i className="fa-brands fa-node-js"></i>
                  <i className="fa-solid fa-bolt"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="about-me">
            <p className="about-text">
              Developing smart solutions with{" "}
              <span className="header-styleTech header-stylePY">Python</span>,{" "}
              <span className="header-styleTech header-styleJV">Java</span>, and{" "}
              <span className="header-styleTech header-styleJS">
                JavaScript
              </span>
              . Tech enthusiast, always learning and{" "}
              <span className="styleEnph">evolving</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="rotating-square"></div>

      <button
        className="fixed-button"
        onClick={() => scrollToSection("menu")}
        title="Back to menu"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </header>
  );
};

export default Header;
