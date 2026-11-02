import { useState } from "react"

const internships = [
  {
    period: "January 2025 — May 2025",

    organization: "BPJS Kesehatan Kantor Cabang Makassar",

    role: "Penjaminan Manfaat dan Utilitas",

    summary:
      "A closer look at how reliable records and clear communication support public healthcare services.",

    contributions: [
      "Validated claims and healthcare utilization data, and maintained partner-facility records.",

      "Prepared verification data in Excel and created social media content.",
    ],

    visuals: [
      {
        src: "/assets/emonitor-hero.jpg",

        alt: "E-Monitor program monitoring dashboard",

        label: "E-Monitor",
      },

      {
        src: "/assets/media-hero.jpg",

        alt: "Media monitoring dashboard",

        label: "Media monitoring",
      },
    ],
  },

  {
    period: "May 2025 — June 2025",

    organization: "Dinas Komunikasi dan Informatika Kota Makassar",

    role: "UI/UX Designer Intern",

    summary:
      "Bringing service information into clearer flows, practical prototypes, and responsive interfaces.",

    contributions: [
      "Refined the website experience with wireframes and clear user flows.",

      "Created interactive prototypes and worked with developers on responsive interfaces.",
    ],

    visuals: [
      {
        src: "/assets/simoneva-hero.jpg",

        alt: "SIMONEVA government monitoring dashboard",

        label: "SIMONEVA",
      },

      {
        src: "/assets/emonitor-01.jpg",

        alt: "E-Monitor program monitoring interface",

        label: "E-Monitor",
      },
    ],
  },
]

export function InternshipJourney() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeInternship = internships[activeIndex]

  const selectChapter = (index: number) => {
    setActiveIndex(index)
    document
      .querySelector<HTMLButtonElement>(`#internship-chapter-${index}`)
      ?.focus()
  }

  return (
    <section
      className="home-internship"
      aria-labelledby="internship-title"
      data-reveal
    >
      <div className="home-internship-heading">
        <div className="home-internship-heading-main">
          <div>
            <p className="eyebrow">Field notes · 2025</p>
            <h2 id="internship-title">
              WORK
              <span>IN THE FIELD.</span>
            </h2>
          </div>
          <p>
            Two different systems. One growing practice in understanding the
            people behind public services.
          </p>
        </div>
        <span className="internship-heading-index">01—02 / 2025</span>
      </div>

      <div className="internship-story">
        <div
          className="internship-chapters"
          role="tablist"
          aria-label="Internship chapters"
        >
          {internships.map((internship, index) => (
            <button
              id={`internship-chapter-${index}`}
              className={`internship-chapter${
                activeIndex === index ? " is-active" : ""
              }`}
              key={internship.organization}
              type="button"
              role="tab"
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                  event.preventDefault()
                  const direction = event.key === "ArrowRight" ? 1 : -1
                  selectChapter(
                    (index + direction + internships.length) %
                      internships.length,
                  )
                }
                if (event.key === "Home") {
                  event.preventDefault()
                  selectChapter(0)
                }
                if (event.key === "End") {
                  event.preventDefault()
                  selectChapter(internships.length - 1)
                }
              }}
              aria-selected={activeIndex === index}
              aria-controls="internship-feature"
              tabIndex={activeIndex === index ? 0 : -1}
            >
              <span className="internship-chapter-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="internship-chapter-copy">
                <span>{internship.period}</span>
                <strong>{internship.organization}</strong>
              </span>
              <span
                className="internship-chapter-indicator"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>

        <article
          className="internship-feature"
          id="internship-feature"
          role="tabpanel"
          aria-labelledby={`internship-chapter-${activeIndex}`}
          aria-live="polite"
          key={activeInternship.organization}
        >
          <div className="internship-feature-visuals">
            <span className="internship-visual-index" aria-hidden="true">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <figure className="internship-visual internship-visual-primary">
              <img
                src={activeInternship.visuals[0].src}
                alt={activeInternship.visuals[0].alt}
                loading="lazy"
              />
              <figcaption>{activeInternship.visuals[0].label}</figcaption>
            </figure>
            <figure className="internship-visual internship-visual-secondary">
              <img
                src={activeInternship.visuals[1].src}
                alt={activeInternship.visuals[1].alt}
                loading="lazy"
              />
              <figcaption>{activeInternship.visuals[1].label}</figcaption>
            </figure>
            <span className="internship-visual-stamp">
              FIELD
              <br />
              REPORT
            </span>
          </div>
          <div className="internship-feature-content">
            <div className="internship-feature-meta">
              <span>Chapter {String(activeIndex + 1).padStart(2, "0")}</span>
              <span>{activeInternship.period}</span>
            </div>
            <p className="internship-feature-kicker">{activeInternship.role}</p>
            <h3>{activeInternship.organization}</h3>
            <p className="internship-feature-summary">
              {activeInternship.summary}
            </p>
            <ul className="internship-contributions">
              {activeInternship.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
            <p className="internship-visual-note">
              Portfolio selections — not internship documentation.
            </p>
          </div>
        </article>
      </div>
      <div className="internship-footer">
        <span>Learning through people, systems, and service.</span>
        <span>Makassar, Indonesia · 2025</span>
      </div>
    </section>
  )
}
