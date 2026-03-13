import React, { useCallback } from "react";
import "./Header.css";

const NAV_ITEMS = [
  { label: "PROJECTS", target: "projects" },
  { label: "ACADEMIC", target: "EB" },
  { label: "CONTACT", target: "contact" },
];

const ROLES = [
  {
    className: "main-role",
    title: "DATA ENGINEER",
    icons: [
      "fa-brands fa-python",
      "fa-solid fa-database",
      "fa-solid fa-chart-simple",
    ],
  },
  {
    className: "secondary-role",
    title: "BACKEND DEVELOPER",
    icons: ["fa-brands fa-node-js", "fa-solid fa-bolt"],
  },
];

const Header = () => {
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" id="nav-list">
            {NAV_ITEMS.map(({ label, target }) => (
              <li key={target} className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection(target)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="header-content">
        <div className="my-info">
          <div className="my-role">
            <h1>DIOGO OIKE</h1>

            <div className="my-functions">
              {ROLES.map(({ className, title, icons }) => (
                <div key={title} className={className}>
                  <span>{title}</span>
                  <div className="function-icons">
                    {icons.map((icon, index) => (
                      <i key={index} className={icon}></i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-me">
            <p className="about-text">
              Developing smart solutions with{" "}
              <span className="header-styleTech header-stylePY">
                Python
              </span>{" "}
              to solve practical problems.{" "}
              <span className="styleEnph">Data driven</span> tech enthusiast,
              committed to continuous learning and technical growth.{" "}
              <span className="styleStayHard">Stay hard!</span>
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
