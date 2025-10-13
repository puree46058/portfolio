import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

const ProjectModal = ({ project, onClose }) => {
  const closeButtonRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const gallery = useMemo(() => project?.gallery ?? [], [project]);

  useEffect(() => {
    if (!project) {
      setActiveImageIndex(null);
      return;
    }
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKey = (event) => {
      if (event.key === "Escape") {
        if (activeImageIndex === null) {
          onClose();
        } else {
          setActiveImageIndex(null);
        }
      }
      if (event.key === "ArrowRight" && activeImageIndex !== null) {
        event.preventDefault();
        setActiveImageIndex((index) => (index + 1) % gallery.length);
      }
      if (event.key === "ArrowLeft" && activeImageIndex !== null) {
        event.preventDefault();
        setActiveImageIndex((index) => (index - 1 + gallery.length) % gallery.length);
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      previouslyFocused?.focus?.();
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div className="modal-content">
        <div className="modal-header">
          <h3 id="project-modal-title">{project.title}</h3>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="ปิดหน้าต่างรายละเอียดโปรเจ็กต์"
          >
            ×
          </button>
        </div>
        <p className="modal-description">{project.description}</p>
        <div className="project-detail__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              #{tag}
            </span>
          ))}
        </div>
        <div className="project-gallery" role="list">
          {gallery.map((image, index) => (
            <figure className="project-gallery__item" key={image} role="listitem">
              <button
                type="button"
                className="project-gallery__button"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`ดูภาพขนาดใหญ่ลำดับที่ ${index + 1}`}
              >
                <img src={image} alt={`${project.title} preview ${index + 1}`} loading="lazy" />
              </button>
            </figure>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="hero__actions" style={{ marginTop: "24px" }}>
            {project.links.map((link) => (
              <a key={link.href} className="btn btn--primary" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
      {activeImageIndex !== null && gallery[activeImageIndex] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="ตัวอย่างภาพขนาดใหญ่">
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setActiveImageIndex(null)}
            aria-label="ปิดภาพขนาดใหญ่"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => setActiveImageIndex((index) => (index - 1 + gallery.length) % gallery.length)}
            aria-label="ดูภาพก่อนหน้า"
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
            onClick={() => setActiveImageIndex((index) => (index + 1) % gallery.length)}
            aria-label="ดูภาพถัดไป"
          >
            ›
          </button>
          <div className="lightbox__counter">
            {activeImageIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ),
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
