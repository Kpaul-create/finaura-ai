'use client';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title">YOUR COLLECTION, DIGITALLY STYLED.</h2>
          <p className="hero-subtitle">
            No shipping. No damage. No logistics. Just results.
          </p>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 120px 0;
          text-align: center;
          border-bottom: 1px solid #333;
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 300;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.8;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        
        /* Tablet */
        @media (max-width: 1024px) {
          .hero {
            padding: 100px 0;
          }
          .hero-title {
            font-size: 2.5rem;
          }
        }
        
        /* Mobile */
        @media (max-width: 768px) {
          .hero {
            padding: 80px 0;
          }
          .hero-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          .hero-subtitle {
            font-size: 1.125rem;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .hero {
            padding: 60px 0;
          }
          .hero-title {
            font-size: 1.75rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}