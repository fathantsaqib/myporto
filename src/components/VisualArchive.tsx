import { useEffect, useRef, useState } from "react"

import {
  visualAlbums,
  type VisualAlbum,
  type VisualCategory,
  type VisualPhoto,
} from "../data/visuals"

type VisualFilter = "All" | VisualCategory | "Videography"

const albumTransitionDuration = 650

type SlideDirection = "right"

type FrameSlide = {
  direction: SlideDirection

  phase: "prepare" | "animate"

  incomingPhoto: VisualPhoto

  trackPhotos: VisualPhoto[]
}

function VisualCollectionCard({
  album,

  index,

  navigate,
}: {
  album: VisualAlbum

  index: number

  navigate: (path: string) => void
}) {
  const coverIndex = album.photos.findIndex(
    (photo) => photo.src === album.cover,
  )

  const initialFramePhotos = [
    album.photos[2] ?? album.photos[0],

    album.photos[coverIndex] ?? album.photos[0],

    album.photos[1] ?? album.photos[0],
  ]

  const [framePhotos, setFramePhotos] = useState<VisualPhoto[]>(
    () => initialFramePhotos,
  )

  const framePhotosRef = useRef(framePhotos)

  const [slide, setSlide] = useState<FrameSlide | null>(null)

  const slideRef = useRef<FrameSlide | null>(null)

  const [isPreviewing, setIsPreviewing] = useState(false)

  const [isOpening, setIsOpening] = useState(false)

  const nextPhotoIndex = useRef((coverIndex + 1) % album.photos.length)

  const previewInterval = useRef<number | null>(null)

  const navigationTimeout = useRef<number | null>(null)

  const slideFrame = useRef<number | null>(null)

  const slideTimeout = useRef<number | null>(null)

  const slug = album.title.toLowerCase().replace(/\s+/g, "-")

  const updateFramePhotos = (nextPhotos: VisualPhoto[]) => {
    framePhotosRef.current = nextPhotos

    setFramePhotos(nextPhotos)
  }

  const clearSlideTimers = () => {
    if (slideFrame.current !== null) {
      window.cancelAnimationFrame(slideFrame.current)

      slideFrame.current = null
    }

    if (slideTimeout.current !== null) {
      window.clearTimeout(slideTimeout.current)

      slideTimeout.current = null
    }
  }

  const finishSlide = () => {
    const activeSlide = slideRef.current

    if (!activeSlide) return

    clearSlideTimers()

    updateFramePhotos([
      activeSlide.incomingPhoto,

      framePhotosRef.current[0],

      framePhotosRef.current[1],
    ])

    slideRef.current = null

    setSlide(null)
  }

  const startSlide = () => {
    if (slideRef.current || album.photos.length < 2) return

    const direction: SlideDirection = "right"

    const incomingPhoto =
      album.photos[nextPhotoIndex.current] ?? album.photos[0]

    const nextSlide: FrameSlide = {
      direction,

      phase: "prepare",

      incomingPhoto,

      trackPhotos: [incomingPhoto, ...framePhotosRef.current],
    }

    slideRef.current = nextSlide

    setSlide(nextSlide)

    nextPhotoIndex.current = (nextPhotoIndex.current + 1) % album.photos.length

    slideFrame.current = window.requestAnimationFrame(() => {
      slideFrame.current = window.requestAnimationFrame(() => {
        slideFrame.current = null

        const activeSlide = slideRef.current

        if (!activeSlide) return

        const animatedSlide = { ...activeSlide, phase: "animate" as const }

        slideRef.current = animatedSlide

        setSlide(animatedSlide)

        slideTimeout.current = window.setTimeout(finishSlide, 760)
      })
    })
  }

  const stopPreview = (finishActiveSlide = false) => {
    if (previewInterval.current !== null) {
      window.clearInterval(previewInterval.current)

      previewInterval.current = null
    }

    setIsPreviewing(false)

    if (finishActiveSlide) {
      finishSlide()

      return
    }

    if (slideRef.current?.phase === "prepare") {
      clearSlideTimers()

      slideRef.current = null

      setSlide(null)
    }
  }

  const startPreview = () => {
    if (isOpening || previewInterval.current !== null) return

    setIsPreviewing(true)

    startSlide()

    previewInterval.current = window.setInterval(startSlide, 1450)
  }

  const openAlbum = () => {
    if (isOpening) return

    stopPreview(true)

    setIsOpening(true)

    updateFramePhotos(initialFramePhotos)

    navigationTimeout.current = window.setTimeout(
      () => navigate(`/visual/${slug}`),

      albumTransitionDuration,
    )
  }

  useEffect(
    () => () => {
      if (previewInterval.current !== null) {
        window.clearInterval(previewInterval.current)
      }

      clearSlideTimers()

      if (navigationTimeout.current !== null) {
        window.clearTimeout(navigationTimeout.current)
      }
    },

    [],
  )

  return (
    <article
      className={`visual-collection visual-collection-${index % 3}`}
      data-reveal
    >
      <button
        className={`visual-collection-card${isOpening ? " is-opening" : ""}${
          isPreviewing ? " is-previewing" : ""
        }`}
        type="button"
        onClick={openAlbum}
        onMouseEnter={startPreview}
        onMouseLeave={() => stopPreview()}
        onFocus={startPreview}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            stopPreview()
          }
        }}
        aria-label={`View ${album.title}, ${album.photos.length} photos`}
        aria-busy={isOpening}
      >
        <span className="archive-folder" aria-hidden="true">
          <span className="archive-card-heading">
            <span className="archive-card-mark">VISUAL ARCHIVE</span>
            <span className="archive-card-index">
              {String(index + 1).padStart(2, "0")}{" "}
              <span aria-hidden="true">—</span>{" "}
              {String(album.photos.length).padStart(2, "0")}
            </span>
          </span>
          <span
            className={[
              "archive-frame-track",

              slide ? `is-sliding-${slide.direction}` : "",

              slide?.phase === "animate" ? "is-animating" : "",
            ]

              .filter(Boolean)

              .join(" ")}
            onTransitionEnd={(event) => {
              if (
                event.target === event.currentTarget &&
                event.propertyName === "transform"
              ) {
                finishSlide()
              }
            }}
          >
            {(slide?.trackPhotos ?? framePhotos).map((photo, frameIndex) => {
              const isVisibleFrame = slide ? frameIndex > 0 : true

              const visibleFrameIndex = slide ? frameIndex - 1 : frameIndex

              const isCoverFrame =
                isVisibleFrame &&
                visibleFrameIndex === 1 &&
                photo.src === album.cover

              return (
                <span
                  className={[
                    "archive-paper",

                    isVisibleFrame ? "is-visible-frame" : "is-entering-frame",

                    `archive-paper-${frameIndex % 3}`,
                  ].join(" ")}
                  key={`${frameIndex}-${photo.src}`}
                >
                  <img
                    className={[
                      "archive-frame-image",

                      isOpening && isCoverFrame ? "is-transitioning-cover" : "",
                    ]

                      .filter(Boolean)

                      .join(" ")}
                    src={photo.src}
                    alt=""
                    loading="lazy"
                  />
                </span>
              )
            })}
          </span>
          <span className="archive-folder-pocket">
            <span className="archive-folder-label">
              <span className="visual-card-category">
                {album.category}
                {album.year && ` · ${album.year}`}
              </span>
              <span className="visual-card-title">{album.title}</span>
              <span className="visual-card-total">{`${String(album.photos.length).padStart(2, "0")} frames · hover to preview`}</span>
            </span>
            <span className="visual-card-action">↗</span>
          </span>
        </span>
      </button>
    </article>
  )
}

