import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ThemeToggle from "./ThemeToggle.jsx";

const NavBar = ({ sections, activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (event, sectionId) => {
    onNavigate?.(event, sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const closeMenuOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 720) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeMenuOnEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", closeMenuOnEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`nav ${isMenuOpen ? "nav--menu-open" : ""}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#home" onClick={(event) => handleNavigate(event, "home")}>
          <img
            src="/asset/icon/web.png"
            alt=""
            width="28"
            height="28"
            style={{ borderRadius: "8px" }}
          />
          Puree Portfolio
        </a>
        <button
          type="button"
          className={`mobile-menu-button ${isMenuOpen ? "mobile-menu-button--open" : ""}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="mobile-menu-button__icon" aria-hidden="true" />
          <span className="sr-only">{isMenuOpen ? "ซ่อนเมนูนำทาง" : "แสดงเมนูนำทาง"}</span>
        </button>
        <nav aria-label="การนำทางหลัก">
          <ul
            id="primary-navigation"
            className={`nav__list ${isMenuOpen ? "nav__list--open" : ""}`}
            data-open={isMenuOpen}
          >
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  className={`nav__link ${activeSection === section.id ? "" : ""}`}
                  href={`#${section.id}`}
                  onClick={(event) => handleNavigate(event, section.id)}
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
