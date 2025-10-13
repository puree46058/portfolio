import React, { useState } from "react";
import PropTypes from "prop-types";

const ResumeTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key ?? null);
  const activeContent = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

  const tabOrder = tabs.map((tab) => tab.key);

  const changeTabByOffset = (offset) => {
    const currentIndex = tabOrder.indexOf(activeTab);
    if (currentIndex === -1) {
      setActiveTab(tabOrder[0]);
      return;
    }
    const nextIndex = (currentIndex + offset + tabOrder.length) % tabOrder.length;
    setActiveTab(tabOrder[nextIndex]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeTabByOffset(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeTabByOffset(-1);
    }
  };

  if (!activeContent) {
    return null;
  }

  return (
    <section className="resume-tabs">
      <div className="resume-tabs__tablist" role="tablist" aria-label="Resume switcher">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`resume-tabpanel-${tab.key}`}
            id={`resume-tab-${tab.key}`}
            className={`resume-tabs__tab ${activeTab === tab.key ? "resume-tabs__tab--active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
            onKeyDown={handleKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="resume-tabs__panel"
        id={`resume-tabpanel-${activeContent.key}`}
        role="tabpanel"
        aria-labelledby={`resume-tab-${activeContent.key}`}
      >
        <div className="resume-preview">
          <div className="resume-preview__image">
            <img src={activeContent.previewImage} alt={`${activeContent.label} preview`} loading="lazy" />
          </div>
          <p>{activeContent.description}</p>
          <div className="resume-preview__actions">
            <a className="btn btn--primary" href={activeContent.file} download>
              {activeContent.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

ResumeTabs.propTypes = {
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
};

export default ResumeTabs;
