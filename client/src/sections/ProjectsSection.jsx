import React from "react";
import PropTypes from "prop-types";
import slugify from "@/utils/slugify.js";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <h2 className="section__title">{projects.heading}</h2>
        <p className="section__subtitle">{projects.subheading}</p>
        <div className="projects-grid">
          {projects.items.map((project) => {
            const slug = slugify(project.title);
            return (
              <article className="project-card" key={project.title}>
                <a href={`#/projects/${slug}`} style={{ display: "block" }}>
                  <img src={project.coverImage} alt={`${project.title} cover`} loading="lazy" />
                </a>
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p style={{ color: "var(--text-secondary)" }}>{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                  <div className="project-card__actions">
                    <button
                      type="button"
                      className="btn btn--secondary"
                      onClick={() => {
                        window.location.hash = `/projects/${slug}`;
                      }}
                    >
                      View Project
                    </button>
                    {Array.isArray(project.links) && project.links.length > 0 &&
                      project.links.map((link) => (
                        <a
                          key={link.href}
                          className="btn btn--primary"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{marginLeft:10}}
                        >
                          {link.label}
                        </a>
                      ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ProjectsSection.propTypes = {
  projects: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        coverImage: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
          }),
        ).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default ProjectsSection;
