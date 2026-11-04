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
      "Observed a live Bajika wedding and surveyed six people: the owner and five operations staff. Four of six reported booking records falling out of sync; four of six said clients repeatedly asked about packages and prices.",
    ],
    [
      "02",
      "Define",
      "Bajika staff need a shared place for client and booking records, while prospective clients need clear package and process information.",
    ],
    [
      "03",
      "Ideate",
      "Mapped system actors in one use-case diagram and documented 12 activity flows: six for clients and six for staff.",
    ],
    [
      "04",
      "Prototype",
      "Created a shared design system and high-fidelity Figma prototypes for prospective clients and internal staff.",
    ],
    [
      "05",
      "Test",
      "Tested five tasks per group in Maze with 10 staff and 30 prospective clients, then evaluated usability with SUS and experience with UEQ.",
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
            <p className="eyebrow">Undergraduate thesis · 2026</p>
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

            [
              "Deliverables",
              "Public website prototype · Staff dashboard prototype",
            ],
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
          <p>
            Client needs were gathered through staff, who speak with clients
            daily; prospective clients took part in usability testing.
          </p>
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
            <h3>PUBLIC WEBSITE PROTOTYPE</h3>
            <p>
              Packages, pricing, workflow, portfolio, recommended vendors, FAQ,
              and booking requests are organized into a clear high-fidelity
              prototype.
            </p>
          </article>
          <article data-reveal>
            <img
              src="/assets/staffsection.jpg"
              alt="Bajika staff dashboard showing booking statuses and operational navigation"
            />
            <span>Role 02 · Internal staff</span>
            <h3>STAFF DASHBOARD PROTOTYPE</h3>
            <p>
              Client records, event schedules, booking statuses, notifications,
              and guest lists are brought into a shared high-fidelity Figma
              prototype.
            </p>
          </article>
        </div>
      </section>

      <section className="bajika-process">
        <div className="bajika-section-heading">
          <p className="eyebrow">04 · Process</p>
          <h2>FIVE STAGES, FROM FIELD RESEARCH TO TESTING.</h2>
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
          The palette draws from the Bajika logo: warm beige (#B18A5F) and deep
          brown (#553F31). Poppins, an editorial serif, reusable controls, and
          booking-status chips—Inquiry, Deal, DP Masuk, and Selesai—keep the
          client and staff prototypes visually consistent.
        </p>
      </section>

      <section className="bajika-validation">
        <div className="bajika-section-heading">
          <p className="eyebrow">06 · Validation</p>
          <h2>TESTING SHOWED WHAT WORKED AND WHAT NEEDS ANOTHER PASS.</h2>
          <p>
            Five Maze tasks were tested with 10 staff and 30 prospective
            clients, followed by SUS and UEQ evaluation.
          </p>
        </div>
        <div className="validation-score-grid">
          <article>
            <span>Staff SUS</span>
            <strong>84</strong>
            <small>/ 100 · Grade A · Excellent · Acceptable</small>
          </article>
          <article>
            <span>Client SUS</span>
            <strong>80.75</strong>
            <small>/ 100 · Grade A · Good · Acceptable</small>
          </article>
          <article>
            <span>Staff task MAUS</span>
            <strong>65–74</strong>
            <small>Per task · Medium (50–80)</small>
          </article>
          <article>
            <span>Client task MAUS</span>
            <strong>90–99</strong>
            <small>Per task · High (80–100)</small>
          </article>
        </div>
        <p>
          Task success: staff completed four of five tasks at 100%, with 90%
          success on VIP/VVIP verification; prospective clients completed all
          five tasks at 100%. MAUS values are ranges across individual tasks,
          not one combined score per group. Staff task misclick rates ranged
          from 35.4% to 66.1%; client task rates ranged from 3.2% to 17.5%.
        </p>

        <div className="bajika-ueq">
          <div className="bajika-ueq-intro">
            <div>
              <p className="eyebrow">UEQ comparison · Scale −3 to +3</p>
              <h3>ALL SIX DIMENSIONS WERE IN THE POSITIVE RANGE.</h3>
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
            <span>Staff · lowest task MAUS</span>
            <strong>65</strong>
            <h3>Check date availability</h3>
            <p>
              All staff completed the task, but it took the longest on average:
              62.9 seconds. This is the first workflow to simplify.
            </p>
          </article>
          <article>
            <span>Staff · lowest task success</span>
            <strong>90%</strong>
            <h3>Verify VIP/VVIP guests</h3>
            <p>
              This task also had the highest staff misclick rate at 66.1%.
              Make its entry point and labels easier to recognize.
            </p>
          </article>
          <article>
            <span>Staff · form friction</span>
            <strong>45.5%</strong>
            <h3>Add a new client</h3>
            <p>
              The task had a 52.8-second average duration and needs a tighter
              form flow. These are findings, not fixes already tested.
            </p>
          </article>
        </div>
        <p>
          UEQ benchmark: staff rated five dimensions Excellent and Perspicuity
          Good; client dimensions ranged from Good to Excellent. Efficiency was
          the highest staff dimension (2.20), while Stimulation was highest for
          clients (2.42).
        </p>
      </section>

      <section className="bajika-gallery">
        <div className="bajika-section-heading">
          <p className="eyebrow">07 · Selected screens</p>
          <h2>SCREENS THAT ANSWER CLIENT AND STAFF NEEDS.</h2>
        </div>
        <div className="bajika-gallery-grid">
          {[
            [
              "/assets/bajika-client-discovery.png",
              "Client discovery · Services and recommended vendors",
            ],
            [
              "/assets/staffsection.jpg",
              "Staff operations · Booking status and upcoming events",
            ],
          ].map(([image, caption]) => (
            <figure key={image} data-reveal>
              <img
                className={
                  image === "/assets/bajika-client-discovery.png"
                    ? "bajika-client-discovery-image"
                    : undefined
                }
                src={image}
                alt={caption}
              />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bajika-learnings" data-reveal>
        <p className="eyebrow">08 · Key takeaway</p>
        <p>
          Staff scored the prototype 84 on SUS and prospective clients scored
          it 80.75. All six UEQ dimensions were positive, and every client task
          reached the High MAUS range. Staff tasks remained in the Medium range,
          so the next iteration should simplify date availability and VIP/VVIP
          verification.
        </p>
        <p>
          This work is a high-fidelity Figma prototype, not a built or deployed
          system. After the proposed changes, the same tasks should be tested
          again to see whether misclicks and completion time improve.
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
