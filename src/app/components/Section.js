'use client';

export default function Section({ title, children, id }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  )
}