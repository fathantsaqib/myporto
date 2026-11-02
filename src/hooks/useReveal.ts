import { useEffect } from "react"

export function useReveal(path: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          } else {
            entry.target.classList.remove("is-visible")
          }
        })
      },

      { threshold: 0.12 },
    )

    const observeRevealElements = (root: ParentNode) => {
      if (root instanceof HTMLElement && root.matches("[data-reveal]")) {
        observer.observe(root)
      }

      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        observer.observe(element)
      })
    }

    observeRevealElements(document)

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) observeRevealElements(node)
        })
      })
    })

    mutations.observe(document.getElementById("root") ?? document.body, {
      childList: true,

      subtree: true,
    })

    return () => {
      mutations.disconnect()

      observer.disconnect()
    }
  }, [path])
}
