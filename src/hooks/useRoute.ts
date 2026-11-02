import { flushSync } from "react-dom"
import { useEffect, useState } from "react"

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    finished: Promise<void>
  }
}

export function useRoute() {
  const getPath = () => window.location.pathname || "/"

  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const onPopState = () => setPath(getPath())

    window.addEventListener("popstate", onPopState)

    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  const navigate = (nextPath: string) => {
    if (nextPath !== path) {
      const updateRoute = (scrollInstantly: boolean) => {
        window.history.pushState({}, "", nextPath)
        flushSync(() => setPath(nextPath))

        if (scrollInstantly) {
          const previousScrollBehavior =
            document.documentElement.style.scrollBehavior
          document.documentElement.style.scrollBehavior = "auto"
          window.scrollTo(0, 0)
          document.documentElement.style.scrollBehavior =
            previousScrollBehavior
        }
      }
      const viewTransitionDocument = document as ViewTransitionDocument
      const startViewTransition = viewTransitionDocument.startViewTransition

      if (startViewTransition) {
        const transition = startViewTransition.call(
          document,
          () => updateRoute(true),
        )
        void transition.finished.catch((error: unknown) => {
          if (error instanceof DOMException && error.name === "AbortError") {
            return
          }

          console.error("Page transition failed.", error)
        })
      } else {
        updateRoute(false)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return { path, navigate }
}
