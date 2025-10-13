import React from "react";
import PropTypes from "prop-types";

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className="section">
      <div className="section__inner">
        <h2 className="section__title">{skills.heading}</h2>
        <p className="section__subtitle">{skills.subheading}</p>
        <div className="stacked-list" style={{ gap: "32px" }}>
          {skills.categories.map((category) => (
            <div key={category.title}>
              <h3 style={{ marginBottom: "20px" }}>{category.title}</h3>
              <div className="skills-grid">
                {category.items.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <img src={skill.icon} alt={`${skill.name} icon`} loading="lazy" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

SkillsSection.propTypes = {
  skills: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
          }),
        ).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default SkillsSection;
