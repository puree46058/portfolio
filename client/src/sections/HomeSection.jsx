import React from "react";
import PropTypes from "prop-types";

const HomeSection = ({ hero, meta }) => {
  return (
    <section id="home" className="section hero">
      <div className="section__inner hero">
        <div>
         
          <h1 className="hero__headline">
            <span style={{ color: "var(--accent)" }}>{hero.name}</span>
          </h1>
          <h2 style={{ marginTop: "0", color: "var(--text-secondary)", fontWeight: 500 }}>
            {hero.title}
          </h2>
          <p className="hero__tagline">{hero.tagline}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
            </a>
         
          </div>
          <div className="chip-row" aria-label="สรุปความเชี่ยวชาญ">
            {hero.quickFacts.map((fact) => (
              <span className="chip" key={fact}>
                {fact}
              </span>
            ))}
          </div>
        </div>
        <div className="hero__media" role="presentation">
          <img src={hero.profileImage} alt={`ภาพของ ${hero.name}`} />
        </div>
      </div>
      <div className="section__inner grid-highlight" style={{ marginTop: "48px" }}>
        <div className="badge">
          <img src="/asset/icon/git.png" alt="" />
          เปิดรับโอกาสใหม่
        </div>
        <p style={{ marginBlock: "16px", color: "var(--text-secondary)" }}>{meta.description}</p>
        <div className="stacked-list">
          <div className="stacked-list__item">
            <strong>อีเมล</strong>
            <div>{meta.email}</div>
          </div>
          <div className="stacked-list__item">
            <strong>ที่ตั้ง</strong>
            <div>{meta.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

HomeSection.propTypes = {
  hero: PropTypes.shape({
    greeting: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    ctaPrimary: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,

    quickFacts: PropTypes.arrayOf(PropTypes.string).isRequired,
    profileImage: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    description: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeSection;
