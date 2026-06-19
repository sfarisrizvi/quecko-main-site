import React from 'react'

const logos = Array.from({ length: 22 }, (_, i) => `/Assets/landing/trust/${i + 1}.svg`)

const Trusted = () => {
  return (
    <section className="trusted-section">
      <div className="custom-container">
        <h6>trusted by</h6>
      </div>
      <div className="trusted-marquee-wrapper">
        <div className="trusted-marquee-track">
          {logos.map((src, i) => (
            <img key={i} src={src} alt={`trusted-${i + 1}`} className="trusted-logo" />
          ))}
          {logos.map((src, i) => (
            <img key={`dup-${i}`} src={src} alt={`trusted-dup-${i + 1}`} className="trusted-logo" aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trusted