export function VisualArchive({
  navigate,

  compact = false,
}: {
  navigate: (path: string) => void

  compact?: boolean
}) {
  const [filter, setFilter] = useState<VisualFilter>("All")

  const filters: VisualFilter[] = [
    "All",

    "Photography",

    "Graphic Design",

    "Videography",
  ]

  const filteredAlbums =
    filter === "All"
      ? visualAlbums
      : filter === "Videography"
        ? []
        : visualAlbums.filter((album) => album.category === filter)

  const visibleAlbums = compact
    ? filteredAlbums.filter((album) => album.featured).slice(0, 3)
    : filteredAlbums

  return (
    <section
      className={`visual-archive${compact ? " is-compact" : ""}`}
      id={compact ? undefined : "visual-archive"}
      aria-labelledby={compact ? undefined : "visual-archive-title"}
    >
      <div className="visual-archive-heading">
        <div>
          <p className="eyebrow">Beyond digital products · 03</p>
          <h2 id={compact ? undefined : "visual-archive-title"}>
            VISUAL ARCHIVE.
          </h2>
        </div>
        <p>
          Photography, graphic design, and videography exploring people, places,
          and visual stories.
        </p>
      </div>

      <div className="visual-archive-toolbar">
        <div className="visual-filters" aria-label="Filter visual albums">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={filter === item ? "is-active" : ""}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="visual-count">
          {String(visibleAlbums.length).padStart(2, "0")} /{" "}
          {String(filteredAlbums.length).padStart(2, "0")} collections
        </span>
      </div>

      <div className="visual-collection-grid">
        {visibleAlbums.map((album, index) => {
          return (
            <VisualCollectionCard
              key={album.title}
              album={album}
              index={index}
              navigate={navigate}
            />
          )
        })}
      </div>

      {filter === "Videography" && (
        <div className="visual-empty-state" role="status">
          <span className="visual-empty-index">03 / IN MOTION</span>
          <h3>VIDEO STORIES ARE ON THE WAY.</h3>
          <p>
            Videography projects will appear here as soon as the video
            collection is added.
          </p>
        </div>
      )}

      {compact && (
        <button
          className="text-link visual-archive-link"
          onClick={() => navigate("/work")}
        >
          Explore all visual work <span>→</span>
        </button>
      )}
    </section>
  )
}
