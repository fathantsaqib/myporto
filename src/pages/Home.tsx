import { projects } from "../data/projects"

import { Footer } from "../components/SiteChrome"

import { ProjectCard } from "../components/ProjectCard"

import { SkillsTicker } from "../components/SkillsTicker"

import { ToolLogo } from "../components/ToolLogo"

import { softwareTools } from "../data/softwareTools"

const featuredProjects = projects.filter(
  (project) =>
    project.slug === "berani-bersinar" || project.slug === "bajika-wedding",
)

export function Home({ navigate }: { navigate: (path: string) => void }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">Creative portfolio · 2026</p>
          <h1>
            UI/UX
            <br />
            <span>DESIGNER</span>
          </h1>
          <div className="hero-bottom">
            <p>
              I turn complex systems into digital experiences that feel clear,
              useful, and human.
            </p>
            <button className="circle-link" onClick={() => navigate("/work")}>
              <span>Explore</span>
              <span>work ↘</span>
            </button>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-label">Muhammad Fathan Tsaqib</div>
          <img
            className="hero-portrait"
            src="/assets/fathan-graduation-cutout.png"
            alt="Muhammad Fathan Tsaqib at his graduation"
          />
          <span className="portrait-skill portrait-skill-branding">
            UX Research
          </span>
          <span className="portrait-skill portrait-skill-intuitive">
            Intuitive
          </span>
          <span className="portrait-skill portrait-skill-ui">UI Design</span>
          <span className="portrait-skill portrait-skill-modern">Modern</span>
          <span className="portrait-skill portrait-skill-creative">
            Creative
          </span>
          <div className="availability">
            <span className="status-dot" /> Available for full-time
            opportunities
          </div>
        </div>
        <span className="hero-index">01 / 04</span>
      </section>

      <SkillsTicker />

      <section className="home-profile" data-reveal>
        <div className="home-section-label">
          <p className="eyebrow">A little about me · 01</p>
          <span>Makassar, Indonesia</span>
        </div>
        <div className="home-profile-content">
          <h2>DESIGNING CLARITY FOR COMPLEX SYSTEMS.</h2>
          <div className="home-profile-copy">
            <p>
              I&apos;m Fathan, a UI/UX Designer and Information Systems graduate
              who enjoys turning complex workflows into thoughtful, easy-to-use
              digital products.
            </p>
            <p>
              I bring a research-led mindset to products for public institutions
              and the people who rely on them.
            </p>
            <div className="home-profile-actions">
              <button className="text-link" onClick={() => navigate("/about")}>
                More about me <span>→</span>
              </button>
              <a
                className="cv-download"
                href="/downloads/fathan-tsaqib-cv.pdf"
                download="Muhammad-Fathan-Tsaqib-CV.pdf"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
        <div className="home-profile-facts" aria-label="Profile highlights">
          <div>
            <span>Education</span>
            <strong>Information Systems</strong>
          </div>
          <div>
            <span>University</span>
            <strong>Universitas Hasanuddin</strong>
          </div>
          <div>
            <span>GPA</span>
            <strong>
              3.82 <small>/ 4.00</small>
            </strong>
          </div>
        </div>
      </section>

      <section className="home-practice">
        <div className="home-practice-heading">
          <p className="eyebrow">What I do · 02</p>
          <h2>FROM THE FIRST QUESTION TO THE FINAL DETAIL.</h2>
        </div>
        <div className="home-practice-content">
          <div className="home-skill-list">
            <p className="eyebrow">Skills &amp; tools</p>
            <div className="home-skill-chips">
              {[
                "UX Research",

                "UI Design",

                "Prototyping",

                "Design Systems",

                "Data Visualization",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className="home-tools-grid" aria-label="Software tools">
              {softwareTools.map(([tool]) => (
                <div className="home-tool" key={tool}>
                  <ToolLogo name={tool} />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
            <button className="text-link" onClick={() => navigate("/about")}>
              Explore all capabilities <span>→</span>
            </button>
          </div>
          <div className="home-process-list">
            {[
              [
                "01",
                "Understand",
                "Research people, context, and the problem.",
              ],

              ["02", "Structure", "Shape clear user flows and information."],

              ["03", "Design", "Prototype useful, consistent interfaces."],

              ["04", "Validate", "Test, refine, and prepare for handoff."],
            ].map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-intro" data-reveal>
        <p className="eyebrow">Selected work</p>
        <h2>DESIGN FOR SYSTEMS THAT SERVE PEOPLE.</h2>
        <button className="text-link" onClick={() => navigate("/work")}>
          See all projects <span>→</span>
        </button>
      </section>

      <section className="featured-projects">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            navigate={navigate}
            number={String(index + 1).padStart(2, "0")}
            featured
            laptop
          />
        ))}
      </section>
      <Footer navigate={navigate} />
    </main>
  )
}
