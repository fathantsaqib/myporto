import type { CSSProperties } from "react"

import type { Project } from "../data/projects"

import { ToolLogo } from "./ToolLogo"

export function ProjectTools({
  tools,

  accent,
}: {
  tools: Project["tools"]

  accent: string
}) {
  return (
    <aside
      className="project-tools-card"
      data-reveal
      style={{ "--accent": accent } as CSSProperties}
      aria-label="Tools used in this project"
    >
      <div className="project-tools-heading">
        <span>PROJECT TOOLKIT</span>
        <h2>Tools used</h2>
      </div>
      <ul className="project-tools-list">
        {tools.map(({ name, role }, index) => (
          <li
            className={`project-tool project-tool-${name.toLowerCase().replace(/\s+/g, "-")}`}
            key={name}
            aria-label={`${name}: ${role}`}
          >
            <ToolLogo name={name} />
            <span className="project-tool-name">{name}</span>
            <span className="project-tool-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
