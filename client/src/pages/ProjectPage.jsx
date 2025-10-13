import React, { useMemo, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ProjectPage = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const closeBtnRef = useRef(null);

  const gallery = useMemo(() => project?.gallery ?? [], [project]);

  useEffect(() => {
    if (activeImageIndex !== null) {
      closeBtnRef.current?.focus?.();
    }
  }, [activeImageIndex]);

  if (!project) {
    return (
      <div className="section" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h2>Project not found</h2>
          <button type="button" className="btn btn--secondary" onClick={onClose}>
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="section__inner">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <h2 className="section__title" style={{ margin: 0 }}>{project.title}</h2>
     
        </div>
        <div style={{ marginTop: 12 }}>
          <h3 style={{ margin: "8px 0 8px", fontSize: "1.25rem" }}>รายละเอียดโปรเจค</h3>
          <p className="section__subtitle" style={{ margin: 0 }}>{project.description}</p>
        </div>

        {(project.role || (project.contributions && project.contributions.length)) && (
          <div style={{ marginTop: 20 }}>
            <h3 style={{ margin: "0 0 8px", fontSize: "1.25rem" }}>รายละเอียดที่ฉันทำ</h3>
            {project.role && (
              <p style={{ marginTop: 0, marginBottom: 8 }}><strong>ตำแหน่ง:</strong> {project.role}</p>
            )}
            {Array.isArray(project.contributions) && project.contributions.length > 0 && (
              <ul style={{ marginTop: 8, paddingLeft: 18 }}>
                {project.contributions.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: 6 }}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {project.tags?.length > 0 && (
          <div className="project-detail__tags" style={{ marginTop: 12 }}>
            {project.tags.map((tag) => (
              <span key={tag} className="chip">#{tag}</span>
            ))}
          </div>
        )}
         {project.links?.length > 0 && (
          <div className="hero__actions" style={{ marginTop: 24 }}>
            {project.links.map((link) => (
              <a key={link.href} className="btn btn--primary" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="project-gallery" role="list" style={{ marginTop: 24 }}>
          {gallery.map((image, index) => (
            <figure className="project-gallery__item" key={image} role="listitem">
              <button
                type="button"
                className="project-gallery__button"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Open image ${index + 1}`}
              >
                <img src={image} alt={`${project.title} preview ${index + 1}`} loading="lazy" />
              </button>
            </figure>
          ))}
        </div>

       

        {activeImageIndex !== null && gallery[activeImageIndex] && (
          <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
            <button
              type="button"
              className="lightbox__close"
              ref={closeBtnRef}
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close image"
            >
              ×
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => setActiveImageIndex((i) => (i - 1 + gallery.length) % gallery.length)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <img
              className="lightbox__image"
              src={gallery[activeImageIndex]}
              alt={`${project.title} large preview ${activeImageIndex + 1}`}
            />
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={() => setActiveImageIndex((i) => (i + 1) % gallery.length)}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="lightbox__counter">
              {activeImageIndex + 1} / {gallery.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

ProjectPage.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    role: PropTypes.string,
    contributions: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ),
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectPage;
