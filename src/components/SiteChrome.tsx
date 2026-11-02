import { useEffect, useState } from "react"

export function Header({
  path,

  navigate,
}: {
  path: string

  navigate: (path: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 64)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme")
    return savedTheme === "dark" ? "dark" : "light"
  })

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 64)
    window.addEventListener("scroll", updateScrollState, { passive: true })
    updateScrollState()

    return () => window.removeEventListener("scroll", updateScrollState)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  const links = [
    ["/", "Home"],

    ["/work", "Work"],

    ["/about", "About"],

    ["/contact", "Contact"],
  ]

  const go = (nextPath: string) => {
    navigate(nextPath)

    setOpen(false)
  }

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <button
        className="wordmark"
        onClick={() => go("/")}
        aria-label="Go to home"
      >
        MFT<span>.</span>
      </button>
      <nav
        className={`nav-dock${open ? " is-open" : ""}`}
        aria-label="Main navigation"
      >
        <button
          className="menu-toggle"
          onClick={() => {
            if (window.matchMedia("(max-width: 820px), (hover: none)").matches) {
              setOpen((value) => !value)
            }
          }}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="site-nav-panel"
        >
          <span />
          <span />
          <span />
        </button>
        <div className="nav-panel" id="site-nav-panel">
          <div className="nav-links">
            {links.map(([href, label]) => (
              <button
                key={href}
                className={
                  path === href ||
                  (href === "/work" && path.startsWith("/project/"))
                    ? "nav-link is-active"
                    : "nav-link"
                }
                onClick={() => go(href)}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            className="theme-toggle"
            onClick={() =>
              setTheme((currentTheme) =>
                currentTheme === "light" ? "dark" : "light",
              )
            }
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
            <span>{theme === "light" ? "Dark" : "Light"}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export function Footer({ navigate }: { navigate: (path: string) => void }) {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow light">Have a project in mind?</p>
        <button className="footer-cta" onClick={() => navigate("/contact")}>
          LET&apos;S CONNECT <span>↗</span>
        </button>
      </div>
      <div className="footer-meta">
        <p>Makassar, Indonesia</p>
        <a href="mailto:fathant03@gmail.com">fathant03@gmail.com</a>
        <p>© 2026 Muhammad Fathan Tsaqib</p>
      </div>
    </footer>
  )
}
