import { Footer } from "../components/SiteChrome"

import { ToolLogo } from "../components/ToolLogo"

import { softwareTools } from "../data/softwareTools"

export function About({ navigate }: { navigate: (path: string) => void }) {
  const capabilities = [
    [
      "01",
      "User Research",
      "Stakeholder interviews, requirement analysis, and usability testing.",
    ],

    [
      "02",
      "UI Design",
      "High-fidelity interfaces, design systems, and component libraries.",
    ],

    [
      "03",
      "Prototyping",
      "Interactive prototypes for validation and developer handoff.",
    ],

    [
      "04",
      "Data Visualization",
      "Dashboard layouts, monitoring displays, and clear visual stories.",
    ],
  ]

  const personalSkills = [
    "Problem Solving",

    "Systems Thinking",

    "Creative Direction",

    "Team Collaboration",

    "Attention to Detail",

    "Adaptability",
  ]

  return (
    <main>
      <section className="about-hero">
        <div>
          <p className="eyebrow">About · MFT</p>
          <h1>
            DESIGNING WITH
            <br />
            PURPOSE &amp; CLARITY.
          </h1>
        </div>
        <img src="/assets/fathan2.jpg" alt="Fathan standing on campus stairs" />
      </section>
      <section className="bio" data-reveal>
        <h2>
          MUHAMMAD
          <br />
          FATHAN TSAQIB
        </h2>
        <div>
          <p className="bio-lead">
            A UI/UX Designer and creative practitioner based in Makassar,
            Indonesia.
          </p>
          <p>
            Fresh graduate of Information Systems from Universitas Hasanuddin
            (GPA 3.82/4.00) with hands-on experience designing digital products
            for government institutions.
          </p>
          <p>
            My work sits at the intersection of design and function. I care
            deeply about making complex systems feel simple, intuitive, and
            human.
          </p>
        </div>
      </section>
      <section className="skill-profile">
        <article className="personal-skills" data-reveal>
          <div className="section-label">
            <span>01</span>
            <p className="eyebrow">Personal skills</p>
          </div>
          <h2>
            HOW I<br />
            SHOW UP.
          </h2>
          <div className="personal-skill-list">
            {personalSkills.map((skill, index) => (
              <div key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="software-skills" data-reveal>
          <div className="section-label">
            <span>02</span>
            <p className="eyebrow">Software skills</p>
          </div>
          <h2>
            TOOLS OF
            <br />
            THE TRADE.
          </h2>
          <div className="software-grid">
            {softwareTools.map(([software, category], index) => (
              <div key={software} className="software-item">
                <ToolLogo name={software} />
                <div>
                  <strong>{software}</strong>
                  <small>{category}</small>
                </div>
                <span className="software-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="education" data-reveal>
        <div className="section-label">
          <span>03</span>
          <p className="eyebrow">Education</p>
        </div>
        <div className="education-content">
          <div>
            <p className="education-year">Graduated · 2026</p>
            <h2>
              UNIVERSITAS
              <br />
              HASANUDDIN
            </h2>
          </div>
          <div className="education-detail">
            <span>Bachelor&apos;s Degree</span>
            <h3>Information Systems</h3>
            <p>
              Built a foundation in technology, product thinking, information
              architecture, and human-centered digital systems.
            </p>
          </div>
          <div className="gpa-card">
            <span>GPA</span>
            <strong>3.82</strong>
            <small>/ 4.00</small>
          </div>
        </div>
      </section>
      <section className="capabilities">
        <p className="eyebrow">Core capabilities</p>
        {capabilities.map(([number, title, copy]) => (
          <article key={number} data-reveal>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <Footer navigate={navigate} />
    </main>
  )
}
