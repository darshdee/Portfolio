import React from "react";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  icon,
  emoji,
  title,
  description,
  techStack = [],
  ghLink,
  demoLink,
}) {
  const accent = icon ?? emoji;

  return (
    <div className="project-card-view">
      <div className="project-card-icon">{accent}</div>

      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>

        {techStack.length > 0 && (
          <div className="project-tech-stack">
            {techStack.map((tech) => (
              <span key={tech} className="project-tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}

        {(ghLink || demoLink) && (
          <div className="project-card-actions">
            {ghLink && (
              <a
                className="btn btn-primary"
                href={ghLink}
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub /> &nbsp; GitHub
              </a>
            )}
            {demoLink && (
              <a
                className="btn btn-outline-primary project-demo-btn"
                href={demoLink}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;
