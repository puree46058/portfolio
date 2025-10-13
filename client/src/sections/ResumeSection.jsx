import React from "react";
import PropTypes from "prop-types";
import ResumeTabs from "@/components/ResumeTabs.jsx";

const ResumeSection = ({ resume }) => {
  return (
    <section id="resume" className="section">
      <div className="section__inner">
        <h2 className="section__title">{resume.heading}</h2>
        <p className="section__subtitle">{resume.subheading}</p>
        <ResumeTabs tabs={resume.tabs} />
      </div>
    </section>
  );
};

ResumeSection.propTypes = {
  resume: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        file: PropTypes.string.isRequired,
        buttonLabel: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default ResumeSection;
