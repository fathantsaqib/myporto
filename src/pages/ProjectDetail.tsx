import { useState, type CSSProperties } from "react"

import { projects, type Project } from "../data/projects"

import { CaseStudyDevice } from "../components/CaseStudyDevice"

import { ProjectTools } from "../components/ProjectTools"

export function ProjectDetail({
  project,

  navigate,
}: {
  project: Project

  navigate: (path: string) => void
}) {
  const [activeImage, setActiveImage] = useState(0)

  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length]

  const moveGallery = (direction: number) => {
    setActiveImage(
      (current) =>
        (current + direction + project.gallery.length) % project.gallery.length,
    )
  }

  const narrative = [
    { number: "01", title: "Context", text: project.narrative.context },
    { number: "02", title: "Task", text: project.narrative.task },
    { number: "03", title: "Solution", text: project.narrative.solution },
    { number: "04", title: "Process", text: project.narrative.process },
    { number: "05", title: "Result", text: project.narrative.outcome },
  ]

  return (
    <main className="project-case">
      <section
        className="case-header"
        style={{ "--accent": project.color } as CSSProperties}
      >
        <button className="back-link" onClick={() => navigate("/work")}>
          ← All projects
        </button>
        <div className="case-heading">
          <div>
            <p className="eyebrow">
              {project.client} · {project.period ?? project.year}
            </p>
            <h1>{project.title}</h1>
          </div>
          <div className="case-heading-aside">
            <p>{project.description}</p>
          </div>
        </div>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section
        className="gallery"
        style={{ "--accent": project.color } as CSSProperties}
      >
        <div className="gallery-stage">
          <CaseStudyDevice
            image={project.gallery[activeImage]}
            title={project.title}
            mobileImage={project.mobileImage}
          />
          <button
            className="gallery-arrow gallery-arrow-prev"
            onClick={() => moveGallery(-1)}
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            className="gallery-arrow gallery-arrow-next"
            onClick={() => moveGallery(1)}
            aria-label="Next image"
          >
            →
          </button>
          <div className="gallery-count">
            {String(activeImage + 1).padStart(2, "0")} /{" "}
            {String(project.gallery.length).padStart(2, "0")}
          </div>
        </div>
        <div className="gallery-controls">
          <div className="gallery-dots">
            {project.gallery.map((image, index) => (
              <button
                key={image}
                className={activeImage === index ? "is-active" : ""}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="case-story-section"
        style={{ "--accent": project.color } as CSSProperties}
      >
        <div className="case-story-grid">
          <header className="case-story-heading" data-reveal>
            <p className="eyebrow">The story · 01—05</p>
            <h2>FROM FIRST QUESTION TO FINAL OUTCOME.</h2>
            <span aria-hidden="true">SCROLL TO EXPLORE ↓</span>
            <ProjectTools tools={project.tools} accent={project.color} />
          </header>
          <div className="case-story-list">
            {narrative.map(({ number, title, text }) => (
              <article
                className="case-story-card"
                key={title}
                data-reveal
                style={{ "--story-index": `"${number}"` } as CSSProperties}
              >
                <span className="case-story-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="case-story-mark" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <button
        className="next-project"
        onClick={() => navigate(`/project/${nextProject.slug}`)}
      >
        <span>Next case study</span>
        <strong>{nextProject.title}</strong>
        <span>↗</span>
      </button>
    </main>
  )
}
