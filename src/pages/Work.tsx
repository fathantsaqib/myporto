import { useMemo } from "react"

import { projects } from "../data/projects"

import { Footer } from "../components/SiteChrome"

import { ProjectCard } from "../components/ProjectCard"

export type WorkFilter = "All" | "Dashboard" | "Research" | "Responsive"

export function Work({
  navigate,

  filter,

  setFilter,
}: {
  navigate: (path: string) => void

  filter: WorkFilter

  setFilter: (filter: WorkFilter) => void
}) {
  const filters: WorkFilter[] = ["All", "Dashboard", "Research", "Responsive"]

  const orderedProjects = useMemo(() => {
    const featuredProject = projects.find(
      (project) => project.slug === "bajika-wedding",
    )

    return featuredProject
      ? [
          featuredProject,
          ...projects.filter((project) => project !== featuredProject),
        ]
      : projects
  }, [])

  const visible = useMemo(() => {
    if (filter === "All") return orderedProjects

    return orderedProjects.filter((project) =>
      project.tags.some((tag) =>
        tag.toLowerCase().includes(filter.toLowerCase()),
      ),
    )
  }, [filter, orderedProjects])

  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Portfolio · 01</p>
          <h1>
            SELECTED
            <br />
            WORK
          </h1>
        </div>
        <p className="page-intro">
          End-to-end product design for public institutions—from research and
          wireframes to scalable design systems.
        </p>
      </section>
      <div className="filters" aria-label="Project filters">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={filter === item ? "filter is-active" : "filter"}
          >
            {item}
          </button>
        ))}
      </div>
      <section className="work-grid" aria-label="Selected projects">
        <div className="work-grid-heading">
          <p className="eyebrow">Selected projects</p>
          <span>
            {String(visible.length).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        {visible.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            navigate={navigate}
            number={String(index + 1).padStart(2, "0")}
            laptop
          />
        ))}
      </section>
      <Footer navigate={navigate} />
    </main>
  )
}
