import type { CSSProperties } from "react"

import type { Project } from "../data/projects"

export function ProjectCard({
  project,

  navigate,

  number = project.number,

  featured = false,

  laptop = false,
}: {
  project: Project

  navigate: (path: string) => void

  number?: string

  featured?: boolean

  laptop?: boolean
}) {
  const cardClassName = [
    "project-card",

    featured && "is-featured",

    laptop && "is-laptop",

    laptop && project.mobileImage && "has-mobile",
  ]

    .filter(Boolean)

    .join(" ")

  return (
    <article className={cardClassName} data-reveal>
      <div
        className="project-frame"
        style={{ "--project-accent": project.color } as CSSProperties}
      >
        <div className="project-panel" aria-hidden="true">
          <span className="panel-grid" />
          <span className="panel-glow" />
          <span className="panel-label">
            {project.mobileImage ? "Responsive project" : "Selected project"}
          </span>
          <span className="panel-year">{project.year}</span>
          <span className="panel-index">{number}</span>
          <span className="panel-caption">
            Digital product · {project.title}
          </span>
        </div>
        {laptop && (
          <div className="device-stage">
            <button
              className="laptop-mockup"
              onClick={() => navigate(`/project/${project.slug}`)}
              aria-label={`View ${project.title} case study`}
            >
              <span className="laptop-screen">
                <span className="laptop-display">
                  <span className="screen-chrome" aria-hidden="true">
                    <span className="frame-dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="frame-address">
                      fathan.design / {project.slug}
                    </span>
                    <span className="frame-menu">•••</span>
                  </span>
                  <img
                    src={project.hero}
                    alt={`${project.title} laptop screen preview`}
                  />
                  <span className="view-pill">View case study ↗</span>
                </span>
              </span>
              <span className="laptop-base" aria-hidden="true" />
            </button>
            {project.mobileImage && (
              <button
                className="phone-mockup"
                onClick={() => navigate(`/project/${project.slug}`)}
                aria-label={`View ${project.title} case study on mobile`}
              >
                <span className="phone-speaker" aria-hidden="true" />
                <img
                  src={project.mobileImage}
                  alt={`${project.title} mobile screen preview`}
                />
                <span className="phone-home-indicator" aria-hidden="true" />
              </button>
            )}
          </div>
        )}
      </div>
      <div className="project-card-info">
        <span className="project-number">{number}</span>
        <div>
          <p className="project-client">
            {project.client} · {project.period ?? project.year}
          </p>
          <button
            className="project-title-link"
            onClick={() => navigate(`/project/${project.slug}`)}
          >
            {project.title}
          </button>
          <p>{project.subtitle}</p>
        </div>
      </div>
    </article>
  )
}
