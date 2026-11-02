import { Footer } from "../components/SiteChrome"

import type { VisualAlbum } from "../data/visuals"

export function VisualAlbumPage({
  album,

  navigate,
}: {
  album: VisualAlbum

  navigate: (path: string) => void
}) {
  const coverPhoto = album.photos.find((photo) => photo.src === album.cover)

  const galleryPhotos = album.photos

  return (
    <main className="visual-album-page">
      <section className="visual-album-intro" data-reveal>
        <button
          className="back-link visual-album-back"
          onClick={() => navigate("/work")}
        >
          ← Back to visual archive
        </button>
        <div className="visual-album-heading">
          <div>
            <p className="eyebrow">
              {album.category}
              {album.year && ` · ${album.year}`} · Photo story
            </p>
            <h1>{album.title}</h1>
            <p className="visual-album-description">{album.description}</p>
          </div>
          <p className="visual-album-total">
            <strong>{String(album.photos.length).padStart(2, "0")}</strong>
            <span>frames in this story</span>
          </p>
        </div>
      </section>

      {coverPhoto && (
        <figure className="visual-album-cover">
          <img
            className="visual-album-cover-image"
            src={coverPhoto.src}
            alt={coverPhoto.alt}
          />
          <figcaption>
            <span>01 / {String(album.photos.length).padStart(2, "0")}</span>
            <span>{coverPhoto.alt}</span>
          </figcaption>
        </figure>
      )}

      <section
        className="visual-photo-gallery"
        aria-label={`${album.title} photo gallery`}
      >
        <div className="visual-gallery-heading" data-reveal>
          <p className="eyebrow">The collection</p>
          <span>
            Moving archive · {String(album.photos.length).padStart(2, "0")}{" "}
            photographs
          </span>
        </div>
        <div
          className="visual-photo-marquee"
          aria-label="Automatically moving photo gallery"
          tabIndex={0}
        >
          <div
            className="visual-photo-track"
            style={{ animationDuration: `${galleryPhotos.length * 2.1}s` }}
          >
            {[false, true].map((isDuplicate) => (
              <div
                className="visual-photo-group"
                key={isDuplicate ? "duplicate" : "original"}
                aria-hidden={isDuplicate || undefined}
              >
                {galleryPhotos.map((photo) => (
                  <figure className="visual-photo-card" key={photo.src}>
                    <img
                      src={photo.src}
                      alt={isDuplicate ? "" : photo.alt}
                      loading={isDuplicate ? "eager" : "lazy"}
                    />
                    <figcaption>
                      <span>
                        {String(
                          album.photos.findIndex(
                            (item) => item.src === photo.src,
                          ) + 1,
                        ).padStart(2, "0")}
                      </span>
                      <span>{photo.alt}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer navigate={navigate} />
    </main>
  )
}
