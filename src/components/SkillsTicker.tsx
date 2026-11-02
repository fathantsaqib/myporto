export function SkillsTicker() {
  const skills = [
    "UI/UX Designer",

    "Product Designer",

    "Figma",

    "FigJam",

    "User Research",

    "Prototyping",

    "Design Systems",

    "Data Visualization",

    "Canva",

    "CapCut",

    "Lightroom",

    "React",

    "JavaScript",
  ]

  const tickerSet = (hidden = false) => (
    <div className="ticker-set" aria-hidden={hidden}>
      {skills.map((skill) => (
        <span className="ticker-item" key={skill}>
          {skill}
          <span className="ticker-diamond" aria-hidden="true" />
        </span>
      ))}
    </div>
  )

  return (
    <div
      className="skills-ticker"
      aria-label={`Skills and tools: ${skills.join(", ")}`}
    >
      <div className="ticker-track">
        {tickerSet()}
        {tickerSet(true)}
      </div>
    </div>
  )
}
