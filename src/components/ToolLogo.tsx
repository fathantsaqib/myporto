import { useId } from "react"
import {
  siDribbble,
  siFigma,
  siGooglemeet,
  siJavascript,
  siMaze,
  siPinterest,
  siReact,
  siZoom,
} from "simple-icons"

const iconByTool = {
  Figma: siFigma,

  FigJam: siFigma,

  Maze: siMaze,

  Zoom: siZoom,

  "Google Meet": siGooglemeet,

  Pinterest: siPinterest,

  Dribbble: siDribbble,

  React: siReact,

  JavaScript: siJavascript,
} as const

const toolClassByName: Record<string, string> = {
  Figma: "figma",

  FigJam: "figjam",

  Maze: "maze",

  Canva: "canva",

  Zoom: "zoom",

  "Google Meet": "google-meet",

  Pinterest: "pinterest",

  Dribbble: "dribbble",

  CapCut: "capcut",

  Lightroom: "lightroom",

  React: "react",

  JavaScript: "javascript",

  Excel: "excel",

  PowerPoint: "powerpoint",
}

const customMarkByTool: Record<string, string> = {
  Canva: "C",

  Lightroom: "Lr",

  Excel: "X",

  PowerPoint: "P",
}

export function ToolLogo({ name }: { name: string }) {
  const canvaGradientId = useId()
  const icon = iconByTool[(name as keyof typeof iconByTool)]

  const className = `tool-logo tool-logo-${toolClassByName[name] ?? "default"}`

  if (name === "CapCut") {
    return (
      <span className={className} aria-hidden="true">
        <svg viewBox="0 0 32 32" focusable="false">
          <path d="M7 8h18L7 24h18M10 5l15 22" />
        </svg>
      </span>
    )
  }

  if (name === "Canva") {
    return (
      <span className={className} aria-hidden="true">
        <svg viewBox="0 0 100 48" focusable="false">
          <defs>
            <linearGradient
              id={canvaGradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#00c4cc" />
              <stop offset="52%" stopColor="#7d2ae8" />
              <stop offset="100%" stopColor="#00c4cc" />
            </linearGradient>
          </defs>
          <text
            x="50"
            y="36"
            fill={`url(#${canvaGradientId})`}
            textAnchor="middle"
            fontFamily="'Segoe Script', 'Brush Script MT', cursive"
            fontSize="38"
            fontStyle="italic"
            fontWeight="700"
            letterSpacing="-2"
          >
            Canva
          </text>
        </svg>
      </span>
    )
  }

  if (name === "Figma" || name === "FigJam") {
    return (
      <span className={className} aria-hidden="true">
        <svg viewBox="0 0 16 24" focusable="false">
          <path d="M0 4a4 4 0 0 1 4-4h4v8H4a4 4 0 0 1-4-4Z" fill="#f24e1e" />
          <path d="M8 0h4a4 4 0 1 1 0 8H8V0Z" fill="#ff7262" />
          <path d="M0 12a4 4 0 0 1 4-4h4v8H4a4 4 0 0 1-4-4Z" fill="#a259ff" />
          <path d="M8 8h4a4 4 0 1 1 0 8H8V8Z" fill="#1abcfe" />
          <path d="M0 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0Z" fill="#0acf83" />
        </svg>
      </span>
    )
  }

  if (icon) {
    return (
      <span className={className} aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d={icon.path} />
        </svg>
      </span>
    )
  }

  return (
    <span className={className} aria-hidden="true">
      {customMarkByTool[name] ?? name.slice(0, 2)}
    </span>
  )
}
