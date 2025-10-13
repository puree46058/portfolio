import React from "react";
import PropTypes from "prop-types";
import ThemeToggle from "./ThemeToggle.jsx";

const NavBar = ({ sections, activeSection, onNavigate }) => {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#home" onClick={(event) => onNavigate?.(event, "home")}>
          <img
            src="/asset/icon/web.png"
            alt=""
            width="28"
            height="28"
            style={{ borderRadius: "8px" }}
          />
          Puree Portfolio
        </a>
        <nav aria-label="การนำทางหลัก">
          <ul className="nav__list">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  className={`nav__link ${activeSection === section.id ? "nav__link--active" : ""}`}
                  href={`#${section.id}`}
                  onClick={(event) => onNavigate?.(event, section.id)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

NavBar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeSection: PropTypes.string,
  onNavigate: PropTypes.func,
};

export default NavBar;
