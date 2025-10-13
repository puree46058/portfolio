import React from "react";
import PropTypes from "prop-types";

const AboutSection = ({ about }) => {
  return (
    <section id="about" className="section">
      <div className="section__inner about">
        <div className="about__image">
          <img src={about.profileImage} alt="Puree Vongpunya profile" loading="lazy" />
        </div>
        <article className="about__content">
          <h2 className="section__title">{about.heading}</h2>
          <p className="section__subtitle">{about.subheading}</p>
          {about.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="stacked-list" aria-label="ข้อมูลเพิ่มเติม">
            {about.details.map((item) => (
              <li className="stacked-list__item" key={item.label}>
                <strong>{item.label}</strong>
                <div>{item.value}</div>
              </li>
            ))}
          </ul>
          <div className="chip-row" role="list">
            {about.highlights.map((highlight) => (
              <span key={highlight} className="chip" role="listitem">
                {highlight}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  about: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ).isRequired,
    profileImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutSection;
