import type { Project } from "../data/projects"

import { CaseStudyDevice } from "../components/CaseStudyDevice"

import { ProjectTools } from "../components/ProjectTools"

export function BajikaCaseStudy({
  project,

  navigate,
}: {
  project: Project

  navigate: (path: string) => void
}) {
  const ueq = [
    { label: "Attractiveness", staff: 2.083, client: 2.467 },

    { label: "Perspicuity", staff: 2.0, client: 2.292 },

    { label: "Efficiency", staff: 2.2, client: 2.3 },

    { label: "Dependability", staff: 2.075, client: 2.2 },

    { label: "Stimulation", staff: 2.175, client: 2.417 },

    { label: "Novelty", staff: 1.825, client: 1.975 },
  ]

  const process = [
    [
      "01",
      "Empathize",
      "Field observation and open-ended questionnaires with six Bajika staff members.",
    ],

    [
      "02",
      "Define",
      "Translated recurring client and operational pain points into focused problem statements.",
    ],

    [
      "03",
      "Ideate",
      "Mapped use cases, activity flows, public information architecture, and staff workflows.",
    ],

    [
      "04",
      "Prototype",
      "Built a shared design system and high-fidelity prototypes for two distinct user roles.",
    ],

    [
      "05",
      "Test",
      "Validated task completion and experience using Maze, SUS, and UEQ.",
    ],
  ]

  return (
    <main className="bajika-case">
      <section className="bajika-case-hero">
        <button className="bajika-back" onClick={() => navigate("/work")}>
          ← Back to all work
        </button>
        <div className="bajika-title-row">
          <div>
            <p className="eyebrow">Final research · 2026</p>
            <h1>
              BAJIKA
              <br />
              WEDDING
            </h1>
          </div>
          <div className="bajika-summary">
            <span>UI/UX · Website · Dashboard</span>
            <p>{project.description}</p>
          </div>
        </div>
        <div className="bajika-main-device">
          <CaseStudyDevice image={project.hero} title={project.title} />
        </div>
        <div className="bajika-facts">
          {[
            ["Role", "UI/UX Designer & Researcher"],

            ["Method", "Design Thinking"],

            ["Deliverables", "Public website · Staff dashboard"],
          ].map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="bajika-overview" data-reveal>
        <div>
          <p className="eyebrow">01 · Overview</p>
          <h2>FROM SCATTERED CHATS TO ONE CONNECTED EXPERIENCE.</h2>
          <ProjectTools tools={project.tools} accent={project.color} />
        </div>
        <div className="bajika-overview-copy">
          <p>{project.narrative.context}</p>
          <p>{project.narrative.task}</p>
        </div>
      </section>

      <section className="bajika-problems">
        <p className="eyebrow">02 · The problem</p>
        <div className="problem-columns">
          <article data-reveal>
            <span>For clients</span>
            <h3>INFORMATION WAS HARD TO FIND.</h3>
            <ul>
              <li>Unclear package contents and price differences</li>
              <li>No clear booking, timeline, and deposit flow</li>
              <li>Date availability required repeated chat</li>
              <li>Service and vendor information was fragmented</li>
            </ul>
          </article>
          <article data-reveal>
            <span>For staff</span>
            <h3>OPERATIONS WERE HARD TO CONTROL.</h3>
            <ul>
              <li>Repeated questions increased communication workload</li>
              <li>Booking data was spread across platforms</li>
              <li>Manual records increased double-booking risk</li>
              <li>VIP and VVIP guest lists were managed manually</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="bajika-solutions">
        <p className="eyebrow">03 · The solution</p>
        <p>{project.narrative.solution}</p>
        <div className="solution-grid">
          <article data-reveal>
            <img
              src="/assets/herosection.png"
              alt="Bajika client service pages"
            />
            <span>Role 01 · Prospective client</span>
            <h3>PUBLIC WEBSITE</h3>
            <p>
              Packages, pricing, workflow, portfolio, recommended vendors, FAQ,
              and booking requests are organized into a clear discovery journey.
            </p>
          </article>
          <article data-reveal>
            <img
              src="/assets/staffsection.jpg"
              alt="Bajika staff dashboard login"
            />
            <span>Role 02 · Internal staff</span>
            <h3>STAFF WORKSPACE</h3>
            <p>
              Client records, event schedules, booking statuses, notifications,
              and guest lists are brought into a more controlled workflow.
            </p>
          </article>
        </div>
      </section>

      <section className="bajika-process">
        <div className="bajika-section-heading">
          <p className="eyebrow">04 · Process</p>
          <h2>FIVE STAGES, ONE CONTINUOUS LEARNING LOOP.</h2>
        </div>
        <p>{project.narrative.process}</p>
        <div className="process-line">
          {process.map(([number, title, copy]) => (
            <article key={number} data-reveal>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bajika-system" data-reveal>
        <div className="bajika-section-heading">
          <p className="eyebrow">05 · Design system</p>
          <h2>A CALM VISUAL LANGUAGE FOR A HIGH-EMOTION SERVICE.</h2>
        </div>
        <img
          src="/assets/bajika-design-system.jpg"
          alt="Bajika visual design system"
        />
        <p>
          Warm neutrals, editorial typography, reusable controls, status chips,
          and form patterns create consistency across the public website and
          operational dashboard.
        </p>
      </section>

      <section className="bajika-validation">
        <div className="bajika-section-heading">
          <p className="eyebrow">06 · Validation</p>
          <h2>THE DESIGN WAS TESTED, NOT JUST PRESENTED.</h2>
        </div>
        <div className="validation-score-grid">
          <article>
            <span>Staff SUS</span>
            <strong>84</strong>
            <small>/ 100 · Excellent</small>
            <div>
              <i style={{ width: "84%" }} />
            </div>
          </article>
          <article>
            <span>Client SUS</span>
            <strong>80.75</strong>
            <small>/ 100 · Very good</small>
            <div>
              <i style={{ width: "80.75%" }} />
            </div>
          </article>
          <article>
            <span>Staff MAUS</span>
            <strong>65–74</strong>
            <small>Medium usability</small>
            <div>
              <i style={{ width: "69.5%" }} />
            </div>
          </article>
          <article>
            <span>Client MAUS</span>
            <strong>90–99</strong>
            <small>High usability</small>
            <div>
              <i style={{ width: "94.5%" }} />
            </div>
          </article>
        </div>

        <div className="bajika-ueq">
          <div className="bajika-ueq-intro">
            <div>
              <p className="eyebrow">UEQ comparison · Scale −3 to +3</p>
              <h3>ALL SIX DIMENSIONS SCORED POSITIVELY.</h3>
            </div>
            <div className="bajika-ueq-legend">
              <span>
                <i /> Staff
              </span>
              <span>
                <i /> Client
              </span>
            </div>
          </div>
          <div className="bajika-ueq-chart">
            {ueq.map((metric) => (
              <div className="bajika-ueq-row" key={metric.label}>
                <span>{metric.label}</span>
                <div>
                  <i style={{ width: `${(metric.staff / 3) * 100}%` }} />
                  <i style={{ width: `${(metric.client / 3) * 100}%` }} />
                </div>
                <strong>
                  {metric.staff.toFixed(2)} / {metric.client.toFixed(2)}
                </strong>
              </div>
            ))}
          </div>
        </div>

        <div className="validation-insights">
          <article>
            <span>Highest staff dimension</span>
            <strong>2.20</strong>
            <h3>Efficiency</h3>
            <p>
              Staff felt the prototype supported faster and more focused task
              completion.
            </p>
          </article>
          <article>
            <span>Highest client dimension</span>
            <strong>2.42</strong>
            <h3>Stimulation</h3>
            <p>
              Clients found the experience engaging, pleasant, and motivating to
              explore.
            </p>
          </article>
          <article>
            <span>Benchmark position</span>
            <strong>6/6</strong>
            <h3>Good–Excellent</h3>
            <p>
              Every UEQ dimension landed in a positive benchmark category for
              both roles.
            </p>
          </article>
        </div>
      </section>

      <section className="bajika-gallery">
        <div className="bajika-section-heading">
          <p className="eyebrow">07 · Selected screens</p>
          <h2>ONE SYSTEM, TWO CONNECTED EXPERIENCES.</h2>
        </div>
        <div className="bajika-gallery-grid">
          {[
            ["/assets/frame43.jpg", "Brand story and team"],

            ["/assets/forservices.jpg", "Services and vendor discovery"],

            ["/assets/pastportfolio.jpg", "Wedding portfolio"],

            ["/assets/bajika-login.jpg", "Staff access"],
          ].map(([image, caption]) => (
            <figure key={image} data-reveal>
              <img src={image} alt={caption} />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bajika-learnings" data-reveal>
        <p className="eyebrow">08 · Key takeaway</p>
        <p>{project.narrative.outcome}</p>
        <p>
          The next iteration should prioritize simplifying complex staff tasks,
          where MAUS scores indicate more room for improvement than the
          client-facing flow.
        </p>
      </section>

      <button
        className="bajika-next"
        onClick={() => navigate("/project/simoneva-berani")}
      >
        <span>Next project</span>
        <strong>SIMONEVA BERANI</strong>
        <span>↗</span>
      </button>
    </main>
  )
}
