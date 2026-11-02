export function CaseStudyDevice({
  image,

  title,

  mobileImage,
}: {
  image: string

  title: string

  mobileImage?: string
}) {
  return (
    <div className={`case-device-stage${mobileImage ? " has-phone" : ""}`}>
      <div className="case-laptop">
        <div className="case-laptop-screen">
          <div className="case-screen-chrome" aria-hidden="true">
            <span className="frame-dots">
              <i />
              <i />
              <i />
            </span>
            <span>{title} · Project preview</span>
            <span className="frame-menu">•••</span>
          </div>
          <div className="case-laptop-content">
            <img src={image} alt={`${title} project screen`} />
          </div>
        </div>
        <div className="case-laptop-base" aria-hidden="true" />
      </div>
      {mobileImage && (
        <div className="case-phone" aria-label={`${title} mobile preview`}>
          <span className="case-phone-speaker" aria-hidden="true" />
          <img src={mobileImage} alt={`${title} mobile screen`} />
          <span className="case-phone-home" aria-hidden="true" />
        </div>
      )}
    </div>
  )
}
